//before
let text = "Nissan is a car company";           //Declare Variable
let startText = "Honda";
console.log(text);
console.log("startText:", startText);

//after                                         
    if(text.startsWith(startText)) {            //write condition to check start with string or not
    console.log("The string starts with Nissan");
    } else
    console.log("The string does not start with Nissan"); //display result
