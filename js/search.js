async function searchActu() {

    const searchInput = document.querySelector('header input');
    const timeInput = document.querySelector('header select');
    const optionInput = document.querySelector('header option');

    let searchValue = searchInput.value;
    let timeValue = timeInput.value.split(" - ")[0];
    let timeToDisplayValue = timeInput.value.split(" - ")[1];
    console.log(timeToDisplayValue);
    searchInput.onkeyup = () => {
        searchValue = searchInput.value;
        console.log(searchValue);
        if (searchValue.length > 0 ) {
            getSearchResult(searchValue, timeValue, timeToDisplayValue)
        }else {
            topDeLactuSlider();
            actuDuJour();
        }
    }

    timeInput.onchange = () => {
        timeValue = timeInput.value;
        console.log(timeValue);
        if (searchValue.length > 0 ) {
            getSearchResult(searchValue, timeValue, timeToDisplayValue)
        }else {
            
        }
    }

    console.log(searchInput);
    console.log(timeInput);
    
    async function getSearchResult(searchValue, timeValue, timeToDisplayValue){

        console.log(searchValue);
        console.log(timeValue);
                try {
                    document.querySelector('main').innerHTML += '<div class="loader"><div class="lds-ripple"><div></div><div></div></div></div>';
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://newsapi.org/v2/everything?language=en&sortBy=popularity&q=${searchValue}&from=${timeValue}&apiKey=${APIKEY}`)}`, {
            method: 'GET',
            });
            if (!response.ok) {
                console.log(response)
                
            throw new Error('Network response was not ok');
            } else {

                const contentResponse = await response.json();
                const articleList = JSON.parse(contentResponse.contents).articles;
                console.log(articleList);
                document.querySelector('#actu').innerHTML = ``
                document.querySelector('#slider').innerHTML = ``

                document.querySelector('#search-results').innerHTML = 
                ` <h2>Search results for '${searchValue}', this ${timeToDisplayValue}</h2>
                <div class="container">
                </div>`;

                    let countResult = 0
                    if (articleList.length != 0) {
                        for (let i = 0; i < articleList.length; i++) {
                    
                            console.log(countResult);
                            if (articleList[i].urlToImage != null && countResult < 21) {
                                countResult++;
                                document.querySelector('.container').innerHTML += 
                                `<a class="article" href="${articleList[i].url}">
                                <img src="${articleList[i].urlToImage}" alt="Image de l'article">
                                <div>
                                    <h3>${articleList[i].title}</h3>
                                    <span class="source">${articleList[i].source.name}</span>
                                    <span class="date">${convertDate(articleList[i].publishedAt)}</span>
                                </div>
                              </a> `;       
                             
                               
                            } else {
                                break;
                            }
                            
                        }
                    }else{
                        document.querySelector('#search-results').innerHTML = 
                        ` <h2>No result for '${searchValue}', this ${timeToDisplayValue}</h2>
                        <div class="container">
                        </div>`;
                    }
              
                    console.log(document.querySelector('.loader'));
                    document.querySelector('.loader').remove();
                
            }
            
        } catch (error) {
            console.error('Erreur lors de la requête fetch :', error);
        }
    }
}