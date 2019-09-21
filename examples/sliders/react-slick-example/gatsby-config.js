module.exports = {
  plugins: [
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "@affectionatedoor/gatsby-theme-ui"
  ]
};
