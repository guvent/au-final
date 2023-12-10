import React from "react";
import Header from "./Header";

export default function DeployView() {
    return (
        <div className="container mx-auto">
            <Header />
            <div className="flex flex-wrap pt-18">
                <div className="w-full md:w-1/3 lg:w-1/3 px-4">
                    <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                        <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg">
                            <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 18"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                            Download as Hardhat Project
                        </h3>
                        <p className="text-coolGray-500 font-medium">
                            Download for more development and back up your
                            project at the same time.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/3 px-4">
                    <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                        <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg">
                            <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 1v4a1 1 0 0 1-1 1H1m5 8.514L4 12.5l2-2m4 4.014 2-2.014-2-2m5 7.5a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v16Z"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                            Sent to Remix IDE
                        </h3>
                        <p className="text-coolGray-500 font-medium">
                            Send for more development on the advanced
                            environment to <b>RemixIDE</b>
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/3 px-4">
                    <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                        <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg">
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
                            Deploy to Blockchain
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
