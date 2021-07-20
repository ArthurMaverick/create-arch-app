import util from 'util';
import child from  'child_process'
import path from 'path'
const exec = util.promisify(child.exec)


export async function installDevDependencies(): Promise<void> {
 await exec('npm i typescript -D && npx tsc --init && npm i express')
//    stdout && console.log('dev dependencies: OK \n') 
//    stderr && console.log('there a problem with dev dependencies: \n')
   
   
}

export async function createStructure(structure: string): Promise<void>{
    const builderPath = path.join('node_modules', 'create-arch', 'models' , structure , 'src')
    const detinationPath = path.join('.')
    await exec(`cp -R ${builderPath} ${detinationPath}`)
    // stdout && console.log('architecture created' );
    // stderr && console.log('architecture failed');
}

