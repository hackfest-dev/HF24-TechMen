from flask import Flask , jsonify , request
from flask_cors import CORS
import tensorflow as tf
import numpy as np , os , base64
import cv2
import requests

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


def convert_data_url_to_video(data_url):
    data = data_url.decode('utf-8')
    data = data.split(",")[1]
    data = base64.b64decode(data)
    with open("video.mp4", "wb") as f:
        f.write(data)




## App routes
@app.route('/')
def main_page():
    return 'This is a Python Flask API for License Plate Detector'

## App routes
@app.route('/demo',methods=['POST'])
def new_route():
    data = request.data
    convert_data_url_to_video(data)
    return jsonify({"data" : "done"}) , 200


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

## Main function
if __name__ == '__main__':
    app.run(host="0.0.0.0" ,port=1234 , debug=True)
    
    ## End of Program