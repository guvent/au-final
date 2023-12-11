import React, { useState } from "react";
import Header from "./Header";

export default function DeployView() {
    const [chain, setChain] = useState(null);

    const handleClickChain = (ch) => {
        setChain(ch);

        console.log("set chain", ch);
    };

    return (
        <div>
            <Header onClick={handleClickChain} />
        </div>
    );
}
