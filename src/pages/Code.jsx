import React from "react";
import Header from "../components/Header";
import Highlight from "../components/Highlight";

export default function Code() {
    const build = () => {};

    return (
        <section className="relative bg-white overflow-hidden">
            <Header onDeploy={build} />
            <Highlight />
        </section>
    );
}
