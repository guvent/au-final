import React from "react";
import Header from "../components/Header";
import Highlight from "../components/Highlight";
import { useAppDispatch } from "../app/hooks";

export default function Home() {
    const dispatch = useAppDispatch();

    const build = () => {
        dispatch({
            type: "default/fillOptions",
            payload: {
                type: "erc1155",
                name: "ExampleToken",
                symbol: "ETK",
                mintable: true,
                pausable: true,
                burnable: true,
                premint: "1000000",
            },
        });

        // const contract = erc721.print({
        //   name: 'ExampleToken',
        //   symbol: 'ETK',
        //   burnable: true,
        //   premint: '1000000',
        // });

        // const contract = erc1155.print({
        //   name: 'ExampleToken',
        //   symbol: 'ETK',
        //   burnable: true,
        //   pausable: true,
        //   premint: '1000000',
        // });

        // setCode(contract);
    };

    return (
        <section className="relative bg-white overflow-hidden">
            <Header onDeploy={build} />
            <Highlight />
        </section>
    );
}
