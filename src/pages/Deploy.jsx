import React, { useEffect } from "react";
import DeployView from "../views/DeployView";
import { useAccount } from "wagmi";

export default function Deploy() {
    const account = useAccount();

    useEffect(() => {
        if (!account || !account.isConnected) {
            globalThis.location.href = "/";
        }
    }, [account]);

    return (
        <section className="py-8 md:pb-32 bg-white">
            <DeployView />
        </section>
    );
}
