// Centralized data for the entire application
export const siteData = {
  // Navigation data
  navigation: {
    logo: {
      src: "/images/Logo.png",
      alt: "Papermoon Puppet Theatre Logo",
      width: 85,
      height: 50
    },
    menuItems: [
      { label: "Home", key: "home" },
      { label: "About Us", key: "about" },
      { label: "Performance", key: "performance" },
      {
        label: "Programs",
        key: "programs",
        hasDropdown: true,
        subItems: [
          { label: "Puppet Party", key: "Puppet Party" },
          { label: "Workshops", key: "workshops" },
          { label: "Educational Tours", key: "educational-tours" },
        ]
      },
    ]
  },

  // About Us page data
  aboutUs: {
    hero: {
      title: "The Puppet Theatre 2025",
      subtitle: "Bringing Imagination to Life Through Puppetry",
      backgroundImage: "/images/About.png"
    },
    mission: {
      title: "Our Mission",
      content: "Papermoon Puppet Theatre was founded in April 2006 in Yogyakarta, Indonesia by Co-Artistic Director Maria Tri Sulistyani (Ria). She has since nurtured, developed, and expanded the company together with Co-Artistic Director Iwan Effendi, a visual artist and Papermoon's puppet designer. Among other close collaborators, we work with a collective of puppeteers, which includes Anton Fajri, Pambo Priyojati, Beni Sanjaya, and Hardiansyah Yoga."
    },
    latestProjects: [
      {
        id: 1,
        images: [
          { src: "/images/project-1.png", alt: "Project 1" },
          { src: "/images/project-2.png", alt: "Project 2" },
          { src: "/images/project-3.png", alt: "Project 3" }


        ]
      },
      {
        id: 2,
        images: [
          { src: "/images/project-4.png", alt: "Project 4" },
          { src: "/images/project-2.png", alt: "Project 5" },
          { src: "/images/project-3.png", alt: "Project 6" }
        ]
      }
    ],
    awards: [
      {
        id: 1,
        image: "/images/award-1.png",
        title: "Awardee Anugerah Kebudayaan Kemendikbudristek",
        description: "2024 - Pioneer category"
      },
      {
        id: 2,
        image: "/images/award-2.png",
        title: "Theatre Philadelphia's Barrymore Award",
        description: "2024 - Ramayana Project with EgoPo Classic & Kalanari Theater, Outstanding Outdoor Performance"
      },
      {
        id: 3,
        image: "/images/award-3.png",
        title: "Awardee Anugerah Kebudayaan Gubernur DI Yogyakarta",
        description: "2018 - Performers and Conservationists of the Arts Category"
      }
    ],
    pressQuotes: [
      {
        id: 1,
        image: "/images/press-1.png",
        source: "The New York Times, USA, 2016",
        quote: "Papermoon Puppet Theatre has become a staple of the global arts festival circuit, with enigmatic, modernist puppets that tell stories from myth to the birth of modern Indonesia. … Words are few for these puppets with moon-shaped faces who, like mimes, express everything in evocative, poignant gestures."
      },
      {
        id: 2,
        image: "/images/press-2.png",
        source: "The Guardian, UK, 2018",
        quote: "A mesmerizing blend of traditional Indonesian storytelling and contemporary theatrical innovation. Papermoon's performances transcend language barriers through their powerful visual narratives."
      },
      {
        id: 3,
        image: "/images/press-3.png",
        source: "Arts Review Magazine, 2020",
        quote: "The company's ability to weave complex social themes into accessible puppet theater makes them one of the most important cultural ambassadors of our time."
      }
    ]
  },

  // Footer data
  footer: {
    description: "Papermoon Puppet Theatre was founded in April 2006 in Yogyakarta, Indonesia by Co-Artistic Director Maria Tri Sulistyani (Ria).",
    copyright: "© 2025 PAPERMOON PUPPET THEATRE",
    socialMedia: [
    
      {
        icon: "linkedin",
        alt: "LinkedIn",
        customIcon: false,
        url: "https://www.linkedin.com/in/ria-papermoon-26b44362/?originalSubdomain=id"
      },
      {
        icon: "instagram",
        alt: "Instagram",
        customIcon: false,
        url: "https://www.https://www.instagram.com/papermoonpuppet/?hl=en.com/papermoonpuppet/"
      },
      {
        icon: "twitter",
        alt: "Twitter",
        customIcon: false,
        url: "https://x.com/papermoonpuppet"
      },
    ]
  }
};