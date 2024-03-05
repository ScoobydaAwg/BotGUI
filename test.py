import tkinter as tk
from PIL import Image, ImageTk, ImageSequence
from speech import speech_input  # Placeholder for actual import from speech.py
import webbrowser
from face import detect_faces  # Placeholder for actual import from face.py
from keywords import extract_keywords  # Placeholder for actual import from keywords.py

# Function to create the main GUI window with gif background
def create_main_window(gif_path):
    # Initialize main window
    root = tk.Tk()
    root.attributes('-fullscreen', True)
    root.title("Face Detection and Interaction")

    # Load the GIF
    frames = [ImageTk.PhotoImage(img) for img in ImageSequence.Iterator(Image.open(gif_path))]
    gif_label = tk.Label(root)
    gif_label.pack()

    # Function to update the gif frame
    def update(ind):
        frame = frames[ind]
        ind += 1
        if ind == len(frames):
            ind = 0
        gif_label.configure(image=frame)
        root.after(100, update, ind)

    root.after(0, update, 0)

    return root

# Function to create the interactive window
def create_interaction_window(root):
    # Create a top-level window for interaction
    interaction_window = tk.Toplevel(root)
    interaction_window.geometry('400x300')  # Medium size window

    # Add buttons to the interaction window
    btn_speak = tk.Button(interaction_window, text='Speak', command=lambda: speak(interaction_window))
    btn_manual = tk.Button(interaction_window, text='Manual', command=lambda: manual_input(interaction_window))
    btn_exit = tk.Button(interaction_window, text='Exit', command=lambda: exit_interaction(interaction_window))

    btn_speak.pack()
    btn_manual.pack()
    btn_exit.pack()

    return interaction_window

# Function to handle the 'Speak' button
def speak(interaction_window):
    # Use speech.py to listen and recognize speech
    recognized_text = speech_input()  # Placeholder for speech recognition logic
    handle_response(recognized_text, interaction_window)

# Function to handle the 'Manual' input button
def manual_input(interaction_window):
    # Open a dialog or new window for manual input
    # Placeholder for manual input logic
    pass

# Function to handle 'Exit' button
def exit_interaction(interaction_window):
    # Close the interaction window and resume face scanning
    interaction_window.withdraw()

# Function to handle the user response
def handle_response(recognized_text, interaction_window):
    if extract_keywords(recognized_text):  # Placeholder for keyword checking logic
        # Open browser if keyword matches
        webbrowser.open('http://example.com')  # Placeholder for the actual URL
    else:
        # Show message and update window with try again and exit options
        tk.Label(interaction_window, text="Sorry, I could not assist you with the request, please try again.").pack()
        btn_try_again = tk.Button(interaction_window, text='Try Again', command=lambda: speak(interaction_window))
        btn_try_again.pack()
        btn_exit = tk.Button(interaction_window, text='Exit', command=lambda: exit_interaction(interaction_window))
        btn_exit.pack()

# Function to start face scanning and show interaction window upon detection
def start_face_scanning(root, interaction_window):
    # Initialize the face scanning and show interaction window when a face is detected
    # Placeholder for face scanning logic
    pass

# Main function to run the program
def main():
    gif_path = '/mnt/data/giphy.gif'  # Update the path to the gif file
    root = create_main_window(gif_path)
    interaction_window = create_interaction_window(root)
    interaction_window.withdraw()  # Hide the interaction window initially
    start_face_scanning(root, interaction_window)
    root.mainloop()

# Execute the main function
if __name__ == "__main__":
    main()
