import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MacContainer = () => {
  const model = useGLTF("./mac.glb");
  const tex = useTexture("./red.jpg");

  const meshes = {};
  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });

  // Initialize the mesh properties
  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  meshes.matte.material.map = tex;
  meshes.matte.material.emissiveIntensity = 0;
  meshes.matte.material.metalness = 0;
  meshes.matte.material.roughness = 1;

  const data = useScroll();

  useFrame(() => {
    // Update rotation based on scroll offset
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
  });

  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default MacContainer;
