import { Canvas } from "@react-three/fiber";
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return(
    
    <Canvas camera ={{ fov: 12, position: [0, -10, 220]}}>
      <OrbitControls />
      <Environment 
      files={[
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"
        ]} />
      <ScrollControls pages={3}>
        <MacContainer />
      </ScrollControls>
      
    </Canvas>
  )
}
export default App;