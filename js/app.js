// js/app.js

// Dummy Data
const productsData = [
    { id: 1, title: 'Costume Édition Limitée', titleAr: 'بدلة ذات إصدار محدود', price: 350, category: 'homme', img1: 'assets/images/641328189_1426757682581282_7692409445499432647_n.jpg', img2: 'assets/images/641488878_1433168221940228_5967092871409074927_n.jpg', desc: 'Design moderne et finition haut de gamme.', descAr: 'تصميم حديث وتشطيبات عالية الجودة.' },
    { id: 2, title: 'Robe de Soirée Boutique Eve', titleAr: 'فستان سهرة بوتيك إيف', price: 290, category: 'femme', img1: 'assets/images/641556533_1429363708987346_7054608709624978109_n.jpg', img2: 'assets/images/642228328_1432891785301205_1981176713828844898_n.jpg', desc: 'Notre meilleure vente de la saison.', descAr: 'الأكثر مبيعاً هذا الموسم.' },
    { id: 3, title: 'Ensemble Tendance Enfant', titleAr: 'طقم أطفال عصري', price: 120, category: 'enfants', img1: 'assets/images/642701851_1432854328638284_5633739119234482578_n.jpg', img2: 'assets/images/642720616_1432892155301168_3499524963315855215_n.jpg', desc: 'Look chic et confortable.', descAr: 'مظهر أنيق ومريح.' },
    { id: 4, title: 'Look de Saison', titleAr: 'مظهر الموسم', price: 195, category: 'femme', img1: 'assets/images/642772391_1432892031967847_1723897984369871694_n.jpg', img2: 'assets/images/642781305_1432892021967848_4585020848255558369_n.jpg', desc: 'Authentique Boutique EVE.', descAr: 'أصلي من بوتيك إيف.' },
    { id: 5, title: 'Style Unique', titleAr: 'ستايل مميز', price: 250, category: 'femme', img1: 'assets/images/642783183_1434792741777776_465162771486918069_n.jpg', img2: 'assets/images/642786407_1432892145301169_7668794889406838924_n.jpg', desc: 'Le choix parfait pour vos sorties.', descAr: 'الخيار الأمثل للخروج.' },
    { id: 6, title: 'Élégance Absolue', titleAr: 'أناقة مطلقة', price: 150, category: 'femme', img1: 'assets/images/644600959_1432892425301141_5671680866285650791_n.jpg', img2: 'assets/images/644781630_1432891855301198_2388833199328946363_n.jpg', desc: 'Raffinement pour chaque instant.', descAr: 'رقي في كل لحظة.' },
    { id: 7, title: 'Robe Glamour', titleAr: 'فستان ساحر', price: 180, category: 'femme', img1: 'assets/images/464682702_1054139069843147_7550823941195850235_n.jpg', img2: 'assets/images/633887391_1423150319608685_1589957470571467619_n.jpg', desc: 'Confort et élégance.', descAr: 'راحة وأناقة.' },
    { id: 8, title: 'Tailleur Chic', titleAr: 'طقم أنيق', price: 320, category: 'femme', img1: 'assets/images/635270969_1425121906078193_3096727411097498310_n.jpg', img2: 'assets/images/636740307_1423724436217940_2398653745117631211_n.jpg', desc: 'Pour le bureau et les grandes occasions.', descAr: 'للمكتب والمناسبات الخاصة.' },
    { id: 9, title: 'Tenue de Soirée', titleAr: 'لباس سهرة', price: 400, category: 'femme', img1: 'assets/images/636794862_1425235549400162_1818284377572153655_n.jpg', img2: 'assets/images/637378191_1425121849411532_5357947423155579057_n.jpg', desc: 'Un design exceptionnel.', descAr: 'تصميم استثنائي.' },
    { id: 10, title: 'Robe Cocktail', titleAr: 'فستان كوكتيل', price: 220, category: 'femme', img1: 'assets/images/638292826_1427294455860938_4677951129817630981_n.jpg', img2: 'assets/images/640085470_1426743735916010_1043678397624643938_n.jpg', desc: 'Osez briller.', descAr: 'تجرأ على التألق.' },
    { id: 11, title: 'Style Casual', titleAr: 'ستايل كاجوال', price: 130, category: 'homme', img1: 'assets/images/641314526_1427337129190004_8376575862625537273_n.jpg', img2: 'assets/images/642794358_1431978775392506_458722709355848786_n.jpg', desc: 'Pour vos sorties décontractées.', descAr: 'للخروجات اليومية.' },
    { id: 12, title: 'Chemise Brodée', titleAr: 'قميص مطرز', price: 90, category: 'enfants', img1: 'assets/images/644128923_1432891911967859_6288903473285252527_n.jpg', img2: 'assets/images/644532311_1433168718606845_4748342481674896392_n.jpg', desc: 'Une touche d\'élégance pour les petits.', descAr: 'لمسة من الأناقة للصغار.' },
    { id: 13, title: 'Robe Mignonne', titleAr: 'فستان لطيف', price: 110, category: 'enfants', img1: 'assets/images/645131277_1434811361775914_4948671916354450415_n (1).jpg', img2: 'assets/images/645240421_1432891835301200_8536309408524955948_n.jpg', desc: 'Collection spéciale.', descAr: 'مجموعة متميزة.' },
    { id: 14, title: 'Ensemble Hiver', titleAr: 'طقم شتوي', price: 160, category: 'femme', img1: 'assets/images/645362198_1432891981967852_208051970474921337_n.jpg', img2: 'assets/images/651326761_1442946924295691_3487134602870574419_n.jpg', desc: 'L\'idéal pour cette saison.', descAr: 'المثالي لهذا الموسم.' }
];

let cart = [];
let currentLang = 'fr'; // 'fr' or 'ar'

// Elements
const header = document.getElementById('header');
const views = document.querySelectorAll('.view');
const langToggle = document.getElementById('langToggle');

const cartDrawer = document.getElementById('cartDrawer');
const cartOpenBtn = document.getElementById('cartOpenBtn');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const cartOverlay = document.getElementById('cartOverlay');
const cartBadge = document.getElementById('cartBadge');
const cartItemsContainer = document.getElementById('cartItems');
const checkoutItemsList = document.getElementById('checkoutItemsList');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartDelivery = document.getElementById('cartDelivery');
const cartTotal = document.getElementById('cartTotal');
const checkoutSubtotal = document.getElementById('checkoutSubtotal');
const checkoutDelivery = document.getElementById('checkoutDelivery');
const checkoutTotal = document.getElementById('checkoutTotal');

const quickViewModal = document.getElementById('quickViewModal');
const quickViewOverlay = document.getElementById('quickViewOverlay');
const quickViewCloseBtn = document.getElementById('quickViewCloseBtn');
const quickViewBody = document.getElementById('quickViewBody');

// --- Routing / SPA Logic ---
function navigateTo(viewId, filterCategory = null) {
    views.forEach(v => v.classList.remove('active'));
    
    if(viewId === 'category' && filterCategory) {
        document.getElementById('view-category').classList.add('active');
        renderCategoryPage(filterCategory);
    } else {
        const targetView = document.getElementById(`view-${viewId}`);
        if(targetView) targetView.classList.add('active');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update nav active state
    document.querySelectorAll('.nav .nav-link').forEach(link => {
        if(link.dataset.link === (filterCategory || viewId)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    if (viewId === 'checkout') {
        closeCart();
        renderCheckoutSummary();
    }
}

document.querySelectorAll('[data-link]').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const link = el.dataset.link;
        if(['homme', 'femme', 'enfants'].includes(link)) {
            navigateTo('category', link);
        } else {
            navigateTo(link);
        }
    });
});

// --- Renders ---
function renderProductCard(product) {
    const title = currentLang === 'ar' ? product.titleAr : product.title;
    return `
    <div class="product-card">
        <div class="product-img-box">
            <img src="${product.img1}" alt="${title}" class="product-img" onerror="this.src='https://via.placeholder.com/600x800?text=Product'">
            <img src="${product.img2}" alt="${title}" class="product-img-hover" onerror="this.src='https://via.placeholder.com/600x800?text=Hover'">
            <div class="product-actions">
                <button class="circle-btn" onclick="openQuickView(${product.id})"><i class="fas fa-eye"></i></button>
                <button class="circle-btn" onclick="addToCart(${product.id})"><i class="fas fa-shopping-bag"></i></button>
            </div>
        </div>
        <div class="product-info">
            <h4 class="product-title">${title}</h4>
            <div class="product-price">${product.price} DT</div>
        </div>
    </div>`;
}

function renderCategoryPage(category) {
    const catTitleEl = document.getElementById('categoryTitle');
    const bgEl = document.getElementById('categoryHeaderBg');
    const grid = document.getElementById('categoryProductGrid');
    
    // Set Header
    const titlesFr = { homme: 'Homme', femme: 'Femme', enfants: 'Enfants' };
    const titlesAr = { homme: 'أزياء رجالية', femme: 'أزياء نسائية', enfants: 'أطفال' };
    
    catTitleEl.textContent = currentLang === 'ar' ? titlesAr[category] : titlesFr[category];
    
    const bgs = {
        homme: 'assets/images/641328189_1426757682581282_7692409445499432647_n.jpg',
        femme: 'assets/images/641556533_1429363708987346_7054608709624978109_n.jpg',
        enfants: 'assets/images/642701851_1432854328638284_5633739119234482578_n.jpg'
    };
    bgEl.style.backgroundImage = `url('${bgs[category]}')`;
    
    // Filter Products
    const filtered = productsData.filter(p => p.category === category);
    
    if(filtered.length === 0) {
        grid.innerHTML = `<p>${currentLang === 'ar' ? 'لا توجد منتجات حاليا' : 'Aucun produit trouvé'}</p>`;
    } else {
        grid.innerHTML = filtered.map(renderProductCard).join('');
    }
}

function initHome() {
    const newArrGrid = document.getElementById('newArrivalsGrid');
    if(newArrGrid){
        newArrGrid.innerHTML = productsData.slice(0, 4).map(renderProductCard).join('');
    }
    document.getElementById('catImgHomme').src = 'assets/images/641328189_1426757682581282_7692409445499432647_n.jpg';
    document.getElementById('catImgFemme').src = 'assets/images/641556533_1429363708987346_7054608709624978109_n.jpg';
    document.getElementById('catImgEnfants').src = 'assets/images/642701851_1432854328638284_5633739119234482578_n.jpg';
}

// --- Cart Logic ---
window.addToCart = function(productId) {
    const product = productsData.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if(existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartUI();
    openCart();
}

window.updateCartQty = function(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if(item) {
        item.qty += delta;
        if(item.qty <= 0) cart = cart.filter(p => p.id !== productId);
        updateCartUI();
        if(document.getElementById('view-checkout').classList.contains('active')) {
            renderCheckoutSummary();
        }
    }
}

function updateCartUI() {
    // Badge
    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    cartBadge.textContent = count;
    
    // List
    if(cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="text-center mt-4">${currentLang === 'ar' ? 'السلة فارغة' : 'Votre panier est vide'}</p>`;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => {
            const title = currentLang === 'ar' ? item.titleAr : item.title;
            return `
            <div class="cart-item">
                <img src="${item.img1}" class="cart-item-img" alt="${title}" onerror="this.src='https://via.placeholder.com/80x100'">
                <div class="cart-item-details">
                    <h5 class="cart-item-title">${title}</h5>
                    <div class="cart-item-price">${item.price} DT</div>
                    <div class="qty-control">
                        <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
                    </div>
                </div>
            </div>`;
        }).join('');
    }
    
    // Totals
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const shipping = (subtotal >= 300 || subtotal === 0) ? 0 : 8;
    const total = subtotal + shipping;
    
    cartSubtotal.textContent = `${subtotal} DT`;
    if (cartDelivery) cartDelivery.textContent = `${shipping} DT`;
    cartTotal.textContent = `${total} DT`;
}

function renderCheckoutSummary() {
    if(cart.length === 0) {
        checkoutItemsList.innerHTML = `<p>${currentLang === 'ar' ? 'السلة فارغة' : 'Votre panier est vide'}</p>`;
    } else {
        checkoutItemsList.innerHTML = cart.map(item => {
            const title = currentLang === 'ar' ? item.titleAr : item.title;
            return `<div class="summary-line"><span>${item.qty}x ${title}</span><span>${item.price * item.qty} DT</span></div>`;
        }).join('');
    }
    
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const shipping = (subtotal >= 300 || subtotal === 0) ? 0 : 8;
    const total = subtotal + shipping;
    
    checkoutSubtotal.textContent = `${subtotal} DT`;
    if (checkoutDelivery) checkoutDelivery.textContent = `${shipping} DT`;
    checkoutTotal.textContent = `${total} DT`;
}

// Drawer Listeners
const openCart = () => cartDrawer.classList.add('open');
const closeCart = () => cartDrawer.classList.remove('open');

cartOpenBtn.addEventListener('click', openCart);
cartCloseBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// --- Quick View ---
window.openQuickView = function(productId) {
    const product = productsData.find(p => p.id === productId);
    const title = currentLang === 'ar' ? product.titleAr : product.title;
    const desc = currentLang === 'ar' ? product.descAr : product.desc;
    const addToCartTxt = currentLang === 'ar' ? 'أضف للسلة' : 'Ajouter au panier';
    const sizeTxt = currentLang === 'ar' ? 'المقاس:' : 'Taille :';

    quickViewBody.innerHTML = `
        <div class="qv-images">
            <img src="${product.img1}" alt="${title}" onerror="this.src='https://via.placeholder.com/600x800'">
        </div>
        <div class="qv-info">
            <h2 class="qv-title">${title}</h2>
            <div class="qv-price">${product.price} DT</div>
            <p class="qv-desc">${desc}</p>
            
            <div class="qv-sizes">
                <h5>${sizeTxt}</h5>
                <div class="size-pills">
                    <div class="size-pill active" onclick="this.parentElement.querySelectorAll('.size-pill').forEach(e=>e.classList.remove('active')); this.classList.add('active');">S</div>
                    <div class="size-pill" onclick="this.parentElement.querySelectorAll('.size-pill').forEach(e=>e.classList.remove('active')); this.classList.add('active');">M</div>
                    <div class="size-pill" onclick="this.parentElement.querySelectorAll('.size-pill').forEach(e=>e.classList.remove('active')); this.classList.add('active');">L</div>
                    <div class="size-pill" onclick="this.parentElement.querySelectorAll('.size-pill').forEach(e=>e.classList.remove('active')); this.classList.add('active');">XL</div>
                </div>
            </div>
            
            <button class="btn btn-primary w-100" onclick="addToCart(${product.id}); document.getElementById('quickViewModal').classList.remove('open');">${addToCartTxt}</button>
        </div>
    `;
    
    quickViewModal.classList.add('open');
}

quickViewCloseBtn.addEventListener('click', () => quickViewModal.classList.remove('open'));
quickViewOverlay.addEventListener('click', () => quickViewModal.classList.remove('open'));

// --- Checkout Form ---
document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if(cart.length === 0) {
        alert(currentLang === 'ar' ? 'سلتك فارغة!' : 'Votre panier est vide !');
        return;
    }
    alert(currentLang === 'ar' ? 'تمت الطلبية بنجاح! شكرا لتسوقكم معنا.' : 'Commande confirmée avec succès ! Merci pour votre confiance.');
    cart = [];
    updateCartUI();
    document.getElementById('checkoutForm').reset();
    navigateTo('home');
});

// --- Scroll & Header ---
window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- Mobile Toggle (simple implementation) ---
document.getElementById('mobileToggle').addEventListener('click', () => {
    const nav = document.getElementById('nav');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// --- Language Toggle ---
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'ar' : 'fr';
    
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    langToggle.textContent = currentLang === 'fr' ? 'AR' : 'FR';
    
    // Update texts
    document.querySelectorAll('[data-fr][data-ar]').forEach(el => {
        el.textContent = currentLang === 'ar' ? el.dataset.ar : el.dataset.fr;
    });

    // Re-render current dynamic views
    updateCartUI();
    
    if(document.getElementById('view-category').classList.contains('active')) {
        const activeLink = document.querySelector('.nav-link.active');
        if(activeLink && ['homme','femme','enfants'].includes(activeLink.dataset.link)) {
            renderCategoryPage(activeLink.dataset.link);
        }
    } else {
        // re-render home page translations safely
        initHome();
    }
    
    // update checkout if active
    if(document.getElementById('view-checkout').classList.contains('active')) {
        renderCheckoutSummary();
    }
});


// Call OnInit
initHome();
updateCartUI();
