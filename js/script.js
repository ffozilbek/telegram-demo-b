const modalIcon = document.querySelector(".js-modal-icon");

if(modalIcon) {
    modalIcon.addEventListener("click", ()=> {
        modalIcon.classList.toggle("active");
    })
}