export default {
  methods: {
    scrollToHash(selector) {
      let id = selector.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop + 76,
        });
      }
    },
  },
};
