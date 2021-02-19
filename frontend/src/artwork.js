class Artwork {

    constructor(artwork, artworkAttributes) {
        this.id = artwork.id
        this.title = artworkAttributes.title
        this.image = artworkAttributes.image
        this.artist = artworkAttributes.artist

        Artwork.all.push(this)
    }

    renderArtwork() {
        const container = document.querySelector("#main")

        let frame = document.createElement("div")
        frame.setAttribute("id", this.id)

        let image = document.createElement("img")
        image.src = this.image

        let title = document.createElement("h3")
        title.innerHTML = this.title

        let artist = document.createElement("p")
        artist.innerHTML = this.artist.name

        let deleteButton = document.createElement("button")
        deleteButton.innerHTML = "Remove from Collection"
        deleteButton.setAttribute("class", `delete-${this.id}`)

        frame.appendChild(image)
        frame.appendChild(title)
        frame.appendChild(artist)
        frame.appendChild(deleteButton)

        container.appendChild(frame)
    }
}

Artwork.all = []