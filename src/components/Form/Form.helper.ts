import * as Yup from "yup";
const requiredMsg = "Обязательное поле";

export type FormType = {
  firstName: string;
  lastName: string;
  gender: "men" | "women" | null;
  descriptionType: "1" | "2" | null;
  description: "";
  langs: [];
};

export type FormStepProps = {
  disabled: boolean;
};
export const formValidateSchema = [
  Yup.object({
    firstName: Yup.string().required(requiredMsg),
    lastName: Yup.string().required(requiredMsg),
  }),
  Yup.object({
    gender: Yup.string().required(requiredMsg),
  }),
  Yup.object({
    descriptionType: Yup.string().required(requiredMsg),
    description: Yup.string()
      .required(requiredMsg)
      .max(20, "Максимальная длина - 20")
      .when("descriptionType", {
        is: "2",
        then: (schema) => schema.max(255, "Максимальная длина - 255"),
      }),
  }),
  Yup.object({
    langs: Yup.array().min(1, requiredMsg).of(Yup.string().required("!!!!")),
  }),
];

export const formInitialState: FormType = {
  firstName: "",
  lastName: "",
  gender: null,
  descriptionType: null,
  description: "",
  langs: [],
};
