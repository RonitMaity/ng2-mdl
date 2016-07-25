import { EventEmitter, ElementRef, Renderer } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const MDL_SELECT_VALUE_ACCESSOR: any;
export declare class MdlSelectComponent implements ControlValueAccessor {
    _el: ElementRef;
    _ren: Renderer;
    id: string;
    value: string;
    label: string;
    class: string;
    disabled: boolean;
    changes: EventEmitter<{}>;
    initialized: boolean;
    constructor(_el: ElementRef, _ren: Renderer);
    ngAfterViewChecked(): void;
    updateSelectField(): void;
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
