/*global THREE, requestAnimationFrame, console*/


/*A mesa ja esta feita 
ainda tem coisas do lab1 que nao sao precisas mas nao quero mudar
Ok! Assinado Rita
*/

var camera, scene, renderer;

var geometry, material, mesh;



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
    
    var lamp = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: 0xD60F0F, wireframe: true });
   
    addLampBase(lamp,0,0,0);
    addLampStand(lamp,0,1,0);
    addLampTop(lamp,0,24,0);
    
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
    
    var table = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: 0xFF3BDB, wireframe: true });
   
    addTableTop(table, 0, 0, 0);
    addTableLeg(table, -25, 0, -8);
    addTableLeg(table, -25, 0, 8);
    addTableLeg(table, 25, 0, 8);
    addTableLeg(table, 25, 0, 8);
    addTableLeg(table, 25, 0, -8);

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
    
    var chair = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: 0xdd6107, wireframe: true });
   
    addChairSeat(chair, 0, 0, 0);
    addChairMasterLeg(chair, 0, 0, 0);
    addChairLeg(chair,5,0,5);
    addChairLeg(chair, -5, 0, 5);
    addChairLeg(chair, -5, 0, -5);
    addChairLeg(chair,5,0,-5);
    addChairWheels(chair, 5, 0, 5);
    addChairWheels(chair, -5, 0, 5);
    addChairWheels(chair, -5, 0, -5);
    addChairWheels(chair, 5, 0, -5);
    addChairBack(chair, 0, 5, 5);
    addChairBase(chair,0,0,0);
    addChairArm(chair, 5, 0, 5);
    addChairArm(chair, -5, 0, 5);

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
    camera = new THREE.PerspectiveCamera(70,
                                         window.innerWidth / window.innerHeight,
                                         1,
                                         1000);
    camera.position.x = -60;
    camera.position.y = 30;
    camera.position.z = -90;
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
        scene.traverse(function (node) {
            if (node instanceof THREE.Mesh) {
                node.material.wireframe = !node.material.wireframe;
            }
        });
        break;
    case 69:  //E
    case 101: //e
        scene.traverse(function (node) {
            if (node instanceof THREE.AxisHelper) {
                node.visible = !node.visible;
            }
        });
        break;
    case 49:    //1
        camera.position.x = -60;
        camera.position.y = 30;
        camera.position.z = -90;
        camera.lookAt(scene.position);
        break;
    case 50:    //2
        camera.position.x = 60;
        camera.position.y = 90;
        camera.position.z = 30;
        camera.lookAt(scene.position);
        break;
    case 51:    //3
        camera.position.x = 60;
        camera.position.y = 30;
        camera.position.z = 90;
        camera.lookAt(scene.position);
        break;
    }
    
    render();
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
}

function animate() {
    'use strict';
    
    render();
    
    requestAnimationFrame(animate);
}
