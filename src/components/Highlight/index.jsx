import React, { useEffect, useState } from "react";
import useCreateToken from "../../hooks/useCreateToken";
import { useAppSelector } from "../../app/hooks";
import "./index.css";

import hljs from "highlight.js/lib/core";
import hljsDefineSolidity from "highlightjs-solidity";
hljsDefineSolidity(hljs);

export default function Highlight() {
    const [code, setCode] = useState("");

    const options = useAppSelector((state) => state.default.options);

    const [erc20, setErc20] = useCreateToken("erc20");
    const [erc721, setErc721] = useCreateToken("erc721");
    const [erc1155, setErc1155] = useCreateToken("erc1155");

    useEffect(() => {
        if (typeof options === "object") {
            switch (options?.type?.toLowerCase()) {
                case "erc20":
                    setErc20(options);
                    setCode(hljs.highlight("solidity", erc20).value);
                    break;
                case "erc721":
                    setErc721(options);
                    setCode(hljs.highlight("solidity", erc721).value);
                    break;
                case "erc1155":
                    setErc1155(options);
                    setCode(hljs.highlight("solidity", erc1155).value);
                    break;
            }
        }
    }, [options]);

    return (
        <div className="output flex flex-col grow overflow-auto h-[calc(100vh-84px)]">
            <pre className="flex flex-col grow basis-0 overflow-auto">
                <code
                    className="hljs grow overflow-auto p-4"
                    dangerouslySetInnerHTML={{ __html: code }}
                ></code>
            </pre>
        </div>
    );
}
