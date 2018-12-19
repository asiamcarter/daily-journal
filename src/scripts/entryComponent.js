//function takes an object as an argument in order to create an HTML template

let makeJournalEntryComponent = (journalEntry) => {
    return `
     <div class = "journal-entry">

     <p class="entry">Date: ${journalEntry.date} </p>
     <p class="entry">Concept: ${journalEntry.concept} </p>
     <p class="entry">Entry: ${journalEntry.entry} </p>
     <p class="entry">Mood: ${journalEntry.mood} </p>

     </div>
        `;

     }