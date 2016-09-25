import { ControlValueAccessor } from '@angular/forms';
import { EventEmitter } from '@angular/core';
export declare const MDL_RADIO_VALUE_ACCESSOR: any;
export declare class MdlRadioComponent implements ControlValueAccessor {
    ripple: boolean;
    disabled: boolean;
    placeholder: string;
    value: string;
    class: string;
    label: string;
    name: string;
    changes: EventEmitter<{}>;
    val: string;
    ngOnChanges(): void;
    update(value: any): void;
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: string): void;
    registerOnChange(fn: (_) => void): void;
    registerOnTouched(fn: () => void): void;
}
