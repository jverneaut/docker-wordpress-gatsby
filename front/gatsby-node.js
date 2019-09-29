const createPages = require(`./utils/createPages`)

exports.createPages = async ({ actions, graphql }) => {
  await createPages({ actions, graphql })
}
