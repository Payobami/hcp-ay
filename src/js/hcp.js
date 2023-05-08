let openModal = false;
let modal = document.getElementById("review-modal")

function viewModal(open) {
    if (open) {
        console.log(open)
        modal.classList.add("show-modal")
        modal.classList.remove("hide-modal")
    } else {
        modal.classList.add("hide-modal")
    }
}