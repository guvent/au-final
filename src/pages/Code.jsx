import React, { useEffect } from "react";
import Header from "../views/CodeView/Header";
import Highlight from "../components/Highlight";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

export default function Code() {
    const navigator = useNavigate();
    const account = useAccount();

    const build = () => {
        navigator("/review");
    };

    useEffect(() => {
        if (!account || !account.isConnected) {
            globalThis.location.href = "/";
        }
    }, [account]);

    return (
        <section className="relative bg-white overflow-hidden">
            <Header onDeploy={build} />
            <Highlight />
        </section>
    );
}
