# Instagram DM Bot

## 📌 Tentang
Bot ini adalah bot otomatis untuk membalas DM Instagram menggunakan API.

## ⚙️ Fitur
- Membalas DM dengan respons yang sudah diatur
- Bisa dikombinasikan dengan AI (seperti OpenAI API)
- Log aktivitas DM yang diterima dan dikirim

## 🚀 Instalasi
### 1. Clone Repository
```bash
git clone [https://github.com/0xBangors/instagram-bot]
cd instagram-bot
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Buat File `.env`
Buat file `.env` di dalam folder instagram-bot, lalu isi dengan:
```
INSTAGRAM_USERNAME=ig_username
INSTAGRAM_PASSWORD=ig_password
OPENAI_API_KEY=openai_api_key
```

> **Catatan:** Jangan pernah membagikan file `.env` atau API key ke publik!

### 4. Jalankan Bot
```bash
node index.js
```

## ⚠️ Troubleshooting
- **Gagal login?** Pastikan username dan password benar.
- **Error 429 (Quota Exceeded)?** Cek limit API OpenAI kamu.
- 
## 📜 Lisensi
Projek ini menggunakan lisensi MIT. Silakan gunakan dan modifikasi sesuai kebutuhan.

---
Jika ada pertanyaan atau kendala, bisa buka issue di repository ini atau hubungi @chrvert_

