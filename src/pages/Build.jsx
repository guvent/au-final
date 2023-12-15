import React, { useEffect } from "react";
import BuildView from "../views/BuildView";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";

export default function Build() {
    const navigator = useNavigate();
    const account = useAccount();

    const goNext = () => {
        navigator("/deploy");
    };

    useEffect(() => {
        if (!account || !account.isConnected) {
            globalThis.location.href = "/";
        }
    }, [account]);

    return (
        <section className="py-8 md:pb-32 bg-white">
            <BuildView onNext={goNext} />
        </section>
    );
}
