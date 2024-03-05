import cv2 as cv

def set_capture_resolution(capture, width, height):
    capture.set(cv.CAP_PROP_FRAME_WIDTH, width)
    capture.set(cv.CAP_PROP_FRAME_HEIGHT, height)

def detect_faces():
    capture = cv.VideoCapture(0)
    # Set a lower resolution for faster processing
    set_capture_resolution(capture, 640, 480)

    pretrained_model = cv.CascadeClassifier("facedata.xml")

    ret, frame = capture.read()
    if ret:
        # Further downscale the frame for faster processing
        frame_small = cv.resize(frame, (0, 0), fx=0.25, fy=0.25)
        gray = cv.cvtColor(frame_small, cv.COLOR_BGR2GRAY)
        faces = pretrained_model.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=4, minSize=(30, 30))
        capture.release()
        cv.destroyAllWindows()
        return len(faces) > 0

    capture.release()
    cv.destroyAllWindows()
    return False
