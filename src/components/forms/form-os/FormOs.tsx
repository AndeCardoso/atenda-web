import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
  Button,
  Grid,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  TextField,
  Icon,
  Tooltip,
  FormControlLabel,
  Switch,
  Paper,
} from '@mui/material';

import * as S from './styles';
import { SectionTitle } from 'shared';
import { useDispatch } from 'react-redux';
import { create } from 'store/ServiceOrder.store';
import { IServiceOrder } from 'models';
import { Form } from 'shared/form/Form';

export const FormOs = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<IServiceOrder>();

  const onSubmit: SubmitHandler<IServiceOrder> = (data) => {
    dispatch(create(data));
  };

  const [openProduct, setOpenProduct] = useState<boolean>(false);

  const technicianList = ['Anderson Cardoso', 'Fulano de Tal'];
  const deviceList = ['Asus ROG Striks', 'Acer Latitude'];
  const clientList = ['Fabiana Garcia', 'Mª Loeci Monteiro', 'Milton Cardoso'];

  return (
    <Paper elevation={3}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <SectionTitle>Cadastrar Ordem de Serviço</SectionTitle>
        <Grid container display="flex" spacing={1}>
          <Grid item xs={1.5}>
            <TextField
              label="O.S."
              {...register('idOs')}
              id="idOs"
              size="small"
              inputMode="numeric"
              defaultValue={'001'}
              variant="outlined"
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={5}>
            <FormControl fullWidth size="small">
              <InputLabel id="client">Cliente</InputLabel>
              <Select
                label="Cliente"
                {...register('client', { required: true })}
                defaultValue=""
                labelId="client"
                id="client"
                size="small"
                variant="outlined"
                required
              >
                {clientList.map((client, index) => (
                  <MenuItem value={client} key={index}>
                    {client}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Tooltip title="Cadastrar Novo Cliente" arrow disableInteractive={true}>
              <Link to="/dashboard/cadastro-cliente">
                <Button variant="contained" sx={{ height: '100%', width: 'auto' }}>
                  <Icon>person_add_alt</Icon>
                </Button>
              </Link>
            </Tooltip>
          </Grid>
          <Grid item xs={5}>
            <FormControl fullWidth size="small">
              <InputLabel id="device">Dispositivos</InputLabel>
              <Select
                label="Dispositivos"
                {...register('device', { required: true })}
                defaultValue=""
                labelId="device"
                id="device"
                size="small"
                variant="outlined"
                required
              >
                {deviceList.map((device, index) => (
                  <MenuItem value={device} key={index}>
                    {device}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Tooltip title="Cadastrar Novo Dispositivo" arrow disableInteractive={true}>
              <Link to="/dashboard/cadastro-dispositivo">
                <Button variant="contained" sx={{ height: '100%', width: 'auto' }}>
                  <Icon>devices</Icon>
                </Button>
              </Link>
            </Tooltip>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Acessórios"
              {...register('accessories')}
              id="accessories"
              size="small"
              multiline
              rows={3}
              inputMode="text"
              variant="outlined"
              style={{ marginBottom: '10px' }}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <S.Fieldset>
            <S.Legend>Problemas/Defeitos</S.Legend>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  label="Problemas Reportados pelo Cliente"
                  {...register('reportedIssues')}
                  id="clientReports"
                  size="small"
                  multiline
                  minRows={4}
                  inputMode="text"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Problemas Encontrados pelo Técnico"
                  {...register('findedIssues')}
                  id="technicianReports"
                  size="small"
                  multiline
                  minRows={4}
                  inputMode="text"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </S.Fieldset>
          <S.Fieldset>
            <S.Legend>Serviços Executados</S.Legend>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  label="Serviços Realizados"
                  {...register('performedServices')}
                  id="services"
                  size="small"
                  multiline
                  minRows={4}
                  inputMode="text"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                {...register('hasParts')}
                sx={{ marginLeft: '10px', width: '100%' }}
                label="Troca de peças"
                control={<Switch onChange={() => setOpenProduct(openProduct ? false : true)} />}
              />
            </Grid>
          </S.Fieldset>
          {openProduct ? (
            <S.Fieldset>
              <S.Legend>Peças Utilizadas</S.Legend>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    label="Peças Utilizadas"
                    {...register('usedParts')}
                    id="services"
                    size="small"
                    multiline
                    minRows={4}
                    inputMode="text"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </S.Fieldset>
          ) : (
            <></>
          )}
          <Grid item xs={5}>
            <FormControl fullWidth size="small">
              <InputLabel id="typeEquip">Técnico Responsável</InputLabel>
              <Select
                label="Tipo de Equipamento"
                {...register('technician', { required: true })}
                defaultValue=""
                labelId="typeEquip"
                id="typeEquip"
                size="small"
                variant="outlined"
                required
              >
                {technicianList.map((technician) => (
                  <MenuItem value={technician} key={technician}>
                    {technician}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <S.WrapperButton>
          <Button type="reset">Limpar</Button>
          <Button variant="contained" type="submit">
            Salvar
          </Button>
        </S.WrapperButton>
      </Form>
    </Paper>
  );
};
