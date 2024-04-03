const CONFIG = {
  // profile setting (required)
  profile: {
    name: "j2yes",
    image: "/notion-avatar-1709020630331.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Back-end Developer",
    bio: "I am interested in anything that reduces information asymmetry.",
    email: "j2yess@gmail.com",
    linkedin: "j2yes",
    github: "j2yes",
    instagram: "",
  },
  projects: [
    {
      name: `notion-blog`,
      href: "https://github.com/j2yes/notion-blog",
    },
  ],
  // blog setting (required)
  blog: {
    title: "j2yes blog",
    description: "welcome!!",
  },

  // CONFIG configration (required)
  link: "https://j2yes.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID || "1f354a38ae2a49f7b004fb5339fd0ae1",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
