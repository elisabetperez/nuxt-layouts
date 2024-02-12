import codeExample from "@/components/portableText/codeExample.vue";
import notes from "@/components/portableText/notes.vue";
import tabs from "@/components/portableText/tabs.vue";
import variables from "@/components/portableText/variables.vue";
import examples from "@/components/portableText/examples.vue";
import footnote from "@/components/portableText/footnote.vue";
import cta from "@/components/portableText/cta.vue";
import quote from "@/components/portableText/quote.vue";
import callout from "@/components/portableText/callout.vue";
import button from "@/components/portableText/button.vue";
import indexComponents from "~/components/portableText/demoComponents/index.vue";

export const useGetContent= () => {
  return readonly({
    types: {
      componentList: indexComponents,
      codeExample: codeExample,
      variables: variables,
      notes: notes,
      tabs: tabs,
      examples: examples,
      footnote: footnote,
      cta: cta,
      quote: quote,
      callout: callout,
      button: button,
    }
  })
};