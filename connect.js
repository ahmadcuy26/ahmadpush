// NO ENC BUY wa.me/6287705048235
const _0x181674=_0x1e7c;(function(_0x3f600e,_0x1669e6){const _0x5dd6cd=_0x1e7c,_0x1a23ba=_0x3f600e();while(!![]){try{const _0x131e99=-parseInt(_0x5dd6cd(0x13a))/0x1*(-parseInt(_0x5dd6cd(0x121))/0x2)+parseInt(_0x5dd6cd(0x13e))/0x3+parseInt(_0x5dd6cd(0x127))/0x4*(parseInt(_0x5dd6cd(0x124))/0x5)+-parseInt(_0x5dd6cd(0x137))/0x6*(parseInt(_0x5dd6cd(0x117))/0x7)+parseInt(_0x5dd6cd(0x132))/0x8+-parseInt(_0x5dd6cd(0x12c))/0x9+parseInt(_0x5dd6cd(0x140))/0xa;if(_0x131e99===_0x1669e6)break;else _0x1a23ba['push'](_0x1a23ba['shift']());}catch(_0x407771){_0x1a23ba['push'](_0x1a23ba['shift']());}}}(_0x5a82,0xd6d1d),require('./all/global'));const func=require(_0x181674(0x12b));function _0x1e7c(_0x2890c5,_0x379689){const _0x5a8260=_0x5a82();return _0x1e7c=function(_0x1e7cc4,_0xea0005){_0x1e7cc4=_0x1e7cc4-0x10e;let _0x1b14c3=_0x5a8260[_0x1e7cc4];return _0x1b14c3;},_0x1e7c(_0x2890c5,_0x379689);}function _0x5a82(){const _0x206941=['BAE5','connectionLost','type','messages','9343638aUinKI','connecting','[SYSTEM]','86USuSfX','badSession','startsWith','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','4732782uSQCdJ','message','333690OgQHaz','error','output','./appearance','loggedOut','1.0.0','Safari','keys','key','messages.upsert','Connection\x20lost,\x20trying\x20to\x20reconnect','groupAcceptInvite','7GSNoWB','fromMe','logout','Connecting...','log','./session','length','silent','Connection\x20TimedOut,\x20Reconnecting...','Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','3158mdAOzR','restartRequired','child','211190pVCKAC','ephemeralMessage','contacts.update','56QPSExF','connectionClosed','contacts','decodeJid','./all/place','630081PXLPnp','makeWASocket','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','Tersambung','notify','store','1352752uhTvdP'];_0x5a82=function(){return _0x206941;};return _0x5a82();}async function startSesi(){const _0x2b5048=_0x181674,_0xb4d4c=makeInMemoryStore({'logger':pino()[_0x2b5048(0x123)]({'level':_0x2b5048(0x11e),'stream':_0x2b5048(0x131)})}),{state:_0xf5b1be,saveCreds:_0x280da9}=await useMultiFileAuthState(_0x2b5048(0x11c)),{version:_0x57c74c,isLatest:_0x488061}=await fetchLatestBaileysVersion(),_0x6d26a1={'logger':pino({'level':_0x2b5048(0x11e)}),'printQRInTerminal':!![],'browser':['Base\x20By\x20KirBotz',_0x2b5048(0x111),_0x2b5048(0x110)],'auth':_0xf5b1be,'version':_0x57c74c},_0xf1ede0=func[_0x2b5048(0x12d)](_0x6d26a1);return _0xb4d4c['bind'](_0xf1ede0['ev']),_0xf1ede0['ev']['on']('connection.update',async _0x2eb0f1=>{const _0x11a5fe=_0x2b5048,{connection:_0x1bafb4,lastDisconnect:_0x1475c4}=_0x2eb0f1;if(_0x1bafb4==='close'){const _0x3e0f8e=new Boom(_0x1475c4?.['error'])?.[_0x11a5fe(0x142)]['statusCode'];console[_0x11a5fe(0x11b)](color(_0x1475c4[_0x11a5fe(0x141)],'deeppink'));if(_0x1475c4[_0x11a5fe(0x141)]=='Error:\x20Stream\x20Errored\x20(unknown)')process['exit']();else{if(_0x3e0f8e===DisconnectReason[_0x11a5fe(0x13b)])console[_0x11a5fe(0x11b)](color(_0x11a5fe(0x13d))),process['exit']();else{if(_0x3e0f8e===DisconnectReason[_0x11a5fe(0x128)])console[_0x11a5fe(0x11b)](color(_0x11a5fe(0x139),'white'),color('Connection\x20closed,\x20reconnecting...','deeppink')),process['exit']();else{if(_0x3e0f8e===DisconnectReason[_0x11a5fe(0x134)])console[_0x11a5fe(0x11b)](color('[SYSTEM]','white'),color(_0x11a5fe(0x115),'deeppink')),process['exit']();else{if(_0x3e0f8e===DisconnectReason['connectionReplaced'])console[_0x11a5fe(0x11b)](color(_0x11a5fe(0x12e))),_0xf1ede0[_0x11a5fe(0x119)]();else{if(_0x3e0f8e===DisconnectReason[_0x11a5fe(0x10f)])console[_0x11a5fe(0x11b)](color(_0x11a5fe(0x120))),_0xf1ede0['logout']();else{if(_0x3e0f8e===DisconnectReason[_0x11a5fe(0x122)])console[_0x11a5fe(0x11b)](color('Restart\x20Required,\x20Restarting...')),await startSesi();else _0x3e0f8e===DisconnectReason['timedOut']&&(console[_0x11a5fe(0x11b)](color(_0x11a5fe(0x11f))),startSesi());}}}}}}}else{if(_0x1bafb4===_0x11a5fe(0x138))start('1',_0x11a5fe(0x11a));else _0x1bafb4==='open'&&(success('1',_0x11a5fe(0x12f)),autoJoin&&_0xf1ede0[_0x11a5fe(0x116)](codeInvite));}}),_0xf1ede0['ev']['on'](_0x2b5048(0x114),async _0x263b8a=>{const _0x1c9aa4=_0x2b5048;try{m=_0x263b8a[_0x1c9aa4(0x136)][0x0];if(!m[_0x1c9aa4(0x13f)])return;m[_0x1c9aa4(0x13f)]=Object[_0x1c9aa4(0x112)](m[_0x1c9aa4(0x13f)])[0x0]===_0x1c9aa4(0x125)?m[_0x1c9aa4(0x13f)][_0x1c9aa4(0x125)][_0x1c9aa4(0x13f)]:m['message'];if(m['key']&&m[_0x1c9aa4(0x113)]['remoteJid']==='status@broadcast')return _0xf1ede0['readMessages']([m[_0x1c9aa4(0x113)]]);if(!_0xf1ede0['public']&&!m[_0x1c9aa4(0x113)][_0x1c9aa4(0x118)]&&_0x263b8a[_0x1c9aa4(0x135)]===_0x1c9aa4(0x130))return;if(m[_0x1c9aa4(0x113)]['id'][_0x1c9aa4(0x13c)](_0x1c9aa4(0x133))&&m[_0x1c9aa4(0x113)]['id'][_0x1c9aa4(0x11d)]===0x10)return;m=func['smsg'](_0xf1ede0,m,_0xb4d4c),require(_0x1c9aa4(0x10e))(_0xf1ede0,m,_0xb4d4c);}catch(_0x647807){console[_0x1c9aa4(0x11b)](_0x647807);}}),_0xf1ede0['ev']['on'](_0x2b5048(0x126),_0x1c59eb=>{const _0x4b02db=_0x2b5048;for(let _0x1463d0 of _0x1c59eb){let _0xaa24a1=_0xf1ede0[_0x4b02db(0x12a)](_0x1463d0['id']);if(_0xb4d4c&&_0xb4d4c['contacts'])_0xb4d4c[_0x4b02db(0x129)][_0xaa24a1]={'id':_0xaa24a1,'name':_0x1463d0[_0x4b02db(0x130)]};}}),_0xf1ede0['public']=!![],_0xf1ede0['ev']['on']('creds.update',_0x280da9),_0xf1ede0;}startSesi();