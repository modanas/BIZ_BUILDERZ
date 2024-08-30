const addPost = () => {
	let post_btn = document.getElementById("post_btn");
	let feed_wrapper = document.querySelector("#feed-wrapper");
	let inputField = document.getElementById("input");

	post_btn.addEventListener("click", () => {
		let content_wrapper = document.createElement("div");
		content_wrapper.setAttribute("class", "post-wrapper");
		content_wrapper.innerHTML = `${inputField.value}`;
		feed_wrapper.appendChild(content_wrapper);
		inputField.value = "";
	});
};
addPost();

function updateBio() {
	document.getElementById("name").textContent = "Rajani Prasad";
	document.getElementById("title").textContent = "UX/UI Designer";
	document.getElementById("description").textContent =
		"Creative designer with 5+ years of experience in crafting user-friendly interfaces and improving user interaction.";
}
