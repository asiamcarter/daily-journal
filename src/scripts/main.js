/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

import entriesDOM from "./entriesDOM"
import formBuilder from "./formBuilder"
import formValidation from "./formValidation"
import data from "./data"
import eventListeners from "./eventListeners"


    entriesDOM.journalEntriesToDOM();
    formBuilder.formHTML();

    let maxField = document.querySelector("#journalEntry")
    maxField.addEventListener("keyup", formValidation.maxText);

    maxField.addEventListener("keyup", formValidation.badWords, false);

    let entrySave = document.querySelector(".recordButton");
    entrySave.addEventListener("click", data.buttonClick);
    maxField.addEventListener("onblur", formValidation.badWords)

    let radioButtons = document.getElementsByName("mood")
    radioButtons.forEach (function (element){
        element.addEventListener("click", event => {
            let mood = event.target.value
            data.getJournalEntries()
                .then(parsedEntries => {
                    const filteredEntries = parsedEntries.filter(entry => {
                        let moodEntry = false;
                        if (entry.mood === mood)
                        moodEntry = true;
                        return moodEntry
                    })
                    console.log(filteredEntries)
                    // let article = document.querySelector("#entryLog")
                    // article.innerHTML += ""
                    // entriesDOM.entriesToDOM(filteredEntries)
                })
        })
    })







