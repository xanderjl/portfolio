import { RiFilePaper2Line } from "react-icons/ri";

export default {
  name: "post",
  title: "Posts",
  type: "document",
  icon: RiFilePaper2Line,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishDate",
      title: "Publish Date",
      type: "date",
      options: {
        dateFormat: "MM/DD/YYYY",
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
