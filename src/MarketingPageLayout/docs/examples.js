export const defaultViewport = `
  <div style={{overflow: 'auto'}}>
    <div style={{width: '1500px', height: '630px'}}>
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
        footer={<div>Footer Content</div>}
        image={<Image />}
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
  <div style={{overflow: 'auto'}}>
    <div style={{width: '1100px', height: '630px'}}>
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
  </div>
`;

export const smallViewport = `
  <div style={{overflow: 'auto'}}>
    <div style={{width: '420px', height: '630px'}}>
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
  </div>
`;
