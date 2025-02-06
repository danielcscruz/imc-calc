import {useState, useEffect} from "react";
import styles from './Display.module.css'


const Display = () => {
    const [position, setPosition] = useState({x:0, y:0});
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [showMessage, setShowMessage] = useState(true);

    useEffect(()=> {
        setShowMessage(true);
    }, []);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = rect.height - (e.clientY - rect.top);
        setPosition({x,y});
        console.log(position.x, position.y)
        setPeso((position.x/2.5).toFixed(2));
        setAltura((position.y/250).toFixed(2));
    }

    const imc = (peso / (altura * altura)).toFixed(2); 

    let classification = "";
    if (imc < 18.5) {
        classification = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classification = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classification = "Sobrepeso";
    } else {
        classification = "Obesidade";
    }

    const handleMouseEnter = () => {
        setShowMessage(false);
    };

    return(
            <>
            <div className={styles.imgBox} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
            {showMessage && <div className={styles.message}>Move your mouse here to start calculating your IMC</div>}
                <img className={styles.human} style={{ transform: `scale(${position.x/500}, ${position.y/500})` }} src="./src/assets/human.svg" alt=""></img> 
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>peso:</td>
                                <td>{peso}</td>
                                <td>kg</td>
                            </tr>
                            <tr>
                                <td>altura:</td>
                                <td>{altura}</td>
                                <td>m</td>
                            </tr>
                            <tr>
                                <td>IMC:</td>
                                <td>{imc}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>{classification}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <img
                    src="./src/assets/square.png"
                    alt="square"
                    className={styles.squareV}
                    style={{ left:0, bottom: `${position.y}px`}}
                /><img
                    src="./src/assets/square.png"
                    alt="square"
                    className={styles.squareH}
                    style={{  left: `${position.x}px`, bottom:0}}
                /> 
            </div>
            </>
    )
}

export default Display