"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const PORT = 3000;
index_1.app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
