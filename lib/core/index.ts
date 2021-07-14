import {
    createStructure,
    installDependencies,
    installDevDependencies
} from './dependences-setup'


export const main = async (option: string) => {
    installDevDependencies()   
    installDependencies()
    createStructure(isNull(option))
}
const isNull = (value: string ): string =>{
   return value || "ca" 

}