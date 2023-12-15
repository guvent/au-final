import React, { useState } from "react";
import Checkbox from "../../components/Checkbox";
import Textbox from "../../components/Textbox";
import Button from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

export default function ERC1155() {
    const navigator = useNavigate();
    const dispatch = useAppDispatch();
    const options = useAppSelector((state) => state.default.options);

    const [erc1155, setErc1155] = useState({
        kind: "ERC1155",
        uri: "",
        mintable: true,
        pausable: true,
        burnable: true,
        supply: false,
        updatableUri: false,
        upgradeable: false,
    });

    const handleContinue = () => {
        dispatch({
            type: "default/fillOptions",
            payload: {
                name: options.name,
                symbol: options.symbol,
                ...erc1155,
            },
        });
        navigator("/code");
    };

    return (
        <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-blue-600 rounded-lg">
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 18"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 3a3 3 0 1 1-1.614 5.53M15 12a4 4 0 0 1 4 4v1h-3.348M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
                        />
                    </svg>
                </div>
                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                    ERC1155 Token
                </h3>
                <hr className="my-4 w-full min-w-max" />
                <Textbox
                    small
                    placeholder={"URI"}
                    type={"url"}
                    value={erc1155.uri}
                    onChange={(v) => setErc1155((s) => ({ ...s, uri: v }))}
                />
                <hr className="my-4" />
                <p className="text-coolGray-500 font-medium py-4 justify-center inline-flex flex-col h-80">
                    <Checkbox
                        id={"erc-1155-updatableUri"}
                        title={"Updatable URI"}
                        description={"Default checkbox"}
                        value={erc1155.updatableUri}
                        onChange={(v) =>
                            setErc1155((s) => ({ ...s, updatableUri: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-1155-mintable"}
                        title={"Mintable"}
                        description={"Default checkbox"}
                        value={erc1155.mintable}
                        onChange={(v) =>
                            setErc1155((s) => ({ ...s, mintable: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-1155-pausable"}
                        title={"Pausable"}
                        description={"Default checkbox"}
                        value={erc1155.pausable}
                        onChange={(v) =>
                            setErc1155((s) => ({ ...s, pausable: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-1155-burnable"}
                        title={"Burnable"}
                        description={"Default checkbox"}
                        value={erc1155.burnable}
                        onChange={(v) =>
                            setErc1155((s) => ({ ...s, burnable: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-1155-supply"}
                        title={"Supply"}
                        description={"Default checkbox"}
                        value={erc1155.supply}
                        onChange={(v) =>
                            setErc1155((s) => ({ ...s, supply: v }))
                        }
                    />
                </p>
                <hr className="w-full min-w-max mb-4 mt-0 pt-0" />
                <Button title={"Continue"} onClick={handleContinue} />
            </div>
        </div>
    );
}
