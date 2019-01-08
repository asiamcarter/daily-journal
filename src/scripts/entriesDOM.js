import data from "./data"
import entryComponent from "./entryComponent"


//function appends argument to DOM
const entriesDOM = {

    entriesToDOM (DOMentry) {
        const container = document.querySelector("#entryLog");
        container.innerHTML += DOMentry;
        document.body.appendChild(container);
    },

    journalEntriesToDOM () {
        data.getJournalEntries()
        .then(parsedEntries => {
        let entryDocFrag = document.createDocumentFragment()
        parsedEntries.forEach (entries => {
        let entryHTML = entryComponent.makeJournalEntryComponent(entries)
        entryDocFrag.appendChild(entryHTML)
            })

        let entryArticle = document.querySelector("#entryLog")
        while (entryArticle.firstChild) {
            entryArticle.removeChild(entryArticle.firstChild)
        }
        entryArticle.appendChild(entryDocFrag)
        })
    }
}

export default entriesDOM;
