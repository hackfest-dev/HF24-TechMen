import cv2
import numpy as np
import matplotlib.pyplot as plt

def calculate_respiratory_rate(video_path, motion_threshold):
    cap = cv2.VideoCapture(video_path)
    respiratory_motion_counter = 0
    frame_diffs = []
    respiratory_motion_counts = []

    # Initialize previous frame
    ret, prev_frame = cap.read()
    if not ret:
        return None  # Return None if the video file couldn't be read

    prev_frame = cv2.cvtColor(prev_frame, cv2.COLOR_BGR2GRAY)

    # Iterate through video frames
    while(cap.isOpened()):
        ret, frame = cap.read()
        if not ret:
            break

        # Convert the current frame to grayscale
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Calculate the absolute difference between the current and previous frame
        frame_diff = cv2.absdiff(prev_frame, frame)
        frame_diffs.append(frame_diff.mean())

        # Thresholding to identify frames with significant respiratory motion
        if frame_diff.mean() > motion_threshold:
            respiratory_motion_counter += 1

        respiratory_motion_counts.append(respiratory_motion_counter)

        # Update previous frame
        prev_frame = frame

    # Get the total duration of the video in minutes
    fps = cap.get(cv2.CAP_PROP_FPS)
    video_duration_min = len(frame_diffs) / fps / 60.0

    # Calculate the respiratory rate
    respiratory_rate = respiratory_motion_counter / video_duration_min

    # Plot the respiratory rate over time
    times = np.arange(len(frame_diffs)) / fps
    plt.plot(times, respiratory_motion_counts)
    plt.title('Respiratory rate over time')
    plt.xlabel('Time (s)')
    plt.ylabel('Cumulative respiratory motion count')
    plt.savefig('respiratory_rate.png')
    plt.show()
    

    return respiratory_rate

output_video_path = '/home/rahular/Downloads/output.mp4'  # Replace with your actual video path
motion_threshold = 0.5 # Adjust this value based on your needs
respiratory_rate = calculate_respiratory_rate(output_video_path, motion_threshold)
print(f'Respiratory rate: {respiratory_rate} breaths per minute')