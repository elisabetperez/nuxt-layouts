import { g as getImageQuery, f as getContentQuery } from '../server.mjs';

const imageQuery = getImageQuery();
const contentQuery = getContentQuery();
const componentsQuery = `{
  'updated': _updatedAt,
  'title': title,
  layout_components {
    'hero_title': hero_title,
    'hero_description': hero_description,
    'description': description[]${contentQuery},
    'section': sections[]{
      'title': section_title,
      'button': show_button,
      'content': section_content[]${contentQuery}
    },
  }
}`;
const parentComponentQuery = `{
  'updated': _updatedAt,
  'title': title,
  layout_components {
    hero_image${imageQuery},
    hero_slot[]${contentQuery},
    loop_title,
  }
}`;

export { componentsQuery as c, parentComponentQuery as p };
//# sourceMappingURL=components-8G0zcXOV.mjs.map
