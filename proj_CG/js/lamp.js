/*---------LAMP CONSTRUCTOR------------*/
class Lamp extends THREE.Object3D{
    constructor(x,y,z){
        'use strict'
        super();
      
        addLampBase(this,0,0,0);
        addLampStand(this,0,1,0);
        addLampTop(this,0,24,0);
        addLampLightBulbBase(this,0,24,0);
        addLampLightBulb(this,0,24,0);

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
        this.name = "lamp";
    }
}
/*---------LAMP CONSTRUCTOR------------*/
/*----------AUX FUNCTIONS LAMP-----------------------*/

function addLampTop(obj, x, y, z) {
    'use strict';
    geometry = new THREE.ConeGeometry(4, 8, 32);
    material = new THREE.MeshBasicMaterial({ color: 0x235881, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y+4, z);
    mesh.rotation.x = Math.PI;
    obj.add(mesh);
}

function addLampBase(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CylinderGeometry(5, 5, 2, 32);
    material = new THREE.MeshBasicMaterial({ color: 0xae0f0f, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addLampStand(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CylinderGeometry(0.5, 0.5, 24, 22);
    material = new THREE.MeshBasicMaterial({ color: 0xEEEEEE, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y+12, z);
    obj.add(mesh);
}

function addLampLightBulb(obj, x, y, z) {
    'use strict';
    geometry = new THREE.SphereGeometry(2, 22, 22, 0, Math.PI);
    material = new THREE.MeshBasicMaterial({ color: 0xEEEEEE, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y+4, z);
    mesh.rotation.x = 3*Math.PI / 2;
    obj.add(mesh);
}

function addLampLightBulbBase(obj, x, y, z) {
    'use strict';
    geometry = new THREE.ConeGeometry(2, 4, 22);
    material = new THREE.MeshBasicMaterial({ color: 0xBFAF61, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y+2, z);
    mesh.rotation.x = Math.PI;
    obj.add(mesh);
}


/*----------AUX FUNCTIONS LAMP-----------------------*/


