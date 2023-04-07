let {spawn} = require('child_process')
class GraphController {
    async runScript(req,res) {
        let graph = spawn('python', ['./src/pythonScripts/cpr.py']);
        graph.stdout.on('data', data => {
            console.log(`${data}`)
            res.send(JSON.parse(data));
        })
        graph.stderr.on('data', data => {
            console.log('Error: ' + data)
        })
        graph.on('close', code => {
            console.log(`Child process exit with code ${code}`)
        })
    }
}
module.exports = GraphController;