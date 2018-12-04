const journalEntries = [
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Ok"
    },
    {
        date: "12/04/2018",
        concept: "Scope in Javascript",
        entry: "We learned about scope in Javascript-- curly brackets are the castle wall, variables within the wall can see outside, but variables outside of the walls cannot see inside. It mostly made sense.",
        mood: "Content"
    }
]

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

journalEntries.forEach((object) => {
    let entryComponent = makeJournalEntryComponent(object);

    let container = document.querySelector(".entryLog");
    container.innerHTML = entryComponent;
    document.body.appendChild(container);

});

















 


