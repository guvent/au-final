import React, { useEffect, useState } from "react";
import Textbox from "../../components/Textbox";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export default function Header() {
    const dispatch = useAppDispatch();
    const options = useAppSelector((state) => state.default.options);

    const [properties, setProperties] = useState({
        name: "ExampleToken",
        symbol: "ETK",
    });

    useEffect(() => {
        dispatch({
            type: "default/fillOptions",
            payload: {
                ...options,
                ...properties,
            },
        });
    }, [properties]);

    return (
        <div className="md:max-w-4xl my-8 mx-auto text-center">
            <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter text-orange-900">
                Choose a contract you want to make
            </h1>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">
                ERC-20, ERC-721, and ERC-1155 are three prominent Ethereum token
                standards, each serving a distinct purpose within the Ethereum
                ecosystem.
            </p>
            <hr className="my-8" />
            <p className="inline-flex flex-row">
                <Textbox
                    id={"name"}
                    label={"Name"}
                    placeholder={"ex. Example Token"}
                    value={properties.name}
                    onChange={(v) => setProperties((s) => ({ ...s, name: v }))}
                />
                <Textbox
                    id={"symbol"}
                    label={"Symbol"}
                    placeholder={"ex. Example Token"}
                    value={properties.symbol}
                    onChange={(v) =>
                        setProperties((s) => ({ ...s, symbol: v }))
                    }
                />
            </p>
        </div>
    );
}
