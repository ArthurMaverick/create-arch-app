import {
    createStructure,
    installDevDependencies
} from './dependences-setup'
import cliprogress from 'cli-progress'

const bar = new cliprogress.SingleBar({}, cliprogress.Presets.shades_classic)
bar.start(100, 0)
export const main = async (option: string) => {
    bar.update(0)
    installDevDependencies()  
    bar.update(50)
    createStructure(isNull(option))
    bar.update(100)
    bar.stop()
}
const isNull = (value: string ): string =>{
   return value || "ca" 

}