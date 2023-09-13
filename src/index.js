import {shuffle, remove} from "./helpers"
import fruits from "./foods"

const randomFruit = shuffle(fruits)[0]


console.log( `Hello I'd like to have one ${randomFruit}`)
console.log(`Heres your ${randomFruit}`)
console.log("Thanks, could I have another?")
console.log(`Sorry we are now out of ${randomFruit}`)
console.log(`We have ${remove(fruits,randomFruit)} left.`)