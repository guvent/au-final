import React from "react";

export default function Table({ headers, columns }) {
    return (
        <div className="flex w-full overflow-hidden">
            <table className="table mx-24 my-8 w-full">
                <thead className="uppercase">
                    <tr>
                        {typeof headers === "object" &&
                            headers.length &&
                            headers.length > 0 &&
                            headers.map((h, i) => (
                                <th
                                    className="px-6 py-2 border border-black"
                                    key={i}
                                >
                                    {h}
                                </th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {typeof columns === "object" &&
                            columns.length &&
                            columns.length > 0 &&
                            columns.map((c, i) => (
                                <td
                                    className="px-6 py-2 border border-black text-center"
                                    key={i}
                                >
                                    {c}
                                </td>
                            ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
