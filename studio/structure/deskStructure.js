import S from "@sanity/desk-tool/structure-builder"
import { AiOutlineSetting } from "react-icons/ai"

const hiddenDocTypes = listItem => !["settings"].includes(listItem.getId())

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
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
