const config = require('./config');

const dotenv = require('dotenv');
dotenv.config();

const { githubApiQuery } = require('./github-api')

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-github',
            options: {
              headers: {
                Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
              },
              queries: [
                `{ viewer {                 
                  pinnedItems(first: 6, types: REPOSITORY){
                   nodes {
                     ... on Repository {
                    id                       
                    name
                    url
                    description
                    homepageUrl
                  }
                 }
                }}
              }`,
           ],
        },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`
  ],
};
