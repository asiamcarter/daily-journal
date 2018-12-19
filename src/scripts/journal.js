/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

    API.getJournalEntries()
    .then(parsedEntries => {
        parsedEntries.forEach ( entries => {
        let entryHTML = entryComponent.makeJournalEntryComponent(entries);
        entriesDOM.entriesToDOM(entryHTML);
        })
    })



