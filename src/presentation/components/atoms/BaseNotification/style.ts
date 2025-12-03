import styled from "styled-components";

export const Wrapper = styled.div<{ $color: string }>`
  border: 2px solid ${({ $color }) => $color};
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 12px;
  background: #ffffff;
`;

export const Title = styled.h3`
  margin: 0 0 4px 0;
  font-size: 18px;
`;

export const Message = styled.p`
  margin: 0;
  font-size: 14px;
`;
