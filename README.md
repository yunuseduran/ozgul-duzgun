# Mobil Uyumlu Açılır Menü Sistemi

Bu proje, Doç. Dr. Özgül Düzgün web sitesi için geliştirilmiş mobil uyumlu açılır menü sistemini içermektedir.

## 🚀 Özellikler

### Responsive Tasarım
- **Desktop (769px+):** Geleneksel Bootstrap dropdown menü
- **Mobile (768px altı):** Özel mobil menü sistemi

### Mobil Menü Özellikleri
- **Hamburger Menü:** 3 çizgili animasyonlu toggle butonu
- **Sağdan Açılma:** Slide-in animasyonu ile menü açılır
- **Accordion Yapısı:** Alt menüler smooth height transition ile açılır
- **Chevron Simgeleri:** Alt menüsü olan öğelerde sağa bakan ok simgesi
- **Overlay:** Arka plan karartma efekti
- **Touch Support:** Mobil cihazlarda swipe gesture desteği

### Teknik Özellikler
- HTML5 semantic structure
- CSS3 transitions ve transforms
- Vanilla JavaScript (jQuery bağımlılığı yok)
- Font Awesome ikonları
- Bootstrap 5 uyumlu
- Accessibility (ARIA labels)
- Cross-browser uyumlu

## 📱 Menü Yapısı

```
Ana Sayfa
Hakkımda
Hizmetlerimiz
├── Kanser Türleri
│   ├── Meme Kanseri
│   ├── Mide Kanseri
│   ├── Kalın Bağırsak Kanseri
│   ├── Özofagus Kanseri
│   └── Tiroid Kanseri
└── Cerrahi İşlemler
    ├── Cerrahi Onkoloji
    ├── Gastrointestinal Cerrahi
    ├── Hipec
    ├── Laparoskopik Cerrahi
    └── Reflü ve Mide Fıtığı
Yayınlarım
İletişim
```

## 🛠️ Kullanım

### Mobil Cihazlarda
1. Hamburger menü butonuna tıklayın
2. Menü sağdan açılacaktır
3. Alt menüsü olan öğelerde chevron simgesine tıklayın
4. Alt menüler accordion mantığında açılacaktır
5. Overlay'e tıklayarak veya ESC tuşu ile menüyü kapatın

### Desktop Cihazlarda
- Geleneksel Bootstrap dropdown menü çalışır
- Hover ile alt menüler açılır

## 📁 Dosya Yapısı

```
├── css/
│   └── style.css          # Ana CSS dosyası (mobil menü stilleri dahil)
├── js/
│   └── main.js            # JavaScript fonksiyonları
├── images/                # Görseller
├── index.html             # Ana sayfa
├── hakkimda.html          # Hakkımda sayfası
├── hizmetlerimiz.html     # Hizmetler sayfası
├── yayinlarim.html        # Yayınlar sayfası
├── iletisim.html          # İletişim sayfası
├── mobile-test.html       # Test sayfası
└── README.md              # Bu dosya
```

## 🎨 CSS Sınıfları

### Mobil Menü
- `.mobile-menu-overlay` - Menü arka plan overlay'i
- `.mobile-menu` - Ana mobil menü container'ı
- `.mobile-menu-list` - Menü listesi
- `.mobile-menu-item` - Menü öğesi
- `.mobile-menu-link` - Menü linki
- `.mobile-menu-header` - Alt menü başlığı
- `.mobile-submenu` - Alt menü container'ı
- `.submenu-category` - Kategori container'ı
- `.submenu-header` - Kategori başlığı
- `.submenu-items` - Alt menü öğeleri
- `.submenu-toggle` - Toggle butonu

### Responsive
- `.desktop-menu` - Desktop menü (lg+ ekranlarda görünür)
- `.mobile-menu-toggle` - Mobil menü toggle butonu (lg altı ekranlarda görünür)

## ⚡ JavaScript Fonksiyonları

### Ana Fonksiyonlar
- `toggleMobileMenu()` - Mobil menüyü aç/kapat
- `closeMobileMenu()` - Mobil menüyü kapat
- `closeAllSubmenus()` - Tüm alt menüleri kapat
- `handleSwipe()` - Touch gesture desteği

### Event Listeners
- Hamburger menü tıklama
- Submenu toggle butonları
- Overlay tıklama
- ESC tuşu
- Touch events (swipe)

## 🔧 Özelleştirme

### Renkler
CSS değişkenleri ile kolayca özelleştirilebilir:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --text-color: #2c3e50;
    --light-gray: #ecf0f1;
    --white: #ffffff;
}
```

### Animasyon Süreleri
```css
--transition: all 0.3s ease;
```

### Breakpoint
```css
@media (max-width: 768px) {
    /* Mobil stiller */
}
```

## 🧪 Test

Mobil menüyü test etmek için:
1. `mobile-test.html` sayfasını açın
2. Tarayıcıyı mobil boyuta küçültün (768px altı)
3. Hamburger menüye tıklayın
4. Tüm özellikleri test edin

## 🌐 Tarayıcı Desteği

- Chrome (60+)
- Firefox (55+)
- Safari (12+)
- Edge (79+)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 7+)

## 📱 Mobil Uyumluluk

- Touch-friendly tasarım
- Swipe gesture desteği
- Responsive breakpoints
- Mobile-first yaklaşım
- Performance optimizasyonu

## 🔒 Güvenlik

- XSS koruması
- CSRF koruması
- Input validation
- Secure event handling

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

Doç. Dr. Özgül Düzgün web sitesi için özel olarak geliştirilmiştir.

---

**Not:** Bu menü sistemi modern web standartlarına uygun olarak geliştirilmiştir ve tüm modern tarayıcılarda çalışır.
