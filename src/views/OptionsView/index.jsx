import React from "react";
import Header from "./Header";
import ERC20 from "./ERC20";
import ERC721 from "./ERC721";
import ERC1155 from "./ERC1155";

export default function OptionView() {
    return (
        <div className="container mx-auto">
            <Header />
            <hr className="my-8" />
            <div className="flex flex-wrap cursor-pointer">
                <ERC20 />
                <ERC721 />
                <ERC1155 />
            </div>
        </div>
    );
}
