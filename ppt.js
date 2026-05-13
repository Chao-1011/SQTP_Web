// ========== PPT Template Data ==========
const templateData = [
    // ===== 浙江大学官方模板 (11) =====
    {
        id: 'official-01', name: '书香浙大风', category: 'official',
        catLabel: '浙大官方', catClass: 'cat-official',
        desc: '以浙大书香文化为主题，融合古典书卷气息与学术氛围，适合文化类、学术类汇报。',
        scenarios: ['学术报告', '文化讲座', '读书分享', '人文社科类课程展示'],
        tags: ['学术', '文化', '书卷气'],
        preview: 'previews/书香浙大风.jpg',
        download: 'PPT/浙江大学官方PPT模板/书香浙大风.pptx'
    },
    {
        id: 'official-02', name: '冬日雪景风', category: 'official',
        catLabel: '浙大官方', catClass: 'cat-official',
        desc: '清新淡雅的冬日雪景主题，纯白与浅蓝配色，适合寒假、年终总结等场景。',
        scenarios: ['年终总结', '寒假实践汇报', '冬季主题活动', '个人年终回顾'],
        tags: ['冬季', '清新', '简约'],
        preview: 'previews/冬日雪景风.jpg',
        download: 'PPT/浙江大学官方PPT模板/冬日雪景风.pptx'
    },
    {
        id: 'official-03', name: '夏日漫画风', category: 'official',
        catLabel: '浙大官方', catClass: 'cat-official',
        desc: '活泼明快的漫画风格，色彩鲜艳，适合暑期实践、社团招新等轻松活泼的展示场景。',
        scenarios: ['暑期社会实践', '社团招新宣讲', '兴趣小组展示', '创意项目路演'],
        tags: ['漫画', '活泼', '暑期'],
        preview: 'previews/夏日漫画风.jpg',
        download: 'PPT/浙江大学官方PPT模板/夏日漫画风.pptx'
    },
    {
        id: 'official-04', name: '春日小清新', category: 'official',
        catLabel: '浙大官方', catClass: 'cat-official',
        desc: '温柔春意配色，花卉与绿植元素点缀，适合春日主题活动、个人展示等温馨场景。',
        scenarios: ['春日团建', '女生节活动', '文艺展示', '茶话会分享'],
        tags: ['春天', '清新', '文艺'],
        preview: 'previews/春日小清新.jpg',
        download: 'PPT/浙江大学官方PPT模板/春日小清新.pptx'
    },
    {
        id: 'official-05', name: '求是传承风', category: 'official',
        catLabel: '浙大官方', catClass: 'cat-official',
        desc: '以浙大校训"求是创新"为精神内核，庄重大气，适合正式场合的重要汇报与演讲。',
        scenarios: ['校级汇报', '开学典礼', '校史展示', '重要学术会议'],
        tags: ['庄重', '校训', '正式'],
        preview: 'previews/求是传承风.jpg',
        download: 'PPT/浙江大学官方PPT模板/求是传承风.pptx'
    },
    {
        id: 'official-06', name: '清晨大西区', category: 'official',
        catLabel: '浙大官方', catClass: 'cat-official',
        desc: '浙大紫金港大西区清晨风光为灵感，温暖朝阳色调，适合校园生活、日常汇报。',
        scenarios: ['校园活动', '日常组会', '课程展示', '生活分享'],
        tags: ['校园', '温暖', '日常'],
        preview: 'previews/清晨大西区.jpg',
        download: 'PPT/浙江大学官方PPT模板/清晨大西区.pptx'
    },
    {
        id: 'official-07', name: '灿若星辰风', category: 'official',
        catLabel: '浙大官方', catClass: 'cat-official',
        desc: '以深蓝夜幕与星辰为主题，致敬浙大"灿若星辰"精神，适合励志演讲与竞赛路演。',
        scenarios: ['竞赛答辩', '励志演讲', '颁奖典礼', '毕业晚会'],
        tags: ['星空', '励志', '大气'],
        preview: 'previews/灿若星辰风.jpg',
        download: 'PPT/浙江大学官方PPT模板/灿若星辰风.pptx'
    },
    {
        id: 'official-08', name: '现代简约风', category: 'official',
        catLabel: '浙大官方', catClass: 'cat-official',
        desc: '极致简约的现代设计风格，黑白灰为主调，适合技术汇报、商业计划书等专业场合。',
        scenarios: ['技术汇报', '商业计划', '项目方案', '数据分析'],
        tags: ['简约', '商务', '现代'],
        preview: 'previews/现代简约风.jpg',
        download: 'PPT/浙江大学官方PPT模板/现代简约风.pptx'
    },
    {
        id: 'official-09', name: '秋日暖阳风', category: 'official',
        catLabel: '浙大官方', catClass: 'cat-official',
        desc: '温暖秋色系配色，枫叶与银杏元素，适合秋季学期开学、社团换届等场合。',
        scenarios: ['秋季开学', '社团换届', '成果展示', '迎新晚会'],
        tags: ['秋天', '温暖', '丰收'],
        preview: 'previews/秋日暖阳风.jpg',
        download: 'PPT/浙江大学官方PPT模板/秋日暖阳风.pptx'
    },
    {
        id: 'official-10', name: '红蓝撞色风', category: 'official',
        catLabel: '浙大官方', catClass: 'cat-official',
        desc: '大胆红蓝配色，视觉冲击力强，适合竞赛路演、创新项目展示等需要吸引眼球的场合。',
        scenarios: ['创新竞赛', '产品发布', '创业路演', '品牌展示'],
        tags: ['撞色', '创新', '视觉'],
        preview: 'previews/红蓝撞色风.jpg',
        download: 'PPT/浙江大学官方PPT模板/红蓝撞色风.pptx'
    },
    {
        id: 'official-11', name: '黑夜科技风', category: 'official',
        catLabel: '浙大官方', catClass: 'cat-official',
        desc: '赛博朋克风格深色科技主题，霓虹光效，适合计算机、工程类技术展示与黑客松路演。',
        scenarios: ['技术分享', '黑客松', '工程展示', '科技竞赛'],
        tags: ['科技', '暗色', '炫酷'],
        preview: 'previews/黑夜科技风.jpg',
        download: 'PPT/浙江大学官方PPT模板/黑夜科技风.pptx'
    },

    // ===== 答辩汇报模板 (7) =====
    {
        id: 'defense-01', name: '答辩模板 1', category: 'defense',
        catLabel: '答辩汇报', catClass: 'cat-defense',
        desc: '经典学术答辩风格，结构清晰，适合毕业论文答辩、开题报告等正式学术场合。',
        scenarios: ['毕业论文答辩', '开题报告', '中期检查', '学术汇报'],
        tags: ['学术', '正式', '经典'],
        preview: 'previews/答辩1.jpg',
        download: 'PPT/zjuPPT模板/【第一期】浙江大学-PPT/答辩1.pptx'
    },
    {
        id: 'defense-02', name: '答辩模板 2', category: 'defense',
        catLabel: '答辩汇报', catClass: 'cat-defense',
        desc: '清新简洁的答辩设计，排版美观，适合科研项目汇报、课程结题等学术展示。',
        scenarios: ['科研汇报', '课程结题', '项目验收', '学术研讨'],
        tags: ['学术', '简洁', '清新'],
        preview: 'previews/答辩2.jpg',
        download: 'PPT/zjuPPT模板/【第一期】浙江大学-PPT/答辩2.pptx'
    },
    {
        id: 'defense-03', name: '答辩模板 3', category: 'defense',
        catLabel: '答辩汇报', catClass: 'cat-defense',
        desc: '专业大气的研究生答辩风格，图表展示空间充足，适合硕士/博士论文答辩。',
        scenarios: ['硕士答辩', '博士答辩', '基金申请', '学术会议'],
        tags: ['研究生', '专业', '大气'],
        preview: 'previews/答辩3.jpg',
        download: 'PPT/zjuPPT模板/【第一期】浙江大学-PPT/答辩3.pptx'
    },
    {
        id: 'defense-04', name: '答辩模板 4', category: 'defense',
        catLabel: '答辩汇报', catClass: 'cat-defense',
        desc: '现代简约答辩设计，数据可视化友好，适合需要大量图表展示的理工科答辩。',
        scenarios: ['理工科答辩', '数据分析报告', '实验汇报', '技术方案'],
        tags: ['数据', '现代', '理工'],
        preview: 'previews/答辩4.jpg',
        download: 'PPT/zjuPPT模板/【第一期】浙江大学-PPT/答辩4.pptx'
    },
    {
        id: 'defense-05', name: '答辩模板 5', category: 'defense',
        catLabel: '答辩汇报', catClass: 'cat-defense',
        desc: '大方得体的答辩模板，通用性强，适合各类本科毕业答辩与课程大作业展示。',
        scenarios: ['本科答辩', '课程作业', '小组汇报', '实习答辩'],
        tags: ['本科', '通用', '得体'],
        preview: 'previews/答辩5.jpg',
        download: 'PPT/zjuPPT模板/【第一期】浙江大学-PPT/答辩5.pptx'
    },
    {
        id: 'defense-06', name: '答辩模板 6', category: 'defense',
        catLabel: '答辩汇报', catClass: 'cat-defense',
        desc: '沉稳内敛的PPT模板（.ppt格式兼容），适合需要兼容旧版Office的正式场合。',
        scenarios: ['兼容性需求', '正式答辩', '传统汇报', '打印场景'],
        tags: ['兼容', '.ppt', '沉稳'],
        preview: 'previews/答辩6.jpg',
        download: 'PPT/zjuPPT模板/【第一期】浙江大学-PPT/答辩6.ppt'
    },
    {
        id: 'defense-07', name: '答辩模板 7', category: 'defense',
        catLabel: '答辩汇报', catClass: 'cat-defense',
        desc: '精致优雅的答辩设计，配色考究，适合人文社科、艺术设计类答辩展示。',
        scenarios: ['文科答辩', '艺术设计', '社科汇报', '创意展示'],
        tags: ['优雅', '人文', '精致'],
        preview: 'previews/答辩7.jpg',
        download: 'PPT/zjuPPT模板/【第一期】浙江大学-PPT/答辩7.pptx'
    },

    // ===== 商务通用模板 (3) =====
    {
        id: 'business-01', name: '商务模板 1', category: 'business',
        catLabel: '商务通用', catClass: 'cat-business',
        desc: '专业商务风格，适合企业路演、商业计划书、融资BP等正式商业场合。',
        scenarios: ['商业路演', '融资BP', '企业汇报', '商务洽谈'],
        tags: ['商务', '专业', '路演'],
        preview: 'previews/商务1.jpg',
        download: 'PPT/zjuPPT模板/【第一期】浙江大学-PPT/商务1.pptx'
    },
    {
        id: 'business-02', name: '商务模板 2', category: 'business',
        catLabel: '商务通用', catClass: 'cat-business',
        desc: '国际化的商务设计语言，适合跨国企业汇报、英文演讲等国际化场景。',
        scenarios: ['英文汇报', '国际会议', '外企面试', '跨国合作'],
        tags: ['国际化', '英文', '大气'],
        preview: 'previews/商务2.jpg',
        download: 'PPT/zjuPPT模板/【第一期】浙江大学-PPT/商务2.pptx'
    },
    {
        id: 'business-03', name: '商务模板 3', category: 'business',
        catLabel: '商务通用', catClass: 'cat-business',
        desc: '创意商务风格，兼顾专业与设计感，适合创业大赛、产品发布会等场合。',
        scenarios: ['创业大赛', '产品发布', '品牌推广', '营销方案'],
        tags: ['创意', '创业', '品牌'],
        preview: 'previews/商务3.jpg',
        download: 'PPT/zjuPPT模板/【第一期】浙江大学-PPT/商务3.pptx'
    },

    // ===== 创意风格模板 (2) =====
    {
        id: 'creative-01', name: '小清新风', category: 'creative',
        catLabel: '创意风格', catClass: 'cat-creative',
        desc: '文艺小清新风格，淡雅配色，适合文艺活动、志愿服务、个人展示等温暖场景。',
        scenarios: ['文艺演出', '志愿活动', '个人展示', '社团文化节'],
        tags: ['文艺', '清新', '温暖'],
        preview: 'previews/小清新.jpg',
        download: 'PPT/zjuPPT模板/【第一期】浙江大学-PPT/小清新.pptx'
    },
    {
        id: 'creative-02', name: '艺术风格', category: 'creative',
        catLabel: '创意风格', catClass: 'cat-creative',
        desc: '大胆艺术风格，色彩丰富，版式自由，适合艺术展览、创意提案、设计分享。',
        scenarios: ['艺术展览', '设计分享', '创意提案', '美育活动'],
        tags: ['艺术', '创意', '色彩'],
        preview: 'previews/艺术.jpg',
        download: 'PPT/zjuPPT模板/【第一期】浙江大学-PPT/艺术.pptx'
    },

    // ===== 校友总会模板 (4) =====
    {
        id: 'alumni-01', name: '桂花模板', category: 'alumni',
        catLabel: '校友总会', catClass: 'cat-alumni',
        desc: '浙大校友总会官方设计，桂花元素点缀，金秋主题，适合校友返校、校友大会等活动。',
        scenarios: ['校友返校日', '校友大会', '校友联谊', '值年返校'],
        tags: ['校友', '桂花', '金秋'],
        preview: 'previews/桂花模板.jpg',
        download: 'PPT/zjuPPT模板/浙大校友总会PPT模板/浙大校友总会PPT模板/浙大校友总会PPT模板/桂花模板.pptx'
    },
    {
        id: 'alumni-02', name: '樱花模板', category: 'alumni',
        catLabel: '校友总会', catClass: 'cat-alumni',
        desc: '粉色樱花主题，温柔浪漫，适合春季校友活动、校庆日、毕业季相关展示。',
        scenarios: ['春季校友活动', '校庆日', '毕业季', '校友聚会'],
        tags: ['樱花', '春天', '浪漫'],
        preview: 'previews/樱花模板.jpg',
        download: 'PPT/zjuPPT模板/浙大校友总会PPT模板/浙大校友总会PPT模板/浙大校友总会PPT模板/樱花模板.pptx'
    },
    {
        id: 'alumni-03', name: '浙大景观模板', category: 'alumni',
        catLabel: '校友总会', catClass: 'cat-alumni',
        desc: '以浙大经典校园景观为背景，展现求是园之美，适合校友宣传、校史展示等。',
        scenarios: ['校友宣传', '校史展示', '校园导览', '招生宣传'],
        tags: ['景观', '校园', '宣传'],
        preview: 'previews/浙大景观模板.jpg',
        download: 'PPT/zjuPPT模板/浙大校友总会PPT模板/浙大校友总会PPT模板/浙大校友总会PPT模板/浙大景观模板.pptx'
    },
    {
        id: 'alumni-04', name: '荷花模板', category: 'alumni',
        catLabel: '校友总会', catClass: 'cat-alumni',
        desc: '夏日荷花主题，典雅清丽，呼应浙大华家池等荷塘景观，适合暑期校友活动。',
        scenarios: ['暑期校友活动', '夏日聚会', '文艺雅集', '校友企业展示'],
        tags: ['荷花', '夏日', '典雅'],
        preview: 'previews/荷花模板.jpg',
        download: 'PPT/zjuPPT模板/浙大校友总会PPT模板/浙大校友总会PPT模板/浙大校友总会PPT模板/荷花模板.pptx'
    },

    // ===== 浙大经典系列 (11) =====
    {
        id: 'classic-01', name: '党政风模板', category: 'classic',
        catLabel: '浙大经典', catClass: 'cat-classic',
        desc: '经典党政风格，红色主调，版式规范，适合党建汇报、思政教育等正式场合。',
        scenarios: ['党建汇报', '思政课堂', '组织生活会', '主题教育'],
        tags: ['党政', '红色', '正式'],
        preview: 'previews/党政风模板.jpg',
        download: 'PPT/PPT模板/PPT模板/党政风模板.pptx'
    },
    {
        id: 'classic-02', name: '创新红模板', category: 'classic',
        catLabel: '浙大经典', catClass: 'cat-classic',
        desc: '创新的红色系设计，既保留正式感又融入现代设计元素，适合各类正式展示。',
        scenarios: ['正式汇报', '党建活动', '思政教育', '主题教育'],
        tags: ['红色', '创新', '正式'],
        preview: 'previews/创新红模板.jpg',
        download: 'PPT/PPT模板/PPT模板/创新红模板.pptx'
    },
    {
        id: 'classic-03', name: '求是蓝模板', category: 'classic',
        catLabel: '浙大经典', catClass: 'cat-classic',
        desc: '浙大标志性求是蓝配色，简约大气，适合日常学术汇报和校园活动展示。',
        scenarios: ['学术汇报', '日常组会', '校园活动', '课程展示'],
        tags: ['求是蓝', '学术', '经典'],
        preview: 'previews/求是蓝模板.jpg',
        download: 'PPT/PPT模板/PPT模板/求是蓝模板.pptx'
    },
    {
        id: 'classic-04', name: '浙大建筑模板 1', category: 'classic',
        catLabel: '浙大经典', catClass: 'cat-classic',
        desc: '以浙大标志性建筑为核心视觉元素，展现校园文化底蕴，适合对外宣传展示。',
        scenarios: ['对外宣传', '校园介绍', '招生宣传', '校庆活动'],
        tags: ['建筑', '校园', '文化'],
        preview: 'previews/浙大建筑PPT模板·1.jpg',
        download: 'PPT/PPT模板/PPT模板/浙大建筑PPT模板·1.pptx'
    },
    {
        id: 'classic-05', name: '浙大建筑模板 2', category: 'classic',
        catLabel: '浙大经典', catClass: 'cat-classic',
        desc: '浙大建筑系列第二款，不同建筑视角与配色方案，同样适合校园主题展示。',
        scenarios: ['校园展示', '校史介绍', '院系宣传', '文化活动'],
        tags: ['建筑', '校园', '文化'],
        preview: 'previews/浙大建筑PPT模板·2.jpg',
        download: 'PPT/PPT模板/PPT模板/浙大建筑PPT模板·2.pptx'
    },
    {
        id: 'classic-06', name: '浙大建筑模板 3', category: 'classic',
        catLabel: '浙大经典', catClass: 'cat-classic',
        desc: '浙大建筑系列第三款，全景式校园建筑展示，适合大型活动开场与宣传。',
        scenarios: ['大型活动', '迎新晚会', '校庆典礼', '校友大会'],
        tags: ['建筑', '全景', '大气'],
        preview: 'previews/浙大建筑PPT模板·3.jpg',
        download: 'PPT/PPT模板/PPT模板/浙大建筑PPT模板·3.pptx'
    },
    {
        id: 'classic-07', name: '浙大建筑模板 5', category: 'classic',
        catLabel: '浙大经典', catClass: 'cat-classic',
        desc: '浙大建筑系列第五款，精致的建筑细节展示，适合高品质校园文化宣传。',
        scenarios: ['校园宣传', '文化展示', '学院介绍', '品质汇报'],
        tags: ['建筑', '精致', '品质'],
        preview: 'previews/浙大建筑PPT模板·5.jpg',
        download: 'PPT/PPT模板/PPT模板/浙大建筑PPT模板·5.pptx'
    },
    {
        id: 'classic-08', name: '浙大基础模板', category: 'classic',
        catLabel: '浙大经典', catClass: 'cat-classic',
        desc: '浙大标准PPT模板，校徽+基础版式，最通用的浙大风格，适合各类日常使用。',
        scenarios: ['日常使用', '通用汇报', '作业展示', '课堂演讲'],
        tags: ['基础', '通用', '标准'],
        preview: 'previews/浙大模板PPT .jpg',
        download: 'PPT/PPT模板/PPT模板/浙大模板PPT .pptx'
    },
    {
        id: 'classic-09', name: '漫画风模板', category: 'classic',
        catLabel: '浙大经典', catClass: 'cat-classic',
        desc: '趣味漫画风格，活泼有趣，适合社团招新、兴趣小组、创意展示等轻松场合。',
        scenarios: ['社团招新', '兴趣小组', '创意展示', '轻松汇报'],
        tags: ['漫画', '活泼', '趣味'],
        preview: 'previews/漫画风模板.jpg',
        download: 'PPT/PPT模板/PPT模板/漫画风模板.pptx'
    },
    {
        id: 'classic-10', name: '秋景模板', category: 'classic',
        catLabel: '浙大经典', catClass: 'cat-classic',
        desc: '浙大秋季校园风光主题，温暖秋色，适合秋季学期各类校内展示活动。',
        scenarios: ['秋季开学', '校园展示', '季节活动', '班级汇报'],
        tags: ['秋景', '校园', '温暖'],
        preview: 'previews/秋景模板.jpg',
        download: 'PPT/PPT模板/PPT模板/秋景模板.pptx'
    },
    {
        id: 'classic-11', name: '科技风模板', category: 'classic',
        catLabel: '浙大经典', catClass: 'cat-classic',
        desc: '深色科技风格，数据线条与电路板元素，适合工科展示、技术竞赛等场合。',
        scenarios: ['工科展示', '技术竞赛', '科研汇报', '数据报告'],
        tags: ['科技', '工科', '数据'],
        preview: 'previews/科技风模板.jpg',
        download: 'PPT/PPT模板/PPT模板/科技风模板.pptx'
    },

    // ===== 其他资源 (1) =====
    {
        id: 'other-01', name: '大英展示模板', category: 'other',
        catLabel: '英语展示', catClass: 'cat-other',
        desc: '大学英语课程展示专用模板，适合英语课堂演讲、英文汇报等英语相关场景。',
        scenarios: ['英语课堂', '英文演讲', '外语展示', '国际交流'],
        tags: ['英语', '课堂', '演讲'],
        preview: 'previews/大英展示模板(1).jpg',
        download: 'PPT/大英展示模板(1).pptx'
    },

    // ===== 压缩包合集 =====
    // 浙大官方PPT模板 (Part 1)
    {
        id: 'pack-official-1', name: '浙大官方模板合集 (上)', category: 'pack',
        catLabel: '压缩包', catClass: 'cat-pack',
        desc: '含：冬日雪景风、秋日暖阳风、求是传承风，共3套浙大官方PPT模板。',
        scenarios: ['一次下载多套', '离线使用', '收藏备份', '社团共享'],
        tags: ['合集', '官方', '季节主题'],
        preview: null,
        download: 'PPT/浙大官方PPT模板_part1.zip'
    },
    // 浙大官方PPT模板 (Part 2)
    {
        id: 'pack-official-2', name: '浙大官方模板合集 (下)', category: 'pack',
        catLabel: '压缩包', catClass: 'cat-pack',
        desc: '含：黑夜科技风、清晨大西区、灿若星辰风、红蓝撞色风、书香浙大风、春日小清新、夏日漫画风、现代简约风，共8套模板。',
        scenarios: ['一次下载多套', '离线使用', '收藏备份', '多场景覆盖'],
        tags: ['合集', '官方', '多样风格'],
        preview: null,
        download: 'PPT/浙大官方PPT模板_part2.zip'
    },
    // zjuPPT模板 (Part 1)
    {
        id: 'pack-zju-1', name: 'zjuPPT模板合集 (一)', category: 'pack',
        catLabel: '压缩包', catClass: 'cat-pack',
        desc: '含：校友总会·樱花模板 + 第二期·答辩3，共2套。',
        scenarios: ['校友活动', '答辩展示', '离线使用'],
        tags: ['合集', '校友', '答辩'],
        preview: null,
        download: 'PPT/zjuPPT模板_part1.zip'
    },
    // zjuPPT模板 (Part 2)
    {
        id: 'pack-zju-2', name: 'zjuPPT模板合集 (二)', category: 'pack',
        catLabel: '压缩包', catClass: 'cat-pack',
        desc: '含：第一期·艺术 + 校友总会·浙大景观 + 第一期·答辩5，共3套。',
        scenarios: ['艺术展示', '校园景观', '答辩展示'],
        tags: ['合集', '艺术', '景观', '答辩'],
        preview: null,
        download: 'PPT/zjuPPT模板_part2.zip'
    },
    // zjuPPT模板 (Part 3)
    {
        id: 'pack-zju-3', name: 'zjuPPT模板合集 (三)', category: 'pack',
        catLabel: '压缩包', catClass: 'cat-pack',
        desc: '含：校友总会·荷花模板、桂花模板 + 第一期·商务3、小清新、商务2，共5套。',
        scenarios: ['商务展示', '校友活动', '小清新风格'],
        tags: ['合集', '校友', '商务', '小清新'],
        preview: null,
        download: 'PPT/zjuPPT模板_part3.zip'
    },
    // zjuPPT模板 (Part 4)
    {
        id: 'pack-zju-4', name: 'zjuPPT模板合集 (四)', category: 'pack',
        catLabel: '压缩包', catClass: 'cat-pack',
        desc: '含：第一期·答辩1/2/3/4/6/7、商务1 + 第二期·答辩1/2/4/5、商务1/2/3、小清新、艺术，共16套。',
        scenarios: ['答辩展示', '商务展示', '一次下载多套'],
        tags: ['合集', '答辩', '商务', '多风格'],
        preview: null,
        download: 'PPT/zjuPPT模板_part4.zip'
    },
    // PPT通用模板 (Part 1)
    {
        id: 'pack-pptmb-1', name: 'PPT通用模板合集 (一)', category: 'pack',
        catLabel: '压缩包', catClass: 'cat-pack',
        desc: '含：浙大建筑PPT模板·3、浙大建筑PPT模板·1、浙大模板PPT，共3套建筑系列模板。',
        scenarios: ['建筑主题', '浙大特色', '正式场合'],
        tags: ['合集', '建筑', '浙大'],
        preview: null,
        download: 'PPT/PPT通用模板_part1.zip'
    },
    // PPT通用模板 (Part 2)
    {
        id: 'pack-pptmb-2', name: 'PPT通用模板合集 (二)', category: 'pack',
        catLabel: '压缩包', catClass: 'cat-pack',
        desc: '含：党政风模板 + 浙大建筑PPT模板·2，共2套。',
        scenarios: ['党政会议', '建筑主题', '正式汇报'],
        tags: ['合集', '党政', '建筑'],
        preview: null,
        download: 'PPT/PPT通用模板_part2.zip'
    },
    // PPT通用模板 (Part 3)
    {
        id: 'pack-pptmb-3', name: 'PPT通用模板合集 (三)', category: 'pack',
        catLabel: '压缩包', catClass: 'cat-pack',
        desc: '含：创新红模板 + 浙大建筑PPT模板·5，共2套。',
        scenarios: ['创新主题', '建筑主题', '正式汇报'],
        tags: ['合集', '创新', '建筑'],
        preview: null,
        download: 'PPT/PPT通用模板_part3.zip'
    },
    // PPT通用模板 (Part 4)
    {
        id: 'pack-pptmb-4', name: 'PPT通用模板合集 (四)', category: 'pack',
        catLabel: '压缩包', catClass: 'cat-pack',
        desc: '含：科技风模板、求是蓝模板、秋景模板，共3套。',
        scenarios: ['科技主题', '求是文化', '秋季主题'],
        tags: ['合集', '科技', '文化', '季节'],
        preview: null,
        download: 'PPT/PPT通用模板_part4.zip'
    },
    // PPT通用模板 (Part 5)
    {
        id: 'pack-pptmb-5', name: 'PPT通用模板合集 (五)', category: 'pack',
        catLabel: '压缩包', catClass: 'cat-pack',
        desc: '含：漫画风模板，1套创意风格模板。',
        scenarios: ['创意展示', '轻松场合', '个性化'],
        tags: ['合集', '漫画', '创意'],
        preview: null,
        download: 'PPT/PPT通用模板_part5.zip'
    },
];

// ========== DOM Elements ==========
const templateGrid = document.getElementById('templateGrid');
const filterTabs = document.getElementById('filterTabs');
const pptSearch = document.getElementById('pptSearch');
const previewModal = document.getElementById('previewModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const resultCount = document.getElementById('resultCount');

let currentFilter = 'all';
let currentSearch = '';

// ========== Render ==========
function renderTemplates() {
    const filtered = templateData.filter(t => {
        const matchFilter = currentFilter === 'all' || t.category === currentFilter;
        const matchSearch = !currentSearch ||
            t.name.includes(currentSearch) ||
            t.desc.includes(currentSearch) ||
            t.scenarios.some(s => s.includes(currentSearch)) ||
            t.tags.some(tag => tag.includes(currentSearch));
        return matchFilter && matchSearch;
    });

    resultCount.textContent = `(共 ${filtered.length} 个模板)`;

    if (filtered.length === 0) {
        templateGrid.innerHTML = `
            <div class="no-results">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <h3>没有找到匹配的模板</h3>
                <p>试试调整搜索关键词或筛选条件</p>
            </div>
        `;
        return;
    }

    templateGrid.innerHTML = filtered.map(t => {
        const previewHTML = t.preview
            ? `<img src="${t.preview}" alt="${t.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
               <div class="card-preview-overlay"><span class="preview-hint">点击预览</span></div>`
            : `<div class="card-preview-placeholder" style="background:${t.gradient || 'linear-gradient(135deg, #475569, #64748B)'}">
                   <span class="placeholder-name">${t.name}</span>
                   <span class="placeholder-sub">${t.catLabel}</span>
               </div>`;

        return `
            <div class="template-card" data-id="${t.id}" data-category="${t.category}">
                <div class="card-preview" data-action="preview" data-id="${t.id}">
                    ${previewHTML}
                </div>
                <div class="card-body">
                    <span class="card-category ${t.catClass}">${t.catLabel}</span>
                    <h3 class="card-name">${t.name}</h3>
                    <p class="card-desc">${t.desc}</p>
                    <div class="card-tags">
                        ${t.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="card-actions">
                        <a href="${t.download}" class="btn-download" ${t.download.endsWith('.zip') ? 'target="_blank" rel="noopener"' : 'download'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:3px"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            下载
                        </a>
                        <button class="btn-preview" data-action="preview" data-id="${t.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:3px"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            预览
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ========== Filter ==========
filterTabs.addEventListener('click', (e) => {
    if (!e.target.matches('.filter-tab')) return;
    filterTabs.querySelectorAll('.filter-tab').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.filter;
    renderTemplates();
});

// ========== Search ==========
pptSearch.addEventListener('input', (e) => {
    currentSearch = e.target.value.trim();
    renderTemplates();
});

// ========== Preview Modal ==========
templateGrid.addEventListener('click', (e) => {
    const previewBtn = e.target.closest('[data-action="preview"]');
    if (!previewBtn) return;

    const id = previewBtn.dataset.id;
    const t = templateData.find(tpl => tpl.id === id);
    if (!t) return;

    const previewImgHTML = t.preview
        ? `<img src="${t.preview}" alt="${t.name}" onerror="this.style.display='none'">`
        : `<div class="card-preview-placeholder" style="background:${t.gradient || '#475569'};height:300px;border-radius:12px;margin-bottom:1.25rem">
               <span class="placeholder-name" style="font-size:1.8rem">${t.name}</span>
               <span class="placeholder-sub">${t.catLabel}</span>
           </div>`;

    modalBody.innerHTML = `
        ${previewImgHTML}
        <h3 class="modal-title">${t.name}</h3>
        <span class="modal-category ${t.catClass}">${t.catLabel}</span>
        <p class="modal-desc">${t.desc}</p>
        <div class="modal-scenarios">
            <h4>适用场景</h4>
            <ul>${t.scenarios.map(s => `<li>${s}</li>`).join('')}</ul>
        </div>
        <div style="margin-bottom:1.5rem">
            <h4 style="font-size:0.9rem;font-weight:600;margin-bottom:0.5rem">标签</h4>
            <div class="card-tags">${t.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}</div>
        </div>
        <a href="${t.download}" class="btn-download-large" ${t.download.endsWith('.zip') ? 'target="_blank" rel="noopener"' : 'download'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            下载此模板
        </a>
    `;

    previewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

function closeModal() {
    previewModal.classList.remove('active');
    document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeModal);
previewModal.addEventListener('click', (e) => { if (e.target === previewModal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ========== Initial Render ==========
renderTemplates();
