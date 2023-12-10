import React from "react";

export default function Header({ onDeploy }) {
    return (
        <div className="bg-tarnsparent">
            <nav className="flex justify-between p-4">
                <div className="flex justify-between items-center w-full">
                    <div className="w-1/2 xl:w-1/3">
                        <div className="inline-flex h-14 w-14 mx-auto items-center justify-center text-white bg-black rounded-lg">
                            <svg
                                className="w-7 h-7 text-gray-800 dark:text-white"
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
                    </div>
                    <div className="block text-3xl !w-[240px]">Code Review</div>
                    <div className="w-1/2 xl:w-1/3">
                        <div className="flex items-center justify-end">
                            <button
                                onClick={() =>
                                    typeof onDeploy === "function" && onDeploy()
                                }
                                className="
                                inline-block py-2 px-8 text-lg leading-5text-green-50 text-white
                                bg-green-600 hover:bg-green-700 font-medium focus:ring-2
                                focus:ring-green-500 focus:ring-opacity-50 rounded-md"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
