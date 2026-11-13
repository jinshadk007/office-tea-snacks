import * as THREE from './vendor/three.module.min.js';

export function mountGlass(element, motionPreference) {
  if (motionPreference.matches) return;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(33, 1, .1, 50);
  camera.position.set(3.4, 2.15, 5.7);
  camera.lookAt(0, .1, 0);
  const renderer = new THREE.WebGLRenderer({antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  element.append(renderer.domElement);

  const glass = new THREE.Group();
  scene.add(glass);
  const profile = [[0,-.96],[.59,-.96],[.67,-.89],[.82,.83],[.81,.91],[.76,.91],[.75,.81],[.61,-.77],[0,-.77]];
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color:0xe8d4b3, transparent:true, opacity:.32, metalness:.12, roughness:.19, side:THREE.DoubleSide,
  });
  glass.add(new THREE.Mesh(new THREE.LatheGeometry(profile.map(([x,y]) => new THREE.Vector2(x,y)), 64), glassMaterial));
  const chai = new THREE.Mesh(
    new THREE.CylinderGeometry(.744,.612,1.43,64),
    new THREE.MeshStandardMaterial({color:0x9f4b21,roughness:.27,metalness:.12})
  );
  chai.position.y = -.045;
  glass.add(chai);

  const ribGeometry = new THREE.CylinderGeometry(.025,.031,1.57,8);
  for (let i = 0; i < 24; i++) {
    const angle = i * Math.PI / 12;
    const rib = new THREE.Mesh(ribGeometry, glassMaterial);
    rib.position.set(.704 * Math.cos(angle), -.04, .704 * Math.sin(angle));
    rib.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0), new THREE.Vector3(.095*Math.cos(angle),1,.095*Math.sin(angle)).normalize());
    glass.add(rib);
  }

  scene.add(new THREE.HemisphereLight(0xffe2bc,0x2a170a,2.35));
  const key = new THREE.DirectionalLight(0xffc88d,3.1);
  key.position.set(3,5,4);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xfff0cc,2.8);
  rim.position.set(-3,1,-4);
  scene.add(rim);

  let visible = false;
  let pointer = 0;
  let start = 0;
  function frame(time) {
    if (!start) start = time;
    glass.rotation.y = (time - start) * .00036 + pointer;
    glass.rotation.z = Math.sin((time - start) * .001) * .07;
    renderer.render(scene,camera);
  }
  function syncLoop() {
    renderer.setAnimationLoop(visible && !document.hidden && !motionPreference.matches ? frame : null);
  }
  function resize() {
    const {clientWidth:width,clientHeight:height} = element;
    if (!width || !height) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width,height,false);
    renderer.render(scene,camera);
  }
  new ResizeObserver(resize).observe(element);
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    syncLoop();
  }).observe(element);
  element.addEventListener('pointermove', event => {
    pointer = (event.clientX - element.getBoundingClientRect().left) / element.clientWidth - .5;
  });
  element.addEventListener('pointerleave', () => { pointer = 0; });
  motionPreference.addEventListener('change',syncLoop);
  document.addEventListener('visibilitychange',syncLoop);
  resize();
}
