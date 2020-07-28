import S from "@sanity/desk-tool/structure-builder";
import { FaPencilAlt } from "react-icons/fa";

const hiddenDocTypes = (listItem) => !["blog"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Blog")
        .icon(FaPencilAlt)
        .child(S.editor().id("blog").schemaType("blog").documentId("blog")),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
