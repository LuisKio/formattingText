import React, { useState } from 'react'

const Archivo = ({ setData }) => {
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const fileReader = new FileReader();
        fileReader.readAsText(file);

        fileReader.onload = () => {
            const datos = fileReader.result.split(/\r\n|\n/);
            let result = '';

            datos.forEach(element => {
                if(!element.split('=')[1]){
                    setError(true);
                    return;
                }

                const data = element.split('=')[1].trim().split(' ');

                switch (data.length) {
                    case 3:
                        result = result + `SELECT nombre, fecha, curp FROM people WHERE nombre = '${data[0]}' AND paterno = '${data[1]}' AND materno = '${data[2]}'\n`;
                        break;
                    case 4:
                        result = result + `SELECT nombre, fecha, curp FROM people WHERE nombre = '${data[0]} ${data[1]}' AND paterno = '${data[2]}' AND materno = '${data[3]}'\n`;
                        break;
                    default:
                        result = result + `${element}\n`;
                        break;
                }
            });


            setData(result.replaceAll('#', 'Ã').trim());

        }

        fileReader.onerror = () => {
            setData(fileReader.error);
        }
    }

    return (
        <>
            <h2 className='container__title'>{error ? 'El archivo selecciona es invalido' : 'Selecciona un archivo'}</h2>
            <input type="file" multiple={false} onChange={handleChange} />
        </>
    )
}

export default Archivo