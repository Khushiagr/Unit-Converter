const numberInput = document.querySelector("input");

class Conversion {
  constructor(value) {
    this.value = value;
  }

  convert() 
  {
    document.getElementById("weight").textContent = `${this.value}  
    pounds = ${(this.value * 453.592)} grams | ${this.value} grams = ${(this.value / 453.592)} pounds`;

    document.getElementById("speed").textContent = `${this.value} 
    KPH = ${(this.value  / 1.609344)} MPH | ${this.value} MPH = ${(this.value * 1.609344)} KPH`;

    document.getElementById("length").textContent = `${this.value} 
    squarefeet = ${(this.value / 43560)} Acer | ${this.value} Acer = ${(this.value * 43560)} squarefeet`;
  }
}

numberInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    userChoice = new Conversion(
      Number(numberInput.value.toString().substring(0, 5))
    );
    userChoice.convert();
  }
});

let userChoice = new Conversion(0);
userChoice.convert();