/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

API.getJournalEntries()
.then(parsedEntries => {
    parsedEntries.forEach ( entries => {
    let entryHTML = entryComponent.makeJournalEntryComponent(entries);
    entriesDOM.entriesToDOM(entryHTML);
    })
})






// let makeJournalEntryComponent = (journalEntry) => {
//     return `
//      <div class = "journal-entry">

//      <p class="entry">Date: ${journalEntry.date} </p>
//      <p class="entry">Concept: ${journalEntry.concept} </p>
//      <p class="entry">Entry: ${journalEntry.entry} </p>
//      <p class="entry">Mood: ${journalEntry.mood} </p>

//      </div>
//         `;

//      }

// let entriesToDOM = (DOMentry) => {
//     let container = document.querySelector(".entryLog");
//     container.innerHTML += DOMentry;
//     document.body.appendChild(container);


// };




















