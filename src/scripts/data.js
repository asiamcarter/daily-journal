//fetches entries from database.jsonm


const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    },

    saveJournalEntry (entryToSave) {
        fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryToSave)
            });
        }

}
