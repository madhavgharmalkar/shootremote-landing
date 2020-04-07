module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      filmmaking: { page: "/filmmaking" },
      livestreaming: { page: "/livestreaming" },
      aerial: { page: "/aerial" },
    };
  },
};
