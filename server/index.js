const { content, compile } = require("./compiler");
const { doReady } = require("./do");

const express = require('express');
const cors = require('cors');

const host = "localhost";
const port = 3300;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    const result = compile("ExampleToken.sol", content);

    res.json(result);
});

app.post('/', (req, res) => {
    const {
        contract,
        options
    } = req.body;

    const payload = compile(options.name + ".sol", contract);

    if (payload.error) {
        res.status(500).json(payload);
    }

    res.json(payload);
});

doReady();

app.listen(port, host, () => {
    console.log(`Example app listening on '${host}:${port}'`)
})
