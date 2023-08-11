/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Students } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StudentsUpdateFormInputValues = {
    Name?: string;
};
export declare type StudentsUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentsUpdateFormOverridesProps = {
    StudentsUpdateFormGrid?: FormProps<GridProps>;
    Name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StudentsUpdateFormProps = React.PropsWithChildren<{
    overrides?: StudentsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    students?: Students;
    onSubmit?: (fields: StudentsUpdateFormInputValues) => StudentsUpdateFormInputValues;
    onSuccess?: (fields: StudentsUpdateFormInputValues) => void;
    onError?: (fields: StudentsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: StudentsUpdateFormInputValues) => StudentsUpdateFormInputValues;
    onValidate?: StudentsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StudentsUpdateForm(props: StudentsUpdateFormProps): React.ReactElement;
