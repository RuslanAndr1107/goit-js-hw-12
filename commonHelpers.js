import{a as u,i as n,S as L}from"./assets/vendor-BPs2jpei.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function g(s){return s.map(({webformatURL:t,largeImageURL:o,tags:c,likes:e,views:r,comments:d,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
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
              <p class="description-amount">${r}</p>
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
        </li>`).join("")}const w=15;async function f(s,t){u.defaults.baseURL="https://pixabay.com/api/";const o="45357458-06e8a1a2f264c6c9b3b3f40d6";try{return s.includes(" ")&&s.replace(/\s+/g,"+"),await u.get("",{params:{key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:w}})}catch{n.error({title:"Error",message:"Try again later!"})}}const m=document.querySelector(".search"),y=document.querySelector(".gallery"),a=document.querySelector(".loader"),i=document.querySelector(".load-btn");let l=0;const h=15;let p="";const b=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});a.style.display="none";i.style.display="none";m.addEventListener("submit",P);i.addEventListener("click",S);async function P(s){if(s.preventDefault(),l=1,y.innerHTML="",a.style.display="block",i.style.display="none",p=s.target.elements.search.value.trim(),!p){n.warning({title:"Attention",message:"Fill in the field!"}),a.style.display="none",i.style.display="none";return}try{const{data:t}=await f(p,l),o=Math.ceil(t.totalHits/h);if(!t.hits.length){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a.style.display="none",i.style.display="none";return}y.insertAdjacentHTML("beforeend",g(t.hits)),b.refresh(),l===o?i.style.display="none":i.style.display="block",m.reset()}catch(t){n.error({title:"Error",message:"Something went wrong. Please try again later."}),console.log(t)}finally{a.style.display="none"}}async function S(){l+=1,i.style.display="none",a.style.display="block";try{const{data:s}=await f(p,l);y.insertAdjacentHTML("beforeend",g(s.hits)),b.refresh();const t=Math.ceil(s.totalHits/h);l===t?(n.info({title:"Caution",message:"There is no more images to load!"}),i.style.display="none"):i.style.display="block"}catch(s){n.error({title:"Error",message:"Something went wrong while loading more images."}),console.log(s)}finally{a.style.display="none"}}
//# sourceMappingURL=commonHelpers.js.map
