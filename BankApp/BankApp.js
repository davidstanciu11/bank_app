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
const btnScroll = document.getElementById("btn_scroll");
operationLoanContainer.classList.remove("card_operation_active");
operationDeleteContainer.classList.remove("card_operation_active");

window.onscroll = () => {scrollToTop()};

const scrollToTop = () => {
	document.body.scrollTop > 500 || document.documentElement.scrollTop > 500
		? (btnScroll.style.display = "block")
		: (btnScroll.style.display = "none");
};

const getToTop = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};

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
	btnOperationTransfer.style.transform = "translateY(-5px)";
	btnOperationLoan.style.transform = "translateY(0)";
	btnOperationDelete.style.transform = "translateY(0)";
	
	operationLoanContainer.classList.remove("card_operation_active");
	operationDeleteContainer.classList.remove("card_operation_active");
	operationTransferContainer.classList.add("card_operation_active");
});

btnOperationLoan.addEventListener("click", () => {
	btnOperationTransfer.style.transform = "translateY(0)";
	btnOperationLoan.style.transform = "translateY(-5px)";
	btnOperationDelete.style.transform = "translateY(0)";
	operationTransferContainer.classList.remove("card_operation_active");
	operationDeleteContainer.classList.remove("card_operation_active");
	operationLoanContainer.classList.add("card_operation_active");
});

btnOperationDelete.addEventListener("click", () => {
	btnOperationTransfer.style.transform = "translateY(0)";
	btnOperationLoan.style.transform = "translateY(0)";
	btnOperationDelete.style.transform = "translateY(-5px)";
	operationTransferContainer.classList.remove("card_operation_active");
	operationDeleteContainer.classList.add("card_operation_active");
	operationLoanContainer.classList.remove("card_operation_active");
});

btnScroll.addEventListener("click", getToTop);
