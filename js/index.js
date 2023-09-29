// Disparition loader
const loader = document.querySelector('.loader');


setTimeout(() => {
    document.querySelector('body').innerHTML = `<header>
    <div>search</div>
    <div class="logo"><span>Info</span><span>Hub</span></div></header>`
    loader.remove();
    getapi();
}, 3000);
/////////////////////////////////////////////////
async function getapi() {
    try {
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("https://newsapi.org/v2/top-headlines?country=us&apiKey=6147950b50674ba4a220b9a00c9cd1f0")}`, {
          method: 'GET',
          
        });
        if (!response.ok) {
            console.log(response)

          throw new Error('Network response was not ok');
        }
        else {
            const contentResponse = await response.json();
            const articleList = JSON.parse(contentResponse.contents).articles;
    console.log(articleList[1]);
            articleList.forEach(content => {
                document.querySelector('main').innerHTML += `<article>
                <img src="${content.urlToImage}">
                    <div>
                    <p>${content.title}</p>
                    <p>${content.source.name}</p>
                    </div>
                </article>`;
            });
        }
        
      } catch (error) {
        console.error('Erreur lors de la requête fetch :', error);
      }


      articleList.forEach((content, index) => {
        const articleContainer = articleContainers[index];
        articleContainer.innerHTML = `
          <article>
            <img src="${content.urlToImage}">
            <div>
              <p>${content.title}</p>
              <p>${content.source.name}</p>
            </div>
          </article>
        `;
      });
      

// const url = 'https://google-news13.p.rapidapi.com/latest?lr=fr-FR';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '59edeafd1emshaff249be04e1192p1fafb0jsnd0659e797c1c',
// 		'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
//     document.querySelector('main').innerHTML = result.items
// } catch (error) {
// 	console.error(error);
// }

}

