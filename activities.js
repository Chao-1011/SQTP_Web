// ========== 33 Activities Data (from 第一版) ==========
const activitiesData = [
    { id: 1, title: "名字接龙", desc: "所有人围成一圈，第一个人说“我是喜欢XX的XX”，第二个人要先复述第一个人的介绍再说自己的，以此类推。", pax: "10-30 人", time: "15-20 分钟", budget: "¥0", rating: 2, tags: ["破冰", "零经费"], steps: ["所有人围成一圈", "第一个人说“我是喜欢 XX 的 XX”", "第二个人要先复述第一个人的介绍再说自己的", "以此类推进行接龙"], materials: ["无需物料"] },
    { id: 2, title: "两真一假", desc: "每个人准备关于自己的两个真陈述、一个假陈述，其他人提问来猜测哪个是假的。", pax: "8-20 人", time: "20-30 分钟", budget: "¥0", rating: 2, tags: ["破冰", "零经费"], steps: ["每个人准备关于自己的两个真陈述、一个假陈述", "轮流发言陈述自己的三个事件", "其他人提问来猜测哪个是假的", "被猜对的人要解释“真相”"], materials: ["无需物料"] },
    { id: 3, title: "共同之处", desc: "主持人给出一个话题，同学们自由组合找到有共同之处的伙伴站在一起，随后几组同学分享“共同点”。", pax: "10-40 人", time: "15-20 分钟", budget: "¥0", rating: 2, tags: ["破冰", "零经费"], steps: ["主持人给出一个宽泛的话题（如：家乡、爱好等）", "同学们在场地内自由走动交流", "找到有共同之处的伙伴站在一起形成小组", "几组同学面向全班分享你们的“共同点”"], materials: ["无需物料"] },
    { id: 4, title: "故事接龙", desc: "主持人给出故事开头，每个人轮流说一句话把故事延续下去，要求合理有趣。", pax: "8-20 人", time: "15-20 分钟", budget: "¥0", rating: 2, tags: ["破冰", "文娱", "零经费"], steps: ["主持人给出一个有趣或悬疑的故事开头", "按照座位顺序，每个人轮流说一句话", "努力把故事延续下去，要求逻辑通顺且合理有趣", "如果接不下去，主持人需要及时救场抛出新线索"], materials: ["无需物料"] },
    { id: 5, title: "我有你没有", desc: "同学们轮流说出一个自己独有的经历或特点。若没有人有，说的人得一分。", pax: "8-30 人", time: "20-30 分钟", budget: "¥0", rating: 2, tags: ["破冰", "零经费"], steps: ["同学们按顺序轮流发言", "说出一个自己认为独有的经历或特点（如：我去过南极）", "若在场其他人也有该经历，则发言者不得分", "若没有任何人有该经历，发言者得一分"], materials: ["无需物料"] },
    { id: 6, title: "真心话大冒险 (改良版)", desc: "设置“安全区”跳过隐私问题，确保大冒险任务文明有趣。可提前收集“班级八卦”作为问题来源。", pax: "8-20 人", time: "30 分钟", budget: "¥0", rating: 3, tags: ["破冰", "文娱", "零经费"], steps: ["提前收集一些无伤大雅的“班级八卦”或趣味问题", "准备击鼓传花或抽签工具来决定受罚者", "受罚者选择真心话或大冒险", "设置“安全区”，允许跳过极度隐私问题，确保活动文明舒适"], materials: ["自制抽签纸条", "播放音乐的设备(可选)"] },
    { id: 7, title: "爱好 bingo", desc: "卡片格子写上特征，同学们找符合特征的同学签名，最先连成一条线获胜。", pax: "15-50 人", time: "20-30 分钟", budget: "¥0", rating: 3, tags: ["破冰", "工具", "零经费"], steps: ["班委提前调研大家特点，排版打印 5x5 的 bingo 卡片", "发给每人一张卡片和笔", "在场地内走动，寻找符合格子上特征的同学并请TA签名", "最先拿到签名并连成一条直线（横/竖/斜）的同学获胜"], materials: ["提前制作的 5x5 bingo 卡片", "签字笔"] },
    { id: 8, title: "浙大景物 Guess Guess", desc: "展示校园标志性建筑或角落照片，分组抢答猜地点，答对得分。", pax: "10-40 人", time: "20-30 分钟", budget: "¥0", rating: 3, tags: ["文娱", "案例", "零经费"], steps: ["班委前期跑遍校园，搜集刁钻角度的景物照片并制作PPT", "全班分组，选出组长", "通过投影仪展示照片", "各组抢答猜测照片所在的具体地点，答对累积得分"], materials: ["手机或投影仪等多媒体设备", "计分用纸笔"] },
    { id: 9, title: "一封神秘信", desc: "盲抽名字写祝福或第一印象，匿名或署名，主持人统一收集随机发放。", pax: "10-30 人", time: "15-20 分钟", budget: "¥0-30", rating: 3, tags: ["破冰", "文娱"], steps: ["将全班同学名字写在纸条上放入抽签盒", "每人盲抽一个名字", "在明信片上给抽到的同学写下祝福或第一印象（可选择匿名）", "主持人统一收集所有信件，随机或指定发放"], materials: ["明信片或漂亮的信纸", "签字笔"] },
    { id: 10, title: "你画我猜", desc: "一人画画队友猜词，限时内猜对最多者获胜。", pax: "8-20 人", time: "30-40 分钟", budget: "¥0", rating: 2, tags: ["文娱", "工具", "零经费"], steps: ["准备好词语题库（可包含班级梗、专业词汇等）", "两人或多人一组，轮流上台", "一人根据抽到的词语在黑板/纸板上作画，不能写字或说话", "队友在限时内（如2分钟）疯狂猜词，猜对最多组获胜"], materials: ["题库卡片或手机小程序", "白板笔/画笔", "白板或大纸板"] },
    { id: 11, title: "谁是卧底", desc: "每人拿到一个词（小部分人词语不同），通过每轮描述找出卧底。", pax: "6-12 人", time: "20-30 分钟", budget: "¥0", rating: 2, tags: ["文娱", "工具", "零经费"], steps: ["通过发牌或小程序，每人拿到一个词（如：平民拿“苹果”，卧底拿“梨”）", "按顺序每人说一句话描述自己的词，不能直接说出词汇", "一轮描述结束后，大家投票指出谁是卧底", "得票最多者出局，游戏继续直到卧底全部出局或平民少于卧底"], materials: ["发词卡片", "或者谁是卧底手机小程序"] },
    { id: 12, title: "抢凳子", desc: "音乐响起围着凳子走，音乐停止抢凳子，没抢到者淘汰。", pax: "10-20 人", time: "15-20 分钟", budget: "¥0", rating: 3, tags: ["文娱", "零经费"], steps: ["在场地中央摆放比参与人数少1张的凳子（围成一圈）", "主持人播放音乐，参与者绕着凳子圈顺时针走动", "音乐突然停止，大家迅速抢占凳子坐下", "没抢到凳子的人淘汰，同时撤掉一张凳子", "重复以上步骤，直到决出最后一人"], materials: ["坚固的凳子", "播放音乐的设备"] },
    { id: 13, title: "户外游戏日 (传统拓展)", desc: "在操场或草坪进行老鹰捉小鸡、丢手绢、拔河等传统游戏，分组对抗争夺奖励。", pax: "全班", time: "2-3 小时", budget: "¥0", rating: 4, tags: ["文娱", "户外", "零经费"], steps: ["选择开阔的操场或草坪场地", "全班分组，说明对抗规则和奖励（如免除打扫卫生等）", "进行老鹰捉小鸡、丢手绢、一二三木头人等热身游戏", "进行拔河、多人接力等团队协作竞技", "颁发奖励，集体大合影"], materials: ["拔河绳(可选)", "哨子"] },
    { id: 14, title: "运动友谊赛 (竞技类)", desc: "开展篮球、羽毛球、乒乓球或趣味运动会，建议男女混合组队增加互动性。", pax: "全班/联合班级", time: "2-3 小时", budget: "少量经费", rating: 5, tags: ["文娱", "户外"], steps: ["提前至少两周预定学校体育场馆", "在班内发报名表，根据报名情况划定比赛项目（篮球、羽毛球等）", "建议采用男女混合组队、接力等形式降低竞技门槛，增加趣味", "安排裁判和后勤人员买水", "比赛结束颁发友谊第一小奖品"], materials: ["篮球/羽毛球/乒乓球等器材", "矿泉水", "记分牌", "跌打损伤喷雾"] },
    { id: 15, title: "春日踏青 / 户外徒步", desc: "包车前往远途郊外，分组游览、中午野餐、下午玩飞盘风筝，合影后返程。", pax: "15-30 人", time: "上午9:00-下午4:00", budget: "50-80元/人", rating: 5, tags: ["文娱", "户外", "案例"], steps: ["班委提前踩点，预定包车，让同学签署安全免责书", "统一采买干粮、水和公共用品", "早上学校集合乘车出发", "到达目的地后分组自由游览或徒步", "中午寻找合适草坪铺垫子集体野餐", "下午组织飞盘、风筝或桌游", "清点人数，合影后乘车安全返校"], materials: ["包车大巴", "野餐垫", "晕车药及创可贴等药品", "飞盘/风筝/扑克牌", "垃圾袋"] },
    { id: 16, title: "Citywalk (纯文娱探索)", desc: "规划1-3公里城市路线，沿途分组寻找指定小吃打卡，西湖边日落合影结束。", pax: "10-20 人", time: "半天", budget: "30-50元/人", rating: 5, tags: ["文娱", "户外", "案例"], steps: ["班委提前实地走一遍路线，掐算时间，避免人群走散", "印制带有路线和打卡任务的“打卡地图”", "下午2点集合，按地图分组出发", "沿途寻找指定特色小吃、特色路牌打卡拍照", "穿插城市历史讲解或街头小游戏", "傍晚在西湖边或广场集合看日落合影"], materials: ["定制打卡地图", "班旗(拍照用)"] },
    { id: 17, title: "红色 Citywalk (思政探索)", desc: "参观革命历史纪念馆或走访红色文化地标，边走边学，完成打卡任务。", pax: "10-20 人", time: "半天", budget: "¥0(不含餐)", rating: 5, tags: ["思政", "户外", "案例"], steps: ["查阅资料，规划一条串联本地红色景点的步行路线", "提前联系纪念馆确认开放时间和团队预约要求", "下发“寻找红色印记”打卡任务卡", "沿途边走边听讲解，或让同学轮流分享地标背后的历史", "在标志性地点录制合唱红歌视频或合影留念"], materials: ["红色历史讲解材料", "打卡任务卡"] },
    { id: 18, title: "校园定向越野", desc: "分组在校园内打卡，完成特定地点合影、回答校史问题等趣味挑战。", pax: "全班分组", time: "2 小时左右", budget: "¥0", rating: 4, tags: ["文娱", "思政", "户外", "零经费"], steps: ["班委提前在校园各个角落藏好线索卡片或设置NPC", "将全班分为若干小队，发放起始任务卡", "各小队根据线索解谜，跑到指定地点打卡（如：和某雕像摆同样姿势拍照）", "在NPC处回答校史问题获取下一关线索", "最先完成所有打卡任务回到终点的小队获胜"], materials: ["自制任务线索卡", "手机(拍照证明用)", "终点小奖品"] },
    { id: 19, title: "红色寻宝", desc: "在校园或红色景点设置“任务点”，完成任务后获得包含校史国史线索的卡片。", pax: "全班分组", time: "1-2 小时", budget: "¥0", rating: 5, tags: ["思政", "户外", "工具", "零经费"], steps: ["将晦涩的历史知识巧妙包装成解谜线索（需要脑洞极大）", "在校园或景点布置“任务点”", "各组出发寻找，每找到一处需要完成知识问答", "答对后获得拼图碎片或线索卡片", "集齐所有线索，拼凑出完整的重大历史事件或人物故事"], materials: ["含历史知识的线索卡片", "拼图(可选)"] },
    { id: 20, title: "毕至居美食派对", desc: "提前预订毕至居，分组买菜，现场分组烹饪或包饺子，集体品尝并评选最佳菜品。", pax: "全班", time: "3-4 小时", budget: "40-60元/人", rating: 5, tags: ["文娱", "案例"], steps: ["靠手速和运气提前在系统预订毕至居或公共厨房", "在群里讨论菜单，将同学分为采购组、主厨组、洗切组等", "活动当天分组前往菜市场采购新鲜食材", "现场大家一起动手包饺子、做拿手菜", "集体大快朵颐，可设置幽默的“厨神”颁奖环节", "吃完后极其痛苦但必须履行的集体大扫除恢复场地"], materials: ["所有烹饪食材", "油盐酱醋等调料", "一次性桌布和纸杯", "洗洁精和垃圾袋"] },
    { id: 21, title: "K歌大赛", desc: "预订大包厢，大家轮流演唱，可颁发“最佳人气奖”“最佳台风奖”。", pax: "全班", time: "3-4 小时", budget: "40-60元/人", rating: 4, tags: ["文娱"], steps: ["提前预订容量足够大的KTV包厢", "群内收集想唱的歌单，鼓励大家准备合唱或搞笑曲目", "布置包厢氛围，准备好零食饮料", "轮流点唱，班委可以带头炒热气氛，避免大家都在玩手机", "最后由全班投票选出最佳人气奖、破音奖等，颁发小礼品"], materials: ["KTV场地", "零食饮料", "实体小奖状或搞怪礼品"] },
    { id: 22, title: "桌游之夜", desc: "布置场地，准备零食，安排“主持人”讲解规则并带领新手局，体验剧本杀或UNO等。", pax: "全班分组", time: "3-4 小时", budget: "15-25元/人", rating: 3, tags: ["文娱"], steps: ["借用空教室或活动室", "提前准备好多种类型的桌游：剧本杀、UNO、三国杀、阿瓦隆等", "购买充足的零食和饮料", "按照想玩的游戏将同学分组，每组安排一个熟悉规则的“主持人”带玩", "尽情推理、互爆身份，享受烧脑乐趣"], materials: ["剧本杀盒装", "各类卡牌桌游", "零食饮料"] },
    { id: 23, title: "电影之夜 (纯文娱)", desc: "在群内投票定下大家最想看的商业/高分电影，吃吃喝喝看片，映后闲聊。", pax: "全班", time: "2-3 小时", budget: "15-25元/人", rating: 3, tags: ["文娱"], steps: ["借大多媒体教室，确认投影和音响设备正常", "在班级群发起电影投票（如悬疑、喜剧、科幻巨制）", "根据人数购买爆米花、奶茶等看片标配", "关灯拉窗帘，营造影院氛围共同观影", "电影结束后可以保留一点时间大家闲聊吐槽剧情"], materials: ["高分电影高清片源", "爆米花", "饮料/奶茶"] },
    { id: 24, title: "主题观影会 (思政结合)", desc: "集体观看红色主题电影或纪录片，组织者抛砖引玉，映后关起门来进行没有压力的讨论。", pax: "全班", time: "2-3 小时", budget: "¥0", rating: 3, tags: ["思政", "案例", "零经费"], steps: ["精心挑选符合主旋律但又引人入胜的电影（如《觉醒年代》混剪、《建党伟业》等，选片极其关键）", "组织集体观影", "观影结束后，主持人抛出几个有深度但不枯燥的话题", "关起门来，鼓励同学们畅所欲言，进行没有压力的真实观点碰撞"], materials: ["红色主题电影或纪录片片源"] },
    { id: 25, title: "红色知识竞赛", desc: "设计党史、校史及野史趣闻题目，包含必答抢答环节，加入游戏化技能。", pax: "全班分组", time: "1.5-2 小时", budget: "少量经费", rating: 4, tags: ["思政", "工具"], steps: ["班委需要花大量时间抠题库，设计党史、校史甚至有趣的野史题目", "制作精美的交互式PPT，建立严谨的计分和抢答系统", "全班分组，介绍规则（必答题、抢答题、风险题）", "比赛中加入“求助队友”、“去掉一个错误选项”等游戏化技能卡", "统计分数，为冠亚季军颁发奖品"], materials: ["题库PPT", "抢答器(或举手代替)", "游戏技能卡牌", "奖品"] },
    { id: 26, title: "法律知识竞赛", desc: "结合大学生兼职权益、网络安全等案例，通过问答形式进行权益保护教育。", pax: "全班分组", time: "1.5-2 小时", budget: "少量经费", rating: 4, tags: ["思政", "工具"], steps: ["搜集大学生极易中招的真实案例（兼职诈骗、校园贷、网络安全等）", "将案例改编成单选、多选或情景判断题制作成PPT", "全班分组进行PK抢答", "每答完一题，由主持人或邀请的法学专业同学进行普法解析", "评出优胜组并发放实用小奖品"], materials: ["案例题库PPT", "计分板"] },
    { id: 27, title: "主题辩论赛", desc: "提前发布有趣或抽象的辩题（如“情敌是敌人/同好”），让选手准备后分组开杠。", pax: "全班分组", time: "1.5-2 小时", budget: "¥0", rating: 4, tags: ["思政", "案例", "零经费"], steps: ["避开过于严肃宏大的辩题，选择贴近大学生生活、有趣或抽象的辩题", "提前一周发布辩题，征集正反方辩手（需强依赖同学自觉准备资料）", "布置教室，设置主席、计时员", "按照正规辩论赛流程（立论、驳立论、自由辩、总结）开杠", "全班作为大众评审投票决定胜负"], materials: ["计时器(或手机APP)", "辩手席桌牌"] },
    { id: 28, title: "学长学姐经验分享会", desc: "邀请高年级分享专业认知和学业规划，留出充足的 Q&A 环节让同学们解惑。", pax: "全班", time: "1.5-2 小时", budget: "少量经费", rating: 3, tags: ["案例"], steps: ["动用人脉，邀请在保研、考研、出国或就业方面优秀的直系高年级学长学姐", "收集班级同学目前最关心的痛点问题提前给到嘉宾", "学长学姐做主题PPT分享", "留出至少一半时间进行Q&A自由提问", "活动结束后送上精心准备的水果或伴手礼表达感谢"], materials: ["多媒体教室", "给嘉宾的伴手礼/果篮"] },
    { id: 29, title: "企业参访", desc: "提前联系企业，确认接待要求，前往参观工作环境以获得职业认知。", pax: "全班", time: "半天", budget: "包车费", rating: 5, tags: ["案例", "户外"], steps: ["班委或辅导员通过学校校友会、就业指导中心联系对口企业", "确认企业的接待时间、人数限制及安全要求", "办理学校的外出安全审批", "包车前往企业，参观办公环境、实验室或展厅", "与企业HR或校友员工进行座谈交流，了解行业前沿"], materials: ["企业联系函", "外出安全承诺书"] },
    { id: 30, title: "模拟面试 / 简历工作坊", desc: "大家带着打印的简历互相点评修改，开展模拟面试练习并提出建设性反馈。", pax: "全班", time: "2-3 小时", budget: "¥0", rating: 5, tags: ["工具", "零经费"], steps: ["要求每位同学提前认真制作并打印好一份自己的求职简历", "邀请就业办老师或有丰富实习经验的同学作为“面试官”", "前半段：简历互相传阅，挑刺找问题并修改", "后半段：分组进行“无领导小组讨论”或“半结构化面试”的实战模拟", "面试官给予毒舌但建设性的点评"], materials: ["同学各自打印的纸质简历", "面试评分表"] },
    { id: 31, title: "心理健康主题班会", desc: "做压力管理分享，进行放松训练并集中解答匿名提问箱中的真实问题。", pax: "全班", time: "1.5-2 小时", budget: "¥0", rating: 3, tags: ["思政", "零经费"], steps: ["提前一周在班级悄悄放置“匿名提问箱”或发布匿名问卷收集心理困惑", "班会开始，播放舒缓的背景音乐", "心理委员或专业心理老师做压力管理、情绪认知分享", "带领大家做简单的正念冥想或肌肉放松训练", "开箱，真诚且温暖地集中解答大家匿名的心理困惑，让大家放下防备"], materials: ["匿名提问纸箱", "轻松的背景音乐"] },
    { id: 32, title: "安全知识讲座", desc: "邀请专业人士或保卫处老师主讲消防、网络、人身安全防范知识。", pax: "全班", time: "1-1.5 小时", budget: "¥0", rating: 3, tags: ["思政", "零经费"], steps: ["邀请学校保卫处老师或辖区派出所民警作为主讲嘉宾", "班委需要在如何提升“上座率”上花心思（比如考勤打卡或小礼品诱惑）", "嘉宾配合PPT课件，讲解火灾逃生、防范电信诈骗、交通安全等硬核知识", "现场可演示灭火器使用方法", "总结强调生命安全底线"], materials: ["PPT课件", "签到表"] },
    { id: 33, title: "社会实践 + 志愿服务", desc: "以“做中学”替代“听中学”，组织班级一起参与社区调研、环保等实际劳动奉献。", pax: "全班/联合班级", time: "半天-1 天", budget: "¥0", rating: 4, tags: ["思政", "户外", "案例", "零经费"], steps: ["联系愿意接纳大批量志愿者且能对接学校“第二课堂”系统的校外社区组织", "确定志愿服务内容（如：敬老院慰问、社区垃圾分类宣传、公园捡垃圾环保行）", "分发志愿者马甲，强调纪律和安全", "班级集体进行实际劳动奉献", "活动结束后录入志愿时长，并组织撰写实践心得"], materials: ["志愿者红马甲", "劳动工具(如手套、垃圾夹等)"] }
];

// ========== Icons ==========
const iconPeople = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;
const iconMoney = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>`;
const iconTime = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;

document.addEventListener('DOMContentLoaded', () => {
    const listView = document.getElementById('list-view');
    const detailView = document.getElementById('detail-view');
    const listContainer = document.getElementById('activity-list');
    const filterContainer = document.getElementById('filterContainer');
    const searchInput = document.getElementById('searchInput');
    const backBtn = document.getElementById('backBtn');

    const generateStars = (rating) => {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            stars += `<span class="${i <= rating ? 'filled' : ''}">${i <= rating ? '★' : '☆'}</span>`;
        }
        return `<span class="rating">${stars}</span>`;
    };

    const renderList = (data) => {
        listContainer.innerHTML = '';
        document.getElementById('resultCount').textContent = `(共 ${data.length} 个方案)`;
        if (data.length === 0) {
            listContainer.innerHTML = `<div class="empty-state">换个搜索词或标签试试吧 ~</div>`;
            return;
        }

        data.forEach(item => {
            const tagsHtml = item.tags.map(tag => `<span class="tag" data-type="${tag}">${tag}</span>`).join('');
            const article = document.createElement('article');
            article.className = 'activity-item';
            article.onclick = () => { window.location.hash = 'detail-' + item.id; };

            article.innerHTML = `
                <div class="item-details">
                    <h4>${item.title}</h4>
                    <p>${item.desc}</p>
                    <div class="tags">${tagsHtml}</div>
                    <div class="metadata">
                        <span>${iconPeople} ${item.pax}</span>
                        <span>${iconMoney} ${item.budget}</span>
                        <span>${iconTime} ${item.time}</span>
                    </div>
                </div>
            `;
            listContainer.appendChild(article);
        });
    };

    const openDetailView = (id) => {
        const item = activitiesData.find(d => d.id === id);
        if (!item) return;

        document.getElementById('detail-title').textContent = item.title;
        document.getElementById('detail-desc').textContent = item.desc;
        document.getElementById('detail-tags').innerHTML = item.tags.map(tag => `<span class="tag" data-type="${tag}">${tag}</span>`).join('');
        document.getElementById('detail-pax').textContent = item.pax;
        document.getElementById('detail-budget').textContent = item.budget;
        document.getElementById('detail-time').textContent = item.time;
        document.getElementById('detail-rating-stars').innerHTML = generateStars(item.rating);
        document.getElementById('detail-rating-text').textContent = `${item.rating}/5`;

        document.getElementById('detail-steps').innerHTML = item.steps.map((s, i) => `<li><span class="step-number">${i + 1}</span><span>${s}</span></li>`).join('');
        document.getElementById('detail-materials').innerHTML = item.materials.map(m => `<li><div class="checkbox-mock"></div><span>${m}</span></li>`).join('');

        listView.style.display = 'none';
        detailView.style.display = 'block';
        window.scrollTo(0, 0);
    };

    const handleRouting = () => {
        const hash = window.location.hash;
        if (hash.startsWith('#detail-')) {
            const id = parseInt(hash.replace('#detail-', ''));
            openDetailView(id);
        } else {
            detailView.style.display = 'none';
            listView.style.display = 'block';
            window.scrollTo(0, 0);
        }
    };
    window.addEventListener('hashchange', handleRouting);

    backBtn.onclick = () => {
        window.history.back();
        setTimeout(() => {
            if (window.location.hash.startsWith('#detail-')) {
                window.location.hash = '';
            }
        }, 50);
    };

    let currentFilter = '全部';
    let currentSearch = '';
    const updateView = () => {
        let filteredData = activitiesData.filter(item =>
            (currentFilter === '全部' || item.tags.includes(currentFilter)) &&
            (!currentSearch || item.title.toLowerCase().includes(currentSearch) || item.desc.toLowerCase().includes(currentSearch) || item.tags.join('').includes(currentSearch))
        );
        renderList(filteredData);
    };

    filterContainer.addEventListener('click', (e) => {
        if (e.target.matches('.filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.getAttribute('data-filter');
            updateView();
        }
    });

    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim().toLowerCase();
        updateView();
    });

    updateView();
    handleRouting();
});
