import { FC } from "react";
import { languageDict } from "../../../dictionaries";
import { FormLastStepProps } from "../Form.types.ts";

export const Step5: FC<FormLastStepProps> = ({ result }) => {
  return (
    <div className="">
      <p className="">Результаты</p>
      <ul className="list-group">
        <li className="list-group-item">Фамилия: {result?.firstName}</li>
        <li className="list-group-item">Имя: {result?.lastName}</li>
        <li className="list-group-item">Пол: {result?.firstName}</li>
        <li className="list-group-item">О себе: {result?.description}</li>
        <li className="list-group-item">
          Любимые языки:{" "}
          {result?.langs.map(
            (el) => languageDict.find((lang) => lang.value === el)?.label + " ",
          )}
        </li>
      </ul>
    </div>
  );
};
