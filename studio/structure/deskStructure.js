import S from "@sanity/desk-tool/structure-builder";
import { AiOutlineSetting } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

const hiddenDocTypes = (listItem) =>
  !["settings", "blog", "uses"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .icon(AiOutlineSetting)
        .child(
          S.editor()
            .id("settings")
            .schemaType("settings")
            .documentId("settings")
        ),
      S.listItem()
        .title("Blog")
        .icon(FaPencilAlt)
        .child(S.editor().id("blog").schemaType("blog").documentId("blog")),
      S.listItem()
        .title("Uses")
        .icon(GrTechnology)
        .child(S.editor().id("uses").schemaType("uses").documentId("uses")),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
