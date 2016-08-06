import { ElementRef } from '@angular/core';
import { OnChanges, OnInit } from '@angular/core';
export declare class MdlProgressComponent implements OnInit, OnChanges {
    el: ElementRef;
    indeterminate: boolean;
    progress: number;
    buffer: number;
    bufferValue: number;
    value: number;
    mode: string;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(): void;
}
