//fetches entries from database.json


const data = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    },

    saveJournalEntry (entryToSave) {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryToSave)
            });
     },

        buttonClick() {
            // event.preventDefault();
            console.log("click")
            const date = document.querySelector("#journalDate").value;
            const concept = document.querySelector("#conceptsCovered").value;
            const entry = document.querySelector("#journalEntry").value;
            const mood = document.querySelector("#moodEntry").value;

            let savedObject = {
                date: date,
                concept: concept,
                entry: entry,
                mood: mood
            }


            data.saveJournalEntry(savedObject)
            .then (response => {
                entriesDOM.journalEntriesToDOM()

            });

            // location.reload(true);



        }

}
