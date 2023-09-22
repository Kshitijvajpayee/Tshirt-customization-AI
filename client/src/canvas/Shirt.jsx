import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from '../store';


const Shirt = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/shirt_baked.glb');       //importing 3D model

    const logoTexture = useTexture(snap.logoDecal);   //snap is the store for the pngs (path pointing to regular png img)
    const fullTexture = useTexture(snap.fullDecal);

    //for applying the colors 
    useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25.delta));
    const stateString = JSON.stringify(snap);      //to track the changes


    return (
        <group
            key={stateString}>
            <mesh
                castShadow
                geometry={nodes.T_Shirt_male.geometry}                              //D
                material={materials.lambert1}
                material-roughness={1}
                dispose={null}>

                {snap.isFullTexture && (
                    <Decal
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={1}
                        map={fullTexture}
                    />
                )}

                {snap.isLogoTexture && (
                    <Decal
                        position={[0, 0.04, 0.15]}
                        rotation={[0, 0, 0]}
                        scale={0.15}
                        map={logoTexture}
                        //  map-anisotropy={16}    //quality of texture
                        depthTest={false}      //render on top of other elements
                        depthWrite={true}


                    />
                )}


            </mesh>
        </group>
    )
}

export default Shirt
