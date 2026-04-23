export default{
    name: 'settings',
    type: 'document',
    title:'Settings',
    fieldsets:[{
        name:'color',
        title:'Color',
        options: { columns: 3 }},
    ],
    groups: [
        {
          name: 'meta',
          title: 'Meta',
        },
      ],
    fields:[
        {
            type:"object",
            name:"cover",
            title:'Cover',
            fields:[
                
                    {
                        name:"image",
                        type:'image',
                        title:"file"
                    },
                    {
                        name:"video",
                        type:'mux.video',
                        title:"Video"
                    }
                
            ]
        },
        {
            name:'feat',
            type:'array',
            title:'Featured Products',
            of: [{ to: [{ type: "product" }], type: "reference" }],
        
          
        },
        {
            name:'footerLogo',
            type:'array',
            title:'Footer Logo',
            of: [{name:'single',type:'object',fields:[{name:'image',type:'image',title:'Image'},{name:'link',type:'string',title:'Link'}]  }],
        
          
        },
        {name:'customerService',type:"string",title:"Customer Service Email"},
        {name:'serviceNote',type:"array",title:"Customer Service Note",of:[{type:'block'}]},
        {name:'marquee',type:'object',title:'Marquee',fields:[{name:'text',type:'string',title:'Text'},{name:'link',type:'string',title:'Link'},{name:'external',type:'boolean',title:'Boolean'}]},
        
    ],
    preview: {
        select: {
            title: 'Settings',
        },
        prepare() {
            return {
                title: 'Settings',
            }
        }
    }
}