import { AiFillFolderOpen } from "react-icons/ai";

export default {
  name: "projects",
  title: "Projects",
  type: "document",
  icon: AiFillFolderOpen,
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
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectUrl",
      title: "Project URL",
      type: "url",
    },
    {
      name: "repoUrl",
      title: "Repo URL",
      type: "url",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: [{ type: "technology" }] }],
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
  ],
};
