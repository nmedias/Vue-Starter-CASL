export const abilities = {
  computed: {
    canReadRestricted() {
      return this.$can("read", "RESTRICTED");
    }
  },
  methods: {
    canReadData(data) {
      return this.$can("read", data);
    }
  }
};
