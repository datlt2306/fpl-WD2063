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

function $(selector) {
    const selectEle = document.querySelector(selector);
    if (Array.isArray(selectEle)) {
        return selectEle[0];
    }
    return selectEle;
}
function showProduct(data) {
    if (!Array.isArray(data)) return console.log("Không phải là mảng");
    const productListEl = document.querySelector("#product-list");
    if (!productListEl) return;
    productListEl.innerHTML = data
        .map(
            (item, index) => `<tr>
                            <td>${index + 1}</td>
                            <td><a href="detail.html?id=${item.id}">${item.name}</a></td>
                            <td><button onclick="deleteProduct(${item.id})">Xóa</button></td>
                        </tr>`
        )
        .join("");
}

function deleteProduct(id) {
    console.log(id);
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa không???");
    if (!confirm) return;
    fetch(`https://api.fake-rest.refine.dev/products/${id}`, { method: "DELETE" }).then(() => {
        alert("Xóa thành công!!");
        window.location.reload();
    });
}
function getProductDetail(id) {
    return fetch(`https://api.fake-rest.refine.dev/products/${id}`)
        .then((response) => response.json())
        .then((data) => data);
}
function getProducts() {
    fetch("https://api.fake-rest.refine.dev/products")
        .then((response) => response.json())
        .then((data) => showProduct(data));
}

document.addEventListener("DOMContentLoaded", () => {
    // Thêm sản phẩm
    const productFormEl = $("#product-form");
    if (productFormEl) {
        productFormEl.addEventListener("submit", (e) => {
            e.preventDefault();

            fetch("https://api.fake-rest.refine.dev/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: $("#product-name").value || "",
                    price: $("#product-price").value || 0,
                }),
            }).then(() => {
                console.log("Thêm thành công!!");
                window.location.reload();
            });
        });
    }
    // Xem chi tiết sản phẩm
    const id = new URLSearchParams(window.location.search).get("id");
    getProductDetail(id).then((data) => {
        document.querySelector("#product-detail").innerHTML = `
            <h1>${data.name}</h1>
            <p>Giá: ${data.price}</p>
        `;
    });
});
