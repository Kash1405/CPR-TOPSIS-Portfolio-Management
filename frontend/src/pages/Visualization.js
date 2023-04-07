// import { UnrealBloomPass } from "../../node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js";
// import React from 'react';
// import ForceGraph3D from 'react-force-graph-3d';
// const { useRef, useEffect } = React;

// const Visualization = () => {
//     const fgRef = useRef();

//     useEffect(() => {
//         const bloomPass = new UnrealBloomPass();
//         bloomPass.strength = 3;
//         bloomPass.radius = 1;
//         bloomPass.threshold = 0.1;
//         fgRef.current.postProcessingComposer().addPass(bloomPass);
//     }, []);

//     return <ForceGraph3D
//         ref={fgRef}
//         graphData={data}
//         nodeLabel="id"
//         nodeAutoColorBy="group"
//     />;
// }

// export default Visualization;

// let data = {
//     "nodes": [{
//         "id": "STLA"
//     },
//     {
//         "id": "BRISA.IS"
//     },
//     {
//         "id": "BMW.DE"
//     },
//     {
//         "id": "RNO.PA"
//     },
//     {
//         "id": "ML.PA"
//     },
//     {
//         "id": "HMC"
//     },
//     {
//         "id": "GTX"
//     },
//     {
//         "id": "LEA"
//     }
//     ],
//     "links": [{
//         "source": "STLA",
//         "target": "STLA",
//         "value": 0.0
//     },
//     {
//         "source": "STLA",
//         "target": "BRISA.IS",
//         "value": 0.0
//     },
//     {
//         "source": "STLA",
//         "target": "BMW.DE",
//         "value": 0.0
//     },
//     {
//         "source": "STLA",
//         "target": "RNO.PA",
//         "value": 0.0
//     },
//     {
//         "source": "STLA",
//         "target": "ML.PA",
//         "value": 0.0
//     },
//     {
//         "source": "STLA",
//         "target": "HMC",
//         "value": 9.560489864065765
//     },
//     {
//         "source": "STLA",
//         "target": "GTX",
//         "value": 0.0
//     },
//     {
//         "source": "STLA",
//         "target": "LEA",
//         "value": 7.308178896697721
//     },
//     {
//         "source": "BRISA.IS",
//         "target": "STLA",
//         "value": 0.0
//     },
//     {
//         "source": "BRISA.IS",
//         "target": "BRISA.IS",
//         "value": 0.0
//     },
//     {
//         "source": "BRISA.IS",
//         "target": "BMW.DE",
//         "value": 0.0
//     },
//     {
//         "source": "BRISA.IS",
//         "target": "RNO.PA",
//         "value": 0.0
//     },
//     {
//         "source": "BRISA.IS",
//         "target": "ML.PA",
//         "value": 0.0
//     },
//     {
//         "source": "BRISA.IS",
//         "target": "HMC",
//         "value": 0.0
//     },
//     {
//         "source": "BRISA.IS",
//         "target": "GTX",
//         "value": 0.0
//     },
//     {
//         "source": "BRISA.IS",
//         "target": "LEA",
//         "value": 0.0
//     },
//     {
//         "source": "BMW.DE",
//         "target": "STLA",
//         "value": 0.0
//     },
//     {
//         "source": "BMW.DE",
//         "target": "BRISA.IS",
//         "value": 0.0
//     },
//     {
//         "source": "BMW.DE",
//         "target": "BMW.DE",
//         "value": 0.0
//     },
//     {
//         "source": "BMW.DE",
//         "target": "RNO.PA",
//         "value": 1.3007811891884824
//     },
//     {
//         "source": "BMW.DE",
//         "target": "ML.PA",
//         "value": 7.9511856205607545
//     },
//     {
//         "source": "BMW.DE",
//         "target": "HMC",
//         "value": 0.0
//     },
//     {
//         "source": "BMW.DE",
//         "target": "GTX",
//         "value": 0.0
//     },
//     {
//         "source": "BMW.DE",
//         "target": "LEA",
//         "value": 0.0
//     },
//     {
//         "source": "RNO.PA",
//         "target": "STLA",
//         "value": 0.0
//     },
//     {
//         "source": "RNO.PA",
//         "target": "BRISA.IS",
//         "value": 0.0
//     },
//     {
//         "source": "RNO.PA",
//         "target": "BMW.DE",
//         "value": 1.3007811891884824
//     },
//     {
//         "source": "RNO.PA",
//         "target": "RNO.PA",
//         "value": 0.0
//     },
//     {
//         "source": "RNO.PA",
//         "target": "ML.PA",
//         "value": 0.0
//     },
//     {
//         "source": "RNO.PA",
//         "target": "HMC",
//         "value": 0.0
//     },
//     {
//         "source": "RNO.PA",
//         "target": "GTX",
//         "value": 0.0
//     },
//     {
//         "source": "RNO.PA",
//         "target": "LEA",
//         "value": 0.0
//     },
//     {
//         "source": "ML.PA",
//         "target": "STLA",
//         "value": 0.0
//     },
//     {
//         "source": "ML.PA",
//         "target": "BRISA.IS",
//         "value": 0.0
//     },
//     {
//         "source": "ML.PA",
//         "target": "BMW.DE",
//         "value": 7.9511856205607545
//     },
//     {
//         "source": "ML.PA",
//         "target": "RNO.PA",
//         "value": 0.0
//     },
//     {
//         "source": "ML.PA",
//         "target": "ML.PA",
//         "value": 0.0
//     },
//     {
//         "source": "ML.PA",
//         "target": "HMC",
//         "value": 0.0
//     },
//     {
//         "source": "ML.PA",
//         "target": "GTX",
//         "value": 0.0
//     },
//     {
//         "source": "ML.PA",
//         "target": "LEA",
//         "value": 0.0
//     },
//     {
//         "source": "HMC",
//         "target": "STLA",
//         "value": 9.560489864065765
//     },
//     {
//         "source": "HMC",
//         "target": "BRISA.IS",
//         "value": 0.0
//     },
//     {
//         "source": "HMC",
//         "target": "BMW.DE",
//         "value": 0.0
//     },
//     {
//         "source": "HMC",
//         "target": "RNO.PA",
//         "value": 0.0
//     },
//     {
//         "source": "HMC",
//         "target": "ML.PA",
//         "value": 0.0
//     },
//     {
//         "source": "HMC",
//         "target": "HMC",
//         "value": 0.0
//     },
//     {
//         "source": "HMC",
//         "target": "GTX",
//         "value": 0.0
//     },
//     {
//         "source": "HMC",
//         "target": "LEA",
//         "value": 9.303316513314385
//     },
//     {
//         "source": "GTX",
//         "target": "STLA",
//         "value": 0.0
//     },
//     {
//         "source": "GTX",
//         "target": "BRISA.IS",
//         "value": 0.0
//     },
//     {
//         "source": "GTX",
//         "target": "BMW.DE",
//         "value": 0.0
//     },
//     {
//         "source": "GTX",
//         "target": "RNO.PA",
//         "value": 0.0
//     },
//     {
//         "source": "GTX",
//         "target": "ML.PA",
//         "value": 0.0
//     },
//     {
//         "source": "GTX",
//         "target": "HMC",
//         "value": 0.0
//     },
//     {
//         "source": "GTX",
//         "target": "GTX",
//         "value": 0.0
//     },
//     {
//         "source": "GTX",
//         "target": "LEA",
//         "value": 0.0
//     },
//     {
//         "source": "LEA",
//         "target": "STLA",
//         "value": 7.308178896697721
//     },
//     {
//         "source": "LEA",
//         "target": "BRISA.IS",
//         "value": 0.0
//     },
//     {
//         "source": "LEA",
//         "target": "BMW.DE",
//         "value": 0.0
//     },
//     {
//         "source": "LEA",
//         "target": "RNO.PA",
//         "value": 0.0
//     },
//     {
//         "source": "LEA",
//         "target": "ML.PA",
//         "value": 0.0
//     },
//     {
//         "source": "LEA",
//         "target": "HMC",
//         "value": 9.303316513314385
//     },
//     {
//         "source": "LEA",
//         "target": "GTX",
//         "value": 0.0
//     },
//     {
//         "source": "LEA",
//         "target": "LEA",
//         "value": 0.0
//     }
//     ]
// }

// // import SpriteText from 'three-spritetext';

// // const Visualization = () => {

// //     return (
// //         <ForceGraph3D
// //             graphData={data}
// //             nodeAutoColorBy="group"
// //             nodeThreeObject={node => {
// //                 const sprite = new SpriteText(node.id);
// //                 sprite.color = node.color;
// //                 sprite.textHeight = 8;
// //                 return sprite;
// //             }}
// //         />
// //     );
// // };

// // export default Visualization;