import { useEffect } from "react";
import { useAppSelector } from "../app/hooks";

export default function useCompileContract() {
    const contract = useAppSelector((state) => state.default.compile);
    const options = useAppSelector((state) => state.default.options);

    useEffect(() => {
        console.log(contract);
    }, [contract]);

    const compile = () => {
        fetch("http://localhost:3300", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                contract,
                options,
            }),
        });
    };

    return [contract, compile];
}
