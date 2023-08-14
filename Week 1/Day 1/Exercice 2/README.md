# FS Discovery
## 	Using the find command, find and list the names of:
### 1. All files under the /etc directory whose names begin with rc
```bash
find /etc -name "rc*"
```
![Alt text](/Day%201/screenshots/image-1.png)
### 2. All regular files belonging to you; put the result in the file /tmp/findme and errors in/dev/null
```bash
find /etc -type f -user $USER > /tmp/findme 2> /dev/null
```
![Alt text](/Day%201/screenshots/image-2.png)
### 3. All subdirectories of /etc,
```bash
find /etc -type d
```
![Alt text](/Day%201/screenshots/image-3.png)
### 4. All regular files under your home directory that have not been modified in the last 10 days
```bash
find ~/ -type f -mtime +10
```
![Alt text](/Day%201/screenshots/image-4.png)
### 5. The 10 largest file in your computer
```bash
find / -type f -exec du -h {} + | sort -rh | head -n 10
```
![Alt text](/Day%201/screenshots/image-5.png)