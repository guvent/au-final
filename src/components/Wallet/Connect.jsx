import React, { useEffect } from "react";

import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function Connect({ onConnected }) {
    const { address, isConnected } = useAccount();
    const { data: ensName } = useEnsName({ address });
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });
    const { disconnect } = useDisconnect();

    useEffect(() => {
        isConnected &&
            typeof onConnected === "function" &&
            onConnected(ensName ?? address);
    }, [isConnected]);

    return isConnected ? (
        <button
            onClick={() => disconnect()}
            className="
            inline-block py-5 px-7 w-full text-base border rounded-md
            text-blue-50 text-center bg-blue-600 hover:bg-blue-700"
        >
            Connected to {ensName ?? address}
        </button>
    ) : (
        <button
            className="
            inline-block py-5 px-7 w-full text-base border rounded-md
            text-green-50 text-center bg-green-600 hover:bg-green-700"
            onClick={() => connect()}
        >
            Connect Wallet
        </button>
    );
}
