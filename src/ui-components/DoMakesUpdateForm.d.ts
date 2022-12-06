/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DoMakes } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DoMakesUpdateFormInputValues = {
    emotions?: string;
    title?: string;
    description?: string;
    src?: string;
    how_it_helps?: string;
    materials?: string;
    instructions?: string;
};
export declare type DoMakesUpdateFormValidationValues = {
    emotions?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    src?: ValidationFunction<string>;
    how_it_helps?: ValidationFunction<string>;
    materials?: ValidationFunction<string>;
    instructions?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DoMakesUpdateFormOverridesProps = {
    DoMakesUpdateFormGrid?: FormProps<GridProps>;
    emotions?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    src?: FormProps<TextFieldProps>;
    how_it_helps?: FormProps<TextFieldProps>;
    materials?: FormProps<TextFieldProps>;
    instructions?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DoMakesUpdateFormProps = React.PropsWithChildren<{
    overrides?: DoMakesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    doMakes?: DoMakes;
    onSubmit?: (fields: DoMakesUpdateFormInputValues) => DoMakesUpdateFormInputValues;
    onSuccess?: (fields: DoMakesUpdateFormInputValues) => void;
    onError?: (fields: DoMakesUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DoMakesUpdateFormInputValues) => DoMakesUpdateFormInputValues;
    onValidate?: DoMakesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DoMakesUpdateForm(props: DoMakesUpdateFormProps): React.ReactElement;
