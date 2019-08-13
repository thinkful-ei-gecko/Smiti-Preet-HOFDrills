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