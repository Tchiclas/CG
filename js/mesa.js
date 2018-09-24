/*global THREE, requestAnimationFrame, console*/


/*A mesa ja esta feita 

ainda tem coisas do lab1 que nao sao precisas mas nao quero mudar

Ok! Assinado Rita
*/

var camera, scene, renderer;

var geometry, material, mesh;

var ball;
/*----------TABLE-----------------------*/
function addTableLeg(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CylinderGeometry(2, 2, 16, 32);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y - 8, z);
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
    
    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
   
    addTableTop(table, 0, 0, 0);
    addTableLeg(table, -25, 0, -8);
    addTableLeg(table, -25, 0, 8);
    addTableLeg(table, 25, 0, 8);
    addTableLeg(table, 25, 0, -8);
    
    scene.add(table);
    
    table.position.x = x;
    table.position.y = y;
    table.position.z = z;
}
/*----------TABLE-----------------------*/

/*----------CHAIR-----------------------*/

function addChairLeg(obj, x, y, z) {
    'use strict';
    geometry = new THREE.BoxGeometry(2, 10, 2);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y-6, z);
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
    geometry = new THREE.TorusGeometry(1, 1, 11, 32);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y-13, z);
    mesh.rotation.y = Math.PI / 2;
    obj.add(mesh);
}

function createChair(x, y, z) {
    'use strict';
    
    var chair = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
   
    addChairSeat(chair, 0, 0, 0);
    addChairLeg(chair, 5, 0, 5);
    addChairLeg(chair, -5, 0, 5);
    addChairLeg(chair, -5, 0, -5);
    addChairLeg(chair, 5, 0, -5);
    addChairWheels(chair, 5, 0, 5);
    addChairWheels(chair, -5, 0, 5);
    addChairWheels(chair, -5, 0, -5);
    addChairWheels(chair, 5, 0, -5);
    addChairBack(chair, 0, 5, 5)
    
    scene.add(chair);
    
    chair.position.x = x;
    chair.position.y = y;
    chair.position.z = z;
}

/*----------CHAIR-----------------------*/

function createBall(x, y, z) {
    'use strict';
    
    ball = new THREE.Object3D();
    ball.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    geometry = new THREE.SphereGeometry(4, 10, 10);
    mesh = new THREE.Mesh(geometry, material);
    
    ball.add(mesh);
    ball.position.set(x, y, z);
    
    scene.add(ball);
}




function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    

    scene.add(new THREE.AxisHelper(10));
    
    createTable(0, 8, 0);
    //createBall(0, 0, 15);
    createChair(0,2,15);
}

function createCamera() {
    'use strict';
    camera = new THREE.PerspectiveCamera(70,
                                         window.innerWidth / window.innerHeight,
                                         1,
                                         1000);
    camera.position.x = 50;
    camera.position.y = -10;
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
    case 83:  //S
    case 115: //s
        //ball.userData.jumping = !ball.userData.jumping;
        break;
    case 69:  //E
    case 101: //e
        scene.traverse(function (node) {
            if (node instanceof THREE.AxisHelper) {
                node.visible = !node.visible;
            }
        });
        break;
    }
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
    
    if (ball.userData.jumping) {
        ball.userData.step += 0.04;
        ball.position.y = Math.abs(30 * (Math.sin(ball.userData.step)));
        ball.position.z = 15 * (Math.cos(ball.userData.step));
    }
    render();
    
    requestAnimationFrame(animate);
}

