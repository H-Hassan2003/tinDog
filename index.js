import Dog from "./Dog.js"
import dogs from "./data.js"

let dogsArray = ["dogRex", "dogBella", "dogTeddy"]

function changeDog() {
    const nextDogData = dogs[dogsArray.shift()]
    return nextDogData ? new Dog(nextDogData) : {}
}

document.getElementById("like").addEventListener("click", function() {
    if (!newDog.hasBeenLiked) {
        newDog.hasBeenLiked = true
        newDog.hasBeenSwiped = false
        renderUser()
        if (dogsArray.length > 0) {
            setTimeout(() => {
                newDog = changeDog()
                renderUser()
            }, 3000)
        }
        else {
            renderUser()
        }
    }

})

document.getElementById("dislike").addEventListener("click", function() {
    if (!newDog.hasBeenSwiped) {
        newDog.hasBeenSwiped = true
        newDog.hasBeenLiked = false
        renderUser()
        if (dogsArray.length > 0) {
            setTimeout(() => {
                newDog = changeDog()
                renderUser()
            }, 3000)
        }
        else {
            renderUser()
        }
    }
    
})

let newDog = changeDog()
renderUser()

function renderUser() {
    document.getElementById("user-details").innerHTML = newDog.getUserHtml()
}


