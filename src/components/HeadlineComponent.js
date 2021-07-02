import "../css/headlineComponent.css";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import {
    OrbitControls,
    Html,
    useProgress,
    Cloud,
    Text,
} from "@react-three/drei";

function ThreeHeadline({ initialState }) {
    function Loader() {
        const { progress } = useProgress();
        return <Html center>{progress} % loaded</Html>;
    }

    return (
        <div id="canvas-container">
            <Canvas
                style={{
                    backgroundColor: "skyblue",
                    height: "82vh",
                }}
                shadowMap
                camera={{ position: [-1, 0, 9], fov: 150 }}
            >
                <Suspense fallback={<Loader />}>
                    <ambientLight intensity={0.7} />
                    <directionalLight color="white" position={[3, 0, 5]} />
                    <Cloud position={[-4, -2, 0]} args={[3, 2]} />
                    <Cloud position={[-4, 2, 0]} args={[3, 2]} />
                    <Cloud args={[3, 2]} />
                    <Cloud position={[4, -2, 0]} args={[3, 2]} />
                    <Cloud position={[4, 2, 0]} args={[3, 2]} />
                    <Text
                        fontSize={3}
                        position={[0, 0, 0]}
                        color="black"
                        font="https://fonts.googleapis.com/css2?family=Montserrat&family=Vollkorn&display=swap"
                    >
                        {initialState.header.toUpperCase()}
                    </Text>

                    <OrbitControls autoRotate />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default function HeadlineComponent({ initialState }) {
    // console.log("initialState", initialState);
    return (
        <>
            <div className="headline-container" style={{ height: "100vh" }}>
                {initialState ? (
                    <ThreeHeadline initialState={initialState} />
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
