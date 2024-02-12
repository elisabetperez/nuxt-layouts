import Btn01 from "@/components/portableText/demoComponents/btn/btn-01.vue"
import btn01Second from "@/components/portableText/demoComponents/btn/btn-01--second.vue"
import Btn02 from "@/components/portableText/demoComponents/btn/btn-02.vue"
import Btn02Second from "@/components/portableText/demoComponents/btn/btn-02--second.vue"
import Btn03 from "@/components/portableText/demoComponents/btn/btn-03.vue"
import Btn03Second from "@/components/portableText/demoComponents/btn/btn-03--second.vue"
import Accordion01 from "@/components/portableText/demoComponents/accordion/accordion-01.vue"
import Accordion02 from "@/components/portableText/demoComponents/accordion/accordion-02.vue"
import Card01 from "@/components/portableText/demoComponents/card/card-01.vue"
import Card01Second from "@/components/portableText/demoComponents/card/card-01--second.vue"
import Card01Third from "@/components/portableText/demoComponents/card/card-01--third.vue"
import Card01Fourth from "@/components/portableText/demoComponents/card/card-01--fourth.vue"

export const useGetComponents = (template) => {
    switch (template) {
        case "btn/btn-01":
            return readonly(Btn01)
        case "btn/btn-01--second":
            return readonly(btn01Second)
        case "btn/btn-02":
            return readonly(Btn02)
        case "btn/btn-02--second":
            return readonly(Btn02Second)
        case "btn/btn-03":
            return readonly(Btn03)
        case "btn/btn-03--second":
            return readonly(Btn03Second)
        case "accordion/accordion-01":
            return readonly(Accordion01)
        case "accordion/accordion-02":
            return readonly(Accordion02)
        case "card/card-01":
            return readonly(Card01)
        case "card/card-01--second":
            return readonly(Card01Second)
        case "card/card-01--third":
            return readonly(Card01Third)
        case "card/card-01--fourth":
            return readonly(Card01Fourth)
        default:
            break
    }
}
