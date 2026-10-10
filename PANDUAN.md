# Make it 24: cara online-in game kamu

Isi folder ini:

| File | Fungsinya |
|---|---|
| `index.html` | Game-nya (solo + multiplayer) |
| `firebase-config.js` | Tempat kamu tempel setting Firebase |
| `database.rules.json` | Aturan keamanan database, ditempel di Firebase |
| `PANDUAN.md` | File ini |

Totalnya sekitar 20–30 menit. Semuanya gratis.

---

## Bagian 1: Firebase (server multiplayer)

1. Buka **console.firebase.google.com**, login pakai akun Google.
2. Klik **Create a project** → kasih nama, misalnya `make-it-24` → Google Analytics boleh dimatiin → **Create project**.
3. **Nyalain login anonim** (biar pemain nggak perlu bikin akun):
   Menu kiri **Build → Authentication → Get started** → tab **Sign-in method** → pilih **Anonymous** → nyalain **Enable** → **Save**.
4. **Bikin database**:
   **Build → Realtime Database → Create Database** → lokasi pilih **Singapore (asia-southeast1)** (paling dekat buat Australia & Indonesia) → pilih **Start in locked mode** → **Enable**.
5. **Pasang aturan keamanan**:
   Masih di Realtime Database, buka tab **Rules** → hapus semua isinya → buka file `database.rules.json`, copy semua isinya, tempel di situ → **Publish**.
6. **Ambil setting web app**:
   Klik ikon gear ⚙️ di kiri atas → **Project settings** → scroll ke **Your apps** → klik ikon **`</>`** (Web) → kasih nickname bebas → **Register app** (jangan centang Firebase Hosting).
   Nanti muncul kode `const firebaseConfig = { ... }`.
7. Buka `firebase-config.js` pakai Notepad / TextEdit, terus ganti tiap nilai di dalamnya pakai nilai dari langkah 6 (`apiKey`, `authDomain`, `databaseURL`, `projectId`, dst).
   - Pastikan **`databaseURL` ada**. Kalau di langkah 6 nggak muncul, copy URL yang ada di bagian atas halaman Realtime Database (bentuknya `https://….asia-southeast1.firebasedatabase.app`).
   - Nilai-nilai ini memang aman ditaruh di website publik. Yang ngejaga datanya itu aturan di langkah 5.

## Bagian 2: GitHub Pages (biar dapat link)

1. Buka **github.com** → **Sign up** (gratis). Ingat username kamu.
2. Klik **+** di kanan atas → **New repository** → nama: `make-it-24` → pilih **Public** → **Create repository**.
3. Di halaman repo yang masih kosong, klik link **uploading an existing file** → drag **`index.html`** dan **`firebase-config.js`** (yang udah kamu isi) → klik **Commit changes**.
4. Buka **Settings** (di repo) → menu kiri **Pages** → di bagian **Branch** pilih **main** dan folder **/ (root)** → **Save**.
5. Tunggu 1–2 menit, refresh halaman itu. Link game kamu bakal muncul:
   **`https://USERNAME.github.io/make-it-24/`**

## Bagian 3: Satu langkah terakhir di Firebase

**Authentication → Settings → Authorized domains → Add domain** → isi `USERNAME.github.io` → **Add**.

## Cara ngetes

1. Buka link game di HP kamu → tab **With friends** → isi nama → **Create a room**.
2. Tekan **Invite** → kirim link-nya ke teman (atau buka di HP/browser kedua).
3. Link undangan udah berisi kode room, jadi teman tinggal isi nama dan tekan **Join**.
4. Di panel room harusnya ada tulisan **"Online · 2 players in this room"**.

## Kalau ada masalah

- **"Multiplayer isn't set up yet"** → `firebase-config.js` belum diisi, atau yang ke-upload masih versi kosong.
- **"Couldn't reach the game server"** → cek lagi langkah 3 (Anonymous) dan Bagian 3 (Authorized domains).
- **"Couldn't join the room"** → aturan di langkah 5 belum di-Publish.
- Mau ganti sesuatu di game-nya? Upload ulang `index.html` yang baru ke repo yang sama (**Add file → Upload files**), nanti link-nya otomatis ke-update dalam 1–2 menit.

## Biaya

Paket gratis Firebase (Spark) muat sekitar 100 pemain online bareng dan 1 GB data. Buat main sama teman-teman, itu jauh dari cukup, dan kalau kepenuhan Firebase cuma berhenti sementara, nggak akan tiba-tiba narik biaya.
