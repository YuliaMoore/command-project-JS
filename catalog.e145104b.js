function t(t){return t&&t.__esModule?t.default:t}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},e={},r=a.parcelRequired7c6;null==r&&((r=function(t){if(t in i)return i[t].exports;if(t in e){var a=e[t];delete e[t];var r={id:t,exports:{}};return i[t]=r,a.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,a){e[t]=a},a.parcelRequired7c6=r);var n,l=r("kzzqr");function s(t){let a=[];return a=t>=9.5?c([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"active",fifthStar:"active"}]):t>=8.5?c([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"active",fifthStar:"activehalf"}]):t>=7.5?c([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"active",fifthStar:"noactive"}]):t>=6.5?c([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"activehalf",fifthStar:"noactive"}]):t>=5.5?c([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"noactive",fifthStar:"noactive"}]):t>=4.5?c([{firstStar:"active",secondStar:"active",thirdStar:"activehalf",fourthStar:"noactive",fifthStar:"noactive"}]):t>=3.5?c([{firstStar:"active",secondStar:"active",thirdStar:"noactive",fourthStar:"noactive",fifthStar:"noactive"}]):t>=2.5?c([{firstStar:"active",secondStar:"activehalf",thirdStar:"noactive",fourthStar:"noactive",fifthStar:"noactive"}]):t<1.5?c([{firstStar:"activehalf",secondStar:"noactive",thirdStar:"noactive",fourthStar:"noactive",fifthStar:"noactive"}]):"Помилка: проблема у файлі catalog-rating-get.js",a}function c(t){return t.map((({firstStar:t,secondStar:a,thirdStar:i,fourthStar:e,fifthStar:r})=>`\n      <ul class="catalog-list-rating__list">\n        <li class="catalog-list-rating__list-item--${t}"></li>\n        <li class="catalog-list-rating__list-item--${a}"></li>\n        <li class="catalog-list-rating__list-item--${i}"></li>\n        <li class="catalog-list-rating__list-item--${e}"></li>\n        <li class="catalog-list-rating__list-item--${r}"></li>\n      </ul>\n          `)).join("")}function o(a){return a.map((({title:a,genre_ids:i,release_date:e,vote_average:r,poster_path:l})=>{return`\n    <li class='catalog-list__item'>\n        <a href='#' class='catalog-list__list-link'>\n            <div class='catalog-list__list-wrapper'>\n                <div class='catalog-list__info'>\n                    <h2 class='catalog-list__title'>${a}</h2>\n                    <div class='catalog-list__additional-info'>\n                        <p class='catalog-list__movie-type'>${c=i,t(n).genres.filter((t=>c.includes(t.id))).slice(0,2).map((t=>t.name))} | ${e.slice(0,4)}</p>\n                        <div class='catalog-list-rating'>${s(r)}\n                        </div>\n                    </div>\n                </div>\n                <img\n                    src='https://image.tmdb.org/t/p/w500${l}'\n                    alt='${a}'\n                    width='280'\n                    height='406'\n                    class='catalog-list__image'\n                />\n            </div>\n        </a>\n    </li> `;var c})).join("")}n=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}');const d=new(0,l.MoviesAPI),v=document.querySelector(".catalog-list__search-input"),f=document.querySelector(".catalog-list__search-form"),h=document.querySelector(".catalog-list__items-list");!async function(){try{const t=await d.getTrendMoviesWeek();h.innerHTML=o(t.results)}catch(t){console.log(t)}}(),f.addEventListener("submit",(async function(t){t.preventDefault();let a=v.value;if(""===a)h.innerHTML='<div class="catalog-list__error"><h2 class="catalog-list__error-title">OOPS...</h2><p class="catalog-list__error-text">Enter search query, please!</p><div>';else try{const t=await d.getSearchMovies(a,1);t.total_results<1?h.innerHTML='<div class="catalog-list__error"><h2 class="catalog-list__error-title">OOPS...</h2><p class="catalog-list__error-text">We are very sorry!</p><p class="catalog-list__error-text">We don’t have any results due to your search.</p><div>':h.innerHTML=o(t.results)}catch(t){console.log(t)}}));
//# sourceMappingURL=catalog.e145104b.js.map