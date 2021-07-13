#!/usr/bin/env node
const args = process.argv.slice(2, process.argv.length);
import exe from './ca/index'
const action = args[0]; //first argument
            
if(action === "ca") {
    exe()
}else {
    console.error('Unexpected input');
}

process.exit(0);

