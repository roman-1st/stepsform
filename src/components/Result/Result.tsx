import { FormType } from "../Form/Form.helper.ts";
import { Dispatch, FC, SetStateAction } from "react";
import { ContentWrapper } from "../../shared/components";
import { FormButtonsWrapper } from "../../shared/form";

type ResultProps = {
  result: FormType;
  setResult: Dispatch<SetStateAction<FormType | undefined>>;
};
export const Result: FC<ResultProps> = ({ result, setResult }) => {
  return (
    <ContentWrapper>
      <p className="">Результаты</p>
      <ul className="list-group">
        <li className="list-group-item">Фамилия: {result.firstName}</li>
        <li className="list-group-item">Имя: {result.lastName}</li>
        <li className="list-group-item">Пол: {result.firstName}</li>
        <li className="list-group-item">О себе: {result.description}</li>
        <li className="list-group-item">Любимые языки: {result.langs}</li>
      </ul>
      <FormButtonsWrapper className="mt-2">
        <button
          className="btn btn-secondary"
          onClick={() => setResult(undefined)}
        >
          Пройти тест заново
        </button>
      </FormButtonsWrapper>
    </ContentWrapper>
  );
};
