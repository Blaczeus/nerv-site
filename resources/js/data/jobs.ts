export interface Job {
    slug: string;
    title: string;
    status: 'open' | 'closed';

    jobType: string;
    shift: string;
    pay: string;
    location: string;
    startDate: string;

    applicationDeadline: string;

    aboutRole: string[];
    roleOverview: string[];

    responsibilities: {
        section: string;
        items: string[];
    }[];

    idealCandidate: string[];
}

export const jobs: Job[] = [
    {
        slug: 'operations-lead',
        title: 'Operations Lead',
        status: 'closed',

        jobType: 'Full Time, Permanent',
        shift: '9:00 AM – 5:00 PM, Monday – Friday',
        pay: 'Competitive',
        location: 'Lagos (onsite)',
        startDate: 'Immediate',

        applicationDeadline: '30/09/2025',

        aboutRole: [
            "We're recruiting for an Operations Lead to join our growing team. You'll oversee daily business operations, supervise technical staff, and coordinate projects and events to ensure smooth delivery and company success.",
        ],

        roleOverview: [
            'The Operations Lead will oversee business operations, coordinate technical teams, and support the successful delivery of projects. The role requires someone who is both organized and technically savvy, with the ability to manage developers, tech events, and local activities on behalf of the company.',
        ],

        responsibilities: [
            {
                section: 'Key Responsibilities',
                items: [
                    'Coordinate office administration.',
                    'Ensure company assets and resources are properly managed.',
                    'Maintain accurate records of operations and reports.',
                    'Provide regular updates to management on activities and progress.',
                ],
            },
            {
                section: 'Technical Coordination',
                items: [
                    'Supervise and coordinate tasks of technical staff and training of team members.',
                    'Support planning and execution of company projects or programs.',
                    'Ensure employee attendance, performance tracking, and discipline.',
                    'Coordinate local tech meetups, events, and developer engagements.',
                ],
            },
            {
                section: 'Projects & Stakeholder Management',
                items: [
                    'Support planning and execution of company projects (tech and non-tech).',
                    'Provide regular updates on project progress, risks, and challenges.',
                    'Liaise with clients, partners, and external stakeholders on technical and operational matters.',
                    'Represent the company at industry events, exhibitions, or networking sessions.',
                ],
            },
        ],

        idealCandidate: [
            '3 - 5 years experience in operations, project management, or administration.',
            'Programming knowledge in at least one language (e.g., C/C++, Python, JavaScript, PHP, Java, etc.).',
            'Familiar with software development lifecycle (SDLC), Agile, or Scrum practices.',
            'Strong organizational and multitasking skills.',
            'Excellent communication skills and ability to coordinate teams.',
            'Tech-savvy, with the ability to understand and support technical projects.',
            'Bachelor’s degree in Computer Science, Information Technology, Business, or related field preferred.',
        ],
    },
    {
        slug: 'frontend-developer',
        title: 'Frontend Developer',
        status: 'open',

        jobType: 'Full Time, Contract',
        shift: 'Flexible working hours',
        pay: 'Competitive',
        location: 'Remote',
        startDate: 'January 2026',

        applicationDeadline: '31/12/2025',

        aboutRole: [
            "We're looking for a Frontend Developer to help build clean, scalable, and user-friendly interfaces for our web platforms. You'll work closely with designers and backend engineers to translate ideas into high-quality user experiences.",
        ],

        roleOverview: [
            'The Frontend Developer will be responsible for implementing responsive UI components, optimizing application performance, and ensuring consistent user experiences across devices. This role suits someone who enjoys problem-solving and pays attention to design detail.',
        ],

        responsibilities: [
            {
                section: 'Core Responsibilities',
                items: [
                    'Develop and maintain frontend features using modern JavaScript frameworks.',
                    'Translate UI/UX designs into reusable and responsive components.',
                    'Collaborate with backend developers to integrate APIs.',
                    'Ensure cross-browser compatibility and performance optimization.',
                ],
            },
            {
                section: 'Quality & Performance',
                items: [
                    'Optimize applications for maximum speed and scalability.',
                    'Identify and fix bugs and performance bottlenecks.',
                    'Write clean, maintainable, and well-documented code.',
                ],
            },
            {
                section: 'Team Collaboration',
                items: [
                    'Participate in code reviews and team discussions.',
                    'Work closely with designers to refine user interactions.',
                    'Contribute ideas to improve product usability and developer workflow.',
                ],
            },
        ],

        idealCandidate: [
            '2+ years experience working with modern frontend frameworks (Vue, React, or similar).',
            'Strong knowledge of HTML, CSS, and JavaScript.',
            'Experience with responsive design and cross-browser compatibility.',
            'Familiarity with REST APIs and frontend build tools.',
            'Attention to detail and a strong sense of UI/UX.',
            'Ability to work independently and manage tasks in a remote environment.',
        ],
    },
];
