export function getLinkQuery(payload) {
  return `{
      'label': label,
      'external_page': link_external,
      'url_internal': link_url_internal->{
        'type' : _type,
        'slug' : slug.current,
      },
      'new_tab' : new_tab,
      'url_external': link_url_external,
      'new_tab': link_new_tab,
      'has_query' : query_param,
      'text_query' : parameter
  }`;
}

export function getImageQuery() {
  return `{
      _type,
      'url': asset->url,
      'width': asset->metadata.dimensions.width,
      'height': asset->metadata.dimensions.height,
      'alt': asset->altText,
      'alt_content': attribution,
      'file_name': asset->originalFilename
  }`;
}

export function getContentQuery(payload) {
  const imageQuery = getImageQuery();
  const linkQuery = getLinkQuery();
  return `{
        ...,
        _type == 'block' => {
            _type,
            style,
            'bullet': listItem == 'bullet',
            level,
            'link': markDefs[] {
              _type,
              _key,
              href,
              blank
            },
            'block': children[] {
              text,
              'strong': marks[0] == 'strong',
              'link_key': marks[0]
            }
          },
          _type == 'image' => ${imageQuery},
          _type == 'button' => {
            _type,
            button${linkQuery}
          },
          _type == 'footnote' => {
            _type,
            title
          },
          _type == 'cta' => {
            _type,
            cta_title, 
            cta_tagline,
            cta_button${linkQuery},
          },
          _type == 'callout' => {
            _type,
            title,
            description
          },
          _type == 'quote' => {
            _type,
            'text': quote_text,
            'author': quote_name
          },
          _type == 'codeExample' => {
            _type,
            language,
            code
          },
          _type == 'notes' => {
            _type,
            notes_block[]{...}
          },
          _type == 'tabs' => {
            _type,
            '_id': _key,
            tab[]{
              tab_title,
              tab_content[]
            }
          },
          _type == 'examples' => {
            _type,
            '_id': _key,
            examples_title,
            examples_id,
            examples[]{
              example_title,
              example_content[], 
            }
          },
          _type == 'variables' => {
            _type,
            related_variables[]{
              title,
              'properties': properties[]->{
                title,
                'link' : {
                  'type' : _type,
                  'slug' : slug.current,
                  parent,
                  'permalink' : *[_type == 'permalink'] | order(_createdAt desc)[0]{...},
                },
              }
             }
          },
          _type == 'componentList' => {
            _type,
            ...
          }
    }`;
}
