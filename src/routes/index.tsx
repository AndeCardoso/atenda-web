import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom';
import { Home, Dashboard } from 'pages';
import { FormClient } from 'shared/components';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/" element={<Dashboard />} >
          <Route path='cadastro-os' element={<h1>Cadastro OS</h1>} />
          <Route path='cadastro-cliente' element={<FormClient />} />
          <Route path='atendimento' element={<h1>Atendimento</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};