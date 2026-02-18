document.addEventListener("DOMContentLoaded", function () {
  connect();
  footer();
  presfooter();
});

function presfooter() {
  const divflex = document.querySelector(".div-flex");
  if (divflex !== null) {
    fetch("../Json/marquesMontres.json")
      .then((response) => response.json())
      .then((data) => {
        divflex.innerHTML = "";
        let contenu = data.sary;
        console.log(data);
        contenu.forEach((item) => {
          const blockDiv = document.createElement("div");
          blockDiv.className = "block";

          // Créer l'image
          const image = document.createElement("img");
          image.src = item.img; // Lien de l'image
          image.className = "img-svg";

          blockDiv.appendChild(image);

          // Créer la légende
          const legend = document.createElement("p");
          const br = document.createElement("br");
          legend.textContent = item.phrase; // Légende de l'image

          blockDiv.appendChild(legend);

          blockDiv.appendChild(br);
          const legend1 = document.createElement("p");
          legend1.textContent = item.phrase1; // Légende de l'image
          blockDiv.appendChild(legend1);

          divflex.appendChild(blockDiv);
        });
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données JSON :" + error
        );
      });
  }
}
function changerContenu(type) {
  // Récupérer les données JSON
  fetch("../Json/marquesMontres.json")
    .then((response) => response.json())
    .then((data) => {
      const divWhite = document.querySelector(".div-white");
      divWhite.innerHTML = "";
      let donnees;
      let content;
      let contenu;
      if (type === "marques") {
        donnees = data.marques;
      } else if (type === "montres") {
        donnees = data.montres;
      }
      console.log(donnees);
      
      donnees.forEach((categorie, index) => {
        const blockDiv = document.createElement("div");
        blockDiv.className = "block" + (index + 1);

        // Parcourez les éléments de la catégorie et créez les liens correspondants
        categorie.model.forEach((element) => {
          const link = document.createElement("a");
          let lien;
          if (
            element == "Alpina" ||
            element == "Baltic" ||
            element == "Beaubleu" ||
            element == "Hanhart"
          ) {
            lien = "Marque.html";
          } else if (element == "Homme") {
            lien = "homme.html";
          } else if (element == "Femme") {
            lien = "femme.html";
          } else {
            lien = "#";
          }
          link.href = lien; // Mettez votre lien approprié ici
          link.textContent = element;
          console.log(element);
          blockDiv.appendChild(link);
          blockDiv.appendChild(document.createElement("br"));
        });

        // Ajoutez le bloc généré à divWhite
        divWhite.appendChild(blockDiv);
      });
    })
    .catch((error) =>
      console.error("Erreur lors de la récupération des données JSON :", error)
    );
}
function changeImage(type) {
  fetch("../Json/marquesMontres.json")
    .then((response) => response.json())
    .then((data) => {
      const boite = document.getElementById("boite");
      const boite1 = document.getElementById("black");
      boite.innerHTML = "";
      boite1.innerHTML = "";

      let content;
      let art;
      if (type === "concept") {
        content = data.concept;
        art = "Le ";
      } else if (type === "boutique") {
        content = data.boutique;
        art = "La ";
      } else if (type === "atelier") {
        content = data.atelier;
        art = "L' ";
      }
      // const head = document.querySelector('.flex-head');
      content.forEach((item) => {
        const container = document.createElement("div");
        container.className = "container";

        const image = document.createElement("img");
        image.src = item.image;
        image.className = "img-house";
        container.appendChild(image);

        const black = document.createElement("div");
        black.className = "div-black";
        const legend = document.createElement("p");
        const legend1 = document.createElement("p");

        legend1.className = "para";
        legend1.textContent = art + type;
        legend.textContent = item.phrase;
        black.appendChild(legend1);
        black.appendChild(legend);
        boite1.appendChild(black);
        boite.appendChild(container);
      });

      boite.appendChild(boite1);
      // boite.appendChild(head);
    })
    .catch((error) =>
      console.error("Erreur lors de la récupération des données JSON :", error)
    );
}



function cliquer() {
  const taille = document.querySelector(".menu1");
  taille.style.left = "0rem";
}
function bouton() {
  const btn = document.querySelector(".menu1");

  btn.style.left = "-30rem";
}

var divAafficher = document.getElementById("afficher");

function afficher(type) {
  changerContenu(type);
  console.log(type);
  const affiche = document.querySelector(".div-white");
  affiche.style.display = "flex";
  affiche.classList.add("animer");
}
function watch(type) {
  changerContenu(type);
  console.log(type);
  const affiche = document.querySelector(".div-white");
  affiche.style.display = "flex";
  affiche.classList.add("animer");
}
function rien() {
  const affiche = document.querySelector(".div-white");
  affiche.style.display = "none";
}
function footer() {
  fetch("../Json/marquesMontres.json")
    .then((response) => response.json())
    .then((data) => {
      const divWhite = document.querySelector(".div-flex1");
      divWhite.innerHTML = "";
    
      let donnees;
    
      donnees = data.footer;

      donnees.forEach((categorie, index) => {
        const blockDiv = document.createElement("div");
        blockDiv.className = "bloc";

       
        categorie.montre.forEach((element) => {
          const link = document.createElement("a");
          link.href = "#"; 
          link.textContent = element;
          
          blockDiv.appendChild(link);
          blockDiv.appendChild(document.createElement("br"));
          blockDiv.appendChild(document.createElement("br"));
        });

        
        divWhite.appendChild(blockDiv);
      });
    })
    .catch((error) =>
      console.error("Erreur lors de la récupération des données JSON :", error)
    );
}
function connect() {
  fetch("../Json/marquesMontres.json") 
    .then((response) => response.json()) 
    .then((data) => {
      const container = document.querySelector(".flex-connect");
      let donnees = data.input; 
      donnees.forEach((item) => {
        const div = document.createElement("div"); 
        div.className = "fb"; 
        const imgElement = document.createElement("img"); 
        imgElement.src = item.img; 
        div.appendChild(imgElement); 
        container.appendChild(div); 
      });
    })
    .catch((error) =>
      console.error("Erreur lors de la récupération des données:", error)
    ); 
}
