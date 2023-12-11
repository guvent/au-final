import React, { useState } from "react";
import Button from "../../components/Button";

export default function Header({ onClick }) {
    const [chain, setChain] = useState(null);

    const handleClickChain = (ch) => {
        setChain(ch);

        typeof onClick === "function" && onClick(ch);
    };

    return (
        <div className="container mx-auto">
            <div
                className={"md:max-w-4xl mx-auto text-center transition-all duration-500 ".concat(
                    chain ? "mt-10" : "mt-72",
                )}
            >
                <h1
                    className={"text-3xl md:text-4xl leading-tight font-bold tracking-tighter transition-all duration-500 ".concat(
                        chain ? "mb-6" : "mb-28",
                    )}
                >
                    Select a chain network and deploy your instrument.
                </h1>
            </div>
            <div className="flex flex-wrap pt-18 w-full items-center justify-center">
                <Button
                    title={"Ethereum Goerli"}
                    className={
                        "mx-4 py-4 px-8 rounded-md bg-blue-700 hover:bg-blue-800 shadow-sm hover:shadow-md text-white text-md font-bold"
                    }
                    onClick={() => handleClickChain("goerli")}
                />
                <Button
                    title={"Binance Testnet"}
                    className={
                        "mx-4 py-4 px-8 rounded-md bg-yellow-400 hover:bg-yellow-500 shadow-sm hover:shadow-md text-white text-md font-bold"
                    }
                    onClick={() => handleClickChain("bnb")}
                />
                <Button
                    title={"Avalanche Snowtrace"}
                    className={
                        "mx-4 py-4 px-8 rounded-md bg-orange-600 hover:bg-orange-700 shadow-sm hover:shadow-md text-white text-md font-bold"
                    }
                    onClick={() => handleClickChain("snowtrace")}
                />
                <Button
                    title={"Polygon Mumbai"}
                    className={
                        "mx-4 py-4 px-8 rounded-md bg-pink-700 hover:bg-pink-800 shadow-sm hover:shadow-md text-white text-md font-bold"
                    }
                    onClick={() => handleClickChain("mumbai")}
                />
            </div>
        </div>
    );
}
