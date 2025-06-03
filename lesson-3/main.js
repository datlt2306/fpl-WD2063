const friends = [
    "Đạt", // friend
    "Kiên", // friend
    "Huy",
    "Quý",
];
// vòng lặp for
// for (let index = 0; index < friends.length; index++) {
//     console.log(friends[index]);
// }

// for...in
// for (let index in friends) {
//     console.log(friends[index]);
// }

// for...of
// for (let friend of friends) {
//     console.log(friend);
// }
// forEach
// let content = "";
// friends.forEach(function (friend, index) {
//     content += `<li>${friend} - Đẹp trai</li>`;
// });
// document.querySelector("#list").innerHTML = content;

// Map
// const content = friends.map((friend) => `<li>${friend} - Đẹp trai</li>`).join("");

// Filter
const content = friends
    .filter((friend) => friend !== "Kiên")
    .map((friend) => `<li>${friend} - Đẹp trai</li>`)
    .join("");

document.querySelector("#list").innerHTML = content;
