let openModal = false;
let openSidebar = false;
let modal = document.getElementById("review-modal")
let main = document.getElementById("main-el")
if (document.body.clientWidth > 768) {
    main.classList.remove("hide-sidebar")
}

function viewModal(open) {
    if (open) {
        console.log(open)
        modal.classList.add("show-modal")
        modal.classList.remove("hide-modal")
    } else {
        modal.classList.add("hide-modal")
    }
}

function showSidebar(open) {
    if (openSidebar && open) {
        open = false
    }
    openSidebar = open
    if (open) {
        main.classList.remove("hide-sidebar")
    } else {
        main.classList.add("hide-sidebar")
    }
}

var headerQuill = new Quill('#header-editor', {
    theme: 'snow'
});

var subTextQuill = new Quill('#subtext-editor', {
    theme: 'snow'
});