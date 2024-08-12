import{a as y,i as p,S as L}from"./assets/vendor-BPs2jpei.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(s){return s.map(({webformatURL:t,largeImageURL:o,tags:l,likes:e,views:r,comments:c,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${l}"
            />
          </a>
          <div class="description-container">
            <div class="description">
              <h2 class="description-title">Likes</h2>
              <p class="description-amount">${e}</p>
            </div>
            <div class="description">
              <h2 class="description-title">Views</h2>
              <p class="description-amount">${r}</p>
            </div>
            <div class="description">
              <h2 class="description-title">Comments</h2>
              <p class="description-amount">${c}</p>
            </div>
            <div class="description">
              <h2 class="description-title">Downloads</h2>
              <p class="description-amount">${v}</p>
            </div>
          </div>
        </li>`).join("")}const P=15;async function g(s,t){y.defaults.baseURL="https://pixabay.com/api/";const o="45357458-06e8a1a2f264c6c9b3b3f40d6";try{return s.includes(" ")&&s.replace(/\s+/g,"+"),await y.get("",{params:{key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:P}})}catch{p.error({title:"Error",message:"Try again later!"})}}const h=document.querySelector(".search"),u=document.querySelector(".gallery"),n=document.querySelector(".loader"),i=document.querySelector(".load-btn");let a=0;const m=15;let d="";const b=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});n.style.display="none";i.style.display="none";h.addEventListener("submit",S);i.addEventListener("click",E);function S(s){if(s.preventDefault(),a=1,u.innerHTML="",n.style.display="block",i.style.display="none",d=s.target.elements.search.value.trim(),!d){p.warning({title:"Attention",message:"Fill in the field!"}),n.style.display="none",i.style.display="none";return}g(d,a).then(({data:t})=>{console.log("LOADER",i,n);const o=Math.ceil(t.totalHits/m);a===o?i.style.display="none":i.style.display="block",t.hits.length||(p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n.style.display="none",i.style.display="none"),u.insertAdjacentHTML("beforeend",f(t.hits)),b.refresh(),h.reset()}).catch(t=>{n.style.display="none",console.log(t)})}function E(){a+=1,i.style.display="none",g(d,a).then(({data:s})=>{console.log("DEBUGGER"),u.insertAdjacentHTML("beforeend",f(s.hits)),b.refresh();const t=Math.ceil(s.totalHits/m);if(a===t){p.info({title:"Caution",message:"There is no more images to load!"}),i.style.display="none";return}i.style.display="block"}).catch(s=>console.log(s))}
//# sourceMappingURL=commonHelpers.js.map
