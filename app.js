const channel = 'https://www.youtube.com/@Salobrenha';
const instagram = {personal:'https://www.instagram.com/meu_krush/',salobard:'https://www.instagram.com/salobard_/',area31:'https://www.instagram.com/banda_area31/'};
const instagramIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none"/></svg>';
const arrow = '<span aria-hidden="true">↗</span>';
const play = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 4.8v14.4L20 12Z"/></svg>';
const star = '<span class="inline-star" aria-hidden="true">✳</span>';
const projects = [
  {id:'salobard', number:'01', name:'Salobard', tag:'MEDIEVAL · AUTORAL', desc:'Uma banda de um homem só. E de alguns séculos atrás.', image:'salobard.webp', alt:'Arte de Salobard com uma letra S em iluminura medieval', color:'#d7b77b'},
  {id:'area-31', number:'02', name:'Area 31', tag:'GRUNGE · AUTORAL', desc:'Distorção, poeira e algumas ideias não identificadas.', image:'area-31.webp', alt:'Ilustração de uma nave espacial sobre uma cidade à noite', color:'#c9dc6a'},
  {id:'igni-radix', number:'03', name:'Igni Radix', tag:'WORLD · EM BOA COMPANHIA', desc:'Raízes diferentes. Um ponto de encontro na música.', image:'igni-radix.webp', alt:'Rômulo tocando violino ao vivo, em fotografia em preto e branco', color:'#d99978'},
  {id:'covers', number:'04', name:'Covers & cia.', tag:'RELEITURAS · SEM ROTEIRO', desc:'Músicas dos outros, com algumas liberdades poéticas.', image:'covers.webp', alt:'Ilustração de Rômulo tocando violino em um skate', color:'#c6afe5'}
];
const ensembles = [
  {name:'Banda Taverna',handle:'bandataverna'},
  {name:'Canção das Iluminuras',handle:'cancaodasiluminuras'},
  {name:'Rockin’ Strings',handle:'rockinstrings5'},
  {name:'Concentus Musicus BH',handle:'concentusmusicusbh'},
  {name:'Vidin Symphony Orchestra',handle:'vidinsymphonyorchestra'}
];
const videos = [
  {id:'nWkIFW9DTJ8', title:"The Bard’s Song", full:"The Bard's Song medieval cover", tag:'UM COVER EM OUTRO SÉCULO', sub:'Uma releitura medieval'},
  {id:'i0067hn9tXo', title:'No Cigar', full:'No cigar - Millencolin - acoustic cover', tag:'MILLENCOLIN, DE OUTRO JEITO', sub:'Uma releitura acústica'},
  {id:'ZGmzK8SCSiU', title:'A Bruxa (The Witch)', full:'A Bruxa (The Witch) — Celtic Folk | Galician Folk Song', tag:'CELTIC FOLK · GALICIAN FOLK', sub:'Uma viagem pelo folk'},
  {id:'59haWLEFhuw', title:'Whoreson Jail Blues', full:'Whoreson jail blues Cover', tag:'MAIS UM DESVIO MUSICAL', sub:'Um cover do meu jeito'}
];
const external = (url, label, classes='button') => `<a class="${classes}" href="${url}" target="_blank" rel="noopener noreferrer">${label} ${arrow}</a>`;
const sectionLabel = (n, name) => `<span class="eyebrow"><span class="section-number">${n}</span> ${name}</span>`;

function projectCards() {
  return `<div class="project-grid">${projects.map(p=>`<a href="#${p.id}" class="project-card" style="--card-accent:${p.color}"><div class="project-image"><img src="assets/${p.image}" alt="${p.alt}" width="900" height="900" loading="lazy"><span class="project-num">${p.number} /</span><span class="project-arrow" aria-hidden="true">↗</span></div><span class="project-tag">${p.tag}</span><h3>${p.name}</h3><p>${p.desc}</p></a>`).join('')}</div>`;
}

function videoCard(v, large=false) {
  return `<article class="video-card ${large?'video-large':''}"><a class="video-thumb" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener noreferrer" aria-label="Assistir a ${v.full.replaceAll('"','&quot;')} no YouTube (abre em nova aba)"><img src="assets/video-${v.id}.webp" alt="Miniatura de ${v.title}" width="480" height="360" loading="lazy"><span class="play-button">${play}</span><span class="watch-label">VER NO YOUTUBE ↗</span></a><div class="video-caption"><div><span class="project-tag">${v.tag}</span><h3>${v.title}</h3></div><span class="video-caption-arrow" aria-hidden="true">↗</span></div></article>`;
}

function homePage() {
 return `<section class="hero home-hero wrap">
   <div class="hero-copy"><div class="eyebrow hero-eyebrow"><span class="status-dot"></span> MÚSICO. CURIOSO. MULTIPLICADO.</div><h1 tabindex="-1">Muito som.<br><span>Pouco juízo.</span></h1><p class="hero-description">Eu sou o Rômulo. Um músico, alguns projetos<br class="desktop-break"> e uma leve dificuldade de ficar num estilo só.</p><div class="hero-actions"><a class="button primary" href="#projetos">Encontre seu som <span aria-hidden="true">↘</span></a>${external(channel,'Ouça no YouTube','button secondary')}</div><div class="hero-footnote"><span class="small-cross" aria-hidden="true">✳</span><span>Autoral, coletivo ou emprestado.<br>O importante é fazer soar.</span></div></div>
   <div class="hero-visual"><div class="image-topline"><span>ROMULO SALOBREÑA</span><span>EM SEU HABITAT NATURAL ↙</span></div><div class="hero-photo"><img src="assets/hero-live.webp" alt="Rômulo tocando violino ao vivo, cercado de luz e névoa verde" width="1600" height="1067" fetchpriority="high"><span class="photo-caption">VIOLINO NA MÃO. IDEIAS NA CABEÇA.</span></div><div class="hero-sticker"><span>VÁRIOS PROJETOS</span><strong>um só<br>Rômulo.</strong><span>(NA MAIORIA DAS VEZES)</span></div><div class="image-bottomline"><span>AO VIVO & A CORES</span><span>FOTO: RAPHA GARCIA</span></div></div>
 </section>
 <div class="sound-strip" aria-hidden="true"><div>UM PÉ NO MEDIEVAL ${star} OUTRO NA DISTORÇÃO ${star} A CABEÇA EM TODO LUGAR ${star} UM PÉ NO MEDIEVAL ${star} OUTRO NA DISTORÇÃO ${star}</div></div>
 <section class="projects-section wrap" id="projetos"><div class="section-intro"><div>${sectionLabel('01','OS PROJETOS')}<h2>Mesma cabeça.<br>Outros universos.</h2></div><p>Escolha uma porta. Cada uma tem seu som,<br class="desktop-break"> sua história e suas próprias esquisitices.</p></div>${projectCards()}<div class="projects-note"><span aria-hidden="true">↳</span> Sim, em duas dessas bandas eu sou a banda inteira. Marcar ensaio é bem fácil.</div></section>
 <section class="home-videos"><div class="wrap"><div class="section-intro"><div>${sectionLabel('02','MENOS CONVERSA, MAIS MÚSICA')}<h2>Deixa o som<br>se apresentar.</h2></div>${external(channel+'/videos','Todos os vídeos','text-link')}</div><div class="home-video-grid">${videoCard(videos[0],true)}${videoCard(videos[1],true)}</div></div></section>
 ${ensembleSection()}
 <section class="about-teaser wrap"><span class="about-asterisk" aria-hidden="true">✳</span><div>${sectionLabel('04','A PESSOA POR TRÁS DO BARULHO')}<h2>Oi, eu sou o Rômulo.<br>O resto é projeto.</h2><p>Tem dia de viajar alguns séculos para trás. Tem dia de aumentar a distorção. E tem dia de pegar uma música conhecida e ver onde ela vai parar. Este é o meu canto para juntar tudo isso.</p><a class="text-link" href="#sobre">Puxa uma cadeira ${arrow}</a></div><img src="assets/portrait.webp" alt="Rômulo sorrindo, de braços cruzados" width="720" height="900" loading="lazy"></section>
 ${contactSection()}`;
}

function ensembleSection() {
  return `<section class="ensemble-section wrap" id="em-conjunto"><div class="ensemble-intro">${sectionLabel('03','EM BOA COMPANHIA')}<h2>Também<br>faço parte.</h2><p>Nem só de conversar comigo mesmo vive um músico. Estes são os grupos dos quais faço parte — outras pessoas, outras ideias e mais música na história.</p><span class="ensemble-doodle" aria-hidden="true">↳</span><span class="ensemble-note">AQUI A BANDA NÃO SOU SÓ EU.</span></div><div class="ensemble-list">${ensembles.map((p,i)=>`<a class="ensemble-row" href="https://www.instagram.com/${p.handle}/" target="_blank" rel="noopener noreferrer" aria-label="${p.name} no Instagram (abre em nova aba)"><span class="ensemble-number">0${i+1}</span><div><h3>${p.name}</h3><span class="ensemble-handle">${instagramIcon} @${p.handle}</span></div><span class="ensemble-arrow" aria-hidden="true">↗</span></a>`).join('')}</div></section>`;
}

function contactSection() {
  return `<section class="contact-section wrap"><div><span class="eyebrow">A CONVERSA CONTINUA</span><h2>Bora fazer<br>um barulho?</h2></div><div><p>Pra acompanhar os próximos sons, trocar uma ideia ou me chamar pra fazer música junto.</p><div class="contact-links">${external(instagram.personal,instagramIcon+' Me encontra no Instagram','button primary')}${external(channel,'Mais música no YouTube','text-link')}</div></div><span class="contact-spark" aria-hidden="true">✳</span></section>`;
}

function projectBreadcrumb(name) {return `<div class="breadcrumb"><a href="#inicio">O universo</a><span aria-hidden="true">/</span><span>${name}</span></div>`;}
function projectPager(current) {return `<section class="next-world wrap"><div><span class="eyebrow">AINDA TEM MAIS BARULHO POR AQUI</span><h2>Troque de universo.</h2></div><div class="world-links">${projects.filter(p=>p.id!==current).map(p=>`<a href="#${p.id}"><span>${p.name}</span>${arrow}</a>`).join('')}</div></section>`;}

function salobardPage() {
 return `<section class="project-hero salobard-hero wrap">${projectBreadcrumb('Salobard')}<div class="project-hero-grid"><div class="project-hero-copy"><span class="eyebrow">I. CRÔNICAS DE UMA BANDA DE UM HOMEM SÓ</span><h1 tabindex="-1">Salobard<span class="title-flourish" aria-hidden="true">✧</span></h1><p class="project-lead">Velhas eras.<br>Novas histórias.</p><p>Meu lado que prefere uma boa taverna. Um projeto autoral de alma medieval, feito por uma banda inteira que, por coincidência, sou só eu.</p><div class="project-actions"><a class="button primary" href="#salobard-historia">Adentre este reino <span aria-hidden="true">↓</span></a>${external(instagram.salobard,instagramIcon+' @salobard_','button secondary')}</div></div><figure class="medieval-art"><img src="assets/salobard.webp" alt="Arte de Salobard: a letra S cercada de músicos e ornamentos medievais" width="900" height="900"><figcaption>O BARDO É UM SÓ. A IMAGINAÇÃO, NEM TANTO.</figcaption></figure></div></section>
 <div class="theme-ribbon"><span>CORDAS & HISTÓRIAS</span><span aria-hidden="true">✧</span><span>UM PROJETO AUTORAL</span><span aria-hidden="true">✧</span><span>SEM MÁQUINA DO TEMPO</span></div>
 <section class="story-section wrap" id="salobard-historia"><div>${sectionLabel('01','O ESPÍRITO DO PROJETO')}<h2>Era uma vez.<br>E ainda é.</h2></div><div class="story-text"><p class="large-copy">Salobard é onde as ideias vestem uma roupa de outro século.</p><p>Aqui, a inspiração medieval encontra a vontade de criar música própria. Tem espaço para imaginar cenários, contar histórias e seguir uma melodia até ela virar alguma coisa.</p><p>É um projeto solo com espírito de banda. A vantagem? Todo mundo concorda com o repertório. Quase sempre.</p><div class="word-tags"><span>Autoral</span><span>Medieval</span><span>Projeto solo</span></div></div></section>
 <section class="spotlight wrap"><div class="spotlight-image"><img src="assets/salobard-wide.webp" alt="Ilustração de Rômulo com violino em um cenário de manuscrito medieval" width="1200" height="800" loading="lazy"></div><div class="spotlight-copy"><span class="eyebrow">UMA PARADA NO CANAL</span><h2>O caminho até<br>a taverna.</h2><p>Para entrar no clima: minha releitura medieval de The Bard’s Song. Um dos muitos caminhos que a música pode tomar por aqui.</p>${external('https://www.youtube.com/watch?v=nWkIFW9DTJ8',play+' Ouvir The Bard’s Song','button primary')}<small>Vídeo do canal de Rômulo · cover</small></div></section>${projectPager('salobard')}`;
}

function areaPage() {
 return `<section class="project-hero area-hero wrap">${projectBreadcrumb('Area 31')}<div class="project-hero-grid"><div class="project-hero-copy"><span class="eyebrow"><span class="status-dot"></span> TRANSMISSÃO AUTORAL / ORIGEM SUSPEITA</span><h1 tabindex="-1">AREA<span class="area-number">31<span aria-hidden="true">*</span></span></h1><p class="project-lead">Pode entrar.<br>O ruído é da casa.</p><p>Meu projeto autoral de pegada grunge. Uma banda de um homem só, com espaço para distorção, sujeira e ideias que não vieram com manual.</p><div class="project-actions"><a class="button primary" href="#area-historia">Sintonizar essa frequência <span aria-hidden="true">↓</span></a>${external(instagram.area31,instagramIcon+' @banda_area31','button secondary')}</div></div><figure class="ufo-art"><div class="tape" aria-hidden="true"></div><img src="assets/area-31.webp" alt="Arte de uma nave espacial iluminando uma cidade noturna" width="900" height="900"><figcaption><span>ARQUIVO 031</span><span>IDEIAS NÃO IDENTIFICADAS ↗</span></figcaption><span class="area-stamp">SEM SINAL<br>DE BOM SENSO</span></figure></div></section>
 <div class="theme-ribbon"><span>GRUNGE</span><span aria-hidden="true">✳</span><span>FAÇA VOCÊ MESMO</span><span aria-hidden="true">✳</span><span>AUMENTE POR SUA CONTA</span></div>
 <section class="story-section wrap" id="area-historia"><div>${sectionLabel('01','O QUE TEM AQUI')}<h2>Um pouco de sujeira<br>faz parte do som.</h2></div><div class="story-text"><p class="large-copy">Area 31 é o meu espaço para deixar as ideias menos comportadas fazerem barulho.</p><p>O espírito é de banda de garagem. A formação cabe em uma pessoa. Este é o lado autoral que pede textura, atitude e liberdade para não polir todas as arestas.</p><p>Se a reunião da banda vira uma discussão, fica tudo por minha conta.</p><div class="word-tags"><span>Autoral</span><span>Grunge</span><span>Um integrante só</span></div></div></section>
 <section class="area-interlude wrap"><span class="huge-asterisk" aria-hidden="true">✳</span><div><span class="eyebrow">OUTRA FREQUÊNCIA DO MESMO MÚSICO</span><h2>Até o punk pode<br>pegar outro caminho.</h2><p>Enquanto você conhece meus universos, dá uma passada neste cover acústico de No Cigar, do Millencolin, lá no canal.</p>${external('https://www.youtube.com/watch?v=i0067hn9tXo',play+' Ouvir No Cigar','button primary')}<small>Vídeo do canal de Rômulo · cover</small></div></section>${projectPager('area-31')}`;
}

function igniPage() {
 return `<section class="project-hero igni-hero wrap">${projectBreadcrumb('Igni Radix')}<div class="project-hero-grid"><div class="project-hero-copy"><span class="eyebrow">RAÍZES, ENCONTROS & MÚSICA</span><h1 tabindex="-1">Igni<br><em>Radix</em><span class="igni-sun" aria-hidden="true">☼</span></h1><p class="project-lead">A música também<br>cria raízes.</p><p>O lado coletivo desta história. Uma banda na Bulgária e um espaço para sons, referências e caminhos se encontrarem.</p><a class="button primary" href="#igni-historia">Conheça o encontro <span aria-hidden="true">↓</span></a></div><figure class="igni-art"><img src="assets/igni-radix.webp" alt="Rômulo ao violino em um show, em foto de Rapha Garcia" width="1200" height="800"><figcaption>RÔMULO AO VIVO · ARQUIVO PESSOAL · FOTO: RAPHA GARCIA</figcaption><div class="igni-seal" aria-hidden="true">RAÍZES<br><span>✳</span><br>EM MOVIMENTO</div></figure></div></section>
 <div class="theme-ribbon"><span>WORLD</span><span aria-hidden="true">☼</span><span>MÚSICA EM CONJUNTO</span><span aria-hidden="true">☼</span><span>BULGÁRIA</span></div>
 <section class="story-section wrap" id="igni-historia"><div>${sectionLabel('01','QUANDO A MÚSICA REÚNE')}<h2>Outras pessoas.<br>Outras possibilidades.</h2></div><div class="story-text"><p class="large-copy">Algumas ideias ficam melhores quando encontram outras mãos.</p><p>Igni Radix é a banda de verdade entre os meus projetos de um homem só. Um encontro na Bulgária, com uma identidade voltada a raízes, misturas e ao universo da world music.</p><p>Esta parte da história ainda está sendo escrita em conjunto. Os próximos registros e novidades da banda vão ganhar espaço por aqui.</p><div class="word-tags"><span>Coletivo</span><span>World</span><span>Bulgária</span></div></div></section>
 <section class="igni-quote wrap"><span aria-hidden="true">☼</span><h2>Tem som que a gente inventa.<br>Tem som que acontece<br><em>no encontro.</em></h2><a class="text-link" href="#sobre">Conheça o Rômulo ${arrow}</a></section>${projectPager('igni-radix')}`;
}

function coversPage() {
 return `<section class="project-hero covers-hero wrap">${projectBreadcrumb('Covers & cia.')}<div class="project-hero-grid"><div class="project-hero-copy"><span class="eyebrow">RELEITURAS, DESVIOS & OUTRAS IDEIAS</span><h1 tabindex="-1">Conhece<br>essa <em>música?</em></h1><p class="project-lead">Talvez não desse jeito.</p><p>Às vezes eu pego uma música dos outros e sigo por um caminho um pouco diferente. Covers aleatórios, estilizados e sem muita vontade de ficar dentro da caixinha.</p><a class="button primary" href="#playlist">Escolha seu próximo play <span aria-hidden="true">↓</span></a></div><figure class="covers-art"><img src="assets/covers.webp" alt="Ilustração bem-humorada de Rômulo tocando violino enquanto anda de skate" width="1200" height="800"><span class="covers-sticker">A ORIGINAL<br>ME PERDOE.</span><figcaption>ILUSTRAÇÃO · LIBERDADE POÉTICA TAMBÉM NA IMAGEM</figcaption></figure></div></section>
 <div class="theme-ribbon"><span>SEM REPERTÓRIO FIXO</span><span aria-hidden="true">✳</span><span>COM PERSONALIDADE</span><span aria-hidden="true">✳</span><span>DÁ O PLAY</span></div>
 <section class="covers-playlist wrap" id="playlist"><div class="section-intro"><div>${sectionLabel('01','DIRETO DO MEU CANAL')}<h2>Um cover.<br>Outro caminho.</h2></div><p>Do medieval ao acústico.<br>Sem uma ordem muito lógica, como deve ser.</p></div><div class="covers-video-grid">${videos.map(v=>videoCard(v,true)).join('')}</div><div class="playlist-bottom"><p>Tem mais música e mais desvios lá no canal.</p>${external(channel+'/videos','Explorar todos os vídeos','button primary')}</div></section>${projectPager('covers')}`;
}

function aboutPage() {
 return `<section class="about-page wrap">${projectBreadcrumb('O Rômulo')}<div class="about-page-grid"><div><span class="eyebrow">MÚSICO & COLECIONADOR DE IDEIAS</span><h1 tabindex="-1">Oi, eu sou<br>o Rômulo<span class="accent">.</span></h1><p class="project-lead">Sim, o mesmo dos outros projetos.</p><p>Entre um violino, uma ideia autoral e um cover que tomou outro rumo, fui juntando alguns jeitos diferentes de fazer música. Este site é a casa de todos eles.</p><p>Salobard e Area 31 são minhas bandas de um homem só. Igni Radix é o encontro com outras pessoas na Bulgária. E os covers? São a desculpa perfeita para continuar experimentando.</p><p>A música também me leva a outras casas. Em <a class="inline-link" href="#em-conjunto">“Também faço parte”</a>, você encontra os outros grupos dos quais faço parte.</p><p>Não precisa escolher um estilo para ficar por aqui. Eu também não consegui.</p><a class="button primary" href="#projetos">Conheça meus projetos ${arrow}</a></div><figure><img src="assets/portrait.webp" alt="Retrato de Rômulo sorrindo, de braços cruzados e camiseta com símbolo de radiação" width="720" height="900"><figcaption>O RESPONSÁVEL POR ESSE TANTO DE PROJETO. ↑</figcaption></figure></div></section>${contactSection()}`;
}

const pages = {inicio:homePage,salobard:salobardPage,'area-31':areaPage,'igni-radix':igniPage,covers:coversPage,sobre:aboutPage};
const titles = {inicio:'Muito som. Pouco juízo.',salobard:'Salobard — Velhas eras. Novas histórias.','area-31':'Area 31 — O ruído é da casa.','igni-radix':'Igni Radix — Raízes em movimento.',covers:'Covers & cia. — Talvez não desse jeito.',sobre:'Oi, eu sou o Rômulo.'};
const sections = {'projetos':'inicio','em-conjunto':'inicio','salobard-historia':'salobard','area-historia':'area-31','igni-historia':'igni-radix','playlist':'covers'};
const main = document.querySelector('main');
const menu = document.querySelector('.menu-toggle');
let currentPage = '';

function closeMenu() {menu.setAttribute('aria-expanded','false');document.querySelector('.site-header').classList.remove('menu-open');menu.setAttribute('aria-label','Abrir navegação');}
function render(initial=false) {
  let hash = location.hash.slice(1) || 'inicio';
  const page = sections[hash] || (pages[hash]?hash:'inicio');
  const changed = page !== currentPage;
  if(changed) {
    document.body.dataset.theme = page;
    main.innerHTML = pages[page]();
    currentPage = page;
    document.title = `Romulo Salobreña — ${titles[page]}`;
    document.querySelector('meta[name="theme-color"]').content = {salobard:'#ece2ca','area-31':'#1c1d19','igni-radix':'#e9dbbe',covers:'#e6def0',sobre:'#181a17',inicio:'#181a17'}[page];
  }
  const activePage=hash==='em-conjunto'?'em-conjunto':page;
  document.querySelectorAll('[data-page]').forEach(a=>{if(a.dataset.page===activePage)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  closeMenu();
  requestAnimationFrame(()=>{
    const target=sections[hash]?document.getElementById(hash):null;
    if(target){target.scrollIntoView({behavior:initial?'instant':'smooth',block:'start'});if(!initial){target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}}
    else if(changed||!initial){window.scrollTo({top:0,behavior:'instant'});if(!initial)main.querySelector('h1')?.focus({preventScroll:true});}
  });
}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar navegação':'Abrir navegação');document.querySelector('.site-header').classList.toggle('menu-open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;if(a.hash==='#conteudo'){e.preventDefault();main.setAttribute('tabindex','-1');main.focus();main.scrollIntoView({block:'start'});closeMenu();return;}if(a.hash===location.hash){render();closeMenu();}});
window.addEventListener('hashchange',()=>render());

document.getElementById('year').textContent=new Date().getFullYear();
render(true);
