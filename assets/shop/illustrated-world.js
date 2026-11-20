import * as THREE from './vendor/three.module.min.js';
import { createFramePlayer } from './frame-player.js';

// The reference's hand-inked yellow kiosk palette, applied to the existing 3D journey.
export function illustrateShop(world,scene,renderer,onReady=()=>{}){
  const palette={plaster:'#e2ba51',green:'#778d6b',wood:'#be943f',darkWood:'#4a4030',floor:'#c7bc9f',stone:'#d3cbb8',roof:'#71846a',iron:'#353731',brass:'#9c8a5a',steel:'#b7b9ae'};
  for(const [name,color] of Object.entries(palette)){
    const material=world.materials[name];material.map=null;material.bumpMap=null;
    material.color.set(color);material.roughness=name==='steel'?.5:.95;material.flatShading=true;material.needsUpdate=true;
  }
  const wood=grain();world.materials.wood.map=wood;world.materials.plaster.map=wood;
  scene.background=new THREE.Color('#f7f5ef');scene.fog=new THREE.Fog('#f7f5ef',25,65);
  renderer.toneMappingExposure=1.02;
  for(const light of scene.children.filter(o=>o.isLight)){
    if(light.isHemisphereLight){light.color.set('#fff9eb');light.groundColor.set('#82745a');light.intensity=1.6;}
    if(light.isDirectionalLight){light.color.set('#fff6e2');light.intensity=2.3;light.shadow.mapSize.set(2048,2048);light.shadow.normalBias=.025;}
  }
  const ground=world.building.children[0];ground.material=new THREE.MeshStandardMaterial({color:'#f5f2e9',roughness:1});
  // The facade's old clay roof gives way to a faded green fabric canopy.
  world.building.children.filter(o=>o.isInstancedMesh&&o.material===world.materials.roof).forEach(o=>o.visible=false);
  world.building.children.filter(o=>o.isMesh&&o.geometry.type==='BoxGeometry'&&o.scale.x>10&&Math.abs(o.position.z-1)<.05).forEach(o=>o.visible=false);
  const group=new THREE.Group();group.name='Hand painted yellow tea shop';scene.add(group);
  const cloth=new THREE.MeshStandardMaterial({color:'#79946d',roughness:1,side:THREE.DoubleSide});
  const seam=new THREE.LineBasicMaterial({color:'#394635',transparent:true,opacity:.7});
  function box(w,h,d,x,y,z,material=world.materials.darkWood){const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);mesh.position.set(x,y,z);mesh.castShadow=mesh.receiveShadow=true;group.add(mesh);return mesh;}
  for(let i=0;i<24;i++){
    const x=-5.16+i*.45;
    const panel=box(.45,.045,2.0,x,3.18,1.0,cloth);panel.rotation.x=.12;
    const flap=new THREE.Mesh(new THREE.CircleGeometry(.225,20,0,Math.PI),cloth);flap.rotation.z=Math.PI;flap.position.set(x,3.02,2.0);group.add(flap);
    const points=[new THREE.Vector3(x-.225,3.31,.03),new THREE.Vector3(x-.225,3.07,2.0)];group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),seam));
  }
  // Move the existing sign to the top, like a small hand-painted street kiosk.
  const sign=world.building.children.find(o=>o.isMesh&&o.material?.map&&Math.abs(o.position.y-3.05)<.02&&Math.abs(o.scale.x-1)<.02);
  if(sign){sign.position.y=3.92;sign.material=new THREE.MeshStandardMaterial({map:signMap(),roughness:1});}
  box(.11,1.25,.12,-2.8,3.72,.2);box(.11,1.25,.12,2.4,3.72,.2);
  // Vertical boards and dark join lines echo the reference's yellow timber front.
  for(let i=0;i<12;i++)box(.012,.76,.018,1.55+i*.26,.43,1.44);
  // Two simple wooden stools and extra stacked steel tea vessels at the counter.
  for(const x of [2.05,3.32]){
    const seat=new THREE.Mesh(new THREE.CylinderGeometry(.23,.24,.075,24),world.materials.wood);seat.position.set(x,.68,2.08);seat.castShadow=true;group.add(seat);
    for(const dx of [-.13,.13])for(const dz of [-.13,.13])box(.038,.63,.038,x+dx,.33,2.08+dz);
    box(.35,.03,.03,x,.22,1.95);box(.35,.03,.03,x,.22,2.21);
  }
  for(let i=0;i<5;i++){
    const tin=new THREE.Mesh(new THREE.CylinderGeometry(.12,.12,.09,24),world.materials.steel);tin.position.set(2.65,1.04+i*.095,1.08);tin.castShadow=true;group.add(tin);
  }
  // A freestanding tea menu board, rather than another webpage section.
  box(.78,1.16,.07,4.9,.65,2.1,world.materials.wood);
  const menu=new THREE.Mesh(new THREE.PlaneGeometry(.68,1.02),new THREE.MeshBasicMaterial({map:menuMap()}));menu.position.set(4.9,.67,2.145);group.add(menu);
  const meshes=[];world.building.traverse(o=>{if(o.isMesh&&!o.isInstancedMesh&&o.geometry.type==='BoxGeometry'&&o!==ground&&o.scale.x>.5&&o.scale.y>.4&&o.scale.z>.1)meshes.push(o)});group.traverse(o=>{if(o.isMesh&&o.geometry.type==='BoxGeometry'&&o.geometry.parameters.width>.6&&o.geometry.parameters.height>.4)meshes.push(o)});
  const ink=new THREE.LineBasicMaterial({color:'#33362e',transparent:true,opacity:.32});
  for(const mesh of meshes)mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry,35),ink));

  const benchClocks=[];
  const benchPlayers=[];
  // Upper-body movement leaves the seats and feet anchored in place.
  addBench('./friends-bench/friends-bench.png','Two friends sharing tea on a wooden bench',-3.05,2.65,1.95,'friendsBench');
  addAnimatedBench();
  function addAnimatedBench(){
    const source=document.createElement('canvas');source.width=960;source.height=540;source.hidden=true;document.querySelector('.actor-cache').append(source);
    const texture=new THREE.CanvasTexture(source);texture.colorSpace=THREE.SRGBColorSpace;
    texture.generateMipmaps=false;texture.minFilter=THREE.LinearFilter;
    const material=new THREE.MeshBasicMaterial({map:texture,transparent:true,alphaTest:.035,depthWrite:true,toneMapped:false});
    const height=2.15;
    const bench=new THREE.Mesh(new THREE.PlaneGeometry(height*960/540,height),material);
    bench.name='Couple sipping tea on the front bench';bench.position.set(3.15,height/2-.1,4.6);group.add(bench);
    const player=createFramePlayer(source,{folder:new URL('./couple-bench/motion/',import.meta.url),count:95,cacheSize:18,onDraw(){texture.needsUpdate=true;renderer.domElement.dataset.coupleFrame=source.dataset.frame;onReady();}});
    benchPlayers.push(player);
    const poster=new Image();poster.src=new URL('./couple-bench/motion/frame-0001.webp',import.meta.url);
    poster.decode().then(()=>{source.getContext('2d').drawImage(poster,0,0,960,540);texture.needsUpdate=true;onReady();}).catch(()=>{});
    addEventListener('pagehide',()=>{player.destroy();texture.dispose();material.dispose();bench.geometry.dispose();},{once:true});
  }
  function addBench(path,name,x,z,height,status){
    new THREE.TextureLoader().load(new URL(path,import.meta.url).href,texture=>{
      texture.colorSpace=THREE.SRGBColorSpace;
      texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
      const width=height*texture.image.width/texture.image.height;
      const clock={value:0};benchClocks.push(clock);
      const material=new THREE.MeshBasicMaterial({map:texture,transparent:true,alphaTest:.035,depthWrite:true,toneMapped:false});
      material.onBeforeCompile=shader=>{
        shader.uniforms.benchTime=clock;
        shader.vertexShader='uniform float benchTime;\n'+shader.vertexShader;
        shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
          float body=smoothstep(0.30,0.65,uv.y);
          float person=step(0.51,uv.x);
          float phase=benchTime+person*2.2+${z.toFixed(2)};
          transformed.x+=sin(phase*0.9)*0.014*body;
          transformed.y+=sin(phase*1.4)*0.008*body;
        `);
      };
      material.customProgramCacheKey=()=>`bench-idle-${status}`;
      const bench=new THREE.Mesh(new THREE.PlaneGeometry(width,height,40,32),material);
      bench.name=name;bench.position.set(x,height/2-.10,z);group.add(bench);
      if(renderer.domElement)renderer.domElement.dataset[status]='ready';
      onReady();
    },undefined,error=>console.warn('A bench illustration could not be loaded.',error));
  }

  return (seconds,enabled)=>{
    for(const clock of benchClocks)clock.value=enabled?seconds:0;
    for(const player of benchPlayers){player.setActive(enabled);player.setProgress(enabled?(seconds%8)/8:0);}
  };
}
function grain(){
  const c=document.createElement('canvas');c.width=c.height=256;const ctx=c.getContext('2d');ctx.fillStyle='#fff6d5';ctx.fillRect(0,0,256,256);
  let seed=19;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
  for(let i=0;i<9000;i++){ctx.fillStyle=`rgba(43,36,20,${rand()*.07})`;ctx.fillRect(rand()*256,rand()*256,1,1+rand()*7)}
  for(let x=0;x<256;x+=64){ctx.strokeStyle='#3f382b35';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x+2,256);ctx.stroke();}
  const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;map.wrapS=map.wrapT=THREE.RepeatWrapping;return map;
}
function signMap(){const c=document.createElement('canvas');c.width=1536;c.height=256;const ctx=c.getContext('2d');ctx.fillStyle='#e8bd4d';ctx.fillRect(0,0,1536,256);ctx.strokeStyle='#4a4030';ctx.lineWidth=8;ctx.strokeRect(14,14,1508,228);ctx.strokeRect(26,26,1484,204);ctx.fillStyle='#282d25';ctx.textAlign='center';ctx.font='bold 105px Georgia';ctx.fillText('Chaya Kada',768,135);ctx.font='30px Georgia';ctx.fillText('CHAYA · KAPPI · KADI',768,200);const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;return map;}
function menuMap(){const c=document.createElement('canvas');c.width=512;c.height=768;const ctx=c.getContext('2d');ctx.fillStyle='#d8b352';ctx.fillRect(0,0,512,768);ctx.fillStyle='#30382a';ctx.textAlign='center';ctx.font='bold 68px Georgia';ctx.fillText('Chaya',256,120);ctx.font='36px Georgia';['Kappi','Lime','Ullivada','Parippuvada','Pazhampori'].forEach((s,i)=>ctx.fillText(s,256,240+i*85));const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;return map;}
