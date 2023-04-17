import React, {useState} from 'react';

const Research = () => {
    const [corrCriterion, setCorrCriterion] = useState("");
    const [nMonths, setnMonths] = useState("");
    const [filterCorr, setFilterCorr] = useState("");
    const [cluster, setCluster] = useState(false);
    const [similar, setSimilar] = useState(true);
    const [cpr, setCpr] = useState(false);
    const [subset, setSubset] = useState("All");
    const [loading, setLoading] = useState(true);

    function run() {
        // console.log(corrCriterion);
        // console.log(nMonths);
        // console.log(filterCorr);
        // console.log(cluster);
        // console.log(similar);
        // console.log(subset);
        // console.log(cpr);
        alert('fetching');
        setLoading(true);

        fetch(`http://localhost:8080/v1/graph/${nMonths}/${corrCriterion}/${cpr}/${filterCorr}/${similar}/${cluster}/${subset}`)
        .then(data => {
            console.log(data)
            setLoading(false);
        })
    }

    return (
    <>
        <div className="box-border p-10 font-mono m-0 w-full">
            <div className="mb-10">
                <h1 className='text-5xl font-bold'>
                    Stock Network and CPR-TOPSIS Visualization
                </h1>
            </div>
            <div className='flex justify-start items-start mb-10'>
                <h2 className="text-4xl font-bold">
                    Options
                </h2>
                <div className='box-content ml-5'>

                    <div className='mb-5'>

                        <input list="correlation-criteria" name="correlation-criterion" id="correlation-criterion" className='border-2 border-black pl-1' placeholder='Correlation Type' value={corrCriterion} onInput={e=>setCorrCriterion(e.target.value)}/>
                            <datalist id="correlation-criteria">
                                <option>Price Return</option>
                                <option>Volume</option>
                                <option>Close Price</option>
                            </datalist>
                        <p>Correlate either the daily price returns, trading volumes, or closing prices of two stocks.</p>
                        <p>Default: Price Returns</p>
                    </div>


                    <div className='mb-5'>
                        <input list="monthOptions" name="nMonths" id="nMonths" className='border-2 border-black pl-1' placeholder='No. of Months' value={nMonths} onInput={e=>setnMonths(e.target.value)} />
                            <datalist id="monthOptions">
                                <option>1</option>
                                <option>3</option>
                                <option>6</option>
                            </datalist>
                        <p>Time period, in the past from today, for which to compare two stocks.</p>
                        <p>Default: 1</p>
                    </div>

                    <div className='mb-5'>
                        <input list="filterCorrs" name="filterCorrWhichAre" id="filterCorrWhichAre" className='border-2 border-black pl-1' placeholder='Filter Correlations' value={filterCorr} onInput={e=>setFilterCorr(e.target.value)} />
                            <datalist id="filterCorrs">
                                <option>None</option>
                                <option>Positive</option>
                                <option>Negative</option>
                            </datalist>
                        <p>Allows you to only consider edges resulting from positive/negative correlations.</p>
                        <p>Default: None</p>
                    </div>

                    <div className='mb-5 flex items-center '>
                        <input type="checkbox" id="cluster" name="cluster" checked={cluster} onChange={e=>setCluster(e.target.checked)} />
                        <label for="cluster" className='ml-2'>Perform Clustering</label>
                    </div>

                    <div className='mb-5 flex items-center'>
                        <div className='border-r-2 border-black'>
                            <div className='flex items-center'>
                                <input type="radio" id="similar" name="keepSimilarNodesClose" className='mr-2' checked={similar} onChange={e=>setSimilar(e.target.checked)}/>
                                <label for="similar">Similar</label>
                            </div>

                            <div className='flex items-center'>
                                <input type="radio" id="dissimilar" name="keepSimilarNodesClose" className='mr-2' checked={!similar} onChange={e=>setSimilar(!e.target.checked)}/>
                                <label for="dissimilar" className='mr-2'>Disimilar</label>
                            </div>
                            
                        </div>
                        <div className='ml-2'>
                            nodes should be kept close together
                        </div>
                    </div>

                    <div className='mb-5'>
                        <h3 className='font-bold underline'>CPR-TOPSIS</h3>
                        <div className='mb-5 flex items-center '>
                            <input type="checkbox" id="cpr" name="cpr" checked={cpr} onChange={e=>setCpr(e.target.checked)} />
                            <label for="cpr" className='ml-2'>Run CPR-TOPSIS</label>
                        </div>
                        <div className='mb-5 flex flex-col items-start'>
                            <p>Subset stocks: </p>
                            <textarea id="subsetStocks" placeholder='All' className='border-2 border-black' value={subset} onInput={e=>setSubset(e.target.value)} ></textarea>
                        </div>
                    </div>

                    <button className='text-xl px-5 py-1 bg-black text-white border-2 border-black' onClick={run} >Run</button>
                    
                </div>
            </div>

            <div className='flex justify-start items-start width-screen box-content'>
                <h2 className="text-4xl font-bold">
                    Results
                </h2>
                <div className='ml-5 flex flex-col'>

                    <div className='mb-5'>
                        <h3 className='font-bold text-xl'>CPR-TOPSIS</h3>
                        <ul>
                            <li>Disabled</li>
                        </ul>
                    </div>


                    <div className=''>
                        <h3 className='font-bold text-xl'>Stock Graph</h3>
                        {loading && "Loading..."}
                        {!loading && <div className=' overflow-scroll border-2 border-black' style={{height:"600px"}}>
                            <img src={require("./dynamic.jpg")}  id="img1" className='scale-150 translate-y-10' />
                        </div>}
                    </div>
                    

                    
                </div>
                
            </div>
        </div>
    </>
)}

export default Research;