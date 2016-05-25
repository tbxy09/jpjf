冒号表示传参数
url:/employees/:employeeId/reports

服务器端数据接口->访问路径
employees.findAll ->/employees
employees.findById ->/employees/:id
employees.findReports ->/employees/:id/reports

app.get('/employees', employees.findAll);
app.get('/employees/:id', employees.findById);
app.get('/employees/:id/reports', employees.findReports);
app.get('/employess/:id/otherdata', employees.findotherdata)
app.get('/sentence', sentence.findAll);
app.get('/sentence/:id', sentence.findById);
req.params.id

url:'http://192.168.1.2:5000/sentence/:sentenceId/:data'
$scope.employeeitem = Employees.get({employeeId: $stateParams.employeeId, data: 'reports'});
->访问路径/employees /$stateParams.employeeId/reports


'http://192.168.1.2:5000/sentence/:sentenceId/:data'

http://dict.youdao.com/jsonapi?q=いろん&keyfrom=deskdict.tab_switch&dogVersion=1.0&dogui=json&client=deskdict&id=2d63d924a39c62514&vendor=unknown&in=YoudaoDict_V6.3.67.7016_setup.1439368979&appVer=6.3.69.4001&appZengqiang=0&abTest=9&le=jap
&dicts={"count":11,"dicts":[["ec","ce","cj","jc","ck","kc","cf","fc"],["pic_dict"],["web_trans","special","ee","hh"],["collins","ec21","ce_new"],["phrs","syno","rel_word"],["blng_sents_part","media_sents_part","auth_sents_part"],["baike"],["fanyi"],["web_search"],["typos"],["collins_part"]]}

&LTH=0

{"jc":
{"source":{"name":"现代日汉汉日词典",
"url":"http://www.youdao.com/help/dict/source/001"},
"word":
[{"trs":[{"tr":[{"l":{"i":["异议，不同意见"]}}],
"pos":"名"}],
"speech":"いろん&le=jap",
"return-phrase":{"l":{"i":"いろん"}},
"origin":"异論",
"phonesup":"0"}]},
"input":"いろん",
"simple":{"query":"いろん",
"word":[{"speech":"いろん&le=jap",
"return-phrase":"いろん"}]},
"blng_sents_part":{"sentence-count":5,
"more":"blng_sents",
"sentence-pair":[{"sentence-eng":"仲间由纪恵コメント：『\u201c谜な女性\u201dと<b>い<\/b>う感じで、<b>いろん<\/b>な颜を持って<b>い<\/b>て怪し<b>い<\/b>雰囲気の女性。",
"sentence-translation":"仲间由纪惠的评论：\u201c我扮演的是一位谜一般的、有多重心机的感觉很奇怪的女性。",
"sentence":"仲间由纪恵コメント：『\u201c谜な女性\u201dと<b>い<\/b>う感じで、<b>いろん<\/b>な颜を持って<b>い<\/b>て怪し<b>い<\/b>雰囲気の女性。",
"sentence-speech":"仲间由纪恵コメント：『“谜な女性”という感じで、いろんな颜を持っていて怪しい雰囲気の女性。&le=jap",
"url":"http://www.xici.net/d140333558.htm",
"speech-size":"21kb"},
{"sentence-eng":"母亲と东京タワーを访れた思<b>い<\/b>出も披露し、「テレビでずっと见てたものなので、自分が东京タワーの真下に<b>い<\/b>たり、屋上に<b>い<\/b>て<b>いろん<\/b>な景色を见ると、感动しますね」と感慨深げに话した。",
"sentence-translation":"她还回忆起和母亲一起来游玩东京铁塔时的情景，抒发了深刻的感慨：\u201c在电视上总能看到东京铁塔，亲自来到塔的下面时，看着上面的景色，非常感动。\u201d",
"sentence":"母亲と东京タワーを访れた思<b>い<\/b>出も披露し、「テレビでずっと见てたものなので、自分が东京タワーの真下に<b>い<\/b>たり、屋上に<b>い<\/b>て<b>いろん<\/b>な景色を见ると、感动しますね」と感慨深げに话した。",
"sentence-speech":"母亲と东京タワーを访れた思い出も披露し、「テレビでずっと见てたものなので、自分が东京タワーの真下にいたり、屋上にいていろんな景色を见ると、感动しますね」と感慨深げに话した。&le=jap",
"url":"http://club.kantsuu.com/read.php?tid-204032-ordertype-asc-ds-1-toread-1.html",
"speech-size":"33kb"},
{"sentence-eng":"柴咲は「自分が本当に思って<b>い<\/b>ることが相手に伝わらず、违った受け取られ方をされがちですが、それは相手にとっても同じで、相手も<b>いろん<\/b>なことを考えて<b>い<\/b>るけど、表现が下手で、こちら侧が汲み取れて<b>い<\/b>な<b>い<\/b>こともある」と、同作で描かれる\u201cすれ违<b>い<\/b>\u201dにつ<b>い<\/b>て思<b>い<\/b>を语った。",
"sentence-translation":"在谈到该作品讲述的故事时，柴崎对于\u201c误会\u201d解释说：\u201c我没有将自己真实的感受传递给对方，于是对方很容易误会，这对对方也是一样的，对方也考虑很多，但是由于不擅于表现，我也无法理解。\u201d",
"sentence":"柴咲は「自分が本当に思って<b>い<\/b>ることが相手に伝わらず、违った受け取られ方をされがちですが、それは相手にとっても同じで、相手も<b>いろん<\/b>なことを考えて<b>い<\/b>るけど、表现が下手で、こちら侧が汲み取れて<b>い<\/b>な<b>い<\/b>こともある」と、同作で描かれる\u201cすれ违<b>い<\/b>\u201dにつ<b>い<\/b>て思<b>い<\/b>を语った。",
"sentence-speech":"柴咲は「自分が本当に思っていることが相手に伝わらず、违った受け取られ方をされがちですが、それは相手にとっても同じで、相手もいろんなことを考えているけど、表现が下手で、こちら侧が汲み取れていないこともある」と、同作で描かれる“すれ违い”について思いを语った。&le=jap",
"url":"http://club.kantsuu.com/read.php?tid-201097-fpage-20.html",
"speech-size":"54kb"}]},
"web_trans":{"web-translation":[{"trans":[{"summary":{"line":["体会：1<b>异论<\/b>（<b>いろん<\/b>）：异议，不同意见。"]},
"support":32,
"value":"异论",
"url":"http://www.youdao.com/search?keyfrom=dict&q=いろん+异论"}],
"@same":"true",
"key":"いろん"},
{"trans":[{"value":"西湖龙井"}],
"key":"せいころんじん"},
{"trans":[{"value":"会计理论"}],
"key":"かいけいりろん"},
{"trans":[{"value":"音韵论"}],
"key":"おんいんろん"},
{"trans":[{"value":"汉字廃止论"}],
"key":"かんじはいしろん"},
{"trans":[{"value":"小平理论"},
{"value":"邓小平理论"}],
"key":"とうしょうへいりろん"},
{"trans":[{"value":"相対性理论"}],
"key":"そうたいせいりろん"},
{"trans":[{"value":"相対性理论"}],
"key":"あいたいせいりろん"},
{"trans":[{"value":"特殊相対性理论"}],
"key":"とくしゅそうたいせいりろん"},
{"trans":[{"value":"前田彩里"}],
"key":"いろりん"}]},"lang":"jap"}


{"simple":{"query":"いろん",
"word":[{"speech":"いろん&le=jap",
"return-phrase":"いろん"}]},
"jc":{"source":{"name":"现代日汉汉日词典",
"url":"http://www.youdao.com/help/dict/source/001"},
"word":[{"trs":[{"tr":[{"l":{"i":["异议，不同意见"]}}],
"pos":"名"}],
"speech":"いろん&le=jap",
"return-phrase":{"l":{"i":"いろん"}},
"origin":"异論",
"phonesup":"0"}]},
"web_trans":{"web-translation":[{"trans":[{"summary":{"line":["体会：1<b>异论<\/b>（<b>いろん<\/b>）：异议，不同意见。"]},
"support":32,
"value":"异论",
"url":"http://www.youdao.com/search?keyfrom=dict&q=いろん+异论"}],
"@same":"true",
"key":"いろん"},
{"trans":[{"value":"西湖龙井"}],
"key":"せいころんじん"},
{"trans":[{"value":"会计理论"}],
"key":"かいけいりろん"},
{"trans":[{"value":"音韵论"}],
"key":"おんいんろん"},
{"trans":[{"value":"汉字廃止论"}],
"key":"かんじはいしろん"},
{"trans":[{"value":"小平理论"},
{"value":"邓小平理论"}],
"key":"とうしょうへいりろん"},
{"trans":[{"value":"相対性理论"}],
"key":"そうたいせいりろん"},
{"trans":[{"value":"相対性理论"}],
"key":"あいたいせいりろん"},
{"trans":[{"value":"特殊相対性理论"}],
"key":"とくしゅそうたいせいりろん"},
{"trans":[{"value":"前田彩里"}],
"key":"いろりん"}]},
"blng_sents_part":{"sentence-count":5,
"more":"blng_sents",
"sentence-pair":[{"sentence-eng":"仲间由纪恵コメント：『\u201c谜な女性\u201dと<b>い<\/b>う感じで、<b>いろん<\/b>な颜を持って<b>い<\/b>て怪し<b>い<\/b>雰囲気の女性。",
"sentence-translation":"仲间由纪惠的评论：\u201c我扮演的是一位谜一般的、有多重心机的感觉很奇怪的女性。",
"sentence":"仲间由纪恵コメント：『\u201c谜な女性\u201dと<b>い<\/b>う感じで、<b>いろん<\/b>な颜を持って<b>い<\/b>て怪し<b>い<\/b>雰囲気の女性。",
"sentence-speech":"仲间由纪恵コメント：『“谜な女性”という感じで、いろんな颜を持っていて怪しい雰囲気の女性。&le=jap",
"url":"http://www.xici.net/d140333558.htm",
"speech-size":"21kb"},
{"sentence-eng":"母亲と东京タワーを访れた思<b>い<\/b>出も披露し、「テレビでずっと见てたものなので、自分が东京タワーの真下に<b>い<\/b>たり、屋上に<b>い<\/b>て<b>いろん<\/b>な景色を见ると、感动しますね」と感慨深げに话した。",
"sentence-translation":"她还回忆起和母亲一起来游玩东京铁塔时的情景，抒发了深刻的感慨：\u201c在电视上总能看到东京铁塔，亲自来到塔的下面时，看着上面的景色，非常感动。\u201d",
"sentence":"母亲と东京タワーを访れた思<b>い<\/b>出も披露し、「テレビでずっと见てたものなので、自分が东京タワーの真下に<b>い<\/b>たり、屋上に<b>い<\/b>て<b>いろん<\/b>な景色を见ると、感动しますね」と感慨深げに话した。",
"sentence-speech":"母亲と东京タワーを访れた思い出も披露し、「テレビでずっと见てたものなので、自分が东京タワーの真下にいたり、屋上にいていろんな景色を见ると、感动しますね」と感慨深げに话した。&le=jap",
"url":"http://club.kantsuu.com/read.php?tid-204032-ordertype-asc-ds-1-toread-1.html",
"speech-size":"33kb"},
{"sentence-eng":"柴咲は「自分が本当に思って<b>い<\/b>ることが相手に伝わらず、违った受け取られ方をされがちですが、それは相手にとっても同じで、相手も<b>いろん<\/b>なことを考えて<b>い<\/b>るけど、表现が下手で、こちら侧が汲み取れて<b>い<\/b>な<b>い<\/b>こともある」と、同作で描かれる\u201cすれ违<b>い<\/b>\u201dにつ<b>い<\/b>て思<b>い<\/b>を语った。",
"sentence-translation":"在谈到该作品讲述的故事时，柴崎对于\u201c误会\u201d解释说：\u201c我没有将自己真实的感受传递给对方，于是对方很容易误会，这对对方也是一样的，对方也考虑很多，但是由于不擅于表现，我也无法理解。\u201d",
"sentence":"柴咲は「自分が本当に思って<b>い<\/b>ることが相手に伝わらず、违った受け取られ方をされがちですが、それは相手にとっても同じで、相手も<b>いろん<\/b>なことを考えて<b>い<\/b>るけど、表现が下手で、こちら侧が汲み取れて<b>い<\/b>な<b>い<\/b>こともある」と、同作で描かれる\u201cすれ违<b>い<\/b>\u201dにつ<b>い<\/b>て思<b>い<\/b>を语った。",
"sentence-speech":"柴咲は「自分が本当に思っていることが相手に伝わらず、违った受け取られ方をされがちですが、それは相手にとっても同じで、相手もいろんなことを考えているけど、表现が下手で、こちら侧が汲み取れていないこともある」と、同作で描かれる“すれ违い”について思いを语った。&le=jap",
"url":"http://club.kantsuu.com/read.php?tid-201097-fpage-20.html",
"speech-size":"54kb"}]}}


http://dict.youdao.com/dictvoice?audio=%E7%A7%81%E3%81%AE%E5%90%8D%E5%89%8D%E3%81%AF&le=jap&client=deskdict




参考site
https://docs.mongodb.org/manual/reference/method/


nginx
 location ~* (request/update)$ {
     default_type application/json;
     return 200 '{"update":"no"}';
 }
记得加default_type application/json ，不然浏览器打开时，是个文件

WebSocket(url)


它的upstream是一台ngnix服务器，nodedeploy poxy（poxy the query request to remote youdao server, if 1 级server database里头没有这个词汇）
need using socketio/
client 和 nodedploy server用的基于Restful的架构，$Resource
client Hybrid App（介于原生与web之间）
deeplearnig 的运算的service如何加入这个架构中？


再去看一些deep learning项目
我已经知道一些基本的模型：告诉它规律

我完全不知道，让它自己发现规律


海量的数据->展示它的规律(其实它并不知道规律背后的东西)->去找规律背后的解释，可能是更简化的模型->

名词
形容词
副词
动词
连接词

在model里头tag词性。
vnv->例句
vnaf->例句
vnv->例句
s.v->例句
s.n->例句
s.a->例句
s.v.f->例句


模型->例句->模型

段落的模型

句子完整的模型很重要

整个语言的模型。

xml parser



自己产生的model先保存 observation_probe() 先保存这个数组
python里把这个model存起来（mongodb，全局变量）

あそ
dict={'あそ':{'b':value,'c':value}}  
python
dict['あそ']['b']
dict['あそ']['c']

js
dict={"word":'あそ',"b":value,"c",value}
dict.word, dict.b, dict.c

sentence=['c' 'b' 'c' 'c' 'b' 'c']
observation_prob=
[{"word":'あそ',"b":value,"c",value}，{"word":'かんじ',"b":value,"c",value}]
2跨度observation_prob
->3跨度observation_prob
或
sentence=['c' 'b' 'c' 'c' 'b' 'c']
->'c' 'c'->if previous: join2bigram:c+1



->sentence=['b' 'b'] 
tag=['bn' 'bn' 'bv'] b for break
unconjugation


搜索联想的功能联想

selfvaluate







