export interface MenuItem {
    title: string;
    link: string;
    routerLink: Array<any>;
}
export declare class MdlLayoutComponent {
    fixedHeader: boolean;
    fixedDrawer: boolean;
    drawerTitle: string;
    drawerMenu: Array<MenuItem>;
}
export declare class MdlHeaderComponent {
    title: string;
    search: boolean;
    menu: Array<MenuItem>;
    noHeader: boolean;
    waterfall: boolean;
    transparent: boolean;
    scrollableHeader: boolean;
}
export declare class MdlDrawerComponent {
    title: string;
    menu: Array<MenuItem>;
}
