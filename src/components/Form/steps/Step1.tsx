import { ErrorMessage, Field } from "formik";
import { FC } from "react";

export const Step1: FC = () => {
  return (
    <div className="">
      <div>
        <label className="form-label mb-2 text-secondary">Имя</label>
        <Field name="firstName" type="text" className="form-control" />
        <div className="text-danger mt-2">
          <ErrorMessage name="firstName" />
        </div>
      </div>
      <div>
        <label className="form-label mb-2 text-secondary">Фамилия</label>
        <Field name="lastName" type="text" className="form-control" />
        <div className="text-danger mt-2">
          <ErrorMessage name="lastName" />
        </div>
      </div>
    </div>
  );
};
