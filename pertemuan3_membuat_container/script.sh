# Untuk menjalankan file configurasi docker compose
# Namun kita harus masuk terlebih dahulu
# kedalam folder yang memiliki file
# docker compose yaml nya
docker compose create

# Untuk menjalankan container-container yang telah di buat oleh docker compose yml
docker compose start

# Untuk melihat container-container yang telah dibuat oleh docker compose
docker compose ps

# Untuk menghentikan container-container yang dibuat menggunakna docker compose (container yg running)
docker compose stop

# Untuk mengahapus setiap container, volume & network yang ada di dalam docker compose config (jika container nya mati, akan di stop secara otomatis & akan langsung di remove)
docker compose down

# Untuk menampilkan project yang ada dalam docker compose (yg sedang running)
# Secara default, nama project nya akan mengikuti nama 
# folder dimana file docker compose yml di buat.
# Dalam kasus skrg, nama project nya adalah
# pertemuan3_membuat_container
# karena docker compose config nya ada di folder
# pertemuan3_membuat_container
docker compose ls