const formValidation = {
    maxText () {
        let textArea2 = document.querySelector("#journalEntry")
           if (textArea2.value.length >= 420 ) {
              alert("You have exceeded the 420 character limit")
           }
       }
}