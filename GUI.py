import tkinter as tk
from PIL import Image, ImageTk


def init_gui():
    root = tk.Tk()
    root.attributes('-fullscreen', True)  # Set full screen

    # Get screen width and height
    screen_width = root.winfo_screenwidth()
    screen_height = root.winfo_screenheight()


    gif_path = r'D:\Tkinder\tkinter basics\hhhh.jpg'

    # Load the GIF and resize it to cover the whole screen
    gif_image = Image.open(gif_path)
    # Use Image.Resampling.LANCZOS for high-quality downsampling
    resized_gif = gif_image.resize((screen_width, screen_height), Image.Resampling.LANCZOS)
    gif_photo = ImageTk.PhotoImage(resized_gif)

    # Keep a reference to the image object to prevent garbage collection
    root.gif_photo = gif_photo

    # Create a label that covers the whole window and set the resized image as its background
    gif_label = tk.Label(root, image=gif_photo)
    gif_label.place(x=0, y=0, width=screen_width, height=screen_height)

    return root



