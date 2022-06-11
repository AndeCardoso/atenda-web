import styled from 'styled-components';

export const Avatar = styled.div`
  background-color: ${props => props.color};
  border-radius: 50%;
  border: none;
  padding: 5px;
`;

export const UserName = styled.h2`
  font-size: 16px;
  font-weight: 900;
`;

export const TopButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
`;