import React from "react";
import { zipHardhat } from "@openzeppelin/wizard/dist/zip-hardhat";
import { saveAs } from "file-saver";
import { useAppSelector } from "../../app/hooks";

export default function Download() {
    const options = useAppSelector((state) => state.default.options);
    const contract = useAppSelector((state) => state.default.contract);

    const downloadHardhatHandler = async () => {
        const zip = await zipHardhat(contract, options);
        const blob = await zip.generateAsync({ type: "blob" });
        saveAs(blob, "project.zip");
    };

    return (
        <div
            className="w-full md:w-1/3 lg:w-1/3 px-4 cursor-pointer"
            onClick={downloadHardhatHandler}
        >
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
                    Download for more development and back up your project at
                    the same time.
                </p>
            </div>
        </div>
    );
}
