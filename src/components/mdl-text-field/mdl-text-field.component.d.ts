import { ControlValueAccessor } from '@angular/forms';
import { EventEmitter } from '@angular/core';
export declare const MDL_TEXT_FIELD_VALUE_ACCESSOR: any;
export declare class MdlTextFieldComponent implements ControlValueAccessor {
    id: string;
    class: string;
    errMsg: string;
    value: string;
    type: string;
    label: string;
    floating: boolean;
    disabled: boolean;
    changes: EventEmitter<{}>;
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
