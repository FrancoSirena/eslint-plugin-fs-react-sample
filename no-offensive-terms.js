module.exports = {
  meta: {
    docs: {
      description:
        "Use terms like `not allowed` or `allowed` to represent safe and unsafe values.",
      category: "Errors",
      recommended: false,
    },
    messages: {
      avoidName: "Avoid using variables containing '{{ name }}' word",
    },
    schema: [],
  },
  create: context => ({
    Identifier(node) {
      if (node.name.match(/white[-_]?l/i)) {
        context.report({
          node,
          messageId: "avoidName",
          data: {
            name: node.name,
          },
        })
      } else if (node.name.match(/black[-_]?l/i)) {
        context.report({
          node,
          messageId: "avoidName",
          data: {
            name: node.name,
          },
        })
      }
    },
  }),
}
