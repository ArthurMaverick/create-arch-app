#!/usr/bin/env node
const args = process.argv.slice(2, process.argv.length);
import {main} from './core/index'
const action = args[0];
   
  main(action)


process.exit(0);

