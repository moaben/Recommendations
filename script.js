const PASSWORD = "forex123"; // غيّر كلمة المرور هنا

function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim();
  const error = document.getElementById("error");

  if (input === PASSWORD) {
    error.textContent = "";
    document.getElementById("password-section").style.display = "none";
    document.getElementById("recommendation").classList.remove("hidden");
    loadRecommendation();
  } else {
    error.textContent = "❌ كلمة المرور غير صحيحة.";
  }
}

function loadRecommendation() {
  fetch("recommendation.json")
    .then((response) => {
      if (!response.ok) throw new Error("فشل في تحميل التوصية");
      return response.json();
    })
    .then((data) => {
      document.getElementById("output").textContent = data.recommendation;
    })
    .catch((err) => {
      document.getElementById("output").textContent = "⚠️ تعذر تحميل التوصية.";
      console.error(err);
    });
}
