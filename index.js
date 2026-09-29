//Selecting Elements
const textPredict = document.getElementById("predictInput")
const btnPredict = document.getElementById("predictBtn")
const resultPredict = document.getElementById("predictResults")

//Evaluation Function
function predictHandler(){
    const userPredict = Number(textPredict.value)
    const RandomNum = Math.floor(Math.random() * 6) + 1 // 1–6, fresh roll each click
    console.log(userPredict, RandomNum)

    //Checking Condition of Prediction
    if (isNaN(userPredict) || userPredict < 1 || userPredict > 6) {
        resultPredict.innerText = "Invalid Entry"
        textPredict.value = ""
    } else if (userPredict === RandomNum) {
        resultPredict.innerText = `Win! The number was ${RandomNum}.`
       textPredict.value = ""
        //Confetti 
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } })
    } else {
        resultPredict.innerText = `Loss. The number was ${RandomNum}.`
        textPredict.value = ""
    }
}

//Activating the Button
btnPredict.addEventListener("click", predictHandler)


