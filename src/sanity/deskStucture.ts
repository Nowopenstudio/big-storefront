import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list';
export const myStructure = (S:any,context:any) =>
    S.list()
      .title('Content')
      .items([
        S.listItem()
        .title('About')
        .child(S.document().title("About").schemaType('about').documentId('about')),
        S.listItem()
        .title('Info')
        .child(S.document().title("Info").schemaType('info').documentId('info')),
        S.listItem()
        .title('Settings')
        .child(S.document().title("Settings").schemaType('settings').documentId('settings')),
        // orderableDocumentListDeskItem({type: 'shows',title: 'shows', S, context}),
        // orderableDocumentListDeskItem({type: 'ideas',title: 'Ideas', S, context}),
        // orderableDocumentListDeskItem({type: 'recordings',title: 'Recordings', S, context}),

        // // S.listItem()
        // // .title('Homepage')
        // // .child(S.document().title("Homepage").schemaType('homepage').documentId('homepage')),
        // S.listItem()
        //     .title('Info')
        //     .child(S.document().title("Info").schemaType('info').documentId('info')),
        // S.listItem()
        //     .title('Home')
        //     .child(S.document().title("Home").schemaType('home').documentId('home')),
        // S.listItem()
        //     .title('Settings')
        //     .child(S.document().title("Settings").schemaType('settings').documentId('settings')),

        

        
  
          ...S.documentTypeListItems().filter(listItem => !['mux.videoAsset','about','info','settings'].includes(listItem.getId())),
  
        
    
    
  ])