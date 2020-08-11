export default {
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    { type: "block" },
    { type: "blockImage" },
    {
      type: "code",
      options: { theme: "terminal", withFilename: true },
    },
  ],
};
