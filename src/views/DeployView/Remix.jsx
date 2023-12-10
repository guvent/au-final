import React from "react";
import { useAppSelector } from "../../app/hooks";
import { printContract } from "@openzeppelin/wizard";

export function remixURL(code, upgradeable = false) {
    const remix = new URL("https://remix.ethereum.org");
    remix.searchParams.set("code", btoa(code).replace(/=*$/, ""));
    if (upgradeable) {
        remix.searchParams.set("deployProxy", upgradeable.toString());
    }
    return remix;
}

export default function Remix() {
    const options = useAppSelector((state) => state.default.options);
    const contract = useAppSelector((state) => state.default.contract);

    const remixHandler = async (e) => {
        e.preventDefault();

        const versionedCode = printContract(contract, {
            transformImport: (p) => {
                return {
                    ...p,
                    path: p.path.replace(
                        /^@openzeppelin\/contracts(-upgradeable)?/,
                        `$&@^5.0.1`,
                    ),
                };
            },
        });

        window.open(
            remixURL(versionedCode, !!options?.upgradeable).toString(),
            "_blank",
            "noopener,noreferrer",
        );
    };

    return (
        <div
            className="w-full md:w-1/3 lg:w-1/3 px-4 cursor-pointer"
            onClick={remixHandler}
        >
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
                    Send for more development on the advanced environment to{" "}
                    <b>RemixIDE</b>
                </p>
            </div>
        </div>
    );
}
