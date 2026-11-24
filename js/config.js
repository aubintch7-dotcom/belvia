/**
 * ============================================================================
 * BELVIA FINANCE — CONFIGURATION GÉNÉRALE DU SITE & CLÉ WEB3FORMS
 * ============================================================================
 * Modifiez simplement les valeurs ci-dessous pour personnaliser votre site :
 *
 * CONFIGURATION WEB3FORMS — DÉJÀ ACTIVE ✅
 * Clé d'accès installée : f34c8cdd-a674-4413-b143-6b8d0176e03a
 * Adresse e-mail de réception des dossiers : financefixe90@gmail.com
 * Téléphone / WhatsApp : +40 779 142 488
 *
 * Pour changer de clé plus tard : remplacez simplement la valeur de
 * WEB3FORMS_ACCESS_KEY ci-dessous (ou celle de index.html, les deux
 * emplacements sont reconnus automatiquement).
 * ============================================================================
 */

window.BELVIA_CONFIG = {
  // 🔑 CLÉ D'ACCÈS WEB3FORMS (active — e-mails reçus sur financefixe90@gmail.com) :
  WEB3FORMS_ACCESS_KEY: "f34c8cdd-a674-4413-b143-6b8d0176e03a",

  // URL officielle de l'API Web3Forms (ne pas modifier)
  WEB3FORMS_ENDPOINT: "https://api.web3forms.com/submit",

  // URL optionnelle de redirection après envoi (laisser "" pour afficher la confirmation intégrée au site)
  REDIRECT_URL_AFTER_SUBMIT: "",

  // 🏛️ INFORMATIONS OFFICIELLES DE L'INSTITUTION (SIÈGE EN FRANCE)
  INSTITUTION: {
    name: "Belvia Finance",
    legalName: "Belvia Finance S.A.S. — Établissement Européen de Crédit & Financement",
    addressLine: "88 Avenue Kléber, 75116 Paris, France",
    cityCountry: "Paris, France",
    phoneDisplay: "+40 779 142 488",
    phoneHref: "+40779142488",
    whatsappDisplay: "+40 779 142 488",
    whatsappHref: "https://wa.me/40779142488",
    email: "financefixe90@gmail.com",
    registrationNumber: "RCS Paris B 894 512 730 · Agrément Européen UE",
    hours: "Lun – Sam : 08h30 – 19h30 (Heure de Paris)",
    foundedYear: "2014"
  },

  // 💶 PARAMÈTRES DU SIMULATEUR DE CRÉDIT — TAUX D'INTÉRÊT UNIQUE FIXE DE 3 %
  GLOBAL_FIXED_TAEG: 3.0,

  LOAN_LIMITS: {
    minAmount: 2000,
    maxAmount: 500000,
    defaultAmount: 35000,
    stepAmount: 500,
    minMonths: 6,
    maxMonths: 240,
    defaultMonths: 84,
    stepMonths: 6
  },

  // Taux annuels fixes à 3 % (TAEG %) sur l'ensemble des catégories de prêt
  LOAN_RATES: {
    personnel: { rate: 3.0, minAmount: 2000, maxAmount: 75000, defaultAmount: 18000, defaultMonths: 60 },
    immobilier: { rate: 3.0, minAmount: 30000, maxAmount: 500000, defaultAmount: 185000, defaultMonths: 180 },
    auto: { rate: 3.0, minAmount: 3000, maxAmount: 90000, defaultAmount: 26000, defaultMonths: 60 },
    professionnel: { rate: 3.0, minAmount: 5000, maxAmount: 500000, defaultAmount: 65000, defaultMonths: 84 },
    rachat: { rate: 3.0, minAmount: 5000, maxAmount: 250000, defaultAmount: 48000, defaultMonths: 120 },
    travaux: { rate: 3.0, minAmount: 2500, maxAmount: 120000, defaultAmount: 32000, defaultMonths: 72 }
  }
};
