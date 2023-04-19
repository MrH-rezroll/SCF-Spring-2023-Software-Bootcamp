const modalWindow = document.getElementById("modal-container");

function loadModal(){
    setTimeout(() => {
        console.log("HI");
        if (localStorage.getItem("hasSeenModal")) {
            modalWindow.style.visibility = "hidden";
        }
        else {
            modalWindow.style.visibility = "visible";
        }
    }, 2000);
}

function resetModalPopup(){
    localStorage.removeItem('hasSeenModal');
}

function hideModal(){
    localStorage.setItem('hasSeenModal', 'true');
    modalWindow.style.visibility = "hidden";
}