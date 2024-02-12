import { getLinkQuery } from "./utilities";
import { getImageQuery } from "./utilities";
import { getContentQuery } from "./utilities";
const linkQuery = getLinkQuery();
const imageQuery = getImageQuery();
const contentQuery = getContentQuery();

export const queries = (payload) => {
    if (payload.route == 'about' || payload.route == undefined) {
        return `{
            template,
            "modules" : layout_default.modulecustom[]{
                "type": _type,
                _type == "imagebg_button_hero" => {
                    "title": hero_title,
                    "description": hero_description,
                    "button": contentLink${linkQuery}, 
                    "bg_image": hero_bg_image${imageQuery},
                },
                _type == "imagebg_hero" => {
                    "title": hero_title,
                    "bg_image": hero_bg_image${imageQuery},
                },
                _type == "heading" => {
                    "size": size,
                    "bg_color": bg_option,
                    "alignment": alignment,
                    "text": title,
                    "spacing": custom_spacing,
                },
                _type == "button" => {
                    "bg_color": bg_color,
                    "link": contentLink${linkQuery}, 
                    "spacing": custom_spacing,
                },
                _type == "expanding_media" => {
                    "content_type": type, 
                    "image": image${imageQuery}, 
                    "video": video${imageQuery}, 
                    "spacing": custom_spacing,
                },
                _type == "centered_asset" => {
                    "image": asset_image${imageQuery}, 
                    "spacing": custom_spacing,
                },
                _type == "text_asset_marquee" => {
                    "text": marquee_text,
                    "image": asset_image${imageQuery}, 
                    "spacing": custom_spacing,
                },
                _type == "elements_marquee" => {
                    "bg_color": bg_color,
                    "direction": marquee_direction, 
                    "spacing": custom_spacing,
                },
                _type == "photo_marquee" => {
                    "bg_color": bg_color,
                    "direction": marquee_direction, 
                    "photos" : photos[]{'photo': ${imageQuery}},
                    "spacing": custom_spacing,
                },
                _type == "terraforms_text" => {
                    "layout": layout_option,
                    "title": title, 
                    "subtitle" : subtitle,
                    "image" : image${imageQuery},
                    "spacing": custom_spacing,
                },
                _type == "text_button_interactivity_module" => {
                    "layout": layout_option,
                    "title": title, 
                    "content": content[]${contentQuery},
                    "button": contentLink${linkQuery}, 
                    "content_type": interactivity_type,
                    "image": image${imageQuery}, 
                    "video": video${imageQuery}, 
                    "lottie": lottie${imageQuery}, 
                    "spacing": custom_spacing,
                },
                _type == "text_interactivity_module" => {
                    "layout": layout_option,
                    "background": bg_option,
                    "bg_image": bg_image${imageQuery}, 
                    "bg_lottie": bg_lottie${imageQuery}, 
                    "title": title, 
                    "content": content[]${contentQuery},
                    "content_type": interactivity_type,
                    "image": image${imageQuery}, 
                    "video": video${imageQuery}, 
                    "lottie": lottie${imageQuery}, 
                    "legend" : legend_title,
                    "buttons" : button_list[]{
                        'type': button_item_type,
                        'text': button_item_text,
                        'image': button_item_image${imageQuery},
                        'anchor': button_item_image_link, 
                    },
                    "spacing": custom_spacing,
                },
                _type == "card_slider" => {
                    "cards" : card_list[]{
                        'title': card_slider_title,
                        'subtitle': card_slider_subtitle,
                        'image': card_slider_image${imageQuery},
                        'bg_image': card_slider_image_bg${imageQuery},
                    },
                    "spacing": custom_spacing,
                },
                _type == "two_image_slot_wrapper" => {
                    "ID": wrapper_id,
                    "left_image": left_image${imageQuery},
                    "right_image": right_image${imageQuery},
                    "wrapper_title": wrapper_title, 
                    "button": contentLink${linkQuery}, 
                    "spacing": custom_spacing,
                },
                _type == "faqs_collapse" => {
                    "cards": faq_list,
                    "spacing": custom_spacing,
                },
                
            }
        }`;
    } else if(payload.route == 'join-beta'){
        return `{
            template,
            layout_join {
                terra_form${imageQuery},
                title,
                subtitle,
                tagline,
                button${linkQuery}, 
            },
        }`;
    } else if(payload.route == 'support'){
        return `{
            template,
            layout_support {
                hero_title,
                hero_slot[]${contentQuery},
                hero_bg_option,
                'hero_image': hero_bg_image${imageQuery},
                hero_bg_lottie${imageQuery},
                section_title,
                faqs[]{
                    _id,
                    faq_title,
                    faq_content
                },
                form_title,
                form_media_option,
                form_image${imageQuery},
                form_lottie${imageQuery},
            },
        }`;
    } else if(payload.route == 'privacy-policy'){
        return `{
            template,
            layout_default_page {
                hero_title,
                hero_bg_image${imageQuery},
                content[]${contentQuery},
            },
        }`;
    }
  
};

export const signQuery = `{
    title,
    layout_sign{
        hero_title,
        pre_form_content[]${contentQuery},
        after_form_content[]${contentQuery},
        image_left${imageQuery},
        image_right${imageQuery},
        success_title,
        success_content[]${contentQuery},
    }
}`;

export const recoverQuery = `{
    title,
    layout_recover{
        hero_title,
        hero_subtitle,
        hero_content,
        image_left${imageQuery},
        image_right${imageQuery},
    }
}`;
export const updateQuery = `{
    title,
    layout_update{
        hero_title,
        success_subtitle,
        success_content[]${contentQuery},
        image_left${imageQuery},
        image_right${imageQuery},
    }
}`;


export const libraryQuery = `{
    layout_library {
        hero_title,
        hero_bg_option,
        hero_bg_image${imageQuery},
        hero_bg_lottie${imageQuery},
        hero_bg_video${imageQuery},
        body[]${contentQuery}, 
        components_section_title,
        'items': *[_type == 'components' && layout_components.is_parent == true] | order(title asc){
            title,
            _id,
            slug,
            'total': count(*[_type == 'components' && parent_component == ^.slug.current]),
            layout_components {
              component_image${imageQuery},
            }
        },
    },
}`
