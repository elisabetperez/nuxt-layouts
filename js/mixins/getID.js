export default {
  methods: {
    getID(title, parentTitle) {
      const id = String(title)
        .toLowerCase()
        .replace(/\./g, "")
        .replace(/\?/g, "")
        .replace(/\'/g, "")
        .split(" ")
        .join("-");
      const parent = String(parentTitle).toLowerCase().split(" ").join("-");
      return `${parent}-${id}`;
    },
  },
};
