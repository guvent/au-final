import React from "react";

export default function Footer({ address, txId, link, show }) {
    return (
        <div
            className={"md:max-w-4xl mx-auto text-center transition-all duration-300 mt-10 ".concat(
                show ?? " opacity-0",
            )}
        >
            <table className="table mx-16 text-left">
                <tbody>
                    <tr>
                        <td className="border-b-2 font-bold px-2 py-2 min-w-[180px]">
                            Contract Address:
                        </td>
                        <td className="border-b-2 border-l-2 pl-4 py-2 text-md w-full">
                            {address ?? "..."}
                        </td>
                    </tr>
                    <tr>
                        <td className="border-b-2 font-bold px-2 py-2 min-w-[180px]">
                            Transaction ID:
                        </td>
                        <td className="border-b-2 border-l-2 pl-4 py-2 text-md w-full">
                            {txId ?? "..."}
                        </td>
                    </tr>
                    <tr>
                        <td className="border-b-2 font-bold px-2 py-2 min-w-[180px]">
                            Explorer Link:
                        </td>
                        <td className="border-b-2 border-l-2 pl-4 py-2 text-md w-full">
                            {link ?? "..."}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
