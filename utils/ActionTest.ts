import { controller } from './StatesController'

export const doSomething = () => {
    controller.decrease()
    console.log(`SS: ${controller.states.counter}`)
}