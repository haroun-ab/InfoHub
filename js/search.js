async function searchActu() {

    const searchInput = document.querySelector('header input');
    const timeInput = document.querySelector('header select');

    let searchValue = searchInput.value;
    let timeValue = timeInput.value;

    searchInput.onkeyup = () => {
        searchValue = searchInput.value;
        console.log(searchValue);
        getSearchResult(searchValue, timeValue)
    }

    timeInput.onchange = () => {
        timeValue = timeInput.value;
        console.log(timeValue);
        getSearchResult(searchValue, timeValue)
    }

    console.log(searchInput);
    console.log(timeInput);
    
    async function getSearchResult(searchValue, timeValue){

        console.log(searchValue);
        try {
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://newsapi.org/v2/everything?language=en&sortBy=popularity&q=${searchValue}&from=${timeValue}&apiKey=e3bd79486fcc43da808646b5004f91df`)}`, {
            method: 'GET',
            });
            if (!response.ok) {
                console.log(response)
    
            throw new Error('Network response was not ok');
            } else {
                const contentResponse = await response.json();
                const articleList = JSON.parse(contentResponse.contents).articles;

                document.querySelector('main').innerHTML = 
                `
                <div class="search-results">
                    
                </div>
                `;

                    let countResult = 0
                   for (let i = 0; i < articleList.length; i++) {

                    
                  
                
                    console.log(countResult);
                    if (articleList[i].urlToImage != null && countResult < 20) {
                        countResult++;
                        document.querySelector('.search-results').innerHTML += 
                        `<div class="search-result" href="${articleList[i].url}" onclick="window.open('${articleList[i].url} ','popup','width=600,height=600,scrollbars=no,resizable=no'); return false;">
                            <img src="${articleList[i].urlToImage}" alt="">

                            <div class="description">
                                <span>${articleList[i].title.split(' - ')[0]}</span>
                                <span> - ${articleList[i].source.name}</span>
                                <span class="date"> ${name(articleList[i].publishedAt)} </span>
                            </div>
                        </div>       `;
                        function name(apiArticleDate) {
                            let displayedDate = ""
                            const articleDate = apiArticleDate.split('T')[0];
    
                            const todayDate = new Date(Date.now() - 86400000).toISOString().split('T')[0];
                            const twoDaysAgoDate = new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0];
                            const threeDaysAgoDate = new Date(Date.now() - 86400000 * 3).toISOString().split('T')[0];
                            const fourDaysAgoDate = new Date(Date.now() - 86400000 * 4).toISOString().split('T')[0];
                            const fiveDaysAgoDate = new Date(Date.now() - 86400000 * 5).toISOString().split('T')[0];
                            const sixDaysAgoDate = new Date(Date.now() - 86400000 * 6).toISOString().split('T')[0];
                            const sevenDaysAgoDate = new Date(Date.now() - 86400000 * 7).toISOString().split('T')[0];
                            switch (articleDate) {
                                case todayDate:
                                    displayedDate = "Today"
                                    break;
                                case twoDaysAgoDate:
                                    displayedDate = "2 days ago"
                                    break;
                                case threeDaysAgoDate:
                                    displayedDate = "3 days ago"
                                    break;
                                case fourDaysAgoDate:
                                    displayedDate = "4 days ago"
                                    break;
                                case fiveDaysAgoDate:
                                    displayedDate = "5 days ago"
                                    break;
                                case sixDaysAgoDate:
                                    displayedDate = "6 days ago"
                                    break;
                                case sevenDaysAgoDate:
                                    displayedDate = "a week ago"
                                    break;
                                default:
                                    let month = `${new Date(articleDate).toDateString().split(' ')[1]}`;
                                    let day = `${new Date(articleDate).toDateString().split(' ')[2]}`;
    
                                    displayedDate = `${month}-${day}`;
                                    break;
                            }
                           
                            console.log(displayedDate);
                            return `${displayedDate} ${articleDate}`
                        }
                       
                    } else {
                        break;
                    }
                
                }
    
                
            }
            
        } catch (error) {
            console.error('Erreur lors de la requête fetch :', error);
        }
    }
}