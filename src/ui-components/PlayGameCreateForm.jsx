/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { PlayGame } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function PlayGameCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    emotions: undefined,
    name: undefined,
    how_it_helps: undefined,
    src: undefined,
  };
  const [emotions, setEmotions] = React.useState(initialValues.emotions);
  const [name, setName] = React.useState(initialValues.name);
  const [how_it_helps, setHow_it_helps] = React.useState(
    initialValues.how_it_helps
  );
  const [src, setSrc] = React.useState(initialValues.src);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEmotions(initialValues.emotions);
    setName(initialValues.name);
    setHow_it_helps(initialValues.how_it_helps);
    setSrc(initialValues.src);
    setErrors({});
  };
  const validations = {
    emotions: [],
    name: [],
    how_it_helps: [],
    src: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          emotions,
          name,
          how_it_helps,
          src,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new PlayGame(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "PlayGameCreateForm")}
    >
      <TextField
        label="Emotions"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              emotions: value,
              name,
              how_it_helps,
              src,
            };
            const result = onChange(modelFields);
            value = result?.emotions ?? value;
          }
          if (errors.emotions?.hasError) {
            runValidationTasks("emotions", value);
          }
          setEmotions(value);
        }}
        onBlur={() => runValidationTasks("emotions", emotions)}
        errorMessage={errors.emotions?.errorMessage}
        hasError={errors.emotions?.hasError}
        {...getOverrideProps(overrides, "emotions")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              emotions,
              name: value,
              how_it_helps,
              src,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="How it helps"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              emotions,
              name,
              how_it_helps: value,
              src,
            };
            const result = onChange(modelFields);
            value = result?.how_it_helps ?? value;
          }
          if (errors.how_it_helps?.hasError) {
            runValidationTasks("how_it_helps", value);
          }
          setHow_it_helps(value);
        }}
        onBlur={() => runValidationTasks("how_it_helps", how_it_helps)}
        errorMessage={errors.how_it_helps?.errorMessage}
        hasError={errors.how_it_helps?.hasError}
        {...getOverrideProps(overrides, "how_it_helps")}
      ></TextField>
      <TextField
        label="Src"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              emotions,
              name,
              how_it_helps,
              src: value,
            };
            const result = onChange(modelFields);
            value = result?.src ?? value;
          }
          if (errors.src?.hasError) {
            runValidationTasks("src", value);
          }
          setSrc(value);
        }}
        onBlur={() => runValidationTasks("src", src)}
        errorMessage={errors.src?.errorMessage}
        hasError={errors.src?.hasError}
        {...getOverrideProps(overrides, "src")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
