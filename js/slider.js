/**Slider */


async function topDeLactuSlider() {
//     try {
//         const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("https://newsapi.org/v2/top-headlines?country=us&apiKey=e3bd79486fcc43da808646b5004f91df")}`, {
//           method: 'GET',
          
//         });
//         if (!response.ok) {
//             console.log(response)
  
//           throw new Error('Network response was not ok');
//         } else {
//             const contentResponse = await response.json();
//             const articleList = JSON.parse(contentResponse.contents).articles;
    
//             document.querySelector('.slider').innerHTML += 
//             `
//             <h2>L'actu du jour</h2>
//             <div class="diapo" data-speed="5000" data-transition="700">
//                 <div class="elements">

//                 </div>
//                 <!-- Flèches -->
//                 <i id="nav-gauche" class="fa-solid fa-chevron-left"></i>
//                 <i id="nav-droite" class="fa-solid fa-chevron-right"></i>
//             </div>
//             `;

//                 let i = 0
//                 console.log(response);
//             articleList.forEach(content => {
//                 if (content.urlToImage != null && i < 5) {
//                     i++;
//                     document.querySelector('.elements').innerHTML += 
//                     `<a class="element" href="${content.url}" onclick="window.open('${content.url} ','popup','width=600,height=600,scrollbars=no,resizable=no'); return false;">
//                         <img src="${content.urlToImage}" alt="">
//                         <div class="black-bottom"></div>
    
//                         <div class="description-img">
                            
//                             <span>${i + '. '+ content.title.split(' - ')[0]}</span>
//                             <span>${content.source.name}</span>

//                         </div>
//                     </a>       `;
//                 }
              
//             });
  
            
//         }
        
//       } catch (error) {
//         console.error('Erreur lors de la requête fetch :', error);
//       }
  
  
//   // Variables globales
// let compteur = 0; // Compteur qui permet de connaître l'image sur laquelle on se trouve
// let timer, elements, slides, slideWidth, speed, transition;

// // window.onload = () => {
//   // On récupère le diaporama
//   const diapo = document.querySelector(".diapo");
//   // On récupère le data-speed
//   speed = diapo.dataset.speed;
//   transition = diapo.dataset.transition;

//   elements = document.querySelector(".elements");

//   // On clone la 1ère image
//   let firstImage = elements.firstElementChild.cloneNode(true);

//   // On injecte le clone à la fin du diapo
//   elements.appendChild(firstImage);

//   slides = Array.from(elements.children);

//   // On récupère la largeur d'une slide
//   slideWidth = diapo.getBoundingClientRect().width;

//   window.onresize = () => {
//     slideWidth = diapo.getBoundingClientRect().width;
//   } 
  
//   // On récupère les flèches
//   let next = document.querySelector("#nav-droite");
//   let prev = document.querySelector("#nav-gauche");

//   // On gère le clic
//   next.addEventListener("click", slideNext);
//   prev.addEventListener("click", slidePrev);

//   // On automatise le défilement
//   timer = setInterval(slideNext, speed);

//   // On gère l'arrêt et la reprise
//   diapo.addEventListener("mouseover", stopTimer);
//   diapo.addEventListener("mouseout", startTimer);
// // };

// /**
//  * Cette fonction fait défiler le diaporama vers la droite
//  */
// function slideNext() {
//   // On incrémente le compteur
//   compteur++;
//   elements.style.transition = transition + "ms linear";

//   let decal = -slideWidth * compteur;
//   elements.style.transform = `translateX(${decal}px)`;

//   // On attend la fin de la transition et on "rembobine" de façon cachée
//   setTimeout(function () {
//     if (compteur >= slides.length - 1) {
//       compteur = 0;
//       elements.style.transition = "unset";
//       elements.style.transform = "translateX(0)";
//     }
//   }, transition);
// }

// /**
//  * Cette fonction fait défiler le diaporama vers la gauche
//  */
// function slidePrev() {
//   // On décrémente le compteur
//   compteur--;
//   elements.style.transition = transition + "ms linear";

//   if (compteur < 0) {
//     compteur = slides.length - 1;
//     let decal = -slideWidth * compteur;
//     elements.style.transition = "unset";
//     elements.style.transform = `translateX(${decal}px)`;
//     setTimeout(slidePrev, 1);
//   }

//   let decal = -slideWidth * compteur;
//   elements.style.transform = `translateX(${decal}px)`;
// }

// function stopTimer() {
//   clearInterval(timer);
// }

// function startTimer() {
//   timer = setInterval(slideNext, speed);
// }



}

