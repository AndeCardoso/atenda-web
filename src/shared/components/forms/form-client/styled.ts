import styled from 'styled-components';

export const FormContainer = styled.section`
  width: 700px;
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  display: flex;
  text-transform: uppercase;
  font-size: 32px;
  color: #35AB9F;
`;

export const WrapperInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const LegendAddress = styled.legend`
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.28);
`;

export const FieldsetAddress = styled.fieldset`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  padding: 15px;
  margin-top: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.23)
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