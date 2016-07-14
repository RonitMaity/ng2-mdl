import { ControlValueAccessor } from '@angular/forms';
import { EventEmitter } from '@angular/core';
export declare const MDL_SWITCH_VALUE_ACCESSOR: any;
export declare class MdlSwitchComponent implements ControlValueAccessor {
    class: string;
    label: string;
    value: string;
    ripple: boolean;
    disabled: boolean;
    changes: EventEmitter<{}>;
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
