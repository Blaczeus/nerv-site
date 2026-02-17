export type SidebarItem =
    | {
          type: 'group';
          label: string;
          roles?: Array<'admin' | 'user'>;
      }
    | {
          type: 'item';
          title: string;
          icon?: any;
          badge?: number;
          route?: string;
          children?: SidebarItem[];
          roles?: Array<'admin' | 'user'>;
      };
