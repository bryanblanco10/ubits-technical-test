import { TextLabel, TextValue } from "../../atoms";
import { Row } from "./style";

interface Props {
  label: string;
  value: string;
}

export const InfoRow = ({ label, value }: Props) => {
  return (
    <Row>
      <TextLabel>{label}</TextLabel>
      <TextValue>{value}</TextValue>
    </Row>
  );
};