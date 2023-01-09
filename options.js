const inputVal = document.getElementById("inputVal");
const inputNam = document.getElementById("inputNum");
const saveBtn = document.getElementById("btns");

saveBtn.addEventListener("click", () => {
  const name = inputVal.value;
  const notificationTime = inputNam.value;
  chrome.storage.sync.set({ name, notificationTime });
});

chrome.storage.sync.get(["name", "notificationTime"], (result) => {
  inputVal.value = result.name;
  inputNam.value = result.notificationTime ?? 1000;
});
