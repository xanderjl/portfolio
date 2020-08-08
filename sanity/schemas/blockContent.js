export default {
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    { type: "block" },
    { type: "blockImage" },
    {
      type: "code",
      options: { language: "js", theme: "terminal", withFilename: true },
    },
  ],
};
