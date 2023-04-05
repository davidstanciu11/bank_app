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
const navigation = document.querySelector(".nav_list");
const hiddenSections = document.querySelectorAll(".section_hidden");
const slides = document.querySelectorAll(".slide");
const btnLeftSlider = document.querySelector(".slider_btn_left");
const btnRightSlider = document.querySelector(".slider_btn_right");

//Operation Container
operationLoanContainer.classList.remove("card_operation_active");
operationDeleteContainer.classList.remove("card_operation_active");
const setTheOperation = (
	activeBtn,
	inactiveButton,
	inactiveButton2,
	activeContainer,
	inactiveContainer,
	inactiveContainer2
) => {
	activeBtn.style.transform = "translateY(-5px)";
	inactiveButton.style.transform = "translateY(0)";
	inactiveButton2.style.transform = "translateY(0)";
	inactiveContainer.classList.remove("card_operation_active");
	inactiveContainer2.classList.remove("card_operation_active");
	activeContainer.classList.add("card_operation_active");
};

//ScrollToTop button

window.onscroll = () => {
	scrollToTop();
};

const scrollToTop = () => {
	document.body.scrollTop > 500 || document.documentElement.scrollTop > 500
		? (btnScroll.style.display = "block")
		: (btnScroll.style.display = "none");
};

const getToTop = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};

//Modal

const openModal = () => {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closeModal = () => {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

//Nav Blur Effect

const blurNav = (e, opacity) => {
	if (e.target.classList.contains("nav__link")) {
		const link = e.target;
		const siblings = link.closest(".navbar").querySelectorAll(".nav__link");
		const logo = document.querySelector(".logo");

		siblings.forEach((el) => {
			if (el !== link) {
				el.style.opacity = opacity;
			}
			logo.style.opacity = opacity;
		});
	}
};

//Animation onScroll

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("section_show");
		} else {
			entry.target.classList.remove("section_show");
		}
	});
});
hiddenSections.forEach((el) => observer.observe(el));

//Slider

let curSlide = 0;
const maxSlide = slides.length;
const goToSlide = (slide) => {
	slides.forEach(
		(s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
	);
};
goToSlide(0);
//EventListeners

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
	e.key === "Escape" && !modal.classList.contains("hidden")
		? closeModal()
		: modal;
});

btnOperationTransfer.addEventListener("click", () => {
	setTheOperation(
		btnOperationTransfer,
		btnOperationLoan,
		btnOperationDelete,
		operationTransferContainer,
		operationLoanContainer,
		operationDeleteContainer
	);
});

btnOperationLoan.addEventListener("click", () => {
	setTheOperation(
		btnOperationLoan,
		btnOperationTransfer,
		btnOperationDelete,
		operationLoanContainer,
		operationTransferContainer,
		operationDeleteContainer
	);
});

btnOperationDelete.addEventListener("click", () => {
	setTheOperation(
		btnOperationDelete,
		btnOperationTransfer,
		btnOperationLoan,
		operationDeleteContainer,
		operationTransferContainer,
		operationLoanContainer
	);
});

btnScroll.addEventListener("click", getToTop);

navigation.addEventListener("mouseover", (e) => {
	blurNav(e, 0.5);
});

navigation.addEventListener("mouseout", (e) => {
	blurNav(e, 1);
});

btnRightSlider.addEventListener("click", () => {
	curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++;
	goToSlide(curSlide);
});
