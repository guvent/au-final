import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import useSteps from "../../hooks/useSteps";
import Button from "../../components/Button";
import { useNetwork } from "wagmi";
import useDeployContract from "../../hooks/useDeployContract";

export default function DeployView({ onNext }) {
    const { chain } = useNetwork();
    const [started, setStarted] = useState(false);

    const [results, setResults] = useState({
        address: "...",
        txId: "...",
        link: "...",
    });

    const { connect, deploy, check } = useDeployContract();

    // pending
    // wating
    // success
    // failed
    //

    const items = [
        `Initializing connect to ${chain?.name} network...`,
        "Request signature with your wallet for transaction...",
        "Deploy started, please wait until the complete operation...",
        `Preparing response from ${chain?.name} network please wait...`,
    ];

    const [steps, next] = useSteps(items);

    const handleNextStep = async () => {
        // 0xfee9b46551cfa9ccbfacb553605a738ee986edf4aaf11020007a4e1dbf14143d
        // 0x10eb47d4ee53be18e5e04b19a76efe1f17a2c451827a60764b019ff3f040ec7b
        // 0xaeb6e01e4be38bc406a74b1184ffa5bcade99083a8218dc85861a62bef74ba89
        //

        const deployed = await check(
            "0xfee9b46551cfa9ccbfacb553605a738ee986edf4aaf11020007a4e1dbf14143d",
        );

        console.log(deployed, "deploy");

        // next("success");
    };

    return (
        <>
            <div className="items-center flex flex-col w-full mt-10">
                <div className="w-96">
                    <Button
                        title={started ? "Processing..." : "Start Deployment"}
                        wide
                        disabled={started}
                        onClick={handleNextStep}
                    />
                </div>
            </div>

            <hr className="mx-auto border border-gray-400 w-5/6 my-10" />

            <div className="flex flex-col mx-auto">{steps}</div>

            <hr className="mx-auto border border-gray-400 w-5/6 my-10" />

            <Footer
                show={results.address || results.txId || results.link}
                address={results.address}
                txId={results.txId}
                link={results.link}
            />
        </>
    );
}
