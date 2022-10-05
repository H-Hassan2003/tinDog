class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setBadgeHtml() {
        if (this.hasBeenLiked || this.hasBeenSwiped) {
            if (this.hasBeenLiked) {
                return `
                <div class="badge-like"><img class="badge" src="images/badge-like.png" alt="like badge"></div>
                `
            } else {
                return `
                <div class="badge-nope"><img class="badge" src="images/badge-nope.png" alt="nope badge"></div>
                `
            }

        } else {
            return ""
        }
    }

    getUserHtml() {
        const { name, age, avatar, bio, diceHtml } = this
        const badge = this.setBadgeHtml()
        return `
            <h1 id="userName">${name}, <span id="userAge">${age}</span></h1>
            <p id="userBio">${bio}</p>
                ${badge}
            <div class="user-image-container"><img id="user-image" src="${avatar}" alt="Teddy the dog image"></div>`
    }

}

export default Dog