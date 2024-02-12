import Modules from "@/templates/modules.vue";
import Join from "@/templates/join.vue";
import Support from "@/templates/support.vue";
import Default from "@/templates/default.vue";

export const useGetTemplate = (template) => {
  switch (template) {
    case "modules":
        return readonly(Modules);
    case "join":
        return readonly(Join);
    case "support":
        return readonly(Support);
    case "default":
      return readonly(Default);
    default:
      break;
  }
};