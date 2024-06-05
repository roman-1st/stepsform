import { ErrorMessage, Field } from "formik";
import { FC } from "react";
import { FormStepProps } from "../Form.helper.ts";

export const Step1: FC<FormStepProps> = ({ disabled }) => {
  return (
    <div className="">
      <div>
        <label className="form-label mb-2 text-secondary">Имя</label>
        <Field
          name="firstName"
          type="text"
          className="form-control"
          disabled={disabled}
        />
        <div className="text-danger mt-2">
          <ErrorMessage name="firstName" />
        </div>
      </div>
      <div>
        <label className="form-label mb-2 text-secondary">Фамилия</label>
        <Field
          name="lastName"
          type="text"
          className="form-control"
          disabled={disabled}
        />
        <div className="text-danger mt-2">
          <ErrorMessage name="lastName" />
        </div>
      </div>
    </div>
  );
};
