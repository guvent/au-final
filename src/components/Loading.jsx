import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

export default function Loading({ show }) {
    const [hidden, setHidden] = useState("opacity-0 hidden");

    useEffect(() => {
        show
            ? setHidden(null)
            : setTimeout(() => {
                  setHidden("opacity-0 hidden");
              }, 200);
    }, [show]);

    return (
        <div
            className={"absolute top-0 left-0 w-full h-[100vh] bg-black bg-opacity-60 transition-all duration-100 ".concat(
                show ? "" : hidden ?? "opacity-0",
            )}
        >
            <div className="mx-auto w-full text-center my-[40vh]">
                <div className="w-full flex justify-center my-4">
                    <Spinner
                        className={
                            "w-16 h-20 text-gray-200 animate-spin fill-green-600"
                        }
                    />
                </div>
                <div className="text-white text-3xl">Please Wait...</div>
            </div>
        </div>
    );
}
