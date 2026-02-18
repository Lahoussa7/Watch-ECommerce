
produit();
function produit(){
    fetch('../Json/Marque.json')
    .then(response=>response.json())
    .then(data=>{
        const marqueContainer = document.querySelector(".container-marque");
       
        data.marque.forEach(item => {
            const bloG = document.createElement("div");
            bloG.classList.add("mblog");

            const bl = document.createElement("div");
            bl.classList.add("mblogg");

            const image = document.createElement("img");
    
            image.src = item.image;
            image.alt = "Image de produit";
          
            const marque = document.createElement("p");
            // marque.classList.add("p2");
            marque.textContent=item.marque;
            const marque1 = document.createElement("a");
             marque1.classList.add("marque1");
            marque1.href = "ajouter.html?produit=" + encodeURIComponent(JSON.stringify(item));
            marque1.textContent="Acheter";
            
            bl.appendChild(marque);
            bl.appendChild(marque1);
            bloG.appendChild(image);
            bloG.appendChild(bl);
            marqueContainer.appendChild(bloG);

            // .appendChild(document.createElement("br"));
           
            // priceParagraph.textContent = item.price; // Prix est le premier élément du tableau
            const addToCartButton = document.createElement("a");
            addToCartButton.href = "ajouter.html?produit=" + encodeURIComponent(JSON.stringify(item));
            addToCartButton.textContent = "Acheter";
           
        });
    });

}