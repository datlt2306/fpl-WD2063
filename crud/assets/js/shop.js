import { fetchProducts } from "./main.js";

function formatCurrency(amount) {
    return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

function renderProducts(products) {
    const productList = document.querySelector("#product-list");
    if (!productList) return;
    productList.innerHTML = products
        .map(
            (product) =>
                `<div class="product-card bg-white rounded-lg overflow-hidden">
            <a href="product-detail.html?id=${product.id}">
                        <div class="product-image">
                            <img
                                src="https://picsum.photos/id/26/300/300"
                                alt="Sofa Asgaard"
                                class="w-full h-64 object-cover"
                            />
                            <div class="absolute top-4 right-4">
                                <span class="bg-primary text-white text-xs px-2 py-1 rounded"
                                    >-30%</span
                                >
                            </div>
                            <div class="product-actions">
                                <button
                                    class="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        />
                                    </svg>
                                </button>
                                <button
                                    class="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                </button>
                                <button
                                    class="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
                            <p class="text-gray-600 mb-2">Phòng khách</p>
                            <div class="flex justify-between items-center">
                                <div>
                                    <span class="text-primary font-bold">${formatCurrency(
                                        product.price
                                    )}</span>
                                   
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>`
        )
        .join("");
}

document.addEventListener("DOMContentLoaded", async () => {
    fetch("https://api.fake-rest.refine.dev/products")
        .then((response) => {
            if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu");
            return response.json();
        })
        .then((data) => {
            renderProducts(data);
        })
        .catch((error) => {
            console.log(error);
        });
});
