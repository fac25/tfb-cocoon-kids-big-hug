/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PlayGame } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlayGameUpdateFormInputValues = {
    emotions?: string;
    name?: string;
    how_it_helps?: string;
    src?: string;
};
export declare type PlayGameUpdateFormValidationValues = {
    emotions?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    how_it_helps?: ValidationFunction<string>;
    src?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayGameUpdateFormOverridesProps = {
    PlayGameUpdateFormGrid?: FormProps<GridProps>;
    emotions?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    how_it_helps?: FormProps<TextFieldProps>;
    src?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlayGameUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlayGameUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    playGame?: PlayGame;
    onSubmit?: (fields: PlayGameUpdateFormInputValues) => PlayGameUpdateFormInputValues;
    onSuccess?: (fields: PlayGameUpdateFormInputValues) => void;
    onError?: (fields: PlayGameUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PlayGameUpdateFormInputValues) => PlayGameUpdateFormInputValues;
    onValidate?: PlayGameUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlayGameUpdateForm(props: PlayGameUpdateFormProps): React.ReactElement;
