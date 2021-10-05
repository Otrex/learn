from gtts import gTTS
import requests
import os, sys

if len(sys.argv) < 2:
  n = 1
else:
  n = int(sys.argv[1])

for i in range(n):
  r = requests.get('https://evilinsult.com/generate_insult.php?type=plain&lang=en')
  mytext = str(r.content)
  language = 'en'
  myobj = gTTS(text=mytext, lang=language, slow=True, tld='com.au')
  myobj.save("welcome.mp3")
  os.system("mpg123 welcome.mp3")