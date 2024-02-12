import TFormGroup from "@terrahq/vue-form"
import TLabel from "@terrahq/vue-form"
import TInputField from "@terrahq/vue-form"
import TUploadFile from "@terrahq/vue-form"
import TToggle from "@terrahq/vue-form"
import TCheckbox from "@terrahq/vue-form"
import TGroupCheckbox from "@terrahq/vue-form"
import TGroupRadio from "@terrahq/vue-form"
import TSelect from "@terrahq/vue-form"
import TTextarea from "@terrahq/vue-form"
import TError from "@terrahq/vue-form"
import THint from "@terrahq/vue-form"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(
        TFormGroup,
        TLabel,
        TInputField,
        TUploadFile,
        TToggle,
        TCheckbox,
        TGroupCheckbox,
        TGroupRadio,
        TSelect,
        TTextarea,
        TError,
        THint
    )
})
