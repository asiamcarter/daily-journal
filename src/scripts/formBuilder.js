
const formBuilder = {
    formHTML () {
        let HTML = `
        <header>
    <h1>Daily Journal</h1>
    </header>

    <!-- "Date of Entry" Form Field -->

        <fieldset>
            <label for ="journalDate">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>

    <!-- "Concepts Covered" Form Field -->
        <fieldset>
            <label for = "conceptsCovered"> Concepts Covered</label>
            <input type = "text" name = "conceptsCovered" id ="conceptsCovered">
        </fieldset>

    <!-- "Journal Entry" Form Field -->
        <fieldset>
            <label for = "journalEntry" class="journalEntry"> Journal Entry</label>
            <textarea id = "journalEntry" name="journalEntry" maxlength="420" rows="3" cols="33" autocomplete="off"></textarea>

        </fieldset>

    <!-- "Mood for the Day" Drop Down -->
        <fieldset>
            <label for = "moodForTheDay"> Mood for the Day</label>
            <select id ="moodEntry">
                <option value = "happy">Happy</option>
                <option value = "frustrated">Frustrated</option>
                <option value = "sad">Sad</option>
                <option value = "content">Content</option>
            </select>

        </fieldset>
            <input type = "submit" value = "Record Journal Entry" class="recordButton">

        <!-- Radio Buttons -->
        <div class="radio-buttons">
            <p>Filter Journal Entries By Mood</p>
            <div>
                <input type="radio" id="happy" name="mood" value="happy" checked>
                <label for="sad">Happy</label>
            </div>
            <div>
                <input type="radio" id="ok" name="mood" value="ok">
                <label for="ok">Ok</label>
            </div>
            <div>
            <input type="radio" id="sad" name="mood" value="sad">
            <label for="sad">Sad</label>
            </div>
            <div>
            <input type="radio" id="content" name="mood" value="content">
            <label for="content">Content</label>
            </div>
        </div>
        `
        let HTMLcontainer = document.createElement("container")
        HTMLcontainer.innerHTML = HTML
        let appendToDOM = document.querySelector("container")
        appendToDOM.appendChild(HTMLcontainer)
    },


}

export default formBuilder;