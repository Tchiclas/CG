var geometry, material, mesh;


class Chair extends THREE.Object3D{

    constructor(x,y,z) { 
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;

        material = new THREE.MeshBasicMaterial({ color: 0xFF3BDB, wireframe: true });

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
              
    }

    addChairMasterLeg(obj, x, y, z) {
        'use strict';
        geometry = new THREE.BoxGeometry(2, 5, 2);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y-4, z);
        chair.add(mesh);
    }

    addChairBase(obj, x, y, z) {
        'use strict';
        geometry = new THREE.BoxGeometry(12, 1, 12);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y-6, z);
        chair.add(mesh);
    }

    addChairArm(obj, x, y, z) {
        'use strict';
        geometry = new THREE.BoxGeometry(1.5, 1.5, 12);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y+4, z-5);
        chair.add(mesh);
    }


    addChairLeg(obj, x, y, z) {
        'use strict';
        geometry = new THREE.BoxGeometry(1.5, 4, 1.5);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y-8, z);
        chair.add(mesh);
    }

    addChairSeat(obj, x, y, z) {
        'use strict';
        geometry = new THREE.BoxGeometry(12, 2, 12);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        chair.add(mesh);
    }

    addChairBack(obj, x, y, z) {
        'use strict';
        geometry = new THREE.BoxGeometry(12, 12, 2);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y+2, z);
        chair.add(mesh);
    }

    addChairWheels(obj, x, y, z) {
        'use strict';
        geometry = new THREE.TorusGeometry(1, 1, 11, 22);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y-12, z);
        mesh.rotation.y = Math.PI / 2;
        chair.add(mesh);
    }

}