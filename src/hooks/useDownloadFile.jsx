export default function useDownloadFile() {
    const download = (name, content) => {
        var data = new Blob(
            [
                typeof content === "object"
                    ? JSON.stringify(content, null, 2)
                    : content,
            ],
            { type: "application/json" },
        );

        var csvURL = window.URL.createObjectURL(data);
        var tempLink = document.createElement("a");

        tempLink.href = csvURL;
        tempLink.setAttribute("download", name);
        tempLink.click();
    };

    return [download];
}
