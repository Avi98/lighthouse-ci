import express from express;

class ServeBuild {
    constructor(pathToBuildDir){
        this.pathToBuildDir = pathToBuildDir;
        this.app = express();
        /**todo: compress payload response */
        this.app.use('/', express.static(pathToBuildDir));
        this.app.use('/*', (req, res) => res.sendFile(pathToBuildDir + '/index.html'))

        this.port= 0

    }

    getPort(){
        return this.port;
    }
}