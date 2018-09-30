Class Table{
	constructor(x, y, z){
		'use strict';
	    var table = new THREE.Object3D();
	    
	    material = new THREE.MeshBasicMaterial({ color: 0xFF3BDB, wireframe: true });	

        addTableTop(table, 0, 0, 0);
	    addTableLeg(table, -25, 0, -8);
	    addTableLeg(table, -25, 0, 8);
	    addTableLeg(table, 25, 0, 8);
	    addTableLeg(table, 25, 0, 8);
	    addTableLeg(table, 25, 0, -8);
	    
	    table.position.x = x;
	    table.position.y = y;
	    table.position.z = z;
	}
}