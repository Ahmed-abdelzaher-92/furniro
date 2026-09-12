'use strict';

/* =========================================================
   DATA
========================================================= */
const products = [
  { id: 1, name: "Syltherine", category: "Dining", description: "Stylish cafe chair", price: 2500000, oldPrice: 3500000, image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80", badge: "-30%", badgeType: "sale" },
  { id: 2, name: "Leviosa", category: "Living", description: "Stylish cafe chair", price: 2500000, oldPrice: null, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80", badge: null, badgeType: null },
  { id: 3, name: "Lolito", category: "Living", description: "Luxury big sofa", price: 7000000, oldPrice: 14000000, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80", badge: "-50%", badgeType: "sale" },
  { id: 4, name: "Respira", category: "Outdoor", description: "Outdoor bar table and stool", price: 500000, oldPrice: null, image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80", badge: "New", badgeType: "new" },
  { id: 5, name: "Grifo", category: "Living", description: "Night lamp", price: 1500000, oldPrice: null, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80", badge: null, badgeType: null },
  { id: 6, name: "Muggo", category: "Bedroom", description: "Small mug", price: 150000, oldPrice: null, image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=600&q=80", badge: "New", badgeType: "new" },
  { id: 7, name: "Pingky", category: "Bedroom", description: "Cute bed set", price: 7000000, oldPrice: 14000000, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80", badge: "-50%", badgeType: "sale" },
  { id: 8, name: "Potty", category: "Dining", description: "Minimalist flower pot", price: 500000, oldPrice: null, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80", badge: "New", badgeType: "new" },
  { id: 9, name: "Wardiao", category: "Dining", description: "Solid wood dining table", price: 3200000, oldPrice: null, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=80", badge: null, badgeType: null },
  { id: 10, name: "Cordiro", category: "Living", description: "Modern accent armchair", price: 2100000, oldPrice: 2800000, image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=600&q=80", badge: "-25%", badgeType: "sale" },
  { id: 11, name: "Nooka", category: "Outdoor", description: "Rattan lounge chair", price: 1800000, oldPrice: null, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80", badge: null, badgeType: null },
  { id: 12, name: "Beldure", category: "Bedroom", description: "Upholstered platform bed", price: 8500000, oldPrice: null, image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=600&q=80", badge: "New", badgeType: "new" }
];

const categories = [
  { id: "dining", name: "Dining", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80" },
  { id: "living", name: "Living", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80" },
  { id: "bedroom", name: "Bedroom", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80" }
];

const articles = [
  { id: 1, title: "Going all-in with millennial design", date: "03 Aug 2022", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=500&q=80" },
  { id: 2, title: "Exploring new ways of decorating", date: "03 Aug 2022", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80" },
  { id: 3, title: "Handmade pieces that took time to make", date: "03 Aug 2022", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=500&q=80" }
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=600&q=80", alt: "Cozy reading corner with armchair", size: "tall" },
  { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80", alt: "Minimal wooden dining space", size: "" },
  { src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80", alt: "Bright living room with sofa", size: "wide" },
  { src: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=600&q=80", alt: "Bedroom styled with neutral tones", size: "" },
  { src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80", alt: "Modern sofa detail", size: "" },
  { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80", alt: "Styled console table", size: "tall" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80", alt: "Outdoor furniture set", size: "" }
];

/* =========================================================
   STATE
========================================================= */
const state = {
  filter: "All",
  sort: "default",
  search: "",
  visibleCount: 8,
  cart: JSON.parse(localStorage.getItem("furniro_cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("furniro_wishlist") || "[]")
};

const formatPrice = (n) => "Rp " + n.toLocaleString("id-ID");

/* =========================================================
   RENDER: CATEGORIES
========================================================= */
function renderCategories() {
  const grid = document.getElementById("categoryGrid");
  grid.innerHTML = categories.map(cat => `
    <div class="category-card reveal" data-category="${cat.name}" tabindex="0" role="button" aria-label="Browse ${cat.name} furniture">
      <img src="${cat.image}" alt="${cat.name} furniture and interior styling" loading="lazy">
      <div class="category-card__label">${cat.name}</div>
    </div>
  `).join("");

  grid.querySelectorAll(".category-card").forEach(card => {
    const activate = () => {
      state.filter = card.dataset.category;
      state.visibleCount = 8;
      syncFilterButtons();
      renderProducts();
      document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    };
    card.addEventListener("click", activate);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter") activate(); });
  });
  observeReveal();
}

function syncFilterButtons() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === state.filter);
  });
}

/* =========================================================
   RENDER: PRODUCTS
========================================================= */
function getFilteredProducts() {
  let list = [...products];

  if (state.filter !== "All") {
    list = list.filter(p => p.category === state.filter);
  }

  if (state.search.trim()) {
    const q = state.search.trim().toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  switch (state.sort) {
    case "price-asc": list.sort((a, b) => a.price - b.price); break;
    case "price-desc": list.sort((a, b) => b.price - a.price); break;
    case "name-asc": list.sort((a, b) => a.name.localeCompare(b.name)); break;
    case "name-desc": list.sort((a, b) => b.name.localeCompare(a.name)); break;
  }

  return list;
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const emptyState = document.getElementById("emptyState");
  const showMoreBtn = document.getElementById("showMoreBtn");
  const filtered = getFilteredProducts();
  const visible = filtered.slice(0, state.visibleCount);

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.hidden = false;
    showMoreBtn.style.display = "none";
    return;
  }
  emptyState.hidden = true;

  grid.innerHTML = visible.map(p => {
    const isWishlisted = state.wishlist.includes(p.id);
    return `
    <article class="product-card reveal in-view" data-id="${p.id}">
      <div class="product-card__media" data-action="open-modal" data-id="${p.id}">
        <img src="${p.image}" alt="${p.name} — ${p.description}" loading="lazy">
        ${p.badge ? `<span class="product-card__badge ${p.badgeType}">${p.badge}</span>` : ""}
        <div class="product-card__overlay">
          <button class="overlay-btn" data-action="add-cart" data-id="${p.id}">Add to Cart</button>
          <div class="overlay-icons">
            <button data-action="share" data-id="${p.id}" aria-label="Share ${p.name}"><i class="fa-solid fa-share-nodes"></i> Share</button>
            <button data-action="compare" data-id="${p.id}" aria-label="Compare ${p.name}"><i class="fa-solid fa-arrows-rotate"></i> Compare</button>
            <button data-action="wishlist" data-id="${p.id}" aria-label="Toggle wishlist for ${p.name}" class="${isWishlisted ? "active" : ""}"><i class="fa-${isWishlisted ? "solid" : "regular"} fa-heart"></i> Like</button>
          </div>
        </div>
      </div>
      <div class="product-card__body">
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__desc">${p.description}</p>
        <div class="product-card__prices">
          <span class="product-card__price">${formatPrice(p.price)}</span>
          ${p.oldPrice ? `<span class="product-card__old-price">${formatPrice(p.oldPrice)}</span>` : ""}
        </div>
      </div>
    </article>
  `;
  }).join("");

  showMoreBtn.style.display = filtered.length > state.visibleCount ? "inline-flex" : "none";
}

/* =========================================================
   RENDER: ARTICLES
========================================================= */
function renderArticles() {
  const grid = document.getElementById("articlesGrid");
  grid.innerHTML = articles.map(a => `
    <article class="article-card reveal">
      <div class="article-card__media">
        <img src="${a.image}" alt="${a.title}" loading="lazy">
      </div>
      <span class="article-card__date">${a.date}</span>
      <h3 class="article-card__title">${a.title}</h3>
      <a href="#" class="article-card__link" data-action="read-more">Read more <i class="fa-solid fa-arrow-right"></i></a>
    </article>
  `).join("");
  observeReveal();
}

/* =========================================================
   RENDER: GALLERY
========================================================= */
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = galleryImages.map(g => `
    <div class="gallery-item reveal ${g.size ? "gallery-item--" + g.size : ""}">
      <img src="${g.src}" alt="${g.alt}" loading="lazy">
    </div>
  `).join("");
  observeReveal();
}

/* =========================================================
   CART
========================================================= */
function saveCart() { localStorage.setItem("furniro_cart", JSON.stringify(state.cart)); }

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const existing = state.cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id, qty: 1 });
  }
  saveCart();
  updateCartCount();
  renderCartDrawer();
  showToast("Product added to cart", "fa-solid fa-cart-shopping");
}

function changeQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id, false);
  } else {
    saveCart();
    updateCartCount();
    renderCartDrawer();
  }
}

function removeFromCart(id, notify = true) {
  state.cart = state.cart.filter(i => i.id !== id);
  saveCart();
  updateCartCount();
  renderCartDrawer();
  if (notify) showToast("Product removed from cart", "fa-solid fa-trash");
}

function updateCartCount() {
  const count = state.cart.reduce((sum, i) => sum + i.qty, 0);
  const el = document.getElementById("cartCount");
  el.textContent = count;
  el.classList.remove("pulse");
  void el.offsetWidth;
  el.classList.add("pulse");
}

function renderCartDrawer() {
  const container = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");

  if (state.cart.length === 0) {
    container.innerHTML = `<p class="cart-drawer__empty">Your cart is empty.</p>`;
    totalEl.textContent = formatPrice(0);
    return;
  }

  let total = 0;
  container.innerHTML = state.cart.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return "";
    total += product.price * item.qty;
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div class="cart-item__info">
          <div class="cart-item__name">${product.name}</div>
          <div class="cart-item__price">${formatPrice(product.price)}</div>
          <div class="cart-item__qty">
            <button data-action="qty-dec" data-id="${product.id}" aria-label="Decrease quantity">−</button>
            <span>${item.qty}</span>
            <button data-action="qty-inc" data-id="${product.id}" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="cart-item__remove" data-action="remove-cart" data-id="${product.id}" aria-label="Remove ${product.name}"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `;
  }).join("");
  totalEl.textContent = formatPrice(total);
}

function openCartDrawer() {
  document.getElementById("cartDrawer").classList.add("active");
  document.getElementById("cartOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeCartDrawer() {
  document.getElementById("cartDrawer").classList.remove("active");
  document.getElementById("cartOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

/* =========================================================
   WISHLIST
========================================================= */
function saveWishlist() { localStorage.setItem("furniro_wishlist", JSON.stringify(state.wishlist)); }

function toggleWishlist(id) {
  const product = products.find(p => p.id === id);
  const index = state.wishlist.indexOf(id);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast("Removed from wishlist", "fa-regular fa-heart");
  } else {
    state.wishlist.push(id);
    showToast("Added to wishlist", "fa-solid fa-heart");
  }
  saveWishlist();
  updateWishlistCount();
  renderProducts();
}

function updateWishlistCount() {
  const el = document.getElementById("wishlistCount");
  el.textContent = state.wishlist.length;
  el.classList.remove("pulse");
  void el.offsetWidth;
  el.classList.add("pulse");
}

/* =========================================================
   TOAST
========================================================= */
function showToast(message, icon = "fa-solid fa-circle-check") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="${icon}"></i><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

/* =========================================================
   PRODUCT MODAL
========================================================= */
function openProductModal(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const isWishlisted = state.wishlist.includes(id);

  document.getElementById("modalContent").innerHTML = `
    <img src="${product.image}" alt="${product.name} — ${product.description}" class="modal__img">
    <div class="modal__info">
      <span class="modal__category">${product.category}</span>
      <h2 class="modal__name" id="modalProductName">${product.name}</h2>
      <p class="modal__desc">${product.description}. Crafted with premium materials and finished for lasting quality — a timeless addition to any room.</p>
      <div class="modal__prices">
        ${formatPrice(product.price)}
        ${product.oldPrice ? `<span class="modal__old-price">${formatPrice(product.oldPrice)}</span>` : ""}
      </div>
      <div class="modal__actions">
        <button class="btn btn--primary" data-action="add-cart" data-id="${product.id}">Add to Cart</button>
        <button class="modal__wishlist-btn ${isWishlisted ? "active" : ""}" data-action="wishlist" data-id="${product.id}" aria-label="Toggle wishlist">
          <i class="fa-${isWishlisted ? "solid" : "regular"} fa-heart"></i>
        </button>
      </div>
    </div>
  `;

  const modal = document.getElementById("productModal");
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("modalCloseBtn").focus();
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* =========================================================
   SCROLL REVEAL
========================================================= */
let revealObserver;
function observeReveal() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
  }
  document.querySelectorAll(".reveal:not(.in-view)").forEach(el => revealObserver.observe(el));
}

/* =========================================================
   MOBILE MENU
========================================================= */
function initMobileMenu() {
  const hamburger = document.getElementById("hamburgerBtn");
  const mobileNav = document.getElementById("mobileNav");
  const overlay = document.getElementById("overlay");

  function toggle(open) {
    mobileNav.classList.toggle("active", open);
    overlay.classList.toggle("active", open);
    hamburger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  }

  hamburger.addEventListener("click", () => {
    toggle(!mobileNav.classList.contains("active"));
  });
  overlay.addEventListener("click", () => toggle(false));
  mobileNav.querySelectorAll(".mobile-nav__link").forEach(link => {
    link.addEventListener("click", () => toggle(false));
  });
}

/* =========================================================
   SEARCH
========================================================= */
function initSearch() {
  const searchBtn = document.getElementById("searchBtn");
  const closeBtn = document.getElementById("closeSearchBtn");
  const overlay = document.getElementById("searchOverlay");
  const input = document.getElementById("searchInput");

  searchBtn.addEventListener("click", () => {
    overlay.classList.add("active");
    setTimeout(() => input.focus(), 150);
  });
  closeBtn.addEventListener("click", () => overlay.classList.remove("active"));

  input.addEventListener("input", (e) => {
    state.search = e.target.value;
    state.visibleCount = 8;
    renderProducts();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      overlay.classList.remove("active");
    }
  });
}

/* =========================================================
   EVENT DELEGATION (product actions)
========================================================= */
function initDelegatedEvents() {
  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-action]");
    if (!target) return;
    const action = target.dataset.action;
    const id = Number(target.dataset.id);

    switch (action) {
      case "add-cart": addToCart(id); break;
      case "wishlist": toggleWishlist(id); break;
      case "open-modal": openProductModal(id); break;
      case "qty-inc": changeQty(id, 1); break;
      case "qty-dec": changeQty(id, -1); break;
      case "remove-cart": removeFromCart(id); break;
      case "share":
        showToast("Link copied to clipboard", "fa-solid fa-link");
        break;
      case "compare":
        showToast("Added to compare list", "fa-solid fa-arrows-rotate");
        break;
      case "read-more":
        e.preventDefault();
        showToast("Full article coming soon", "fa-solid fa-newspaper");
        break;
    }
  });
}

/* =========================================================
   AUTH MODAL (Login / Sign Up)
========================================================= */
function openAuthModal() {
  const modal = document.getElementById("authModal");
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setTimeout(() => document.getElementById("loginEmail").focus(), 200);
}

function closeAuthModal() {
  const modal = document.getElementById("authModal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function switchAuthTab(tab) {
  const tabs = document.getElementById("authTabs");
  const title = document.getElementById("authModalTitle");
  const subtitle = document.querySelector(".auth-modal__header p");
  tabs.dataset.active = tab;

  document.querySelectorAll(".auth-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });

  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (tab === "login") {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    title.textContent = "Welcome Back";
    subtitle.textContent = "Sign in to manage your orders and wishlist";
  } else {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    title.textContent = "Create Account";
    subtitle.textContent = "Join Furniro for a personalized shopping experience";
  }
}

function validateField(input, errorEl, validator) {
  const valid = validator(input.value);
  input.classList.toggle("invalid", !valid);
  errorEl.classList.toggle("show", !valid);
  if (!valid) {
    input.classList.remove("invalid");
    void input.offsetWidth;
    input.classList.add("invalid");
  }
  return valid;
}

const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const isValidPassword = (v) => v.length >= 6;
const isNotEmpty = (v) => v.trim().length > 0;

function initAuthModal() {
  const accountBtn = document.getElementById("accountBtn");
  const footerAccount = document.getElementById("footerAccount");
  const closeBtn = document.getElementById("authModalCloseBtn");
  const backdrop = document.getElementById("authModalBackdrop");
  const tabs = document.getElementById("authTabs");

  accountBtn.addEventListener("click", openAuthModal);
  footerAccount.addEventListener("click", (e) => { e.preventDefault(); openAuthModal(); });
  closeBtn.addEventListener("click", closeAuthModal);
  backdrop.addEventListener("click", closeAuthModal);

  tabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".auth-tab");
    if (!btn) return;
    switchAuthTab(btn.dataset.tab);
  });

  // Password visibility toggles
  document.querySelectorAll(".toggle-password").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      const icon = btn.querySelector("i");
      const isPassword = target.type === "password";
      target.type = isPassword ? "text" : "password";
      icon.className = isPassword ? "fa-regular fa-eye-slash" : "fa-regular fa-eye";
    });
  });

  // Login form
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    const emailValid = validateField(email, document.getElementById("loginEmailError"), isValidEmail);
    const passwordValid = validateField(password, document.getElementById("loginPasswordError"), isValidPassword);

    if (emailValid && passwordValid) {
      showToast("Signed in successfully", "fa-solid fa-circle-check");
      closeAuthModal();
      e.target.reset();
    }
  });

  // Signup form
  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signupName");
    const email = document.getElementById("signupEmail");
    const password = document.getElementById("signupPassword");
    const terms = document.getElementById("agreeTerms");

    const nameValid = validateField(name, document.getElementById("signupNameError"), isNotEmpty);
    const emailValid = validateField(email, document.getElementById("signupEmailError"), isValidEmail);
    const passwordValid = validateField(password, document.getElementById("signupPasswordError"), isValidPassword);

    if (nameValid && emailValid && passwordValid && terms.checked) {
      showToast("Account created successfully", "fa-solid fa-circle-check");
      closeAuthModal();
      e.target.reset();
    } else if (!terms.checked) {
      showToast("Please agree to the Terms & Privacy Policy", "fa-solid fa-circle-exclamation");
    }
  });

  // Social buttons (placeholder)
  document.querySelectorAll(".auth-social button").forEach(btn => {
    btn.addEventListener("click", () => {
      const provider = btn.dataset.provider === "google" ? "Google" : "Facebook";
      showToast(`${provider} sign-in coming soon`, "fa-solid fa-circle-info");
    });
  });

  // Forgot password
  document.getElementById("forgotPasswordLink").addEventListener("click", (e) => {
    e.preventDefault();
    showToast("Password reset link sent if account exists", "fa-solid fa-envelope-circle-check");
  });
}

/* =========================================================
   INIT
========================================================= */
function init() {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderCategories();
  renderProducts();
  renderArticles();
  renderGallery();
  renderCartDrawer();
  updateCartCount();
  updateWishlistCount();
  observeReveal();
  initMobileMenu();
  initSearch();
  initDelegatedEvents();
  initAuthModal();

  // Filters
  document.getElementById("filterBar").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    state.filter = btn.dataset.filter;
    state.visibleCount = 8;
    syncFilterButtons();
    renderProducts();
  });

  // Sort
  document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderProducts();
  });

  // Show more
  document.getElementById("showMoreBtn").addEventListener("click", () => {
    state.visibleCount += 8;
    renderProducts();
  });

  // Modal close
  document.getElementById("modalCloseBtn").addEventListener("click", closeProductModal);
  document.getElementById("modalBackdrop").addEventListener("click", closeProductModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeCartDrawer();
      closeAuthModal();
    }
  });

  // Cart drawer open/close
  document.getElementById("cartBtn").addEventListener("click", openCartDrawer);
  document.getElementById("cartCloseBtn").addEventListener("click", closeCartDrawer);
  document.getElementById("cartOverlay").addEventListener("click", closeCartDrawer);
  document.getElementById("footerCart").addEventListener("click", (e) => { e.preventDefault(); openCartDrawer(); });

  // Wishlist button in header scrolls to top of products (simple UX)
  document.getElementById("wishlistBtn").addEventListener("click", () => {
    state.filter = "All";
    state.search = "";
    syncFilterButtons();
    renderProducts();
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    showToast(`You have ${state.wishlist.length} item(s) in your wishlist`, "fa-solid fa-heart");
  });
  document.getElementById("footerWishlist").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("wishlistBtn").click();
  });

  // Account & checkout handled by initAuthModal() / cart drawer
  document.getElementById("footerCheckout").addEventListener("click", (e) => {
    e.preventDefault();
    openCartDrawer();
  });

  // Newsletter subscribe
  document.getElementById("subscribeForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("subscribeEmail");
    if (emailInput.value.trim()) {
      showToast("Subscribed successfully", "fa-solid fa-envelope-circle-check");
      emailInput.value = "";
    }
  });

  // Active nav link highlighting on scroll
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav__link");
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(sec => navObserver.observe(sec));
}

document.addEventListener("DOMContentLoaded", init);