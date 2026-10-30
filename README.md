# WAYNE BRIGITTE | Toyota Talisay, Cebu
### Marketing Professional Contact & Customer Resource Website

> **Status:** Live & Mobile-Optimized (Updated: October 2026)  
> **Dealership:** Toyota Talisay, Cebu, Philippines  
> **Contact:** 0977 677 0382 | espanowayne@gmail.com | [Facebook Profile](https://www.facebook.com/profile.php?id=61572215742710)

A modern, fast-loading, mobile-friendly contact website for **WAYNE BRIGITTE**, Marketing Professional at **Toyota Talisay, Cebu**.

---

## 🌟 Key Highlights & Features

- **Automotive Design**: Built with Toyota-inspired branding (Toyota Crimson Red `#EB0A1E`, deep ebony, pure white, and clean silver accents).
- **Exact Background & Profile Integration**:
  - Main hero background: Uses the uploaded Toyota Talisay, Cebu dealership photo (`assets/images/toyota-talisay-bg.jpg`).
  - Hero profile card: Uses Wayne Brigitte's uploaded professional portrait (`assets/images/wayne-brigitte.jpg`).
- **Complete Direct Contact Hub**:
  - 📞 **Direct Call / SMS**: One-tap `tel:` click-to-call with copy-to-clipboard functionality.
  - 💬 **Facebook Messenger**: Direct chat link (`m.me`).
  - 🟣 **Viber**: Direct Viber chat link (`viber://chat?number=...`).
  - 🟢 **WhatsApp**: Direct chat link with prefilled inquiry message.
  - 🌐 **Facebook Page**: Official business/profile link.
  - ✉️ **Email**: Click-to-email (`mailto:`) with pre-filled inquiry subject line.
- **Toyota Resources & PDF Downloads**:
  - Real, verified PDF guides in `assets/docs/`:
    1. `Toyota-Auto-Financing-Requirements-Guide.pdf` (Checklist for Employed, OFW, and Business owners)
    2. `Toyota-Vehicle-Lineup-Guide-Cebu.pdf` (Model overview for Vios, Raize, Yaris Cross, Avanza, Fortuner, Hilux, etc.)
    3. `Toyota-Buyer-Inquiry-Guide-Wayne-Brigitte.pdf` (6-step buyer's roadmap to taking home a Toyota)
  - Interactive **PDF Preview Modal** and 1-click **Download PDF** buttons.
- **Mobile-First Experience**:
  - Floating bottom action dock for quick contact on mobile devices.
  - One-tap **Save Contact (.vcf)** generator to save Wayne's details directly to a phone's address book.
  - **Native Web Share API** with copy link fallback.
  - **Scan QR Code modal** for instant sharing during in-person showroom visits.
- **Dealership Location & Showroom Hours**:
  - Address: Cebu South Road, Brgy. Lawaan 1, Talisay City, Cebu 6045.
  - Interactive embedded Google Map.
  - Direct **Get Directions** button.

---

## 📁 File Structure

```
contact wayne/
├── index.html                           # Main website markup & layout
├── README.md                            # Documentation & guide
└── assets/
    ├── css/
    │   └── style.css                    # Responsive Toyota styling & animations
    ├── js/
    │   ├── config.js                    # ⚙️ Central configuration file (Edit here!)
    │   └── main.js                      # Interactions, vCard, modals, toast & share
    ├── images/
    │   ├── wayne-brigitte.jpg           # Wayne's profile photo
    │   └── toyota-talisay-bg.jpg        # Toyota Talisay Cebu dealership background
    └── docs/
        ├── Toyota-Auto-Financing-Requirements-Guide.pdf
        ├── Toyota-Vehicle-Lineup-Guide-Cebu.pdf
        └── Toyota-Buyer-Inquiry-Guide-Wayne-Brigitte.pdf
```

---

## ⚙️ How to Update Contact Information

To update phone numbers, links, or emails, edit only one file:  
`assets/js/config.js`

```javascript
const SITE_CONFIG = {
  name: "WAYNE BRIGITTE",
  role: "Marketing Professional",
  dealership: "Toyota Talisay, Cebu",
  
  contact: {
    phoneDisplay: "+63 9XX XXX XXXX",        // Change to your phone number
    phoneRaw: "+639XXXXXXXXX",               // Number for tel: links
    messengerUrl: "https://m.me/your-id",     // Messenger link
    viberNumber: "+639XXXXXXXXX",            // Viber number
    email: "your.email@example.com",         // Email address
    facebookUrl: "https://facebook.com/..."  // Facebook link
  }
};
```

---

## 🚀 How to Run & Deploy

### Quick Local Preview
Simply open `index.html` in any web browser (Chrome, Safari, Edge, Firefox).

Or run a local server:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

### Deploying Online
Upload this folder to:
- **GitHub Pages**
- **Vercel** (`vercel deploy`)
- **Netlify** (drag and drop the folder)
- **Cloudflare Pages**
- Any standard web hosting provider (cPanel, Hostinger, GoDaddy, etc.)
