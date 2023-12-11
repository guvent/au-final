import React from "react";
import Button from "../../components/Button";
import Networks from "../../components/Wallet/Networks";

export default function Header({ selected, opened, onClick }) {
    const handleClickChain = (ch) => {
        typeof onClick === "function" && onClick(ch);
    };

    return (
        <div className="container mx-auto">
            <div
                className={"md:max-w-4xl mx-auto text-center transition-all duration-500 ".concat(
                    opened ? "mt-10" : "mt-72",
                )}
            >
                <h1
                    className={"text-3xl md:text-4xl leading-tight font-bold tracking-tighter transition-all duration-500 ".concat(
                        opened ? "mb-6" : "mb-28",
                    )}
                >
                    Select a chain network and deploy your instrument.
                </h1>
            </div>
            <div className="flex flex-wrap pt-18 w-full items-center justify-center">
                <Button
                    title={Networks.Goerli.title}
                    className={"mx-4 py-4 px-8 rounded-md bg-blue-700 hover:bg-blue-800 hover:shadow-md text-white text-md font-bold ".concat(
                        selected === Networks.Goerli.id
                            ? "shadow-md shadow-black"
                            : "shadow-md",
                    )}
                    onClick={() => handleClickChain(Networks.Goerli)}
                />
                <Button
                    title={Networks.Binance.title}
                    className={"mx-4 py-4 px-8 rounded-md bg-yellow-400 hover:bg-yellow-500 hover:shadow-md text-white text-md font-bold ".concat(
                        selected === Networks.Binance.id
                            ? "shadow-md shadow-black"
                            : "shadow-md",
                    )}
                    onClick={() => handleClickChain(Networks.Binance)}
                />
                <Button
                    title={Networks.Fuji.title}
                    className={"mx-4 py-4 px-8 rounded-md bg-orange-600 hover:bg-orange-700 hover:shadow-md text-white text-md font-bold ".concat(
                        selected === Networks.Fuji.id
                            ? "shadow-md shadow-black"
                            : "shadow-md",
                    )}
                    onClick={() => handleClickChain(Networks.Fuji)}
                />
                <Button
                    title={Networks.Mumbai.title}
                    className={"mx-4 py-4 px-8 rounded-md bg-pink-700 hover:bg-pink-800 hover:shadow-md text-white text-md font-bold ".concat(
                        selected === Networks.Mumbai.id
                            ? "shadow-md shadow-black"
                            : "shadow-md",
                    )}
                    onClick={() => handleClickChain(Networks.Mumbai)}
                />
            </div>
        </div>
    );
}
