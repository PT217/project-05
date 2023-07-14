import {TextureLoader , ShaderMaterial , DoubleSide , Texture} from "three"
// const texture01 = require('../shaderImage/fangzi01.jpg')
const texture01 = require('../shaderImage/fangzi02.jpg')
// const texture01 = require('../shaderImage/fangzi01.jpg')
const texture02 = require('../shaderImage/22E46ED4F3C1AB2036C7CC26E419986D.png')

const uniforms = {
  time: {
    value: 0,
  },
  texture01: {
    value: new TextureLoader().load(
      // "/shaderImage/D53BEE74883CA593AA4AC9C180D9C1C2.png"
      texture01
    ),
    // value : texture
  },

  texture02: {
    value : new TextureLoader().load(
      // "/shaderImage/D53BEE74883CA593AA4AC9C180D9C1C2.png"
      texture02
    )
  },
}

const vertexShader = `

uniform float time;
varying vec2 v_uv;
varying vec3 v_normal;
void main(){
  bool isAdd = false;
  float positionY = -position.y;
  float originY = position.y;

  if(!isAdd ){
    if (positionY < originY){
      // positionY +=  time ;
      positionY +=  time * 10.;
    }
    if(positionY >= originY){
      isAdd = true;
      positionY = originY;
    }
  }

  v_uv = uv;
  v_normal = normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position , 1.);
  // gl_Position = projectionMatrix * modelViewMatrix * vec4(vec3(position.x , positionY, position.z) , 1.);

  
}
`

const fragmentShader = `

uniform sampler2D texture01;
uniform sampler2D texture02;
uniform float time;
varying vec2 v_uv;
varying vec3 v_normal;
// 不显示底面及侧面 底面normal为 0,-1,0  上面normal为 0, 1 ,0
void main(){
  vec3 normal = normalize(v_normal); 
  vec2 uv = normalize(v_uv); 
  float y = normal.y;
  vec3 uvNormal = abs(normal);
  
  vec4 color1 =  texture2D(texture01 ,v_uv );
  // vec4 color1 =  texture2D(texture01 , vec2(v_uv.x , fract((v_uv.y - time) / 200.)) );
  vec4 color2 =  texture2D(texture02 , vec2(v_uv.x , fract((v_uv.y - time / 2000.) )));

  if(y < 0.85 && y > -0.85){

    // color1.a *= clamp(abs(sin(time) / 2000.) ,0.4 , 1.0 );
    // vec4 color = (color1 + color2) * vec4(0.4,.4,.6,1.);

    vec4 color = color1;
    // gl_FragColor = color;
   
  }else{
    gl_FragColor = vec4(1.,1.,1.,1.);
    // discard;
  }

  // vec4 color = color1;
  // gl_FragColor = vec4(v_uv ,0.,1.);
  // gl_FragColor = color1;
  // gl_FragColor = vec4(abs(normal) , 1.);
  gl_FragColor = vec4(normal,1.);
}
`

// const boxGeometry = new THREE.BoxGeometry(10, 10, 10)

export default class WallMaterialProperty {
  constructor(options) {
    this.uniforms = uniforms
    this.vertexShader = vertexShader
    this.fragmentShader = fragmentShader

    this.shaderMaterial = new ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: this.vertexShader,
      fragmentShader: this.fragmentShader,
      // wireframe : true
      side: DoubleSide,
      // uniformsNeedUpdate: true,
      transparent: true,
    })

    this.update()
  }

  init() {}

  update() {

    
    this.uniforms.time.value += 0.01

    requestAnimationFrame(this.update.bind(this))
  }

  dispose() {}
}
