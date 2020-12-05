require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/Dave's-Public-Notes`,
        roamUrl: `https://roamresearch.com/#/app/DaveLuPublic`,
        roamEmail: process.env.ROAM_RESEARCH_EMAIL,
        roamPassword: process.env.ROAM_RESEARCH_PASSWORD,
      },
    },
  ],
  siteMetadata: {
    title: `Dave's Public Notes`,
    description: `An assortment of half-baked ideas and thoughts`,
  },
}