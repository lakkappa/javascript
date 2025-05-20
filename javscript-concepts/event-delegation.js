document.getElementById("category").addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        window.location.href = "/" + e.target.id
    }
})

document.getElementById("form").addEventListener("keyup", (e) => {
    console.log(e.target.value);
    if (e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
})