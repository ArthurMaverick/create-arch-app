import {
    createStructure,
    installDependencies,
    installDevDependencies
} from './clean-architecture'


export default () => {
    installDevDependencies()   
    installDependencies()
    createStructure()
}