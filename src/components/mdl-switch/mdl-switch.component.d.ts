import { ControlValueAccessor } from '@angular/forms';
import { EventEmitter } from '@angular/core';
export declare const MDL_SWITCH_VALUE_ACCESSOR: any;
export declare class MdlSwitchComponent implements ControlValueAccessor {
    ripple: boolean;
    disabled: boolean;
    checked: boolean;
    placeholder: string;
    class: string;
    label: string;
    changes: EventEmitter<{}>;
    ngOnChanges(): void;
    update(checked: any): void;
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(checked: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
