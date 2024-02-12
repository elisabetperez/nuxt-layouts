export const useLinkTo = (item, child) => {

  const generateBasePath = (slug) => {
    return `/components/${slug}/`;
  };
  const generateChildPath = (slug, slug_child) => {
    return `/components/${slug}/${slug_child}/`;
  };

  if(item && !child){
    const basePath = computed(() => generateBasePath(item));
    return basePath;

  } else if(item && child){
    const childPath = computed(() => generateChildPath(item, child));
    return childPath;
  }
  
}
