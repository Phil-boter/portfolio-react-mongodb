import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { A11yAnnouncer } from "@react-three/a11y";
import { OrbitControls, Html, useProgress, Cloud } from "@react-three/drei";

export default function ThreeHeadline() {
    function Loader() {
        const { progress } = useProgress();
        return <Html center>{progress} % loaded</Html>;
    }

    return (
        <div id="canvas-container">
            <Canvas
                style={{
                    backgroundColor: "skyblue",
                    height: "100vh",
                }}
            >
                <Suspense fallback={<Loader />}>
                    <ambientLight intensity={1} />
                    <directionalLight color="white" position={[3, 0, 5]} />
                    <Cloud position={[-4, -2, 0]} args={[3, 2]} />
                    <Cloud position={[-4, 2, 0]} args={[3, 2]} />
                    <Cloud args={[3, 2]} />
                    <Cloud position={[4, -2, 0]} args={[3, 2]} />
                    <Cloud position={[4, 2, 0]} args={[3, 2]} />
                    <OrbitControls />
                </Suspense>
            </Canvas>
            <A11yAnnouncer />
        </div>
    );
}
