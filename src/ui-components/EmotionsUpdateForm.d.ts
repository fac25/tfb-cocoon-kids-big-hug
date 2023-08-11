/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Emotions } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmotionsUpdateFormInputValues = {
    emotion?: string;
};
export declare type EmotionsUpdateFormValidationValues = {
    emotion?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmotionsUpdateFormOverridesProps = {
    EmotionsUpdateFormGrid?: FormProps<GridProps>;
    emotion?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmotionsUpdateFormProps = React.PropsWithChildren<{
    overrides?: EmotionsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    emotions?: Emotions;
    onSubmit?: (fields: EmotionsUpdateFormInputValues) => EmotionsUpdateFormInputValues;
    onSuccess?: (fields: EmotionsUpdateFormInputValues) => void;
    onError?: (fields: EmotionsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: EmotionsUpdateFormInputValues) => EmotionsUpdateFormInputValues;
    onValidate?: EmotionsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EmotionsUpdateForm(props: EmotionsUpdateFormProps): React.ReactElement;
