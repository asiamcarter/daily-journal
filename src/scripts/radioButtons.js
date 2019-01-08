import entryComponent from "./entryComponent"
import data from "./data"

let radioButtons = {

    buttonListener() {
        let radioButtons = document.getElementsByName("mood")
        radioButtons.forEach (function (element){
            element.addEventListener("click", event => {
                let mood = event.target.value
                data.getJournalEntries()
                .then(parsedEntries => {
                    const filteredEntries = parsedEntries.filter(entry => {
                        let moodEntry = false;
                        if (entry.mood === mood)
                        moodEntry = true;
                        return moodEntry
                    })
                    const sectionComponent = entryComponent.makeJournalEntryComponent(filteredEntries[0]);
                    let section = document.querySelector("#entryLog");
                    section.innerHTML = "";
                    section.appendChild(sectionComponent);

                })
            })
        })

    }

}

export default radioButtons;