"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('ts-node/register');
const app_1 = require("./app");
const PORT = process.env.PORT || 3000;
app_1.app.get('/', (req, res) => {
    res.send("<h1>Hello </h1>");
});
app_1.app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
