const { content, compile } = require("./compiler");

const express = require('express');
const app = express();

const host = "localhost";
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    const result = compile("ExampleToken.sol", content);

    res.json(result);
})

app.listen(port, host, () => {
    console.log(`Example app listening on '${host}:${port}'`)
})
