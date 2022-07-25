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


function getTheFirstDice(event) {
    (document.getElementById("firstDice")).value = event.target.textContent
    this.removeEventListener("click",getTheFirstDice)
    characteristic.addEventListener("click",getTheSecondDice)
    getTheBonusEffet
   }

function getTheSecondDice(event) {
    (document.getElementById("secondDice")).value = event.target.textContent 
    }

//Ajouter et retirer des caractéristiques pour le jet de dès
plusBtn.addEventListener("click",getAnotherCarac)
minusBtn.addEventListener("click",removeAnotherCarac)

let tutu = 0

function getAnotherCarac(event) {
    thirdDice.classList.add("active")
    tutu++
    if (tutu >= 2)
        fourthDice.classList.add("active")
        if(tutu >2) tutu = 2
        console.log((thirdDice.classList.contains("active")));
        console.log(tutu);
}

function removeAnotherCarac(event) {
    fourthDice.classList.remove("active")
    tutu--
    if (tutu < 1)
    thirdDice.classList.remove("active")
    if(tutu <0) tutu = 0
    // plusBtn.removeEventListener("click",getAnotherCarac)
    console.log(tutu);
    
}


function getTheBonusEffet() {
//    if (secondDice.value  === ""){effectDice.value = "Sans effet"}a faire plus tard.
       
}
strenghtBtn.addEventListener("click",getTheBonusEffet)



  
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