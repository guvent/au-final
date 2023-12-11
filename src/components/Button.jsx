import React from "react";

export default function Button({ title, onClick, className }) {
    return (
        <button
            type="button"
            onClick={typeof onClick === "function" ? onClick : () => {}}
            className={
                className ??
                [
                    "text-white",
                    "bg-gradient-to-r",
                    "w-40",
                    "from-green-500",
                    "via-green-600",
                    "to-green-700",
                    "hover:bg-gradient-to-br",
                    "focus:ring-4",
                    "focus:outline-none",
                    "focus:ring-green-300",
                    "font-medium",
                    "rounded-lg",
                    "px-5",
                    "py-2.5",
                    "text-center",
                    "me-2",
                    "mb-2",
                ].join(" ")
            }
        >
            {title}
        </button>
    );
}
