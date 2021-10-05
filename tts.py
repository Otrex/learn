import pyttsx3
import datetime

engine = pyttsx3.init()

newVoiceRate = 145
engine.setProperty('rate',newVoiceRate)


x = datetime.datetime.now()

month = x.strftime("%B")
day = int(x.strftime("%d"))

engine.say(f'{month}, {day}')

engine.runAndWait()