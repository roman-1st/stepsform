export type FormStepStatus = "uncompleted" | "active" | "completed";

export type FormStateType = {
  firstName: string;
  lastName: string;
  gender: "men" | "women" | null;
  descriptionType: "1" | "2" | null;
  description: "";
  langs: string[];
};

export type FormStepProps = {
  disabled: boolean;
};
