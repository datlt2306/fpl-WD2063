// const DATABASE = {
//     users: [
//         { id: 1, name: "Nguyễn Văn A", friendId: 2 }, // user
//         { id: 2, name: "Trần Thị B", friendId: 3 },
//         { id: 3, name: "Lê Văn C", friendId: 1 },
//     ],
//     tasks: {
//         1: ["Học JavaScript", "Làm bài tập", "Đọc sách"],
//         2: ["Mua sắm", "Nấu ăn", "Dọn nhà"],
//         3: ["Chơi game", "Xem phim", "Nghe nhạc"],
//     },
// };

// function layThongTinNguoiDung(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const user = DATABASE.users.find((u) => u.id == id);
//             if (!user) return reject("Không có user nào");
//             return resolve(user);
//         }, 1000);
//     });
// }
// function hienThiThongTinNguoiDung(nguoiDung) {
//     console.log(`===== THÔNG TIN NGƯỜI DÙNG =====`);
//     console.log(`Tên: ${nguoiDung.name} (ID: ${nguoiDung.id})`);
//     console.log(`===============================`);
// }
// layThongTinNguoiDung(2)
//     .then((result) => hienThiThongTinNguoiDung(result))
//     .catch((error) => console.log(error));

function showProduct(data) {
    if (!Array.isArray(data)) return console.log("Không phải là mảng");
    const productListEl = document.querySelector("#product-list");
    productListEl.innerHTML = data
        .map(
            (item, index) => `<tr>
                            <td>${index + 1}</td>
                            <td>${item.name}</td>
                            <td><button>Xóa</button></td>
                        </tr>`
        )
        .join("");
}
fetch("https://api.fake-rest.refine.dev/products")
    .then((response) => response.json())
    .then((data) => showProduct(data));
