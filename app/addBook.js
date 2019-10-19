function addBook() {
    let book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        description: document.getElementById('description').value
    }


    fetch('http://localhost:3000/books', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(book), // body data type must match "Content-Type" header
        })
        .then(res => {
            alert("Dodałeś książkę")
            book = {
                title: "",
                author: "",
                description: ""
            }
        })
        .catch(err => {})
}

function countTitle(idName) {
    if (idName == "title") {
        let title = document.getElementById('title').value.split('').length
        document.getElementById('spanTitle').innerHTML = title
        document.getElementById('title').style.borderBottom = 'none'
    }
}
countTitle()

function countAuthor(idName) {
    if (idName == "author") {
        let author = document.getElementById('author').value.split('').length
        document.getElementById('spanAuthor').innerHTML = author
        document.getElementById('author').style.borderBottom = 'none'
    }
}
countAuthor()

function countDescription(idName) {
    if (idName == "description") {
        let description = document.getElementById('description').value.split('').length
        document.getElementById('spanDescription').innerHTML = description
        document.getElementById('description').style.borderBottom = 'none'
    }
}
countDescription()

// if (title.value.length < 10) {
//     titleInfo.style.color = 'red';
//     litleInfo.innerHTML = "At least 10 characters!";
//     return false;
// }