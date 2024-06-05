import { FormStepStatus } from "../components/Form/Form.types.ts";

export const getCurrentFormStepsStatus = (
  index: number,
  currentStep: number,
) => {
  let status: FormStepStatus = "uncompleted";
  if (index + 1 === currentStep) {
    status = "active";
  }
  if (index + 1 < currentStep) {
    status = "completed";
  }

  return status;
};
