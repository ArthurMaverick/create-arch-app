import {
    createStructure,
    installDependencies,
    installDevDependencies
} from './dependences-setup'


export const main =  (option: string) => {
    createStructure(isNull(option))
    installDevDependencies()   
    installDependencies()
}
const isNull = (value: string ): string =>{
   return value || "ca" 

}