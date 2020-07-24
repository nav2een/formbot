# Bot to submit survey forms

## Dependencies
+ git
+ NodeJs 14+ (only tested version)

### For windows users:
Download and install git from [here](https://github.com/git-for-windows/git/releases/download/v2.27.0.windows.1/Git-2.27.0-64-bit.exe).  
Or use GUI like [Github desktop](https://desktop.github.com/), more instructions on cloning [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).  
Download [link](https://nodejs.org/dist/v14.6.0/node-v14.6.0-x86.msi) for nodejs.

## Installation instructions:
Clone the respository, install `node_modules`.

```bat
git clone https://github.com/nav2een/formbot.git
cd formbot
npm install
```

## Run the script
`-t` specifies minimum time to wait between two subsequent runs. If one run takes more than 10 seconds than wait time will be the duration of last run and next run will start immediately.
```bat
node index.js -t 10
```
