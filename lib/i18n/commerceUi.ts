import type { AppLocale } from '@/lib/i18n/routing'

type CommerceUiCommon = {
  home: string
  shop: string
  accessories: string
  bag: string
  back: string
  backToHome: string
  close: string
}

type CommerceUiShop = {
  collectionEyebrow: string
  chapterTitle: string
  chapterIntro: string
  refine: string
  productCategories: string
  sizing: string
  sizeGuide: string
  piece: string
  pieces: string
  sortNewest: string
  sortPriceAsc: string
  sortPriceDesc: string
  sortName: string
  discover: string
  viewProduct: string
  openProduct: string
  noPiecesInChapter: string
  categoryAll: string
  categories: {
    All: string
    Abayas: string
    Kaftans: string
    Dresses: string
    Sets: string
  }
}

type CommerceUiCart = {
  shoppingBag: string
  empty: string
  emptyDescription: string
  shopNow: string
  continueShopping: string
  orderSummary: string
  subtotal: string
  estimatedTotal: string
  taxesIncluded: string
  lineTotal: string
  size: string
  colour: string
  length: string
  productCode: string
  personalisation: string
  note: string
  proceedSecurePayment: string
  shipWorldwide: string
  freeUaeShipping: string
  intlShippingNote: string
  deliveryAtPayment: string
}

type CommerceUiCheckout = {
  securePayment: string
  editBag: string
  reviewOrder: string
  reviewSubtitle: string
  redirecting: string
  continueSecurePayment: string
  legalAcceptPrefix: string
  shipmentPolicy: string
  legalAnd: string
  termsConditions: string
  legalRequired: string
  checkoutError: string
  stripeNotConfigured: string
  stripeEnvHint: string
  processingPayment: string
}

type CommerceUiAccessories = {
  collectionTitle: string
  collectionEyebrow: string
  backToHome: string
  filter: string
  products: string
  price: string
  stoneType: string
  clearFilters: string
  productNotFound: string
  returnToAccessories: string
  materials: string
  careBullets: string[]
  oneSize: string
  selectColour: string
}

type CommerceUiFooter = {
  emailList: string
  subscribeEyebrow: string
  emailPlaceholder: string
  subscribe: string
  language: string
  countryRegion: string
  worldwideShipping: string
  deliveredGlobally: string
  freeUaeShippingTitle: string
  freeUaeShippingDesc: string
  craftedToOrderTitle: string
  craftedToOrderDesc: string
  givingForwardTitle: string
  givingForwardDesc: string
  newsletter: string
  closeModal: string
  close: string
}

type CommerceUiAccount = {
  account: string
  createAccount: string
  getStarted: string
  signIn: string
  signInDesc: string
  registerDesc: string
}

type CommerceUiNotFound = {
  title: string
  description: string
  backToHome: string
  shopCollection: string
  popularPages: string
  about: string
  theCodes: string
  contact: string
  needHelp: string
}

type CommerceUiTrust = {
  ethicallyMade: string
  weGiveForward: string
  worldwideShipping: string
  secureCheckout: string
}

type CommerceUiStickyAddToCart = {
  selectSizeAndColour: string
  addToBag: string
  added: string
}

type CommerceUiQuickBuy = {
  chooseSizeError: string
  chooseColourError: string
  size: string
  color: string
  addToBag: string
  added: string
  buyNow: string
}

type CommerceUiMiniCart = {
  yourBagIsEmpty: string
  discoverCollection: string
  reviewYourOrder: string
  youMayAlsoLike: string
}

type CommerceUiDeliveryBanner = {
  uaeFree: string
  worldwide: string
  tabby: string
}

type CommerceUiShopExtras = {
  availableColours: string
}

export type CommerceUi = {
  common: CommerceUiCommon
  shop: CommerceUiShop
  shopExtras: CommerceUiShopExtras
  cart: CommerceUiCart
  checkout: CommerceUiCheckout
  accessories: CommerceUiAccessories
  footer: CommerceUiFooter
  account: CommerceUiAccount
  notFound: CommerceUiNotFound
  trust: CommerceUiTrust
  deliveryBanner: CommerceUiDeliveryBanner
  stickyAddToCart: CommerceUiStickyAddToCart
  quickBuy: CommerceUiQuickBuy
  miniCart: CommerceUiMiniCart
}

const COMMERCE_UI: Record<AppLocale, CommerceUi> = {
  en: {
    common: {
      home: 'Home',
      shop: 'Shop',
      accessories: 'Accessories',
      bag: 'Bag',
      back: 'Back',
      backToHome: 'Back to Home',
      close: 'Close',
    },
    shop: {
      collectionEyebrow: 'Collection',
      chapterTitle: 'Chapter I',
      chapterIntro: 'Wherever life is lived, from Abu Dhabi to London...',
      refine: 'Refine',
      productCategories: 'Product categories',
      sizing: 'Sizing',
      sizeGuide: 'Size guide',
      piece: 'piece',
      pieces: 'pieces',
      sortNewest: 'Newest',
      sortPriceAsc: 'Price: Low to High',
      sortPriceDesc: 'Price: High to Low',
      sortName: 'Name',
      discover: 'Discover',
      viewProduct: 'View product',
      openProduct: 'Open {name}',
      noPiecesInChapter: 'No pieces in this chapter yet.',
      categoryAll: 'All',
      categories: {
        All: 'All',
        Abayas: 'Abayas',
        Kaftans: 'Kaftans',
        Dresses: 'Dresses',
        Sets: 'Sets',
      },
    },
    shopExtras: {
      availableColours: 'Available colours',
    },
    cart: {
      shoppingBag: 'Shopping Bag',
      empty: 'Your Bag is Empty',
      emptyDescription: 'Discover our collection and find pieces that speak to you.',
      shopNow: 'Shop Now',
      continueShopping: 'Continue Shopping',
      orderSummary: 'Order Summary',
      subtotal: 'Subtotal',
      estimatedTotal: 'Estimated Total',
      taxesIncluded: 'Taxes included.',
      lineTotal: 'Line total',
      size: 'Size',
      colour: 'Colour',
      length: 'Length',
      productCode: 'Product code: {sku}',
      personalisation: 'Personalisation',
      note: 'Note',
      proceedSecurePayment: 'Proceed to Secure Payment',
      shipWorldwide: 'We Ship Worldwide',
      freeUaeShipping: 'Complimentary UAE shipping on orders above AED 1,000',
      intlShippingNote: 'International shipping available.',
      deliveryAtPayment: 'Delivery rates are calculated at payment',
    },
    checkout: {
      securePayment: 'Secure Payment',
      editBag: 'Edit bag',
      reviewOrder: 'Review Your Order',
      reviewSubtitle: 'Review your selection before proceeding to secure payment.',
      redirecting: 'Redirecting...',
      continueSecurePayment: 'Continue to Secure Payment',
      legalAcceptPrefix: 'I have read and accept the',
      shipmentPolicy: 'Shipment & Return Policy',
      legalAnd: 'and',
      termsConditions: 'Terms & Conditions',
      legalRequired: 'Please accept the Shipment & Return Policy and Terms & Conditions',
      checkoutError: 'Unable to start checkout. Please try again.',
      stripeNotConfigured: 'Stripe checkout is not configured for this environment yet.',
      stripeEnvHint: 'Set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY and STRIPE_SECRET_KEY to enable checkout.',
      processingPayment: 'Processing payment...',
    },
    accessories: {
      collectionTitle: 'Accessories',
      collectionEyebrow: 'Collection',
      backToHome: 'Back to Home',
      filter: 'Filter',
      products: 'Products',
      price: 'Price',
      stoneType: 'Stone type',
      clearFilters: 'Clear filters',
      productNotFound: 'Product Not Found',
      returnToAccessories: 'Return to Accessories',
      materials: 'Materials',
      careBullets: [
        'Store in a soft pouch after wear.',
        'Avoid perfume, water, and harsh chemicals.',
        'Wipe gently with a dry, soft cloth.',
      ],
      oneSize: 'One Size',
      selectColour: 'Select colour',
    },
    footer: {
      emailList: 'Email List',
      subscribeEyebrow: 'Private Access',
      emailPlaceholder: 'Enter your email',
      subscribe: 'Subscribe',
      language: 'Language',
      countryRegion: 'Country / Region',
      worldwideShipping: 'Worldwide Shipping',
      deliveredGlobally: 'Delivered globally with trusted carriers.',
      freeUaeShippingTitle: 'Free UAE Shipping',
      freeUaeShippingDesc: 'Complimentary delivery on orders above AED 1,000.',
      craftedToOrderTitle: 'Crafted to Order',
      craftedToOrderDesc: 'Each piece is prepared with care and precision.',
      givingForwardTitle: 'We Give Forward',
      givingForwardDesc: 'A portion of profits supports women-focused causes.',
      newsletter: 'Newsletter',
      closeModal: 'Close modal',
      close: 'Close',
    },
    account: {
      account: 'Account',
      createAccount: 'Create Account',
      getStarted: 'Get Started',
      signIn: 'Sign In',
      signInDesc: 'Sign in to access your orders and saved details.',
      registerDesc: 'Create your account for a faster and more personal checkout.',
    },
    notFound: {
      title: 'Page Not Found',
      description: 'The page you are looking for may have moved or no longer exists.',
      backToHome: 'Back to Home',
      shopCollection: 'Shop Collection',
      popularPages: 'Popular Pages',
      about: 'About',
      theCodes: 'The Codes',
      contact: 'Contact',
      needHelp: 'Need help?',
    },
    trust: {
      ethicallyMade: 'Ethically made',
      weGiveForward: 'We Give Forward',
      worldwideShipping: 'Worldwide shipping',
      secureCheckout: 'Secure checkout',
    },
    deliveryBanner: {
      uaeFree: 'Free UAE Shipping on Orders Over 1000 AED • Delivery in 2 Weeks',
      worldwide: 'We Ship Worldwide • Shipping Calculated at Checkout',
      tabby: 'Pay in 4 Interest-Free Payments with Tabby',
    },
    stickyAddToCart: {
      selectSizeAndColour: 'Select size & colour',
      addToBag: 'Add to Bag',
      added: 'Added!',
    },
    quickBuy: {
      chooseSizeError: 'Please select a size',
      chooseColourError: 'Please select a color',
      size: 'Size',
      color: 'Color',
      addToBag: 'Add to Bag',
      added: 'Added!',
      buyNow: 'Buy Now',
    },
    miniCart: {
      yourBagIsEmpty: 'Your bag is empty',
      discoverCollection: 'Discover our collection',
      reviewYourOrder: 'Review Your Order',
      youMayAlsoLike: 'You may also like',
    },
  },
  ar: {
    common: {
      home: 'الرئيسية',
      shop: 'المتجر',
      accessories: 'الإكسسوارات',
      bag: 'السلة',
      back: 'رجوع',
      backToHome: 'العودة للرئيسية',
      close: 'إغلاق',
    },
    shop: {
      collectionEyebrow: 'التشكيلة',
      chapterTitle: 'الفصل ١',
      chapterIntro: 'أينما تُعاش الحياة، من أبوظبي إلى لندن...',
      refine: 'تصفية',
      productCategories: 'فئات المنتجات',
      sizing: 'المقاسات',
      sizeGuide: 'دليل المقاسات',
      piece: 'قطعة',
      pieces: 'قطع',
      sortNewest: 'الأحدث',
      sortPriceAsc: 'السعر: من الأقل إلى الأعلى',
      sortPriceDesc: 'السعر: من الأعلى إلى الأقل',
      sortName: 'الاسم',
      discover: 'اكتشفي',
      viewProduct: 'عرض المنتج',
      openProduct: 'فتح {name}',
      noPiecesInChapter: 'لا توجد قطع في هذا القسم حالياً.',
      categoryAll: 'الكل',
      categories: {
        All: 'الكل',
        Abayas: 'عبايات',
        Kaftans: 'قفاطين',
        Dresses: 'فساتين',
        Sets: 'أطقم',
      },
    },
    shopExtras: {
      availableColours: 'ألوان متوفرة',
    },
    cart: {
      shoppingBag: 'سلة التسوق',
      empty: 'السلة فارغة',
      emptyDescription: 'اكتشفي مجموعتنا واعثري على القطع التي تعبّر عنك.',
      shopNow: 'تسوقي الآن',
      continueShopping: 'متابعة التسوق',
      orderSummary: 'ملخص الطلب',
      subtotal: 'المجموع الفرعي',
      estimatedTotal: 'الإجمالي التقريبي',
      taxesIncluded: 'الضرائب مشمولة.',
      lineTotal: 'الإجمالي',
      size: 'المقاس',
      colour: 'اللون',
      length: 'الطول',
      productCode: 'رمز المنتج: {sku}',
      personalisation: 'التخصيص',
      note: 'ملاحظة',
      proceedSecurePayment: 'المتابعة للدفع الآمن',
      shipWorldwide: 'نشحن إلى جميع أنحاء العالم',
      freeUaeShipping: 'شحن مجاني داخل الإمارات للطلبات فوق ١٬٠٠٠ درهم',
      intlShippingNote: 'الشحن الدولي متاح.',
      deliveryAtPayment: 'تُحسب أسعار التوصيل عند الدفع',
    },
    checkout: {
      securePayment: 'دفع آمن',
      editBag: 'تعديل السلة',
      reviewOrder: 'راجعي طلبك',
      reviewSubtitle: 'راجعي اختيارك قبل المتابعة إلى الدفع الآمن.',
      redirecting: 'جاري التحويل...',
      continueSecurePayment: 'المتابعة للدفع الآمن',
      legalAcceptPrefix: 'قرأتُ ووافقتُ على',
      shipmentPolicy: 'سياسة الشحن والإرجاع',
      legalAnd: 'و',
      termsConditions: 'الشروط والأحكام',
      legalRequired: 'يرجى قبول سياسة الشحن والإرجاع والشروط والأحكام',
      checkoutError: 'تعذر بدء الدفع. يرجى المحاولة مرة أخرى.',
      stripeNotConfigured: 'الدفع عبر Stripe غير مُهيأ بعد في هذه البيئة.',
      stripeEnvHint: 'أضيفي NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY و STRIPE_SECRET_KEY لتفعيل الدفع.',
      processingPayment: 'جاري معالجة الدفع...',
    },
    accessories: {
      collectionTitle: 'الإكسسوارات',
      collectionEyebrow: 'التشكيلة',
      backToHome: 'العودة للرئيسية',
      filter: 'تصفية',
      products: 'المنتجات',
      price: 'السعر',
      stoneType: 'نوع الحجر',
      clearFilters: 'مسح التصفية',
      productNotFound: 'المنتج غير موجود',
      returnToAccessories: 'العودة إلى الإكسسوارات',
      materials: 'الخامات',
      careBullets: [
        'يُحفظ في جراب ناعم بعد الاستخدام.',
        'تجنّبي العطور والماء والمواد الكيميائية القاسية.',
        'نظّفي برفق بقطعة قماش ناعمة وجافة.',
      ],
      oneSize: 'مقاس واحد',
      selectColour: 'اختاري اللون',
    },
    footer: {
      emailList: 'القائمة البريدية',
      subscribeEyebrow: 'وصول خاص',
      emailPlaceholder: 'أدخلي بريدك الإلكتروني',
      subscribe: 'اشتركي',
      language: 'اللغة',
      countryRegion: 'الدولة / المنطقة',
      worldwideShipping: 'شحن عالمي',
      deliveredGlobally: 'توصيل عالمي عبر شركات شحن موثوقة.',
      freeUaeShippingTitle: 'شحن مجاني داخل الإمارات',
      freeUaeShippingDesc: 'توصيل مجاني للطلبات فوق ١٬٠٠٠ درهم.',
      craftedToOrderTitle: 'يُصنع حسب الطلب',
      craftedToOrderDesc: 'كل قطعة تُحضّر بعناية ودقة.',
      givingForwardTitle: 'نعطي للأمام',
      givingForwardDesc: 'جزء من الأرباح يدعم قضايا مخصصة للنساء.',
      newsletter: 'النشرة البريدية',
      closeModal: 'إغلاق النافذة',
      close: 'إغلاق',
    },
    account: {
      account: 'الحساب',
      createAccount: 'إنشاء حساب',
      getStarted: 'ابدئي الآن',
      signIn: 'تسجيل الدخول',
      signInDesc: 'سجّلي الدخول للوصول إلى طلباتك وبياناتك المحفوظة.',
      registerDesc: 'أنشئي حسابك لتجربة أسرع وأكثر تخصيصاً عند الدفع.',
    },
    notFound: {
      title: 'الصفحة غير موجودة',
      description: 'قد يكون الرابط قد تغير أو لم تعد هذه الصفحة متاحة.',
      backToHome: 'العودة للرئيسية',
      shopCollection: 'تسوقي المجموعة',
      popularPages: 'صفحات شائعة',
      about: 'من نحن',
      theCodes: 'القيم',
      contact: 'اتصلي بنا',
      needHelp: 'هل تحتاجين مساعدة؟',
    },
    trust: {
      ethicallyMade: 'صنع أخلاقي',
      weGiveForward: 'نعطي للأمام',
      worldwideShipping: 'شحن عالمي',
      secureCheckout: 'دفع آمن',
    },
    deliveryBanner: {
      uaeFree: 'شحن مجاني داخل الإمارات للطلبات فوق 1000 درهم • توصيل خلال أسبوعين',
      worldwide: 'نشحن لجميع أنحاء العالم • رسوم الشحن تُحسب عند الدفع',
      tabby: 'ادفعي على 4 دفعات بدون فوائد مع تابي',
    },
    stickyAddToCart: {
      selectSizeAndColour: 'اختاري المقاس واللون',
      addToBag: 'أضيفي للسلة',
      added: 'تمت الإضافة!',
    },
    quickBuy: {
      chooseSizeError: 'الرجاء اختيار المقاس',
      chooseColourError: 'الرجاء اختيار اللون',
      size: 'المقاس',
      color: 'اللون',
      addToBag: 'أضيفي للسلة',
      added: 'تمت الإضافة!',
      buyNow: 'اشتري الآن',
    },
    miniCart: {
      yourBagIsEmpty: 'السلة فارغة',
      discoverCollection: 'اكتشفي مجموعتنا',
      reviewYourOrder: 'راجعي طلبك',
      youMayAlsoLike: 'قد يعجبك أيضاً',
    },
  },
  fr: {
    common: {
      home: 'Accueil',
      shop: 'Boutique',
      accessories: 'Accessoires',
      bag: 'Panier',
      back: 'Retour',
      backToHome: 'Retour a l accueil',
      close: 'Fermer',
    },
    shop: {
      collectionEyebrow: 'Collection',
      chapterTitle: 'Chapitre I',
      chapterIntro: 'Ou que la vie se vive, d Abu Dhabi a Londres...',
      refine: 'Affiner',
      productCategories: 'Categories de produits',
      sizing: 'Tailles',
      sizeGuide: 'Guide des tailles',
      piece: 'piece',
      pieces: 'pieces',
      sortNewest: 'Nouveautes',
      sortPriceAsc: 'Prix: croissant',
      sortPriceDesc: 'Prix: decroissant',
      sortName: 'Nom',
      discover: 'Decouvrir',
      viewProduct: 'Voir le produit',
      openProduct: 'Ouvrir {name}',
      noPiecesInChapter: 'Aucune piece dans ce chapitre pour le moment.',
      categoryAll: 'Tous',
      categories: {
        All: 'Tous',
        Abayas: 'Abayas',
        Kaftans: 'Kaftans',
        Dresses: 'Robes',
        Sets: 'Ensembles',
      },
    },
    shopExtras: {
      availableColours: 'Couleurs disponibles',
    },
    cart: {
      shoppingBag: 'Panier',
      empty: 'Votre panier est vide',
      emptyDescription: 'Decouvrez notre collection et trouvez des pieces qui vous ressemblent.',
      shopNow: 'Acheter maintenant',
      continueShopping: 'Continuer vos achats',
      orderSummary: 'Recapitulatif',
      subtotal: 'Sous-total',
      estimatedTotal: 'Total estime',
      taxesIncluded: 'Taxes incluses.',
      lineTotal: 'Total de ligne',
      size: 'Taille',
      colour: 'Couleur',
      length: 'Longueur',
      productCode: 'Code produit: {sku}',
      personalisation: 'Personnalisation',
      note: 'Note',
      proceedSecurePayment: 'Passer au paiement securise',
      shipWorldwide: 'Livraison dans le monde entier',
      freeUaeShipping: 'Livraison offerte aux EAU pour les commandes superieures a 1 000 AED',
      intlShippingNote: 'Livraison internationale disponible.',
      deliveryAtPayment: 'Les frais de livraison sont calcules au paiement',
    },
    checkout: {
      securePayment: 'Paiement securise',
      editBag: 'Modifier le panier',
      reviewOrder: 'Verifiez votre commande',
      reviewSubtitle: 'Verifiez votre selection avant de passer au paiement securise.',
      redirecting: 'Redirection...',
      continueSecurePayment: 'Continuer vers le paiement securise',
      legalAcceptPrefix: 'J ai lu et j accepte la',
      shipmentPolicy: 'Politique de livraison et de retour',
      legalAnd: 'et les',
      termsConditions: 'Conditions generales',
      legalRequired: 'Veuillez accepter la Politique de livraison et de retour ainsi que les Conditions generales',
      checkoutError: 'Impossible de lancer le paiement. Veuillez reessayer.',
      stripeNotConfigured: 'Le paiement Stripe n est pas configure pour cet environnement.',
      stripeEnvHint: 'Definissez NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY et STRIPE_SECRET_KEY pour activer le paiement.',
      processingPayment: 'Traitement du paiement...',
    },
    accessories: {
      collectionTitle: 'Accessoires',
      collectionEyebrow: 'Collection',
      backToHome: 'Retour a l accueil',
      filter: 'Filtrer',
      products: 'Produits',
      price: 'Prix',
      stoneType: 'Type de pierre',
      clearFilters: 'Effacer les filtres',
      productNotFound: 'Produit introuvable',
      returnToAccessories: 'Retour aux accessoires',
      materials: 'Materiaux',
      careBullets: [
        'Conserver dans une pochette douce apres usage.',
        'Eviter le parfum, l eau et les produits chimiques agressifs.',
        'Nettoyer delicatement avec un chiffon doux et sec.',
      ],
      oneSize: 'Taille unique',
      selectColour: 'Choisir la couleur',
    },
    footer: {
      emailList: 'Liste e-mail',
      subscribeEyebrow: 'Acces prive',
      emailPlaceholder: 'Votre e-mail',
      subscribe: 'S inscrire',
      language: 'Langue',
      countryRegion: 'Pays / Region',
      worldwideShipping: 'Livraison mondiale',
      deliveredGlobally: 'Livre dans le monde entier avec des transporteurs de confiance.',
      freeUaeShippingTitle: 'Livraison offerte aux EAU',
      freeUaeShippingDesc: 'Livraison offerte pour les commandes superieures a 1 000 AED.',
      craftedToOrderTitle: 'Confection sur commande',
      craftedToOrderDesc: 'Chaque piece est preparee avec soin et precision.',
      givingForwardTitle: 'Nous redonnons',
      givingForwardDesc: 'Une partie des benefices soutient des causes en faveur des femmes.',
      newsletter: 'Newsletter',
      closeModal: 'Fermer la fenetre',
      close: 'Fermer',
    },
    account: {
      account: 'Compte',
      createAccount: 'Creer un compte',
      getStarted: 'Commencer',
      signIn: 'Se connecter',
      signInDesc: 'Connectez-vous pour acceder a vos commandes et informations enregistrees.',
      registerDesc: 'Creez votre compte pour un paiement plus rapide et personnalise.',
    },
    notFound: {
      title: 'Page introuvable',
      description: 'La page recherchee a peut-etre ete deplacee ou n existe plus.',
      backToHome: 'Retour a l accueil',
      shopCollection: 'Voir la collection',
      popularPages: 'Pages populaires',
      about: 'A propos',
      theCodes: 'Nos codes',
      contact: 'Contact',
      needHelp: 'Besoin d aide ?',
    },
    trust: {
      ethicallyMade: 'Fabrication ethique',
      weGiveForward: 'Nous redonnons',
      worldwideShipping: 'Livraison mondiale',
      secureCheckout: 'Paiement securise',
    },
    deliveryBanner: {
      uaeFree: 'Livraison gratuite aux EAU pour les commandes de plus de 1000 AED • Livraison sous 2 semaines',
      worldwide: 'Livraison mondiale • Frais calculés au paiement',
      tabby: 'Payez en 4 fois sans frais avec Tabby',
    },
    stickyAddToCart: {
      selectSizeAndColour: 'Choisissez taille et couleur',
      addToBag: 'Ajouter au panier',
      added: 'Ajoute !',
    },
    quickBuy: {
      chooseSizeError: 'Veuillez choisir une taille',
      chooseColourError: 'Veuillez choisir une couleur',
      size: 'Taille',
      color: 'Couleur',
      addToBag: 'Ajouter au panier',
      added: 'Ajoute !',
      buyNow: 'Acheter maintenant',
    },
    miniCart: {
      yourBagIsEmpty: 'Votre panier est vide',
      discoverCollection: 'Decouvrez notre collection',
      reviewYourOrder: 'Verifiez votre commande',
      youMayAlsoLike: 'Vous pourriez aussi aimer',
    },
  },
  de: {
    common: {
      home: 'Startseite',
      shop: 'Shop',
      accessories: 'Accessoires',
      bag: 'Tasche',
      back: 'Zuruck',
      backToHome: 'Zur Startseite',
      close: 'Schliessen',
    },
    shop: {
      collectionEyebrow: 'Kollektion',
      chapterTitle: 'Kapitel I',
      chapterIntro: 'Wo immer das Leben stattfindet, von Abu Dhabi bis London...',
      refine: 'Verfeinern',
      productCategories: 'Produktkategorien',
      sizing: 'Groessen',
      sizeGuide: 'Groessenratgeber',
      piece: 'Stuck',
      pieces: 'Stucke',
      sortNewest: 'Neuheiten',
      sortPriceAsc: 'Preis: aufsteigend',
      sortPriceDesc: 'Preis: absteigend',
      sortName: 'Name',
      discover: 'Entdecken',
      viewProduct: 'Produkt ansehen',
      openProduct: 'Offne {name}',
      noPiecesInChapter: 'Noch keine Stucke in diesem Kapitel.',
      categoryAll: 'Alle',
      categories: {
        All: 'Alle',
        Abayas: 'Abayas',
        Kaftans: 'Kaftane',
        Dresses: 'Kleider',
        Sets: 'Sets',
      },
    },
    shopExtras: {
      availableColours: 'Verfügbare Farben',
    },
    cart: {
      shoppingBag: 'Einkaufstasche',
      empty: 'Ihre Tasche ist leer',
      emptyDescription: 'Entdecken Sie unsere Kollektion und finden Sie Stucke, die zu Ihnen passen.',
      shopNow: 'Jetzt shoppen',
      continueShopping: 'Weiter einkaufen',
      orderSummary: 'Bestellubersicht',
      subtotal: 'Zwischensumme',
      estimatedTotal: 'Gesamtsumme (geschatzt)',
      taxesIncluded: 'Steuern inbegriffen.',
      lineTotal: 'Positionssumme',
      size: 'Groesse',
      colour: 'Farbe',
      length: 'Lange',
      productCode: 'Produktcode: {sku}',
      personalisation: 'Personalisierung',
      note: 'Hinweis',
      proceedSecurePayment: 'Zur sicheren Zahlung',
      shipWorldwide: 'Weltweiter Versand',
      freeUaeShipping: 'Kostenloser UAE-Versand fur Bestellungen uber 1.000 AED',
      intlShippingNote: 'Internationaler Versand verfugbar.',
      deliveryAtPayment: 'Versandkosten werden beim Bezahlen berechnet',
    },
    checkout: {
      securePayment: 'Sichere Zahlung',
      editBag: 'Tasche bearbeiten',
      reviewOrder: 'Bestellung prufen',
      reviewSubtitle: 'Prufen Sie Ihre Auswahl vor der sicheren Zahlung.',
      redirecting: 'Weiterleitung...',
      continueSecurePayment: 'Weiter zur sicheren Zahlung',
      legalAcceptPrefix: 'Ich habe gelesen und akzeptiere die',
      shipmentPolicy: 'Versand- und Ruckgaberichtlinie',
      legalAnd: 'und die',
      termsConditions: 'AGB',
      legalRequired: 'Bitte akzeptieren Sie die Versand- und Ruckgaberichtlinie sowie die AGB',
      checkoutError: 'Checkout konnte nicht gestartet werden. Bitte erneut versuchen.',
      stripeNotConfigured: 'Stripe Checkout ist fur diese Umgebung noch nicht konfiguriert.',
      stripeEnvHint: 'Setzen Sie NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY und STRIPE_SECRET_KEY, um Checkout zu aktivieren.',
      processingPayment: 'Zahlung wird verarbeitet...',
    },
    accessories: {
      collectionTitle: 'Accessoires',
      collectionEyebrow: 'Kollektion',
      backToHome: 'Zur Startseite',
      filter: 'Filtern',
      products: 'Produkte',
      price: 'Preis',
      stoneType: 'Steinart',
      clearFilters: 'Filter loschen',
      productNotFound: 'Produkt nicht gefunden',
      returnToAccessories: 'Zuruck zu Accessoires',
      materials: 'Materialien',
      careBullets: [
        'Nach dem Tragen in einem weichen Beutel aufbewahren.',
        'Parfum, Wasser und aggressive Chemikalien vermeiden.',
        'Vorsichtig mit einem trockenen, weichen Tuch reinigen.',
      ],
      oneSize: 'Einheitsgroesse',
      selectColour: 'Farbe wahlen',
    },
    footer: {
      emailList: 'E-Mail-Liste',
      subscribeEyebrow: 'Privater Zugang',
      emailPlaceholder: 'Ihre E-Mail',
      subscribe: 'Abonnieren',
      language: 'Sprache',
      countryRegion: 'Land / Region',
      worldwideShipping: 'Weltweiter Versand',
      deliveredGlobally: 'Weltweit geliefert mit vertrauten Versandpartnern.',
      freeUaeShippingTitle: 'Kostenloser UAE-Versand',
      freeUaeShippingDesc: 'Kostenlose Lieferung bei Bestellungen uber 1.000 AED.',
      craftedToOrderTitle: 'Auf Bestellung gefertigt',
      craftedToOrderDesc: 'Jedes Stuck wird mit Sorgfalt und Prazision vorbereitet.',
      givingForwardTitle: 'Wir geben weiter',
      givingForwardDesc: 'Ein Teil des Gewinns unterstutzt Initiativen fur Frauen.',
      newsletter: 'Newsletter',
      closeModal: 'Fenster schliessen',
      close: 'Schliessen',
    },
    account: {
      account: 'Konto',
      createAccount: 'Konto erstellen',
      getStarted: 'Loslegen',
      signIn: 'Anmelden',
      signInDesc: 'Melden Sie sich an, um auf Bestellungen und gespeicherte Daten zuzugreifen.',
      registerDesc: 'Erstellen Sie ein Konto fur einen schnelleren und personlicheren Checkout.',
    },
    notFound: {
      title: 'Seite nicht gefunden',
      description: 'Die gesuchte Seite wurde moglicherweise verschoben oder existiert nicht mehr.',
      backToHome: 'Zur Startseite',
      shopCollection: 'Kollektion ansehen',
      popularPages: 'Beliebte Seiten',
      about: 'Uber uns',
      theCodes: 'Die Codes',
      contact: 'Kontakt',
      needHelp: 'Brauchen Sie Hilfe?',
    },
    trust: {
      ethicallyMade: 'Ethisch gefertigt',
      weGiveForward: 'Wir geben weiter',
      worldwideShipping: 'Weltweiter Versand',
      secureCheckout: 'Sicherer Checkout',
    },
    deliveryBanner: {
      uaeFree: 'Kostenloser Versand in den VAE ab 1000 AED • Lieferung in 2 Wochen',
      worldwide: 'Weltweiter Versand • Versandkosten werden an der Kasse berechnet',
      tabby: 'Zahlen Sie in 4 zinsfreien Raten mit Tabby',
    },
    stickyAddToCart: {
      selectSizeAndColour: 'Groesse und Farbe wahlen',
      addToBag: 'In die Tasche',
      added: 'Hinzugefugt!',
    },
    quickBuy: {
      chooseSizeError: 'Bitte wahlen Sie eine Groesse',
      chooseColourError: 'Bitte wahlen Sie eine Farbe',
      size: 'Groesse',
      color: 'Farbe',
      addToBag: 'In die Tasche',
      added: 'Hinzugefugt!',
      buyNow: 'Jetzt kaufen',
    },
    miniCart: {
      yourBagIsEmpty: 'Ihre Tasche ist leer',
      discoverCollection: 'Entdecken Sie unsere Kollektion',
      reviewYourOrder: 'Bestellung prufen',
      youMayAlsoLike: 'Das konnte Ihnen auch gefallen',
    },
  },
  it: {
    common: {
      home: 'Home',
      shop: 'Negozio',
      accessories: 'Accessori',
      bag: 'Borsa',
      back: 'Indietro',
      backToHome: 'Torna alla home',
      close: 'Chiudi',
    },
    shop: {
      collectionEyebrow: 'Collezione',
      chapterTitle: 'Capitolo I',
      chapterIntro: 'Ovunque si viva la vita, da Abu Dhabi a Londra...',
      refine: 'Filtra',
      productCategories: 'Categorie prodotto',
      sizing: 'Taglie',
      sizeGuide: 'Guida taglie',
      piece: 'pezzo',
      pieces: 'pezzi',
      sortNewest: 'Novita',
      sortPriceAsc: 'Prezzo: crescente',
      sortPriceDesc: 'Prezzo: decrescente',
      sortName: 'Nome',
      discover: 'Scopri',
      viewProduct: 'Vedi prodotto',
      openProduct: 'Apri {name}',
      noPiecesInChapter: 'Nessun capo in questo capitolo al momento.',
      categoryAll: 'Tutti',
      categories: {
        All: 'Tutti',
        Abayas: 'Abaya',
        Kaftans: 'Caftani',
        Dresses: 'Abiti',
        Sets: 'Set',
      },
    },
    shopExtras: {
      availableColours: 'Colori disponibili',
    },
    cart: {
      shoppingBag: 'Shopping bag',
      empty: 'La tua borsa e vuota',
      emptyDescription: 'Scopri la nostra collezione e trova i capi che parlano di te.',
      shopNow: 'Acquista ora',
      continueShopping: 'Continua lo shopping',
      orderSummary: 'Riepilogo ordine',
      subtotal: 'Subtotale',
      estimatedTotal: 'Totale stimato',
      taxesIncluded: 'Tasse incluse.',
      lineTotal: 'Totale riga',
      size: 'Taglia',
      colour: 'Colore',
      length: 'Lunghezza',
      productCode: 'Codice prodotto: {sku}',
      personalisation: 'Personalizzazione',
      note: 'Nota',
      proceedSecurePayment: 'Procedi al pagamento sicuro',
      shipWorldwide: 'Spediamo in tutto il mondo',
      freeUaeShipping: 'Spedizione gratuita negli EAU per ordini oltre 1.000 AED',
      intlShippingNote: 'Spedizione internazionale disponibile.',
      deliveryAtPayment: 'Le spese di consegna sono calcolate al pagamento',
    },
    checkout: {
      securePayment: 'Pagamento sicuro',
      editBag: 'Modifica borsa',
      reviewOrder: 'Rivedi il tuo ordine',
      reviewSubtitle: 'Controlla la tua selezione prima di procedere al pagamento sicuro.',
      redirecting: 'Reindirizzamento...',
      continueSecurePayment: 'Continua al pagamento sicuro',
      legalAcceptPrefix: 'Ho letto e accetto la',
      shipmentPolicy: 'Politica di spedizione e reso',
      legalAnd: 'e i',
      termsConditions: 'Termini e condizioni',
      legalRequired: 'Accetta la Politica di spedizione e reso e i Termini e condizioni',
      checkoutError: 'Impossibile avviare il checkout. Riprova.',
      stripeNotConfigured: 'Stripe checkout non e configurato per questo ambiente.',
      stripeEnvHint: 'Imposta NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY e STRIPE_SECRET_KEY per abilitare il checkout.',
      processingPayment: 'Elaborazione pagamento...',
    },
    accessories: {
      collectionTitle: 'Accessori',
      collectionEyebrow: 'Collezione',
      backToHome: 'Torna alla home',
      filter: 'Filtro',
      products: 'Prodotti',
      price: 'Prezzo',
      stoneType: 'Tipo di pietra',
      clearFilters: 'Cancella filtri',
      productNotFound: 'Prodotto non trovato',
      returnToAccessories: 'Torna agli accessori',
      materials: 'Materiali',
      careBullets: [
        'Riponi in una custodia morbida dopo l uso.',
        'Evita profumo, acqua e sostanze chimiche aggressive.',
        'Pulisci delicatamente con un panno morbido e asciutto.',
      ],
      oneSize: 'Taglia unica',
      selectColour: 'Seleziona colore',
    },
    footer: {
      emailList: 'Lista e-mail',
      subscribeEyebrow: 'Accesso privato',
      emailPlaceholder: 'La tua email',
      subscribe: 'Iscriviti',
      language: 'Lingua',
      countryRegion: 'Paese / Regione',
      worldwideShipping: 'Spedizione mondiale',
      deliveredGlobally: 'Consegna globale con corrieri affidabili.',
      freeUaeShippingTitle: 'Spedizione gratuita negli EAU',
      freeUaeShippingDesc: 'Consegna gratuita per ordini superiori a 1.000 AED.',
      craftedToOrderTitle: 'Creato su ordinazione',
      craftedToOrderDesc: 'Ogni pezzo e preparato con cura e precisione.',
      givingForwardTitle: 'Diamo avanti',
      givingForwardDesc: 'Una parte dei profitti sostiene cause dedicate alle donne.',
      newsletter: 'Newsletter',
      closeModal: 'Chiudi finestra',
      close: 'Chiudi',
    },
    account: {
      account: 'Account',
      createAccount: 'Crea account',
      getStarted: 'Inizia',
      signIn: 'Accedi',
      signInDesc: 'Accedi per visualizzare ordini e dettagli salvati.',
      registerDesc: 'Crea il tuo account per un checkout piu rapido e personale.',
    },
    notFound: {
      title: 'Pagina non trovata',
      description: 'La pagina che cerchi potrebbe essere stata spostata o non esistere piu.',
      backToHome: 'Torna alla home',
      shopCollection: 'Vedi collezione',
      popularPages: 'Pagine popolari',
      about: 'Chi siamo',
      theCodes: 'I codici',
      contact: 'Contatti',
      needHelp: 'Hai bisogno di aiuto?',
    },
    trust: {
      ethicallyMade: 'Fatto eticamente',
      weGiveForward: 'Diamo avanti',
      worldwideShipping: 'Spedizione mondiale',
      secureCheckout: 'Checkout sicuro',
    },
    deliveryBanner: {
      uaeFree: 'Spedizione gratuita negli EAU per ordini superiori a 1000 AED • Consegna in 2 settimane',
      worldwide: 'Spediamo in tutto il mondo • Spese calcolate al pagamento',
      tabby: 'Paga in 4 rate senza interessi con Tabby',
    },
    stickyAddToCart: {
      selectSizeAndColour: 'Seleziona taglia e colore',
      addToBag: 'Aggiungi alla borsa',
      added: 'Aggiunto!',
    },
    quickBuy: {
      chooseSizeError: 'Seleziona una taglia',
      chooseColourError: 'Seleziona un colore',
      size: 'Taglia',
      color: 'Colore',
      addToBag: 'Aggiungi alla borsa',
      added: 'Aggiunto!',
      buyNow: 'Acquista ora',
    },
    miniCart: {
      yourBagIsEmpty: 'La tua borsa e vuota',
      discoverCollection: 'Scopri la nostra collezione',
      reviewYourOrder: 'Rivedi il tuo ordine',
      youMayAlsoLike: 'Potrebbe piacerti anche',
    },
  },
  es: {
    common: {
      home: 'Inicio',
      shop: 'Tienda',
      accessories: 'Accesorios',
      bag: 'Bolsa',
      back: 'Atras',
      backToHome: 'Volver al inicio',
      close: 'Cerrar',
    },
    shop: {
      collectionEyebrow: 'Coleccion',
      chapterTitle: 'Capitulo I',
      chapterIntro: 'Dondequiera que se viva la vida, de Abu Dhabi a Londres...',
      refine: 'Refinar',
      productCategories: 'Categorias de producto',
      sizing: 'Tallas',
      sizeGuide: 'Guia de tallas',
      piece: 'pieza',
      pieces: 'piezas',
      sortNewest: 'Novedades',
      sortPriceAsc: 'Precio: menor a mayor',
      sortPriceDesc: 'Precio: mayor a menor',
      sortName: 'Nombre',
      discover: 'Descubrir',
      viewProduct: 'Ver producto',
      openProduct: 'Abrir {name}',
      noPiecesInChapter: 'Aun no hay piezas en este capitulo.',
      categoryAll: 'Todo',
      categories: {
        All: 'Todo',
        Abayas: 'Abayas',
        Kaftans: 'Kaftanes',
        Dresses: 'Vestidos',
        Sets: 'Conjuntos',
      },
    },
    shopExtras: {
      availableColours: 'Colores disponibles',
    },
    cart: {
      shoppingBag: 'Bolsa de compra',
      empty: 'Tu bolsa esta vacia',
      emptyDescription: 'Descubre nuestra coleccion y encuentra piezas para ti.',
      shopNow: 'Comprar ahora',
      continueShopping: 'Seguir comprando',
      orderSummary: 'Resumen del pedido',
      subtotal: 'Subtotal',
      estimatedTotal: 'Total estimado',
      taxesIncluded: 'Impuestos incluidos.',
      lineTotal: 'Total de linea',
      size: 'Talla',
      colour: 'Color',
      length: 'Largo',
      productCode: 'Codigo de producto: {sku}',
      personalisation: 'Personalizacion',
      note: 'Nota',
      proceedSecurePayment: 'Proceder al pago seguro',
      shipWorldwide: 'Enviamos a todo el mundo',
      freeUaeShipping: 'Envio gratuito en EAU para pedidos superiores a 1.000 AED',
      intlShippingNote: 'Envio internacional disponible.',
      deliveryAtPayment: 'Los gastos de envio se calculan al pagar',
    },
    checkout: {
      securePayment: 'Pago seguro',
      editBag: 'Editar bolsa',
      reviewOrder: 'Revisa tu pedido',
      reviewSubtitle: 'Revisa tu seleccion antes de continuar al pago seguro.',
      redirecting: 'Redirigiendo...',
      continueSecurePayment: 'Continuar al pago seguro',
      legalAcceptPrefix: 'He leido y acepto la',
      shipmentPolicy: 'Politica de envios y devoluciones',
      legalAnd: 'y los',
      termsConditions: 'Terminos y condiciones',
      legalRequired: 'Acepta la Politica de envios y devoluciones y los Terminos y condiciones',
      checkoutError: 'No se pudo iniciar el pago. Intentalo de nuevo.',
      stripeNotConfigured: 'Stripe checkout no esta configurado para este entorno.',
      stripeEnvHint: 'Configura NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY y STRIPE_SECRET_KEY para activar el pago.',
      processingPayment: 'Procesando pago...',
    },
    accessories: {
      collectionTitle: 'Accesorios',
      collectionEyebrow: 'Coleccion',
      backToHome: 'Volver al inicio',
      filter: 'Filtrar',
      products: 'Productos',
      price: 'Precio',
      stoneType: 'Tipo de piedra',
      clearFilters: 'Borrar filtros',
      productNotFound: 'Producto no encontrado',
      returnToAccessories: 'Volver a accesorios',
      materials: 'Materiales',
      careBullets: [
        'Guarda la pieza en una bolsa suave despues de usarla.',
        'Evita perfume, agua y quimicos agresivos.',
        'Limpia suavemente con un pano seco y suave.',
      ],
      oneSize: 'Talla unica',
      selectColour: 'Seleccionar color',
    },
    footer: {
      emailList: 'Lista de correo',
      subscribeEyebrow: 'Acceso privado',
      emailPlaceholder: 'Tu email',
      subscribe: 'Suscribirse',
      language: 'Idioma',
      countryRegion: 'Pais / Region',
      worldwideShipping: 'Envio mundial',
      deliveredGlobally: 'Entrega global con transportistas de confianza.',
      freeUaeShippingTitle: 'Envio gratuito en EAU',
      freeUaeShippingDesc: 'Entrega gratuita en pedidos superiores a 1.000 AED.',
      craftedToOrderTitle: 'Hecho por encargo',
      craftedToOrderDesc: 'Cada pieza se prepara con cuidado y precision.',
      givingForwardTitle: 'Damos hacia adelante',
      givingForwardDesc: 'Una parte de las ganancias apoya causas para mujeres.',
      newsletter: 'Newsletter',
      closeModal: 'Cerrar ventana',
      close: 'Cerrar',
    },
    account: {
      account: 'Cuenta',
      createAccount: 'Crear cuenta',
      getStarted: 'Comenzar',
      signIn: 'Iniciar sesion',
      signInDesc: 'Inicia sesion para ver tus pedidos y datos guardados.',
      registerDesc: 'Crea tu cuenta para un pago mas rapido y personalizado.',
    },
    notFound: {
      title: 'Pagina no encontrada',
      description: 'La pagina que buscas puede haberse movido o ya no existe.',
      backToHome: 'Volver al inicio',
      shopCollection: 'Ver coleccion',
      popularPages: 'Paginas populares',
      about: 'Nosotros',
      theCodes: 'Los codigos',
      contact: 'Contacto',
      needHelp: 'Necesitas ayuda?',
    },
    trust: {
      ethicallyMade: 'Hecho eticamente',
      weGiveForward: 'Damos hacia adelante',
      worldwideShipping: 'Envio mundial',
      secureCheckout: 'Pago seguro',
    },
    deliveryBanner: {
      uaeFree: 'Envío gratuito en EAU en pedidos superiores a 1000 AED • Entrega en 2 semanas',
      worldwide: 'Enviamos a todo el mundo • Gastos de envío calculados al pagar',
      tabby: 'Paga en 4 plazos sin intereses con Tabby',
    },
    stickyAddToCart: {
      selectSizeAndColour: 'Selecciona talla y color',
      addToBag: 'Anadir a la bolsa',
      added: 'Anadido!',
    },
    quickBuy: {
      chooseSizeError: 'Selecciona una talla',
      chooseColourError: 'Selecciona un color',
      size: 'Talla',
      color: 'Color',
      addToBag: 'Anadir a la bolsa',
      added: 'Anadido!',
      buyNow: 'Comprar ahora',
    },
    miniCart: {
      yourBagIsEmpty: 'Tu bolsa esta vacia',
      discoverCollection: 'Descubre nuestra coleccion',
      reviewYourOrder: 'Revisa tu pedido',
      youMayAlsoLike: 'Tambien te puede gustar',
    },
  },
  ru: {
    common: {
      home: 'Главная',
      shop: 'Магазин',
      accessories: 'Аксессуары',
      bag: 'Сумка',
      back: 'Назад',
      backToHome: 'Назад на главную',
      close: 'Закрыть',
    },
    shop: {
      collectionEyebrow: 'Коллекция',
      chapterTitle: 'Глава I',
      chapterIntro: 'Где бы ни проходила жизнь, от Абу-Даби до Лондона...',
      refine: 'Фильтры',
      productCategories: 'Категории товаров',
      sizing: 'Размеры',
      sizeGuide: 'Таблица размеров',
      piece: 'изделие',
      pieces: 'изделия',
      sortNewest: 'Новинки',
      sortPriceAsc: 'Цена: по возрастанию',
      sortPriceDesc: 'Цена: по убыванию',
      sortName: 'Название',
      discover: 'Открыть',
      viewProduct: 'Смотреть товар',
      openProduct: 'Открыть {name}',
      noPiecesInChapter: 'В этой главе пока нет изделий.',
      categoryAll: 'Все',
      categories: {
        All: 'Все',
        Abayas: 'Абая',
        Kaftans: 'Кафтаны',
        Dresses: 'Платья',
        Sets: 'Комплекты',
      },
    },
    shopExtras: {
      availableColours: 'Доступные цвета',
    },
    cart: {
      shoppingBag: 'Корзина',
      empty: 'Ваша корзина пуста',
      emptyDescription: 'Откройте нашу коллекцию и найдите изделия, которые подойдут именно вам.',
      shopNow: 'К покупкам',
      continueShopping: 'Продолжить покупки',
      orderSummary: 'Итог заказа',
      subtotal: 'Промежуточный итог',
      estimatedTotal: 'Ориентировочный итог',
      taxesIncluded: 'Налоги включены.',
      lineTotal: 'Сумма позиции',
      size: 'Размер',
      colour: 'Цвет',
      length: 'Длина',
      productCode: 'Код товара: {sku}',
      personalisation: 'Персонализация',
      note: 'Примечание',
      proceedSecurePayment: 'Перейти к безопасной оплате',
      shipWorldwide: 'Доставка по всему миру',
      freeUaeShipping: 'Бесплатная доставка по ОАЭ при заказе от 1 000 AED',
      intlShippingNote: 'Доступна международная доставка.',
      deliveryAtPayment: 'Стоимость доставки рассчитывается при оплате',
    },
    checkout: {
      securePayment: 'Безопасная оплата',
      editBag: 'Изменить корзину',
      reviewOrder: 'Проверьте заказ',
      reviewSubtitle: 'Проверьте ваш выбор перед переходом к безопасной оплате.',
      redirecting: 'Перенаправление...',
      continueSecurePayment: 'Продолжить к безопасной оплате',
      legalAcceptPrefix: 'Я прочитал(а) и принимаю',
      shipmentPolicy: 'Политику доставки и возврата',
      legalAnd: 'и',
      termsConditions: 'Условия использования',
      legalRequired: 'Пожалуйста, примите Политику доставки и возврата и Условия использования',
      checkoutError: 'Не удалось начать оплату. Попробуйте снова.',
      stripeNotConfigured: 'Stripe checkout не настроен для этой среды.',
      stripeEnvHint: 'Укажите NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY и STRIPE_SECRET_KEY для включения оплаты.',
      processingPayment: 'Обработка оплаты...',
    },
    accessories: {
      collectionTitle: 'Аксессуары',
      collectionEyebrow: 'Коллекция',
      backToHome: 'Назад на главную',
      filter: 'Фильтр',
      products: 'Товары',
      price: 'Цена',
      stoneType: 'Тип камня',
      clearFilters: 'Сбросить фильтры',
      productNotFound: 'Товар не найден',
      returnToAccessories: 'Вернуться к аксессуарам',
      materials: 'Материалы',
      careBullets: [
        'Храните изделие в мягком чехле после носки.',
        'Избегайте контакта с парфюмом, водой и агрессивной химией.',
        'Аккуратно очищайте сухой мягкой тканью.',
      ],
      oneSize: 'Единый размер',
      selectColour: 'Выберите цвет',
    },
    footer: {
      emailList: 'Email-рассылка',
      subscribeEyebrow: 'Приватный доступ',
      emailPlaceholder: 'Ваш email',
      subscribe: 'Подписаться',
      language: 'Язык',
      countryRegion: 'Страна / Регион',
      worldwideShipping: 'Доставка по миру',
      deliveredGlobally: 'Доставляем по всему миру надежными перевозчиками.',
      freeUaeShippingTitle: 'Бесплатная доставка по ОАЭ',
      freeUaeShippingDesc: 'Бесплатная доставка при заказе от 1 000 AED.',
      craftedToOrderTitle: 'Изготовление на заказ',
      craftedToOrderDesc: 'Каждое изделие готовится с вниманием и точностью.',
      givingForwardTitle: 'Передаем добро дальше',
      givingForwardDesc: 'Часть прибыли направляется на поддержку женских инициатив.',
      newsletter: 'Рассылка',
      closeModal: 'Закрыть окно',
      close: 'Закрыть',
    },
    account: {
      account: 'Аккаунт',
      createAccount: 'Создать аккаунт',
      getStarted: 'Начать',
      signIn: 'Войти',
      signInDesc: 'Войдите, чтобы видеть заказы и сохраненные данные.',
      registerDesc: 'Создайте аккаунт для более быстрого и персонального оформления.',
    },
    notFound: {
      title: 'Страница не найдена',
      description: 'Страница могла быть перемещена или больше не существует.',
      backToHome: 'Назад на главную',
      shopCollection: 'Смотреть коллекцию',
      popularPages: 'Популярные страницы',
      about: 'О бренде',
      theCodes: 'Коды',
      contact: 'Контакты',
      needHelp: 'Нужна помощь?',
    },
    trust: {
      ethicallyMade: 'Этичное производство',
      weGiveForward: 'Передаем добро дальше',
      worldwideShipping: 'Доставка по миру',
      secureCheckout: 'Безопасная оплата',
    },
    deliveryBanner: {
      uaeFree: 'Бесплатная доставка по ОАЭ при заказе от 1000 AED • Доставка за 2 недели',
      worldwide: 'Доставка по всему миру • Стоимость рассчитывается при оплате',
      tabby: 'Оплата в 4 беспроцентных платежа через Tabby',
    },
    stickyAddToCart: {
      selectSizeAndColour: 'Выберите размер и цвет',
      addToBag: 'Добавить в сумку',
      added: 'Добавлено!',
    },
    quickBuy: {
      chooseSizeError: 'Пожалуйста, выберите размер',
      chooseColourError: 'Пожалуйста, выберите цвет',
      size: 'Размер',
      color: 'Цвет',
      addToBag: 'Добавить в сумку',
      added: 'Добавлено!',
      buyNow: 'Купить сейчас',
    },
    miniCart: {
      yourBagIsEmpty: 'Ваша корзина пуста',
      discoverCollection: 'Откройте нашу коллекцию',
      reviewYourOrder: 'Проверьте заказ',
      youMayAlsoLike: 'Вам также может понравиться',
    },
  },
  zh: {
    common: {
      home: '首页',
      shop: '商店',
      accessories: '配饰',
      bag: '购物袋',
      back: '返回',
      backToHome: '返回首页',
      close: '关闭',
    },
    shop: {
      collectionEyebrow: '系列',
      chapterTitle: '第一章',
      chapterIntro: '无论生活发生在何处，从阿布扎比到伦敦...',
      refine: '筛选',
      productCategories: '产品分类',
      sizing: '尺码',
      sizeGuide: '尺码指南',
      piece: '件',
      pieces: '件',
      sortNewest: '最新',
      sortPriceAsc: '价格: 由低到高',
      sortPriceDesc: '价格: 由高到低',
      sortName: '名称',
      discover: '探索',
      viewProduct: '查看产品',
      openProduct: '打开 {name}',
      noPiecesInChapter: '本章节暂时没有单品。',
      categoryAll: '全部',
      categories: {
        All: '全部',
        Abayas: '阿巴亚',
        Kaftans: '卡夫坦',
        Dresses: '连衣裙',
        Sets: '套装',
      },
    },
    shopExtras: {
      availableColours: '可选颜色',
    },
    cart: {
      shoppingBag: '购物袋',
      empty: '您的购物袋为空',
      emptyDescription: '探索我们的系列，找到与您契合的单品。',
      shopNow: '立即选购',
      continueShopping: '继续购物',
      orderSummary: '订单摘要',
      subtotal: '小计',
      estimatedTotal: '预计总计',
      taxesIncluded: '已含税。',
      lineTotal: '单项合计',
      size: '尺码',
      colour: '颜色',
      length: '长度',
      productCode: '产品编号: {sku}',
      personalisation: '个性化定制',
      note: '备注',
      proceedSecurePayment: '前往安全支付',
      shipWorldwide: '全球配送',
      freeUaeShipping: '订单满 1,000 AED 阿联酋境内免运费',
      intlShippingNote: '支持国际配送。',
      deliveryAtPayment: '运费将在付款时计算',
    },
    checkout: {
      securePayment: '安全支付',
      editBag: '编辑购物袋',
      reviewOrder: '确认您的订单',
      reviewSubtitle: '在继续安全支付前，请确认您的选择。',
      redirecting: '正在跳转...',
      continueSecurePayment: '继续安全支付',
      legalAcceptPrefix: '我已阅读并同意',
      shipmentPolicy: '配送与退货政策',
      legalAnd: '以及',
      termsConditions: '条款与条件',
      legalRequired: '请先同意配送与退货政策及条款与条件',
      checkoutError: '无法启动结账，请重试。',
      stripeNotConfigured: '此环境尚未配置 Stripe 结账。',
      stripeEnvHint: '请设置 NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY 和 STRIPE_SECRET_KEY 以启用结账。',
      processingPayment: '正在处理付款...',
    },
    accessories: {
      collectionTitle: '配饰',
      collectionEyebrow: '系列',
      backToHome: '返回首页',
      filter: '筛选',
      products: '产品',
      price: '价格',
      stoneType: '宝石类型',
      clearFilters: '清除筛选',
      productNotFound: '未找到产品',
      returnToAccessories: '返回配饰',
      materials: '材质',
      careBullets: [
        '佩戴后请放入柔软收纳袋保存。',
        '避免接触香水、水和刺激性化学品。',
        '使用柔软干布轻轻擦拭。',
      ],
      oneSize: '均码',
      selectColour: '选择颜色',
    },
    footer: {
      emailList: '邮件列表',
      subscribeEyebrow: '专属访问',
      emailPlaceholder: '请输入邮箱',
      subscribe: '订阅',
      language: '语言',
      countryRegion: '国家 / 地区',
      worldwideShipping: '全球配送',
      deliveredGlobally: '通过可信赖承运商送达全球。',
      freeUaeShippingTitle: '阿联酋境内免运费',
      freeUaeShippingDesc: '订单满 1,000 AED 享免费配送。',
      craftedToOrderTitle: '按订单制作',
      craftedToOrderDesc: '每件作品都以细致与精准完成。',
      givingForwardTitle: '善意传递',
      givingForwardDesc: '部分利润用于支持女性相关公益项目。',
      newsletter: '订阅通讯',
      closeModal: '关闭弹窗',
      close: '关闭',
    },
    account: {
      account: '账户',
      createAccount: '创建账户',
      getStarted: '立即开始',
      signIn: '登录',
      signInDesc: '登录后可查看订单和已保存信息。',
      registerDesc: '创建账户可享受更快捷、更个性化的结账体验。',
    },
    notFound: {
      title: '页面未找到',
      description: '您访问的页面可能已移动或不存在。',
      backToHome: '返回首页',
      shopCollection: '选购系列',
      popularPages: '热门页面',
      about: '关于我们',
      theCodes: '品牌准则',
      contact: '联系我们',
      needHelp: '需要帮助？',
    },
    trust: {
      ethicallyMade: '负责任制作',
      weGiveForward: '善意传递',
      worldwideShipping: '全球配送',
      secureCheckout: '安全结账',
    },
    deliveryBanner: {
      uaeFree: '阿联酋订单满1000迪拉姆免运费 • 两周内送达',
      worldwide: '全球配送 • 运费于结账时计算',
      tabby: '通过Tabby分4期免息付款',
    },
    stickyAddToCart: {
      selectSizeAndColour: '选择尺码和颜色',
      addToBag: '加入购物袋',
      added: '已加入！',
    },
    quickBuy: {
      chooseSizeError: '请选择尺码',
      chooseColourError: '请选择颜色',
      size: '尺码',
      color: '颜色',
      addToBag: '加入购物袋',
      added: '已加入！',
      buyNow: '立即购买',
    },
    miniCart: {
      yourBagIsEmpty: '您的购物袋为空',
      discoverCollection: '探索我们的系列',
      reviewYourOrder: '确认您的订单',
      youMayAlsoLike: '您可能也喜欢',
    },
  },
  nl: {
    common: {
      home: 'Home',
      shop: 'Shop',
      accessories: 'Accessoires',
      bag: 'Tas',
      back: 'Terug',
      backToHome: 'Terug naar home',
      close: 'Sluiten',
    },
    shop: {
      collectionEyebrow: 'Collectie',
      chapterTitle: 'Hoofdstuk I',
      chapterIntro: 'Waar het leven ook wordt geleefd, van Abu Dhabi tot Londen...',
      refine: 'Verfijnen',
      productCategories: 'Productcategorieen',
      sizing: 'Maten',
      sizeGuide: 'Maattabel',
      piece: 'stuk',
      pieces: 'stuks',
      sortNewest: 'Nieuwste',
      sortPriceAsc: 'Prijs: laag naar hoog',
      sortPriceDesc: 'Prijs: hoog naar laag',
      sortName: 'Naam',
      discover: 'Ontdek',
      viewProduct: 'Bekijk product',
      openProduct: 'Open {name}',
      noPiecesInChapter: 'Nog geen stukken in dit hoofdstuk.',
      categoryAll: 'Alles',
      categories: {
        All: 'Alles',
        Abayas: 'Abaya\'s',
        Kaftans: 'Kaftans',
        Dresses: 'Jurken',
        Sets: 'Sets',
      },
    },
    shopExtras: {
      availableColours: 'Beschikbare kleuren',
    },
    cart: {
      shoppingBag: 'Winkelmand',
      empty: 'Je tas is leeg',
      emptyDescription: 'Ontdek onze collectie en vind stukken die bij je passen.',
      shopNow: 'Shop nu',
      continueShopping: 'Verder winkelen',
      orderSummary: 'Besteloverzicht',
      subtotal: 'Subtotaal',
      estimatedTotal: 'Geschat totaal',
      taxesIncluded: 'Belastingen inbegrepen.',
      lineTotal: 'Regeltotaal',
      size: 'Maat',
      colour: 'Kleur',
      length: 'Lengte',
      productCode: 'Productcode: {sku}',
      personalisation: 'Personalisatie',
      note: 'Notitie',
      proceedSecurePayment: 'Doorgaan naar veilig betalen',
      shipWorldwide: 'Wereldwijde verzending',
      freeUaeShipping: 'Gratis verzending in de VAE bij bestellingen boven 1.000 AED',
      intlShippingNote: 'Internationale verzending beschikbaar.',
      deliveryAtPayment: 'Verzendkosten worden berekend bij betaling',
    },
    checkout: {
      securePayment: 'Veilige betaling',
      editBag: 'Tas bewerken',
      reviewOrder: 'Controleer je bestelling',
      reviewSubtitle: 'Controleer je selectie voordat je veilig afrekent.',
      redirecting: 'Doorsturen...',
      continueSecurePayment: 'Verder naar veilig betalen',
      legalAcceptPrefix: 'Ik heb gelezen en accepteer het',
      shipmentPolicy: 'Verzend- en retourbeleid',
      legalAnd: 'en de',
      termsConditions: 'Algemene voorwaarden',
      legalRequired: 'Accepteer het Verzend- en retourbeleid en de Algemene voorwaarden',
      checkoutError: 'Kan checkout niet starten. Probeer het opnieuw.',
      stripeNotConfigured: 'Stripe checkout is nog niet geconfigureerd voor deze omgeving.',
      stripeEnvHint: 'Stel NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY en STRIPE_SECRET_KEY in om checkout te activeren.',
      processingPayment: 'Betaling wordt verwerkt...',
    },
    accessories: {
      collectionTitle: 'Accessoires',
      collectionEyebrow: 'Collectie',
      backToHome: 'Terug naar home',
      filter: 'Filter',
      products: 'Producten',
      price: 'Prijs',
      stoneType: 'Steensoort',
      clearFilters: 'Filters wissen',
      productNotFound: 'Product niet gevonden',
      returnToAccessories: 'Terug naar accessoires',
      materials: 'Materialen',
      careBullets: [
        'Bewaar na gebruik in een zacht zakje.',
        'Vermijd parfum, water en agressieve chemicalien.',
        'Reinig voorzichtig met een droge, zachte doek.',
      ],
      oneSize: 'One size',
      selectColour: 'Kleur kiezen',
    },
    footer: {
      emailList: 'E-maillijst',
      subscribeEyebrow: 'Prive toegang',
      emailPlaceholder: 'Vul je e-mailadres in',
      subscribe: 'Inschrijven',
      language: 'Taal',
      countryRegion: 'Land / Regio',
      worldwideShipping: 'Wereldwijde verzending',
      deliveredGlobally: 'Wereldwijd geleverd met betrouwbare vervoerders.',
      freeUaeShippingTitle: 'Gratis verzending in de VAE',
      freeUaeShippingDesc: 'Gratis levering bij bestellingen boven 1.000 AED.',
      craftedToOrderTitle: 'Op bestelling gemaakt',
      craftedToOrderDesc: 'Elk stuk wordt met zorg en precisie voorbereid.',
      givingForwardTitle: 'Wij geven door',
      givingForwardDesc: 'Een deel van de winst ondersteunt initiatieven voor vrouwen.',
      newsletter: 'Nieuwsbrief',
      closeModal: 'Venster sluiten',
      close: 'Sluiten',
    },
    account: {
      account: 'Account',
      createAccount: 'Account aanmaken',
      getStarted: 'Aan de slag',
      signIn: 'Inloggen',
      signInDesc: 'Log in om je bestellingen en opgeslagen gegevens te bekijken.',
      registerDesc: 'Maak een account voor een snellere en persoonlijkere checkout.',
    },
    notFound: {
      title: 'Pagina niet gevonden',
      description: 'De pagina die je zoekt is mogelijk verplaatst of bestaat niet meer.',
      backToHome: 'Terug naar home',
      shopCollection: 'Shop collectie',
      popularPages: 'Populaire pagina\'s',
      about: 'Over',
      theCodes: 'De codes',
      contact: 'Contact',
      needHelp: 'Hulp nodig?',
    },
    trust: {
      ethicallyMade: 'Ethisch gemaakt',
      weGiveForward: 'Wij geven door',
      worldwideShipping: 'Wereldwijde verzending',
      secureCheckout: 'Veilige checkout',
    },
    deliveryBanner: {
      uaeFree: 'Gratis verzending in de VAE bij bestellingen boven 1000 AED • Levering binnen 2 weken',
      worldwide: 'Wereldwijde verzending • Verzendkosten berekend bij betaling',
      tabby: 'Betaal in 4 rentevrije termijnen met Tabby',
    },
    stickyAddToCart: {
      selectSizeAndColour: 'Kies maat en kleur',
      addToBag: 'Toevoegen aan tas',
      added: 'Toegevoegd!',
    },
    quickBuy: {
      chooseSizeError: 'Selecteer een maat',
      chooseColourError: 'Selecteer een kleur',
      size: 'Maat',
      color: 'Kleur',
      addToBag: 'Toevoegen aan tas',
      added: 'Toegevoegd!',
      buyNow: 'Nu kopen',
    },
    miniCart: {
      yourBagIsEmpty: 'Je tas is leeg',
      discoverCollection: 'Ontdek onze collectie',
      reviewYourOrder: 'Controleer je bestelling',
      youMayAlsoLike: 'Misschien vind je dit ook mooi',
    },
  },
  pt: {
    common: {
      home: 'Inicio',
      shop: 'Loja',
      accessories: 'Acessorios',
      bag: 'Saco',
      back: 'Voltar',
      backToHome: 'Voltar ao inicio',
      close: 'Fechar',
    },
    shop: {
      collectionEyebrow: 'Colecao',
      chapterTitle: 'Capitulo I',
      chapterIntro: 'Onde quer que a vida aconteca, de Abu Dhabi a Londres...',
      refine: 'Refinar',
      productCategories: 'Categorias de produto',
      sizing: 'Tamanhos',
      sizeGuide: 'Guia de tamanhos',
      piece: 'peca',
      pieces: 'pecas',
      sortNewest: 'Mais recentes',
      sortPriceAsc: 'Preco: crescente',
      sortPriceDesc: 'Preco: decrescente',
      sortName: 'Nome',
      discover: 'Descobrir',
      viewProduct: 'Ver produto',
      openProduct: 'Abrir {name}',
      noPiecesInChapter: 'Ainda nao ha pecas neste capitulo.',
      categoryAll: 'Todos',
      categories: {
        All: 'Todos',
        Abayas: 'Abayas',
        Kaftans: 'Kaftans',
        Dresses: 'Vestidos',
        Sets: 'Conjuntos',
      },
    },
    shopExtras: {
      availableColours: 'Cores disponíveis',
    },
    cart: {
      shoppingBag: 'Saco de compras',
      empty: 'O seu saco esta vazio',
      emptyDescription: 'Descubra a nossa colecao e encontre pecas com a sua identidade.',
      shopNow: 'Comprar agora',
      continueShopping: 'Continuar a comprar',
      orderSummary: 'Resumo da encomenda',
      subtotal: 'Subtotal',
      estimatedTotal: 'Total estimado',
      taxesIncluded: 'Impostos incluidos.',
      lineTotal: 'Total da linha',
      size: 'Tamanho',
      colour: 'Cor',
      length: 'Comprimento',
      productCode: 'Codigo do produto: {sku}',
      personalisation: 'Personalizacao',
      note: 'Nota',
      proceedSecurePayment: 'Prosseguir para pagamento seguro',
      shipWorldwide: 'Enviamos para todo o mundo',
      freeUaeShipping: 'Envio gratuito nos EAU para encomendas acima de 1.000 AED',
      intlShippingNote: 'Envio internacional disponivel.',
      deliveryAtPayment: 'Os custos de entrega sao calculados no pagamento',
    },
    checkout: {
      securePayment: 'Pagamento seguro',
      editBag: 'Editar saco',
      reviewOrder: 'Reveja a sua encomenda',
      reviewSubtitle: 'Reveja a sua selecao antes de seguir para pagamento seguro.',
      redirecting: 'A redirecionar...',
      continueSecurePayment: 'Continuar para pagamento seguro',
      legalAcceptPrefix: 'Li e aceito a',
      shipmentPolicy: 'Politica de envio e devolucao',
      legalAnd: 'e os',
      termsConditions: 'Termos e condicoes',
      legalRequired: 'Aceite a Politica de envio e devolucao e os Termos e condicoes',
      checkoutError: 'Nao foi possivel iniciar o checkout. Tente novamente.',
      stripeNotConfigured: 'Stripe checkout ainda nao esta configurado para este ambiente.',
      stripeEnvHint: 'Defina NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY e STRIPE_SECRET_KEY para ativar o checkout.',
      processingPayment: 'A processar pagamento...',
    },
    accessories: {
      collectionTitle: 'Acessorios',
      collectionEyebrow: 'Colecao',
      backToHome: 'Voltar ao inicio',
      filter: 'Filtrar',
      products: 'Produtos',
      price: 'Preco',
      stoneType: 'Tipo de pedra',
      clearFilters: 'Limpar filtros',
      productNotFound: 'Produto nao encontrado',
      returnToAccessories: 'Voltar aos acessorios',
      materials: 'Materiais',
      careBullets: [
        'Guarde numa bolsa macia apos o uso.',
        'Evite perfume, agua e quimicos agressivos.',
        'Limpe suavemente com um pano seco e macio.',
      ],
      oneSize: 'Tamanho unico',
      selectColour: 'Selecionar cor',
    },
    footer: {
      emailList: 'Lista de email',
      subscribeEyebrow: 'Acesso privado',
      emailPlaceholder: 'Introduza o seu email',
      subscribe: 'Subscrever',
      language: 'Idioma',
      countryRegion: 'Pais / Regiao',
      worldwideShipping: 'Envio mundial',
      deliveredGlobally: 'Entregue globalmente com transportadoras de confianca.',
      freeUaeShippingTitle: 'Envio gratuito nos EAU',
      freeUaeShippingDesc: 'Entrega gratuita para encomendas acima de 1.000 AED.',
      craftedToOrderTitle: 'Feito por encomenda',
      craftedToOrderDesc: 'Cada peca e preparada com cuidado e precisao.',
      givingForwardTitle: 'Retribuimos',
      givingForwardDesc: 'Parte dos lucros apoia causas focadas em mulheres.',
      newsletter: 'Newsletter',
      closeModal: 'Fechar janela',
      close: 'Fechar',
    },
    account: {
      account: 'Conta',
      createAccount: 'Criar conta',
      getStarted: 'Comecar',
      signIn: 'Iniciar sessao',
      signInDesc: 'Inicie sessao para aceder as suas encomendas e dados guardados.',
      registerDesc: 'Crie a sua conta para um checkout mais rapido e pessoal.',
    },
    notFound: {
      title: 'Pagina nao encontrada',
      description: 'A pagina que procura pode ter sido movida ou ja nao existe.',
      backToHome: 'Voltar ao inicio',
      shopCollection: 'Ver colecao',
      popularPages: 'Paginas populares',
      about: 'Sobre',
      theCodes: 'Os codigos',
      contact: 'Contacto',
      needHelp: 'Precisa de ajuda?',
    },
    trust: {
      ethicallyMade: 'Feito com etica',
      weGiveForward: 'Retribuimos',
      worldwideShipping: 'Envio mundial',
      secureCheckout: 'Checkout seguro',
    },
    deliveryBanner: {
      uaeFree: 'Envio gratuito nos EAU em encomendas acima de 1000 AED • Entrega em 2 semanas',
      worldwide: 'Enviamos para todo o mundo • Portes calculados no pagamento',
      tabby: 'Pague em 4 prestações sem juros com Tabby',
    },
    stickyAddToCart: {
      selectSizeAndColour: 'Selecione tamanho e cor',
      addToBag: 'Adicionar ao saco',
      added: 'Adicionado!',
    },
    quickBuy: {
      chooseSizeError: 'Selecione um tamanho',
      chooseColourError: 'Selecione uma cor',
      size: 'Tamanho',
      color: 'Cor',
      addToBag: 'Adicionar ao saco',
      added: 'Adicionado!',
      buyNow: 'Comprar agora',
    },
    miniCart: {
      yourBagIsEmpty: 'O seu saco esta vazio',
      discoverCollection: 'Descubra a nossa colecao',
      reviewYourOrder: 'Reveja a sua encomenda',
      youMayAlsoLike: 'Tambem pode gostar',
    },
  },
  id: {
    common: {
      home: 'Beranda',
      shop: 'Toko',
      accessories: 'Aksesori',
      bag: 'Tas',
      back: 'Kembali',
      backToHome: 'Kembali ke beranda',
      close: 'Tutup',
    },
    shop: {
      collectionEyebrow: 'Koleksi',
      chapterTitle: 'Bab I',
      chapterIntro: 'Di mana pun kehidupan dijalani, dari Abu Dhabi hingga London...',
      refine: 'Saring',
      productCategories: 'Kategori produk',
      sizing: 'Ukuran',
      sizeGuide: 'Panduan ukuran',
      piece: 'item',
      pieces: 'item',
      sortNewest: 'Terbaru',
      sortPriceAsc: 'Harga: terendah ke tertinggi',
      sortPriceDesc: 'Harga: tertinggi ke terendah',
      sortName: 'Nama',
      discover: 'Jelajahi',
      viewProduct: 'Lihat produk',
      openProduct: 'Buka {name}',
      noPiecesInChapter: 'Belum ada item pada bab ini.',
      categoryAll: 'Semua',
      categories: {
        All: 'Semua',
        Abayas: 'Abaya',
        Kaftans: 'Kaftan',
        Dresses: 'Gaun',
        Sets: 'Set',
      },
    },
    shopExtras: {
      availableColours: 'Warna tersedia',
    },
    cart: {
      shoppingBag: 'Tas belanja',
      empty: 'Tas Anda kosong',
      emptyDescription: 'Temukan koleksi kami dan cari item yang mewakili diri Anda.',
      shopNow: 'Belanja sekarang',
      continueShopping: 'Lanjut belanja',
      orderSummary: 'Ringkasan pesanan',
      subtotal: 'Subtotal',
      estimatedTotal: 'Perkiraan total',
      taxesIncluded: 'Pajak termasuk.',
      lineTotal: 'Total baris',
      size: 'Ukuran',
      colour: 'Warna',
      length: 'Panjang',
      productCode: 'Kode produk: {sku}',
      personalisation: 'Personalisasi',
      note: 'Catatan',
      proceedSecurePayment: 'Lanjut ke pembayaran aman',
      shipWorldwide: 'Kami kirim ke seluruh dunia',
      freeUaeShipping: 'Gratis pengiriman UEA untuk pesanan di atas 1.000 AED',
      intlShippingNote: 'Pengiriman internasional tersedia.',
      deliveryAtPayment: 'Biaya pengiriman dihitung saat pembayaran',
    },
    checkout: {
      securePayment: 'Pembayaran aman',
      editBag: 'Ubah tas',
      reviewOrder: 'Tinjau pesanan Anda',
      reviewSubtitle: 'Tinjau pilihan Anda sebelum melanjutkan ke pembayaran aman.',
      redirecting: 'Mengalihkan...',
      continueSecurePayment: 'Lanjut ke pembayaran aman',
      legalAcceptPrefix: 'Saya telah membaca dan menyetujui',
      shipmentPolicy: 'Kebijakan pengiriman dan pengembalian',
      legalAnd: 'dan',
      termsConditions: 'Syarat dan ketentuan',
      legalRequired: 'Harap setujui Kebijakan pengiriman dan pengembalian serta Syarat dan ketentuan',
      checkoutError: 'Tidak dapat memulai checkout. Silakan coba lagi.',
      stripeNotConfigured: 'Stripe checkout belum dikonfigurasi untuk lingkungan ini.',
      stripeEnvHint: 'Setel NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY dan STRIPE_SECRET_KEY untuk mengaktifkan checkout.',
      processingPayment: 'Memproses pembayaran...',
    },
    accessories: {
      collectionTitle: 'Aksesori',
      collectionEyebrow: 'Koleksi',
      backToHome: 'Kembali ke beranda',
      filter: 'Filter',
      products: 'Produk',
      price: 'Harga',
      stoneType: 'Jenis batu',
      clearFilters: 'Hapus filter',
      productNotFound: 'Produk tidak ditemukan',
      returnToAccessories: 'Kembali ke aksesori',
      materials: 'Material',
      careBullets: [
        'Simpan dalam pouch lembut setelah dipakai.',
        'Hindari parfum, air, dan bahan kimia keras.',
        'Bersihkan perlahan dengan kain lembut dan kering.',
      ],
      oneSize: 'Satu ukuran',
      selectColour: 'Pilih warna',
    },
    footer: {
      emailList: 'Daftar email',
      subscribeEyebrow: 'Akses privat',
      emailPlaceholder: 'Masukkan email Anda',
      subscribe: 'Berlangganan',
      language: 'Bahasa',
      countryRegion: 'Negara / Wilayah',
      worldwideShipping: 'Pengiriman ke seluruh dunia',
      deliveredGlobally: 'Dikirim global dengan kurir tepercaya.',
      freeUaeShippingTitle: 'Gratis pengiriman UEA',
      freeUaeShippingDesc: 'Gratis pengiriman untuk pesanan di atas 1.000 AED.',
      craftedToOrderTitle: 'Dibuat sesuai pesanan',
      craftedToOrderDesc: 'Setiap item disiapkan dengan teliti dan presisi.',
      givingForwardTitle: 'Kami berbagi kebaikan',
      givingForwardDesc: 'Sebagian keuntungan mendukung program untuk perempuan.',
      newsletter: 'Newsletter',
      closeModal: 'Tutup jendela',
      close: 'Tutup',
    },
    account: {
      account: 'Akun',
      createAccount: 'Buat akun',
      getStarted: 'Mulai',
      signIn: 'Masuk',
      signInDesc: 'Masuk untuk mengakses pesanan dan detail tersimpan Anda.',
      registerDesc: 'Buat akun untuk checkout yang lebih cepat dan personal.',
    },
    notFound: {
      title: 'Halaman tidak ditemukan',
      description: 'Halaman yang Anda cari mungkin telah dipindahkan atau sudah tidak ada.',
      backToHome: 'Kembali ke beranda',
      shopCollection: 'Belanja koleksi',
      popularPages: 'Halaman populer',
      about: 'Tentang',
      theCodes: 'The Codes',
      contact: 'Kontak',
      needHelp: 'Butuh bantuan?',
    },
    trust: {
      ethicallyMade: 'Dibuat secara etis',
      weGiveForward: 'Kami berbagi kebaikan',
      worldwideShipping: 'Pengiriman ke seluruh dunia',
      secureCheckout: 'Checkout aman',
    },
    deliveryBanner: {
      uaeFree: 'Gratis ongkir UEA untuk pesanan di atas 1000 AED • Pengiriman dalam 2 minggu',
      worldwide: 'Kami kirim ke seluruh dunia • Biaya pengiriman dihitung saat pembayaran',
      tabby: 'Bayar dalam 4 cicilan tanpa bunga dengan Tabby',
    },
    stickyAddToCart: {
      selectSizeAndColour: 'Pilih ukuran & warna',
      addToBag: 'Tambahkan ke tas',
      added: 'Ditambahkan!',
    },
    quickBuy: {
      chooseSizeError: 'Silakan pilih ukuran',
      chooseColourError: 'Silakan pilih warna',
      size: 'Ukuran',
      color: 'Warna',
      addToBag: 'Tambahkan ke tas',
      added: 'Ditambahkan!',
      buyNow: 'Beli sekarang',
    },
    miniCart: {
      yourBagIsEmpty: 'Tas Anda kosong',
      discoverCollection: 'Temukan koleksi kami',
      reviewYourOrder: 'Tinjau pesanan Anda',
      youMayAlsoLike: 'Anda mungkin juga suka',
    },
  },
  ms: {
    common: {
      home: 'Laman utama',
      shop: 'Kedai',
      accessories: 'Aksesori',
      bag: 'Beg',
      back: 'Kembali',
      backToHome: 'Kembali ke laman utama',
      close: 'Tutup',
    },
    shop: {
      collectionEyebrow: 'Koleksi',
      chapterTitle: 'Bab I',
      chapterIntro: 'Di mana sahaja kehidupan dijalani, dari Abu Dhabi hingga London...',
      refine: 'Tapis',
      productCategories: 'Kategori produk',
      sizing: 'Saiz',
      sizeGuide: 'Panduan saiz',
      piece: 'item',
      pieces: 'item',
      sortNewest: 'Terbaharu',
      sortPriceAsc: 'Harga: rendah ke tinggi',
      sortPriceDesc: 'Harga: tinggi ke rendah',
      sortName: 'Nama',
      discover: 'Teroka',
      viewProduct: 'Lihat produk',
      openProduct: 'Buka {name}',
      noPiecesInChapter: 'Belum ada item dalam bab ini.',
      categoryAll: 'Semua',
      categories: {
        All: 'Semua',
        Abayas: 'Abaya',
        Kaftans: 'Kaftan',
        Dresses: 'Gaun',
        Sets: 'Set',
      },
    },
    shopExtras: {
      availableColours: 'Warna tersedia',
    },
    cart: {
      shoppingBag: 'Beg belian',
      empty: 'Beg anda kosong',
      emptyDescription: 'Terokai koleksi kami dan temui item yang sesuai dengan anda.',
      shopNow: 'Beli sekarang',
      continueShopping: 'Teruskan membeli-belah',
      orderSummary: 'Ringkasan pesanan',
      subtotal: 'Jumlah kecil',
      estimatedTotal: 'Jumlah anggaran',
      taxesIncluded: 'Cukai termasuk.',
      lineTotal: 'Jumlah baris',
      size: 'Saiz',
      colour: 'Warna',
      length: 'Panjang',
      productCode: 'Kod produk: {sku}',
      personalisation: 'Personalisasi',
      note: 'Nota',
      proceedSecurePayment: 'Teruskan ke pembayaran selamat',
      shipWorldwide: 'Kami menghantar ke seluruh dunia',
      freeUaeShipping: 'Penghantaran percuma UAE untuk pesanan melebihi 1,000 AED',
      intlShippingNote: 'Penghantaran antarabangsa tersedia.',
      deliveryAtPayment: 'Kadar penghantaran dikira semasa pembayaran',
    },
    checkout: {
      securePayment: 'Pembayaran selamat',
      editBag: 'Edit beg',
      reviewOrder: 'Semak pesanan anda',
      reviewSubtitle: 'Semak pilihan anda sebelum meneruskan ke pembayaran selamat.',
      redirecting: 'Mengalihkan...',
      continueSecurePayment: 'Teruskan ke pembayaran selamat',
      legalAcceptPrefix: 'Saya telah membaca dan menerima',
      shipmentPolicy: 'Polisi penghantaran dan pemulangan',
      legalAnd: 'dan',
      termsConditions: 'Terma dan syarat',
      legalRequired: 'Sila terima Polisi penghantaran dan pemulangan serta Terma dan syarat',
      checkoutError: 'Tidak dapat memulakan checkout. Sila cuba lagi.',
      stripeNotConfigured: 'Stripe checkout belum dikonfigurasi untuk persekitaran ini.',
      stripeEnvHint: 'Tetapkan NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY dan STRIPE_SECRET_KEY untuk mengaktifkan checkout.',
      processingPayment: 'Memproses pembayaran...',
    },
    accessories: {
      collectionTitle: 'Aksesori',
      collectionEyebrow: 'Koleksi',
      backToHome: 'Kembali ke laman utama',
      filter: 'Tapis',
      products: 'Produk',
      price: 'Harga',
      stoneType: 'Jenis batu',
      clearFilters: 'Kosongkan tapisan',
      productNotFound: 'Produk tidak ditemui',
      returnToAccessories: 'Kembali ke aksesori',
      materials: 'Bahan',
      careBullets: [
        'Simpan dalam pouch lembut selepas digunakan.',
        'Elakkan minyak wangi, air dan bahan kimia keras.',
        'Lap perlahan dengan kain lembut dan kering.',
      ],
      oneSize: 'Satu saiz',
      selectColour: 'Pilih warna',
    },
    footer: {
      emailList: 'Senarai e-mel',
      subscribeEyebrow: 'Akses peribadi',
      emailPlaceholder: 'Masukkan e-mel anda',
      subscribe: 'Langgan',
      language: 'Bahasa',
      countryRegion: 'Negara / Wilayah',
      worldwideShipping: 'Penghantaran seluruh dunia',
      deliveredGlobally: 'Dihantar secara global dengan kurier yang dipercayai.',
      freeUaeShippingTitle: 'Penghantaran percuma UAE',
      freeUaeShippingDesc: 'Penghantaran percuma untuk pesanan melebihi 1,000 AED.',
      craftedToOrderTitle: 'Dibuat mengikut tempahan',
      craftedToOrderDesc: 'Setiap item disediakan dengan teliti dan tepat.',
      givingForwardTitle: 'Kami berkongsi kebaikan',
      givingForwardDesc: 'Sebahagian keuntungan menyokong inisiatif berfokuskan wanita.',
      newsletter: 'Surat berita',
      closeModal: 'Tutup tetingkap',
      close: 'Tutup',
    },
    account: {
      account: 'Akaun',
      createAccount: 'Cipta akaun',
      getStarted: 'Mulakan',
      signIn: 'Log masuk',
      signInDesc: 'Log masuk untuk akses pesanan dan maklumat tersimpan anda.',
      registerDesc: 'Cipta akaun anda untuk checkout yang lebih pantas dan peribadi.',
    },
    notFound: {
      title: 'Halaman tidak ditemui',
      description: 'Halaman yang anda cari mungkin telah dipindahkan atau tidak lagi wujud.',
      backToHome: 'Kembali ke laman utama',
      shopCollection: 'Beli koleksi',
      popularPages: 'Halaman popular',
      about: 'Tentang',
      theCodes: 'Kod-kod',
      contact: 'Hubungi',
      needHelp: 'Perlukan bantuan?',
    },
    trust: {
      ethicallyMade: 'Dibuat secara beretika',
      weGiveForward: 'Kami berkongsi kebaikan',
      worldwideShipping: 'Penghantaran seluruh dunia',
      secureCheckout: 'Checkout selamat',
    },
    deliveryBanner: {
      uaeFree: 'Penghantaran percuma UAE untuk pesanan melebihi 1000 AED • Penghantaran dalam 2 minggu',
      worldwide: 'Kami hantar ke seluruh dunia • Caj penghantaran dikira semasa pembayaran',
      tabby: 'Bayar dalam 4 ansuran tanpa faedah dengan Tabby',
    },
    stickyAddToCart: {
      selectSizeAndColour: 'Pilih saiz & warna',
      addToBag: 'Tambah ke beg',
      added: 'Ditambah!',
    },
    quickBuy: {
      chooseSizeError: 'Sila pilih saiz',
      chooseColourError: 'Sila pilih warna',
      size: 'Saiz',
      color: 'Warna',
      addToBag: 'Tambah ke beg',
      added: 'Ditambah!',
      buyNow: 'Beli sekarang',
    },
    miniCart: {
      yourBagIsEmpty: 'Beg anda kosong',
      discoverCollection: 'Terokai koleksi kami',
      reviewYourOrder: 'Semak pesanan anda',
      youMayAlsoLike: 'Anda mungkin juga suka',
    },
  },
}

export function commerceUi(locale: AppLocale): CommerceUi {
  return COMMERCE_UI[locale] ?? COMMERCE_UI.en
}
/*
import type { AppLocale } from '@/lib/i18n/routing'

export type CommerceUi = {
  home: string
  shop: string
  accessories: string
  bag: string
  account: string
  favorites: string
  back: string
  backToHome: string
  backToShop: string
  backToAccessories: string
  continueShopping: string
  shopNow: string
  shopCollection: string
  collection: string
  chapterOne: string
  chapterDescription: string
  refine: string
  productCategories: string
  sizing: string
  sizeGuide: string
  discover: string
  open: string
  viewProduct: string
  noPiecesInChapter: string
  close: string
  closeSubscribeModal: string
  closeLabel: string
  category: string
  categories: string
  filter: string
  products: string
  all: string
  pieceSingular: string
  piecePlural: string
  sortNewest: string
  sortPriceLowToHigh: string
  sortPriceHighToLow: string
  sortNameAz: string
  shoppingBag: string
  yourBagIsEmpty: string
  discoverCollection: string
  personalisation: string
  note: string
  lineTotal: string
  youMayAlsoLike: string
  subtotal: string
  deliveryRatesAtPayment: string
  reviewYourOrder: string
  secureCheckout: string
  freeUaeDeliveryOver: string
  size: string
  colour: string
  length: string
  notes: string
  productCode: string
  orderSummary: string
  estimatedTotal: string
  taxesIncluded: string
  proceedToSecurePayment: string
  weShipWorldwide: string
  complimentaryUaeShippingAbove: string
  internationalShippingAvailable: string
  checkoutLegalRequired: string
  stripeNotConfigured: string
  unableToStartCheckout: string
  redirecting: string
  securePayment: string
  editBag: string
  reviewSelectionBeforePayment: string
  legalPrefix: string
  shipmentReturnPolicy: string
  legalAnd: string
  termsAndConditions: string
  continueToSecurePayment: string
  stripeEnvHint: string
  orderConfirmed: string
  thankYou: string
  orderConfirmedDescription: string
  orderReference: string
  loading: string
  emailList: string
  newsletterHeading: string
  newsletterSubheading: string
  emailAddress: string
  subscribe: string
  language: string
  countryRegion: string
  worldwideShipping: string
  deliveredGlobally: string
  freeUaeShipping: string
  onOrdersAbove1000Aed: string
  craftedToOrder: string
  producedOnRequest: string
  givingForward: string
  charityDedication: string
  newsletter: string
  newsletterModalIntro: string
  selectSize: string
  selectColor: string
  selectSizeAndColor: string
  added: string
  addToBag: string
  buyNow: string
  returns14Days: string
  accessoriesCollection: string
  accessoriesHeroDescription: string
  price: string
  filterByPrice: string
  stoneType: string
  clearPriceAndStone: string
  classification: string
  bestseller: string
  limitedEdition: string
  productNotFound: string
  returnToAccessories: string
  pleaseSelectColour: string
  productDetails: string
  materials: string
  care: string
  careAvoidPerfume: string
  careStoreDry: string
  careWipeSoft: string
  careRemoveBeforeWater: string
  oneSize: string
  ethicallyMade: string
  weGiveForward: string
  accountIntro: string
  createAccount: string
  createAccountDesc: string
  getStarted: string
  signIn: string
  signInDesc: string
  comingNext: string
  productionHint: string
  pageNotFound: string
  pageNotFoundDescription: string
  popularPages: string
  aboutUs: string
  theCodes: string
  contact: string
  needHelp: string
  wishlistIntro: string
  noSavedPiecesYet: string
  wishlistEmptyDescription: string
  removeFromFavorites: string
}

const EN: CommerceUi = {
  home: 'Home',
  shop: 'Shop',
  accessories: 'Accessories',
  bag: 'Bag',
  account: 'Account',
  favorites: 'Favorites',
  back: 'Back',
  backToHome: 'Back to Home',
  backToShop: 'Back to Shop',
  backToAccessories: 'Back to Accessories',
  continueShopping: 'Continue Shopping',
  shopNow: 'Shop Now',
  shopCollection: 'Shop Collection',
  collection: 'COLLECTION',
  chapterOne: 'CHAPTER I',
  chapterDescription:
    'Wherever life is lived, from Abu Dhabi to London, from Riyadh to Paris, from Doha to Marbella, you do not need to change how you present yourself. Each piece carries your elegance and your way of being, with consistency, wherever you are.',
  refine: 'Refine',
  productCategories: 'Product categories',
  sizing: 'Sizing',
  sizeGuide: 'Size guide',
  discover: 'Discover',
  open: 'Open',
  viewProduct: 'View product',
  noPiecesInChapter: 'No pieces in this chapter yet.',
  close: 'Close',
  closeSubscribeModal: 'Close subscribe modal',
  closeLabel: 'Close',
  category: 'Category',
  categories: 'Categories',
  filter: 'Filter',
  products: 'Products',
  all: 'All',
  pieceSingular: 'piece',
  piecePlural: 'pieces',
  sortNewest: 'New arrivals',
  sortPriceLowToHigh: 'Price, low to high',
  sortPriceHighToLow: 'Price, high to low',
  sortNameAz: 'Name, A-Z',
  shoppingBag: 'Shopping Bag',
  yourBagIsEmpty: 'Your bag is empty',
  discoverCollection: 'Discover our collection',
  personalisation: 'Personalisation',
  note: 'Note',
  lineTotal: 'Line total',
  youMayAlsoLike: 'You may also like',
  subtotal: 'Subtotal',
  deliveryRatesAtPayment: 'Delivery rates are calculated at payment',
  reviewYourOrder: 'Review Your Order',
  secureCheckout: 'Secure checkout',
  freeUaeDeliveryOver: 'Free UAE delivery on orders over 1,000 AED',
  size: 'Size',
  colour: 'Colour',
  length: 'Length',
  notes: 'Notes',
  productCode: 'Product code',
  orderSummary: 'Order Summary',
  estimatedTotal: 'Estimated Total',
  taxesIncluded: 'Taxes included.',
  proceedToSecurePayment: 'Proceed to Secure Payment',
  weShipWorldwide: 'We Ship Worldwide',
  complimentaryUaeShippingAbove: 'Complimentary UAE shipping on orders above AED 1,000',
  internationalShippingAvailable: 'International shipping available. Delivery rates are calculated at checkout.',
  checkoutLegalRequired: 'Please accept the Shipment & Return Policy and Terms & Conditions',
  stripeNotConfigured: 'Stripe checkout is not configured for this environment yet.',
  unableToStartCheckout: 'Unable to start checkout. Please try again.',
  redirecting: 'Redirecting...',
  securePayment: 'Secure Payment',
  editBag: 'Edit bag',
  reviewSelectionBeforePayment: 'Review your selection before proceeding to secure payment.',
  legalPrefix: 'I have read and accept the ',
  shipmentReturnPolicy: 'Shipment & Return Policy',
  legalAnd: 'and',
  termsAndConditions: 'Terms & Conditions',
  continueToSecurePayment: 'Continue to Secure Payment',
  stripeEnvHint: 'Set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY and STRIPE_SECRET_KEY to enable checkout.',
  orderConfirmed: 'Order Confirmed',
  thankYou: 'Thank You!',
  orderConfirmedDescription:
    "Your order has been confirmed. We've sent a confirmation email with your order details. Our team is preparing your beautiful pieces with care.",
  orderReference: 'Order Reference',
  loading: 'Loading...',
  emailList: 'Email List',
  newsletterHeading: 'Be first to know about new drops',
  newsletterSubheading: 'Subscribe for new collection launches, private invites, and brand updates.',
  emailAddress: 'Email Address',
  subscribe: 'Subscribe',
  language: 'Language',
  countryRegion: 'Country/Region',
  worldwideShipping: 'Worldwide Shipping',
  deliveredGlobally: 'Delivered globally',
  freeUaeShipping: 'Free UAE Shipping',
  onOrdersAbove1000Aed: 'On orders above 1000 AED',
  craftedToOrder: 'Crafted to Order',
  producedOnRequest: 'Produced only upon request',
  givingForward: 'Giving Forward',
  charityDedication: '20 AED from each piece is dedicated to charity',
  newsletter: 'Newsletter',
  newsletterModalIntro: 'Please provide the information below to subscribe to our newsletter.',
  selectSize: 'Please select a size',
  selectColor: 'Please select a color',
  selectSizeAndColor: 'Select size & color',
  added: 'Added!',
  addToBag: 'Add to Bag',
  buyNow: 'Buy Now',
  returns14Days: '14-day returns',
  accessoriesCollection: 'Accessories Collection',
  accessoriesHeroDescription:
    'Discover our curated collection of abaya strands, necklaces, earrings, bracelets, bag strands, and phone strands.',
  price: 'Price',
  filterByPrice: 'Filter by price',
  stoneType: 'Stone type',
  clearPriceAndStone: 'Clear price & stone',
  classification: 'Category',
  bestseller: 'Bestseller',
  limitedEdition: 'Limited Edition',
  productNotFound: 'Product Not Found',
  returnToAccessories: 'Return to Accessories',
  pleaseSelectColour: 'Please select a colour',
  productDetails: 'Product Details',
  materials: 'Materials',
  care: 'Care',
  careAvoidPerfume: 'Avoid contact with perfumes and chemicals',
  careStoreDry: 'Store in a dry place',
  careWipeSoft: 'Wipe with a soft cloth',
  careRemoveBeforeWater: 'Remove before swimming or bathing',
  oneSize: 'One Size',
  ethicallyMade: 'Ethically made',
  weGiveForward: 'We Give Forward',
  accountIntro: 'Create an account for a personal experience. Sign-in with password will be added next to this flow.',
  createAccount: 'Create account',
  createAccountDesc:
    'After you register, we send a confirmation email with a button. Your account is only active once you verify.',
  getStarted: 'Get started',
  signIn: 'Sign in',
  signInDesc: 'Password sign-in and sessions can be wired next (e.g. NextAuth) using the verified accounts this flow creates.',
  comingNext: 'Coming next',
  productionHint: 'For production: configure Resend + Upstash Redis — see .env.example',
  pageNotFound: 'Page Not Found',
  pageNotFoundDescription:
    "The page you're looking for doesn't exist or has been moved. Let us help you find what you're looking for.",
  popularPages: 'Popular Pages',
  aboutUs: 'About Us',
  theCodes: 'The Codes',
  contact: 'Contact',
  needHelp: 'Need help?',
  wishlistIntro:
    'Pieces you heart are saved in this browser. When account sign-in is available, favorites can sync to your profile.',
  noSavedPiecesYet: 'No saved pieces yet',
  wishlistEmptyDescription: 'Explore the collection and tap the heart on any product.',
  removeFromFavorites: 'Remove from favorites',
}

const AR: CommerceUi = {
  ...EN,
  home: 'الرئيسية',
  shop: 'المتجر',
  accessories: 'الإكسسوارات',
  bag: 'السلة',
  account: 'حسابي',
  favorites: 'المفضلة',
  back: 'رجوع',
  backToHome: 'العودة للرئيسية',
  backToShop: 'العودة للتسوق',
  backToAccessories: 'العودة إلى الإكسسوارات',
  continueShopping: 'متابعة التسوق',
  shopNow: 'تسوقي الآن',
  shopCollection: 'تسوقي الآن',
  collection: 'التشكيلة',
  chapterOne: 'الفصل ١',
  chapterDescription: 'قطع محدودة، خامات مختارة، وتفاصيل من صنع يدّي. اكتشفي القطع التي تحمل هوية الدار.',
  refine: 'تصفية',
  productCategories: 'فئات المنتجات',
  sizing: 'المقاسات',
  sizeGuide: 'دليل المقاسات',
  discover: 'اكتشفي',
  open: 'فتح',
  viewProduct: 'عرض المنتج',
  noPiecesInChapter: 'لا توجد قطع في هذا القسم حالياً.',
  close: 'إغلاق',
  closeSubscribeModal: 'إغلاق نافذة الاشتراك',
  closeLabel: 'إغلاق',
  category: 'الفئة',
  categories: 'التصنيفات',
  filter: 'التصفية',
  products: 'منتج',
  all: 'الكل',
  pieceSingular: 'قطعة',
  piecePlural: 'قطع',
  shoppingBag: 'سلة التسوق',
  yourBagIsEmpty: 'السلة فارغة',
  discoverCollection: 'اكتشفي مجموعتنا',
  personalisation: 'التخصيص',
  note: 'ملاحظة',
  lineTotal: 'الإجمالي',
  youMayAlsoLike: 'قد يعجبك أيضاً',
  subtotal: 'المجموع الفرعي',
  deliveryRatesAtPayment: 'تُحسب أسعار التوصيل عند الدفع',
  reviewYourOrder: 'راجعي طلبك',
  secureCheckout: 'دفع آمن',
  freeUaeDeliveryOver: 'توصيل مجاني داخل الإمارات للطلبات فوق ١٬٠٠٠ درهم',
  size: 'المقاس',
  colour: 'اللون',
  length: 'الطول',
  notes: 'ملاحظة',
  productCode: 'رمز المنتج',
  orderSummary: 'ملخص الطلب',
  estimatedTotal: 'الإجمالي التقريبي',
  taxesIncluded: 'الضرائب مشمولة.',
  proceedToSecurePayment: 'المتابعة للدفع الآمن',
  weShipWorldwide: '🌍 نشحن إلى جميع أنحاء العالم',
  complimentaryUaeShippingAbove: '🚚 شحن مجاني داخل الإمارات للطلبات فوق 1,000 درهم',
  internationalShippingAvailable: '🌐 الشحن الدولي متاح. تُحسب أسعار التوصيل عند الدفع.',
  checkoutLegalRequired: 'يرجى قبول سياسة الشحن والإرجاع والشروط والأحكام',
  stripeNotConfigured: 'الدفع غير مُهيأ بعد في هذه البيئة.',
  unableToStartCheckout: 'تعذر بدء الدفع',
  redirecting: 'جاري التوجيه…',
  securePayment: 'دفع آمن',
  editBag: 'تعديل السلة',
  reviewSelectionBeforePayment: 'راجعي اختيارك قبل المتابعة إلى الدفع الآمن.',
  legalPrefix: 'قرأتُ ووافقتُ على ',
  shipmentReturnPolicy: 'سياسة الشحن والإرجاع',
  legalAnd: 'و',
  termsAndConditions: 'الشروط والأحكام',
  continueToSecurePayment: 'المتابعة للدفع الآمن',
  stripeEnvHint: 'أضيفي NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY و STRIPE_SECRET_KEY لتفعيل الدفع.',
  orderConfirmed: 'تأكيد الطلب',
  thankYou: 'شكراً لكِ!',
  orderConfirmedDescription:
    'تم تأكيد طلبك. أرسلنا رسالة تأكيد عبر البريد الإلكتروني تحتوي على تفاصيل الطلب. فريقنا يحضّر قطعك بعناية.',
  orderReference: 'مرجع الطلب',
  loading: 'جارٍ التحميل...',
  emailList: 'القائمة البريدية',
  newsletterHeading: 'اشتركي للحصول على الإصدارات الجديدة أولاً',
  newsletterSubheading: 'اشتركي لتصلكم الإصدارات الجديدة، الدعوات الخاصة، وتحديثات العلامة.',
  emailAddress: 'البريد الإلكتروني',
  subscribe: 'اشتراك',
  language: 'اللغة',
  countryRegion: 'الدولة/المنطقة',
  worldwideShipping: 'شحن عالمي',
  deliveredGlobally: 'توصيل عالمي',
  freeUaeShipping: 'شحن مجاني داخل الإمارات',
  onOrdersAbove1000Aed: 'للطلبات فوق 1000 درهم',
  craftedToOrder: 'يُصنع عند الطلب',
  producedOnRequest: 'يُنتج فقط عند الطلب',
  givingForward: 'نعطي للأمام',
  charityDedication: 'يتم تخصيص 20 درهم من كل قطعة للأعمال الخيرية',
  newsletter: 'النشرة البريدية',
  newsletterModalIntro: 'يرجى إدخال البيانات التالية للاشتراك في القائمة البريدية.',
  selectSize: 'الرجاء اختيار المقاس',
  selectColor: 'الرجاء اختيار اللون',
  selectSizeAndColor: 'اختاري المقاس واللون',
  added: 'تمت الإضافة!',
  addToBag: 'أضيفي للسلة',
  buyNow: 'اشتري الآن',
  returns14Days: 'إرجاع خلال ١٤ يوماً',
  accessoriesCollection: 'مجموعة الإكسسوارات',
  accessoriesHeroDescription: 'اكتشفي مجموعتنا الراقية من تعليقات العباءة والقلادات والأقراط والأساور وتعليقات الحقائب والهواتف.',
  price: 'السعر',
  filterByPrice: 'تصفية حسب السعر',
  stoneType: 'نوع الحجر',
  clearPriceAndStone: 'مسح السعر والحجر',
  classification: 'التصنيف',
  bestseller: 'الأكثر مبيعاً',
  limitedEdition: 'إصدار محدود',
  productNotFound: 'المنتج غير موجود',
  returnToAccessories: 'العودة للإكسسوارات',
  pleaseSelectColour: 'الرجاء اختيار اللون',
  productDetails: 'تفاصيل المنتج',
  materials: 'المواد',
  care: 'العناية',
  careAvoidPerfume: 'تجنبي ملامسة العطور والمواد الكيميائية',
  careStoreDry: 'احفظيها في مكان جاف',
  careWipeSoft: 'امسحيها بقطعة قماش ناعمة',
  careRemoveBeforeWater: 'أزيليها قبل السباحة أو الاستحمام',
  oneSize: 'مقاس واحد',
  ethicallyMade: 'صنع أخلاقي',
  weGiveForward: 'نعطي للأمام',
  accountIntro: 'سجّلي للحصول على تجربة شخصية وتتبع الطلبات لاحقاً.',
  createAccount: 'تسجيل جديد',
  createAccountDesc: 'بعد التسجيل نرسل رابطاً إلى بريدك لتأكيد العنوان قبل تفعيل الحساب.',
  getStarted: 'ابدئي',
  signIn: 'تسجيل الدخول',
  signInDesc: 'تسجيل الدخول بكلمة المرور يُضاف مع الجلسات لاحقاً.',
  comingNext: 'قريباً',
  productionHint: 'للإنتاج: فعّلي Resend و Redis (Upstash)، راجعي .env.example',
  pageNotFound: 'الصفحة غير موجودة',
  pageNotFoundDescription: 'الصفحة التي تبحثين عنها غير موجودة أو تم نقلها. دعينا نساعدك في العثور على ما تبحثين عنه.',
  popularPages: 'روابط مفيدة',
  aboutUs: 'من نحن',
  theCodes: 'الرموز',
  contact: 'تواصلي معنا',
  needHelp: 'تحتاجين مساعدة؟',
  wishlistIntro: 'تُحفظ القطع على هذا المتصفح. عند تفعيل تسجيل الدخول لاحقًا، يمكن ربط المفضلة بحسابك.',
  noSavedPiecesYet: 'لا توجد قطع محفوظة بعد',
  wishlistEmptyDescription: 'تسوقي المجموعة وأضيفي ما يعجبك.',
  removeFromFavorites: 'إزالة من المفضلة',
}

const COMMERCE_UI: Record<AppLocale, CommerceUi> = {
  en: EN,
  ar: AR,
  fr: EN,
  de: EN,
  it: EN,
  es: EN,
  ru: EN,
  zh: EN,
  nl: EN,
  pt: EN,
  id: EN,
  ms: EN,
}

export function commerceUi(locale: AppLocale): CommerceUi {
  return COMMERCE_UI[locale] ?? EN
}
*/
