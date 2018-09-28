/*global THREE, requestAnimationFrame, console*/


/*A mesa ja esta feita 
ainda tem coisas do lab1 que nao sao precisas mas nao quero mudar
Ok! Assinado Rita
*/

var camera, scene, renderer;

var geometry, material, mesh;

var chair, lamp, chair;


function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    scene.add(new THREE.AxisHelper(10));
    
    chair = new Chair(0,14,15);
    scene.add(chair);
    
    table = new Table(0, 17, 0);
    scene.add(table);
    
    lamp = new Lamp(40,1,0);
    scene.add(lamp);
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