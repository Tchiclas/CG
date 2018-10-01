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

    chair.add(topChairAxis);

    chair.userData = {velocity: 0 , rotvelocity:0}; //Aceleration is considered 1 or -1 depending on direction.
    
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
