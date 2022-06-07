// A callback is a function passed as an argument to another function This technique allows a function to call another function A callback function can run after another function has finished

// setTimeout itself is a function so the function inside being passed as a param is technically the callback I believe if you wanna say it like that the second param is 3000 miliseconds so it will run this anonymous function after 3 seconds 

setTimeout( function() { 
    console.log("start") 
}, 3000 );

console.log("end");

// creating our own very basic callback 
function back() {  
    console.log( "Callback ran")
}

function call(func) {
    func()
}

call(back)
call(back)


// adding a tiny bit more functionality and params/args
function back1(str) {  
    console.log( "Callback ran " + str)
}

function call1(num,func) {
    if (num % 2 === 0){
        func()
    }
    else{
        console.log("callback didnt run number odd")
    }
}
// arrows when doing call backs with params/args
call1(7,() => back1("Fabio"))
call1(8,() => back1("Fabio"))