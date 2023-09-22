import React from 'react'

import CustomButton from './CustomButton';


const AIPicker = ({ prompt, setPrompt, generateingImg, handleSubmit }) => {
    return (
        <div className='aipicker-container'>
            <textarea
                placeholder='Ask AI'
                rows={5}
                className='aipicker-textarea'
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)} />


            <div className='flex flex-wrap gap-3'>
                {generateingImg ? (
                    <CustomButton
                        type="outline"
                        title="Asking AI"
                        customStyles="text-xs" />
                ) : (
                    <>
                        <CustomButton
                            type="filled"
                            title="AI Full"
                            handleClick={() => handleSubmit('full')}
                            customStyles="text-xs" />
                    </>
                )}
            </div>
        </div>
    )
}

export default AIPicker
