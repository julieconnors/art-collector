const artworkEndpoint = "http://localhost:3000/api/v1/artworks"

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button")

    fetchArtworks()

    button.addEventListener("click", () => renderForm())
})

function fetchArtworks() {
    fetch(artworkEndpoint)
    .then(res => res.json())
    .then(json => json.data.forEach(obj => {
        let artwork = new Artwork(obj, obj.attributes)
        artwork.renderArtwork()
        
        document.querySelector(`.delete-${artwork.id}`).addEventListener("click", () => {
            deleteFetch(artwork.id)
        })
    }
    ))
}

function renderForm(){
    document.querySelector("#form-container").style.visibility = "visible"
    document.querySelector("button").style.visibility = 'hidden'

    mountFormListener()
}

function mountFormListener() {
    const form = document.querySelector(".artwork-form")
    form.addEventListener("submit", (e) => createArtworkFormHandler(e))
}

function createArtworkFormHandler(e){
    e.preventDefault()

    const artworkTitle = document.querySelector("#artwork-title").value
    const artworkImage = document.querySelector("#artwork-image").value
    const artistId = parseInt(document.querySelector("#artwork-artist").value)

    postFetch(artworkTitle, artworkImage, artistId)
}

function postFetch(title, image, artist_id) {
    const artworkData = {title, image, artist_id}
    fetch(artworkEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(artworkData)
    })
    .then(res => res.json())
    .then(artwork => {
        let newArtwork = new Artwork(artwork.data, artwork.data.attributes)
        newArtwork.renderArtwork()

        document.querySelector(`.delete-${newArtwork.id}`).addEventListener("click", () => {
            deleteFetch(newArtwork.id)
        })

        document.querySelector("#form-container").style.visibility = "hidden"
        document.querySelector("button").style.visibility = "visible"
    })
}

function deleteFetch(id) {
    fetch(`http://localhost:3000/api/v1/artworks/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(resp => resp.json())
    .then(artwork => {
        document.getElementById(`${artwork.data.id}`).remove()
    })
}