const name  = document.getElementById("name")
const saveBtn = document.getElementById("btn")

saveBtn.addEventListener("click", () => {
	console.log(name.value)
})