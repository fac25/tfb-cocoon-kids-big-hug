/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DoMakesCreateFormInputValues = {
    emotions?: string;
    title?: string;
    description?: string;
    src?: string;
    how_it_helps?: string;
    materials?: string;
    instructions?: string;
};
export declare type DoMakesCreateFormValidationValues = {
    emotions?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    src?: ValidationFunction<string>;
    how_it_helps?: ValidationFunction<string>;
    materials?: ValidationFunction<string>;
    instructions?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DoMakesCreateFormOverridesProps = {
    DoMakesCreateFormGrid?: FormProps<GridProps>;
    emotions?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    src?: FormProps<TextFieldProps>;
    how_it_helps?: FormProps<TextFieldProps>;
    materials?: FormProps<TextFieldProps>;
    instructions?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DoMakesCreateFormProps = React.PropsWithChildren<{
    overrides?: DoMakesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DoMakesCreateFormInputValues) => DoMakesCreateFormInputValues;
    onSuccess?: (fields: DoMakesCreateFormInputValues) => void;
    onError?: (fields: DoMakesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DoMakesCreateFormInputValues) => DoMakesCreateFormInputValues;
    onValidate?: DoMakesCreateFormValidationValues;
} & React.CSSProperties>;
export default function DoMakesCreateForm(props: DoMakesCreateFormProps): React.ReactElement;
