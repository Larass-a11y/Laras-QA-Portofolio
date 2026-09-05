# Test Case Documentation

Dokumentasi lengkap seluruh test case automation dalam project ini, dikelompokkan berdasarkan fitur.
Target aplikasi: [Saucedemo](https://www.saucedemo.com)

## Login Feature (`tests/login.spec.js`)

| ID | Test Case | Status |
|---|---|---|
| TC-01 | Login berhasil dengan `standard_user` | ✅ Pass |
| TC-02 | Login gagal dengan `locked_out_user` | ✅ Pass |
| TC-03 | Login gagal dengan password salah | ✅ Pass |
| TC-04 | Login gagal dengan field kosong | ✅ Pass |

## Cart Feature (`tests/cart.spec.js`)

| ID | Test Case | Status |
|---|---|---|
| TC-05 | Tambah 1 produk ke cart, badge counter update | ✅ Pass |
| TC-06 | Tambah lebih dari 1 produk, badge counter sesuai jumlah | ✅ Pass |
| TC-07 | Hapus produk dari halaman Products, badge hilang | ✅ Pass |
| TC-08 | Item yang ditambahkan muncul di halaman Cart | ✅ Pass |

## Checkout Feature (`tests/checkout.spec.js`)

| ID | Test Case | Status |
|---|---|---|
| TC-09 | Checkout gagal jika form kosong | ✅ Pass |
| TC-10 | Checkout berhasil dengan data valid, order complete | ✅ Pass |
| TC-11 | Total price di summary sesuai (subtotal + tax) | ✅ Pass |

## Remove from Cart (`tests/remove-from-cart.spec.js`)

| ID | Test Case | Status |
|---|---|---|
| TC-12 | Pengurangan badge cart ketika item dihapus dari halaman Cart | ✅ Pass |

## Sorting Feature (`tests/sort-product.spec.js`)

| ID | Test Case | Status |
|---|---|---|
| TC-13 | Sorting produk berdasarkan nama A-Z | ✅ Pass |
| TC-14 | Sorting produk berdasarkan nama Z-A | ✅ Pass |
| TC-15 | Sorting produk berdasarkan harga tertinggi ke terendah | ✅ Pass |
| TC-16 | Sorting produk berdasarkan harga terendah ke tertinggi | ✅ Pass |

## Navigation Menu (`tests/navigation-menu.spec.js`)

| ID | Test Case | Status |
|---|---|---|
| TC-17 | User logout dari halaman utama | ✅ Pass |
| TC-18 | User kembali ke halaman produk melalui menu All Items | ✅ Pass |
| TC-19 | Cart kembali kosong setelah klik Reset App State | ✅ Pass |

## Product Detail (`tests/detail-product.spec.js`)

| ID | Test Case | Status |
|---|---|---|
| TC-20 | User menambahkan produk langsung dari halaman detail produk | ✅ Pass |

---

## Ringkasan

| Kategori | Jumlah Test Case |
|---|---|
| Login | 4 |
| Cart | 4 |
| Checkout | 3 |
| Remove from Cart | 1 |
| Sorting | 4 |
| Navigation Menu | 3 |
| Product Detail | 1 |
| **Total** | **20** |

## Known Issues / Bug Findings

### Reset App State - UI tidak re-render otomatis

**Steps to Reproduce:**
1. Login, tambahkan produk ke cart
2. Buka halaman Cart
3. Klik menu burger → Reset App State (tanpa berpindah halaman)

**Expected:** Cart langsung kosong tanpa perlu refresh manual
**Actual:** Data di Local Storage sudah kosong (terverifikasi via DevTools), tapi tampilan cart masih menampilkan item lama sampai halaman di-refresh atau dinavigasi ulang

**Severity:** Low/Minor (data konsisten, murni masalah UX/re-render)
**Environment:** Chrome, saucedemo.com
**Catatan:** Behavior ini konsisten terjadi jika Reset App State diklik dari halaman Cart. Jika diklik dari halaman Products, tampilan langsung update tanpa perlu refresh.
