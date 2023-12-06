import React from "react";

export default function Header({ onDeploy }) {
    return (
        <div className="bg-tarnsparent">
            <nav className="flex justify-between p-6 px-4">
                <div className="flex justify-between items-center w-full">
                    <div className="w-1/2 xl:w-1/3">
                        <a className="block max-w-max" href="/">
                            <img
                                className="h-8"
                                src="/img/dots3-blue.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="text-3xl">Code Review</div>
                    <div className="w-1/2 xl:w-1/3">
                        <div className="flex items-center justify-end">
                            <button
                                onClick={() =>
                                    typeof onDeploy === "function" && onDeploy()
                                }
                                className="
                                inline-block py-2 px-4 text-lg leading-5text-green-50 text-white
                                bg-green-500 hover:bg-green-600 font-medium focus:ring-2
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
