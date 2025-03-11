'use client';
import React, { useEffect, useState, useContext } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ThemeContext } from '@/context/ThemeProvider';
import { contain } from 'three/src/extras/TextureUtils';

const ThreeScene = () => {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const container = document.getElementById('three-container');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        container.appendChild(renderer.domElement);

        // Configurações de iluminação
        const ambientLight = new THREE.AmbientLight(theme === 'dark' ? 0x404040 : 0xffffff, 2.8);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(theme === 'dark' ? 0x001a4d : 0xffffff, 1);
        directionalLight.castShadow = true; // Ativar sombras
        directionalLight.position.set(0, 10, 10);
        scene.add(directionalLight);

        // Atualizar posição da luz com o mouse
        document.addEventListener('mousemove', (event) => {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1; // Normaliza a posição X do mouse
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1; // Normaliza a posição Y do mouse
            directionalLight.position.x = mouseX * 5; // Ajusta a posição da luz com base no mouse
            directionalLight.position.y = mouseY * 5;
            directionalLight.position.z = 10;
        });

        // Carregar o modelo 3D
        const loader = new GLTFLoader();
        let model = null;

        loader.load(
            '/house/scene.gltf',
            (gltf) => {
                model = gltf.scene;
                model.scale.set(1.5, 1.5, 1.5);
                model.position.set(0, -1, 0);
                model.position.z = -2;
                model.castShadow = true; // Modelo projeta sombras
                model.receiveShadow = true; // Modelo recebe sombras
                scene.add(model);

                window.addEventListener('mousemove', (event) => {
                    const mouseX = (event.clientX / window.innerWidth) * 2 - 1; // Normaliza a posição X do mouse
                    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1; // Normaliza a posição Y do mouse

                    // Atualiza a posição da luz com base no mouse
                    directionalLight.position.x = mouseX * 1;
                    directionalLight.position.y = mouseY * 1;
                    model.rotation.y = mouseX * Math.PI;
                });
            },
            undefined,
            (error) => {
                console.error('Erro ao carregar o modelo:', error);
            }
        );

        renderer.shadowMap.enabled = true; // Ativar o mapeamento de sombras
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // Atualizar o tamanho do renderer ao redimensionar
        const onResize = () => {
            camera.aspect = container.offsetWidth / container.offsetHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.offsetWidth, container.offsetHeight);
        };
        window.addEventListener('resize', onResize);

        window.addEventListener('wheel', (e) => {
            e.preventDefault();
            camera.position.z += e.deltaY * 0.001;
        });

        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            model.position.z = -scrollPosition * 0.01;
        });

        // Animação
        const animate = () => {
            requestAnimationFrame(animate);
            if (model) {
                model.rotation.y += 0.001;
            }
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            window.removeEventListener('resize', onResize);
            container.removeChild(renderer.domElement);
        };
    }, [theme]);

    return <div className="z-[-1] bg-transparent absolute inset-0  opacity-80" id="three-container" style={{ width: '100%', height: '480px' }} />;
};

export default ThreeScene;
