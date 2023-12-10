import React, { useState } from "react";

export default function Textbox({
    type,
    id,
    label,
    placeholder,
    value,
    onChange,
    small,
}) {
    const [originalValue, setOriginalValue] = useState("");

    return (
        <span
            className={"inline-flex flex-row align-middle ".concat(
                small ? "w-4/5" : "w-96",
            )}
        >
            <label
                htmlFor={id}
                className="block mx-0 my-2 font-medium text-gray-900 text-left"
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                value={typeof value === "string" ? value : originalValue}
                onChange={({ target }) => {
                    setOriginalValue(target.value);
                    typeof onChange === "function" &&
                        onChange(target.value, target.id);
                }}
                className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block ".concat(
                    small ? "p-1 w-full" : "p-2.5 mx-6 w-64",
                )}
                placeholder={placeholder}
            />
        </span>
    );
}
