import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom';
import { Dashboard, Login } from 'pages';
import {
  FormClient,
  FormOs,
  Calendar,
  FormTechnician
} from 'components';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/" element={<Dashboard />} >
          <Route path='cadastro-os' element={<FormOs />} />
          <Route path='cadastro-cliente' element={<FormClient />} />
          <Route path='atendimento' element={<Calendar />} />
          <Route path='cadastro-tecnico' element={<FormTechnician />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};