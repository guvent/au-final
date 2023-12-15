import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNetwork, useSwitchNetwork } from "wagmi";
import Table from "../../components/Table";
import Button from "../../components/Button";
import Output from "./Output";
import useCompileContract from "../../hooks/useCompileContract";

export default function DeployView() {
    const [compile] = useCompileContract();

    const [opened, setOpened] = useState(false);

    const { chain } = useNetwork();
    const { isLoading, switchNetwork } = useSwitchNetwork();

    const [compiled, setCompiled] = useState(null);

    const sendToChain = () => {
        console.log(chain);
    };

    const handleClickChain = (ch) => {
        if (ch?.id === chain?.id) return;
        switchNetwork?.(ch?.id);
        console.log(chain);
    };

    const handleDeploy = () => {
        if (!compiled) {
            compile().then((v) => {
                console.log(v);
                setCompiled(v);
            });
        } else {
            sendToChain();
        }
    };

    const handleDownloadAbi = () => {};

    const handleDownloadAll = () => {};

    const handleDeployChain = () => {};

    useEffect(() => {
        setOpened(!isLoading);
        setCompiled(null);
    }, [isLoading]);

    const headers = ["Name", "Currency", "Symbol", "Action"];

    return (
        <div>
            <Header
                onClick={handleClickChain}
                opened={opened}
                selected={chain?.id}
            />
            {opened && chain && (
                <Table
                    headers={headers}
                    columns={[
                        chain.name,
                        chain.nativeCurrency.name,
                        chain.nativeCurrency.symbol,
                        <Button
                            key={0}
                            title={compiled ? "Deploy" : "Compile"}
                            onClick={handleDeploy}
                            className={"mx-4 py-2 px-10 rounded-md hover:shadow-md text-white text-md ".concat(
                                compiled
                                    ? "bg-green-700 hover:bg-green-800"
                                    : "bg-red-700 hover:bg-red-800",
                            )}
                        />,
                    ]}
                />
            )}

            <hr className="mx-auto border border-gray-400 w-5/6 my-4" />
            <div className="mx-14 py-2 px-10 flex flex-col">
                <div className="w-full px-10 py-4 justify-center flex text-black font-bold text-xl">
                    Compile smart contract after take the ABI and Bytecode.
                </div>
                <div className="w-full px-10 py-2 justify-center flex">
                    <Button
                        title={"Download ABI"}
                        onClick={handleDownloadAbi}
                        disabled={!compiled}
                        className={
                            "mx-4 my-1 py-2 px-10 rounded-md bg-blue-700 hover:bg-blue-800 hover:shadow-md text-white text-md"
                        }
                    />
                    <Button
                        title={"Download All"}
                        onClick={handleDownloadAll}
                        disabled={!compiled}
                        className={
                            "mx-4 my-1 py-2 px-10 rounded-md bg-purple-700 hover:bg-purple-800 hover:shadow-md text-white text-md"
                        }
                    />
                </div>
            </div>

            <hr className="mx-auto border border-gray-400 w-5/6 my-4" />
            <div className="mx-14 py-2 px-10 flex flex-col">
                <div className="w-full px-10 py-4 justify-center flex text-black font-bold text-xl">
                    Deploy to selected network your instrument.
                </div>
                <div className="w-full px-10 py-2 justify-center flex">
                    <Button
                        title={`Deploy To ${
                            opened ? chain.name : "-Not Selected-"
                        }`}
                        onClick={handleDeployChain}
                        disabled={!compiled}
                        className={
                            "w-[400px] h-[54px] mx-4 my-1 py-2 px-10 rounded-md bg-green-700 hover:bg-green-800 hover:shadow-md text-white text-lg"
                        }
                    />
                </div>
            </div>
        </div>
    );
}
