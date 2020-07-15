export const largeViewport = `
  <div style={{overflow: 'auto'}}>
    <div style={{width: '1500px', height: '430px', overflow: 'auto'}}>
      <MarketingPageLayout
        overline="Overline"
        header="Header Text"
        subtitle="Subtitle Text"
        content={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ]}
        contentPrefixIcon={<Icons.Check />}
        size="large"
        actions={<Button>Main Action</Button>}
        footer={
          <MarketingPageTestimonialsFooter
            testimonials={[
              {
                id: '0001',
                avatar: <Avatar name="Guy in glasses" size="size60"/>,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                authorName: 'Guy in glasses'
              },
              {
                id: '0002',
                avatar: <Avatar name="Guy in glasses" size="size60"/>,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                authorName: 'Guy in glasses'
              },
              {
                id: '0003',
                avatar: <Avatar name="Guy in glasses" size="size60"/>,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                authorName: 'Guy in glasses'
              },
            ]}
          />
        }
        image={<Image />}
      />
    </div>
  </div>
`;

export const mediumViewport = `
  <div style={{width: '1100px', height: '430px', overflow: 'scroll'}}>
    <MarketingPageLayout
      overline="Overline"
      header="Header Text"
      subtitle="Subtitle Text"
      content={[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ]}
      contentPrefixIcon={<Icons.Check />}
      actions={<Button>Main Action</Button>}
      size="medium"
      footer={
        <MarketingPageTestimonialsFooter
          testimonials={[
            {
              id: '0001',
              avatar: <Avatar name="Guy in glasses" size="size60"/>,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              authorName: 'Guy in glasses'
            },
            {
              id: '0002',
              avatar: <Avatar name="Guy in glasses" size="size60"/>,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              authorName: 'Guy in glasses'
            },
            {
              id: '0003',
              avatar: <Avatar name="Guy in glasses" size="size60"/>,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              authorName: 'Guy in glasses'
            },
          ]}
        />
      }
      image={<Image />}
    />
  </div>
`;

export const smallViewport = `
  <div style={{width: '420px', height: '430px', overflow: 'auto'}}>
    <MarketingPageLayout
      overline="Overline"
      header="Header Text"
      subtitle="Subtitle Text"
      content={[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ]}
      contentPrefixIcon={<Icons.Check />}
      size="small"
      actions={<Button>Main Action</Button>}
      footer={
        <MarketingPageTestimonialsFooter
          testimonials={[
            {
              id: '0001',
              avatar: <Avatar name="Guy in glasses" size="size60"/>,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              authorName: 'Guy in glasses'
            },
            {
              id: '0002',
              avatar: <Avatar name="Guy in glasses" size="size60"/>,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              authorName: 'Guy in glasses'
            },
            {
              id: '0003',
              avatar: <Avatar name="Guy in glasses" size="size60"/>,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              authorName: 'Guy in glasses'
            },
          ]}
        />
      }
      image={<Image />}
    />
  </div>
`;
