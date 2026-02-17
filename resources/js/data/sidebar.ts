import type { SidebarItem } from '@/components/rubick/sidebar.types';
import { Home, Settings, Users, UserPlus, UserCheck, FileText, Briefcase, Calendar } from 'lucide-vue-next';

export const sidebarItems: SidebarItem[] = [
  {
    type: 'group',
    label: 'Main',
  },
  {
    type: 'item',
    title: 'Dashboard',
    icon: Home,
    route: '/dashboard',
  },
  {
    type: 'item',
    title: 'Users',
    icon: Users,
    roles: ['admin'],
    children: [
      {
        type: 'item',
        title: 'All Users',
        route: '/dashboard/users',
        icon: UserCheck,
      },
      {
        type: 'item',
        title: 'Add User',
        route: '/dashboard/users/create',
        icon: UserPlus,
      },
    ],
  },
  {
    type: 'group',
    label: 'Marketing',
    roles: ['admin'],
  },
  {
    type: 'item',
    title: 'Blogs',
    icon: FileText,
    roles: ['admin'],
    children: [
      {
        type: 'item',
        title: 'All Blogs',
        route: '/dashboard/blog',
        icon: FileText,
      },
      {
        type: 'item',
        title: 'Create Blog',
        route: '/dashboard/blog/create',
        icon: FileText,
      },
    ],
  },
  {
    type: 'item',
    title: 'Job Postings',
    icon: Briefcase,
    roles: ['admin'],
    children: [
      {
        type: 'item',
        title: 'All Jobs',
        route: '/dashboard/careers',
        icon: Briefcase,
      },
      {
        type: 'item',
        title: 'Create Job',
        route: '/dashboard/careers/create',
        icon: Briefcase,
      },
    ],
  },
  {
    type: 'item',
    title: 'Events',
    icon: Calendar,
    roles: ['admin'],
    children: [
      {
        type: 'item',
        title: 'All Events',
        route: '/dashboard/events',
        icon: Calendar,
      },
      {
        type: 'item',
        title: 'Create Event',
        route: '/dashboard/events/create',
        icon: Calendar,
      },
    ],
  },
  {
    type: 'group',
    label: 'System',
    roles: ['admin'],
  },
  {
    type: 'item',
    title: 'Settings',
    icon: Settings,
    roles: ['admin'],
    route: '/settings',
  },
];
