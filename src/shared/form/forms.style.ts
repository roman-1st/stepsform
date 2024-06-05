import { FormStepStatus } from "../../types";
import styled from "styled-components";

export const FormStatusbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;
type FormStatusbarItemProps = {
  status: FormStepStatus;
};
export const FormStatusbarItem = styled.div<FormStatusbarItemProps>`
  background: ${(props) => {
    switch (props.status) {
      case "active":
        return "#cb1616";
      case "completed":
        return "#000000";

      default:
        return "lightgray";
    }
  }};
  width: 70px;
  height: 10px;
  border-radius: 4px;
`;
export const FormWrapper = styled.div`
  background: white;
`;
export const FormStepWrapper = styled.div`
  max-width: 400px;
  min-height: 200px;
  padding-block: 15px;
`;

export const FormButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-width: 100%;
`;
