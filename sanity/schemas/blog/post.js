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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
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
