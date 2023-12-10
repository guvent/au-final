import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { buildERC20 } from "@openzeppelin/wizard/dist/erc20";
import { buildERC721 } from "@openzeppelin/wizard/dist/erc721";
import { buildERC1155 } from "@openzeppelin/wizard/dist/erc1155";
import { printContract } from "@openzeppelin/wizard";

const useCreateContract = () => {
    const options = useAppSelector((state) => state.default.options);

    const [contract, setContract] = useState(null);
    const [compile, setCompile] = useState("");

    useEffect(() => {
        const cx = ((options) => {
            switch (options?.kind?.toUpperCase()) {
                case "ERC1155":
                    return buildERC1155(options);
                case "ERC721":
                    return buildERC721(options);
                case "ERC20":
                    return buildERC20(options);
            }
            throw new Error("Unknown ERC");
        })(options);

        setContract(cx);
        setCompile(printContract(cx));
    }, [options]);

    return [contract, compile];
};

export default useCreateContract;
