# install espeak ans ffmpeg
import speech_recognition as sr 
# import pyttsx3
r = sr.Recognizer()
# engine = pyttsx3.init()

# text = "Python is a great programming language"
# engine.say(text)
# # play the speech
# engine.runAndWait()

with sr.Microphone() as source:
  print(source)
    # read the audio data from the default microphone
  audio_data = r.record(source, duration=5)
    # print("Recognizing...")
    # # convert speech to text
  text = r.recognize_google(audio_data)
  print(text)