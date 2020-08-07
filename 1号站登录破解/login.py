import execjs

def getpass(password):
    with open("pwd.js","r",encoding="utf8")as f:
        content = f.read()
    jsdata = execjs.compile(content)
    pw = jsdata.call("getpass",password)
    print("pw:",pw)
    return pw

if __name__ == '__main__':
    getpass(
        'code: "6c14da109e294d1e8155be8aa4b1ce8e",loginpass: "2312",username: "1231231",vvccookie: "b96940ee977418ec5bf7d40c10526bca"')