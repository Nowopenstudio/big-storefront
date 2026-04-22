



import { SchemaPluginOptions } from "sanity"
import productSchema from "./documents/product"
import about from "./documents/about"
import info from "./documents/info"
import settings from "./documents/settings"

export const schema: SchemaPluginOptions = {
  types: [productSchema, about, info, settings],
  templates: (templates) => templates.filter(
    (template) => template.schemaType !== "product"
  ),
}
