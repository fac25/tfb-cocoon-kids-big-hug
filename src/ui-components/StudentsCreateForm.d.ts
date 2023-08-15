/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StudentsCreateFormInputValues = {
    name?: string;
};
export declare type StudentsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentsCreateFormOverridesProps = {
    StudentsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StudentsCreateFormProps = React.PropsWithChildren<{
    overrides?: StudentsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StudentsCreateFormInputValues) => StudentsCreateFormInputValues;
    onSuccess?: (fields: StudentsCreateFormInputValues) => void;
    onError?: (fields: StudentsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StudentsCreateFormInputValues) => StudentsCreateFormInputValues;
    onValidate?: StudentsCreateFormValidationValues;
} & React.CSSProperties>;
export default function StudentsCreateForm(props: StudentsCreateFormProps): React.ReactElement;
