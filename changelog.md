# Brad Pitch.exe Changelog

## 1.0.0
### Known issues
* No issues reported yet.

### Changes/New Features
* Reorganized commands files in /commands/. Files are now separated in 3 subfolders: general, help, and sbg.
* Created hi command. It has been created for the Selenite Blizzard Guild, a No Man's Sky in-game company. It returns a welcome message after a ticket opening (employees are supposed to send this command manually).
* Created found command. Same reason as hi command. Returns a message indicating the employee has found the target POI, or at least something near to the request.
* Created done command. Same reason as hi command. Returns a message indicating the ticket is done and will be closed.

## 0.1.3a
### Known issues
* No issues reported yet.

### Changes/New Features
* Fixed b!info command so it now works again.
* Renamed dankmemes.js by meme.js
* Removed r/wholesomememes from meme.js because their memes are not loaded on Discord.
* Removed r/techsupportanimals from meme.js because their memes ain't funny.

## 0.1.3
### Known issues
* A bad connection on the bot size can occur a time-out error when summoning b!meme command and the bot will still be in the state "writing".
* Info command does not work.

### Changes/New Features
* Reworked dankmemes command so it now works, with a huge help from Cryx.
* Edited help command to show b!meme.
* Edited info command to show 0.1.3 version.
* Renamed file core.js to index.js.

## 0.1.2a
### Known issues
* dankmemes.js is not working.

### Changes/New Features
* Fixed Presence: the bot should now show "Plays b!help".

## 0.1.2
### Known issues
* Presence is not showing.

### Changes/New Features
* Changing all command files into async/await.
* Added info command (use b!info).

## 0.1.1
* Excluded token from git commit.
* Reworked help command (use b!help).
* Reworked ping command (use b!ping).
* Separated commands from core.js.
* Changed bot prefix : 'bp!' became 'b!'.

## 0.1.0
* Started bot development.
* Added ping command (use bp!ping).
* Added help command (use bp!help).
