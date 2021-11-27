module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    directories: [
      {
        name: "Company",
        endpoint: "/company/",
        children: [
          {
            name: "About",
            endpoint: "/company/about"
          },
          {
            name: "Testimonies",
            endpoint: "/company/testimonies"
          },
          {
            name: "Leadership",
            endpoint: "/company/leadership"
          }
        ]
      },
      {
        name: "Services",
        endpoint: "/services/",
        children: [
          {
            name: "Contractor1",
            endpoint: "/services/contractor1"
          },
          {
            name: "Contractor2",
            endpoint: "/services/contractor2"
          },
          {
            name: "API1",
            endpoint: "/services/api1"
          },
          {
            name: "API2",
            endpoint: "/services/api2"
          },
        ]
      },
      {
        name: "Account",
        endpoint: "/account/",
        children: [
          {
            name: "Free Trial!",
            endpoint: "/account/signup"
          },
          {
            name: "Log in",
            endpoint: "/account/login"
          },
        ]
      },
      {
        name: "Contact Us",
        endpoint: "/contact",
        children: [
          {
            name: "Careers",
            endpoint: "/contact/careers"
          },
          {
            name: "Location",
            endpoint: "/contact/location"
          },
          {
            name: "Customer Support",
            endpoint: "/contact/support"
          }
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
