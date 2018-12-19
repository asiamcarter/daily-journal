//function appends argument to DOM

let entriesToDOM = (DOMentry) => {
    let container = document.querySelector(".entryLog");
    container.innerHTML += DOMentry;
    document.body.appendChild(container);
}