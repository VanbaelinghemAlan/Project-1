const attributeTotal = document.getElementsByClassName("attTt")

const characteristic = document.getElementById("characteristic")

    const baseList = document.getElementsByClassName("nB")
    const adList = document.getElementsByClassName("adNb")
    const caractTl = document.getElementsByClassName("tT")

        const strenghtBtn = document.getElementById("strenght")

const firstDice = document.getElementById("firstDice")
const secondDice = document.getElementById("secondDice")
const thirdDice = document.getElementById("thirdDice")
const fourthDice = document.getElementById("fourthDice")

const effectDice = document.getElementById("effectDice")
const plusBtn = document.getElementById("plusBtn")
const minusBtn = document.getElementById("minusBtn")

const strenght = document.getElementById("strenght")
const stamina = document.getElementById("stamina")
const agility = document.getElementById("agility")
const intuition = document.getElementById("instinct")
const speed = document.getElementById("speed")
const reflex = document.getElementById("reflex")
const perception = document.getElementById("perception")
const stealth = document.getElementById("stealth")
const will = document.getElementById("will")
const charisma = document.getElementById("charisma")

const strenghtEffect = "Vous obtenez +10 à vos dégâts !"
const staminaEffect = "Réduit les prochains dégâts de 10 !"
const agilityEffect = "Vous obtenez +1 Avantage sur votre jet"
const intuitionEffect = "Vous augmentez votre défence de mêlée et à distance de 1"
const speedEffect = "Vous obtenez une action de déplacement supplémentaire (moitié de sa valeur)"
const reflexEffect = "+1 place au turn order"
const perceptionEffect = "Vous obtiendrez une information sur le combat en fonction de vos succès"
const stealthEffect = "Si la détection de l'ennemi est plus faible que votre jet, votre coup sera critique"
const willEffect = "Vous pouvez agir malgré l'effet qui vous handicape"
const charismaEffect = "Infligez un malus de -2 sur votre cible"
//les valeurs sont temporaires

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
//intégrer les LI dans une boucle
// ----------------------------------------------------------------------------------------------

//Définir les caractéristiques dans le jet de dès
characteristic.addEventListener("click",getTheFirstDice)
characteristic.addEventListener("click",removeTheSameDice)


function getTheFirstDice(event) {
    if (firstDice.value !=="" && secondDice.value !== "" && thirdDice.value !=="" && theLastDice == 2 && fourthDice.value == "")
    fourthDice.value = event.target.textContent
    if (firstDice.value !=="" && secondDice.value !== "" && theLastDice == 1||firstDice.value !=="" && secondDice.value !== "" && fourthDice.value !== "" && thirdDice.value =="" || firstDice.value !=="" && secondDice.value !== "" && fourthDice.value == "" || firstDice.value !== "" && secondDice.value !== "" && theLastDice == 2 &&  thirdDice == "" && fourthDice.value !== "")
    thirdDice.value = event.target.textContent
    if (firstDice.value !== "" && secondDice.value == "")
    secondDice.value = event.target.textContent
    if (secondDice.value == "" && firstDice.value == ""|| firstDice.value == "")
    firstDice.value = event.target.textContent
    event.target.classList.toggle("selected")
    if (theLastDice === 0) thirdDice.value = ""
}

function removeTheSameDice(event) {
    if  (firstDice.value === event.target.textContent && !event.target.classList.contains("selected"))
    firstDice.value = ""
    if  (secondDice.value === event.target.textContent && !event.target.classList.contains("selected"))
    secondDice.value = ""
    if  (thirdDice.value === event.target.textContent && !event.target.classList.contains("selected"))
    thirdDice.value = ""
    if  (fourthDice.value === event.target.textContent && !event.target.classList.contains("selected"))
    fourthDice.value = ""
}

console.log(firstDice.value);
//----------------------------------------------------------------------
//Ajouter et retirer des caractéristiques pour le jet de dès (+ et -)
plusBtn.addEventListener("click",getAnotherCarac)
minusBtn.addEventListener("click",removeAnotherCarac)

let theLastDice = 0

function getAnotherCarac(event) {
    thirdDice.classList.add("active")
    theLastDice ++
    if (theLastDice  >= 2)
    fourthDice.classList.add("active")
    if(theLastDice  >2) theLastDice  = 2
    console.log(theLastDice);
}

function removeAnotherCarac(event) {
    fourthDice.classList.remove("active")
    theLastDice --
    if (theLastDice  < 1)
    thirdDice.classList.remove("active")
    if(theLastDice  <0) theLastDice  = 0
    console.log(theLastDice);
}
//-------------------------------------------------------------------






// (secondDice.value  == "Force"){effectDice.value = strenghtEffect}
// (secondDice.value  == "Endurance") {effectDice.value = staminaEffect}
// (secondDice.value  == "Agilité") {effectDice.value = agilityEffect}
// (secondDice.value  == "Intuition") {effectDice.value = intuitionEffect}
// (secondDice.value  == "Rapidité") {effectDice.value = speedEffect}
// (secondDice.value  == "Réactivité") {effectDice.value = reflexEffect}
// (secondDice.value  == "Perception") {effectDice.value = perceptionEffect}
// (secondDice.value  == "Furtivité") {effectDice.value = stealthEffect}
// (secondDice.value  == "Volonté") {effectDice.value = willEffect}
// (secondDice.value  == "Charisme") {effectDice.value = charismaEffect} 