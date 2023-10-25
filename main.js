function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
for (var i = 0; i < modals.length; i++) {
    modals[i].onclick = function() {
        closeModal(this.id);
    }
}
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        var modals = document.getElementsByClassName("modal");
        for (var i = 0; i < modals.length; i++) {
            closeModal(modals[i].id);
        }
    }
});

var closeButtons = document.querySelectorAll('.close-button');
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        closeModal(this.parentElement.id);
    }
}