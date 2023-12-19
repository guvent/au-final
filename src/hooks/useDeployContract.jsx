import { useNetwork } from "wagmi";
import { useAppSelector } from "../app/hooks";
import { createPublicClient, http, parseGwei } from "viem";

export default function useDeployContract() {
    const { chain } = useNetwork();

    const walletClient = useAppSelector((state) => state.default.walletClient);
    const { abi, bytecode } = useAppSelector((state) => state.default.details);

    const connect = async () => {
        return walletClient.account;
    };

    const deploy = async () => {
        return await walletClient.deployContract({
            account: walletClient.account,
            gas: parseGwei("0.01"),
            chain,
            bytecode,
            abi,
            args: [walletClient.account.address],
        });
    };

    const check = async (hash) => {
        return await createPublicClient({
            chain,
            transport: http(),
        }).getTransactionReceipt({
            hash,
        });
    };

    return { connect, deploy, check };
}
