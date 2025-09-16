import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ZenGarden: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const width = 800;
    const height = 600;

    // Scene setup
    const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(0, width, 0, height, 0.1, 1000);


    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    mountRef.current?.appendChild(renderer.domElement);

    // Particle data
    const numParticles = 125000;
    const positions = new Float32Array(numParticles * 3);
    const velocities = new Float32Array(numParticles * 2); // vx, vy

    for (let i = 0; i < numParticles; i++) {
      positions[i * 3] = Math.random() * width;   // x
      positions[i * 3 + 1] = Math.random() * height; // y
      positions[i * 3 + 2] = 0;
      velocities[i * 2] = 0; // vx
      velocities[i * 2 + 1] = 0; // vy
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 1,
      color: 0xffffff,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Rake interaction state
    let rakePos: { x: number; y: number } | null = null;
    let lastPos: { x: number; y: number } | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (!rakePos) return;
      lastPos = { ...rakePos };
      rakePos = { x: e.offsetX, y: e.offsetY };


    if (lastPos) {
        const dx = rakePos.x - lastPos.x;
        const dy = rakePos.y - lastPos.y;

        // Perpendicular vector (normalized)
        const len = Math.hypot(dx, dy) || 1;
        const px = -dy / len;
        const py = dx / len;

        const prongs = 5;        // number of rake lines
        const spacing = 5;      // distance between lines
        const radius = 5;        // thickness of each prong

        for (let i = -Math.floor(prongs / 2); i <= Math.floor(prongs / 2); i++) {
            const offsetX = rakePos.x + px * i * spacing;
            const offsetY = rakePos.y + py * i * spacing;

            for (let j = 0; j < numParticles; j++) {
                const pxPos = positions[j * 3];
                const pyPos = positions[j * 3 + 1];
                const dist = Math.hypot(pxPos - offsetX, pyPos - offsetY);
                if (dist < radius) {
                    velocities[j * 2] += dx * 0.5;
                    velocities[j * 2 + 1] += dy * 0.5;
                    }
            }
        }
    }

    };

    const handleMouseDown = (e: MouseEvent) => {
      rakePos = { x: e.offsetX, y: e.offsetY };

    };

    const handleMouseUp = () => {
      rakePos = null;
      lastPos = null;
    };

    renderer.domElement.addEventListener("mousemove", handleMouseMove);
    renderer.domElement.addEventListener("mousedown", handleMouseDown);
    renderer.domElement.addEventListener("mouseup", handleMouseUp);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update particle positions
      for (let i = 0; i < numParticles; i++) {
        positions[i * 3] += velocities[i * 2];
        positions[i * 3 + 1] += velocities[i * 2 + 1];

        // Friction
        velocities[i * 2] *= 0.9;
        velocities[i * 2 + 1] *= 0.9;
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default ZenGarden;
