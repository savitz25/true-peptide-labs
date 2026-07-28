/**
 * Client helper for VialVibes form → Resend API routes.
 */
(function (w) {
  async function postJson(url, payload) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    let data = {};
    try {
      data = await res.json();
    } catch (e) {
      data = {};
    }
    if (!res.ok || data.ok === false) {
      const err = new Error(data.error || ('Request failed (' + res.status + ')'));
      err.status = res.status;
      err.data = data;
      throw err;
    }
    return data;
  }

  w.VVEmail = {
    sendContact: function (payload) {
      return postJson('/api/contact', payload);
    },
    sendVaultRequest: function (payload) {
      return postJson('/api/vault-request', payload);
    },
  };
})(window);
