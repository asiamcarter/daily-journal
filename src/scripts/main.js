/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

import entriesDOM from "./entriesDOM"
import formBuilder from "./formBuilder"
import formValidation from "./formValidation"
import data from "./data"
import radioButtons from "./radioButtons"



    entriesDOM.journalEntriesToDOM();
    formBuilder.formHTML();

    let maxField = document.querySelector("#journalEntry")
    maxField.addEventListener("keyup", formValidation.maxText);

    maxField.addEventListener("keyup", formValidation.badWords, false);

    let entrySave = document.querySelector(".recordButton");
    entrySave.addEventListener("click", data.buttonClick);
    maxField.addEventListener("onblur", formValidation.badWords)

    radioButtons.buttonListener();



