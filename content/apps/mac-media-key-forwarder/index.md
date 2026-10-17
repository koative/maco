---
name: 'Mac Media Key Forwarder'
summary: 'Sends the keyboard play, pause and skip keys straight to Apple Music, Spotify, Cider or other chosen players.'
category: 'Media'
tags:
  - media-controls
  - keyboard
  - music
  - menu-bar
repository: https://github.com/quentinlesceller/macmediakeyforwarder
website: https://github.com/quentinlesceller/macmediakeyforwarder
license: 'Unlicense'
licenseUrl: https://github.com/quentinlesceller/macmediakeyforwarder/blob/master/LICENSE
download: https://github.com/quentinlesceller/macmediakeyforwarder/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/quentinlesceller/macmediakeyforwarder
  - https://github.com/quentinlesceller/macmediakeyforwarder/blob/master/LICENSE
  - https://github.com/quentinlesceller/macmediakeyforwarder/releases
  - https://github.com/milgra/macmediakeyforwarder
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/quentinlesceller/macmediakeyforwarder/master/MacMediaKeyForwarder/Assets.xcassets/AppIcon.appiconset/appicon-1.png
    credit: 'Milan Toth (milgra), Quentin Le Sceller and contributors'
    license: 'Unlicense repository asset; project name and icon retained by the authors'
---

Mac Media Key Forwarder listens for the play/pause, next and previous keys and passes them directly to a music player of your choice. You can prioritise one player or let it control whichever supported player is running. Apple Music and Spotify are driven through AppleScript, while Cider, Spotifast and Pear Desktop for YouTube Music are reached through their local APIs. It runs from the menu bar and needs Accessibility and Automation permissions.

This is the maintained fork of Milan Toth's original project, which has had no release since 2019. Current versions are signed with a Developer ID, notarized, and require macOS 26; the README points older systems to version 3.1.2.
