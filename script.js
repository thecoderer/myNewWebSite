const videoGalleryItems = [
  { id: 'tgnwFvO76kA', title: 'Am, Is, Are Konu Anlatımı', text: 'İngilizcede en temel fiillerden biri olan to be yapısını kolay ve eğlenceli bir şekilde öğreniyoruz.', category: 'grammar' },
  { id: 'gnm68unxk7Y', title: '30 Dakikada İngilizcenin Tüm Mantığı Burada!', text: 'Zamanlar, to be, cümle yapısı ve temel mantık kısa ve anlaşılır şekilde anlatılıyor.', category: 'grammar' },
  { id: 'T4EJN4DoS1g', title: 'Simple Past Tense (WH Question / was - were)', text: 'Geçmiş zaman, WH soruları ve was / were kullanımı birlikte açıklanıyor.', category: 'grammar' },
  { id: 'VUYEQ4_Gxec', title: 'Simple Past Tense 3 (WH Questions)', text: 'WH sorularını adım adım öğrenerek geçmiş zamanı daha net kavrayabilirsiniz.', category: 'grammar' },
  { id: '5DmCeacqwUg', title: 'Simple Past Tense 2', text: 'Olumlu cümle yapısı ve düzenli-düzensiz fiiller kolay örneklerle anlatılıyor.', category: 'grammar' },
  { id: 'yPbdRCxoWzw', title: 'Simple Past Tense 1 | Past Simple', text: 'Geçmişte yapılan olayları anlatırken temel yapıyı öğreniyoruz.', category: 'grammar' },
  { id: 'aRRsKCoP0co', title: 'Prefer – Would Prefer – Would Rather', text: 'İngilizcede tercih belirtmek için kullanılan yapılar net örneklerle anlatılıyor.', category: 'grammar' },
  { id: 'DH-L49Fxt9E', title: 'Present Simple vs Present Continuous', text: 'İki zamanı yan yana karşılaştırarak kullanımı kolayca kavrayabilirsiniz.', category: 'grammar' },
  { id: 'AHdG1W_J9v4', title: 'Relative Clauses 3 Alıştırmalar', text: 'Who, which, that, where, when ile ilgili alıştırmalar ve örnekler.', category: 'grammar' },
  { id: 'EcyBp2bcJEs', title: 'Relative Clauses 2', text: 'Tanımlama cümlelerini örneklerle öğreniyoruz.', category: 'grammar' },
  { id: 'gRPr13EvC84', title: 'Relative Clauses 1', text: 'Who, which, whose ile temel tanımlama cümlelerini öğretiyoruz.', category: 'grammar' },
  { id: 'T-tZHON8Khs', title: 'Present Continuous Tense', text: 'Şu anda yapılan eylemleri anlatmak için kullanılan zamanı öğreniyoruz.', category: 'grammar' },
  { id: '6npWxwR8H5Y', title: 'Need ve Need to Farkı', text: 'Need ile need to arasındaki fark net ve pratik şekilde açıklanıyor.', category: 'grammar' },
  { id: 'F7P2VxgHzis', title: 'Want to Kullanımı', text: 'İstek ve plan anlatmak için kullanılan want to yapısını öğreniyoruz.', category: 'grammar' },
  { id: 'TWUKHkUfO9w', title: 'Comparatives & Superlatives', text: 'Karşılaştırma ve üstünlük sıfatlarını örneklerle öğreniyoruz.', category: 'grammar' },
  { id: 'xCEU20u-UwM', title: 'Adjectives – Superlatives', text: 'Sıfatlarla en üstün anlamı ifade etmek için temel kuralları öğreniyoruz.', category: 'grammar' },
  { id: 'Y_DL7Pb1oTU', title: 'Adjectives | Superlatives', text: 'Üstünlük sıfatlarının kullanım mantığını net şekilde öğreniyoruz.', category: 'grammar' },
  { id: '8fIcz3_aL90', title: 'Making Suggestions', text: 'Öneri cümlelerini günlük konuşma diliyle öğretiyoruz.', category: 'grammar' },
  { id: 'pqLYN2NhaUo', title: 'Asking for Permission', text: 'Can I …? yapısıyla izin istemeyi öğreniyoruz.', category: 'grammar' },
  { id: 'lh-EBNc9QUI', title: 'Requests | Can you / Could you?', text: 'Kibar rica ve isteklere uygun yapıları öğreniyoruz.', category: 'grammar' },
  { id: '3asL9fZOrP0', title: 'Imperatives | Emir Cümleleri', text: 'Talimat verme ve emir cümlelerini kolay örneklerle öğreniyoruz.', category: 'grammar' },
  { id: 'j_2lcVjKxzY', title: 'There is / There are – This / That / These / Those', text: 'Varlık bildirme ve işaret zamirleri konusunu kısa ve net şekilde anlatıyoruz.', category: 'grammar' },
  { id: 'OMcmqEhJ_nc', title: 'Have / Has – Have Got / Has Got', text: 'Sahiplik bildirme yapıları arasındaki farkı öğreniyoruz.', category: 'grammar' },
  { id: 'SZK3AhoCetA', title: 'Possessive Adjectives & Pronouns', text: 'İyelik sıfatları ve zamirleri karıştırmadan öğreniyoruz.', category: 'grammar' },
  { id: 'Kr7AYquuXRM', title: 'Possessive Adjectives', text: 'Kimin neye ait olduğunu anlatmak için temel kurallar.', category: 'grammar' },
  { id: 'jogmgL0q018', title: 'Object Pronouns', text: 'Nesne zamirlerini cümlede nasıl kullanacağımızı öğreniyoruz.', category: 'grammar' },
  { id: 'P5XDsuS7MGI', title: 'What time do you …?', text: 'Saat sormak ve cevaplamak için temel yapı ve örnekler.', category: 'grammar' },
  { id: 'N4ME5lqXW5E', title: 'What time is it?', text: 'Saati sormayı ve söylemeyi kolay şekilde öğreniyoruz.', category: 'grammar' },
  { id: 'WmHqGFdVRuQ', title: 'Am / Is / Are Alıştırmaları', text: 'To be yapısını tekrar ederek pekiştirmek için pratik örnekler.', category: 'grammar' },
  { id: 'CUD0NsqmKew', title: 'Present Simple Tense Alıştırmaları', text: 'Geniş zaman konusunu alıştırmalarla güçlendiriyoruz.', category: 'grammar' },
  { id: 'siSzBW_HlAI', title: 'Reading Activity', text: 'Okuma pratiği ve temel metin anlama çalışmaları.', category: 'grammar' },
  { id: 'wwvRH8R-LtM', title: '“-ing” Takısı', text: 'Fiillere -ing ekleme ve kullanım kurallarını öğreniyoruz.', category: 'grammar' },
  { id: 'lg1jvORPwcQ', title: 'Too / Enough', text: 'Yeterli, fazla ve yetersiz anlamlarını sıfatlarla öğreniyoruz.', category: 'grammar' },
  { id: 'JPNF8OunyQA', title: 'To Infinitive / For', text: 'Amaç bildirme için kullanılan yapıları öğreniyoruz.', category: 'grammar' },
  { id: 'nQcN4-wlNkA', title: 'Prepositions 2', text: 'Edatların ikinci bölümünü örneklerle öğreniyoruz.', category: 'grammar' },
  { id: 'Ylc-4B523xc', title: 'Prepositions', text: 'Yer, zaman ve yön bildiren edatları öğreniyoruz.', category: 'grammar' },
  { id: 'K_XIM0QYYW4', title: 'If Clauses', text: 'Koşul cümlelerini temel seviyede öğreniyoruz.', category: 'grammar' },
  { id: 'ZbnJCa1Omts', title: 'Modals | Can – Must – Should – Will', text: 'Modal fiillerin kullanımı ve anlamları net şekilde açıklanıyor.', category: 'grammar' },
  { id: '2j4299FD7ls', title: 'Like – Love – Enjoy – Dislike – Hate', text: 'Beğeni ve duygu ifade eden fiilleri örneklerle öğreniyoruz.', category: 'grammar' },
  { id: 'PzAWuvsZCWw', title: 'Conjunctions | Bağlaçlar', text: 'Cümleleri bağlayan temel bağlaçlara giriş yapıyoruz.', category: 'grammar' },
  { id: 'LHZuXmhMb7o', title: 'WH Questions | 5N1K', text: 'Bilgi sormak için kullanılan soru kelimelerini öğreniyoruz.', category: 'grammar' },
  { id: 'ahif087t9mQ', title: 'WH Questions | 5N1K', text: 'Temel soru kalıplarını kısa örneklerle pekiştiriyoruz.', category: 'grammar' },
  { id: '_nM_s7X1mr8', title: 'Present Simple Tense | Soru Cümleleri', text: 'Do / Does kullanımıyla soru cümleleri kurmayı öğreniyoruz.', category: 'grammar' },
  { id: 'j7cGMxm7pi0', title: 'Adverbs of Frequency', text: 'Sıklık zarflarını ve günlük rutinlerde kullanımını öğreniyoruz.', category: 'grammar' },
  { id: 'lnrhTN0XCFE', title: 'Question Tags | Değil mi?', text: 'Question tags yapısını ve kullanımını kolay örneklerle öğreniyoruz.', category: 'grammar' },
  { id: 'zUcNBTY0XoQ', title: 'To Be | am – is – are', text: 'İngilizcenin temel yapı taşlarından biri olan to be konusunu öğreniyoruz.', category: 'grammar' },
  { id: '05nEkyBlRSs', title: 'Present Simple Tense | Basit Cümleler', text: 'Günlük rutinler ve genel doğrularla geniş zamanı öğreniyoruz.', category: 'grammar' },
  { id: 'oGQ0g1G-nwk', title: 'Present Simple Tense | Basit Cümleler', text: 'Temel cümle yapılarıyla günlük İngilizceye giriş yapıyoruz.', category: 'grammar' },
  { id: 'iHmY8ssY75o', title: 'Present Simple Tense | Basit Cümleler', text: 'İlk ders seviyesinde present simple yapısını öğreniyoruz.', category: 'grammar' },
  { id: 'Z1E_MXqraFw', title: 'Classroom Language | Sınıf İçi İngilizce', text: 'Sınıfta en sık kullanılan İngilizce ifadeleri ve kalıpları öğreniyoruz.', category: 'multilingual' },
  { id: 'wF6pLMPW9fE', title: 'English Songs for Kids | Learn with Music', text: 'Müzik eşliğinde İngilizce kelime ve ritim çalışması.', category: 'songs' },
  { id: '2B6pX4P3N9Q', title: 'English Song Practice | Fun Vocabulary', text: 'Şarkı sözleriyle kelime ve telaffuz çalışması.', category: 'songs' }
];

function getFilteredVideos(filter) {
  if (filter === 'all') return videoGalleryItems;
  return videoGalleryItems.filter((video) => video.category === filter);
}

function renderVideoGallery(filter = 'all') {
  const container = document.getElementById('video-gallery-grid');
  if (!container) return;

  const filteredVideos = getFilteredVideos(filter);
  container.innerHTML = filteredVideos.map((video) => `
    <article class="video-card">
      <iframe src="https://www.youtube.com/embed/${video.id}" title="${video.title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="video-card-content">
        <h3 class="video-card-title">${video.title}</h3>
        <p class="video-card-text">${video.text}</p>
      </div>
    </article>
  `).join('');
}

const floatingWords = ['future', 'focus', 'fluency', 'grammar', 'vocabulary', 'confidence', 'listen', 'speak', 'practice', 'learn', 'create', 'accent', 'lesson', 'global', 'energy', 'studio', 'spark'];

function createFloatingWordsLayer() {
  if (document.getElementById('floating-words-layer')) return;

  const layer = document.createElement('div');
  layer.id = 'floating-words-layer';
  layer.setAttribute('aria-hidden', 'true');

  const wordCount = window.innerWidth < 768 ? 16 : 24;
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < wordCount; index += 1) {
    const word = document.createElement('span');
    word.className = 'floating-word';
    word.textContent = floatingWords[index % floatingWords.length];
    word.style.left = `${Math.random() * 100}%`;
    word.style.top = `${Math.random() * 100}%`;
    word.style.fontSize = `${0.8 + Math.random() * 0.85}rem`;
    word.style.setProperty('--drift-x', `${(Math.random() - 0.5) * 220}px`);
    word.style.setProperty('--drift-y', `${(Math.random() - 0.5) * 180}px`);
    word.style.animationDuration = `${10 + Math.random() * 12}s`;
    word.style.animationDelay = `${-Math.random() * 12}s`;
    fragment.appendChild(word);
  }

  layer.appendChild(fragment);
  document.body.appendChild(layer);
}

const translations = {
  en: {
    nav: { home: 'Home', videos: 'Videos', documents: 'Documents', downloads: 'Downloads', slides: 'Slides', about: 'About', contact: 'Contact' },
    hero: {
      kicker: 'Compact lessons, strong impact',
      title: 'Simple, modern, and easy to explore.',
      subtitle: 'A clean experience for videos, documents, and direct contact, designed to feel clear and energetic.',
      ctaVideos: 'Watch videos',
      ctaDownloads: 'Open documents',
      badge1: '⚡ Fast access',
      badge2: '🎧 Animated sections',
      badge3: '📝 Clear learning flow',
      panelLabel: 'Featured focus',
      panelTitle: 'Everything students need in one place',
      panelText: 'Videos, worksheets, and a direct path to get in touch are all easy to reach from the first scroll.',
      statVideos: 'Videos',
      statVideosValue: 'Live lessons',
      statDownloads: 'Documents',
      statDownloadsValue: 'Ready to print'
    },
    cards: {
      videosTitle: 'Video section',
      videosText: 'Your YouTube lessons are embedded here so visitors can browse your channel without leaving the site.',
      documentsTitle: 'Documents section',
      documentsText: 'Downloadable worksheets and practice materials are grouped here for quick access.',
      doc1: 'Starter worksheet',
      doc2: 'Grammar review',
      doc3: 'Speaking prompts',
      aboutTitle: 'About me',
      aboutText: 'I create energetic English lessons with a friendly teaching style, clear structure, and practical materials that help students feel confident.',
      contactTitle: 'Contact',
      contactText: 'Reach out for lessons, collaborations, or classroom resources.',
      contactEmail: 'Send an email',
      contactYouTube: 'Open YouTube'
    },
    footer: { browse: 'Go to videos' },
    dashboard: {
      kicker: 'Dashboard',
      title: 'Your teaching space, refined.',
      sidebarCardLabel: 'Live focus',
      sidebarCardTitle: 'Grammar, speaking, and classroom English',
      sidebarCardLink: 'Open lessons',
      heroEyebrow: 'Welcome',
      heroTitle: 'Clean, modern, and built for your learners.',
      heroText: 'A polished dashboard-style experience that keeps your lessons, worksheets, and contact details quick to find.',
      heroCtaPrimary: 'Watch videos',
      heroCtaSecondary: 'Open documents',
      statVideosLabel: 'Videos',
      statVideosValue: '40+',
      statVideosText: 'Topic-based lessons ready to explore.',
      statDocumentsLabel: 'Documents',
      statDocumentsValue: '3',
      statDocumentsText: 'Printable materials for class use.',
      cardVideosTitle: 'Video lessons',
      cardVideosText: 'Your YouTube uploads are embedded here in a simple, focused view for visitors.',
      cardDocumentsTitle: 'Documents',
      cardDocumentsText: 'Worksheets and practice sheets are grouped neatly so students can access them quickly.',
      cardAboutTitle: 'About me',
      cardAboutText: 'I create energetic English lessons with a clear structure, practical materials, and a friendly teaching style.',
      cardContactTitle: 'Contact',
      cardContactText: 'Reach out for lessons, content collaboration, or classroom resources.',
      cardContactLink: 'Contact page',
      cardYouTubeLink: 'Open YouTube'
    },
    gallery: {
      kicker: 'Video gallery',
      title: 'Your full lesson library, always in view.',
      subtitle: 'Every lesson is easy to browse and ready for students who want quick, clear practice.',
      panelTitle: 'All lessons from your channel',
      panelText: 'This gallery puts your complete video collection on display so visitors can browse your content immediately.',
      linkLabel: 'Direct link',
      linkTitle: 'Visit your channel',
      linkText: 'Jump to your full YouTube page for playlists, updates, and extras.',
      linkButton: 'Open YouTube',
      tipLabel: 'Tip',
      tipTitle: 'Want a curated experience?',
      tipText: 'If you share your favorite lesson links, I can turn this into a featured playlist section.',
      sectionTitle: 'All lessons',
      sectionSubtitle: 'Browse by category.',
      allVideos: 'All',
      multilingual: 'Multilingual',
      songs: 'Songs',
      grammar: 'Grammar'
    },
    about: {
      kicker: 'About',
      title: 'A friendly and practical ELT approach.',
      sidebarCardLabel: 'Teaching style',
      sidebarCardTitle: 'Clear explanations, practical grammar, and confident speaking.',
      sidebarCardLink: 'See lessons',
      card1Title: 'Who I am',
      card1Text: 'I create energetic English lessons designed to help students understand grammar clearly, speak with confidence, and feel motivated in class.',
      card2Title: 'What I focus on',
      card2Text: 'Simple explanations, practical examples, and lesson flow that makes English feel approachable and useful.',
      card3Title: 'Resources I share',
      card3Text: 'Video lessons, downloadable worksheets, grammar explanations, and speaking practice materials for learners at different levels.',
      card4Title: 'Learning style',
      card4Text: 'Focused, supportive, and directly usable in the classroom or for independent study.',
      contactLink: 'Get in touch'
    },
    contact: {
      kicker: 'Contact',
      title: 'Let’s connect.',
      sidebarCardLabel: 'Reach out',
      sidebarCardTitle: 'For lessons, collaboration, or classroom resources.',
      sidebarCardLink: 'Send an email',
      card1Title: 'Email',
      card1Text: 'hello@brightenglish.com',
      card1Button: 'Send an email',
      card2Title: 'YouTube',
      card2Text: 'Browse the full lesson library and recent uploads.',
      card2Button: 'Open channel',
      card3Title: 'Resources',
      card3Text: 'Need worksheets, classroom materials, or lesson ideas? I’m happy to share them.',
      topButton: 'Open YouTube'
    },
    downloads: {
      kicker: 'Student downloads',
      title: 'Printable worksheets and practice sheets.',
      subtitle: 'Choose a resource below and ship it straight into your lesson plan.',
      card1Label: 'Worksheet',
      card1Title: 'Starter worksheet',
      card1Text: 'Warm-up practice with simple vocabulary and sentence building.',
      card1Button: 'Download',
      card2Label: 'Practice sheet',
      card2Title: 'Grammar review',
      card2Text: 'A focused review for present perfect, comparatives, and question forms.',
      card2Button: 'Download',
      card3Label: 'Homework',
      card3Title: 'Speaking prompts',
      card3Text: 'A set of questions to encourage fluency and confidence in class.',
      card3Button: 'Download'
    },
    slides: {
      kicker: 'Embedded slides',
      title: 'Presentation-ready decks for classroom delivery.',
      subtitle: 'Use these polished slide decks to guide grammar, speaking, and vocabulary lessons with ease.',
      card1Label: 'Deck 1',
      card1Title: 'Grammar foundations',
      card1Text: 'Simple slides for introducing tense patterns, modal verbs, and sentence structure.',
      card2Label: 'Deck 2',
      card2Title: 'Speaking booster',
      card2Text: 'A practical set of prompts and conversation cues to build fluency.',
      card3Label: 'Deck 3',
      card3Title: 'Exam success',
      card3Text: 'A polished review deck for vocabulary, listening, and test-prep strategies.'
    }
  },
  tr: {
    nav: { home: 'Ana Sayfa', videos: 'Videolar', documents: 'Belgeler', downloads: 'Belgeler', slides: 'Slaytlar', about: 'Hakkımda', contact: 'İletişim' },
    hero: {
      kicker: 'Kısa dersler, güçlü etki',
      title: 'Basit, modern ve kolay keşfedilir.',
      subtitle: 'Videolar, belgeler ve doğrudan iletişim için temiz ve enerjik bir deneyim.',
      ctaVideos: 'Videoları izle',
      ctaDownloads: 'Belgeleri aç',
      badge1: '⚡ Hızlı erişim',
      badge2: '🎧 Hareketli bölümler',
      badge3: '📝 Net öğrenme akışı',
      panelLabel: 'Öne çıkan odak',
      panelTitle: 'Öğrencilerin ihtiyacı olan her şey tek yerde',
      panelText: 'Videolar, çalışma kağıtları ve iletişime geçme yolu ilk kaydırmada kolayca erişilebilir.',
      statVideos: 'Videolar',
      statVideosValue: 'Canlı dersler',
      statDownloads: 'Belgeler',
      statDownloadsValue: 'Yazdırmaya hazır'
    },
    cards: {
      videosTitle: 'Video bölümü',
      videosText: 'YouTube derslerin burada gömülü; ziyaretçiler siteyi terk etmeden kanalını gezebilir.',
      documentsTitle: 'Belgeler bölümü',
      documentsText: 'İndirilebilir çalışma kağıtları ve alıştırma materyalleri burada hızlı erişim için düzenlenmiştir.',
      doc1: 'Başlangıç çalışma kağıdı',
      doc2: 'Dil bilgisi tekrar',
      doc3: 'Konuşma soruları',
      aboutTitle: 'Hakkımda',
      aboutText: 'Öğrencilerin kendini güvende ve motive hissedebileceği, dostane bir öğretim tarzıyla canlı İngilizce dersleri hazırlıyorum.',
      contactTitle: 'İletişim',
      contactText: 'Dersler, iş birlikleri veya sınıf materyalleri için ulaşın.',
      contactEmail: 'E-posta gönder',
      contactYouTube: 'YouTube aç'
    },
    footer: { browse: 'Videolara git' },
    dashboard: {
      kicker: 'Kontrol paneli',
      title: 'Ders alanın, artık daha düzenli.',
      sidebarCardLabel: 'Canlı odak',
      sidebarCardTitle: 'Dil bilgisi, konuşma ve sınıf İngilizcesi.',
      sidebarCardLink: 'Dersleri aç',
      heroEyebrow: 'Hoş geldin',
      heroTitle: 'Temiz, modern ve öğrencilerin için hazır.',
      heroText: 'Derslerini, çalışma kağıtlarını ve iletişim bilgilerini hızlıca bulabileceğin, profesyonel bir kontrol paneli deneyimi.',
      heroCtaPrimary: 'Videoları izle',
      heroCtaSecondary: 'Belgeleri aç',
      statVideosLabel: 'Videolar',
      statVideosValue: '40+',
      statVideosText: 'Konu bazlı dersler keşfe hazır.',
      statDocumentsLabel: 'Belgeler',
      statDocumentsValue: '3',
      statDocumentsText: 'Sınıf kullanımı için yazdırılabilir materyaller.',
      cardVideosTitle: 'Video dersleri',
      cardVideosText: 'YouTube yüklemelerin burada, sade ve odaklı bir düzenle yer alıyor.',
      cardDocumentsTitle: 'Belgeler',
      cardDocumentsText: 'Çalışma kağıtları ve pratik sayfaları hızlı erişim için düzenlenmiştir.',
      cardAboutTitle: 'Hakkımda',
      cardAboutText: 'Öğrencilerin dil bilgisi kavramasını, özgüvenle konuşmasını ve derse motive olmasını sağlayan enerjik dersler hazırlıyorum.',
      cardContactTitle: 'İletişim',
      cardContactText: 'Dersler, içerik iş birlikleri ya da sınıf materyalleri için ulaşın.',
      cardContactLink: 'İletişim sayfası',
      cardYouTubeLink: 'YouTube aç'
    },
    gallery: {
      kicker: 'Video galerisi',
      title: 'Tüm ders kütüphanen, her zaman göz önünde.',
      subtitle: 'Her ders kolayca gezilebilir ve hızlı pratik isteyen öğrenciler için hazırdır.',
      panelTitle: 'Kanalındaki tüm dersler',
      panelText: 'Bu galeri videolarını tek bir yerde göstererek ziyaretçilerin içeriğe hızlıca erişmesini sağlar.',
      linkLabel: 'Doğrudan bağlantı',
      linkTitle: 'Kanalını ziyaret et',
      linkText: 'Tam YouTube sayfanıza gidin; oynatma listeleri, güncellemeler ve daha fazlası burada.',
      linkButton: 'YouTube aç',
      tipLabel: 'İpucu',
      tipTitle: 'Özelleştirilmiş bir deneyim mi istiyorsun?',
      tipText: 'Favori ders linklerini paylaşırsan bunu öne çıkan bir oynatma listesi bölümüne dönüştürebilirim.',
      sectionTitle: 'Tüm dersler',
      sectionSubtitle: 'Kategorilere göre gez.',
      allVideos: 'Tümü',
      multilingual: 'Çoklu Yabancı Dil',
      songs: 'Şarkılar',
      grammar: 'Dil Bilgisi'
    },
    about: {
      kicker: 'Hakkımda',
      title: 'Dostane ve pratik bir ELT yaklaşımı.',
      sidebarCardLabel: 'Öğretim tarzım',
      sidebarCardTitle: 'Net açıklamalar, pratik dil bilgisi ve özgüvenli konuşma.',
      sidebarCardLink: 'Dersleri gör',
      card1Title: 'Ben kimim',
      card1Text: 'Öğrencilerin dil bilgisi kavramasını net şekilde anlamasını, özgüvenle konuşmasını ve derste motive olmasını sağlayan enerjik İngilizce dersleri hazırlıyorum.',
      card2Title: 'Neye odaklanıyorum',
      card2Text: 'Basit açıklamalar, pratik örnekler ve İngilizceyi hem erişilebilir hem de işe yarar hale getiren bir ders akışı.',
      card3Title: 'Paylaştığım kaynaklar',
      card3Text: 'Video dersleri, indirilebilir çalışma kağıtları, dil bilgisi açıklamaları ve farklı seviyelerde öğrenenler için konuşma pratiği materyalleri.',
      card4Title: 'Öğrenme tarzım',
      card4Text: 'Odaklı, destekleyici ve sınıf içinde ya da bireysel çalışma için doğrudan kullanılabilir.',
      contactLink: 'İletişime geç'
    },
    contact: {
      kicker: 'İletişim',
      title: 'İletişime geçelim.',
      sidebarCardLabel: 'Ulaşın',
      sidebarCardTitle: 'Dersler, iş birlikleri ya da sınıf materyalleri için.',
      sidebarCardLink: 'E-posta gönder',
      card1Title: 'E-posta',
      card1Text: 'hello@brightenglish.com',
      card1Button: 'E-posta gönder',
      card2Title: 'YouTube',
      card2Text: 'Tam ders kütüphanesini ve son yüklemeleri keşfet.',
      card2Button: 'Kanalı aç',
      card3Title: 'Kaynaklar',
      card3Text: 'Çalışma kağıtları, sınıf materyalleri ya da ders fikirleri mi lazım? Memnuniyetle paylaşırım.',
      topButton: 'YouTube aç'
    },
    downloads: {
      kicker: 'Öğrenci indirmeleri',
      title: 'Yazdırılabilir çalışma kağıtları ve egzersizler.',
      subtitle: 'Aşağıdaki kaynaklardan birini seçip ders planına ekleyebilirsin.',
      card1Label: 'Çalışma kağıdı',
      card1Title: 'Başlangıç çalışma kağıdı',
      card1Text: 'Basit kelime bilgisi ve cümle kurma ile ısınma çalışması.',
      card1Button: 'İndir',
      card2Label: 'Pratik sayfası',
      card2Title: 'Dil bilgisi tekrar',
      card2Text: 'Present perfect, karşılaştırmalar ve soru kalıpları için odaklanmış tekrar.',
      card2Button: 'İndir',
      card3Label: 'Ödev',
      card3Title: 'Konuşma soruları',
      card3Text: 'Sınıfta akıcılığı ve özgüveni artırmaya yönelik soru seti.',
      card3Button: 'İndir'
    },
    slides: {
      kicker: 'Gömülü slaytlar',
      title: 'Sınıf sunumlarına uygun slayt setleri.',
      subtitle: 'Bu profesyonel slaytları dil bilgisi, konuşma ve kelime öğretiminde kullanabilirsin.',
      card1Label: 'Slayt 1',
      card1Title: 'Dil bilgisi temelleri',
      card1Text: 'Zaman kalıpları, kipler ve cümle yapısını tanıtmak için basit slaytlar.',
      card2Label: 'Slayt 2',
      card2Title: 'Konuşma arttırıcı',
      card2Text: 'Akıcılığı artırmak için pratik sorular ve konuşma ipuçları.',
      card3Label: 'Slayt 3',
      card3Title: 'Sınav başarısı',
      card3Text: 'Kelime bilgisi, dinleme ve sınav hazırlığı için profesyonel tekrar seti.'
    }
  }
};

function getValueByPath(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

function applyLanguage(lang) {
  const selectedLang = translations[lang] ? lang : 'en';
  const bundle = translations[selectedLang];
  document.documentElement.lang = selectedLang;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getValueByPath(bundle, element.getAttribute('data-i18n'));
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll('#lang-toggle').forEach((toggle) => {
    toggle.textContent = selectedLang === 'en' ? 'TR' : 'EN';
    toggle.setAttribute('aria-label', selectedLang === 'en' ? 'Switch to Turkish' : 'Switch to English');
  });

  localStorage.setItem('lang', selectedLang);
}

document.addEventListener('DOMContentLoaded', () => {
  createFloatingWordsLayer();

  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      menu.classList.toggle('flex');
    });
  }

  renderVideoGallery();

  document.querySelectorAll('.gallery-filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.gallery-filter-btn').forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      renderVideoGallery(button.dataset.filter);
    });
  });

  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').replace(/\/$/, '') || 'index.html';
  document.querySelectorAll('[data-nav-link]').forEach((link) => {
    const href = link.getAttribute('href') || '';
    const normalizedHref = href.split('#')[0];
    const isActive = normalizedHref === currentPage || (currentPage === 'index.html' && (normalizedHref === '' || normalizedHref === 'index.html'));

    link.classList.toggle('active', isActive);
    link.classList.toggle('text-cyan-400', isActive);
  });

  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const storedLang = localStorage.getItem('lang') || 'en';
  applyLanguage(storedLang);

  document.querySelectorAll('#lang-toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const nextLang = document.documentElement.lang === 'en' ? 'tr' : 'en';
      applyLanguage(nextLang);
    });
  });
});
