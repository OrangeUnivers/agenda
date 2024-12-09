import math
animation = ""

for frame in range(101):
    animation = animation + """
      """ + str(frame) + """% {
        background: conic-gradient(
          from """ + str(round(360/100*frame, 1)) + """deg,
          #ddd,
          #bbbbbb,
          #ddd,
          #ddd
        );
      }"""

print(animation)