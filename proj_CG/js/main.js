var camera1, camera2, camera3, scene, renderer;

var geometry, material, mesh;

var chair, table, lamp;

var topChairAxis = new THREE.AxisHelper();

var clock = new THREE.Clock();

var frustumSize = 100;

var cameraNumber = 1;

//control flags
var controlUp = false;
var controlDown = false;
var breakU = false;
var breakD = false;

var StartRotL = false;
var StartRotR = false;
var StopRotL = false;
var StopRotR = false;

var rotated = false;


function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    

    scene.add(new THREE.AxisHelper());
    
    table = new Table(0, 17, 0);
    scene.add(table);

    chair = new Chair(0,14,15);
    scene.add(chair);
    
    lamp = new Lamp(40,1,0);
    scene.add(lamp);
}

function createCameras() {
    'use strict';
    //let viewSize = 100;
    //let aspectRatio = window.innerWidth / window.innerHeight;

    //camera = new THREE.OrthographicCamera(-aspectRatio*viewSize/2, aspectRatio*viewSize/2,viewSize/2,-viewSize/2, -1000,1000);
    
    var aspect = window.innerWidth / window.innerHeight;
    
    camera1 = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 100 );

    camera1.position.x = 0;
    camera1.position.y = 90;
    camera1.position.z = 0;
    camera1.lookAt(scene.position);

    camera1.updateProjectionMatrix();

    camera2 = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 100 );

    camera2.position.x = 90;
    camera2.position.y = 0;
    camera2.position.z = 0;
    camera2.lookAt(scene.position);

    camera2.updateProjectionMatrix();

    camera3 = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 100 );

    camera3.position.x = 0;
    camera3.position.y = 0;
    camera3.position.z = 90;
    camera3.lookAt(scene.position);

    camera3.updateProjectionMatrix();
    
}

function onResize() {
    'use strict';
    //let viewSize = 100;
    //let aspectRatio = window.innerWidth / window.innerHeight;

   /* renderer.setSize(window.innerWidth, window.innerHeight);
    
    camera.left = -aspectRatio*viewSize/2;
    camera.right = aspectRatio*viewSize/2;
    camera.top = viewSize/2;
    camera.bottom = -viewSize/2
    camera.updateProjectionMatrix();*/
    //render();
    var aspect = window.innerWidth / window.innerHeight;


    camera1.left   = - frustumSize * aspect / 2;
    camera1.right  =   frustumSize * aspect / 2;
    camera1.top    =   frustumSize / 2;
    camera1.bottom = - frustumSize / 2;

    camera1.updateProjectionMatrix();

    camera2.left   = - frustumSize * aspect / 2;
    camera2.right  =   frustumSize * aspect / 2;
    camera2.top    =   frustumSize / 2;
    camera2.bottom = - frustumSize / 2;

    camera2.updateProjectionMatrix();

    camera3.left   = - frustumSize * aspect / 2;
    camera3.right  =   frustumSize * aspect / 2;
    camera3.top    =   frustumSize / 2;
    camera3.bottom = - frustumSize / 2;

    camera3.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

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
        cameraNumber = 1;
        /*camera.position.x = 0;
        camera.position.y = 90;
        camera.position.z = 0;
        camera.lookAt(scene.position);*/
        break;
    case 50:    //2
        cameraNumber = 2;
        /*camera.position.x = 90;
        camera.position.y = 0;
        camera.position.z = 0;
        camera.lookAt(scene.position);*/
        break;
    case 51:    //3
        cameraNumber = 3;
        /*camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 90;
        camera.lookAt(scene.position);*/
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

/*
function checkCamera(){

    if(cameraNumber == 1){
        return camera1;
    }

    else if(cameraNumber == 2){
        return camera2;
    }

    else{
        return camera3;
    }
}*/


function checkMove(){
    
    var delta = clock.getDelta();

    if(controlUp){
        chair.moveUp(1, delta);
    }
    else if(controlDown){
        chair.moveDown(1, delta);
    }
   
    else if(breakU){            
        chair.moveDown(0, delta);
    }
    else if(breakD){
        chair.moveUp(0, delta);
    }
    if(StartRotL){
        chair.rotateLeft(0.1,delta);
    }
    else if(StartRotR){
        chair.rotateRight(0.1,delta);
    }
    else if(StopRotL){
        chair.rotateLeft(0,delta);
    }
    else if (StopRotR){
        chair.rotateRight(0,delta);
    }
  
  
    chair.Move()
    chair.Rotate()

}

function render() {
    'use strict';

    if(cameraNumber == 1){
        renderer.render(scene, camera1);
    }

    else if(cameraNumber == 2){
        renderer.render(scene, camera2);
    }

    else{
        renderer.render(scene, camera3);
    }

}

function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
   
    createScene();
    createCameras();
    
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
