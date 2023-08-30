import qrcodeTerminal from "qrcode-terminal";

// 登录
export const onLogin = (user, bot) => {
  console.log(`贴心小助理${user}登录了`);
}

// 登出
export const onLogout = (user) => {
  console.log(`用户${user}退出成功`);
}

// 消息
export const onMessage = (msg) => {
  console.log(`收到消息：${msg}`);
}

// 扫码
export const onScan = (qrcode, status) => {
  // status: 2代表链接等待调用，3代表链接已打开，这个链接实际上是提供一个登录的二维码供扫描
  qrcodeTerminal.generate(qrcode, { small: true });
  const qrcodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)}`
  console.log(qrcodeImageUrl);
}
