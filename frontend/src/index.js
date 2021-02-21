const apiService = new Service()

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button")
    button.addEventListener("click", () => displayForm())

    apiService.fetchArtworks()
})

function displayForm(){
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

    apiService.postFetch(artworkTitle, artworkImage, artistId)
}