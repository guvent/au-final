import React, { useEffect, useState } from "react";
import Step from "../components/Step";

function Steps({ steps }) {
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
    const [step, setStep] = useState(-1);

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

    const next = (state) => {
        if (steps.length <= step) return;

        setSteps((sp) => {
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

        setStep((s) => s + 1);

        return step;
    };

    return [<Steps key={0} steps={steps} />, next];
}
