import * as React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import '../../node_modules/react-circular-progressbar/dist/styles.css';
import './panel-comidas.css'
import { useNavigate } from 'react-router-dom';

function PanelComidas() {
    const calories = 30;    

    const navigate = useNavigate();

    const handleNavigateToDetails = (comida) => {
        navigate('/detalles', { state: {comida: comida}});   
    }

    return (     
        <div className='container'>   
            <div className='encabezado'>
                <span className="left">Alimentación</span>
                <span className="right">Más</span>
            </div>
            <div className="panel">            
                <table className="styled-table">
                    <tbody>
                        <tr onClick={() => handleNavigateToDetails('Desayuno')}>
                            <td className='circularProgressbar'><CircularProgressbar value={calories} maxValue={calories} text={`${calories} Restantes`} /></td>
                            <td>
                                <div className="content">
                                <h3>Desayuno</h3>
                                <p>0 / 891 kcal</p>
                                </div>
                            </td>
                            <td><button className="button" onClick={handleNavigateToDetails}>+</button></td>
                        </tr>
                        <tr onClick={() => handleNavigateToDetails('Almuerzo')}>
                            <td className='circularProgressbar'><CircularProgressbar value={calories} maxValue={calories} text={`${calories} Restantes`} /></td>
                            <td>
                                <div className="content">
                                <h3>Almuerzo</h3>
                                <p>0 / 1189 kcal</p>
                                </div>
                            </td>                        
                            <td><button className="button" onClick={handleNavigateToDetails}>+</button></td>
                        </tr>
                        <tr onClick={() => handleNavigateToDetails('Cena')}>
                            <td className='circularProgressbar'><CircularProgressbar value={calories} maxValue={calories} text={`${calories} Restantes`} /></td>
                            <td>
                                <div className="content">
                                <h3>Cena</h3>
                                <p>0 / 743 kcal</p>
                                </div>
                            </td>
                            <td><button className="button" onClick={handleNavigateToDetails}>+</button></td>
                        </tr>
                        <tr onClick={() => handleNavigateToDetails('Snack')}>
                            <td className='circularProgressbar'><CircularProgressbar value={calories} maxValue={calories} text={`${calories} Restantes`} /></td>
                            <td>
                                <div className="content">
                                <h3>Snack</h3>
                                <p>0 / 149 kcal</p>
                                </div>
                            </td>
                            <td><button className="button" onClick={handleNavigateToDetails}>+</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>            
        </div>
    );
}

export default PanelComidas;