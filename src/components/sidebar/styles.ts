import styled from 'styled-components';

export const Avatar = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: none;
  padding: 5px;
`;

export const UserName = styled.h2`
  font-size: 16px;
  font-weight: 900;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const TopButtons = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 0;
`;
