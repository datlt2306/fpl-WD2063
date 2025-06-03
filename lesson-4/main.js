const friends = ["John", "Jane", "Jim", "Jill", "Jack"];
const numbers = [1, 2, 3, 4, 5];

//                0       1       2       3       4
//                friend  friend  friend  friend  friend
// for
// sytax : for(variable, condition, expression){}
// let content = "";
// for (let index = 0; index < friends.length; index++) {
//     content = content + "<li>" + friends[index] + "</li>"; // content = "<li>John</li>""<li>"Jane"<li>"
// }
// ================================================
// for...in
// syntax : for(variable in array){}
// for (let index in friends) {
//     content += `<li>${friends[index]}</li>`;
// }
// ================================================
// for...of
// syntax : for(variable of array){}
// for (let friend of friends) {
//     content += `<li>${friend}</li>`;
// }
// ================================================
// forEarch()
// syntax : array.forEach(function(item, index, array){})
// friends.forEach(function (friend, index) {
//     content += `<li>${friend} - ${index}</li>`;
// });

// ================================================
// map(): Tạo ra một mảng mới từ mảng cũ => biến đổi phần tử trong mảng và giữ nguyên số lượng phần tử
// syntax : array.map(function(item, index){})

// const content = friends.map(function (friend, index) {
//     return `<li>${friend} - ${index}</li>`;
// });
// document.querySelector("#list").innerHTML = content.join("");

// ================================================
// filter(): Tạo ra một mảng mới từ mảng cũ => lọc ra các phần tử thỏa mãn điều kiện
// syntax : array.filter(function(item, index){})

// const content = friends
//     .filter(function (friend) {
//         return friend !== "Jim";
//     })
//     .map((friend) => {
//         return `<li>${friend}</li>`;
//     })
//     .join("");
// document.querySelector("#list").innerHTML = content;

// ================================================
// reduce(): Tạo ra một mảng mới từ mảng cũ => tính toán tổng các phần tử trong mảng
// syntax : array.reduce(function(total, item, index){})
// const result = carts.reduce(function (total, item) {
//     return total + item;
// }, 0);

// ================================================
// refactor code
const todos = [
    { id: 1, title: "Chơi game", completed: false }, // todo
    { id: 2, title: "Học Reactjs", completed: false }, // todo
    { id: 3, title: "Học php", completed: false }, // todo
];
const content = todos
    .map(function (todo) {
        return `<li class="todo-item">
                    <span class="todo-item__text">${todo.title}</span>
                    <div class="todo-item__actions">
                        <button class="todo-item__button todo-item__button--update">
                            Cập nhật
                        </button>
                        <button class="todo-item__button todo-item__button--delete">Xóa</button>
                    </div>
                </li>`;
    })
    .join("");
document.querySelector("#todo-list").innerHTML = content;

document.querySelector("#add-todo-btn").addEventListener("click", function () {
    const inputValue = document.querySelector("#todo-input").value;
    if (!inputValue) {
        alert("Vui lòng nhập thông tin!");
        return;
    }
    todos.push({ id: todos.length + 1, title: inputValue, completed: false });
    document.querySelector("#todo-input").value = "";
    const newContent = todos
        .map(function (todo) {
            return `<li class="todo-item">
                    <span class="todo-item__text">${todo.title}</span>
                    <div class="todo-item__actions">
                        <button class="todo-item__button todo-item__button--update">
                            Cập nhật
                        </button>
                        <button class="todo-item__button todo-item__button--delete">Xóa</button>
                    </div>
                </li>`;
        })
        .join("");
    document.querySelector("#todo-list").innerHTML = newContent;
});

// hiển thị danh sách ra ngoài màn hình : ul>li
// hiển thị cái gì??? => <li>John</li><li>Jane</li><li>Jim</li><li>Jill</li><li>Jack</li>
// hiển thị ở đâu???
