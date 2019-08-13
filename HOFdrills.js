'strict mode'
/*//part 1
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

//end of 3 */
//part 4 - turtle movement 

let arr = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
function turtleMovement(arr){
    
    const filteredSteps = arr.filter(negativeOut);
    const additionalSteps = arr.map(addSteps);
    const totalSteps = arr.forEach((additionalSteps, index) => console.log(`Movement number ${index}: ${additionalSteps} step.`));
    //const filteredMovement = arr.filter(movement => movement[0]>0 && movement[1]>0)
}

function negativeSteps(arr){
    if (arr[0] > 0 && arr[1] > 0){
        return true;
    }
    else {
        return false;
    }      
}
function addSteps(arr){
    return (arr[0] += arr[1]);
}

function countSteps(arr){
    console.log(`Movement #${index}`);
}


//Part 5 - reduce

let string = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
function decode(sentence){
    let words = sentence.split(' ');
    //split string into array
    let decodedWords = words.reduce(decodeWords, ' ');
    //empty string 
    return decodedWords;

    function decodeWords(sentence, word){
        if (word.length === 3){
            sentence += ' ';
            //element is 3 characters, add space 
        }
        else {
            sentence += word.substr(word.length - 1).toUpperCase();
        }
        return sentence;
        //else capitalize last character
    }
}
console.log(decode(string));
//NO NEED TO SHOUT 

//END