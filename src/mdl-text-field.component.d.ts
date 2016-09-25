import { ControlValueAccessor } from '@angular/forms';
import { EventEmitter } from '@angular/core';
export declare const MDL_TEXT_FIELD_VALUE_ACCESSOR: any;
export declare class MdlTextFieldComponent implements ControlValueAccessor {
    floating: boolean;
    required: boolean;
    disabled: boolean;
    type: string;
    placeholder: string;
    value: string;
    errMsg: string;
    class: string;
    label: string;
    id: string;
    changes: EventEmitter<{}>;
    ngOnChanges(): void;
    update(value: any): void;
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: string): void;
    registerOnChange(fn: (_) => void): void;
    registerOnTouched(fn: () => void): void;
}
