import React from "react";
import HomeView from "../views/HomeView";
import { useAccount } from "wagmi";

export default function Home() {
    const account = useAccount();

    const handleConnectWallet = (address) => {
        console.log("Connected::", address, account);
    };

    return (
        <section className="relative bg-white overflow-hidden">
            <HomeView onConnectWallet={handleConnectWallet} />
        </section>
    );
}
