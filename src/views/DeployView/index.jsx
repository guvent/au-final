import React from "react";
import Footer from "./Footer";
import { Steps } from "../../hooks/useSteps";
import Button from "../../components/Button";
import useDeployContract from "../../hooks/useDeployContract";

export default function DeployView({ onNext }) {
    const [steps, start, info] = useDeployContract();

    const handleNextStep = async () => {
        await start();
    };

    return (
        <>
            <div className="items-center flex flex-col w-full mt-10">
                <div className="w-96">
                    <Button
                        title={
                            info.status === "pending"
                                ? "Processing..."
                                : "Start Deployment"
                        }
                        wide
                        disabled={info.status === "pending"}
                        onClick={handleNextStep}
                    />
                </div>
            </div>

            <hr className="mx-auto border border-gray-400 w-5/6 my-10" />

            <div className="flex flex-col mx-auto">
                <Steps steps={steps} />
            </div>

            <hr className="mx-auto border border-gray-400 w-5/6 my-10" />

            <Footer info={info} />
        </>
    );
}
