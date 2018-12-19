

API.getJournalEntries()
.then(parsedEntries => {
    parsedEntries.forEach ( entries => {
    let entryHTML = makeJournalEntryComponent(entries);
    entriesToDOM(entryHTML);
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




















