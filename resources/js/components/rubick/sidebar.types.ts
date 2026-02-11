export type SidebarItem =
    | {
          type: 'group';
          label: string;
      }
    | {
          type: 'item';
          title: string;
          icon?: any;
          badge?: number;
          route?: string;
          children?: SidebarItem[];
      };
