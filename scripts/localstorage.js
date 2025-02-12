// localStorage.clear(); //This will clear all the local storage

function getLocalStorage(){
    let localStorageData = localStorage.getItem('names');
    return JSON.parse(localStorageData) || [];
}

function saveToLocalStorage(names) {
    
    let namesArr = JSON.parse(localStorage.getItem("names")) || [];
    namesArr.push(names);
    let secondArr = [];
    for(let i = 0; i < namesArr.length; i++){
        if (!secondArr.includes(namesArr[i])) {
            secondArr.push(namesArr[i]);
            
        }
    }
    localStorage.setItem('names', JSON.stringify(secondArr));

    console.log(secondArr);
}

function removeFromLocalStorage(names){
    let namesArr = getLocalStorage();
    let nameIndex = namesArr.indexOf(names);

    //remove the name from the array using the splice method.
    namesArr.splice(nameIndex, 1);
    // save updated array to local storage
    localStorage.setItem('names', JSON.stringify(namesArr));  
}

export { getLocalStorage, saveToLocalStorage, removeFromLocalStorage }