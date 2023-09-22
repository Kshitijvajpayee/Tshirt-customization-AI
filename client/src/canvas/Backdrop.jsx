import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'


const Backdrop = () => {
    const shadows = useRef();
    return (
        <AccumulativeShadows
            ref={shadows}
            temporal   //smoothing edges with frame
            frames={60}
            alphaTest={0.85}       //D
            scale={10}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, -0.14]}>
            <RandomizedLight                     //light src for shadow
                amount={4}
                radius={9}
                intensity={0.55}
                ambient={0.25}
                position={[5, 5, -10]} />

            <RandomizedLight                     //light src for shadow
                amount={7}
                radius={5}
                intensity={0.25}
                ambient={0.85}
                position={[-5, 5, -6]} />
        </AccumulativeShadows>
    )
}

export default Backdrop
