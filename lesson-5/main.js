// function getUserFromDatabase(userId) {
//     setTimeout(() => {
//         return {
//             id: userId,
//             name: "Nguyễn Văn A",
//         };
//     }, 2000);
// }

// const user = getUserFromDatabase(123);
// console.log("Dữ liệu người dùng:", user); // ❌ undefined
/**
 * 	•	Hàm setTimeout hoạt động bất đồng bộ: nó không trả kết quả ngay lập tức.
	•	Lệnh return trong setTimeout không trả về cho hàm getUserFromDatabase, vì hàm đã kết thúc trước khi dữ liệu có được.
	•	user nhận undefined vì lúc đó chưa có dữ liệu nào cả.
 */
// const myDisplayer = (some) => {
//     console.log("Dữ liệu người dùng:", some); // ✅ Có dữ liệu sau 2 giây
// };
// function getUserFromDatabase(userId, callback) {
//     setTimeout(() => {
//         const user = {
//             id: userId,
//             name: "Nguyễn Văn A",
//         };
//         callback(user);
//     }, 2000);
// }

// getUserFromDatabase(123, myDisplayer);

// function getUser(userId, callback) {
//     setTimeout(() => {
//         if (userId !== 123) return callback("Không tìm thấy người dùng", null);
//         callback(null, { id: 123, name: "Nguyễn Văn A" });
//     }, 1000);
// }

// function getOrders(user, callback) {
//     setTimeout(() => {
//         if (!user) return callback("Không có người dùng để lấy đơn hàng", null);
//         callback(null, ["Đơn hàng 1", "Đơn hàng 2"]);
//     }, 1000);
// }

// function sendEmail(orders, callback) {
//     setTimeout(() => {
//         if (orders.length === 0) return callback("Không có đơn hàng để gửi email", null);
//         callback(null, "Email đã được gửi!");
//     }, 1000);
// }

// // Gọi callback lồng nhau (callback hell)
// getUser(123, (err, user) => {
//     if (err) return console.error("Lỗi:", err);
//     getOrders(user, (err, orders) => {
//         if (err) return console.error("Lỗi:", err);

//         sendEmail(orders, (err, result) => {
//             if (err) return console.error("Lỗi:", err);

//             console.log(result); // Email đã được gửi!
//         });
//     });
// });

function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId !== 123) return reject("Không tìm thấy người dùng");
            resolve({ id: 123, name: "Nguyễn Văn A" });
        }, 1000);
    });
}

function getOrders(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!user) return reject("Không có người dùng để lấy đơn hàng");
            resolve(["Đơn hàng 1", "Đơn hàng 2"]);
        }, 1000);
    });
}

function sendEmail(orders) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orders.length === 0) return reject("Không có đơn hàng để gửi email");
            resolve("Email đã được gửi!");
        }, 1000);
    });
}

// // Gọi tuần tự bằng Promise chaining
getUser(123)
    .then((user) => {
        return getOrders(user);
    })
    .then((orders) => {
        return sendEmail(orders);
    })
    .then((result) => {
        console.log(result); // Email đã được gửi!
    })
    .catch((error) => {
        console.error("Lỗi:", error);
    });
