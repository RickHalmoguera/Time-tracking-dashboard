const activitiesCard = document.getElementById("activitiesCard")
const dailyBtn =  document.getElementById("dailyBtn")
const weeklyBtn =  document.getElementById("weeklyBtn")
const monthlyBtn =  document.getElementById("monthlyBtn")

let selectedTimeframe = "weekly";
let pathCurrent 
let pathPrevious
let timeFrame = "Week"

const getData = ()=>{
    fetch('./data/data.json')
    .then(response => response.json())
    .then(data => displayCards(data));
}

getData()

dailyBtn.addEventListener("click", ()=> {
    selectedTimeframe = "daily"
    timeFrame = "Day"
    activitiesCard.innerHTML = ""
    dailyBtn.classList.remove("not-selected")
    weeklyBtn.classList.add("not-selected")
    monthlyBtn.classList.add("not-selected")
    getData()
})
weeklyBtn.addEventListener("click", ()=> {
    selectedTimeframe = "weekly"
    timeFrame = "Week"
    activitiesCard.innerHTML = ""
    dailyBtn.classList.add("not-selected")
    weeklyBtn.classList.remove("not-selected")
    monthlyBtn.classList.add("not-selected")
    getData()
})

monthlyBtn.addEventListener("click", ()=> {
    selectedTimeframe = "monthly"
    timeFrame = "Moth"
    activitiesCard.innerHTML = ""
    dailyBtn.classList.add("not-selected")
    weeklyBtn.classList.add("not-selected")
    monthlyBtn.classList.remove("not-selected")
    getData()
})

const displayCards = (data)=>{

    data.forEach(element => {

        if(selectedTimeframe == "weekly"){
            pathCurrent = element.timeframes.weekly.current
            pathPrevious = element.timeframes.weekly.previous
        }else if(selectedTimeframe == "daily"){
            pathCurrent = element.timeframes.daily.current
            pathPrevious = element.timeframes.daily.previous
        }else if(selectedTimeframe == "monthly"){
            pathCurrent = element.timeframes.monthly.current
            pathPrevious = element.timeframes.monthly.previous
        }

        activitiesCard.innerHTML +=
        `<div class="card-container" id="card${data.indexOf(element)}">
        <div class="card-background-container" id="bgColor${data.indexOf(element)}">
            <img id="bgImg${data.indexOf(element)}"alt="">
        </div>

        <div class="card-text-container">
            <div class="card-header">
                <span>${element.title}</span>
                <img src="./images/icon-ellipsis.svg" alt="ellipsis">
            </div>
            <div class="card-text">
                <span class="card-text-hours">
                ${pathCurrent}hrs
                </span>
                <span class="card-text-last">Last ${timeFrame} - ${pathPrevious}hrs </span>
            </div>
        </div>
    </div>` 

        if(element.title == "Work"){
            const bgImg0 = document.getElementById("bgImg0")
            const bgColor0 = document.getElementById("bgColor0")

            bgImg0.src="./images/icon-work.svg"
            bgColor0.classList.add("work")
        }else if(element.title == "Play"){
            const bgImg1 = document.getElementById("bgImg1")
            const bgColor1 = document.getElementById("bgColor1")

            bgImg1.src="./images/icon-play.svg"
            bgColor1.classList.add("play")
        }else if(element.title == "Study"){
            const bgImg2 = document.getElementById("bgImg2")
            const bgColor2 = document.getElementById("bgColor2")

            bgImg2.src="./images/icon-study.svg"
            bgColor2.classList.add("study")
        }else if(element.title == "Exercise"){
            const bgImg3 = document.getElementById("bgImg3")
            const bgColor3 = document.getElementById("bgColor3")

            bgImg3.src="./images/icon-exercise.svg"
            bgColor3.classList.add("exercise")
        }else if(element.title == "Social"){
            const bgImg4 = document.getElementById("bgImg4")
            const bgColor4 = document.getElementById("bgColor4")

            bgImg4.src="./images/icon-social.svg"
            bgColor4.classList.add("social")
        }else if(element.title == "Self Care"){
            const bgImg5 = document.getElementById("bgImg5")
            const bgColor5 = document.getElementById("bgColor5")

            bgImg5.src="./images/icon-self-care.svg"
            bgColor5.classList.add("self-care")
        }
        
    });
}


