import React, { useEffect, useState } from "react";
import { useNetwork } from "wagmi";

export default function Footer({ info }) {
    const { chain } = useNetwork();

    const [link, setLink] = useState(undefined);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (info.status === "success") {
            setShow(true);

            if (typeof chain === "object") {
                if (chain.blockExplorers.default) {
                    if (typeof info.txHash === "string") {
                        const url = chain.blockExplorers.default.url;

                        setLink({
                            text: url,
                            href: url.concat("/tx/").concat(info.txHash),
                        });
                    }
                }
            }
        }
    }, [info, chain]);

    return (
        <div
            className={"md:max-w-4xl mx-auto text-center transition-all duration-300 mt-10 ".concat(
                show === false && " opacity-50",
            )}
        >
            <table className="table mx-16 text-left">
                <tbody>
                    <tr>
                        <td className="border-b-2 font-bold px-2 py-2 min-w-[180px]">
                            Contract Address:
                        </td>
                        <td className="border-b-2 border-l-2 pl-4 py-2 text-md w-full">
                            {info.address ?? "..."}
                        </td>
                    </tr>
                    <tr>
                        <td className="border-b-2 font-bold px-2 py-2 min-w-[180px]">
                            Transaction ID:
                        </td>
                        <td className="border-b-2 border-l-2 pl-4 py-2 text-md w-full">
                            {info.txHash ?? "..."}
                        </td>
                    </tr>
                    <tr>
                        <td className="border-b-2 font-bold px-2 py-2 min-w-[180px]">
                            Explorer Link:
                        </td>
                        <td className="border-b-2 border-l-2 pl-4 py-2 text-md w-full">
                            {link ? (
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {link.text}
                                </a>
                            ) : (
                                "..."
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
