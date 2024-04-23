import chronicles from "./assets/images/chronicles.png";
import lookup from "./assets/images/lookup.png";
import slack from "./assets/images/slack.png";
import spotify from "./assets/images/spotify.png";

export const SITE_TITLE = "Alexander Constantine Bartholomew";
export const SITE_DESCRIPTION =
  "Alex Smith is a web developer and designer based in the UK. He specialises in building websites and web applications using modern web technologies.";
export const SITE_URL = "https://bandyliuk.com/";
export const SITE_AUTHOR = "Alex Smith";
export const FAVICON = "/favicon.svg";

export const MENU_ITEMS = [
  { title: "Work", link: "/work" },
  { title: "Dev", link: "/dev" },
  { title: "Blog", link: "/blog" },
  { title: "Products", link: "/products" },
  { title: "Resume", link: "/resume" },
  { title: "Podcast", link: "/podcast" },
  // { title: "Press", link: "/podcast" },
  // { title: "Bookshelf", link: "/podcast" },
];
export const SOCIAL_LINKS = [
  { title: "Facebook", link: "" },
  { title: "Instagram", link: "" },
  { title: "Whatsapp", link: "" },
  { title: "Snapchat", link: "" },
  // { title: "Twitter", link: "https://twitter.com/alexsmith" },
  // { title: "TikTok", link: "" },
  // { title: "Pinterest", link: "" },
  // { title: "Reddit", link: "" },
  // { title: "Flickr", link: "" },
  // { title: "Quora", link: "" },
];

export const INTRO_SETTINGS = {
  title: "Who I Am",
  description:
    "Alex Smith was born on a crisp autumn morning in the bustling city of Chicago. From a young age, Alex displayed an insatiable curiosity about the world around him. Growing up in a multicultural neighborhood, he was exposed to diverse perspectives and cultures, which sparked his passion for understanding people and their stories.",
};

export const THINGS_SETTINGS = {
  title: "Things",
  subtitle: "Platforms",
  cards: [
    {
      title:
        "Chronicles of the Mystic Realms: Quest for the Enchanted Crystal Amulet",
      desc: "Players embark on a thrilling journey as they assume the role of a courageous hero",
      platforms: "Android, wearOS, iOS, watchOS, Nintendo Switch, Web",
      image: chronicles,
    },
    {
      title: "Spotify",
      desc: "Discover new music",
      platforms: "iOS, iPadOS",
      image: spotify,
    },
    {
      title: "Slack",
      desc: "Business Communication for Teams",
      platforms: "iOS, iPadOS",
      image: slack,
    },
    {
      title: "LookUp",
      desc: "English dictionary",
      platforms: "iOS",
      image: lookup,
    },
  ],
};

export const MEDIA_SETTINGS = {
  title: "Media Mentions",
  cards: [
    {
      title: "TechCrunch",
      subtitle:
        "Slack revolutionizes team communication with its seamless interface and powerful features",
      link: "https://techcrunch.com/2021/07/29/the-future-of-work-is-remote/",
    },
    {
      title: "Wired",
      subtitle:
        "With Slack, communication barriers dissolve, and productivity soars",
      link: "https://techcrunch.com/2021/07/29/the-future-of-work-is-remote/",
    },
    {
      title: "The Verge",
      subtitle:
        "Slack is more than just a messaging app; it's a hub for teamwork",
      link: "https://techcrunch.com/2021/07/29/the-future-of-work-is-remote/",
    },
    {
      title: "CNET",
      subtitle: "Say goodbye to endless email threads and hello to Slack",
      link: "https://techcrunch.com/2021/07/29/the-future-of-work-is-remote/",
    },
    {
      title: "Mashable",
      subtitle: "Slack is the ultimate productivity booster",
      link: "https://techcrunch.com/2021/07/29/the-future-of-work-is-remote/",
    },
    {
      title: "Gizmodo",
      subtitle:
        "Slack transforms how teams work together, offering a centralized platform for communication and collaboration",
      link: "https://techcrunch.com/2021/07/29/the-future-of-work-is-remote/",
    },
  ],
};

export const ARCHIVED_SETTINGS = {
  title: "Archived Projects",
  subtitle: "Period",
  cards: [
    {
      title:
        "Shadowed Realms: Chronicles of the Eternal Conflict - A Dark Odyssey Across Boundless Worlds, Where Destiny Shapes the Fate of All",
      period: "March 2016 – April 2017  | May 2018 – December 2019",
      link: "#",
    },
    {
      title: "Shadowed Realms",
      period: "2016 - 2017",
      link: "#",
    },
    {
      title: "Numerics",
      period: "2018 - 2019",
      link: "#",
    },
    {
      title: "Musixmatch Lyrics Finder",
      period: "2019 - 2020",
      link: "#",
    },
  ],
};

export const SELECTED_ARTICLES_SETTINGS = {
  title: "Selected Articles",
  post_count: 6,
};

export const VISITED_COUNTRIES_SETTINGS = {
  title: "Visited Countries",
  subtitle: "Cities",
  countries: [
    {
      name: "🇧🇪 Belgium",
      cities: [
        { name: "Brussels", link: "#" },
        { name: "Bruges", link: "" },
        { name: "Antwerp", link: "#" },
        { name: "Liege", link: "#" },
        { name: "Ghent", link: "#" },
      ],
    },
    {
      name: "🇫🇷 France",
      cities: [
        { name: "Paris", link: "#" },
        { name: "Lille", link: "" },
      ],
    },
    {
      name: "🇸🇹 Democratic Republic of São Tomé and Príncipe",
      cities: [
        { name: "São Tomé", link: "#" },
        { name: "Santo António", link: "" },
        { name: "Neves", link: "" },
        { name: "Santana", link: "" },
        { name: "Angolares", link: "" },
        { name: "Santa Cruz", link: "#" },
        { name: "Trindade", link: "" },
        { name: "São João dos Angolares", link: "" },
        { name: "Ribeira Afonso", link: "" },
        { name: "Santa Catarina", link: "" },
        { name: "Porto Alegre", link: "#" },
        { name: "Pantufo", link: "#" },
        { name: "São João dos Angolares", link: "" },
        { name: "Monte Café", link: "#" },
        { name: "Praia Cruz", link: "#" },
        { name: "Bombom", link: "#" },
        { name: "Guadalupe", link: "" },
        { name: "Belém", link: "#" },
        { name: "Ponta Figo", link: "#" },
        { name: "Nova Estrela", link: "#" },
      ],
    },
  ],
};

export const FAVORITES_SETTINGS = {
  title: "Favorites",
  columns: [
    {
      title: "Artists",
      items: [
        { name: "Red Hot Chilli Peppers", link: "#" },
        { name: "Ed Sheeran", link: "#" },
        { name: "Drake", link: "#" },
        { name: "Adele", link: "#" },
        { name: "Coldplay", link: "#" },
        { name: "The Weeknd", link: "#" },
        { name: "Whispers of the Ancient", link: "#" },
        { name: "Forest's Mystical Choir", link: "#" },
      ],
    },
    {
      title: "Movies and shows",
      items: [
        { name: "Friends", link: "#" },
        { name: "Breaking Bad", link: "#" },
        { name: "The Crown", link: "#" },
        { name: "Game of Thrones", link: "#" },
        { name: "The Office", link: "#" },
      ],
    },
    {
      title: "Games",
      items: [
        { name: "Spider-Man", link: "#" },
        { name: "The Last of Us", link: "#" },
        { name: "God of War", link: "#" },
        { name: "Red Dead Redemption", link: "#" },
      ],
    },
    {
      title: "Books",
      items: [
        { name: "The Great Gatsby", link: "#" },
        { name: "Harry Potter", link: "#" },
        { name: "To Kill a Mockingbird", link: "#" },
        { name: "1984", link: "#" },
      ],
    },
    {
      title: "Sports",
      items: [
        { name: "Football", link: "#" },
        { name: "UFC", link: "#" },
        { name: "F1", link: "#" },
      ],
    },
  ],
};

export const DAILY_SETTINGS = {
  title: "Daily",
  columns: [
    {
      title: "Devices",
      items: [
        { name: "MacBook M3 Pro", link: "#" },
        { name: "iPhone 15 Pro", link: "#" },
        { name: "Apple Watch 9", link: "#" },
        { name: "AirPods Pro 2", link: "#" },
      ],
    },
    {
      title: "Products",
      items: [
        { name: "Figma", link: "#" },
        { name: "Xcode", link: "#" },
        { name: "Obsidian", link: "#" },
        { name: "GitKraken", link: "#" },
      ],
    },
    {
      title: "Services",
      items: [
        { name: "Behance", link: "#" },
        { name: "Dribbble", link: "#" },
        { name: "Telegram", link: "#" },
      ],
    },
    {
      title: "Mobile Games",
      items: [
        { name: "COD Mobile", link: "#" },
        { name: "Clash Royale", link: "#" },
      ],
    },
    {
      title: "Clothes",
      items: [
        { name: "Uniqlo", link: "#" },
        { name: "Adidas", link: "#" },
        { name: "The North Face", link: "#" },
      ],
    },
  ],
};

export const TAGS = {
  pinned: [
    { name: "React", link: "/tags/React", slug: "swiftui" },
    { name: "Node.js", link: "#", slug: "swiftui" },
    { name: "JavaScript", link: "#", slug: "swiftui" },
    { name: "TypeScript", link: "#", slug: "swiftui" },
    { name: "GraphQL", link: "#", slug: "swiftui" },
    { name: "Gatsby", link: "#", slug: "swiftui" },
    { name: "Next.js", link: "#", slug: "swiftui" },
    { name: "Tailwind CSS", link: "#", slug: "swiftui" },
    { name: "Figma", link: "#", slug: "swiftui" },
    { name: "Sketch", link: "#", slug: "swiftui" },
  ],

  tags: [
    { name: "AdventureTime", link: "#", slug: "swiftui" },
    { name: "ArtificialIntelligence", link: "#", slug: "swiftui" },
    { name: "Astronomy", link: "#", slug: "swiftui" },
    { name: "Fashion", link: "#", slug: "swiftui" },
    { name: "Fitness", link: "#", slug: "swiftui" },
    { name: "Finance", link: "#", slug: "swiftui" },
    { name: "React", link: "#", slug: "swiftui" },
    { name: "Node.js", link: "#", slug: "swiftui" },
    { name: "JavaScript", link: "#", slug: "swiftui" },
    { name: "TypeScript", link: "#", slug: "swiftui" },
    { name: "GraphQL", link: "#", slug: "swiftui" },
    { name: "Gatsby", link: "#", slug: "swiftui" },
    { name: "Next.js", link: "#", slug: "swiftui" },
    { name: "Tailwind CSS", link: "#", slug: "swiftui" },
    { name: "Figma", link: "#", slug: "swiftui" },
    { name: "Sketch", link: "#", slug: "swiftui" },
    { name: "Swiftui", link: "swiftui", slug: "swiftui" },
  ],
};

export const FAVORITE_ARTICLES = [
  {
    title: "Python",
    articles: [
      { title: "Exploring Python's asyncio", link: "#" },
      { title: "Building RESTful APIs with Flask", link: "#" },
      { title: "Introduction to Data Analysis with pandas", link: "#" },
      { title: "Machine Learning with scikit-learn", link: "#" },
      { title: "Concurrency in Python with multiprocessing", link: "#" },
    ],
  },
  {
    title: "Git",
    articles: [
      {
        title: "Git: Understanding Branching and Merging Strategies",
        link: "#",
      },
      {
        title: "Efficient Collaboration with Git: Best Practices for Teams",
        link: "#",
      },
      {
        title: "Git Workflow Optimization: Tips for Streamlining Development",
        link: "#",
      },
      {
        title: "Mastering Git: Advanced Techniques for Version Control",
        link: "#",
      },
      {
        title: "Git Hooks Demystified: Automating Development Tasks",
        link: "#",
      },
      { title: "Git Rebase vs. Merge: Choosing the Right Approach", link: "#" },
      {
        title:
          "Managing Large Repositories with Git: Strategies for Performance",
        link: "#",
      },
      {
        title: "Git Cherry-Pick: Selectively Applying Changes with Precision",
        link: "#",
      },
      {
        title: "Git Bisect: Finding Bugs Faster with Binary Search",
        link: "#",
      },
      {
        title: "Git Stash: Managing Work-in-Progress Changes Efficiently",
        link: "#",
      },
    ],
  },
  {
    title: "UI/UX",
    articles: [
      {
        title: "The Psychology Behind Color Selection in UI Design",
        link: "#",
      },
      { title: "Effective Techniques for Mobile Navigation Design", link: "#" },
      { title: "Accessibility in UX: Designing for All Users", link: "#" },
      {
        title: "The Impact of Microinteractions on User Experience",
        link: "#",
      },
      {
        title: "Creating Seamless Onboarding Experiences for New Users",
        link: "#",
      },
      { title: "The Role of Prototyping in UX Design Process", link: "#" },
      {
        title: "Designing for Emotional Engagement: The Power of UX",
        link: "#",
      },
      {
        title: "Optimizing UX for E-commerce: Strategies for Conversion",
        link: "#",
      },
      { title: "The Evolution of Voice User Interfaces (VUIs)", link: "#" },
      { title: "Data-Driven Design: Using Analytics to Improve UX", link: "#" },
    ],
  },
];
