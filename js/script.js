
// Search Button //
const searchButton = () => {
    const searchBox = document.getElementById('search-box');
    const searchBoxValue =searchBox.value;

// remover //
    searchBox.value = "";

// url //
    const url = `https://openlibrary.org/search.json?q=${searchBoxValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => searchResult(data))
}

// function call //
searchButton()

// searching full function start //
const searchResult = data => {
    const none = document.getElementById("none");
    const resultCard = document.getElementById("resultCard");

// remover //
    resultCard.textContent="";
    
// found data result //
    const foundData = document.getElementById('found-data');
    foundData.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = `<h4> Found Data: ${data.numFound} </h4>`
    foundData.appendChild(div);

// No Result Found //
    if(data.docs.length == 0){
        console.log("true");
        none.textContent = '';
        const div = document.createElement('div');
        div.innerHTML = `<h1>No Result Found</h1>`
        none.appendChild(div);
    }

// data docs //
    const docs = data.docs

// forEach //
    docs.forEach(doc => {

// remover //
        none.textContent = '';

// html //
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${doc.title}</h5>
                <p class="card-text"> Author Name: ${doc.author_name ? doc.author_name[0]: "undif."} </p>
                <p class="card-text"> publisher: ${doc.publisher ? doc.publisher[0]: "undif."} </p>
                <p class="card-text"> First Publish Date: ${doc.first_publish_year} </p>
                </div>
            </div>
        </div>
        `
        resultCard.appendChild(div);
    });
}