function calculateBMI() {

    // ===== GET VALUES =====
    let age = Number(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let heightUnit = document.getElementById("heightUnit").value;
    let weightUnit = document.getElementById("weightUnit").value;

    let weight = Number(document.getElementById("weight").value);
    let height; // final height in meters

    const resultBox = document.getElementById("result");

    // ===== BASIC VALIDATION =====
    if (!age || !gender || !weight) {
        resultBox.innerHTML = "❌ Please fill all required fields.";
        return;
    }

    if (age <= 0 || age > 120) {
        resultBox.innerHTML = "❌ Please enter a valid age (1–120).";
        return;
    }

    if (weight <= 0) {
        resultBox.innerHTML = "❌ Weight must be greater than 0.";
        return;
    }

    // ===== HEIGHT CONVERSION =====
    if (heightUnit === "cm") {

        let heightCm = Number(document.getElementById("height").value);
        if (!heightCm || heightCm <= 0) {
            resultBox.innerHTML = "❌ Please enter a valid height in cm.";
            return;
        }
        height = heightCm / 100;

    } else if (heightUnit === "inch") {

        let heightInch = Number(document.getElementById("height").value);
        if (!heightInch || heightInch <= 0) {
            resultBox.innerHTML = "❌ Please enter a valid height in inches.";
            return;
        }
        height = heightInch * 0.0254;

    } else if (heightUnit === "feet") {

        let feet = Number(document.getElementById("feet").value);
        let inches = Number(document.getElementById("inches").value);

        if (!feet || feet <= 0) {
            resultBox.innerHTML = "❌ Feet must be greater than 0.";
            return;
        }

        if (inches < 0 || inches > 11) {
            resultBox.innerHTML = "❌ Inches must be between 0 and 11.";
            return;
        }

        let totalInches = (feet * 12) + inches;
        height = totalInches * 0.0254;
    }

    // ===== WEIGHT CONVERSION =====
    if (weightUnit === "lb") {
        weight = weight * 0.453592;
    }

    // ===== BMI CALCULATION =====
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(1);

    // ===== BMI CATEGORY =====
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // ===== MESSAGE =====
    let message = "";
    if (age < 18) {
        message = "⚠️ BMI for children and teenagers depends on age and gender percentiles.";
    } else {
        message = "Healthy BMI range for adults is 18.5 – 24.9.";
    }

    // ===== OUTPUT =====
    resultBox.innerHTML =
        `<b>Your BMI:</b> ${bmi}<br>
         <b>Category:</b> ${category}<br><br>
         <small>${message}</small>`;
}

/* ===== HEIGHT UNIT TOGGLE (FEET FIXED) ===== */

const heightUnitSelect = document.getElementById("heightUnit");
const feetBox = document.getElementById("feetBox");
const heightInput = document.getElementById("height");

if (heightUnitSelect) {
    heightUnitSelect.addEventListener("change", function () {
        if (this.value === "feet") {
            feetBox.style.display = "flex";
            heightInput.style.display = "none";
        } else {
            feetBox.style.display = "none";
            heightInput.style.display = "block";
        }
    });

    if (heightUnitSelect.value === "feet") {
        feetBox.style.display = "flex";
        heightInput.style.display = "none";
    }
}

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    if (menu) {
        menu.classList.toggle("active");
        document.body.classList.toggle("menu-open");
    }
}
