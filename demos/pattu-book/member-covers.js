// Covers are public artwork; writes remain protected by the office admin policies.
export async function applyMemberCovers(collection) {
 const controller=new AbortController();
 const timeout=setTimeout(()=>controller.abort(),1800);
 try {
  const read=async rpc=>{
   const response=await fetch('https://ufumdavqbqkrllgbjcev.supabase.co/rest/v1/rpc/'+rpc,{
    method:'POST',headers:{apikey:'sb_publishable_H__xNf98sI_IDbYEbU9UvA_Nk3ZQm2A','Content-Type':'application/json'},body:'{}',signal:controller.signal
   });
   return response.ok?response.json():[];
  };
  const [covers,names]=await Promise.all([read('ots_member_covers'),read('ots_member_names')]);
  for(const album of collection.albums){
   album.title=names.find(member=>member.member_id===album.id)?.name||album.title;
   const cover=covers.find(row=>row.item==='member-cover-'+album.id);
   if(cover&&/^data:image\/(png|jpeg|webp|gif);base64,/.test(cover.src))album.cover=album.coverSmall=cover.src;
  }
 } catch (_) { /* Offline startup keeps the bundled covers. */ }
 finally {clearTimeout(timeout)}
}

window.addEventListener('storage', event => {
 if(event.key==='ots-member-covers-updated')location.reload();
});
