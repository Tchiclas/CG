var geometry, material, mesh;


class Lamp extends THREE.Object3D{
  
    constructor(x,y,z) { //lamp position
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;

        material = new THREE.MeshBasicMaterial({ color: 0xFF3BDB, wireframe: true });
   
        addLampBase(lamp,0,0,0);
        addLampStand(lamp,0,1,0);
        addLampTop(lamp,0,24,0);
        
    }

    addLampTop(obj, x, y, z) {
        'use strict';
        geometry = new THREE.ConeGeometry(4, 8, 32);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y+4, z);
        mesh.rotation.x = Math.PI;
        obj.add(mesh);
    }


    addLampBase(obj, x, y, z) {
        'use strict';
        geometry = new THREE.CylinderGeometry(5, 5, 2, 32);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        obj.add(mesh);
    }

    addLampStand(obj, x, y, z) {
        'use strict';
        geometry = new THREE.CylinderGeometry(0.5, 0.5, 24, 22);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y+12, z);
        obj.add(mesh);
    }


}
