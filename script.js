/* ════════════════════════════════════════════
   VINTAGE VIBES — script.js  v2.1
   ① Réponses hashées SHA-256
   ② Reprise de session via sessionStorage
   ③ html2canvas chargé en lazy au clic
   ④ Accessibilité clavier + aria complète
   ⑤ Molette qui disparaît à l'ouverture
   ⑥ Vrais alias de la liste officielle
════════════════════════════════════════════ */

const invites = [
  { nom:"Akosso", prenom:"Fandey Ance Joel", alias:"mamain",
    enigme:"Je suis invisible mais je fais tourner le monde. Les hommes me cherchent, les États se battent pour moi. Sans moi, aucune entreprise ne survit. Qui suis-je ?",
    reponseHash:"9fdf7113129f3038a22e9d0dc808dce797f67c148028b365c782ed2b18d5f449",
    indice:"Je suis au cœur de la finance et de la comptabilité.", image:"cartes/Akosso-Ance.jpg" },

  { nom:"Beugre", prenom:"N'Drin Simon Armando", alias:"mr. schweppes",
    enigme:"On me consulte quand tout va mal. Je révèle les erreurs sans jamais en commettre. Je suis la mémoire fidèle des transactions. Qui suis-je ?",
    reponseHash:"a0070f6fd5aa6e3c43edcf12b4371db937479ac7cd0b84dc95bb680492b41640",
    indice:"Je suis un document fondamental en comptabilité.", image:"cartes/Beugré-Armando.jpg" },

  { nom:"Bouaffou", prenom:"Ahou Jessica", alias:"bodouин",
    enigme:"Je brille la nuit, je guide les perdus. Les marins me suivaient avant les GPS. Les poètes m'ont chantée depuis des siècles. Qui suis-je ?",
    reponseHash:"5c7f259c35a05f39074787588eeae82c2a277ce7c8111a9d3de4f2b2b2db37d1",
    indice:"Je suis l'astre qui illumine la nuit.", image:"cartes/Bouaffou-Jessica.jpg" },

  { nom:"Coulibaly", prenom:"Madjalia", alias:"dora",
    enigme:"Je n'ai ni début ni fin. Je suis dans chaque instant mais on ne peut me toucher. Les philosophes me questionnent depuis toujours. Qui suis-je ?",
    reponseHash:"0af2ee1adc114b24fe0ce8fc66f757280ea262f82c08b8d729b286aeda7dd354",
    indice:"Même les horloges ne font que me mesurer.", image:"cartes/Coulibaly-Madjalia.jpg" },

  { nom:"Coulibaly", prenom:"Soutcho Fatimah", alias:"la nerveuse",
    enigme:"Je suis une promesse écrite. Je lie deux parties sans les réunir physiquement. Sans moi, le commerce serait chaos. Qui suis-je ?",
    reponseHash:"54f605c03d201bdfcdf9544540fd445a0616910af7efd52c2121ad67a4d933eb",
    indice:"Les avocats et les notaires me rédigent souvent.", image:"cartes/Coulibaly-Fatimah.jpg" },

  { nom:"Dakouri", prenom:"Emmanuelle", alias:"la fee dorothee",
    enigme:"Je suis le seul feu qui ne brûle pas. Je chasse l'obscurité sans faire de fumée. Les savants m'ont inventée, les enfants m'adorent. Qui suis-je ?",
    reponseHash:"ceb848a7e301afbe28574e6c206b28b57443ee0817a01e32d9f6770fa8125548",
    indice:"Edison m'a créée. Je m'allume et m'éteins.", image:"cartes/Dakouri-Emmanuelle.jpg" },

  { nom:"Diallo", prenom:"Boubacar Auriol", alias:"chercheur",
    enigme:"Je rugis sans voix. Je règne sans couronne. Toute la savane me respecte et me craint. Qui suis-je ?",
    reponseHash:"fc59487712bbe89b488847b77b5744fb6b815b8fc65ef2ab18149958edb61464",
    indice:"On m'appelle le roi de la jungle.", image:"cartes/Diallo-Auriol.jpg" },

  { nom:"Diomande", prenom:"Ibrahim", alias:"karakace",
    enigme:"Je renais de mes cendres. Je meurs pour mieux vivre. Aucun obstacle ne m'arrête définitivement. Qui suis-je ?",
    reponseHash:"03a8f0dd8edb33781a836ac497800b5f9c5c47c2ddbfd0f89581140589725a85",
    indice:"Je suis un oiseau mythologique de feu.", image:"cartes/Diomande-Ibrahim.jpg" },

  { nom:"Djezou", prenom:"Amoin Asriel-Joela", alias:"zrai",
    enigme:"Je suis née il y a des milliards d'années mais tu ne me vois que la nuit. Ma lumière voyage des années entières pour t'atteindre. Qui suis-je ?",
    reponseHash:"5c135038ff7953da393e3d372c4d79f40118b50fb98ea82d54732e07306aea16",
    indice:"Je scintille dans le ciel nocturne.", image:"cartes/Djezou-Asriel.jpg" },

  { nom:"Doumbia", prenom:"Ibrahim", alias:"pigeon",
    enigme:"Je porte le monde sur mes épaules. Je suis à la fois un livre et un titan de la mythologie grecque. Les géographes m'adorent. Qui suis-je ?",
    reponseHash:"7c82602500857aa6ed0cf38c4c3e4ec645bdcaa82c00b9155eb08be100c778a9",
    indice:"Je suis un recueil de cartes géographiques.", image:"cartes/Doumbia-Ibrahim.jpg" },

  { nom:"Egbonon", prenom:"Andouha Oliviaemanuella", alias:"la jugee",
    enigme:"Je nais dans la douleur d'un coquillage. Je suis rare, précieuse et recherchée. Les reines me portent autour du cou. Qui suis-je ?",
    reponseHash:"5076d640154f5f7aa96b4680e0dc74e0516902be10955cdf54d03b2d1b853492",
    indice:"Je viens de la mer et j'orne les bijoux.", image:"cartes/Egbonon-Olivia.jpg" },

  { nom:"Elh", prenom:"Chaibou Hadidjatou", alias:"snakyy",
    enigme:"Je suis bleue comme le ciel, dure comme la vérité. Les rois me portaient pour se protéger à la guerre. Je suis une pierre mais je vaux une fortune. Qui suis-je ?",
    reponseHash:"1b631144072d84c2dcadbf07836adaa894e4f25360273771afba010c1a91d12d",
    indice:"Je suis une pierre précieuse de couleur bleue.", image:"cartes/Elh-Chaibou.jpg" },

  { nom:"Hien", prenom:"Sie Wilfried Armand", alias:"flacko",
    enigme:"Je me déplace sans jambes. Je frappe sans mains. Mon regard seul suffit à paralyser mes proies. Qui suis-je ?",
    reponseHash:"b6ef5d1ff0d73da95e3db1dc2d8183f97ee86f054eea14dab63f12c5fae5d5da",
    indice:"Je suis un reptile dangereux et silencieux.", image:"cartes/Hiensie-Wilfried.jpg" },

  { nom:"Kadio", prenom:"Ahioua Ange Trésor Stanislas", alias:"la grosse cuillere",
    enigme:"On me cherche sous les mers, dans les grottes et les îles oubliées. Je suis caché mais précieux. Les pirates me convoitaient. Qui suis-je ?",
    reponseHash:"d2948bdb87c7aabaaeff993a5742ff1e74923be877ee9bf005d54efb551112be",
    indice:"Je suis souvent enfermé dans un coffre au fond de l'océan.", image:"cartes/Kadio-Trésor.jpg" },

  { nom:"Kalouboue", prenom:"Djouhon Karmiela Priscille Wendkuni", alias:"boutchou",
    enigme:"Je suis celle qui vient de loin mais illumine là où elle arrive. Mon nom porte le vent et les étoiles. Je traverse le ciel en un éclair. Qui suis-je ?",
    reponseHash:"0aa16b0802595cfe88786ec347d21bb5a4bbb52cae336cba1b23c6f6d9fa291a",
    indice:"Je suis un phénomène lumineux qui traverse le ciel en un instant.", image:"cartes/Kalouboue-Karmiela.jpg" },

  { nom:"Kambou", prenom:"Sié Alex", alias:"inza",
    enigme:"Je suis le plus grand et le plus fort, mais le temps finit toujours par me vaincre. Je suis une montagne vivante de la mythologie. Qui suis-je ?",
    reponseHash:"40a7e9acb06295d6ccc4de8b5790aa4cea3456f9bb1dd3e91f192ba5ca98bf97",
    indice:"Je suis un géant de la mythologie grecque.", image:"cartes/Kambou-Alex.jpg" },

  { nom:"Klon", prenom:"Adrien Emmanuel", alias:"la chicotte",
    enigme:"Je dirige sans parler. Je fais jouer cent musiciens à l'unisson avec un simple geste. Mon bâton est ma seule arme. Qui suis-je ?",
    reponseHash:"db1b743d38bcb6e964e2db3855507b44224c1c0c4ddb6517009e84e900c61931",
    indice:"Je me tiens devant un orchestre symphonique.", image:"cartes/Klon-Adrien.jpg" },

  { nom:"Kodjo", prenom:"Ezoua Astrid Marie-Carmel", alias:"PLCC",
    enigme:"Je suis la messagère des dieux. Je porte sept couleurs sur mes épaules après la pluie. Les enfants courent me chercher. Qui suis-je ?",
    reponseHash:"1acfcc79d3fd1a6f676024c131d6b1058b215aa6bd481953d140e1e6e582ae68",
    indice:"Je suis un phénomène coloré dans le ciel après la pluie.", image:"cartes/Kodjo-Astrid.jpg" },

  { nom:"Konan", prenom:"Claude Ariane Floriane", alias:"miss djafoule",
    enigme:"Je suis à la fois une saison et une promesse. Je fais éclore les fleurs et chanter les oiseaux. Après moi vient la grande chaleur. Qui suis-je ?",
    reponseHash:"0083d967459fbf9710c6f56200e9efefdbad85af2578e2bb41b825f039fbb85c",
    indice:"Je suis la saison qui succède à l'hiver.", image:"cartes/Konan-Floriane.jpg" },

  { nom:"Konan", prenom:"Konan César", alias:"le doyen",
    enigme:"J'ai traversé le Rubicon. J'ai dit veni, vidi, vici. Mon nom est devenu un titre pour tous les empereurs qui m'ont suivi. Qui suis-je ?",
    reponseHash:"72f3dc77f679f3fedfd75e3757b3b64e3d658446409ee2d74ee24ffd59c6f1a8",
    indice:"Je suis un célèbre général et homme d'État romain.", image:"cartes/Konan-César.jpg" },

  { nom:"Koné", prenom:"Yieh Pédienlien Daniel", alias:"tchegbe",
    enigme:"Je vois dans le noir absolu. Je chasse en silence total. Mes yeux percent l'obscurité comme des phares dans la nuit. Qui suis-je ?",
    reponseHash:"7c180e3e3bee93dde4c28a4999b4cc3604ee53524c3b245485d41ac36d478c82",
    indice:"Je suis un félin aux yeux perçants vivant dans les forêts.", image:"cartes/Koné-Daniel.jpg" },

  { nom:"Konin", prenom:"Kouame Philippe Pierre Arnaud", alias:"le mignon-mignon",
    enigme:"Je coule vers l'avenir sans jamais revenir en arrière. Je nourris les civilisations depuis des millénaires. Sans moi, les déserts avancent. Qui suis-je ?",
    reponseHash:"40f19537798b0635fbb5a812f4d395382ec8b74eb939cce526441c8f0c3e6533",
    indice:"Je suis un grand cours d'eau qui se jette dans la mer.", image:"cartes/Konin-Philippe.jpg" },

  { nom:"Kouadio", prenom:"Kouakou Josué", alias:"le lampadaire de soubre",
    enigme:"Je suis plus vieux que les civilisations. Je résiste à tout — au vent, à l'eau, au temps. Les sculpteurs font leur art avec moi. Qui suis-je ?",
    reponseHash:"d5a5d66b94e8da0cf63d4cd6d66cd489d78e77b697039c6c48e3ff8d81752139",
    indice:"Je suis un matériau naturel solide extrait du sol.", image:"cartes/Kouadio-Josué.jpg" },

  { nom:"Kouame", prenom:"Akissi Eunice", alias:"la diva des baoules",
    enigme:"Je change de couleur selon l'angle où on me regarde. Je suis une pierre qui rêve. Les artistes et les joailliers m'adorent. Qui suis-je ?",
    reponseHash:"75623fcf9d5eb8d75d7bb73b4a6ff215c0d5848ba04d8c7a42f2f7d3be399eab",
    indice:"Je suis une pierre précieuse aux reflets irisés et changeants.", image:"cartes/Kouame-Eunice.jpg" },

  { nom:"Kouassi", prenom:"Ange Xavier Romaric", alias:"kacou philippe",
    enigme:"Je me lève à l'est et me couche à l'ouest sans jamais me tromper. Je réchauffe la Terre depuis des milliards d'années. Qui suis-je ?",
    reponseHash:"e93e24c1b877a15df5e4a8cbb20f351b891b750779cf5e8fb99119a7142d89cf",
    indice:"Je suis l'étoile autour de laquelle tourne la Terre.", image:"cartes/Kouassi-Xavier.jpg" },

  { nom:"Kouassi", prenom:"Kanga Ange Marilyne", alias:"pedj",
    enigme:"Mon parfum envoûte, ma beauté séduit. Je suis offerte lors des grandes occasions. Je cache des épines mais j'incarne l'amour. Qui suis-je ?",
    reponseHash:"618d663af0f1ec88a5a19defa65a2f80d06582a832510b12f475d80870bdb3ab",
    indice:"Je suis une fleur symbole d'amour et de passion.", image:"cartes/Kouassi-Marilyne.jpg" },

  { nom:"Mafely", prenom:"Koffi Marc Aurel", alias:"m. prestige",
    enigme:"Je suis un philosophe qui gouvernait un empire. Je méditais en latin et régnais en sage. Mon prénom est celui d'un métal précieux. Qui suis-je ?",
    reponseHash:"4dae79101eeada367c47fbd8c9d0ffc4ebdb76cbdac9921b35fe3faba23a8c77",
    indice:"Je suis un empereur philosophe de la Rome antique.", image:"cartes/Mafely-Marc.jpg" },

  { nom:"Makoua", prenom:"Lou Degokon Ricky Mira", alias:"chantre liya",
    enigme:"Je suis ce qu'on voit dans le désert quand on a soif. Je fais croire à l'impossible. Je disparais quand on s'approche. Qui suis-je ?",
    reponseHash:"b20459ab886e03b9a00f952b4e2adc167f9af9b53b0909860e9c58c2f1cecd60",
    indice:"Je suis un phénomène optique trompeur dans le désert.", image:"cartes/Makoua-Lou.jpg" },

  { nom:"Mare", prenom:"Ousmane", alias:"le dictateur",
    enigme:"Je suis la frontière entre le désert et la forêt. Je suis une zone fragile que le réchauffement climatique menace chaque année davantage. Qui suis-je ?",
    reponseHash:"0d8ef178442fa8c2fc76b460adc75a8ae70d499e9675cffc8ef164c9601fc5f6",
    indice:"Je suis une région d'Afrique entre le Sahara et la savane.", image:"cartes/Maré-Ousmane.jpg" },

  { nom:"Obou", prenom:"Boka Yaba Divine Alexandra Grace", alias:"la doubehi",
    enigme:"Je suis ce qui reste quand on enlève tout le superflu. Je suis légère, élégante et intemporelle. Les grandes dames me cultivent toute leur vie. Qui suis-je ?",
    reponseHash:"0cabdcb9e479e967554a1e295e0a23b0acc17b08fe36e2e98c880f22170fa3fd",
    indice:"Je suis une qualité esthétique et comportementale très raffinée.", image:"cartes/Obou-Lexa.png" },

  { nom:"Ouattara", prenom:"Ferima", alias:"gesaped",
    enigme:"Je suis une résine fossilisée qui emprisonne le temps. On m'a retrouvée avec des insectes vieux de millions d'années en mon sein. Qui suis-je ?",
    reponseHash:"879a7a2c37f4e7f153276c1b216307e3ba4f8ab8eaca98cf7fa2ef719e1d51bd",
    indice:"Je suis une résine fossile de couleur dorée et translucide.", image:"cartes/Ouattara-Ferima.jpg" },

  { nom:"Saganogo", prenom:"Alpha Mohamed Junior", alias:"la fermeture",
    enigme:"Je suis le premier. Je suis le commencement de toute chose. Toute liste, tout alphabet, toute hiérarchie commence par moi. Qui suis-je ?",
    reponseHash:"8ed3f6ad685b959ead7022518e1af76cd816f8e8ec7ccdda1ed4018e8f2223f8",
    indice:"Je suis la première lettre de l'alphabet grec.", image:"cartes/Saganogo-Alpha.jpg" },

  { nom:"Sam", prenom:"Judikael", alias:"preo-preo",
    enigme:"Je suis l'une des étoiles les plus brillantes du ciel d'été. Je guide les navigateurs depuis l'antiquité. Je brille dans la constellation de la Lyre. Qui suis-je ?",
    reponseHash:"313ce7d71787960e3bb5f8258c173ae466b4e08e1e7d24b9c7a5ba81c9a02d96",
    indice:"Je suis une étoile très brillante visible pendant l'été.", image:"cartes/Sam-Judikael.jpg" },

  { nom:"Sanguisso", prenom:"Kalirou", alias:"bac bee!!!",
    enigme:"Je souffle depuis le Sahara. Je dessèche les lèvres et blanchis le ciel. En Afrique de l'Ouest, je suis à la fois redouté et attendu. Qui suis-je ?",
    reponseHash:"9efb2ed3f6760d30387c6812fe8ea3b2c8ee9a14fc25705d043b7e1571f89972",
    indice:"Je suis un vent sec et chaud venant du désert.", image:"cartes/Sanguisso-kalirou.jpg" },

  { nom:"Sanogo", prenom:"Watchouho Aicha Jamila", alias:"femme de milliardaire",
    enigme:"Mon parfum emplit les jardins la nuit. Je suis blanche et délicate. Les sultans me faisaient cultiver dans leurs jardins secrets. Qui suis-je ?",
    reponseHash:"e0550f209134e6202f5ffaa7733a9aa0bb20c1f25d106559b16290b685fa07ba",
    indice:"Je suis une fleur blanche connue pour son parfum envoûtant.", image:"cartes/Sanogo-Aicha.jpg" },

  { nom:"Sekongo", prenom:"Kafana Rokia Jennifer", alias:"la diablesse",
    enigme:"Je suis rouge comme le feu mais je vaux plus que l'or. Les rois me portaient pour se protéger à la guerre. Je suis une pierre de passion absolue. Qui suis-je ?",
    reponseHash:"a320de5401c9cccea612b43d533649d67406b2886d6302bd2ce78b661d29a0c2",
    indice:"Je suis une pierre précieuse de couleur rouge intense.", image:"cartes/Sekongo-Kafana.jpg" },

  { nom:"Silué", prenom:"Foundjanga Ibrahim", alias:"le politicien",
    enigme:"Je suis le poumon de la Terre. Je cache des milliers d'espèces en mon sein. Les hommes me coupent mais je suis indispensable à leur survie. Qui suis-je ?",
    reponseHash:"f4436d9688af5d6b7cb33e78fe4059fae546920a2018299799919fe8ecaa6328",
    indice:"Je suis un grand espace naturel recouvert d'arbres.", image:"cartes/Silué-Ibrahim.jpg" },

  { nom:"Soumahoro", prenom:"Abdoul Souamade", alias:"le pro de lakota",
    enigme:"Je suis le vent doux qui caresse les joues au printemps. Les Grecs m'avaient donné un nom de dieu. Je suis la brise la plus douce qui soit. Qui suis-je ?",
    reponseHash:"d47c40bea34483aafa4af5bd36af4f6adff17bda66d1cedbaf9c93e9bb9cf387",
    indice:"Je suis un vent doux et agréable dans la mythologie grecque.", image:"cartes/Soumahoro-abdoul.jpg" },

  { nom:"Toussea", prenom:"Oulaï Daniele Grace Emmanuella", alias:"la capricieuse",
    enigme:"Je suis le jardin du commencement. Je suis le paradis perdu que l'humanité cherche encore depuis des millénaires. Mon nom évoque la perfection originelle. Qui suis-je ?",
    reponseHash:"e24ef8f938288781086e27a9433a4d0472a1dbaac31cfe54be2c3525fa30cb2e",
    indice:"Je suis le jardin biblique des origines de l'humanité.", image:"cartes/Toussea-Grâce.jpg" },

  { nom:"Yao", prenom:"Beni Naomi Dodo Karen", alias:"maa make up",
    enigme:"Je suis une figure de fidélité absolue. Je traverse les déserts pour rester loyale à ceux que j'aime. Mon prénom signifie agréable en hébreu. Qui suis-je ?",
    reponseHash:"46c4c923178acf98a9335791af273d4afd2d13e130e24672a753704ed854409f",
    indice:"Je suis un personnage féminin du livre de Ruth dans la Bible.", image:"cartes/Yao-Naomi.jpg" },

  { nom:"Yaonaba", prenom:"Joela Danielle", alias:"poupounanpou",
    enigme:"Je suis une créature des eaux douces et mystérieuses. Je séduis les voyageurs au bord des rivières. Je suis à la fois femme et légende. Qui suis-je ?",
    reponseHash:"b4a1b3d670fe631f25ec5c9960dc2eca35110c3496dcc959fd60d1ed3d0a991f",
    indice:"Je suis une nymphe des eaux dans la mythologie nordique.", image:"cartes/Yaonaba-Joela.jpg" },

  { nom:"Yeo", prenom:"Dogafoli Daouda", alias:"le silencieux",
    enigme:"Je suis tout ce qui existe — les étoiles, les planètes, le temps et l'espace. Je suis infini et mystérieux. Les scientifiques passent leur vie entière à tenter de me comprendre. Qui suis-je ?",
    reponseHash:"53df25f8b548edbd4a3239795a09db9dbddef94069ede069be8f9c27cb6a79c4",
    indice:"Je contiens absolument tout ce qui existe dans l'espace.", image:"cartes/Yeo-Daouda.jpg" }
];

/* ════════════════════════════════════════════
   CONFIGURATION
════════════════════════════════════════════ */
const DATE_EVENEMENT = new Date('2026-05-15T20:00:00');

let inviteConnecte = null;
let indiceVisible  = false;
let coffreDejaClic = false;
let audioCtx       = null;
let countdownTimer = null;

/* ════════════════════════════════════════════
   ① SHA-256
════════════════════════════════════════════ */
async function sha256(texte) {
  const data   = new TextEncoder().encode(texte);
  const buffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2,'0')).join('');
}

/* ════════════════════════════════════════════
   ② REPRISE DE SESSION
════════════════════════════════════════════ */
const SESSION_KEY = 'vv_session';

function sauvegarderSession(etape, indexInvite) {
  try { sessionStorage.setItem(SESSION_KEY, JSON.stringify({ etape, indexInvite })); } catch(e) {}
}

function restaurerSession() {
  try {
    const data = sessionStorage.getItem(SESSION_KEY);
    if (!data) return;
    const { etape, indexInvite } = JSON.parse(data);
    if (indexInvite == null) return;
    inviteConnecte = invites[indexInvite];
    if (!inviteConnecte) return;
    if (etape === 'enigme') {
      chargerEnigme(inviteConnecte);
      document.getElementById('screen-splash').classList.remove('active');
      document.getElementById('screen-enigme').classList.add('active');
    } else if (etape === 'coffre') {
      document.getElementById('coffre-titre').textContent =
        `Votre invitation vous attend, ${inviteConnecte.prenom}...`;
      document.getElementById('screen-splash').classList.remove('active');
      document.getElementById('screen-coffre').classList.add('active');
      initParticlesEnv();
      setTimeout(lancerCoffre, 600);
    }
  } catch(e) {}
}

/* ════════════════════════════════════════════
   CURSEUR
════════════════════════════════════════════ */
const cursor = document.getElementById('cursor');
const trail  = document.getElementById('cursor-trail');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px';
  trail.style.left  = e.clientX + 'px'; trail.style.top  = e.clientY + 'px';
});

/* ════════════════════════════════════════════
   COMPTE À REBOURS
════════════════════════════════════════════ */
function lancerCompteARebours() {
  const el = document.getElementById('splash-countdown');
  if (!el) return;
  function maj() {
    const diff = DATE_EVENEMENT - new Date();
    if (diff <= 0) {
      el.innerHTML = '<span class="cdr-item"><span class="cdr-num">Ce soir</span><span class="cdr-label">C\'est l\'heure</span></span>';
      clearInterval(countdownTimer); return;
    }
    const j=Math.floor(diff/86400000), h=Math.floor((diff%86400000)/3600000),
          m=Math.floor((diff%3600000)/60000), s=Math.floor((diff%60000)/1000);
    const p=n=>String(n).padStart(2,'0');
    el.innerHTML=`
      <span class="cdr-item"><span class="cdr-num">${p(j)}</span><span class="cdr-label">Jours</span></span>
      <span class="cdr-sep">◆</span>
      <span class="cdr-item"><span class="cdr-num">${p(h)}</span><span class="cdr-label">Heures</span></span>
      <span class="cdr-sep">◆</span>
      <span class="cdr-item"><span class="cdr-num">${p(m)}</span><span class="cdr-label">Min</span></span>
      <span class="cdr-sep">◆</span>
      <span class="cdr-item"><span class="cdr-num cdr-sec">${p(s)}</span><span class="cdr-label">Sec</span></span>`;
  }
  maj(); countdownTimer = setInterval(maj, 1000);
}

/* ════════════════════════════════════════════
   MOTEUR AUDIO
════════════════════════════════════════════ */
function getAudioCtx() {
  if (!audioCtx) { try { audioCtx = new (window.AudioContext||window.webkitAudioContext)(); } catch(e){return null;} }
  if (audioCtx.state==='suspended') audioCtx.resume();
  return audioCtx;
}
function sonClocheDor() {
  const ctx=getAudioCtx(); if(!ctx) return;
  [523.25,659.25,783.99,1046.5].forEach((freq,i)=>{
    const osc=ctx.createOscillator(),gain=ctx.createGain(),t=ctx.currentTime+i*.08;
    osc.type='sine'; osc.frequency.setValueAtTime(freq,t); osc.frequency.exponentialRampToValueAtTime(freq*.98,t+.8);
    gain.gain.setValueAtTime(0,t); gain.gain.linearRampToValueAtTime(.18,t+.01); gain.gain.exponentialRampToValueAtTime(.001,t+1.2);
    osc.connect(gain); gain.connect(ctx.destination); osc.start(t); osc.stop(t+1.3);
  });
}
function sonVictoire() {
  const ctx=getAudioCtx(); if(!ctx) return;
  [{f:392,t:0,d:.15},{f:523,t:.1,d:.15},{f:659,t:.2,d:.15},{f:784,t:.3,d:.3},
   {f:880,t:.35,d:.15},{f:988,t:.45,d:.15},{f:1047,t:.55,d:.5}].forEach(n=>{
    const osc=ctx.createOscillator(),gain=ctx.createGain(),t=ctx.currentTime+n.t;
    osc.type='triangle'; osc.frequency.setValueAtTime(n.f,t);
    gain.gain.setValueAtTime(0,t); gain.gain.linearRampToValueAtTime(.22,t+.02); gain.gain.exponentialRampToValueAtTime(.001,t+n.d+.15);
    osc.connect(gain); gain.connect(ctx.destination); osc.start(t); osc.stop(t+n.d+.2);
  });
}
function sonJazzCoffre() {
  const ctx=getAudioCtx(); if(!ctx) return;
  const mel=[{f:293.66,t:0,d:.4,v:.15},{f:369.99,t:.35,d:.25,v:.13},{f:440,t:.55,d:.5,v:.18},
             {f:392,t:.95,d:.25,v:.12},{f:329.63,t:1.15,d:.35,v:.14},{f:293.66,t:1.45,d:.6,v:.20},
             {f:246.94,t:1.95,d:.3,v:.12},{f:293.66,t:2.2,d:.8,v:.18}];
  const bas=[{f:73.42,t:0,d:.3},{f:98,t:.5,d:.3},{f:73.42,t:1,d:.3},{f:87.31,t:1.5,d:.3},{f:73.42,t:2,d:.3},{f:98,t:2.5,d:.3}];
  mel.forEach(n=>{
    const osc=ctx.createOscillator(),gain=ctx.createGain(),t=ctx.currentTime+n.t;
    const filt=ctx.createBiquadFilter(); filt.type='lowpass'; filt.frequency.value=1800;
    osc.type='sawtooth'; osc.frequency.setValueAtTime(n.f,t); osc.frequency.linearRampToValueAtTime(n.f*1.005,t+n.d);
    gain.gain.setValueAtTime(0,t); gain.gain.linearRampToValueAtTime(n.v,t+.06);
    gain.gain.setValueAtTime(n.v,t+n.d-.05); gain.gain.exponentialRampToValueAtTime(.001,t+n.d+.12);
    osc.connect(filt); filt.connect(gain); gain.connect(ctx.destination); osc.start(t); osc.stop(t+n.d+.15);
  });
  bas.forEach(n=>{
    const osc=ctx.createOscillator(),gain=ctx.createGain(),t=ctx.currentTime+n.t;
    osc.type='sine'; osc.frequency.setValueAtTime(n.f,t);
    gain.gain.setValueAtTime(0,t); gain.gain.linearRampToValueAtTime(.12,t+.04); gain.gain.exponentialRampToValueAtTime(.001,t+n.d+.1);
    osc.connect(gain); gain.connect(ctx.destination); osc.start(t); osc.stop(t+n.d+.12);
  });
}

/* ════════════════════════════════════════════
   PARTICULES
════════════════════════════════════════════ */
function initParticlesSplash() {
  const canvas=document.getElementById('particles-canvas'); if(!canvas) return;
  const ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth; canvas.height=window.innerHeight;
  const pts=Array.from({length:60},()=>({
    x:Math.random()*canvas.width,y:Math.random()*canvas.height,
    r:.5+Math.random()*1.5,speed:.15+Math.random()*.35,
    drift:(Math.random()-.5)*.3,opacity:.1+Math.random()*.5,phase:Math.random()*Math.PI*2
  }));
  let f=0;
  (function a(){ctx.clearRect(0,0,canvas.width,canvas.height);f++;
    pts.forEach(p=>{p.y-=p.speed;p.x+=Math.sin(f*.01+p.phase)*p.drift;
      if(p.y<-5){p.y=canvas.height+5;p.x=Math.random()*canvas.width;}
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(201,168,76,${p.opacity})`;ctx.fill();});
    requestAnimationFrame(a);})();
  window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
}
function initParticlesEnv() {
  const canvas=document.getElementById('env-particles-canvas'); if(!canvas) return;
  const ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth; canvas.height=window.innerHeight;
  const pts=Array.from({length:35},()=>({
    x:Math.random()*canvas.width,y:Math.random()*canvas.height,
    r:.4+Math.random()*1.2,speed:.1+Math.random()*.25,
    drift:(Math.random()-.5)*.2,opacity:.05+Math.random()*.25,phase:Math.random()*Math.PI*2
  }));
  let f=0;
  (function a(){ctx.clearRect(0,0,canvas.width,canvas.height);f++;
    pts.forEach(p=>{p.y-=p.speed;p.x+=Math.sin(f*.008+p.phase)*p.drift;
      if(p.y<-5){p.y=canvas.height+5;p.x=Math.random()*canvas.width;}
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(201,168,76,${p.opacity})`;ctx.fill();});
    requestAnimationFrame(a);})();
}

/* ════════════════════════════════════════════
   SPLASH
════════════════════════════════════════════ */
window.onload = function () {
  initParticlesSplash();
  lancerCompteARebours();
  restaurerSession();

  const titre='VINTAGE VIBES', tagline='Une soirée hors du temps vous attend...';
  const elTitre=document.getElementById('splash-title');
  const elRef=document.getElementById('splash-title-ref');
  const elTag=document.getElementById('splash-tagline');
  let i=0;
  setTimeout(()=>{
    const ecrire=setInterval(()=>{
      elTitre.textContent+=titre[i]; if(elRef) elRef.textContent=elTitre.textContent;
      if(++i>=titre.length){ clearInterval(ecrire);
        let j=0; setTimeout(()=>{
          const et=setInterval(()=>{elTag.textContent+=tagline[j];if(++j>=tagline.length)clearInterval(et);},38);
        },400); }
    },90);
  },1800);
};

/* ════════════════════════════════════════════
   TRANSITION RIDEAU
════════════════════════════════════════════ */
function transitionVers(idSuivant) {
  const rideau=document.getElementById('rideau');
  const actuel=document.querySelector('.screen.active');
  rideau.className='rideau fermer';
  setTimeout(()=>{
    if(actuel) actuel.classList.remove('active');
    const suivant=document.getElementById(idSuivant);
    suivant.classList.add('active');
    rideau.className='rideau ouvrir';
    if(idSuivant==='screen-coffre') initParticlesEnv();
    setTimeout(()=>{
      const el=suivant.querySelector('input,button,[tabindex="0"]');
      if(el) el.focus();
    },560);
    setTimeout(()=>rideau.className='rideau',600);
  },500);
}

/* ════════════════════════════════════════════
   LOGIN — comparaison avec tolérance accents
════════════════════════════════════════════ */
function validerLogin() {
  const prenom=document.getElementById('login-prenom').value.trim().toLowerCase();
  const nom=document.getElementById('login-nom').value.trim().toLowerCase();
  const alias=document.getElementById('login-alias').value.trim().toLowerCase();
  const erreur=document.getElementById('login-erreur');

  if(!prenom||!nom||!alias){
    erreur.textContent='Veuillez remplir tous les champs.';
    erreur.setAttribute('role','alert'); return;
  }

  const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();

  const idx=invites.findIndex(inv=>
    inv.prenom.toLowerCase()===prenom &&
    inv.nom.toLowerCase()===nom &&
    (inv.alias.toLowerCase()===alias || norm(inv.alias)===norm(alias))
  );

  if(idx!==-1){
    inviteConnecte=invites[idx]; erreur.textContent='';
    sonClocheDor(); chargerEnigme(inviteConnecte);
    sauvegarderSession('enigme',idx);
    setTimeout(()=>transitionVers('screen-enigme'),600);
  } else {
    erreur.textContent='Identité non reconnue. Vérifiez vos informations.';
    erreur.setAttribute('role','alert');
    ['login-prenom','login-nom','login-alias'].forEach(id=>{
      const el=document.getElementById(id);
      el.classList.add('shake'); el.setAttribute('aria-invalid','true');
      setTimeout(()=>{el.classList.remove('shake');el.removeAttribute('aria-invalid');},400);
    });
  }
}

/* ════════════════════════════════════════════
   ÉNIGME
════════════════════════════════════════════ */
function chargerEnigme(invite) {
  document.getElementById('enigme-salut').textContent=`Bonsoir ${invite.prenom}, alias « ${invite.alias} »`;
  document.getElementById('enigme-texte').textContent=invite.enigme;
  document.getElementById('enigme-input').value='';
  document.getElementById('enigme-erreur').textContent='';
  document.getElementById('indice-texte').textContent='';
  document.getElementById('btn-indice').style.display='inline-block';
  indiceVisible=false;
}

function afficherIndice() {
  if(!inviteConnecte||indiceVisible) return;
  const el=document.getElementById('indice-texte');
  el.textContent='✦ '+inviteConnecte.indice;
  el.style.opacity='0'; el.setAttribute('role','status');
  setTimeout(()=>el.style.opacity='1',10);
  document.getElementById('btn-indice').style.display='none';
  indiceVisible=true;
}

async function verifierEnigme() {
  const saisie=document.getElementById('enigme-input').value.trim().toLowerCase();
  const erreur=document.getElementById('enigme-erreur');
  if(!saisie){erreur.textContent='Entrez votre réponse.';erreur.setAttribute('role','alert');return;}

  const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();
  const h1=await sha256(saisie);
  const h2=await sha256(norm(saisie));
  const correct=(h1===inviteConnecte.reponseHash)||(h2===inviteConnecte.reponseHash);

  if(correct){
    erreur.textContent='';
    sonVictoire();
    sauvegarderSession('coffre',invites.indexOf(inviteConnecte));
    afficherCelebration(()=>{
      document.getElementById('coffre-titre').textContent=`Votre invitation vous attend, ${inviteConnecte.prenom}...`;
      transitionVers('screen-coffre');
      setTimeout(lancerCoffre,800);
    });
  } else {
    erreur.textContent='Ce n\'est pas la bonne réponse. Réfléchissez encore...';
    erreur.setAttribute('role','alert');
    const inp=document.getElementById('enigme-input');
    inp.classList.add('shake'); inp.setAttribute('aria-invalid','true');
    setTimeout(()=>{inp.classList.remove('shake');inp.removeAttribute('aria-invalid');},400);
  }
}

/* ════════════════════════════════════════════
   CÉLÉBRATION
════════════════════════════════════════════ */
function afficherCelebration(callback) {
  const overlay=document.createElement('div');
  overlay.id='celebration-overlay';
  overlay.setAttribute('role','dialog'); overlay.setAttribute('aria-label','Félicitations');
  overlay.innerHTML=`<canvas id="celebr-canvas"></canvas>
    <div class="celebr-content">
      <div class="celebr-ornement" aria-hidden="true">◆ ◆ ◆</div>
      <div class="celebr-titre" id="celebr-titre"></div>
      <div class="celebr-sous">Vous avez percé le mystère</div>
      <div class="celebr-alias">« ${inviteConnecte.alias} »</div>
    </div>`;
  document.body.appendChild(overlay);
  requestAnimationFrame(()=>requestAnimationFrame(()=>overlay.classList.add('visible')));

  const canvas=document.getElementById('celebr-canvas');
  canvas.width=window.innerWidth; canvas.height=window.innerHeight;
  const ctx=canvas.getContext('2d');
  const conf=Array.from({length:120},()=>({
    x:Math.random()*canvas.width,y:-20-Math.random()*100,
    w:4+Math.random()*8,h:2+Math.random()*4,
    vx:(Math.random()-.5)*3,vy:2+Math.random()*4,
    rot:Math.random()*360,vrot:(Math.random()-.5)*8,
    hue:38+Math.random()*20,light:55+Math.random()*30,alpha:.8+Math.random()*.2
  }));
  let af;
  (function anim(){ctx.clearRect(0,0,canvas.width,canvas.height);
    conf.forEach(c=>{c.x+=c.vx;c.y+=c.vy;c.rot+=c.vrot;c.vy+=.05;
      if(c.y>canvas.height+20){c.y=-20;c.x=Math.random()*canvas.width;c.vy=2+Math.random()*4;}
      ctx.save();ctx.translate(c.x,c.y);ctx.rotate(c.rot*Math.PI/180);
      ctx.fillStyle=`hsla(${c.hue},70%,${c.light}%,${c.alpha})`;ctx.fillRect(-c.w/2,-c.h/2,c.w,c.h);ctx.restore();});
    af=requestAnimationFrame(anim);})();

  const texte=inviteConnecte.prenom; const el=document.getElementById('celebr-titre'); let k=0;
  setTimeout(()=>{const t=setInterval(()=>{el.textContent+=texte[k];if(++k>=texte.length)clearInterval(t);},80);},200);
  setTimeout(()=>{cancelAnimationFrame(af);overlay.classList.remove('visible');
    setTimeout(()=>{overlay.remove();if(callback)callback();},600);},2800);
}

/* ════════════════════════════════════════════
   COFFRE
════════════════════════════════════════════ */
function lancerCoffre() {
  const loading=document.getElementById('loading-coffre');
  const sceneInner=document.getElementById('coffre-scene-inner');
  loading.classList.remove('hidden'); sceneInner.classList.add('hidden');
  setTimeout(()=>{
    loading.classList.add('hidden'); sceneInner.classList.remove('hidden');
    const img=document.getElementById('coffre-carte-img');
    const ph=document.getElementById('coffre-carte-placeholder');
    if(inviteConnecte&&inviteConnecte.image){
      img.src=inviteConnecte.image;
      img.onload=()=>{img.style.display='block';ph.style.display='none';};
      img.onerror=()=>{img.style.display='none';ph.style.display='flex';};
    }
    coffreDejaClic=false;
  },2000);
}

/* ════════════════════════════════════════════
   ⑤ MOLETTE — disparaît avec les portes
════════════════════════════════════════════ */
function cliqueMolette() {
  if(coffreDejaClic) return; coffreDejaClic=true;
  const molette  =document.getElementById('molette');
  const coffre   =document.getElementById('coffre');
  const porteG   =document.getElementById('porte-gauche');
  const porteD   =document.getElementById('porte-droite');
  const lumiere  =document.getElementById('coffre-lumiere');
  const carteWrap=document.getElementById('coffre-carte-wrap');
  const hint     =document.getElementById('molette-hint');

  molette.classList.add('molette-tourne');
  molette.setAttribute('aria-disabled','true');
  if(hint) hint.style.opacity='0';

  setTimeout(()=>coffre.classList.add('coffre-vibre'),300);
  setTimeout(()=>coffre.classList.remove('coffre-vibre'),900);
  setTimeout(()=>exploserParticules(),500);

  /* Ouverture portes + disparition simultanée de la molette */
  setTimeout(()=>{
    porteG.classList.add('ouverte');
    porteD.classList.add('ouverte');
    lumiere.classList.add('allumee');
    sonJazzCoffre();

    /* La molette glisse vers le bas et s'efface avec les portes */
    molette.style.transition='opacity 0.6s ease, transform 0.8s cubic-bezier(0.4,0,0.2,1)';
    molette.style.opacity='0';
    molette.style.transform='translate(-50%, 60px) scale(0.6)';
    setTimeout(()=>{ molette.style.display='none'; }, 800);
  },800);

  setTimeout(()=>carteWrap.classList.add('visible'),1400);

  setTimeout(()=>{
    const a=document.getElementById('actions-coffre');
    a.classList.remove('hidden'); a.setAttribute('aria-live','polite');
    if(!document.getElementById('btn-whatsapp')){
      const texteWA=encodeURIComponent(`✨ J'ai déchiffré mon énigme et reçu mon invitation pour Vintage Vibes — Binômage AEFC-INPHB ! Une soirée hors du temps nous attend... 🎷🥂`);
      const btnWA=document.createElement('a');
      btnWA.id='btn-whatsapp'; btnWA.href=`https://wa.me/?text=${texteWA}`;
      btnWA.target='_blank'; btnWA.className='btn-whatsapp';
      btnWA.innerHTML='<span class="wa-icon">◈</span> Partager sur WhatsApp';
      a.querySelector('.actions-btns').appendChild(btnWA);
    }
    /* Injecter le bloc code secret avec gestion affichage unique */
    if(!document.getElementById('code-secret-bloc')) {
      const cle        = 'vv_code_vu_' + getCleCode(inviteConnecte);
      const dejaVu     = localStorage.getItem(cle) === '1';

      const bloc = document.createElement('div');
      bloc.id    = 'code-secret-bloc';

      if (dejaVu) {
        /* Code déjà révélé : message neutre, aucun code visible */
        bloc.innerHTML = `
          <p class="cs-label">Code de cérémonie</p>
          <div class="cs-deja-vu">
            <p class="cs-deja-texte">Votre code vous a déjà été remis.</p>
            <p class="cs-deja-sous">Si vous avez un problème, contactez l'organisateur.</p>
          </div>
        `;
      } else {
        /* Première fois : bouton révéler */
        bloc.innerHTML = `
          <p class="cs-label">Votre code pour la cérémonie de binômage</p>
          <button class="cs-btn" id="cs-btn" onclick="revelerCode()" aria-label="Révéler votre code secret">
            <span class="cs-btn-text">Révéler mon code</span>
            <div class="cs-btn-fill"></div>
          </button>
          <div class="cs-affichage hidden" id="cs-affichage">
            <div class="cs-chars" id="cs-chars"></div>
            <p class="cs-sous">Notez ce code — il vous sera demandé lors du binômage</p>
          </div>
        `;
      }

      const btns = a.querySelector('.actions-btns');
      a.insertBefore(bloc, btns);
    }
  },2200);
}

/* ════════════════════════════════════════════
   CODES SECRETS — correspondance fixe
   ⚠️ Ne pas partager avec les invités
════════════════════════════════════════════ */
const codesSecrets = {
  "Akosso":      "AK47",
  "Beugre":      "BN82",
  "Bouaffou":    "BJ15",
  "Coulibaly-M": "CM63",
  "Coulibaly-F": "CF29",
  "Dakouri":     "DE74",
  "Diallo":      "DB31",
  "Diomande":    "DI58",
  "Djezou":      "DJ06",
  "Doumbia":     "DO93",
  "Egbonon":     "EO42",
  "Elh":         "EH17",
  "Hien":        "HW85",
  "Kadio":       "KA39",
  "Kalouboue":   "KK71",
  "Kambou":      "KS24",
  "Klon":        "KE56",
  "Kodjo":       "KA03",
  "Konan-C":     "KC88",
  "Konan-K":     "KD45",
  "Koné":        "KP62",
  "Konin":       "KP19",
  "Kouadio":     "KJ37",
  "Kouame":      "KE91",
  "Kouassi-X":   "KX54",
  "Kouassi-M":   "KM28",
  "Mafely":      "MA76",
  "Makoua":      "ML04",
  "Mare":        "MO67",
  "Obou":        "OD13",
  "Ouattara":    "OF49",
  "Saganogo":    "SA86",
  "Sam":         "SJ22",
  "Sanguisso":   "SK70",
  "Sanogo":      "SW35",
  "Sekongo":     "SR08",
  "Silué":       "SI64",
  "Soumahouro":  "SA51",
  "Toussea":     "TD97",
  "Yao":         "YN33",
  "Yaonaba":     "YJ80",
  "Yeo":         "YD16",
};

function getCleCode(invite) {
  const n = invite.nom;
  if (n === "Coulibaly") return invite.prenom.includes("Madjalia") ? "Coulibaly-M" : "Coulibaly-F";
  if (n === "Konan")     return invite.prenom.includes("Claude")   ? "Konan-C"     : "Konan-K";
  if (n === "Kouassi")   return invite.prenom.includes("Xavier")   ? "Kouassi-X"   : "Kouassi-M";
  return n;
}

/* ════════════════════════════════════════════
   ANIMATION DÉFILEMENT CODE
   Les caractères défilent rapidement avant
   de se figer sur le vrai code de l'invité
════════════════════════════════════════════ */
const CHARS_POOL = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';

function revelerCode() {
  const btn       = document.getElementById('cs-btn');
  const affichage = document.getElementById('cs-affichage');
  const charsEl   = document.getElementById('cs-chars');
  if (!inviteConnecte) return;

  const vraiCode = codesSecrets[getCleCode(inviteConnecte)] || '????';

  /* Marquer immédiatement comme vu dans localStorage */
  const cle = 'vv_code_vu_' + getCleCode(inviteConnecte);
  try { localStorage.setItem(cle, '1'); } catch(e) {}

  /* Cacher le bouton */
  btn.style.opacity    = '0';
  btn.style.transform  = 'scale(0.9)';
  btn.style.transition = 'all 0.3s ease';
  setTimeout(() => btn.style.display = 'none', 300);

  /* Afficher la zone */
  affichage.classList.remove('hidden');
  charsEl.innerHTML = '';

  /* Créer une case par caractère */
  const cases = vraiCode.split('').map((_, i) => {
    const span = document.createElement('span');
    span.className = 'cs-char';
    span.textContent = CHARS_POOL[Math.floor(Math.random() * CHARS_POOL.length)];
    charsEl.appendChild(span);
    return span;
  });

  /* Défilement rapide puis fixation caractère par caractère */
  const dureeDefilement = 1800; /* ms de défilement total */
  const intervalDefilement = 40;  /* ms entre chaque changement aléatoire */
  let tick = 0;
  const maxTicks = dureeDefilement / intervalDefilement;

  const defileur = setInterval(() => {
    tick++;
    cases.forEach((span, i) => {
      /* Chaque case se fige progressivement, de gauche à droite */
      const seuilFige = (i / cases.length) * 0.7; /* 0 à 0.7 */
      if (tick / maxTicks < seuilFige) {
        /* Déjà figé sur le vrai caractère */
        if (span.textContent !== vraiCode[i]) {
          span.textContent = vraiCode[i];
          span.classList.add('cs-char-fige');
          jouerTicFige();
        }
      } else {
        /* Encore en défilement */
        span.textContent = CHARS_POOL[Math.floor(Math.random() * CHARS_POOL.length)];
      }
    });

    if (tick >= maxTicks) {
      clearInterval(defileur);
      /* Figer tous les caractères sur le vrai code */
      cases.forEach((span, i) => {
        setTimeout(() => {
          span.textContent = vraiCode[i];
          span.classList.add('cs-char-fige');
          jouerTicFige();
          /* Dernier caractère : pulse final */
          if (i === cases.length - 1) {
            setTimeout(() => {
              charsEl.classList.add('cs-chars-final');
              jouerSonCode();
            }, 150);
          }
        }, i * 100);
      });
    }
  }, intervalDefilement);
}

/* Son de "tic" à chaque caractère figé */
function jouerTicFige() {
  const ctx = getAudioCtx(); if (!ctx) return;
  const osc  = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(1200 + Math.random() * 400, ctx.currentTime);
  gain.gain.setValueAtTime(0.08, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
  osc.connect(gain); gain.connect(ctx.destination);
  osc.start(); osc.stop(ctx.currentTime + 0.09);
}

/* Son final quand le code est révélé */
function jouerSonCode() {
  const ctx = getAudioCtx(); if (!ctx) return;
  [880, 1047, 1319].forEach((f, i) => {
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    const t    = ctx.currentTime + i * 0.1;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(f, t);
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.15, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(t); osc.stop(t + 0.45);
  });
}

function exploserParticules() {
  const container=document.getElementById('coffre-sparks'); if(!container) return;
  const colors=['#C9A84C','#e8d5a3','#f0e8c0','#8a6820','#ffffff'];
  for(let i=0;i<50;i++){
    const p=document.createElement('div');
    const ec=Math.random()>.6,size=3+Math.random()*6,color=colors[Math.floor(Math.random()*colors.length)];
    p.style.cssText=`position:absolute;width:${size}px;height:${ec?size*.4:size}px;background:${color};border-radius:${ec?'1px':'50%'};left:50%;top:45%;pointer-events:none;opacity:1`;
    container.appendChild(p);
    const angle=Math.random()*2*Math.PI,dist=70+Math.random()*120,rot=Math.random()*720-360;
    p.animate([{transform:'translate(0,0) rotate(0deg) scale(1)',opacity:1},
               {transform:`translate(${Math.cos(angle)*dist}px,${Math.sin(angle)*dist}px) rotate(${rot}deg) scale(0)`,opacity:0}],
      {duration:700+Math.random()*600,easing:'cubic-bezier(0,0.9,0.57,1)',fill:'forwards'});
    setTimeout(()=>p.remove(),1400);
  }
}

/* ════════════════════════════════════════════
   ④ ACCESSIBILITÉ CLAVIER
════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('login-prenom').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('login-nom').focus();});
  document.getElementById('login-nom').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('login-alias').focus();});
  document.getElementById('login-alias').addEventListener('keydown',e=>{if(e.key==='Enter')validerLogin();});
  document.getElementById('enigme-input').addEventListener('keydown',e=>{if(e.key==='Enter')verifierEnigme();});
  const splashEnter=document.getElementById('splash-enter');
  splashEnter.setAttribute('tabindex','0'); splashEnter.setAttribute('role','button');
  splashEnter.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();transitionVers('screen-login');}});
  const molette=document.getElementById('molette');
  molette.setAttribute('tabindex','0'); molette.setAttribute('role','button');
  molette.setAttribute('aria-label','Tourner la molette pour ouvrir le coffre');
  molette.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();cliqueMolette();}});
});

/* ════════════════════════════════════════════
   ③ TÉLÉCHARGEMENT lazy
════════════════════════════════════════════ */
function telechargerImage() {
  const btnText=document.querySelector('#actions-coffre .btn-text');
  if(btnText) btnText.textContent='Préparation...';
  function doCapture(){
    const cible=document.getElementById('coffre-carte-wrap');
    html2canvas(cible,{backgroundColor:null,scale:3,useCORS:true,allowTaint:true})
      .then(canvas=>{
        const link=document.createElement('a');
        const nom=inviteConnecte?`${inviteConnecte.prenom}-${inviteConnecte.nom}`.replace(/\s+/g,'-').toLowerCase():'invitation';
        link.download=`invitation-vintage-vibes-${nom}.png`;
        link.href=canvas.toDataURL('image/png'); link.click();
        if(btnText) btnText.textContent='Télécharger';
      })
      .catch(()=>{if(btnText) btnText.textContent='Réessayer';});
  }
  if(typeof html2canvas!=='undefined'){ doCapture(); return; }
  const script=document.createElement('script');
  script.src='https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
  script.onload=doCapture;
  script.onerror=()=>{alert('Impossible de charger la librairie.');if(btnText) btnText.textContent='Réessayer';};
  document.head.appendChild(script);
}

function telechargerPDF() {
  const coffre=document.getElementById('coffre');
  html2canvas(coffre,{backgroundColor:'#0a0700',scale:2}).then(canvas=>{
    const {jsPDF}=window.jspdf;
    const pdf=new jsPDF({orientation:'landscape',unit:'mm',format:'a5'});
    const w=pdf.internal.pageSize.getWidth(),h=pdf.internal.pageSize.getHeight();
    const ratio=canvas.width/canvas.height,pdfH=w/ratio,offsetY=(h-pdfH)/2;
    pdf.addImage(canvas.toDataURL('image/png'),'PNG',0,offsetY,w,pdfH);
    const nom=inviteConnecte?`${inviteConnecte.prenom}-${inviteConnecte.nom}`:'invitation';
    pdf.save(`invitation-vintage-vibes-${nom}.pdf`);
  });
}
/* ════════════════════════════════════════════
   ADMIN RESET — réinitialiser le code d'un invité
   Accessible via : ?admin=vv2024 dans l'URL
   Ex: https://monsite.github.io/Vintage-vibes/?admin=vv2024
════════════════════════════════════════════ */

/* Mot de passe admin — change-le avant la soirée */
const ADMIN_PASSWORD = 'vv2024';

function verifierAccesAdmin() {
  const params = new URLSearchParams(window.location.search);
  return params.get('admin') === ADMIN_PASSWORD;
}

/* Lance le panneau admin si l'URL contient ?admin=vv2024 */
document.addEventListener('DOMContentLoaded', () => {
  if (verifierAccesAdmin()) {
    afficherPanneauAdmin();
  }
});

function afficherPanneauAdmin() {
  /* Panneau flottant discret en bas à gauche */
  const panneau = document.createElement('div');
  panneau.id    = 'admin-panneau';
  panneau.style.cssText = `
    position:fixed; bottom:16px; left:16px; z-index:9999;
    background:rgba(8,5,0,0.95); border:1px solid rgba(201,168,76,0.4);
    backdrop-filter:blur(12px); border-radius:4px;
    padding:14px 16px; min-width:260px;
    font-family:'Cinzel',serif; font-size:0.65rem; letter-spacing:2px;
    color:#C9A84C;
  `;

  /* Liste de tous les invités avec bouton reset */
  const lignes = invites.map((inv, idx) => {
    const cle    = 'vv_code_vu_' + getCleCode(inv);
    const dejaVu = localStorage.getItem(cle) === '1';
    return `
      <div style="display:flex;align-items:center;justify-content:space-between;
                  padding:4px 0;border-bottom:1px solid rgba(201,168,76,0.1)">
        <span style="font-size:0.6rem;color:${dejaVu ? '#e8a87c' : 'rgba(201,168,76,0.5)'}">
          ${inv.nom} ${dejaVu ? '✓ vu' : '○'}
        </span>
        ${dejaVu ? `
          <button onclick="resetCode('${getCleCode(inv)}')"
            style="background:transparent;border:1px solid rgba(201,168,76,0.4);
                   color:#C9A84C;font-size:0.55rem;letter-spacing:1px;
                   padding:2px 8px;cursor:pointer;border-radius:2px;">
            Réinitialiser
          </button>` : '<span style="font-size:0.55rem;color:rgba(201,168,76,0.3)">—</span>'}
      </div>
    `;
  }).join('');

  panneau.innerHTML = `
    <div style="text-align:center;margin-bottom:10px;border-bottom:1px solid rgba(201,168,76,0.3);padding-bottom:8px">
      ◆ PANNEAU ADMIN ◆
    </div>
    <div style="max-height:260px;overflow-y:auto;scrollbar-width:none">
      ${lignes}
    </div>
    <button onclick="resetTousLesCodes()"
      style="margin-top:10px;width:100%;background:transparent;
             border:1px solid rgba(201,168,76,0.5);color:#C9A84C;
             font-family:'Cinzel',serif;font-size:0.6rem;letter-spacing:2px;
             padding:6px;cursor:pointer;text-transform:uppercase">
      Tout réinitialiser
    </button>
    <button onclick="document.getElementById('admin-panneau').remove()"
      style="margin-top:6px;width:100%;background:transparent;border:none;
             color:rgba(201,168,76,0.4);font-size:0.55rem;cursor:pointer;
             letter-spacing:1px;padding:4px">
      Fermer
    </button>
  `;

  document.body.appendChild(panneau);
}

/* Réinitialiser le code d'UN invité */
function resetCode(cle) {
  try {
    localStorage.removeItem('vv_code_vu_' + cle);
    /* Rafraîchir le panneau */
    const p = document.getElementById('admin-panneau');
    if (p) { p.remove(); afficherPanneauAdmin(); }
    console.log(`Code réinitialisé : ${cle}`);
  } catch(e) {}
}

/* Réinitialiser TOUS les codes */
function resetTousLesCodes() {
  if (!confirm('Réinitialiser les codes de TOUS les invités ?')) return;
  try {
    invites.forEach(inv => {
      localStorage.removeItem('vv_code_vu_' + getCleCode(inv));
    });
    const p = document.getElementById('admin-panneau');
    if (p) { p.remove(); afficherPanneauAdmin(); }
    console.log('Tous les codes réinitialisés');
  } catch(e) {}
}
