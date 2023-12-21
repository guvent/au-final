import { useNetwork } from "wagmi";
import { useAppSelector } from "../app/hooks";
import { createPublicClient, http, parseGwei } from "viem";
import useSteps from "./useSteps";
import Waiter from "../app/waiter";
import { useState } from "react";

export default function useDeployContract() {
    const { chain } = useNetwork();

    const [complete, setComplete] = useState(false);
    const [info, setInfo] = useState({
        block: "...",
        number: "...",
        address: "...",
        txHash: "...",
        txIndex: "...",
        gasUsed: "...",
        status: "ready",
    });

    const walletClient = useAppSelector((state) => state.default.walletClient);
    const { abi, bytecode } = useAppSelector((state) => state.default.details);

    const [steps, next] = useSteps([
        `Initializing connect to ${chain?.name} network...`,
        "Request signature with your wallet for transaction...",
        "Deploy started, please wait until the complete operation...",
        `Preparing response from ${chain?.name} network please wait...`,
    ]);

    const connect = async () => {
        return walletClient.account;
    };

    const deploy = async (address) => {
        return await walletClient.deployContract({
            account: walletClient.account,
            gas: parseGwei("0.01"),
            chain,
            bytecode,
            abi,
            args: [address],
        });
    };

    const check = async (hash) => {
        return await createPublicClient({
            chain,
            transport: http(),
        }).waitForTransactionReceipt({
            hash,
        });
    };

    const start = async () => {
        setComplete(false);

        next("success");

        setInfo((s) => ({
            ...s,
            status: "pending",
        }));

        const account = await Waiter(async () => {
            const account = await connect();
            return account;
        })
            .then((account) => {
                next("success");
                return account;
            })
            .catch(() => next("failed"));

        const transaction = await Waiter(async () => {
            const transaction = await deploy(account.address);
            return transaction;
        })
            .then((transaction) => {
                next("success");
                return transaction;
            })
            .catch(() => next("failed"));

        const txTimer = setInterval(async function () {
            await check(transaction)
                .then((response) => {
                    console.log("status", response?.status, response);

                    if (typeof response === "object") {
                        setInfo({
                            block: response.blockHash.toString(),
                            number: response.blockNumber.toString(),
                            address: response.contractAddress.toString(),
                            txHash: response.transactionHash.toString(),
                            txIndex: response.transactionIndex.toString(),
                            gasUsed: response.gasUsed.toString(),
                            status: response.status,
                        });

                        next("success");
                        setComplete(true);
                        clearInterval(txTimer);
                        return;
                    }
                })
                .catch(console.error);
        }, 2000);
    };

    return [steps, start, info, complete];
}
