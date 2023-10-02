// clé d'API

const APIKEY = '21fe633ae0b543438b840d9bc0743dae' 
// Disparition loader
const loader = document.querySelector('.loader');

// configuration des dates

console.log((new Date(Date.now() - 86400000)).toISOString().split('T')[0]);
setTimeout(() => {
    document.querySelector('header').innerHTML += `
    <div class="search">
      <i class="fa-solid fa-search"></i>
      <input type="text"/>
      <select>
        <option value="${(new Date(Date.now() - 86400000)).toISOString().split('T')[0]} - last 24 hours">Last 24 hours</option>
        <option value="${(new Date(Date.now() - 86400000 * 4)).toISOString().split('T')[0]} - last 3 days">Last 3 days</option>
        <option value="${(new Date(Date.now() - 86400000 * 8)).toISOString().split('T')[0]} - last week">Last week</option>
        <option value="${(new Date(Date.now() - 86400000 * 15)).toISOString().split('T')[0]} - last two weeks">Last two weeks</option>
        <option value="${(new Date(Date.now() - 86400000 * 30)).toISOString().split('T')[0]} - last month">Last month</option>
      </select>
    </div>
    <h1 class="logo"><span>Info</span><span>Hub</span></h1>`
    loader.remove();
    topDeLactuSlider();
    actuDuJour();
    searchActu();
}, 1000);
const a =  Date.now() - 84600
console.log(Date.now());
console.log(Date.now() - 84600);
console.log(a);
/////////////////////////////////////////////////
function convertDate(apiArticleDate) {
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
          displayedDate = "Yesterday"
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
  return `${displayedDate}`
}



