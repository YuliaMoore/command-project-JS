!function(){function t(t){return t&&t.__esModule?t.default:t}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},r=a.parcelRequired7c6;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in i){var a=i[t];delete i[t];var r={id:t,exports:{}};return e[t]=r,a.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,a){i[t]=a},a.parcelRequired7c6=r);var n,c=r("bpxeT"),s=r("2TvXO"),o=r("jlbHq");function l(t){return t>=9.5?d([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"active",fifthStar:"active"}]):t>=8.5?d([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"active",fifthStar:"activehalf"}]):t>=7.5?d([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"active",fifthStar:"noactive"}]):t>=6.5?d([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"activehalf",fifthStar:"noactive"}]):t>=5.5?d([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"noactive",fifthStar:"noactive"}]):t>=4.5?d([{firstStar:"active",secondStar:"active",thirdStar:"activehalf",fourthStar:"noactive",fifthStar:"noactive"}]):t>=3.5?d([{firstStar:"active",secondStar:"active",thirdStar:"noactive",fourthStar:"noactive",fifthStar:"noactive"}]):t>=2.5?d([{firstStar:"active",secondStar:"activehalf",thirdStar:"noactive",fourthStar:"noactive",fifthStar:"noactive"}]):t<1.5?d([{firstStar:"activehalf",secondStar:"noactive",thirdStar:"noactive",fourthStar:"noactive",fifthStar:"noactive"}]):"Помилка: проблема у файлі catalog-rating-get.js"}function d(t){return t.map((function(t){var a=t.firstStar,e=t.secondStar,i=t.thirdStar,r=t.fourthStar,n=t.fifthStar;return'\n      <ul class="catalog-list-rating__list">\n        <li class="catalog-list-rating__list-item--'.concat(a,'"></li>\n        <li class="catalog-list-rating__list-item--').concat(e,'"></li>\n        <li class="catalog-list-rating__list-item--').concat(i,'"></li>\n        <li class="catalog-list-rating__list-item--').concat(r,'"></li>\n        <li class="catalog-list-rating__list-item--').concat(n,'"></li>\n      </ul>\n          ')})).join("")}function f(a){return a.map((function(a){var e,i=a.title,r=a.genre_ids,c=a.release_date,s=a.vote_average,o=a.poster_path;return"\n    <li class='catalog-list__item'>\n        <a href='#' class='catalog-list__list-link'>\n            <div class='catalog-list__list-wrapper'>\n                <div class='catalog-list__info'>\n                    <h2 class='catalog-list__title'>".concat(i,"</h2>\n                    <div class='catalog-list__additional-info'>\n                        <p class='catalog-list__movie-type'>").concat((e=r,t(n).genres.filter((function(t){return e.includes(t.id)})).slice(0,2).map((function(t){return t.name})))," | ").concat(c.slice(0,4),"</p>\n                        <div class='catalog-list-rating'>").concat(l(s),"\n                        </div>\n                    </div>\n                </div>\n                <img\n                    src='https://image.tmdb.org/t/p/w500").concat(o,"'\n                    alt='").concat(i,"'\n                    width='280'\n                    height='406'\n                    class='catalog-list__image'\n                />\n            </div>\n        </a>\n    </li> ")})).join("")}n=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}');var v=new(0,o.MoviesAPI),u=document.querySelector(".catalog-list__search-input"),h=document.querySelector(".catalog-list__search-form"),S=document.querySelector(".catalog-list__items-list");function _(){return(_=t(c)(t(s).mark((function a(){var e;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.getTrendMoviesWeek();case 3:e=t.sent,S.innerHTML=f(e.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),a,null,[[0,7]])})))).apply(this,arguments)}function g(){return(g=t(c)(t(s).mark((function a(e){var i,r,n;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),i=u.value,r=1,""!==i){t.next=7;break}S.innerHTML='<div class="catalog-list__error"><h2 class="catalog-list__error-title">OOPS...</h2><p class="catalog-list__error-text">Enter search query, please!</p><div>',t.next=17;break;case 7:return t.prev=7,t.next=10,v.getSearchMovies(i,r);case 10:(n=t.sent).total_results<1?S.innerHTML='<div class="catalog-list__error"><h2 class="catalog-list__error-title">OOPS...</h2><p class="catalog-list__error-text">We are very sorry!</p><p class="catalog-list__error-text">We don’t have any results due to your search.</p><div>':S.innerHTML=f(n.results),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(7),console.log(t.t0);case 17:case"end":return t.stop()}}),a,null,[[7,14]])})))).apply(this,arguments)}!function(){_.apply(this,arguments)}(),h.addEventListener("submit",(function(t){return g.apply(this,arguments)}))}();
//# sourceMappingURL=catalog.a8fe4818.js.map