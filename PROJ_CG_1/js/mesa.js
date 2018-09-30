/*global THREE, requestAnimationFrame, console*/


/*A mesa ja esta feita 
ainda tem coisas do lab1 que nao sao precisas mas nao quero mudar
Ok! Assinado Rita
ahahaha este dialogo e incrivel
*/

var camera, scene, renderer;

var geometry, material, mesh;

var chair, table, lamp, chair_wheels, wheelless_chair;


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



/*----------LAMP-----------------------*/

function addLampTop(obj, x, y, z) {
    'use strict';
    geometry = new THREE.ConeGeometry(4, 8, 32);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y+4, z);
    mesh.rotation.x = Math.PI;
    obj.add(mesh);
}


function addLampBase(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CylinderGeometry(5, 5, 2, 32);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addLampStand(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CylinderGeometry(0.5, 0.5, 24, 22);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y+12, z);
    obj.add(mesh);
}

function createLamp(x, y, z) {
    'use strict';
    
    lamp = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: 0xD60F0F, wireframe: true });
   
    addLampBase(lamp,0,0,0);
    addLampStand(lamp,0,1,0);
    addLampTop(lamp,0,24,0);

    lamp.name = "lamp";
    
    scene.add(lamp);
    
    lamp.position.x = x;
    lamp.position.y = y;
    lamp.position.z = z;
}

/*----------LAMP-----------------------*/

/*----------TABLE-----------------------*/
function addTableLeg(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CylinderGeometry(2, 2, 16, 32);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y - 9, z);
    obj.add(mesh);
}

function addTableTop(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(60, 2, 20);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createTable(x, y, z) {
    'use strict';
    
    table = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: 0xFF3BDB, wireframe: true });
   
    addTableTop(table, 0, 0, 0);
    addTableLeg(table, -25, 0, -8);
    addTableLeg(table, -25, 0, 8);
    addTableLeg(table, 25, 0, 8);
    addTableLeg(table, 25, 0, -8);

    table.name = "table";
    scene.add(table);
    
    table.position.x = x;
    table.position.y = y;
    table.position.z = z;
}
/*----------TABLE-----------------------*/

/*----------CHAIR-----------------------*/

function addChairMasterLeg(obj, x, y, z) {
    'use strict';
    geometry = new THREE.BoxGeometry(2, 5, 2);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y-4, z);
    obj.add(mesh);
}

function addChairBase(obj, x, y, z) {
    'use strict';
    geometry = new THREE.BoxGeometry(12, 1, 12);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y-6, z);
    obj.add(mesh);
}

function addChairArm(obj, x, y, z) {
    'use strict';
    geometry = new THREE.BoxGeometry(1.5, 1.5, 12);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y+4, z-5);
    obj.add(mesh);
}


function addChairLeg(obj, x, y, z) {
    'use strict';
    geometry = new THREE.BoxGeometry(1.5, 4, 1.5);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y-8, z);
    obj.add(mesh);
}

function addChairSeat(obj, x, y, z) {
    'use strict';
    geometry = new THREE.BoxGeometry(12, 2, 12);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairBack(obj, x, y, z) {
    'use strict';
    geometry = new THREE.BoxGeometry(12, 12, 2);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y+2, z);
    obj.add(mesh);
}

function addChairWheels(obj, x, y, z) {
    'use strict';
    geometry = new THREE.TorusGeometry(1, 1, 11, 22);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y-12, z);
    mesh.rotation.y = Math.PI / 2;
    obj.add(mesh);
}

function createChair(x, y, z) {
    'use strict';
    
    chair = new THREE.Object3D();
    wheelless_chair = new THREE.Object3D();
    chair_wheels = new THREE.Object3D();


    var topChairAxis = new THREE.AxisHelper();
    wheelless_chair.add(topChairAxis);
    chair_wheels.add(new THREE.AxisHelper());
    chair.add(topChairAxis);

    chair.userData = {velocity: 0 }; //Aceleration is considered 1 or -1 depending on direction.
    
    material = new THREE.MeshBasicMaterial({ color: 0xdd6107, wireframe: true });
   
    addChairSeat(wheelless_chair, 0, 0, 0);
    addChairMasterLeg(wheelless_chair, 0, 0, 0);
    addChairLeg(wheelless_chair,5,0,5);
    addChairLeg(wheelless_chair, -5, 0, 5);
    addChairLeg(wheelless_chair, -5, 0, -5);
    addChairLeg(wheelless_chair,5,0,-5);
    addChairBack(wheelless_chair, 0, 5, 5);
    addChairBase(wheelless_chair,0,0,0);
    addChairArm(wheelless_chair, 5, 0, 5);
    addChairArm(wheelless_chair, -5, 0, 5);
    addChairArm(wheelless_chair, -5, 0, 5);
    addChairWheels(chair_wheels, 5, 0, 5);
    addChairWheels(chair_wheels, -5, 0, 5);
    addChairWheels(chair_wheels, -5, 0, -5);
    addChairWheels(chair_wheels, 5, 0, -5);

    chair.add(wheelless_chair);
    chair.add(chair_wheels);


    chair.name = "chair";

    scene.add(chair);
    
    chair.position.x = x;
    chair.position.y = y;
    chair.position.z = z;
}

/*----------CHAIR-----------------------*/

function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    

    scene.add(new THREE.AxisHelper(10));
    
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

function rotateRight(){

    chair.rotation.y -= Math.PI / 2;
    chair_wheels.rotation.y += Math.PI / 2;
    StartRotR = false;
}

function rotateLeft(){
    chair.rotation.y += Math.PI / 2;
    chair_wheels.rotation.y -= Math.PI / 2;
    StartRotL = false;
}



function checkMove(){
    
    var delta = clock.getDelta();

    if(controlUp){
        moveUp(2, delta);

    }
    else if(controlDown){
        moveDown(2, delta);
    }
   
    else if(breakU){            
        moveDown(0, delta);
    }
    else if(breakD){
        moveUp(0, delta);
    }
    if(StartRotL){
        rotateLeft();
    }
    if(StartRotR){
        rotateRight();
    }
  
  
    chair.translateZ(chair.userData.velocity);

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
