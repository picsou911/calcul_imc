const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modéréé", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide", color: "purple", range: 40 },

];


// IMC = poids en kg / taille² en m

const form = document.querySelector("form")

form.addEventListener("submit", handleForm)

function handleForm(e) {
    e.preventDefault();
    
    calculateBMI()
}

const inputs = document.querySelectorAll("input")

function calculateBMI() {
    const height = inputs[0].value;
    const weight = inputs[1].value;

    console.log(height, weight);
}



