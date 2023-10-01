async function actuDuJour(){


  const containerElement = document.querySelector('.container');
  try {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("https://newsapi.org/v2/top-headlines?country=us&apiKey=6147950b50674ba4a220b9a00c9cd1f0")}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const articles = data.contents ? JSON.parse(data.contents).articles : [];
    console.log('Réponse de l\'API :', data);
    document.querySelector('#search-results').innerHTML = ``

    document.querySelector('#actu').innerHTML += 
            `     <h2>L'Actu du jour</h2>
            <div class="container">
              
            </div> `;

    let i = 0
        console.log(response);
        articles.forEach(article => {
        if (article.urlToImage != null && i < 9) {
            i++;
            document.querySelector('.container').innerHTML += 
            `<a class="article" href="${article.url}">
            <img src="${article.urlToImage}" alt="Image de l'article">
            <div>
                <h3>${article.title}</h3>
                <span class="source">${article.source.name}</span>
                <span class="date">${convertDate(article.publishedAt)}</span>
            </div>
          </a> `;
        }})
                  

  } catch (error) {
    console.error('Erreur lors de la requête API :', error);
  }


}


