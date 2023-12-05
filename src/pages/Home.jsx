import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";

export default function Home() {
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
            <div>dflmdm</div>
        </section>
    );
}
