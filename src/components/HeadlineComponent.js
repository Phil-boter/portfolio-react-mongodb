import "../css/headlineComponent.css";

import useColorGenerator from "../hooks/useColorGenerator";

import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";

import {
    OrbitControls,
    Html,
    useProgress,
    Cloud,
    Text,
    Plane,
} from "@react-three/drei";

function ThreeHeadline({ initialState, color }) {
    function Loader() {
        const { progress } = useProgress();
        return <Html center>{progress} % loaded</Html>;
    }

    return (
        <div id="canvas-header">
            {color && (
                <Canvas
                    style={{
                        backgroundColor: color,
                        height: "75vh",
                    }}
                    shadowMap
                    camera={{ position: [-1, 0, 18], fov: 140 }}
                >
                    <Suspense fallback={<Loader />}>
                        <fog attach="fog" args={[color, 0, 20]} />
                        <ambientLight intensity={0.7} />
                        <directionalLight color="white" position={[3, 0, 5]} />
                        <Cloud position={[-4, -2, 0]} args={[3, 2]} />
                        <Cloud position={[-4, 2, 0]} args={[3, 2]} />
                        <Cloud args={[3, 2]} />
                        <Cloud position={[4, -2, 0]} args={[3, 2]} />
                        <Cloud position={[4, 2, 0]} args={[3, 2]} />
                        <Text
                            fontSize={3}
                            position={[0, 0, 5]}
                            color="black"
                            font="https://fonts.googleapis.com/css2?family=Montserrat&family=Vollkorn&display=swap"
                        >
                            {initialState.header.toUpperCase()}
                        </Text>
                        <Plane
                            rotation-x={-Math.PI / 2}
                            position={[0, -10, 0]}
                            args={[1000, 1000, 10, 10]}
                        >
                            <meshBasicMaterial
                                // attach="material"
                                opacity={1}
                                color={color}
                            />
                        </Plane>
                        <OrbitControls autoRotate />
                    </Suspense>
                </Canvas>
            )}
        </div>
    );
}

export default function HeadlineComponent({ initialState }) {
    const [color, randomBackgroundColor] = useColorGenerator("");

    useEffect(() => {
        randomBackgroundColor();
    }, []);

    return (
        <>
            <div className="headline-container" style={{ height: "90vh" }}>
                {initialState ? (
                    <ThreeHeadline initialState={initialState} color={color} />
                ) : (
                    <></>
                )}

                <div className="single-project-header-container">
                    <span className="single-project-header headline">
                        {initialState.header.toUpperCase()}
                    </span>
                </div>
            </div>
        </>
    );
}
