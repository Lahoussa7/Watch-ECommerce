let listproduit=[];
// fenetre(listproduit);

document.addEventListener("DOMContentLoaded", function () {
    displayfenetre();
    let cmp = localStorage.getItem("cartCount");
    // console.log("aona"+cmp)
    const params = new URLSearchParams(window.location.search);
    if (params.has('produit')) {
        // Votre code pour afficher le produit et ajouter au panier
        
        const produitJson = params.get('produit');
        const produit = JSON.parse(decodeURIComponent(produitJson));
        
       

        const boitecont = document.querySelector(".containt");

        const boiteAjout = document.querySelector(".boxdiv");
        const priceDiv = document.querySelector(".priceDiv");
        const image = document.createElement("img");
        image.src = produit.image;
        image.alt = "Image du produit";
        // imageDiv.appendChild(image);
        boiteAjout.appendChild(image);
        const tab = ["Price", "Marque", "Qualité", "Mouvement-taille"];
        const pDiv = document.querySelector(".positions");
      
        const titre = document.createElement("h2");
        titre.classList.add("title");
        titre.textContent = produit.nom;
        priceDiv.appendChild(titre);
        priceDiv.appendChild(document.createElement("br"));
        const price = document.createElement("p");
        price.classList.add("p1");
        price.textContent= "Price: "+produit.price;
        priceDiv.appendChild(price);
        priceDiv.appendChild(document.createElement("br"));
        const id = document.createElement("p");
        id.classList.add("p3");
        id.textContent= "Numero de marque: "+ produit.id;
        priceDiv.appendChild(id);
        priceDiv.appendChild(document.createElement("br"));
        const qualite = document.createElement("p");
        qualite.classList.add("p4");
        const avantsplit = produit.qualite.split("-");

        qualite.textContent= "Taille: "+avantsplit[1] + " "+ "  Mouvement: "+ avantsplit[0] ;
        priceDiv.appendChild(qualite);
      
        const addButton = document.createElement("button");
        addButton.className = "button";
        addButton.textContent = "Ajouter au panier";
        let n =0;
            n = parseInt(cmp);
        addButton.addEventListener("click", function() {
            
          
            let listproduit = JSON.parse(localStorage.getItem("cart")) || [];
            const check = listproduit.find((item) => item.nom === produit.nom);
            if(check){
                listproduit.map((item) => {
                    if(item.nom === produit.nom){
                        return {...item, nbr: item.nbr++}
                    }
                    else return item;
                })
            }else{
                listproduit.push({...produit, nbr: 1})
            }
            localStorage.setItem("cart", JSON.stringify(listproduit));
            const list =localStorage.getItem("cart");
            const l = JSON.parse(list);
            n = 0
            l.forEach(item => {
                 n += parseInt(item.nbr)
                
            });
            // console.log("n = "+n)
            updateCart(n);
            
        });
      
       
        priceDiv.appendChild(addButton);
        
        boitecont.appendChild(boiteAjout);
        boitecont.appendChild(pDiv);
      
    }
     else {
        console.log('Paramètre \'produit\' non trouvé dans l\'URL');
    }

    // Mettre à jour la notification du panier au chargement de la page
    updateCartNotification();
});
function displayfenetre(){
   const div = document.getElementById("panie")
   
    div.addEventListener('click',function(){
        window.location.href = "Liste.html";
    })
   
}

function updateCartNotification() {
    const notification = document.getElementById('notification');
   
    let count = localStorage.getItem('cartCount');
    // console.log("update = "+count)
    if (count === null) {
        count = 0;
    } else {
        count = parseInt(count);
    }
    // console.log("count Cart = "+count)
    // localStorage.clear('cartCount');
    notification.textContent = count;
    notification.addEventListener("click",function(){
    });
   
}


function updateCart(n) {
    localStorage.setItem('cartCount', n);
    updateCartNotification();
}
