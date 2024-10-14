import React from 'react';
import '../App.css';
import { Box, CssBaseline, Divider, Fab, List, ListItem, ListItemText, Paper } from '@mui/material';
import plateImage from '../utils/plate_of_rice_with_chicken.png';
import { useNavigate } from 'react-router-dom';

const Detalles = () => {

  const navigate = useNavigate();

  const handleNavigateToDetails = () => {
      navigate('/');        
  }

  const ref = React.useRef(null);
  
  return (
    <div>
      <header>
        <div className='encabezado'>
        <button onClick={handleNavigateToDetails}>&lt;</button>
        <div>Almuerzo</div>
        <div>Editar</div>
        </div>
      </header>      
      <img style={{width: '100%'}} src={plateImage} alt='Imagen'></img>      
      <div className="container">
        <div className="parent">
            <div className="div1">0 kcal<div>Calorías</div></div>
            <div className="div2">0,0 g<div>Carbohidratos</div></div>
            <div className="div3">0,0 g<div>Proteínas</div></div>
            <div className="div4">0.0 g<div>Grasas</div></div>  
        </div>
        <List component="nav" aria-label="main mailbox folders">          
          <ListItem button>            
            <ListItemText primary="Arroz" secondary="200g" />
          </ListItem>
          <Divider />
          <ListItem button>            
            <ListItemText primary="Pechuga de pollo" secondary="150g" />
          </ListItem>
          <Divider />
          <ListItem button>            
            <ListItemText primary="Mayonesa" secondary="25g" />
          </ListItem>
          <ListItem button>            
            <ListItemText primary="Arroz" secondary="200g" />
          </ListItem>
          <Divider />
          <ListItem button>            
            <ListItemText primary="Pechuga de pollo" secondary="150g" />
          </ListItem>
          <Divider />
          <ListItem button>            
            <ListItemText primary="Mayonesa" secondary="25g" />
          </ListItem>
          <ListItem button>            
            <ListItemText primary="Arroz" secondary="200g" />
          </ListItem>
          <Divider />
          <ListItem button>            
            <ListItemText primary="Pechuga de pollo" secondary="150g" />
          </ListItem>
          <Divider />
          <ListItem button>            
            <ListItemText primary="Mayonesa" secondary="25g" />
          </ListItem>
          <ListItem button>            
            <ListItemText primary="Arroz" secondary="200g" />
          </ListItem>
          <Divider />
          <ListItem button>            
            <ListItemText primary="Pechuga de pollo" secondary="150g" />
          </ListItem>
          <Divider />
          <ListItem button>            
            <ListItemText primary="Mayonesa" secondary="25g" />
          </ListItem>
        </List>
        <div>Información nutricional</div>
      </div>
      
      <Fab style={fabStyle} variant='extended' color='primary' aria-label='add'>          
        Añadir más
      </Fab>

    </div>
  );
};

const fabStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  left: '50%',
  transform: 'translateX(-50%)'
}

export default Detalles;
