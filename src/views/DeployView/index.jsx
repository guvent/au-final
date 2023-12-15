import React from "react";
import Header from "./Header";
import State from "./State";
import Footer from "./Footer";

export default function DeployView({ onNext }) {
    return (
        <div>
            <Header />

            <hr className="mx-auto border border-gray-400 w-5/6 my-10" />

            <State status={"success"}>
                Deploy started, please wait until the complete operation...
            </State>

            <State status={"pending"}>
                Deploy started, please wait until the complete operation...
            </State>
            <State status={""}>
                Deploy started, please wait until the complete operation...
            </State>
            <State status={"failed"}>
                Deploy started, please wait until the complete operation...
            </State>

            <hr className="mx-auto border border-gray-400 w-5/6 my-10" />

            <Footer>
                Deploy started, please wait until the complete operation...
            </Footer>
        </div>
    );
}
