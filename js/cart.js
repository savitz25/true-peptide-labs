/**
 * True Peptide Labs cart helpers (localStorage tpl_cart)
 * Product pages call tplAddToCart(slug)
 */
(function () {
  function migrate() {
    if (!localStorage.getItem('tpl_cart') && localStorage.getItem('apex_cart')) {
      localStorage.setItem('tpl_cart', localStorage.getItem('apex_cart'));
    }
  }
  migrate();

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem('tpl_cart')) || [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem('tpl_cart', JSON.stringify(cart));
  }

  function findProduct(slug) {
    var list = window.TPL_PRODUCTS || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].slug === slug) return list[i];
    }
    return null;
  }

  window.tplAddToCart = function (slug) {
    var p = findProduct(slug);
    if (!p) {
      alert('Product not found.');
      return;
    }
    var cart = getCart();
    var existing = null;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].slug === slug || cart[i].id === p.id) {
        existing = cart[i];
        break;
      }
    }
    if (existing) {
      existing.qty = (existing.qty || 1) + 1;
    } else {
      cart.push({
        id: p.id,
        slug: p.slug,
        name: p.name,
        price: p.price,
        vialSize: p.vialSize,
        purity: p.purityNote || 'Lot CoA on request',
        category: p.category,
        qty: 1
      });
    }
    saveCart(cart);
    var toast = document.createElement('div');
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-5 py-3 rounded-2xl text-sm shadow-xl z-[200] flex items-center gap-2';
    toast.innerHTML = '<i class="fa-solid fa-check text-emerald-400"></i><span>' + p.shortName + ' added to cart</span>';
    document.body.appendChild(toast);
    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.2s';
      setTimeout(function () { toast.remove(); }, 200);
    }, 1800);
  };
})();
