// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Repositories status",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is my CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-photos",
              title: "photos",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/photos/";
              },
            },{id: "post-brief-of-ai-ml-coding-interview-questions-leetcode-style",
        
          title: "Brief of AI/ML coding interview questions (Leetcode style)",
        
        description: "Some implementation examples for machine learning coding interview",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/leetcode-ml/";
          
        },
      },{id: "post-brief-of-cuda-gpu-coding-interview-questions-leetcode-style",
        
          title: "Brief of CUDA/GPU coding interview questions (Leetcode style)",
        
        description: "Some examples for CUDA/GPU coding interview, this is needed for ML optimization",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/leetcode-gpu/";
          
        },
      },{id: "post-brief-of-data-structure-amp-algorithm-dsa-coding-interview-questions",
        
          title: "Brief of Data-Structure &amp; Algorithm (DSA) coding interview questions",
        
        description: "Some concepts, topics, and examples for Leetcode coding interview",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/leetcode-dsa/";
          
        },
      },{id: "post-comprehensive-guide-to-deploying-vllm-on-gke",
        
          title: "Comprehensive Guide to Deploying vLLM on GKE",
        
        description: "A production guide for deploying vLLM on GKE with GPU and TPU strategies",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/deploy-vllm/";
          
        },
      },{id: "post-guide-to-deploy-ray-cluster-on-gke",
        
          title: "Guide to deploy Ray Cluster on GKE",
        
        description: "A step-by-step production guide for Ray Cluster deployment distributed ML and LLM workloads",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/deploy-ray/";
          
        },
      },{id: "books-hồi-ký-năng-khiếu",
          title: 'Hồi Ký Năng Khiếu',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/hoi_ky_nang_khieu/";
            },},{id: "books-designing-data-intensive-applications",
          title: 'Designing Data-Intensive Applications',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/designing_data_intensive_applications/";
            },},{id: "books-introduction-to-machine-learning-systems",
          title: 'Introduction to Machine Learning Systems',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ml_systems/";
            },},{id: "books-machine-learning-system-design-interview",
          title: 'Machine Learning System Design Interview',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ml_sys_design_interview/";
            },},{id: "books-inference-engineering",
          title: 'Inference Engineering',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/inference_engineering/";
            },},{id: "news-i-start-my-internship-at-adobe-sparkles-smile",
          title: 'I start my internship at Adobe! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-disclaimer-this-post-is-for-educational-purposes-all-compensation-numbers-are-based-on-publicly-available-data-e-g-levels-fyi-glassdoor-and-may-not-reflect-my-actual-offers-i-carefully-evaluated-both-opportunities-across-compensation-career-growth-and-visa-considerations-adobe-as-machine-learning-engineer-level-p201-working-on-ai-agent-chatbot-or-google-as-software-engineer-machine-learning-level-l31-working-on-recommendation-system-ranking-i-evaluated-offers-across-compensation-short-term-vs-long-term-work-alignment-recsys-vs-ai-agent-learning-opportunities-visa-immigration-constraints-long-term-career-trajectory-side-by-side-comparison-total-compensation-tc-overview-on-paper-the-adobe-offer-carried-a-higher-annual-tc-approx-12-15-higher-than-google-driven-almost-entirely-by-a-significantly-larger-equity-grant-google-tc-207k-year-according-to-levels-fyi-google-software-engineer-salaries-adobe-tc-235k-year-according-to-levels-fyi-adobe-machine-learning-engineer-salaries-refresher-said-to-be-for-top-30-50-eng-according-to-blind-offer-evaluation-adobe-mle-3-vs-google-sde-l4-component-google-market-range-adobe-market-range-delta-base-salary-155k-165k-155k-165k-comparable-annual-equity-35k-year-60k-year-adobe-70-target-bonus-15-10-google-5-sign-on-standard-20k-standard-20k-neutral-side-note-at-high-level-like-google-l5-and-adobe-p40-tc-seems-to-similar-blind-google-l5-vs-adobe-p40-mle-offer-comparison-the-vesting-factor-a-critical-part-of-my-decision-was-the-vesting-schedule-google-uses-a-front-loaded-model-38-32-20-10-which-maximizes-liquidity-in-the-first-two-years-adobe-follows-a-standard-linear-model-25-per-year-while-adobe-s-total-equity-value-was-higher-google-s-front-loading-nearly-closed-the-gap-in-take-home-cash-during-the-first-24-months-benefits-category-google-full-details-adobe-full-details-meals-breakfast-lunch-free-dinner-free-snacks-free-breakfast-lunch-subsidized-8-meal-dinner-no-snacks-free-on-site-gym-fitness-classes-clinic-laundry-gym-fitness-classes-pto-20-days-unlimited-roth-mega-backdoor-roth-n-a-401k-9-750-50-match-up-to-19-500-3-600-50-match-on-first-6-of-base-salary-roth-401k-yes-yes-hsa2-1-000-year-800-year-fsa3-yes-yes-espp4-no-yes-employee-discount-5-off-100-off-student-support-student-loan-repayment-plan-match-100-of-student-loan-up-to-a-2-500-annual-cap-tuition-reimbursement-10k-year-table-google-vs-adobe-side-by-side-important-perks-h1b-visa-uscis-s-fy-2027-h-1b-cap-initial-registration-period-opens-on-march-4-county-level-salary-san-mateo-ca-i-136k-ii-162k-iii-188k-iv-214k-santa-clara-ca-i-149k-ii-188k-iii-226k-iv-265k-table-of-h1b-wage-levels5-i-got-base-salary-for-both-companies-satisfy-google-san-mateo-county-wage-level-2-visualization-adobe-santa-clara-county-wage-level-1-visualization-career-goal-i-prefer-and-want-to-focus-on-either-model-training-inference-serving-or-recommendation-system-final-decision-i-chose-google-youtube-recommendations-for-3-main-reasons-work-alignment-i-want-to-work-on-recommendation-systems-and-large-scale-ml-which-directly-matches-youtube-learning-amp-amp-growth-youtube-s-recsys-operates-at-massive-scale-with-strong-ml-infrastructure-and-experimentation-culture-long-term-career-my-goal-is-to-move-into-llm-training-inference-or-large-scale-ml-systems-and-google-provides-a-strong-foundation-for-that-path-what-i-learned-tc-is-not-everything-learning-trajectory-matters-more-early-career-rsu-vesting-schedule-significantly-affects-short-term-income-visa-constraints-h1b-wage-level-can-influence-company-choice-team-and-project-alignment-outweigh-compensation-differences-see-levels-fyi-s-level-comparison-between-google-vs-adobe-vs-microsoft-amp-8617-amp-8617-2-hsa-health-savings-account-amp-8617-fsa-flexible-spending-account-amp-8617-espp-employee-stock-purchase-program-amp-8617-h1b-wage-levels-as-of-march-2026-amp-8617",
          title: 'Disclaimer: This post is for educational purposes. All compensation numbers are based on...',
          description: "",
          section: "News",},{id: "photos-london-2022",
          title: 'London 2022',
          description: "Afternoon tea and Oxford Street in London.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_2022_london/";
            },},{id: "photos-gettysburg",
          title: 'Gettysburg',
          description: "Winter adventures, snowboarding, and campus life at Gettysburg.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_2023_gburg/";
            },},{id: "photos-saigon-2024",
          title: 'Saigon 2024',
          description: "Cà phê, vỏ chai, and street life in Saigon.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_2024_saigon/";
            },},{id: "photos-my-2024",
          title: 'My 2024',
          description: "A snapshot of the year.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_2024_lookback/";
            },},{id: "photos-philly-2024-25",
          title: 'Philly 2024–25',
          description: "Matcha, SHPE BBQ, and fun in Philadelphia.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_2025_philly/";
            },},{id: "photos-nyc-2025",
          title: 'NYC 2025',
          description: "New York bagels and pizza.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_2025_newyork/";
            },},{id: "photos-adobe-amp-west-coast",
          title: 'Adobe &amp;amp; West Coast',
          description: "Office life, San Jose, and Seattle July 4th.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_2025_summer/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%71%75%61%6E%68%6E%32%33%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=yP-xEqEAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/quanhn232", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/quanhn232", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
