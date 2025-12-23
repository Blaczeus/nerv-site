export interface BlogAuthor {
    name: string;
    slug: string;
}

export interface BlogCategory {
    name: string;
    slug: string;
}

export interface Blog {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string[];
    featured_image: string;
    seo: {
        title: string;
        description: string;
        image: string;
    };
    author: BlogAuthor;
    categories: BlogCategory[];
    tags: string[];
    published_at: string;
    status: 'draft' | 'published';
}

export const blogs: Blog[] = [
    {
        id: 1,
        title: 'Nervego Flags Off Tech Innovators Community at Gateway ICT Polytechnic, Saapade',
        slug: 'nervego-tech-innovators-community-gateway-poly-saapade',
        excerpt:
            'The maiden edition of the Nervego Tech Innovators Meetup was held yesterday, November 27, 2025, at Gateway ICT Polytechnic, Saapade, marking a major milestone in youth-centered technological empowerment in Nigeria.',
        featured_image: 'blog/ntim2025gaposa.jpg',
        seo: {
            title: 'Tech Event: Nervego Tech Innovators Meetup 2025 Gateway ICT Polytechnic Saapade',
            description:
                'Nervego Tech Innovators Meetup 2025 inspires students with practical software development skills and exposure to emerging technologies.',
            image: 'blog/main/ntim2025gaposa.jpg',
        },
        author: {
            name: 'Stanley Nwukwo',
            slug: 'stanley-nwukwo',
        },
        content: [
            'The maiden edition of the Nervego Tech Innovators Meetup was held yesterday, November 27, 2025, at Gateway ICT Polytechnic, Saapade, marking a major milestone in youth-centered technological empowerment in Nigeria.',
            'The event received full support from the Polytechnic Management as the Rector, Deans, and Heads of Department warmly welcomed the Nervego team and endorsed the establishment of a dedicated Tech Community Hub within the school.',
            'This hub will serve as a learning and innovation space designed to discover, train, nurture, and mentor young developers, positioning them as future national and global technology problem-solvers.',
            'Students received the initiative with excitement, expressing eagerness to join the program and benefit from the opportunities the Nervego community will drive.',
            'Speaking during the event, Paul O., CEO and Co-Founder of Nervego, emphasized that beyond being a tech education and solutions hub, the community program aims to identify potential early, develop it, and provide funding access for promising tech talents across the country.',
            'The event featured intensive sessions on Software Development, Artificial Intelligence, Machine Learning, and Product Management, positioning students to engage with the latest technological trends.',
            'Nervego believes the future of African innovation lies in young minds — and this journey has officially begun.',
        ],
        categories: [
            { name: 'Technology', slug: 'technology' },
            { name: 'Education', slug: 'education' },
        ],
        tags: [
            'NTIM2025',
            'Nervego',
            'GatewayPolySaapade',
            'TechEducation',
            'Innovation',
            'TechEvents',
        ],
        published_at: '2025-11-28',
        status: 'published',
    },
];

// Sidebar / recent posts
export const sidebarBlogs: Blog[] = [
  {
    id: 101,
    title: 'Nervego Hosts Tech Career Awareness Session',
    slug: 'nervego-hosts-tech-career-awareness-session',
    excerpt: 'Nervego engaged students in a career-focused tech session...',
    featured_image: 'images/blog/news-blog/pic1.jpg',
    published_at: '2024-06-04',
    status: 'published',
    author: {
      name: 'Nervego Team',
      slug: 'nervego-team',
    },
    categories: [{ name: 'Technology', slug: 'technology' }],
    tags: ['Nervego', 'TechEducation'],
    content: [],
    seo: {
      title: 'Nervego Tech Career Awareness',
      description: '',
      image: '',
    },
  },

  {
    id: 102,
    title: 'Why Community Matters in Tech Growth',
    slug: 'why-community-matters-in-tech-growth',
    excerpt: 'Strong communities help tech talents grow faster...',
    featured_image: 'images/blog/news-blog/pic2.jpg',
    published_at: '2024-06-05',
    status: 'published',
    author: {
      name: 'Nervego Team',
      slug: 'nervego-team',
    },
    categories: [{ name: 'Business', slug: 'business' }],
    tags: ['Innovation', 'Community'],
    content: [],
    seo: {
      title: '',
      description: '',
      image: '',
    },
  },

  {
    id: 103,
    title: 'Building Sustainable Innovation Ecosystems',
    slug: 'building-sustainable-innovation-ecosystems',
    excerpt: 'Innovation thrives where systems are sustainable...',
    featured_image: 'images/blog/news-blog/pic3.jpg',
    published_at: '2024-06-06',
    status: 'published',
    author: {
      name: 'Nervego Team',
      slug: 'nervego-team',
    },
    categories: [{ name: 'Innovation', slug: 'innovation' }],
    tags: ['TechEvents'],
    content: [],
    seo: {
      title: '',
      description: '',
      image: '',
    },
  },
]
