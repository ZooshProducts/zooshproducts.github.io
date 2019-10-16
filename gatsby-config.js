/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    exclude: /test/, // See below to configure properly
                },
            },
        },
    ],
}
