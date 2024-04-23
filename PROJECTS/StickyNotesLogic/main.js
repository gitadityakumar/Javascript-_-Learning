let newX = 0, newY = 0, startX = JSON.parse(localStorage.getItem('startX')), startY = JSON.parse(localStorage.getItem('startY'));

const card = document.getElementsByClassName("card")[0]
//setting card positon according to localstorage pos

card.style.top = startY
card.style.left = startX

const toBeSaved = {}

card.addEventListener('mousedown', mouseDown)

function mouseDown(e){
    startX = e.clientX;
    startY = e.clientY;
    console.log("mouse down triggered", startX ,startY);
    document.addEventListener('mousemove',mouseMove)
    document.addEventListener('mouseup',mouseUp)

}

function mouseMove(e) {
    // calculate the new position
        newX = startX - e.clientX;
        newY = startY - e.clientY;

        // with each move we also want to update the start X and Y
        startX = e.clientX;
        startY = e.clientY;

        // set the element's new position:
        card.style.top = (card.offsetTop - newY) + "px";
        card.style.left = (card.offsetLeft - newX) + "px";
}

  
function mouseUp(){
    document.removeEventListener('mousemove',mouseMove)
    toBeSaved['startX'] = JSON.stringify((card.offsetLeft - newX) + "px")
    toBeSaved['startY'] = JSON.stringify((card.offsetTop - newY) + "px")


}

function saveData(){
    console.log("Checking for data to be  saved")
    Object.keys(toBeSaved).forEach(function(key){
        localStorage.setItem(key, toBeSaved[key])
        console.log(`updated ${key}`)
        delete toBeSaved[key]
    })
}

setInterval(saveData,1000)