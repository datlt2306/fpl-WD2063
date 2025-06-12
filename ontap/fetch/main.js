const API_URL = "https://api.fake-rest.refine.dev";

async function fetchResource(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu!");
    return response.json();
}
function renderProducts(products) {
    const productListEl = document.querySelector("#product-list");
    if (!productListEl) return;
    productListEl.innerHTML = products
        .map((product, index) => {
            return `<li class="py-4 flex items-center gap-4">
                    <div
                        class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold text-lg"
                    >
                        ${index + 1}
                    </div>
                    <span class="text-gray-800 font-medium">${product.name}</span>
                </li>`;
        })
        .join("");
}

document.addEventListener("DOMContentLoaded", async () => {
    const products = await fetchResource(`${API_URL}/products?_limit=15`);
    renderProducts(products);
});
