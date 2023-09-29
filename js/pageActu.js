document.addEventListener('DOMContentLoaded', () => {
  let articles = [];
  let currentIndex = 0;

  // Sélectionnez toutes les divs article-container par leur ID
  const containers = [
    document.getElementById('article-container-1'),
    document.getElementById('article-container-2'),
    document.getElementById('article-container-3'),
    document.getElementById('article-container-4'),
    document.getElementById('article-container-5'),
    document.getElementById('article-container-6'),
    document.getElementById('article-container-7'),
    document.getElementById('article-container-8'),
    document.getElementById('article-container-9'),
  ];

  function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("https://newsapi.org/v2/top-headlines?country=us&apiKey=6147950b50674ba4a220b9a00c9cd1f0")}`)
    .then(response => response.json())
    .then(data => {
      articles = data.contents ? JSON.parse(data.contents).articles : [];
      console.log('Articles récupérés depuis l\'API :', articles);

      containers.forEach((container, index) => {
        if (currentIndex < articles.length) {
          container.innerHTML = '';
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
          container.appendChild(articleElement);
          currentIndex++;
        } else {
          alert('Vous avez affiché tous les articles.');
        }
      });
    })
    .catch(error => {
      console.error('Erreur lors de la requête API :', error);
    });
});
