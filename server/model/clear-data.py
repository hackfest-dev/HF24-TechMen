import os , shutil

for file in os.scandir("./data/output/video-data"):
    if(os.path.splitext(file)[1] == ".mp4"):
        os.rename(file.path, './output.mp4')
    else:
        os.remove(file.path)
        
for file in os.scandir("./data/vids/video-data/"):
    os.remove(file.path)
    
os.remove('video-data.mp4')
##shutil.move("output.mp4", "../output.mp4")