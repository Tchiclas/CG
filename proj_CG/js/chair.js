/*--------------------CHAIR CONSTRUCTOR-----------------------*/


class Chair extends THREE.Object3D{
    constructor(x,y,z){
        super();
        var wheelless_chair = createWheellessChair();
        var chair_wheels = createChairWheels();
        this.wheelless_chair = wheelless_chair;
        this.chair_wheels = chair_wheels;
        this.add(wheelless_chair);
        this.add(chair_wheels);
        this.add(topChairAxis);
        this.userData = {velocity: 0, rotvelocity:0};
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
        this.name = "chair";

    }

        /*Movement Functions*/
    moveUp(max, delta){
        if(this.userData.velocity > -max){
            this.userData.velocity -= delta;
        }
        else {
            this.userData.velocity = -max;
        }
    }

    moveDown(max, delta){
        if(this.userData.velocity < max){
            this.userData.velocity += delta;
        }
        else{
            this.userData.velocity = max;
        }
    }

    rotateRight(max,delta){

        if(this.userData.rotvelocity > -max){
           this.userData.rotvelocity  -= delta; 
          
        }
        else {
            this.userData.rotvelocity  = -max;
        }
    }

    rotateLeft(max,delta){
        if(this.userData.rotvelocity < max){
            this.userData.rotvelocity  += delta; 
           
        }
        else {
            this.userData.rotvelocity  = max;
        }
    }

    Move(){
        this.translateZ(this.userData.velocity);
        this.chair_wheels.children[0].rotation.z += this.userData.velocity;
        this.chair_wheels.children[1].rotation.z += this.userData.velocity;
        this.chair_wheels.children[2].rotation.z += this.userData.velocity;
        this.chair_wheels.children[3].rotation.z += this.userData.velocity;
        
         if (rotated && this.userData.velocity != 0 && (StopRotL || StopRotR)){
            this.chair_wheels.lookAt(topChairAxis); 
            rotated = false;
        } 
    }

    Rotate(){
        this.chair_wheels.rotation.y -= this.userData.rotvelocity;
        this.rotation.y += this.userData.rotvelocity;
        rotated = true;
        
        }
}
/*------------------------CHAIR CONSTRUCTOR--------------------------*/

/*--------------------AUX FUNCTIONS --------------------*/
function addChairMasterLeg(obj, x, y, z) {
    'use strict';
    
    geometry = new THREE.BoxGeometry(2, 5, 2);
    material = new THREE.MeshBasicMaterial({ color: 0x235881, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y-3, z);
    obj.add(mesh);
}

function addChairBase(obj, x, y, z) {
    'use strict';
    geometry = new THREE.BoxGeometry(12, 1, 12);
    material = new THREE.MeshBasicMaterial({ color: 0xae0f0f, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y-6, z);
    obj.add(mesh);
}

function addChairArm(obj, x, y, z) {
    'use strict';
    geometry = new THREE.BoxGeometry(1.5, 1.5, 12);
    material = new THREE.MeshBasicMaterial({ color: 0xeeeeee, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y+4, z-5);
    obj.add(mesh);
}


function addChairLeg(obj, x, y, z) {
    'use strict';
    geometry = new THREE.BoxGeometry(1.5, 4, 1.5);
    material = new THREE.MeshBasicMaterial({ color: 0xeeeeee, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y-8, z);
    obj.add(mesh);
}

function addChairSeat(obj, x, y, z) {
    'use strict';
    geometry = new THREE.BoxGeometry(12, 2, 12);
    material = new THREE.MeshBasicMaterial({ color: 0x235881, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairBack(obj, x, y, z) {
    'use strict';
    geometry = new THREE.BoxGeometry(12, 12, 2);
    material = new THREE.MeshBasicMaterial({ color: 0x235881, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y+2, z);
    obj.add(mesh);
}

function addChairWheels(obj, x, y, z) {
    'use strict';
    geometry = new THREE.TorusGeometry(1, 1, 11, 22);
    material = new THREE.MeshBasicMaterial({ color: 0x2B2F37, wireframe: true });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y-12, z);
    mesh.rotation.y = Math.PI / 2;
    
    obj.add(mesh);
}
function createWheellessChair(){
    'use strict';

    var wheelless_chair;
    wheelless_chair = new THREE.Object3D();
    wheelless_chair.userData = {rotvelocity:0};
    
    
    addChairSeat(wheelless_chair, 0, 0, 0);
    addChairBack(wheelless_chair, 0, 5, 5);
    addChairArm(wheelless_chair, 5, 0, 5);
    addChairArm(wheelless_chair, -5, 0, 5);

    return wheelless_chair;
}
function createChairWheels(){
    'use strict';

    var chair_wheels;
    chair_wheels = new THREE.Object3D();

    addChairWheels(chair_wheels, 5, 0, 5);
    addChairWheels(chair_wheels, -5, 0, 5);
    addChairWheels(chair_wheels, -5, 0, -5);
    addChairWheels(chair_wheels, 5, 0, -5);
    addChairLeg(chair_wheels,5,0,5);
    addChairLeg(chair_wheels, -5, 0, 5);
    addChairLeg(chair_wheels, -5, 0, -5);
    addChairLeg(chair_wheels,5,0,-5);
    addChairBase(chair_wheels,0,0,0);
    addChairMasterLeg(chair_wheels, 0, 0, 0);
       

    return chair_wheels;
}



/*-------------------- AUX FUNCTIONS CHAIR-----------------------*/

