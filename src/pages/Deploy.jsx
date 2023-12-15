import React from "react";
import DeployView from "../views/DeployView";

export default function Deploy() {
    const goNext = () => {};

    return (
        <section className="py-8 md:pb-32 bg-white">
            <DeployView onNext={goNext} />
        </section>
    );
}
