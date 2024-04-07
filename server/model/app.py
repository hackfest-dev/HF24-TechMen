from flask import Flask , jsonify , request
from flask_cors import CORS
import tensorflow as tf
import numpy as np , os , base64
import cv2
import requests , shutil , subprocess
from PIL import Image
import piexif

## Constants : Load environment variables
MEMORY_LIMIT = 1024*4 ## In GB

## Tensorflow GPU memory limit
gpus = tf.config.experimental.list_physical_devices('GPU')
if gpus:
    try:
        for gpu in gpus:
            tf.config.experimental.set_virtual_device_configuration(
                gpu,
                [tf.config.experimental.VirtualDeviceConfiguration(memory_limit=int(1024*MEMORY_LIMIT))])
        print("Memory Limit set")
    except RuntimeError as e:
        print("Unable to set memory limit")
        print(e)

## Flask app
app = Flask(__name__)
CORS(app)


## Helper functions
def convert_data_url_to_video(data_url):
    data = data_url.decode('utf-8')
    data = data.split(",")[1]
    data = base64.b64decode(data)
    with open("video-data.mp4", "wb") as f:
        f.write(data)

def convert_video_to_data_url(video_path , delete=True):
    with open(video_path, "rb") as f:
        data = f.read()
    data = base64.b64encode(data)
    if delete:
        os.remove(video_path)
    return data.decode('utf-8')

def get_respirator_rate_from_image(img_path , delete=True):
    img = Image.open(img_path)
    exif_dict = piexif.load(img.info['exif'])
    respiratory_rate = exif_dict["0th"][piexif.ImageIFD.Artist]
    
    img.close()
    if delete:
        os.remove(img_path)
    return respiratory_rate.decode('utf-8')


## App routes
@app.route('/')
def main_page():
    return 'This is a Python Flask API for License Plate Detector'

## App routes
@app.route('/demo',methods=['POST'])
def new_route():
    data = request.data
    convert_data_url_to_video(data)
    process = subprocess.Popen(['sh','execute.sh'])
    process.wait()
    process.kill()
    
    # Extract the respiratory rate from the video
    img = convert_video_to_data_url("respiratory_rate.png",delete=False)
    respiratory_rate = get_respirator_rate_from_image("respiratory_rate.png")
    data = convert_video_to_data_url("output.mp4")
    
    return jsonify({"video" : data , "graph" : img , "respiratoryRate" : respiratory_rate}) , 200

@app.route('/test',methods=['POST'])
def temp_func():
    data = convert_video_to_data_url("./sample-data/output.mp4",delete=False)
    img = convert_video_to_data_url("./sample-data/respiratory_rate.png",delete=False)
    return jsonify({"data" : "Hello World" ,"video" : data , "graph" : img , "respiratoryRate"  : "10"}) , 200

## Main function
if __name__ == '__main__':
    app.run(host="0.0.0.0" ,port=1234 , debug=True)
    
    ## End of Program
    
    
    
    
# ## Detect from image route
# @app.route('/detect' , methods=['POST'])
# def detect_image():
    
#     ## Get the image
#     image_data = request.get_data()
#     img = stringToRGB(image_data)
#     ## img = cv2.imread('./Cars432.png')
    
#     ## Convert to tensor
#     img = np.array(img, dtype=np.uint8)
#     image_np = np.array(img)
#     input_tensor = tf.convert_to_tensor(np.expand_dims(image_np, 0), dtype=tf.uint8)
    
#     ## Get the detections
#     detections = model(input_tensor)
    
#     ## Get the results
#     classes = detections['detection_classes'][0].numpy().tolist()
#     boxes = detections['detection_boxes'][0].numpy().tolist()
#     scores = detections['detection_scores'][0].numpy().tolist()
    
#     ## Get the final result
#     result = get_results(img,classes,boxes,scores)
#     print(result)
    
#     return jsonify({'data': result}) , 200

# @app.route('/addData' , methods=['POST'])
# def add_data():
#     data = request.get_json()
#     mongo.db.customers.insert_one(data)
#     return jsonify({'data': "Added"}) , 200

# @app.route('/getOptions' , methods=['GET'])
# def get_company_model_list():
#     result = get_company_helper("company")
#     return jsonify({"data" : result}) , 200