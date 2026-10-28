/* C3: Request receipt is shown only after an explicit API acknowledgement.
 * Email drafts, missing helpers, and failed/unconfirmed responses are not receipts.
 */
(function () {
  'use strict';
  var form = document.getElementById('vault-form');
  var fields = document.getElementById('request-fields');
  var submit = document.getElementById('vault-submit');
  var error = document.getElementById('vault-api-error');
  var success = document.getElementById('vault-ok');
  var draft = document.getElementById('email-request');
  var pending = false;
  var params = new URLSearchParams(location.search);
  var prefilled = [];

  function clean(value, limit) {
    return String(value || '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, limit);
  }

  ['product', 'lot', 'email'].forEach(function (name) {
    var input = document.getElementById(name);
    var value = clean(params.get(name), input.maxLength);
    if (name === 'product' && value) {
      var match = (window.TPL_PRODUCTS || []).find(function (product) {
        return [product.slug, product.name, product.shortName].some(function (alias) {
          return alias.toLowerCase() === value.toLowerCase();
        });
      });
      if (match) value = match.name;
    }
    if (value) {
      input.value = value;
      prefilled.push(name === 'product' ? 'compound' : name === 'lot' ? 'lot number' : 'reply email');
    }
  });
  if (prefilled.length) {
    document.getElementById('vault-prefill').hidden = false;
    document.getElementById('prefill-text').textContent = 'Filled from your link: ' + prefilled.join(', ') + '. Review these details against your label and edit anything that differs. Document availability has not been checked.';
  }

  function values() {
    return {
      lot: document.getElementById('lot').value.trim(),
      product: document.getElementById('product').value.trim(),
      email: document.getElementById('email').value.trim(),
      institution: document.getElementById('institution').value.trim(),
      notes: document.getElementById('notes').value.trim(),
      source: 'vault'
    };
  }

  function updateDraft() {
    var data = values();
    var body = [
      'Lot number: ' + (data.lot || '(please add)'),
      'Compound / material: ' + (data.product || '(please add)'),
      'Reply email: ' + (data.email || '(please add)'),
      'Institution: ' + (data.institution || '(not specified)'),
      'Notes: ' + (data.notes || '(none)'), '',
      'Please provide Certificate of Analysis documentation when available for this research lot.'
    ].join('\n');
    draft.href = 'mailto:hello@asktrusthub.com?subject=' + encodeURIComponent('CoA documentation request' + (data.lot ? ' - lot ' + data.lot : '')) + '&body=' + encodeURIComponent(body);
  }

  function showError(message) {
    document.getElementById('vault-error-text').textContent = message;
    error.hidden = false;
    error.focus();
  }

  form.addEventListener('input', function (event) {
    if (event.target.setCustomValidity) event.target.setCustomValidity('');
    updateDraft();
  });

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (pending) return;
    ['lot', 'product', 'email'].forEach(function (name) {
      var input = document.getElementById(name);
      input.value = input.value.trim();
      input.setCustomValidity(input.value ? '' : 'Please enter ' + (name === 'product' ? 'the compound or material name.' : name === 'lot' ? 'the lot number from the label.' : 'an email address for follow-up.'));
    });
    if (!form.reportValidity()) return;
    error.hidden = true;
    if (!window.VVEmail || typeof window.VVEmail.sendVaultRequest !== 'function') {
      showError('The request form is temporarily unavailable. Your details are still here. Use the email option below to send your request.');
      return;
    }
    var data = values();
    updateDraft();
    pending = true;
    fields.disabled = true;
    form.setAttribute('aria-busy', 'true');
    submit.textContent = 'Sending request…';
    document.getElementById('vault-send-status').textContent = 'Sending your documentation request.';
    try {
      var result = await window.VVEmail.sendVaultRequest(data);
      if (!result || result.ok !== true) throw new Error('Unconfirmed response');
      document.getElementById('lot-out').textContent = data.lot;
      document.getElementById('product-out').textContent = data.product;
      document.getElementById('email-out').textContent = data.email;
      document.getElementById('followup-link').href = draft.href;
      form.hidden = true;
      document.getElementById('vault-prefill').hidden = true;
      document.getElementById('vault-form-intro').hidden = true;
      success.hidden = false;
      document.getElementById('vault-success-title').focus();
    } catch (err) {
      showError('We couldn’t confirm receipt of your request. Your details have been kept on this page. Check the fields and try again, or use the email option below.');
    } finally {
      pending = false;
      fields.disabled = false;
      form.setAttribute('aria-busy', 'false');
      submit.textContent = 'Submit documentation request';
      document.getElementById('vault-send-status').textContent = '';
    }
  });

  document.getElementById('new-request').addEventListener('click', function () {
    success.hidden = true;
    form.hidden = false;
    document.getElementById('vault-form-intro').hidden = false;
    document.getElementById('lot').value = '';
    document.getElementById('notes').value = '';
    error.hidden = true;
    updateDraft();
    document.getElementById('lot').focus();
  });

  updateDraft();
  fields.disabled = false;
})();
