const apiService = new Service()

document.addEventListener("DOMContentLoaded", () => {

    // const addArtworkButton = document.querySelector("#add-artwork-button")
    const addArtistButton = document.querySelector("#add-artist-button")
    
    addArtistButton.addEventListener("click", () => renderArtistForm())
    // addArtworkButton.addEventListener("click", () => displayForm())

    mountFormListener()
    apiService.fetchArtworks()
    apiService.fetchArtists()
})

function renderArtistForm() {
    const addArtistForm = document.querySelector(".artist-form")
    addArtistForm.style.visibility = "visible"
    addArtistForm.addEventListener("submit", (e) => artistFormHandler(e))

    document.querySelector(".artist-button-div").style.visibility = "hidden"
}

function artistFormHandler(e) {
    e.preventDefault()

    artistName = document.querySelector("#artist-name").value

    apiService.postArtistFetch(artistName)
}

function displayForm() {
    document.querySelector(".form-container").style.visibility = "visible"
    document.querySelector("#add-artwork-button").style.visibility = 'hidden'

    mountFormListener()
}

function mountFormListener() {
    const form = document.querySelector(".artwork-form")
    form.addEventListener("submit", (e) => createArtworkFormHandler(e))
}

function createArtworkFormHandler(e) {
    e.preventDefault()

    const artworkTitle = document.querySelector("#artwork-title").value
    const artworkImage = document.querySelector("#artwork-image").value
    const artistId = parseInt(document.querySelector("#artwork-artist").value)

    apiService.postFetch(artworkTitle, artworkImage, artistId)
}