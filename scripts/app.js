import { getLocalStorage, saveToLocalStorage, removeFromLocalStorage } from "./localstorage.js";

let nameInput = document.getElementById("nameInput");
let generateGroups = document.getElementById("generateGroups");
let namesListContainer = document.getElementById("namesListContainer");
let names;
let groupSizeSelect = document.getElementById("groupSizeSelect");
let groupModal = document.getElementById("groupModal");
let closeModal = document.querySelector("closeModal");
let groupList = document.getElementById("groupList");

nameInput.addEventListener("keydown", function (event) {
    if(event.key === 'Enter'){
        saveToLocalStorage(nameInput.value);
        addNameBox();
    }
});

function addNameBox() {
    names = getLocalStorage();
    namesListContainer.innerHTML = "";
    let latestName = names[names.length - 1];
    names.forEach((index) => {
        // Create the new input element for a name box
        let nameBox = document.createElement('h4');
        nameBox.innerText = index;
        nameBox.setAttribute('class', 'nameBoxStyle');
    
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = "X";
        deleteBtn.setAttribute('class', 'deleteBtnStyle');
        deleteBtn.addEventListener('click', function () {
            deleteName(index);
            addNameBox()
        });
        
        let fullContainer = document.createElement('div');
        fullContainer.setAttribute('class', 'fullContainer');
    
        fullContainer.appendChild(nameBox);
        fullContainer.appendChild(deleteBtn);
        
        namesListContainer.appendChild(fullContainer);
    })
}  


function deleteName(index) {
    getLocalStorage(index);
    removeFromLocalStorage(index);
}

generateGroups.addEventListener('click', function () {

});