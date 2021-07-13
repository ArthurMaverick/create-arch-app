"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clean_architecture_1 = require("./clean-architecture");
exports.default = (function () {
    clean_architecture_1.installDevDependencies()
        .then(function () { return clean_architecture_1.installTsconfig(); });
    clean_architecture_1.installDependencies();
    clean_architecture_1.createStructure();
});
