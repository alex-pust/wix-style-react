// export const defaultViewport = `
//   <div style={{overflow: 'auto'}}>
//     <div style={{width: '1500px', height: '630px'}}>
//       <MarketingPageLayout
//         overline="Overline"
//         header="Header Text"
//         subtitle="Subtitle Text"
//         content={[
//           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         ]}
//         contentPrefixIcon={<Icons.Check />}
//       />
//     </div>
//   </div>
// `;

export const defaultViewport = `
  <div style={{overflow: 'auto'}}>
    <div style={{width: '1500px', height: '630px'}}>
      <MarketingPageLayout
        overline="Overline"
        header="Header Text"
        subtitle="Subtitle Text"
        content={[
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. And more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        ]}
        contentPrefixIcon={<Icons.Check />}
        footer={<div>Footer Content</div>}
      />
    </div>
  </div>
`;

export const largeViewport = `
  <div style={{overflow: 'auto'}}>
    <div style={{width: '1500px', height: '630px'}}>
      <MarketingPageLayout
        overline="Overline"
        header="Header Text"
        subtitle="Subtitle Text"
        content={[
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. And more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        ]}
        contentPrefixIcon={<Icons.Check />}
        size="large"
        footer={
            <MarketingPageTestimonialsFooter
                testimonials={[
                  {
                    id: '0001',
                    avatar: <Avatar name="Guy in glasses" size="size60"/>,
                    text: 'This is exactly what I need...',
                    authorName: 'Guy in glasses'
                  },
                  {
                    id: '0002',
                    avatar: <Avatar name="Guy in glasses" size="size60"/>,
                    text: 'This is exactly what I need...',
                    authorName: 'Guy in glasses'
                  },
                  {
                    id: '0003',
                    avatar: <Avatar name="Guy in glasses" size="size60"/>,
                    text: 'This is exactly what I need...',
                    authorName: 'Guy in glasses'
                  },
                ]}
            />
        }
      />
    </div>
  </div>
`;

export const mediumViewport = `
  <div style={{overflow: 'auto'}}>
    <div style={{width: '1100px', height: '630px'}}>
      <MarketingPageLayout
        header="Header Text"
        subtitle="Subtitle Text"
        content={[
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        ]}
        size="medium"
        footer={
            <MarketingPageTestimonialsFooter
                testimonials={[
                  {
                    id: '0001',
                    avatar: <Avatar name="Guy in glasses" size="size60"/>,
                    text: 'This is exactly what I need...',
                    authorName: 'Guy in glasses'
                  },
                  {
                    id: '0002',
                    avatar: <Avatar name="Guy in glasses" size="size60"/>,
                    text: 'This is exactly what I need...',
                    authorName: 'Guy in glasses'
                  },
                  {
                    id: '0003',
                    avatar: <Avatar name="Guy in glasses" size="size60"/>,
                    text: 'This is exactly what I need...',
                    authorName: 'Guy in glasses'
                  },
                ]}
            />
        }
      />
    </div>
  </div>
`;

export const smallViewport = `
  <div style={{overflow: 'auto'}}>
    <div style={{width: '420px', height: '630px'}}>
      <MarketingPageLayout
        header="Header Text"
        subtitle="Subtitle Text"
        content={[
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. And more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        ]}
        size="small"
        footer={
            <MarketingPageTestimonialsFooter
                testimonials={[
                  {
                    id: '0001',
                    avatar: <Avatar name="Guy in glasses" size="size60"/>,
                    text: 'This is exactly what I need...',
                    authorName: 'Guy in glasses'
                  },
                  {
                    id: '0002',
                    avatar: <Avatar name="Guy in glasses" size="size60"/>,
                    text: 'This is exactly what I need...',
                    authorName: 'Guy in glasses'
                  },
                  {
                    id: '0003',
                    avatar: <Avatar name="Guy in glasses" size="size60"/>,
                    text: 'This is exactly what I need...',
                    authorName: 'Guy in glasses'
                  },
                ]}
            />
        }
      />
    </div>
  </div>
`;
