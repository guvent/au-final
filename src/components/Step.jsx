import React from "react";
import Spinner from "./Spinner";

export default function Step({ children, status }) {
    return (
        <div
            className={"text-center self-center transition-all duration-200 my-3 ".concat(
                status === "success"
                    ? "text-green-800"
                    : status === "failed"
                    ? "text-red-800"
                    : status === "pending"
                    ? "text-gray-500"
                    : "text-black",
            )}
        >
            <div className="flex flex-row mx-[14vh] content-center">
                <Spinner status={status} />
                <h1 className="text-3xl md:text-2xl leading-tight font-bold tracking-tighter transition-all duration-200 mx-2">
                    {children}
                </h1>
            </div>
        </div>
    );
}
