class Artist {

    constructor(artist, artistAttributes) {
        this.id = artist.id
        this.name = artistAttributes.name
        Artist.all.push(this)
    }

    addSelectOption() {
        let select = document.querySelector("#artwork-artist")
        let option = document.createElement("option")
        option.innerHTML = this.name
        option.setAttribute("value", this.id)

        select.appendChild(option)
    }
}

Artist.all = []