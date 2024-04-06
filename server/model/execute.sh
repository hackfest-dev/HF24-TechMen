ffmpeg -i video-data.mp4 -f image2 data/vids/video-data/%06d.png
sh run_on_test_videos.sh o3f_hmhm2_bg_qnoise_mix4_nl_n_t_ds3 video-data 10
## python clear-data.py