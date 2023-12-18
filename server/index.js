const { compile } = require("./compiler");
const { doReady } = require("./do");

const express = require('express');
const cors = require('cors');

const port = 3300;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
    res.status(200).json({
        message: "success"
    });
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

app.listen(port, () => {
    console.log(`app listening on port ${port}!'`)
})
