
var backgroundMusic = new Audio('music.ogg');
document.getElementById('btn1').addEventListener('click', function () {
    backgroundMusic.play();
});
document.getElementById('btn2').addEventListener('click', function () {
    backgroundMusic.pause();
});

let scene, camera, renderer, cube, listener;
function init() {


    //creating a scene
    scene = new THREE.Scene();

    //creating the camera - PerspectiveCamera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    //set up the renderer using WebGL
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //setting up the cube to display

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    // To use the color of the cube as blue uncomment this line and comment the below two lines
    // const material = new THREE.MeshBasicMaterial({
    //     color: 0xffeaa7
    // });

    //to create the texture 
    const texture = new THREE.TextureLoader().load('texture.jpg');
    const material = new THREE.MeshBasicMaterial({
        map: texture
    });
    cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;
}
//function on resizing the browser
function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
//calling the function on resizing 
window.addEventListener('resize', onResize, false);



//rendering the scene
function animate() {
    requestAnimationFrame(animate);
    //rotating the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

init();
animate();