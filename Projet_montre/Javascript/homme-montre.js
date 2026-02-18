
 produit();
function produit(){
    fetch('../Json/montreH.json')
    .then(response=>response.json())
    .then(data=>{
        const hommeContainer = document.querySelector(".style-homme");

        data.homme.forEach(item => {
            const produitDiv = document.createElement("div");
            produitDiv.classList.add("produit");

            const image = document.createElement("img");
            image.src = item.image;
            image.alt = "Image de produit";
            produitDiv.appendChild(image);
          
            const marque = document.createElement("p");
            marque.classList.add("p2");
            marque.textContent=item.marque;
            produitDiv.appendChild(marque);
            produitDiv.appendChild(document.createElement("br"));
            const id = document.createElement("p");
            id.classList.add("p3");
            id.textContent=item.id;
            produitDiv.appendChild(id);
            produitDiv.appendChild(document.createElement("br"));
            const qualite = document.createElement("p");
            qualite.classList.add("p4");
            qualite.textContent=item.qualite;
            produitDiv.appendChild(qualite);
            produitDiv.appendChild(document.createElement("br"));
            const price = document.createElement("p");
            price.classList.add("p1");
            price.textContent=item.price;
            produitDiv.appendChild(price);
            // item.price.forEach(element => {
            //     const priceParagraph = document.createElement("p");
            //     priceParagraph.textContent = element;
            //     // console.log(element[1]);
            //     produitDiv.appendChild(priceParagraph );
            //     produitDiv.appendChild(document.createElement('br'));
            //   });
              
            // priceParagraph.textContent = item.price; // Prix est le premier élément du tableau
            const addToCartButton = document.createElement("a");
            addToCartButton.href = "ajouter.html?produit=" + encodeURIComponent(JSON.stringify(item));
            addToCartButton.textContent = "Acheter";
            produitDiv.appendChild(document.createElement('br'));
           
            produitDiv.appendChild(addToCartButton);
            hommeContainer.appendChild(produitDiv);
            // produitDiv.appendChild(priceParagraph);
           
            // hommeContainer.appendChild(produitDiv);
        });
    });

}