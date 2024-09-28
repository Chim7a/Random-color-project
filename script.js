function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const changeColorBtn = document.getElementById("change-color-btn");
  const colorBox = document.getElementById("color-box");
  changeColorBtn.addEventListener("click", getRandomColor);
  const greetMsg = document.getElementById("greeting");
  const currentTime = new Date();
  const colorCode = document.getElementById("color-code");

  //   Condition to to change background color when clicked.
  if (changeColorBtn) {
    colorBox.style.backgroundColor = `#${randomColor}`;
    greetMsg.style.color = `#${randomColor}`;
    changeColorBtn.style.borderColor = `#${randomColor}`;
    colorCode.textContent = `#${randomColor.toUpperCase()}`;
    colorCode.style.color = "white";
  }

  //   Greeting Message
  if (currentTime.getHours() < 12) {
    greetMsg.innerText = `Good Morning`;
  } else if (currentTime.getHours() < 16 && currentTime.getHours() != 11) {
    greetMsg.innerText = `Good Afternoon`;
  } else {
    greetMsg.innerText = `Good Evening`;
  }
}

// DOMContentLoaded

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", getRandomColor);
} else {
  getRandomColor();
}
