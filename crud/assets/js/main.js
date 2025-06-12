// main.js
// Các hàm JS dùng chung cho toàn bộ website

document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu functionality
    const menuToggle = document.getElementById("menuToggle");
    const closeMenu = document.getElementById("closeMenu");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");

    if (menuToggle && closeMenu && mobileMenu && mobileMenuOverlay) {
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.add("active");
            mobileMenuOverlay.classList.remove("hidden");
            document.body.style.overflow = "hidden";
        });

        function closeMenuFunction() {
            mobileMenu.classList.remove("active");
            mobileMenuOverlay.classList.add("hidden");
            document.body.style.overflow = "";
        }

        closeMenu.addEventListener("click", closeMenuFunction);
        mobileMenuOverlay.addEventListener("click", closeMenuFunction);
    }

    // Scroll animations
    // const animateOnScroll = document.querySelectorAll(".animate-on-scroll");
    // const staggerGrids = document.querySelectorAll(".stagger-grid");
    // if (animateOnScroll.length > 0) {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     entry.target.classList.add("visible");
    //                 }
    //             });
    //         },
    //         { threshold: 0.1 }
    //     );

    //     animateOnScroll.forEach((element) => {
    //         observer.observe(element);
    //     });
    // }
    // staggerGrids.forEach((grid) => {
    //     observer.observe(grid);
    // });

    // Quantity input functionality (cho cart, product-detail...)
    const quantityInputs = document.querySelectorAll(".quantity-input");
    quantityInputs.forEach((input) => {
        input.addEventListener("change", () => {
            if (parseInt(input.value) < 1 || isNaN(parseInt(input.value))) {
                input.value = 1;
            }
        });
    });

    // Checkbox chọn tất cả và từng sản phẩm trong cart
    const selectAllCheckbox = document.getElementById("selectAll");
    const productCheckboxes = document.querySelectorAll(".product-checkbox");
    if (selectAllCheckbox && productCheckboxes.length > 0) {
        selectAllCheckbox.addEventListener("change", function () {
            const isChecked = this.checked;
            productCheckboxes.forEach((checkbox) => {
                checkbox.checked = isChecked;
            });
        });
        productCheckboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", function () {
                const allChecked = Array.from(productCheckboxes).every((cb) => cb.checked);
                selectAllCheckbox.checked = allChecked;
            });
        });
    }
});

export async function fetchProducts() {
    const res = await fetch("https://api.fake-rest.refine.dev/products?_page=1");
    if (!res.ok) throw new Error("Lỗi khi lấy danh sách sản phẩm");
    return await res.json();
}

document.addEventListener("DOMContentLoaded", async () => {});
