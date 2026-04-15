const correctPassword = "loveforever";

function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (input.toLowerCase() === correctPassword.toLowerCase()) {
    showPage("homePage");
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "هاي مش كلمة السر الصح 🥺";
  }
}

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => page.classList.remove("active"));

  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add("active");
  }
}

function toggleGift() {
  const giftBox = document.getElementById("giftBox");
  if (giftBox) {
    giftBox.classList.toggle("hidden");
  }
}

function openSong() {
  window.open("https://youtu.be/oB5q2qpRxKA?si=IMGWC3G8FzWy69_P", "_blank");
}