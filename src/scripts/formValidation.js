const formValidation = {
    maxText() {
        let textArea = document.querySelector("#journalEntry")
           if (textArea.value.length >= 420 ) {
              alert("You have exceeded the 420 character limit")
           }
       },

    // badWords() {
    //     let textArea = document.querySelector("#journalEntry")
    //     let badWords = textArea.value.match(/fuck|ass|bitch|shit|gay|bastard|damn/i);

    //     if (badWords) {
    //         alert("POTTY MOUTH!");
    //         textArea.value = "";
    //         return;
    //     }
    // }

    badWords() {
        let textArea = document.querySelector("#journalEntry").value
        let badWords = /fuck|ass|bitch|shit|gay|bastard|damn/i;

        if(textArea.match(badWords)) {
            alert("POTTY MOUTH!")
            textArea = textArea.replace(badWords, "****");
            document.getElementById("journalEntry").value = textArea;
        }
    }
}