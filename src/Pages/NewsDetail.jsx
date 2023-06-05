import { Container, Box } from '@mui/system';
import BreadNavigation from '../Components/BreadNavigation';

import { useParams } from 'react-router-dom';
import useFetchDetails from '../Hooks/useFetchDetails';

function NewsDetail() {
  const { id } = useParams();

  const [movies] = useFetchDetails(id);
  console.log(movies);

  return (
    <>
      <Box sx={{ mt: 10 }}>
        <BreadNavigation name='Home' />
        <Container>
          <Box
            sx={{
              backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/599/304/0/fast-and-furious-brian-o-conner-dominic-toretto-jordana-brewster-wallpaper-preview.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px',
              opacity: 0.2,
            }}
          ></Box>
        </Container>
      </Box>
    </>
  );
}

export default NewsDetail;
