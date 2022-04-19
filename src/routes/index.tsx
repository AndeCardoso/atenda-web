import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom';
import { Home, Dashboard } from 'pages';
import { FormClient } from 'shared/components';
import { FormOs } from 'shared/components/forms/form-os/FormOs';
import { Calendar } from 'shared/components/calendar/Calendar';
import { FormTechnician } from 'shared/components/forms/form-technician/FormTechnician';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
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