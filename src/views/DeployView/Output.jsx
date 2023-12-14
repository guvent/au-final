import React from "react";

export default function Output({ inputs }) {
    return (
        <div>
            <code className="block mx-auto w-5/6 h-[56vh] bg-gray-200 border border-gray-400 overflow-hidden break-words">
                {inputs}
            </code>
        </div>
    );
}
