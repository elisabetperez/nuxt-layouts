import { getLinkQuery } from "./utilities";
import { getImageQuery } from "./utilities";
import { getContentQuery } from "./utilities";
const linkQuery = getLinkQuery();
const imageQuery = getImageQuery();
const contentQuery = getContentQuery();

export const propertiesQuery = `{
  'updated': _updatedAt,
  layout_properties {
    'hero_title': hero_title,
    'hero_description': hero_description,
    'section': sections[]{
      'title': section_title,
      'button': show_button,
      'content': section_content[]${contentQuery}
    },
  }
}`;
