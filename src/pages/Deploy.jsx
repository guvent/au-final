import React, { useEffect } from "react";
import DeployView from "../views/DeployView";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

export default function Deploy() {
    const navigator = useNavigate();
    const account = useAccount();

    const goNext = () => {
        setTimeout(() => {
            navigator("/");
        }, 1000 * 60);
    };

    useEffect(() => {
        if (!account || !account.isConnected) {
            globalThis.location.href = "/";
        }
    }, [account]);

    return (
        <section className="py-8 md:pb-32 bg-white">
            <DeployView onNext={goNext} />
        </section>
    );
}
