#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var args = process.argv.slice(2, process.argv.length);
var index_1 = require("./core/index");
var action = args[0];
index_1.main(action);
process.exit(0);
