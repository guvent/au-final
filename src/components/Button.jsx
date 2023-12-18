import React from "react";

export default function Button({ title, onClick, className, disabled }) {
    let classes =
        className ??
        [
            "text-white",
            "text-center",
            "from-green-500",
            "via-green-600",
            "to-green-700",
            "focus:ring-4",
            "focus:outline-none",
            "focus:ring-green-300",
            "hover:bg-gradient-to-br",
            "bg-gradient-to-r",
            "font-medium",
            "rounded-lg",
            "px-5",
            "py-2.5",
            "me-2",
            "mb-2",
            "w-40",
        ].join(" ");

    if (disabled) {
        classes = classes.concat(
            " !bg-gray-400 !from-gray-400 !via-gray-400 !to-gray-400 !cursor-not-allowed",
        );
    }

    return (
        <>
            <button
                type="button"
                disabled={disabled}
                onClick={
                    typeof onClick === "function" && !disabled
                        ? onClick
                        : () => {}
                }
                className={classes}
            >
                {title}
            </button>
        </>
    );
}
