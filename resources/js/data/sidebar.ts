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
    children: [
      {
        type: 'item',
        title: 'All Users',
        route: '/users',
        icon: UserCheck,
      },
      {
        type: 'item',
        title: 'Add User',
        route: '/users/create',
        icon: UserPlus,
      },
    ],
  },
  {
    type: 'group',
    label: 'Marketing',
  },
  {
    type: 'item',
    title: 'Blogs',
    icon: FileText,
    children: [
      {
        type: 'item',
        title: 'All Blogs',
        route: '/blogs',
        icon: FileText,
      },
      {
        type: 'item',
        title: 'Create Blog',
        route: '/blogs/create',
        icon: FileText,
      },
    ],
  },
  {
    type: 'item',
    title: 'Job Postings',
    icon: Briefcase,
    children: [
      {
        type: 'item',
        title: 'All Jobs',
        route: '/jobs',
        icon: Briefcase,
      },
      {
        type: 'item',
        title: 'Create Job',
        route: '/jobs/create',
        icon: Briefcase,
      },
    ],
  },
  {
    type: 'item',
    title: 'Events',
    icon: Calendar,
    children: [
      {
        type: 'item',
        title: 'All Events',
        route: '/events',
        icon: Calendar,
      },
      {
        type: 'item',
        title: 'Create Event',
        route: '/events/create',
        icon: Calendar,
      },
    ],
  },
  {
    type: 'group',
    label: 'System',
  },
  {
    type: 'item',
    title: 'Settings',
    icon: Settings,
    route: '/settings',
  },
];
