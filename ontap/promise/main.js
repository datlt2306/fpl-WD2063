// function tinhTongCham(a, b, callback) {
//     setTimeout(() => {
//         const tong = a + b;
//         callback(tong);
//     }, 1000);
// }

// // Sử dụng callback
// tinhTongCham(5, 10, (ketQua1) => {
//     tinhTongCham(ketQua1, 30, (ketQua2) => {
//         tinhTongCham(ketQua2, 50, (ketQua3) => {
//             console.log(ketQua3);
//         });
//     });
// });
// Nhìn, hiểu, nhớ, code, chỉ lại thằng bạn mình nó hiểu được

// function sum(a, b) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof a !== "number" || typeof b !== "number") return reject("Khong phai so!");
//             resolve(a + b);
//         }, 1000);
//     });
// }

// Promise.all([sum(1, 2), sum(3, 4), sum(5, 6)])
//     .then((ketQua) => {
//         // console.log(ketQua); // [3, 7, 11] - mảng kết quả từ các promises
//         // const tong = ketQua.reduce((sum, value) => sum + value, 0);
//         // console.log("Tổng tất cả:", tong); // 21
//     })
//     .catch((loi) => {
//         // Nếu bất kỳ promise nào lỗi, .catch() sẽ được gọi
//         console.error("Lỗi:", loi);
//     });

// fetch("https://api.fake-rest.refine.dev/products")
//     .then((response) => {
//         if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu");
//         return response.json();
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

function removeUser(id) {
    fetch(`https://api.fake-rest.refine.dev/users/${id}`, {
        method: "DELETE",
    })
        .then(() => {
            alert("Xóa user thành công");
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
        });
}
function getUsers() {
    fetch("https://api.fake-rest.refine.dev/users")
        .then((response) => {
            if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu");
            return response.json();
        })
        .then((data) => {
            const userListEl = document.querySelector("#users");
            userListEl.innerHTML = data
                .map(
                    (user) =>
                        `<li><a href="detail.html?id=${user.id}">${user.firstName} ${user.lastName} <button onclick="removeUser(${user.id})">Xóa</button></li>`
                )
                .join("");
        })
        .catch((error) => {
            console.log(error);
        });
}
getUsers();

const detailEl = document.querySelector("#detail");
if (detailEl) {
    const id = new URLSearchParams(window.location.search).get("id");
    fetch(`https://api.fake-rest.refine.dev/users/${id}`)
        .then((response) => {
            if (!response.ok) throw new Error("Lỗi API");
            return response.json();
        })
        .then((data) => {
            detailEl.innerHTML = `<div>
                <h2>${data.firstName} ${data.lastName}</h2>
                <p>${data.email}</p>
            </div>`;
        });
}
