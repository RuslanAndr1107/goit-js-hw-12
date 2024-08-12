import{a as u,i as a,S as L}from"./assets/vendor-BPs2jpei.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();function g(r){return r.map(({webformatURL:t,largeImageURL:i,tags:c,likes:e,views:s,comments:d,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${c}"
            />
          </a>
          <div class="description-container">
            <div class="description">
              <h2 class="description-title">Likes</h2>
              <p class="description-amount">${e}</p>
            </div>
            <div class="description">
              <h2 class="description-title">Views</h2>
              <p class="description-amount">${s}</p>
            </div>
            <div class="description">
              <h2 class="description-title">Comments</h2>
              <p class="description-amount">${d}</p>
            </div>
            <div class="description">
              <h2 class="description-title">Downloads</h2>
              <p class="description-amount">${v}</p>
            </div>
          </div>
        </li>`).join("")}const w=15;async function f(r,t){u.defaults.baseURL="https://pixabay.com/api/";const i="45357458-06e8a1a2f264c6c9b3b3f40d6";try{return r.includes(" ")&&r.replace(/\s+/g,"+"),await u.get("",{params:{key:i,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:w}})}catch{a.error({title:"Error",message:"Try again later!"})}}const m=document.querySelector(".search"),y=document.querySelector(".gallery"),n=document.querySelector(".loader"),o=document.querySelector(".load-btn");let l=0;const h=15;let p="";const b=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});n.style.display="none";o.style.display="none";m.addEventListener("submit",P);o.addEventListener("click",S);async function P(r){if(r.preventDefault(),l=1,y.innerHTML="",n.style.display="block",o.style.display="none",p=r.target.elements.search.value.trim(),!p){a.warning({title:"Attention",message:"Fill in the field!"}),n.style.display="none";return}try{const{data:t}=await f(p,l),i=Math.ceil(t.totalHits/h);if(!t.hits.length){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}y.insertAdjacentHTML("beforeend",g(t.hits)),b.refresh(),l===i?o.style.display="none":o.style.display="block",m.reset()}catch(t){a.error({title:"Error",message:"Something went wrong. Please try again later."}),console.log(t)}finally{n.style.display="none"}}async function S(){l+=1,n.style.display="block";try{const{data:r}=await f(p,l);y.insertAdjacentHTML("beforeend",g(r.hits)),b.refresh();const t=Math.ceil(r.totalHits/h);l===t?(a.info({title:"Caution",message:"There is no more images to load!"}),o.style.display="none"):o.style.display="block"}catch(r){a.error({title:"Error",message:"Something went wrong while loading more images."}),console.log(r)}finally{n.style.display="none"}}
//# sourceMappingURL=commonHelpers.js.map
