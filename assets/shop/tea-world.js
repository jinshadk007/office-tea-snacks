import * as THREE from './vendor/three.module.min.js';

// One connected model in metre-like world units. No background photographs or
// video rectangles are used for the architecture, furniture or cooking area.
export function buildTeaShop(scene, renderer) {
  let seed=4831;
  const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
  function texture(kind, base, size=512) {
    const canvas=document.createElement('canvas'); canvas.width=canvas.height=size;
    const ctx=canvas.getContext('2d'); ctx.fillStyle=base; ctx.fillRect(0,0,size,size);
    const data=ctx.getImageData(0,0,size,size);
    for(let y=0;y<size;y++) for(let x=0;x<size;x++) {
      const grain=kind==='wood' ? Math.sin(y*.35+Math.sin(x*.012)*5)*7+Math.sin(y*1.9+x*.009)*3 : 0;
      const noise=(random()-.5)*(kind==='plaster'?12:16)+grain;
      const n=(y*size+x)*4;
      for(let c=0;c<3;c++) data.data[n+c]=Math.max(0,Math.min(255,data.data[n+c]+noise));
    }
    ctx.putImageData(data,0,0);
    if(kind==='wood') {
      for(let i=0;i<95;i++) {ctx.strokeStyle=`rgba(18,10,4,${random()*.22})`;ctx.lineWidth=random()*2+.2;ctx.beginPath();let y=random()*size;ctx.moveTo(0,y);for(let x=0;x<=size;x+=16)ctx.lineTo(x,y+Math.sin(x*.017+i)*1.8);ctx.stroke();}
      for(let i=0;i<7;i++){const x=random()*size,y=random()*size;ctx.strokeStyle='#22130f33';for(let j=0;j<5;j++){ctx.beginPath();ctx.ellipse(x,y,22+j*7,2+j*2,0,0,Math.PI*2);ctx.stroke();}}
    }
    if(kind==='plaster') {
      for(let i=0;i<65;i++){const x=random()*size,y=random()*size,r=10+random()*55;const gradient=ctx.createRadialGradient(x,y,0,x,y,r);gradient.addColorStop(0,'#443d2616');gradient.addColorStop(1,'#443d2600');ctx.fillStyle=gradient;ctx.fillRect(x-r,y-r,r*2,r*2);}
      for(let i=0;i<15;i++){ctx.strokeStyle='#51442b20';ctx.lineWidth=.6;ctx.beginPath();let x=random()*size,y=random()*size;ctx.moveTo(x,y);for(let j=0;j<6;j++){x+=(random()-.5)*14;y+=random()*13;ctx.lineTo(x,y);}ctx.stroke();}
    }
    if(kind==='floor') {ctx.strokeStyle='#1f241e66';ctx.lineWidth=3;for(let i=0;i<=size;i+=128){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,size);ctx.moveTo(0,i);ctx.lineTo(size,i);ctx.stroke();}}
    const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;map.wrapS=map.wrapT=THREE.RepeatWrapping;map.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());return map;
  }
  const woodMap=texture('wood','#57402b');
  const plasterMap=texture('plaster','#c4b390');
  const greenMap=texture('plaster','#354e3e');
  const floorMap=texture('floor','#625d4b');floorMap.repeat.set(3,4);
  const roofMap=texture('plaster','#79402b');
  const materials={
    plaster:new THREE.MeshStandardMaterial({map:plasterMap,bumpMap:plasterMap,bumpScale:.035,roughness:1}),
    green:new THREE.MeshStandardMaterial({map:greenMap,bumpMap:greenMap,bumpScale:.025,roughness:.95}),
    wood:new THREE.MeshStandardMaterial({map:woodMap,bumpMap:woodMap,bumpScale:.025,roughness:.86}),
    darkWood:new THREE.MeshStandardMaterial({map:woodMap,color:0x64503b,roughness:.91}),
    floor:new THREE.MeshStandardMaterial({map:floorMap,bumpMap:floorMap,bumpScale:.025,roughness:.91}),
    stone:new THREE.MeshStandardMaterial({color:0x817967,roughness:1}),
    roof:new THREE.MeshStandardMaterial({map:roofMap,bumpMap:roofMap,bumpScale:.03,roughness:1,side:THREE.DoubleSide}),
    steel:new THREE.MeshStandardMaterial({color:0xabb2a6,metalness:.78,roughness:.28}),
    brass:new THREE.MeshStandardMaterial({color:0xb38a42,metalness:.72,roughness:.36}),
    iron:new THREE.MeshStandardMaterial({color:0x22251e,metalness:.52,roughness:.71}),
    oil:new THREE.MeshStandardMaterial({color:0x735124,metalness:.2,roughness:.18}),
    glass:new THREE.MeshStandardMaterial({color:0xbbc9b1,transparent:true,opacity:.24,metalness:.1,roughness:.08,depthWrite:false}),
    tea:new THREE.MeshStandardMaterial({color:0xa4743c,roughness:.4}),
    snack:new THREE.MeshStandardMaterial({color:0xba7725,roughness:.93}),
    bananaLeaf:new THREE.MeshStandardMaterial({color:0x526332,roughness:.72}),
  };
  const building=new THREE.Group();scene.add(building);
  const geo={box:new THREE.BoxGeometry(1,1,1),cylinder:new THREE.CylinderGeometry(1,1,1,24),sphere:new THREE.SphereGeometry(1,20,12)};
  function box(w,h,d,x,y,z,material=materials.wood,parent=building) {
    const mesh=new THREE.Mesh(geo.box,material);mesh.scale.set(w,h,d);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;
  }
  function cylinder(radius,height,x,y,z,material=materials.steel,parent=building,top=radius) {
    const geometry=top===radius?geo.cylinder:new THREE.CylinderGeometry(top/radius,1,1,24);
    const mesh=new THREE.Mesh(geometry,material);mesh.scale.set(radius,height,radius);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;
  }
  function sphere(rx,ry,rz,x,y,z,material,parent=building) {const mesh=new THREE.Mesh(geo.sphere,material);mesh.scale.set(rx,ry,rz);mesh.position.set(x,y,z);mesh.castShadow=true;parent.add(mesh);return mesh;}
  function torus(radius,tube,x,y,z,material=materials.iron,parent=building) {const mesh=new THREE.Mesh(new THREE.TorusGeometry(radius,tube,8,32),material);mesh.position.set(x,y,z);parent.add(mesh);return mesh;}
  function wall(w,x,z) {box(w,3.4,.25,x,1.7,z,materials.plaster);box(w,1.1,.28,x,.55,z+.025,materials.green);}
  // Ground, a raised stone threshold, connected floor, facade and genuine doorway.
  box(60,.15,60,0,-.2,0,materials.stone);
  box(10.2,.16,14,0,-.03,-5,materials.floor);
  box(4,.12,1.1,-.2,.06,.25,materials.stone);
  wall(3.4,-3.3,0);wall(3.8,3.1,0);box(2.8,.72,.3,-.2,3.04,0,materials.plaster);
  box(.16,2.72,.38,-1.65,1.36,.04,materials.darkWood);box(.16,2.72,.38,1.25,1.36,.04,materials.darkWood);box(3.08,.17,.4,-.2,2.73,.04,materials.darkWood);
  // The doors are fixed open in depth, so the camera passes between their jambs.
  const doorL=new THREE.Group();doorL.position.set(-1.65,0,-.03);doorL.rotation.y=-1.27;building.add(doorL);
  const doorR=new THREE.Group();doorR.position.set(1.25,0,-.03);doorR.rotation.y=1.3;building.add(doorR);
  for(const [group,sign] of [[doorL,1],[doorR,-1]]) {
    box(1.37,2.54,.1,sign*.69,1.3,0,materials.green,group);
    for(let i=0;i<5;i++)box(.018,2.44,.025,sign*(.14+i*.27),1.3,.06,materials.darkWood,group);
    for(const y of [.18,1.3,2.48])box(1.34,.07,.06,sign*.69,y,.08,materials.wood,group);
    sphere(.035,.035,.035,sign*1.12,1.24,.12,materials.brass,group);
  }
  // Side walls and low green paint continue into the same shop interior.
  for(const x of [-5,5]) {box(.25,3.4,12,x,1.7,-6,materials.plaster);box(.28,1.1,12,x,.55,-6,materials.green);}
  wall(10,0,-12);
  box(10,.12,12,0,3.46,-6,materials.darkWood);
  for(let z=0;z>=-12;z-=2)box(10,.2,.15,0,3.3,z,materials.wood);
  for(const x of [-4.72,4.72])box(.17,3.4,.17,x,1.7,1.7,materials.darkWood);
  for(const z of [0,1.8])box(10.5,.18,.2,0,3.4,z,materials.wood);
  // Instanced curved clay tiles, rather than a flat photograph of a roof.
  const roof=new THREE.InstancedMesh(new THREE.CylinderGeometry(.155,.155,3.05,10,1,true,Math.PI/2,Math.PI),materials.roof,36);
  const transform=new THREE.Object3D();
  for(let i=0;i<36;i++){transform.position.set(-5.25+i*.3,3.6,1.0);transform.rotation.set(Math.PI/2+.08,0,0);transform.updateMatrix();roof.setMatrixAt(i,transform.matrix);}
  const roofBacking=box(10.8,.09,3.05,0,3.48,1.0,materials.darkWood);roofBacking.rotation.x=.08;
  roof.castShadow=true;roof.receiveShadow=true;building.add(roof);
  // Window recess, shutters and iron bars on the facade and inside.
  function windowUnit(x,y,z,rotation=0) {
    const group=new THREE.Group();group.position.set(x,y,z);group.rotation.y=rotation;building.add(group);
    box(1.7,1.5,.08,0,0,0,materials.darkWood,group);box(1.43,1.24,.04,0,0,.06,materials.green,group);
    for(const a of [-.57,-.28,0,.28,.57])box(.025,1.2,.04,a,0,.1,materials.iron,group);
    for(const a of [-.84,.84])box(.1,1.62,.18,a,0,.08,materials.wood,group);
    box(1.85,.12,.32,0,-.8,.12,materials.wood,group);
  }
  windowUnit(-3.3,1.92,.17);
  windowUnit(-4.83,1.98,-3.2,Math.PI/2);windowUnit(-4.83,1.98,-7.1,Math.PI/2);
  function table(x,z,w=2.1,d=.9,height=.82) {
    const group=new THREE.Group();group.position.set(x,0,z);building.add(group);
    box(w,.12,d,0,height,0,materials.wood,group);
    for(const a of [-1,1])for(const b of [-1,1])box(.075,height,.075,a*(w/2-.13),height/2,b*(d/2-.12),materials.darkWood,group);
    box(w-.18,.08,.08,0,.2,0,materials.wood,group);return group;
  }
  function bench(x,z,w=2.2,rotation=0) {const group=table(x,z,w,.42,.45);group.rotation.y=rotation;box(w,.36,.06,0,.79,-.22,materials.green,group);for(const a of [-w/2+.15,w/2-.15])box(.05,.57,.05,a,.63,-.22,materials.wood,group);return group;}
  bench(-3.65,-3.8,2.3,Math.PI/2);bench(-3.65,-7.4,2.3,Math.PI/2);table(-2.6,-5.55,1.6,.8);bench(-1.65,-5.55,1.4,Math.PI/2);
  // Front serving counter and interior worktop. They occlude lower-body cutout edges.
  box(3.0,.88,.85,3.0,.44,1.0,materials.green);box(3.18,.11,1.03,3.0,.94,1.0,materials.wood);
  for(const x of [1.7,2.55,3.4,4.25])box(.035,.7,.04,x,.45,1.45,materials.brass);
  table(3.72,-6.2,1.4,4.1,.88);
  table(0,-10.2,8.5,1.05,.88);
  box(8.5,.79,.06,0,.45,-9.67,materials.green);
  for(let x=-3.8;x<4;x+=1.25)box(.03,.64,.025,x,.45,-9.625,materials.wood);
  // Shelves are physical planks with separate tins and jars casting shadows.
  for(const z of [-2.6,-5.5,-8.2]) {
    box(.65,.1,2.0,4.55,2.35,z,materials.wood);
    for(let n=0;n<5;n++)cylinder(.105,.32,4.48,2.56,z-.7+n*.34,n%2?materials.brass:materials.steel);
  }
  for(const y of [1.88,2.65]) {
    box(6.7,.1,.42,0,y,-11.65,materials.wood);
    for(let i=0;i<12;i++){const x=-3+i*.54;cylinder(.09,.23,x,y+.16,-11.62,i%3?materials.steel:materials.brass);}
  }
  function glass(x,y,z,filled=false) {cylinder(.066,.18,x,y+.09,z,materials.glass,building,.079);const rim=torus(.078,.006,x,y+.184,z,materials.steel);rim.rotation.x=Math.PI/2;if(filled)cylinder(.065,.14,x,y+.07,z,materials.tea);}
  function bowl(x,y,z,r=.22) {
    const mesh=new THREE.Mesh(new THREE.SphereGeometry(r,24,12,0,Math.PI*2,Math.PI/2,Math.PI/2),new THREE.MeshStandardMaterial({color:0xb6b8a9,metalness:.7,roughness:.32,side:THREE.DoubleSide}));
    mesh.position.set(x,y+r*.57,z);mesh.scale.y=.58;mesh.castShadow=true;building.add(mesh);const rim=torus(r,.012,x,y+r*.57,z,materials.steel);rim.rotation.x=Math.PI/2;return mesh;
  }
  function boiler(x,y,z) {cylinder(.25,.56,x,y+.3,z,materials.brass);cylinder(.27,.04,x,y+.6,z,materials.brass);sphere(.06,.035,.06,x,y+.64,z,materials.darkWood);cylinder(.3,.05,x,y+.015,z,materials.iron);const tap=cylinder(.025,.15,x-.3,y+.16,z,materials.brass);tap.rotation.z=Math.PI/2;}
  boiler(4.0,1.0,1.1);for(let i=0;i<5;i++)glass(1.8+i*.19,1.0,1.08,i===0);
  boiler(-4.05,.96,-10.2);glass(-2,.96,-10.0,true);bowl(0,.98,-10.1,.3);bowl(2,.98,-10.1,.21);
  const leaf=box(1,.008,.52,2,.97,-9.96,materials.bananaLeaf);leaf.rotation.y=.1;
  const snacks=[];
  for(let i=0;i<7;i++){const snack=sphere(.1,.028,.065,1.65+(i%3)*.22,1.0,-9.86-Math.floor(i/3)*.15,materials.snack);snack.rotation.y=random();snacks.push(snack);}
  // Real iron stove and curved kadai at the cook's station.
  box(.9,.2,.88,3.25,1.02,-6.05,materials.iron);
  for(const z of [-6.33,-5.77])box(.95,.06,.06,3.25,1.16,z,materials.iron);
  const kadai=new THREE.Mesh(new THREE.SphereGeometry(.43,32,16,0,Math.PI*2,Math.PI/2,Math.PI/2),new THREE.MeshStandardMaterial({color:0x25271e,metalness:.6,roughness:.53,side:THREE.DoubleSide}));kadai.position.set(3.25,1.23,-6.05);kadai.scale.y=.5;kadai.castShadow=true;building.add(kadai);
  const rim=torus(.43,.025,3.25,1.23,-6.05);rim.rotation.x=Math.PI/2;
  for(const z of [-6.53,-5.57]) {const handle=torus(.1,.018,3.25,1.26,z);handle.rotation.y=Math.PI/2;}
  cylinder(.38,.01,3.25,1.17,-6.05,materials.oil);
  const bananaPieces=[];
  for(let i=0;i<3;i++){const piece=sphere(.19,.035,.055,3.14+(i%2)*.19,1.19,-6.19+i*.13,materials.snack);piece.rotation.y=.25+i*.5;bananaPieces.push(piece);}
  bowl(3.23,.96,-7.0,.23);bowl(3.15,.96,-7.6,.18);
  const tray=box(.74,.035,.54,3.27,.96,-4.85,materials.steel);
  for(let i=0;i<4;i++)sphere(.2,.035,.055,3.04+(i%2)*.29,1.01,-4.97+Math.floor(i/2)*.18,materials.snack);
  // Hanging pots, kettle and spatulas add layers between the wall and actors.
  for(let i=0;i<4;i++){const pan=new THREE.Mesh(new THREE.SphereGeometry(.17,20,12,0,Math.PI*2,0,Math.PI/2),materials.brass);pan.position.set(4.72,2.45,-4.5-i*.45);pan.rotation.z=Math.PI/2;building.add(pan);box(.04,.27,.035,4.72,2.73,-4.5-i*.45,materials.darkWood);}
  // A hand-painted fascia texture is attached to a physical signboard.
  const signCanvas=document.createElement('canvas');signCanvas.width=1536;signCanvas.height=256;
  const signCtx=signCanvas.getContext('2d');signCtx.fillStyle='#233d2b';signCtx.fillRect(0,0,1536,256);signCtx.strokeStyle='#b39a60';signCtx.lineWidth=6;signCtx.strokeRect(12,12,1512,232);signCtx.fillStyle='#e0cfa4';signCtx.textAlign='center';signCtx.font='76px Georgia, serif';signCtx.fillText('CHAYA KADA',768,112);signCtx.font='24px Georgia, serif';signCtx.fillText('ചായ  •  കടി  •  കൂട്ടു',768,183);
  const signMap=new THREE.CanvasTexture(signCanvas);signMap.colorSpace=THREE.SRGBColorSpace;
  const sign=new THREE.Mesh(new THREE.BoxGeometry(5.2,.72,.12),new THREE.MeshStandardMaterial({map:signMap,roughness:.88}));sign.position.set(-.2,3.05,.25);sign.castShadow=true;building.add(sign);
  // A clock and a hand-lettered kitchen board belong to the room itself.
  const boardCanvas=document.createElement('canvas');boardCanvas.width=512;boardCanvas.height=640;
  const bc=boardCanvas.getContext('2d');bc.fillStyle='#28382c';bc.fillRect(0,0,512,640);bc.strokeStyle='#c0ad77';bc.lineWidth=5;bc.strokeRect(18,18,476,604);bc.fillStyle='#d6cba8';bc.textAlign='center';bc.font='italic 48px Georgia';bc.fillText('ഇന്നത്തെ കടി',256,110);bc.font='35px Georgia';['ചായ','കാപ്പി','പഴംപൊരി','ഉള്ളിവട','പരിപ്പുവട'].forEach((text,i)=>bc.fillText(text,256,205+i*73));
  const boardMap=new THREE.CanvasTexture(boardCanvas);boardMap.colorSpace=THREE.SRGBColorSpace;
  const board=new THREE.Mesh(new THREE.BoxGeometry(.8,1,.07),new THREE.MeshStandardMaterial({map:boardMap,roughness:1}));board.position.set(-4.79,2.0,-1.45);board.rotation.y=Math.PI/2;building.add(board);
  const clockFace=new THREE.Mesh(new THREE.CircleGeometry(.25,40),new THREE.MeshStandardMaterial({color:0xddd1b0,roughness:.9}));clockFace.position.set(0,2.98,-11.82);building.add(clockFace);
  torus(.255,.02,0,2.98,-11.8,materials.darkWood);
  const hand1=box(.018,.14,.015,0,3.04,-11.79,materials.darkWood);hand1.rotation.z=.3;
  const hand2=box(.17,.012,.016,.06,2.97,-11.78,materials.darkWood);hand2.rotation.z=-.3;
  // Small reflection cards light metal and glass within the same physical scene.
  const environmentFaces=[];
  for(let i=0;i<6;i++){const c=document.createElement('canvas');c.width=c.height=128;const ec=c.getContext('2d');const g=ec.createLinearGradient(0,0,0,128);g.addColorStop(0,'#dad8c6');g.addColorStop(.5,'#9a947f');g.addColorStop(1,'#3c4938');ec.fillStyle=g;ec.fillRect(0,0,128,128);ec.fillStyle=i%2?'#f7edcf':'#aaa68f';ec.fillRect(18,20,42,66);environmentFaces.push(c);}
  const environment=new THREE.CubeTexture(environmentFaces);environment.colorSpace=THREE.SRGBColorSpace;environment.needsUpdate=true;scene.environment=environment;scene.environmentIntensity=.55;
  // Warm practical lamps and broad daylight share one lighting setup.
  scene.add(new THREE.HemisphereLight(0xdfe4d4,0x5c4329,2.05));
  const sun=new THREE.DirectionalLight(0xffe2b1,3.3);sun.position.set(-5,8,7);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-9;sun.shadow.camera.right=9;sun.shadow.camera.top=9;sun.shadow.camera.bottom=-13;sun.shadow.camera.far=30;sun.shadow.bias=-.0006;sun.shadow.normalBias=.035;sun.shadow.radius=3;scene.add(sun);
  for(const z of [-2.1,-6.3,-10.2]) {
    cylinder(.017,.5,0,3.15,z,materials.iron);
    const shade=new THREE.Mesh(new THREE.ConeGeometry(.26,.18,24,1,true),materials.green);shade.position.set(0,2.88,z);building.add(shade);
    const bulbMat=new THREE.MeshBasicMaterial({color:0xffe0a4});sphere(.055,.055,.055,0,2.83,z,bulbMat);
    const light=new THREE.PointLight(0xffd28a,7.5,8,2);light.position.set(0,2.75,z);scene.add(light);
  }
  // Low, soft contact shadows ground furniture and the waist-up performers.
  const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=128;
  const sc=shadowCanvas.getContext('2d'),gradient=sc.createRadialGradient(64,64,2,64,64,62);gradient.addColorStop(0,'#0008');gradient.addColorStop(1,'#0000');sc.fillStyle=gradient;sc.fillRect(0,0,128,128);
  const shadowMap=new THREE.CanvasTexture(shadowCanvas);
  function contactShadow(x,z,w=1.3,d=.8){const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,d),new THREE.MeshBasicMaterial({map:shadowMap,transparent:true,depthWrite:false}));mesh.rotation.x=-Math.PI/2;mesh.position.set(x,.065,z);building.add(mesh);}
  contactShadow(2.8,.8,3,1.6);contactShadow(3.6,-6.5,1.8,2.5);for(const x of [-2,0,2])contactShadow(x,-10.7,1.8,1.2);
  // Small bubbles are world-space geometry inside the same pan.
  const bubbles=new THREE.InstancedMesh(new THREE.SphereGeometry(.012,6,4),materials.oil,28);
  const bubblePositions=[];for(let i=0;i<28;i++)bubblePositions.push([(random()-.5)*.6,(random()-.5)*.6,random()]);building.add(bubbles);
  return {materials,building,bananaPieces,
    updateCooking(progress){
      bananaPieces.forEach((piece,i)=>{piece.visible=progress>.22;piece.position.y=1.187+Math.sin(progress*25+i)*.004;piece.material.color.setHex(progress<.6?0xd8a350:0xba7725);});
      bubbles.visible=progress>.2&&progress<.94;
      bubblePositions.forEach(([x,z,phase],i)=>{transform.position.set(3.25+x,1.185+Math.sin(progress*70+phase*9)*.008,-6.05+z);transform.scale.setScalar(.4+Math.abs(Math.sin(progress*40+phase*6)));transform.rotation.set(0,0,0);transform.updateMatrix();bubbles.setMatrixAt(i,transform.matrix);});bubbles.instanceMatrix.needsUpdate=true;
    }
  };
}
