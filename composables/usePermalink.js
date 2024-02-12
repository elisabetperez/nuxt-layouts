export const useGetThePermalink = (post, hasQuery, textQuery) => {
  var slug = "";
  if (post) {
    switch (post.type) {
      case "page":
        slug = post.slug;
        if (post.slug == "/") {
          slug = "";
          return "/";
        }
        if (post.parent != "main" && post.parent != null) {
          if (post.parentSlug) {
            slug = post.parentSlug.slug + "/" + post.slug;
          } else {
            slug = post.parent + "/" + post.slug;
          }
        }
        if (post.slug == "sign-up" || post.slug == "log-in") {
          slug = "auth/" + slug;
        }
        break;
        case "properties":
        slug = post.slug;
        if (post.parent == "main") {
          slug = "properties/" + slug;
        }
        break;
      default:
        break;
    }
  }
  if (hasQuery) {
    if (post.slug == "/") {
      return readonly("/" + textQuery);
    } else {
      return readonly("/" + slug + "/" + textQuery);
    }
  }
  return "/" + slug + "/";
};
