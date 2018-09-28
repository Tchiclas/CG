var geometry, material, mesh;


class Table extends THREE.Object3D{

    constructor(x,y,z) { //table position

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;

        material = new THREE.MeshBasicMaterial({ color: 0xFF3BDB, wireframe: true });
   
        addTableTop(table, 0, 0, 0);
        addTableLeg(table, -25, 0, -8);
        addTableLeg(table, -25, 0, 8);
        addTableLeg(table, 25, 0, 8);
        addTableLeg(table, 25, 0, 8);
        addTableLeg(table, 25, 0, -8);
        
    }
    
    addTableLeg(obj, x, y, z) {
        'use strict';
        geometry = new THREE.CylinderGeometry(2, 2, 16, 32);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y - 9, z);
        obj.add(mesh);
    }

    addTableTop(obj, x, y, z) {
        'use strict';
        geometry = new THREE.CubeGeometry(60, 2, 20);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        obj.add(mesh);
    }


}