import { ElementRef } from '@angular/core';
import { OnChanges, OnInit } from '@angular/core';
export declare class MdlProgressComponent implements OnInit, OnChanges {
    el: ElementRef;
    buffer: number;
    progress: number;
    indeterminate: boolean;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(): void;
}
