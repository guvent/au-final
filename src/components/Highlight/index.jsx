import React, { useEffect, useState } from "react";
import useCreateToken from "../../hooks/useCreateToken";
import "./index.css";

import hljs from "highlight.js/lib/core";
import hljsDefineSolidity from "highlightjs-solidity";
hljsDefineSolidity(hljs);

export default function Highlight() {
    const [code, setCode] = useState("");

    const [token] = useCreateToken();

    useEffect(() => {
        token && setCode(hljs.highlight("solidity", token).value);
    }, [token]);

    return (
        <div className="output flex flex-col grow overflow-auto h-[calc(100vh-84px)]">
            <pre className="flex flex-col grow basis-0 overflow-auto">
                <code
                    className="hljs grow overflow-auto p-4"
                    dangerouslySetInnerHTML={{ __html: code }}
                    contentEditable
                ></code>
            </pre>
        </div>
    );
}
