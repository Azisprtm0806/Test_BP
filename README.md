# Nama Proyek

Test Praktik Bintang Plajar

## Instalasi

1. Pastikan Anda telah menginstal Node.js.
2. Import file db_test_bp.sql ke dalam database Mysql.
3. Clone repositori ini ke dalam direktori lokal Anda.
4. Buka terminal dan arahkan ke direktori proyek.
5. Jalankan perintah `npm install` untuk menginstal semua dependensi.
6. Jalankan perintah `npm run dev` untuk menjalankan server lokal.

## Migration UP

npx sequelize-cli migration:generate --name create-table-pelanggan
npx sequelize-cli db:migrate

## Migration DOWN

npx sequelize-cli db:migrate:undo --name create-table-pelanggan

or
for all
npx sequelize db:migrate:undo:all

## Dokumentasi API

silahkan import file test_bp.json di dalam insomnia
