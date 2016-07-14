import { ControlValueAccessor } from '@angular/forms';
import { EventEmitter } from '@angular/core';
export declare const MDL_CHECK_BOX_VALUE_ACCESSOR: any;
export declare class MdlCheckBoxComponent implements ControlValueAccessor {
    class: string;
    label: string;
    value: boolean;
    ripple: boolean;
    disabled: boolean;
    changes: EventEmitter<{}>;
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
