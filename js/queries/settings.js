import { getLinkQuery } from "./utilities";
import { getImageQuery } from "./utilities";
import { getContentQuery } from "./utilities";
const contentQuery = getContentQuery();
const linkQuery = getLinkQuery();
const imageQuery = getImageQuery();

export const headerQuery = `{
  "logo_nav": logo${imageQuery},
  "navbar_items": navbar_items[]${linkQuery},
}`;

export const footerQuery = `{
  "footer_logo": footer_logo${imageQuery},
  "copyright": copyright,
  "footer_items": footer_items[]${linkQuery},
}`;

export const ctaQuery = `{
  cta_title,
  cta_tagline,
  "cta_button": cta_button${linkQuery},
}`;

export const errorQuery = `{
  terra_form${imageQuery},
  title,
  subtitle,
  button${linkQuery},
}`;

export const navQuery = `{
  sidebar_title,
  sidebar_tagline[]${contentQuery},
}`;

export const frameworkQuery = `{
  version,
}`;


export const allComponentsQuery =  `{
  'items': *[_type == 'components' && layout_components.is_parent == true] | order(title asc){
      title,
      _id,
      _key,
      slug,
      template,
      'children': *[_type == 'components' && parent_component == ^.slug.current] | order(title asc){
        title,
        slug,
      },
  },
}`;