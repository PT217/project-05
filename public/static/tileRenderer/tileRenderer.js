

import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from './jsm/loaders/DRACOLoader.js';
import { TilesRenderer } from './index.js';

export default class TileRenderer {
    /**
     * 
     * @param {*} options 
     */
    constructor(options) {

        this.url = options.url
        this.camera = options.camera
        this.renderer = options.renderer

        this.useDracoLoader = options.useDracoLoader || false
        this.tileRenderer = new TilesRenderer(this.url)

        this._show = true
        this.init()
    }

    init() {

        const tileRenderer = this.tileRenderer
        const camera = this.camera
        const renderer = this.renderer
        // 使用DracoLoader
        if (this.useDracoLoader) {
            const dracoLoader = new DRACOLoader()
            dracoLoader.setDecoderPath("./gltf/")

            const loader = new GLTFLoader(tileRenderer.manager)
            loader.setDRACOLoader(dracoLoader)

            tileRenderer.manager.addHandler(/\.gltf$/, loader)

        }

        tileRenderer.setCamera(camera)
        tileRenderer.setResolutionFromRenderer(camera, renderer)

        tileRenderer.group.rotation.set(270 * Math.PI / 180, 0, 0)
    }

    update() {

        if (!this.show) {
        
            return
        }

        this.tileRenderer.update()
    }



    dispose() {
        this.tileRenderer = null
    }


    get group() {
        return this.tileRenderer.group
    }

    get errorTarget() {
        return this.tileRenderer.errorTarget
    }

    set errorTarget(val) {
        this.tileRenderer.errorTarget = val
    }

    get show() {
        return this.tileRenderer.group.visible
    }

    set show(val) {
        this.tileRenderer.group.visible = val
    }


    get onLoadModel (){
        return this.tileRenderer.onLoadModel
    }

    set onLoadModel (val){
        this.tileRenderer.onLoadModel = val
    }

    get onDisposeModel (){
        return this.tileRenderer.onDisposeModel
    }

    set onDisposeModel (val){
        this.tileRenderer.onDisposeModel = val
    }
    
    
}