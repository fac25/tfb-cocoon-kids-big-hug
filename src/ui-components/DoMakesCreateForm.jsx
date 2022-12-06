/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { DoMakes } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function DoMakesCreateForm(props) {
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
    title: undefined,
    description: undefined,
    src: undefined,
    how_it_helps: undefined,
    materials: undefined,
    instructions: undefined,
  };
  const [emotions, setEmotions] = React.useState(initialValues.emotions);
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [src, setSrc] = React.useState(initialValues.src);
  const [how_it_helps, setHow_it_helps] = React.useState(
    initialValues.how_it_helps
  );
  const [materials, setMaterials] = React.useState(initialValues.materials);
  const [instructions, setInstructions] = React.useState(
    initialValues.instructions
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEmotions(initialValues.emotions);
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setSrc(initialValues.src);
    setHow_it_helps(initialValues.how_it_helps);
    setMaterials(initialValues.materials);
    setInstructions(initialValues.instructions);
    setErrors({});
  };
  const validations = {
    emotions: [],
    title: [],
    description: [],
    src: [],
    how_it_helps: [],
    materials: [],
    instructions: [],
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
          title,
          description,
          src,
          how_it_helps,
          materials,
          instructions,
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
          await DataStore.save(new DoMakes(modelFields));
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
      {...getOverrideProps(overrides, "DoMakesCreateForm")}
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
              title,
              description,
              src,
              how_it_helps,
              materials,
              instructions,
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
        label="Title"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              emotions,
              title: value,
              description,
              src,
              how_it_helps,
              materials,
              instructions,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              emotions,
              title,
              description: value,
              src,
              how_it_helps,
              materials,
              instructions,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
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
              title,
              description,
              src: value,
              how_it_helps,
              materials,
              instructions,
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
      <TextField
        label="How it helps"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              emotions,
              title,
              description,
              src,
              how_it_helps: value,
              materials,
              instructions,
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
        label="Materials"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              emotions,
              title,
              description,
              src,
              how_it_helps,
              materials: value,
              instructions,
            };
            const result = onChange(modelFields);
            value = result?.materials ?? value;
          }
          if (errors.materials?.hasError) {
            runValidationTasks("materials", value);
          }
          setMaterials(value);
        }}
        onBlur={() => runValidationTasks("materials", materials)}
        errorMessage={errors.materials?.errorMessage}
        hasError={errors.materials?.hasError}
        {...getOverrideProps(overrides, "materials")}
      ></TextField>
      <TextField
        label="Instructions"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              emotions,
              title,
              description,
              src,
              how_it_helps,
              materials,
              instructions: value,
            };
            const result = onChange(modelFields);
            value = result?.instructions ?? value;
          }
          if (errors.instructions?.hasError) {
            runValidationTasks("instructions", value);
          }
          setInstructions(value);
        }}
        onBlur={() => runValidationTasks("instructions", instructions)}
        errorMessage={errors.instructions?.errorMessage}
        hasError={errors.instructions?.hasError}
        {...getOverrideProps(overrides, "instructions")}
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
