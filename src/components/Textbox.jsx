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
        <div className="inline-flex flex-row mx-8 align-middle w-96">
            <label
                htmlFor={id}
                className="block mx-4 my-2 font-medium text-gray-900 text-left"
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
                className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full ".concat(
                    small ? "p-1" : "p-2.5",
                )}
                placeholder={placeholder}
            />
        </div>
    );
}
