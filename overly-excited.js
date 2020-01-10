// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
let addExcitement = (theWordArray, character, multiply) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = "";
    let characterMultiple = ""
    for (let j = 0; j < multiply; j++){
        characterMultiple = `${characterMultiple}${character}`;
    }

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
        if ((i + 1) % 3 == 0){

            buildMeUp = `${buildMeUp} ${theWordArray[i]}${characterMultiple}`;
            // Print buildMeUp to the console
            console.log(buildMeUp);
        } else {
            buildMeUp = `${buildMeUp} ${theWordArray[i]}`;
            // Print buildMeUp to the console
            console.log(buildMeUp);
        }

        // Print buildMeUp to the console
    }

};

// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

// Add a new argument to the function so that a developer can specify how many times the special character should be added.

addExcitement(sentence, "?", 5);