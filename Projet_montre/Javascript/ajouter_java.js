document.addEventListener("DOMContentLoaded", function () {
    // Récupérer les paramètres de l'URL
    const params = new URLSearchParams(window.location.search);
    // Vérifier si le paramètre 'produit' existe
    if (params.has('produit')) {
        const produitJson = params.get('produit');
        const produit = JSON.parse(decodeURIComponent(produitJson));

       
        const boitecont=document.querySelector(".containt");
        
        const boiteAjout = document.createElement("div");
        boiteAjout.className = "boxdiv";
        const imageDiv = document.createElement("div");
        const image = document.createElement("img");
        image.src = produit.image;
        image.alt = "Image du produit";
        imageDiv.appendChild(image);
        boiteAjout.appendChild(imageDiv);

        // Création d'une div pour le prix du produit
        const tab =["Price","Marque","Qualité","Mouvement-taille"];
        const priceDiv = document.createElement("div");
        priceDiv.className="pricediv"
        let i =0;
        produit.price.forEach(element => {
            const priceParagraph = document.createElement('p');
            priceParagraph.textContent = tab[i]+":  " +element; 
            priceDiv.appendChild(priceParagraph);
            priceDiv.appendChild(document.createElement('br'));
           
            i++;
        });
        const addButton = document.createElement("button");
        addButton.className="button"
        addButton.textContent = "Ajouter au panier";
       
        addButton.addEventListener("click", function() {
            
            console.log("Ajout au panier :", produit);
        });
        priceDiv.appendChild(addButton);
        
        boitecont.appendChild(boiteAjout);
        boitecont.appendChild(priceDiv);
      
    } else {
        console.log('Paramètre "produit" non trouvé dans l\'URL');
    }
});
