/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Teachers } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function TeachersUpdateForm(props) {
  const {
    id,
    teachers,
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
    TeacherName: undefined,
  };
  const [TeacherName, setTeacherName] = React.useState(
    initialValues.TeacherName
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...teachersRecord };
    setTeacherName(cleanValues.TeacherName);
    setErrors({});
  };
  const [teachersRecord, setTeachersRecord] = React.useState(teachers);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Teachers, id) : teachers;
      setTeachersRecord(record);
    };
    queryData();
  }, [id, teachers]);
  React.useEffect(resetStateValues, [teachersRecord]);
  const validations = {
    TeacherName: [],
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
          TeacherName,
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
          await DataStore.save(
            Teachers.copyOf(teachersRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "TeachersUpdateForm")}
    >
      <TextField
        label="Teacher name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={TeacherName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              TeacherName: value,
            };
            const result = onChange(modelFields);
            value = result?.TeacherName ?? value;
          }
          if (errors.TeacherName?.hasError) {
            runValidationTasks("TeacherName", value);
          }
          setTeacherName(value);
        }}
        onBlur={() => runValidationTasks("TeacherName", TeacherName)}
        errorMessage={errors.TeacherName?.errorMessage}
        hasError={errors.TeacherName?.hasError}
        {...getOverrideProps(overrides, "TeacherName")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
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
