export default {
  name: "blockTech",
  title: "Technologies",
  type: "object",
  fields: [
    {
      name: "array",
      title: "Tech Array",
      type: "array",
      of: [{ type: "reference", to: { type: "technology" } }],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
