import execjs

def getpwd(password,mod,exp):
    with open("pwd.js","r",encoding="utf8")as f:
        content = f.read()
    jsdata = execjs.compile(content)
    pw = jsdata.call("getpass",password,mod,exp)
    print("pw:",pw)
    return pw

if __name__ == '__main__':
    #mod,exp是去steam通过抓包获取到的
   getpwd("123123","a6e544fdc5ae34df28429275373a2af8587aab899ae018e378f5750538540307dec75cc073ce59833f49d3dee8114fe7032670735f9e40e4c1a961f81351fc5b2d287b4ca9247666fd88c189b993d7329b022fd2808af2ef4863494eab628d5e2604d6a0b7e67490df31fa5ca9ce529b459a6037aecdfb254be3f157a8be526464d635010aa0c5760c671aae7c44108c0e949bc5334c363262d5b8c2edb0bb66ce8ede9205d05b80546014fa7bac100cd0b40782c3b1dd02717d5bca935a489398d1fc2548310e9c7e84dd8928188dcfdba9423be04a827a9100aa75b65f34d373f76b418b90a891c9e7768281497af91f44f05d8219b62ff50261623d294a53","010001")