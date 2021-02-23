class Artist {

    constructor(name) {
        this.name = name
        Artist.all.push(this)
    }

    addSelectOption() {
        let select = document.querySelector("#artwork-artist")
        let option = document.createElement("option")
        option.innerHTML = this.name

        select.appendChild(option)
    }
}

Artist.all = []