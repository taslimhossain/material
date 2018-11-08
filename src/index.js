import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './index.css';

function App() {
  return (

<div className="container">
      <Typography variant="h2" gutterBottom>Lorem Ipsum is simply dummy text.</Typography>
      <Typography variant="body1" gutterBottom>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a 
          type specimen book. It has survived not only five centuries, but also the 
          leap into electronic typesetting, remaining essentially unchanged. It was 
          popularised in the 1960s with the release of Letraset sheets containing Lorem
           Ipsum passages, and more recently with desktop publishing software like Aldus 
           PageMaker including versions of Lorem Ipsum.
      </Typography>
      <Button variant="contained" color="primary"> Read More</Button>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));