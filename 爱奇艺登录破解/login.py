import execjs

def getpwd(password):
    with open("aiqiyi.js","r",encoding='utf8')as f:
        content = f.read()
    jsdata = execjs.compile(content)
    pw = jsdata.call('getpwd',password)
    print('pw:',pw)
    return pw

if __name__ == '__main__':
    getpwd("123123")