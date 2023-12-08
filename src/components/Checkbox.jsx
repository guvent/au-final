import React, { useState } from "react";

export default function Checkbox({ id, title, description, value, onChange }) {
    const [originalValue, setOriginalValue] = useState("");

    return (
        <div className="flex flex-row justify-between items-center mb-4 max-w-xs">
            <input
                type="checkbox"
                id={id}
                name={id}
                checked={typeof value !== "undefined" ? value : originalValue}
                onChange={({ target }) => {
                    setOriginalValue(target.checked);
                    typeof onChange === "function" &&
                        onChange(target.checked, target.id);
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
                className="ms-2 text-sm font-medium text-gray-900 flex align-middle"
                htmlFor={id}
            >
                <p className=" pl-4 pt-px">{title}</p>
                <p className="text-md text-gray-400 pl-4 pt-px">
                    {description && `(${description})`}
                </p>
            </label>
        </div>
    );
}
