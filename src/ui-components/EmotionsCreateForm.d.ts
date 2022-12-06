/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmotionsCreateFormInputValues = {
    name?: string;
    under13_src?: string;
    under13_description?: string;
    over13_src?: string;
    over13_description?: string;
    restricted?: boolean;
};
export declare type EmotionsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    under13_src?: ValidationFunction<string>;
    under13_description?: ValidationFunction<string>;
    over13_src?: ValidationFunction<string>;
    over13_description?: ValidationFunction<string>;
    restricted?: ValidationFunction<boolean>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmotionsCreateFormOverridesProps = {
    EmotionsCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    under13_src?: FormProps<TextFieldProps>;
    under13_description?: FormProps<TextFieldProps>;
    over13_src?: FormProps<TextFieldProps>;
    over13_description?: FormProps<TextFieldProps>;
    restricted?: FormProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type EmotionsCreateFormProps = React.PropsWithChildren<{
    overrides?: EmotionsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EmotionsCreateFormInputValues) => EmotionsCreateFormInputValues;
    onSuccess?: (fields: EmotionsCreateFormInputValues) => void;
    onError?: (fields: EmotionsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: EmotionsCreateFormInputValues) => EmotionsCreateFormInputValues;
    onValidate?: EmotionsCreateFormValidationValues;
} & React.CSSProperties>;
export default function EmotionsCreateForm(props: EmotionsCreateFormProps): React.ReactElement;
