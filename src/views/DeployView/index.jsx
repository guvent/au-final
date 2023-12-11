import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNetwork, useSwitchNetwork } from "wagmi";
import Table from "../../components/Table";
import Button from "../../components/Button";
import Output from "./Output";

export default function DeployView() {
    const [opened, setOpened] = useState(false);

    const { chain } = useNetwork();
    const { isLoading, switchNetwork } = useSwitchNetwork();

    const handleClickChain = (ch) => {
        if (ch?.id === chain?.id) return;
        switchNetwork?.(ch?.id);
        console.log(chain);
    };

    const handleDeploy = () => {
        console.log("deployy.....");
    };

    useEffect(() => {
        setOpened(!isLoading);
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
                            title={"Deploy"}
                            onClick={handleDeploy}
                            className={
                                "mx-4 py-2 px-10 rounded-md bg-gray-700 hover:bg-gray-800 hover:shadow-md text-white text-md"
                            }
                        />,
                    ]}
                />
            )}
            {opened && (
                <>
                    <hr className="mx-auto border border-black w-5/6 my-4" />
                    <Output inputs={chain} />
                </>
            )}
        </div>
    );
}
