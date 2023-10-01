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
        <option value="${(new Date(Date.now() - 86400000)).toISOString().split('T')[0]}">24 hours ago</option>
        <option value="${(new Date(Date.now() - 86400000 * 4)).toISOString().split('T')[0]}">3 days ago</option>
        <option value="${(new Date(Date.now() - 86400000 * 8)).toISOString().split('T')[0]}">1 week ago</option>
        <option value="${(new Date(Date.now() - 86400000 * 15)).toISOString().split('T')[0]}">2 week ago</option>
        <option value="${(new Date(Date.now() - 86400000 * 31)).toISOString().split('T')[0]}">1 month ago</option>
      </select>
    </div>
    <h1 class="logo"><span>Info</span><span>Hub</span></h1>`
    loader.remove();
    actuDuJour();
    topDeLactuSlider();
    searchActu();
}, 1000);
const a =  Date.now() - 84600
console.log(Date.now());
console.log(Date.now() - 84600);
console.log(a);
/////////////////////////////////////////////////




