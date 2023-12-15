import React from "react";
import Header from "./Header";
import Download from "./Download";
import Remix from "./Remix";
import { useNavigate } from "react-router-dom";

export default function ReviewView() {
    const navigator = useNavigate();

    const handleBuildChain = () => {
        navigator("/build");
    };

    return (
        <div className="container mx-auto">
            <Header />
            <div className="flex flex-wrap pt-18">
                <Download />
                <Remix />
                <div
                    className="w-full md:w-1/3 lg:w-1/3 px-4 cursor-pointer"
                    onClick={handleBuildChain}
                >
                    <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                        <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-600 rounded-lg">
                            <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 18"
                            >
                                <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
                                <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
                            </svg>
                        </div>
                        <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                            Build & Deploy
                        </h3>
                        <p className="text-coolGray-500 font-medium">
                            Get a deployed project in the blockchain. See
                            activity, revenue, and social metrics all in one
                            blockchain explorer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
