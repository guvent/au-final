import React from "react";

export default function Footer({ children }) {
    return (
        <div className="md:max-w-4xl mx-auto text-center transition-all duration-500 mt-10">
            <h1 className="text-3xl md:text-2xl leading-tight font-bold tracking-tighter transition-all duration-500 mb-6">
                {children}
            </h1>
        </div>
    );
}
