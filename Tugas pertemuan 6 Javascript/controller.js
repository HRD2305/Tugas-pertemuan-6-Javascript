// controller.js
import users from "./data.js";

// Menampilkan data menggunakan map() [cite: 6]
const index = () => {
    console.log("--- Daftar User ---");
    users.map((user, i) => {
        console.log(`${i + 1}. ${user.nama} - ${user.umur} Thn - ${user.alamat} (${user.email})`);
    });
};

// Menambah data menggunakan push [cite: 5]
const store = (user) => {
    users.push(user);
    console.log(`\nBerhasil menambah data: ${user.nama}`);
};

// Menghapus data
const destroy = () => {
    const deleted = users.pop();
    console.log(`\nBerhasil menghapus data: ${deleted.nama}`);
};

export { index, store, destroy };