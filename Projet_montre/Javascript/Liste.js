let chiffre=1;
document.addEventListener("DOMContentLoaded", function() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartDiv = document.getElementById("cart");
    // cart.sort((a, b) => (a.image > b.image) ? 1 : -1);  //triage par alphabetique

    // let previousProduct = null;
    const tableBody = document.querySelector("#tableProduits tbody");
    let t=0;
    cart.forEach((produit,index) => {
        const row = document.createElement("tr");

        // Créer et ajouter une cellule pour l'image
        const nomCell = document.createElement("td");
        const img = document.createElement("img");
        img.classList.add("b2");
        img.src = produit.image;
        nomCell.appendChild(img);
        row.appendChild(nomCell);

        // Créer et ajouter une cellule pour la quantité
        const numberCell = document.createElement("td");
        const quantityInput = document.createElement("input");
        quantityInput.classList.add("input");
        quantityInput.type = "number";
        quantityInput.min = "1";
        quantityInput.id = `quantity-${index}`;
        quantityInput.value = produit.nbr; 
        numberCell.appendChild(quantityInput);
        row.appendChild(numberCell);
        chiffre = parseInt(produit.nbr);
        // Créer et ajouter une cellule pour le prix
       
        const prixCell = document.createElement("td");
       
        t+=(chiffre*parseInt(produit.price));
        
        console.log("ttt="+t);
        chiffre*=parseInt(produit.price);
        prixCell.textContent = chiffre.toFixed(2) +"$"; // Afficher le prix initial
        row.appendChild(prixCell);

        // Créer et ajouter une cellule pour la marque
        const marqueCell = document.createElement("td");
      
        marqueCell.textContent = produit.marque;
        row.appendChild(marqueCell);

        // Créer et ajouter une cellule pour la qualité
        const qualiteCell = document.createElement("td");
        const bouton = document.createElement("div");
        bouton.classList.add("photo");
        bouton.innerHTML="<svg xmlns='http://www.w3.org/2000/svg' fill= 'gray' viewBox='0 0 448 512'><path d='M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z'/></svg>";
        bouton.addEventListener("click", function() {
            removeProduct(produit);
            row.remove();
        });

        qualiteCell.appendChild(bouton);
        row.appendChild(qualiteCell);

        tableBody.appendChild(row);
       
        
        quantityInput.addEventListener("change", function() {
            const newQuantity = parseInt(quantityInput.value);
            const price = parseFloat(produit.price.replace("$", ""));
            // let q +=newQuantity; 
            let q = 0
            let totalPrice=0;

            produit.nbr = newQuantity;
            cart.forEach((prod)=>{
                q+=prod.nbr;
                totalPrice += parseFloat(prod.price.replace("$", "")) * prod.nbr; 
               
               
            })
           
            t=totalPrice;
            console.log(t);
            localStorage.setItem("cart",JSON.stringify(cart))
            
        //    = price * newQuantity;
           
          
            localStorage.setItem("cartCount",JSON.stringify(q));
            console.log(newQuantity);
            prixCell.textContent = (price * newQuantity).toFixed(2) + "$"; // Mettre à jour le contenu de la cellule de prix avec le nouveau total
        });
        // previousProduct=produit;
        

    });
    const site =document.querySelector(".site");
    const total =document.querySelector(".total");
    const paragraphe = document.createElement("p");
    paragraphe.classList.add("p-total");

    const push = document.createElement("button");
    push.classList.add("push");
    push.textContent="J'achete maintenant";
    push.addEventListener("click",()=>{
        alert("Merci de votre confiance");
        localStorage.clear("cart");
        window.location.href="Acceuil.html";
    });
    paragraphe.textContent = "TOTAL: "+t + "$"; 
    total.appendChild(paragraphe);
    total.appendChild(push);
    site.appendChild(total);
   
    function removeProduct(product) {
        let updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
        updatedCart = updatedCart.filter(item => item.id !== product.id);
        
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
});
