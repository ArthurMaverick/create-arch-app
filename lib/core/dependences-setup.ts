import util from 'util';
import child from  'child_process'
import path from 'path'
const exec = util.promisify(child.exec)


export async function installDevDependencies(): Promise<void> {
   const {stdout, stderr} =  await exec('npm i typescript -D && npx tsc --init')
    console.log('dev dependencies: OK \n', stdout);
    console.log('there a problem with dev dependencies: \n' + stderr);
}
export async function installDependencies():Promise<void> {
    const { stdout, stderr} =  await exec('npm i express')
     console.log('dependencies: OK \n', stdout);
     console.log('there a problem with dependencies: \n' + stderr);
}
export async function createStructure(structure: string): Promise<void>{
    const builderPath = path.join('node_modules', 'create-arch', 'models' , structure , 'src')
    const detinationPath = path.join('.')
    const { stdout, stderr} =  await exec(`cp -R ${builderPath} ${detinationPath}`)
     console.log('stdout', stdout);
     console.log('stderr', stderr);
}

