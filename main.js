const word_container = document.querySelector(".word");
const trial_container = word_container.querySelector(".trial");
const trial_input = trial_container.querySelector("input");
const answer_button = word_container.querySelector("button");
const word_title = word_container.querySelector("h5");

const answer_label = document.getElementById("correct_answer");
const is_correct_mark = document.getElementById("is_correct");

let current_word = "";
let used_words = []

function new_word() {
	let to_list = Object.keys(words)

	if (used_words.length === to_list.length) {
		used_words = [];
	}	

	to_list = to_list.filter((element) => {
		return !used_words.includes(element);
	});
	console.log(to_list, used_words);
	current_word = to_list[Math.floor(Math.random() * to_list.length)];
	
	used_words.push(current_word);

	answer_button.innerHTML  = "<b>Correct</b>";
	word_title.innerHTML  = `Word: <u>${current_word}</u>`;
	trial_input.value = "";

	is_correct_mark.style.display = "none";
	answer_label.style.display = "none";
}
	

function correct() {
	if (answer_button.textContent === "Next") {
		new_word();
		return;
	}
	
	const trial = trial_input.value.toLowerCase()
	console.log(`Input Content: ${trial}`);

	if (words[current_word] != trial) { // Result is not correct, then:
		answer_label.style.display = "block";
		answer_label.textContent = `Correct: ${words[current_word]}`
		
		is_correct_mark.style.display = "block";
		is_correct_mark.textContent = "❌";
	} else { 						// Result is correct, then:
		is_correct_mark.style.display = "block";
		is_correct_mark.textContent = "✅";
	}

	answer_button.innerHTML = "<b>Next</b>"
}

function select(option_btn) {
	
}

new_word();