# Wedding Website Template - PRD

## Original Problem Statement
Uživatel požaduje načtení šablony svatebního webu z GitHubu a opravu všech chyb. Klíčové požadavky:
- Opravit chyby ve stylizaci, vykreslování a responzivitě
- Modernizovat design webu (světlé, moderní svatební barvy)
- Nahradit veškeré texty anglickými placeholdery
- Nahradit fotografie za volně použitelné svatební placeholdery
- Dopsat testy pro celou aplikaci
- Připravit šablonu k prodeji na Etsy s návodem pro zákazníky
- Konfigurace v jednom souboru
- Připravit finální ZIP balíček

## Tech Stack
- **Frontend:** React 18, Vite 5
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Testing:** Vitest, React Testing Library
- **Build:** Vite

## ✅ Completed Features (Feb 2025)

### Core Features
- [x] Plně responzivní design
- [x] Ochrana heslem
- [x] 5 barevných témat (sage, blush, dustyBlue, gold, lavender)
- [x] Dynamický přepínač témat
- [x] Centralizovaná konfigurace v `wedding.config.js`
- [x] Smooth scroll navigace
- [x] Framer Motion animace

### Testing
- [x] 51 automatizovaných testů
- [x] Pokrytí hlavních komponent

### Documentation & Distribution
- [x] README.md s instrukcemi
- [x] ReadMe.pdf pro zákazníky (user guide)
- [x] GitHub ZIP balíček (6.9 MB)
- [x] Etsy ZIP balíček (14 MB) s produkčním buildem

## Key Files
- `/app/src/config/wedding.config.js` - Hlavní konfigurační soubor
- `/app/src/config/themes.js` - Definice barevných témat
- `/app/release/wedding-website-github.zip` - Pro GitHub
- `/app/release/wedding-website-etsy.zip` - Pro Etsy prodej

## ZIP Balíčky

### wedding-website-github.zip (6.9 MB)
Pro uložení na GitHub - obsahuje:
- Kompletní zdrojový kód
- package.json, package-lock.json
- Konfigurační soubory
- README.md
- .gitignore
- Testy

### wedding-website-etsy.zip (14 MB)
Pro prodej na Etsy - obsahuje:
- Kompletní zdrojový kód
- **dist/** složka (produkční build připravený k nahrání)
- **ReadMe.pdf** (uživatelský návod)
- README.md

## Backlog / Future Enhancements
- [ ] Přidat více jazykových verzí
- [ ] RSVP formulář přímo na stránce
- [ ] Countdown timer komponenta
- [ ] Galerie fotografií s lightboxem
- [ ] Online hudební playlist
