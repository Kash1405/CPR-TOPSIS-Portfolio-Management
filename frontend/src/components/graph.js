import React, { useEffect, useRef } from 'react';

import { UnrealBloomPass } from "../../node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js";
import ForceGraph3D from 'react-force-graph-3d';

const Graph = () => {
    const fgRef = useRef();

    useEffect(() => {
        const bloomPass = new UnrealBloomPass();
        bloomPass.strength = 3;
        bloomPass.radius = 1;
        bloomPass.threshold = 0.1;
        fgRef.current.postProcessingComposer().addPass(bloomPass);
    }, []);

    return <ForceGraph3D
        ref={fgRef}
        graphData={data}
        nodeLabel="id"
        nodeAutoColorBy="group"
    />;
}

export default Graph;


let data = {
    "nodes": [{
        "id": "TESLA"
    },
    {
        "id": "BRISA"
    },
    {
        "id": "BMW"
    },
    {
        "id": "RNO"
    },
    {
        "id": "ML"
    },
    {
        "id": "HMC"
    },
    {
        "id": "GTX"
    },
    {
        "id": "LEA"
    }
    ],
    "links": [{
        "source": "TESLA",
        "target": "TESLA",
        "value": 0.0
    },
    {
        "source": "TESLA",
        "target": "BRISA",
        "value": 0.0
    },
    {
        "source": "TESLA",
        "target": "BMW",
        "value": 0.0
    },
    {
        "source": "TESLA",
        "target": "RNO",
        "value": 0.0
    },
    {
        "source": "TESLA",
        "target": "ML",
        "value": 0.0
    },
    {
        "source": "TESLA",
        "target": "HMC",
        "value": 9.560489864065765
    },
    {
        "source": "TESLA",
        "target": "GTX",
        "value": 0.0
    },
    {
        "source": "TESLA",
        "target": "LEA",
        "value": 7.308178896697721
    },
    {
        "source": "BRISA",
        "target": "TESLA",
        "value": 0.0
    },
    {
        "source": "BRISA",
        "target": "BRISA",
        "value": 0.0
    },
    {
        "source": "BRISA",
        "target": "BMW",
        "value": 0.0
    },
    {
        "source": "BRISA",
        "target": "RNO",
        "value": 0.0
    },
    {
        "source": "BRISA",
        "target": "ML",
        "value": 0.0
    },
    {
        "source": "BRISA",
        "target": "HMC",
        "value": 0.0
    },
    {
        "source": "BRISA",
        "target": "GTX",
        "value": 0.0
    },
    {
        "source": "BRISA",
        "target": "LEA",
        "value": 0.0
    },
    {
        "source": "BMW",
        "target": "TESLA",
        "value": 0.0
    },
    {
        "source": "BMW",
        "target": "BRISA",
        "value": 0.0
    },
    {
        "source": "BMW",
        "target": "BMW",
        "value": 0.0
    },
    {
        "source": "BMW",
        "target": "RNO",
        "value": 1.3007811891884824
    },
    {
        "source": "BMW",
        "target": "ML",
        "value": 7.9511856205607545
    },
    {
        "source": "BMW",
        "target": "HMC",
        "value": 0.0
    },
    {
        "source": "BMW",
        "target": "GTX",
        "value": 0.0
    },
    {
        "source": "BMW",
        "target": "LEA",
        "value": 0.0
    },
    {
        "source": "RNO",
        "target": "TESLA",
        "value": 0.0
    },
    {
        "source": "RNO",
        "target": "BRISA",
        "value": 0.0
    },
    {
        "source": "RNO",
        "target": "BMW",
        "value": 1.3007811891884824
    },
    {
        "source": "RNO",
        "target": "RNO",
        "value": 0.0
    },
    {
        "source": "RNO",
        "target": "ML",
        "value": 0.0
    },
    {
        "source": "RNO",
        "target": "HMC",
        "value": 0.0
    },
    {
        "source": "RNO",
        "target": "GTX",
        "value": 0.0
    },
    {
        "source": "RNO",
        "target": "LEA",
        "value": 0.0
    },
    {
        "source": "ML",
        "target": "TESLA",
        "value": 0.0
    },
    {
        "source": "ML",
        "target": "BRISA",
        "value": 0.0
    },
    {
        "source": "ML",
        "target": "BMW",
        "value": 7.9511856205607545
    },
    {
        "source": "ML",
        "target": "RNO",
        "value": 0.0
    },
    {
        "source": "ML",
        "target": "ML",
        "value": 0.0
    },
    {
        "source": "ML",
        "target": "HMC",
        "value": 0.0
    },
    {
        "source": "ML",
        "target": "GTX",
        "value": 0.0
    },
    {
        "source": "ML",
        "target": "LEA",
        "value": 0.0
    },
    {
        "source": "HMC",
        "target": "TESLA",
        "value": 9.560489864065765
    },
    {
        "source": "HMC",
        "target": "BRISA",
        "value": 0.0
    },
    {
        "source": "HMC",
        "target": "BMW",
        "value": 0.0
    },
    {
        "source": "HMC",
        "target": "RNO",
        "value": 0.0
    },
    {
        "source": "HMC",
        "target": "ML",
        "value": 0.0
    },
    {
        "source": "HMC",
        "target": "HMC",
        "value": 0.0
    },
    {
        "source": "HMC",
        "target": "GTX",
        "value": 0.0
    },
    {
        "source": "HMC",
        "target": "LEA",
        "value": 9.303316513314385
    },
    {
        "source": "GTX",
        "target": "TESLA",
        "value": 0.0
    },
    {
        "source": "GTX",
        "target": "BRISA",
        "value": 0.0
    },
    {
        "source": "GTX",
        "target": "BMW",
        "value": 0.0
    },
    {
        "source": "GTX",
        "target": "RNO",
        "value": 0.0
    },
    {
        "source": "GTX",
        "target": "ML",
        "value": 0.0
    },
    {
        "source": "GTX",
        "target": "HMC",
        "value": 0.0
    },
    {
        "source": "GTX",
        "target": "GTX",
        "value": 0.0
    },
    {
        "source": "GTX",
        "target": "LEA",
        "value": 0.0
    },
    {
        "source": "LEA",
        "target": "TESLA",
        "value": 7.308178896697721
    },
    {
        "source": "LEA",
        "target": "BRISA",
        "value": 0.0
    },
    {
        "source": "LEA",
        "target": "BMW",
        "value": 0.0
    },
    {
        "source": "LEA",
        "target": "RNO",
        "value": 0.0
    },
    {
        "source": "LEA",
        "target": "ML",
        "value": 0.0
    },
    {
        "source": "LEA",
        "target": "HMC",
        "value": 9.303316513314385
    },
    {
        "source": "LEA",
        "target": "GTX",
        "value": 0.0
    },
    {
        "source": "LEA",
        "target": "LEA",
        "value": 0.0
    }
    ]
}
