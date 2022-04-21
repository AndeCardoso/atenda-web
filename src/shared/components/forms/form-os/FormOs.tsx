import { useForm, SubmitHandler } from 'react-hook-form';
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
import { typesEquip } from 'shared/utils/constants';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const FormOs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  const [openProduct, setOpenProduct] = useState<boolean>(false);

  const technicianList = ['Anderson Cardoso', 'Fulano de Tal'];
  const clientList = ['Fabiana Garcia', 'Mª Loeci Monteiro', 'Milton Cardoso'];

  return (
    <Paper elevation={3}>
      <S.FormContainer>
        <S.Title>Cadastrar Ordem de Serviço</S.Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.WrapperInputs>
            <Grid container display="flex" spacing={1}>
              <Grid item xs={1.5}>
                <TextField
                  label="O.S."
                  {...register('idOs')}
                  id="idOs"
                  size="small"
                  inputMode="text"
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
                    {clientList.map((technician) => (
                      <MenuItem value={technician} key={technician}>
                        {technician}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <Tooltip title="Cadastrar Novo Cliente">
                  <Link to="/dashboard/cadastro-cliente">
                    <Button variant="contained" sx={{ height: '100%', width: '30px' }}>
                      <Icon>person_add_alt</Icon>
                    </Button>
                  </Link>
                </Tooltip>
              </Grid>
              <S.Fieldset>
                <S.Legend>Equipamento</S.Legend>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
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
                        {typesEquip.map((type) => (
                          <MenuItem value={type.VALUE} key={type.index}>
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
                  <Grid item xs={3}>
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
                  <Grid item xs={3.5}>
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
                      rows={3}
                      inputMode="text"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </S.Fieldset>
            </Grid>
            <Grid container spacing={1}>
              <S.Fieldset>
                <S.Legend>Problemas/Defeitos</S.Legend>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      label="Problemas Reportados pelo Cliente"
                      {...register('clientReports')}
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
                      {...register('technicianReports')}
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
                      {...register('services')}
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
                        {...register('parts')}
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
                    {...register('typeEquip', { required: true })}
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
          </S.WrapperInputs>
          <S.WrapperButton>
            <Button type="reset">Limpar</Button>
            <Button variant="contained" type="submit">
            Salvar
            </Button>
          </S.WrapperButton>
        </form>
      </S.FormContainer>
    </Paper>
  );
};
