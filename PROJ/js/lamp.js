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

function addLampLightBulb(obj, x, y, z) {
    'use strict';
    geometry = new THREE.SphereGeometry(2, 22, 22, 0, Math.PI);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y+4, z);
    mesh.rotation.x = 3*Math.PI / 2;
    obj.add(mesh);
}

function addLampLightBulbBase(obj, x, y, z) {
    'use strict';
    geometry = new THREE.ConeGeometry(2, 4, 22);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y+2, z);
    mesh.rotation.x = Math.PI;
    obj.add(mesh);
}


function createLamp(x, y, z) {
    'use strict';
    
    lamp = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: 0xD60F0F, wireframe: true });
   
    addLampBase(lamp,0,0,0);
    addLampStand(lamp,0,1,0);
    addLampTop(lamp,0,24,0);
    addLampLightBulbBase(lamp,0,24,0);
    addLampLightBulb(lamp,0,24,0);

    lamp.name = "lamp";
    
    scene.add(lamp);
    
    lamp.position.x = x;
    lamp.position.y = y;
    lamp.position.z = z;
}


/*----------LAMP-----------------------*/
