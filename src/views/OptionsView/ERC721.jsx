import React, { useState } from "react";
import Checkbox from "../../components/Checkbox";
import Textbox from "../../components/Textbox";
import Button from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

export default function ERC721() {
    const navigator = useNavigate();
    const dispatch = useAppDispatch();
    const options = useAppSelector((state) => state.default.options);

    const [erc721, setErc721] = useState({
        kind: "ERC721",
        baseUri: "",
        uriStorage: false,
        enumerable: false,
        incremental: true,
        mintable: true,
        pausable: true,
        burnable: true,
        votes: false,
        upgradeable: false,
    });

    const handleContinue = () => {
        dispatch({
            type: "default/fillOptions",
            payload: {
                name: options.name,
                symbol: options.symbol,
                ...erc721,
            },
        });
        navigator("/code");
    };

    return (
        <div onClick={() => console.log()} className="w-full md:w-1/2 lg:w-1/3">
            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-600 rounded-lg">
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 18"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
                        />
                    </svg>
                </div>
                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                    ERC721 Token
                </h3>
                <hr className="my-4 w-full min-w-max" />
                <Textbox
                    small
                    placeholder={"Base URI"}
                    type={"url"}
                    value={erc721.baseUri}
                    onChange={(v) => setErc721((s) => ({ ...s, baseUri: v }))}
                />
                <hr className="my-4 w-full min-w-max" />
                <p className="text-coolGray-500 font-medium py-4 justify-center inline-flex flex-col h-80">
                    <Checkbox
                        id={"erc-721-uriStorage"}
                        title={"URI Storage"}
                        description={"Default checkbox"}
                        value={erc721.uriStorage}
                        onChange={(v) =>
                            setErc721((s) => ({ ...s, uriStorage: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-721-mintable"}
                        title={"Mintable"}
                        description={"Default checkbox"}
                        value={erc721.mintable}
                        onChange={(v) =>
                            setErc721((s) => ({ ...s, mintable: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-721-pausable"}
                        title={"Pausable"}
                        description={"Default checkbox"}
                        value={erc721.pausable}
                        onChange={(v) =>
                            setErc721((s) => ({ ...s, pausable: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-721-burnable"}
                        title={"Burnable"}
                        description={"Default checkbox"}
                        value={erc721.burnable}
                        onChange={(v) =>
                            setErc721((s) => ({ ...s, burnable: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-721-votes"}
                        title={"Votes"}
                        description={"Default checkbox"}
                        value={erc721.votes}
                        onChange={(v) => setErc721((s) => ({ ...s, votes: v }))}
                    />
                    <Checkbox
                        id={"erc-721-incremental"}
                        title={"Incremental"}
                        description={"Default checkbox"}
                        value={erc721.incremental}
                        onChange={(v) =>
                            setErc721((s) => ({ ...s, incremental: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-721-enumerable"}
                        title={"Enumerable"}
                        description={"Default checkbox"}
                        value={erc721.enumerable}
                        onChange={(v) =>
                            setErc721((s) => ({ ...s, enumerable: v }))
                        }
                    />
                </p>
                <hr className="w-full min-w-max mb-4 mt-0 pt-0" />
                <Button title={"Continue"} onClick={handleContinue} />
            </div>
        </div>
    );
}
