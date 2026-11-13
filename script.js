/**
 * Phantom Blade Zero (팬텀 블레이드 제로) - Interactive Controller & i18n
 * Tailored for Academic Presentation to Korean University Professors
 */

// ==========================================================================
// 1. Multilingual Dictionary (Korean - English - Chinese)
// ==========================================================================
const translations = {
  ko: {
    nav_overview: "작품 개요",
    nav_aesthetics: "무협 펑크 미학",
    nav_combat: "액션 & 안무",
    nav_narrative: "서사 & 철학",
    nav_comparison: "한·중 콘솔 비교",
    nav_academic: "학술 토론",
    btn_presentation: "발표 모드",
    hero_badge: "동아시아 차세대 게임 문화 연구 보고",
    hero_sub: "동양 무협의 정수와 다크 펑크의 결합",
    hero_desc: "예일대 건축학 출신 디렉터 양기량(Soulframe Liang)과 홍콩 무술의 거장 켄지 타니가키가 빚어낸 독창적 액션 RPG. 언리얼 엔진 5(UE5) 기술과 동양적 죽음관(66일의 유예)이 교차하는 '쿵푸펑크(Kungfupunk)'의 신기원.",
    meta_developer: "개발사",
    meta_genre: "장르",
    val_genre: "무협 다크 판타지 액션 RPG",
    meta_platform: "플랫폼",
    meta_engine: "게임 엔진",
    btn_explore: "상세 분석 읽기",
    btn_watch_trailer: "게임플레이 영상 보기",
    unit_days: "일",
    stat_heart: "주인공 심장 유예 기한",
    stat_speed: "초고속 프레임 쿵푸 콤보",
    unit_years: "년",
    stat_legacy: "인디 '우혈(雨血)'에서 AAA로의 여정",
    stat_tech: "Lumen & Nanite 차세대 그래픽",
    letter_badge: "교수님을 위한 연구 브리핑",
    letter_title: "왜 지금 '팬텀 블레이드 제로'를 주목해야 하는가?",
    letter_quote: "“최근 동아시아 콘솔 게임 시장은 한국의 《P의 거짓(Lies of P)》, 《스텔라 블레이드(Stellar Blade)》와 중국의 《검은 신화: 오공(Black Myth: Wukong)》에 이어 전례 없는 문화적·기술적 도약을 이뤄내고 있습니다. 그 정점에 서 있는 차기 기대작이 바로 《팬텀 블레이드 제로》입니다.”",
    col1_title: "1. 장르의 재창조: '쿵푸펑크'",
    col1_desc: "기존의 전통 무협(Wuxia)이 지닌 보수적 규범을 탈피하여, 스팀펑크 기계장치와 오컬트 괴기, 다크 판타지를 접목한 완전히 새로운 미학적 카테고리를 구축했습니다.",
    col2_title: "2. 무술 영화 문법의 디지털 복원",
    col2_desc: "견자단 무술팀 출신이자 《바람의 검심》 실사영화 무술감독인 켄지 타니가키가 실사 모션캡처를 총괄하여, 단순한 프레임 캔슬 액션을 넘어선 홍콩 황금기 무술 영화의 리듬감을 구현했습니다.",
    col3_title: "3. 건축학적 공간과 서사의 융합",
    col3_desc: "예일대 건축석사 출신의 디렉터 양기량의 전문성이 투영되어, 폐쇄적이면서도 유기적인 동양식 다층 구조 맵 디자인과 66일이라는 유한한 실존적 카운트다운 서사가 결합되었습니다.",
    pillars_subtitle: "CORE PILLARS",
    pillars_title: "팬텀 블레이드 제로를 정의하는 4대 기둥",
    p1_head: "쿵푸펑크 (Kungfupunk) 미학",
    p1_sub: "동양의 수묵화적 음산함과 기계공학적 기괴함의 융합",
    p1_item1: "비(雨)와 안개, 피: 2008년 인디 원작 《우혈(雨血)》부터 이어져 온 잿빛 수묵 톤과 핏빛의 강렬한 대비.",
    p1_item2: "기계 의수와 도교 오컬트: 증기 기관, 톱니바퀴 동력과 부적, 좀비형 개조인간이 뒤섞인 비틀린 강호(江湖) 세계관.",
    p1_item3: "탈인간화된 신체: 인체 개조와 기계적 장기가 보편화된 디스토피아적 무림 사회 묘사.",
    p2_head: "정통 무술 안무 & 극속(極速) 전투",
    p2_sub: "소울라이크의 답답함을 깬 쾌감 넘치는 60FPS 쿵푸 액션",
    p2_item1: "켄지 타니가키(谷垣健治)의 모션 디렉팅: 실제 무술 유단자들의 대인 공방을 물리적으로 캡처하여 공격과 방어가 쉼 없이 얽히는 합(合) 구현.",
    p2_item2: "이원화된 무기 시스템: 주무기(쌍검, 태도)와 '팬텀 무기'(사자포, 화염 기관총, 도끼)의 매끄러운 콤보 연계.",
    p2_item3: "고성능 패링과 고스트 스텝: 타이밍 패링 및 회피 후 즉각적인 반격(초살) 메커니즘 제공.",
    p3_head: "예일대 건축학의 공간 철학",
    p3_sub: "디렉터 양기량(Soulframe)의 독특한 이력이 낳은 레벨 디자인",
    p3_item1: "수직적 입체 구조: 평면적 오픈월드가 아닌 밀도 높은 반(半)오픈월드 샌드박스로, 절벽, 비밀 지하도, 목조 성곽이 입체적으로 연결.",
    p3_item2: "동양 목구조의 해체: 정교한 당나라·송나라식 공포(拱包) 건축물이 부패하고 기계화된 잔혹한 환경 조성.",
    p3_item3: "시각적 프레이밍: 문과 창, 누각의 프레임을 통해 시네마틱한 구도를 게임플레이 내내 자연스럽게 유도.",
    p4_head: "UE5 기술적 도약과 몰입감",
    p4_sub: "차세대 콘솔의 한계를 시험하는 나나이트와 루멘 조명",
    p4_item1: "실시간 유체 및 천 물리: 비에 젖은 도포 자락, 피가 튀는 질감, 빗방울이 칼날에 튀는 미세한 디테일 구현.",
    p4_item2: "반사광과 흑백 모노톤의 대조: 루멘(Lumen) 글로벌 일루미네이션을 활용한 음영의 극적 연출.",
    p4_item3: "PS5 듀얼센스 햅틱 최적화: 칼날의 충돌과 무기의 무게감을 손끝으로 전달하는 촉각적 피드백 설계.",
    combat_subtitle: "COMBAT SYSTEM DEEP-DIVE",
    combat_title: "액션 메커니즘과 무기 체계 심층 분석",
    combat_desc: "소울라이크의 무거운 리듬과 캐릭터 액션(데빌 메이 크라이, 닌자 가이덴)의 민첩함을 융합한 독창적 전투 구조",
    w_tab1: "비천 쌍도 (Dual Blades)",
    w_tab2: "단도 & 흑검 (Heavy Blade)",
    w_tab3: "호효 사자포 (Tiger Cannon)",
    w_tab4: "팬텀 암 & 도끼 (Phantom Axe)",
    w1_type: "주무기 / 고속 연타형",
    w1_name: "쌍도: 유영(遊影)과 쾌도(快刀)",
    w1_desc: "홍콩 정통 무술의 쌍검술을 기반으로 한 초근접 무기입니다. 적의 공격 궤적 사이를 파고들며 쉴 새 없이 기세를 꺾고, 빈틈이 생겼을 때 전광석화 같은 난타를 가합니다.",
    stat_atk_speed: "공격 속도",
    stat_parry_window: "패링 민감도",
    stat_stagger: "그로기 유발",
    w1_kenji: "켄지 타니가키 코멘트: '쌍검의 칼날이 서로 맞부딪히며 내는 금속성 리듬은 영화 《살파랑》과 《도화선》에서 구현하고자 했던 궁극의 대련 감각을 재현합니다.'",
    w2_type: "주무기 / 방어 & 일격 필살",
    w2_name: "흑검: 묵살(墨殺)의 궤적",
    w2_desc: "묵직한 베기 동작과 정확한 카운터 어택에 특화된 장검입니다. 적의 맹공을 흘려보내며 순간적으로 가해지는 횡베기는 적의 방어를 단숨에 붕괴시키며 화면 전체에 먹물이 번지는 시각 효과를 동반합니다.",
    w2_kenji: "액션 철학: 낭비 없는 단 일격의 정적(靜)과 폭발(動)의 극적 대비.",
    w3_type: "팬텀 보조무기 / 범위 파괴",
    w3_name: "호효 사자포: 스팀펑크 화약 병기",
    w3_desc: "기계식 사자 머리 형상의 손대포로, 압축 화약과 화염을 순간 방출합니다. 검술 콤보 사이에 캔슬기로 삽입되어 다수의 적을 밀어내거나 거대 보스의 슈퍼아머를 순간 차단하는 데 결정적인 역할을 수행합니다.",
    stat_aoe: "범위 피해",
    stat_cooldown: "충전 주기",
    stat_combo_flex: "콤보 캔슬력",
    w3_kenji: "스팀펑크 요소: 전통 무협에 기계공학 화기가 유기적으로 결합된 쿵푸펑크의 정체성.",
    w4_type: "팬텀 보조무기 / 변형 근력 무기",
    w4_name: "기계 개조 의수 & 도끼",
    w4_desc: "신체 개조를 통해 장착된 기계 의수에서 사슬과 도끼가 전개됩니다. 공중에 뜬 적을 지상으로 내리꽂거나 원거리의 적을 끌어당겨 연속 참격으로 이어지는 다채로운 입체 기동을 가능하게 합니다.",
    stat_crowd_control: "군중 제어",
    stat_reach: "공격 사거리",
    stat_air_combo: "공중 콤보 연계",
    w4_kenji: "인체 개조의 비극성: 육신을 기계로 대체한 자들의 잔혹한 살상 메커니즘.",
    m1_title: "Ghost Step (귀보 / 鬼步)",
    m1_desc: "적의 연타 사이를 종이 한 장 차이로 미끄러져 들어가는 정밀 회피. 잔상이 남으며 적의 후방을 점유하여 역공의 기회를 창출합니다.",
    m2_title: "Dual-Path Combo System",
    m2_desc: "초보자는 리듬감 있는 버튼 입력만으로도 화려한 연계 공격을 시전할 수 있으며, 숙련자는 방향키와 캔슬 타이밍을 통해 수십 가지 자유 파생기를 설계 가능합니다.",
    m3_title: "Sha (煞) 기세 차단과 피니셔",
    m3_desc: "소울라이크의 스태미나 고갈 개념과 달리, 공방의 주도권을 빼앗는 '기세(氣勢)' 시스템. 적의 칼날을 받아칠수록 화면이 슬로우모션으로 진입하며 시네마틱 처형기로 전개됩니다.",
    narrative_subtitle: "NARRATIVE & PHILOSOPHY",
    narrative_title: "서사적 비극성과 66일의 실존적 시간관",
    ph_title: "문화철학적 고찰: 동양적 무상(無常)과 실존주의",
    comp_subtitle: "ACADEMIC COMPARISON",
    comp_title: "동아시아 콘솔 대작 비교 연구",
    comp_desc: "한국과 중국이 글로벌 콘솔 무대에서 주도하는 차세대 액션 게임의 미학 및 문법 분석",
    th_metric: "비교 항목",
    row_genre: "장르 지향",
    row_combat_tempo: "전투 템포 & 공방",
    row_aesthetic: "미학적 뿌리",
    row_action_director: "액션 총괄",
    row_world: "레벨 디자인",
    row_implication: "산업적 함의",
    insight_title: "교수님과의 토론 포인트 : 동아시아 문화원형의 현대적 디지털 번역",
    insight_desc: "과거 서구 및 일본 개발사가 독점하던 글로벌 AAA 시장에서, 한국은 서구 고전의 완벽한 기술적 체화(《P의 거짓》)와 감각적 SF 액션(《스텔라 블레이드》)으로 돌파구를 찾았습니다. 반면 중국의 《팬텀 블레이드 제로》는 자국의 '무협'이라는 고유 서사를 그대로 복제하지 않고, 스팀펑크 및 사이버네틱스와 결합하여 '동양 하위문화의 글로벌 보편화'를 시도하고 있다는 점에서 비교 미학적 가치가 매우 높습니다.",
    studio_subtitle: "DEVELOPER & CREATIVE MINDS",
    studio_title: "개발사 S-GAME과 핵심 크리에이터",
    timeline_title: "S-GAME 16년의 서사적 진화: 1인 인디에서 글로벌 콘솔 AAA로",
    acad_subtitle: "DISCUSSION TOPICS",
    acad_title: "교수님과 함께 나누고 싶은 4가지 학술 담론",
    acad_desc: "게임학, 문화콘텐츠학, 미디어 미학 세미나 또는 연구 프로젝트 주제로의 제안",
    media_subtitle: "TRAILER & SHOWCASE",
    media_title: "공식 게임플레이 영상 및 시각 자료",
    gallery_item1: "폭우 속의 보스전 연출",
    gallery_item2: "쿵푸펑크 기계 병기",
    gallery_item3: "고건축 해체주의 레벨 디자인",
    footer_desc: "본 웹페이지는 한국의 대학교수 및 연구자를 대상으로 《팬텀 블레이드 제로》의 게임 디자인, 문화 미학, 기술적 성취 및 동아시아 게임 산업적 위상을 체계적으로 소개하기 위해 제작된 학술 분석 브리핑 페이지입니다.",
    footer_links: "바로가기",
    footer_sources: "공식 출처 & 연구 레퍼런스"
  },
  en: {
    nav_overview: "Overview",
    nav_aesthetics: "Kungfupunk Aesthetics",
    nav_combat: "Action & Combat",
    nav_narrative: "Narrative & Philosophy",
    nav_comparison: "KR-CN Console Study",
    nav_academic: "Academic Topics",
    btn_presentation: "Slide Mode",
    hero_badge: "East Asian Next-Gen Gaming Academic Briefing",
    hero_sub: "A Marriage of Traditional Wuxia & Dark Cyber-Steampunk",
    hero_desc: "Directed by Soulframe Liang (Yale Architecture alumnus) with action choreography by legendary Hong Kong martial arts director Kenji Tanigaki. A breakthrough ARPG forged in Unreal Engine 5 that redefines 'Kungfupunk' through existential mortality.",
    meta_developer: "Developer",
    meta_genre: "Genre",
    val_genre: "Wuxia Dark Fantasy Action RPG",
    meta_platform: "Platforms",
    meta_engine: "Game Engine",
    btn_explore: "Read Analysis",
    btn_watch_trailer: "Watch Gameplay Trailer",
    unit_days: "Days",
    stat_heart: "Protagonist Heart Countdown",
    stat_speed: "Ultra-fast 60FPS Kung Fu Combos",
    unit_years: "Years",
    stat_legacy: "Indie 'Rainblood' to Global AAA",
    stat_tech: "Lumen & Nanite Next-Gen Tech",
    letter_badge: "Academic Research Briefing",
    letter_title: "Why Examine 'Phantom Blade Zero' Today?",
    letter_quote: "“Following Korea's 《Lies of P》 and 《Stellar Blade》, and China's 《Black Myth: Wukong》, East Asian console gaming is witnessing an unprecedented renaissance. 《Phantom Blade Zero》 stands at the vanguard of this new wave.”",
    col1_title: "1. Genre Reinvention: 'Kungfupunk'",
    col1_desc: "Transcending traditional wuxia orthodoxy by fusing Chinese martial arts with steampunk machinery, occult necromancy, and dark fantasy.",
    col2_title: "2. Digitizing Hong Kong Martial Arts",
    col2_desc: "Action choreographed by Kenji Tanigaki (Donnie Yen's stunt team, Rurouni Kenshin movies), translating authentic physical duels into fluid 60FPS gameplay.",
    col3_title: "3. Spatial Architecture & Narrative",
    col3_desc: "Crafted by an architect-turned-game director, combining intricate multi-layered oriental spaces with an existential 66-day mortality countdown.",
    pillars_subtitle: "CORE PILLARS",
    pillars_title: "Four Pillars Defining Phantom Blade Zero",
    p1_head: "Kungfupunk Aesthetic",
    p1_sub: "The convergence of ink-wash gloom and mechanical grotesque",
    p1_item1: "Rain, Mist, and Blood: Inheriting the bleak ink and blood aesthetics from the 2008 indie origin 'Rainblood'.",
    p1_item2: "Mechanical Limbs & Daoist Occult: A distorted Jianghu filled with clockwork machinery, steam engines, and talismans.",
    p1_item3: "Dehumanized Flesh: A dystopian martial society permeated by biomechanical body modification.",
    p2_head: "Authentic Choreography & Ultra-Fast Combat",
    p2_sub: "Dynamic 60FPS kung fu breaking away from souls-like sluggishness",
    p2_item1: "Kenji Tanigaki's Action Direction: Real martial artists motion-captured to simulate the intense push-and-pull exchanges of cinema.",
    p2_item2: "Dual Weapon System: Seamless combo chaining between primary swords and phantom secondary arms (cannons, axes).",
    p2_item3: "Precision Parries & Ghost Step: Frame-perfect evasions paired with instantaneous fatal counter-attacks.",
    p3_head: "Yale Architectural Spatial Philosophy",
    p3_sub: "Level design informed by Soulframe Liang's architectural discipline",
    p3_item1: "Vertical Interconnectedness: A dense semi-open sandbox rather than an empty open plain, linking cliffs, catacombs, and wooden fortresses.",
    p3_item2: "Deconstruction of Ancient Timber: Splendid Tang/Song dynasty architectural joints decayed and mechanized.",
    p3_item3: "Cinematic Framing: Utilizing windows, moon gates, and corridors to intuitively compose player camera views.",
    p4_head: "UE5 Technological Breakthrough",
    p4_sub: "Pushing next-gen console limits with Nanite and Lumen",
    p4_item1: "Real-time Fluid & Cloth Physics: Rain-soaked silk robes, visceral blood splatter, and water repelled by steel blades.",
    p4_item2: "Lumen Lighting Contrast: Dynamic illumination emphasizing deep ink shadows and gleaming metallic reflections.",
    p4_item3: "PS5 DualSense Haptics: Tactile feedback mapping blade-on-blade resistance directly into player palms.",
    combat_subtitle: "COMBAT SYSTEM DEEP-DIVE",
    combat_title: "Combat Mechanics & Arsenal In-Depth",
    combat_desc: "Melding the deliberateness of Souls with the agile exhilaration of character action classics (DMC, Ninja Gaiden)",
    w_tab1: "Dual Blades (쌍도)",
    w_tab2: "Heavy Blade (흑검)",
    w_tab3: "Tiger Cannon (호효 사자포)",
    w_tab4: "Phantom Axe (기계 도끼)",
    w1_type: "Primary / High-Speed Flurry",
    w1_name: "Dual Blades: Fleeting Shadow",
    w1_desc: "Rooted in traditional dual-sabre techniques. Dances through incoming enemy strike trajectories to break posture before unleashing blinding multi-hit combos.",
    stat_atk_speed: "Attack Speed",
    stat_parry_window: "Parry Window",
    stat_stagger: "Stagger Power",
    w1_kenji: "Kenji Tanigaki Note: 'The metallic cadence of clashing twin blades captures the authentic dueling adrenaline we strived for in films like SPL and Flash Point.'",
    w2_type: "Primary / Defense & Heavy Blows",
    w2_name: "Heavy Blade: Ink Cleave",
    w2_desc: "A weighty blade engineered for disciplined counters. Sweeping blows shatter enemy guards, splattering dark ink across the screen.",
    w2_kenji: "Combat Philosophy: Extreme contrast between poised stillness and explosive dynamic execution.",
    w3_type: "Phantom Weapon / Area Burst",
    w3_name: "Tiger Cannon: Clockwork Firearm",
    w3_desc: "A mechanical lion-headed arm cannon unleashing compressed gunpowder flames. Can cancel sword combos to disperse mobs or disrupt boss super-armor.",
    stat_aoe: "AoE Impact",
    stat_cooldown: "Charge Cycle",
    stat_combo_flex: "Combo Flexibility",
    w3_kenji: "Steampunk Soul: The quintessential mark of Kungfupunk, marrying ancient wuxia with industrial ballistics.",
    w4_type: "Phantom Weapon / Heavy Displacement",
    w4_name: "Bionic Arm & Crescent Axe",
    w4_desc: "A prosthetic arm deploying chains and heavy axes. Slams airborne targets down to earth or pulls distant foes into brutal ground juggles.",
    stat_crowd_control: "Crowd Control",
    stat_reach: "Reach Range",
    stat_air_combo: "Aerial Combo",
    w4_kenji: "Tragedy of Modification: The ruthless lethality of warriors who sacrificed their mortal flesh.",
    m1_title: "Ghost Step (귀보 / 鬼步)",
    m1_desc: "Razor-thin evasive step slipping past relentless barrages, leaving phantom silhouettes while claiming the enemy's blind flank.",
    m2_title: "Dual-Path Combo System",
    m2_desc: "Accessible rhythmic button presses for casual fluidity, paired with deep directional and cancel branches for master tacticians.",
    m3_title: "Sha (煞) Posture & Finishers",
    m3_desc: "Unlike passive stamina meters, the 'Sha' momentum gauge rewards proactive blade parries, transitioning into slow-motion cinematic executions.",
    narrative_subtitle: "NARRATIVE & PHILOSOPHY",
    narrative_title: "Existential Tragedy & The 66-Day Countdown",
    ph_title: "Cultural Philosophy: Impermanence & Existentialism",
    comp_subtitle: "ACADEMIC COMPARISON",
    comp_title: "East Asian Console Game Comparative Study",
    comp_desc: "Analyzing how Korean and Chinese developers pioneer next-gen action grammar on the global stage",
    th_metric: "Criterion",
    row_genre: "Genre Focus",
    row_combat_tempo: "Combat Tempo",
    row_aesthetic: "Aesthetic Roots",
    row_action_director: "Action Direction",
    row_world: "Level Architecture",
    row_implication: "Industry Significance",
    insight_title: "Discussion Note: Modern Digital Translation of Cultural Archetypes",
    insight_desc: "While Korean developers excelled in mastering Western gothic traditions (《Lies of P》) and slick sci-fi action (《Stellar Blade》), China's 《Phantom Blade Zero》 reconstructs indigenous Wuxia with Steampunk and Cybernetics to pioneer 'Global Asian Subculture Translation'.",
    studio_subtitle: "DEVELOPER & CREATIVE MINDS",
    studio_title: "Studio S-GAME & Key Creators",
    timeline_title: "S-GAME's 16-Year Evolution: From Solo Indie to Global Console AAA",
    acad_subtitle: "DISCUSSION TOPICS",
    acad_title: "Four Academic Discussion Prompts for the Professor",
    acad_desc: "Proposed topics for game studies, media philosophy, and East Asian cultural seminars",
    media_subtitle: "TRAILER & SHOWCASE",
    media_title: "Official Gameplay Video & Visual Showcase",
    gallery_item1: "Rainblood Boss Duel",
    gallery_item2: "Kungfupunk Mechanical Arsenal",
    gallery_item3: "Deconstructed Architectural Levels",
    footer_desc: "This academic briefing page is curated to introduce South Korean professors and researchers to Phantom Blade Zero's game design, cultural aesthetics, and East Asian industrial significance.",
    footer_links: "Quick Navigation",
    footer_sources: "Official Sources & References"
  },
  zh: {
    nav_overview: "作品概述",
    nav_aesthetics: "武侠朋克美学",
    nav_combat: "动作与武指",
    nav_narrative: "叙事与哲学",
    nav_comparison: "中韩主机对比",
    nav_academic: "学术议题",
    btn_presentation: "演示模式",
    hero_badge: "东亚次世代游戏文化与产业研究报告",
    hero_sub: "东方传统武侠精髓与黑暗朋克的交融",
    hero_desc: "由耶鲁大学建筑学硕士梁其伟（Soulframe Liang）与香港传奇武术指导谷垣健治联手打造的原创动作RPG。依托虚幻5（UE5）前沿技术与东方生死哲学（66天生命倒计时），开拓‘武侠朋克（Kungfupunk）’全新视界。",
    meta_developer: "开发团队",
    meta_genre: "游戏类型",
    val_genre: "武侠黑暗奇幻动作RPG",
    meta_platform: "平台",
    meta_engine: "游戏引擎",
    btn_explore: "阅读深入分析",
    btn_watch_trailer: "观看实机演示",
    unit_days: "天",
    stat_heart: "主角心脏生命倒计时",
    stat_speed: "60帧超高速真实功夫连招",
    unit_years: "年",
    stat_legacy: "从独立《雨血》到全球AAA之路",
    stat_tech: "虚幻5 Lumen与Nanite黑科技",
    letter_badge: "致教授的研究简报",
    letter_title: "为什么在当下值得关注《影之刃零》？",
    letter_quote: "“继韩国的《匹诺曹的谎言（Lies of P）》、《星刃（Stellar Blade）》以及中国的《黑神话：悟空（Black Myth: Wukong）》之后，东亚主机游戏正迎来前所未有的文化自信与工业化爆发。《影之刃零》正是这场浪潮中最具代表性的标杆之作。”",
    col1_title: "1. 类型的重塑：'武侠朋克'",
    col1_desc: "打破传统武侠保守教条，将中国传统武术与蒸汽朋克机巧、克苏鲁怪诞及黑暗奇幻深度融合，开辟出独树一帜的美学品类。",
    col2_title: "2. 香港黄金武打片语法的数字复兴",
    col2_desc: "甄家班核心、电影《浪客剑心》武术指导谷垣健治亲执动捕，摆脱僵硬的取消帧动作，精准还原真实肉搏中的拆招见招与攻防节律。",
    col3_title: "3. 建筑学空间与存在主义叙事",
    col3_desc: "总监梁其伟耶鲁建筑学背景赋能，立体解构的东方榫卯楼阁箱庭与‘66天必死’的悲剧倒计时形成强烈张力。",
    pillars_subtitle: "CORE PILLARS",
    pillars_title: "定义《影之刃零》的四大核心支柱",
    p1_head: "武侠朋克 (Kungfupunk) 美学",
    p1_sub: "水墨肃杀氛围与机械异化人体的碰撞",
    p1_item1: "雨、雾与血：承袭自2008年独立原作《雨血》的水墨灰暗基调与鲜血反差。",
    p1_item2: "机械义肢与道家诡术：蒸汽动力、精密齿轮与符咒、改造型傀儡构筑的崩坏江湖。",
    p1_item3: "异化的人体：机械器官改造泛滥所映射出的反乌托邦武林社会。",
    p2_head: "正统功夫武指与极速战斗",
    p2_sub: "打破魂系沉重回圈的高爽度60帧功夫连段",
    p2_item1: "谷垣健治实战动捕：专业武师实战对抗录制，真正实现刀剑交错、攻守互搏的武打‘见招拆招’。",
    p2_item2: "双轨武器体系：主武器（双刀、长刀）与影境副武器（狮吼炮、机关斧）行云流水的组合连招。",
    p2_item3: "精准化解与鬼步：毫厘之间的瞬时闪避与致命绝杀反击机制。",
    p3_head: "耶鲁建筑学的空间结构哲学",
    p3_sub: "建筑师跨界游戏总监带来的立体关卡设计",
    p3_item1: "垂直多层箱庭：拒绝空洞开放世界，以高密度半开放三维空间串联绝壁、密道与木构要塞。",
    p3_item2: "唐宋木构建筑的解构：庄严斗拱与机械工业残骸的交织，制造出强烈的戏剧荒诞感。",
    p3_item3: "视线引导与画框构图：借助门窗、廊道形成天然电影机位取景。",
    p4_head: "虚幻5引擎的视听与沉浸跃迁",
    p4_sub: "依托Lumen全局光照与Nanite几何体的次世代规格",
    p4_item1: "实时流体与布料解算：雨打斗篷、鲜血飞溅与刀剑破风的细腻物理表现。",
    p4_item2: "高反差黑白明暗调校：Lumen光照构建出充满写意水墨感的戏剧化阴影。",
    p4_item3: "PS5 DualSense触觉反馈：将刃与刃的金铁交击与武器分量精准传达至掌心。",
    combat_subtitle: "COMBAT SYSTEM DEEP-DIVE",
    combat_title: "战斗机制与武器兵戈深度解析",
    combat_desc: "融合魂系博弈的严谨与传统动作清版（鬼泣、忍龙）的高速敏捷",
    w_tab1: "飞天双刀 (Dual Blades)",
    w_tab2: "重剑与单刀 (Heavy Blade)",
    w_tab3: "虎啸狮子炮 (Tiger Cannon)",
    w_tab4: "机械义肢斧 (Phantom Axe)",
    w1_type: "主武器 / 高速连击型",
    w1_name: "双刀：游影与快刀",
    w1_desc: "脱胎于正统南派双刀与香港近身搏击技。在敌方攻势的间隙穿插撕裂，打崩韧性后施展雷霆般的连续斩切。",
    stat_atk_speed: "攻击速度",
    stat_parry_window: "格挡窗口",
    stat_stagger: "破防能力",
    w1_kenji: "谷垣健治手记：“双刀互碰的金石之音，正是我们在《导火线》《杀破狼》中追求的至高搏击快感在虚拟世界的再现。”",
    w2_type: "主武器 / 防御反击与重斩",
    w2_name: "黑剑：墨杀之锋",
    w2_desc: "专注于精准弹反与蓄力斩击的大剑。化解敌方刚猛攻势后，一记横斩如浓墨挥毫，瞬间瓦解敌人架势。",
    w2_kenji: "动作哲学：一击必杀的沉静与极速爆发的剧烈对比。",
    w3_type: "影境副手武器 / 范围爆发",
    w3_name: "虎啸狮子炮：蒸汽火药兵器",
    w3_desc: "机械醒狮造型的腕装手炮，瞬间喷射烈焰与高爆弹片。可穿插在剑招中打断强力Boss霸体或控场。",
    stat_aoe: "范围杀伤",
    stat_cooldown: "充能周期",
    stat_combo_flex: "连招取消度",
    w3_kenji: "朋克精髓：中国传统舞狮符号与蒸汽机械工业火器的绝妙混血。",
    w4_type: "影境副手武器 / 位移抓取",
    w4_name: "机关义肢与重锁斧",
    w4_desc: "由机械义手延伸出的铁链重斧。可将空中敌人砸击入地，或将远程敌卒强行拉扯至身前进行地面连续处决。",
    stat_crowd_control: "群体控制",
    stat_reach: "攻击射程",
    stat_air_combo: "浮空连段",
    w4_kenji: "异化的代价：以血肉残缺为代价换取的纯粹杀戮机器。",
    m1_title: "Ghost Step (鬼步)",
    m1_desc: "毫厘之间错身避开敌人乱刃，留下残影并在瞬间位移至敌方盲区发起背刺。",
    m2_title: "双轨连招输入体系",
    m2_desc: "轻度玩家通过节律单键即可打出武侠电影级流畅套路；硬核玩家可通过方向微操与取消帧自由编织几十种变招。",
    m3_title: "煞气博弈与电影处决",
    m3_desc: "摒弃消极精力条，引入主动压制的‘煞气’对峙。刀剑相交越多，画面越易进入极具冲击力的子弹时间与处决动画。",
    narrative_subtitle: "NARRATIVE & PHILOSOPHY",
    narrative_title: "悲剧宿命论与66天的存在主义时间观",
    ph_title: "文化哲学思考：东方无常观与存在主义",
    comp_subtitle: "ACADEMIC COMPARISON",
    comp_title: "东亚次世代主机游戏对比研究",
    comp_desc: "中韩两国在全球主机舞台领衔的次世代动作范式与工业突破",
    th_metric: "对比维度",
    row_genre: "类型取向",
    row_combat_tempo: "战斗节奏与攻防",
    row_aesthetic: "美学母题",
    row_action_director: "动作指引",
    row_world: "关卡空间",
    row_implication: "产业里程碑",
    insight_title: "与教授探讨的切入点：东方文化母题的当代数字化转译",
    insight_desc: "在过去由欧美和日本主导的AAA主机领域，韩国以对西方经典的精湛消化（《匹诺曹的谎言》）与先锋科幻动作（《星刃》）成功突围；而中国《影之刃零》则没有停留在对旧武侠的照搬，而是通过与蒸汽朋克和人体异化的杂糅，实践了‘东方次文化向全球普适性话语的跃迁’，极具比较文艺学研究价值。",
    studio_subtitle: "DEVELOPER & CREATIVE MINDS",
    studio_title: "灵游坊 S-GAME 与核心主创阵容",
    timeline_title: "灵游坊16年演进史：从单人独立RPG到全球主机AAA",
    acad_subtitle: "DISCUSSION TOPICS",
    acad_title: "建议与韩国教授共同探讨的4个学术议题",
    acad_desc: "适宜作为游戏学、文化研究与新媒体美学研讨会或课题研究方向",
    media_subtitle: "TRAILER & SHOWCASE",
    media_title: "官方实机影像与视觉档案",
    gallery_item1: "暴雨中的头目对决演武",
    gallery_item2: "武侠朋克重装机械兵刃",
    gallery_item3: "解构主义古建关卡轴线",
    footer_desc: "本页面旨在向韩国大学教授及研究学者系统呈现《影之刃零》在游戏设计、文化美学创新、前沿技术实现以及东亚游戏工业化浪潮中的学术与产业价值。",
    footer_links: "页面导览",
    footer_sources: "官方来源与文献"
  }
};

// ==========================================================================
// 2. Language Switcher Engine
// ==========================================================================
let currentLang = 'ko';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  // Update button active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update text content with data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Refresh icons
  if (window.lucide) {
    lucide.createIcons();
  }
}

// ==========================================================================
// 3. Ambient Rain & Ink Particles Canvas
// ==========================================================================
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 20 + 10,
      speed: Math.random() * 3 + 2,
      opacity: Math.random() * 0.4 + 0.1,
      sway: Math.random() * 0.5 - 0.25
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.sway * 5, p.y + p.length);
      ctx.strokeStyle = `rgba(200, 210, 230, ${p.opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      p.y += p.speed;
      p.x += p.sway;

      if (p.y > height) {
        p.y = -p.length;
        p.x = Math.random() * width;
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// ==========================================================================
// 4. Synthesized Ambient Sound (Web Audio API - Zero External Dependency)
// ==========================================================================
let audioCtx = null;
let isAudioPlaying = false;
let ambientGain = null;
let soundInterval = null;

function toggleAmbientAudio() {
  const icon = document.getElementById('sound-icon');

  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  if (isAudioPlaying) {
    if (ambientGain) {
      ambientGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
    }
    clearInterval(soundInterval);
    isAudioPlaying = false;
    if (icon) icon.setAttribute('data-lucide', 'volume-x');
  } else {
    // Start ethereal low drone & wind chime
    ambientGain = audioCtx.createGain();
    ambientGain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    ambientGain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 1.2);
    ambientGain.connect(audioCtx.destination);

    // Deep drone osc
    const osc1 = audioCtx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(108, audioCtx.currentTime); // Low A/A#
    osc1.connect(ambientGain);
    osc1.start();

    // Occasional gentle bamboo bell / pentatonic chime
    const pentatonicNotes = [220, 261.63, 293.66, 329.63, 392.0, 440]; // A minor pentatonic
    soundInterval = setInterval(() => {
      if (!isAudioPlaying) return;
      const noteFreq = pentatonicNotes[Math.floor(Math.random() * pentatonicNotes.length)];
      const bellOsc = audioCtx.createOscillator();
      const bellGain = audioCtx.createGain();

      bellOsc.type = 'triangle';
      bellOsc.frequency.setValueAtTime(noteFreq * (Math.random() > 0.5 ? 2 : 1), audioCtx.currentTime);

      bellGain.gain.setValueAtTime(0.03, audioCtx.currentTime);
      bellGain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 2.5);

      bellOsc.connect(bellGain);
      bellGain.connect(audioCtx.destination);

      bellOsc.start();
      bellOsc.stop(audioCtx.currentTime + 2.6);
    }, 3800);

    isAudioPlaying = true;
    if (icon) icon.setAttribute('data-lucide', 'volume-2');
  }

  if (window.lucide) lucide.createIcons();
}

// ==========================================================================
// 5. Interactive Weapon Tabs
// ==========================================================================
function initWeaponTabs() {
  const tabs = document.querySelectorAll('.weapon-tab-btn');
  const contents = document.querySelectorAll('.weapon-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;

      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }

      if (window.lucide) lucide.createIcons();
    });
  });
}

// ==========================================================================
// 6. Presentation Mode (Slide Deck)
// ==========================================================================
let currentSlide = 1;
const totalSlides = 5;

function openPresentation() {
  const modal = document.getElementById('presentation-overlay');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    showSlide(1);
  }
}

function closePresentation() {
  const modal = document.getElementById('presentation-overlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function showSlide(index) {
  if (index < 1) index = 1;
  if (index > totalSlides) index = totalSlides;
  currentSlide = index;

  const slides = document.querySelectorAll('.pres-slide');
  slides.forEach(s => {
    s.classList.toggle('active', parseInt(s.dataset.slide) === currentSlide);
  });

  const indicator = document.getElementById('pres-page-indicator');
  if (indicator) {
    indicator.textContent = `${currentSlide} / ${totalSlides}`;
  }

  if (window.lucide) lucide.createIcons();
}

// ==========================================================================
// 7. Lightbox for Screenshots
// ==========================================================================
function openLightbox(imgSrc, captionText) {
  const modal = document.getElementById('lightbox-modal');
  const targetImg = document.getElementById('lightbox-target');
  const caption = document.getElementById('lightbox-caption');

  if (modal && targetImg && caption) {
    targetImg.src = imgSrc;
    caption.textContent = captionText;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 8. Scrollspy for Navigation Links
// ==========================================================================
function initScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ==========================================================================
// 9. Document Ready Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Init Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Init Components
  initAmbientCanvas();
  initWeaponTabs();
  initScrollspy();

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Sound toggle button
  const soundBtn = document.getElementById('sound-toggle');
  if (soundBtn) {
    soundBtn.addEventListener('click', toggleAmbientAudio);
  }

  // Presentation button & modal controls
  const presBtn = document.getElementById('presentation-btn');
  if (presBtn) {
    presBtn.addEventListener('click', openPresentation);
  }

  const presClose = document.getElementById('pres-close');
  if (presClose) presClose.addEventListener('click', closePresentation);

  const presPrev = document.getElementById('pres-prev');
  if (presPrev) presPrev.addEventListener('click', () => showSlide(currentSlide - 1));

  const presNext = document.getElementById('pres-next');
  if (presNext) presNext.addEventListener('click', () => showSlide(currentSlide + 1));

  // Keyboard navigation for presentation mode
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('presentation-overlay');
    if (modal && modal.classList.contains('active')) {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        showSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        showSlide(currentSlide - 1);
      } else if (e.key === 'Escape') {
        closePresentation();
      }
    }

    const lb = document.getElementById('lightbox-modal');
    if (lb && lb.classList.contains('active') && e.key === 'Escape') {
      closeLightbox();
    }
  });

  // Close lightbox on backdrop click
  const lbModal = document.getElementById('lightbox-modal');
  if (lbModal) {
    lbModal.addEventListener('click', (e) => {
      if (e.target === lbModal) closeLightbox();
    });
  }
});

