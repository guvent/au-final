import React from "react";

export default function Header() {
    return (
        <div className="md:max-w-4xl my-28 mx-auto text-center">
            <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter text-green-600">
                {"You are ready now!"}
            </h1>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium mb-4">
                Finally! You are about to prepare an instrument on the
                blockchain.
            </p>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">
                In this way, you will easily take a new step into blockchain.
                What you need to do next is to develop in a more detailed
                environment or take your place directly in the blockchain.
            </p>
        </div>
    );
}
