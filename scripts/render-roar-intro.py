"""Prepare the user-supplied screencast as a small, sound-synchronized intro.
Requires Pillow and imageio-ffmpeg. Originals are never modified.
"""
from pathlib import Path
import argparse, subprocess, json
from PIL import Image, ImageDraw, ImageFilter
import imageio_ffmpeg

parser=argparse.ArgumentParser()
parser.add_argument('--source',type=Path,required=True)
args=parser.parse_args()
root=Path(__file__).resolve().parents[1]
out=root/'assets/shop/loading'; out.mkdir(exist_ok=True)
ff=imageio_ffmpeg.get_ffmpeg_exe()
# Preserve the original playback speed. Exclude browser chrome, the progress bar,
# the initial blank background transition, and the frozen trailing screen.
filters=("[0:v]trim=start=0.9:end=5.4,setpts=PTS-STARTPTS,"
         "crop=1008:882:36:90,fps=24,scale=768:672:flags=lanczos[v];"
         "[1:a]atrim=duration=1.8,asetpts=PTS-STARTPTS,"
         "afade=t=out:st=1.5:d=0.3,adelay=1850:all=1,apad=whole_dur=4.5[a]")
subprocess.run([ff,'-y','-c:v','libvpx','-i',str(args.source),'-i',str(out/'lion-roar.mp3'),
 '-filter_complex',filters,'-map','[v]','-map','[a]','-c:v','libx264','-crf','23',
 '-preset','medium','-pix_fmt','yuv420p','-c:a','aac','-b:a','96k','-ar','48000',
 '-movflags','+faststart',str(out/'portrait-roar.mp4')],check=True,capture_output=True)
poster=out/'roar-poster.png'
subprocess.run([ff,'-y','-i',str(out/'portrait-roar.mp4'),'-frames:v','1',str(poster)],check=True,capture_output=True)
im=Image.open(poster).convert('RGBA')
# An edge-connected matte preserves hair, shirt and the dark portrait interior.
# The emblem frame stays in place, so this matte also masks its video exterior.
for point in [(0,0),(im.width-1,0),(0,im.height-1),(im.width-1,im.height-1)]:
 ImageDraw.floodfill(im,point,(0,0,0,0),thresh=50)
alpha=im.getchannel('A').filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.GaussianBlur(.65))
mask=Image.new('RGBA',im.size,'white');mask.putalpha(alpha)
mask.save(out/'portrait-roar-mask.png')
im.putalpha(alpha);im.save(out/'portrait-roar-poster.webp',quality=88);poster.unlink()
(out/'roar-edit.json').write_text(json.dumps({
 'source':str(args.source),'source_in':0.9,'source_out':5.4,'duration_seconds':4.5,
 'crop':[36,90,1008,882],'output':[768,672],'fps':24,'audio_onset_seconds':1.85,
 'audio_duration_seconds':1.8,'audio_credit':'SOUND-CREDITS.md',
 'provenance':'User-supplied screencast; user explicitly requested use with the prepared lion sound.'
},indent=2)+'\n')
print('Saved',out/'portrait-roar.mp4')
