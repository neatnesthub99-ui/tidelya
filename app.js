const $ = s => document.querySelector(s);
const pic = (o, cls = "") => o.img
  ? `<img class="${cls}" src="${o.img}" alt="">`
  : `<div class="ph ${cls}" style="background:${o.bg || '#dfe8f5'}">${o.icon || ""}</div>`;
const meta = o => `<div class="meta">${o.date} <i>|</i> <b>${o.cat}</b></div>`;
const epic = `<div class="epic"><b>EPIC</b><u>discounts</u><span class="tri"></span></div>`;

// Hero collage
$("#hero").innerHTML = FEATURED.images.map(i => `<div>${pic(i)}</div>`).join("");
const h = $("#hero");
const right = document.createElement("div");
right.style.cssText = "display:grid;grid-template-rows:1fr 1fr;gap:2px;grid-row:1/3;min-height:0";
right.append(h.children[2], h.children[2]);
h.append(right);
h.style.gridTemplateColumns = "1fr 1fr 1.75fr";
[...right.children].forEach(c => c.style.cssText = "border-radius:6px;overflow:hidden;min-height:0");

// Featured article
$("#featured").innerHTML = `
  ${meta(FEATURED)}
  <h1 class="featured-title">${FEATURED.title}</h1>
  <p class="excerpt">${FEATURED.excerpt}</p>
  <div class="related"><h4>Related Reviews:</h4>
    ${FEATURED.related.map(t => `<a href="#">${t}</a>`).join('<span>, </span>')}
  </div>`;

// Latest
$("#latest").innerHTML = LATEST.map((s, i) => s.type === "video" ? `
  <div class="story">
    ${meta(s)}
    <button class="video-card" data-open="${i}" aria-label="Play video">${epic}</button>
    <h3><a href="#">${s.title}</a></h3>
    <button class="shoplink" data-open="${i}">View and shop the video</button>
  </div>` : `
  <div class="story">${meta(s)}<h3><a href="#">${s.title}</a></h3></div>`).join("");

// Deals
$("#deals").innerHTML = DEALS.map(d => `
  <div class="deal">
    <div class="pic">${pic(d)}</div>
    <a href="#">${d.title}</a>
    ${d.sub ? `<div class="sub">${d.sub}</div>` : ""}
    ${d.price ? `<div class="price">${d.price}</div><div class="off">${d.off}</div>` : ""}
  </div>`).join("");

// Video player (asli video ya YouTube, warna purani tasveer)
function player(s) {
  if (s.video) {
    return `<div class="player"><video controls autoplay playsinline ${s.poster ? `poster="${s.poster}"` : ""} src="${s.video}"></video></div>`;
  }
  if (s.youtube) {
    return `<div class="player"><iframe src="https://www.youtube.com/embed/${s.youtube}?autoplay=1&rel=0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe></div>`;
  }
  return `<div class="video-card" style="display:block">${epic}</div>`;
}

// Modal
function openModal(i) {
  const s = LATEST[i];
  $("#modal").innerHTML = `
    <button class="close" aria-label="Close">&#10005;</button>
    ${player(s)}
    <h4 class="shop">Shop the video</h4>
    <div class="products">${s.products.map(p => `
      <div class="prod">
        <div class="pic">${pic(p)}</div>
        <b>${p.brand}</b><span>${p.name}</span>
        <a href="${p.url}">Shop now</a>
      </div>`).join("")}</div>
    ${meta(s)}
    <h2>${s.title}</h2>
    <p>${s.body}</p>`;
  $("#overlay").classList.add("open");
  document.body.classList.add("lock");
}
function closeModal() {
  $("#overlay").classList.remove("open");
  document.body.classList.remove("lock");
  $("#modal").innerHTML = "";   // ویڈیو بند ہو جائے
}
document.addEventListener("click", e => {
  const o = e.target.closest("[data-open]");
  if (o) return openModal(o.dataset.open);
  if (e.target.closest(".close") || e.target === $("#overlay")) closeModal();
});
document.addEventListener("keydown", e => e.key === "Escape" && closeModal());
$(".totop").onclick = () => scrollTo({ top: 0, behavior: "smooth" });
