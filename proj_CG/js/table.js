/*----------AUX FUNCTIONS TO CREATE TABLE-----------------------*/
function addTableLeg(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CylinderGeometry(2, 2, 16, 32);
    material = new THREE.MeshBasicMaterial({ color: 0xae0f0f, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y - 9, z);
    obj.add(mesh);
}

function addTableTop(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(60, 2, 25);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}
/*----------AUX FUNCTIONS TO CREATE TABLE-----------------------*/

/*--------------TABLE CONSTRUCTOR-----------------------*/
class Table extends THREE.Object3D{
    constructor(x,y,z){
        'use strict';
        super();
        material = new THREE.MeshBasicMaterial({ color: 0xEEEEEE, wireframe: true });
    
        addTableTop(this, 0, 0, 0);
        addTableLeg(this, -25, 0, -8);
        addTableLeg(this, -25, 0, 8);
        addTableLeg(this, 25, 0, 8);
        addTableLeg(this, 25, 0, -8);

        this.name = "table";
        
        
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;

    }
}
/*--------------TABLE CONSTRUCTOR-----------------------*/