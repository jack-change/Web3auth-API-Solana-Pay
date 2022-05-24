function(instance, context) {
  let web3auth = null;
                      instance.data.logout = async function() {
                                    return await new Promise(async (resolve, reject) => {
                                  try {
                                          await web3auth.logout();
                                       }
                                     catch (err) {
                                    context.reportDebugger('Login error: ' + err.message);
                                    reject(err);
                                  }
                                });
                      }
    instance.data.login = async function() {
            return await new Promise(async (resolve, reject) => {
          try {
    web3auth = new window.Web3auth.Web3Auth({
            // type UIConfig
                        uiConfig: {
                                appLogo: "https://images.web3auth.io/web3auth-logo-w.svg",
                                 theme: "dark",
                                loginMethodsOrder: ['facebook', 'google'],
                            },
  chainConfig: { chainNamespace: 'solana', },
  clientId: "BJmGr7b_3VOxIANU_En_lZGhwxvt46mRSCyU9C0TN6osPOgAw0hnkmsRaZoKtoPvWAW6mpKJ3i09ooPeHYh9v6w",
});
    await web3auth.init();
           
    const provider = await web3auth.connect();
              
          } catch (err) {
            context.reportDebugger('Login error: ' + err.message);
            instance.triggerEvent('login_failed');
            reject(err);
          }
        });
      }
      
instance.data.login().then( r => {
        console.log(r);
    });
}