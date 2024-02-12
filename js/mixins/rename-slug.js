export default {
  methods: {
    getSlugRenamed(payload) {
      if (payload) {
        payload = payload.toLowerCase().replace(/ +/g, "-");
        payload = payload.replace(/\./g, "");
      }
      return payload;
    },
  },
};
