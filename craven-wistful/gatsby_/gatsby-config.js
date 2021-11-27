module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    directories: [
      {
        name: "Company",
        children: [
          {
            name: "About",
            endpoint: "/about"
          },
          {
            name: "Testimonies",
            endpoint: "/testimonies"
          },
          {
            name: "Leadership",
            endpoint: "/leadership"
          },
          {
            name: "Contact Us",
            endpoint: "/contact"
          },
        ]
      },
      {
        name: "Services",
        children: [
          {
            name: "Contractor1",
            endpoint: "/contractor1"
          },
          {
            name: "Contractor2",
            endpoint: "/contractor2"
          },
          {
            name: "API1",
            endpoint: "/api1"
          },
          {
            name: "API2",
            endpoint: "/api2"
          },
        ]
      },
      {
        name: "Account",
        children: [
          {
            name: "Free Trial!",
            endpoint: "/signup"
          },
          {
            name: "Log in",
            endpoint: "/login"
          },
        ]
      }
    ],
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-theme-material-ui`
  ],
}
