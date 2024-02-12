const GET_SANITY_CONTENT = async (payload) => {
  const query = groq`*[_type == "${payload.TYPE}" && slug.current == "${payload.SLUG}" &&  !(_id in path('drafts.**'))  ] | order(launchAt asc)[0]${payload.QUERY}`;
  const sanity = useSanity();
  const { data } = await useAsyncData("pages", () => sanity.fetch(query));
  const realData = data._value;
  return realData
};


const GET_SETTINGS = async (payload) => {
  const query = groq`*[_type == "${payload.TYPE}"][0]${payload.QUERY}`;
  const sanity = useSanity();
  const  data = await sanity.fetch(query);
  return data
}


const GET_TYPE = async (payload) => {
  const query = groq`*[_type == "${payload.TYPE}"]${payload.QUERY}`;
  const sanity = useSanity();
  const  data = await sanity.fetch(query);
  return data
}


export  {GET_SETTINGS, GET_SANITY_CONTENT, GET_TYPE};