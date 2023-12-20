import React, { useCallback, useEffect, useState } from "react";
import Step from "../components/Step";

export function Steps({ steps }) {
    return (
        <>
            {steps.map !== undefined &&
                steps.map((v, k) => (
                    <Step key={k} status={v.status}>
                        {v.text}
                    </Step>
                ))}
        </>
    );
}

export default function useSteps(items) {
    const [steps, setSteps] = useState([]);
    // const [step, setStep] = useState(-1);
    const [stack, setStack] = useState([]);

    useEffect(() => {
        steps.length !== items.length &&
            items.map !== undefined &&
            setSteps(
                items.map((v) => ({
                    text: v,
                    status: "pending",
                })),
            );
    }, [items]);

    useEffect(() => {
        if (stack.length <= 0) return;
        if (steps.length < stack.length - 1) return;

        setSteps((sp) => {
            const step = stack.length - 2;
            const state = stack[step];

            console.log(stack, step);

            return sp.map((sv, si) => {
                let status = sv.status;

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
