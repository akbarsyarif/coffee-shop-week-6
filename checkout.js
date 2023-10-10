const modal = document.querySelector(".modal");

const showModal = document.querySelector(".show-modal");
const closeModal = document.querySelectorAll(".close-modal");

showModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
});
console.log(closeModal);

for (let i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

// closeModal[0].addEventListener("click", () => {
//   modal.classList.add("hidden");
// });
// closeModal[1].addEventListener("click", () => {
//   modal.classList.add("hidden");
// });
