import * as Yup from "yup";
import { FormStateType } from "./Form.types.ts";
const requiredMsg = "Обязательное поле";

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

export const formInitialState: FormStateType = {
  firstName: "",
  lastName: "",
  gender: null,
  descriptionType: null,
  description: "",
  langs: [],
};
