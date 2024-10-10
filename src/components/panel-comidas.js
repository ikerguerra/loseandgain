import * as React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import '../../node_modules/react-circular-progressbar/dist/styles.css';
import './panel-comidas.css'

function PanelComidas() {
    const calories = 30;    

    return (     
        <div className='container'>   
            <div className='encabezado'>
                <span class="left">Alimentación</span>
                <span class="right">Más</span>
            </div>
            <div className="panel">            
                <table class="styled-table">
                    <tbody>
                        <tr>
                            <td className='circularProgressbar'><CircularProgressbar value={calories} maxValue={calories} text={`${calories} Restantes`} /></td>
                            <td>
                                <div class="content">
                                <h3>Desayuno</h3>
                                <p>0 / 891 kcal</p>
                                </div>
                            </td>
                            <td><button class="button">+</button></td>
                        </tr>
                        <tr>
                            <td className='circularProgressbar'><CircularProgressbar value={calories} maxValue={calories} text={`${calories} Restantes`} /></td>
                            <td>
                                <div class="content">
                                <h3>Almuerzo</h3>
                                <p>0 / 1189 kcal</p>
                                </div>
                            </td>                        
                            <td><button class="button">+</button></td>
                        </tr>
                        <tr>
                            <td className='circularProgressbar'><CircularProgressbar value={calories} maxValue={calories} text={`${calories} Restantes`} /></td>
                            <td>
                                <div class="content">
                                <h3>Cena</h3>
                                <p>0 / 743 kcal</p>
                                </div>
                            </td>
                            <td><button class="button">+</button></td>
                        </tr>
                        <tr>
                            <td className='circularProgressbar'><CircularProgressbar value={calories} maxValue={calories} text={`${calories} Restantes`} /></td>
                            <td>
                                <div class="content">
                                <h3>Snack</h3>
                                <p>0 / 149 kcal</p>
                                </div>
                            </td>
                            <td><button class="button">+</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>            
        </div>
    );
}

export default PanelComidas;