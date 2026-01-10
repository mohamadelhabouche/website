// =============================================
// TRANSLATIONS - English & Arabic
// =============================================
const translations = {
  en: {
    // Navigation
    nav_products: "Products",
    nav_location: "Location",
    nav_about: "About",
    nav_app: "App",
    
    // Hero
    hero_badge: "Premium Coffee Solutions",
    hero_title: "Fall in Love with Coffee in Blissful Delight",
    hero_subtitle: "Caffettino is dedicated to delivering high-quality coffee products sourced from sustainable farms around the world. We believe coffee is not just a drink — it's a daily ritual.",
    hero_btn_products: "Explore Products",
    hero_btn_app: "Get the App",
    
    // Why Choose Us
    whyus_label: "Why Choose Us",
    whyus_title: "The Caffettino Difference",
    whyus_subtitle: "We're committed to quality, sustainability, and exceptional service.",
    whyus_f1_title: "Ethically Sourced",
    whyus_f1_desc: "All our beans come from fair trade farms that prioritize environmental responsibility.",
    whyus_f2_title: "Fast Delivery",
    whyus_f2_desc: "Order through our app and receive your coffee within days, freshly packed just for you.",
    whyus_f3_title: "Dedicated Support",
    whyus_f3_desc: "Questions? Our team is ready to help via WhatsApp, email, or phone.",
    
    // Products
    products_label: "What We Offer",
    products_title: "Our Products",
    products_subtitle: "Premium coffee products, straight from our app to your doorstep.",
    product1_name: "Espresso Coffee Beans",
    product1_desc: "The ideal choice for anyone who wants to grind on-demand and obtain maximum freshness and aroma",
    product2_name: "Espresso Machine",
    product2_desc: "Compact and stylish espresso machine, easy to operate with consistent creamy results.",
    product3_name: "Capsules and Pods",
    product3_desc: "Combine taste and convenience for quality espresso at home or in the office, ensure precise and consistent brewing.",
    
    // Marquee
    marquee_1: "Premium Coffee",
    marquee_2: "Authentic Italian Taste",
    marquee_3: "Fast Delivery",
    marquee_4: "Sustainable Sourcing",
    marquee_5: "Handcrafted Blends",
    marquee_6: "Fresh Roasts",
    marquee_7: "Expert Baristas",
    marquee_8: "Quality First",
    
    // Location
    location_label: "Get in Touch",
    location_title: "Location & Contact",
    location_subtitle: "Visit us or reach out anytime — we'd love to hear from you.",
    location_info_title: "Contact Information",
    location_address: "📍 Address",
    location_address_value: "Cheikh Nadim El Jisr, Tripoli",
    location_phone: "📞 Phone",
    location_email: "✉️ Email",
    location_btn_email: "Email Us",
    location_btn_whatsapp: "Chat on WhatsApp",
    location_hours_title: "Business Hours",
    location_weekdays: "Monday – Friday",
    location_saturday: "Saturday",
    location_sunday: "Sunday & Holidays",
    location_closed: "Closed",
    
    // About
    about_label: "Our Story",
    about_title: "About Caffettino",
    about_subtitle: "What drives us every day to bring you exceptional coffee.",
    about_who_title: "Who We Are",
    about_who_desc: "Caffettino is a premium coffee company dedicated to delivering high-quality coffee products sourced from sustainable farms around the world. We believe coffee is not just a drink — it's a daily ritual that deserves care and attention.",
    about_mission_title: "Our Mission",
    about_mission_desc: "Our mission is to bring exceptional coffee experiences to homes and businesses while supporting ethical sourcing, fair trade practices, and environmental responsibility. Every cup matters.",
    
    // App
    app_label: "Download Now",
    app_title: "The Caffettino App",
    app_desc: "Browse products, place orders, track deliveries, and get exclusive deals — all in one beautifully designed app, available in English and Arabic.",
    app_btn_appstore: "App Store",
    app_btn_playstore: "Google Play",
    app_highlights: "App Highlights",
    app_feature_1: "Fast browsing across categories and deals",
    app_feature_2: "Real-time order tracking and notifications",
    app_feature_3: "Secure payments and delivery management",
    app_feature_4: "Available in English and Arabic",
    
    // Footer
    footer_privacy: "Privacy Policy",
    footer_contact: "Contact",
    footer_copy: "Caffettino. All rights reserved.",
    
    // Privacy Policy Page
    privacy_title: "Privacy Policy",
    privacy_date: "Effective Date: December 26, 2025 · Last Updated: December 26, 2025",
    privacy_intro: "This Privacy Policy explains how Caffettino collects, uses, stores, and shares information when you use the Caffettino mobile application.",
    privacy_h1: "1) Information We Collect and Store",
    privacy_h1_intro: "We collect and store information in the following categories:",
    privacy_h1a: "A) Account and Authentication Information",
    privacy_h1a_1: "Information associated with signing in using Google Sign-In or Sign in with Apple (for example: name, email address, profile photo if provided by the sign-in provider).",
    privacy_h1a_2: "Authentication identifiers used to keep you signed in securely (e.g., Firebase Authentication user identifiers).",
    privacy_h1b: "B) Profile and Contact Information",
    privacy_h1b_1: "Phone number.",
    privacy_h1b_2: "Delivery information such as address and city.",
    privacy_h1b_3: "Notes you provide (e.g., delivery notes).",
    privacy_h1c: "C) Orders and Transactions",
    privacy_h1c_1: "Order details such as items purchased, quantities, total amount, delivery details, and order status.",
    privacy_h1c_2: "Payment-related information you choose to submit, including payment proof (for example, an uploaded image) when applicable.",
    privacy_h1d: "D) Location Information (Personal Data)",
    privacy_h1d_1: "If you grant location permission, we collect and store your approximate or precise location.",
    privacy_h1d_2: "We update and save your location each time you log in to the App.",
    privacy_h1d_3: "We use stored location information for delivery-related and operational purposes, such as improving delivery accuracy, confirming delivery details, and supporting order fulfillment.",
    privacy_h1e: "E) Device and Technical Information",
    privacy_h1e_1: "Device information (such as device type, operating system version) and basic app diagnostics to operate and secure the App.",
    privacy_h1e_2: "Push notification token (device token) to send you notifications.",
    privacy_h2: "2) How We Use Your Information",
    privacy_h2_intro: "We use your information to:",
    privacy_h2_1: "Provide and operate the App (authentication, profile management, ordering, delivery flows).",
    privacy_h2_2: "Process and manage orders and customer requests.",
    privacy_h2_3: "Review payment proof submissions where applicable.",
    privacy_h2_4: "Send important messages related to your account or orders (including push notifications).",
    privacy_h2_5: "Prevent fraud, abuse, and unauthorized access.",
    privacy_h2_6: "Maintain, troubleshoot, and improve the App and backend services.",
    privacy_h2_7: "Comply with legal obligations and enforce our terms and policies.",
    privacy_h3: "3) How We Share Your Information",
    privacy_h3_intro: "We may share information in the following cases:",
    privacy_h3a: "A) Service Providers",
    privacy_h3a_text: "We use third-party service providers to run the App, including Firebase Authentication, Firebase Cloud Messaging (FCM), and hosting/infrastructure providers.",
    privacy_h3b: "B) Operational Sharing",
    privacy_h3b_text: "We may share relevant order and delivery details with our staff and delivery/operations personnel as needed to fulfill your order (for example: name, phone number, address, delivery notes, and location information when relevant for delivery).",
    privacy_h3c: "C) Legal and Safety",
    privacy_h3c_text: "We may disclose information if required by law or to protect the rights, safety, and security of users, Caffettino, or the public.",
    privacy_no_sell: "We do not sell your personal information.",
    privacy_h4: "4) Data Retention",
    privacy_h4_text: "We keep your information (including location information if you provided it) only as long as necessary for the purposes described in this policy.",
    privacy_h5: "5) Your Choices and Rights",
    privacy_h5_text: "You can update certain profile details in the App, control permissions (such as location) and notifications in your device settings, and request deletion by contacting us.",
    privacy_h6: "6) Security",
    privacy_h6_text: "We implement reasonable safeguards designed to protect your information, but no system is 100% secure.",
    privacy_h7: "7) Children's Privacy",
    privacy_h7_text: "The App is not intended for children under 13.",
    privacy_h8: "8) International Data Transfers",
    privacy_h8_text: "Your information may be processed outside Lebanon (for example, where service providers operate).",
    privacy_h9: "9) Changes to This Policy",
    privacy_h9_text: "We may update this policy from time to time.",
    privacy_h10: "10) Contact Us",
    privacy_contact_address: "Address: Cheikh Nadim Al Jisr, Lebanon",
    privacy_contact_phone: "Phone:",
    privacy_contact_email: "Email:",
    privacy_back: "← Back to Home",
    
    // Language switcher
    lang_switch: "العربية"
  },
  
  ar: {
    // Navigation
    nav_products: "المنتجات",
    nav_location: "الموقع",
    nav_about: "من نحن",
    nav_app: "التطبيق",
    
    // Hero
    hero_badge: "حلول القهوة الفاخرة",
    hero_title: "اعشق القهوة بسعادة لا توصف",
    hero_subtitle: "كافيتينو ملتزمة بتقديم منتجات قهوة عالية الجودة من مزارع مستدامة حول العالم. نؤمن بأن القهوة ليست مجرد مشروب — إنها عادة يومية.",
    hero_btn_products: "استكشف المنتجات",
    hero_btn_app: "حمّل التطبيق",
    
    // Why Choose Us
    whyus_label: "لماذا نحن",
    whyus_title: "ما يميز كافيتينو",
    whyus_subtitle: "نحن ملتزمون بالجودة والاستدامة والخدمة الاستثنائية.",
    whyus_f1_title: "مصادر أخلاقية",
    whyus_f1_desc: "جميع حبوبنا تأتي من مزارع التجارة العادلة التي تعطي الأولوية للمسؤولية البيئية.",
    whyus_f2_title: "توصيل سريع",
    whyus_f2_desc: "اطلب عبر تطبيقنا واستلم قهوتك خلال أيام، معبأة طازجة خصيصاً لك.",
    whyus_f3_title: "دعم متخصص",
    whyus_f3_desc: "أسئلة؟ فريقنا جاهز للمساعدة عبر واتساب أو البريد الإلكتروني أو الهاتف.",
    
    // Products
    products_label: "ما نقدمه",
    products_title: "منتجاتنا",
    products_subtitle: "منتجات قهوة فاخرة، من تطبيقنا إلى بابك مباشرة.",
    product1_name: "حبوب قهوة إسبريسو",
    product1_desc: "الخيار المثالي لمن يريد الطحن عند الطلب والحصول على أقصى درجات النضارة والرائحة",
    product2_name: "آلة إسبريسو",
    product2_desc: "آلة إسبريسو أنيقة ومدمجة، سهلة الاستخدام مع نتائج كريمية متسقة.",
    product3_name: "كبسولات وأقراص",
    product3_desc: "تجمع بين المذاق والراحة للحصول على إسبريسو عالي الجودة في المنزل أو المكتب، تضمن تخميراً دقيقاً ومتسقاً.",
    
    // Marquee
    marquee_1: "قهوة فاخرة",
    marquee_2: "مذاق إيطالي أصيل",
    marquee_3: "توصيل سريع",
    marquee_4: "مصادر مستدامة",
    marquee_5: "خلطات مصنوعة يدوياً",
    marquee_6: "تحميص طازج",
    marquee_7: "باريستا خبراء",
    marquee_8: "الجودة أولاً",
    
    // Location
    location_label: "تواصل معنا",
    location_title: "الموقع والتواصل",
    location_subtitle: "زرنا أو تواصل معنا في أي وقت — يسعدنا سماعك.",
    location_info_title: "معلومات التواصل",
    location_address: "📍 العنوان",
    location_address_value: "الشيخ نديم الجسر، طرابلس",
    location_phone: "📞 الهاتف",
    location_email: "✉️ البريد الإلكتروني",
    location_btn_email: "راسلنا",
    location_btn_whatsapp: "تحدث على واتساب",
    location_hours_title: "ساعات العمل",
    location_weekdays: "الإثنين – الجمعة",
    location_saturday: "السبت",
    location_sunday: "الأحد والعطلات",
    location_closed: "مغلق",
    
    // About
    about_label: "قصتنا",
    about_title: "عن كافيتينو",
    about_subtitle: "ما يدفعنا كل يوم لتقديم قهوة استثنائية لك.",
    about_who_title: "من نحن",
    about_who_desc: "كافيتينو شركة قهوة فاخرة ملتزمة بتقديم منتجات قهوة عالية الجودة من مزارع مستدامة حول العالم. نؤمن بأن القهوة ليست مجرد مشروب — إنها طقس يومي يستحق العناية والاهتمام.",
    about_mission_title: "مهمتنا",
    about_mission_desc: "مهمتنا تقديم تجارب قهوة استثنائية للمنازل والشركات مع دعم المصادر الأخلاقية وممارسات التجارة العادلة والمسؤولية البيئية. كل فنجان مهم.",
    
    // App
    app_label: "حمّل الآن",
    app_title: "تطبيق كافيتينو",
    app_desc: "تصفح المنتجات، اطلب، تتبع التوصيل، واحصل على عروض حصرية — كل ذلك في تطبيق واحد جميل التصميم، متوفر بالعربية والإنجليزية.",
    app_btn_appstore: "App Store",
    app_btn_playstore: "Google Play",
    app_highlights: "مميزات التطبيق",
    app_feature_1: "تصفح سريع للفئات والعروض",
    app_feature_2: "تتبع الطلبات والإشعارات لحظياً",
    app_feature_3: "دفع آمن وإدارة التوصيل",
    app_feature_4: "متوفر بالعربية والإنجليزية",
    
    // Footer
    footer_privacy: "سياسة الخصوصية",
    footer_contact: "تواصل",
    footer_copy: "كافيتينو. جميع الحقوق محفوظة.",
    
    contact_address_value: "الشيخ نديم الجسر، طرابلس",
    contact_phone: "الهاتف",
    contact_email: "البريد الإلكتروني",
    contact_btn_email: "راسلنا",
    contact_btn_whatsapp: "تحدث على واتساب",
    hours_title: "ساعات العمل",
    hours_weekdays: "الإثنين – الجمعة",
    hours_saturday: "السبت",
    hours_sunday: "الأحد والعطلات",
    hours_closed: "مغلق",
    
    // About
    about_label: "قصتنا",
    about_title: "عن كافيتينو",
    about_subtitle: "ما يدفعنا كل يوم لتقديم قهوة استثنائية لك.",
    about_who_title: "من نحن",
    about_who_desc: "كافيتينو شركة قهوة فاخرة ملتزمة بتقديم منتجات قهوة عالية الجودة من مزارع مستدامة حول العالم. نؤمن بأن القهوة ليست مجرد مشروب — إنها طقس يومي يستحق العناية والاهتمام.",
    about_mission_title: "مهمتنا",
    about_mission_desc: "مهمتنا تقديم تجارب قهوة استثنائية للمنازل والشركات مع دعم المصادر الأخلاقية وممارسات التجارة العادلة والمسؤولية البيئية. كل فنجان مهم.",
    
    // App
    app_label: "حمّل الآن",
    app_title: "تطبيق كافيتينو",
    app_desc: "تصفح المنتجات، اطلب، تتبع التوصيل، واحصل على عروض حصرية — كل ذلك في تطبيق واحد جميل التصميم، متوفر بالعربية والإنجليزية.",
    app_btn_appstore: "App Store",
    app_btn_playstore: "Google Play",
    app_features_title: "مميزات التطبيق",
    app_feature1: "تصفح سريع للفئات والعروض",
    app_feature2: "تتبع الطلبات والإشعارات لحظياً",
    app_feature3: "دفع آمن وإدارة التوصيل",
    app_feature4: "متوفر بالعربية والإنجليزية",
    
    // Footer
    footer_privacy: "سياسة الخصوصية",
    footer_contact: "تواصل",
    footer_whatsapp: "واتساب",
    footer_copy: "كافيتينو. جميع الحقوق محفوظة.",
    
    // Privacy Policy Page
    privacy_title: "سياسة الخصوصية",
    privacy_date: "تاريخ السريان: 26 ديسمبر 2025 · آخر تحديث: 26 ديسمبر 2025",
    privacy_intro: "توضح سياسة الخصوصية هذه كيف تقوم كافيتينو بجمع واستخدام وتخزين ومشاركة المعلومات عند استخدامك لتطبيق كافيتينو.",
    privacy_h1: "1) المعلومات التي نجمعها ونخزنها",
    privacy_h1_intro: "نجمع ونخزن المعلومات في الفئات التالية:",
    privacy_h1a: "أ) معلومات الحساب والمصادقة",
    privacy_h1a_1: "المعلومات المرتبطة بتسجيل الدخول باستخدام Google أو Apple (مثل: الاسم، البريد الإلكتروني، صورة الملف الشخصي إن توفرت).",
    privacy_h1a_2: "معرّفات المصادقة المستخدمة للحفاظ على تسجيل دخولك بأمان (مثل معرّفات مستخدم Firebase Authentication).",
    privacy_h1b: "ب) معلومات الملف الشخصي والتواصل",
    privacy_h1b_1: "رقم الهاتف.",
    privacy_h1b_2: "معلومات التوصيل مثل العنوان والمدينة.",
    privacy_h1b_3: "الملاحظات التي تقدمها (مثل ملاحظات التوصيل).",
    privacy_h1c: "ج) الطلبات والمعاملات",
    privacy_h1c_1: "تفاصيل الطلب مثل المنتجات المشتراة والكميات والمبلغ الإجمالي وتفاصيل التوصيل وحالة الطلب.",
    privacy_h1c_2: "المعلومات المتعلقة بالدفع التي تختار تقديمها، بما في ذلك إثبات الدفع (مثل صورة مرفوعة) عند الاقتضاء.",
    privacy_h1d: "د) معلومات الموقع (بيانات شخصية)",
    privacy_h1d_1: "إذا منحت إذن الموقع، نجمع ونخزن موقعك التقريبي أو الدقيق.",
    privacy_h1d_2: "نقوم بتحديث وحفظ موقعك في كل مرة تسجل فيها الدخول إلى التطبيق.",
    privacy_h1d_3: "نستخدم معلومات الموقع المخزنة لأغراض التوصيل والتشغيل، مثل تحسين دقة التوصيل وتأكيد تفاصيل التسليم ودعم تنفيذ الطلبات.",
    privacy_h1e: "هـ) معلومات الجهاز والتقنية",
    privacy_h1e_1: "معلومات الجهاز (مثل نوع الجهاز وإصدار نظام التشغيل) وتشخيصات التطبيق الأساسية لتشغيل التطبيق وتأمينه.",
    privacy_h1e_2: "رمز الإشعارات (device token) لإرسال الإشعارات إليك.",
    privacy_h2: "2) كيف نستخدم معلوماتك",
    privacy_h2_intro: "نستخدم معلوماتك من أجل:",
    privacy_h2_1: "توفير وتشغيل التطبيق (المصادقة، إدارة الملف الشخصي، الطلبات، تدفقات التوصيل).",
    privacy_h2_2: "معالجة وإدارة الطلبات وطلبات العملاء.",
    privacy_h2_3: "مراجعة إثباتات الدفع المقدمة عند الاقتضاء.",
    privacy_h2_4: "إرسال رسائل مهمة متعلقة بحسابك أو طلباتك (بما في ذلك الإشعارات).",
    privacy_h2_5: "منع الاحتيال وسوء الاستخدام والوصول غير المصرح به.",
    privacy_h2_6: "صيانة التطبيق وخدمات الخلفية واستكشاف الأخطاء وتحسينها.",
    privacy_h2_7: "الامتثال للالتزامات القانونية وإنفاذ شروطنا وسياساتنا.",
    privacy_h3: "3) كيف نشارك معلوماتك",
    privacy_h3_intro: "قد نشارك المعلومات في الحالات التالية:",
    privacy_h3a: "أ) مقدمو الخدمات",
    privacy_h3a_text: "نستخدم مقدمي خدمات من جهات خارجية لتشغيل التطبيق، بما في ذلك Firebase Authentication وFirebase Cloud Messaging (FCM) ومقدمي الاستضافة/البنية التحتية.",
    privacy_h3b: "ب) المشاركة التشغيلية",
    privacy_h3b_text: "قد نشارك تفاصيل الطلب والتوصيل ذات الصلة مع موظفينا وفريق التوصيل/العمليات حسب الحاجة لتنفيذ طلبك (مثل: الاسم، رقم الهاتف، العنوان، ملاحظات التوصيل، ومعلومات الموقع عند الحاجة للتوصيل).",
    privacy_h3c: "ج) القانون والسلامة",
    privacy_h3c_text: "قد نفصح عن المعلومات إذا كان ذلك مطلوباً بموجب القانون أو لحماية حقوق وسلامة وأمن المستخدمين أو كافيتينو أو الجمهور.",
    privacy_no_sell: "نحن لا نبيع معلوماتك الشخصية.",
    privacy_h4: "4) الاحتفاظ بالبيانات",
    privacy_h4_text: "نحتفظ بمعلوماتك (بما في ذلك معلومات الموقع إذا قدمتها) فقط طالما كان ذلك ضرورياً للأغراض الموضحة في هذه السياسة.",
    privacy_h5: "5) خياراتك وحقوقك",
    privacy_h5_text: "يمكنك تحديث بعض تفاصيل ملفك الشخصي في التطبيق، والتحكم في الأذونات (مثل الموقع) والإشعارات في إعدادات جهازك، وطلب الحذف عن طريق الاتصال بنا.",
    privacy_h6: "6) الأمان",
    privacy_h6_text: "نطبق ضمانات معقولة مصممة لحماية معلوماتك، لكن لا يوجد نظام آمن بنسبة 100%.",
    privacy_h7: "7) خصوصية الأطفال",
    privacy_h7_text: "التطبيق غير مخصص للأطفال دون سن 13 عاماً.",
    privacy_h8: "8) نقل البيانات الدولي",
    privacy_h8_text: "قد تتم معالجة معلوماتك خارج لبنان (على سبيل المثال، حيث يعمل مقدمو الخدمات).",
    privacy_h9: "9) التغييرات على هذه السياسة",
    privacy_h9_text: "قد نقوم بتحديث هذه السياسة من وقت لآخر.",
    privacy_h10: "10) اتصل بنا",
    privacy_contact_address: "العنوان: الشيخ نديم الجسر، لبنان",
    privacy_contact_phone: "الهاتف:",
    privacy_contact_email: "البريد الإلكتروني:",
    privacy_back: "→ العودة للرئيسية",
    
    // Language switcher
    lang_switch: "English"
  }
};

// Products data for each language
const productsData = {
  en: [
    {
      image: "https://ik.imagekit.io/caffettino/grano.png",
      name: "Espresso Coffee Beans",
      description: "The ideal choice for anyone who wants to grind on-demand and obtain maximum freshness and aroma"
    },
    {
      image: "https://ik.imagekit.io/caffettino/macchinetta.png",
      name: "Espresso Machine",
      description: "Compact and stylish espresso machine, easy to operate with consistent creamy results."
    },
    {
      image: "https://ik.imagekit.io/caffettino/cialde.png",
      name: "Capsules and Pods",
      description: "Combine taste and convenience for quality espresso at home or in the office, ensure precise and consistent brewing."
    }
  ],
  ar: [
    {
      image: "https://ik.imagekit.io/caffettino/grano.png",
      name: "حبوب قهوة إسبريسو",
      description: "الخيار المثالي لمن يريد الطحن عند الطلب والحصول على أقصى درجات النضارة والرائحة"
    },
    {
      image: "https://ik.imagekit.io/caffettino/macchinetta.png",
      name: "آلة إسبريسو",
      description: "آلة إسبريسو أنيقة ومدمجة، سهلة الاستخدام مع نتائج كريمية متسقة."
    },
    {
      image: "https://ik.imagekit.io/caffettino/cialde.png",
      name: "كبسولات وأقراص",
      description: "تجمع بين المذاق والراحة للحصول على إسبريسو عالي الجودة في المنزل أو المكتب، تضمن تخميراً دقيقاً ومتسقاً."
    }
  ]
};

// Current language
let currentLang = localStorage.getItem('caffettino_lang') || 'en';

// Apply translations
function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('caffettino_lang', lang);
  
  // Update HTML lang and dir attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', lang === 'ar');
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Re-render products
  renderProducts(lang);
}

// Render products for current language
function renderProducts(lang) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  
  const products = productsData[lang];
  grid.innerHTML = products.map((product, index) => `
    <div class="product-card animate-on-scroll stagger-${(index % 6) + 1}">
      <div class="product-card__image-wrap">
        <img src="${product.image}" alt="${product.name}" class="product-card__image">
      </div>
      <div class="product-card__content">
        <h3 class="product-card__name">${product.name}</h3>
        <p class="product-card__desc">${product.description}</p>
      </div>
    </div>
  `).join('');
  
  // Re-observe for animations
  document.querySelectorAll('.product-card.animate-on-scroll').forEach(el => {
    el.classList.add('visible');
  });
}

// Set language directly
function setLanguage(lang) {
  applyTranslations(lang);
}

// Toggle language (legacy support)
function toggleLanguage() {
  const newLang = currentLang === 'en' ? 'ar' : 'en';
  applyTranslations(newLang);
}

// Initialize language
function initLanguage() {
  applyTranslations(currentLang);
}
