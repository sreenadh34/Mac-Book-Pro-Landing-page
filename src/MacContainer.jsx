import { useGLTF } from "@react-three/drei"

const MacContainer = () => {
  let model = useGLTF("./mac.glb");
  return (
    <group position={}>
     <primitive object={model.scene} />;
     </group>
  )
};

export default MacContainer