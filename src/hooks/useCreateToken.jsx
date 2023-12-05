import { useEffect, useState } from "react";
import { erc20, erc721, erc1155 } from "@openzeppelin/wizard";
import { useAppSelector } from "../app/hooks";

const useCreateToken = () => {
    const options = useAppSelector((state) => state.default.options);

    const [value, setValue] = useState(null);

    useEffect(() => {
        switch (options?.type?.toLowerCase()) {
            case "erc1155":
                setValue(erc1155.print(options));
                break;
            case "erc721":
                setValue(erc721.print(options));
                break;
            case "erc20":
                setValue(erc20.print(options));
                break;
        }
    }, [options]);

    return [value];
};

export default useCreateToken;
