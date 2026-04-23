import { ComposeIcon } from "@sanity/icons"
import { DocumentDefinition } from "sanity"

const productSchema: DocumentDefinition = {
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name:'prime',
      type:'color',
      title:'Primary',
      options:{
      colorList: [
          {hex:'#ee473a'},
          {hex:'#2364ed'},
          {hex:'#2aae5a'},
          {hex:'#ffc801'},
          {hex:'#fd8026'},
          {hex:'#80acd6'},
          {hex:'#ffffff'},
          {hex:'#e7e7e7'},
          {hex:'#242424'},
          {hex:'#67e7e5'},
          {hex:'#fe97db'},
          {hex:'#000000'}
        ]}
  },
    {
      group: "content",
      name: "specs",
      of: [
        {
          fields: [
            { name: "lang", title: "Language", type: "string" },
            { name: "title", title: "Title", type: "string" },
            {
              name: "content",
              rows: 3,
              title: "Content",
              type: "text",
            },
          ],
          name: "spec",
          type: "object",
        },
      ],
      type: "array",
    },
    {
      fields: [
        { name: "title", title: "Title", type: "string" },
        {
          name: "products",
          of: [{ to: [{ type: "product" }], type: "reference" }],
          title: "Addons",
          type: "array",
          validation: (Rule) => Rule.max(3),
        },
      ],
      name: "addons",
      type: "object",
    },

  ],
  name: "product",
  preview: {
    select: {
      title: "title",
    },
   
  },
  title: "Product Page",
  type: "document",
  groups: [{
    default: true,
    // @ts-ignore
    icon: ComposeIcon,
    name: "content",
    title: "Content",
  }],
}

export default productSchema