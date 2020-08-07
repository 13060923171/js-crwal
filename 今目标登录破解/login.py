import execjs

def password(password):
    with open("pwd.js","r",encoding="utf8")as f:
        content = f.read()
    jsdata = execjs.compile(content)
    pw = jsdata.call("shapass",password)
    print("pw:",pw)
    return pw

if __name__ == '__main__':
    password("123123123")