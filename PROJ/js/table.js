
/*----------TABLE-----------------------*/
function addTableLeg(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CylinderGeometry(1, 2, 16, 32);
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

function createTable(x, y, z) {
    'use strict';
    
    table = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: 0xFF3BDB, wireframe: true });
   
    addTableTop(table, 0, 0, 0);
    addTableLeg(table, -25, 0, -8);
    addTableLeg(table, -25, 0, 8);
    addTableLeg(table, 25, 0, 8);
    addTableLeg(table, 25, 0, -8);

    table.name = "table";
    scene.add(table);
    
    table.position.x = x;
    table.position.y = y;
    table.position.z = z;
}
/*----------TABLE-----------------------*/