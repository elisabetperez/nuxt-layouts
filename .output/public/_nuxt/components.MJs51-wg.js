import{Y as e,Z as o}from"./entry.OtO-Wuic.js";const n=e(),t=o(),s=`{
  'updated': _updatedAt,
  'title': title,
  layout_components {
    'hero_title': hero_title,
    'hero_description': hero_description,
    'description': description[]${t},
    'section': sections[]{
      'title': section_title,
      'button': show_button,
      'content': section_content[]${t}
    },
  }
}`,r=`{
  'updated': _updatedAt,
  'title': title,
  layout_components {
    hero_image${n},
    hero_slot[]${t},
    loop_title,
  }
}`;export{s as c,r as p};
