const artworkEndpoint = "http://localhost:3000/api/v1/artworks"

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World")
    const button = document.querySelector("button")

    fetchArtworks()

    button.addEventListener("click", () => renderForm())
})

function fetchArtworks() {
    fetch(artworkEndpoint)
    .then(res => res.json())
    .then(json => json.data.forEach(obj => {
        renderArtwork(obj.attributes)
    }
    ))
}

function renderArtwork(artworkObj) {
    const container = document.querySelector("#main")

    let frame = document.createElement("div")

    let image = document.createElement("img")
    image.src = artworkObj.image

    let title = document.createElement("h3")
    title.innerHTML = artworkObj.title

    let artist = document.createElement("p")
    artist.innerHTML = artworkObj.artist.name

    frame.appendChild(image)
    frame.appendChild(title)
    frame.appendChild(artist)

    container.appendChild(frame)
}

function renderForm(){
    // let html = `
    // <form class="artwork-form">
    //     <input type="text name="title" placeholder="Title" id="artwork-title">
    //     <br>
    //     <input type="text" name="image" placeholder="Image URL" id="artwork-image">
    //     <br>
    //     <select name="artist" id="artwork-artist">
    //         <option value="1">Monet</option>
    //         <option value="2">Van Gogh</option>
    //     </select>
    //     <br>
    //     <input type="submit" value="Submit" class="submit">
    // </form>`
    // document.querySelector('#form-container').innerHTML += html
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
        renderArtwork(artwork.data.attributes)
        document.querySelector("#form-container").style.visibility = "hidden"
        document.querySelector("button").style.visibility = "visible"
    })
}