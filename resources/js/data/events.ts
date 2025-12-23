export interface EventItem {
  id: number
  slug: string
  status: 'draft' | 'published' | 'archived'

  seo_title: string
  seo_description: string
  seo_image: string

  card_title: string
  card_category: string
  card_image: string

  title: string
  headline: string
  intro: string
  description: string

  organizer: string
  host: string
  target_audience: string
  event_date: string
  venue: string
  duration: string

  objectives_summary: string
  objectives: string[]

  featured_image: string
}

export const events: EventItem[] = [
    {
        id: 1,
        slug: 'nervego-tech-innovators-meetup-2025-gateway-ict-polytechnic-saapade',
        status: 'published',

        seo_title:
            'Tech Event: Nervego Tech Innovators Meetup 2025 Gateway ICT Polytechnic Saapade',
        seo_description:
            'Nervego Tech Innovators Meetup 2025 is designed to inspire and equip students with practical software development skills and emerging technologies.',
        seo_image: 'events/gaposanervego2025.png',

        card_title: 'Building the Future Through Software Innovation',
        card_category: 'Innovators Meetup 2025',
        card_image: 'events/gaposanervego2025.png',

        title: 'Nervego Tech Innovators Meetup 2025 Gateway ICT Polytechnic Saapade',
        headline: 'Building the Future Through Software Innovation',
        intro: 'In this era where technology and artificial intelligence are revolutionising how things are done, we are most concerned about equipping students across Nigeria with practical tech skills and mentorship needed to thrive as global citizens. The event, themed “Building the Future Through Software Innovation,” is designed to bridge the gap between academic learning and real-world tech application through workshops, insightful talks, and networking sessions.',
        description:
            'Nervego Tech Innovators Meetup 2025 is a one-day transformative tech event designed exclusively for students of the Computer Departments of Gateway ICT Polytechnic, Saapade. This event brings together young developers, designers, and tech enthusiasts for a practical learning experience focused on real-world digital skills.',

        organizer: 'Nervego Ltd',
        host: 'Gateway ICT Polytechnic Saapade',
        target_audience: 'Students (Science and Engineering)',
        event_date: '27 November, 2025',
        venue: 'Gaposa Auditorium',
        duration: '01 Day',

        objectives_summary:
            'The primary goal of this event is to bridge the gap between academic learning and real-world technology practice.',
        objectives: [
            'Gain hands-on experience in building software solutions',
            'Learn about modern tools and frameworks used by developers globally',
            'Understand how to transition from classroom knowledge to impactful tech projects',
            'Explore new opportunities in emerging technologies and digital innovation',
        ],

        featured_image: 'events/gaposanervego2025.png',
    },
];
