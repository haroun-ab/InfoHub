// document.addEventListener('DOMContentLoaded', () => {
//   let articles = [];
//   let currentIndex = 0;

//   const loadArticlesButton = document.getElementById('load-articles');
//   console.log('Articles récupérés depuis l\'API :', articles);

//   function getRandomIndex(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }

//   fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("https://newsapi.org/v2/top-headlines?country=us&apiKey=6147950b50674ba4a220b9a00c9cd1f0")}`)
//     .then(response => response.json())
//     .then(data => {
//       articles = data.contents ? JSON.parse(data.contents).articles : [];
//       console.log('Articles récupérés depuis l\'API :', articles);

//       loadArticlesButton.addEventListener('click', () => {
//         if (currentIndex < articles.length) {
//           const articleContainer = document.getElementById('article-container');
//           articleContainer.innerHTML = '';
//           const randomIndex = getRandomIndex(currentIndex, articles.length);
//           const article = articles[randomIndex];
//           const articleElement = document.createElement('div');
//           articleElement.classList.add('article'); 
//           articleElement.innerHTML = `
//             <h2>${article.title}</h2>
//             <p>${article.publishedAt}</p>
//             <p>${article.source.name}</p>
//             <p>${article.urlToImage
//             }</p>
//             <p><a href="${article.url}" target="_blank">Lire l'article</a></p>
//           `;
//           articleContainer.appendChild(articleElement);
//           currentIndex++;
//           if (currentIndex === articles.length) {
//             location.reload();
//           }
//         } else {
//           alert('Vous avez affiché tous les articles.');
//         }
//       });
//     })
//     .catch(error => {
//       console.error('Erreur lors de la requête API :', error);
//     });
// });


  // document.addEventListener('DOMContentLoaded', () => {
  //   // Déclarez une variable pour stocker les articles récupérés depuis l'API
  //   let articles = [];
  //   let currentIndex = 0;
  
  //   // Sélectionnez le bouton par son ID
  //   const loadArticlesButton = document.getElementById('load-articles');
  //   console.log('Articles récupérés depuis l\'API :', articles);
  
  //   // Fonction pour obtenir un index aléatoire entre min (inclus) et max (exclus)
  //   function getRandomIndex(min, max) {
  //     return Math.floor(Math.random() * (max - min)) + min;
  //   }
  
  //   // Effectuez la requête API pour récupérer les articles
  //   fetch('https://content.guardianapis.com/search?q=Apple&from=2023-09-28&sortBy=popularity&api-key=58607689-ccf4-48f7-abee-9fb137084aab')
  //     .then(response => response.json())
  //     .then(data => {
  //       // Récupérez la liste des articles depuis les données
  //       articles = data.response.results;
  //       console.log('Articles récupérés depuis l\'API :', articles);
  
  //       // Ajoutez un gestionnaire d'événements pour le clic sur le bouton
  //       loadArticlesButton.addEventListener('click', () => {
  //         // Vérifiez s'il reste des articles non affichés
  //         if (currentIndex < articles.length) {
  //           // Sélectionnez l'élément où vous souhaitez afficher l'article
  //           const articleContainer = document.getElementById('article-container');
  
  //           // Effacez le contenu précédent s'il y en a
  //           articleContainer.innerHTML = '';
  
  //           // Récupérez un article aléatoire non affiché
  //           const randomIndex = getRandomIndex(currentIndex, articles.length);
  //           const article = articles[randomIndex];
  
  //           // Créez un élément d'article
  //           const articleElement = document.createElement('div');
  //           articleElement.classList.add('article'); // Ajoutez une classe CSS pour le style
  //           articleElement.innerHTML = `
  //             <h2>${article.webTitle}</h2>
  //             <p>${article.webPublicationDate}</p>
  //             <p>${article.sectionName}</p>
  //             <p>${article.webUrl}</p>
  //           `;
  
  //           // Ajoutez l'élément d'article à l'élément de conteneur
  //           articleContainer.appendChild(articleElement);
  
  //           // Marquez l'article comme affiché
  //           currentIndex++;
  
  //           // Vérifiez si tous les articles ont été affichés
  //           if (currentIndex === articles.length) {
  //             // Rafraîchissez la page pour revenir au début
  //             location.reload();
  //           }
  //         } else {
  //           alert('Vous avez affiché tous les articles.');
  //         }
  //       });
  //     })
  //     .catch(error => {
  //       console.error('Erreur lors de la requête API :', error);
  //     });
  // });

  document.addEventListener('DOMContentLoaded', () => {
    let articles = [];
    let currentIndex = 0;
  
    const loadArticlesButton = document.getElementById('load-articles');
    console.log('Articles récupérés depuis l\'API :', articles);
  
    function getRandomIndex(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("https://newsapi.org/v2/top-headlines?country=us&apiKey=6147950b50674ba4a220b9a00c9cd1f0")}`)
      .then(response => response.json())
      .then(data => {
        articles = data.contents ? JSON.parse(data.contents).articles : [];
        console.log('Articles récupérés depuis l\'API :', articles);
  
        loadArticlesButton.addEventListener('click', () => {
          if (currentIndex < articles.length) {
            const articleContainer = document.getElementById('article-container');
            articleContainer.innerHTML = '';
            const randomIndex = getRandomIndex(currentIndex, articles.length);
            const article = articles[randomIndex];
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');
            articleElement.innerHTML = `
              <h2>${article.title}</h2>
              <p>${article.publishedAt}</p>
              <p>${article.source.name}</p>
              <img src="${article.urlToImage}" alt="Image de l'article">
              <p><a href="${article.url}" target="_blank">Lire l'article</a></p>
            `;
            articleContainer.appendChild(articleElement);
            currentIndex++;
            if (currentIndex === articles.length) {
              location.reload();
            }
          } else {
            alert('Vous avez affiché tous les articles.');
          }
        });
      })
      .catch(error => {
        console.error('Erreur lors de la requête API :', error);
      });
  });
  
  