document.addEventListener('DOMContentLoaded', async () => {
  const containerElements = document.querySelectorAll('.article-container');
  try {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("https://newsapi.org/v2/top-headlines?country=us&apiKey=6147950b50674ba4a220b9a00c9cd1f0")}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const articles = data.contents ? JSON.parse(data.contents).articles : [];
    console.log('Réponse de l\'API :', data);

    containerElements.forEach((container, index) => {
      if (articles && index < articles.length) {
        const article = articles[index];
        container.innerHTML = `
          <div class="article">
            <h2>${article.title}</h2>
            <p>${article.publishedAt}</p>
            <p>${article.source.name}</p>
            <img src="${article.urlToImage}" alt="Image de l'article">
            <p><a href="${article.url}" target="_blank">Lire l'article</a></p>
          </div>
        `;
      }
    });
  } catch (error) {
    console.error('Erreur lors de la requête API :', error);
  }
});

