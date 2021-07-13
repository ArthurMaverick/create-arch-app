import {createStructure,installDependencies,installDevDependencies,installTsconfig} from './clean-architecture'

export default () => {
    installDevDependencies()
        .then(()=>installTsconfig())
    installDependencies()
        createStructure()
   
}