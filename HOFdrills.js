'strict mode'
//part 1
function repeat (fn, n){
    for (let i = 0; i < n; i++)
    fn();
}

function hello(){
    console.log('Hello world');
}
function goodbye(){
    console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

//end of first
//part 2

function filter(arr, fn) {
    // TASK: Define your function here
    let newArray = [];
    for(let i = 0; i< arr.length; i++){
      if(fn(arr[i]) === true){
        newArray.push(arr[i]);
      }
      return newArray;
    }

}



// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

//part 3
function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;
    return function(location){
        warningCounter++;
        if(warningCounter === 1){
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
        }
        else if(warningCounter === 0 || warningCounter >= 2){
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
        }
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const earthquakeWarning = hazardWarningCreator('Trembling felt');
const hurricaneWarning = hazardWarningCreator('Heavy rains and wind');

rocksWarning('Houston');
rocksWarning('Dallas');

//end of 3