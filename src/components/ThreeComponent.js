import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { A11yAnnouncer, A11y } from "@react-three/a11y";
import {
    OrbitControls,
    Html,
    useProgress,
    useContextBridge,
    Text,
    Plane,
    RoundedBox,
} from "@react-three/drei";

import { useHistory } from "react-router-dom";

function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;
}

export default function ThreeComponent({ color, visible, setIsVisible }) {
    const history = useHistory();
    // const a11y = useA11y();
    const ContextBridge = useContextBridge();

    const ContactSphere = () => {
        function navigateToContact() {
            history.push("/contact");
            setIsVisible(false);
        }
        return (
            <>
                <RoundedBox
                    args={[1.5, 1.5, 1.5, 1.5]}
                    position={[-3, 0, -2]}
                    color="black"
                >
                    <meshStandardMaterial metalness={1} roughness={0} />
                </RoundedBox>
                <A11y
                    role="link"
                    href="/contact"
                    description="Welcome to contact page"
                    actionCall={() => navigateToContact()}
                >
                    <Text
                        fontSize={0.4}
                        position={[-3, 0, -1.2]}
                        color="white"
                        font="https://fonts.googleapis.com/css2?family=Montserrat&family=Vollkorn&display=swap"
                    >
                        Contact
                    </Text>
                </A11y>
                <Plane
                    receiveShadow
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[-3.2, -1.9, -2.4]}
                    args={[1.8, 1.8]}
                    opacity={0.1}
                >
                    <meshStandardMaterial
                        attach="material"
                        color="black"
                        opacity={0.6}
                    />
                </Plane>
            </>
        );
    };
    const ProjectSphere = () => {
        function navigateToProject() {
            history.push("/projects");
            setIsVisible(false);
        }
        return (
            <>
                <RoundedBox
                    args={[1.5, 1.5, 1.5, 1.5]}
                    metalness={1}
                    roughness={0}
                    position={[1.5, 0, 2]}
                    color="black"
                >
                    <meshStandardMaterial metalness={1} roughness={0} />
                </RoundedBox>
                <A11y
                    role="link"
                    href="/projects"
                    description="Welcome to project page"
                    actionCall={() => navigateToProject()}
                >
                    <Text
                        fontSize={0.37}
                        position={[1.47, 0, 2.8]}
                        color="white"
                        font="https://fonts.googleapis.com/css2?family=Montserrat&family=Vollkorn&display=swap"
                        width={1.5}
                        height={1.5}
                    >
                        Projects
                    </Text>
                </A11y>
                <Plane
                    receiveShadow
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[1.3, -1.9, 1.9]}
                    args={[1.8, 1.8]}
                    opacity={0.1}
                >
                    <meshStandardMaterial
                        attach="material"
                        color="black"
                        opacity={0.6}
                    />
                </Plane>
            </>
        );
    };

    const AboutSphere = () => {
        function navigateToAbout() {
            history.push("/about");
            setIsVisible(false);
        }
        return (
            <>
                <RoundedBox
                    args={[1.5, 1.5, 1.5, 1.5]}
                    position={[-0.5, 0, 0]}
                    metalness={1}
                    roughness={0}
                    color="black"
                >
                    <meshStandardMaterial metalness={1} roughness={0} />
                </RoundedBox>
                <A11y
                    role="link"
                    href="/about"
                    description="Welcome to about page"
                    actionCall={() => navigateToAbout()}
                >
                    <Text
                        fontSize={0.4}
                        position={[-0.5, 0, 0.8]}
                        color="white"
                        font="https://fonts.googleapis.com/css2?family=Montserrat&family=Vollkorn&display=swap"
                    >
                        About
                    </Text>
                </A11y>

                <Plane
                    receiveShadow
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[-0.8, -1.9, -0.4]}
                    args={[2, 2]}
                    opacity={0.1}
                >
                    <meshStandardMaterial
                        attach="material"
                        color="black"
                        opacity={0.6}
                    />
                </Plane>
            </>
        );
    };

    return (
        <div className="navigation-modal">
            <Canvas
                colorManagement
                style={{ width: "100%" }}
                shadowMap
                camera={{ position: [-1, 0, 9], fov: 90 }}
            >
                <Suspense fallback={<Loader />}>
                    {/* <Environment preset="sunset" background /> */}
                    <ContextBridge>
                        <fog attach="fog" args={[color, 0, 50]} />
                        {/*fog blurs background */}
                        <ambientLight intensity={1} />
                        <directionalLight
                            intensity={10}
                            castShadow
                            position={[3, 0, 4]}
                        />
                        <ContactSphere />
                        <AboutSphere />
                        <ProjectSphere />
                        <Plane
                            rotation-x={-Math.PI / 2}
                            position={[0, -2, 0]}
                            args={[100, 100, 10, 10]}
                        >
                            <meshBasicMaterial
                                // attach="material"
                                opacity={1}
                                color={color}
                            />
                        </Plane>
                        <OrbitControls />
                    </ContextBridge>
                </Suspense>
            </Canvas>
            <A11yAnnouncer />
        </div>
    );
}
