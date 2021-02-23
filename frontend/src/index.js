const apiService = new Service()

document.addEventListener("DOMContentLoaded", () => {

    const addArtworkButton = document.querySelector("#add-artwork-button")
    const addArtistButton = document.querySelector("#add-artist-button")
    
    addArtistButton.addEventListener("click", () => createArtistForm())
    addArtworkButton.addEventListener("click", () => displayForm())

    apiService.fetchArtworks()
    apiService.fetchArtists()
})

function createArtistForm() {
    console.log("ADD ARtists")
    const html = 
        `<p>Add Artist</p>
        <form class="artist-form">
            <input type="text" name="artist-name" placeholder="Artist Name" id="artist-name">
            <br>
            <input type="submit" value="Submit" class="submit" id="submit-artist">
        </form>`

    const formDiv = document.querySelector(".form-container")
    formDiv.innerHTML += html

    document.querySelector(".add-artist").style.visibility = "hidden"
    document.querySelector(".artwork-form").style.visibility = "hidden"

    const addArtistForm = document.querySelector(".artist-form")
    addArtistForm.addEventListener("submit", (e) => artistFormHandler(e))
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