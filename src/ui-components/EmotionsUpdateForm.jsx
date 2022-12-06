/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Emotions } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function EmotionsUpdateForm(props) {
  const {
    id,
    emotions,
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
    name: undefined,
    under13_src: undefined,
    under13_description: undefined,
    over13_src: undefined,
    over13_description: undefined,
    restricted: false,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [under13_src, setUnder13_src] = React.useState(
    initialValues.under13_src
  );
  const [under13_description, setUnder13_description] = React.useState(
    initialValues.under13_description
  );
  const [over13_src, setOver13_src] = React.useState(initialValues.over13_src);
  const [over13_description, setOver13_description] = React.useState(
    initialValues.over13_description
  );
  const [restricted, setRestricted] = React.useState(initialValues.restricted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...emotionsRecord };
    setName(cleanValues.name);
    setUnder13_src(cleanValues.under13_src);
    setUnder13_description(cleanValues.under13_description);
    setOver13_src(cleanValues.over13_src);
    setOver13_description(cleanValues.over13_description);
    setRestricted(cleanValues.restricted);
    setErrors({});
  };
  const [emotionsRecord, setEmotionsRecord] = React.useState(emotions);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Emotions, id) : emotions;
      setEmotionsRecord(record);
    };
    queryData();
  }, [id, emotions]);
  React.useEffect(resetStateValues, [emotionsRecord]);
  const validations = {
    name: [],
    under13_src: [],
    under13_description: [],
    over13_src: [],
    over13_description: [],
    restricted: [],
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
          name,
          under13_src,
          under13_description,
          over13_src,
          over13_description,
          restricted,
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
            Emotions.copyOf(emotionsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "EmotionsUpdateForm")}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              under13_src,
              under13_description,
              over13_src,
              over13_description,
              restricted,
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
        label="Under13 src"
        isRequired={false}
        isReadOnly={false}
        defaultValue={under13_src}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              under13_src: value,
              under13_description,
              over13_src,
              over13_description,
              restricted,
            };
            const result = onChange(modelFields);
            value = result?.under13_src ?? value;
          }
          if (errors.under13_src?.hasError) {
            runValidationTasks("under13_src", value);
          }
          setUnder13_src(value);
        }}
        onBlur={() => runValidationTasks("under13_src", under13_src)}
        errorMessage={errors.under13_src?.errorMessage}
        hasError={errors.under13_src?.hasError}
        {...getOverrideProps(overrides, "under13_src")}
      ></TextField>
      <TextField
        label="Under13 description"
        isRequired={false}
        isReadOnly={false}
        defaultValue={under13_description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              under13_src,
              under13_description: value,
              over13_src,
              over13_description,
              restricted,
            };
            const result = onChange(modelFields);
            value = result?.under13_description ?? value;
          }
          if (errors.under13_description?.hasError) {
            runValidationTasks("under13_description", value);
          }
          setUnder13_description(value);
        }}
        onBlur={() =>
          runValidationTasks("under13_description", under13_description)
        }
        errorMessage={errors.under13_description?.errorMessage}
        hasError={errors.under13_description?.hasError}
        {...getOverrideProps(overrides, "under13_description")}
      ></TextField>
      <TextField
        label="Over13 src"
        isRequired={false}
        isReadOnly={false}
        defaultValue={over13_src}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              under13_src,
              under13_description,
              over13_src: value,
              over13_description,
              restricted,
            };
            const result = onChange(modelFields);
            value = result?.over13_src ?? value;
          }
          if (errors.over13_src?.hasError) {
            runValidationTasks("over13_src", value);
          }
          setOver13_src(value);
        }}
        onBlur={() => runValidationTasks("over13_src", over13_src)}
        errorMessage={errors.over13_src?.errorMessage}
        hasError={errors.over13_src?.hasError}
        {...getOverrideProps(overrides, "over13_src")}
      ></TextField>
      <TextField
        label="Over13 description"
        isRequired={false}
        isReadOnly={false}
        defaultValue={over13_description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              under13_src,
              under13_description,
              over13_src,
              over13_description: value,
              restricted,
            };
            const result = onChange(modelFields);
            value = result?.over13_description ?? value;
          }
          if (errors.over13_description?.hasError) {
            runValidationTasks("over13_description", value);
          }
          setOver13_description(value);
        }}
        onBlur={() =>
          runValidationTasks("over13_description", over13_description)
        }
        errorMessage={errors.over13_description?.errorMessage}
        hasError={errors.over13_description?.hasError}
        {...getOverrideProps(overrides, "over13_description")}
      ></TextField>
      <SwitchField
        label="Restricted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={restricted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              under13_src,
              under13_description,
              over13_src,
              over13_description,
              restricted: value,
            };
            const result = onChange(modelFields);
            value = result?.restricted ?? value;
          }
          if (errors.restricted?.hasError) {
            runValidationTasks("restricted", value);
          }
          setRestricted(value);
        }}
        onBlur={() => runValidationTasks("restricted", restricted)}
        errorMessage={errors.restricted?.errorMessage}
        hasError={errors.restricted?.hasError}
        {...getOverrideProps(overrides, "restricted")}
      ></SwitchField>
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
