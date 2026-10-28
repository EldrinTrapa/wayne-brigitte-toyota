/**
 * WAYNE BRIGITTE | Toyota Talisay, Cebu
 * Main Interactive JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initFromConfig();
  initNavigation();
  initCopyButtons();
  initShareFeatures();
  initVCardDownload();
  initPdfViewer();
  initQrModal();
});

/**
 * Populate elements dynamically from SITE_CONFIG
 */
function initFromConfig() {
  if (typeof SITE_CONFIG === 'undefined') return;

  const cfg = SITE_CONFIG;

  // Phone Call & Display
  const phoneLinks = document.querySelectorAll('.action-phone-call');
  phoneLinks.forEach(el => {
    el.href = `tel:${cfg.contact.phoneRaw}`;
  });
  const phoneTexts = document.querySelectorAll('.config-phone-text');
  phoneTexts.forEach(el => {
    el.textContent = cfg.contact.phoneDisplay;
  });

  // Messenger
  const messengerLinks = document.querySelectorAll('.action-messenger');
  messengerLinks.forEach(el => {
    el.href = cfg.contact.messengerUrl;
  });

  // Viber
  const viberLinks = document.querySelectorAll('.action-viber');
  viberLinks.forEach(el => {
    el.href = cfg.contact.viberUrl;
  });
  const viberTexts = document.querySelectorAll('.config-viber-text');
  viberTexts.forEach(el => {
    el.textContent = cfg.contact.viberNumber;
  });

  // WhatsApp
  const whatsappSection = document.getElementById('whatsapp-card');
  if (whatsappSection) {
    if (cfg.contact.whatsapp && cfg.contact.whatsapp.enabled) {
      whatsappSection.style.display = 'flex';
      const waLink = whatsappSection.querySelector('.action-whatsapp');
      if (waLink) waLink.href = cfg.contact.whatsapp.url;
      const waText = whatsappSection.querySelector('.config-whatsapp-text');
      if (waText) waText.textContent = cfg.contact.whatsapp.number;
    } else {
      whatsappSection.style.display = 'none';
    }
  }

  // Facebook
  const fbLinks = document.querySelectorAll('.action-facebook');
  fbLinks.forEach(el => {
    el.href = cfg.contact.facebookUrl;
  });
  const fbTexts = document.querySelectorAll('.config-facebook-text');
  fbTexts.forEach(el => {
    el.textContent = cfg.contact.facebookDisplay;
  });

  // Email
  const emailLinks = document.querySelectorAll('.action-email');
  emailLinks.forEach(el => {
    el.href = `mailto:${cfg.contact.email}?subject=Toyota%20Vehicle%20Inquiry%20-%20Toyota%20Talisay`;
  });
  const emailTexts = document.querySelectorAll('.config-email-text');
  emailTexts.forEach(el => {
    el.textContent = cfg.contact.email;
  });

  // Google Maps Directions
  const mapsLinks = document.querySelectorAll('.action-directions');
  mapsLinks.forEach(el => {
    el.href = cfg.location.googleMapsUrl;
  });

  // Disclaimer text
  const disclaimerEl = document.getElementById('config-disclaimer');
  if (disclaimerEl && cfg.disclaimer) {
    disclaimerEl.textContent = cfg.disclaimer;
  }

  // Render Documents
  renderDocumentsList(cfg.documents);
}

/**
 * Render the official PDF documents grid
 */
function renderDocumentsList(docs) {
  const container = document.getElementById('downloads-grid-container');
  if (!container || !docs || !docs.length) return;

  container.innerHTML = docs.map(doc => `
    <div class="document-card" data-doc-id="${doc.id}">
      <div>
        <div class="document-card-header">
          <span class="doc-badge">${doc.badge || doc.category}</span>
          <div class="doc-file-type">
            <i class="fa-solid fa-file-pdf"></i>
            <span>${doc.fileType} (${doc.fileSize})</span>
          </div>
        </div>
        <h3 class="document-title">${doc.title}</h3>
        <p class="document-desc">${doc.description}</p>
      </div>

      <div class="document-footer">
        <span class="doc-meta">
          <i class="fa-solid fa-check-circle" style="color: #10B981; margin-right: 4px;"></i> Verified Official
        </span>
        <div class="doc-buttons-group">
          <button type="button" class="btn-doc-view" onclick="openPdfModal('${doc.path}', '${doc.title}')" title="Preview document">
            <i class="fa-regular fa-eye"></i> View PDF
          </button>
          <a href="${doc.path}" download="${doc.filename}" class="btn-doc-download" title="Download to device">
            <i class="fa-solid fa-download"></i> Download
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Sticky Nav scroll effect
 */
function initNavigation() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

/**
 * Copy button functionality with toast notification
 */
function initCopyButtons() {
  document.addEventListener('click', (e) => {
    const copyBtn = e.target.closest('[data-copy-value]');
    if (!copyBtn) return;

    const valueToCopy = copyBtn.getAttribute('data-copy-value');
    const label = copyBtn.getAttribute('data-copy-label') || 'Copied to clipboard!';

    copyToClipboard(valueToCopy, label);
  });
}

/**
 * Helper to copy text to clipboard
 */
function copyToClipboard(text, successMessage) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    }).catch(() => {
      fallbackCopy(text, successMessage);
    });
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(successMessage);
  } catch (err) {
    showToast('Failed to copy. Please select and copy manually.');
  }
  document.body.removeChild(textArea);
}

/**
 * Display toast notification
 */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 2800);
}

/**
 * Web Share API & Share Website
 */
function initShareFeatures() {
  const shareButtons = document.querySelectorAll('.action-share-site');
  
  shareButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const shareData = {
        title: 'WAYNE BRIGITTE | Toyota Talisay Cebu Marketing Professional',
        text: 'Contact Wayne Brigitte for Toyota vehicle inquiries, pricing, quotes, and brochures at Toyota Talisay, Cebu.',
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          if (err.name !== 'AbortError') {
            copyToClipboard(window.location.href, 'Website link copied to clipboard!');
          }
        }
      } else {
        copyToClipboard(window.location.href, 'Website link copied to clipboard!');
      }
    });
  });
}

/**
 * Download vCard (.vcf) directly into phone contacts
 */
function initVCardDownload() {
  const vcardButtons = document.querySelectorAll('.action-download-vcard');

  vcardButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const cfg = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG : {
        name: "Wayne Brigitte",
        role: "Marketing Professional",
        dealership: "Toyota Talisay, Cebu",
        contact: {
          phoneRaw: "+639776770382",
          email: "waynebrigitte.toyota@gmail.com"
        },
        location: {
          addressLine1: "Cebu South Road, Lawaan 1",
          addressLine2: "Talisay City, 6045 Cebu, Philippines"
        }
      };

      const vcardData = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        'N:Brigitte;Wayne;;;',
        `FN:${cfg.name}`,
        `ORG:${cfg.dealership}`,
        `TITLE:${cfg.role}`,
        `TEL;TYPE=CELL,VOICE:${cfg.contact.phoneRaw}`,
        `EMAIL;TYPE=WORK,INTERNET:${cfg.contact.email}`,
        `URL:${window.location.href}`,
        `ADR;TYPE=WORK:;;${cfg.location.addressLine1};${cfg.location.addressLine2};;;`,
        'NOTE:Toyota Vehicle Inquiries, Quotations & Financing Assistance - Toyota Talisay Cebu',
        'END:VCARD'
      ].join('\r\n');

      const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const tempLink = document.createElement('a');
      tempLink.href = url;
      tempLink.setAttribute('download', 'Wayne-Brigitte-Toyota.vcf');
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      URL.revokeObjectURL(url);

      showToast('Wayne Brigitte contact card downloaded!');
    });
  });
}

/**
 * PDF Preview Modal
 */
function initPdfViewer() {
  const modal = document.getElementById('pdf-modal');
  const closeBtn = document.getElementById('close-pdf-modal');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      closePdfModal();
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closePdfModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closePdfModal();
      }
    });
  }
}

function openPdfModal(pdfPath, title) {
  const modal = document.getElementById('pdf-modal');
  const iframe = document.getElementById('pdf-modal-frame');
  const titleEl = document.getElementById('pdf-modal-title');
  const downloadLink = document.getElementById('pdf-modal-download-btn');

  if (!modal || !iframe) {
    window.open(pdfPath, '_blank');
    return;
  }

  titleEl.textContent = title || 'Document Viewer';
  iframe.src = pdfPath;
  if (downloadLink) {
    downloadLink.href = pdfPath;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePdfModal() {
  const modal = document.getElementById('pdf-modal');
  const iframe = document.getElementById('pdf-modal-frame');
  if (modal) {
    modal.classList.remove('active');
    if (iframe) iframe.src = '';
    document.body.style.overflow = '';
  }
}

/**
 * QR Code Modal for sharing
 */
function initQrModal() {
  const qrModal = document.getElementById('qr-modal');
  const qrTriggers = document.querySelectorAll('.action-open-qr');
  const qrClose = document.getElementById('close-qr-modal');
  const qrImg = document.getElementById('qr-modal-image');

  if (!qrModal) return;

  qrTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentUrl = encodeURIComponent(window.location.href);
      if (qrImg) {
        // High quality QR code via api.qrserver.com
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${currentUrl}&margin=10`;
      }
      qrModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (qrClose) {
    qrClose.addEventListener('click', () => {
      qrModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  qrModal.addEventListener('click', (e) => {
    if (e.target === qrModal) {
      qrModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}
