import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom';
import { Home, Dashboard } from 'pages';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};