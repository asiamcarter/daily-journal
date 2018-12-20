//function appends argument to DOM
const entriesDOM = {
    entriesToDOM (DOMentry) {
        let container = document.querySelector(".entryLog");
        container.innerHTML += DOMentry;
        document.body.appendChild(container);
    },

    journalEntriesToDOM () {
        data.getJournalEntries()
        .then(parsedEntries => {
        parsedEntries.forEach ( entries => {
        let entryHTML = entryComponent.makeJournalEntryComponent(entries);
        entriesDOM.entriesToDOM(entryHTML);
            })
        })
    }
}

