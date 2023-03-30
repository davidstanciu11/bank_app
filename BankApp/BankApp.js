const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const btnCloseModal = document.getElementById("btn_modal");
const btnOpenModal = document.getElementById("btn_account");
const btnOperationTransfer = document.getElementById("btn_operation1");
const btnOperationLoan = document.getElementById("btn_operation2");
const btnOperationDelete = document.getElementById("btn_operation3");
const operationTransferContainer = document.getElementById("data_1");
const operationLoanContainer = document.getElementById("data_2");
const operationDeleteContainer = document.getElementById("data_3");

let buttons = true;
const openModal = () => {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closeModal = () => {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
	e.key === "Escape" && !modal.classList.contains("hidden")
		? closeModal()
		: modal;
});

btnOperationTransfer.addEventListener("click", () => {
	btnOperationTransfer.style.transform = buttons ? "translateY(-5px)" : "translateY(0)";
	btnOperationLoan.style.transform = "translateY(0)";
	btnOperationDelete.style.transform = "translateY(0)";
	buttons = !buttons;

});

btnOperationLoan.addEventListener("click", () => {
	btnOperationTransfer.style.transform = "translateY(0)";
	btnOperationLoan.style.transform = buttons ? "translateY(-5px)" : "translateY(0)";
	btnOperationDelete.style.transform = "translateY(0)";
	buttons = !buttons;
});

btnOperationDelete.addEventListener("click", () => {
	btnOperationTransfer.style.transform = "translateY(0)";
	btnOperationLoan.style.transform = "translateY(0)";
	btnOperationDelete.style.transform = buttons ? "translateY(-5px)" : "translateY(0)";
	buttons = !buttons;
});
