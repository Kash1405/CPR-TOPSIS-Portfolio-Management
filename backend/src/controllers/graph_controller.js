let {spawn} = require('child_process')
class GraphController {
    async runScript(req,res) {
        console.log("Received Request!")
        let {nMonths, correlationType, cpr, filter, similar, cluster, subset} = req.params

        if (correlationType == "Price Return")
            correlationType = "dailyPriceReturn";
        if (correlationType == "Volume")
            correlationType = "dailyVolume";
        if (correlationType == "Close Price")
            correlationType = "dailyClosePrice";
        
        if (filter == "Both")
            filter = ""
        else if (filter == "Positive")
            filter = "-"
        else
            filter = "+"
        
        if (cpr == "true") cpr = "True"
        else cpr = "False"
        
        if (similar == "true") similar = "True"
        else similar = "False"
        
        if (cluster == "true") cluster = "True"
        else cluster = "False"


        let graph = spawn('python', ['./src/pythonScriptsNew/main.py', nMonths, correlationType, cpr, filter, similar, cluster, subset]);

        graph.stdout.on('data', data => {
            console.log(`${data}`)
            // res.send(JSON.parse(data));
        })
        graph.stderr.on('data', data => {
            console.log('Error: ' + data)
        })
        graph.on('close', code => {
            res.send(200);
            console.log(`Child process exit with code ${code}`)
        })
    }
}
module.exports = GraphController;