const startBtn = document.getElementById("startBtn");
const notesSection = document.getElementById("notesSection");

startBtn.addEventListener("click", () => {
	notesSection.classList.remove("hidden");

	notesSection.scrollIntoView({
		behavior: "smooth",
	});

	const cards = document.querySelectorAll(".note-card");

	cards.forEach((card, index) => {
		setTimeout(() => {
			card.classList.add("show");
		}, index * 300);
	});
});
