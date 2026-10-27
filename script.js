
// ================================================
// TOKO SEMBAKO FERDI JAYA - SCRIPT.JS
// HTML + CSS + JavaScript murni
// ================================================

// UBAH PENGATURAN TOKO DI BAGIAN INI
const STORE = {
  name: "Toko Sembako Ferdi Jaya",

  // Ganti dengan nomor WhatsApp toko yang sebenarnya.
  // Format internasional: 62 + nomor, tanpa +, spasi, atau strip.
  whatsapp: "6285755149558",

  // Data berikut hanya contoh, bukan alamat toko sebenarnya.
  address: "Kedung Palang, Lakardowo, Kec. Jetis, Kabupaten Mojokerto, Jawa Timur 61352",
  hours: "Senin–Minggu, 04.00–23.00",

  // Ganti dengan URL Google Maps toko yang sebenarnya.
  mapUrl: "https://maps.app.goo.gl/Za3uH8LmiVdJwPL87",

  // Biaya antar contoh. Sesuaikan dengan kebijakan toko.
  deliveryFee: 5000
};

const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0
});

const formatRupiah = value => rupiah.format(value);

// ================================================
// DATA KATEGORI
// ================================================

const categories = [
  { name: "Semua Produk", icon: "🛒" },
  { name: "Beras dan Biji-bijian", icon: "🌾" },
  { name: "Minyak Goreng", icon: "🥃" },
  { name: "Gula dan Garam", icon: "🧂" },
  { name: "Tepung", icon: "🥣" },
  { name: "Mie Instan", icon: "🍜" },
  { name: "Kopi Sachet", icon: "☕" },
  { name: "Teh Kemasan", icon: "🍵" },
  { name: "Telur", icon: "🥚" },
  { name: "Susu dan Minuman", icon: "🥛" },
  { name: "Bumbu Dapur", icon: "🌶️" },
  { name: "Makanan Kaleng", icon: "🥫" },
  { name: "Kebutuhan Rumah Tangga", icon: "🧹" }
];

// ================================================
// DATA PRODUK
// Harga, stok, gambar, dan promo adalah data contoh.
// Ganti URL gambar jika ingin memakai foto produk sendiri.
// ================================================

const products = [
  {
    id: 1, name: "Beras Premium", category: "Beras dan Biji-bijian",
    price: 75000, unit: "5 kg", stock: 30, emoji: "🌾",
    image: "", badge: "Terlaris", promo: false
  },
  {
    id: 2, name: "Beras Medium", category: "Beras dan Biji-bijian",
    price: 65000, unit: "5 kg", stock: 25, emoji: "🌾",
    image: "", badge: "", promo: false
  },
  {
    id: 3, name: "Kacang Hijau", category: "Beras dan Biji-bijian",
    price: 18000, unit: "1 kg", stock: 20, emoji: "🫘",
    image: "", badge: "", promo: false
  },
  {
    id: 4, name: "Minyak Goreng", category: "Minyak Goreng",
    price: 18000, oldPrice: 20000, unit: "1 liter",
    stock: 40, emoji: "🥃", image: "",
    badge: "Hemat", promo: true
  },
  {
    id: 5, name: "Minyak Goreng Premium", category: "Minyak Goreng",
    price: 22000, unit: "1 liter", stock: 25, emoji: "🥃",
    image: "", badge: "", promo: false
  },
  {
    id: 6, name: "Gula Pasir", category: "Gula dan Garam",
    price: 17000, unit: "1 kg", stock: 35, emoji: "🧂",
    image: "", badge: "Pilihan", promo: false
  },
  {
    id: 7, name: "Garam Dapur", category: "Gula dan Garam",
    price: 5000, unit: "500 gram", stock: 50, emoji: "🧂",
    image: "", badge: "", promo: false
  },
  {
    id: 8, name: "Tepung Terigu", category: "Tepung",
    price: 13000, unit: "1 kg", stock: 30, emoji: "🥣",
    image: "", badge: "", promo: false
  },
  {
    id: 9, name: "Tepung Tapioka", category: "Tepung",
    price: 12000, unit: "1 kg", stock: 20, emoji: "🥣",
    image: "", badge: "", promo: false
  },
  {
    id: 10, name: "Mie Instan Goreng", category: "Mi Instan",
    price: 3500, unit: "1 bungkus", stock: 100, emoji: "🍜",
    image: "", badge: "Favorit", promo: false
  },
  {
    id: 11, name: "Mie Instan Kuah", category: "Mi Instan",
    price: 3500, unit: "1 bungkus", stock: 100, emoji: "🍜",
    image: "", badge: "", promo: false
  },
  {
    id: 12, name: "Kopi Sachet", category: "Kopi Sachet",
    price: 2000, unit: "1 sachet", stock: 100, emoji: "☕",
    image: "", badge: "", promo: false
  },
  {
    id: 13, name: "Kopi Susu Sachet", category: "Kopi Sachet",
    price: 2500, unit: "1 sachet", stock: 80, emoji: "☕",
    image: "", badge: "", promo: false
  },
  {
    id: 14, name: "Teh Celup", category: "Teh Kemasan",
    price: 9000, unit: "1 kotak", stock: 25, emoji: "🍵",
    image: "", badge: "", promo: false
  },
  {
    id: 15, name: "Teh Botol", category: "Teh Kemasan",
    price: 5000, unit: "350 ml", stock: 40, emoji: "🥤",
    image: "", badge: "", promo: false
  },
  {
    id: 16, name: "Telur Ayam", category: "Telur",
    price: 30000, unit: "1 kg", stock: 25, emoji: "🥚",
    image: "", badge: "Terlaris", promo: false
  },
  {
    id: 17, name: "Susu UHT", category: "Susu dan Minuman",
    price: 7000, unit: "250 ml", stock: 30, emoji: "🥛",
    image: "", badge: "", promo: false
  },
  {
    id: 18, name: "Kecap Manis", category: "Bumbu Dapur",
    price: 12000, unit: "520 ml", stock: 20, emoji: "🫙",
    image: "", badge: "", promo: false
  },
  {
    id: 19, name: "Sarden Kaleng", category: "Makanan Kaleng",
    price: 15000, unit: "155 gram", stock: 20, emoji: "🥫",
    image: "", badge: "", promo: false
  },
  {
    id: 20, name: "Sabun Cuci Piring", category: "Kebutuhan Rumah Tangga",
    price: 8000, unit: "400 ml", stock: 30, emoji: "🧽",
    image: "", badge: "", promo: false
  }
];

// ================================================
// ELEMEN HTML
// ================================================

const $ = selector => document.querySelector(selector);

const productGrid = $("#productGrid");
const categoryGrid = $("#categoryGrid");
const cartDrawer = $("#cartDrawer");
const cartOverlay = $("#cartOverlay");
const checkoutModal = $("#checkoutModal");
const cartItems = $("#cartItems");
const checkoutItems = $("#checkoutItems");
const toast = $("#toast");

let selectedCategory = "Semua Produk";
let searchTerm = "";
let sortMode = "default";
let promoOnly = false;
let toastTimer;

// Jumlah pilihan sebelum produk dimasukkan ke keranjang.
const selectedQuantities = new Map();

// ================================================
// LOCALSTORAGE
// ================================================

const CART_STORAGE_KEY = "ferdiJayaCart";

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));

    if (!Array.isArray(saved)) return [];

    return saved
      .filter(item =>
        item &&
        Number.isInteger(item.id) &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0
      )
      .map(item => {
        const product = products.find(p => p.id === item.id);

        if (!product) return null;

        return {
          id: product.id,
          quantity: Math.min(item.quantity, product.stock)
        };
      })
      .filter(item => item && item.quantity > 0);
  } catch (error) {
    console.warn("Keranjang tidak dapat dibaca:", error);
    return [];
  }
}

let cart = loadCart();

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.warn("Keranjang tidak dapat disimpan:", error);
    showToast("Penyimpanan browser tidak tersedia.");
  }
}

// ================================================
// NOTIFIKASI
// ================================================

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// ================================================
// KATEGORI
// ================================================

function renderCategories() {
  categoryGrid.replaceChildren();

  categories.forEach(category => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-card";
    button.classList.toggle("active", selectedCategory === category.name);
    button.setAttribute(
      "aria-pressed",
      String(selectedCategory === category.name)
    );

    const icon = document.createElement("span");
    icon.className = "category-icon";
    icon.textContent = category.icon;

    const name = document.createElement("span");
    name.className = "category-name";
    name.textContent = category.name;

    button.append(icon, name);

    button.addEventListener("click", () => {
      selectedCategory = category.name;
      renderCategories();
      renderProducts();

      $("#produk").scrollIntoView({ behavior: "smooth" });
    });

    categoryGrid.append(button);
  });
}

// ================================================
// PRODUK DAN FILTER
// ================================================

function getFilteredProducts() {
  let result = products.filter(product => {
    const matchesCategory =
      selectedCategory === "Semua Produk" ||
      product.category === selectedCategory;

    const matchesSearch = product.name
      .toLocaleLowerCase("id-ID")
      .includes(searchTerm.toLocaleLowerCase("id-ID"));

    const matchesPromo = !promoOnly || product.promo;

    return matchesCategory && matchesSearch && matchesPromo;
  });

  if (sortMode === "low") {
    result.sort((a, b) => a.price - b.price);
  } else if (sortMode === "high") {
    result.sort((a, b) => b.price - a.price);
  } else if (sortMode === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name, "id"));
  }

  return result;
}

function getCartQuantity(productId) {
  return cart.find(item => item.id === productId)?.quantity || 0;
}

function getSelectedQuantity(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return 1;

  const remaining = product.stock - getCartQuantity(productId);
  return Math.min(selectedQuantities.get(productId) || 1, Math.max(1, remaining));
}

function makeProductImage(product) {
  if (product.image) {
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.loading = "lazy";
    img.decoding = "async";

    img.addEventListener("error", () => {
      const fallback = document.createElement("span");
      fallback.className = "product-placeholder";
      fallback.textContent = product.emoji;
      img.replaceWith(fallback);
    }, { once: true });

    return img;
  }

  const placeholder = document.createElement("span");
  placeholder.className = "product-placeholder";
  placeholder.textContent = product.emoji;
  placeholder.setAttribute("role", "img");
  placeholder.setAttribute("aria-label", product.name);
  return placeholder;
}

function renderProducts() {
  const list = getFilteredProducts();
  productGrid.replaceChildren();

  $("#activeCategory").textContent =
    selectedCategory + " · " + list.length + " produk";

  $("#emptyProducts").classList.toggle("hidden", list.length > 0);

  list.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";

    const imageArea = document.createElement("div");
    imageArea.className = "product-image";
    imageArea.append(makeProductImage(product));

    if (product.badge || product.promo) {
      const badge = document.createElement("span");
      badge.className = "product-badge";
      badge.textContent = product.promo ? "PROMO" : product.badge;
      imageArea.append(badge);
    }

    const info = document.createElement("div");
    info.className = "product-info";

    const category = document.createElement("div");
    category.className = "product-category";
    category.textContent = product.category;

    const name = document.createElement("h3");
    name.className = "product-name";
    name.textContent = product.name;

    const unit = document.createElement("div");
    unit.className = "product-size";
    unit.textContent = "Ukuran: " + product.unit;

    const price = document.createElement("div");
    price.className = "product-price";
    price.textContent = formatRupiah(product.price);

    if (product.oldPrice && product.oldPrice > product.price) {
      const oldPrice = document.createElement("span");
      oldPrice.className = "product-old-price";
      oldPrice.textContent = formatRupiah(product.oldPrice);
      price.append(oldPrice);
    }

    const stock = document.createElement("div");
    stock.className = "stock-info";
    stock.textContent = product.stock + " tersedia";

    const remaining = product.stock - getCartQuantity(product.id);
    if (remaining <= 0) {
      stock.classList.add("out-of-stock");
      stock.textContent = "Stok tersedia di keranjang";
    }

    const actions = document.createElement("div");
    actions.className = "product-actions";

    const quantityControl = document.createElement("div");
    quantityControl.className = "qty-control";

    const minus = document.createElement("button");
    minus.type = "button";
    minus.textContent = "−";
    minus.setAttribute("aria-label", "Kurangi jumlah " + product.name);

    const quantityText = document.createElement("span");
    quantityText.textContent = getSelectedQuantity(product.id);

    const plus = document.createElement("button");
    plus.type = "button";
    plus.textContent = "+";
    plus.setAttribute("aria-label", "Tambah jumlah " + product.name);

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "add-button";
    addButton.textContent = remaining <= 0 ? "Stok Maksimal" : "+ Keranjang";
    addButton.disabled = remaining <= 0;

    minus.disabled = remaining <= 0 || getSelectedQuantity(product.id) <= 1;
    plus.disabled = remaining <= 0 ||
      getSelectedQuantity(product.id) >= remaining;

    minus.addEventListener("click", () => {
      const quantity = getSelectedQuantity(product.id);
      if (quantity > 1) {
        selectedQuantities.set(product.id, quantity - 1);
        renderProducts();
      }
    });

    plus.addEventListener("click", () => {
      const quantity = getSelectedQuantity(product.id);
      if (quantity < remaining) {
        selectedQuantities.set(product.id, quantity + 1);
        renderProducts();
      }
    });

    addButton.addEventListener("click", () => {
      addToCart(product.id, getSelectedQuantity(product.id));
    });

    quantityControl.append(minus, quantityText, plus);
    actions.append(quantityControl, addButton);

    info.append(category, name, unit, price, stock, actions);
    card.append(imageArea, info);
    productGrid.append(card);
  });
}

// ================================================
// KERANJANG
// ================================================

function addToCart(productId, quantity = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = getCartQuantity(productId);

  if (existing + quantity > product.stock) {
    showToast("Jumlah melebihi stok yang tersedia.");
    return;
  }

  if (quantity < 1) return;

  const item = cart.find(entry => entry.id === productId);

  if (item) {
    item.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }

  selectedQuantities.set(productId, 1);
  saveCart();
  renderCart();
  renderProducts();
  showToast(product.name + " ditambahkan ke keranjang.");
}

function changeCartQuantity(productId, difference) {
  const item = cart.find(entry => entry.id === productId);
  const product = products.find(p => p.id === productId);

  if (!item || !product) return;

  const newQuantity = item.quantity + difference;

  if (newQuantity <= 0) {
    cart = cart.filter(entry => entry.id !== productId);
  } else if (newQuantity <= product.stock) {
    item.quantity = newQuantity;
  } else {
    showToast("Jumlah tidak boleh melebihi stok.");
    return;
  }

  saveCart();
  renderCart();
  renderProducts();

  if (checkoutModal.classList.contains("open")) {
    renderCheckoutSummary();
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCart();
  renderProducts();

  if (checkoutModal.classList.contains("open")) {
    renderCheckoutSummary();
  }

  showToast("Produk dihapus dari keranjang.");
}

function getCartSubtotal() {
  return cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function renderCart() {
  cartItems.replaceChildren();
  $("#cartCount").textContent = getCartCount();
  $("#cartSubtotal").textContent = formatRupiah(getCartSubtotal());

  if (cart.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Keranjang masih kosong. Yuk, pilih produk!";
    cartItems.append(empty);
    $("#checkoutButton").disabled = true;
    return;
  }

  $("#checkoutButton").disabled = false;

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;

    const row = document.createElement("div");
    row.className = "cart-item";

    const image = document.createElement("div");
    image.className = "cart-item-image";
    image.append(makeProductImage(product));

    const details = document.createElement("div");

    const name = document.createElement("h4");
    name.textContent = product.name;

    const subtotal = document.createElement("p");
    subtotal.textContent = formatRupiah(product.price * item.quantity);

    const controls = document.createElement("div");
    controls.className = "qty-control";

    const minus = document.createElement("button");
    minus.type = "button";
    minus.textContent = "−";
    minus.setAttribute("aria-label", "Kurangi " + product.name);
    minus.addEventListener("click", () => changeCartQuantity(product.id, -1));

    const count = document.createElement("span");
    count.textContent = item.quantity;

    const plus = document.createElement("button");
    plus.type = "button";
    plus.textContent = "+";
    plus.setAttribute("aria-label", "Tambah " + product.name);
    plus.disabled = item.quantity >= product.stock;
    plus.addEventListener("click", () => changeCartQuantity(product.id, 1));

    controls.append(minus, count, plus);
    details.append(name, subtotal, controls);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-button";
    remove.textContent = "Hapus";
    remove.addEventListener("click", () => removeFromCart(product.id));

    row.append(image, details, remove);
    cartItems.append(row);
  });
}

function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("visible");
  document.body.classList.add("no-scroll");
  $("#closeCart").focus();
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("visible");
  document.body.classList.remove("no-scroll");
  $("#openCart").focus();
}

// ================================================
// CHECKOUT
// ================================================

function getShippingFee() {
  return $("#deliveryMethod").value === "delivery"
    ? STORE.deliveryFee
    : 0;
}

function renderCheckoutSummary() {
  checkoutItems.replaceChildren();

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;

    const row = document.createElement("div");
    row.className = "summary-item";

    const label = document.createElement("span");
    label.textContent = product.name + " × " + item.quantity;

    const amount = document.createElement("span");
    amount.textContent = formatRupiah(product.price * item.quantity);

    row.append(label, amount);
    checkoutItems.append(row);
  });

  const subtotal = getCartSubtotal();
  const shipping = getShippingFee();

  $("#checkoutSubtotal").textContent = formatRupiah(subtotal);
  $("#shippingCost").textContent = formatRupiah(shipping);
  $("#checkoutTotal").textContent = formatRupiah(subtotal + shipping);

  $("#shippingNote").textContent =
    $("#deliveryMethod").value === "delivery"
      ? "Biaya antar contoh: " + formatRupiah(STORE.deliveryFee) +
        ". Konfirmasikan biaya dan jangkauan pengantaran kepada toko."
      : "Pengambilan dilakukan di toko. Tidak ada biaya pengiriman.";

  $("#customerAddress").required =
    $("#deliveryMethod").value === "delivery";
}

function openCheckout() {
  if (cart.length === 0) {
    showToast("Keranjang masih kosong.");
    return;
  }

  closeCart();
  renderCheckoutSummary();
  checkoutModal.classList.add("open");
  document.body.classList.add("no-scroll");
  $("#customerName").focus();
}

function closeCheckout() {
  checkoutModal.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

function validateCartStock() {
  for (const item of cart) {
    const product = products.find(p => p.id === item.id);

    if (!product || item.quantity < 1 || item.quantity > product.stock) {
      return false;
    }
  }

  return cart.length > 0;
}

function createWhatsAppMessage(customer) {
  const lines = [
    "PESANAN BARU - " + STORE.name,
    "--------------------------------",
    "Nama: " + customer.name,
    "Telepon: " + customer.phone,
    "Alamat: " + (customer.address || "Ambil di toko"),
    "Pengiriman: " + customer.delivery,
    "Pembayaran: " + customer.payment,
    "",
    "DAFTAR BARANG:"
  ];

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;

    lines.push(
      "- " + product.name + " (" + product.unit + ")" +
      " x " + item.quantity +
      " = " + formatRupiah(product.price * item.quantity)
    );
  });

  lines.push(
    "",
    "Jumlah barang: " + getCartCount() + " unit",
    "Subtotal: " + formatRupiah(getCartSubtotal()),
    "Biaya pengiriman: " + formatRupiah(getShippingFee()),
    "TOTAL: " + formatRupiah(getCartSubtotal() + getShippingFee()),
    "Catatan: " + (customer.notes || "-"),
    "",
    "Mohon konfirmasi ketersediaan dan pesanan ini. Terima kasih."
  );

  return lines.join("\n");
}

$("#checkoutForm").addEventListener("submit", event => {
  event.preventDefault();

  if (!validateCartStock()) {
    showToast("Keranjang tidak valid. Periksa kembali produk.");
    renderCart();
    return;
  }

  const name = $("#customerName").value.trim();
  const phone = $("#customerPhone").value.trim();
  const address = $("#customerAddress").value.trim();
  const notes = $("#orderNotes").value.trim();

  const deliveryValue = $("#deliveryMethod").value;
  const paymentValue = $("#paymentMethod").value;

  if (name.length < 2) {
    showToast("Masukkan nama lengkap yang valid.");
    $("#customerName").focus();
    return;
  }

  // Validasi sederhana nomor telepon, bukan verifikasi kepemilikan.
  const normalizedPhone = phone.replace(/[\s()-]/g, "");
  if (!/^\+?\d{8,15}$/.test(normalizedPhone)) {
    showToast("Periksa kembali nomor telepon Anda.");
    $("#customerPhone").focus();
    return;
  }

  if (deliveryValue === "delivery" && address.length < 8) {
    showToast("Masukkan alamat pengantaran yang lengkap.");
    $("#customerAddress").focus();
    return;
  }

  const customer = {
    name,
    phone,
    address,
    notes,
    delivery: deliveryValue === "pickup" ? "Ambil di toko" : "Diantar",
    payment: paymentValue === "cod"
      ? "Tunai saat pengambilan/pengantaran"
      : "Transfer manual"
  };

  if (!STORE.whatsapp || !/^\d{8,15}$/.test(STORE.whatsapp)) {
    showToast("Nomor WhatsApp toko belum dikonfigurasi dengan benar.");
    return;
  }

  const message = createWhatsAppMessage(customer);
  const url = "https://wa.me/" + STORE.whatsapp +
    "?text=" + encodeURIComponent(message);

  // Buka WhatsApp langsung dari aksi pelanggan agar tidak mudah diblokir.
  // Keranjang sengaja TIDAK dikosongkan di sini.
  const whatsappWindow = window.open(url, "_blank");

  if (!whatsappWindow) {
    showToast("WhatsApp tidak terbuka. Izinkan pop-up atau gunakan tautan manual.");
    return;
  }

  showToast("Pesan disiapkan. Kirim pesan di WhatsApp, lalu tunggu konfirmasi toko.");
});

// ================================================
// EVENT LISTENERS
// ================================================

$("#searchInput").addEventListener("input", event => {
  searchTerm = event.target.value.trim();
  renderProducts();
});

$("#sortSelect").addEventListener("change", event => {
  sortMode = event.target.value;
  renderProducts();
});

$("#promoOnly").addEventListener("change", event => {
  promoOnly = event.target.checked;
  renderProducts();
});

$("#resetFilters").addEventListener("click", () => {
  selectedCategory = "Semua Produk";
  searchTerm = "";
  sortMode = "default";
  promoOnly = false;

  $("#searchInput").value = "";
  $("#sortSelect").value = "default";
  $("#promoOnly").checked = false;

  renderCategories();
  renderProducts();
});

$("#openCart").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#continueShopping").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

$("#checkoutButton").addEventListener("click", openCheckout);
$("#closeCheckout").addEventListener("click", closeCheckout);

$("#deliveryMethod").addEventListener("change", renderCheckoutSummary);

checkoutModal.addEventListener("click", event => {
  if (event.target === checkoutModal) closeCheckout();
});

$("#menuToggle").addEventListener("click", () => {
  const nav = $("#navMenu");
  const isOpen = nav.classList.toggle("open");

  $("#menuToggle").setAttribute("aria-expanded", String(isOpen));
  $("#menuToggle").setAttribute(
    "aria-label",
    isOpen ? "Tutup menu" : "Buka menu"
  );
  $("#menuToggle").textContent = isOpen ? "✕" : "☰";
});

$("#navMenu").querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    $("#navMenu").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
    $("#menuToggle").setAttribute("aria-label", "Buka menu");
    $("#menuToggle").textContent = "☰";
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (checkoutModal.classList.contains("open")) {
      closeCheckout();
    } else if (cartDrawer.classList.contains("open")) {
      closeCart();
    }

    $("#navMenu").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
    $("#menuToggle").textContent = "☰";
  }
});

// ================================================
// INFORMASI TOKO DAN INISIALISASI
// ================================================

function renderStoreInfo() {
  $("#storeAddress").textContent = STORE.address;
  $("#storeHours").textContent = STORE.hours;
  $("#storePhone").textContent = STORE.whatsapp;

  $("#contactWhatsApp").href =
    "https://wa.me/" + STORE.whatsapp;

  $("#mapLink").href = STORE.mapUrl;
  $("#currentYear").textContent = new Date().getFullYear();
}

// Mulai website.
renderStoreInfo();
renderCategories();
renderProducts();
renderCart();
