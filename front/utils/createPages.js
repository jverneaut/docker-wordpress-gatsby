const path = require('path');

const pageTemplate = require.resolve('../src/pages/page.js');

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      wpgraphql {
        pages {
          nodes {
            slug
            pageId
          }
        }
      }
    }
  `);

  const { pages } = result.data.wpgraphql;
  pages.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: pageTemplate,
      context: {
        pageId: node.pageId,
      },
    });
  });
};
