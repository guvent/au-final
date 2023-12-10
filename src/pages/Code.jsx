import React from "react";
import Header from "../views/CodeView/Header";
import Highlight from "../components/Highlight";
import { useNavigate } from "react-router-dom";

export default function Code() {
    const navigator = useNavigate();

    const build = () => {
        navigator("/deploy");
    };

    return (
        <section className="relative bg-white overflow-hidden">
            <Header onDeploy={build} />
            <Highlight />
        </section>
    );
}
