import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function RadioSelection({ handleSelect }) {
  return (
    <FormControl>
      <FormLabel id='demo-row-radio-buttons-group-label'>Sort By</FormLabel>
      <RadioGroup
        defaultValue='now_playing'
        row
        aria-labelledby='demo-row-radio-buttons-group-label'
        name='row-radio-buttons-group'
        onChange={(e) => {
          handleSelect(e.target.value), console.log(e.target.value);
        }}
      >
        <FormControlLabel
          value='top_rated'
          control={<Radio size='small' />}
          label='Top Rating'
        />
        <FormControlLabel
          value='popular'
          control={<Radio size='small' />}
          label='Popular'
        />
        <FormControlLabel
          value='trending'
          control={<Radio size='small' />}
          label='Trending'
        />
        <FormControlLabel
          value='now_playing'
          control={<Radio size='small' />}
          label='In Theatres'
        />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioSelection;
