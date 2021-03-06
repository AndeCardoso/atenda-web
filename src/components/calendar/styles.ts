import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Title = styled.h1`
  align-self: flex-start;
  text-transform: uppercase;
  font-size: 32px;
`;

export const Calendar = styled.div<{ primary: string; secondary: string; contrast: string }>`
  width: 100%;

  .fc {
    background-color: #ffffff;
    color: #000;
    width: 100%;
    height: 600px;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  .fc .fc-toolbar.fc-header-toolbar {
    margin-bottom: 0;
  }

  .fc-direction-ltr .fc-button-group > .fc-button {
    background-color: ${({ secondary }) => secondary};
    border-color: ${({ primary }) => primary};
  }

  .fc .fc-button-primary:disabled {
    background-color: ${({ secondary }) => secondary};
    color: ${({ contrast }) => contrast};
    border-color: ${({ primary }) => primary};
  }

  .fc .fc-button-primary {
    background-color: ${({ secondary }) => secondary};
    color: ${({ contrast }) => contrast};
    border-color: ${({ primary }) => primary};
  }

  .fc-header-toolbar {
    background-color: ${({ primary }) => primary};
    color: ${({ secondary }) => secondary};
    border-radius: 5px;
    height: 40px;
    margin-bottom: 0;
  }

  .fc-toolbar-title {
    padding: 0 15px;
    font-size: 15px;
  }

  .fc-button-group {
    height: 40px;
  }

  .fc-event-title-container {
    cursor: pointer;
  }

  .wrapper-agenda {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }

  .wrapper-agenda p {
    width: auto;
    font-size: 18px;
    margin: 0;
  }

  .appoint-top {
    width: 800px;
  }

  .appoint-btns {
    display: flex;
  }

  @media only screen and (max-width: 768px) {
    .fc {
      width: 300px;
    }

    .appoint-top {
      width: 300px;
    }

    .appoint-btns {
      flex-direction: column;
    }

    .wrapper-agenda {
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .fc .fc-toolbar.fc-header-toolbar {
      font-size: 10px;
    }

    .wrapper-agenda h1 {
      font-size: 35px;
    }
  }
`;
