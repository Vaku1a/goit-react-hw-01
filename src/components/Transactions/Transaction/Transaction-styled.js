import styled from "styled-components";

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableData = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-transform: capitalize;
`;
