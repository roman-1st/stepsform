import { ErrorMessage, Field } from "formik";
import { FC } from "react";

export const Step2: FC = () => {
  return (
    <div>
      <label className="form-label mb-2 text-secondary">Выберите пол</label>
      <div className="">
        <div>
          <Field
            name="gender"
            type="radio"
            className="form-check-input"
            value={"men"}
            id={"gender-men"}
          />
          <label htmlFor="#gender-men" className="form-check-label ms-2">
            Мужской
          </label>
        </div>
        <div>
          <Field
            name="gender"
            type="radio"
            className="form-check-input"
            value={"women"}
            id={"gender-women"}
          />
          <label htmlFor="#gender-women" className="form-check-label ms-2">
            Женский
          </label>
        </div>
      </div>
      <div className="text-danger mt-2">
        <ErrorMessage name="gender" />
      </div>
    </div>
  );
};
