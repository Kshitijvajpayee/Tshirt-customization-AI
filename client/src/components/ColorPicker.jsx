import React from 'react'
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
    const snap = useSnapshot(state);                 //getting the values
    return (
        <div className='absolute left-full ml-3'>
            <SketchPicker
                color={snap.color}
                // disableAlpha                            //D
                onChange={(color) => state.color = color.hex} />
            {/* <p className=' text-1xl right-5 flex-row '> Picking Color</p> */}
        </div>
    )
}

export default ColorPicker
