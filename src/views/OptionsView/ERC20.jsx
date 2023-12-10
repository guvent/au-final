import React, { useState } from "react";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import Textbox from "../../components/Textbox";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

export default function ERC20() {
    const navigator = useNavigate();
    const dispatch = useAppDispatch();
    const options = useAppSelector((state) => state.default.options);

    const [erc20, setErc20] = useState({
        type: "erc20",
        mintable: true,
        pausable: true,
        burnable: true,
        permit: false,
        votes: false,
        flashmint: false,
        premint: "",
    });

    const handleContinue = () => {
        dispatch({
            type: "default/fillOptions",
            payload: {
                name: options.name,
                symbol: options.symbol,
                ...erc20,
            },
        });
        navigator("/code");
    };

    return (
        <div onClick={() => console.log()} className="w-full md:w-1/2 lg:w-1/3">
            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-red-600 rounded-lg">
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                        />
                    </svg>
                </div>
                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                    ERC20 Token
                </h3>
                <hr className="my-4 w-full min-w-max" />
                <Textbox
                    small
                    placeholder={"Pre-Mint value ex. 1000000"}
                    type={"number"}
                    value={erc20.premint}
                    onChange={(v) => setErc20((s) => ({ ...s, premint: v }))}
                />
                <hr className="my-4 w-full min-w-max" />
                <p className="text-coolGray-500 font-medium py-4 justify-center inline-flex flex-col h-80">
                    <Checkbox
                        id={"erc-20-mintable"}
                        title={"Mintable"}
                        description={"Default checkbox"}
                        value={erc20.mintable}
                        onChange={(v) =>
                            setErc20((s) => ({ ...s, mintable: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-20-pausable"}
                        title={"Pausable"}
                        description={"Default checkbox"}
                        value={erc20.pausable}
                        onChange={(v) =>
                            setErc20((s) => ({ ...s, pausable: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-20-burnable"}
                        title={"Burnable"}
                        description={"Default checkbox"}
                        value={erc20.burnable}
                        onChange={(v) =>
                            setErc20((s) => ({ ...s, burnable: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-20-permit"}
                        title={"Permit"}
                        description={"Default checkbox"}
                        value={erc20.permit}
                        onChange={(v) => setErc20((s) => ({ ...s, permit: v }))}
                    />
                    <Checkbox
                        id={"erc-20-votes"}
                        title={"Votes"}
                        description={"Default checkbox"}
                        value={erc20.votes}
                        onChange={(v) => setErc20((s) => ({ ...s, votes: v }))}
                    />
                    <Checkbox
                        id={"erc-20-flashmint"}
                        title={"Flash Mint"}
                        description={"Default checkbox"}
                        value={erc20.flashmint}
                        onChange={(v) =>
                            setErc20((s) => ({ ...s, flashmint: v }))
                        }
                    />
                </p>
                <hr className="w-full min-w-max mb-4 mt-0 pt-0" />
                <Button title={"Continue"} onClick={handleContinue} />
            </div>
        </div>
    );
}
