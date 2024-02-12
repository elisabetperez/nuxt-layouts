import Hero05 from "./../components/hero/Hero05.vue";
import Hero03 from "./../components/hero/Hero03.vue";
import MediaA from "./../components/media/MediaA.vue";
import Heading from "./../components/Modules/Heading.vue";
import CenteredAsset from "./../components/Modules/CenteredAsset.vue";
import TextAssetMarquee from "./../components/Modules/TextAssetMarquee.vue";
import ElementsMArquee from "./../components/Modules/ElementsMArquee.vue";
import PhotoMarquee from "./../components/Modules/PhotoMarquee.vue";
import TerraformsText from "./../components/Modules/TerraformsText.vue";
import TextButtonInteractivity from "./../components/Modules/TextButtonInteractivity.vue";
import TextInteractivity from "./../components/Modules/TextInteractivity.vue";
import CardSlider from "./../components/Modules/CardSlider.vue";
import TwoImagesSlotWrapper from "./../components/Modules/TwoImagesSlotWrapper.vue";
import Button from "./../components/Modules/Button.vue";

export const useGetComponentName = (module) => {
  switch (module.type) {
    case "imagebg_button_hero":
      return readonly(Hero05);
    case "imagebg_hero":
      return readonly(Hero03);
    case "heading":
      return readonly(Heading);
    case "expanding_media":
      return readonly(MediaA);
    case "centered_asset":
      return readonly(CenteredAsset);
    case "text_asset_marquee":
      return readonly(TextAssetMarquee);
    case "elements_marquee":
      return readonly(ElementsMArquee);
    case "photo_marquee":
      return readonly(PhotoMarquee);
    case "terraforms_text":
      return readonly(TerraformsText);
    case "text_button_interactivity_module":
      return readonly(TextButtonInteractivity);
    case "text_interactivity_module":
      return readonly(TextInteractivity);
    case "card_slider":
      return readonly(CardSlider);
    case "two_image_slot_wrapper":
      return readonly(TwoImagesSlotWrapper);
    case "button":
      return readonly(Button);
    default:
      break;
  }
};