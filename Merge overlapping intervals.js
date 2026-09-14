import {myPush} from "./push.js"

let intervals = [[1, 3], [2, 6], [8, 10], [9, 12]];


let result = [];

let start = intervals[0][0];
let end = intervals[0][1];

for (let i = 1; i < intervals.length; i++) {

    if (intervals[i][0] <= end) {
        end = intervals[i][1];
    } else {
        
        myPush(result,[start,end]);

        start = intervals[i][0];
        end = intervals[i][1];
    }
}




myPush(result,[start,end] )  ;

console.log(result);