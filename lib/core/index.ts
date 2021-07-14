import {
    createStructure,
    installDependencies,
    installDevDependencies
} from './dependences-setup'


export const main = (option: string): void => {
    installDevDependencies()   
    installDependencies()
    createStructure(isNull(option))
}
const isNull = (value: string ): string =>{
   return value || "ca" 

}