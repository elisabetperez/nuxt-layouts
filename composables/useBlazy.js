import Blazy from "blazy"

export const useBlazy = () => {
    new Blazy({
        selector: ".g--lazy-01",
        successClass: "g--lazy-01--is-loaded",
        errorClass: "g--lazy-01--is-error",
        loadInvisible: true,
    })
}
