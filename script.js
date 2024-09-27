function domContent(params) {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const myHeader = document.getElementById("myHeader");
  console.log(randomColor);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", domContent);
} else {
  domContent();
}
