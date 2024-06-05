import { ErrorMessage, Field } from "formik";
import { CustomMultiSelect } from "../../../shared/form/fields";
import { languageDict } from "../../../dictionaries";
import { FC } from "react";

export const Step4: FC = () => {
  return (
    <div className="">
      <div>
        <label className="form-label mb-2 text-secondary">
          Выберите любимые языки
        </label>
        <Field
          className=""
          name="langs"
          options={languageDict}
          component={CustomMultiSelect}
          placeholder="..."
          isMulti={true}
        />
        <div className="text-danger mt-2">
          <ErrorMessage name="langs" />
        </div>
      </div>
    </div>
  );
};
