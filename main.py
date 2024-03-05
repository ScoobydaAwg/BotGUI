import tkinter as tk
from tkinter import simpledialog
from pyttsx3 import init as tts_init
from GUI import init_gui  
from face import detect_faces
from speech import speech_input
from keywords import extract_keywords
from navigation import open_orbix_project
import threading
import http.server
import socketserver

PORT = 8000

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="D:/Tkinder/tkinter basics/All", **kwargs)

# Function to start the HTTP server
def start_server():
    with socketserver.TCPServer(("", PORT), MyHttpRequestHandler) as httpd:
        print("HTTP server serving at port", PORT)
        httpd.serve_forever()

tts_engine = tts_init()

def greet_user():
    tts_engine.say("Hello, I see you. Please choose an input method or exit.")
    tts_engine.runAndWait()
    tts_engine.startLoop(False)  # Process speech without blocking

def prompt_input():
    # This function will be called in the main thread context to safely interact with the GUI
    user_input = simpledialog.askstring("Input", "Speak or type your query:")
    if user_input:
        process_input(user_input)
    else:
        print("Listening...")
        speech_text = speech_input()
        process_input(speech_text)

def process_input(text):
    print(f"Received input: {text}")  # Debug print to verify the input
    keywords = extract_keywords(text)
    print(f"Keywords detected: {keywords}")  # Debug print to verify keyword extraction
    if keywords:
        open_orbix_project(keywords)
    else:
        print("No keywords detected.")

def face_detection_task(stop_event, root):
    while not stop_event.is_set():
        if detect_faces():
            stop_event.set()
            # Schedule greet_user and prompt_input to run in the main thread
            root.after(0, greet_user)
            root.after(0, prompt_input)

def start_face_detection(root):
    stop_event = threading.Event()
    threading.Thread(target=face_detection_task, args=(stop_event, root), daemon=True).start()
    return stop_event

def main():
    root = init_gui()  # Initialize the GUI
    start_face_detection(root)
    server_thread = threading.Thread(target=start_server)
    server_thread.start()
    root.mainloop()

if __name__ == "__main__":
    main()

