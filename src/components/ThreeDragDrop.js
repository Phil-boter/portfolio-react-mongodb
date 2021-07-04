import React, { useEffect, useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { Text } from "troika-three-text";

extend({ DragControls });

let container;
let camera, scene, renderer;
let controls, group;
let enableSelection = false;

const objects = [];

const mouse = new THREE.Vector2(),
    raycaster = new THREE.Raycaster();

function init() {
    container = document.getElementById("canvas");

    camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        1,
        5000
    );
    camera.position.z = 1000;

    scene = new THREE.Scene();
    scene.background = new THREE.Color("white");

    scene.add(new THREE.AmbientLight(0x505050));

    const light = new THREE.SpotLight(0xffffff, 1.5);
    light.position.set(0, 500, 2000);
    light.angle = Math.PI / 9;

    light.castShadow = true;
    light.shadow.camera.near = 1000;
    light.shadow.camera.far = 4000;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;

    scene.add(light);

    // Create:
    const myName = new Text();

    // Set properties to configure:
    myName.name = "name";
    myName.text = "PHILIPP DAWID";
    myName.anchorX = "center";
    myName.fontSize = 69;
    myName.position.z = -100;
    myName.color = "black";
    myName.curveRadius = "300";

    scene.add(myName);
    console.log("myName ", myName);

    // Update the rendering:
    myName.sync();

    const myHeader = new Text();

    // Set properties to configure:
    myHeader.name = "header!";
    myHeader.text = "Portfolio";
    myHeader.textAlign = "center";
    myHeader.fontSize = 69;
    myHeader.position.z = -100;
    myHeader.position.x = -125;
    myName.anchorX = "center";
    myHeader.position.y = -100;

    myHeader.color = "black";

    scene.add(myHeader);
    console.log("myHeader ", myHeader);

    // Update the rendering:
    myHeader.sync();

    group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.BoxGeometry(40, 40, 40);

    for (let i = 0; i < 200; i++) {
        const object = new THREE.Mesh(
            geometry,
            new THREE.MeshLambertMaterial({
                color: Math.random() * 0xffffff,
            })
        );

        object.position.x = Math.random() * 1000 - 500;
        object.position.y = Math.random() * 600 - 300;
        object.position.z = Math.random() * 800 - 400;

        object.rotation.x = Math.random() * 2 * Math.PI;
        object.rotation.y = Math.random() * 2 * Math.PI;
        object.rotation.z = Math.random() * 2 * Math.PI;

        object.scale.x = Math.random() * 2 + 1;
        object.scale.y = Math.random() * 2 + 1;
        object.scale.z = Math.random() * 2 + 1;

        object.castShadow = true;
        object.receiveShadow = true;

        scene.add(object);

        objects.push(object);
    }

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    if (window.innerWidth > 1980) {
        console.log("set size");
        let innerWidth = 1980;
        let innerHeight = 1080;
        renderer.setSize(innerWidth, innerHeight);
    } else {
        console.log("get size");
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    container.appendChild(renderer.domElement);

    controls = new DragControls([...objects], camera, renderer.domElement);
    controls.addEventListener("drag", render);

    window.addEventListener("resize", onWindowResize);

    document.addEventListener("click", onClick);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    render();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    if (window.innerWidth > 1980) {
        // console.log("set size2");
        let innerWidth = 1980;
        let innerHeight = 1080;
        renderer.setSize(innerWidth, innerHeight);
    } else {
        // console.log("get size2", window.innerWidth, window.innerHeight);
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    render();
}

function onKeyDown(event) {
    enableSelection = event.keyCode === 16 ? true : false;
}

function onKeyUp() {
    enableSelection = false;
}

function onClick(event) {
    event.preventDefault();

    if (enableSelection === true) {
        const draggableObjects = controls.getObjects();
        draggableObjects.length = 0;

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersections = raycaster.intersectObjects(objects, true);

        if (intersections.length > 0) {
            const object = intersections[0].object;

            if (group.children.includes(object) === true) {
                object.material.emissive.set(0x000000);
                scene.attach(object);
            } else {
                object.material.emissive.set(0xaaaaaa);
                group.attach(object);
            }

            controls.transformGroup = true;
            draggableObjects.push(group);
        }

        if (group.children.length === 0) {
            controls.transformGroup = false;
            draggableObjects.push(...objects);
        }
    }

    render();
}

function render() {
    renderer.render(scene, camera);
}

export default function ThreeDragDrop() {
    useEffect(() => {
        console.log("runs");
        init();
        render();
    }, []);

    return (
        <>
            <div
                id="canvas"
                style={{
                    overflow: "hidden",
                }}
            ></div>
        </>
    );
}
