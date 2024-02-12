import { defineComponent, h } from 'vue';
import { n as defu } from '../../nitro/node-server.mjs';

const isSpan = (block) => block._type === "span";
const defaults = {
  types: {
    span: "span",
    image: "img"
  },
  marks: {
    strong: "strong",
    em: "em",
    link: "a"
  },
  styles: {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    normal: "p",
    blockquote: "blockquote"
  },
  listItem: "li",
  container: "div"
};
const validAttrs = [
  "abbr",
  "accesskey",
  "accessKey",
  "action",
  "alt",
  "autocomplete",
  "autofocus",
  "autoplay",
  "charset",
  "checked",
  "cite",
  "class",
  "cols",
  "colspan",
  "command",
  "content",
  "datetime",
  "default",
  "disabled",
  "download",
  "draggable",
  "dropzone",
  "headers",
  "height",
  "hidden",
  "href",
  "hreflang",
  "id",
  "maxlength",
  "minlength",
  "muted",
  "placeholder",
  "preload",
  "radiogroup",
  "readonly",
  "required",
  "role",
  "selected",
  "src",
  "srcdoc",
  "srcset",
  "tabindex",
  "title",
  "value",
  "width",
  "wrap"
];
function findSerializer(item, serializers) {
  if ((item == null ? void 0 : item.listItem) && item._type !== "list") {
    return serializers.listItem || "li";
  }
  return (item == null ? void 0 : item._type) ? serializers.types[item._type] || serializers.marks[item._type] : void 0;
}
function renderStyle(item, serializers, children) {
  const serializer = item.style && serializers.styles[item.style];
  const isElement = typeof serializer === "string";
  const props = extractProps(item, isElement);
  if (!item.listItem && item.style && serializer) {
    return h(serializer, props, { default: children });
  }
  return children == null ? void 0 : children();
}
function renderInSerializer(item, serializers) {
  return render(serializers, item, () => (item.children || []).map((child) => {
    if (isSpan(child)) {
      return renderMarks(child.text, child.marks, serializers, item.markDefs);
    }
    return render(serializers, child, () => renderMarks(child.text, child.marks, serializers, item.markDefs));
  }));
}
function renderMarks(content, [mark, ...marks] = [], serializers, markDefs = []) {
  if (!mark)
    return content;
  const definition = mark in serializers.marks ? { _type: mark, _key: "" } : markDefs.find((m) => m._key === mark);
  return render(serializers, definition, () => renderMarks(content, marks, serializers, markDefs));
}
function walkList(blocks, block) {
  if (!block.listItem) {
    blocks.push(block);
    return blocks;
  }
  const lastBlock = blocks[blocks.length - 1] || {};
  if (lastBlock._type !== "list" || !lastBlock.children || block.level === 1 && block.listItem !== lastBlock.listItem) {
    blocks.push({
      _type: "list",
      listItem: block.listItem,
      level: block.level,
      children: [block]
    });
    return blocks;
  }
  if (block.level === lastBlock.level && block.listItem === lastBlock.listItem) {
    lastBlock.children.push(block);
    return blocks;
  }
  walkList(lastBlock.children, block);
  return blocks;
}
function render(serializers, item, children) {
  const serializer = findSerializer(item, serializers);
  if (!serializer)
    return children == null ? void 0 : children();
  if (!item) {
    return void 0;
  }
  const isElement = typeof serializer === "string";
  const props = extractProps(item, isElement);
  if (isElement) {
    return h(serializer, props, children == null ? void 0 : children());
  }
  return h(serializer, props, { default: () => children == null ? void 0 : children() });
}
function extractProps(item, isElement) {
  return Object.fromEntries(
    Object.entries(item).filter(([key]) => key !== "_type" && key !== "markDefs").map(
      ([key, value]) => {
        if (key === "_key")
          return ["key", value || null];
        if (!isElement || validAttrs.includes(key))
          return [key, value];
        return [];
      }
    )
  );
}
function renderBlocks(blocks, serializers) {
  return blocks.map((block) => {
    const node = renderStyle(block, serializers, () => renderInSerializer(block, serializers));
    return node;
  });
}
const __nuxt_component_0 = defineComponent({
  name: "SanityContent",
  props: {
    blocks: {
      type: Array,
      default: () => []
    },
    serializers: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const serializers = defu(props.serializers, defaults);
    serializers.types.list = serializers.types.list || createListSerializer(serializers);
    return () => {
      var _a;
      return renderBlocks(((_a = props.blocks) == null ? void 0 : _a.reduce(walkList, [])) || [], serializers);
    };
  }
});
const createListSerializer = (serializers) => {
  return defineComponent({
    name: "ListComponent",
    inheritAttrs: false,
    props: {
      children: {
        type: Array,
        default: () => []
      },
      level: {
        type: Number,
        default: 1
      }
    },
    setup(props) {
      return () => {
        var _a;
        const isOrdered = ((_a = props.children[0]) == null ? void 0 : _a.listItem) === "number";
        if (props.level > 1) {
          return h(serializers.listItem || "li", [h(
            isOrdered ? "ol" : "ul",
            {},
            { default: () => renderBlocks(props.children, serializers) }
          )]);
        }
        return h(
          isOrdered ? "ol" : "ul",
          {},
          { default: () => renderBlocks(props.children, serializers) }
        );
      };
    }
  });
};

export { __nuxt_component_0 as _ };
//# sourceMappingURL=sanity-content-YdaIDtrv.mjs.map
