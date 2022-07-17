import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Button,
  Grid,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  TextField,
  Paper,
  Tooltip,
  Icon,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { create } from 'store/Device.store';

import { typesEquip } from 'utils/constants';
import { IDevice } from 'models';

import { SectionTitle } from 'shared';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { Form } from 'shared/form/Form';

export const FormDevice = () => {
  const dispatch = useDispatch();
  const technician = useSelector<RootState>((state: RootState) => state.technician);

  const clientList = ['Fabiana Garcia', 'Mª Loeci Monteiro', 'Milton Cardoso'];

  const { register, handleSubmit } = useForm<IDevice>();

  const onSubmit: SubmitHandler<IDevice> = (data) => {
    dispatch(create(data));
  };

  useEffect(() => {
    technician;
  }, [technician]);

  return (
    <Paper elevation={3}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <SectionTitle>Cadastrar Dispositivo</SectionTitle>
        <Grid container spacing={1}>
          <Grid item xs={6}>
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
              <InputLabel id="typeEquip">Tipo de Equipamento</InputLabel>
              <Select
                label="Tipo de Equipamento"
                {...register('typeEquip', { required: true })}
                defaultValue=""
                labelId="typeEquip"
                id="typeEquip"
                size="small"
                variant="outlined"
                required
              >
                {typesEquip.map((type, index) => (
                  <MenuItem value={type.VALUE} key={index}>
                    {type.VIEW}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Nº de Série"
              {...register('serialNumber')}
              id="serialNumber"
              size="small"
              inputMode="text"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Marca"
              {...register('brand')}
              id="brand"
              size="small"
              inputMode="text"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Modelo"
              {...register('model')}
              id="model"
              size="small"
              inputMode="text"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Observações"
              {...register('observations')}
              id="observations"
              size="small"
              multiline
              rows={4}
              inputMode="text"
              variant="outlined"
              fullWidth
            />
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
