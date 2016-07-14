import { ControlValueAccessor } from '@angular/forms';
import { EventEmitter } from '@angular/core';
export declare const MDL_SELECT_VALUE_ACCESSOR: any;
export declare class MdlSelectComponent implements ControlValueAccessor {
    id: string;
    value: string;
    label: string;
    class: string;
    disabled: boolean;
    changes: EventEmitter<{}>;
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
