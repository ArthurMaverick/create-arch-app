#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var args = process.argv.slice(2, process.argv.length);
var index_1 = __importDefault(require("./ca/index"));
var action = args[0]; //first argument
if (action === "ca") {
    index_1.default();
}
else {
    console.error('Unexpected input');
}
process.exit(0);
