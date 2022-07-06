function run() {
    let kg = document.querySelector("#weight").value;
    kg = parseFloat(kg);

    let cm = document.querySelector("#height").value;
    cm = parseFloat(cm);

    let BMI = kg/(cm/100)/(cm/100);
    BMI= BMI.toFixed(2);

    document.querySelector("#BMI").innerHTML = "Sie haben einen BMI von " + BMI+"."
}