import { BiMoon } from 'react-icons/bi';

import { AppBar, Box, Typography, Stack, IconButton } from '@mui/material';
import SearchBar from './SearchBar';

import logo from '../assets/logo.png';

import { Link } from 'react-router-dom';

function Navbar({ getSearch }) {
  const getText = (text) => {
    getSearch(text);
  };

  return (
    <AppBar>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        m={1}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ alignSelf: 'center' }}>
            <img src={logo} style={{ height: '40px', width: '40px' }} />
          </Box>
          <Box
            variant='h5'
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 'bold',
              fontSize: '1.2rem',
            }}
          >
            MOVIEVISTA
          </Box>
        </Box>

        {/* <Box
          sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}
        >
          {newsCatergory.map((item) => (
            <Button key={item} color='inherit'>
              {item}
            </Button>
          ))}
        </Box> */}

        <Box
          sx={{
            display: 'inline-flex',
            flexWrap: 'nowrap',

            alignItems: 'center',
          }}
        >
          <Box sx={{ mx: 2 }}>
            <SearchBar
              getText={(text) => {
                getText(text);
              }}
            />
          </Box>

          {/* <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{
              display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
            }}
            onClick={toggleDrawer}
          >
            <BiMenu />
          </IconButton> */}

          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
          >
            <BiMoon />
          </IconButton>
        </Box>
      </Stack>

      {/* Drawer Area */}
      {/* <Drawer anchor='right' open={drawer} onClose={toggleDrawer}>
        <List>
          {newsCatergory.map((item) => (
            <ListItem disablePadding key={item}>
              <ListItemButton>
                <ListItemIcon>
                  <BiNews />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer> */}
    </AppBar>
  );
}

export default Navbar;
