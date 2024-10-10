import * as React from 'react';
import { Box, LinearProgress } from '@mui/material';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import '../../node_modules/react-circular-progressbar/dist/styles.css';
import './panel-principal.css'

function PanelPrincipal() {
    const carbs = 0;
    const protein = 0;
    const fat = 0;
    const calories = 2972;
    const totalCarbs = 362;
    const totalProtein = 109;
    const totalFat = 112;
    const progress = 50;

    return (
        <div className='container'>
            <div className='encabezado'>
                <span className="left">Resumen</span>
                <span className="right">Detalles</span>
            </div>
            <div className="panel">                    
                <div className='calorias'>
                    <div className='consumidas'>
                        <p>0</p>                    
                        <p>Consumidas</p>
                    </div>
                    <div className="circle">
                        <CircularProgressbarWithChildren value={calories} maxValue={calories}>
                            <b>{calories}</b>
                            <div>Restantes</div>
                        </CircularProgressbarWithChildren>
                    </div>
                    <div className='quemadas'>
                        <p>0</p>
                        <p>Quemadas</p>
                    </div>
                </div>                
                <div className="macros">
                    <div className="macro">
                    <p>Carbohidratos</p>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={progress} />
                    </Box>
                    <p>{carbs} / {totalCarbs} g</p>
                    </div>
                    <div className="macro">
                    <p>Proteínas</p>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={progress} />
                    </Box>
                    <p>{protein} / {totalProtein} g</p>
                    </div>
                    <div className="macro">
                    <p>Grasas</p>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={progress} />
                    </Box>
                    <p>{fat} / {totalFat} g</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PanelPrincipal;