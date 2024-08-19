const textarea = document.getElementById("myTextarea");

function saveToLocalStorage() {
    localStorage.setItem("saveText",textarea.value);
}

if (localStorage.getItem("savedText")) {
    textarea.value = localStorage.getItem("savedText");
}

textarea.addEventListener("input", saveToLocalStorage);