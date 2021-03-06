module.exports = {
  siteMetadata: {
    title: 'What Motivates Learning',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /vectors/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-145157132-1",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 0,
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     cookieDomain: "https://authenticaysh.netlify.com/",
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `whatmotivateslearning.org`,
        short_name: `wml`,
        start_url: `/`,
        background_color: `#f1f1f1`,
        theme_color: `#c15700`,
        display: `minimal_ui`,
        icon: `src/images/icon.png`
      }
    },
  ],
}
