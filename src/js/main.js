
if(!localStorage.getItem('firstVisit')) {
    var firstVisit = new Date().toISOString();
    localStorage.setItem('firstVisit', firstVisit);

    var modal = document.querySelector("#modal");
    modal.style.display = "block";

    var closeButton = document.querySelector(".close")[0];

    closeButton.onclick = function() {
        modal.style.display = "none";
    }

}