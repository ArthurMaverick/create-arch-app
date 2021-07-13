#!/usr/bin/env node
import util from 'util';
import child from  'child_process'
const exec = util.promisify(child.exec)


export async function installDevDependencies() {
   const { stdout, stderr} =  await exec('npm i typescript -D')
    console.log('dev dependencies: OK \n', stdout);
    console.log('there a problem with dev dependencies: \n' + stderr);
}
export async function installTsconfig() {
    const { stdout} =  await exec("npx tsc --init")
     console.log('tsconfig: OK \n', stdout);
    
}
export async function installDependencies() {
    const { stdout, stderr} =  await exec('npm i express')
     console.log('dependencies: OK \n', stdout);
     console.log('there a problem with dependencies: \n' + stderr);
}
export async function createStructure() {
    const { stdout, stderr} =  await exec(
        'mkdir src && cd src && mkdir domain data infra main presentation && cd main && touch server.ts')
     console.log('stdout', stdout);
     console.log('stderr', stderr);
}

