import {
  FormButtonsWrapper,
  FormStatusbarItem,
  FormStatusbarWrapper,
  FormStepWrapper,
  FormWrapper,
} from "../../shared/form";
import { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import { formInitialState, formValidateSchema } from "./Form.helper.ts";
import { Step1, Step2, Step3, Step4 } from "./steps";
import { Form as FormikForm, Formik } from "formik";
import { getCurrentFormStepsStatus } from "../../utils";
import { ContentWrapper } from "../../shared/components";
import { FormStateType, FormStepProps } from "./Form.types.ts";

const maxSteps = 4;

const FormStepsList: { [key: number]: FC<FormStepProps> } = {
  1: Step1,
  2: Step2,
  3: Step3,
  4: Step4,
};

type FormProps = {
  result?: FormStateType;
  setResult: Dispatch<SetStateAction<FormStateType | undefined>>;
};

export const Form: FC<FormProps> = ({ result, setResult }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentSchema, setCurrentSchema] = useState(
    formValidateSchema[currentStep - 1],
  );
  const lastStep = currentStep === maxSteps;
  const disabledForm = !!result;

  const onSubmit = (values: FormStateType, actions: any) => {
    sessionStorage.setItem("result", JSON.stringify(values));

    if (!lastStep) {
      setCurrentStep((prev) => prev + 1);
      setCurrentSchema(formValidateSchema[currentStep]);
      return;
    } else {
      actions.resetForm();
      setResult(values);
      setCurrentStep(1);
      setCurrentSchema(formValidateSchema[0]);
      sessionStorage.removeItem("result");
    }
  };

  const goToPrevStep = (prev: number) => {
    setCurrentStep(prev - 1);
    setCurrentSchema(formValidateSchema[prev - 2]);
  };

  const getInitialState = useMemo(() => {
    if (sessionStorage.getItem("result")) {
      const prevState = JSON.parse(
        sessionStorage.getItem("result") || "",
      ) as FormStateType;

      return {
        ...formInitialState,
        ...prevState,
      };
    }

    return formInitialState;
  }, [result]);

  const StepComponent = FormStepsList[currentStep];

  return (
    <ContentWrapper>
      <FormStatusbarWrapper>
        {formValidateSchema.map((_, index) => (
          <FormStatusbarItem
            key={index}
            status={getCurrentFormStepsStatus(index, currentStep)}
          />
        ))}
      </FormStatusbarWrapper>
      <Formik
        initialValues={getInitialState}
        onSubmit={onSubmit}
        validationSchema={currentSchema}
      >
        {() => {
          return (
            <FormWrapper>
              {/*@ts-ignore*/}
              <FormikForm>
                <FormStepWrapper>
                  <StepComponent disabled={disabledForm} />
                </FormStepWrapper>

                <FormButtonsWrapper>
                  {currentStep > 1 && (
                    <button
                      onClick={() => goToPrevStep(currentStep)}
                      className="btn btn-primary"
                      type="button"
                    >
                      Назад
                    </button>
                  )}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={disabledForm}
                  >
                    {lastStep ? "Завершить" : "Вперед"}
                  </button>
                </FormButtonsWrapper>
              </FormikForm>
            </FormWrapper>
          );
        }}
      </Formik>
    </ContentWrapper>
  );
};
