import styled from 'styled-components';

export const FormContainer = styled.section`
  max-width: 700px;
  padding: 5px 15px 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const WrapperInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Legend = styled.legend`
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  color: ${props => props.theme};
`;

export const Fieldset = styled.fieldset`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  padding: 15px;
  margin-top: 10px;
  border: 0.5px solid ${props => props.theme};
`;

export const WrapperButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  button {
    margin: 0 5px;
  }
`;
