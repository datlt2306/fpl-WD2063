const API_URL = "https://api.fake-rest.refine.dev";

async function fetchResource(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu!");
    return response.json();
}

async function deleteProduct(id) {
    await fetchResource(`${API_URL}/products/${id}`, { method: "DELETE" });
    alert("Xóa sản phẩm thành công!");
    window.location.reload();
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
                    <span class="text-gray-800 font-medium">
                    <a href="detail.html?id=${product.id}">${product.name}</a>
                    </span>
                    <button class="bg-red-500 text-white px-4 py-2 rounded-md" onclick="deleteProduct(${
                        product.id
                    })">Xóa</button>
                </li>`;
        })
        .join("");
}

function renderProductDetail(product) {
    const productDetailEl = document.querySelector("#product-detail");
    if (productDetailEl) {
        productDetailEl.innerHTML = `
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <p>${product.price}</p>
        `;
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const products = await fetchResource(`${API_URL}/products?_limit=15`);
    renderProducts(products);

    // Chi tiết sản phẩm
    const id = new URLSearchParams(window.location.search).get("id");
    if (id) {
        const product = await fetchResource(`${API_URL}/products/${id}`);
        renderProductDetail(product);
    }
});
