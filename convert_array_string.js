import { myMap } from "./map.js";
import { myUpperCase } from "./uppercase.js";

let fal = ["apple" , "banana" , "grapses"];

// const newFal = fal.map(s => s.toUpperCase());
let newFal = myMap(fal,function(s){
    // return s.toUpperCase();
    return myUpperCase(s);
})

for(let i=0;i<newFal.length;i++){
    console.log(newFal[i]);
}
