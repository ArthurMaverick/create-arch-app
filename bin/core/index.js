"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var dependences_setup_1 = require("./dependences-setup");
var main = function (option) {
    dependences_setup_1.installDevDependencies();
    dependences_setup_1.installDependencies();
    dependences_setup_1.createStructure(isNull(option));
};
exports.main = main;
var isNull = function (value) {
    return value || "ca";
};
