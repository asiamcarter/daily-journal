//function appends argument to DOM
const entriesDOM = {
    entriesToDOM (DOMentry) {
        let container = document.querySelector(".entryLog");
        container.innerHTML += DOMentry;
        document.body.appendChild(container);
    }
}
