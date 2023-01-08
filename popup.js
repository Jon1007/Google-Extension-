const timeElement = document.getElementById("time");
const currentTime = new Date().toLocaleTimeString()

timeElement.textContent = `Time is ${currentTime}`;

chrome.action.setBadgeText({
	text:"TIME"
},() => {
	console.log("Finished Badge Text")
} )

