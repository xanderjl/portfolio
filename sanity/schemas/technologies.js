import { FaReact } from "react-icons/fa";

export default {
  name: "technology",
  title: "Technology",
  type: "document",
  icon: FaReact,
  fields: [
    {
      name: "icon",
      title: "Icon",
      type: "image",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
};
