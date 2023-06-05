import { useState } from 'react';

//Catergory Data
import { newsCatergory } from '../Utills/Catergory';

import { BiMoon, BiMenu, BiNews } from 'react-icons/bi';

import {
  Drawer,
  AppBar,
  Box,
  Typography,
  Button,
  List,
  ListItemIcon,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  IconButton,
} from '@mui/material';
import SearchBar from './SearchBar';

function Navbar() {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <AppBar>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        m={1}
      >
        <Box>
          <Typography variant='h5'>
            MOVIE
            <Typography
              sx={{ display: 'inline', mx: '5px', fontSize: 'h6.fontSize' }}
            >
              VISTA
            </Typography>
          </Typography>
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
            <SearchBar />
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
