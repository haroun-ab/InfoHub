async function actuDuJour() {
    // try {
    //     const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("https://newsapi.org/v2/top-headlines?country=us&apiKey=6147950b50674ba4a220b9a00c9cd1f0")}`, {
    //       method: 'GET',
    //     });
    //     if (!response.ok) {
    //         console.log(response)

    //       throw new Error('Network response was not ok');
    //     }
    //     else {
    //         const contentResponse = await response.json();
    //         const articleList = JSON.parse(contentResponse.contents).articles;
    //         console.log(articleList[1]);
    //         articleList.forEach(content => {
    //             document.querySelector('main').innerHTML += `<article>
    //             <img src="${content.urlToImage}">
    //               <div>
    //                 <p>${content.title}</p>
    //                 <p>${content.source.name}</p>
    //               </div>
    //             </article>`;
    //         });    
    //     }
        
    //   } catch (error) {
    //     console.error('Erreur lors de la requête fetch :', error);
    //   }
}
