import React, { useEffect } from "react";
import ReviewView from "../views/ReviewView";
import { useAccount } from "wagmi";

export default function Review() {
    const account = useAccount();

    useEffect(() => {
        if (!account || !account.isConnected) {
            globalThis.location.href = "/";
        }
    }, [account]);

    return (
        <section className="py-24 md:pb-32 bg-white">
            <ReviewView />
        </section>
    );
}
