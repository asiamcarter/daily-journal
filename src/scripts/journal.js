/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

    data.getJournalEntries()
    .then(parsedEntries => {
        parsedEntries.forEach ( entries => {
        let entryHTML = entryComponent.makeJournalEntryComponent(entries);
        entriesDOM.entriesToDOM(entryHTML);
        })
    })

    let maxField = document.querySelector("#journalEntry")
    maxField.addEventListener("keyup", formValidation.maxText);

    maxField.addEventListener("keyup", formValidation.badWords, false);

    let entrySave = document.querySelector(".recordButton");
    entrySave.addEventListener("click", data.buttonClick);

    maxField.addEventListener("onblur", formValidation.badWords)




