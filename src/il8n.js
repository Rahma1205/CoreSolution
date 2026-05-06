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

    "footer": {
    "company": "Core Solutions",
    "tagline": "BPO & Customer Support",
    "location": "Cairo, Egypt",
    "website": "www.coresolutions.co",
    "rights": "All rights reserved."
  },
  
  "contact": {
    "label": "Let's Talk",
    "heading": {
      "line1": "Ready to scale your",
      "highlight": "customer support?"
    },
    "description": "Let's start with a 20-minute discovery call. No commitment, no pressure — just a conversation to see if there's a fit.",
    "quote": "We treat your customers like our own — because your reputation is our business.",
    "cards": {
      "contact": {
        "label": "Contact",
        "name": "Ahmed Hegazy",
        "role": "Operations Director"
      },
      "email": {
        "label": "Email",
        "value": "Morsy.ahmedd2@gmail.com"
      },
      "location": {
        "label": "Location",
        "value": "Cairo, Egypt — UTC+3"
      },
      "website": {
        "label": "Website",
        "value": "www.coresolutions.com"
      },
      
    },
    
  },

  "pilot": {
    "label": {
      "part1": "LOW RISK",
      "part2": "HIGH VALUE"
    },
    "heading": "Start With a 30-Day Pilot",
    "description": "No long-term contracts. No big upfront commitment. Just 2 dedicated agents, clear metrics, and 30 days to see the results for yourself.",
    
    "steps": {
      "1": {
        "title": "Discovery Call",
        "desc": "We learn your current support setup, tools, and pain points"
      },
      "2": {
        "title": "Team Setup",
        "desc": "We assign and train dedicated agents on your workflows"
      },
      "3": {
        "title": "Go Live",
        "desc": "Your support runs — we deliver weekly performance reports"
      },
      "4": {
        "title": "Review & Scale",
        "desc": "You evaluate the results and decide whether to continue"
      }
    },

    "includedTitle": "What's included in the pilot:",
    "included": [
      "2 dedicated agents",
      "Full workflow training",
      "Weekly CSAT reports",
      "QA review at day 30",
      "Direct line to management",
      "No cancellation fee"
    ]
  }
,
  "services": {
    "label": "Our Services",
    "heading": "Everything your customers need, handled professionally",
    "items": [
      {
        "title": "Inbound Voice Support",
        "desc": "Dedicated agents handling calls for bookings, inquiries, cancellations, and complaints — trained on your processes and tone.",
        "badge": "English & Arabic"
      },
      {
        "title": "Live Chat & Email",
        "desc": "Real-time support on Zendesk, Freshdesk, and Intercom managing queues with fast, quality responses.",
        "badge": "Multi-platform"
      },
      {
        "title": "Overflow & Peak Support",
        "desc": "Scale up instantly during peak seasons or campaigns without the cost of permanent headcount.",
        "badge": "Flexible scaling"
      },
      {
        "title": "Multilingual Coverage",
        "desc": "Support MENA and European customers in Arabic, English, and French — one team, full coverage.",
        "badge": "3 Languages"
      },
      {
        "title": "Queue Management",
        "desc": "Assigned agents managing a specific segment with consistent expertise and brand voice.",
        "badge": "Brand aligned"
      },
      {
        "title": "Reporting & QA",
        "desc": "Weekly CSAT reports, quality reviews, and full visibility into every customer interaction.",
        "badge": "Full transparency"
      }
    ]
  },

  "industries": {
    "label": "Industries We Serve",
    "heading": "Built for your industry",
    "description": "Our agents are trained on your sector's specific workflows, tools, and language — not generic call center scripts.",

    "items": [
      {
        "title": "Travel & OTAs",
        "list": [
          "Booking inquiries & modifications",
          "Cancellations & refund handling",
          "GDS platform familiarity",
          "Complaint resolution & escalation"
        ]
      },
      {
        "title": "Fintech & Banking",
        "list": [
          "Account queries & onboarding",
          "Transaction dispute support",
          "Fraud escalation workflows",
          "Neobank & BNPL experience"
        ]
      },
      {
        "title": "Healthcare",
        "list": [
          "Patient coordination & scheduling",
          "Medical tourism support",
          "Insurance query handling",
          "Arabic-speaking care teams"
        ]
      },
      {
        "title": "Telecom",
        "list": [
          "Billing & account inquiries",
          "Tier-1 technical support",
          "Plan upgrades & retention",
          "Prepaid & postpaid workflows"
        ]
      }
    ],


  },
  
  "numbers": {
    "label": "The Numbers",
    "heading": "The financial case is undeniable",

    "bars": [
      {
        "label": "UK In-House Team",
        "price": "$4,500/mo"
      },
      {
        "label": "European BPO",
        "price": "$3,200/mo"
      },
      {
        "label": "Core Solutions, Egypt",
        "price": "$1,200/mo"
      }
    ],

    "savings": {
      "top": "Annual savings\nper agent vs. UK team",
      "amount": "$38,400",
      "per": "per agent / year",
      "highlight": "5 agents = $192,000\nsaved every year",
      "note": "No quality compromise.\nSame results."
    }
  },
  "who": {
    "label": "Who We Are",
    "heading": "Meet Core Solutions",
    "description": "We are a Cairo-based Business Process Outsourcing (BPO) company specializing in customer support operations for global companies in travel, fintech, healthcare, and telecom.",

    "features": [
      "Dedicated bilingual agents — English & Arabic",
      "Trained on YOUR workflows, tools, and brand voice",
      "Integrated into Zendesk, Freshdesk, Intercom & more",
      "Weekly CSAT reports and quality assurance built-in",
      "Operations Director personally oversees every account"
    ],

    "contact": {
      "name": "Ahmed Hegazy",
      "role": "Operations Director",
      "company": "Core Solutions",
      "email": "Morsy.ahmedd2@gmail.com",
      "location": "Cairo, Egypt · UTC+3",
      "website": "www.coresolutions.com"
    },
    




  },
    "challenge": {
    "label": "The Challenge",
    "heading": "Growing companies face a customer support dilemma",

    "items": [
      {
        "title": "Sky-High In-House Costs",
        "desc": "Hiring and maintaining a support team in Europe or the Gulf costs $3,500–$5,000 per agent per month — before management overhead."
      },
      {
        "title": "Impossible to Scale Fast",
        "desc": "Recruitment, training, and onboarding take months. You can't flex headcount for seasonal peaks without massive risk."
      },
      {
        "title": "Multilingual Gap",
        "desc": "MENA customers expect Arabic support. Most companies can't afford a dedicated bilingual team on top of their existing operation."
      },
      {
        "title": "Timezone Gaps",
        "desc": "Coverage across UK, EU, and Gulf hours simultaneously requires multiple teams — unless you're based in the right timezone."
      }
    ]
  },
  "why": {
    "label": "Why Egypt",
    "heading": "The smartest location for your support operations",

    "items": [
      {
        "title": "60–70% Cost Savings",
        "desc": "vs. in-house UK or European teams. Save ~$38,400 per agent per year."
      },
      {
        "title": "Bilingual Talent",
        "desc": "Native Arabic & English speakers covering MENA and European customer bases."
      },
      {
        "title": "UTC+3 Timezone",
        "desc": "Full overlap with UK, EU, and Gulf business hours in a single shift."
      },
      {
        "title": "Educated Workforce",
        "desc": "High university graduation rates with strong communication and digital skills."
      },
      {
        "title": "Digital Economy",
        "desc": "Egypt's maturing tech sector means agents understand modern platforms and tools."
      },
      {
        "title": "Secure Operations",
        "desc": "Data protection protocols built for fintech and healthcare compliance."
      }
    ]
  },
  
  "getInTouch": {
    "label": "Get In Touch",
    "title1": "Let's Talk About Your",
    "titleHighlight": "Support Needs",
    "subtitle": "Ready to reduce costs and improve your customer experience?",
    "body": "Reach out to us directly or fill in the form and we'll get back to you within 24 hours to schedule a discovery call.",
    "success": "Message sent! We'll get back to you within 24 hours.",
  "validation": {
        "tooShort": "Must be at least 2 characters",
      "companyRequired": "Company is required",
      "phoneRequired": "Phone is required",
      "messageMin": "Message must be at least 10 characters",
      "selectIndustry": "Please select an industry",
      "firstNameRequired": "First name is required",
      "lastNameRequired": "Last name is required"
  },  
    "contact": {
      "name": "Ahmed Hegazy",
      "role": "Operations Director",
      "email": "Morsy.ahmedd2@gmail.com",
      "emailSub": "Email us anytime",
      "location": "Cairo, Egypt",
      "locationSub": "UTC+3 · Serving global clients",
      "time": "Response within 24 hours",
      "timeSub": "Mon–Sat, 9am–6pm Cairo time"
    },

    "industries": {
      "other": "Other",
      "travel": "Travel & OTAs",
      "fintech": "Fintech & Banking",
      "healthcare": "Healthcare",
      "telecom": "Telecom",
      "ecommerce": "E-commerce"
    },

    "form": {
      "firstName": "First Name",
      "lastName": "Last Name",
      "company": "Company",
      "phone": "Phone Number",
      "industry": "Industry",
      "message": "Message",

      "firstNamePh": "John",
      "lastNamePh": "Dunne",
      "companyPh": "Company name",
      "phonePh": "100 000 0000",
      "messagePh": "Tell us about your current support setup and what you're looking for...",
      "submit": "Send Message & Request a Pilot →"
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

  "footer": {
    "company": "Core Solutions",
    "tagline": "خدمات التعهيد ودعم العملاء",
    "location": "القاهرة، مصر",
    "website": "www.coresolutions.com",
    "rights": "جميع الحقوق محفوظة."
  },


  "contact": {
    "label": "تواصل معنا",
    "heading": {
      "line1": "جاهز لتطوير",
      "highlight": "خدمة عملائك؟"
    },
    "description": "خلينا نبدأ بمكالمة تعريفية لمدة 20 دقيقة. بدون التزام أو ضغط — مجرد نقاش بسيط نشوف فيه هل في توافق.",
    "quote": "نحن نتعامل مع عملائك كأنهم عملاؤنا — لأن سمعتك هي شغلنا.",
    "cards": {
      "contact": {
        "label": "التواصل",
        "name": "أحمد حجازي",
        "role": "مدير العمليات"
      },
      "email": {
        "label": "البريد الإلكتروني",
        "value": "Morsy.ahmedd2@gmail.com"
      },
      "location": {
        "label": "الموقع",
        "value": "القاهرة، مصر — +3 UTC"
      },
      "website": {
        "label": "الموقع الإلكتروني",
        "value": "www.coresolutions.com"
      }
    }
  }
  ,
  "pilot": {
    "label": {
      "part1": "مخاطر منخفضة",
      "part2": "قيمة عالية"
    },
    "heading": "ابدأ بتجربة لمدة 30 يوم",
    "description": "بدون عقود طويلة. بدون التزام مادي كبير. فقط فريق مخصص ومقاييس واضحة و30 يوم لتقييم النتائج بنفسك.",
    
    "steps": {
      "1": {
        "title": "مكالمة تعريفية",
        "desc": "نفهم نظام الدعم الحالي لديك والأدوات والمشاكل"
      },
      "2": {
        "title": "إعداد الفريق",
        "desc": "نخصص ونُدرّب فريقًا على نظام العمل الخاص بك"
      },
      "3": {
        "title": "بدء التشغيل",
        "desc": "نبدأ العمل ونقدم تقارير أداء أسبوعية"
      },
      "4": {
        "title": "التقييم والتوسع",
        "desc": "تراجع النتائج وتقرر الاستمرار أو التوسع"
      }
    },

    "includedTitle": "ما يشمله العرض:",
    "included": [
      "2 موظفين مخصصين",
      "تدريب كامل على النظام",
      "تقارير رضا العملاء أسبوعياً",
      "مراجعة جودة بعد 30 يوم",
      "تواصل مباشر مع الإدارة",
      "بدون رسوم إلغاء"
    ]
  }
,
  "services": {
    "label": "خدماتنا",
    "heading": "كل ما يحتاجه عملاؤك — نقدمه باحترافية",
    "items": [
      {
        "title": "دعم المكالمات الواردة",
        "desc": "فريق متخصص لإدارة المكالمات للحجوزات والاستفسارات والإلغاء والشكاوى وفق نظامك الخاص.",
        "badge": "عربي & إنجليزي"
      },
      {
        "title": "الدردشة والبريد الإلكتروني",
        "desc": "دعم فوري عبر Zendesk وFreshdesk وIntercom مع ردود سريعة وعالية الجودة.",
        "badge": "متعدد المنصات"
      },
      {
        "title": "دعم أوقات الذروة",
        "desc": "إمكانية التوسع السريع خلال المواسم أو الحملات بدون تكلفة توظيف دائم.",
        "badge": "مرونة عالية"
      },
      {
        "title": "دعم متعدد اللغات",
        "desc": "خدمة العملاء في الشرق الأوسط وأوروبا بالعربية والإنجليزية والفرنسية.",
        "badge": "3 لغات"
      },
      {
        "title": "إدارة الطوابير",
        "desc": "تخصيص فريق لإدارة جزء معين من العملاء مع الحفاظ على هوية العلامة التجارية.",
        "badge": "متوافق مع البراند"
      },
      {
        "title": "التقارير وضمان الجودة",
        "desc": "تقارير أسبوعية لرضا العملاء ومراجعة الجودة مع رؤية كاملة لكل التفاعلات.",
        "badge": "شفافية كاملة"
      }
    ]
  }
,
  "industries": {
    "label": "القطاعات التي نخدمها",
    "heading": "مصمم خصيصًا لمجالك",
    "description": "فريقنا مدرب على أنظمة وأدوات كل قطاع بشكل متخصص — وليس سكريبتات عامة.",

    "items": [
      {
        "title": "السفر وحجوزات الطيران",
        "list": [
          "استفسارات وتعديلات الحجز",
          "الإلغاء واسترجاع الأموال",
          "التعامل مع أنظمة GDS",
          "حل الشكاوى والتصعيد"
        ]
      },
      {
        "title": "التكنولوجيا المالية والبنوك",
        "list": [
          "استفسارات الحساب وفتح الحسابات",
          "دعم نزاعات المعاملات",
          "إجراءات مكافحة الاحتيال",
          "خبرة في Neobank و BNPL"
        ]
      },
      {
        "title": "الرعاية الصحية",
        "list": [
          "تنسيق المرضى والمواعيد",
          "دعم السياحة العلاجية",
          "الاستفسارات التأمينية",
          "فِرق دعم ناطقة بالعربية"
        ]
      },
      {
        "title": "الاتصالات",
        "list": [
          "الفواتير واستفسارات الحساب",
          "الدعم الفني الأساسي",
          "ترقية الباقات والاحتفاظ بالعملاء",
          "أنظمة الدفع المسبق واللاحق"
        ]
      }
    ],

  },
  
  "numbers": {
    "label": "الأرقام",
    "heading": "الأرقام تتحدث بوضوح",

    "bars": [
      {
        "label": "فريق داخلي في المملكة المتحدة",
        "price": "$4,500/شهريًا"
      },
      {
        "label": "شركة أوروبية خارجية",
        "price": "$3,200/شهريًا"
      },
      {
        "label": "Core Solutions - مصر",
        "price": "$1,200/شهريًا"
      }
    ],

    "savings": {
      "top": "التوفير السنوي\nلكل موظف مقارنة ببريطانيا",
      "amount": "$38,400",
      "per": "لكل موظف / سنويًا",
      "highlight": "5 موظفين = $192,000\nتوفير سنوي",
      "note": "بدون التأثير على الجودة.\nنفس النتائج."
    }
  }
,
  "who": {
    "label": "من نحن",
    "heading": "تعرف على Core Solutions",
    "description": "نحن شركة تعهيد أعمال مقرها القاهرة، متخصصة في تقديم خدمات دعم العملاء لشركات عالمية في مجالات السفر والتكنولوجيا المالية والرعاية الصحية والاتصالات.",

    "features": [
      "فريق دعم ثنائي اللغة — عربي وإنجليزي",
      "مدرب على أنظمتك وأدواتك وهويتك الخاصة",
      "تكامل كامل مع Zendesk وFreshdesk وIntercom",
      "تقارير أسبوعية لرضا العملاء وضمان الجودة",
      "إشراف مباشر من مدير العمليات على كل حساب"
    ],

    "contact": {
      "name": "أحمد حجازي",
      "role": "مدير العمليات",
      "company": "Core Solutions",
      "email": "Morsy.ahmedd2@gmail.com",
      "location": "القاهرة، مصر · +3 UTC",
      "website": "www.coresolutions.com"
    },


  },
  
  "challenge": {
    "label": "التحديات",
    "heading": "الشركات المتنامية تواجه تحديًا في دعم العملاء",

    "items": [
      {
        "title": "تكاليف داخلية مرتفعة جدًا",
        "desc": "توظيف وإدارة فريق دعم في أوروبا أو الخليج يكلف من 3500 إلى 5000 دولار شهريًا لكل موظف قبل حساب الإدارة."
      },
      {
        "title": "صعوبة التوسع السريع",
        "desc": "التوظيف والتدريب يستغرق شهورًا، ولا يمكنك زيادة الفريق بسرعة خلال المواسم بدون مخاطر كبيرة."
      },
      {
        "title": "فجوة تعدد اللغات",
        "desc": "عملاء الشرق الأوسط يتوقعون دعمًا باللغة العربية، ومعظم الشركات لا تستطيع توفير فريق ثنائي اللغة."
      },
      {
        "title": "فروق التوقيت",
        "desc": "تغطية أوروبا والخليج معًا تحتاج عدة فرق — إلا إذا كنت في توقيت مناسب مثل مصر."
      }
    ]
  },
  
  "why": {
    "label": "لماذا مصر",
    "heading": "أفضل موقع لتشغيل خدمات دعم العملاء",

    "items": [
      {
        "title": "توفير 60–70% من التكاليف",
        "desc": "مقارنة بفرق العمل في أوروبا أو المملكة المتحدة — توفير يصل إلى 38,400 دولار سنويًا لكل موظف."
      },
      {
        "title": "كوادر ثنائية اللغة",
        "desc": "متحدثون أصليون بالعربية والإنجليزية لخدمة عملاء الشرق الأوسط وأوروبا."
      },
      {
        "title": "توقيت +3 UTC",
        "desc": "تغطية كاملة لأوقات العمل في أوروبا والخليج في نفس الوردية."
      },
      {
        "title": "قوى عاملة متعلمة",
        "desc": "نسبة عالية من خريجي الجامعات بمهارات قوية في التواصل والتكنولوجيا."
      },
      {
        "title": "اقتصاد رقمي متطور",
        "desc": "قطاع التكنولوجيا في مصر في نمو مستمر مما يعزز فهم الأدوات والمنصات الحديثة."
      },
      {
        "title": "عمليات آمنة",
        "desc": "أنظمة حماية بيانات مناسبة لقطاعات مثل التكنولوجيا المالية والرعاية الصحية."
      }
    ]
  },
  
  "getInTouch": {
    "label": "تواصل معنا",
    "title1": "خلينا نتكلم عن",
    "titleHighlight": "احتياجات الدعم",
    "subtitle": "جاهزين نقلل التكلفة ونحسن تجربة العملاء؟",
    "body": "تقدر تتواصل معانا مباشرة أو تملى الفورم وهنتواصل معاك خلال 24 ساعة لتحديد مكالمة تعريفية.",
    "success": "تم إرسال الرسالة! هنتواصل معاك خلال 24 ساعة.",
  "validation": {
       "tooShort": "يجب أن يكون على الأقل حرفين",
      "companyRequired": "اسم الشركة مطلوب",
      "phoneRequired": "رقم الهاتف مطلوب",
      "messageMin": "الرسالة يجب أن تكون 10 أحرف على الأقل",
      "selectIndustry": "من فضلك اختر المجال",
      "firstNameRequired": "الاسم الأول مطلوب",
      "lastNameRequired": "الاسم الأخير مطلوب"
  },  "industries": {
    "travel": "Travel",
    "fintech": "Fintech",
    "telecom": "Telecom",
    "healthcare": "Healthcare",
    "ecommerce": "E-commerce",
    "other": "Other"
  },
    "contact": {
      "name": "أحمد حجازي",
      "role": "مدير العمليات",
      "email": "Morsy.ahmedd2@gmail.com",
      "emailSub": "راسلنا في أي وقت",
      "location": "القاهرة، مصر",
      "locationSub": "UTC+3 · نخدم عملاء حول العالم",
      "time": "الرد خلال 24 ساعة",
      "timeSub": "من السبت إلى الخميس، 9 صباحاً - 6 مساءً"
    },

    "industries": {
      "other": "أخرى",
      "travel": "السفر وشركات الحجز",
      "fintech": "التكنولوجيا المالية والبنوك",
      "healthcare": "الرعاية الصحية",
      "telecom": "الاتصالات",
      "ecommerce": "التجارة الإلكترونية"
    },

    "form": {
      "firstName": "الاسم الأول",
      "lastName": "الاسم الأخير",
      "company": "الشركة",
      "phone": "رقم الهاتف",
      "industry": "المجال",
      "message": "الرسالة",

      "firstNamePh": "جون",
      "lastNamePh": "دون",
      "companyPh": "اسم الشركة",
      "phonePh": "100 000 0000",
      "messagePh": "احكي لنا عن نظام الدعم الحالي وما الذي تحتاجه...",
      "submit": "إرسال الطلب وطلب تجربة →"
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