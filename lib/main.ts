#!/usr/bin/env node
const args = process.argv.slice(2, process.argv.length);
import {main} from './core/index';
const action = args[0];
 

  if(action === 'ca' || action === 'mvp') {
    main(action);
   
  }else {
    console.log("invalid comand, type npx create-arch YOUR-ARCHITECTURE")
  }





