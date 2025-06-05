// // function name
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(10, 20)); // 30

// // function expression
// const sum2 = function (a, b) {
//     return a + b;
// };
// console.log(sum2(30, 40)); // 70

// // arrow function => viết tắt function expression
// const sum3 = (a, b) => a + b;
// console.log(sum3(40, 50)); // 70
//===============================================
// Đồng bộ và bất đồng bộ
// Xử lý bất đồng bộ: callback, promise, async/await

// console.log(1); // Khu vực để hiển thị danh sách sản phẩm
// setTimeout(() => {
//     console.log(2); // gọi đến server, lấy dữ liệu từ database
// }, 1000);
// console.log(3); // Hiển thị danh sách sản phẩm từ server trả về
//===============================================
// Ví dụ callback xử lý bất đồng bộ cơ bản
// function getProduct(id, callback) {
//     setTimeout(() => {
//         const product = {
//             id: id,
//             name: "Sản phẩm 1",
//             price: 100,
//             stock: 10,
//         };
//         callback(product);
//     }, 1000);
// }

// getProduct(123, function (some) {
//     console.log(some);
// });
// //=====================Handling Error==========================

// function getProduct(id, callback) {
//     setTimeout(() => {
//         if (id !== 123) return callback(new Error("Không tồn tại sản phẩm này"));
//         const product = {
//             id: id,
//             name: "Sản phẩm 1",
//             price: 100,
//             stock: 10,
//         };
//         callback(null, product);
//     }, 1000);
// }

// getProduct(345, function (error, product) {
//     if (error) {
//         console.error(error);
//         return;
//     }
//     console.log(product);
// });

//=====================Callback hell==========================
// - Lấy thông tin sản phẩm qua id
// - Kiểm tra sản phẩm có số đủ không?
// - Nếu số lượng đủ thì giảm giá sản phẩm đấy

// function getProduct(id, callback) {
//     setTimeout(() => {
//         if (id !== 123) return callback(new Error("Không tồn tại sản phẩm này"));
//         const product = {
//             id: id,
//             name: "Sản phẩm 1",
//             price: 100,
//             stock: 10,
//         };
//         callback(null, product);
//     }, 1000);
// }
// function checkStock(product, callback) {
//     setTimeout(() => {
//         if (!product.stock) return callback(new Error("Sản phẩm không có số lượng"));
//         callback(null, product);
//     }, 1000);
// }
// function discountProduct(product, callback) {
//     setTimeout(() => {
//         product.price = product.price * 0.9;
//         callback(null, product);
//     }, 1000);
// }
// // callback hell
// getProduct(345, function (error, product) {
//     checkStock(product, function (error, availableProduct) {
//         discountProduct(availableProduct, function (error, discountedProduct) {
//             console.log(discountedProduct);
//         });
//     });
// });

//=====================Promise==========================

function cauHon() {
    return new Promise((resolve, reject) => {
        let isSuccess = true;
        setTimeout(() => {
            if (!isSuccess) {
                return reject("Em chỉ coi anh là anh thôi!");
            }
            resolve("Gật đầu");
        }, 1000);
    });
}
cauHon()
    .then((ketQua) => ketQua + " đi Lên Phường!")
    .then((ketQuaCuoi) => console.log(ketQuaCuoi))
    .catch((error) => console.error(error));

fetch("https://api.fake-rest.refine.dev/products")
    .then((response) => response.json())
    .then((data) => console.log(data));
