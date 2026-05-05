import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          WhyEgypt: "Why Egypt",
          Services: "Services",
          Industries: "Industries",
          "DaysPilot": "30 Days Pilot",
          Contact: "Contact",
          GetAfreeConsultation: "Get a Free Consultation",

          hero: {
            title: "Scale Your Customer Support Without Scaling Your Costs",
            badge: "Cairo, Egypt · Serving Global Clients",

            title1: "Scale Your",
            title2: "Customer Support",
            title3: "Without Scaling Your",
            title4: "Costs",

            description:
              "Core Solutions is a Cairo-based BPO delivering world-class inbound voice and live chat support for travel, fintech, telecom, and healthcare companies — at 60–70% less than in-house European teams.",

            ctaPrimary: "Start Your 30-Day Pilot",
            ctaSecondary: "Explore Our Services",

            stats: {
              stat1: "Average cost savings vs. EU teams",
              stat2: "Support coverage available",
              stat3: "Languages: Arabic & English",
              stat4: "Day pilot — no long-term contract",
            },
          },
          "challenge": {
    "badge": "The Challenges",
    "heading": "Growing companies face a customer support dilemma",
    "items": {
      "cost": {
        "title": "Sky-High In-House Costs",
        "body": "Hiring and maintaining a support team in Europe or the Gulf costs $3,500–$5,000 per agent per month — before management overhead."
      },
      "scale": {
        "title": "Impossible to Scale Fast",
        "body": "Recruitment, training, and onboarding take months. You can't flex headcount for seasonal peaks without massive risk."
      },
      "language": {
        "title": "Multilingual Gap",
        "body": "MENA customers expect Arabic support. Most companies cannot afford a dedicated bilingual team on top of their existing operation."
      },
      "timezone": {
        "title": "Timezone Gaps",
        "body": "Coverage across UK, EU, and Gulf hours simultaneously requires multiple teams — unless you're based in the right timezone."
      }
    }
  }, "about": {
    "label": "Who We Are",
    "heading": "Meet Core Solutions",
    "description": "We are a Cairo-based Business Process Outsourcing (BPO) company specializing in customer support operations for global companies in travel, fintech, healthcare, and telecom.",
    "bullets": [
      "Dedicated bilingual agents — English & Arabic",
      "Trained on YOUR workflows, tools, and brand voice",
      "Integrated into Zendesk, Freshdesk, Intercom & more",
      "Weekly CSAT reports and quality assurance built-in",
      "Operations Director personally oversees every account"
    ],
    "profile": {
      "name": "Ahmed Hegazy",
      "title": "Operations Director, Core Solutions",
      "email": "Morsy.ahmedd2@gmail.com",
      "location": "Cairo, Egypt · UTC+3",
      "website": "www.coresolutions.com"
    }
  },

  "whyEgypt": {
    "label": "Why Egypt",
    "heading": "The smartest location for your support operations",
    "items": {
      "cost": {
        "title": "60–70% Cost Savings",
        "body": "vs. in-house UK or European teams. Save ~$38,400 per agent per year."
      },
      "language": {
        "title": "Bilingual Talent",
        "body": "Native Arabic & English speakers covering MENA and European customer bases."
      },
      "timezone": {
        "title": "UTC+3 Timezone",
        "body": "Full overlap with UK, EU, and Gulf business hours in a single shift."
      },
      "education": {
        "title": "Educated Workforce",
        "body": "High university graduation rates with strong communication and digital skills."
      },
      "digital": {
        "title": "Digital Economy",
        "body": "Egypt's maturing tech sector means agents understand modern platforms and tools."
      },
      "security": {
        "title": "Secure Operations",
        "body": "Data protection protocols built for fintech and healthcare compliance."
      }
    }
  },

  "services": {
    "label": "Our Services",
    "heading": "Everything your customers need, handled professionally",
    "items": {
      "voice": {
        "title": "Inbound Voice Support",
        "body": "Dedicated agents handling calls for bookings, inquiries, cancellations, and complaints — trained on your processes and tone.",
        "tag": "English & Arabic"
      },
      "chat": {
        "title": "Live Chat & Email",
        "body": "Real-time support on Zendesk, Freshdesk, and Intercom managing queues with fast, quality responses.",
        "tag": "Multi-platform"
      },
      "overflow": {
        "title": "Overflow & Peak Support",
        "body": "Scale up instantly during peak seasons or campaigns without the cost of permanent headcount.",
        "tag": "Flexible scaling"
      },
      "multilingual": {
        "title": "Multilingual Coverage",
        "body": "Support MENA and European customers in Arabic, English, and French — one team, full coverage.",
        "tag": "3 Languages"
      },
      "queue": {
        "title": "Queue Management",
        "body": "Assigned agents managing a specific segment with consistent expertise and brand voice.",
        "tag": "Brand aligned"
      },
      "reporting": {
        "title": "Reporting & QA",
        "body": "Weekly CSAT reports, quality reviews, and full visibility into every customer interaction.",
        "tag": "Full transparency"
      }
    }
  },

  "industries": {
    "label": "Industries We Serve",
    "heading": "Built for your industry",
    "description": "Our agents are trained on your sector's specific workflows, tools, and language — not generic call center scripts.",
    "items": {
      "travel": {
        "title": "Travel & OTAs",
        "list": [
          "Booking inquiries & modifications",
          "Cancellations & refund handling",
          "GDS platform familiarity",
          "Complaint resolution & escalation"
        ]
      },
      "fintech": {
        "title": "Fintech & Banking",
        "list": [
          "Account queries & onboarding",
          "Transaction dispute support",
          "Fraud escalation workflows",
          "Neobank & BNPL experience"
        ]
      },
      "healthcare": {
        "title": "Healthcare",
        "list": [
          "Patient coordination & scheduling",
          "Medical tourism support",
          "Insurance query handling",
          "Arabic-speaking care teams"
        ]
      },
      "telecom": {
        "title": "Telecom",
        "list": [
          "Billing & account inquiries",
          "Tier-1 technical support",
          "Plan upgrades & retention",
          "Prepaid & postpaid workflows"
        ]
      }
    }
  },

  "numbers": {
    "label": "The Numbers",
    "heading": "The financial case is undeniable",
    "pricing": {
      "sub": "per agent / month",
      "uk": {
        "label": "UK In-House Team",
        "price": "$4,500"
      },
      "egypt": {
        "label": "Core Solutions, Egypt",
        "price": "$1,200"
      },
      "eu": {
        "label": "European BPO",
        "price": "$3,200"
      }
    },
    "savings": {
      "desc1": "Annual savings per agent vs. UK team",
      "amount": "$38,400",
      "desc2": {
        "part1": "5 agents =",
        "highlight": "$192,000 saved every year"
      },
      "desc3": "No quality compromise. Same results."
    }
  },

  "pilot": {
    "label": "Low Risk · High Value",
    "heading": "Start With a 30-Day Pilot",
    "description": "No long-term contracts. No big upfront commitment. Just 2 dedicated agents, clear metrics, and 30 days to see the results for yourself.",

    "steps": {
      "1": {
        "title": "Discovery Call",
        "body": "We learn your current support setup, tools, and pain points."
      },
      "2": {
        "title": "Team Setup",
        "body": "We assign and train dedicated agents on your workflows."
      },
      "3": {
        "title": "Go Live",
        "body": "Your support runs — we deliver weekly performance reports."
      },
      "4": {
        "title": "Review & Scale",
        "body": "You evaluate the results and decide whether to continue."
      }
    },

    "includesTitle": "What's included in the pilot:",
    "includes": [
      "2 dedicated agents",
      "Full workflow training",
      "Weekly CSAT reports",
      "QA review at day 30",
      "Direct line to management",
      "No cancellation fee"
    ],

    "cta": "Start Your 30-Day Pilot →"
  },
  "contact": {
    "label": "Let's Talk",
    "heading": "Ready to scale your customer support?",
    "description": "Let's start with a 20-minute discovery call. No commitment, no pressure — just a conversation to see if there's a fit.",
    "cta": "Book a Discovery Call",
    "quote": "We treat your customers like our own — because your reputation is our business.",

    "items": {
      "person": {
        "label": "Contact",
        "value": "Ahmed Hegazy — Operations Director"
      },
      "email": {
        "label": "Email"
      },
      "location": {
        "label": "Location",
        "value": "Cairo, Egypt — UTC+3"
      },
      "website": {
        "label": "Website",
        "value": "www.coresolutions.com"
      }
    }
  },

    "footer": {
    "company": "Core Solutions",
    "tagline": "BPO & Customer Support",
    "location": "Cairo, Egypt",
    "website": "www.coresolutions.co",
    "rights": "All rights reserved."
  },
  "GetInTouch": {
  "title": "Let's Talk About Your Support Needs",
  "tagline": "Ready to reduce costs and improve customer experience?",
  "description": "Reach out to us and we’ll get back to you within 24 hours.",

  "success": "Message sent successfully!",
  "error": "Something went wrong. Please try again.",

  "email": {
    "title": "New Contact Inquiry"
  },

  "form": {
    "firstName": "First Name",
    "lastName": "Last Name",
    "company": "Company",
    "industry": "Industry",
    "message": "Message",

    "submit": "Send Message →",
    "sending": "Sending...",

    "selectIndustry": "Select your industry"
  },

  "validation": {
    "tooShort": "Too short",
    "tooLong": "Too long",

    "firstNameRequired": "First name is required",
    "lastNameRequired": "Last name is required",
    "companyRequired": "Company name is required",
    "industryRequired": "Industry is required",
    "selectIndustry": "Please select an industry",
    "messageMin": "Please write at least 10 characters",
    "messageRequired": "Message is required"
  },

  "industries": {
    "travel": "Travel & OTA",
    "fintech": "Fintech / Banking",
    "telecom": "Telecommunications",
    "other": "Other"
  },

  "info": {
    "name": "Ahmed Hegazy",
    "role": "Operations Director",

    "email": "Email us anytime",
    "emailSub": "We respond within 24 hours",

    "location": "Cairo, Egypt",
    "locationSub": "UTC+3 · Global support",

    "response": "Response time",
    "responseSub": "Within 24 hours"
  }
} 

        },
      },

      ar: {
        translation: {
          WhyEgypt: "لماذا مصر",
          Services: "الخدمات",
          Industries: "الصناعات",
          "DaysPilot": "تجربة 30 يوم",
          Contact: "تواصل معنا",
          GetAfreeConsultation: "احصل على استشارة مجانية",

          hero: {
            title: "وسّع خدمة دعم العملاء من غير ما تزود التكاليف",
            badge: "القاهرة، مصر · نخدم عملاء عالميين",

            title1: "وسع",
            title2: "خدمة العملاء",
            title3: "من غير ما تزود",
            title4: "التكاليف",

            description:
              "Core Solutions شركة BPO مقرها القاهرة بتقدم دعم صوتي وشات مباشر عالمي للشركات في السفر والتكنولوجيا المالية والاتصالات والرعاية الصحية — بتكلفة أقل 60–70% من الفرق الداخلية في أوروبا.",

            ctaPrimary: "ابدأ تجربة 30 يوم",
            ctaSecondary: "استكشف خدماتنا",

            stats: {
              stat1: "متوسط توفير التكلفة مقارنة بأوروبا",
              stat2: "دعم متاح 24/7",
              stat3: "لغات: عربي و إنجليزي",
              stat4: "تجربة 30 يوم بدون التزام",
            },
          },
           "challenge": {
    "badge": "التحدي",
    "heading": "الشركات النامية تواجه معضلة في دعم العملاء",
    "items": {
      "cost": {
        "title": "تكاليف داخلية مرتفعة جدًا",
        "body": "توظيف فريق دعم في أوروبا أو الخليج يكلف من 3500 إلى 5000 دولار لكل موظف شهريًا — قبل التكاليف الإدارية."
      },
      "scale": {
        "title": "صعوبة التوسع بسرعة",
        "body": "التوظيف والتدريب والتأهيل يستغرق شهورًا. لا يمكنك زيادة أو تقليل عدد الموظفين بسهولة حسب المواسم."
      },
      "language": {
        "title": "فجوة اللغة",
        "body": "عملاء منطقة الشرق الأوسط وشمال إفريقيا يتوقعون دعمًا باللغة العربية. معظم الشركات لا تستطيع تحمل تكلفة فريق ثنائي اللغة."
      },
      "timezone": {
        "title": "فجوات التوقيت",
        "body": "تغطية بريطانيا وأوروبا والخليج معًا تحتاج فرق متعددة — إلا إذا كنت تعمل في المنطقة الزمنية المناسبة."
      }
    }
  },
      
  "about": {
    "label": "من نحن",
    "heading": "تعرف على Core Solutions",
    "description": "نحن شركة تعهيد خدمات أعمال (BPO) مقرها القاهرة، متخصصة في إدارة دعم العملاء للشركات العالمية في مجالات السفر والتكنولوجيا المالية والرعاية الصحية والاتصالات.",
    "bullets": [
      "فريق دعم ثنائي اللغة — عربي وإنجليزي",
      "مدربون على أنظمتك وأدواتك وطبيعة علامتك التجارية",
      "تكامل كامل مع Zendesk و Freshdesk و Intercom وغيرها",
      "تقارير رضا العملاء الأسبوعية وضمان الجودة مدمجة",
      "مدير العمليات يشرف شخصيًا على كل حساب"
    ],
    "profile": {
      "name": "أحمد حجازي",
      "title": "مدير العمليات، Core Solutions",
      "email": "Morsy.ahmedd2@gmail.com",
      "location": "القاهرة، مصر · UTC+3",
      "website": "www.coresolutions.com"
    }
  },  

  "whyEgypt": {
    "label": "لماذا مصر",
    "heading": "أفضل موقع لإدارة عمليات دعم العملاء الخاصة بك",
    "items": {
      "cost": {
        "title": "توفير 60–70٪ من التكاليف",
        "body": "مقارنة بفرق العمل داخل أوروبا أو المملكة المتحدة. توفير حوالي 38,400 دولار لكل موظف سنويًا."
      },
      "language": {
        "title": "كوادر ثنائية اللغة",
        "body": "متحدثون أصليون بالعربية والإنجليزية لخدمة عملاء الشرق الأوسط وأوروبا."
      },
      "timezone": {
        "title": "توقيت UTC+3",
        "body": "تغطية كاملة لساعات العمل في بريطانيا وأوروبا والخليج خلال وردية واحدة."
      },
      "education": {
        "title": "قوى عاملة متعلمة",
        "body": "نسب تخرج جامعي عالية مع مهارات قوية في التواصل والتقنيات الرقمية."
      },
      "digital": {
        "title": "اقتصاد رقمي متطور",
        "body": "تطور قطاع التكنولوجيا في مصر يجعل الموظفين على دراية بالمنصات والأدوات الحديثة."
      },
      "security": {
        "title": "عمليات آمنة",
        "body": "أنظمة حماية بيانات مناسبة لمتطلبات شركات التكنولوجيا المالية والرعاية الصحية."
      }
    }
  },

  "services": {
    "label": "خدماتنا",
    "heading": "كل ما يحتاجه عملاؤك، يتم التعامل معه باحترافية",
    "items": {
      "voice": {
        "title": "دعم المكالمات الواردة",
        "body": "وكلاء مخصصون للتعامل مع الحجوزات والاستفسارات والإلغاءات والشكاوى — مدربون على أنظمتك وطريقة التواصل الخاصة بك.",
        "tag": "عربي وإنجليزي"
      },
      "chat": {
        "title": "الدردشة المباشرة والبريد الإلكتروني",
        "body": "دعم فوري عبر Zendesk وFreshdesk وIntercom مع إدارة احترافية وسريعة للطلبات.",
        "tag": "متعدد المنصات"
      },
      "overflow": {
        "title": "دعم المواسم والضغط",
        "body": "إمكانية التوسع الفوري خلال المواسم أو الحملات بدون تكلفة توظيف دائم.",
        "tag": "مرونة في التوسع"
      },
      "multilingual": {
        "title": "دعم متعدد اللغات",
        "body": "خدمة عملاء الشرق الأوسط وأوروبا بالعربية والإنجليزية والفرنسية — فريق واحد بتغطية كاملة.",
        "tag": "3 لغات"
      },
      "queue": {
        "title": "إدارة الطلبات",
        "body": "تخصيص وكلاء لإدارة فئات محددة لضمان خبرة ثابتة وصوت موحد للعلامة التجارية.",
        "tag": "متوافق مع الهوية"
      },
      "reporting": {
        "title": "التقارير وضمان الجودة",
        "body": "تقارير أسبوعية لرضا العملاء ومراجعات جودة مع شفافية كاملة لكل التفاعلات.",
        "tag": "شفافية كاملة"
      }
    }
  },

  "industries": {
    "label": "القطاعات التي نخدمها",
    "heading": "مصمم خصيصًا لقطاعك",
    "description": "يتم تدريب وكلائنا على أنظمة وأدوات ومصطلحات قطاعك — وليس على سكريبتات مراكز اتصال تقليدية.",
    "items": {
      "travel": {
        "title": "السفر ومنصات الحجز",
        "list": [
          "الاستفسارات وتعديل الحجوزات",
          "الإلغاءات ومعالجة الاسترداد",
          "الإلمام بأنظمة GDS",
          "حل الشكاوى والتصعيد"
        ]
      },
      "fintech": {
        "title": "التكنولوجيا المالية والبنوك",
        "list": [
          "استفسارات الحسابات والتسجيل",
          "دعم نزاعات العمليات",
          "إجراءات تصعيد الاحتيال",
          "خبرة في البنوك الرقمية وخدمات التقسيط"
        ]
      },
      "healthcare": {
        "title": "الرعاية الصحية",
        "list": [
          "تنسيق المرضى وجدولة المواعيد",
          "دعم السياحة العلاجية",
          "التعامل مع استفسارات التأمين",
          "فرق دعم ناطقة بالعربية"
        ]
      },
      "telecom": {
        "title": "الاتصالات",
        "list": [
          "استفسارات الفواتير والحسابات",
          "دعم تقني مستوى أول",
          "ترقية الباقات والحفاظ على العملاء",
          "أنظمة الدفع المسبق واللاحق"
        ]
      }
    }
  },

  "numbers": {
    "label": "الأرقام",
    "heading": "الجدوى المالية واضحة",
    "pricing": {
      "sub": "لكل موظف / شهريًا",
      "uk": {
        "label": "فريق داخلي في المملكة المتحدة",
        "price": "$4,500"
      },
      "egypt": {
        "label": "Core Solutions - مصر",
        "price": "$1,200"
      },
      "eu": {
        "label": "شركة تعهيد أوروبية",
        "price": "$3,200"
      }
    },
    "savings": {
      "desc1": "التوفير السنوي لكل موظف مقارنة بفريق المملكة المتحدة",
      "amount": "$38,400",
      "desc2": {
        "part1": "5 موظفين =",
        "highlight": "$192,000 توفير سنوي"
      },
      "desc3": "بدون التأثير على الجودة. نفس النتائج."
    }
  },

  "pilot": {
    "label": "مخاطرة منخفضة · قيمة عالية",
    "heading": "ابدأ بتجربة لمدة 30 يوم",
    "description": "بدون عقود طويلة أو التزامات كبيرة مسبقًا. فقط وكيلان مخصصان، مؤشرات أداء واضحة، و30 يوم لتجربة النتائج بنفسك.",

    "steps": {
      "1": {
        "title": "مكالمة استكشافية",
        "body": "نتعرف على نظام الدعم الحالي لديك والأدوات والتحديات."
      },
      "2": {
        "title": "تجهيز الفريق",
        "body": "نقوم بتعيين وتدريب فريق مخصص على أنظمتك."
      },
      "3": {
        "title": "بدء التشغيل",
        "body": "يبدأ الدعم الفعلي مع تقارير أداء أسبوعية."
      },
      "4": {
        "title": "التقييم والتوسع",
        "body": "تقيّم النتائج وتقرر الاستمرار أو التوسع."
      }
    },

    "includesTitle": "ما يتضمنه العرض:",
    "includes": [
      "2 وكلاء مخصصين",
      "تدريب كامل على الأنظمة",
      "تقارير أسبوعية لرضا العملاء",
      "مراجعة جودة بعد 30 يوم",
      "تواصل مباشر مع الإدارة",
      "بدون رسوم إلغاء"
    ],

    "cta": "ابدأ التجربة لمدة 30 يوم →"
  },

   "contact": {
    "label": "تواصل معنا",
    "heading": "هل أنت مستعد لتوسيع دعم العملاء لديك؟",
    "description": "لنبدأ بمكالمة تعريفية لمدة 20 دقيقة بدون أي التزام أو ضغط — فقط لنرى إن كان هناك توافق.",
    "cta": "احجز مكالمة تعريفية",
    "quote": "نحن نتعامل مع عملائك كما لو كانوا عملاءنا — لأن سمعتك هي عملنا.",

    "items": {
      "person": {
        "label": "جهة الاتصال",
        "value": "أحمد حجازي — مدير العمليات"
      },
      "email": {
        "label": "البريد الإلكتروني"
      },
      "location": {
        "label": "الموقع",
        "value": "القاهرة، مصر — UTC+3"
      },
      "website": {
        "label": "الموقع الإلكتروني",
        "value": "www.coresolutions.com"
      }
    }
  },
  "footer": {
    "company": "Core Solutions",
    "tagline": "خدمات التعهيد ودعم العملاء",
    "location": "القاهرة، مصر",
    "website": "www.coresolutions.co",
    "rights": "جميع الحقوق محفوظة."
  },
  "GetInTouch": {
  "title": "خلينا نتكلم عن احتياجات دعم العملاء",
  "tagline": "جاهز تقلل التكاليف وتحسن تجربة العملاء؟",
  "description": "تواصل معنا وسنرد عليك خلال 24 ساعة.",

  "success": "تم إرسال رسالتك بنجاح!",
  "error": "حدث خطأ. حاول مرة أخرى.",

  "email": {
    "title": "رسالة جديدة من الموقع"
  },

  "form": {
    "firstName": "الاسم الأول",
    "lastName": "الاسم الأخير",
    "company": "الشركة",
    "industry": "مجال العمل",
    "message": "الرسالة",

    "submit": "إرسال الرسالة →",
    "sending": "جارٍ الإرسال...",

    "selectIndustry": "اختر مجال العمل"
  },

  "validation": {
    "tooShort": "قصير جدًا",
    "tooLong": "طويل جدًا",

    "firstNameRequired": "الاسم الأول مطلوب",
    "lastNameRequired": "الاسم الأخير مطلوب",
    "companyRequired": "اسم الشركة مطلوب",
    "industryRequired": "مجال العمل مطلوب",
    "selectIndustry": "من فضلك اختر مجال",
    "messageMin": "اكتب على الأقل 10 حرف",
    "messageRequired": "الرسالة مطلوبة"
  },

  "industries": {
    "travel": "السياحة",
    "fintech": "البنوك والتكنولوجيا المالية",
    "telecom": "الاتصالات",
    "other": "أخرى"
  },

  "info": {
    "name": "أحمد حجازي",
    "role": "مدير العمليات",

    "email": "راسلنا في أي وقت",
    "emailSub": "نرد خلال 24 ساعة",

    "location": "القاهرة، مصر",
    "locationSub": "UTC+3 · دعم عالمي",

    "response": "وقت الرد",
    "responseSub": "خلال 24 ساعة"
  }
}


},
      },
    },

    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;