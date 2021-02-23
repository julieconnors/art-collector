class Service {

    constructor(){
        this.baseUrl = 'http://localhost:3000/api/v1'
    }

    fetchArtworks() {
        fetch("http://localhost:3000/api/v1/artworks")
        .then(res => res.json())
        .then(json => json.data.forEach(obj => {
            let artwork = new Artwork(obj, obj.attributes)
            
            artwork.renderArtwork()
        
            document.querySelector(`.delete-${artwork.id}`).addEventListener("click", () => {
                this.deleteFetch(artwork.id)
            })}
        ))
    }

    fetchArtists(){
        fetch("http://localhost:3000/api/v1/artists")
        .then(res => res.json())
        .then(json => json.data.forEach(obj => {
            let artist = new Artist(obj.attributes.name)
            // debugger
            artist.addSelectOption()
        }))
    }

    postFetch(title, image, artist_id, artist_name) {
        const artworkData = {title, image, artist_id, artist_name}
        fetch("http://localhost:3000/api/v1/artworks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(artworkData)
        })
        .then(res => res.json())
        .then(artwork => {
            if (artwork.errors) {
                this.displayArtworkErrors(artwork.errors)
            }
            else {
                let newArtwork = new Artwork(artwork.data, artwork.data.attributes)
                
                newArtwork.renderArtwork()
    
                document.querySelector(`.delete-${newArtwork.id}`).addEventListener("click", () => {
                    this.deleteFetch(newArtwork.id)
                })
    
                document.querySelector("#form-container").style.visibility = "hidden"
                document.querySelector("button").style.visibility = "visible"
            }
        })
    }

    displayArtworkErrors(errors) {
        const errorDiv = document.querySelector(".error")
        
        errors.forEach(error => {
            let errorMessage = document.createElement("li")
            errorMessage.innerHTML = error
            errorDiv.appendChild(errorMessage)
        }
        )
    }

    deleteFetch(id) {
        fetch(`http://localhost:3000/api/v1/artworks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(artwork => {
            document.getElementById(`${artwork.data.id}`).remove()
        })
    }

    postArtistFetch(name){
        const artistData = {name}
        fetch("http://localhost:3000/api/v1/artists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(artistData)
        })
        .then(res => res.json())
        .then(artist => {
            let newArtist = new Artist(artist.data.attributes.name)
            newArtist.addSelectOption()
            // debugger
            document.querySelector(".artwork-form").style.visibility = "visible"
            document.querySelector(".add-artist").style.visibility = "hidden"
        })
    }

}