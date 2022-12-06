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
export declare type PlayGameCreateFormInputValues = {
    emotions?: string;
    name?: string;
    how_it_helps?: string;
    src?: string;
};
export declare type PlayGameCreateFormValidationValues = {
    emotions?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    how_it_helps?: ValidationFunction<string>;
    src?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayGameCreateFormOverridesProps = {
    PlayGameCreateFormGrid?: FormProps<GridProps>;
    emotions?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    how_it_helps?: FormProps<TextFieldProps>;
    src?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlayGameCreateFormProps = React.PropsWithChildren<{
    overrides?: PlayGameCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlayGameCreateFormInputValues) => PlayGameCreateFormInputValues;
    onSuccess?: (fields: PlayGameCreateFormInputValues) => void;
    onError?: (fields: PlayGameCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PlayGameCreateFormInputValues) => PlayGameCreateFormInputValues;
    onValidate?: PlayGameCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlayGameCreateForm(props: PlayGameCreateFormProps): React.ReactElement;
