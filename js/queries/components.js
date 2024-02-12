import { getLinkQuery } from "./utilities";
import { getImageQuery } from "./utilities";
import { getContentQuery } from "./utilities";
const linkQuery = getLinkQuery();
const imageQuery = getImageQuery();
const contentQuery = getContentQuery();

export const componentsQuery = `{
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

export const parentComponentQuery = (payload) => {
  return `{
    'updated': _updatedAt,
    'title': title,
    layout_components {
      hero_title,
      hero_image${imageQuery},
      hero_slot[]${contentQuery}, 
      loop_title,
      'children': *[_type == 'components' && layout_components.is_parent == false && parent_component == "${payload.slug}"] | order(title asc){
        title,
        slug,
        layout_components {
          component_image${imageQuery},
        }
      },
    }
  }`;
};

