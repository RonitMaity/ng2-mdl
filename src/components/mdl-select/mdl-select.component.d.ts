import { EventEmitter, ElementRef, Renderer } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const MDL_SELECT_VALUE_ACCESSOR: any;
export declare class MdlSelectComponent implements ControlValueAccessor {
    _el: ElementRef;
    _ren: Renderer;
    disabled: boolean;
    placeholder: string;
    errMsg: string;
    label: string;
    value: string;
    class: string;
    id: string;
    changes: EventEmitter<{}>;
    initialized: boolean;
    constructor(_el: ElementRef, _ren: Renderer);
    ngOnChanges(): void;
    ngAfterViewChecked(): void;
    update(value: any): void;
    updateSelectField(): void;
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
