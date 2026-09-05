# QA Portfolio - Automation Testing with Playwright

Project ini adalah portofolio automation testing menggunakan **Playwright (JavaScript)**
dengan target aplikasi demo [Saucedemo](https://www.saucedemo.com), diimplementasikan
dengan pola **Page Object Model (POM)**.

## Fitur yang Dites
- **Login**: valid user, locked out user, wrong password, empty field
- **Cart**: add/remove product, badge counter, cart consistency
- **Checkout**: form validation, order completion, price calculation

## Tech Stack
- Playwright (JavaScript)
- Page Object Model pattern
- GitHub Actions (CI)

## Struktur Project
```
qa-portfolio-playwright/
├── pages/              # Page Object classes
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── tests/               # Test specs
│   ├── login.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
├── .github/workflows/   # CI config
└── playwright.config.js
```

## Cara Menjalankan
```bash
# install dependencies
npm install

# install browser
npx playwright install

# jalankan semua test
npm test

# jalankan dengan browser terlihat (headed mode)
npm run test:headed

# jalankan dengan Playwright UI mode (interaktif)
npm run test:ui

# lihat report hasil test
npm run report
```

## Continuous Integration
Test otomatis berjalan setiap ada push/pull request ke branch `main` via GitHub Actions.
Report hasil test bisa didownload dari tab **Actions** di repo ini.

## Test Coverage
| Area | Jumlah Test Case |
|---|---|
| Login | 4 |
| Cart | 4 |
| Checkout | 3 |

## Author
QA Portfolio Project - Manual Testing → Automation Testing progression.
