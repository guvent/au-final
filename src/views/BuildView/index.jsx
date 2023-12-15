import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNetwork, useSwitchNetwork } from "wagmi";
import Table from "../../components/Table";
import Button from "../../components/Button";
import useCompileContract from "../../hooks/useCompileContract";
import useDownloadFile from "../../hooks/useDownloadFile";

export default function BuildView({ onNext }) {
    const { compile, options } = useCompileContract();

    const [opened, setOpened] = useState(false);

    const { chain } = useNetwork();
    const { isLoading, switchNetwork } = useSwitchNetwork();

    const [compiled, setCompiled] = useState(null);
    const [download] = useDownloadFile();

    const handleClickChain = (ch) => {
        if (ch?.id === chain?.id) return;
        switchNetwork?.(ch?.id);
    };

    const handleCompile = () => {
        compile().then((v) => {
            setCompiled(v);
        });
    };

    const handleDownloadAbi = () => {
        download(`${options.name}-${options.kind}-abi.json`, compiled.abi);
    };

    const handleDownloadAll = () => {
        download(`${options.name}-${options.kind}-all.json`, {
            abi: compiled.abi,
            opcodes: compiled.opcodes,
            bytecode: compiled.bytecode,
            sourceMap: compiled.sourceMap,
        });
    };

    const handleDeployChain = () => {
        onNext && typeof onNext === "function" && onNext();
    };

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
                            title={"Compile"}
                            onClick={handleCompile}
                            className={"mx-4 py-2 px-10 rounded-md hover:shadow-md text-white text-md ".concat(
                                "bg-red-700 hover:bg-red-800",
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
