import React, { useCallback, useEffect, useState } from "react";
import Step from "../components/Step";
import { Link } from "react-router-dom";

export function Steps({ steps, complete }) {
    return (
        <>
            {complete ? (
                <div className="flex flex-col mx-auto w-5/6 my-10 justify-center items-center">
                    <div className="my-6">
                        <svg
                            className="w-20 h-20 text-green-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 21 21"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                            />
                        </svg>
                    </div>
                    <div className="font-bold text-4xl">Complete...</div>
                    <div className="text-xl mt-4">
                        Redirected{" "}
                        <Link className="text-blue-700" to={"/"}>
                            home page
                        </Link>{" "}
                        in 60 sec. Please Wait...
                    </div>
                </div>
            ) : (
                steps.map !== undefined &&
                steps.map((v, k) => (
                    <Step key={k} status={v.status}>
                        {v.text}
                    </Step>
                ))
            )}
        </>
    );
}

export default function useSteps(items) {
    const [steps, setSteps] = useState([]);
    const [stack, setStack] = useState([]);

    useEffect(() => {
        steps.length !== items.length &&
            items.map !== undefined &&
            setSteps(
                items.map((v) => ({
                    text: v,
                    status: "ready",
                })),
            );
    }, [items]);

    useEffect(() => {
        if (stack.length <= 0) return;
        if (steps.length < stack.length - 1) return;

        setSteps((sp) => {
            const step = stack.length - 2;
            const state = stack[step];

            return sp.map((sv, si) => {
                let status = sv.status === "ready" ? "pending" : sv.status;

                if (si < step) status = sv.status;
                if (si === step) status = state;
                if (si === step + 1) status = "waiting";

                return {
                    ...sv,
                    status,
                };
            });
        });
    }, [stack]);

    const next = useCallback(
        (state) => {
            setStack((s) => [...s, state]);
        },
        [stack],
    );

    return [steps, next];
}
