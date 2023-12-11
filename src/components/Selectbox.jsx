import React, { useState } from "react";

const MapOptions = ({ options, onSelected }) => {
    if (typeof options === "object" && options.length && options.length > 0) {
        return options.map((o, i) => {
            typeof onSelected == "function" &&
                typeof o === "object" &&
                o?.default &&
                onSelected(o.value);

            return typeof o === "string" ? (
                <option key={i} value={o}>
                    {o}
                </option>
            ) : (
                <option key={i} value={o.value}>
                    {o.label}
                </option>
            );
        });
    }
};

export default function Selectbox({
    id,
    label,
    placeholder,
    value,
    onChange,
    small,
    large,
    options,
}) {
    const [originalValue, setOriginalValue] = useState("");

    return (
        <span
            className={"inline-flex flex-row align-middle ".concat(
                small ? "w-4/5" : large ? "w-full" : "w-96",
            )}
        >
            <label
                htmlFor={id}
                className={"block mx-0 my-2 font-medium text-gray-900 text-left ".concat(
                    large ? "w-2/6" : "w-2/4",
                )}
            >
                {label}
            </label>

            <select
                id={id}
                name={id}
                value={typeof value === "string" ? value : originalValue}
                onChange={({ target }) => {
                    setOriginalValue(target.value);
                    typeof onChange === "function"
                        ? onChange(target.value, target.id)
                        : () => {};
                }}
                className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block ".concat(
                    small
                        ? "p-1 w-2/4"
                        : large
                        ? "p-1 w-4/6"
                        : "p-2.5 mx-6 w-64",
                )}
                placeholder={placeholder}
            >
                <MapOptions
                    options={options}
                    onSelected={(v) => setOriginalValue(v)}
                />
            </select>
        </span>
    );
}
