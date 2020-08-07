import execjs

def getpass(password):
    with open("pwd.js","r",encoding="utf8")as f:
        content = f.read()
    jsdata = execjs.compile(content)
    pw = jsdata.call("getpass",password)
    print("pw:",pw)
    return pw

if __name__ == '__main__':
    getpass("123123")