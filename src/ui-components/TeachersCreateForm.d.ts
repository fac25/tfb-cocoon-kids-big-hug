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
export declare type TeachersCreateFormInputValues = {
    TeacherName?: string;
};
export declare type TeachersCreateFormValidationValues = {
    TeacherName?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeachersCreateFormOverridesProps = {
    TeachersCreateFormGrid?: FormProps<GridProps>;
    TeacherName?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeachersCreateFormProps = React.PropsWithChildren<{
    overrides?: TeachersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TeachersCreateFormInputValues) => TeachersCreateFormInputValues;
    onSuccess?: (fields: TeachersCreateFormInputValues) => void;
    onError?: (fields: TeachersCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TeachersCreateFormInputValues) => TeachersCreateFormInputValues;
    onValidate?: TeachersCreateFormValidationValues;
} & React.CSSProperties>;
export default function TeachersCreateForm(props: TeachersCreateFormProps): React.ReactElement;
