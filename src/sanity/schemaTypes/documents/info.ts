export default{
    name: 'info',
    type: 'document',
    title:'Infomation',
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
            name:'sec',
            type:'color',
            title:'Secondary',
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

        {name:'specs',
            title:'Specs',
            type:'array',
            of:[{type:'object',
                fieldsets:[{
                    name:'color',
                    title:'Color',
                    options: { columns: 3 }},
                ],
                fields:[
                    {type:'string',
                        name:'title',
                        title:'Title'},
                        {name:'copy',type:'array',
                            title:'Copy',
                            of:[{type:"block"}]
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
                            name:'sec',
                            type:'color',
                            title:'Secondary',
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
                ]
            }]
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
            title: 'Info',
        },
        prepare() {
            return {
                title: 'Info',
            }
        }
    }
}