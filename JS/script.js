// ================= WhatsApp Settings =================
const WHATSAPP_NUMBER = "0201012345678";
const WA_NUMBER = WHATSAPP_NUMBER.replace(/\D/g, "").replace(/^0/, "");

// ================= Products =================
const PRODUCTS = [
  {
    id: 1,
    cat: "honey",
    color: "#E8B923",
    shape: "jar",
    price: null,
    image: "Image/عسل البرسيم.jfif",
    ar: "عسل البرسيم",
    en: "Clover Honey",
    dAr: "عسل نحل بلون ذهبي فاتح وطعم ناعم.",
    dEn: "Light golden honey with a mild, smooth taste.",
  },
  {
    id: 2,
    cat: "honey",
    color: "#F2C94C",
    shape: "jar",
    price: null,
    image: "Image/عسل الموالح.jfif",
    ar: "عسل الموالح",
    en: "Citrus Honey",
    dAr: "عسل برائحة زهور الموالح المميزة.",
    dEn: "Honey with the distinctive aroma of citrus blossom.",
  },
  {
    id: 3,
    cat: "honey",
    color: "#C98A1B",
    shape: "jar",
    price: null,
    image: "Image/عسل زهرة الكافور.jfif",
    ar: "عسل زهرة الكافور",
    en: "Eucalyptus Honey",
    dAr: "عسل داكن قليلاً بنكهة مميزة.",
    dEn: "Slightly darker honey with a bold, distinct flavor.",
  },
  {
    id: 4,
    cat: "honey",
    color: "#7A4A1A",
    shape: "jar",
    price: null,
    image: "Image/عسل حبة البركة.jfif",
    ar: "عسل حبة البركة",
    en: "Black Seed Honey",
    dAr: "عسل النحل ممزوج بحبة البركة.",
    dEn: "Natural honey blended with black seed.",
  },
  {
    id: 5,
    cat: "honey",
    color: "#A9650F",
    shape: "jar",
    price: null,
    image: "Image/عسل السدر الجبلي.jfif",
    ar: "عسل السدر الجبلي",
    en: "Mountain Sidr Honey",
    dAr: "عسل سدر جبلي بقوام غني ونكهة مميزة.",
    dEn: "Mountain sidr honey with a rich texture and flavor.",
  },
  {
    id: 6,
    cat: "honey",
    color: "#E0A526",
    shape: "jar",
    price: null,
    image: "Image/عسل زهرة الأعشاب.jfif",
    ar: "عسل زهرة الأعشاب",
    en: "Wildflower Honey",
    dAr: "عسل من رحيق تشكيلة من الأزهار البرية.",
    dEn: "Honey from the nectar of mixed wild flowers.",
  },
  {
    id: 7,
    cat: "bee",
    color: "#F7E7B0",
    shape: "jar",
    price: null,
    image: "Image/غذاء ملكات النحل.jfif",
    ar: "غذاء ملكات النحل",
    en: "Royal Jelly",
    dAr: "من منتجات خلية النحل الطبيعية.",
    dEn: "A natural product of the beehive.",
  },
  {
    id: 8,
    cat: "bee",
    color: "#E9A317",
    shape: "pill",
    price: null,
    image: "Image/حبوب لقاح النحل.jfif",
    ar: "حبوب لقاح النحل",
    en: "Bee Pollen",
    dAr: "حبوب لقاح طبيعية بألوان متنوعة.",
    dEn: "Natural pollen granules in varied colors.",
  },
  {
    id: 9,
    cat: "bee",
    color: "#E3B04B",
    shape: "block",
    price: null,
    image: "Image/شمع النحل.jpg",
    ar: "شمع النحل الطبيعي",
    en: "Natural Beeswax",
    dAr: "شمع نحل طبيعي متعدد الاستخدامات.",
    dEn: "Natural beeswax for many uses.",
  },
];

// ================= Translations =================
const I18N = {
  ar: {
    brand: "مناحل الكابتن",
    nav_home: "الرئيسية",
    nav_all: "كل المنتجات",
    nav_honey: "منتجات العسل",
    nav_bee: "منتجات النحل",
    nav_about: "من نحن",
    nav_contact: "اتصل بنا",
    wa_order: "اطلب عبر واتساب",
    hero_h: "مناحل الكابتن – عسل نحل طبيعي",
    hero_p:
      "جودة الطبيعة في كل قطرة.. أجود أنواع العسل ومنتجات النحل الطبيعية.",
    shop: "تسوق الآن",
    discover: "اكتشف منتجاتنا",
    products: "منتجاتنا",
    search: "ابحث عن منتج...",
    f_all: "الكل",
    f_honey: "العسل",
    f_bee: "منتجات النحل",
    f_extra: "أعشاب ومكملات",
    empty: "لا توجد منتجات مطابقة.",
    why: "لماذا مناحل الكابتن؟",
    about_h: "من نحن – مناحل الكابتن",
    about_p:
      "مناحل الكابتن وجهتك للحصول على أجود أنواع العسل الطبيعي ومنتجات النحل المختلفة، حيث نوفر تشكيلة متنوعة من عسل النحل وغذاء الملكات وحبوب اللقاح وشمع النحل والأعشاب والمكملات الغذائية.",
    rev_h: "آراء العملاء",
    rev_note: "* نماذج تجريبية – يُستبدل بآراء العملاء الحقيقية قبل النشر.",
    contact_h: "تواصل معنا",
    f_name: "الاسم",
    f_email: "البريد الإلكتروني",
    f_msg: "الرسالة",
    send: "إرسال",
    ok: "تم التحقق من الرسالة! (اربط النموذج بخدمة إرسال قبل النشر)",
    err_name: "يرجى إدخال اسم صحيح (3 أحرف على الأقل).",
    err_email: "يرجى إدخال بريد إلكتروني صحيح.",
    err_msg: "الرسالة قصيرة (10 أحرف على الأقل).",
    foot_p: "أجود أنواع العسل الطبيعي ومنتجات النحل.",
    links: "روابط سريعة",
    cats: "الأقسام",
    copy: "© 2026 مناحل الكابتن – جميع الحقوق محفوظة.",
    cart: "سلة التسوق",
    checkout: "إتمام الطلب عبر واتساب",
    total: "الإجمالي",
    cart_empty: "السلة فارغة.",
    add: "أضف للسلة",
    wa_btn: "اطلب عبر واتساب",
    price_ph: "السعر: قابل للتعديل",
    price_ask: "السعر عبر واتساب",
    cur: "ج.م",
    cat: { honey: "عسل طبيعي", bee: "منتجات النحل", extra: "أعشاب ومكملات" },
    hello: "مرحباً مناحل الكابتن، أريد طلب:",
    item: "المنتج",
    qty: "الكمية",
    confirm: "برجاء تأكيد السعر والتفاصيل.",
    general: "مرحباً مناحل الكابتن، أريد الاستفسار عن منتجاتكم.",
    whyL: [
      "منتجات متنوعة من العسل الطبيعي",
      "جودة واهتمام بالتفاصيل",
      "تنوع منتجات النحل",
      "سهولة الطلب عبر واتساب",
      "خدمة عملاء مميزة",
    ],
    revT: "نموذج تقييم – سيتم استبداله برأي عميل حقيقي.",
    cust: "اسم العميل",
  },

  en: {
    brand: "El Captain Apiaries",
    nav_home: "Home",
    nav_all: "All Products",
    nav_honey: "Honey",
    nav_bee: "Bee Products",
    nav_about: "About Us",
    nav_contact: "Contact",
    wa_order: "Order on WhatsApp",
    hero_h: "El Captain Apiaries – Natural Bee Honey",
    hero_p:
      "Nature's quality in every drop. The finest honey and natural bee products.",
    shop: "Shop Now",
    discover: "Discover Our Products",
    products: "Our Products",
    search: "Search products...",
    f_all: "All",
    f_honey: "Honey",
    f_bee: "Bee Products",
    f_extra: "Herbs & Supplements",
    empty: "No matching products.",
    why: "Why El Captain?",
    about_h: "About Us – El Captain Apiaries",
    about_p:
      "El Captain Apiaries is your destination for the finest natural honey and a variety of bee products: bee honey, royal jelly, bee pollen, beeswax, herbs and nutritional supplements.",
    rev_h: "Customer Reviews",
    rev_note:
      "* Sample content – replace with genuine customer reviews before publishing.",
    contact_h: "Contact Us",
    f_name: "Name",
    f_email: "Email",
    f_msg: "Message",
    send: "Send",
    ok: "Message validated! (Connect the form to a mail service before publishing)",
    err_name: "Please enter a valid name (min 3 characters).",
    err_email: "Please enter a valid email.",
    err_msg: "Message too short (min 10 characters).",
    foot_p: "The finest natural honey and bee products.",
    links: "Quick Links",
    cats: "Categories",
    copy: "© 2026 El Captain Apiaries – All rights reserved.",
    cart: "Shopping Cart",
    checkout: "Checkout via WhatsApp",
    total: "Total",
    cart_empty: "Your cart is empty.",
    add: "Add to cart",
    wa_btn: "Order on WhatsApp",
    price_ph: "Price: editable",
    price_ask: "Price via WhatsApp",
    cur: "EGP",
    cat: {
      honey: "Natural Honey",
      bee: "Bee Products",
      extra: "Herbs & Supplements",
    },
    hello: "Hello El Captain Apiaries, I would like to order:",
    item: "Product",
    qty: "Quantity",
    confirm: "Please confirm the price and details.",
    general:
      "Hello El Captain Apiaries, I have a question about your products.",
    whyL: [
      "A variety of natural honeys",
      "Quality and attention to detail",
      "Diverse bee products",
      "Easy ordering via WhatsApp",
      "Outstanding customer service",
    ],
    revT: "Sample review – to be replaced with a real customer's feedback.",
    cust: "Customer name",
  },
};

const WHY_ICONS = [
  "bi-droplet-half",
  "bi-patch-check",
  "bi-hexagon",
  "bi-whatsapp",
  "bi-headset",
];

// ================= State =================
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

let lang = localStorage.getItem("lang") || "ar";
let theme = localStorage.getItem("theme") || "light";
let filter = "all";
let cart = [];

try {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = Array.isArray(savedCart)
    ? savedCart
        .filter(
          (item) =>
            item &&
            PRODUCTS.some((product) => product.id === Number(item.id)) &&
            Number.isInteger(Number(item.qty)) &&
            Number(item.qty) > 0,
        )
        .map((item) => ({
          id: Number(item.id),
          qty: Number(item.qty),
        }))
    : [];
} catch (e) {
  cart = [];
}

const t = (k) => I18N[lang][k];

// ================= Illustrations =================
function art(p) {
  if (p.image) {
    return `<img src="${p.image}" alt="${p.ar}" loading="lazy">`;
  }

  const c = p.color;
  const bg = `<rect width="200" height="200" fill="#F5EBD5"/>`;
  let body;

  if (p.shape === "block") {
    body = `<rect x="45" y="85" width="110" height="70" rx="8" fill="${c}"/>`;
  } else if (p.shape === "pill") {
    body = `<g transform="rotate(-30 100 110)">
      <rect x="55" y="90" width="90" height="40" rx="20" fill="${c}"/>
      <rect x="100" y="90" width="45" height="40" rx="20" fill="#fff"/>
    </g>`;
  } else {
    body = `<rect x="55" y="62" width="90" height="100" rx="18" fill="${c}"/>`;
  }

  return `<svg viewBox="0 0 200 200">${bg}${body}</svg>`;
}

const heroSvg = `
<svg viewBox="0 0 300 300" role="img" aria-label="مرطبان عسل وشهد">
  <circle cx="150" cy="150" r="140" fill="#FFF8E7" opacity=".25"/>
  <rect x="95" y="70" width="110" height="18" rx="5" fill="#3E2723"/>
  <rect x="85" y="88" width="130" height="150" rx="24" fill="#E8B923"/>
  <rect x="100" y="140" width="100" height="55" rx="8" fill="#FFF8E7"/>
  <text x="150" y="175" text-anchor="middle" font-size="17" fill="#3E2723">العسل</text>
</svg>`;

// ================= Rendering =================
function productName(p) {
  return lang === "ar" ? p.ar : p.en;
}

function renderProducts() {
  const search = $("#search");
  const grid = $("#grid");
  const empty = $("#empty");

  if (!search || !grid || !empty) return;

  const q = search.value.trim().toLowerCase();

  const list = PRODUCTS.filter(
    (p) =>
      (filter === "all" || p.cat === filter) &&
      (!q || (p.ar + " " + p.en).toLowerCase().includes(q)),
  );

  grid.innerHTML = list
    .map(
      (p) => `
    <div class="col-6 col-md-4 col-lg-3">
      <article class="pcard">
        <div class="pimg">${art(p)}</div>
        <div class="pbody">
          <span class="pcat">${t("cat")[p.cat]}</span>
          <h3>${productName(p)}</h3>
          <small dir="ltr">${lang === "ar" ? p.en : p.ar}</small>
          <p>${lang === "ar" ? p.dAr : p.dEn}</p>
          <div class="price">
            ${p.price != null ? p.price + " " + t("cur") : t("price_ph")}
          </div>
          <div class="pbtns">
            <button class="btn btn-wa" data-wa="${p.id}">
              <i class="bi bi-whatsapp"></i> ${t("wa_btn")}
            </button>
            <button class="btn btn-gold" data-add="${p.id}">
              <i class="bi bi-bag-plus"></i> ${t("add")}
            </button>
          </div>
        </div>
      </article>
    </div>
  `,
    )
    .join("");

  empty.classList.toggle("d-none", list.length > 0);
}

function renderStatic() {
  const whyGrid = $("#whyGrid");
  const reviews = $("#reviews");

  if (whyGrid) {
    whyGrid.innerHTML = t("whyL")
      .map(
        (x, i) => `
      <div class="col-6 col-lg">
        <div class="why reveal show">
          <i class="bi ${WHY_ICONS[i]}"></i>
          <p class="mt-2 mb-0 fw-bold">${x}</p>
        </div>
      </div>
    `,
      )
      .join("");
  }

  if (reviews) {
    reviews.innerHTML = [1, 2, 3]
      .map(
        (n) => `
      <div class="col-md-4">
        <div class="review">
          <div>${'<i class="bi bi-star-fill"></i>'.repeat(5)}</div>
          <p class="my-2">${t("revT")}</p>
          <strong>${t("cust")} ${n}</strong>
        </div>
      </div>
    `,
      )
      .join("");
  }

  if ($("#heroArt")) $("#heroArt").innerHTML = heroSvg;
  if ($("#aboutArt")) $("#aboutArt").innerHTML = heroSvg;
}

// ================= Language =================
function applyLang() {
  const rtl = lang === "ar";

  document.documentElement.lang = lang;
  document.documentElement.dir = rtl ? "rtl" : "ltr";

  const bsCss = $("#bs-css");
  if (bsCss) {
    bsCss.href = `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap${rtl ? ".rtl" : ""}.min.css`;
  }

  document.title = rtl
    ? "مناحل الكابتن – عسل نحل طبيعي"
    : "El Captain Apiaries – Natural Bee Honey";

  $$("[data-i18n]").forEach((e) => {
    const key = e.dataset.i18n;
    if (I18N[lang][key] !== undefined) {
      e.textContent = t(key);
    }
  });

  $$("[data-i18n-ph]").forEach((e) => {
    const key = e.dataset.i18nPh;
    if (I18N[lang][key] !== undefined) {
      e.placeholder = t(key);
    }
  });

  const langBtn = $("#langBtn");
  if (langBtn) langBtn.textContent = rtl ? "EN" : "عربي";

  renderStatic();
  renderProducts();
  renderCart();
}

// ================= Theme =================
function applyTheme() {
  document.documentElement.setAttribute("data-bs-theme", theme);

  const themeBtn = $("#themeBtn");
  if (themeBtn) {
    themeBtn.innerHTML = `
      <i class="bi bi-${theme === "dark" ? "sun" : "moon-stars"}"></i>
    `;
  }
}

$("#langBtn")?.addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  localStorage.setItem("lang", lang);
  applyLang();
  setWaLinks();
});

$("#themeBtn")?.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme);
  applyTheme();
});

// ================= WhatsApp =================
const waUrl = (message) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

function setWaLinks() {
  $$(".wa-general").forEach((a) => {
    a.href = waUrl(t("general"));
  });
}

function lineFor(p, qty) {
  let message = `${t("item")}: ${productName(p)}\n${t("qty")}: ${qty}`;

  if (p.price != null) {
    message += `\n${t("total")}: ${p.price * qty} ${t("cur")}`;
  }

  return message;
}

function orderOne(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;

  window.open(
    waUrl(`${t("hello")}\n${lineFor(p, 1)}\n${t("confirm")}`),
    "_blank",
    "noopener,noreferrer",
  );
}

// ================= Shopping Cart =================
const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

function addToCart(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;

  const row = cart.find((i) => i.id === id);

  if (row) {
    row.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }

  saveCart();
  renderCart();

  const cartElement = $("#cart");
  if (cartElement && window.bootstrap) {
    bootstrap.Offcanvas.getOrCreateInstance(cartElement).show();
  }
}

function renderCart() {
  const cartCount = $("#cartCount");
  const cartItems = $("#cartItems");
  const cartTotal = $("#cartTotal");
  const checkoutBtn = $("#checkout");

  if (!cartCount || !cartItems || !cartTotal || !checkoutBtn) return;

  const items = cart
    .map((i) => ({
      ...i,
      p: PRODUCTS.find((x) => x.id === i.id),
    }))
    .filter((i) => i.p);

  cartCount.textContent = items.reduce((sum, i) => sum + i.qty, 0);

  cartItems.innerHTML = items.length
    ? items
        .map(
          (i) => `
      <div class="cart-row">
        <div class="thumb">${art(i.p)}</div>

        <div class="flex-grow-1">
          <div class="fw-bold">${productName(i.p)}</div>
          <small>
            ${i.p.price != null ? i.p.price + " " + t("cur") : t("price_ask")}
          </small>
        </div>

        <div class="btn-group btn-group-sm" dir="ltr">
          <button class="btn btn-outline-secondary" data-dec="${i.id}">−</button>
          <span class="btn disabled">${i.qty}</span>
          <button class="btn btn-outline-secondary" data-inc="${i.id}">+</button>
        </div>

        <button class="btn btn-sm text-danger" data-del="${i.id}" aria-label="remove">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    `,
        )
        .join("")
    : `<p class="text-center text-muted mt-4">${t("cart_empty")}</p>`;

  const priced = items.filter((i) => i.p.price != null);
  const sum = priced.reduce((total, i) => total + i.p.price * i.qty, 0);

  cartTotal.textContent = priced.length
    ? `${t("total")}: ${sum} ${t("cur")}`
    : "";

  checkoutBtn.disabled = !items.length;
}

// ================= Checkout =================
function checkout() {
  const items = cart
    .map((i) => ({
      ...i,
      p: PRODUCTS.find((x) => x.id === i.id),
    }))
    .filter((i) => i.p);

  if (!items.length) return;

  let message =
    t("hello") + "\n\n" + items.map((i) => lineFor(i.p, i.qty)).join("\n\n");

  const priced = items.filter((i) => i.p.price != null);

  if (priced.length) {
    const total = priced.reduce((sum, i) => sum + i.p.price * i.qty, 0);

    message += `\n\n${t("total")}: ${total} ${t("cur")}`;
  }

  window.open(
    waUrl(message + "\n" + t("confirm")),
    "_blank",
    "noopener,noreferrer",
  );
}

// ================= Click Events =================
document.addEventListener("click", (e) => {
  const b = e.target.closest(
    "[data-wa],[data-add],[data-inc],[data-dec],[data-del],[data-filter]",
  );

  if (!b) return;

  const d = b.dataset;

  if (d.wa) {
    orderOne(Number(d.wa));
  } else if (d.add) {
    addToCart(Number(d.add));
  } else if (d.inc || d.dec || d.del) {
    const id = Number(d.inc || d.dec || d.del);
    const row = cart.find((i) => i.id === id);

    if (!row) return;

    if (d.inc) {
      row.qty++;
    }

    if (d.dec) {
      row.qty--;

      if (row.qty < 1) {
        cart = cart.filter((i) => i.id !== id);
      }
    }

    if (d.del) {
      cart = cart.filter((i) => i.id !== id);
    }

    saveCart();
    renderCart();
  } else if (d.filter) {
    filter = d.filter;

    $$("#filters .btn").forEach((x) => {
      x.classList.toggle("active", x.dataset.filter === filter);
    });

    renderProducts();
    $("#menu")?.classList.remove("show");
  }
});

// ================= Checkout Button =================
$("#checkout")?.addEventListener("click", checkout);

// ================= Search =================
$("#search")?.addEventListener("input", renderProducts);

// ================= Contact Form =================
$("#contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  form.classList.add("was-validated");

  const isValid = form.checkValidity();

  $("#formOk")?.classList.toggle("d-none", !isValid);
});

// ================= Back To Top =================
window.addEventListener("scroll", () => {
  const btn = $("#toTop");

  if (btn) {
    btn.style.display = window.scrollY > 400 ? "block" : "none";
  }
});

$("#toTop")?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ================= Scroll Animations =================
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  $$(".reveal").forEach((el) => io.observe(el));
}

// ================= Initialization =================
applyTheme();
applyLang();
setWaLinks();
