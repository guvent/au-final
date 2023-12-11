import React, { useEffect } from "react";
import OptionsView from "../views/OptionsView";
import { useAccount } from "wagmi";

export default function Options() {
    const account = useAccount();

    useEffect(() => {
        if (!account || !account.isConnected) {
            globalThis.location.href = "/";
        }
    }, [account]);

    return (
        <section className="py-8 md:pb-32 bg-white">
            <OptionsView />
        </section>
    );
}
