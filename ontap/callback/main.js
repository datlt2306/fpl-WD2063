// đồng bộ và bất đồng bộ, xử lý bất đồng bộ
// console.log(sum(10, 20));
// function sum(a, b) {
//     return a + b;
// }

// // function expression
// const sum2 = function (a, b) {
//     return a + b;
// };
// console.log(sum2(40, 50));
// // arrow function
// const sum3 = (a, b) => a + b;
// console.log(sum3(60, 70));

// const person = {
//     name: "John",
//     sayHello: function () {
//         console.log(this);
//         console.log("Hello, my name is " + this.name);
//     },
// };

// person.sayHello();

const getProduct = (id, callback) => {
    setTimeout(() => {
        if (id !== 123) return callback(new Error("Sản phẩm không tồn tại!"));
        const product = {
            id: id,
            name: "Product 1",
            price: 200,
        };
        callback(null, product);
    }, 1000);
};
const checkStock = (product, callback) => {
    setTimeout(() => {
        const inStock = Math.random() > 0.3;
        if (!inStock) return callback(new Error("Số lượng không đủ!"));
        callback(null, product);
    }, 1000);
};
const checkDiscount = (product, callback) => {
    setTimeout(() => {
        product.discount = product.price * 0.5;
        if (!product) return callback(new Error("Sản phẩm không tồn tại!"));
        callback(null, product);
    }, 1000);
};
getProduct(123, (error, product) => {
    if (error) console.error(error);
    checkStock(product, (error, availableProduct) => {
        if (error) console.error(error);
        checkDiscount(availableProduct, (error, discountedProduct) => {
            if (error) console.error(error);
        });
    });
});

const cauHon = () => {
    return new Promise((resolve, reject) => {
        let isSuccess = false;
        setTimeout(() => {
            if (!isSuccess) reject("Em chỉ coi anh là anh thôi!");
            resolve("Gật đầu");
        }, 2000);
    });
};
cauHon()
    .then((ketQua1) => ketQua1 + " Ôm")
    .then((ketQua2) => ketQua2 + " Lên phường!")
    .then(() => console.log("Thành công cmnr"))
    .catch((error) => console.log(error));

// promise
// Viết lại bài toán trên bằng promise ( bài lấy sản phẩm )
// API là gì? tại sao phải dùng API? sử dụng API như nào? ( fetch, axios)

// lấy thông tin sản phẩm thông qua id
// kiểm tra sản phẩm còn số lượng không?
// tính toán việc giảm giá
