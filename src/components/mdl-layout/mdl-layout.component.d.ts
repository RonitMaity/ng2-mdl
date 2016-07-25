/// <reference types="core-js" />
import { RouterLink } from '@angular/router';
export interface MenuItem {
    title: string;
    link: string;
    routerLink: Array<RouterLink>;
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
