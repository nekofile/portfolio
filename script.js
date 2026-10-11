/* ---------- Works ----------
   画像は img/works/ に入れ、各作品の img にファイル名を書きます。 */
const CATS=['Webサイト','LP／バナー','サムネイル'];
const WORKS=[
 {c:'Webサイト',t:'たまり木珈琲 ブランドデザイン・Webサイト',s:'Web Design',d:'ロゴからSNS、バナー、Webサイトまでをトータルでデザインしました。',img:'img/works/work-01.webp',fit:'contain',href:'works/work-01/index.html'},
 {c:'Webサイト',t:'WSTRIP 沖縄観光情報サイト',s:'Web Design / Coding',d:'デザインカンプを基に、画像制作から、HTML・CSSのコーディングまでを担当しました。',img:'img/works/work-02.webp',fit:'contain',href:'works/work-02/index.html'},
 {c:'Webサイト',t:'WSGreen 無農薬野菜の宅配サイト',s:'Web Design / Coding',d:'デザインカンプを基に、画像制作から、HTML・CSSのコーディングまでを担当しました。',img:'img/works/work-03.webp',fit:'contain',href:'works/work-03/index.html'},
 // ▼ WORKS04〜06：制作後に、行頭の // を外すと表示されます
 //{c:'LP／バナー',t:'セール告知バナー',s:'Banner Design',d:'割引率を最優先で見せ、サイズが変わっても順番を変えませんでした。',img:'img/works/work-04.jpg'},
 //{c:'LP／バナー',t:'季節メニュー バナー',s:'Banner Design',d:'商品名と発売日だけを残し、一目で読める量にしました。',img:'img/works/work-05.jpg',case:true},
 //{c:'サムネイル',t:'解説動画 サムネイル',s:'Thumbnail Design',d:'小さく表示されても読めるよう、文字を2行以内にしました。',img:'img/works/work-06.jpg'},
 {c:'LP／バナー',t:'BizEnglish Pro 集客バナー・LPファーストビュー',s:'Banner / LP Design',d:'無料体験の登録を増やすための広告バナーと、LPの最上部をデザインしました。',img:'img/works/work-07.webp',fit:'contain',href:'works/work-07/index.html'},
 {c:'LP／バナー',t:'フォレスタ 集客バナー・LPファーストビュー',s:'Banner / LP Design',d:'週末のファミリー層の予約を増やすための広告バナーと、LPの最上部をデザインしました。',img:'img/works/work-08.webp',fit:'contain',href:'works/work-08/index.html'},
 {c:'LP／バナー',t:'WS Suit Closet 冬のセールバナー',s:'Banner Design',d:'冬のセールを告知し、オンラインショップへ誘導するバナーを3サイズで展開しました。',img:'img/works/work-09.jpg',fit:'contain',href:'works/work-09/index.html'},
 {c:'LP／バナー',t:'WS university オープンキャンパスバナー',s:'Banner Design',d:'秋のオープンキャンパスへの来校を促すバナーを、3サイズで展開しました。',img:'img/works/work-10.jpg',fit:'contain',href:'works/work-10/index.html'},
 {c:'サムネイル',t:'サムネイル制作実績（Webニュース記事）',s:'Thumbnail Design',d:'記事の内容がひと目で伝わるサムネイル12点の制作実績です。',img:'img/works/work-11.jpg',href:'works/work-11/index.html'}
];
const grid=document.getElementById('works-grid'),filters=document.getElementById('filters');
let current='ALL';
function renderFilters(){
  filters.innerHTML=['ALL',...CATS.filter(c=>WORKS.some(w=>w.c===c))].map(c=>`<button type="button" data-cat="${c}" aria-pressed="${c===current}">${c}</button>`).join('');
}
function renderWorks(){
  const list=current==='ALL'?WORKS:WORKS.filter(w=>w.c===current);
  grid.innerHTML=list.map(w=>{
    const media=`<div class="work-media${w.fit==='contain'?' contain':''}"><img src="${w.img}" alt="${w.t}" width="1600" height="1000" loading="lazy"></div>`;
    const head=w.href?`<a class="work-link" href="${w.href}" aria-label="${w.t}の詳細を見る">${media}</a>`:media;
    const more=w.href?`<a href="${w.href}">詳しく見る<span aria-hidden="true"> →</span></a>`:(w.case?'<a href="#case" data-open-case>制作事例を見る</a>':'');
    return `<article class="work">${head}<h3>${w.t}</h3><div class="cat">${w.s}</div><p>${w.d}</p>${more}</article>`;
  }).join('');
}
filters.addEventListener('click',e=>{const b=e.target.closest('button');if(b){current=b.dataset.cat;renderFilters();renderWorks();}});
renderFilters();renderWorks();

/* ---------- Disclosures ---------- */
function bindToggle(btnId,panelId,labelId,openText,closeText){
  const btn=document.getElementById(btnId),panel=document.getElementById(panelId),label=document.getElementById(labelId);
  function set(open){panel.hidden=!open;btn.setAttribute('aria-expanded',open);label.textContent=open?closeText:openText;}
  btn.addEventListener('click',()=>set(panel.hidden));
  return set;
}
bindToggle('about-btn','about-more','about-label','詳しく見る','閉じる');

/* ---------- Skills ---------- */
const TOOLS=[
  ['Ps','Photoshop',4,'バナー、サムネイル、写真の補正','#BFD9F2'],
  ['Ai','Illustrator',3,'ロゴ、アイコン、図形のデザイン','#F9D3A8'],
  ['Vs','VSCode',3,'HTML／CSSのコーディング','#C9E4F5'],
  ['Fg','Figma',3,'デザインカンプ（LP・Webサイト）の作成','#E6CFF2'],
  ['Dr','DaVinci Resolve',3,'動画のカット編集、文字入れ','#F2C4C0'],
  ['Gh','GitHub',3,'制作データの管理、公開','#D5D2EC'],
  ['Xl','Excel',2,'表・グラフの作成、データ整理','#BFE3CE'],
  ['Ch','チャット',4,'進捗共有、質問、修正依頼のやり取り','#F6E3A8']
];
document.getElementById('tools').innerHTML=TOOLS.map(([ab,n,l,d,c])=>
 `<div class="tool"><span class="ico" style="background:${c}" aria-hidden="true">${ab}</span><div><b>${n}</b><span class="meter" role="img" aria-label="レベル ${l}／5">${[1,2,3,4,5].map(i=>`<i class="${i<=l?'on':''}"></i>`).join('')}</span></div><p>${d}</p></div>`).join('');

/* ---------- Nav ---------- */
const menuBtn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
menuBtn.addEventListener('click',()=>{const o=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',o);});
nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');}});
const links=[...nav.querySelectorAll('a')];
const io=new IntersectionObserver(es=>{es.forEach(en=>{if(en.isIntersecting){links.forEach(l=>l.removeAttribute('aria-current'));const l=links.find(x=>x.getAttribute('href')==='#'+en.target.id);if(l)l.setAttribute('aria-current','true');}});},{rootMargin:'-40% 0px -55% 0px'});
['works','case','about','skills','contact'].forEach(id=>io.observe(document.getElementById(id)));

/* ---------- Contact ---------- */
const TO='masueri0519@gmail.com';
document.getElementById('contact-form').addEventListener('submit',e=>{
  e.preventDefault();
  const f=new FormData(e.target);
  const body=`お名前：${f.get('name')}\nメールアドレス：${f.get('email')}\n会社名：${f.get('company')||'（なし）'}\nご用件：${f.get('type')}\n\n${f.get('message')}`;
  const href=`mailto:${TO}?subject=${encodeURIComponent('【ポートフォリオより】'+f.get('type'))}&body=${encodeURIComponent(body)}`;
  document.getElementById('form-status').textContent=`メールアプリを開きます。開かない場合は ${TO} 宛にお送りください。`;
  window.location.href=href;
});

