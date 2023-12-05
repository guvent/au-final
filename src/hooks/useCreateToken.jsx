import { useEffect, useState } from "react";
import { erc20, erc721, erc1155 } from "@openzeppelin/wizard";

const useCreateToken = (type) => {
    const [options, setOptions] = useState({
        name: "Example Token",
        symbol: "EXT",
        burnable: false,
        pausable: false,
        mintable: false,
        premint: false,
    });

    const [value, setValue] = useState(null);

    useEffect(() => {
        switch (type) {
            case "erc1155":
                setValue(erc1155.print(options));
                break;
            case "erc721":
                setValue(erc721.print(options));
                break;
            default:
                setValue(erc20.print(options));
                break;
        }
    }, [options]);

    return [value, setOptions];
};

export default useCreateToken;
