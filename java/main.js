const attributeTotal = document.getElementsByClassName("attTt")

const characteristic = document.getElementById("characteristic")

    const baseList = document.getElementsByClassName("nB")
    const adList = document.getElementsByClassName("adNb")
    const caractTl = document.getElementsByClassName("tT")

        const strenghtBtn = document.getElementById("strenght")

const firstDice = document.getElementById("firstDice")


        console.log(typeof document.getElementById("symbiosisTotal").value);


let totalStrenght = parseInt(document.getElementById("totalStrenght").value)
console.log(totalStrenght);

let baseStrenght = parseInt(document.getElementById("baseStrenght").value)
console.log(baseStrenght);

let adStrenght = parseInt(document.getElementById("adStrenght").value)
console.log(adStrenght);

let calcStrenght = (baseStrenght+adStrenght)
console.log((calcStrenght));

document.getElementById("totalStrenght").value = calcStrenght
//changer la valeur html grâce au bouton, ne change pas le total

//click on the stat to get the dice 

// strenghtBtn.addEventListener("click",getTheFirstDice)
characteristic.addEventListener("click",getTheFirstDice)

function getTheFirstDice(event) {
    (document.getElementById("firstDice")).value = event.target.textContent

}
console.log(strenghtBtn);