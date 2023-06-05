import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Link } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';
import { Box } from '@mui/system';

function BreadNavigation({ name }) {
  return (
    <>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link to={'/'}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              ml: 2,
              color: '#fff',
            }}
          >
            <Box sx={{ mr: 1 }}>
              <AiOutlineHome />
            </Box>
            <Box sx={{ fontFamily: 'Poppins' }}>{name}</Box>
          </Box>
        </Link>
      </Breadcrumbs>
    </>
  );
}

export default BreadNavigation;
