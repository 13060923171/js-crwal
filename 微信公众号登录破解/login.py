import execjs

def getpwd(password):
    with open("weixing.js","r",encoding="utf8")as f:
        content = f.read()
    jsdata = execjs.compile(content)
    pw = jsdata.call("GetPass",password)
    print("pw:",pw)
    return pw

if __name__ == '__main__':
    getpwd("snice13060923171")