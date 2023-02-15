const buttonElement = document.getElementById('btn')

const containerElement = document.getElementById('container')

let selectedRating = ""

const ratingElements = document.querySelectorAll('.rating')

ratingElements.forEach((ratingElement) =>{
    ratingElement.addEventListener('click', (event)=>{
        // console.log(event.target.innerText || event.target.parentNode.innerText)
        removeActive()
        selectedRating = 
        event.target.innerText || event.target.parentNode.innerText
        event.target.parentNode.classList.add('active')
        event.target.classList.add('active')
    })
})

function removeActive() {
    ratingElements.forEach((ratingElement)=>{
        ratingElement.classList.remove('active')
    })
} 

buttonElement.addEventListener('click', ()=>{
    if(selectedRating !== ""){
    containerElement.innerHTML = `
    <strong>Thank You!</strong>
    <br>
    <br>
    Feedback: ${selectedRating}
    <br>
    <br>
    We Care Your Rating To Improve
    `
    }
})