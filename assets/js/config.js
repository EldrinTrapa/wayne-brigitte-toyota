/**
 * WAYNE BRIGITTE | Toyota Talisay, Cebu
 * Central Website Configuration File
 * 
 * Update your contact details, social media links, and document resources here.
 * Any changes made in this file automatically update throughout the website!
 */

const SITE_CONFIG = {
  // Personal & Professional Details
  name: "WAYNE BRIGITTE",
  role: "Marketing Professional",
  dealership: "Toyota Talisay, Cebu",
  tagline: "Your Trusted Partner for Toyota Vehicle Inquiries, Quotations & Financing",
  
  // Official Contact Information
  contact: {
    // Phone / Mobile Call
    phoneDisplay: "+63 977 677 0382",         // Format shown on the website
    phoneRaw: "+639776770382",                // Format used for tel: links
    
    // Facebook Messenger
    messengerUsername: "profile.php?id=61572215742710",
    messengerUrl: "https://m.me/61572215742710",
    
    // Viber
    viberNumber: "+63 977 677 0382",
    viberUrl: "viber://chat?number=%2B639776770382",
    
    // WhatsApp
    whatsapp: {
      enabled: true,
      number: "+63 977 677 0382",
      url: "https://wa.me/639776770382?text=Hello%20Wayne,%20I%20am%20inquiring%20about%20a%20Toyota%20vehicle."
    },
    
    // Official Facebook Page / Profile
    facebookUrl: "https://www.facebook.com/profile.php?id=61572215742710",
    facebookDisplay: "facebook.com/profile.php?id=61572215742710",
    
    // Business Email
    email: "espanowayne@gmail.com",
    
    // Other Social Media (Set enabled: true and fill URL when available)
    instagram: {
      enabled: false,
      url: "https://instagram.com/wayne.espano",
      handle: "@wayne.espano"
    },
    tiktok: {
      enabled: false,
      url: "https://tiktok.com/@wayne.espano",
      handle: "@wayne.espano"
    }
  },

  // Dealership Location & Maps
  location: {
    name: "Toyota Talisay, Cebu",
    addressLine1: "Cebu South Road, Brgy. Lawaan 1",
    addressLine2: "Talisay City, 6045 Cebu, Philippines",
    // Verified Google Maps Link for Toyota Talisay, Cebu
    googleMapsUrl: "https://maps.google.com/?q=Toyota+Talisay+Cebu",
    // Coordinates for embedded map / directions
    coordinates: {
      lat: 10.2612,
      lng: 123.8378
    },
    businessHours: [
      { days: "Monday – Saturday", hours: "8:00 AM – 5:00 PM" },
      { days: "Sunday & Holidays", hours: "Showroom Inquiries by Appointment" }
    ]
  },

  // Official Vehicle Brochures and PDF Downloads
  // Real PDF documents stored in the assets/docs folder
  documents: [
    {
      id: "financing-requirements",
      title: "Toyota Auto Financing Requirements Checklist",
      category: "Financing Guide",
      description: "Complete list of auto loan requirements for Locally Employed, OFW / Seafarers, and Business Owners.",
      filename: "Toyota-Auto-Financing-Requirements-Guide.pdf",
      path: "assets/docs/Toyota-Auto-Financing-Requirements-Guide.pdf",
      fileType: "PDF",
      fileSize: "3.2 KB",
      badge: "Essential"
    },
    {
      id: "lineup-guide",
      title: "Toyota 2026 All-In Promo & Vehicle Price List",
      category: "Vehicle Lineup & Pricing",
      description: "Official 2026 price list and downpayment promo sheet for Rush, Vios, Wigo, Raize, Yaris Cross, Innova, Fortuner, Hilux, and more.",
      filename: "Toyota-Vehicle-Lineup-Price-List-Cebu.pdf",
      path: "assets/docs/Toyota-Vehicle-Lineup-Price-List-Cebu.pdf",
      fileType: "PDF",
      fileSize: "6.4 MB",
      badge: "Official Promo"
    },
    {
      id: "inquiry-guide",
      title: "Toyota Buyer's Step-by-Step Purchase Guide",
      category: "Customer Guide",
      description: "A simple 6-step walkthrough from vehicle inquiry and loan application to vehicle handover at Toyota Talisay.",
      filename: "Toyota-Buyer-Inquiry-Guide-Wayne-Brigitte.pdf",
      path: "assets/docs/Toyota-Buyer-Inquiry-Guide-Wayne-Brigitte.pdf",
      fileType: "PDF",
      fileSize: "2.8 KB",
      badge: "Helpful"
    }
  ],

  // Disclaimer text
  disclaimer: "Vehicle availability, prices, financing terms, and promotions are subject to confirmation. This website is managed by Wayne Brigitte, Marketing Professional at Toyota Talisay, Cebu, and serves as an independent contact and customer assistance portal."
};

// Global export for browser and modular environments
if (typeof window !== 'undefined') {
  window.SITE_CONFIG = SITE_CONFIG;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}

