import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import useSteps from "../../hooks/useSteps";
import Button from "../../components/Button";
import { useNetwork } from "wagmi";

export default function DeployView({ onNext }) {
    const { chain } = useNetwork();

    const [results, setResults] = useState({
        address: "...",
        txId: "...",
        link: "...",
    });

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

    const handleNextStep = () => {
        next("success");
    };

    return (
        <>
            <Header />

            <div className="items-center flex flex-col w-full mt-10">
                <Button title="Success" onClick={handleNextStep} />
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
