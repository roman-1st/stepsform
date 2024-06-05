import { ErrorMessage, Field, useField } from "formik";
import { FC } from "react";
import { FormStepProps } from "../Form.helper.ts";

export const Step3: FC<FormStepProps> = ({ disabled }) => {
  const [field] = useField("descriptionType");
  return (
    <div>
      <label className="form-label mb-2 text-secondary">
        Расскажите о себе
      </label>
      <div>
        <div>
          <Field
            name="descriptionType"
            type="radio"
            className="form-check-input"
            value={"1"}
            id={"gender-men"}
            disabled={disabled}
          />
          <label htmlFor="#gender-men" className="form-check-label ms-2">
            В двух словах
          </label>
        </div>
        <div>
          <Field
            name="descriptionType"
            type="radio"
            className="form-check-input"
            value={"2"}
            id={"gender-women"}
            disabled={disabled}
          />
          <label htmlFor="#gender-women" className="form-check-label ms-2">
            Подробно
          </label>
        </div>
      </div>
      <div className="mt-2">
        {field.value === "1" && (
          <div>
            <label className="form-label mb-2 text-secondary">
              Краткое описание
            </label>
            <Field
              name="description"
              type="text"
              className="form-control"
              disabled={disabled}
            />
            <div className="text-danger mt-2">
              <ErrorMessage name="description" />
            </div>
          </div>
        )}
        {field.value === "2" && (
          <div>
            <label className="form-label mb-2 text-secondary">
              Подробное описание
            </label>
            <Field
              as={"textarea"}
              name="description"
              type="text"
              className="form-control"
              disabled={disabled}
            />
            <div className="text-danger mt-2">
              <ErrorMessage name="description" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
