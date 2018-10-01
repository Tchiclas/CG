/*global THREE, requestAnimationFrame, console*/


/*A mesa ja esta feita 
ainda tem coisas do lab1 que nao sao precisas mas nao quero mudar
Ok! Assinado Rita
ahahaha este dialogo e incrivel
*/

var camera, scene, renderer;

var geometry, material, mesh;

var chair, table, lamp, chair_wheels, wheelless_chair;
var topChairAxis = new THREE.AxisHelper();

var clock = new THREE.Clock();


//control flags
var controlUp = false;
var controlDown = false;
var breakU = false;
var breakD = false;

var StartRotL = false;
var StartRotR = false;
var StopRotL = false;
var StopRotR = false;


function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    

    scene.add(new THREE.AxisHelper());
    
    createTable(0, 17, 0);
    createChair(0,14,15);
    createLamp(40,1,0);
}

function createCamera() {
    'use strict';
    var viewSize = 100;
    var aspectRatio = window.innerWidth / window.innerHeight;

    camera = new THREE.OrthographicCamera(-aspectRatio*viewSize/2, aspectRatio*viewSize/2,viewSize/2,-viewSize/2, -1000,1000);
    camera.position.x = 0;
    camera.position.y = 90;
    camera.position.z = 0;
    camera.lookAt(scene.position);
}

function onResize() {
    'use strict';

    renderer.setSize(window.innerWidth, window.innerHeight);
    
    if (window.innerHeight > 0 && window.innerWidth > 0) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

    render();

}

function onKeyDown(e) {
    'use strict';
    
    switch (e.keyCode) {
    case 65: //A
    case 97: //a
    //para debug
        scene.traverse( function ( obj ) {
            var s = '|___';
            var obj2 = obj;
            while ( obj2 !== scene ) {
                s = '\t' + s;
                obj2 = obj2.parent;
            }
            console.log( s + obj.name + ' <' + obj.type + '>' );
            if(obj instanceof THREE.Mesh){
                obj.material.wireframe = !obj.material.wireframe;
            }            

        } );
        break;
    case 49:    //1
        camera.position.x = 0;
        camera.position.y = 90;
        camera.position.z = 0;
        camera.lookAt(scene.position);
        break;
    case 50:    //2
        camera.position.x = 90;
        camera.position.y = 0;
        camera.position.z = 0;
        camera.lookAt(scene.position);
        break;
    case 51:    //3
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 90;
        camera.lookAt(scene.position);
        break;
    case 38: //UP
        breakU = false;
        breakD = false;
        controlUp = true;
        break;
    case 40: //DOWN
        breakD = false;
        breakU = false;
        controlDown = true;
        break;
    case 37://LEFT
        StopRotL = false;
        StopRotR = false;
        StartRotL = true;
        break;
    case 39://RIGHT
        StopRotL = false;
        StopRotR = false;
        StartRotR = true;
        break;
    }
    
    render();
}

function onKeyUp(e){
    //Mainly used for movement breaks for now
    switch (e.keyCode){
        case 38://UP
            controlUp = false;
            breakU = true;
            break;
        case 40://DOWN
            controlDown = false;
            breakD = true;
            break;
        
        case 37://LEFT
            StartRotL = false;
            StopRotL = true;
            break;
        case 39://RIGHT
            StartRotR = false;
            StopRotR = true;
            break;
        case 37://LEFT
            StopRotL = true;
            StartRotL = false;
            break;
        case 39://RIGHT
            StopRotR = true;
            StartRotR = false;
            break;

    }
}

/*Movement Functions*/
function moveDown(max, delta){
        if(chair.userData.velocity < max){
            chair.userData.velocity += delta;
        }
        else{
            chair.userData.velocity = max;
        }

        
}

function moveUp(max, delta){
        if(chair.userData.velocity > -max){
            chair.userData.velocity -= delta;
        }
        else {
            chair.userData.velocity = -max;
        }
        
}

function rotateRight(max,delta){

    if(chair.userData.rotvelocity > -max){
        chair.userData.rotvelocity  -= delta;
    }
    else {
        chair.userData.rotvelocity  = -max;
    }

}

function rotateLeft(max,delta){
    if(chair.userData.rotvelocity > -max){
        chair.userData.rotvelocity  -= delta;
    }
    else {
        chair.userData.rotvelocity  = -max;
    }

}



function checkMove(){
    
    var delta = clock.getDelta();

    if(controlUp){
        moveUp(1, delta);
    }
    else if(controlDown){
        moveDown(1, delta);
    }
   
    else if(breakU){            
        moveDown(0, delta);
    }
    else if(breakD){
        moveUp(0, delta);
    }
    if(StartRotL){
        rotateLeft(0.1,delta);
    }
    else if(StartRotR){
        rotateRight(0.1,delta);
    }
    else if(StopRotL){
        rotateLeft(0,delta);
    }
    else if (StopRotR){
        rotateRight(0,delta);
    }
  
  
    chair.translateZ(chair.userData.velocity);
    chair.rotation.y += chair.userData.rotvelocity;

}

function render() {
    'use strict';
    renderer.render(scene, camera);
}

function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
   
    createScene();
    createCamera();
    
    render();
    
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    window.addEventListener("keyup", onKeyUp);
}

function animate() {
    'use strict';

    checkMove();
    
    render();
    
    requestAnimationFrame(animate);
}
