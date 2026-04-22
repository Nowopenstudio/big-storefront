export default{
    name: 'about',
    type: 'document',
    title:'About',
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
            name:'copy',
            type:'array',
            title:'Copy',
            of:[{type:"block"}]
        },
        {
            name:'prime',
            type:'color',
            title:'Primary',
            fieldset: 'color',
            colorList: [
                '#ee473a',
                '#2364ed',
                '#2aae5a',
                '#ffc801',
                '#fd8026',
                '#80acd6',
                '#ffffff',
                '#e7e7e7',
                '#242424',
                '#67e7e5',
                '#fe97db',
                '#000000'
              ]
        },
        {
            name:'sec',
            type:'color',
            title:'Secondary',
            fieldset: 'color',
            colorList: [
                '#ee473a',
                '#2364ed',
                '#2aae5a',
                '#ffc801',
                '#fd8026',
                '#80acd6',
                '#ffffff',
                '#e7e7e7',
                '#242424',
                '#67e7e5',
                '#fe97db',
                '#000000'
              ]
        },
        {
            name:"meta",
            title:'Metadata',
            type:"object",
            group:"meta",
            fields:[
                {
                  type:'string',
                  title:'Title',
                  name:'title',
                },
                {
                    type:'text',
                    title:'Description',
                    name:'description',
                },
                {
                    type:'string',
                    title:'Keywords',
                    name:'keywords',
                },
                {
                    type:'image',
                    name:'image',
                    title:'image'
    
                }
            ]
          }
    
    


     
     
    ],
    preview: {
        select: {
            title: 'About',
        },
        prepare() {
            return {
                title: 'About',
            }
        }
    }
}