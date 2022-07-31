const attributeTotal = document.getElementsByClassName("attTt")

const characteristic = document.getElementById("characteristic")
const btnCharacteristic = characteristic.getElementsByClassName("carac");
const queryCharacteristic = characteristic.querySelectorAll("button")
const nBCharacteristic = characteristic.getElementsByClassName("nB")
const adNbCharacteristic = characteristic.getElementsByClassName("adNb")
const tTCharacteristic = characteristic.getElementsByClassName("tT")

console.table(nBCharacteristic);
// console.table(btn2Characteristic);

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

const vitality = document.getElementById("vitalityTotal")
const defMelee = document.getElementById("defMeleeTotal")
const defRange = document.getElementById("defRangeTotal")
const energie = document.getElementById("energieTotal")
const detection = document.getElementById("detectionTotal")
const symbiosis = document.getElementById("symbiosisTotal")

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

const position = document.querySelectorAll("img")
const textPos = document.getElementById("textPos")
const defaultPos = document.getElementById("defaultPos")
const textDefaultPos = "Position neutre : Sans bonus, sans malus"
const offPos = document.getElementById("offPos")
const textOffPos = "Position offensive : +3D à l'attaque, -2 en Def Mêlée et Def Distance"
const defPos = document.getElementById("defPos")
const textDefPof = "Position défensive : +2 en Def Mêlée, -3D à l'attaque"
const covPos = document.getElementById("covPos")
const textCovPos = "Position à couvert : +2 en Def Distance, -3D à l'attaque" 
const aggPos = document.getElementById("aggPos")
const textAggPos = "Position de provocation : +1 en Def Mêleé et Def Distance. Statut : Aggro"
const comPos = document.getElementById("comPos")
const textComPos = "Position d'action combiné : Vous pouvez effectuer des actions combinées" 
const techPos = document.getElementById("techPos")
const textTechPos = "Position technique : Vous pouvez effectuer une action technique" 
//les valeurs sont temporaires
//-------------------------------------------------------
        console.log(typeof document.getElementById("symbiosisTotal").value);


// let totalStrenght = parseInt(document.getElementById("totalStrenght").value)
// console.log(totalStrenght);

// let baseStrenght = parseInt(document.getElementById("baseStrenght").value)
// console.log(baseStrenght);

// let adStrenght = parseInt(document.getElementById("adStrenght").value)
// console.log(adStrenght);

// let calcStrenght = (baseStrenght+adStrenght)
// console.log((calcStrenght));

// document.getElementById("totalStrenght").value = calcStrenght
//changer la valeur html grâce au bouton, ne change pas le total
//intégrer les LI dans une boucle
// ----------------------------------------------------------------------------------------------
//Définir les caractéristiques dans le jet de dès
queryCharacteristic.forEach(function(button){
    button.addEventListener("click",getTheDice)
    button.addEventListener("click",removeTheSameDice)
    button.addEventListener("click",getTheEffect)
    button.addEventListener("click",setTheEffect)
 })

function getTheDice(event) {
    if (firstDice.value !=="" && secondDice.value !== "" && thirdDice.value !=="" && theLastDice == 2 && fourthDice.value == "")
    fourthDice.value = event.target.textContent 
    if (firstDice.value !=="" && secondDice.value !== ""&& thirdDice.value == "" && theLastDice == 1 || firstDice.value !=="" && secondDice.value !== "" &&  thirdDice.value == "" && theLastDice == 2)
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
}

function removeAnotherCarac(event) {
    fourthDice.classList.remove("active")
    theLastDice --
    if (theLastDice  < 1)
    thirdDice.classList.remove("active")
    if(theLastDice  <0) theLastDice  = 0
}
//-------------------------------------------------------------------


function getTheEffect(params) {
        if (theLastDice ==0) effectDice.value = secondDice.value
        if (theLastDice ==1) effectDice.value = thirdDice.value
        if (theLastDice ==2) effectDice.value = fourthDice.value
    }
    
 function setTheEffect(getTheEffect){
        if(effectDice.value === "Force") {effectDice.value = strenghtEffect}
        if(effectDice.value === "Endurance") {effectDice.value = staminaEffect}
        if(effectDice.value === "Agilité") {effectDice.value = agilityEffect}
        if(effectDice.value === "Intuition") {effectDice.value = intuitionEffect}
        if(effectDice.value === "Rapidité") {effectDice.value = speedEffect}
        if(effectDice.value === "Réactivité") {effectDice.value = reflexEffect}
        if(effectDice.value === "Perception") {effectDice.value = perceptionEffect}
        if(effectDice.value === "Furtivité") {effectDice.value = stealthEffect}
        if(effectDice.value === "Volonté") {effectDice.value = willEffect}
        if(effectDice.value === "Charisme") {effectDice.value = charismaEffect} 
}   
//-------------------------------------------------------------------

//Définir les caractéristiques (on va d'abord faire en sorte que le reste fonctionne)
vitality.value = (parseInt(document.getElementById("totalStrenght").value)+parseInt(document.getElementById("totalStamina").value))*10
console.log(vitality.value);
defMelee.value = (parseInt(document.getElementById("totalAgility").value)+parseInt(document.getElementById("totalInstinct").value))
defRange.value = (parseInt(document.getElementById("totalSpeed").value)+parseInt(document.getElementById("totalReflex").value))
energie.value = (parseInt(document.getElementById("totalWill").value)+parseInt(document.getElementById("totalCharisma").value))*10
detection.value = (parseInt(document.getElementById("totalPerception").value)+parseInt(document.getElementById("totalStealth").value))



//-----------------------------------------------------------
//Définir les postures
position.forEach(function(img){
    img.addEventListener("click",getThePosition)
 })

function getThePosition(event) {
    if (event.target.classList.value === "defaultPos")
    textPos.value = textDefaultPos
    if (event.target.classList.value === "offPos")
    textPos.value = textOffPos
    if (event.target.classList.value === "defPos")
    textPos.value = textDefPof
    if (event.target.classList.value === "covPos")
    textPos.value = textCovPos
    if (event.target.classList.value === "aggPos")
    textPos.value = textAggPos
    if (event.target.classList.value === "comPos")
    textPos.value = textComPos 
    if (event.target.classList.value === "techPos")
    textPos.value = textTechPos 
}
//--------------------------------------------------------------

// // document.querySelectorAll(dataset.data-id)
// function totalCarac(params) {
//     let base = document.querySelectorAll.dataset.base
// }
let toto = document.querySelectorAll("[data-base]")
let titi = document.querySelectorAll("[data-advantage]")
let tutu = document.querySelectorAll("[data-total]")
console.log(toto);
console.log(titi);
console.log(tutu);




// console.log(document.querySelectorAll("[data-base]"));







// TO DO LIST > Limiter le nombre de toggle
//             