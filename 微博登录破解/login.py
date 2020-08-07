import execjs
import time
def getuser(user):
    with open("pwd.js","r",encoding="utf8")as f:
        content = f.read()
    jsdata = execjs.compile(content)
    name = jsdata.call("getuser",user)
    print("user:",name)
    return name

def getpwd(p, pubkey, time, nonce):
    with open("pwd.js","r",encoding="utf8")as f:
        content = f.read()
    jsdata = execjs.compile(content)
    pwd = jsdata.call("getpass",p,pubkey,time,nonce)
    print("user:",pwd)
    return pwd

if __name__ == '__main__':
   getuser("13060923171")
   s = int(time.time())
   #pubkey,nonce是去微博通过抓包获取的到
   getpwd("123123",
          "EB2A38568661887FA180BDDB5CABD5F21C7BFD59C090CB2D245A87AC253062882729293E5506350508E7F9AA3BB77F4333231490F915F6D63C55FE2F08A49B353F444AD3993CACC02DB784ABBB8E42A9B1BBFFFB38BE18D78E87A0E41B9B8F73A928EE0CCEE1F6739884B9777E4FE9E88A1BBE495927AC4A799B3181D6442443",
          "{}".format(s),"FDUMK0")

