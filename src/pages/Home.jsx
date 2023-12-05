import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";

import { useAccount, useConnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function Home() {
    const { address, isConnected } = useAccount();
    const { data: ensName } = useEnsName({ address });
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });

    const dispatch = useAppDispatch();

    const [erc20, setErc20] = useState({
        type: "erc20",
        name: "ExampleToken",
        symbol: "ETK",
        mintable: true,
        pausable: true,
        burnable: true,
        permit: true,
        votes: true,
        flashmint: true,
        premint: "1000000",
    });

    const [erc721, setErc721] = useState({
        type: "erc721",
        name: "ExampleToken",
        symbol: "ETK",
        baseUri: "",
        uriStorage: true,
        enumerable: true,
        incremental: true,
        mintable: true,
        pausable: true,
        burnable: true,
        votes: true,
    });

    const [erc1155, setErc1155] = useState({
        type: "erc1155",
        name: "ExampleToken",
        symbol: "ETK",
        uri: "",
        mintable: true,
        pausable: true,
        burnable: true,
        supply: true,
        updatableUri: true,
    });

    const build = () => {
        dispatch({
            type: "default/fillOptions",
            payload: erc20,
        });
    };

    return (
        <section className="relative bg-white overflow-hidden">
            {isConnected ? (
                <div>Connected to {ensName ?? address}</div>
            ) : (
                <button
                    className="
                    inline-block py-2 px-4 text-lg leading-5text-green-50 text-white
                    bg-green-500 hover:bg-green-600 font-medium focus:ring-2
                    focus:ring-green-500 focus:ring-opacity-50 rounded-md"
                    onClick={() => connect()}
                >
                    Connect Wallet
                </button>
            )}
        </section>
    );
}
