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

    postFetch(title, image, artist_id) {
        const artworkData = {title, image, artist_id}
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

}