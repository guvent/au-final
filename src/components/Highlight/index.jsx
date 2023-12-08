import React, { useEffect, useState } from "react";
import useCreateContract from "../../hooks/useCreateContract";
import "./index.css";

import hljs from "highlight.js/lib/core";
import hljsDefineSolidity from "highlightjs-solidity";
import { useAppDispatch } from "../../app/hooks";
hljsDefineSolidity(hljs);

export default function Highlight() {
    const dispatch = useAppDispatch();
    const [code, setCode] = useState("");

    const [token] = useCreateContract();

    useEffect(() => {
        dispatch({
            type: "default/fillContract",
            payload: token,
        });
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
