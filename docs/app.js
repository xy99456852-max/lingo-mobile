const WORDS = [
['curious','/ˈkjʊəriəs/','adj.','好奇的','She is curious about how things work.','她很好奇事物是如何运作的。'],['patient','/ˈpeɪʃnt/','adj.','有耐心的','Be patient with yourself while learning.','学习时要对自己有耐心。'],['improve','/ɪmˈpruːv/','v.','改善；提高','Reading daily will improve your vocabulary.','每天阅读会提升你的词汇量。'],['habit','/ˈhæbɪt/','n.','习惯','A small habit can change your life.','一个小习惯可以改变你的生活。'],['focus','/ˈfəʊkəs/','v./n.','专注；焦点','Focus on one task at a time.','一次专注做好一件事。'],['effort','/ˈefət/','n.','努力','Every effort brings you closer to your goal.','每次努力都让你更接近目标。'],['progress','/ˈprəʊɡres/','n.','进步','You are making steady progress.','你正在稳步进步。'],['confident','/ˈkɒnfɪdənt/','adj.','自信的','Practice helps you feel more confident.','练习会让你更加自信。'],['journey','/ˈdʒɜːni/','n.','旅程','Learning a language is a long journey.','学习语言是一段漫长旅程。'],['achieve','/əˈtʃiːv/','v.','实现；达成','You can achieve more than you imagine.','你能取得比想象中更多的成就。'],
['explore','/ɪkˈsplɔː/','v.','探索','We explored the old town on foot.','我们步行探索了老城区。'],['luggage','/ˈlʌɡɪdʒ/','n.','行李','Could you help me with my luggage?','你能帮我拿一下行李吗？'],['local','/ˈləʊkl/','adj./n.','当地的；当地人','Try the food at a local market.','去当地市场尝尝美食。'],['route','/ruːt/','n.','路线','This is the fastest route to the station.','这是去车站最快的路线。'],['reserve','/rɪˈzɜːv/','v.','预订；保留','I would like to reserve a table for two.','我想预订一张双人桌。'],['destination','/ˌdestɪˈneɪʃn/','n.','目的地','Paris was our final destination.','巴黎是我们的最终目的地。'],['adventure','/ədˈventʃə/','n.','冒险','Every journey begins with an adventure.','每段旅程都始于一次冒险。'],['recommend','/ˌrekəˈmend/','v.','推荐','Can you recommend a quiet cafe?','你能推荐一家安静的咖啡馆吗？'],['convenient','/kənˈviːniənt/','adj.','方便的','The hotel is convenient for the subway.','这家酒店乘地铁很方便。'],['experience','/ɪkˈspɪəriəns/','n./v.','经历；体验','It was an unforgettable experience.','那是一次难忘的经历。'],
['schedule','/ˈʃedjuːl/','n./v.','日程；安排','Let us schedule a meeting for Friday.','我们把会议安排在周五吧。'],['deadline','/ˈdedlaɪn/','n.','截止日期','The deadline is next Monday.','截止日期是下周一。'],['project','/ˈprɒdʒekt/','n.','项目','Our team finished the project early.','我们团队提前完成了项目。'],['discuss','/dɪˈskʌs/','v.','讨论','We need to discuss the new plan.','我们需要讨论新计划。'],['collaborate','/kəˈlæbəreɪt/','v.','协作','The two teams collaborate closely.','两个团队紧密合作。'],['efficient','/ɪˈfɪʃnt/','adj.','高效的','This method is simple and efficient.','这个方法简单又高效。'],['priority','/praɪˈɒrəti/','n.','优先事项','Quality is our top priority.','质量是我们的首要任务。'],['feedback','/ˈfiːdbæk/','n.','反馈','Thank you for your helpful feedback.','感谢你提供有用的反馈。'],['proposal','/prəˈpəʊzl/','n.','提案；建议','Her proposal was clear and practical.','她的提案清晰且务实。'],['responsibility','/rɪˌspɒnsəˈbɪləti/','n.','责任','This role comes with great responsibility.','这个职位肩负重大责任。'],
['delighted','/dɪˈlaɪtɪd/','adj.','欣喜的','I was delighted to hear the news.','听到这个消息我很高兴。'],['anxious','/ˈæŋkʃəs/','adj.','焦虑的','He felt anxious before the interview.','面试前他感到焦虑。'],['grateful','/ˈɡreɪtfl/','adj.','感激的','I am grateful for your support.','我很感激你的支持。'],['relieved','/rɪˈliːvd/','adj.','如释重负的','She felt relieved after the exam.','考试后她松了一口气。'],['frustrated','/frʌˈstreɪtɪd/','adj.','沮丧的','Do not feel frustrated by small mistakes.','不要因小错误而沮丧。'],['enthusiastic','/ɪnˌθjuːziˈæstɪk/','adj.','热情的','The students were enthusiastic about the idea.','学生们对这个想法充满热情。'],['calm','/kɑːm/','adj.','平静的','Take a deep breath and stay calm.','深呼吸并保持冷静。'],['overwhelmed','/ˌəʊvəˈwelmd/','adj.','不知所措的','She felt overwhelmed by all the choices.','面对众多选择，她不知所措。'],['content','/kənˈtent/','adj.','满足的','He felt content with a simple life.','他满足于简单的生活。'],['optimistic','/ˌɒptɪˈmɪstɪk/','adj.','乐观的','She remains optimistic about the future.','她对未来依然乐观。'],
['observe','/əbˈzɜːv/','v.','观察','Observe how native speakers use the phrase.','观察母语者如何使用这个短语。'],['memorize','/ˈmeməraɪz/','v.','记忆；背诵','Do not just memorize the definition.','不要只背诵定义。'],['review','/rɪˈvjuː/','v./n.','复习；回顾','Review new words before going to bed.','睡前复习新单词。'],['context','/ˈkɒntekst/','n.','语境；上下文','Learn each word in context.','在语境中学习每个单词。'],['concept','/ˈkɒnsept/','n.','概念','The teacher explained the concept clearly.','老师清楚地解释了这个概念。'],['analyze','/ˈænəlaɪz/','v.','分析','Analyze the sentence before translating it.','翻译前先分析句子。'],['summarize','/ˈsʌməraɪz/','v.','概括；总结','Can you summarize the article?','你能概括这篇文章吗？'],['accurate','/ˈækjərət/','adj.','准确的','Try to give an accurate answer.','尽量给出准确答案。'],['fluent','/ˈfluːənt/','adj.','流利的','She became fluent through daily practice.','她通过每日练习变得流利。'],['perspective','/pəˈspektɪv/','n.','观点；视角','The book changed my perspective.','这本书改变了我的视角。'],
['serendipity','/ˌserənˈdɪpəti/','n.','意外发现美好事物的幸运','We met by pure serendipity.','我们的相遇纯属美好的偶然。'],['resilient','/rɪˈzɪliənt/','adj.','有韧性的','She is resilient in the face of change.','面对变化，她展现出很强的韧性。'],['intricate','/ˈɪntrɪkət/','adj.','错综复杂的','The artist created an intricate pattern.','艺术家创作了精细的图案。'],['embrace','/ɪmˈbreɪs/','v.','欣然接受；拥抱','Learn to embrace new possibilities.','学会欣然接受新的可能。'],['subtle','/ˈsʌtl/','adj.','微妙的','There is a subtle difference in meaning.','含义上有一个微妙的区别。'],['compelling','/kəmˈpelɪŋ/','adj.','引人入胜的','She gave a compelling explanation.','她给出了令人信服的解释。'],['articulate','/ɑːˈtɪkjələt/','adj.','善于表达的','He is articulate and thoughtful.','他善于表达，也很有思想。'],['convey','/kənˈveɪ/','v.','传达；表达','A smile can convey warmth.','微笑可以传递温暖。'],['nuance','/ˈnjuːɑːns/','n.','细微差别','Translation often depends on nuance.','翻译往往取决于细微差别。'],['eloquent','/ˈeləkwənt/','adj.','表达流畅的','Her speech was brief but eloquent.','她的演讲简短却富有感染力。']
];
const EXTRA_WORDS=`
ability|n.|能力|基础
accept|v.|接受|基础
accident|n.|事故；意外|日常
active|adj.|活跃的|基础
address|n./v.|地址；处理|日常
advice|n.|建议|日常
afford|v.|负担得起|日常
agree|v.|同意|基础
allow|v.|允许|基础
amazing|adj.|令人惊叹的|情感
amount|n.|数量|基础
announce|v.|宣布|工作
apologize|v.|道歉|日常
appear|v.|出现；似乎|基础
apply|v.|申请；应用|工作
appointment|n.|预约|日常
arrange|v.|安排|工作
arrive|v.|到达|旅行
attention|n.|注意力|学习
available|adj.|可用的；有空的|日常
avoid|v.|避免|基础
balance|n./v.|平衡|成长
believe|v.|相信|基础
belong|v.|属于|基础
benefit|n./v.|益处；受益|成长
borrow|v.|借入|日常
brave|adj.|勇敢的|情感
budget|n.|预算|工作
cancel|v.|取消|日常
career|n.|职业生涯|工作
careful|adj.|小心的|基础
celebrate|v.|庆祝|日常
challenge|n./v.|挑战|成长
choice|n.|选择|基础
comfortable|adj.|舒适的|日常
communicate|v.|交流|表达
community|n.|社区；群体|日常
compare|v.|比较|学习
complete|v./adj.|完成；完整的|基础
condition|n.|条件；状况|基础
connect|v.|连接；联系|日常
consider|v.|考虑|进阶
continue|v.|继续|基础
conversation|n.|对话|表达
creative|adj.|有创造力的|成长
decision|n.|决定|成长
deliver|v.|递送；发表|工作
depend|v.|依靠；取决于|基础
describe|v.|描述|表达
develop|v.|发展；培养|成长
direction|n.|方向；指示|旅行
discover|v.|发现|旅行
education|n.|教育|学习
encourage|v.|鼓励|成长
environment|n.|环境|日常
essential|adj.|必不可少的|进阶
expect|v.|期待；预料|基础
explain|v.|解释|表达
familiar|adj.|熟悉的|日常
favorite|adj./n.|最喜欢的|日常
flexible|adj.|灵活的|工作
foreign|adj.|外国的|旅行
forgive|v.|原谅|情感
friendly|adj.|友好的|情感
future|n.|未来|成长
generous|adj.|慷慨的|情感
gentle|adj.|温和的|情感
guess|v./n.|猜测|学习
healthy|adj.|健康的|日常
helpful|adj.|有帮助的|日常
honest|adj.|诚实的|情感
hope|n./v.|希望|情感
important|adj.|重要的|基础
include|v.|包括|基础
increase|v./n.|增加|工作
independent|adj.|独立的|成长
information|n.|信息|学习
invite|v.|邀请|日常
language|n.|语言|学习
learn|v.|学习|学习
lend|v.|借出|日常
likely|adj./adv.|可能的|进阶
manage|v.|管理；设法做到|工作
message|n.|消息|日常
mistake|n.|错误|学习
necessary|adj.|必要的|进阶
notice|v./n.|注意到；通知|日常
opinion|n.|观点|表达
opportunity|n.|机会|成长
organize|v.|组织；整理|工作
prepare|v.|准备|学习
promise|n./v.|承诺|情感
protect|v.|保护|日常
provide|v.|提供|工作
receive|v.|收到|日常
relationship|n.|关系|情感
remember|v.|记得|学习
request|n./v.|请求|工作
respect|n./v.|尊重|情感
result|n.|结果|学习
return|v./n.|返回；归还|日常
safe|adj.|安全的|旅行
share|v.|分享|日常
similar|adj.|相似的|学习
solution|n.|解决方案|工作
special|adj.|特别的|情感
successful|adj.|成功的|成长
support|n./v.|支持|情感
surprise|n./v.|惊喜；使惊讶|情感
understand|v.|理解|学习
useful|adj.|有用的|学习
valuable|adj.|有价值的|成长
wonder|v./n.|想知道；奇迹|表达
abroad|adv.|在国外|旅行
accommodation|n.|住宿|旅行
boarding|n.|登机|旅行
currency|n.|货币|旅行
customs|n.|海关|旅行
departure|n.|出发|旅行
entrance|n.|入口|旅行
fare|n.|票价|旅行
guide|n./v.|导游；引导|旅行
passport|n.|护照|旅行
platform|n.|站台；平台|旅行
souvenir|n.|纪念品|旅行
traffic|n.|交通|旅行
transfer|n./v.|换乘；转移|旅行
vacation|n.|假期|旅行
agenda|n.|议程|工作
approve|v.|批准；赞成|工作
assignment|n.|任务；作业|工作
attend|v.|参加；出席|工作
colleague|n.|同事|工作
conference|n.|会议|工作
document|n./v.|文件；记录|工作
employee|n.|员工|工作
employer|n.|雇主|工作
interview|n./v.|面试；采访|工作
leadership|n.|领导力|工作
negotiate|v.|谈判|工作
presentation|n.|演示；报告|工作
professional|adj./n.|专业的；专业人士|工作
strategy|n.|策略|工作
achievement|n.|成就|成长
adapt|v.|适应|成长
ambitious|adj.|有抱负的|成长
discipline|n.|自律；纪律|成长
motivate|v.|激励|成长
potential|n./adj.|潜力；潜在的|成长
recover|v.|恢复|成长
strength|n.|力量；优势|成长
curiosity|n.|好奇心|学习
definition|n.|定义|学习
dictionary|n.|词典|学习
knowledge|n.|知识|学习
pronounce|v.|发音|学习
research|n./v.|研究|学习
resource|n.|资源|学习
skill|n.|技能|学习
translate|v.|翻译|学习
argument|n.|论点；争论|表达
clarify|v.|澄清|表达
convince|v.|说服|表达
emphasize|v.|强调|表达
impression|n.|印象|表达
mention|v./n.|提到|表达
respond|v.|回应|表达
specific|adj.|具体的|表达
statement|n.|陈述|表达
appropriate|adj.|合适的|进阶
assumption|n.|假设|进阶
consequence|n.|后果|进阶
consistent|adj.|一致的；持续的|进阶
demonstrate|v.|证明；演示|进阶
evaluate|v.|评估|进阶
evidence|n.|证据|进阶
significant|adj.|重要的；显著的|进阶
transform|v.|改变；转变|进阶
interpret|v.|解释；口译|进阶
assist|v.|协助；帮助|日常
maintain|v.|维持；维护|进阶
require|v.|需要；要求|进阶
contribute|v.|贡献；促成|成长
inspire|v.|鼓舞；启发|成长
awareness|n.|意识；认知|进阶
reliable|adj.|可靠的|进阶
`.trim().split('\n').map(line=>{const [word,type,meaning,topic]=line.split('|');return [word,'常用词',type,meaning,`“${word}” is useful in everyday English.`,`“${word}”是日常英语中的常用词。`,topic]});
WORDS.forEach(w=>w[6]=w[6]||(['journey','explore','luggage','local','route','reserve','destination','adventure','recommend','convenient','experience'].includes(w[0])?'旅行':'精选'));
WORDS.push(...EXTRA_WORDS);
const SENTENCES = [
['I ___ coffee every morning.','我每天早上都喝咖啡。',['drink','drinks','drank'],'drink','一般现在时中，I 后使用动词原形。'],['She ___ to work by bus.','她乘公交车上班。',['go','goes','going'],'goes','第三人称单数作主语，动词加 -es。'],['There ___ two books on the desk.','桌上有两本书。',['is','are','be'],'are','books 是复数，因此使用 are。'],['We are waiting ___ the train.','我们正在等火车。',['for','at','with'],'for','wait for 是固定搭配。'],['Can you ___ me the time?','你能告诉我时间吗？',['tell','say','speak'],'tell','tell someone something 表示告诉某人某事。'],['I would like ___ a room.','我想订一个房间。',['book','to book','booking'],'to book','would like 后接 to do。'],['How long does it ___ to get there?','去那里需要多久？',['take','cost','spend'],'take','It takes time to do 是常用句型。'],['Could I have the menu, ___?','请给我菜单好吗？',['please','thanks','sorry'],'please','礼貌提出请求可在句末加 please。'],['This word is easier ___ that one.','这个词比那个更简单。',['than','then','as'],'than','比较级后使用 than。'],['I do not know how ___ this word.','我不知道这个词怎么读。',['pronounce','to pronounce','pronouncing'],'to pronounce','疑问词 how 后可接不定式。'],
['If you practice daily, you ___ improve.','如果你每天练习，你会进步。',['will','would','had'],'will','真实条件句使用 if + 现在时，主句用 will。'],['She has lived here ___ 2022.','她从 2022 年起就住在这里。',['for','since','during'],'since','since 后接时间点。'],['The more you read, the ___ you understand.','你读得越多，理解得越深。',['much','more','most'],'more','the + 比较级，the + 比较级。'],['I wish I ___ more free time.','我希望自己有更多空闲时间。',['have','had','will have'],'had','wish 表示与现在相反的愿望时使用过去式。'],['The report needs to ___ by Friday.','报告需要在周五前完成。',['finish','be finished','finished'],'be finished','报告是被完成的，因此使用被动语态。'],['Let me know ___ you have questions.','如果有问题，请告诉我。',['unless','if','although'],'if','if 引导条件状语从句。'],['Neither the manager nor the staff ___ available.','经理和员工都没空。',['is','are','be'],'are','遵循就近原则，与 staff 保持一致。'],['We look forward to ___ from you.','我们期待收到你的回复。',['hear','hearing','heard'],'hearing','look forward to 后接动名词。'],['Although it rained, we ___ our walk.','尽管下雨，我们仍继续散步。',['continued','continue','have continue'],'continued','描述过去发生的事情用一般过去时。'],['The book ___ you recommended was excellent.','你推荐的那本书很棒。',['who','that','where'],'that','that 引导定语从句并指代物。'],
['Rarely ___ such a moving performance.','我很少看过如此感人的表演。',['I have seen','have I seen','I saw'],'have I seen','否定副词置于句首时使用部分倒装。'],['Had I known earlier, I ___ differently.','如果早知道，我会采取不同做法。',['would act','would have acted','acted'],'would have acted','这是省略 if 的过去虚拟条件句。'],['What matters most ___ how we respond.','最重要的是我们如何回应。',['are','is','being'],'is','主语是 What matters most 这一整体。'],['Not until midnight ___ the work.','直到午夜他们才完成工作。',['they finished','did they finish','they had finished'],'did they finish','Not until 置于句首，主句使用部分倒装。'],['The theory is worth ___ in depth.','这个理论值得深入探讨。',['explore','exploring','to explore'],'exploring','be worth 后接动名词。'],['It is essential that every student ___ prepared.','每位学生都必须做好准备。',['is','be','was'],'be','必要性结构后的 that 从句使用动词原形。'],['No sooner had we arrived ___ it began.','我们刚到，它就开始了。',['when','than','then'],'than','no sooner...than... 是固定结构。'],['The plan, ___ ambitious, is practical.','计划虽有雄心，但仍切实可行。',['although','despite','however'],'although','although 可连接形容词形成省略结构。'],['Were I to visit again, I ___ longer.','如果再次来访，我会多待一阵。',['stay','would stay','will stay'],'would stay','Were I to... 是正式的虚拟条件句。'],['Only by making mistakes ___ improve.','只有通过犯错，我们才能进步。',['we can','can we','we could'],'can we','Only + 状语置于句首，主句使用倒装。']
];
const GRAMMAR=[['A1','一般现在时','Present Simple','表达习惯、事实和经常发生的动作。','subject + base verb / verb-s','She reads every evening.'],['A2','现在完成时','Present Perfect','连接过去发生的事与现在的状态。','have / has + past participle','I have already finished my homework.'],['B1','被动语态','Passive Voice','强调动作承受者或不必说明执行者。','be + past participle','The bridge was built in 2010.'],['B1','条件句','Conditionals','表达真实、可能或假设的条件与结果。','If + present, will + verb','If it rains, we will stay home.'],['B2','虚拟语气','Subjunctive Mood','表达与事实相反的假设、愿望或建议。','If + past, would + verb','If I had time, I would travel.'],['B2','非谓语动词','Non-finite Verbs','用不定式、动名词和分词让表达更紧凑。','to do / doing / done','She enjoys reading.'],['C1','倒装句','Inversion','将助动词置于主语前，强化语气。','Negative adverb + auxiliary + subject','Never have I seen such a sky.'],['C1','强调句','Cleft Sentence','突出句子的某个成分。','It is/was ... that/who ...','It was Tom who found the key.']];
const $=s=>document.querySelector(s), app=$('#app');
let view='home', wi=+(localStorage.lingoWordIndex||0), si=+(localStorage.lingoSentenceIndex||0), learned=new Set(JSON.parse(localStorage.lingoLearned||'[]')), score=+(localStorage.lingoScore||0), selected=null,wordQuery='',wordTopic='全部',cachedVoices=[];
const refreshVoices=()=>{if('speechSynthesis'in window)cachedVoices=window.speechSynthesis.getVoices()};refreshVoices();if('speechSynthesis'in window)window.speechSynthesis.onvoiceschanged=refreshVoices;
const toast=msg=>{let old=$('.toast');if(old)old.remove();let el=document.createElement('div');el.className='toast';el.textContent=msg;document.body.appendChild(el);setTimeout(()=>el.remove(),3200)};
const systemSpeak=text=>{if(!('speechSynthesis'in window)){toast('当前浏览器不支持系统语音，请换用 Chrome 或 Safari。');return}const synth=window.speechSynthesis;synth.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.rate=.82;u.volume=1;u.voice=cachedVoices.find(v=>v.lang==='en-US'&&v.localService)||cachedVoices.find(v=>v.lang.startsWith('en'))||null;u.onerror=()=>toast('发音失败，请检查媒体音量或换用系统浏览器。');synth.resume();synth.speak(u);setTimeout(()=>synth.resume(),120)};
const speak=text=>{toast('正在播放英文发音…');const audio=new Audio('https://dict.youdao.com/dictvoice?audio='+encodeURIComponent(text)+'&type=2');audio.preload='auto';audio.volume=1;let fallback=false;const useFallback=()=>{if(fallback)return;fallback=true;systemSpeak(text)};audio.onerror=useFallback;const p=audio.play();if(p&&p.catch)p.catch(useFallback)};
function save(){localStorage.lingoWordIndex=wi;localStorage.lingoSentenceIndex=si;localStorage.lingoLearned=JSON.stringify([...learned]);localStorage.lingoScore=score}
function shell(title,sub,body){return `<section class="section-head"><span class="eyebrow">Lingo Studio</span><h1>${title}</h1><p class="sub">${sub}</p></section>${body}`}
function home(){const pct=Math.round(learned.size/WORDS.length*100);return `<section class="hero"><span class="eyebrow">每天进步一点点</span><h1>把英语，练成你的<br>日常能力。</h1><p>无需登录，打开就学。学习记录只保存在你的设备上。</p></section><section class="progress-card"><div class="row"><span>今日学习进度</span><b>${learned.size} / ${WORDS.length}</b></div><div class="meter"><i style="width:${pct}%"></i></div></section><section class="grid"><button class="feature" data-view="words"><span class="icon">Aa</span><h3>背单词</h3><p>${WORDS.length} 个高频词，支持搜索、分类和双重发音</p></button><button class="feature" data-view="sentences"><span class="icon">✓</span><h3>句子练习</h3><p>30 道分级题，答题后即时解析</p></button><button class="feature" data-view="grammar"><span class="icon">文</span><h3>语法手册</h3><p>从 A1 到 C1 的核心语法结构</p></button><button class="feature" data-view="translate"><span class="icon">↔</span><h3>快捷翻译</h3><p>常用短语离线互译，随时复制</p></button></section>`}
function wordList(){return WORDS.filter(w=>(wordTopic==='全部'||w[6]===wordTopic)&&(wordQuery===''||w[0].includes(wordQuery.toLowerCase())||w[3].includes(wordQuery)))}
function words(){let list=wordList();if(!list.length)return shell('背单词',`共 ${WORDS.length} 个词汇`,`<div class="word-tools"><input id="wordSearch" value="${wordQuery}" placeholder="搜索英文或中文"><button class="primary" id="searchWord">搜索</button></div><div class="empty">没有找到相关单词，请换个关键词。</div>`);let w=list[wi%list.length],topics=['全部','基础','日常','旅行','工作','成长','情感','学习','表达','进阶','精选'];return shell('背单词',`可搜索分类词库 · 共 ${WORDS.length} 个词汇`,`<div class="word-tools"><input id="wordSearch" value="${wordQuery}" placeholder="搜索英文或中文"><button class="primary" id="searchWord">搜索</button></div><div class="filters">${topics.map(t=>`<button class="chip ${wordTopic===t?'active':''}" data-topic="${t}">${t}</button>`).join('')}</div><article class="card word-card"><div><div class="row"><span class="counter">当前分类 ${wi%list.length+1} / ${list.length}</span><button class="secondary" id="speak">🔊 点击发音</button></div><h2>${w[0]}</h2><div class="phonetic">${w[1]} · ${w[2]} · ${w[6]}</div><div class="meaning">${w[3]}</div><div class="example">${w[4]}<small>${w[5]}</small></div></div><div class="card-actions"><button class="secondary" id="prev">上一个</button><button class="primary" id="learned">${learned.has(w[0])?'已掌握 ✓':'标记掌握'}</button><button class="secondary" id="next">下一个</button></div></article><div class="word-bank">${list.slice(0,24).map((x,i)=>`<button data-windex="${i}"><b>${x[0]}</b><span>${x[3]}</span></button>`).join('')}</div>`)}
function sentences(){let q=SENTENCES[si%SENTENCES.length],done=selected!==null;return shell('句子练习',`30 道题 · 当前得分 ${score}`,`<article class="card question"><div class="row"><span class="counter">第 ${si%SENTENCES.length+1} / ${SENTENCES.length} 题</span><button class="secondary" id="qspeak">🔊</button></div><h2>${q[0]}</h2><p class="translation">${q[1]}</p><div class="options">${q[2].map(o=>`<button class="option ${done?(o===q[3]?'correct':o===selected?'wrong':''):''}" data-answer="${o}" ${done?'disabled':''}>${o}</button>`).join('')}</div>${done?`<div class="feedback"><b>${selected===q[3]?'回答正确！':'正确答案：'+q[3]}</b><br>${q[4]}</div><div class="card-actions"><button class="primary" id="nextq">下一题</button></div>`:''}</article>`)}
function grammar(){return shell('语法手册','8 个核心语法点 · 从基础到进阶',`<div class="grammar-list">${GRAMMAR.map(g=>`<article class="card grammar"><span class="level">${g[0]}</span><h3>${g[1]} · ${g[2]}</h3><p>${g[3]}</p><div class="formula">${g[4]}</div><p><b>例：</b>${g[5]}</p></article>`).join('')}</div>`)}
const dict={'hello':'你好','thank you':'谢谢你','good morning':'早上好','good night':'晚安','how are you':'你好吗','i love learning english':'我喜欢学习英语','practice makes perfect':'熟能生巧','where is the station':'车站在哪里','i need help':'我需要帮助','保持好奇':'stay curious','熟能生巧':'practice makes perfect','谢谢你':'thank you','早上好':'good morning','晚安':'good night','我需要帮助':'i need help','车站在哪里':'where is the station'};
function translate(){return shell('快捷翻译','常用短语可离线翻译；复杂长句建议联网使用专业翻译服务',`<article class="card translator"><textarea id="source" placeholder="输入英语或中文…"></textarea><div class="swap">↓ 自动识别语言 ↓</div><div class="result" id="result">翻译结果会显示在这里</div><div class="card-actions"><button class="primary" id="trans">翻译</button><button class="secondary" id="copy">复制</button></div><p class="hint">试试：good morning、practice makes perfect、我需要帮助</p></article>`)}
function render(){app.innerHTML=view==='home'?home():view==='words'?words():view==='sentences'?sentences():view==='grammar'?grammar():translate();document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));app.focus({preventScroll:true});bind()}
function bind(){document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>{view=b.dataset.view;render();scrollTo(0,0)});if(view==='words'){let list=wordList(),w=list[wi%list.length];if($('#speak'))$('#speak').onclick=()=>speak(w[0]);if($('#prev'))$('#prev').onclick=()=>{wi=(wi+list.length-1)%list.length;save();render()};if($('#next'))$('#next').onclick=()=>{wi=(wi+1)%list.length;save();render()};if($('#learned'))$('#learned').onclick=()=>{learned.has(w[0])?learned.delete(w[0]):learned.add(w[0]);save();render()};if($('#searchWord'))$('#searchWord').onclick=()=>{wordQuery=$('#wordSearch').value.trim();wi=0;render()};if($('#wordSearch'))$('#wordSearch').onkeydown=e=>{if(e.key==='Enter')$('#searchWord').click()};document.querySelectorAll('[data-topic]').forEach(b=>b.onclick=()=>{wordTopic=b.dataset.topic;wi=0;render()});document.querySelectorAll('[data-windex]').forEach(b=>b.onclick=()=>{wi=+b.dataset.windex;render();scrollTo({top:180,behavior:'smooth'})})}if(view==='sentences'){let q=SENTENCES[si%SENTENCES.length];$('#qspeak').onclick=()=>speak(q[0].replace('___',q[3]));document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{selected=b.dataset.answer;if(selected===q[3])score++;save();render()});if($('#nextq'))$('#nextq').onclick=()=>{si=(si+1)%SENTENCES.length;selected=null;save();render()}}if(view==='translate'){$('#trans').onclick=()=>{let s=$('#source').value.trim(),key=s.toLowerCase().replace(/[.!?。！？]$/,'');$('#result').textContent=dict[key]||(/^([\x00-\x7F]+)$/.test(s)?'暂未收录这个长句。你可以拆成常用短语再试。':'This phrase is not in the offline dictionary yet. Try a shorter phrase.')};$('#copy').onclick=()=>navigator.clipboard?.writeText($('#result').textContent)}}
document.addEventListener('click',e=>{let b=e.target.closest('[data-view]');if(b&&!b.closest('main')){view=b.dataset.view;render();scrollTo(0,0)}});let day=new Date().toDateString(),last=localStorage.lingoLastDay;if(last!==day){localStorage.lingoStreak=last?+(localStorage.lingoStreak||1)+1:1;localStorage.lingoLastDay=day}$('#streak').textContent=localStorage.lingoStreak||1;render();
