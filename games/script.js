const themes = {
  'SCHOOL LIFE': {
    title: 'SCHOOL LIFE',
    description: 'Okul yaşamı teması için İngilizce ve Türkçe kelime eşleştirmeleri yap.',
    pairs: [
      { id: 1, en: 'headmistress', tr: 'Okul Müdiresi' },
      { id: 2, en: 'headmaster', tr: 'Okul Müdürü' },
      { id: 3, en: 'librarian', tr: 'Kütüphaneci' },
      { id: 4, en: 'caretaker', tr: 'Hademe / Okul Görevlisi' },
      { id: 5, en: 'cleaner', tr: 'Temizlik Görevlisi' },
      { id: 6, en: 'school nurse', tr: 'Okul Hemşiresi' },
      { id: 7, en: 'counsellor', tr: 'Rehber Öğretmen / Psikolojik Danışman' },
      { id: 8, en: 'classmate', tr: 'Sınıf Arkadaşı' },
      { id: 9, en: 'obey', tr: 'Uymak / İtaat Etmek' },
      { id: 10, en: 'rubbish bin', tr: 'Çöp Kutusu' },
      { id: 11, en: 'timetable', tr: 'Ders Programı' },
      { id: 12, en: 'raise hand', tr: 'Parmak Kaldırmak / El Kaldırmak' },
      { id: 13, en: 'chew gum', tr: 'Sakız Çiğnemek' },
      { id: 14, en: 'bully', tr: 'Zorbalık Yapmak / Akran Zorbalığı Yapmak' },
      { id: 15, en: 'stand in line', tr: 'Sıraya Girmek / Kuyrukta Beklemek' },
      { id: 16, en: 'corridor', tr: 'Koridor' },
      { id: 17, en: 'punctual', tr: 'Dakik / Zamanında Gelen' },
      { id: 18, en: 'rehearsal', tr: 'Prova' },
      { id: 19, en: 'national sovereignty and children’s day', tr: 'Ulusal Egemenlik ve Çocuk Bayramı' },
      { id: 20, en: 'commemoration of atatürk, youth and sports day', tr: 'Atatürk’ü Anma, Gençlik ve Spor Bayramı' },
      { id: 21, en: 'republic day', tr: 'Cumhuriyet Bayramı' },
      { id: 22, en: 'victory day', tr: 'Zafer Bayramı' },
      { id: 23, en: 'democracy and national unity day', tr: 'Demokrasi ve Milli Birlik Günü' },
      { id: 24, en: 'have a blast', tr: 'Çok İyi Vakit Geçirmek / Eğlencenin Doruğuna Ulaşmak' },
      { id: 25, en: 'put on a show', tr: 'Gösteri Düzenlemek / Sahneye Koymak' },
      { id: 26, en: 'be in charge of', tr: 'Sorumlu Olmak / Yönetmek' },
      { id: 27, en: 'take care of', tr: 'Bakımını Yapmak / İlgilenmek / Göz Kulak Olmak' },
      { id: 28, en: 'come up with', tr: 'Fikir Üretmek / Ortaya Fikir Atmak' },
      { id: 29, en: 'can’t wait', tr: 'Dört Gözle Beklemek / Sabırsızlanmak' }
    ]
  },
  'CLASSROOM LIFE': {
    title: 'CLASSROOM LIFE',
    description: 'Sınıf yaşamı teması için İngilizce ve Türkçe kelime eşleştirmeleri yap.',
    pairs: [
      { id: 101, en: 'take one\'s seat', tr: 'Yerine oturmak / Sırasına geçmek' },
      { id: 102, en: 'bring materials', tr: 'Malzemelerini getirmek' },
      { id: 103, en: 'discuss in pairs', tr: 'İkili gruplar halinde tartışmak / Eşleşerek konuşmak' },
      { id: 104, en: 'complete worksheet', tr: 'Çalışma kağıdını tamamlamak' },
      { id: 105, en: 'present work', tr: 'Çalışmasını sunmak / Sunum yapmak' },
      { id: 106, en: 'take notes', tr: 'Not almak' },
      { id: 107, en: 'keep tidy', tr: 'Düzenli/Tertipli tutmak' },
      { id: 108, en: 'respect', tr: 'Saygı duymak' },
      { id: 109, en: 'copy from the board', tr: 'Tahtadan deftere geçirmek / Tahtayı yazmak' },
      { id: 110, en: 'monitor', tr: 'Sınıf başkanı / Sınıf görevlisi' },
      { id: 111, en: 'information technology', tr: 'Bilişim Teknolojileri / Robotik Kodlama' },
      { id: 112, en: 'religion and morals', tr: 'Din Kültürü ve Ahlak Bilgisi' },
      { id: 113, en: 'social studies', tr: 'Sosyal Bilgiler' },
      { id: 114, en: 'visual arts', tr: 'Görsel Sanatlar' },
      { id: 115, en: 'tales and legends', tr: 'Masallar ve Efsaneler' },
      { id: 116, en: 'siesta', tr: 'Siesta / Öğle uykusu' },
      { id: 117, en: 'take a nap', tr: 'Şekerleme yapmak / Kısa bir süre uyumak' },
      { id: 118, en: 'homely atmosphere', tr: 'Ev gibi sıcak/rahat bir ortam' },
      { id: 119, en: 'be stuck on', tr: 'Bir şeyde takılıp kalmak / Çözememek' },
      { id: 120, en: 'don’t get it', tr: 'Anlamamak / Kavrayamamak' },
      { id: 121, en: 'can i be excused?', tr: 'İzin isteyebilir miyim? / Sınıftan çıkabilir miyim?' },
      { id: 122, en: 'take a break', tr: 'Ara vermek / Mola vermek' },
      { id: 123, en: 'do one\'s best', tr: 'Elinden gelenin en iyisini yapmak' },
      { id: 124, en: 'that’s fantastic!', tr: 'Bu harika! / Muhteşem!' },
      { id: 125, en: 'one hundred', tr: '100' },
      { id: 126, en: 'one hundred and fifty', tr: '150' },
      { id: 127, en: 'two hundred', tr: '200' },
      { id: 128, en: 'two hundred and fifty', tr: '250' },
      { id: 129, en: 'three hundred', tr: '300' },
      { id: 130, en: 'three hundred and fifty', tr: '350' },
      { id: 131, en: 'four hundred', tr: '400' },
      { id: 132, en: 'four hundred and fifty', tr: '450' },
      { id: 133, en: 'five hundred', tr: '500' },
      { id: 134, en: 'first', tr: 'Birinci' },
      { id: 135, en: 'second', tr: 'İkinci' },
      { id: 136, en: 'third', tr: 'Üçüncü' },
      { id: 137, en: 'fourth', tr: 'Dördüncü' },
      { id: 138, en: 'fifth', tr: 'Beşinci' },
      { id: 139, en: 'tenth', tr: 'Onuncu' },
      { id: 140, en: 'twentieth', tr: 'Yirminci' },
      { id: 141, en: 'thirtieth', tr: 'Otuzuncu' },
      { id: 142, en: 'fortieth', tr: 'Kırkıncı' },
      { id: 143, en: 'fiftieth', tr: 'Ellinci' }
    ]
  },
  'PERSONAL LIFE': {
    title: 'PERSONAL LIFE',
    description: 'Kişisel yaşam teması için İngilizce ve Türkçe kelime eşleştirmeleri yap.',
    pairs: [
      { id: 201, en: 'hand', tr: 'El' },
      { id: 202, en: 'feet', tr: 'Ayaklar' },
      { id: 203, en: 'arm', tr: 'Kol' },
      { id: 204, en: 'neck', tr: 'Boyun' },
      { id: 205, en: 'toe', tr: 'Ayak parmağı' },
      { id: 206, en: 'eye', tr: 'Göz' },
      { id: 207, en: 'chin', tr: 'Çene' },
      { id: 208, en: 'ear', tr: 'Kulak' },
      { id: 209, en: 'heart', tr: 'Kalp' },
      { id: 210, en: 'nose', tr: 'Burun' },
      { id: 211, en: 'teeth', tr: 'Dişler' },
      { id: 212, en: 'finger', tr: 'El parmağı' },
      { id: 213, en: 'face', tr: 'Yüz' },
      { id: 214, en: 'back', tr: 'Sırt / Arka' },
      { id: 215, en: 'bone', tr: 'Kemik' },
      { id: 216, en: 'head', tr: 'Baş / Kafa' },
      { id: 217, en: 'skin', tr: 'Cilt / Deri' },
      { id: 218, en: 'tongue', tr: 'Dil' },
      { id: 219, en: 'brain', tr: 'Beyin' },
      { id: 220, en: 'eyebrow', tr: 'Kaş' },
      { id: 221, en: 'eyelash', tr: 'Kirpik' },
      { id: 222, en: 'moustache', tr: 'Bıyık' },
      { id: 223, en: 'beard', tr: 'Sakal' },
      { id: 224, en: 'blonde', tr: 'Sarışın / Sarı saç' },
      { id: 225, en: 'brunette', tr: 'Esmer' },
      { id: 226, en: 'dark hair', tr: 'Koyu renk / Siyah-kahve saç' },
      { id: 227, en: 'fair hair', tr: 'Açık renk / Kumral saç' },
      { id: 228, en: 'curly', tr: 'Kıvırcık' },
      { id: 229, en: 'straight', tr: 'Düz' },
      { id: 230, en: 'wavy', tr: 'Dalgalı' },
      { id: 231, en: 'short', tr: 'Kısa / Kısa boylu' },
      { id: 232, en: 'tall', tr: 'Uzun / Uzun boylu' },
      { id: 233, en: 'medium height', tr: 'Orta boylu' },
      { id: 234, en: 'slim', tr: 'Zayıf / İnce' },
      { id: 235, en: 'chubby', tr: 'Tombul / Balık etli' },
      { id: 236, en: 'plump', tr: 'Balık etli / Tombulca' },
      { id: 237, en: 'strong', tr: 'Güçlü' },
      { id: 238, en: 'weak', tr: 'Güçsüz / Zayıf' },
      { id: 239, en: 'good-looking', tr: 'Yakışıklı / Göze hoş gelen' },
      { id: 240, en: 'attractive', tr: 'Çekici / Alımlı' },
      { id: 241, en: 'ugly', tr: 'Çirkin' },
      { id: 242, en: 'old', tr: 'Yaşlı / Eski' },
      { id: 243, en: 'young', tr: 'Genç' },
      { id: 244, en: 'jacket', tr: 'Ceket' },
      { id: 245, en: 'socks', tr: 'Çorap' },
      { id: 246, en: 'blouse', tr: 'Bluz' },
      { id: 247, en: 'dress', tr: 'Elbise' },
      { id: 248, en: 'coat', tr: 'Kaban / Palto' },
      { id: 249, en: 'raincoat', tr: 'Yağmurluk' },
      { id: 250, en: 'headscarf', tr: 'Başörtüsü' },
      { id: 251, en: 'belt', tr: 'Kemer' },
      { id: 252, en: 'hoodie', tr: 'Kapüşonlu üst' },
      { id: 253, en: 'trousers', tr: 'Pantolon' },
      { id: 254, en: 'leggings', tr: 'Tayt' },
      { id: 255, en: 'umbrella', tr: 'Şemsiye' },
      { id: 256, en: 'trainers', tr: 'Spor ayakkabı' },
      { id: 257, en: 'flip-flops', tr: 'Parmak arası terlik' },
      { id: 258, en: 'boots', tr: 'Bot / Çizme' },
      { id: 259, en: 'shirt', tr: 'Gömlek' },
      { id: 260, en: 't-shirt', tr: 'Tişört' },
      { id: 261, en: 'shorts', tr: 'Şort' },
      { id: 262, en: 'skirt', tr: 'Etek' },
      { id: 263, en: 'suit', tr: 'Takım elbise' },
      { id: 264, en: 'tie', tr: 'Kravat' },
      { id: 265, en: 'jeans', tr: 'Kot pantolon' },
      { id: 266, en: 'jumper', tr: 'Kazak' },
      { id: 267, en: 'gloves', tr: 'Eldiven' },
      { id: 268, en: 'scarf', tr: 'Atkı' },
      { id: 269, en: 'uniform', tr: 'Üniforma / Okul forması' },
      { id: 270, en: 'earrings', tr: 'Küpe' },
      { id: 271, en: 'ring', tr: 'Yüzük' },
      { id: 272, en: 'necklace', tr: 'Kolye' },
      { id: 273, en: 'handbag', tr: 'El çantası / Çanta' },
      { id: 274, en: 'sunglasses', tr: 'Güneş gözlüğü' },
      { id: 275, en: 'brave', tr: 'Cesur' },
      { id: 276, en: 'cool', tr: 'Havalı' },
      { id: 277, en: 'helpful', tr: 'Yardımsever' },
      { id: 278, en: 'polite', tr: 'Kibar / Nazik' },
      { id: 279, en: 'clever', tr: 'Zeki / Akıllı' },
      { id: 280, en: 'kind', tr: 'Nazik / İnce ruhlu' },
      { id: 281, en: 'friendly', tr: 'Arkadaş canlısı / Cana yakın' },
      { id: 282, en: 'tidy', tr: 'Düzenli / Tertipli' },
      { id: 283, en: 'shy', tr: 'Utangaç' },
      { id: 284, en: 'lazy', tr: 'Tembel' },
      { id: 285, en: 'funny', tr: 'Komik / Eğlenceli' },
      { id: 286, en: 'happy', tr: 'Mutlu' },
      { id: 287, en: 'careful', tr: 'Dikkatli' },
      { id: 288, en: 'creative', tr: 'Yaratıcı' },
      { id: 289, en: 'hardworking', tr: 'Çalışkan' },
      { id: 290, en: 'sweet', tr: 'Tatlı / Şirin' },
      { id: 291, en: 'serious', tr: 'Ciddi' },
      { id: 292, en: 'quiet', tr: 'Sakin / Sessiz' },
      { id: 293, en: 'nervous', tr: 'Gergin / Heyecanlı' },
      { id: 294, en: 'noisy', tr: 'Gürültücü' },
      { id: 295, en: 'rude', tr: 'Kaba' },
      { id: 296, en: 'worried', tr: 'Endişeli' },
      { id: 297, en: 'naughty', tr: 'Yaramaz' },
      { id: 298, en: 'hold on', tr: 'Bekle! / Dur bakayım!' },
      { id: 299, en: 'i’ll be back in a jiffy', tr: 'Göz açıp kapayıncaya kadar döneceğim! / Hemen dönerim!' },
      { id: 300, en: 'it’s not fair', tr: 'Bu hiç adil değil!' },
      { id: 301, en: 'i’m not sure', tr: 'Emin değilim!' },
      { id: 302, en: 'that’s cool', tr: 'Bu çok havalı! / Harika!' },
      { id: 303, en: 'you are kidding, aren’t you?', tr: 'Şaka yapıyorsun, değil mi?' },
      { id: 304, en: 'mystery solved', tr: 'Gizem çözüldü!' },
      { id: 305, en: 'i have no idea', tr: 'Hiçbir fikrim yok.' },
      { id: 306, en: 'try it on', tr: 'Üzerinde denemek / Kıyafeti giyip bakmak' }
    ]
  },
  'FAMILY LIFE': {
    title: 'FAMILY LIFE',
    description: 'Aile yaşamı teması için İngilizce ve Türkçe kelime eşleştirmeleri yap.',
    pairs: [
      { id: 401, en: 'family members', tr: 'Aile üyeleri' },
      { id: 402, en: 'types of houses', tr: 'Ev türleri' },
      { id: 403, en: 'jobs', tr: 'Meslekler' },
      { id: 404, en: 'workplaces', tr: 'Çalışma yerleri' },
      { id: 405, en: 'job routines', tr: 'İş rutinleri' },
      { id: 406, en: 'businesswoman', tr: 'İş kadını' },
      { id: 407, en: 'chemist', tr: 'Eczacı / Kimyager' },
      { id: 408, en: 'musician', tr: 'Müzisyen' },
      { id: 409, en: 'pilot', tr: 'Pilot' },
      { id: 410, en: 'driver', tr: 'Şoför' },
      { id: 411, en: 'farmer', tr: 'Çiftçi' },
      { id: 412, en: 'explorer', tr: 'Kaşif' },
      { id: 413, en: 'artist', tr: 'Sanatçı' },
      { id: 414, en: 'engineer', tr: 'Mühendis' },
      { id: 415, en: 'bus driver', tr: 'Otobüs şoförü' },
      { id: 416, en: 'mechanic', tr: 'Tamirci' },
      { id: 417, en: 'water slide tester', tr: 'Su kaydırağı testçisi' },
      { id: 418, en: 'line stander', tr: 'Sırada bekleyen kişi' },
      { id: 419, en: 'ice sculptor', tr: 'Buz heykeltıraşı' },
      { id: 420, en: 'professional sleeper', tr: 'Profesyonel uyuyan' },
      { id: 421, en: 'private island caretaker', tr: 'Özel ada bakıcısı' },
      { id: 422, en: 'flat', tr: 'Daire' },
      { id: 423, en: 'apartment house', tr: 'Apartman' },
      { id: 424, en: 'skyscraper', tr: 'Gökdelen' },
      { id: 425, en: 'bungalow', tr: 'Bungalov' },
      { id: 426, en: 'cabin', tr: 'Kulübe' },
      { id: 427, en: 'tiny house', tr: 'Küçük ev' },
      { id: 428, en: 'caravan', tr: 'Karavan' },
      { id: 429, en: 'surprise party', tr: 'Sürpriz parti' },
      { id: 430, en: 'new job', tr: 'Yeni iş' },
      { id: 431, en: 'manager', tr: 'Müdür' },
      { id: 432, en: 'factory', tr: 'Fabrika' },
      { id: 433, en: 'decorate the house', tr: 'Evi süslemek' },
      { id: 434, en: 'do shopping', tr: 'Alışveriş yapmak' },
      { id: 435, en: 'make a cake', tr: 'Pasta yapmak' },
      { id: 436, en: 'send invitation cards', tr: 'Davetiyeleri göndermek' },
      { id: 437, en: 'organise the music', tr: 'Müziği düzenlemek' }
    ]
  },
  'NEIGHBOURHOOD & CITY': {
    title: 'LIFE IN THE NEIGHBOURHOOD & CITY',
    description: 'Mahalle ve şehir yaşamı teması için İngilizce ve Türkçe kelime eşleştirmeleri yap.',
    pairs: [
      { id: 501, en: 'life in the city', tr: 'Şehirde yaşam' },
      { id: 502, en: 'attractions in the city', tr: 'Şehirdeki cazibe merkezleri' },
      { id: 503, en: 'services in the neighbourhood', tr: 'Mahalledeki hizmetler' },
      { id: 504, en: 'recreational places', tr: 'Eğlence yerleri' },
      { id: 505, en: 'transportation tools', tr: 'Ulaşım araçları' },
      { id: 506, en: 'airport', tr: 'Havalimanı' },
      { id: 507, en: 'topkapı palace', tr: 'Topkapı Sarayı' },
      { id: 508, en: 'miniatürk', tr: 'Miniatürk' },
      { id: 509, en: 'galata tower', tr: 'Galata Kulesi' },
      { id: 510, en: 'bookshop', tr: 'Kitapçı' },
      { id: 511, en: 'café', tr: 'Kafe' },
      { id: 512, en: 'cinema', tr: 'Sinema' },
      { id: 513, en: 'motorbikes', tr: 'Motosikletler' },
      { id: 514, en: 'aeroplanes', tr: 'Uçaklar' },
      { id: 515, en: 'lorries', tr: 'Kamyonlar' },
      { id: 516, en: 'bus', tr: 'Otobüs' },
      { id: 517, en: 'underground', tr: 'Metro' },
      { id: 518, en: 'chemists', tr: 'Eczaneler' },
      { id: 519, en: 'petrol station', tr: 'Benzin istasyonu' },
      { id: 520, en: 'tourist information desk', tr: 'Turist bilgi masası' },
      { id: 521, en: 'coco taxi', tr: 'Coco taksi' },
      { id: 522, en: 'trishaws', tr: 'Tricaklar' },
      { id: 523, en: 'schwebebahn', tr: 'Schwebebahn' },
      { id: 524, en: 'amfibus', tr: 'Amfibus' },
      { id: 525, en: 'bamboo train', tr: 'Bambu tren' },
      { id: 526, en: 'museum', tr: 'Müze' },
      { id: 527, en: 'playground', tr: 'Oyun alanı' },
      { id: 528, en: 'bakery', tr: 'Fırın' },
      { id: 529, en: 'sports stadium', tr: 'Stadyum' },
      { id: 530, en: 'park', tr: 'Park' },
      { id: 531, en: 'subway', tr: 'Metrobüs' },
      { id: 532, en: 'detective', tr: 'Dedektif' },
      { id: 533, en: 'door', tr: 'Kapı' },
      { id: 534, en: 'why', tr: 'Neden' },
      { id: 535, en: 'when', tr: 'Ne zaman' },
      { id: 536, en: 'where', tr: 'Nerede' },
      { id: 537, en: 'who', tr: 'Kim' },
      { id: 538, en: 'whose', tr: 'Kimin' },
      { id: 539, en: 'which', tr: 'Hangi' }
    ]
  },
  'LIFE IN THE WORLD': {
    title: 'LIFE IN THE WORLD',
    description: 'Dünya yaşamı teması için İngilizce ve Türkçe kelime eşleştirmeleri yap.',
    pairs: [
      { id: 601, en: 'food festivals', tr: 'Yiyecek festivalleri' },
      { id: 602, en: 'nationalities', tr: 'Milliyetler' },
      { id: 603, en: 'countries', tr: 'Ülkeler' },
      { id: 604, en: 'different cuisines from the world', tr: 'Dünyanın farklı mutfakları' },
      { id: 605, en: 'the national cherry festival', tr: 'Ulusal Kiraz Festivali' },
      { id: 606, en: 'the dumpling festival', tr: 'Mantı Festivali' },
      { id: 607, en: 'orange blossom festival', tr: 'Portakal Çiçeği Festivali' },
      { id: 608, en: 'the ikura festival', tr: 'İkura Festivali' },
      { id: 609, en: 'chocolate festival', tr: 'Çikolata Festivali' },
      { id: 610, en: 'pizzafest', tr: 'Pizzafest' },
      { id: 611, en: 'a steak', tr: 'Bir biftek' },
      { id: 612, en: 'mushrooms', tr: 'Mantarlar' },
      { id: 613, en: 'onion', tr: 'Soğan' },
      { id: 614, en: 'soda water', tr: 'Sodalı su' },
      { id: 615, en: 'lemon', tr: 'Limon' },
      { id: 616, en: 'omelette', tr: 'Omlet' },
      { id: 617, en: 'prepare', tr: 'Hazırlamak' },
      { id: 618, en: 'boil', tr: 'Kaynatmak' },
      { id: 619, en: 'cook', tr: 'Pişirmek' },
      { id: 620, en: 'put', tr: 'Koymak' },
      { id: 621, en: 'cut off', tr: 'Kesmek' },
      { id: 622, en: 'mix', tr: 'Karıştırmak' },
      { id: 623, en: 'marinade', tr: 'Marine etmek' },
      { id: 624, en: 'bake', tr: 'Fırında pişirmek' },
      { id: 625, en: 'serve', tr: 'Servis etmek' },
      { id: 626, en: 'china', tr: 'Çin' },
      { id: 627, en: 'ireland', tr: 'İrlanda' },
      { id: 628, en: 'asia', tr: 'Asya' },
      { id: 629, en: 'europe', tr: 'Avrupa' },
      { id: 630, en: 'france', tr: 'Fransa' },
      { id: 631, en: 'argentina', tr: 'Arjantin' },
      { id: 632, en: 'italy', tr: 'İtalya' },
      { id: 633, en: 'brazil', tr: 'Brezilya' },
      { id: 634, en: 'japan', tr: 'Japonya' },
      { id: 635, en: 'türkiye', tr: 'Türkiye' },
      { id: 636, en: 'south america', tr: 'Güney Amerika' },
      { id: 637, en: 'north america', tr: 'Kuzey Amerika' },
      { id: 638, en: 'antarctica', tr: 'Antarktika' },
      { id: 639, en: 'portugal', tr: 'Portekiz' },
      { id: 640, en: 'healthy eating', tr: 'Sağlıklı beslenme' },
      { id: 641, en: 'fruit', tr: 'Meyve' },
      { id: 642, en: 'vegetables', tr: 'Sebzeler' },
      { id: 643, en: 'vitamins', tr: 'Vitaminler' },
      { id: 644, en: 'sugar', tr: 'Şeker' },
      { id: 645, en: 'meat', tr: 'Et' },
      { id: 646, en: 'salt', tr: 'Tuz' },
      { id: 647, en: 'water', tr: 'Su' },
      { id: 648, en: 'milk', tr: 'Süt' },
      { id: 649, en: 'eggs', tr: 'Yumurtalar' },
      { id: 650, en: 'apple', tr: 'Elma' },
      { id: 651, en: 'carrot', tr: 'Havuç' },
      { id: 652, en: 'biscuit', tr: 'Bisküvi' },
      { id: 653, en: 'burger', tr: 'Burger' },
      { id: 654, en: 'energy drinks', tr: 'Enerji içecekleri' },
      { id: 655, en: 'fizzy drinks', tr: 'Gazlı içecekler' },
      { id: 656, en: 'either', tr: 'Ya da' },
      { id: 657, en: 'both', tr: 'Her ikisi' },
      { id: 658, en: 'neither', tr: 'Hiçbiri' },
      { id: 659, en: 'a lot of', tr: 'Çok' },
      { id: 660, en: 'some', tr: 'Bazı / Biraz' },
      { id: 661, en: 'a few', tr: 'Birkaç' },
      { id: 662, en: 'a little', tr: 'Biraz' }
    ]
  },
  'LIFE IN NATURE': {
    title: 'LIFE IN NATURE',
    description: 'Doğada yaşam teması için İngilizce ve Türkçe kelime eşleştirmeleri yap.',
    pairs: [
      { id: 701, en: 'animals in nature', tr: 'Doğadaki hayvanlar' },
      { id: 702, en: 'a polar bear', tr: 'Bir kutup ayısı' },
      { id: 703, en: 'a frog', tr: 'Bir kurbağa' },
      { id: 704, en: 'a bird', tr: 'Bir kuş' },
      { id: 705, en: 'a camel', tr: 'Bir deve' },
      { id: 706, en: 'a fish', tr: 'Bir balık' },
      { id: 707, en: 'a zebra', tr: 'Bir zebra' },
      { id: 708, en: 'a parrot', tr: 'Bir papağan' },
      { id: 709, en: 'a dolphin', tr: 'Bir yunus' },
      { id: 710, en: 'the arctic', tr: 'Kutup bölgesi' },
      { id: 711, en: 'a wetland', tr: 'Sulak alan' },
      { id: 712, en: 'a lake', tr: 'Bir göl' },
      { id: 713, en: 'a river', tr: 'Bir nehir' },
      { id: 714, en: 'a forest', tr: 'Bir orman' },
      { id: 715, en: 'a desert', tr: 'Bir çöl' },
      { id: 716, en: 'a savanna', tr: 'Bir savan' },
      { id: 717, en: 'a rainforest', tr: 'Bir yağmur ormanı' },
      { id: 718, en: 'an ocean', tr: 'Bir okyanus' },
      { id: 719, en: 'a sea', tr: 'Bir deniz' },
      { id: 720, en: 'sunbathing', tr: 'Güneşlenme' },
      { id: 721, en: 'walking', tr: 'Yürümek' },
      { id: 722, en: 'jumping', tr: 'Zıplamak' },
      { id: 723, en: 'flying', tr: 'Uçmak' },
      { id: 724, en: 'chirping', tr: 'Cıvıldamak' },
      { id: 725, en: 'swimming', tr: 'Yüzme' },
      { id: 726, en: 'fishing', tr: 'Balık tutmak' },
      { id: 727, en: 'playing', tr: 'Oynamak' },
      { id: 728, en: 'hiking', tr: 'Yürüyüş yapmak' },
      { id: 729, en: 'jogging', tr: 'Koşu yapmak' },
      { id: 730, en: 'protect', tr: 'Korumak' },
      { id: 731, en: 'destroy', tr: 'Yok etmek' },
      { id: 732, en: 'exist', tr: 'Var olmak' },
      { id: 733, en: 'endangered', tr: 'Nesli tükenmekte olan' },
      { id: 734, en: 'habitat', tr: 'Yaşam alanı' },
      { id: 735, en: 'endangered animals', tr: 'Tehlikedeki hayvanlar' },
      { id: 736, en: 'forest floor', tr: 'Orman tabanı' },
      { id: 737, en: 'canopy layer', tr: 'Gövde tabakası' },
      { id: 738, en: 'understory layer', tr: 'Alt katman' },
      { id: 739, en: 'emergent layer', tr: 'Açılan katman' },
      { id: 740, en: 'pick up litter', tr: 'Çöpleri toplamak' },
      { id: 741, en: 'panda', tr: 'Panda' },
      { id: 742, en: 'plant the seeds for a better future', tr: 'Daha iyi bir gelecek için tohum ekiyoruz' },
      { id: 743, en: 'where were you last sunday?', tr: 'Geçen pazar neredeydin?' },
      { id: 744, en: 'did you jump into the water?', tr: 'Suya girdin mi?' },
      { id: 745, en: 'what did you do then?', tr: 'Sonra ne yaptın?' },
      { id: 746, en: 'did you stay there all night?', tr: 'Tüm gece orada mı kaldın?' },
      { id: 747, en: 'how did you get back home?', tr: 'Eve nasıl döndün?' },
      { id: 748, en: 'the boys were fishing on the lake', tr: 'Çocuklar gölde balık tutuyordu' },
      { id: 749, en: 'the boat overturned', tr: 'Tekne devrildi' },
      { id: 750, en: 'the boys fell into the water', tr: 'Çocuklar suya düştü' },
      { id: 751, en: 'burak grabbed his friend and swam to the island', tr: 'Burak arkadaşını tuttu ve adaya yüzdü' },
      { id: 752, en: 'they spent the night on an island', tr: 'Bir adada gece geçirdiler' },
      { id: 753, en: 'a fisherman saved the boys', tr: 'Bir balıkçı çocukları kurtardı' },
      { id: 754, en: 'you must wear a life jacket', tr: 'Can yeleği giymelisin' },
      { id: 755, en: 'you should keep calm and wait for help', tr: 'Sakin kalmalı ve yardım beklemelisin' },
      { id: 756, en: 'give', tr: 'Vermek' },
      { id: 757, en: 'grabbed', tr: 'Tuttu' },
      { id: 758, en: 'glad', tr: 'Memnun' },
      { id: 759, en: 'greatly', tr: 'Büyük ölçüde' },
      { id: 760, en: 'grateful', tr: 'Minnettar' },
      { id: 761, en: 'huge', tr: 'Devasa' },
      { id: 762, en: 'horribly', tr: 'Korkunç bir şekilde' },
      { id: 763, en: 'helped', tr: 'Yardım etti' },
      { id: 764, en: 'hard', tr: 'Zor' },
      { id: 765, en: 'he', tr: 'O (erkek)' }
    ]
  },
  'LIFE IN THE UNIVERSE': {
    title: 'LIFE IN THE UNIVERSE',
    description: 'Evren yaşamı teması için İngilizce ve Türkçe kelime eşleştirmeleri yap.',
    pairs: [
      { id: 801, en: 'planets', tr: 'Gezegenler' },
      { id: 802, en: 'the Earth as a planet', tr: 'Dünya bir gezegen olarak' },
      { id: 803, en: 'extreme weather conditions', tr: 'Aşırı hava koşulları' },
      { id: 804, en: 'facts about planets', tr: 'Gezegenler hakkında bilgiler' },
      { id: 805, en: 'jupiter', tr: 'Jüpiter' },
      { id: 806, en: 'venus', tr: 'Venüs' },
      { id: 807, en: 'the Sun', tr: 'Güneş' },
      { id: 808, en: 'the Moon', tr: 'Ay' },
      { id: 809, en: 'space', tr: 'Uzay' },
      { id: 810, en: 'asteroids', tr: 'Asteroidler' },
      { id: 811, en: 'comets', tr: 'Kuyruklu yıldızlar' },
      { id: 812, en: 'stars', tr: 'Yıldızlar' },
      { id: 813, en: 'galaxy', tr: 'Galaksi' },
      { id: 814, en: 'habitable', tr: 'Yaşanabilir' },
      { id: 815, en: 'water', tr: 'Su' },
      { id: 816, en: 'plant', tr: 'Dikmek' },
      { id: 817, en: 'reduce', tr: 'Azaltmak' },
      { id: 818, en: 'exist', tr: 'Var olmak' },
      { id: 819, en: 'if', tr: 'Eğer' },
      { id: 820, en: 'unless', tr: 'Olmazsa' },
      { id: 821, en: 'boils', tr: 'Kaynar' },
      { id: 822, en: 'melts', tr: 'Erir' },
      { id: 823, en: 'dies', tr: 'Ölür' },
      { id: 824, en: 'weather', tr: 'Hava' },
      { id: 825, en: 'continent', tr: 'Kıta' },
      { id: 826, en: 'environment', tr: 'Çevre' },
      { id: 827, en: 'snow', tr: 'Kar' },
      { id: 828, en: 'project', tr: 'Proje' },
      { id: 829, en: 'desert', tr: 'Çöl' },
      { id: 830, en: 'heat', tr: 'Sıcak' },
      { id: 831, en: 'cold', tr: 'Soğuk' },
      { id: 832, en: 'slogan', tr: 'Slogan' },
      { id: 833, en: 'stop pollution', tr: 'Kirliliği durdur' },
      { id: 834, en: 'fight for our planet', tr: 'Gezegenimiz için savaş' },
      { id: 835, en: 'blue like the oceans', tr: 'Okyanuslar gibi mavi' },
      { id: 836, en: 'green like the trees', tr: 'Ağaçlar gibi yeşil' },
      { id: 837, en: 'home is where Earth is', tr: 'Ev Dünya’nın olduğu yerdir' },
      { id: 838, en: 'station', tr: 'İstasyon' },
      { id: 839, en: 'equipment', tr: 'Ekipman' },
      { id: 840, en: 'experiments', tr: 'Deneyler' },
      { id: 841, en: 'exercise', tr: 'Egzersiz yapmak' },
      { id: 842, en: 'fix', tr: 'Tamir etmek' },
      { id: 843, en: 'sleeping bags', tr: 'Uyku tulumları' },
      { id: 844, en: 'float away', tr: 'Uzaklaşmak' },
      { id: 845, en: 'journey', tr: 'Yolculuk' },
      { id: 846, en: 'joy', tr: 'Sevinç' },
      { id: 847, en: 'igloo', tr: 'İglo' },
      { id: 848, en: 'jellyfish', tr: 'Denizanası' },
      { id: 849, en: 'ink', tr: 'Mürekkep' },
      { id: 850, en: 'jacket', tr: 'Ceket' },
      { id: 851, en: 'jet', tr: 'Jet' },
      { id: 852, en: 'jam', tr: 'Reçel' },
      { id: 853, en: 'orbit', tr: 'Yörünge' },
      { id: 854, en: 'biggest', tr: 'En büyük' },
      { id: 855, en: 'ring', tr: 'Halka' },
      { id: 856, en: 'just', tr: 'Sadece' },
      { id: 857, en: 'great', tr: 'Harika' },
      { id: 858, en: 'sky', tr: 'Gökyüzü' },
      { id: 859, en: 'high', tr: 'Yüksek' },
      { id: 860, en: 'shine', tr: 'Parlamak' },
      { id: 861, en: 'bright', tr: 'Parlak' },
      { id: 862, en: 'clear', tr: 'Açık' }
    ]
  },
  'SCHOOL LIFE & EDUCATION': {
    title: 'SCHOOL LIFE & EDUCATION',
    description: 'Okul yaşamı ve eğitim teması için İngilizce ve Türkçe kelime eşleştirmeleri yap.',
    pairs: [
      { id: 901, en: 'teacher’s room', tr: 'Öğretmenler odası' },
      { id: 902, en: 'extracurricular activities', tr: 'Ders dışı etkinlikler' },
      { id: 903, en: 'facilities in schools', tr: 'Okul tesisleri' },
      { id: 904, en: 'university', tr: 'Üniversite' },
      { id: 905, en: 'college', tr: 'Kolej' },
      { id: 906, en: 'vocational school', tr: 'Meslek lisesi' },
      { id: 907, en: 'state lower secondary school', tr: 'Devlet ortaokulu' },
      { id: 908, en: 'international school', tr: 'Uluslararası okul' },
      { id: 909, en: 'graduate', tr: 'Mezun olmak' },
      { id: 910, en: 'qualification', tr: 'Nitelik' },
      { id: 911, en: 'future job', tr: 'Gelecekteki iş' },
      { id: 912, en: 'library', tr: 'Kütüphane' },
      { id: 913, en: 'basketball court', tr: 'Basketbol sahası' },
      { id: 914, en: 'science lab', tr: 'Fen laboratuvarı' },
      { id: 915, en: 'register', tr: 'Kayıt olmak' },
      { id: 916, en: 'educational programme', tr: 'Eğitim programı' },
      { id: 917, en: 'drama club', tr: 'Drama kulübü' },
      { id: 918, en: 'art club', tr: 'Sanat kulübü' },
      { id: 919, en: 'robotics club', tr: 'Robotik kulübü' },
      { id: 920, en: 'rugby', tr: 'Rugby' },
      { id: 921, en: 'exhibition', tr: 'Sergi' },
      { id: 922, en: 'gymnastics', tr: 'Jimnastik' },
      { id: 923, en: 'debate club', tr: 'Tartışma kulübü' },
      { id: 924, en: 'science club', tr: 'Bilim kulübü' },
      { id: 925, en: 'coding club', tr: 'Kodlama kulübü' },
      { id: 926, en: 'chess club', tr: 'Satranç kulübü' },
      { id: 927, en: 'spelling bee club', tr: 'Yazım yarışması kulübü' },
      { id: 928, en: 'cafeteria', tr: 'Kafeterya' },
      { id: 929, en: 'classroom', tr: 'Sınıf' },
      { id: 930, en: 'computer lab', tr: 'Bilgisayar labaratuvarı' },
      { id: 931, en: 'gym', tr: 'Spor salonu' },
      { id: 932, en: 'art room', tr: 'Resim sınıfı' },
      { id: 933, en: 'music room', tr: 'Müzik odası' },
      { id: 934, en: 'headmaster’s office', tr: 'Müdür odası' },
      { id: 935, en: 'school yard', tr: 'Okul bahçesi' },
      { id: 936, en: 'courtyard', tr: 'Avlu' },
      { id: 937, en: 'corridor', tr: 'Koridor' },
      { id: 938, en: 'lockers', tr: 'Dolaplar' },
      { id: 939, en: 'PE', tr: 'Beden Eğitimi' },
      { id: 940, en: 'Maths', tr: 'Matematik' },
      { id: 941, en: 'Physics', tr: 'Fizik' },
      { id: 942, en: 'Chemistry', tr: 'Kimya' },
      { id: 943, en: 'Information Technology', tr: 'Bilişim Teknolojileri' },
      { id: 944, en: 'Geography', tr: 'Coğrafya' },
      { id: 945, en: 'Philosophy', tr: 'Felsefe' },
      { id: 946, en: 'Art', tr: 'Görsel Sanatlar' },
      { id: 947, en: 'Music', tr: 'Müzik' },
      { id: 948, en: 'attends', tr: 'Katılır' },
      { id: 949, en: 'includes', tr: 'İçerir' },
      { id: 950, en: 'are given', tr: 'Verilir' },
      { id: 951, en: 'are taught', tr: 'Öğretilir' },
      { id: 952, en: 'joins', tr: 'Katılır' },
      { id: 953, en: 'football', tr: 'Futbol' },
      { id: 954, en: 'basketball', tr: 'Basketbol' },
      { id: 955, en: 'tennis', tr: 'Tenis' },
      { id: 956, en: 'clean', tr: 'Temizlemek' },
      { id: 957, en: 'research projects', tr: 'Araştırma projeleri' },
      { id: 958, en: 'conducted', tr: 'Yürütüldü' },
      { id: 959, en: 'assign', tr: 'Görevlendirmek' },
      { id: 960, en: 'prepared', tr: 'Hazırlandı' },
      { id: 961, en: 'diploma', tr: 'Diploma' },
      { id: 962, en: 'public schools', tr: 'Devlet okulları' },
      { id: 963, en: 'uniforms', tr: 'Kıyafetler' },
      { id: 964, en: 'organising', tr: 'Organize etme' },
      { id: 965, en: 'swimming pool', tr: 'Yüzme havuzu' },
      { id: 966, en: 'painting', tr: 'Resim yapma' },
      { id: 967, en: 'teacher', tr: 'Öğretmen' },
      { id: 968, en: 'explained', tr: 'Açıkladı' },
      { id: 969, en: 'different languages', tr: 'Farklı diller' },
      { id: 970, en: 'primary school', tr: 'İlkokul' },
      { id: 971, en: 'lower secondary school', tr: 'Ortaokul' },
      { id: 972, en: 'upper secondary school', tr: 'Lise' },
      { id: 973, en: 'language school', tr: 'Dil okulu' },
      { id: 974, en: 'special needs school', tr: 'Özel eğitim okulu' },
      { id: 975, en: 'boarding school', tr: 'Pansiyonlu okul' },
      { id: 976, en: 'fostering critical thinking', tr: 'Eleştirel düşünmeyi teşvik etmek' },
      { id: 977, en: 'independent learning', tr: 'Bağımsız öğrenme' },
      { id: 978, en: 'supportive environment', tr: 'Destekleyici ortam' },
      { id: 979, en: 'personalized teaching methods', tr: 'Kişiye özel öğretim yöntemleri' },
      { id: 980, en: 'practical skills', tr: 'Pratik beceriler' },
      { id: 981, en: 'engineering', tr: 'Mühendislik' },
      { id: 982, en: 'healthcare', tr: 'Sağlık hizmetleri' },
      { id: 983, en: 'communication skills', tr: 'İletişim becerileri' },
      { id: 984, en: 'college', tr: 'Kolej' },
      { id: 985, en: 'undergraduate', tr: 'Lisans' },
      { id: 986, en: 'postgraduate', tr: 'Lisansüstü' },
      { id: 987, en: 'academic degrees', tr: 'Akademik dereceler' },
      { id: 988, en: 'English', tr: 'İngilizce' },
      { id: 989, en: 'grammar rules', tr: 'Dilbilgisi kuralları' },
      { id: 990, en: 'vocabulary', tr: 'Kelime dağarcığı' },
      { id: 991, en: 'useful expressions', tr: 'Yararlı ifadeler' },
      { id: 992, en: 'stories', tr: 'Hikayeler' },
      { id: 993, en: 'songs', tr: 'Şarkılar' },
      { id: 994, en: 'quizzes', tr: 'Kısa sınavlar' },
      { id: 995, en: 'group project presentations', tr: 'Grup proje sunumları' },
      { id: 996, en: 'school choir', tr: 'Okul korosu' },
      { id: 997, en: 'music club', tr: 'Müzik kulübü' },
      { id: 998, en: 'new song', tr: 'Yeni şarkı' },
      { id: 999, en: 'painting', tr: 'Resim' },
      { id: 1000, en: 'theatre and drama', tr: 'Tiyatro ve drama' },
      { id: 1001, en: 'photography', tr: 'Fotoğrafçılık' },
      { id: 1002, en: 'sculpture', tr: 'Heykel' },
      { id: 1003, en: 'self-expression', tr: 'Kendini ifade etme' }
    ]
  },
  'CLASSROOM LIFE & LEARNING': {
    title: 'CLASSROOM LIFE & LEARNING',
    description: 'Sınıf yaşamı ve öğrenme teması için İngilizce ve Türkçe kelime eşleştirmeleri yap.',
    pairs: [
      { id: 1101, en: 'classroom', tr: 'Sınıf' },
      { id: 1102, en: 'technological tools', tr: 'Teknolojik araçlar' },
      { id: 1103, en: 'learning activities', tr: 'Öğrenme etkinlikleri' },
      { id: 1104, en: 'laptop', tr: 'Dizüstü bilgisayar' },
      { id: 1105, en: 'smart board', tr: 'Akıllı tahta' },
      { id: 1106, en: 'webcam', tr: 'Web kamerası' },
      { id: 1107, en: 'printer', tr: 'Yazıcı' },
      { id: 1108, en: 'screen', tr: 'Ekran' },
      { id: 1109, en: 'website', tr: 'Web sitesi' },
      { id: 1110, en: 'connection', tr: 'Bağlantı' },
      { id: 1111, en: 'assignment', tr: 'Ödev' },
      { id: 1112, en: 'group work', tr: 'Grup çalışması' },
      { id: 1113, en: 'brainstorming', tr: 'Beyin fırtınası' },
      { id: 1114, en: 'question-and-answer session', tr: 'Soru-cevap oturumu' },
      { id: 1115, en: 'pairwork', tr: 'İkili çalışma' },
      { id: 1116, en: 'cardinal numbers', tr: 'Kardinal sayılar' },
      { id: 1117, en: 'ordinal numbers', tr: 'Ordinal sayılar' },
      { id: 1118, en: 'nine hundred', tr: 'Dokuzyüz' },
      { id: 1119, en: 'three', tr: 'Üç' },
      { id: 1120, en: 'six hundred', tr: 'Altıyüz' },
      { id: 1121, en: 'eleven', tr: 'On bir' },
      { id: 1122, en: 'one thousand', tr: 'Bin' },
      { id: 1123, en: 'twenty', tr: 'Yirmi' },
      { id: 1124, en: 'sixtieth', tr: 'Altmışıncı' },
      { id: 1125, en: 'fiftieth', tr: 'Elliinci' },
      { id: 1126, en: 'first', tr: 'Birinci' },
      { id: 1127, en: 'tenth', tr: 'Onuncu' },
      { id: 1128, en: 'role-play', tr: 'Rol yapma' },
      { id: 1129, en: 'brainstorm', tr: 'Fikir üretmek' },
      { id: 1130, en: 'real-life scenario', tr: 'Gerçek hayat senaryosu' },
      { id: 1131, en: 'practice', tr: 'Pratik yapmak' },
      { id: 1132, en: 'will be held', tr: 'Düzenlenecek' },
      { id: 1133, en: 'will start', tr: 'Başlayacak' },
      { id: 1134, en: 'will divide', tr: 'Bölecek' },
      { id: 1135, en: 'will be held', tr: 'Yapılacak' },
      { id: 1136, en: 'can’t connect', tr: 'Bağlanamıyor' },
      { id: 1137, en: 'homework', tr: 'Ödev' },
      { id: 1138, en: 'can we use your printer?', tr: 'Yazıcını kullanabilir miyiz?' },
      { id: 1139, en: 'the script is being written', tr: 'Senaryo yazılıyor' },
      { id: 1140, en: 'the role-play will be performed', tr: 'Rol yapma sahnelenecek' },
      { id: 1141, en: 'different tenses will be used', tr: 'Farklı zamanlar kullanılacak' },
      { id: 1142, en: 'future classrooms', tr: 'Geleceğin sınıfları' },
      { id: 1143, en: 'futuristic', tr: 'Gelecekçi' },
      { id: 1144, en: 'holographic walls', tr: 'Holografik duvarlar' },
      { id: 1145, en: 'robot assistants', tr: 'Robot yardımcılar' },
      { id: 1146, en: 'virtual lessons', tr: 'Sanal dersler' },
      { id: 1147, en: 'interactive touch walls', tr: 'Etkileşimli dokunmatik duvarlar' },
      { id: 1148, en: 'smartphone', tr: 'Akıllı telefon' },
      { id: 1149, en: 'download', tr: 'İndirmek' },
      { id: 1150, en: 'upload', tr: 'Yüklemek' },
      { id: 1151, en: 'modular desks', tr: 'Modüler masalar' },
      { id: 1152, en: 'remote learning', tr: 'Uzaktan öğrenme' },
      { id: 1153, en: 'VR headsets', tr: 'VR gözlükleri' },
      { id: 1154, en: '3D printer', tr: '3D yazıcı' },
      { id: 1155, en: 'robot building', tr: 'Robot yapımı' },
      { id: 1156, en: 'outdoor class', tr: 'Açık hava sınıfı' },
      { id: 1157, en: 'interactive board', tr: 'Etkileşimli pano' },
      { id: 1158, en: 'Singapore', tr: 'Singapur' },
      { id: 1159, en: 'Finland', tr: 'Finlandiya' },
      { id: 1160, en: 'Indonesia', tr: 'Endonezya' },
      { id: 1161, en: 'Türkiye', tr: 'Türkiye' },
      { id: 1162, en: 'research', tr: 'Araştırma' },
      { id: 1163, en: 'collaborative project', tr: 'Ortak proje' },
      { id: 1164, en: 'confused', tr: 'Kafası karışık' },
      { id: 1165, en: 'design framework', tr: 'Tasarım çerçevesi' },
      { id: 1166, en: 'learning activities', tr: 'Öğrenme etkinlikleri' },
      { id: 1167, en: 'role play', tr: 'Rol yapma' },
      { id: 1168, en: 'group work', tr: 'Grup çalışması' },
      { id: 1169, en: 'discussion', tr: 'Tartışma' },
      { id: 1170, en: 'benefits', tr: 'Faydalar' },
      { id: 1171, en: 'learn from each other', tr: 'Birbirinden öğrenmek' },
      { id: 1172, en: 'empathy', tr: 'Empati' },
      { id: 1173, en: 'public speaking', tr: 'Topluluk önünde konuşma' },
      { id: 1174, en: 'self-expression', tr: 'Kendini ifade etme' },
      { id: 1175, en: 'will be sent', tr: 'Gönderilecek' },
      { id: 1176, en: 'will be uploaded', tr: 'Yüklenecek' },
      { id: 1177, en: 'will be printed', tr: 'Yazdırılacak' },
      { id: 1178, en: 'will be read', tr: 'Okunacak' },
      { id: 1179, en: 'will be signed in to', tr: 'Oturum açılacak' },
      { id: 1180, en: 'will be searched for', tr: 'Aranacak' },
      { id: 1181, en: 'will be downloaded', tr: 'İndirilecek' }
    ]
  },
  'FAMILY LIFE': {
    title: 'FAMILY LIFE',
    description: 'Aile yaşamı teması için İngilizce ve Türkçe kelime eşleştirmeleri yap.',
    pairs: [
      { id: 401, en: 'family members', tr: 'Aile üyeleri' },
      { id: 402, en: 'types of houses', tr: 'Ev türleri' },
      { id: 403, en: 'jobs', tr: 'Meslekler' },
      { id: 404, en: 'workplaces', tr: 'Çalışma yerleri' },
      { id: 405, en: 'job routines', tr: 'İş rutinleri' },
      { id: 406, en: 'businesswoman', tr: 'İş kadını' },
      { id: 407, en: 'chemist', tr: 'Eczacı / Kimyager' },
      { id: 408, en: 'musician', tr: 'Müzisyen' },
      { id: 409, en: 'pilot', tr: 'Pilot' },
      { id: 410, en: 'driver', tr: 'Şoför' },
      { id: 411, en: 'farmer', tr: 'Çiftçi' },
      { id: 412, en: 'explorer', tr: 'Kaşif' },
      { id: 413, en: 'artist', tr: 'Sanatçı' },
      { id: 414, en: 'engineer', tr: 'Mühendis' },
      { id: 415, en: 'bus driver', tr: 'Otobüs şoförü' },
      { id: 416, en: 'mechanic', tr: 'Tamirci' },
      { id: 417, en: 'water slide tester', tr: 'Su kaydırağı testçisi' },
      { id: 418, en: 'line stander', tr: 'Sırada bekleyen kişi' },
      { id: 419, en: 'ice sculptor', tr: 'Buz heykeltıraşı' },
      { id: 420, en: 'professional sleeper', tr: 'Profesyonel uyuyan' },
      { id: 421, en: 'private island caretaker', tr: 'Özel ada bakıcısı' },
      { id: 422, en: 'flat', tr: 'Daire' },
      { id: 423, en: 'apartment house', tr: 'Apartman' },
      { id: 424, en: 'skyscraper', tr: 'Gökdelen' },
      { id: 425, en: 'bungalow', tr: 'Bungalov' },
      { id: 426, en: 'cabin', tr: 'Kulübe' },
      { id: 427, en: 'tiny house', tr: 'Küçük ev' },
      { id: 428, en: 'caravan', tr: 'Karavan' },
      { id: 429, en: 'surprise party', tr: 'Sürpriz parti' },
      { id: 430, en: 'new job', tr: 'Yeni iş' },
      { id: 431, en: 'manager', tr: 'Müdür' },
      { id: 432, en: 'factory', tr: 'Fabrika' },
      { id: 433, en: 'decorate the house', tr: 'Evi süslemek' },
      { id: 434, en: 'do shopping', tr: 'Alışveriş yapmak' },
      { id: 435, en: 'make a cake', tr: 'Pasta yapmak' },
      { id: 436, en: 'send invitation cards', tr: 'Davetiyeleri göndermek' },
      { id: 437, en: 'organise the music', tr: 'Müziği düzenlemek' }
    ]
  },
  'PERSONAL LIFE & WELL-BEING': {
    title: 'PERSONAL LIFE & WELL-BEING',
    description: 'Kişisel yaşam ve iyi olma teması için İngilizce ve Türkçe kelime eşleştirmeleri yap.',
    pairs: [
      { id: 1201, en: 'hospital', tr: 'Hastane' },
      { id: 1202, en: 'doctor’s clinic', tr: 'Doktor kliniği' },
      { id: 1203, en: 'body parts', tr: 'Vücut parçaları' },
      { id: 1204, en: 'illnesses', tr: 'Hastalıklar' },
      { id: 1205, en: 'diseases', tr: 'Hastalıklar' },
      { id: 1206, en: 'neck', tr: 'Boyun' },
      { id: 1207, en: 'shoulder', tr: 'Omuz' },
      { id: 1208, en: 'chest', tr: 'Göğüs' },
      { id: 1209, en: 'ankle', tr: 'Ayak bileği' },
      { id: 1210, en: 'knee', tr: 'Diz' },
      { id: 1211, en: 'forehead', tr: 'Alın' },
      { id: 1212, en: 'stomach', tr: 'Mide' },
      { id: 1213, en: 'headache', tr: 'Baş ağrısı' },
      { id: 1214, en: 'flu', tr: 'Grip' },
      { id: 1215, en: 'cold', tr: 'Soğuk algınlığı' },
      { id: 1216, en: 'cough', tr: 'Öksürük' },
      { id: 1217, en: 'sore throat', tr: 'Boğaz ağrısı' },
      { id: 1218, en: 'stomachache', tr: 'Karın ağrısı' },
      { id: 1219, en: 'measles', tr: 'Kızamık' },
      { id: 1220, en: 'allergy', tr: 'Alerji' },
      { id: 1221, en: 'diabetes', tr: 'Diyabet' },
      { id: 1222, en: 'backache', tr: 'Sırt ağrısı' },
      { id: 1223, en: 'symptoms', tr: 'Belirtiler' },
      { id: 1224, en: 'temperature', tr: 'Ateş' },
      { id: 1225, en: 'medicine', tr: 'İlaç' },
      { id: 1226, en: 'painkiller', tr: 'Ağrı kesici' },
      { id: 1227, en: 'vitamins', tr: 'Vitaminler' },
      { id: 1228, en: 'rest', tr: 'Dinlenme' },
      { id: 1229, en: 'temperature', tr: 'Ateş' },
      { id: 1230, en: 'prescribed', tr: 'Reçete edildi' },
      { id: 1231, en: 'bed rest', tr: 'Yatak istirahati' },
      { id: 1232, en: 'herbal tea', tr: 'Bitki çayı' },
      { id: 1233, en: 'healthy food', tr: 'Sağlıklı yiyecek' },
      { id: 1234, en: 'screen time', tr: 'Ekran süresi' },
      { id: 1235, en: 'sleep well', tr: 'İyi uyumak' },
      { id: 1236, en: 'drink enough water', tr: 'Yeterince su içmek' },
      { id: 1237, en: 'exercise', tr: 'Egzersiz' },
      { id: 1238, en: 'eat healthy food', tr: 'Sağlıklı yiyecek yemek' },
      { id: 1239, en: 'take care of my mind', tr: 'Zihnime dikkat etmek' },
      { id: 1240, en: 'healthy', tr: 'Sağlıklı' },
      { id: 1241, en: 'unhealthy', tr: 'Sağlıksız' },
      { id: 1242, en: 'sleeping 5 hours', tr: '5 saat uyumak' },
      { id: 1243, en: 'eat a lot of sweets', tr: 'Birçok tatlı yemek' },
      { id: 1244, en: 'eat vegetables', tr: 'Sebze yemek' },
      { id: 1245, en: 'question-and-answer', tr: 'Soru-cevap' },
      { id: 1246, en: 'Dr Smith', tr: 'Dr Smith' },
      { id: 1247, en: 'walking', tr: 'Yürümek' },
      { id: 1248, en: 'running', tr: 'Koşmak' },
      { id: 1249, en: 'playing sports', tr: 'Spor yapmak' },
      { id: 1250, en: 'riding a bike', tr: 'Bisiklete binmek' },
      { id: 1251, en: 'staying happy and relaxed', tr: 'Mutlu ve rahat kalmak' },
      { id: 1252, en: 'fruits', tr: 'Meyveler' },
      { id: 1253, en: 'vegetables', tr: 'Sebzeler' },
      { id: 1254, en: 'whole grains', tr: 'Tam tahıllar' },
      { id: 1255, en: 'short story', tr: 'Kısa hikaye' },
      { id: 1256, en: 'fluent', tr: 'Akıcı' },
      { id: 1257, en: 'unwell', tr: 'Halsiz' },
      { id: 1258, en: 'cough syrup', tr: 'Öksürük şurubu' },
      { id: 1259, en: 'warm herbal tea', tr: 'Ilık bitki çayı' },
      { id: 1260, en: 'the United Kingdom', tr: 'Birleşik Krallık' },
      { id: 1261, en: 'Türkiye', tr: 'Türkiye' },
      { id: 1262, en: 'Japan', tr: 'Japonya' },
      { id: 1263, en: 'Italy', tr: 'İtalya' },
      { id: 1264, en: 'India', tr: 'Hindistan' },
      { id: 1265, en: 'tired', tr: 'Yorgun' },
      { id: 1266, en: 'terrible case of the flu', tr: 'Şiddetli grip vakası' },
      { id: 1267, en: 'broken leg', tr: 'Kırık bacak' },
      { id: 1268, en: 'hospital', tr: 'Hastane' },
      { id: 1269, en: 'X-ray', tr: 'Röntgen' },
      { id: 1270, en: 'you must be careful', tr: 'Dikkatli olmalısın' },
      { id: 1271, en: 'park', tr: 'Park' },
      { id: 1272, en: 'sun', tr: 'Güneş' },
      { id: 1273, en: 'eyes', tr: 'Gözler' },
      { id: 1274, en: 'ears', tr: 'Kulaklar' },
      { id: 1275, en: 'nose', tr: 'Burun' },
      { id: 1276, en: 'hands', tr: 'Eller' },
      { id: 1277, en: 'heart', tr: 'Kalp' },
      { id: 1278, en: 'face', tr: 'Yüz' },
      { id: 1279, en: 'happy', tr: 'Mutlu' },
      { id: 1280, en: 'calm', tr: 'Sakin' }
    ]
  },
  'FAMILY LIFE & HOME': {
    title: 'FAMILY LIFE & HOME',
    description: 'Aile yaşamı ve ev teması için İngilizce ve Türkçe kelime eşleştirmeleri yap.',
    pairs: [
      { id: 1301, en: 'holiday house', tr: 'Tatil evi' },
      { id: 1302, en: 'beach', tr: 'Sahil' },
      { id: 1303, en: 'family members', tr: 'Aile üyeleri' },
      { id: 1304, en: 'abilities', tr: 'Yetenekler' },
      { id: 1305, en: 'skills', tr: 'Beceriler' },
      { id: 1306, en: 'hobbies', tr: 'Hobiler' },
      { id: 1307, en: 'moving into new homes', tr: 'Yeni evlere taşınma' },
      { id: 1308, en: 'packing boxes', tr: 'Kutu toplama' },
      { id: 1309, en: 'gardening', tr: 'Bahçe işleri' },
      { id: 1310, en: 'painting walls', tr: 'Duvarları boyama' },
      { id: 1311, en: 'playing music', tr: 'Müzik çalma' },
      { id: 1312, en: 'detached house', tr: 'Müstakil ev' },
      { id: 1313, en: 'villa', tr: 'Villa' },
      { id: 1314, en: 'block of flats', tr: 'Apartman bloğu' },
      { id: 1315, en: 'cottage', tr: 'Kır evi' },
      { id: 1316, en: 'farmhouse', tr: 'Çiftlik evi' },
      { id: 1317, en: 'treehouse', tr: 'Ağaç evi' },
      { id: 1318, en: 'surf', tr: 'Sörf yapmak' },
      { id: 1319, en: 'fly', tr: 'Uçmak' },
      { id: 1320, en: 'camp', tr: 'Kamp yapmak' },
      { id: 1321, en: 'babysit', tr: 'Çocuk bakmak' },
      { id: 1322, en: 'play video games', tr: 'Video oyunları oynamak' },
      { id: 1323, en: 'collect', tr: 'Toplamak' },
      { id: 1324, en: 'film', tr: 'Çekim yapmak' },
      { id: 1325, en: 'climb', tr: 'Tırmanmak' },
      { id: 1326, en: 'sail', tr: 'Yelken açmak' },
      { id: 1327, en: 'grill', tr: 'Izgara yapmak' },
      { id: 1328, en: 'library', tr: 'Kütüphane' },
      { id: 1329, en: 'gaming cafe', tr: 'Oyun kafesi' },
      { id: 1330, en: 'forest', tr: 'Orman' },
      { id: 1331, en: 'seaside', tr: 'Deniz kenarı' },
      { id: 1332, en: 'kitchen', tr: 'Mutfak' },
      { id: 1333, en: 'dance competition', tr: 'Dans yarışması' },
      { id: 1334, en: 'picnic', tr: 'Piknik' },
      { id: 1335, en: 'bicycle', tr: 'Bisiklet' },
      { id: 1336, en: 'photographs', tr: 'Fotoğraflar' },
      { id: 1337, en: 'dance performance', tr: 'Dans gösterisi' },
      { id: 1338, en: 'summer trip', tr: 'Yaz gezisi' },
      { id: 1339, en: 'shopping', tr: 'Alışveriş' },
      { id: 1340, en: 'holiday to the seaside', tr: 'Denize tatili' },
      { id: 1341, en: 'camping in the mountains', tr: 'Dağda kamp yapmak' },
      { id: 1342, en: 'potatoes', tr: 'Patatesler' },
      { id: 1343, en: 'photographs', tr: 'Fotoğraflar' },
      { id: 1344, en: 'big meal', tr: 'Büyük öğün' },
      { id: 1345, en: 'game', tr: 'Oyun' },
      { id: 1346, en: 'piano', tr: 'Piyano' },
      { id: 1347, en: 'surprise party', tr: 'Sürpriz parti' },
      { id: 1348, en: 'new app', tr: 'Yeni uygulama' },
      { id: 1349, en: 'guitar', tr: 'Gitar' },
      { id: 1350, en: 'interview', tr: 'Röportaj' },
      { id: 1351, en: 'flat', tr: 'Daire' },
      { id: 1352, en: 'more affordable', tr: 'Daha uygun fiyatlı' },
      { id: 1353, en: 'less outdoor space', tr: 'Daha az dış mekan alanı' },
      { id: 1354, en: 'private garden', tr: 'Özel bahçe' },
      { id: 1355, en: 'quiet life', tr: 'Sakin hayat' },
      { id: 1356, en: 'practical', tr: 'Pratik' },
      { id: 1357, en: 'safe', tr: 'Güvenli' },
      { id: 1358, en: 'adventurous', tr: 'Macera dolu' },
      { id: 1359, en: 'nature lovers', tr: 'Doğaseverler' },
      { id: 1360, en: 'crowded', tr: 'Kalabalık' },
      { id: 1361, en: 'noisy', tr: 'Gürültülü' },
      { id: 1362, en: 'privacy', tr: 'Mahremiyet' },
      { id: 1363, en: 'large amount of living space', tr: 'Geniş yaşam alanı' },
      { id: 1364, en: 'UK', tr: 'İngiltere' },
      { id: 1365, en: 'Netherlands', tr: 'Hollanda' },
      { id: 1366, en: 'Arctic Region', tr: 'Arktik Bölgesi' },
      { id: 1367, en: 'USA', tr: 'ABD' },
      { id: 1368, en: 'Italy', tr: 'İtalya' },
      { id: 1369, en: 'collaborative project', tr: 'Ortak proje' },
      { id: 1370, en: 'cutting and painting the model', tr: 'Modeli kesmek ve boyamak' },
      { id: 1371, en: 'drop off', tr: 'Bırakmak' },
      { id: 1372, en: 'grocery shopping', tr: 'Market alışverişi' },
      { id: 1373, en: 'main school hall', tr: 'Ana okul salonu' },
      { id: 1374, en: 'school friends', tr: 'Okul arkadaşları' },
      { id: 1375, en: 'classmates', tr: 'Sınıf arkadaşları' },
      { id: 1376, en: 'flat for five years', tr: 'Beş yıldır daire' },
      { id: 1377, en: 'detached house with a huge garden', tr: 'Büyük bahçeli müstakil ev' },
      { id: 1378, en: 'villa by the beach', tr: 'Deniz kenarında villa' },
      { id: 1379, en: 'surf', tr: 'Sörf yapmak' },
      { id: 1380, en: 'new mobile game', tr: 'Yeni mobil oyun' },
      { id: 1381, en: 'cat', tr: 'Kedi' },
      { id: 1382, en: 'dog', tr: 'Köpek' },
      { id: 1383, en: 'duplex', tr: 'Dublex' },
      { id: 1384, en: 'skateboard', tr: 'Kaykay' },
      { id: 1385, en: 'barbecue', tr: 'Barbekü' },
      { id: 1386, en: 'mystery novels', tr: 'Gizem romanları' },
      { id: 1387, en: 'legs', tr: 'Bacaklar' }
    ]
  },
  'LIFE IN THE NEIGHBOURHOOD & CITY & SOCIAL LIFE': {
    title: 'LIFE IN THE NEIGHBOURHOOD & CITY & SOCIAL LIFE',
    description: 'Mahalle, şehir ve sosyal yaşam teması için İngilizce ve Türkçe kelime eşleştirmeleri yap.',
    pairs: [
      { id: 1401, en: 'travel agency', tr: 'Seyahat acentası' },
      { id: 1402, en: 'festivals and events', tr: 'Festival ve etkinlikler' },
      { id: 1403, en: 'transportation', tr: 'Ulaşım' },
      { id: 1404, en: 'cultural and historical places', tr: 'Kültürel ve tarihi yerler' },
      { id: 1405, en: 'theatre', tr: 'Tiyatro' },
      { id: 1406, en: 'cinema', tr: 'Sinema' },
      { id: 1407, en: 'fountain', tr: 'Çeşme' },
      { id: 1408, en: 'bridges', tr: 'Köprüler' },
      { id: 1409, en: 'museum', tr: 'Müze' },
      { id: 1410, en: 'palace', tr: 'Saray' },
      { id: 1411, en: 'statue', tr: 'Heykel' },
      { id: 1412, en: 'tower', tr: 'Kule' },
      { id: 1413, en: 'castle', tr: 'Kale' },
      { id: 1414, en: 'tourist attractions', tr: 'Turistik yerler' },
      { id: 1415, en: 'exhibition', tr: 'Sergi' },
      { id: 1416, en: 'art gallery', tr: 'Sanat galerisi' },
      { id: 1417, en: 'holiday house', tr: 'Tatil evi' },
      { id: 1418, en: 'bus station', tr: 'Otobüs durağı' },
      { id: 1419, en: 'tram stop', tr: 'Tramvay durağı' },
      { id: 1420, en: 'airport', tr: 'Havalimanı' },
      { id: 1421, en: 'departure', tr: 'Kalkış' },
      { id: 1422, en: 'cabin', tr: 'Kabine' },
      { id: 1423, en: 'charter', tr: 'Charter uçuşu' },
      { id: 1424, en: 'underground', tr: 'Metro / Yer altı' },
      { id: 1425, en: 'transport', tr: 'Taşıma / Ulaşım' },
      { id: 1426, en: 'airline', tr: 'Havayolu şirketi' },
      { id: 1427, en: 'restaurant', tr: 'Restoran' },
      { id: 1428, en: 'street food festival', tr: 'Sokak yemekleri festivali' },
      { id: 1429, en: 'local dishes', tr: 'Yöresel yemekler' },
      { id: 1430, en: 'tasting', tr: 'Tatmak' },
      { id: 1431, en: 'couscous', tr: 'Kuskus' },
      { id: 1432, en: 'omelette', tr: 'Omlet' },
      { id: 1433, en: 'coconut', tr: 'Hindistancevizi' },
      { id: 1434, en: 'kebab', tr: 'Kebap' },
      { id: 1435, en: 'tacos', tr: 'Tako' },
      { id: 1436, en: 'burger', tr: 'Burger' },
      { id: 1437, en: 'sushi rolls', tr: 'Suşi ruloları' },
      { id: 1438, en: 'noodles', tr: 'Erişte' },
      { id: 1439, en: 'falafel', tr: 'Falafel' },
      { id: 1440, en: 'curry', tr: 'Köri' },
      { id: 1441, en: 'pasta', tr: 'Makarna' },
      { id: 1442, en: 'soup', tr: 'Çorba' },
      { id: 1443, en: 'dessert', tr: 'Tatlı' },
      { id: 1444, en: 'stew', tr: 'Güveç / Yahni' },
      { id: 1445, en: 'shopping', tr: 'Alışveriş' },
      { id: 1446, en: 'street food', tr: 'Sokak yemekleri' },
      { id: 1447, en: 'museum advertisement', tr: 'Müze ilanı' },
      { id: 1448, en: 'promotion', tr: 'Promosyon' },
      { id: 1449, en: 'discount', tr: 'İndirim' },
      { id: 1450, en: 'hostels', tr: 'Hosteller' },
      { id: 1451, en: 'holidays', tr: 'Tatiller' },
      { id: 1452, en: 'historic neighbourhood', tr: 'Tarihi mahalle' },
      { id: 1453, en: 'street food festival', tr: 'Sokak yemekleri festivali' },
      { id: 1454, en: 'share suggestions', tr: 'Öneri paylaşmak' },
      { id: 1455, en: 'rent bikes', tr: 'Bisiklet kiralamak' },
      { id: 1456, en: 'guesthouse', tr: 'Pansiyon' },
      { id: 1457, en: 'social life', tr: 'Sosyal yaşam' },
      { id: 1458, en: 'explore', tr: 'Keşfetmek' },
      { id: 1459, en: 'travel blogger', tr: 'Seyahat bloggerı' },
      { id: 1460, en: 'vlogger journey', tr: 'Vlogger yolculuğu' }
    ]
  },
  'LIFE IN THE WORLD & CULTURE': {
    title: 'LIFE IN THE WORLD & CULTURE',
    description: 'Dünya ve kültür yaşamı teması için İngilizce ve Türkçe kelime eşleştirmeleri yap.',
    pairs: [
      { id: 1461, en: 'school digital media classroom', tr: 'Okul dijital medya sınıfı' },
      { id: 1462, en: 'travel agency', tr: 'Seyahat acentası' },
      { id: 1463, en: 'global capitals', tr: 'Küresel başkentler' },
      { id: 1464, en: 'sports venues', tr: 'Spor alanları' },
      { id: 1465, en: 'capitals of countries', tr: 'Ülke başkentleri' },
      { id: 1466, en: 'landmarks', tr: 'Simgesel yerler' },
      { id: 1467, en: 'famous places', tr: 'Ünlü yerler' },
      { id: 1468, en: 'sport events', tr: 'Spor etkinlikleri' },
      { id: 1469, en: 'Paris', tr: 'Paris' },
      { id: 1470, en: 'London', tr: 'Londra' },
      { id: 1471, en: 'Ankara', tr: 'Ankara' },
      { id: 1472, en: 'Tokyo', tr: 'Tokyo' },
      { id: 1473, en: 'Beijing', tr: 'Pekin' },
      { id: 1474, en: 'New Delhi', tr: 'Yeni Delhi' },
      { id: 1475, en: 'Eiffel Tower', tr: 'Eyfel Kulesi' },
      { id: 1476, en: 'Big Ben', tr: 'Big Ben' },
      { id: 1477, en: 'Anıtkabir', tr: 'Anıtkabir' },
      { id: 1478, en: 'Colosseum', tr: 'Kolezyum' },
      { id: 1479, en: 'Great Wall', tr: 'Büyük Çin Seddi' },
      { id: 1480, en: 'Taj Mahal', tr: 'Tac Mahal' },
      { id: 1481, en: 'Wimbledon', tr: 'Wimbledon' },
      { id: 1482, en: 'Tennis', tr: 'Tenis' },
      { id: 1483, en: 'Gymnastics', tr: 'Jimnastik' },
      { id: 1484, en: 'Snowboarding', tr: 'Snowboard' },
      { id: 1485, en: 'Football', tr: 'Futbol' },
      { id: 1486, en: 'Cycling', tr: 'Bisiklet' },
      { id: 1487, en: 'Olympic Games', tr: 'Olimpiyat Oyunları' },
      { id: 1488, en: 'FIFA World Cup', tr: 'FIFA Dünya Kupası' },
      { id: 1489, en: 'Tour de France', tr: 'Tour de France' },
      { id: 1490, en: 'Super Bowl', tr: 'Super Bowl' },
      { id: 1491, en: 'Winter Olympics', tr: 'Kış Olimpiyatları' },
      { id: 1492, en: 'fair play', tr: 'Fair play' },
      { id: 1493, en: 'athletics', tr: 'Atletizm' },
      { id: 1494, en: 'swimming', tr: 'Yüzme' },
      { id: 1495, en: 'golf', tr: 'Golf' },
      { id: 1496, en: 'karate', tr: 'Karate' },
      { id: 1497, en: 'sailing', tr: 'Yelken' },
      { id: 1498, en: 'American football', tr: 'Amerikan futbolu' },
      { id: 1499, en: 'ice skating', tr: 'Buz pateni' },
      { id: 1500, en: 'skiing', tr: 'Kayak' },
      { id: 1501, en: 'British Museum', tr: 'British Museum' },
      { id: 1502, en: 'British Library', tr: 'British Library' },
      { id: 1503, en: 'London Eye', tr: 'London Eye' },
      { id: 1504, en: 'Buckingham Palace', tr: 'Buckingham Sarayı' },
      { id: 1505, en: 'town hall', tr: 'Belediye binası' },
      { id: 1506, en: 'tennis match', tr: 'Tenis maçı' },
      { id: 1507, en: 'Wimbledon match', tr: 'Wimbledon maçı' },
      { id: 1508, en: 'locker room', tr: 'Soyunma odası' },
      { id: 1509, en: 'surfing', tr: 'Sörf' },
      { id: 1510, en: 'gym', tr: 'Spor salonu' },
      { id: 1511, en: 'trainer', tr: 'Antrenör' },
      { id: 1512, en: 'stage', tr: 'Sahne' },
      { id: 1513, en: 'coach', tr: 'Koç' },
      { id: 1514, en: 'boxing', tr: 'Boks' },
      { id: 1515, en: 'ice rink', tr: 'Buz pisti' },
      { id: 1516, en: 'practice', tr: 'Pratik yapmak' },
      { id: 1517, en: 'rules', tr: 'Kurallar' },
      { id: 1518, en: 'video', tr: 'Video' },
      { id: 1519, en: 'valuable', tr: 'Değerli' },
      { id: 1520, en: 'view', tr: 'Manzara / Görünüm' },
      { id: 1521, en: 'volcanoes', tr: 'Volkanlar' },
      { id: 1522, en: 'various', tr: 'Çeşitli' },
      { id: 1523, en: 'club', tr: 'Kulüp' },
      { id: 1524, en: 'course', tr: 'Kurs' },
      { id: 1525, en: 'needn’t', tr: 'Gerekmiyor' },
      { id: 1526, en: 'mustn’t', tr: 'Yapmamalısın' },
      { id: 1527, en: 'should', tr: 'Yapmalısın' },
      { id: 1528, en: 'must', tr: 'Zorunlu' },
      { id: 1529, en: 'ticket', tr: 'Bilet' },
      { id: 1530, en: 'guidebook', tr: 'Rehber kitap' }
    ]
  },
  'LIFE IN NATURE 2': {
    title: 'LIFE IN NATURE 2',
    description: 'Doğadaki yaşam teması için İngilizce ve Türkçe kelime eşleştirmeleri yap.',
    pairs: [
      { id: 1531, en: 'nature park', tr: 'Doğa parkı' },
      { id: 1532, en: 'school green area', tr: 'Okul yeşil alanı' },
      { id: 1533, en: 'environmental awareness', tr: 'Çevresel farkındalık' },
      { id: 1534, en: 'natural resources', tr: 'Doğal kaynaklar' },
      { id: 1535, en: 'water', tr: 'Su' },
      { id: 1536, en: 'rain', tr: 'Yağmur' },
      { id: 1537, en: 'wind', tr: 'Rüzgâr' },
      { id: 1538, en: 'windmill', tr: 'Rüzgâr türbini' },
      { id: 1539, en: 'wood', tr: 'Ağaç / Odun' },
      { id: 1540, en: 'timber', tr: 'Kereste' },
      { id: 1541, en: 'solar energy', tr: 'Güneş enerjisi' },
      { id: 1542, en: 'deforestation', tr: 'Ormansızlaşma' },
      { id: 1543, en: 'air pollution', tr: 'Hava kirliliği' },
      { id: 1544, en: 'drought', tr: 'Kuraklık' },
      { id: 1545, en: 'famine', tr: 'Kıtlık' },
      { id: 1546, en: 'trash', tr: 'Çöp' },
      { id: 1547, en: 'plastic waste', tr: 'Plastik atık' },
      { id: 1548, en: 'panda', tr: 'Panda' },
      { id: 1549, en: 'polar bear', tr: 'Kutup ayısı' },
      { id: 1550, en: 'sea turtle', tr: 'Deniz kaplumbağası' },
      { id: 1551, en: 'tiger', tr: 'Kaplan' },
      { id: 1552, en: 'jungle', tr: 'Orman / Cangıl' },
      { id: 1553, en: 'rainforest', tr: 'Yağmur ormanı' },
      { id: 1554, en: 'ocean', tr: 'Okyanus' },
      { id: 1555, en: 'desert', tr: 'Çöl' },
      { id: 1556, en: 'woodlands', tr: 'Koruluk' },
      { id: 1557, en: 'rubbish', tr: 'Atık / Çöp' },
      { id: 1558, en: 'litter', tr: 'Çöpler' },
      { id: 1559, en: 'climate change', tr: 'İklim değişikliği' },
      { id: 1560, en: 'overfishing', tr: 'Aşırı avlanma' },
      { id: 1561, en: 'landslides', tr: 'Heyelanlar' },
      { id: 1562, en: 'floods', tr: 'Seller' },
      { id: 1563, en: 'urbanisation', tr: 'Kentsel gelişim' },
      { id: 1564, en: 'air pollution', tr: 'Hava kirliliği' },
      { id: 1565, en: 'famine', tr: 'Kıtlık' },
      { id: 1566, en: 'poverty', tr: 'Yoksulluk' },
      { id: 1567, en: 'extreme', tr: 'Aşırı' },
      { id: 1568, en: 'waste', tr: 'Atık' },
      { id: 1569, en: 'water usage', tr: 'Su kullanımı' },
      { id: 1570, en: 'shower', tr: 'Duş' },
      { id: 1571, en: 'leaks', tr: 'Sızıntılar' },
      { id: 1572, en: 'wool', tr: 'Yün' },
      { id: 1573, en: 'recycling', tr: 'Geri dönüşüm' },
      { id: 1574, en: 'river', tr: 'Nehir' },
      { id: 1575, en: 'forest', tr: 'Orman' },
      { id: 1576, en: 'geothermal energy', tr: 'Jeotermal enerji' },
      { id: 1577, en: 'groundwater', tr: 'Yeraltı suyu' },
      { id: 1578, en: 'whales', tr: 'Balinalar' },
      { id: 1579, en: 'dolphins', tr: 'Yunuslar' },
      { id: 1580, en: 'sea turtles', tr: 'Deniz kaplumbağaları' },
      { id: 1581, en: 'cheetah', tr: 'Çita' },
      { id: 1582, en: 'penguin', tr: 'Penguen' },
      { id: 1583, en: 'chimpanzee', tr: 'Şempanze' },
      { id: 1584, en: 'grasslands', tr: 'Çayırlar' },
      { id: 1585, en: 'penguin', tr: 'Penguen' },
      { id: 1586, en: 'chimpanzee', tr: 'Şempanze' },
      { id: 1587, en: 'panda', tr: 'Panda' },
      { id: 1588, en: 'Antarctica', tr: 'Antarktika' },
      { id: 1589, en: 'Brazil', tr: 'Brezilya' },
      { id: 1590, en: 'Africa', tr: 'Afrika' }
    ]
  },
  'LIFE IN THE UNIVERSE & FUTURE': {
    title: 'LIFE IN THE UNIVERSE & FUTURE',
    description: 'Evren ve gelecek teması için İngilizce ve Türkçe kelime eşleştirmeleri yap.',
    pairs: [
      { id: 1601, en: 'future technologies', tr: 'Geleceğin teknolojileri' },
      { id: 1602, en: 'space exploration', tr: 'Uzay keşfi' },
      { id: 1603, en: 'interplanetary travel', tr: 'Gezegenler arası yolculuk' },
      { id: 1604, en: 'astronaut', tr: 'Astronot' },
      { id: 1605, en: 'space station', tr: 'Uzay istasyonu' },
      { id: 1606, en: 'starship', tr: 'Yıldız gemisi' },
      { id: 1607, en: 'gravity', tr: 'Yerçekimi' },
      { id: 1608, en: 'zero gravity', tr: 'Ağırlıksız ortam' },
      { id: 1609, en: 'spaceship', tr: 'Uzay gemisi' },
      { id: 1610, en: 'rocket launch', tr: 'Roket fırlatması' },
      { id: 1611, en: 'planetary system', tr: 'Gezegen sistemi' },
      { id: 1612, en: 'galaxy', tr: 'Galaksi' },
      { id: 1613, en: 'asteroid belt', tr: 'Asteroit kuşağı' },
      { id: 1614, en: 'alien life', tr: 'Yabancı yaşam' },
      { id: 1615, en: 'artificial intelligence', tr: 'Yapay zeka' },
      { id: 1616, en: 'robotics', tr: 'Robotik' },
      { id: 1617, en: 'virtual reality', tr: 'Sanal gerçeklik' },
      { id: 1618, en: 'renewable energy', tr: 'Yenilenebilir enerji' },
      { id: 1619, en: 'sustainable future', tr: 'Sürdürülebilir gelecek' },
      { id: 1620, en: 'climate action', tr: 'İklim eylemi' }
    ]
  }
};

const teacherResources = {
  'LIFE IN NATURE': {
    audioScripts: {
      track15_1: {
        title: 'Track 15.1 (Page 115 - 2a)',
        instruction: 'Listen to the utterances from the digital story and notice the “w” and “x” sounds.',
        lines: [
          'Voice A: "It explained that pollution had been increasing over the past few decades."',
          'Voice B: "Exactly."',
          'Voice C: "That’s awesome!"'
        ]
      },
      track15_2: {
        title: 'Track 15.2 (Page 115 - 2b)',
        instruction: 'Listen and circle the “w” and “x” sounds.',
        sentences: [
          'We can lessen our water usage by taking shorter showers or fixing leaks at home.',
          'We must carefully use water and wind energy to prevent extreme environmental issues.'
        ]
      },
      track15_3: {
        title: 'Track 15.3 (Page 116 - 3c)',
        instruction: 'Listen and check your vocabulary answers.',
        answers: [
          'wood',
          'farmland',
          'groundwater',
          'geothermal energy',
          'river',
          'recycling',
          'natural gas',
          'jungle'
        ],
        extraWord: 'wool'
      },
      track15_4: {
        title: 'Track 15.4 (Page 118 - 5a)',
        instruction: 'Listen to Mrs Nature and fill in the blanks.',
        transcription: 'Many years ago, people (1) realized how much damage they had caused to nature. By the time scientists had discovered the effects of pollution, air and sea pollution had already increased. Factories (2) had produced too much rubbish, and people (3) hadn\'t recycled properly. Because of overhunting and overfishing, many species (4) had become endangered. A scientist said, "If we (5) had taken precautions, we would not have lost so much wildlife." A volunteer (6) reported that illegal hunting had been a big problem for years.'
      }
    },
    answerKey: {
      listeningWatching: {
        location: '✓ A school / digital media classroom touring global capitals',
        sentenceOrdering: [
          '3 › We should limit the use of materials like wool and wood.',
          '2 › I’ve even been using renewable energy at home.',
          '5 › If we don’t protect nature, it could cause famine and poverty in the future.',
          '4 › We should all care for our freshwater resources.',
          '1 › We can all make small changes to protect the planet’s future.',
          '6 › We should recycle more, reuse materials, and reduce the use of plastics.'
        ]
      },
      vocabulary: {
        photoMatching: {
          'Photo 1': 'e) wood',
          'Photo 2': 'h) farmland',
          'Photo 3': 'a) groundwater',
          'Photo 4': 'f) geothermal energy',
          'Photo 5': 'i) river',
          'Photo 6': 'd) recycling',
          'Photo 7': 'g) natural gas',
          'Photo 8': 'b) jungle'
        },
        extraWord: 'c) wool',
        gapFill: {
          1: 'rubbish',
          2: 'famine',
          3: 'overfishing',
          4: 'landslides',
          5: 'urbanisation',
          6: 'poverty',
          7: 'famine',
          8: 'air pollution'
        }
      },
      languageUse: {
        grammarFill: [
          'realized',
          'had produced',
          "hadn't recycled",
          'had become',
          'had taken',
          'reported'
        ]
      },
      reading: {
        topicsChecked: [
          'wind energy',
          'global warming',
          'natural resources',
          'recycling',
          'rainforests',
          'deforestation',
          'wildlife'
        ],
        categorizationChart: {
          globalProblems: [
            'Global warming',
            'Deforestation',
            'Pollution',
            'Waste'
          ],
          naturalResources: [
            'Sand',
            'Wind energy',
            'Freshwater',
            'Wood',
            'Geothermal energy',
            'Solar power'
          ]
        },
        questionMatching: {
          1: 'b',
          2: 'd',
          3: 'a',
          4: 'c'
        }
      },
      pictureStripStory: {
        mainProblem: 'Animals losing their homes due to deforestation.',
        cleanWater: 'Clean water is a very important natural resource, and we must not waste a single drop.',
        pollutionEffect: 'Pollution has destroyed many freshwater sources over the past few decades.',
        action: 'They decide to start cleaning up litter, reducing paper consumption, and recycling.',
        mood: 'They feel motivated and proud to work as a team to make a difference.'
      },
      practise: {
        gapFill: [
          'rainforests',
          'chimpanzee',
          'grasslands',
          'cheetah',
          'ocean',
          'penguin',
          'woodlands',
          'panda'
        ],
        table: [
          {
            animal: 'Chimpanzee',
            habitat: 'Rainforests',
            country: 'Brazil',
            endangered: 'Yes',
            globalProblem: 'Deforestation / Habitat loss'
          },
          {
            animal: 'Cheetah',
            habitat: 'Grasslands',
            country: 'Africa',
            endangered: 'Yes',
            globalProblem: 'Habitat loss / Illegal hunting'
          },
          {
            animal: 'Penguin',
            habitat: 'Ocean',
            country: 'Antarctica',
            endangered: 'Yes',
            globalProblem: 'Global warming / Melting ice'
          },
          {
            animal: 'Panda',
            habitat: 'Woodlands',
            country: 'China',
            endangered: 'Yes',
            globalProblem: 'Deforestation / Climate change'
          }
        ]
      },
      tongueTwisters: [
        'Whales whistle when water waves.',
        'Windy weather wakes wild wolves.',
        'Xavier’s ox walks in wet woods.',
        'Xavier’s fox explores exotic wetlands.'
      ]
    }
  },
  'LIFE IN THE UNIVERSE & FUTURE': {
    audioScripts: {
      track16_1: {
        title: 'Track 16.1 (Page 131 - 2a)',
        instruction: 'Listen to the utterances from the digital story and notice the “y” and “z” sounds.',
        lines: [
          'Voice A: "You have been displaced approximately 250 years into the future."',
          'Voice B: "Over the past century, humanity discovered not only signs of life but intelligent civilisations in interplanetary systems."',
          'Voice C: "In the years ahead, young space voyagers will journey through zero gravity zones."'
        ]
      },
      track16_2: {
        title: 'Track 16.2 (Page 131 - 2b)',
        instruction: 'Listen and circle the “y” and “z” sounds.',
        sentences: [
          'Zoe, the astronaut, zoomed through the zone with her spacecraft.',
          'The new space vehicle is designed to travel in zero gravity.',
          'In the years ahead, young space voyagers will journey through zero gravity zones.'
        ]
      },
      track16_3: {
        title: 'Track 16.3 (Page 132 - 3c)',
        instruction: 'Listen and check your vocabulary answers.',
        answers: [
          'starship',
          'astronaut',
          'space station',
          'unidentified flying object (UFO)',
          'solar panels',
          'artificial intelligence (AI)',
          'virtual reality (VR)',
          'augmented reality (AR) glasses',
          'atmosphere',
          'faster-than-light (FTL)'
        ],
        extraWord: 'aliens'
      },
      track16_4: {
        title: 'Track 16.4 (Page 134 - 5a)',
        instruction: 'Listen to Mr Star and complete the blanks.',
        transcription: 'A group of astronauts launched into space on a new spaceship. They had trained for years, and by the time they arrived at the space station, they had already captured amazing images of asteroids. The spaceship shone brightly as it took off from Earth. If they (1) had forgotten anything, they (2) wouldn\'t have been able to complete their mission. Luckily, everything was prepared. Their mission was to explore the surface of a new planet. By the end of the week, they (3) will have landed on it. Some missions are uncrewed, but this one was crewed. As they revolved around the planet, they saw how it rotated slowly. If scientists (4) had discovered it earlier, humans (5) might have been there by now. Space exploration (6) has changed life completely. If astronauts had never launched into space, we wouldn\'t have known how beautiful the universe is!'
      }
    },
    answerKey: {
      listeningWatching: {
        coreTheme: '✓ a. life in the universe & future',
        pictureRecognition: '✓ Life in the universe & future',
        pictureDescription: 'They are inside a space station / future classroom.',
        sentenceOrdering: [
          '3 › The idea of “flying saucers” had always been a misunderstanding.',
          '5 › If humankind hadn’t moved beyond earthbound perspectives, we might never have coexisted with them.',
          '2 › If I hadn’t landed at Far Away Skyline, I would never have seen this future.',
          '1 › Everyone I know will have gone.',
          '4 › Perhaps you wouldn’t have believed it.',
          '6 › If this unplanned accident hadn’t happened, you might have designed something like this in your lifetime.'
        ]
      },
      vocabulary: {
        photoMatching: {
          'Photo 1': 'a) starship',
          'Photo 2': 'h) artificial intelligence (AI)',
          'Photo 3': 'b) astronaut',
          'Photo 4': 'c) space station',
          'Photo 5': 'd) unidentified flying object (UFO)',
          'Photo 6': 'g) solar panels',
          'Photo 7': 'f) virtual reality (VR)',
          'Photo 8': 'i) augmented reality (AR) glasses',
          'Photo 9': 'j) atmosphere',
          'Photo 10': 'k) faster-than-light (FTL)'
        },
        extraWord: 'e) aliens',
        gapFill: {
          1: 'celestial',
          2: 'life signs',
          3: 'interplanetary',
          4: 'space station',
          5: 'smart'
        }
      },
      crossword: [
        'TELESCOPE',
        'SPACECRAFT',
        'SPACESTATION',
        'SHUTTLE',
        'MISSION',
        'CAPSULE',
        'EXPLORATION',
        'SOLARPANELS',
        'SPACEWALK',
        'ASTRONAUT',
        'DISCOVERY'
      ],
      languageUse: {
        grammarFill: [
          'had forgotten',
          "wouldn't have been",
          'will have landed',
          'had discovered',
          'might have been',
          'has changed'
        ],
        techDescriptions: {
          'Photo 1 (Solar Panels)': 'You can use solar panels to generate clean electricity from sunlight.',
          'Photo 2 (VR Headset)': 'You can use VR headsets to play interactive games and run training simulations.',
          'Photo 3 (AI/Smart Interface)': 'You can use artificial intelligence to monitor health parameters and automate navigation.'
        }
      },
      grammarPractice: [
        'will have discovered',
        'would not have forgotten',
        'will live',
        'will have visited',
        'would not have flown',
        'had known',
        'will have helped',
        'had taken',
        'would have gotten',
        "hadn't faced",
        'had known',
        'will travel'
      ],
      reading: {
        checkedItems: [
          'Asteroid',
          'Space station',
          'Starship',
          'NASA'
        ],
        categorizationChart: {
          spaceVehicles: [
            'Starship (Starlight Voyager)',
            'Space capsule',
            'Space shuttle',
            'Lander',
            'Flying saucer',
            'Spaceship'
          ],
          spaceLocations: [
            'Distant asteroid',
            'Planet surface',
            'Space station',
            'Moon',
            'Stars'
          ],
          spaceTechnologyObjects: [
            'Autopilot',
            'Airlock',
            'Rare mineral',
            'Engine',
            'Unidentified flying object (UFO)'
          ]
        },
        matching: {
          1: 'c',
          2: 'b',
          3: 'e',
          4: 'a',
          5: 'd'
        }
      },
      culture: {
        recentDevelopments: [
          'Artemis 1',
          'James Webb Space Telescope',
          'Mars Exploration',
          'Space Tourism',
          'Türkiye’s Space Program'
        ]
      },
      pictureStripStory: {
        mainProblem: 'He is teaching about the future of space technology and exploration.',
        futureWish: 'She wants to visit Mars or travel to a galaxy far away.',
        dream: 'She has always dreamed about visiting other planets and wants to be part of the future.',
        imagination: 'He imagines floating in space, seeing the stars up close, and exploring planets like Jupiter.',
        feeling: 'She feels "over the moon" with happiness and becomes lost in her imagination.'
      },
      practise: {
        gapFill: [
          'aliens',
          'life signs',
          'telecommuting',
          'interactive games'
        ],
        extraWord: 'discovery',
        table: [
          {
            category: 'LIFE IN THE UNIVERSE',
            items: ['Aliens / Strange creatures', 'Extraterrestrial life signs', 'Deep space colony building', 'Interplanetary exploration']
          },
          {
            category: 'FUTURE LIFESTYLES',
            items: ['Smart homes managed by AI', 'Wearable technology elements', 'Telecommuting / Remote working', 'Advanced Virtual Reality (VR) environments']
          }
        ],
        tongueTwister: 'If the astronauts had analysed the zero-gravity zone more carefully, they might have avoided the system error yesterday.'
      }
    }
  }
};

const themeButtons = document.getElementById('themeButtons');
const themeSidebar = document.getElementById('themeSidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const themeTitle = document.getElementById('themeTitle');
const themeDescription = document.getElementById('themeDescription');
const englishList = document.getElementById('englishList');
const turkishList = document.getElementById('turkishList');
const matchedList = document.getElementById('matchedList');
const scoreSpan = document.getElementById('score');
const triesSpan = document.getElementById('tries');
const messageText = document.getElementById('message');
const restartButton = document.getElementById('restartButton');

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

let currentTheme = 'SCHOOL LIFE';
let currentPairs = [];
let shuffledEnglish = [];
let shuffledTurkish = [];
let visiblePairs = [];
let remainingPairs = [];
let selectedCard = null;
let selectedSide = null;
let matchedCount = 0;
let score = 0;
let tries = 0;
const visiblePairCount = 8;

const themeBackgroundClassMap = {
  'SCHOOL LIFE': 'theme-school-life',
  'CLASSROOM LIFE': 'theme-classroom-life',
  'PERSONAL LIFE': 'theme-personal-life',
  'FAMILY LIFE': 'theme-family-life',
  'NEIGHBOURHOOD & CITY': 'theme-neighbourhood-city',
  'LIFE IN THE WORLD': 'theme-life-in-the-world',
  'LIFE IN NATURE': 'theme-life-in-nature',
  'LIFE IN THE UNIVERSE': 'theme-life-in-the-universe',
  'SCHOOL LIFE & EDUCATION': 'theme-school-life-education',
  'CLASSROOM LIFE & LEARNING': 'theme-classroom-life-learning',
  'PERSONAL LIFE & WELL-BEING': 'theme-personal-life-wellbeing',
  'FAMILY LIFE & HOME': 'theme-family-life-home',
  'LIFE IN THE NEIGHBOURHOOD & CITY & SOCIAL LIFE': 'theme-life-in-neighbourhood-city-social-life',
  'LIFE IN THE WORLD & CULTURE': 'theme-life-in-world-culture',
  'LIFE IN NATURE 2': 'theme-life-in-nature-2',
  'LIFE IN THE UNIVERSE & FUTURE': 'theme-life-in-universe-future'
};

const themeBackgroundClasses = Object.values(themeBackgroundClassMap);

const themeBackgrounds = {
  'SCHOOL LIFE': 'radial-gradient(circle at top, #4c7bd8 0%, #10294c 55%, #081421 100%)',
  'CLASSROOM LIFE': 'linear-gradient(135deg, #8a4c16 0%, #b15f1f 42%, #3a2b1e 100%)',
  'PERSONAL LIFE': 'linear-gradient(180deg, #b14d75 0%, #8f2f54 38%, #3f1934 100%)',
  'FAMILY LIFE': 'radial-gradient(circle at top left, #cd7422 0%, #8f4b13 45%, #3b220d 100%)',
  'NEIGHBOURHOOD & CITY': 'radial-gradient(circle at top, #3864b8 0%, #213b62 45%, #0d1627 100%)',
  'LIFE IN THE WORLD': 'radial-gradient(circle at top left, #2d7c4b 0%, #16452e 50%, #07150d 100%)',
  'LIFE IN NATURE': 'radial-gradient(circle at top, #2f6e2d 0%, #173f1c 55%, #08110b 100%)',
  'LIFE IN THE UNIVERSE': 'radial-gradient(circle at top, #1c1e47 0%, #2f1d5d 35%, #000 100%)',
  'SCHOOL LIFE & EDUCATION': 'linear-gradient(135deg, #1d7ac8 0%, #1d4c8c 45%, #0f1834 100%)',
  'CLASSROOM LIFE & LEARNING': 'linear-gradient(135deg, #d58934 0%, #b15d27 40%, #43314a 100%)',
  'PERSONAL LIFE & WELL-BEING': 'radial-gradient(circle at top, #49b793 0%, #1d6355 45%, #0e2825 100%)',
  'FAMILY LIFE & HOME': 'linear-gradient(135deg, #df8c2d 0%, #a5521d 45%, #47240f 100%)',
  'LIFE IN THE NEIGHBOURHOOD & CITY & SOCIAL LIFE': 'linear-gradient(135deg, #db7d31 0%, #b84d5d 45%, #2d1f40 100%)',
  'LIFE IN THE WORLD & CULTURE': 'radial-gradient(circle at top, #27458d 0%, #304d79 40%, #121d2f 100%)',
  'LIFE IN NATURE 2': 'radial-gradient(circle at top, #2f6e2d 0%, #173f1c 55%, #08110b 100%)',
  'LIFE IN THE UNIVERSE & FUTURE': 'radial-gradient(circle at top, #1c1e47 0%, #2f1d5d 35%, #000 100%)'
};

function applyThemeBackground(themeKey) {
  document.body.classList.remove(...themeBackgroundClasses);
  const themeClass = themeBackgroundClassMap[themeKey];
  if (themeClass) {
    document.body.classList.add(themeClass);
  }
  // Fallback: set inline background directly to ensure gradients appear
  const bg = themeBackgrounds[themeKey] || '';
  document.body.style.background = bg;
}

function shuffle(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function updateStatus() {
  scoreSpan.textContent = score;
  triesSpan.textContent = tries;
}

function renderThemeButtons() {
  themeButtons.innerHTML = '';
  Object.keys(themes).forEach(key => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-button';
    button.textContent = key;
    if (key === currentTheme) button.classList.add('active');
    button.addEventListener('click', () => {
      // Change theme but do not auto-close the sidebar; user closes it manually
      setTheme(key);
    });
    themeButtons.appendChild(button);
  });
}

function setTheme(themeKey) {
  currentTheme = themeKey;
  themeTitle.textContent = themes[themeKey].title;
  themeDescription.textContent = themes[themeKey].description;
  document.querySelectorAll('.theme-button').forEach(button => {
    button.classList.toggle('active', button.textContent === themeKey);
  });
  applyThemeBackground(themeKey);
  startGame();
}

function showMessage(text, type = 'normal') {
  messageText.textContent = text;
  if (type === 'success') {
    messageText.style.color = '#7dcf94';
  } else if (type === 'error') {
    messageText.style.color = '#ff8a8a';
  } else {
    messageText.style.color = 'var(--muted)';
  }
}

function playTone(frequency, duration, type = 'sine') {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0, audioContext.currentTime);
  gain.gain.linearRampToValueAtTime(0.18, audioContext.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration / 1000);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration / 1000);
}

function successSoundEffect() {
  playTone(1000, 50, 'square');
  setTimeout(() => playTone(1400, 100, 'triangle'), 120);
}

function errorSoundEffect() {
  playTone(180, 120, 'sine');
  setTimeout(() => playTone(120, 90, 'sine'), 140);
}

function createCard(pair, side) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'card';
  card.textContent = side === 'english' ? pair.en : pair.tr;
  card.dataset.id = pair.id;
  card.dataset.side = side;
  card.addEventListener('click', () => handleCardClick(card));
  return card;
}

function renderBoard() {
  englishList.innerHTML = '';
  turkishList.innerHTML = '';

  shuffledEnglish.forEach(pair => englishList.appendChild(createCard(pair, 'english')));
  shuffledTurkish.forEach(pair => turkishList.appendChild(createCard(pair, 'turkish')));
}

function resetSelection() {
  selectedCard?.classList.remove('selected');
  selectedCard = null;
  selectedSide = null;
}

function getExampleSentence(pair) {
  if (pair.example) {
    return `Örnek: ${pair.example}`;
  }

  const word = pair.en?.trim();
  if (!word) {
    return 'Örnek: Kısa bir örnek cümle görünecek.';
  }

  const normalized = word.toLowerCase();
  const hasSpace = normalized.includes(' ') || normalized.includes('-') || normalized.includes("'") || normalized.includes('…');
  const isNumber = /^(one|two|three|four|five|first|second|third|fourth|fifth|tenth|twentieth|thirtieth|fortieth|fiftieth)/.test(normalized);
  const isVerb = /^(take|bring|discuss|complete|present|keep|respect|copy|monitor|organise|decorate|do|make|send|obey|raise|chew|stand|pick|plant|hold|try|protect|destroy|exist|prepare|boil|cook|put|mix|bake|serve|take care|come up|be in charge|try it|can|cannot|can't|don't|i'm|it's)/.test(normalized);
  const isAdjective = /^(brave|cool|helpful|polite|clever|kind|friendly|tidy|shy|lazy|funny|happy|careful|creative|hardworking|sweet|serious|quiet|nervous|noisy|rude|worried|naughty|old|young|strong|weak|attractive|ugly|short|tall|slim|chubby|plump|curly|straight|wavy|blonde|brunette|fair|dark|medium)/.test(normalized);

  let category = 'noun';
  if (isNumber) {
    category = 'number';
  } else if (hasSpace) {
    category = 'phrase';
  } else if (isVerb) {
    category = 'verb';
  } else if (isAdjective) {
    category = 'adjective';
  }

  const seed = Math.abs((pair.id ?? 0) + word.length + normalized.length);
  const templates = {
    noun: [
      `I spotted the ${word} during lunch and it made me smile.`,
      `Our teacher mentioned the ${word} today like it was a secret.`,
      `The ${word} became the star of the lesson.`,
      `We talked about the ${word} as if it were a treasure.`,
      `My friend brought a ${word} to school and everyone looked amazed.`,
      `The ${word} appeared in our homework and surprised us all.`,
      `I wrote the ${word} in my notebook and circled it twice.`
    ],
    verb: [
      `Please ${word} carefully, because this matters.`,
      `We often ${word} together in class and laugh about it.`,
      `I want to ${word} with my friends before the bell rings.`,
      `Can you ${word} for me today, just this once?`,
      `They ${word} every morning like it is part of their routine.`,
      `We ${word} after school and make the moment feel special.`,
      `She decided to ${word} right away and surprised everyone.`
    ],
    adjective: [
      `She looks very ${word} today, almost like a movie character.`,
      `That idea sounds ${word} in the best possible way.`,
      `The room feels ${word} after we opened the window.`,
      `My teacher is ${word} and always full of energy.`,
      `This place is ${word} in a way I never expected.`,
      `The weather seems ${word} today, as if spring arrived early.`,
      `He seems ${word} and cheerful, even on a busy day.`
    ],
    phrase: [
      `We used ${word} in class and it made the lesson brighter.`,
      `I heard ${word} during the lesson and immediately wanted to remember it.`,
      `Can you say ${word} again, because it sounded amazing?`,
      `The expression ${word} is so useful that I want to keep it.`,
      `Our teacher explained ${word} clearly and made everyone nod.`,
      `I wrote ${word} in my notebook with a little star beside it.`,
      `The class discussed ${word} today with a lot of excitement.`
    ],
    number: [
      `We counted ${word} in class and everyone cheered.`,
      `The answer was ${word}, and it felt like a victory.`,
      `I wrote ${word} on the page with a big smile.`,
      `We learned ${word} today and it stuck in my mind.`,
      `The teacher asked for ${word} and the room went quiet.`
    ]
  };

  const options = templates[category];
  const picked = options[Math.abs(seed) % options.length];
  return `Örnek: ${picked}`;
}

function addMatchToList(pair) {
  const item = document.createElement('li');
  item.innerHTML = `
    <span class="matched-item__pair">${pair.en} — ${pair.tr}</span>
    <span class="matched-item__example">${getExampleSentence(pair)}</span>
  `;
  matchedList.appendChild(item);
}

function handleMatch(cardA, cardB) {
  const matchedPair = currentPairs.find(pair => pair.id.toString() === cardA.dataset.id);
  addMatchToList(matchedPair);
  visiblePairs = visiblePairs.filter(pair => pair.id !== matchedPair.id);

  if (remainingPairs.length > 0) {
    visiblePairs.push(remainingPairs.shift());
  }

  shuffledEnglish = shuffle([...visiblePairs]);
  shuffledTurkish = shuffle([...visiblePairs]);

  cardA.remove();
  cardB.remove();
  score += 10;
  matchedCount += 1;
  successSoundEffect();
  showMessage('Doğru seçim! Güzel ilerliyorsun.', 'success');
  resetSelection();
  renderBoard();

  if (matchedCount === currentPairs.length) {
    showMessage('Tebrikler! Tüm kelimeleri doğru eşleştirdin.', 'success');
  }
}

function handleMismatch(cardA, cardB) {
  errorSoundEffect();
  showMessage('Yanlış eşleştirme. Tekrar dene.', 'error');
  setTimeout(() => {
    cardA.classList.remove('selected');
    cardB.classList.remove('selected');
    resetSelection();
  }, 800);
}

function handleCardClick(card) {
  if (card.classList.contains('matched')) {
    return;
  }

  const side = card.dataset.side;
  if (!selectedCard) {
    selectedCard = card;
    selectedSide = side;
    card.classList.add('selected');
    showMessage('Diğer taraftan bir kelime seç.', 'normal');
    return;
  }

  if (selectedCard === card) {
    return;
  }

  if (side === selectedSide) {
    selectedCard.classList.remove('selected');
    selectedCard = card;
    selectedCard.classList.add('selected');
    selectedSide = side;
    showMessage('Karşı taraftan bir kelime seçmelisin.', 'normal');
    return;
  }

  card.classList.add('selected');
  tries += 1;
  const firstId = selectedCard.dataset.id;
  const secondId = card.dataset.id;

  if (firstId === secondId) {
    handleMatch(selectedCard, card);
    resetSelection();
  } else {
    handleMismatch(selectedCard, card);
  }
  updateStatus();
}

function startGame() {
  currentPairs = themes[currentTheme].pairs;
  const shuffledPairs = shuffle(currentPairs);
  const visibleLimit = Math.min(visiblePairCount, shuffledPairs.length);
  visiblePairs = shuffledPairs.slice(0, visibleLimit);
  remainingPairs = shuffledPairs.slice(visibleLimit);
  shuffledEnglish = shuffle([...visiblePairs]);
  shuffledTurkish = shuffle([...visiblePairs]);
  selectedCard = null;
  selectedSide = null;
  matchedCount = 0;
  score = 0;
  tries = 0;
  matchedList.innerHTML = '';
  updateStatus();
  showMessage('Hazır mısın? Eşleştirmeye başla!');
  renderBoard();
}

if (sidebarToggle && themeSidebar) {
  sidebarToggle.addEventListener('click', () => {
    const isOpen = themeSidebar.classList.toggle('is-open');
    sidebarToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

renderThemeButtons();
setTheme(currentTheme);
// Open the theme sidebar by default when the page loads; user may close it with the toggle button
if (themeSidebar && sidebarToggle) {
  themeSidebar.classList.add('is-open');
  sidebarToggle.setAttribute('aria-expanded', 'true');
}
restartButton.addEventListener('click', startGame);
