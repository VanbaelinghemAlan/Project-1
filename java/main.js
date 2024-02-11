const attributeTotal = document.getElementsByClassName("attTt")

const characteristic = document.getElementById("characteristic")
const btnCharacteristic = characteristic.getElementsByClassName("carac");
const queryCharacteristic = characteristic.querySelectorAll("button")
const nBCharacteristic = characteristic.getElementsByClassName("nB")
const adNbCharacteristic = characteristic.getElementsByClassName("adNb")
const tTCharacteristic = characteristic.getElementsByClassName("tT")

    const baseList = document.getElementsByClassName("nB")
    const adList = document.getElementsByClassName("adNb")
    const caractTl = document.getElementsByClassName("tT")

        const strenghtBtn = document.getElementById("strenght")

const firstDice = document.getElementById("firstDice")
const secondDice = document.getElementById("secondDice")
const thirdDice = document.getElementById("thirdDice")
const fourthDice = document.getElementById("fourthDice")

const oneRoundedInput = document.getElementById("oneRounded-input")
const twoRoundedInput = document.getElementById("twoRounded-input")
const threeRoundedInput = document.getElementById("threeRounded-input")
const fourRoundedInput = document.getElementById("fourRounded-input")

const mastery1 = document.getElementById("mastery1")
const mastery2 = document.getElementById("mastery2")
const mastery3 = document.getElementById("mastery3")
const mastery4 = document.getElementById("mastery4")

const totalDice = document.getElementById("totalDice")
const buttonDice = document.getElementById("buttonDice")

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

const baseStrenght = document.getElementById("baseStrenght")
const baseStamina = document.getElementById("baseStamina")
const baseAgility = document.getElementById("baseAgility")
const baseInstinct = document.getElementById("baseInstinct")
const baseSpeed = document.getElementById("baseSpeed")
const baseReflex = document.getElementById("baseReflex")
const basePerception = document.getElementById("basePerception")
const baseStealth = document.getElementById("baseStealth")
const baseWill = document.getElementById("baseWill")
const baseCharisma = document.getElementById("baseCharisma")

const adStrenght = document.getElementById("adStrenght")
const adStamina = document.getElementById("adStamina")
const adAgility = document.getElementById("adAgility")
const adInstinct = document.getElementById("adInstinct")
const adSpeed = document.getElementById("adSpeed")
const adReflex = document.getElementById("adReflex")
const adPerception = document.getElementById("adPerception")
const adStealth = document.getElementById("adStealth")
const adWill = document.getElementById("adWill")
const adCharisma = document.getElementById("adCharisma")

const totalStrenght = document.getElementById("totalStrenght")
const totalStamina = document.getElementById("totalStamina")
const totalAgility = document.getElementById("totalAgility")
const totalInstinct1 = document.getElementById("totalInstinct")
const totalSpeed = document.getElementById("totalSpeed")
const totalReflex = document.getElementById("totalReflex")
const totalPerception = document.getElementById("totalPerception")
const totalStealth = document.getElementById("totalStealth")
const totalWill = document.getElementById("totalWill")
const totalCharisma = document.getElementById("totalCharisma")

const strenghtEffect = "Vous obtenez +10 à vos dégâts !"
const staminaEffect = "Réduit les prochains dégâts de 10 !"
const agilityEffect = "Vous obtenez +1 Avantage sur votre jet"
const InstinctEffect = "Vous augmentez votre défense de mêlée et à distance de 1"
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
const caracNames = ["Strenght", "Stamina", "Agility", "Instinct", "Speed", "Reflex", "Perception", "Stealth", "Will", "Charisma"]; 

caracNames.forEach(name => {
  const baseInput = document.getElementById(`base${name}`);
  const adInput = document.getElementById(`ad${name}`);
  const totalInput = document.getElementById(`total${name}`);

    // Charger les valeurs enregistrées dans localStorage
    baseInput.value = localStorage.getItem(`base${name}`) || baseInput.value;
    adInput.value = localStorage.getItem(`ad${name}`) || adInput.value;
    updateTotal();

  baseInput.addEventListener("input", updateTotal);
  adInput.addEventListener("input", updateTotal);
  

  function updateTotal() {
    totalInput.value = parseInt(baseInput.value) + parseInt(adInput.value);
        // Enregistrer les valeurs dans localStorage
        localStorage.setItem(`base${name}`, baseInput.value);
        localStorage.setItem(`ad${name}`, adInput.value);
  }
});

// ----------------------------------------------------------------------------------------------
//Définir les caractéristiques dans le jet de dès
queryCharacteristic.forEach(function(button){
    button.addEventListener("click",getTheDice)
    button.addEventListener("click",removeTheSameDice)
    button.addEventListener("click",getTheEffect)
    button.addEventListener("click",setTheEffect)
    button.addEventListener("click",removeTheRounded)
    button.addEventListener("click",getTheTotalDice)
    button.addEventListener("click",getTheRounded)
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

//Affiche le nombre de dès en fonction de la caractéristique choisi
    if (firstDice.value === "Force" && event.target.classList.contains("selected")){    
      oneRoundedInput.value = baseStrenght.value}
    if (firstDice.value === "Endurance" && event.target.classList.contains("selected")){
      oneRoundedInput.value = baseStamina.value}
    if (firstDice.value === "Agilité" && event.target.classList.contains("selected")){    
      oneRoundedInput.value = baseAgility.value}
    if (firstDice.value === "Intuition" && event.target.classList.contains("selected")){
      oneRoundedInput.value = baseInstinct.value}
    if (firstDice.value === "Rapidité" && event.target.classList.contains("selected")){    
      oneRoundedInput.value = baseSpeed.value}
    if (firstDice.value === "Réactivité" && event.target.classList.contains("selected")){
      oneRoundedInput.value = baseReflex.value}
    if (firstDice.value === "Perception" && event.target.classList.contains("selected")){    
      oneRoundedInput.value = basePerception.value}
    if (firstDice.value === "Furtivité" && event.target.classList.contains("selected")){
      oneRoundedInput.value = baseStealth.value}
    if (firstDice.value === "Volonté" && event.target.classList.contains("selected")){
      oneRoundedInput.value = baseWill.value}
    if (firstDice.value === "Charisme" && event.target.classList.contains("selected")){
      oneRoundedInput.value = baseCharisma.value}

      if (secondDice.value === "Force" && event.target.classList.contains("selected")){    
        twoRoundedInput.value = baseStrenght.value}
      if (secondDice.value === "Endurance" && event.target.classList.contains("selected")){
        twoRoundedInput.value = baseStamina.value}
      if (secondDice.value === "Agilité" && event.target.classList.contains("selected")){    
        twoRoundedInput.value = baseAgility.value}
      if (secondDice.value === "Intuition" && event.target.classList.contains("selected")){
        twoRoundedInput.value = baseInstinct.value}
      if (secondDice.value === "Rapidité" && event.target.classList.contains("selected")){    
        twoRoundedInput.value = baseSpeed.value}
      if (secondDice.value === "Réactivité" && event.target.classList.contains("selected")){
        twoRoundedInput.value = baseReflex.value}
      if (secondDice.value === "Perception" && event.target.classList.contains("selected")){    
        twoRoundedInput.value = basePerception.value}
      if (secondDice.value === "Furtivité" && event.target.classList.contains("selected")){
        twoRoundedInput.value = baseStealth.value}
      if (secondDice.value === "Volonté" && event.target.classList.contains("selected")){
        twoRoundedInput.value = baseWill.value}            
      if (secondDice.value === "Charisme" && event.target.classList.contains("selected")){
        twoRoundedInput.value = baseCharisma.value}

        if (thirdDice.value === "Force" && event.target.classList.contains("selected")){    
          threeRoundedInput.value = baseStrenght.value}
        if (thirdDice.value === "Endurance" && event.target.classList.contains("selected")){
          threeRoundedInput.value = baseStamina.value}
        if (thirdDice.value === "Agilité" && event.target.classList.contains("selected")){    
          threeRoundedInput.value = baseAgility.value}
        if (thirdDice.value === "Intuition" && event.target.classList.contains("selected")){
          threeRoundedInput.value = baseInstinct.value}
        if (thirdDice.value === "Rapidité" && event.target.classList.contains("selected")){    
          threeRoundedInput.value = baseSpeed.value}
        if (thirdDice.value === "Réactivité" && event.target.classList.contains("selected")){
          threeRoundedInput.value = baseReflex.value}
        if (thirdDice.value === "Perception" && event.target.classList.contains("selected")){    
          threeRoundedInput.value = basePerception.value}
        if (thirdDice.value === "Furtivité" && event.target.classList.contains("selected")){
          threeRoundedInput.value = baseStealth.value}
        if (thirdDice.value === "Volonté" && event.target.classList.contains("selected")){
          threeRoundedInput.value = baseWill.value}            
        if (thirdDice.value === "Charisme" && event.target.classList.contains("selected")){
          threeRoundedInput.value = baseCharisma.value}
  
          if (fourthDice.value === "Force" && event.target.classList.contains("selected")){    
            fourRoundedInput.value = baseStrenght.value}
          if (fourthDice.value === "Endurance" && event.target.classList.contains("selected")){
            fourRoundedInput.value = baseStamina.value}
          if (fourthDice.value === "Agilité" && event.target.classList.contains("selected")){    
            fourRoundedInput.value = baseAgility.value}
          if (fourthDice.value === "Intuition" && event.target.classList.contains("selected")){
            fourRoundedInput.value = baseInstinct.value}
          if (fourthDice.value === "Rapidité" && event.target.classList.contains("selected")){    
            fourRoundedInput.value = baseSpeed.value}
          if (fourthDice.value === "Réactivité" && event.target.classList.contains("selected")){
            fourRoundedInput.value = baseReflex.value}
          if (fourthDice.value === "Perception" && event.target.classList.contains("selected")){    
            fourRoundedInput.value = basePerception.value}
          if (fourthDice.value === "Furtivité" && event.target.classList.contains("selected")){
            fourRoundedInput.value = baseStealth.value}
          if (fourthDice.value === "Volonté" && event.target.classList.contains("selected")){
            fourRoundedInput.value = baseWill.value}            
          if (fourthDice.value === "Charisme" && event.target.classList.contains("selected")){
            fourRoundedInput.value = baseCharisma.value}
    }      

function getTheRounded(event){
  if (firstDice.value === "Force" && event.target.classList.contains("selected")){  
    mastery1.value = adStrenght.value}
  if (firstDice.value === "Endurance" && event.target.classList.contains("selected")){
    mastery1.value = adStamina.value}
  if (firstDice.value === "Agilité" && event.target.classList.contains("selected")){    
    mastery1.value = adAgility.value}
  if (firstDice.value === "Intuition" && event.target.classList.contains("selected")){
    mastery1.value = adInstinct.value}
  if (firstDice.value === "Rapidité" && event.target.classList.contains("selected")){    
    mastery1.value = adSpeed.value}
  if (firstDice.value === "Réactivité" && event.target.classList.contains("selected")){
    mastery1.value = adReflex.value}
  if (firstDice.value === "Perception" && event.target.classList.contains("selected")){    
    mastery1.value = adPerception.value}
  if (firstDice.value === "Furtivité" && event.target.classList.contains("selected")){
    mastery1.value = adStealth.value}
  if (firstDice.value === "Volonté" && event.target.classList.contains("selected")){
    mastery1.value = adWill.value}
  if (firstDice.value === "Charisme" && event.target.classList.contains("selected")){
    mastery1.value = adCharisma.value}

    if (secondDice.value === "Force" && event.target.classList.contains("selected")){    
      mastery2.value = adStrenght.value}
    if (secondDice.value === "Endurance" && event.target.classList.contains("selected")){
      mastery2.value = adStamina.value}
    if (secondDice.value === "Agilité" && event.target.classList.contains("selected")){    
      mastery2.value = adAgility.value}
    if (secondDice.value === "Intuition" && event.target.classList.contains("selected")){
      mastery2.value = adInstinct.value}
    if (secondDice.value === "Rapidité" && event.target.classList.contains("selected")){    
      mastery2.value = adSpeed.value}
    if (secondDice.value === "Réactivité" && event.target.classList.contains("selected")){
      mastery2.value = adReflex.value}
    if (secondDice.value === "Perception" && event.target.classList.contains("selected")){    
      mastery2.value = adPerception.value}
    if (secondDice.value === "Furtivité" && event.target.classList.contains("selected")){
      mastery2.value = adStealth.value}
    if (secondDice.value === "Volonté" && event.target.classList.contains("selected")){
      mastery2.value = adWill.value}            
    if (secondDice.value === "Charisme" && event.target.classList.contains("selected")){
      mastery2.value = adCharisma.value}

      if (thirdDice.value === "Force" && event.target.classList.contains("selected")){    
        mastery3.value = adStrenght.value}
      if (thirdDice.value === "Endurance" && event.target.classList.contains("selected")){
        mastery3.value = adStamina.value}
      if (thirdDice.value === "Agilité" && event.target.classList.contains("selected")){    
        mastery3.value = adAgility.value}
      if (thirdDice.value === "Intuition" && event.target.classList.contains("selected")){
        mastery3.value = adInstinct.value}
      if (thirdDice.value === "Rapidité" && event.target.classList.contains("selected")){    
        mastery3.value = adSpeed.value}
      if (thirdDice.value === "Réactivité" && event.target.classList.contains("selected")){
        mastery3.value = adReflex.value}
      if (thirdDice.value === "Perception" && event.target.classList.contains("selected")){    
        mastery3.value = adPerception.value}
      if (thirdDice.value === "Furtivité" && event.target.classList.contains("selected")){
        mastery3.value = adStealth.value}
      if (thirdDice.value === "Volonté" && event.target.classList.contains("selected")){
        mastery3.value = adWill.value}            
      if (thirdDice.value === "Charisme" && event.target.classList.contains("selected")){
        mastery3.value = adCharisma.value}

        if (fourthDice.value === "Force" && event.target.classList.contains("selected")){    
          mastery4.value = adStrenght.value}
        if (fourthDice.value === "Endurance" && event.target.classList.contains("selected")){
          mastery4.value = adStamina.value}
        if (fourthDice.value === "Agilité" && event.target.classList.contains("selected")){    
          mastery4.value = adAgility.value}
        if (fourthDice.value === "Intuition" && event.target.classList.contains("selected")){
          mastery4.value = adInstinct.value}
        if (fourthDice.value === "Rapidité" && event.target.classList.contains("selected")){    
          mastery4.value = adSpeed.value}
        if (fourthDice.value === "Réactivité" && event.target.classList.contains("selected")){
          mastery4.value = adReflex.value}
        if (fourthDice.value === "Perception" && event.target.classList.contains("selected")){    
          mastery4.value = adPerception.value}
        if (fourthDice.value === "Furtivité" && event.target.classList.contains("selected")){
          mastery4.value = adStealth.value}
        if (fourthDice.value === "Volonté" && event.target.classList.contains("selected")){
          mastery4.value = adWill.value}            
        if (fourthDice.value === "Charisme" && event.target.classList.contains("selected")){
          mastery4.value = adCharisma.value}
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
plusBtn.addEventListener("click",getAnotherCarac);
plusBtn.addEventListener("click",getAnotherRounded);
minusBtn.addEventListener("click",removeAnotherCarac);
minusBtn.addEventListener("click",removeAnotherRounded);


let theLastDice = 0;
let theLastDice2 = 0;

function getAnotherCarac(event) {
  thirdDice.classList.add("active")
  mastery3.classList.add("active")
  theLastDice ++
  if (theLastDice  >= 2){
    fourthDice.classList.add("active");
    mastery4.classList.add("active")
  }
  if(theLastDice  >2) {
    theLastDice  = 2; 
    }
  }
  
  function removeAnotherCarac(event) {
    fourthDice.classList.remove("active")
    mastery4.classList.remove("active")
    theLastDice --
    if (theLastDice  < 1){
      thirdDice.classList.remove("active")
      mastery3.classList.remove("active")
    }
    if(theLastDice  <0) {
      theLastDice  = 0
    }
  }
  
  function getAnotherRounded(event) {
    threeRoundedInput.classList.add("active")
    theLastDice2 ++
    if (theLastDice2  >= 2) {
      fourRoundedInput.classList.add("active")
    }
    if(theLastDice2  >2) {
      theLastDice2  = 2 
    }
  }
  
  function removeAnotherRounded(event) {
    fourRoundedInput.classList.remove("active")
    theLastDice2 --
    if (theLastDice2  < 1) {
      threeRoundedInput.classList.remove("active")
    }
    if(theLastDice2  <0) {
      theLastDice2  = 0
    }
  }
  
  // Définir le nombre de caractéristique
  // function numberOfSelected(selectObjet) {
  //   for(let i = 0; i)
  // }


  //-------------------------------------------------------------------
  textPos.addEventListener("input", function() {
    if (textPos.value === "Posture de combat" || textPos.value === "Position neutre : Sans bonus, sans malus") {
      defaultPos.classList.add("animedOff");
    }
  });
  //--------------------------
  
  function getTheEffect(params) {
    if (theLastDice ==0) effectDice.value = secondDice.value
    if (theLastDice ==1) effectDice.value = thirdDice.value
    if (theLastDice ==2) effectDice.value = fourthDice.value
  }
  function setTheEffect(getTheEffect){
    if(effectDice.value === "Force") {effectDice.value = strenghtEffect}
    if(effectDice.value === "Endurance") {effectDice.value = staminaEffect}
    if(effectDice.value === "Agilité") {effectDice.value = agilityEffect}
    if(effectDice.value === "Intuition") {effectDice.value = InstinctEffect}
    if(effectDice.value === "Rapidité") {effectDice.value = speedEffect}
    if(effectDice.value === "Réactivité") {effectDice.value = reflexEffect}
    if(effectDice.value === "Perception") {effectDice.value = perceptionEffect}
    if(effectDice.value === "Furtivité") {effectDice.value = stealthEffect}
    if(effectDice.value === "Volonté") {effectDice.value = willEffect}
    if(effectDice.value === "Charisme") {effectDice.value = charismaEffect} 
  }   
  
  //-------------------------------------------------------------------
  const defMeleeValue = document.getElementById("defMeleeValue")
  const defRangeValue = document.getElementById("defRangeValue")
  const detectionValue = document.getElementById("detectionValue")

 
  //Définir les caractéristiques (on va d'abord faire en sorte que le reste fonctionne)
  vitality.max = (parseInt(document.getElementById("totalStrenght").value)+parseInt(document.getElementById("totalStamina").value))*10
  defMeleeValue.innerText = (parseInt(document.getElementById("totalAgility").value)+parseInt(document.getElementById("totalInstinct").value))
  defRangeValue.innerText = (parseInt(document.getElementById("totalSpeed").value)+parseInt(document.getElementById("totalReflex").value))
  energie.max = (parseInt(document.getElementById("totalWill").value)+parseInt(document.getElementById("totalCharisma").value))*10
  detectionValue.innerText = (parseInt(document.getElementById("totalPerception").value)+parseInt(document.getElementById("totalStealth").value))

  
  let defMeleeTotal = document.getElementById("defMeleeTotal");
  
  totalAgility.addEventListener("input", updateDefMelee);
  totalSpeed.addEventListener("input", updateDefRange);
  totalStrenght.addEventListener("input", updateVitality);
  
  function updateVitality() {
    vitality.value = (parseInt(totalStrenght.value) + parseInt(totalStamina.value)) * 10;
    localStorage.setItem("vitality", vitality.value);
  }

// Les boutons de vitalité

const vitalityButtonPlus = document.getElementById("vitalityButtonPlus")
const vitalityButtonMinos = document.getElementById("vitalityButtonMinos")
const vitalityButtonPlusPlus = document.getElementById("vitalityButtonPlusPlus")
const vitalityVariation = document.getElementById("vitalityVariation")
const vitalityJaugeTotal = document.getElementById("vitalityJaugeTotal")
const vitalityTotal = document.getElementById("vitalityTotal")



vitalityButtonPlus.addEventListener("click", getPlusVitality)
function getPlusVitality(){
  vitality.value += 10
  vitalityVariation.innerText = vitality.value
}

vitalityButtonMinos.addEventListener("click", getMinosVitality)
function getMinosVitality() {
  vitality.value -= 10
  vitalityVariation.innerText = vitality.value
}

vitalityButtonPlusPlus.addEventListener("click", getFullVitality)
function getFullVitality() {
  vitality.value = vitalityTotal.max
  vitalityVariation.innerText = vitality.value
  vitalityJaugeTotal.innerText = vitalityTotal.max
}

// Les boutons d'énergie

const energieButtonPlus = document.getElementById("energieButtonPlus")
const energieButtonMinos = document.getElementById("energieButtonMinos")
const energieButtonPlusPlus = document.getElementById("energieButtonPlusPlus")
const energieVariation = document.getElementById("energieVariation")
const energieTotal = document.getElementById("energieTotal")
const energieJaugeTotal = document.getElementById("energieJaugeTotal")

energieButtonPlus.addEventListener("click", getPlusEnergie)
function getPlusEnergie(){
  energie.value += 10
  energieVariation.innerText = energie.value
}

energieButtonMinos.addEventListener("click", getMinosEnergie)
function getMinosEnergie() {
  energie.value -= 10
  energieVariation.innerText = energie.value
}

energieButtonPlusPlus.addEventListener("click", getFullEnergie)
function getFullEnergie() {
  energie.value = energie.max
  energieVariation.innerText = energie.value
  energieJaugeTotal.innerText = energie.max
}

// Les boutons de symbiose

const symbiosisButtonPlus = document.getElementById("symbiosisButtonPlus")
const symbiosisButtonMinos = document.getElementById("symbiosisButtonMinos")
const symbiosisButtonPlusPlus = document.getElementById("symbiosisButtonPlusPlus")
const symbiosisTotal = document.getElementById("symbiosisTotal")
const symbiosisVariation = document.getElementById("symbiosisVariation")
const symbiosisJaugeTotal = document.getElementById("symbiosisJaugeTotal")

symbiosisButtonPlus.addEventListener("click", getPlusSymbiosis)
function getPlusSymbiosis(){
  symbiosis.value += 10
  symbiosisVariation.innerText = symbiosis.value
}

symbiosisButtonMinos.addEventListener("click", getMinosSymbiosis)
function getMinosSymbiosis() {
  symbiosis.value -= 10
  symbiosisVariation.innerText = symbiosis.value
}

symbiosisButtonPlusPlus.addEventListener("click", getFullSymbiosis)
function getFullSymbiosis() {
  symbiosis.value = symbiosisTotal.max
  symbiosisVariation.innerText = symbiosis.value
  symbiosisJaugeTotal.innerText = energieTotal.max
}

// Prise en compte des caractéristiques pour truc truc

//Agilité + Intuition = DefMêlée
  
  function updateDefMelee() {
    defMeleeValue = (parseInt(totalAgility.value) + parseInt(totalInstinct1.value)).innertext;
    localStorage.setItem("defMelee", defMelee.value);
  }
//Rapidité + Reactivité = DefDistance
  function updateDefRange() {
    defRange.value = (parseInt(totalSpeed.value) + parseInt(totalReflex.value));
  }
//Volonté + Charisme = Energie

  function updateEnergie() {
    energie.value = (parseInt(totalWill.value) + parseInt(totalCharisma.value)) * 10;
  }
//Perception + Discrétion = Détection
  function updateDetection() {
    detection.value = (parseInt(totalPerception.value) + parseInt(totalStealth.value));
  }
  
  function updateTotalAgility() {
    totalAgility.value = parseInt(baseAgility.value) + parseInt(adAgility.value);
    localStorage.setItem("totalAgility", totalAgility.value);
    updateDefMelee();
  }
  const totalInstinct = document.getElementById("totalInstinct");
  totalInstinct.addEventListener("input", updateDefMelee);
  
  
  
  function removeTheRounded(event) {
    if (firstDice.value == "" && !event.target.classList.contains("selected"))
    oneRoundedInput.value = 0
    mastery1.value = 0
    if (secondDice.value == "" && !event.target.classList.contains("selected"))
    twoRoundedInput.value = 0
    mastery2.value = 0
    if (thirdDice.value == "" && !event.target.classList.contains("selected"))
    threeRoundedInput.value = 0
  mastery3.value = 0
    if (fourthDice.value == "" && !event.target.classList.contains("selected"))
    fourRoundedInput.value = 0
  mastery4.value = 0
  }
  
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

// ------------------------------------------------------------

function getTheTotalDice(event) {
    totalDice.value = parseInt(oneRoundedInput.value) + parseInt(twoRoundedInput.value) + parseInt(threeRoundedInput.value) + parseInt(fourRoundedInput.value)
  }





  //----------------------------
  //-----Les états je selectionne tous les IMG dans les effets
  const allEffect = document.getElementById("allEffect")
  const queryImg = allEffect.querySelectorAll("img")

  queryImg.forEach(function(img){  
    img.addEventListener("click",getTheEffect)
     })
  
     //Je crée une fonction pour ajouter la classe active
      function getTheEffect() {
        this.classList.toggle("active")
      }

      
