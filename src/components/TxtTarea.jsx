import React from 'react';
import {saveAs} from 'file-saver';

const TxtTarea = ({ data, setData }) => {
    
    const handleClickSave = (e) => {
        const blob = new Blob([data], {type: 'text/plain;charset=utf-8'});
        saveAs(blob, 'results.txt');
        setData('');
    }

    const handleClickCancel = (e) => {
        setData('');
    }

    return (
        <>
            <textarea
                name="txtTarea"
                id="txtTarea"
                cols="30"
                rows="10"
                className='txtTarea'
                value={data}
                onChange={(e) => setData(e.target.value)}
            >

            </textarea>

            <div className='txtTatea__buttons'>
                <input type="button" value='save' onClick={handleClickSave}/>
                <input type="button" value='cancel' onClick={handleClickCancel} />
            </div>

        </>
    )
}

export default TxtTarea