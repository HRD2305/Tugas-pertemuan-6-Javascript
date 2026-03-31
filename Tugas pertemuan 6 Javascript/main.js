// main.js
import { index, store, destroy } from "./controller.js";

const main = () => {
    // Tampilkan 10 data awal
    index();

    // Tambahkan minimal 2 data [cite: 5, 22]
    store({ nama: 'Ridhan', umur: 30, alamat: 'Solo', email: 'ridhan@gmail.com' });
    store({ nama: 'Gesit', umur: 22, alamat: 'Jogja', email: 'gesit@gmail.com' });

    // Tampilkan setelah ditambah
    index();

    // Hapus data [cite: 25, 30]
    destroy();

    // Tampilkan hasil akhir
    index();
};

main();