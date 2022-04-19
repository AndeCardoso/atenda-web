import RocketLaunch from '@mui/icons-material/RocketLaunch';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import BgHome from 'assets/imgs/background.jpg';

export const Home = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      sx={{
        background: `url(${BgHome})`,
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        marginTop="-390px"
      >
        <Typography
          fontSize="90px"
          fontWeight="700"
          color="#fff"
        >
          ATENDA
        </Typography>
        <RocketLaunch 
          sx={{
            width: '90px',
            height: 'auto',
            fill: '#fff'
          }}
        />
      </Box>
    </Box>
  );
};