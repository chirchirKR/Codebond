//let authors = []
let loaded = false;
document.addEventListener("DOMContentLoaded", () => {
    //alert("&&");
/*    new Promise((load, error) => {
        try {
            let doc = document.createElement('script');
            doc.src = "scripts/authors.js";
            //console.log
            doc.onload = () => {loadDiv(codes)}
            document.head.append(doc);
            load("File loaded - authors.js")
        } catch (err) {
            error(err);
        }
    }).then((doc) => {
        console.log(doc);*/
        loaded = true;
        search();
        
    /*},
    (error) => {
        throw new Error(error.message);
    });*/
    
});

let searchType = "Author Username";
let auth_click = false, lang_click = false, id_click = false, title_click = false;
function search() {
    let input = document.querySelector(".-input-");
    input.addEventListener('click', () => {
        input.style.padding = "10px";
        input.style.borderRadius = "10px";
        input.style.fontSize = "1rem";
        input.style.color = "lightgrey";
        input.style.border = "1px solid";
        input.style.textAlign = "left";
        input.placeholder = searchType;
    })
}

function showCode(id) {
    if (!loaded) {return}
    let div = document.querySelector(`#${id}`);
   // let id = id;
    let code = "";
    codes.forEach((item) => {
        if (item.id == id) {
            code = item.code;
            return
            //break;
        }
    });
    div.className = "show-code";
    div = document.querySelector(`#${id}_code`);
    div.innerHTML = `<pre><code class"language-javascript">${code}</code></pre>`;
    div.style.backgroundColor = "#131d24";
    div.style.overflowX = "auto";
    div.style.overflowY = "auto";
}

function loadDiv(authors) {
    if (!loaded) {return};
    
    let div = document.querySelector(".list-title");
    let edit = [];
    authors.forEach((item) => {
        edit.push(`
        <div class="display-title" onclick="showCode(this.id)" id="${item.id}">
            <h4 class="h4">${item.title}</h4>
            <div class="code-box" id="${item.id}_code"></div>
            <div class="end"><a href="${item.git_link}" class="teacher">${item.author} -<span class="lang">${item.lang}</span></a></div>
        </div>
`);
    });
    
    div.innerHTML = edit.join(" ");
    
}

function searchBy(type_) {
    switch (type_.toLowerCase()) {
        case "authors": auth_click = true;
        case "id": id_click = true;
        case "title": title_click = true;
        case "language": lang_click = true;
    }
    let type__ = type_.toLowerCase();
    searchType = type__;
    let input = document.querySelector(".-input-");
    input.click();
}

function copyToClipboard(id) {
    let code = document.getElementById(id);
    try {
        navigator.clipboard.writeText(code.innerText);
        alert("Copied");
    } catch (err) {
        alert(err.message);
    }
}