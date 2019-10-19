fetch(`http://localhost:3000/books`)
  .then(res => res.json())
  .then(res => {
    let mainSelect = document.getElementById('title')
    res.forEach(element => {
      let optionElement = document.createElement('option')
      optionElement.value = element.id
      optionElement.innerText = element.name
      mainSelect.appendChild(optionElement)
    });
  })