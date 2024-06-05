import {
  FormButtonsWrapper,
  FormStatusbarItem,
  FormStatusbarWrapper,
  FormStepWrapper,
  FormWrapper,
} from "../../shared/form";
import { FC, useState } from "react";
import { formInitialState, formValidateSchema } from "./Form.helper.ts";
import { Step1, Step2, Step3, Step4, Step5 } from "./steps";
import { Form as FormikForm, Formik } from "formik";
import { getCurrentFormStepsStatus } from "../../utils";
import { ContentWrapper } from "../../shared/components";
import { FormLastStepProps, FormStateType } from "./Form.types.ts";

const maxSteps = 5;

const FormStepsList: { [key: number]: FC<FormLastStepProps> } = {
  1: Step1,
  2: Step2,
  3: Step3,
  4: Step4,
  5: Step5,
};

export const Form: FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentSchema, setCurrentSchema] = useState(
    formValidateSchema[currentStep - 1],
  );

  const lastStep = currentStep === maxSteps;

  const onSubmit = (values: FormStateType, actions: any) => {
    console.log(actions);
    sessionStorage.setItem("result", JSON.stringify(values));

    if (!lastStep) {
      setCurrentStep((prev) => prev + 1);
      setCurrentSchema(formValidateSchema[currentStep]);
      return;
    } else {
      sessionStorage.removeItem("result");
      actions.resetForm({ values: formInitialState });
      setCurrentStep(1);
      setCurrentSchema(formValidateSchema[0]);
    }
  };

  const goToPrevStep = (prev: number) => {
    setCurrentStep(prev - 1);
    setCurrentSchema(formValidateSchema[prev - 2]);
  };

  const getInitialState = () => {
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
  };

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
        initialValues={getInitialState()}
        onSubmit={onSubmit}
        validationSchema={currentSchema}
      >
        {({ values }) => {
          return (
            <FormWrapper>
              {/*@ts-ignore*/}
              <FormikForm>
                <FormStepWrapper>
                  <StepComponent result={values} />
                </FormStepWrapper>

                <FormButtonsWrapper>
                  {currentStep > 1 && currentStep < 5 && (
                    <button
                      onClick={() => goToPrevStep(currentStep)}
                      className="btn btn-primary"
                      type="button"
                    >
                      Назад
                    </button>
                  )}
                  {currentStep >= 5 && (
                    <button type="submit" className="btn btn-secondary">
                      Начать сначала
                    </button>
                  )}
                  {currentStep <= maxSteps - 1 && (
                    <button type="submit" className="btn btn-primary">
                      {currentStep === maxSteps - 1 ? "Завершить" : "Вперед"}
                    </button>
                  )}
                </FormButtonsWrapper>
              </FormikForm>
            </FormWrapper>
          );
        }}
      </Formik>
    </ContentWrapper>
  );
};
