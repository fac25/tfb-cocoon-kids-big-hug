/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Teachers } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TeachersUpdateFormInputValues = {
    TeacherName?: string;
};
export declare type TeachersUpdateFormValidationValues = {
    TeacherName?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeachersUpdateFormOverridesProps = {
    TeachersUpdateFormGrid?: FormProps<GridProps>;
    TeacherName?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeachersUpdateFormProps = React.PropsWithChildren<{
    overrides?: TeachersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    teachers?: Teachers;
    onSubmit?: (fields: TeachersUpdateFormInputValues) => TeachersUpdateFormInputValues;
    onSuccess?: (fields: TeachersUpdateFormInputValues) => void;
    onError?: (fields: TeachersUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TeachersUpdateFormInputValues) => TeachersUpdateFormInputValues;
    onValidate?: TeachersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TeachersUpdateForm(props: TeachersUpdateFormProps): React.ReactElement;
