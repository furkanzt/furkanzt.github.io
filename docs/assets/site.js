(()=>{var Ns={en:{name:"Mustafa Furkan \xD6zate\u015F",title:"Mustafa Furkan \xD6zate\u015F \u2014 AI-native engineer",headline:"AI-native engineer: production LLM systems built, tested and verified with coding agents.",experience:[{org:"\u0130MPARK E\u011Fitim Bili\u015Fim LTD",location:"Ankara, T\xFCrkiye",roles:[{title:"Junior AI Engineer",dates:"Mar 2026 \u2013 Present"}],bullets:["Build and ship production LLM systems with Claude Code as my primary development workflow, including an LGS/YKS Question Generator for math exam prep, where a second model tier independently re-solves every question before release (FastAPI, React/Vite, Gemini).","Built a multi-agent textbook audit pipeline (independent scan lenses read a whole book, three-vote verification against the page images, change instructions for the typesetter) and a template-driven book generator that outputs print-ready HTML/PDF checked against MEB's 2025 textbook rules.","Built a curriculum-mining pipeline extracting structured Knowledge Components from official MEB textbooks and Maarif Modeli curricula (grade-5 math and science, 440+ KCs) for an adaptive-learning platform, including prerequisite graphs and BKT/IRT enrichment.","Introduced a TDD/BDD testing discipline (executable Gherkin scenario catalogue, CI-enforced test citations) across my \u0130MPARK codebases; published as an open-source Claude Code plugin.",'Orchestrated multiple AI models to rewrite an MEB-curriculum 6th-grade Bili\u015Fim Teknolojileri ve Yaz\u0131l\u0131m textbook: separate models draft, verify and fix content through a documented pipeline, aligning kazan\u0131m codes and "ba\u011Flam temelli" (context-based) questions to the 2025 T\xFCrkiye Y\xFCzy\u0131l\u0131 Maarif Modeli.']},{org:"G\xFCri\u015F Holding",location:"G\xF6lba\u015F\u0131, Ankara, T\xFCrkiye",roles:[{title:"Associate IT Engineer",dates:"Jan 2026 \u2013 Mar 2026"},{title:"IT Young Talent (Intern)",dates:"Oct 2025 \u2013 Dec 2025"}],bullets:["Provided IT helpdesk support, resolving users' computer, account and internet problems by switching access points or connecting them to the remote servers linked to the holding's geothermal, wind and hydroelectric (JES, RES, HES) power plants.","Supported computer updates and resolved hardware and software issues."]}],education:{org:"Middle East Technical University (METU)",location:"Ankara, T\xFCrkiye",degrees:[{title:"M.S., Data Informatics (with Thesis), GPA: 3.75/4.00",dates:"2025 \u2013 Present",thesis:'Thesis: "Agentic-AI-Driven Technical Management Processes Considering Technical Debt" (advisor: Assoc. Prof. Dr. \xD6zden \xD6zcan Top).'},{title:"B.S., Computer Education and Instructional Technology, GPA: 3.73/4.00",dates:"2020 \u2013 2025"}]},projects:[{id:"agenting",name:"claude-agenting (open source)",tech:"Python \xB7 Claude Code hooks \xB7 Evals",url:"https://github.com/furkanzt/claude-agenting",text:"Claude Code plugin that routes each subagent to the cheapest model tier that does the job, chosen by an eval harness measuring success rate and cost per run.",links:[]},{id:"tdd-bdd-harness",name:"claude-tdd-bdd-harness (open source)",tech:"Claude Code plugin \xB7 Gherkin \xB7 TDD/BDD",url:"https://github.com/furkanzt/claude-tdd-bdd-harness",text:"Open-source Claude Code plugin for self-enforcing TDD and BDD in any repo: an executable Gherkin scenario catalogue with machine-verified test citations, plus adversarial test audits.",links:[],art:{kind:"tdd",labels:{scenarios:"scenarios",tests:"tests",check:"check on every push",gap:"@gap @wip"}},explain:{lead:"Every behaviour a program promises becomes a plain-English scenario tied to a real test, and the build fails when a promise has no working proof.",steps:[{title:"Write the behaviour down",text:"Each behaviour is written as a short Given / When / Then scenario in plain English, one file per area of the product."},{title:"Point it at its proof",text:"Every scenario names the test that proves it in a \u201CBacked by\u201D line, for example tests/test_pricing.py::test_discount_never_exceeds_cap."},{title:"Check every link on each push",text:"A guard runs on every push and fails the build when a scenario has no proof, cites a test that no longer exists, or the coverage index is out of date."},{title:"Mark what is not proven yet",text:"A behaviour without a test is allowed only when it is openly tagged @gap @wip. A bare @gap fails the build, and once the gaps reach zero they stay at zero."}],deeper:["Citations resolve three forms: Python tests (tests/x.py::test_fn), JavaScript tests (web/src/x.test.ts > does the thing) and checks that only a live system can run (scripts/quality/checks.py::check_fn).","The guard's own checkers are pure functions with red-path proofs on deliberately broken inputs, so the guard is itself tested.","A new test earns its citation only after it fails against a deliberate mutation of the code it protects.",'An adversarial audit playbook lists the ways a green test can still lie, such as self-referential pins and vacuous fixtures, and runs on its own when you say "audit my tests".',"Behaviour that only a running system can show is a first-class scenario tagged @loop: it runs on a schedule and its citation is still checked on every push.","In the plugin install, three hooks remind Claude at session start, on test edits and on commit. They never block; the guard on each push is the real gate.","Adoption is opt-in: it asks once per project and remembers a no.","What it does not claim: the guard checks that each scenario points to a real test, not that every line of code has a scenario. It makes unproven promises visible."],links:[{label:"The contract (SKILL.md)",url:"https://github.com/furkanzt/claude-tdd-bdd-harness/blob/main/skills/tdd-bdd-harness/SKILL.md"},{label:"Adversarial audit playbook",url:"https://github.com/furkanzt/claude-tdd-bdd-harness/blob/main/skills/tdd-bdd-harness/reference/audit.md"},{label:"Changelog",url:"https://github.com/furkanzt/claude-tdd-bdd-harness/blob/main/CHANGELOG.md"}]}},{id:"kutie-games",name:"Kutie games",tech:"TypeScript \xB7 Cloudflare Workers \xB7 Durable Objects \xB7 D1",url:null,text:"Three live browser games (Matching Numbers, Arrow Escape, Cobite), including real-time two-player co-op on Durable Objects; unit-tested game and room logic, deployed on Cloudflare. Built with Claude Code.",links:[{label:"Matching Numbers",url:"https://matching-numbers.kutie.workers.dev"},{label:"Arrow Escape",url:"https://arrow-escape.kutie.workers.dev"},{label:"Cobite",url:"https://cobite.kutie.workers.dev"}]},{id:"mstodo",name:"claude-mstodo (open source)",tech:"JavaScript \xB7 MCP \xB7 Microsoft Graph",url:"https://github.com/furkanzt/claude-mstodo",text:"MCP server and /mstodo planning command that connect Microsoft To Do to Claude Code and Claude Desktop; ships as a Claude Code plugin, a one-click Desktop extension, or from source.",links:[]},{id:"yzt-curricula",name:"yzt-curricula (METU AI Society)",tech:"Markdown \xB7 Curriculum design",url:"https://github.com/furkanzt/yzt-curricula",text:"Open self-learning curricula for AI (programming fundamentals and generative AI tracks) written for METU AI Society members and anyone who wants to learn; 13 GitHub stars.",links:[]},{id:"taste-detector",name:"claude-taste-detector (open source)",tech:"Shell \xB7 Claude Code hooks",url:"https://github.com/furkanzt/claude-taste-detector",text:"Claude Code plugin that wires Emil Kowalski's design-engineering guides to impeccable's detector findings through a global hook, so motion and feel guidance loads on the first UI edit.",links:[]}],research:[{title:'Research Intern, METU CEIT \u2014 LLM-based AI Writing Assistant ("Peer Feedback with LLM")',dates:"Oct 2024 \u2013 Jun 2025",people:"Professor: Assoc. Prof. Dr. Erkan Er"},{title:"Teaching Assistant (Volunteer), METU \u2014 quizzes, grading, 2 substitute lectures across 3 courses",dates:"Feb 2024 \u2013 Dec 2024",people:"Professors: Prof. Dr. Soner Y\u0131ld\u0131r\u0131m, Assoc. Prof. Dr. G\xF6knur Kaplan, Assoc. Prof. Dr. Erkan Er"},{title:"President, METU AI Society \u2014 taught Python and Machine Learning courses",dates:"May 2024 \u2013 Jun 2025",people:""}],skills:["Technical: Python, TypeScript, SQL / PostgreSQL, React, FastAPI, Fastify, Cloudflare Workers / D1 / Durable Objects, Docker, CI, LLM Integration (OpenAI, Anthropic, Gemini), LLM Evaluation, Prompt Engineering, Agentic development with Claude Code","Languages: English (Full Professional Proficiency \u2014 YDS 83.75), Turkish (Native)"],availability:"Open to new opportunities.",location:"Ankara, T\xFCrkiye",description:"Mustafa Furkan \xD6zate\u015F: AI-native engineer in Ankara. Production LLM systems built, tested and verified with coding agents.",ui:{toggle:"Language",experience:"Experience",projects:"Projects",research:"Research & Teaching",education:"Education",skills:"Skills",contact:"Contact",email:"Email",emailUni:"Email (university)",gamesNote:"Some company and campus networks block workers.dev, where the three games run.",openSource:"Open source",viewOnGitHub:"View on GitHub",playNow:"Play",cv:"CV (PDF)",howItWorks:"How it works",stepsCount:"{n} steps",stepOf:"Step {n} of {total}",back:"Back",next:"Next",goDeeper:"Go deeper"}},tr:{name:"Mustafa Furkan \xD6zate\u015F",title:"Mustafa Furkan \xD6zate\u015F \u2014 AI-native m\xFChendis",headline:"AI-native m\xFChendis: kodlama ajanlar\u0131yla \xFCretim LLM sistemleri kuran, test eden ve do\u011Frulayan.",experience:[{org:"\u0130MPARK E\u011Fitim Bili\u015Fim LTD",location:"Ankara, T\xFCrkiye",roles:[{title:"Junior AI Engineer",dates:"Mart 2026 \u2013 Devam ediyor"}],bullets:["Birincil geli\u015Ftirme i\u015F ak\u0131\u015F\u0131m olarak Claude Code ile \xFCretim LLM sistemleri geli\u015Ftirip yay\u0131na al\u0131yorum; bunlar aras\u0131nda matematik s\u0131nav\u0131 haz\u0131rl\u0131\u011F\u0131 i\xE7in LGS/YKS Question Generator de var. Yay\u0131ndan \xF6nce her soruyu ikinci bir model katman\u0131 ba\u011F\u0131ms\u0131z olarak yeniden \xE7\xF6z\xFCyor (FastAPI, React/Vite, Gemini).","Ders kitaplar\u0131 i\xE7in \xE7ok ajanl\u0131 bir denetim hatt\u0131 (kitab\u0131n tamam\u0131n\u0131 tarayan ba\u011F\u0131ms\u0131z mercekler, sayfa g\xF6r\xFCnt\xFCleriyle \xFC\xE7 oylu do\u011Frulama, dizgiciye de\u011Fi\u015Fiklik talimat\u0131) ve MEB'in 2025 ders kitab\u0131 kurallar\u0131na g\xF6re denetlenen, bask\u0131ya haz\u0131r HTML/PDF \xFCreten \u015Fablon tabanl\u0131 bir kitap \xFCreticisi geli\u015Ftirdim.","MEB ders kitaplar\u0131ndan ve Maarif Modeli \xF6\u011Fretim programlar\u0131ndan yap\u0131land\u0131r\u0131lm\u0131\u015F Knowledge Component'ler \xE7\u0131karan bir m\xFCfredat madencili\u011Fi hatt\u0131 kurdum (5. s\u0131n\u0131f matematik ve fen, 440+ KC); uyarlanabilir \xF6\u011Frenme platformu i\xE7in \xF6n ko\u015Ful grafikleri ve BKT/IRT zenginle\u015Ftirmesi i\xE7eriyor.","\u0130MPARK kod tabanlar\u0131nda TDD/BDD test disiplini ba\u015Flatt\u0131m (\xE7al\u0131\u015Ft\u0131r\u0131labilir Gherkin senaryo katalo\u011Fu, CI ile zorunlu test at\u0131flar\u0131); a\xE7\u0131k kaynakl\u0131 bir Claude Code eklentisi olarak yay\u0131mland\u0131.",`Yapay zek\xE2 modellerinin orkestrasyonuyla 6. s\u0131n\u0131f Bili\u015Fim Teknolojileri ve Yaz\u0131l\u0131m ders kitab\u0131n\u0131n MEB m\xFCfredat\u0131na g\xF6re yeniden yaz\u0131m\u0131n\u0131 y\xF6nettim; ayr\u0131 modeller taslak \xFCretme, do\u011Frulama ve d\xFCzeltme a\u015Famalar\u0131n\u0131 belgelenmi\u015F bir hatta y\xFCr\xFCtt\xFC; kazan\u0131m kodlar\u0131 ve "ba\u011Flam temelli" sorular\u0131 2025 T\xFCrkiye Y\xFCzy\u0131l\u0131 Maarif Modeli'ne hizalad\u0131m.`]},{org:"G\xFCri\u015F Holding",location:"G\xF6lba\u015F\u0131, Ankara, T\xFCrkiye",roles:[{title:"BT Aday M\xFChendisi",dates:"Oca 2026 \u2013 Mar 2026"},{title:"BT Gen\xE7 Yetenek (Stajyer)",dates:"Eki 2025 \u2013 Ara 2025"}],bullets:["BT yard\u0131m masas\u0131 deste\u011Fi verdim; kullan\u0131c\u0131lar\u0131n bilgisayar, hesap ve internet sorunlar\u0131n\u0131 eri\u015Fim noktalar\u0131n\u0131 de\u011Fi\u015Ftirerek veya holdingin JES, RES ve HES santrallerine ba\u011Fl\u0131 uzak sunuculara ba\u011Flayarak \xE7\xF6zd\xFCm.","Bilgisayar g\xFCncellemelerinde destek verdim; donan\u0131m ve yaz\u0131l\u0131m sorunlar\u0131n\u0131 giderdim."]}],education:{org:"Orta Do\u011Fu Teknik \xDCniversitesi (ODT\xDC)",location:"Ankara, T\xFCrkiye",degrees:[{title:"Y.L., Veri Bili\u015Fimi (Data Informatics), Tezli, GNO: 3.75/4.00",dates:"2025 \u2013 Devam ediyor",thesis:'Tez: "Teknik Bor\xE7 Dikkate Al\u0131narak Ajan Yapay Zek\xE2 Destekli Teknik Y\xF6netim S\xFCre\xE7leri" (dan\u0131\u015Fman: Do\xE7. Dr. \xD6zden \xD6zcan Top).'},{title:"Lisans, Bilgisayar ve \xD6\u011Fretim Teknolojileri E\u011Fitimi, GNO: 3.73/4.00",dates:"2020 \u2013 2025"}]},projects:[{id:"agenting",name:"claude-agenting (a\xE7\u0131k kaynak)",tech:"Python \xB7 Claude Code hooks \xB7 Evals",url:"https://github.com/furkanzt/claude-agenting",text:"Her alt ajan\u0131, ba\u015Far\u0131 oran\u0131 ve \xE7al\u0131\u015Ft\u0131rma ba\u015F\u0131na maliyeti \xF6l\xE7en bir de\u011Ferlendirme (eval) d\xFCzene\u011Fiyle i\u015Fi yapabilen en ucuz model katman\u0131na y\xF6nlendiren Claude Code eklentisi.",links:[]},{id:"tdd-bdd-harness",name:"claude-tdd-bdd-harness (a\xE7\u0131k kaynak)",tech:"Claude Code eklentisi \xB7 Gherkin \xB7 TDD/BDD",url:"https://github.com/furkanzt/claude-tdd-bdd-harness",text:"Herhangi bir depoda TDD ve BDD disiplinini kendili\u011Finden zorunlu k\u0131lan a\xE7\u0131k kaynakl\u0131 Claude Code eklentisi: makine taraf\u0131ndan do\u011Frulanan test at\u0131flar\u0131yla \xE7al\u0131\u015Ft\u0131r\u0131labilir Gherkin senaryo katalo\u011Fu ve \xE7eki\u015Fmeli test denetimleri.",links:[],art:{kind:"tdd",labels:{scenarios:"senaryolar",tests:"testler",check:"her push'ta denetim",gap:"@gap @wip"}},explain:{lead:"Bir program\u0131n vaat etti\u011Fi her davran\u0131\u015F, ger\xE7ek bir teste ba\u011Fl\u0131 ve sade bir dille yaz\u0131lm\u0131\u015F bir senaryoya d\xF6n\xFC\u015F\xFCr; \xE7al\u0131\u015Fan bir kan\u0131t\u0131 olmayan vaat derlemeyi (build) durdurur.",steps:[{title:"Davran\u0131\u015F\u0131 yaz",text:"Her davran\u0131\u015F, \xFCr\xFCn\xFCn her alan\u0131 i\xE7in ayr\u0131 bir dosyada, sade bir dille k\u0131sa bir Given / When / Then senaryosu olarak yaz\u0131l\u0131r."},{title:"Kan\u0131t\u0131na ba\u011Fla",text:"Her senaryo, kendisini kan\u0131tlayan testi bir \u201CBacked by\u201D sat\u0131r\u0131nda belirtir; \xF6rne\u011Fin tests/test_pricing.py::test_discount_never_exceeds_cap."},{title:"Her push'ta ba\u011Flant\u0131lar\u0131 denetle",text:"Her push'ta \xE7al\u0131\u015Fan bir denetleyici; kan\u0131t\u0131 olmayan, art\u0131k var olmayan bir teste at\u0131f yapan bir senaryo ya da g\xFCncelli\u011Fini yitirmi\u015F bir kapsam dizini buldu\u011Funda derlemeyi durdurur."},{title:"Hen\xFCz kan\u0131tlanmayan\u0131 i\u015Faretle",text:"Testi olmayan bir davran\u0131\u015Fa ancak a\xE7\u0131k\xE7a @gap @wip etiketiyle izin verilir. Tek ba\u015F\u0131na @gap derlemeyi durdurur; eksik say\u0131s\u0131 s\u0131f\u0131ra indi\u011Finde bir daha artamaz."}],deeper:["At\u0131flar \xFC\xE7 bi\xE7imde \xE7\xF6z\xFCl\xFCr: Python testleri (tests/x.py::test_fn), JavaScript testleri (web/src/x.test.ts > does the thing) ve yaln\u0131zca \xE7al\u0131\u015Fan bir sistemin y\xFCr\xFCtebilece\u011Fi denetimler (scripts/quality/checks.py::check_fn).","Denetleyicinin kendi kontrolleri, bilerek bozulmu\u015F girdilerle k\u0131rm\u0131z\u0131 yol kan\u0131tlar\u0131 olan saf fonksiyonlard\u0131r; yani denetleyicinin kendisi de test edilir.","Yeni bir test, atf\u0131n\u0131 ancak korudu\u011Fu kodun bilerek de\u011Fi\u015Ftirilmi\u015F (mutasyona u\u011Frat\u0131lm\u0131\u015F) bir s\xFCr\xFCm\xFCnde ba\u015Far\u0131s\u0131z olduktan sonra kazan\u0131r.",`\xC7eki\u015Fmeli bir denetim rehberi, ye\u015Fil bir testin yine de yan\u0131ltabilece\u011Fi yollar\u0131 (kendine at\u0131f yapan sabitlemeler, bo\u015F fixture'lar gibi) listeler ve "audit my tests" denince tek ba\u015F\u0131na \xE7al\u0131\u015F\u0131r.`,"Yaln\u0131zca \xE7al\u0131\u015Fan bir sistemin g\xF6sterebilece\u011Fi davran\u0131\u015Flar @loop etiketli birinci s\u0131n\u0131f senaryolard\u0131r: zamanlanm\u0131\u015F olarak \xE7al\u0131\u015F\u0131r, at\u0131flar\u0131 yine her push'ta denetlenir.","Eklenti kurulumunda \xFC\xE7 hook, oturum ba\u015F\u0131nda, test d\xFCzenlenirken ve commit s\u0131ras\u0131nda Claude'a hat\u0131rlatma yapar. Hi\xE7biri engellemez; as\u0131l kap\u0131 her push'taki denetleyicidir.","Kurulum iste\u011Fe ba\u011Fl\u0131d\u0131r: her projede bir kez sorar ve verilen hay\u0131r cevab\u0131n\u0131 hat\u0131rlar.","\u0130ddia etmedi\u011Fi \u015Fey: denetleyici her senaryonun ger\xE7ek bir teste ba\u011Fland\u0131\u011F\u0131n\u0131 denetler, kodun her sat\u0131r\u0131n\u0131n bir senaryosu oldu\u011Funu de\u011Fil. Kan\u0131tlanmam\u0131\u015F vaatleri g\xF6r\xFCn\xFCr k\u0131lar."],links:[{label:"S\xF6zle\u015Fme (SKILL.md)",url:"https://github.com/furkanzt/claude-tdd-bdd-harness/blob/main/skills/tdd-bdd-harness/SKILL.md"},{label:"\xC7eki\u015Fmeli denetim rehberi",url:"https://github.com/furkanzt/claude-tdd-bdd-harness/blob/main/skills/tdd-bdd-harness/reference/audit.md"},{label:"S\xFCr\xFCm notlar\u0131 (CHANGELOG)",url:"https://github.com/furkanzt/claude-tdd-bdd-harness/blob/main/CHANGELOG.md"}]}},{id:"kutie-games",name:"Kutie games",tech:"TypeScript \xB7 Cloudflare Workers \xB7 Durable Objects \xB7 D1",url:null,text:"\xDC\xE7 canl\u0131 taray\u0131c\u0131 oyunu (Matching Numbers, Arrow Escape, Cobite); Durable Objects \xFCzerinde ger\xE7ek zamanl\u0131 iki ki\u015Filik i\u015Fbirlik\xE7i mod dahil; oyun ve oda mant\u0131\u011F\u0131 birim testli, Cloudflare \xFCzerinde yay\u0131nda. Claude Code ile geli\u015Ftirildi.",links:[{label:"Matching Numbers",url:"https://matching-numbers.kutie.workers.dev"},{label:"Arrow Escape",url:"https://arrow-escape.kutie.workers.dev"},{label:"Cobite",url:"https://cobite.kutie.workers.dev"}]},{id:"mstodo",name:"claude-mstodo (a\xE7\u0131k kaynak)",tech:"JavaScript \xB7 MCP \xB7 Microsoft Graph",url:"https://github.com/furkanzt/claude-mstodo",text:"Microsoft To Do'yu Claude Code ve Claude Desktop'a ba\u011Flayan MCP sunucusu ve /mstodo planlama komutu; Claude Code eklentisi, tek t\u0131kla kurulan Claude Desktop uzant\u0131s\u0131 ya da kaynaktan kurulum olarak sunuluyor.",links:[]},{id:"yzt-curricula",name:"yzt-curricula (ODT\xDC Yapay Zek\xE2 Toplulu\u011Fu)",tech:"Markdown \xB7 M\xFCfredat tasar\u0131m\u0131",url:"https://github.com/furkanzt/yzt-curricula",text:"ODT\xDC Yapay Zek\xE2 Toplulu\u011Fu \xFCyeleri ve \xF6\u011Frenmek isteyen herkes i\xE7in yaz\u0131lm\u0131\u015F a\xE7\u0131k yapay zek\xE2 \xF6z-\xF6\u011Frenme m\xFCfredatlar\u0131 (programlama temelleri ve \xFCretken yapay zek\xE2 parkurlar\u0131); GitHub'da 13 y\u0131ld\u0131z.",links:[]},{id:"taste-detector",name:"claude-taste-detector (a\xE7\u0131k kaynak)",tech:"Shell \xB7 Claude Code hooks",url:"https://github.com/furkanzt/claude-taste-detector",text:"Emil Kowalski'nin tasar\u0131m m\xFChendisli\u011Fi k\u0131lavuzlar\u0131n\u0131 impeccable'\u0131n dedekt\xF6r bulgular\u0131na genel (global) bir hook ile ba\u011Flayan Claude Code eklentisi; ilk aray\xFCz d\xFCzenlemesinde hareket ve his rehberi otomatik y\xFCklenir.",links:[]}],research:[{title:'Ara\u015Ft\u0131rma Stajyeri, ODT\xDC B\xD6TE \u2014 LLM tabanl\u0131 Yaz\u0131m Asistan\u0131 ("Peer Feedback with LLM")',dates:"Eki 2024 \u2013 Haz 2025",people:"\xD6\u011Fretim \xFCyesi: Do\xE7. Dr. Erkan Er"},{title:"G\xF6n\xFCll\xFC \xD6\u011Fretim Asistan\u0131, ODT\xDC \u2014 k\u0131sa s\u0131nav ve notland\u0131rma, 3 derste 2 vekil ders",dates:"\u015Eub 2024 \u2013 Ara 2024",people:"\xD6\u011Fretim \xFCyeleri: Prof. Dr. Soner Y\u0131ld\u0131r\u0131m, Do\xE7. Dr. G\xF6knur Kaplan, Do\xE7. Dr. Erkan Er"},{title:"Ba\u015Fkan, ODT\xDC Yapay Zek\xE2 Toplulu\u011Fu \u2014 Python ve Makine \xD6\u011Frenmesi dersleri verdi",dates:"May 2024 \u2013 Haz 2025",people:""}],skills:["Teknik: Python, TypeScript, SQL / PostgreSQL, React, FastAPI, Fastify, Cloudflare Workers / D1 / Durable Objects, Docker, CI, LLM Entegrasyonu (OpenAI, Anthropic, Gemini), LLM De\u011Ferlendirmesi, Prompt M\xFChendisli\u011Fi, Claude Code ile ajan tabanl\u0131 geli\u015Ftirme","Diller: \u0130ngilizce (Tam profesyonel yeterlilik \u2014 YDS 83.75), T\xFCrk\xE7e (Ana dil)"],availability:"Yeni f\u0131rsatlara a\xE7\u0131\u011F\u0131m.",location:"Ankara, T\xFCrkiye",description:"Mustafa Furkan \xD6zate\u015F: Ankara'da AI-native m\xFChendis. Kodlama ajanlar\u0131yla \xFCretim LLM sistemleri kuran, test eden ve do\u011Frulayan.",ui:{toggle:"Dil",experience:"Deneyim",projects:"Projeler",research:"Ara\u015Ft\u0131rma ve \xD6\u011Fretim",education:"E\u011Fitim",skills:"Beceriler",contact:"\u0130leti\u015Fim",email:"E-posta",emailUni:"E-posta (\xFCniversite)",gamesNote:"Baz\u0131 \u015Firket ve kamp\xFCs a\u011Flar\u0131, \xFC\xE7 oyunun \xE7al\u0131\u015Ft\u0131\u011F\u0131 workers.dev adreslerini engelliyor.",openSource:"A\xE7\u0131k kaynak",viewOnGitHub:"GitHub'da g\xF6r",playNow:"Oyna",cv:"\xD6zge\xE7mi\u015F (PDF)",howItWorks:"Nas\u0131l \xE7al\u0131\u015F\u0131r",stepsCount:"{n} ad\u0131m",stepOf:"Ad\u0131m {n} / {total}",back:"Geri",next:"\u0130leri",goDeeper:"Daha derine in"}},site:{origin:"https://furkanzt.github.io",emails:[{user:"furkan.ozates",domain:"gmail.com"},{user:"furkan.ozates",domain:"metu.edu.tr"}],linkedin:"https://www.linkedin.com/in/furkanzt/",github:"https://github.com/furkanzt",cv:{en:"/assets/cv/MustafaFurkanOzates_CV_EN.pdf",tr:"/assets/cv/MustafaFurkanOzates_CV_TR.pdf"}}};var Ht=i=>+i.toFixed(1),Hn=i=>Ht(i*640),ii=i=>Ht(i*400),$d=[.215,.4,.585,.77],Fs={rows:$d,scen:{cx:.19,w:.25,h:.13},test:{cx:.81,w:.17,h:.1},link:[0,2,1,3],scan:{x0:.36,x1:.68,y0:.13,y1:.85},gate:{x:.44,y:.915,r:.042},ghost:1,gap:3,labels:{scenarios:{x:.065,y:.105},tests:{x:.725,y:.105},check:{x:.49,y:.915},gap:{x:.335,y:.77}},steps:[["scen"],["scen","links","tests"],["links","tests","check","ghost"],["scen","links","tests","check","gap"]]};function Yd(i){let e=Fs,t=e.scen.cx+e.scen.w/2,n=e.test.cx-e.test.w/2;return{x0:t,y0:e.rows[i],x1:n,y1:e.rows[e.link[i]]}}function Wr(i,e){let{x0:t,y0:n,x1:s,y1:r}=Yd(i),a=1-e,o=t+(s-t)*.45,l=t+(s-t)*.55,c=a*a*a*t+3*a*a*e*o+3*a*e*e*l+e*e*e*s,u=a*a*a*n+3*a*a*e*n+3*a*e*e*r+e*e*e*r;return[c,u]}function hl(i,e,t,n,s,r=""){return`<rect${r?` class="${r}"`:""} x="${Hn(i-t/2)}" y="${ii(e-n/2)}" width="${Hn(t)}" height="${ii(n)}" rx="${s}"/>`}function Zd(){let i=Fs,e="";i.rows.forEach((m,y)=>{let p=i.scen.cx-i.scen.w/2+.03,g=[.15,.18,.12].map((b,A)=>`<path d="M${Hn(p)} ${ii(m-.032+A*.032)}H${Hn(p+b)}"/>`).join("");e+=`<g class="ca-s${y}">${hl(i.scen.cx,m,i.scen.w,i.scen.h,6,"ca-card")}${g}</g>`});let t="";i.rows.forEach((m,y)=>{let p=i.test.cx-i.test.w/2+.025,g=[.09,.06].map((b,A)=>`<path d="M${Hn(p)} ${ii(m-.016+A*.032)}H${Hn(p+b)}"/>`).join("");t+=`<g class="ca-t${y}">${hl(i.test.cx,m,i.test.w,i.test.h,4,"ca-card")}${g}</g>`});let n=m=>{let y="";for(let p=0;p<=24;p++){let[g,b]=Wr(m,p/24);y+=(p?"L":"M")+Hn(g)+" "+ii(b)}return y},s="";for(let m=0;m<i.rows.length;m++)s+=`<path class="ca-l${m}" d="${n(m)}"/>`;let r=i.gate,a=Hn(r.x),o=ii(r.y),l=Ht(r.r*400),c=`<g class="ca-gate-ok"><circle cx="${a}" cy="${o}" r="${l}"/><path d="M${Ht(a-l*.42)} ${o}l${Ht(l*.3)} ${Ht(l*.32)}l${Ht(l*.56)} ${Ht(-l*.62)}"/></g>`,u=`<g class="ca-gate-bad"><circle cx="${a}" cy="${o}" r="${l}"/><path d="M${Ht(a-l*.36)} ${Ht(o-l*.36)}l${Ht(l*.72)} ${Ht(l*.72)}M${Ht(a+l*.36)} ${Ht(o-l*.36)}l${Ht(-l*.72)} ${Ht(l*.72)}"/></g>`,d=i.link[i.ghost],h=i.rows[d],f=`<g class="ca-ghost"><path d="${n(i.ghost)}"/>`+hl(i.test.cx,h,i.test.w,i.test.h,4)+"</g>";return`<g class="ca ca-check"><path class="ca-scan" d="M${Hn((i.scan.x0+i.scan.x1)/2)} ${ii(i.scan.y0)}V${ii(i.scan.y1)}"/>${c}${u}</g><g class="ca ca-links">${s}</g><g class="ca ca-scen">${e}</g><g class="ca ca-tests">${t}</g>`+f}var Jd={tdd:Zd},qi={tdd:Fs};function ph(i){let e=Jd[i];if(!e)throw new Error(`card art: no poster for "${i}"`);return`<svg class="pv-poster pv-poster--${i}" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">${e()}</svg>`}var ul=i=>qi[i]?qi[i].steps.length:0,mh=(i,e)=>qi[i]&&qi[i].steps[e]||null;var Mt={aspect:4/3,src:{x:.035,y0:.12,y1:.88},router:{x:.38,y:.5},tiers:[{id:"haiku",x:.7,y:.2},{id:"sonnet",x:.7,y:.5},{id:"opus",x:.7,y:.8}]},fl=["haiku","sonnet","haiku","sonnet","opus","sonnet"],pl={en:{tasks:"tasks",router:"router",caption:"Illustrative. Each task passes a router and goes to the cheapest model tier that does the job, as claude-agenting routes subagents.",hint:"Select a tier to see what it is used for.",link:"claude-agenting on GitHub",tiers:{haiku:{desc:"cheap and fast",jobs:[["Listing and counting files","medium"],["Reading code or prose and reporting what it does","medium"]]},sonnet:{desc:"balanced",jobs:[["Mechanical text cleanup","low"],["Turning prose into rules; classifying","medium\u2013high"],["Adversarial verification","high"]]},opus:{desc:"deep reasoning",jobs:[["Synthesizing across a whole document","xhigh"]]}}},tr:{tasks:"g\xF6revler",router:"y\xF6nlendirici",caption:"Temsil\xEE. Her g\xF6rev bir y\xF6nlendiriciden ge\xE7er ve i\u015Fi yapabilen en ucuz model katman\u0131na gider; claude-agenting alt ajanlar\u0131 b\xF6yle y\xF6nlendirir.",hint:"Ne i\xE7in kullan\u0131ld\u0131\u011F\u0131n\u0131 g\xF6rmek i\xE7in bir katman se\xE7in.",link:"GitHub'da claude-agenting",tiers:{haiku:{desc:"ucuz ve h\u0131zl\u0131",jobs:[["Dosyalar\u0131 listeleme ve sayma","medium"],["Kodu ya da metni okuyup ne yapt\u0131\u011F\u0131n\u0131 raporlama","medium"]]},sonnet:{desc:"dengeli",jobs:[["Mekanik metin temizli\u011Fi","low"],["D\xFCz metni kurallara d\xF6n\xFC\u015Ft\xFCrme; s\u0131n\u0131fland\u0131rma","medium\u2013high"],["\xC7eki\u015Fmeli do\u011Frulama","high"]]},opus:{desc:"derin ak\u0131l y\xFCr\xFCtme",jobs:[["B\xFCt\xFCn bir belge boyunca sentez","xhigh"]]}}}},Kd="https://github.com/furkanzt/claude-agenting",ce=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),$i='<svg class="ic" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M4.5 11.5 11 5M6 4.5h5.5V10" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/></svg>',jd='<svg class="ic" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M8 2.5v8M4.75 7.5 8 10.75l3.25-3.25M3 13.5h10" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/></svg>',dl=i=>i.replace(/^https?:\/\//,"").replace(/\/$/,""),Qd=i=>i.replace(/^https?:\/\/github\.com\//,"").replace(/\/$/,""),ef=i=>i.slice(i.lastIndexOf("/")+1);function tf(i,e){let t=i.indexOf("_");return t<0?`<span class="nowrap">${ce(i)}${e}</span>`:`${ce(i.slice(0,t+1))}<wbr><span class="nowrap">${ce(i.slice(t+1))}${e}</span>`}var Ci=i=>+(i*100).toFixed(2)+"%",nf=i=>`${i.user} [at] ${i.domain}`;function ml(i,e){let t=i.indexOf(e);return t<0?[null,i]:[i.slice(0,t),i.slice(t+e.length)]}function sf(i){let e=[],t=0,n="";for(let s of i)s==="("&&t++,s===")"&&t--,s===","&&t===0?(e.push(n.trim()),n=""):n+=s;return n.trim()&&e.push(n.trim()),e}var rf=["experience","projects","research","education","skills","contact"];function af(i){return rf.map(e=>`<a href="#${e}">${ce(i.ui[e])}</a>`).join("")}function of(i,e,t){let[n,s]=ml(i.headline,": "),r=n?`<strong>${ce(n)}:</strong> ${ce(s)}`:ce(s);return`<h1 class="name">${ce(i.name)}</h1><p class="headline">${r}</p><p class="avail"><span class="avail-dot" aria-hidden="true"></span>${ce(i.availability)}</p><div class="actions"><a class="btn btn--primary" data-email="0" href="#contact">${ce(i.ui.email)}</a><a class="btn" href="${ce(e.linkedin)}">LinkedIn</a><a class="btn" href="${ce(e.github)}">GitHub</a><a class="btn" href="${ce(e.cv[t])}" type="application/pdf" hreflang="${t}">${ce(i.ui.cv)}</a></div>`}function lf(i){let e=pl[i],t=Mt.router,n=`<span class="vz-label vz-label--tasks" style="left:${Ci(Mt.src.x)};top:4.5%">${ce(e.tasks)}</span><span class="vz-label vz-label--router" style="left:${Ci(t.x)};top:${Ci(t.y+.085)}">${ce(e.router)}</span>`;for(let s of Mt.tiers)n+=`<button type="button" class="tier" data-tier="${s.id}" aria-expanded="false" aria-controls="vz-pin" style="left:${Ci(s.x)};top:${Ci(s.y)}"><span class="tier-hit" aria-hidden="true"></span><span class="tier-text"><span class="tier-name">${s.id}</span><span class="tier-desc">${ce(e.tiers[s.id].desc)}</span></span></button>`;return n}function cf(i){let e=pl[i];return`<span class="cap-text">${ce(e.caption)} <span class="cap-hint">${ce(e.hint)}</span></span><a class="cap-link" href="${Kd}">${ce(e.link)}${$i}</a>`}function vh(i,e){let n=pl[i].tiers[e],s=n.jobs.map(([r,a])=>`<li><span class="pin-job">${ce(r)}</span><code class="pin-effort">effort: ${ce(a)}</code></li>`).join("");return`<p class="pin-head"><code class="pin-tier">${e}</code><span>${ce(n.desc)}</span></p><ul class="pin-jobs">${s}</ul>`}function hf(i,e){let[t,...n]=i.roles,s=(r,a,o)=>`<div class="job-line${o}"><${a} class="job-role">${ce(r.title)}</${a}><p class="dates">${ce(r.dates)}</p></div>`;return`<article class="job${e?" job--earlier":""}"><header class="job-head">`+s(t,"h3","")+n.map(r=>s(r,"p"," job-line--prev")).join("")+`<p class="job-org">${ce(i.org)}<span class="sep" aria-hidden="true"></span>${ce(i.location)}</p></header><ul class="bullets">${i.bullets.map(r=>`<li>${ce(r)}</li>`).join("")}</ul></article>`}function uf(i){return`<section class="sec" id="experience" aria-labelledby="h-experience"><h2 id="h-experience">${ce(i.ui.experience)}</h2><div class="sec-body"><div class="jobs">${i.experience.map(hf).join("")}</div></div></section>`}var gh='<svg class="ic xp-chev" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M4 6.25 8 10.25l4-4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/></svg>',df=(i,e)=>String(i).replace(/\{(\w+)\}/g,(t,n)=>n in e?String(e[n]):t);function ff(i){if(!i.art)return"";let e=qi[i.art.kind],t=Object.entries(i.art.labels||{}).map(([n,s])=>{let r=e.labels[n];if(!r)throw new Error(`card art ${i.art.kind}: no anchor for label "${n}"`);return`<span class="pv-label pv-label--${n}" data-anchor="${n}" style="left:${Ci(r.x)};top:${Ci(r.y)}">${ce(s)}</span>`}).join("");return`<figure class="pv" data-art="${ce(i.art.kind)}" aria-hidden="true"><div class="pv-stage">${ph(i.art.kind)}<div class="pv-labels">${t}</div></div></figure>`}function pf(i,e){let t=i.explain;if(!t)return"";if(i.art&&ul(i.art.kind)!==t.steps.length)throw new Error(`${i.id}: ${t.steps.length} steps in content.json, the ${i.art.kind} illustration has ${ul(i.art.kind)}`);let n=t.steps.map((o,l)=>`<li class="xp-step" data-step="${l}"><span class="xp-n" aria-hidden="true">${l+1}</span><div class="xp-st"><p class="xp-st-t">${ce(o.title)}</p><p class="xp-st-x">${ce(o.text)}</p></div></li>`).join(""),s=(t.deeper||[]).map(o=>`<li>${ce(o)}</li>`).join(""),r=(t.links||[]).map(o=>`<li><a href="${ce(o.url)}">${ce(o.label)}${$i}</a></li>`).join(""),a=s?`<details class="xp-deep"><summary class="xp-deep-sum"><span>${ce(e.goDeeper)}</span>${gh}</summary><div class="xp-deep-body"><ul class="xp-facts">${s}</ul>${r?`<ul class="xp-links">${r}</ul>`:""}</div></details>`:"";return`<details class="xp" id="xp-${ce(i.id)}"><summary class="xp-sum"><span class="xp-sum-t">${ce(e.howItWorks)}</span><span class="xp-sum-n">${ce(df(e.stepsCount,{n:t.steps.length}))}</span>${gh}</summary><div class="xp-body">`+(t.lead?`<p class="xp-lead">${ce(t.lead)}</p>`:"")+`<ol class="xp-steps">${n}</ol><div class="xp-nav" hidden><button type="button" class="xp-btn" data-dir="-1">${ce(e.back)}</button><p class="xp-count" aria-live="polite" data-tpl="${ce(e.stepOf)}"></p><button type="button" class="xp-btn xp-btn--next" data-dir="1">${ce(e.next)}</button></div>`+a+"</div></details>"}function mf(i,e,t){let n="";i.url&&(n=`<p class="proj-link"><a href="${ce(i.url)}">${ce(t.viewOnGitHub)}${$i}</a><code class="repo">${ce(Qd(i.url))}</code></p>`);let s="";i.links&&i.links.length&&(s='<ul class="plays">'+i.links.map(a=>`<li><a href="${ce(a.url)}"><span class="play-verb">${ce(t.playNow)}</span><span class="play-name">${ce(a.label)}</span><code class="play-host">${ce(dl(a.url))}</code>${$i}</a></li>`).join("")+`</ul><p class="note">${ce(t.gamesNote)}</p>`);let r=ff(i);return`<article class="proj${r?" proj--art":""}"${i.id?` id="p-${ce(i.id)}" data-proj="${ce(i.id)}"`:""}>`+r+`<div class="proj-body"><div class="proj-id"><h3 class="proj-name">${ce(i.name)}</h3><p class="proj-tech">${ce(i.tech)}</p></div><div class="proj-main"><p class="proj-text">${ce(i.text)}</p>${s}${n}</div>`+pf(i,t)+"</div></article>"}function gf(i){return`<section class="sec" id="projects" aria-labelledby="h-projects"><h2 id="h-projects">${ce(i.ui.projects)}</h2><div class="sec-body"><div class="projects">${i.projects.map((e,t)=>mf(e,t,i.ui)).join("")}</div></div></section>`}function _f(i){let[e,t]=ml(i," \u2014 ");return e?`<strong>${ce(e)}</strong> \u2014 ${ce(t)}`:ce(i)}function xf(i){let e=i.research.map(t=>`<li class="row"><p class="row-title">${_f(t.title)}</p><p class="dates">${ce(t.dates)}</p>`+(t.people?`<p class="row-meta">${ce(t.people)}</p>`:"")+"</li>").join("");return`<section class="sec" id="research" aria-labelledby="h-research"><h2 id="h-research">${ce(i.ui.research)}</h2><div class="sec-body"><ul class="rows">${e}</ul></div></section>`}function vf(i){let e=i.education,t=e.degrees.map(n=>`<li class="row"><p class="row-title">${ce(n.title)}</p><p class="dates">${ce(n.dates)}</p>`+(n.thesis?`<p class="row-meta">${ce(n.thesis)}</p>`:"")+"</li>").join("");return`<section class="sec" id="education" aria-labelledby="h-education"><h2 id="h-education">${ce(i.ui.education)}</h2><div class="sec-body"><p class="edu-org"><strong>${ce(e.org)}</strong><span class="sep" aria-hidden="true"></span>${ce(e.location)}</p><ul class="rows">${t}</ul></div></section>`}function yf(i){let e=i.skills.map(t=>{let[n,s]=ml(t,": "),r=sf(s).map(a=>`<li>${ce(a)}</li>`).join("");return`<div class="skill"><dt>${ce(n||"")}</dt><dd><ul class="inline-list">${r}</ul></dd></div>`}).join("");return`<section class="sec" id="skills" aria-labelledby="h-skills"><h2 id="h-skills">${ce(i.ui.skills)}</h2><div class="sec-body"><dl class="skills">${e}</dl></div></section>`}function Sf(i,e,t){let n=[i.ui.email,i.ui.emailUni],s=e.emails.map((r,a)=>`<li class="c-row"><span class="c-label">${ce(n[a]||i.ui.email)}</span><a class="c-link" data-email="${a}">${ce(nf(r))}</a></li>`).join("");return`<section class="sec sec--contact" id="contact" aria-labelledby="h-contact"><h2 id="h-contact">${ce(i.ui.contact)}</h2><div class="sec-body"><ul class="contact">${s}<li class="c-row"><span class="c-label">LinkedIn</span><a class="c-link" href="${ce(e.linkedin)}">${ce(dl(e.linkedin).replace(/^www\./,""))}${$i}</a></li><li class="c-row"><span class="c-label">GitHub</span><a class="c-link" href="${ce(e.github)}">${ce(dl(e.github))}${$i}</a></li><li class="c-row"><span class="c-label">${ce(i.ui.cv)}</span><a class="c-link" href="${ce(e.cv[t])}" type="application/pdf" hreflang="${t}">${tf(ef(e.cv[t]),jd)}</a></li></ul><p class="c-loc">${ce(i.location)}</p></div></section>`}function Mf(i){return`<p>${ce(i.name)}</p><p>${ce(i.location)}</p>`}function yh(i,e){let t=i[e],n=i.site;return{nav:af(t),hero:of(t,n,e),stage:lf(e),caption:cf(e),sections:uf(t)+gf(t)+xf(t)+vf(t)+yf(t)+Sf(t,n,e),footer:Mf(t)}}var si=(i,e,t)=>i+(e-i)*t;function _h(i,e,t,n){let s=1-n;return s*s*i+2*s*n*e+n*n*t}function xh(i,e,t,n,s){let r=1-s;return r*r*r*i+3*r*r*s*e+3*r*s*s*t+s*s*s*n}function gl(i,e){let{src:t,router:n}=Mt,s=.25,r=si(i,n.y,.55);return[_h(t.x,s,n.x,e),_h(i,r,n.y,e)]}function _l(i,e){let t=Mt.router;return[xh(t.x,t.x+.13,i.x-.15,i.x,e),xh(t.y,t.y,i.y,i.y,e)]}var xl=["en","tr"],vl="furkanzt.lang";function bf(i){for(let e=0;e<i.length;e++){let t=String(i[e]||"").toLowerCase().split("-")[0];if(xl.indexOf(t)!==-1)return t}return"en"}function yl(i,e,t){return i&&xl.indexOf(i)!==-1?i:e&&xl.indexOf(e)!==-1?e:bf(t||[])}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var nu=0,ic=1,iu=2;var wr=1,su=2,ws=3,xi=0,Kt=1,Un=2,Nn=0,Fn=1,Ar=2,sc=3,rc=4,ru=5;var Bi=100,au=101,ou=102,lu=103,cu=104,hu=200,uu=201,du=202,fu=203,ac=204,oc=205,pu=206,mu=207,gu=208,_u=209,xu=210,vu=211,yu=212,Su=213,Mu=214,Ma=0,ba=1,wa=2,ds=3,Aa=4,Ea=5,Ta=6,Ca=7,lc=0,bu=1,wu=2,Mn=0,cc=1,hc=2,uc=3,dc=4,fc=5,pc=6,mc=7;var gc=300,vi=301,ki=302,co=303,ho=304,Er=306,Ra=1e3,Rn=1001,Pa=1002,Ut=1003,Au=1004;var Tr=1005;var Ft=1006,uo=1007;var yi=1008;var cn=1009,_c=1010,xc=1011,As=1012,fo=1013,bn=1014,wn=1015,An=1016,po=1017,mo=1018,Es=1020,vc=35902,yc=35899,Sc=1021,Mc=1022,fn=1023,In=1026,Si=1027,bc=1028,go=1029,Mi=1030,_o=1031;var xo=1033,Cr=33776,Rr=33777,Pr=33778,Ir=33779,vo=35840,yo=35841,So=35842,Mo=35843,bo=36196,wo=37492,Ao=37496,Eo=37488,To=37489,Lr=37490,Co=37491,Ro=37808,Po=37809,Io=37810,Lo=37811,Do=37812,Uo=37813,No=37814,Fo=37815,Oo=37816,Bo=37817,ko=37818,zo=37819,Vo=37820,Go=37821,Ho=36492,Wo=36494,Xo=36495,qo=36283,$o=36284,Dr=36285,Yo=36286;var qs=2300,Ia=2301,ya=2302,$l=2303,Yl=2400,Zl=2401,Jl=2402;var Eu=3200;var wc=0,Tu=1,jn="",rn="srgb",$s="srgb-linear",Ys="linear",tt="srgb";var Sa=7680;var Cu=519,Ru=512,Pu=513,Iu=514,Zo=515,Lu=516,Du=517,Jo=518,Uu=519,Ac=35044;var Ec="300 es",yn=2e3,Zs=2001;function wf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Af(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nu(){let i=Js("canvas");return i.style.display="block",i}var Sh={},fs=null;function Ks(...i){let e="THREE."+i.shift();fs?fs("log",e,...i):console.log(e,...i)}function Fu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=Fu(i);let e="THREE."+i.shift();if(fs)fs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ue(...i){i=Fu(i);let e="THREE."+i.shift();if(fs)fs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Di(...i){let e=i.join(" ");e in Sh||(Sh[e]=!0,De(...i))}function Ou(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Bu={[Ma]:ba,[wa]:Ta,[Aa]:Ca,[ds]:Ea,[ba]:Ma,[Ta]:wa,[Ca]:Aa,[Ea]:ds},Ln=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mh=1234567,cs=Math.PI/180,ps=180/Math.PI;function Pn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function Tc(i,e){return(i%e+e)%e}function Ef(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Tf(i,e,t){return i!==e?(t-i)/(e-i):0}function Hs(i,e,t){return(1-t)*i+t*e}function Cf(i,e,t,n){return Hs(i,e,1-Math.exp(-t*n))}function Rf(i,e=1){return e-Math.abs(Tc(i,e*2)-e)}function Pf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function If(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Lf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Df(i,e){return i+Math.random()*(e-i)}function Uf(i){return i*(.5-Math.random())}function Nf(i){i!==void 0&&(Mh=i);let e=Mh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ff(i){return i*cs}function Of(i){return i*ps}function Bf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function kf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vf(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*u,o*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Cc={DEG2RAD:cs,RAD2DEG:ps,generateUUID:Pn,clamp:Ve,euclideanModulo:Tc,mapLinear:Ef,inverseLerp:Tf,lerp:Hs,damp:Cf,pingpong:Rf,smoothstep:Pf,smootherstep:If,randInt:Lf,randFloat:Df,randFloatSpread:Uf,seededRandom:Nf,degToRad:Ff,radToDeg:Of,isPowerOfTwo:Bf,ceilPowerOfTwo:kf,floorPowerOfTwo:zf,setQuaternionFromProperEuler:Vf,normalize:it,denormalize:vn},Uc=class Uc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Uc.prototype.isVector2=!0;var we=Uc,Dn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],m=r[a+2],y=r[a+3];if(d!==y||l!==h||c!==f||u!==m){let p=l*h+c*f+u*m+d*y;p<0&&(h=-h,f=-f,m=-m,y=-y,p=-p);let g=1-o;if(p<.9995){let b=Math.acos(p),A=Math.sin(b);g=Math.sin(g*b)/A,o=Math.sin(o*b)/A,l=l*g+h*o,c=c*g+f*o,u=u*g+m*o,d=d*g+y*o}else{l=l*g+h*o,c=c*g+f*o,u=u*g+m*o,d=d*g+y*o;let b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+u*d+l*f-c*h,e[t+1]=l*m+u*h+c*d-o*f,e[t+2]=c*m+u*f+o*h-l*d,e[t+3]=u*m-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Nc=class Nc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nc.prototype.isVector3=!0;var I=Nc,Sl=new I,bh=new Dn,Fc=class Fc{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],m=n[8],y=s[0],p=s[3],g=s[6],b=s[1],A=s[4],v=s[7],M=s[2],w=s[5],C=s[8];return r[0]=a*y+o*b+l*M,r[3]=a*p+o*A+l*w,r[6]=a*g+o*v+l*C,r[1]=c*y+u*b+d*M,r[4]=c*p+u*A+d*w,r[7]=c*g+u*v+d*C,r[2]=h*y+f*b+m*M,r[5]=h*p+f*A+m*w,r[8]=h*g+f*v+m*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,m=t*d+n*h+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=d*y,e[1]=(s*c-u*n)*y,e[2]=(o*n-s*a)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ml.makeScale(e,t)),this}rotate(e){return Di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ml.makeRotation(-e)),this}translate(e,t){return Di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fc.prototype.isMatrix3=!0;var ke=Fc,Ml=new ke,wh=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gf(){let i={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Di("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Di("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$s]:{primaries:e,whitePoint:n,transfer:Ys,toXYZ:wh,fromXYZ:Ah,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:wh,fromXYZ:Ah,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}var Ye=Gf();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yi,La=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=Js("canvas")),Yi.width=e.width,Yi.height=e.height;let s=Yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Js("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jn(t[n]/255)*255):t[n]=Jn(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hf=0,ms=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bl(s[a].image)):r.push(bl(s[a]))}else r=bl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?La.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}var Wf=0,wl=new I,Qt=class i extends Ln{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Rn,s=Rn,r=Ft,a=yi,o=fn,l=cn,c=i.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Pn(),this.name="",this.source=new ms(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wl).x}get height(){return this.source.getSize(wl).y}get depth(){return this.source.getSize(wl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ra:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ra:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=gc;Qt.DEFAULT_ANISOTROPY=1;var Oc=class Oc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],y=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,v=(f+1)/2,M=(g+1)/2,w=(u+h)/4,C=(d+y)/4,x=(m+p)/4;return A>v&&A>M?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=C/n):v>M?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=x/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=C/r,s=x/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-m)*(p-m)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(d-y)/b,this.z=(h-u)/b,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oc.prototype.isVector4=!0;var st=Oc,Da=class extends Ln{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Qt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ms(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Da{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},js=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ua=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var lo=class lo{constructor(e,t,n,s,r,a,o,l,c,u,d,h,f,m,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,f,m,y,p)}set(e,t,n,s,r,a,o,l,c,u,d,h,f,m,y,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=m,g[11]=y,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),a=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,m=o*u,y=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,m=c*u,y=c*d;t[0]=h+y*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,m=c*u,y=c*d;t[0]=h-y*o,t[4]=-a*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,m=o*u,y=o*d;t[0]=l*u,t[4]=m*c-f,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,m=o*l,y=o*c;t[0]=l*u,t[4]=y-h*d,t[8]=m*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+m,t[10]=h-y*d}else if(e.order==="XZY"){let h=a*l,f=a*c,m=o*l,y=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=a*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xf,e,qf)}lookAt(e,t,n){let s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ri.crossVectors(n,nn),ri.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ri.crossVectors(n,nn)),ri.normalize(),Xr.crossVectors(nn,ri),s[0]=ri.x,s[4]=Xr.x,s[8]=nn.x,s[1]=ri.y,s[5]=Xr.y,s[9]=nn.y,s[2]=ri.z,s[6]=Xr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],m=n[2],y=n[6],p=n[10],g=n[14],b=n[3],A=n[7],v=n[11],M=n[15],w=s[0],C=s[4],x=s[8],E=s[12],P=s[1],R=s[5],F=s[9],V=s[13],U=s[2],O=s[6],X=s[10],k=s[14],j=s[3],q=s[7],Q=s[11],te=s[15];return r[0]=a*w+o*P+l*U+c*j,r[4]=a*C+o*R+l*O+c*q,r[8]=a*x+o*F+l*X+c*Q,r[12]=a*E+o*V+l*k+c*te,r[1]=u*w+d*P+h*U+f*j,r[5]=u*C+d*R+h*O+f*q,r[9]=u*x+d*F+h*X+f*Q,r[13]=u*E+d*V+h*k+f*te,r[2]=m*w+y*P+p*U+g*j,r[6]=m*C+y*R+p*O+g*q,r[10]=m*x+y*F+p*X+g*Q,r[14]=m*E+y*V+p*k+g*te,r[3]=b*w+A*P+v*U+M*j,r[7]=b*C+A*R+v*O+M*q,r[11]=b*x+A*F+v*X+M*Q,r[15]=b*E+A*V+v*k+M*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],y=e[7],p=e[11],g=e[15],b=l*f-c*h,A=o*f-c*d,v=o*h-l*d,M=a*f-c*u,w=a*h-l*u,C=a*d-o*u;return t*(y*b-p*A+g*v)-n*(m*b-p*M+g*w)+s*(m*A-y*M+g*C)-r*(m*v-y*w+p*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],y=e[13],p=e[14],g=e[15],b=t*o-n*a,A=t*l-s*a,v=t*c-r*a,M=n*l-s*o,w=n*c-r*o,C=s*c-r*l,x=u*y-d*m,E=u*p-h*m,P=u*g-f*m,R=d*p-h*y,F=d*g-f*y,V=h*g-f*p,U=b*V-A*F+v*R+M*P-w*E+C*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/U;return e[0]=(o*V-l*F+c*R)*O,e[1]=(s*F-n*V-r*R)*O,e[2]=(y*C-p*w+g*M)*O,e[3]=(h*w-d*C-f*M)*O,e[4]=(l*P-a*V-c*E)*O,e[5]=(t*V-s*P+r*E)*O,e[6]=(p*v-m*C-g*A)*O,e[7]=(u*C-h*v+f*A)*O,e[8]=(a*F-o*P+c*x)*O,e[9]=(n*P-t*F-r*x)*O,e[10]=(m*w-y*v+g*b)*O,e[11]=(d*v-u*w-f*b)*O,e[12]=(o*E-a*R-l*x)*O,e[13]=(t*R-n*E+s*x)*O,e[14]=(y*A-m*M-p*b)*O,e[15]=(u*M-d*A+h*b)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,m=r*d,y=a*u,p=a*d,g=o*d,b=l*c,A=l*u,v=l*d,M=n.x,w=n.y,C=n.z;return s[0]=(1-(y+g))*M,s[1]=(f+v)*M,s[2]=(m-A)*M,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(h+g))*w,s[6]=(p+b)*w,s[7]=0,s[8]=(m+A)*C,s[9]=(p-b)*C,s[10]=(1-(h+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),l=Zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),mn.copy(this);let c=1/a,u=1/o,d=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,t.setFromRotationMatrix(mn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=yn,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),m,y;if(l)m=r/(a-r),y=a*r/(a-r);else if(o===yn)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Zs)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=yn,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),m,y;if(l)m=1/(a-r),y=a/(a-r);else if(o===yn)m=-2/(a-r),y=-(a+r)/(a-r);else if(o===Zs)m=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};lo.prototype.isMatrix4=!0;var ct=lo,Zi=new I,mn=new ct,Xf=new I(0,0,0),qf=new I(1,1,1),ri=new I,Xr=new I,nn=new I,Eh=new ct,Th=new Dn,hi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Th.setFromEuler(this),this.setFromQuaternion(Th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var Qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$f=0,Ch=new I,Ji=new Dn,Wn=new ct,qr=new I,Os=new I,Yf=new I,Zf=new Dn,Rh=new I(1,0,0),Ph=new I(0,1,0),Ih=new I(0,0,1),Lh={type:"added"},Jf={type:"removed"},Ki={type:"childadded",child:null},Al={type:"childremoved",child:null},tn=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new hi,n=new Dn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new ke}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Rh,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Ch.copy(e).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rh,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qr.copy(e):qr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Os,qr,this.up):Wn.lookAt(qr,Os,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Wn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lh),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jf),Al.child=e,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lh),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,Yf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new I(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ct=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kf={type:"move"},gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,n),g=this._getHandJoint(c,y);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},$r={h:0,s:0,l:0};function El(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=Tc(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=El(a,r,e+1/3),this.g=El(a,r,e),this.b=El(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=rn){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){let n=ku[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return Ye.workingToColorSpace(Xt.copy(this),e),Math.round(Ve(Xt.r*255,0,255))*65536+Math.round(Ve(Xt.g*255,0,255))*256+Math.round(Ve(Xt.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=rn){Ye.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL($r);let n=Hs(ai.h,$r.h,t),s=Hs(ai.s,$r.s,t),r=Hs(ai.l,$r.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new Fe;Fe.NAMES=ku;var ui=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},gn=new I,Xn=new I,Tl=new I,qn=new I,ji=new I,Qi=new I,Dh=new I,Cl=new I,Rl=new I,Pl=new I,Il=new st,Ll=new st,Dl=new st,Zn=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gn.subVectors(e,t),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gn.subVectors(s,t),Xn.subVectors(n,t),Tl.subVectors(e,t);let a=gn.dot(gn),o=gn.dot(Xn),l=gn.dot(Tl),c=Xn.dot(Xn),u=Xn.dot(Tl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,m=(a*u-o*l)*h;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Il.setScalar(0),Ll.setScalar(0),Dl.setScalar(0),Il.fromBufferAttribute(e,t),Ll.fromBufferAttribute(e,n),Dl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Il,r.x),a.addScaledVector(Ll,r.y),a.addScaledVector(Dl,r.z),a}static isFrontFacing(e,t,n,s){return gn.subVectors(n,t),Xn.subVectors(e,t),gn.cross(Xn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),gn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ji.subVectors(s,n),Qi.subVectors(r,n),Cl.subVectors(e,n);let l=ji.dot(Cl),c=Qi.dot(Cl);if(l<=0&&c<=0)return t.copy(n);Rl.subVectors(e,s);let u=ji.dot(Rl),d=Qi.dot(Rl);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ji,a);Pl.subVectors(e,r);let f=ji.dot(Pl),m=Qi.dot(Pl);if(m>=0&&f<=m)return t.copy(r);let y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Qi,o);let p=u*m-f*d;if(p<=0&&d-u>=0&&f-m>=0)return Dh.subVectors(r,s),o=(d-u)/(d-u+(f-m)),t.copy(s).addScaledVector(Dh,o);let g=1/(p+y+h);return a=y*g,o=h*g,t.copy(n).addScaledVector(ji,a).addScaledVector(Qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},an=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Zr.subVectors(this.max,Bs),es.subVectors(e.a,Bs),ts.subVectors(e.b,Bs),ns.subVectors(e.c,Bs),oi.subVectors(ts,es),li.subVectors(ns,ts),Ri.subVectors(es,ns);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ri.z,Ri.y,oi.z,0,-oi.x,li.z,0,-li.x,Ri.z,0,-Ri.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ri.y,Ri.x,0];return!Ul(t,es,ts,ns,Zr)||(t=[1,0,0,0,1,0,0,0,1],!Ul(t,es,ts,ns,Zr))?!1:(Jr.crossVectors(oi,li),t=[Jr.x,Jr.y,Jr.z],Ul(t,es,ts,ns,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$n=[new I,new I,new I,new I,new I,new I,new I,new I],_n=new I,Yr=new an,es=new I,ts=new I,ns=new I,oi=new I,li=new I,Ri=new I,Bs=new I,Zr=new I,Jr=new I,Pi=new I;function Ul(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Pi.fromArray(i,r);let o=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),u=n.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var wt=new I,Kr=new we,jf=0,mt=class extends Ln{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ac,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var er=class extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var tr=class extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Qf=new an,ks=new I,Nl=new I,dn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Qf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);let t=ks.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(Nl)),this.expandByPoint(ks.copy(e.center).sub(Nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ep=0,un=new ct,Fl=new tn,is=new I,sn=new an,zs=new an,Lt=new I,gt=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wf(e)?tr:er)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return Fl.lookAt(e),Fl.updateMatrix(),this.applyMatrix4(Fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(sn.min,zs.min),sn.expandByPoint(Lt),Lt.addVectors(sn.max,zs.max),sn.expandByPoint(Lt)):(sn.expandByPoint(zs.min),sn.expandByPoint(zs.max))}sn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Lt.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(e,c),Lt.add(is)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new I,l[x]=new I;let c=new I,u=new I,d=new I,h=new we,f=new we,m=new we,y=new I,p=new I;function g(x,E,P){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,P),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,P),u.sub(c),d.sub(c),f.sub(h),m.sub(h);let R=1/(f.x*m.y-m.x*f.y);isFinite(R)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(R),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(R),o[x].add(y),o[E].add(y),o[P].add(y),l[x].add(p),l[E].add(p),l[P].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,E=b.length;x<E;++x){let P=b[x],R=P.start,F=P.count;for(let V=R,U=R+F;V<U;V+=3)g(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let A=new I,v=new I,M=new I,w=new I;function C(x){M.fromBufferAttribute(s,x),w.copy(M);let E=o[x];A.copy(E),A.sub(M.multiplyScalar(M.dot(E))).normalize(),v.crossVectors(w,E);let R=v.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,R)}for(let x=0,E=b.length;x<E;++x){let P=b[x],R=P.start,F=P.count;for(let V=R,U=R+F;V<U;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,f=e.count;h<f;h+=3){let m=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,m=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let g=0;g<u;g++)h[m++]=c[f++]}return new mt(h,u,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Na=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ac,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Jt=new I,Sn=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ks("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ks("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ol=new I,tp=new I,np=new ke,xn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ol.subVectors(n,t).cross(tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ol),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||np.getNormalMatrix(e),s=this.coplanarPoint(Ol).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ip=0,Kn=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Fn,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=oc,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new xn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new we().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new we().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Yn=new I,Bl=new I,jr=new I,Qr=new I,_s=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Bl.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(Bl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(jr),o=Qr.dot(this.direction),l=-Qr.dot(jr),c=Qr.lengthSq(),u=Math.abs(1-a*a),d,h,f,m;if(u>0)if(d=a*l-o,h=a*o-l,m=r*u,d>=0)if(h>=-m)if(h<=m){let y=1/u;d*=y,h*=y,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Bl).addScaledVector(jr,h),f}intersectSphere(e,t){if(e.radius<0)return null;Yn.subVectors(e.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,m=t.x-a.x,y=t.y-a.y,p=t.z-a.z,g=n.x-a.x,b=n.y-a.y,A=n.z-a.z,v=Math.abs(l),M=Math.abs(c),w=Math.abs(u),C,x,E,P,R,F,V,U,O,X,k,j;if(v>=M&&v>=w?(E=l,F=d,O=m,j=g,l>=0?(C=c,x=u,P=h,R=f,V=y,U=p,X=b,k=A):(C=u,x=c,P=f,R=h,V=p,U=y,X=A,k=b)):M>=w?(E=c,F=h,O=y,j=b,c>=0?(C=u,x=l,P=f,R=d,V=p,U=m,X=A,k=g):(C=l,x=u,P=d,R=f,V=m,U=p,X=g,k=A)):(E=u,F=f,O=p,j=A,u>=0?(C=l,x=c,P=d,R=h,V=m,U=y,X=g,k=b):(C=c,x=l,P=h,R=d,V=y,U=m,X=b,k=g)),E===0)return null;let q=C/E,Q=x/E,te=1/E,be=P-q*F,ye=R-Q*F,Ge=V-q*O,Be=U-Q*O,Xe=X-q*j,Z=k-Q*j,se=Xe*Be-Z*Ge,xe=be*Z-ye*Xe,Le=Ge*ye-Be*be;if(s){if(se<0||xe<0||Le<0)return null}else if((se<0||xe<0||Le<0)&&(se>0||xe>0||Le>0))return null;let ve=se+xe+Le;if(ve===0)return null;let ze=te*(se*F+xe*O+Le*j);return(ve>0?ze<0:ze>0)?null:this.at(ze/ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ui=class extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Uh=new ct,Ii=new _s,ea=new dn,Nh=new I,ta=new I,na=new I,ia=new I,kl=new I,sa=new I,Fh=new I,ra=new I,qt=class extends tn{constructor(e=new gt,t=new Ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(kl.fromBufferAttribute(d,e),a?sa.addScaledVector(kl,u):sa.addScaledVector(kl.sub(t),u))}t.add(sa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(ea.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(ea,Nh)===null||Ii.origin.distanceToSquared(Nh)>(e.far-e.near)**2))&&(Uh.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(Uh),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=h.length;m<y;m++){let p=h[m],g=a[p.materialIndex],b=Math.max(p.start,f.start),A=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=b,M=A;v<M;v+=3){let w=o.getX(v),C=o.getX(v+1),x=o.getX(v+2);s=aa(this,g,e,n,c,u,d,w,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=m,g=y;p<g;p+=3){let b=o.getX(p),A=o.getX(p+1),v=o.getX(p+2);s=aa(this,a,e,n,c,u,d,b,A,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=h.length;m<y;m++){let p=h[m],g=a[p.materialIndex],b=Math.max(p.start,f.start),A=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=b,M=A;v<M;v+=3){let w=v,C=v+1,x=v+2;s=aa(this,g,e,n,c,u,d,w,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=m,g=y;p<g;p+=3){let b=p,A=p+1,v=p+2;s=aa(this,a,e,n,c,u,d,b,A,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function sp(i,e,t,n,s,r,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===xi,o),l===null)return null;ra.copy(o),ra.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:i}}function aa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ta),i.getVertexPosition(l,na),i.getVertexPosition(c,ia);let u=sp(i,e,t,n,ta,na,ia,Fh);if(u){let d=new I;Zn.getBarycoord(Fh,ta,na,ia,d),s&&(u.uv=Zn.getInterpolatedAttribute(s,o,l,c,d,new we)),r&&(u.uv1=Zn.getInterpolatedAttribute(r,o,l,c,d,new we)),a&&(u.normal=Zn.getInterpolatedAttribute(a,o,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new I,materialIndex:0};Zn.getNormal(ta,na,ia,h.normal),u.face=h,u.barycoord=d}return u}var Fa=class extends Qt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ut,u=Ut,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Li=new dn,rp=new we(.5,.5),oa=new I,nr=class{constructor(e=new xn,t=new xn,n=new xn,s=new xn,r=new xn,a=new xn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],m=r[8],y=r[9],p=r[10],g=r[11],b=r[12],A=r[13],v=r[14],M=r[15];if(s[0].setComponents(c-a,f-u,g-m,M-b).normalize(),s[1].setComponents(c+a,f+u,g+m,M+b).normalize(),s[2].setComponents(c+o,f+d,g+y,M+A).normalize(),s[3].setComponents(c-o,f-d,g-y,M-A).normalize(),n)s[4].setComponents(l,h,p,v).normalize(),s[5].setComponents(c-l,f-h,g-p,M-v).normalize();else if(s[4].setComponents(c-l,f-h,g-p,M-v).normalize(),t===yn)s[5].setComponents(c+l,f+h,g+p,M+v).normalize();else if(t===Zs)s[5].setComponents(l,h,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);let t=rp.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(oa.x=s.normal.x>0?e.max.x:e.min.x,oa.y=s.normal.y>0?e.max.y:e.min.y,oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var di=class extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Oa=new I,Ba=new I,Oh=new ct,Vs=new _s,la=new dn,zl=new I,Bh=new I,Ni=class extends tn{constructor(e=new gt,t=new di){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Oa.fromBufferAttribute(t,s-1),Ba.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Oa.distanceTo(Ba);e.setAttribute("lineDistance",new dt(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;Oh.copy(s).invert(),Vs.copy(e.ray).applyMatrix4(Oh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let y=f,p=m-1;y<p;y+=c){let g=u.getX(y),b=u.getX(y+1),A=ca(this,e,Vs,l,g,b,y);A&&t.push(A)}if(this.isLineLoop){let y=u.getX(m-1),p=u.getX(f),g=ca(this,e,Vs,l,y,p,m-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let y=f,p=m-1;y<p;y+=c){let g=ca(this,e,Vs,l,y,y+1,y);g&&t.push(g)}if(this.isLineLoop){let y=ca(this,e,Vs,l,m-1,f,m-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ca(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Oa.fromBufferAttribute(o,s),Ba.fromBufferAttribute(o,r),t.distanceSqToSegment(Oa,Ba,zl,Bh)>n)return;zl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(zl);if(!(c<e.near||c>e.far))return{distance:c,point:Bh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var kh=new I,zh=new I,xs=class extends Ni{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)kh.fromBufferAttribute(t,s),zh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+kh.distanceTo(zh);e.setAttribute("lineDistance",new dt(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ka=class extends Kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vh=new ct,Kl=new _s,ha=new dn,ua=new I,Fi=class extends tn{constructor(e=new gt,t=new ka){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,e.ray.intersectsSphere(ha)===!1)return;Vh.copy(s).invert(),Kl.copy(e.ray).applyMatrix4(Vh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=h,y=f;m<y;m++){let p=c.getX(m);ua.fromBufferAttribute(d,p),Gh(ua,p,l,s,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=h,y=f;m<y;m++)ua.fromBufferAttribute(d,m),Gh(ua,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Gh(i,e,t,n,s,r,a){let o=Kl.distanceSqToPoint(i);if(o<t){let l=new I;Kl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ir=class extends Qt{constructor(e=[],t=vi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var fi=class extends Qt{constructor(e,t,n=bn,s,r,a,o=Ut,l=Ut,c,u=In,d=1){if(u!==In&&u!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ms(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},za=class extends fi{constructor(e,t=bn,n=vi,s,r,a=Ut,o=Ut,l,c=In){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},sr=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},vs=class i extends gt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function m(y,p,g,b,A,v,M,w,C,x,E){let P=v/C,R=M/x,F=v/2,V=M/2,U=w/2,O=C+1,X=x+1,k=0,j=0,q=new I;for(let Q=0;Q<X;Q++){let te=Q*R-V;for(let be=0;be<O;be++){let ye=be*P-F;q[y]=ye*b,q[p]=te*A,q[g]=U,c.push(q.x,q.y,q.z),q[y]=0,q[p]=0,q[g]=w>0?1:-1,u.push(q.x,q.y,q.z),d.push(be/C),d.push(1-Q/x),k+=1}}for(let Q=0;Q<x;Q++)for(let te=0;te<C;te++){let be=h+te+O*Q,ye=h+te+O*(Q+1),Ge=h+(te+1)+O*(Q+1),Be=h+(te+1)+O*Q;l.push(be,ye,Be),l.push(ye,Ge,Be),j+=6}o.addGroup(f,j,E),f+=j,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var rr=class i extends gt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let A=new I,v=new I,M=new I;for(let w=0;w<t.length;w+=3)f(t[w+0],A),f(t[w+1],v),f(t[w+2],M),l(A,v,M,b)}function l(b,A,v,M){let w=M+1,C=[];for(let x=0;x<=w;x++){C[x]=[];let E=b.clone().lerp(v,x/w),P=A.clone().lerp(v,x/w),R=w-x;for(let F=0;F<=R;F++)F===0&&x===w?C[x][F]=E:C[x][F]=E.clone().lerp(P,F/R)}for(let x=0;x<w;x++)for(let E=0;E<2*(w-x)-1;E++){let P=Math.floor(E/2);E%2===0?(h(C[x][P+1]),h(C[x+1][P]),h(C[x][P])):(h(C[x][P+1]),h(C[x+1][P+1]),h(C[x+1][P]))}}function c(b){let A=new I;for(let v=0;v<r.length;v+=3)A.x=r[v+0],A.y=r[v+1],A.z=r[v+2],A.normalize().multiplyScalar(b),r[v+0]=A.x,r[v+1]=A.y,r[v+2]=A.z}function u(){let b=new I;for(let A=0;A<r.length;A+=3){b.x=r[A+0],b.y=r[A+1],b.z=r[A+2];let v=p(b)/2/Math.PI+.5,M=g(b)/Math.PI+.5;a.push(v,1-M)}m(),d()}function d(){for(let b=0;b<a.length;b+=6){let A=a[b+0],v=a[b+2],M=a[b+4],w=Math.max(A,v,M),C=Math.min(A,v,M);w>.9&&C<.1&&(A<.2&&(a[b+0]+=1),v<.2&&(a[b+2]+=1),M<.2&&(a[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function f(b,A){let v=b*3;A.x=e[v+0],A.y=e[v+1],A.z=e[v+2]}function m(){let b=new I,A=new I,v=new I,M=new I,w=new we,C=new we,x=new we;for(let E=0,P=0;E<r.length;E+=9,P+=6){b.set(r[E+0],r[E+1],r[E+2]),A.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),w.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),M.copy(b).add(A).add(v).divideScalar(3);let R=p(M);y(w,P+0,b,R),y(C,P+2,A,R),y(x,P+4,v,R)}}function y(b,A,v,M){M<0&&b.x===1&&(a[A]=b.x-1),v.x===0&&v.z===0&&(a[A]=M/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var da=new I,fa=new I,Vl=new I,pa=new Zn,ys=class extends gt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(cs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:y,b:p,c:g}=pa;if(y.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),pa.getNormal(Vl),d[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){let A=(b+1)%3,v=d[b],M=d[A],w=pa[u[b]],C=pa[u[A]],x=`${v}_${M}`,E=`${M}_${v}`;E in h&&h[E]?(Vl.dot(h[E].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(C.x,C.y,C.z)),h[E]=null):x in h||(h[x]={index0:c[b],index1:c[A],normal:Vl.clone()})}}for(let m in h)if(h[m]){let{index0:y,index1:p}=h[m];da.fromBufferAttribute(o,y),fa.fromBufferAttribute(o,p),f.push(da.x,da.y,da.z),f.push(fa.x,fa.y,fa.z)}this.setAttribute("position",new dt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new we:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new ct;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ve(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ve(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ss=class extends on{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new we){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Va=class extends Ss{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Rc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Hh=new I,Wh=new I,Gl=new Rc,Hl=new Rc,Wl=new Rc,Ga=class extends on{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Wh.subVectors(s[0],s[1]).add(s[0]),c=Wh);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Hh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Hh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);y<1e-4&&(y=1),m<1e-4&&(m=y),p<1e-4&&(p=y),Gl.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,m,y,p),Hl.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,m,y,p),Wl.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,m,y,p)}else this.curveType==="catmullrom"&&(Gl.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Hl.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Wl.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Gl.calc(l),Hl.calc(l),Wl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Xh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function ap(i,e){let t=1-i;return t*t*e}function op(i,e){return 2*(1-i)*i*e}function lp(i,e){return i*i*e}function Ws(i,e,t,n){return ap(i,e)+op(i,t)+lp(i,n)}function cp(i,e){let t=1-i;return t*t*t*e}function hp(i,e){let t=1-i;return 3*t*t*i*e}function up(i,e){return 3*(1-i)*i*i*e}function dp(i,e){return i*i*i*e}function Xs(i,e,t,n,s){return cp(i,e)+hp(i,t)+up(i,n)+dp(i,s)}var ar=class extends on{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xs(e,s.x,r.x,a.x,o.x),Xs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ha=class extends on{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xs(e,s.x,r.x,a.x,o.x),Xs(e,s.y,r.y,a.y,o.y),Xs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},or=class extends on{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends on{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lr=class extends on{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ws(e,s.x,r.x,a.x),Ws(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends on{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ws(e,s.x,r.x,a.x),Ws(e,s.y,r.y,a.y),Ws(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cr=class extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Xh(o,l.x,c.x,u.x,d.x),Xh(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new we().fromArray(s))}return this}},qh=Object.freeze({__proto__:null,ArcCurve:Va,CatmullRomCurve3:Ga,CubicBezierCurve:ar,CubicBezierCurve3:Ha,EllipseCurve:Ss,LineCurve:or,LineCurve3:Wa,QuadraticBezierCurve:lr,QuadraticBezierCurve3:Xa,SplineCurve:cr}),qa=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new qh[s.type]().fromJSON(s))}return this}},hr=class extends qa{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new or(this.currentPoint.clone(),new we(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new lr(this.currentPoint.clone(),new we(e,t),new we(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ar(this.currentPoint.clone(),new we(e,t),new we(n,s),new we(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new cr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ss(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ms=class extends hr{constructor(e){super(e),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new hr().fromJSON(s))}return this}};function fp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=zu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=xp(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,d=l;for(let h=t;h<s;h+=t){let f=i[h],m=i[h+1];f<o&&(o=f),m<l&&(l=m),f>u&&(u=f),m>d&&(d=m)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return ur(r,a,t,o,l,c,0),a}function zu(i,e,t,n,s){let r;if(s===Rp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=$h(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=$h(a/n|0,i[a],i[a+1],r);return r&&bs(r,r.next)&&(fr(r),r=r.next),r}function Oi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(bs(t,t.next)||pt(t.prev,t,t.next)===0)){if(fr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ur(i,e,t,n,s,r,a){if(!i)return;!a&&r&&bp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?mp(i,n,s,r):pp(i)){e.push(l.i,i.i,c.i),fr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=gp(Oi(i),e),ur(i,e,t,n,s,r,2)):a===2&&_p(i,e,t,n,s,r):ur(Oi(i),e,t,n,s,r,1);break}}}function pp(i){let e=i.prev,t=i,n=i.next;if(pt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&Gs(s,o,r,l,a,c,m.x,m.y)&&pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function mp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(pt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),m=Math.min(u,d,h),y=Math.max(o,l,c),p=Math.max(u,d,h),g=jl(f,m,e,t,n),b=jl(y,p,e,t,n),A=i.prevZ,v=i.nextZ;for(;A&&A.z>=g&&v&&v.z<=b;){if(A.x>=f&&A.x<=y&&A.y>=m&&A.y<=p&&A!==s&&A!==a&&Gs(o,u,l,d,c,h,A.x,A.y)&&pt(A.prev,A,A.next)>=0||(A=A.prevZ,v.x>=f&&v.x<=y&&v.y>=m&&v.y<=p&&v!==s&&v!==a&&Gs(o,u,l,d,c,h,v.x,v.y)&&pt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;A&&A.z>=g;){if(A.x>=f&&A.x<=y&&A.y>=m&&A.y<=p&&A!==s&&A!==a&&Gs(o,u,l,d,c,h,A.x,A.y)&&pt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=y&&v.y>=m&&v.y<=p&&v!==s&&v!==a&&Gs(o,u,l,d,c,h,v.x,v.y)&&pt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function gp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!bs(n,s)&&Gu(n,t,t.next,s)&&dr(n,s)&&dr(s,n)&&(e.push(n.i,t.i,s.i),fr(t),fr(t.next),t=i=s),t=t.next}while(t!==i);return Oi(t)}function _p(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ep(a,o)){let l=Hu(a,o);a=Oi(a,a.next),l=Oi(l,l.next),ur(a,e,t,n,s,r,0),ur(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function xp(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=zu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ap(c))}s.sort(vp);for(let r=0;r<s.length;r++)t=yp(s[r],t);return t}function vp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function yp(i,e){let t=Sp(i,e);if(!t)return e;let n=Hu(t,i);return Oi(n,n.next),Oi(t,t.next)}function Sp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(bs(i,t))return t;do{if(bs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Vu(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);dr(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&Mp(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function Mp(i,e){return pt(i.prev,i,e.prev)<0&&pt(e.next,i,i.next)<0}function bp(i,e,t,n){let s=i;do s.z===0&&(s.z=jl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wp(s)}function wp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function jl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ap(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vu(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Gs(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Vu(i,e,t,n,s,r,a,o)}function Ep(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Tp(i,e)&&(dr(i,e)&&dr(e,i)&&Cp(i,e)&&(pt(i.prev,i,e.prev)||pt(i,e.prev,e))||bs(i,e)&&pt(i.prev,i,i.next)>0&&pt(e.prev,e,e.next)>0)}function pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function bs(i,e){return i.x===e.x&&i.y===e.y}function Gu(i,e,t,n){let s=ga(pt(i,e,t)),r=ga(pt(i,e,n)),a=ga(pt(t,n,i)),o=ga(pt(t,n,e));return!!(s!==r&&a!==o||s===0&&ma(i,t,e)||r===0&&ma(i,n,e)||a===0&&ma(t,i,n)||o===0&&ma(t,e,n))}function ma(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ga(i){return i>0?1:i<0?-1:0}function Tp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Gu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function dr(i,e){return pt(i.prev,i,i.next)<0?pt(i,e,i.next)>=0&&pt(i,i.prev,e)>=0:pt(i,e,i.prev)<0||pt(i,i.next,e)<0}function Cp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Hu(i,e){let t=Ql(i.i,i.x,i.y),n=Ql(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function $h(i,e,t,n){let s=Ql(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ql(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ec=class{static triangulate(e,t,n=2){return fp(e,t,n)}},us=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Yh(e),Zh(n,e);let a=e.length;t.forEach(Yh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Zh(n,t[l]);let o=ec.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Yh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Zh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var pr=class i extends rr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var mr=class i extends rr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},gr=class i extends gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],m=[],y=[],p=[];for(let g=0;g<u;g++){let b=g*h-a;for(let A=0;A<c;A++){let v=A*d-r;m.push(v,-b,0),y.push(0,0,1),p.push(A/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){let A=b+c*g,v=b+c*(g+1),M=b+1+c*(g+1),w=b+1+c*g;f.push(A,v,w),f.push(v,M,w)}this.setIndex(f),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var _r=class i extends gt{constructor(e=new Ms([new we(0,.5),new we(-.5,-.5),new we(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(r,3)),this.setAttribute("uv",new dt(a,2));function c(u){let d=s.length/3,h=u.extractPoints(t),f=h.shape,m=h.holes;us.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){let b=m[p];us.isClockWise(b)===!0&&(m[p]=b.reverse())}let y=us.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){let b=m[p];f=f.concat(b)}for(let p=0,g=f.length;p<g;p++){let b=f[p];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let p=0,g=y.length;p<g;p++){let b=y[p],A=b[0]+d,v=b[1]+d,M=b[2]+d;n.push(A,v,M),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Pp(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Pp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var xr=class extends gt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new I,r=new I;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let d=l[c],h=d.start,f=d.count;for(let m=h,y=h+f;m<y;m+=3)for(let p=0;p<3;p++){let g=o.getX(m+p),b=o.getX(m+(p+1)%3);s.fromBufferAttribute(a,g),r.fromBufferAttribute(a,b),Jh(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let u=3*o+c,d=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,d),Jh(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new dt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Jh(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}function zi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Kh(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Kh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function $t(i){let e={};for(let t=0;t<i.length;t++){let n=zi(i[t]);for(let s in n)e[s]=n[s]}return e}function Kh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ip(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var Ur={clone:zi,merge:$t},Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rt=class extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Ip(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new we().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new st().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ct().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},$a=class extends Rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ya=class extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Za=class extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ss(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Xl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var pi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ja=class extends pi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yl,endingEnd:Yl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zl:r=e,o=2*t-n;break;case Jl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zl:a=e,l=2*n-t;break;case Jl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),y=m*m,p=y*m,g=-h*p+2*h*y-h*m,b=(1+h)*p+(-1.5-2*h)*y+(-.5+h)*m+1,A=(-1-f)*p+(1.5+f)*y+.5*m,v=f*p-f*y;for(let M=0;M!==o;++M)r[M]=g*a[u+M]+b*a[c+M]+A*a[l+M]+v*a[d+M];return r}},Ka=class extends pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},ja=class extends pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qa=class extends pi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let m=(n-t)/(s-t),y=1-m;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*m;return r}let h=o*2,f=e-1;for(let m=0;m!==o;++m){let y=a[c+m],p=a[l+m],g=f*h+m*2,b=d[g],A=d[g+1],v=e*h+m*2,M=u[v],w=u[v+1],C=Np(n,t,b,M,s);r[m]=Wu(C,y,A,w,p)}return r}};function Wu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Up(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Np(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Wu(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Up(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ss(t,this.TimeBufferType),this.values=ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ss(e.times,Array),values:ss(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Xl(e.settings)&&(n.settings={inTangents:ss(e.settings.inTangents,Array),outTangents:ss(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case Ia:t=this.InterpolantFactoryMethodLinear;break;case ya:t=this.InterpolantFactoryMethodSmooth;break;case $l:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Ia;case this.InterpolantFactoryMethodSmooth:return ya;case this.InterpolantFactoryMethodBezier:return $l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Xl(this.settings)&&(jh(this.settings.inTangents,e),jh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ue("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Af(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ya,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let m=0;m!==n;++m){let y=t[d+m];if(y!==t[h+m]||y!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Xl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=Ia;var mi=class extends ln{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=qs;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};eo.prototype.ValueTypeName="color";var to=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};to.prototype.ValueTypeName="number";var no=class extends pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},vr=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new no(this.times,this.values,this.getValueSize(),e)}};vr.prototype.ValueTypeName="quaternion";vr.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends ln{constructor(e,t,n){super(e,t,n)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=qs;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};io.prototype.ValueTypeName="vector";var so=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xu=new so,ro=class{constructor(e){this.manager=e!==void 0?e:Xu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var _a=new I,xa=new Dn,Cn=new I,yr=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_a,xa,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,xa,Cn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(_a,xa,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,xa,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ci=new I,Qh=new we,eu=new we,Dt=class extends yr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Qh,eu),t.subVectors(eu,Qh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(cs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Sr=class extends yr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Mr=class extends gt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var rs=-90,as=1,ao=class extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dt(rs,as,e,t);s.layers=this.layers,this.add(s);let r=new Dt(rs,as,e,t);r.layers=this.layers,this.add(r);let a=new Dt(rs,as,e,t);a.layers=this.layers,this.add(a);let o=new Dt(rs,as,e,t);o.layers=this.layers,this.add(o);let l=new Dt(rs,as,e,t);l.layers=this.layers,this.add(l);let c=new Dt(rs,as,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},oo=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ic="\\[\\]\\.:\\/",Fp=new RegExp("["+Ic+"]","g"),Lc="[^"+Ic+"]",Op="[^"+Ic.replace("\\.","")+"]",Bp=/((?:WC+[\/:])*)/.source.replace("WC",Lc),kp=/(WCOD+)?/.source.replace("WCOD",Op),zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lc),Vp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lc),Gp=new RegExp("^"+Bp+kp+zp+Vp+"$"),Hp=["material","materials","bones","map"],tc=class{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fp,"")}static parseTrackName(e){let t=Gp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Hp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=tc;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sv=new Float32Array(1);var _i=class extends Na{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Bc=class Bc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Bc.prototype.isMatrix2=!0;var nc=Bc;var tu=new I,va=new I,os=new I,ls=new I,ql=new I,Wp=new I,Xp=new I,br=class{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){tu.subVectors(e,this.start),va.subVectors(this.end,this.start);let n=va.dot(va);if(n===0)return 0;let r=va.dot(tu)/n;return t&&(r=Ve(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Wp,n=Xp){let s=10000000000000001e-32,r,a,o=this.start,l=e.start,c=this.end,u=e.end;os.subVectors(c,o),ls.subVectors(u,l),ql.subVectors(o,l);let d=os.dot(os),h=ls.dot(ls),f=ls.dot(ql);if(d<=s&&h<=s)return t.copy(o),n.copy(l),t.sub(n),t.dot(t);if(d<=s)r=0,a=f/h,a=Ve(a,0,1);else{let m=os.dot(ql);if(h<=s)a=0,r=Ve(-m/d,0,1);else{let y=os.dot(ls),p=d*h-y*y;p!==0?r=Ve((y*f-m*h)/p,0,1):r=0,a=(y*r+f)/h,a<0?(a=0,r=Ve(-m/d,0,1)):a>1&&(a=1,r=Ve((y-m)/d,0,1))}}return t.copy(o).addScaledVector(os,r),n.copy(l).addScaledVector(ls,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Dc(i,e,t,n){let s=qp(n);switch(t){case Sc:return i*e;case bc:return i*e/s.components*s.byteLength;case go:return i*e/s.components*s.byteLength;case Mi:return i*e*2/s.components*s.byteLength;case _o:return i*e*2/s.components*s.byteLength;case Mc:return i*e*3/s.components*s.byteLength;case fn:return i*e*4/s.components*s.byteLength;case xo:return i*e*4/s.components*s.byteLength;case Cr:case Rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pr:case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yo:case Mo:return Math.max(i,16)*Math.max(e,8)/4;case vo:case So:return Math.max(i,8)*Math.max(e,8)/2;case bo:case wo:case Eo:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ao:case Lr:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ho:case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qo:case $o:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Dr:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qp(i){switch(i){case cn:case _c:return{byteLength:1,components:1};case As:case xc:case An:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case bn:case fo:case wn:return{byteLength:4,components:1};case vc:case yc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Yp(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){let m=d[h],y=d[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){let y=d[f];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,im=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ym=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Am="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Vm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$m=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ym=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ug=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,n0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,i0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,h0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,p0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,y0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Zp,alphahash_pars_fragment:Jp,alphamap_fragment:Kp,alphamap_pars_fragment:jp,alphatest_fragment:Qp,alphatest_pars_fragment:em,aomap_fragment:tm,aomap_pars_fragment:nm,batching_pars_vertex:im,batching_vertex:sm,begin_vertex:rm,beginnormal_vertex:am,bsdfs:om,iridescence_fragment:lm,bumpmap_pars_fragment:cm,clipping_planes_fragment:hm,clipping_planes_pars_fragment:um,clipping_planes_pars_vertex:dm,clipping_planes_vertex:fm,color_fragment:pm,color_pars_fragment:mm,color_pars_vertex:gm,color_vertex:_m,common:xm,cube_uv_reflection_fragment:vm,defaultnormal_vertex:ym,displacementmap_pars_vertex:Sm,displacementmap_vertex:Mm,emissivemap_fragment:bm,emissivemap_pars_fragment:wm,colorspace_fragment:Am,colorspace_pars_fragment:Em,envmap_fragment:Tm,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Rm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Vm,envmap_vertex:Im,fog_vertex:Lm,fog_pars_vertex:Dm,fog_fragment:Um,fog_pars_fragment:Nm,gradientmap_pars_fragment:Fm,lightmap_pars_fragment:Om,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:km,lights_pars_begin:zm,lights_toon_fragment:Gm,lights_toon_pars_fragment:Hm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Xm,lights_physical_fragment:qm,lights_physical_pars_fragment:$m,lights_fragment_begin:Ym,lights_fragment_maps:Zm,lights_fragment_end:Jm,lightprobes_pars_fragment:Km,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:Qm,logdepthbuf_pars_vertex:eg,logdepthbuf_vertex:tg,map_fragment:ng,map_pars_fragment:ig,map_particle_fragment:sg,map_particle_pars_fragment:rg,metalnessmap_fragment:ag,metalnessmap_pars_fragment:og,morphinstance_vertex:lg,morphcolor_vertex:cg,morphnormal_vertex:hg,morphtarget_pars_vertex:ug,morphtarget_vertex:dg,normal_fragment_begin:fg,normal_fragment_maps:pg,normal_pars_fragment:mg,normal_pars_vertex:gg,normal_vertex:_g,normalmap_pars_fragment:xg,clearcoat_normal_fragment_begin:vg,clearcoat_normal_fragment_maps:yg,clearcoat_pars_fragment:Sg,iridescence_pars_fragment:Mg,opaque_fragment:bg,packing:wg,premultiplied_alpha_fragment:Ag,project_vertex:Eg,dithering_fragment:Tg,dithering_pars_fragment:Cg,roughnessmap_fragment:Rg,roughnessmap_pars_fragment:Pg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Lg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Ug,skinbase_vertex:Ng,skinning_pars_vertex:Fg,skinning_vertex:Og,skinnormal_vertex:Bg,specularmap_fragment:kg,specularmap_pars_fragment:zg,tonemapping_fragment:Vg,tonemapping_pars_fragment:Gg,transmission_fragment:Hg,transmission_pars_fragment:Wg,uv_pars_fragment:Xg,uv_pars_vertex:qg,uv_vertex:$g,worldpos_vertex:Yg,background_vert:Zg,background_frag:Jg,backgroundCube_vert:Kg,backgroundCube_frag:jg,cube_vert:Qg,cube_frag:e0,depth_vert:t0,depth_frag:n0,distance_vert:i0,distance_frag:s0,equirect_vert:r0,equirect_frag:a0,linedashed_vert:o0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:h0,meshlambert_vert:u0,meshlambert_frag:d0,meshmatcap_vert:f0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:_0,meshphong_frag:x0,meshphysical_vert:v0,meshphysical_frag:y0,meshtoon_vert:S0,meshtoon_frag:M0,points_vert:b0,points_frag:w0,shadow_vert:A0,shadow_frag:E0,sprite_vert:T0,sprite_frag:C0},de={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},jt={basic:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:$t([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:$t([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Fe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:$t([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:$t([de.points,de.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:$t([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:$t([de.common,de.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:$t([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:$t([de.sprite,de.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:$t([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:$t([de.lights,de.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};jt.physical={uniforms:$t([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var Ko={r:0,b:0,g:0},R0=new ct,pd=new ke;pd.set(-1,0,0,0,1,0,0,0,1);function P0(i,e,t,n,s,r){let a=new Fe(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let v=b.backgroundBlurriness>0;A=e.get(A,v)}return A}function m(b){let A=!1,v=f(b);v===null?p(a,o):v&&v.isColor&&(p(v,1),A=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(b,A){let v=f(A);v&&(v.isCubeTexture||v.mapping===Er)?(c===void 0&&(c=new qt(new vs(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:zi(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(R0.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pd),c.material.toneMapped=Ye.getTransfer(v.colorSpace)!==tt,(u!==v||d!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new qt(new gr(2,2),new Rt({name:"BackgroundMaterial",uniforms:zi(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(v.colorSpace)!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,A){b.getRGB(Ko,Pc(i)),t.buffers.color.setClear(Ko.r,Ko.g,Ko.b,A,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:m,addToRenderList:y,dispose:g}}function I0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(R,F,V,U,O){let X=!1,k=d(R,U,V,F);r!==k&&(r=k,c(r.object)),X=f(R,U,V,O),X&&m(R,U,V,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(R,F,V,U),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function d(R,F,V,U){let O=U.wireframe===!0,X=n[F.id];X===void 0&&(X={},n[F.id]=X);let k=R.isInstancedMesh===!0?R.id:0,j=X[k];j===void 0&&(j={},X[k]=j);let q=j[V.id];q===void 0&&(q={},j[V.id]=q);let Q=q[O];return Q===void 0&&(Q=h(l()),q[O]=Q),Q}function h(R){let F=[],V=[],U=[];for(let O=0;O<t;O++)F[O]=0,V[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:U,object:R,attributes:{},index:null}}function f(R,F,V,U){let O=r.attributes,X=F.attributes,k=0,j=V.getAttributes();for(let q in j)if(j[q].location>=0){let te=O[q],be=X[q];if(be===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(be=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(be=R.instanceColor)),te===void 0||te.attribute!==be||be&&te.data!==be.data)return!0;k++}return r.attributesNum!==k||r.index!==U}function m(R,F,V,U){let O={},X=F.attributes,k=0,j=V.getAttributes();for(let q in j)if(j[q].location>=0){let te=X[q];te===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(te=R.instanceColor));let be={};be.attribute=te,te&&te.data&&(be.data=te.data),O[q]=be,k++}r.attributes=O,r.attributesNum=k,r.index=U}function y(){let R=r.newAttributes;for(let F=0,V=R.length;F<V;F++)R[F]=0}function p(R){g(R,0)}function g(R,F){let V=r.newAttributes,U=r.enabledAttributes,O=r.attributeDivisors;V[R]=1,U[R]===0&&(i.enableVertexAttribArray(R),U[R]=1),O[R]!==F&&(i.vertexAttribDivisor(R,F),O[R]=F)}function b(){let R=r.newAttributes,F=r.enabledAttributes;for(let V=0,U=F.length;V<U;V++)F[V]!==R[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function A(R,F,V,U,O,X,k){k===!0?i.vertexAttribIPointer(R,F,V,O,X):i.vertexAttribPointer(R,F,V,U,O,X)}function v(R,F,V,U){y();let O=U.attributes,X=V.getAttributes(),k=F.defaultAttributeValues;for(let j in X){let q=X[j];if(q.location>=0){let Q=O[j];if(Q===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){let te=Q.normalized,be=Q.itemSize,ye=e.get(Q);if(ye===void 0)continue;let Ge=ye.buffer,Be=ye.type,Xe=ye.bytesPerElement,Z=Be===i.INT||Be===i.UNSIGNED_INT||Q.gpuType===fo;if(Q.isInterleavedBufferAttribute){let se=Q.data,xe=se.stride,Le=Q.offset;if(se.isInstancedInterleavedBuffer){for(let ve=0;ve<q.locationSize;ve++)g(q.location+ve,se.meshPerAttribute);R.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ve=0;ve<q.locationSize;ve++)p(q.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let ve=0;ve<q.locationSize;ve++)A(q.location+ve,be/q.locationSize,Be,te,xe*Xe,(Le+be/q.locationSize*ve)*Xe,Z)}else{if(Q.isInstancedBufferAttribute){for(let se=0;se<q.locationSize;se++)g(q.location+se,Q.meshPerAttribute);R.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let se=0;se<q.locationSize;se++)p(q.location+se);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let se=0;se<q.locationSize;se++)A(q.location+se,be/q.locationSize,Be,te,be*Xe,be/q.locationSize*se*Xe,Z)}}else if(k!==void 0){let te=k[j];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(q.location,te);break;case 3:i.vertexAttrib3fv(q.location,te);break;case 4:i.vertexAttrib4fv(q.location,te);break;default:i.vertexAttrib1fv(q.location,te)}}}}b()}function M(){E();for(let R in n){let F=n[R];for(let V in F){let U=F[V];for(let O in U){let X=U[O];for(let k in X)u(X[k].object),delete X[k];delete U[O]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;let F=n[R.id];for(let V in F){let U=F[V];for(let O in U){let X=U[O];for(let k in X)u(X[k].object),delete X[k];delete U[O]}}delete n[R.id]}function C(R){for(let F in n){let V=n[F];for(let U in V){let O=V[U];if(O[R.id]===void 0)continue;let X=O[R.id];for(let k in X)u(X[k].object),delete X[k];delete O[R.id]}}}function x(R){for(let F in n){let V=n[F],U=R.isInstancedMesh===!0?R.id:0,O=V[U];if(O!==void 0){for(let X in O){let k=O[X];for(let j in k)u(k[j].object),delete k[j];delete O[X]}delete V[U],Object.keys(V).length===0&&delete n[F]}}}function E(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:p,disableUnusedAttributes:b}}function L0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function D0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==fn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==cn&&C!==wn&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(De("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:v,maxSamples:M,samples:w}}function U0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new xn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let m=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!s||m===null||m.length===0||r&&!p)r?u(null):c();else{let b=r?0:n,A=b*4,v=g.clippingState||null;l.value=v,v=u(m,h,A,f);for(let M=0;M!==A;++M)v[M]=t[M];g.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,m){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,m!==!0||p===null){let g=f+y*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let A=0,v=f;A!==y;++A,v+=4)a.copy(d[A]).applyMatrix4(b,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}var Cs=4,N0=6,F0=20,O0=256,Nr=new Sr,qu=new Fe,kc=null,zc=0,Vc=0,Gc=!1,B0=new I,Vi=new I,Qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=B0}=r;kc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kc,zc,Vc),this._renderer.xr.enabled=Gc,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:An,format:fn,colorSpace:$s,depthBuffer:!1},s=$u(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=k0(r)),this._blurMaterial=V0(r,e,t),this._ggxMaterial=z0(r,e,t)}return s}_compileMaterial(e){let t=new qt(new gt,e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,n,s,r){let l=new Dt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(qu),d.toneMapping=Mn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qt(new vs,new Ui({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,g=!1,b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,g=!0):(p.color.copy(qu),g=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):v===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let M=this._cubeSize;Ts(s,v*M,A>2?M:0,M,M),d.setRenderTarget(s),g&&d.render(y,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===vi||e.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ts(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Nr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:m}=this,y=this._sizeLods[n],p=3*y*(n>m-Cs?n-m+Cs:0),g=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Ts(r,p,g,3*y,2*y),s.setRenderTarget(r),s.render(o,Nr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Ts(e,p,g,3*y,2*y),s.setRenderTarget(e),s.render(o,Nr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Cs?s-this._lodMax+Cs:0),h=4*(this._cubeSize-u);Ts(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(l,Nr)}};function k0(i){let e=[],t=[],n=i,s=i-Cs+1+N0;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,m=new Float32Array(f*h*d),y=new Float32Array(f*h*d);for(let g=0;g<d;g++){let b=g%3*2/3-1,A=g>2?0:-1,v=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];m.set(v,f*h*g);for(let M=0;M<h;M++){let w=u[M*2]*2-1,C=u[M*2+1]*2-1;g===0?Vi.set(1,C,w):g===1?Vi.set(-w,1,-C):g===2?Vi.set(-w,C,1):g===3?Vi.set(-1,C,-w):g===4?Vi.set(-w,-1,C):Vi.set(w,C,-1),Vi.toArray(y,(g*h+M)*f)}}let p=new gt;p.setAttribute("position",new mt(m,f)),p.setAttribute("outputDirection",new mt(y,f)),t.push(new qt(p,null)),n>Cs&&n--}return{lodMeshes:t,sizeLods:e}}function $u(i,e,t){let n=new en(i,e,t);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function z0(i,e,t){return new Rt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function V0(i,e,t){return new Rt({name:"SphericalGaussianBlur",defines:{SAMPLES:F0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Yu(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Zu(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function tl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var el=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ir(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vs(5,5,5),r=new Rt({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Nn});r.uniforms.tEquirect.value=t;let a=new qt(s,r),o=t.minFilter;return t.minFilter===yi&&(t.minFilter=Ft),new ao(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function G0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===co||f===ho)if(e.has(h)){let m=e.get(h).texture;return o(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let y=new el(m.height);return y.fromEquirectangularTexture(i,h),e.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,m=f===co||f===ho,y=f===vi||f===ki;if(m||y){let p=t.get(h),g=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new Qo(i)),p=m?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let b=h.image;return m&&b&&b.height>0||y&&b&&l(b)?(n===null&&(n=new Qo(i)),p=m?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===co?h.mapping=vi:f===ho&&(h.mapping=ki),h}function l(h){let f=0,m=6;for(let y=0;y<m;y++)h[y]!==void 0&&f++;return f===m}function c(h){let f=h.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function H0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Di("WebGLRenderer: "+n+" extension not supported."),s}}}function W0(i,e,t,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,m=d.attributes.position,y=0;if(m===void 0)return;if(f!==null){let b=f.array;y=f.version;for(let A=0,v=b.length;A<v;A+=3){let M=b[A+0],w=b[A+1],C=b[A+2];h.push(M,w,w,C,C,M)}}else{let b=m.array;y=m.version;for(let A=0,v=b.length/3-1;A<v;A+=3){let M=A+0,w=A+1,C=A+2;h.push(M,w,w,C,C,M)}}let p=new(m.count>=65535?tr:er)(h,1);p.version=y;let g=r.get(d);g&&e.remove(g),r.set(d,p)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function X0(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let y=0;for(let p=0;p<f;p++)y+=h[p];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function q0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $0(i,e,t){let n=new WeakMap,s=new st;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],A=0;f===!0&&(A=1),m===!0&&(A=2),y===!0&&(A=3);let v=o.attributes.position.count*A,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*M*4*d),C=new js(w,v,M,d);C.type=wn,C.needsUpdate=!0;let x=A*4;for(let P=0;P<d;P++){let R=p[P],F=g[P],V=b[P],U=v*M*4*P;for(let O=0;O<R.count;O++){let X=O*x;f===!0&&(s.fromBufferAttribute(R,O),w[U+X+0]=s.x,w[U+X+1]=s.y,w[U+X+2]=s.z,w[U+X+3]=0),m===!0&&(s.fromBufferAttribute(F,O),w[U+X+4]=s.x,w[U+X+5]=s.y,w[U+X+6]=s.z,w[U+X+7]=0),y===!0&&(s.fromBufferAttribute(V,O),w[U+X+8]=s.x,w[U+X+9]=s.y,w[U+X+10]=s.z,w[U+X+11]=V.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new we(v,M)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Y0(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Z0={[cc]:"LINEAR_TONE_MAPPING",[hc]:"REINHARD_TONE_MAPPING",[uc]:"CINEON_TONE_MAPPING",[dc]:"ACES_FILMIC_TONE_MAPPING",[pc]:"AGX_TONE_MAPPING",[mc]:"NEUTRAL_TONE_MAPPING",[fc]:"CUSTOM_TONE_MAPPING"};function J0(i,e,t,n,s,r){let a=new en(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new gt;c.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new dt([0,2,0,0,2,0],2));let u=new $a({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new qt(c,u),h=new Sr(-1,1,1,-1,0,1),f=null,m=null,y=!1,p,g=null,b=[],A=!1;this.setSize=function(v,M){a.setSize(v,M),o!==null&&o.setSize(v,M),l!==null&&l.setSize(v,M);for(let w=0;w<b.length;w++){let C=b[w];C.setSize&&C.setSize(v,M)}},this.setEffects=function(v){b=v,A=b.length>0&&b[0].isRenderPass===!0;let M=a.width,w=a.height;b.length>0&&o===null&&(o=new en(M,w,{type:An,depthBuffer:!1,stencilBuffer:!1}),l=new en(M,w,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<b.length;C++){let x=b[C];x.setSize&&x.setSize(M,w)}},this.begin=function(v,M){if(y||v.toneMapping===Mn&&b.length===0)return!1;if(g=M,M!==null){let w=M.width,C=M.height;(a.width!==w||a.height!==C)&&this.setSize(w,C)}return A===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=Mn,!0},this.hasRenderPass=function(){return A},this.end=function(v,M){v.toneMapping=p,y=!0;let w=a,C=o;for(let x=0;x<b.length;x++){let E=b[x];E.enabled!==!1&&(E.render(v,C,w,M),E.needsSwap!==!1&&(w=C,C=C===o?l:o))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,u.defines={},Ye.getTransfer(f)===tt&&(u.defines.SRGB_TRANSFER="");let x=Z0[m];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(g),v.render(d,h),g=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var md=new Qt,Xc=new fi(1,1),gd=new js,_d=new Ua,xd=new ir,Ju=[],Ku=[],ju=new Float32Array(16),Qu=new Float32Array(9),ed=new Float32Array(4);function Is(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ju[s];if(r===void 0&&(r=new Float32Array(s),Ju[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nl(i,e){let t=Ku[e];t===void 0&&(t=new Int32Array(e),Ku[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function K0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function j0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function Q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function t_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;ed.set(n),i.uniformMatrix2fv(this.addr,!1,ed),It(t,n)}}function n_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Qu.set(n),i.uniformMatrix3fv(this.addr,!1,Qu),It(t,n)}}function i_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;ju.set(n),i.uniformMatrix4fv(this.addr,!1,ju),It(t,n)}}function s_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function o_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function l_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function d_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xc.compareFunction=t.isReversedDepthBuffer()?Jo:Zo,r=Xc):r=md,t.setTexture2D(e||r,s)}function f_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||_d,s)}function p_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||xd,s)}function m_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gd,s)}function g_(i){switch(i){case 5126:return K0;case 35664:return j0;case 35665:return Q0;case 35666:return e_;case 35674:return t_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return a_;case 35669:case 35673:return o_;case 5125:return l_;case 36294:return c_;case 36295:return h_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}function __(i,e){i.uniform1fv(this.addr,e)}function x_(i,e){let t=Is(e,this.size,2);i.uniform2fv(this.addr,t)}function v_(i,e){let t=Is(e,this.size,3);i.uniform3fv(this.addr,t)}function y_(i,e){let t=Is(e,this.size,4);i.uniform4fv(this.addr,t)}function S_(i,e){let t=Is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function M_(i,e){let t=Is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function b_(i,e){let t=Is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function w_(i,e){i.uniform1iv(this.addr,e)}function A_(i,e){i.uniform2iv(this.addr,e)}function E_(i,e){i.uniform3iv(this.addr,e)}function T_(i,e){i.uniform4iv(this.addr,e)}function C_(i,e){i.uniform1uiv(this.addr,e)}function R_(i,e){i.uniform2uiv(this.addr,e)}function P_(i,e){i.uniform3uiv(this.addr,e)}function I_(i,e){i.uniform4uiv(this.addr,e)}function L_(i,e,t){let n=this.cache,s=e.length,r=nl(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xc:a=md;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function D_(i,e,t){let n=this.cache,s=e.length,r=nl(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||_d,r[a])}function U_(i,e,t){let n=this.cache,s=e.length,r=nl(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||xd,r[a])}function N_(i,e,t){let n=this.cache,s=e.length,r=nl(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gd,r[a])}function F_(i){switch(i){case 5126:return __;case 35664:return x_;case 35665:return v_;case 35666:return y_;case 35674:return S_;case 35675:return M_;case 35676:return b_;case 5124:case 35670:return w_;case 35667:case 35671:return A_;case 35668:case 35672:return E_;case 35669:case 35673:return T_;case 5125:return C_;case 36294:return R_;case 36295:return P_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return N_}}var qc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=g_(t.type)}},$c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=F_(t.type)}},Yc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Hc=/(\w+)(\])?(\[|\.)?/g;function td(i,e){i.seq.push(e),i.map[e.id]=e}function O_(i,e,t){let n=i.name,s=n.length;for(Hc.lastIndex=0;;){let r=Hc.exec(n),a=Hc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){td(t,c===void 0?new qc(o,i,e):new $c(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Yc(o),td(t,d)),t=d}}}var Rs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);O_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function nd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var B_=37297,k_=0;function z_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var id=new ke;function V_(i){Ye._getMatrix(id,Ye.workingColorSpace,i);let e=`mat3( ${id.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Ys:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+z_(i.getShaderSource(e),o)}else return r}function G_(i,e){let t=V_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var H_={[cc]:"Linear",[hc]:"Reinhard",[uc]:"Cineon",[dc]:"ACESFilmic",[pc]:"AgX",[mc]:"Neutral",[fc]:"Custom"};function W_(i,e){let t=H_[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jo=new I;function X_(){Ye.getLuminanceCoefficients(jo);let i=jo.x.toFixed(4),e=jo.y.toFixed(4),t=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function $_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Y_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Or(i){return i!==""}function rd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ad(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(i){return i.replace(Z_,K_)}var J_=new Map;function K_(i,e){let t=We[e];if(t===void 0){let n=J_.get(e);if(n!==void 0)t=We[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zc(t)}var j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(i){return i.replace(j_,Q_)}function Q_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ld(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var ex={[wr]:"SHADOWMAP_TYPE_PCF",[ws]:"SHADOWMAP_TYPE_VSM"};function tx(i){return ex[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var nx={[vi]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE",[Er]:"ENVMAP_TYPE_CUBE_UV"};function ix(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":nx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var sx={[ki]:"ENVMAP_MODE_REFRACTION"};function rx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":sx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ax={[lc]:"ENVMAP_BLENDING_MULTIPLY",[bu]:"ENVMAP_BLENDING_MIX",[wu]:"ENVMAP_BLENDING_ADD"};function ox(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ax[i.combine]||"ENVMAP_BLENDING_NONE"}function lx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=tx(t),c=ix(t),u=rx(t),d=ox(t),h=lx(t),f=q_(t),m=$_(r),y=s.createProgram(),p,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Or).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Or).join(`
`),g.length>0&&(g+=`
`)):(p=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),g=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?We.tonemapping_pars_fragment:"",t.toneMapping!==Mn?W_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,G_("linearToOutputTexel",t.outputColorSpace),X_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),a=Zc(a),a=rd(a,t),a=ad(a,t),o=Zc(o),o=rd(o,t),o=ad(o,t),a=od(a),o=od(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let A=b+p+a,v=b+g+o,M=nd(s,s.VERTEX_SHADER,A),w=nd(s,s.FRAGMENT_SHADER,v);s.attachShader(y,M),s.attachShader(y,w),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(R){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(y)||"",V=s.getShaderInfoLog(M)||"",U=s.getShaderInfoLog(w)||"",O=F.trim(),X=V.trim(),k=U.trim(),j=!0,q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,M,w);else{let Q=sd(s,M,"vertex"),te=sd(s,w,"fragment");Ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+Q+`
`+te)}else O!==""?De("WebGLProgram: Program Info Log:",O):(X===""||k==="")&&(q=!1);q&&(R.diagnostics={runnable:j,programLog:O,vertexShader:{log:X,prefix:p},fragmentShader:{log:k,prefix:g}})}s.deleteShader(M),s.deleteShader(w),x=new Rs(s,y),E=Y_(s,y)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,B_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=w,this}var hx=0,Jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kc(e),t.set(e,n)),n}},Kc=class{constructor(e){this.id=hx++,this.code=e,this.usedTimes=0}};function ux(i){return i===Mi||i===Lr||i===Dr}function dx(i,e,t,n,s,r){let a=new Qs,o=new Jc,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,E,P,R,F,V){let U=R.fog,O=F.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=e.get(x.envMap||X,k),q=j&&j.mapping===Er?j.image.height:null,Q=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&De("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let te=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,be=te!==void 0?te.length:0,ye=0;O.morphAttributes.position!==void 0&&(ye=1),O.morphAttributes.normal!==void 0&&(ye=2),O.morphAttributes.color!==void 0&&(ye=3);let Ge,Be,Xe,Z;if(Q){let Je=jt[Q];Ge=Je.vertexShader,Be=Je.fragmentShader}else{Ge=x.vertexShader,Be=x.fragmentShader;let Je=o.getVertexShaderStage(x),qe=o.getFragmentShaderStage(x);o.update(x,Je,qe),Xe=Je.id,Z=qe.id}let se=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Le=F.isInstancedMesh===!0,ve=F.isBatchedMesh===!0,ze=!!x.map,_t=!!x.matcap,Ne=!!j,Ze=!!x.aoMap,nt=!!x.lightMap,Ie=!!x.bumpMap&&x.wireframe===!1,at=!!x.normalMap,yt=!!x.displacementMap,xt=!!x.emissiveMap,Qe=!!x.metalnessMap,ft=!!x.roughnessMap,N=x.anisotropy>0,Et=x.clearcoat>0,je=x.dispersion>0,T=x.retroreflectivity>0,_=x.iridescence>0,B=x.sheen>0,G=x.transmission>0,J=N&&!!x.anisotropyMap,oe=Et&&!!x.clearcoatMap,ue=Et&&!!x.clearcoatNormalMap,K=Et&&!!x.clearcoatRoughnessMap,ie=_&&!!x.iridescenceMap,fe=_&&!!x.iridescenceThicknessMap,Ae=B&&!!x.sheenColorMap,z=B&&!!x.sheenRoughnessMap,ne=!!x.specularMap,ae=!!x.specularColorMap,pe=!!x.specularIntensityMap,Ce=G&&!!x.transmissionMap,L=G&&!!x.thicknessMap,le=!!x.gradientMap,ee=!!x.alphaMap,he=x.alphaTest>0,me=!!x.alphaHash,re=!!x.extensions,Pe=Mn;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Pe=i.toneMapping);let Y={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Ge,fragmentShader:Be,defines:x.defines,customVertexShaderID:Xe,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:ve,batchingColor:ve&&F._colorsTexture!==null,instancing:Le,instancingColor:Le&&F.instanceColor!==null,instancingMorph:Le&&F.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:_t,envMap:Ne,envMapMode:Ne&&j.mapping,envMapCubeUVHeight:q,aoMap:Ze,lightMap:nt,bumpMap:Ie,normalMap:at,displacementMap:yt,emissiveMap:xt,normalMapObjectSpace:at&&x.normalMapType===Tu,normalMapTangentSpace:at&&x.normalMapType===wc,packedNormalMap:at&&x.normalMapType===wc&&ux(x.normalMap.format),metalnessMap:Qe,roughnessMap:ft,anisotropy:N,anisotropyMap:J,clearcoat:Et,clearcoatMap:oe,clearcoatNormalMap:ue,clearcoatRoughnessMap:K,dispersion:je,retroreflection:T,iridescence:_,iridescenceMap:ie,iridescenceThicknessMap:fe,sheen:B,sheenColorMap:Ae,sheenRoughnessMap:z,specularMap:ne,specularColorMap:ae,specularIntensityMap:pe,transmission:G,transmissionMap:Ce,thicknessMap:L,gradientMap:le,opaque:x.transparent===!1&&x.blending===Fn&&x.alphaToCoverage===!1,alphaMap:ee,alphaTest:he,alphaHash:me,combine:x.combine,mapUv:ze&&m(x.map.channel),aoMapUv:Ze&&m(x.aoMap.channel),lightMapUv:nt&&m(x.lightMap.channel),bumpMapUv:Ie&&m(x.bumpMap.channel),normalMapUv:at&&m(x.normalMap.channel),displacementMapUv:yt&&m(x.displacementMap.channel),emissiveMapUv:xt&&m(x.emissiveMap.channel),metalnessMapUv:Qe&&m(x.metalnessMap.channel),roughnessMapUv:ft&&m(x.roughnessMap.channel),anisotropyMapUv:J&&m(x.anisotropyMap.channel),clearcoatMapUv:oe&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:z&&m(x.sheenRoughnessMap.channel),specularMapUv:ne&&m(x.specularMap.channel),specularColorMapUv:ae&&m(x.specularColorMap.channel),specularIntensityMapUv:pe&&m(x.specularIntensityMap.channel),transmissionMapUv:Ce&&m(x.transmissionMap.channel),thicknessMapUv:L&&m(x.thicknessMap.channel),alphaMapUv:ee&&m(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(at||N),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(ze||ee),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&at===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ye,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:xt&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Un,flipSided:x.side===Kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Y.vertexUv1s=l.has(1),Y.vertexUv2s=l.has(2),Y.vertexUv3s=l.has(3),l.clear(),Y}function p(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(g(E,x),b(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function g(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function b(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let E=f[x.type],P;if(E){let R=jt[E];P=Ur.clone(R.uniforms)}else P=x.uniforms;return P}function v(x,E){let P=u.get(E);return P!==void 0?++P.usedTimes:(P=new cx(i,E,x,s),c.push(P),u.set(E,P)),P}function M(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:A,acquireProgram:v,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:C}}function fx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function px(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function cd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,m,y,p,g){let b=i[e];return b===void 0?(b={id:h.id,object:h,geometry:f,material:m,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:p,group:g},i[e]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=m,b.materialVariant=a(h),b.groupOrder=y,b.renderOrder=h.renderOrder,b.z=p,b.group=g),e++,b}function l(h,f,m,y,p,g,b){b.reversedDepth===!0&&(p=-p);let A=o(h,f,m,y,p,g);m.transmission>0?n.push(A):m.transparent===!0?s.push(A):t.push(A)}function c(h,f,m,y,p,g){let b=o(h,f,m,y,p,g);m.transmission>0?n.unshift(b):m.transparent===!0?s.unshift(b):t.unshift(b)}function u(h,f){t.length>1&&t.sort(h||px),n.length>1&&n.sort(f||cd),s.length>1&&s.sort(f||cd)}function d(){for(let h=e,f=i.length;h<f;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function mx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new hd,i.set(n,[a])):s>=r.length?(a=new hd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function gx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Fe};break;case"SpotLight":t={position:new I,direction:new I,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function _x(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var xx=0;function vx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yx(i){let e=new gx,t=_x(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new ct,a=new ct;function o(c){let u=0,d=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,m=0,y=0,p=0,g=0,b=0,A=0,v=0,M=0,w=0,C=0,x=0,E=0,P=0;c.sort(vx);for(let F=0,V=c.length;F<V;F++){let U=c[F],O=U.color,X=U.intensity,k=U.distance,j=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Mi?j=U.shadow.map.texture:j=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=O.r*X,d+=O.g*X,h+=O.b*X;else if(U.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(U.sh.coefficients[q],X);P++}else if(U.isSunLight){let q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Q=U.shadow,te=t.get(U);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[m]=te,n.sunShadowMap[m]=j;let be=Q.getViewportCount();for(let ye=0;ye<be;ye++)n.sunShadowMatrix[y+ye]=Q.getMatrix(ye),n.sunShadowCascade[y+ye]=Q._cascadeData[ye];y+=be,m++}n.sun[f]=q,f++}else if(U.isDirectionalLight){let q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Q=U.shadow,te=t.get(U);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.directionalShadow[p]=te,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=U.shadow.matrix,M++}n.directional[p]=q,p++}else if(U.isSpotLight){let q=e.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(O).multiplyScalar(X),q.distance=k,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,n.spot[b]=q;let Q=U.shadow;if(U.map&&(n.spotLightMap[x]=U.map,x++,Q.updateMatrices(U),U.castShadow&&E++),n.spotLightMatrix[b]=Q.matrix,U.castShadow){let te=t.get(U);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.spotShadow[b]=te,n.spotShadowMap[b]=j,C++}b++}else if(U.isRectAreaLight){let q=e.get(U);q.color.copy(O).multiplyScalar(X),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),n.rectArea[A]=q,A++}else if(U.isPointLight){let q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){let Q=U.shadow,te=t.get(U);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,n.pointShadow[g]=te,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=U.shadow.matrix,w++}n.point[g]=q,g++}else if(U.isHemisphereLight){let q=e.get(U);q.skyColor.copy(U.color).multiplyScalar(X),q.groundColor.copy(U.groundColor).multiplyScalar(X),n.hemi[v]=q,v++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let R=n.hash;(R.sunLength!==f||R.directionalLength!==p||R.pointLength!==g||R.spotLength!==b||R.rectAreaLength!==A||R.hemiLength!==v||R.numSunShadows!==m||R.numDirectionalShadows!==M||R.numPointShadows!==w||R.numSpotShadows!==C||R.numSpotMaps!==x||R.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=p,n.spot.length=b,n.rectArea.length=A,n.point.length=g,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-E,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,R.sunLength=f,R.directionalLength=p,R.pointLength=g,R.spotLength=b,R.rectAreaLength=A,R.hemiLength=v,R.numSunShadows=m,R.numDirectionalShadows=M,R.numPointShadows=w,R.numSpotShadows=C,R.numSpotMaps=x,R.numLightProbes=P,n.version=xx++)}function l(c,u){let d=0,h=0,f=0,m=0,y=0,p=0,g=u.matrixWorldInverse;for(let b=0,A=c.length;b<A;b++){let v=c[b];if(v.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),h++}else if(v.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),m++}else if(v.isRectAreaLight){let M=n.rectArea[y];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function ud(i){let e=new yx(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Sx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new ud(i),e.set(s,[o])):r>=a.length?(o=new ud(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wx=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Ax=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],dd=new ct,Fr=new I,Wc=new I;function Ex(i,e,t){let n=new nr,s=new we,r=new we,a=new st,o=new Ya,l=new Za,c={},u=t.maxTextureSize,d={[xi]:Kt,[Kt]:xi,[Un]:Un},h=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Mx,fragmentShader:bx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let m=new gt;m.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new qt(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wr;let g=this.type;this.render=function(w,C,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===su&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wr);let E=i.getRenderTarget(),P=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Nn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=g!==this.type;V&&C.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(O=>O.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,O=w.length;U<O;U++){let X=w[U],k=X.shadow;if(k===void 0){De("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let j=k.getFrameExtents();s.multiply(j),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,k.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||V===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ws){if(X.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new en(s.x,s.y,{format:Mi,type:An,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new fi(s.x,s.y,wn),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=In,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ut,k.map.depthTexture.magFilter=Ut}else X.isPointLight?(k.map=new el(s.x),k.map.depthTexture=new za(s.x,bn)):(k.map=new en(s.x,s.y),k.map.depthTexture=new fi(s.x,s.y,bn)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=In,this.type===wr?(k.map.depthTexture.compareFunction=q?Jo:Zo,k.map.depthTexture.minFilter=Ft,k.map.depthTexture.magFilter=Ft):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ut,k.map.depthTexture.magFilter=Ut);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let Q=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();X.isPointLight!==!0&&k.updateMatrices(X,x);for(let te=0;te<Q;te++){let be=k.getCamera(te);if(X.isPointLight){let ye=k.camera,Ge=k.matrix,Be=X.distance||ye.far;Be!==ye.far&&(ye.far=Be,ye.updateProjectionMatrix()),Fr.setFromMatrixPosition(X.matrixWorld),ye.position.copy(Fr),Wc.copy(ye.position),Wc.add(wx[te]),ye.up.copy(Ax[te]),ye.lookAt(Wc),ye.updateMatrixWorld(),Ge.makeTranslation(-Fr.x,-Fr.y,-Fr.z),dd.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),k._frustum.setFromProjectionMatrix(dd,ye.coordinateSystem,ye.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,te),i.clear();else{te===0&&(i.setRenderTarget(k.map),i.clear());let ye=k.getViewport(te);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),F.viewport(a)}n=k.getFrustum(te),v(C,x,be,X,this.type)}k.isPointLightShadow!==!0&&this.type===ws&&b(k,x),k.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(E,P,R)};function b(w,C){let x=e.update(y);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new en(s.x,s.y,{format:Mi,type:An}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,x,f,y,null)}function A(w,C,x,E){let P=null,R=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)P=R;else if(P=x.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=P.uuid,V=C.uuid,U=c[F];U===void 0&&(U={},c[F]=U);let O=U[V];O===void 0&&(O=P.clone(),U[V]=O,C.addEventListener("dispose",M)),P=O}if(P.visible=C.visible,P.wireframe=C.wireframe,E===ws?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:d[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let F=i.properties.get(P);F.light=x}return P}function v(w,C,x,E,P){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===ws)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let V=e.update(w),U=w.material;if(Array.isArray(U)){let O=V.groups;for(let X=0,k=O.length;X<k;X++){let j=O[X],q=U[j.materialIndex];if(q&&q.visible){let Q=A(w,q,E,P);w.onBeforeShadow(i,w,C,x,V,Q,j),i.renderBufferDirect(x,null,V,Q,w,j),w.onAfterShadow(i,w,C,x,V,Q,j)}}}else if(U.visible){let O=A(w,U,E,P);w.onBeforeShadow(i,w,C,x,V,O,null),i.renderBufferDirect(x,null,V,O,w,null),w.onAfterShadow(i,w,C,x,V,O,null)}}let F=w.children;for(let V=0,U=F.length;V<U;V++)v(F[V],C,x,E,P)}function M(w){w.target.removeEventListener("dispose",M);for(let x in c){let E=c[x],P=w.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function Tx(i,e){function t(){let L=!1,le=new st,ee=null,he=new st(0,0,0,0);return{setMask:function(me){ee!==me&&!L&&(i.colorMask(me,me,me,me),ee=me)},setLocked:function(me){L=me},setClear:function(me,re,Pe,Y,Je){Je===!0&&(me*=Y,re*=Y,Pe*=Y),le.set(me,re,Pe,Y),he.equals(le)===!1&&(i.clearColor(me,re,Pe,Y),he.copy(le))},reset:function(){L=!1,ee=null,he.set(-1,0,0,0)}}}function n(){let L=!1,le=!1,ee=null,he=null,me=null;return{setReversed:function(re){if(le!==re){let Pe=e.get("EXT_clip_control");re?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),le=re;let Y=me;me=null,this.setClear(Y)}},getReversed:function(){return le},setTest:function(re){re?se(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(re){ee!==re&&!L&&(i.depthMask(re),ee=re)},setFunc:function(re){if(le&&(re=Bu[re]),he!==re){switch(re){case Ma:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case wa:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case Ta:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=re}},setLocked:function(re){L=re},setClear:function(re){me!==re&&(me=re,le&&(re=1-re),i.clearDepth(re))},reset:function(){L=!1,ee=null,he=null,me=null,le=!1}}}function s(){let L=!1,le=null,ee=null,he=null,me=null,re=null,Pe=null,Y=null,Je=null;return{setTest:function(qe){L||(qe?se(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(qe){le!==qe&&!L&&(i.stencilMask(qe),le=qe)},setFunc:function(qe,Yt,Nt){(ee!==qe||he!==Yt||me!==Nt)&&(i.stencilFunc(qe,Yt,Nt),ee=qe,he=Yt,me=Nt)},setOp:function(qe,Yt,Nt){(re!==qe||Pe!==Yt||Y!==Nt)&&(i.stencilOp(qe,Yt,Nt),re=qe,Pe=Yt,Y=Nt)},setLocked:function(qe){L=qe},setClear:function(qe){Je!==qe&&(i.clearStencil(qe),Je=qe)},reset:function(){L=!1,le=null,ee=null,he=null,me=null,re=null,Pe=null,Y=null,Je=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,m=[],y=null,p=!1,g=null,b=null,A=null,v=null,M=null,w=null,C=null,x=new Fe(0,0,0),E=0,P=!1,R=null,F=null,V=null,U=null,O=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,j=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=j>=2);let Q=null,te={},be=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),Ge=new st().fromArray(be),Be=new st().fromArray(ye);function Xe(L,le,ee,he){let me=new Uint8Array(4),re=i.createTexture();i.bindTexture(L,re),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<ee;Pe++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(le+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return re}let Z={};Z[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(ds),Ie(!1),at(ic),se(i.CULL_FACE),Ze(Nn);function se(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function xe(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Le(L,le){return h[L]!==le?(i.bindFramebuffer(L,le),h[L]=le,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=le),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=le),!0):!1}function ve(L,le){let ee=m,he=!1;if(L){ee=f.get(le),ee===void 0&&(ee=[],f.set(le,ee));let me=L.textures;if(ee.length!==me.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Pe=me.length;re<Pe;re++)ee[re]=i.COLOR_ATTACHMENT0+re;ee.length=me.length,he=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,he=!0);he&&i.drawBuffers(ee)}function ze(L){return y!==L?(i.useProgram(L),y=L,!0):!1}let _t={[Bi]:i.FUNC_ADD,[au]:i.FUNC_SUBTRACT,[ou]:i.FUNC_REVERSE_SUBTRACT};_t[lu]=i.MIN,_t[cu]=i.MAX;let Ne={[hu]:i.ZERO,[uu]:i.ONE,[du]:i.SRC_COLOR,[ac]:i.SRC_ALPHA,[xu]:i.SRC_ALPHA_SATURATE,[gu]:i.DST_COLOR,[pu]:i.DST_ALPHA,[fu]:i.ONE_MINUS_SRC_COLOR,[oc]:i.ONE_MINUS_SRC_ALPHA,[_u]:i.ONE_MINUS_DST_COLOR,[mu]:i.ONE_MINUS_DST_ALPHA,[vu]:i.CONSTANT_COLOR,[yu]:i.ONE_MINUS_CONSTANT_COLOR,[Su]:i.CONSTANT_ALPHA,[Mu]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(L,le,ee,he,me,re,Pe,Y,Je,qe){if(L===Nn){p===!0&&(xe(i.BLEND),p=!1);return}if(p===!1&&(se(i.BLEND),p=!0),L!==ru){if(L!==g||qe!==P){if((b!==Bi||M!==Bi)&&(i.blendEquation(i.FUNC_ADD),b=Bi,M=Bi),qe)switch(L){case Fn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ar:i.blendFunc(i.ONE,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ue("WebGLState: Invalid blending: ",L);break}else switch(L){case Fn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sc:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rc:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",L);break}A=null,v=null,w=null,C=null,x.set(0,0,0),E=0,g=L,P=qe}return}me=me||le,re=re||ee,Pe=Pe||he,(le!==b||me!==M)&&(i.blendEquationSeparate(_t[le],_t[me]),b=le,M=me),(ee!==A||he!==v||re!==w||Pe!==C)&&(i.blendFuncSeparate(Ne[ee],Ne[he],Ne[re],Ne[Pe]),A=ee,v=he,w=re,C=Pe),(Y.equals(x)===!1||Je!==E)&&(i.blendColor(Y.r,Y.g,Y.b,Je),x.copy(Y),E=Je),g=L,P=!1}function nt(L,le){L.side===Un?xe(i.CULL_FACE):se(i.CULL_FACE);let ee=L.side===Kt;le&&(ee=!ee),Ie(ee),L.blending===Fn&&L.transparent===!1?Ze(Nn):Ze(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let he=L.stencilWrite;o.setTest(he),he&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),xt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(L){R!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),R=L)}function at(L){L!==nu?(se(i.CULL_FACE),L!==F&&(L===ic?i.cullFace(i.BACK):L===iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),F=L}function yt(L){L!==V&&(k&&i.lineWidth(L),V=L)}function xt(L,le,ee){L?(se(i.POLYGON_OFFSET_FILL),(U!==le||O!==ee)&&(U=le,O=ee,a.getReversed()&&(le=-le),i.polygonOffset(le,ee))):xe(i.POLYGON_OFFSET_FILL)}function Qe(L){L?se(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function ft(L){L===void 0&&(L=i.TEXTURE0+X-1),Q!==L&&(i.activeTexture(L),Q=L)}function N(L,le,ee){ee===void 0&&(Q===null?ee=i.TEXTURE0+X-1:ee=Q);let he=te[ee];he===void 0&&(he={type:void 0,texture:void 0},te[ee]=he),(he.type!==L||he.texture!==le)&&(Q!==ee&&(i.activeTexture(ee),Q=ee),i.bindTexture(L,le||Z[L]),he.type=L,he.texture=le)}function Et(){let L=te[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function je(){try{i.compressedTexImage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function _(){try{i.texSubImage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function B(){try{i.texSubImage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function oe(){try{i.texStorage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function ue(){try{i.texStorage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function K(){try{i.texImage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function ie(){try{i.texImage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function fe(L){return d[L]!==void 0?d[L]:i.getParameter(L)}function Ae(L,le){d[L]!==le&&(i.pixelStorei(L,le),d[L]=le)}function z(L){Ge.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ge.copy(L))}function ne(L){Be.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Be.copy(L))}function ae(L,le){let ee=c.get(le);ee===void 0&&(ee=new WeakMap,c.set(le,ee));let he=ee.get(L);he===void 0&&(he=i.getUniformBlockIndex(le,L.name),ee.set(L,he))}function pe(L,le){let he=c.get(le).get(L);l.get(le)!==he&&(i.uniformBlockBinding(le,he,L.__bindingPointIndex),l.set(le,he))}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Q=null,te={},h={},f=new WeakMap,m=[],y=null,p=!1,g=null,b=null,A=null,v=null,M=null,w=null,C=null,x=new Fe(0,0,0),E=0,P=!1,R=null,F=null,V=null,U=null,O=null,Ge.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:xe,bindFramebuffer:Le,drawBuffers:ve,useProgram:ze,setBlending:Ze,setMaterial:nt,setFlipSided:Ie,setCullFace:at,setLineWidth:yt,setPolygonOffset:xt,setScissorTest:Qe,activeTexture:ft,bindTexture:N,unbindTexture:Et,compressedTexImage2D:je,compressedTexImage3D:T,texImage2D:K,texImage3D:ie,pixelStorei:Ae,getParameter:fe,updateUBOMapping:ae,uniformBlockBinding:pe,texStorage2D:oe,texStorage3D:ue,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:J,scissor:z,viewport:ne,reset:Ce}}function Cx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,u=new WeakMap,d=new Set,h,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,_){return m?new OffscreenCanvas(T,_):Js("canvas")}function p(T,_,B){let G=1,J=je(T);if((J.width>B||J.height>B)&&(G=B/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let oe=Math.floor(G*J.width),ue=Math.floor(G*J.height);h===void 0&&(h=y(oe,ue));let K=_?y(oe,ue):h;return K.width=oe,K.height=ue,K.getContext("2d").drawImage(T,0,0,oe,ue),De("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+oe+"x"+ue+")."),K}else return"data"in T&&De("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function g(T){return T.generateMipmaps}function b(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(T,_,B,G,J,oe=!1){if(T!==null){if(i[T]!==void 0)return i[T];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue;G&&(ue=e.get("EXT_texture_norm16"),ue||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8),B===i.UNSIGNED_SHORT&&ue&&(K=ue.R16_EXT),B===i.SHORT&&ue&&(K=ue.R16_SNORM_EXT)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),_===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8),B===i.UNSIGNED_SHORT&&ue&&(K=ue.RG16_EXT),B===i.SHORT&&ue&&(K=ue.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_SHORT&&ue&&(K=ue.RGB16_EXT),B===i.SHORT&&ue&&(K=ue.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){let ie=oe?Ys:Ye.getTransfer(J);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=ie===tt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ue&&(K=ue.RGBA16_EXT),B===i.SHORT&&ue&&(K=ue.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(T,_){let B;return T?_===null||_===bn||_===Es?B=i.DEPTH24_STENCIL8:_===wn?B=i.DEPTH32F_STENCIL8:_===As&&(B=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===bn||_===Es?B=i.DEPTH_COMPONENT24:_===wn?B=i.DEPTH_COMPONENT32F:_===As&&(B=i.DEPTH_COMPONENT16),B}function w(T,_){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ut&&T.minFilter!==Ft?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function C(T){let _=T.target;_.removeEventListener("dispose",C),E(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function x(T){let _=T.target;_.removeEventListener("dispose",x),R(_)}function E(T){let _=n.get(T);if(_.__webglInit===void 0)return;let B=T.source,G=f.get(B);if(G){let J=G[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(T),Object.keys(G).length===0&&f.delete(B)}n.remove(T)}function P(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let B=T.source,G=f.get(B);delete G[_.__cacheKey],a.memory.textures--}function R(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let J=0;J<_.__webglFramebuffer[G].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[G][J]);else i.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)i.deleteFramebuffer(_.__webglFramebuffer[G]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=T.textures;for(let G=0,J=B.length;G<J;G++){let oe=n.get(B[G]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(B[G])}n.remove(T)}let F=0;function V(){F=0}function U(){return F}function O(T){F=T}function X(){let T=F;return T>=s.maxTextures&&De("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,T}function k(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function j(T,_){let B=n.get(T);if(T.isVideoTexture&&N(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let G=T.image;if(G===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(B,T,_);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function q(T,_){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){xe(B,T,_);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function Q(T,_){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){xe(B,T,_);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function te(T,_){let B=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&B.__version!==T.version){Le(B,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}let be={[Ra]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},ye={[Ut]:i.NEAREST,[Au]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},Ge={[Ru]:i.NEVER,[Uu]:i.ALWAYS,[Pu]:i.LESS,[Zo]:i.LEQUAL,[Iu]:i.EQUAL,[Jo]:i.GEQUAL,[Lu]:i.GREATER,[Du]:i.NOTEQUAL};function Be(T,_){if(_.type===wn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ft||_.magFilter===uo||_.magFilter===Tr||_.magFilter===yi||_.minFilter===Ft||_.minFilter===uo||_.minFilter===Tr||_.minFilter===yi)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,be[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,be[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,be[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ye[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ye[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ut||_.minFilter!==Tr&&_.minFilter!==yi||_.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Xe(T,_){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",C));let G=_.source,J=f.get(G);J===void 0&&(J={},f.set(G,J));let oe=k(_);if(oe!==T.__cacheKey){J[oe]===void 0&&(J[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[oe].usedTimes++;let ue=J[T.__cacheKey];ue!==void 0&&(J[T.__cacheKey].usedTimes--,ue.usedTimes===0&&P(_)),T.__cacheKey=oe,T.__webglTexture=J[oe].texture}return B}function Z(T,_,B){return Math.floor(Math.floor(T/B)/_)}function se(T,_,B,G){let oe=T.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,G,_.data);else{oe.sort((Ae,z)=>Ae.start-z.start);let ue=0;for(let Ae=1;Ae<oe.length;Ae++){let z=oe[ue],ne=oe[Ae],ae=z.start+z.count,pe=Z(ne.start,_.width,4),Ce=Z(z.start,_.width,4);ne.start<=ae+1&&pe===Ce&&Z(ne.start+ne.count-1,_.width,4)===pe?z.count=Math.max(z.count,ne.start+ne.count-z.start):(++ue,oe[ue]=ne)}oe.length=ue+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ae=0,z=oe.length;Ae<z;Ae++){let ne=oe[Ae],ae=Math.floor(ne.start/4),pe=Math.ceil(ne.count/4),Ce=ae%_.width,L=Math.floor(ae/_.width),le=pe,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Ce,L,le,ee,B,G,_.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function xe(T,_,B){let G=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=i.TEXTURE_3D);let J=Xe(T,_),oe=_.source;t.bindTexture(G,T.__webglTexture,i.TEXTURE0+B);let ue=n.get(oe);if(oe.version!==ue.__version||J===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ee=Ye.getPrimaries(Ye.workingColorSpace),he=_.colorSpace===jn?null:Ye.getPrimaries(_.colorSpace),me=_.colorSpace===jn||ee===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ie=p(_.image,!1,s.maxTextureSize);ie=Et(_,ie);let fe=r.convert(_.format,_.colorSpace),Ae=r.convert(_.type),z=v(_.internalFormat,fe,Ae,_.normalized,_.colorSpace,_.isVideoTexture);Be(G,_);let ne,ae=_.mipmaps,pe=_.isVideoTexture!==!0,Ce=ue.__version===void 0||J===!0,L=oe.dataReady,le=w(_,ie);if(_.isDepthTexture)z=M(_.format===Si,_.type),Ce&&(pe?t.texStorage2D(i.TEXTURE_2D,1,z,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,z,ie.width,ie.height,0,fe,Ae,null));else if(_.isDataTexture)if(ae.length>0){pe&&Ce&&t.texStorage2D(i.TEXTURE_2D,le,z,ae[0].width,ae[0].height);for(let ee=0,he=ae.length;ee<he;ee++)ne=ae[ee],pe?L&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ne.width,ne.height,fe,Ae,ne.data):t.texImage2D(i.TEXTURE_2D,ee,z,ne.width,ne.height,0,fe,Ae,ne.data);_.generateMipmaps=!1}else pe?(Ce&&t.texStorage2D(i.TEXTURE_2D,le,z,ie.width,ie.height),L&&se(_,ie,fe,Ae)):t.texImage2D(i.TEXTURE_2D,0,z,ie.width,ie.height,0,fe,Ae,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){pe&&Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,z,ae[0].width,ae[0].height,ie.depth);for(let ee=0,he=ae.length;ee<he;ee++)if(ne=ae[ee],_.format!==fn)if(fe!==null)if(pe){if(L)if(_.layerUpdates.size>0){let me=Dc(ne.width,ne.height,_.format,_.type);for(let re of _.layerUpdates){let Pe=ne.data.subarray(re*me/ne.data.BYTES_PER_ELEMENT,(re+1)*me/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,re,ne.width,ne.height,1,fe,Pe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ne.width,ne.height,ie.depth,fe,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,z,ne.width,ne.height,ie.depth,0,ne.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ne.width,ne.height,ie.depth,fe,Ae,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,z,ne.width,ne.height,ie.depth,0,fe,Ae,ne.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{pe&&Ce&&t.texStorage2D(i.TEXTURE_2D,le,z,ae[0].width,ae[0].height);for(let ee=0,he=ae.length;ee<he;ee++)ne=ae[ee],_.format!==fn?fe!==null?pe?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ne.width,ne.height,fe,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,z,ne.width,ne.height,0,ne.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?L&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ne.width,ne.height,fe,Ae,ne.data):t.texImage2D(i.TEXTURE_2D,ee,z,ne.width,ne.height,0,fe,Ae,ne.data)}else if(_.isDataArrayTexture)if(pe){if(Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,z,ie.width,ie.height,ie.depth),L)if(_.layerUpdates.size>0){let ee=Dc(ie.width,ie.height,_.format,_.type);for(let he of _.layerUpdates){let me=ie.data.subarray(he*ee/ie.data.BYTES_PER_ELEMENT,(he+1)*ee/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,ie.width,ie.height,1,fe,Ae,me)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,Ae,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,z,ie.width,ie.height,ie.depth,0,fe,Ae,ie.data);else if(_.isData3DTexture)pe?(Ce&&t.texStorage3D(i.TEXTURE_3D,le,z,ie.width,ie.height,ie.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,Ae,ie.data)):t.texImage3D(i.TEXTURE_3D,0,z,ie.width,ie.height,ie.depth,0,fe,Ae,ie.data);else if(_.isFramebufferTexture){if(Ce)if(pe)t.texStorage2D(i.TEXTURE_2D,le,z,ie.width,ie.height);else{let ee=ie.width,he=ie.height;for(let me=0;me<le;me++)t.texImage2D(i.TEXTURE_2D,me,z,ee,he,0,fe,Ae,null),ee>>=1,he>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),ie.parentNode!==ee){ee.appendChild(ie),d.add(_),ee.onpaint=he=>{let me=he.changedElements;for(let re of d)me.includes(re.image)&&(re.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let me=i.RGBA,re=i.RGBA,Pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,me,re,Pe,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ae.length>0){if(pe&&Ce){let ee=je(ae[0]);t.texStorage2D(i.TEXTURE_2D,le,z,ee.width,ee.height)}for(let ee=0,he=ae.length;ee<he;ee++)ne=ae[ee],pe?L&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,fe,Ae,ne):t.texImage2D(i.TEXTURE_2D,ee,z,fe,Ae,ne);_.generateMipmaps=!1}else if(pe){if(Ce){let ee=je(ie);t.texStorage2D(i.TEXTURE_2D,le,z,ee.width,ee.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Ae,ie)}else t.texImage2D(i.TEXTURE_2D,0,z,fe,Ae,ie);g(_)&&b(G),ue.__version=oe.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Le(T,_,B){if(_.image.length!==6)return;let G=Xe(T,_),J=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);let oe=n.get(J);if(J.version!==oe.__version||G===!0){t.activeTexture(i.TEXTURE0+B);let ue=Ye.getPrimaries(Ye.workingColorSpace),K=_.colorSpace===jn?null:Ye.getPrimaries(_.colorSpace),ie=_.colorSpace===jn||ue===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let fe=_.isCompressedTexture||_.image[0].isCompressedTexture,Ae=_.image[0]&&_.image[0].isDataTexture,z=[];for(let re=0;re<6;re++)!fe&&!Ae?z[re]=p(_.image[re],!0,s.maxCubemapSize):z[re]=Ae?_.image[re].image:_.image[re],z[re]=Et(_,z[re]);let ne=z[0],ae=r.convert(_.format,_.colorSpace),pe=r.convert(_.type),Ce=v(_.internalFormat,ae,pe,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,le=oe.__version===void 0||G===!0,ee=J.dataReady,he=w(_,ne);Be(i.TEXTURE_CUBE_MAP,_);let me;if(fe){L&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ce,ne.width,ne.height);for(let re=0;re<6;re++){me=z[re].mipmaps;for(let Pe=0;Pe<me.length;Pe++){let Y=me[Pe];_.format!==fn?ae!==null?L?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Y.width,Y.height,ae,Y.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,Ce,Y.width,Y.height,0,Y.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Y.width,Y.height,ae,pe,Y.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,Ce,Y.width,Y.height,0,ae,pe,Y.data)}}}else{if(me=_.mipmaps,L&&le){me.length>0&&he++;let re=je(z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ce,re.width,re.height)}for(let re=0;re<6;re++)if(Ae){L?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,z[re].width,z[re].height,ae,pe,z[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ce,z[re].width,z[re].height,0,ae,pe,z[re].data);for(let Pe=0;Pe<me.length;Pe++){let Je=me[Pe].image[re].image;L?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,Je.width,Je.height,ae,pe,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,Ce,Je.width,Je.height,0,ae,pe,Je.data)}}else{L?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ae,pe,z[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ce,ae,pe,z[re]);for(let Pe=0;Pe<me.length;Pe++){let Y=me[Pe];L?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,ae,pe,Y.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,Ce,ae,pe,Y.image[re])}}}g(_)&&b(i.TEXTURE_CUBE_MAP),oe.__version=J.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ve(T,_,B,G,J,oe){let ue=r.convert(B.format,B.colorSpace),K=r.convert(B.type),ie=v(B.internalFormat,ue,K,B.normalized,B.colorSpace),fe=n.get(_),Ae=n.get(B);if(Ae.__renderTarget=_,!fe.__hasExternalTextures){let z=Math.max(1,_.width>>oe),ne=Math.max(1,_.height>>oe);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,oe,ie,z,ne,_.depth,0,ue,K,null):t.texImage2D(J,oe,ie,z,ne,0,ue,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ft(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,J,Ae.__webglTexture,0,Qe(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,J,Ae.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(T,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let G=_.depthTexture,J=G&&G.isDepthTexture?G.type:null,oe=M(_.stencilBuffer,J),ue=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe(_),oe,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe(_),oe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,oe,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,T)}else{let G=_.textures;for(let J=0;J<G.length;J++){let oe=G[J],ue=r.convert(oe.format,oe.colorSpace),K=r.convert(oe.type),ie=v(oe.internalFormat,ue,K,oe.normalized,oe.colorSpace);ft(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe(_),ie,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe(_),ie,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ie,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(T,_,B){let G=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Be(i.TEXTURE_CUBE_MAP,_.depthTexture);let fe=r.convert(_.depthTexture.format),Ae=r.convert(_.depthTexture.type),z;_.depthTexture.format===In?z=i.DEPTH_COMPONENT24:_.depthTexture.format===Si&&(z=i.DEPTH24_STENCIL8);for(let ne=0;ne<6;ne++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,z,_.width,_.height,0,fe,Ae,null)}}else j(_.depthTexture,0);let oe=J.__webglTexture,ue=Qe(_),K=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ie=_.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===In)ft(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,K,oe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,ie,K,oe,0);else if(_.depthTexture.format===Si)ft(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,K,oe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,ie,K,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(T){let _=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let G=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=G}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)_t(_.__webglFramebuffer[G],T,G);else{let G=T.texture.mipmaps;G&&G.length>0?_t(_.__webglFramebuffer[0],T,0):_t(_.__webglFramebuffer,T,0)}else if(B){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=i.createRenderbuffer(),ze(_.__webglDepthbuffer[G],T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,oe)}}else{let G=T.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ze(_.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(T,_,B){let G=n.get(T);_!==void 0&&ve(G.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ne(T)}function nt(T){let _=T.texture,B=n.get(T),G=n.get(_);T.addEventListener("dispose",x);let J=T.textures,oe=T.isWebGLCubeRenderTarget===!0,ue=J.length>1;if(ue||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=_.version,a.memory.textures++),oe){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let ie=0;ie<_.mipmaps.length;ie++)B.__webglFramebuffer[K][ie]=i.createFramebuffer()}else B.__webglFramebuffer[K]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)B.__webglFramebuffer[K]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ue)for(let K=0,ie=J.length;K<ie;K++){let fe=n.get(J[K]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ft(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<J.length;K++){let ie=J[K];B.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let fe=r.convert(ie.format,ie.colorSpace),Ae=r.convert(ie.type),z=v(ie.internalFormat,fe,Ae,ie.normalized,ie.colorSpace,T.isXRRenderTarget===!0),ne=Qe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,z,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,B.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Be(i.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)ve(B.__webglFramebuffer[K][ie],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie);else ve(B.__webglFramebuffer[K],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);g(_)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let K=0,ie=J.length;K<ie;K++){let fe=J[K],Ae=n.get(fe),z=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(z=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(z,Ae.__webglTexture),Be(z,fe),ve(B.__webglFramebuffer,T,fe,i.COLOR_ATTACHMENT0+K,z,0),g(fe)&&b(z)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,G.__webglTexture),Be(K,_),_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)ve(B.__webglFramebuffer[ie],T,_,i.COLOR_ATTACHMENT0,K,ie);else ve(B.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,K,0);g(_)&&b(K),t.unbindTexture()}T.depthBuffer&&Ne(T)}function Ie(T){let _=T.textures;for(let B=0,G=_.length;B<G;B++){let J=_[B];if(g(J)){let oe=A(T),ue=n.get(J).__webglTexture;t.bindTexture(oe,ue),b(oe),t.unbindTexture()}}}let at=[],yt=[];function xt(T){if(T.samples>0){if(ft(T)===!1){let _=T.textures,B=T.width,G=T.height,J=i.COLOR_BUFFER_BIT,oe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(T),K=_.length>1;if(K)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let ie=T.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);let Ae=n.get(_[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ae,0)}i.blitFramebuffer(0,0,B,G,0,0,B,G,J,i.NEAREST),l===!0&&(at.length=0,yt.length=0,at.push(i.COLOR_ATTACHMENT0+fe),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(at.push(oe),yt.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,yt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);let Ae=n.get(_[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Qe(T){return Math.min(s.maxSamples,T.samples)}function ft(T){let _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(T){let _=a.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function Et(T,_){let B=T.colorSpace,G=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==$s&&B!==jn&&(Ye.getTransfer(B)===tt?(G!==fn||J!==cn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",B)),_}function je(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=V,this.getTextureUnits=U,this.setTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=Ze,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Rx(i,e){function t(n,s=jn){let r,a=Ye.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_c)return i.BYTE;if(n===xc)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===fo)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===Sc)return i.ALPHA;if(n===Mc)return i.RGB;if(n===fn)return i.RGBA;if(n===In)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===bc)return i.RED;if(n===go)return i.RED_INTEGER;if(n===Mi)return i.RG;if(n===_o)return i.RG_INTEGER;if(n===xo)return i.RGBA_INTEGER;if(n===Cr||n===Rr||n===Pr||n===Ir)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===yo||n===So||n===Mo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bo||n===wo||n===Ao||n===Eo||n===To||n===Lr||n===Co)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bo||n===wo)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ao)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Eo)return r.COMPRESSED_R11_EAC;if(n===To)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Lr)return r.COMPRESSED_RG11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ro||n===Po||n===Io||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Vo||n===Go)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ro)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ko)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ho||n===Wo||n===Xo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ho)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qo||n===$o||n===Dr||n===Yo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ix=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new sr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rt({vertexShader:Px,fragmentShader:Ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qt(new gr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qc=class extends Ln{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null,y=typeof XRWebGLBinding<"u",p=new jc,g={},b=t.getContextAttributes(),A=null,v=null,M=[],w=[],C=new we,x=null,E=null,P=new Dt;P.viewport=new st;let R=new Dt;R.viewport=new st;let F=[P,R],V=new oo,U=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=M[Z];return se===void 0&&(se=new gs,M[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=M[Z];return se===void 0&&(se=new gs,M[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=M[Z];return se===void 0&&(se=new gs,M[Z]=se),se.getHandSpace()};function X(Z){let se=w.indexOf(Z.inputSource);if(se===-1)return;let xe=M[se];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,c||a),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",j);for(let Z=0;Z<M.length;Z++){let se=w[Z];se!==null&&(w[Z]=null,M[Z].disconnect(se))}U=null,O=null,p.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(A),f=null,h=null,d=null,s=null,v=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),E!==null){let Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",k),s.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Le=null,ve=null;b.depth&&(ve=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=b.stencil?Si:In,Le=b.stencil?Es:bn);let ze={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(ze),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new en(h.textureWidth,h.textureHeight,{format:fn,type:cn,depthTexture:new fi(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new en(f.framebufferWidth,f.framebufferHeight,{format:fn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function j(Z){for(let se=0;se<Z.removed.length;se++){let xe=Z.removed[se],Le=w.indexOf(xe);Le>=0&&(w[Le]=null,M[Le].disconnect(xe))}for(let se=0;se<Z.added.length;se++){let xe=Z.added[se],Le=w.indexOf(xe);if(Le===-1){for(let ze=0;ze<M.length;ze++)if(ze>=w.length){w.push(xe),Le=ze;break}else if(w[ze]===null){w[ze]=xe,Le=ze;break}if(Le===-1)break}let ve=M[Le];ve&&ve.connect(xe)}}let q=new I,Q=new I;function te(Z,se,xe){q.setFromMatrixPosition(se.matrixWorld),Q.setFromMatrixPosition(xe.matrixWorld);let Le=q.distanceTo(Q),ve=se.projectionMatrix.elements,ze=xe.projectionMatrix.elements,_t=ve[14]/(ve[10]-1),Ne=ve[14]/(ve[10]+1),Ze=(ve[9]+1)/ve[5],nt=(ve[9]-1)/ve[5],Ie=(ve[8]-1)/ve[0],at=(ze[8]+1)/ze[0],yt=_t*Ie,xt=_t*at,Qe=Le/(-Ie+at),ft=Qe*-Ie;if(se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ft),Z.translateZ(Qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ve[10]===-1)Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let N=_t+Qe,Et=Ne+Qe,je=yt-ft,T=xt+(Le-ft),_=Ze*Ne/Et*N,B=nt*Ne/Et*N;Z.projectionMatrix.makePerspective(je,T,_,B,N,Et),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function be(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let se=Z.near,xe=Z.far;p.texture!==null&&(p.depthNear>0&&(se=p.depthNear),p.depthFar>0&&(xe=p.depthFar)),V.near=R.near=P.near=se,V.far=R.far=P.far=xe,(U!==V.near||O!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),U=V.near,O=V.far),V.layers.mask=Z.layers.mask|6,P.layers.mask=V.layers.mask&-5,R.layers.mask=V.layers.mask&-3;let Le=Z.parent,ve=V.cameras;be(V,Le);for(let ze=0;ze<ve.length;ze++)be(ve[ze],Le);ve.length===2?te(V,P,R):V.projectionMatrix.copy(P.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),ye(Z,V,Le)};function ye(Z,se,xe){xe===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ps*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(Z){return g[Z]};let Ge=null;function Be(Z,se){if(u=se.getViewerPose(c||a),m=se,u!==null){let xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Le=!1;xe.length!==V.cameras.length&&(V.cameras.length=0,Le=!0);for(let Ne=0;Ne<xe.length;Ne++){let Ze=xe[Ne],nt=null;if(f!==null)nt=f.getViewport(Ze);else{let at=d.getViewSubImage(h,Ze);nt=at.viewport,Ne===0&&(e.setRenderTargetTextures(v,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(v))}let Ie=F[Ne];Ie===void 0&&(Ie=new Dt,Ie.layers.enable(Ne),Ie.viewport=new st,F[Ne]=Ie),Ie.matrix.fromArray(Ze.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Ze.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(nt.x,nt.y,nt.width,nt.height),Ne===0&&(V.matrix.copy(Ie.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Le===!0&&V.cameras.push(Ie)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let Ne=d.getDepthInformation(xe[0]);Ne&&Ne.isValid&&Ne.texture&&p.init(Ne,s.renderState)}if(ve&&ve.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let Ne=0;Ne<xe.length;Ne++){let Ze=xe[Ne].camera;if(Ze){let nt=g[Ze];nt||(nt=new sr,g[Ze]=nt);let Ie=d.getCameraImage(Ze);nt.sourceTexture=Ie}}}}for(let xe=0;xe<M.length;xe++){let Le=w[xe],ve=M[xe];Le!==null&&ve!==void 0&&ve.update(Le,se,c||a)}Ge&&Ge(Z,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),m=null}let Xe=new fd;Xe.setAnimationLoop(Be),this.setAnimationLoop=function(Z){Ge=Z},this.dispose=function(){}}},Lx=new ct,vd=new ke;vd.set(-1,0,0,0,1,0,0,0,1);function Dx(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Pc(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,b,A,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),h(p,g),g.isMeshPhysicalMaterial&&f(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),y(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,b,A):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Kt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Kt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let b=e.get(g),A=b.envMap,v=b.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(vd),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,b,A){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=A*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,b){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Kt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function y(p,g){let b=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ux(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let w=M.program;n.uniformBlockBinding(v,w)}function c(v,M){let w=s[v.id];w===void 0&&(p(v),w=u(v),s[v.id]=w,v.addEventListener("dispose",b));let C=M.program;n.updateUBOMapping(v,C);let x=e.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){let M=d();v.__bindingPointIndex=M;let w=i.createBuffer(),C=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let M=s[v.id],w=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let x=0,E=w.length;x<E;x++){let P=w[x];if(Array.isArray(P))for(let R=0,F=P.length;R<F;R++)f(P[R],x,R,C);else f(P,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,M,w,C){if(y(v,M,w,C)===!0){let x=v.__offset,E=v.value;if(Array.isArray(E)){let P=0;for(let R=0;R<E.length;R++){let F=E[R],V=g(F);m(F,v.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function m(v,M,w){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,w)}function y(v,M,w,C){let x=v.value,E=M+"_"+w;if(C[E]===void 0)return typeof x=="number"||typeof x=="boolean"?C[E]=x:ArrayBuffer.isView(x)?C[E]=x.slice():C[E]=x.clone(),!0;{let P=C[E];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return C[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function p(v){let M=v.uniforms,w=0,C=16;for(let E=0,P=M.length;E<P;E++){let R=Array.isArray(M[E])?M[E]:[M[E]];for(let F=0,V=R.length;F<V;F++){let U=R[F],O=Array.isArray(U.value)?U.value:[U.value];for(let X=0,k=O.length;X<k;X++){let j=O[X],q=g(j),Q=w%C,te=Q%q.boundary,be=Q+te;w+=te,be!==0&&C-be<q.storage&&(w+=C-be),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=q.storage}}}let x=w%C;return x>0&&(w+=C-x),v.__size=w,v.__cache={},this}function g(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):De("WebGLRenderer: Unsupported uniform value type.",v),M}function b(v){let M=v.target;M.removeEventListener("dispose",b);let w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function A(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var Nx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function Fx(){return On===null&&(On=new Fa(Nx,16,16,Mi,An),On.name="DFG_LUT",On.minFilter=Ft,On.magFilter=Ft,On.wrapS=Rn,On.wrapT=Rn,On.generateMipmaps=!1,On.needsUpdate=!0),On}var Ps=class{constructor(e={}){let{canvas:t=Nu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=cn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let y=f,p=new Set([xo,_o,go]),g=new Set([cn,bn,As,Es,po,mo]),b=new Uint32Array(4),A=new Int32Array(4),v=new I,M=null,w=null,C=[],x=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,R=!1,F=null,V=null,U=null,O=null;this._outputColorSpace=rn;let X=0,k=0,j=null,q=-1,Q=null,te=new st,be=new st,ye=null,Ge=new Fe(0),Be=0,Xe=t.width,Z=t.height,se=1,xe=null,Le=null,ve=new st(0,0,Xe,Z),ze=new st(0,0,Xe,Z),_t=!1,Ne=new nr,Ze=!1,nt=!1,Ie=new ct,at=new I,yt=new st,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function ft(){return j===null?se:1}let N=n;function Et(S,D){return t.getContext(S,D)}let je,T,_,B,G,J,oe,ue,K,ie,fe,Ae,z,ne,ae,pe,Ce,L,le,ee,he,me,re;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",Yt,!1),N===null){let D="webgl2";if(N=Et(D,S),N===null)throw Et(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(S){throw t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",Yt,!1),Ue("WebGLRenderer: "+S.message),S}function Pe(){je=new H0(N),je.init(),he=new Rx(N,je),T=new D0(N,je,e,he),_=new Tx(N,je),T.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),V=N.createFramebuffer(),U=N.createFramebuffer(),O=N.createFramebuffer(),B=new q0(N),G=new fx,J=new Cx(N,je,_,G,T,he,B),oe=new G0(P),ue=new Yp(N),me=new I0(N,ue),K=new W0(N,ue,B,me),ie=new Y0(N,K,ue,me,B),L=new $0(N,T,J),ae=new U0(G),fe=new dx(P,oe,je,T,me,ae),Ae=new Dx(P,G),z=new mx,ne=new Sx(je),Ce=new P0(P,oe,_,ie,m,l),pe=new Ex(P,ie,T),re=new Ux(N,B,T,_),le=new L0(N,je,B),ee=new X0(N,je,B),B.programs=fe.programs,P.capabilities=T,P.extensions=je,P.properties=G,P.renderLists=z,P.shadowMap=pe,P.state=_,P.info=B}y!==cn&&(E=new J0(y,t.width,t.height,o,s,r));let Y=new Qc(P,N);this.xr=Y,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(S){S!==void 0&&(se=S,this.setSize(Xe,Z,!1))},this.getSize=function(S){return S.set(Xe,Z)},this.setSize=function(S,D,$=!0){if(Y.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=S,Z=D,t.width=Math.floor(S*se),t.height=Math.floor(D*se),$===!0&&(t.style.width=S+"px",t.style.height=D+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(Xe*se,Z*se).floor()},this.setDrawingBufferSize=function(S,D,$){Xe=S,Z=D,se=$,t.width=Math.floor(S*$),t.height=Math.floor(D*$),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(y===cn){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(te)},this.getViewport=function(S){return S.copy(ve)},this.setViewport=function(S,D,$,H){S.isVector4?ve.set(S.x,S.y,S.z,S.w):ve.set(S,D,$,H),_.viewport(te.copy(ve).multiplyScalar(se).round())},this.getScissor=function(S){return S.copy(ze)},this.setScissor=function(S,D,$,H){S.isVector4?ze.set(S.x,S.y,S.z,S.w):ze.set(S,D,$,H),_.scissor(be.copy(ze).multiplyScalar(se).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(S){_.setScissorTest(_t=S)},this.setOpaqueSort=function(S){xe=S},this.setTransparentSort=function(S){Le=S},this.getClearColor=function(S){return S.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,$=!0){let H=0;if(S){let W=!1;if(j!==null){let _e=j.texture.format;W=p.has(_e)}if(W){let _e=j.texture.type,Me=g.has(_e),ge=Ce.getClearColor(),Ee=Ce.getClearAlpha(),Re=ge.r,He=ge.g,$e=ge.b;Me?(b[0]=Re,b[1]=He,b[2]=$e,b[3]=Ee,N.clearBufferuiv(N.COLOR,0,b)):(A[0]=Re,A[1]=He,A[2]=$e,A[3]=Ee,N.clearBufferiv(N.COLOR,0,A))}else H|=N.COLOR_BUFFER_BIT}D&&(H|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",Yt,!1),Ce.dispose(),z.dispose(),ne.dispose(),G.dispose(),oe.dispose(),ie.dispose(),me.dispose(),re.dispose(),fe.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",zt),Y.removeEventListener("sessionend",Gn),Vt.stop()};function Je(S){S.preventDefault(),Ks("WebGLRenderer: Context Lost."),R=!0}function qe(){Ks("WebGLRenderer: Context Restored."),R=!1;let S=B.autoReset,D=pe.enabled,$=pe.autoUpdate,H=pe.needsUpdate,W=pe.type;Pe(),B.autoReset=S,pe.enabled=D,pe.autoUpdate=$,pe.needsUpdate=H,pe.type=W}function Yt(S){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Nt(S){let D=S.target;D.removeEventListener("dispose",Nt),Ai(D)}function Ai(S){Ei(S),G.remove(S)}function Ei(S){let D=G.get(S).programs;D!==void 0&&(D.forEach(function($){fe.releaseProgram($)}),S.isShaderMaterial&&fe.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,$,H,W,_e){D===null&&(D=xt);let Me=W.isMesh&&W.matrixWorld.determinantAffine()<0,ge=Hd(S,D,$,H,W);_.setMaterial(H,Me);let Ee=$.index,Re=1;if(H.wireframe===!0){if(Ee=K.getWireframeAttribute($),Ee===void 0)return;Re=2}let He=$.drawRange,$e=$.attributes.position,Te=He.start*Re,et=(He.start+He.count)*Re;_e!==null&&(Te=Math.max(Te,_e.start*Re),et=Math.min(et,(_e.start+_e.count)*Re)),Ee!==null?(Te=Math.max(Te,0),et=Math.min(et,Ee.count)):$e!=null&&(Te=Math.max(Te,0),et=Math.min(et,$e.count));let bt=et-Te;if(bt<0||bt===1/0)return;me.setup(W,H,ge,$,Ee);let ht,ot=le;if(Ee!==null&&(ht=ue.get(Ee),ot=ee,ot.setIndex(ht)),W.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*ft()),ot.setMode(N.LINES)):ot.setMode(N.TRIANGLES);else if(W.isLine){let Gt=H.linewidth;Gt===void 0&&(Gt=1),_.setLineWidth(Gt*ft()),W.isLineSegments?ot.setMode(N.LINES):W.isLineLoop?ot.setMode(N.LINE_LOOP):ot.setMode(N.LINE_STRIP)}else W.isPoints?ot.setMode(N.POINTS):W.isSprite&&ot.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(je.get("WEBGL_multi_draw"))ot.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Gt=W._multiDrawStarts,Se=W._multiDrawCounts,Zt=W._multiDrawCount,Ke=Ee?ue.get(Ee).bytesPerElement:1,hn=G.get(H).currentProgram.getUniforms();for(let Tn=0;Tn<Zt;Tn++)hn.setValue(N,"_gl_DrawID",Tn),ot.render(Gt[Tn]/Ke,Se[Tn])}else if(W.isInstancedMesh)ot.renderInstances(Te,bt,W.count);else if($.isInstancedBufferGeometry){let Gt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Se=Math.min($.instanceCount,Gt);ot.renderInstances(Te,bt,Se)}else ot.render(Te,bt)};function Qn(S,D,$,H){F!==null&&S.isNodeMaterial&&F.setObject(H,S),Ze===!0&&ae.setState(S,$,!1),S.transparent===!0&&S.side===Un&&S.forceSinglePass===!1?(S.side=Kt,S.needsUpdate=!0,Hr(S,D,H),S.side=xi,S.needsUpdate=!0,Hr(S,D,H),S.side=Un):Hr(S,D,H)}this.compile=function(S,D,$=null){$===null&&($=S),F!==null&&F.renderStart(S,D,$),w=ne.get($),w.init(D),x.push(w),$.traverseVisible(function(W){W.isLight&&W.layers.test(D.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),S!==$&&S.traverseVisible(function(W){W.isLight&&W.layers.test(D.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),nt=this.localClippingEnabled,Ze=ae.init(this.clippingPlanes,nt),Ze===!0&&ae.setGlobalState(this.clippingPlanes,D),F!==null&&pe.render(w.state.shadowsArray,$,D);let H=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let _e=W.material;if(_e)if(Array.isArray(_e))for(let Me=0;Me<_e.length;Me++){let ge=_e[Me];Qn(ge,$,D,W),H.add(ge)}else Qn(_e,$,D,W),H.add(_e)}),w=x.pop(),F!==null&&F.renderEnd(),H},this.compileAsync=function(S,D,$=null){let H=this.compile(S,D,$);return new Promise(W=>{function _e(){if(H.forEach(function(Me){let Ee=G.get(Me).currentProgram;(Ee===void 0||Ee.isReady())&&H.delete(Me)}),H.size===0){W(S);return}setTimeout(_e,10)}je.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Hi=null;function Tt(S){Hi&&Hi(S)}function zt(){Vt.stop()}function Gn(){Vt.start()}let Vt=new fd;Vt.setAnimationLoop(Tt),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(S){Hi=S,Y.setAnimationLoop(S),S===null?Vt.stop():Vt.start()},Y.addEventListener("sessionstart",zt),Y.addEventListener("sessionend",Gn),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;F!==null&&F.renderStart(S,D);let $=Y.enabled===!0&&Y.isPresenting===!0,H=E!==null&&(j===null||$)&&E.begin(P,j);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(D),D=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,D,j),w=ne.get(S,x.length),w.init(D),w.state.textureUnits=J.getTextureUnits(),x.push(w),Ie.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ne.setFromProjectionMatrix(Ie,yn,D.reversedDepth),nt=this.localClippingEnabled,Ze=ae.init(this.clippingPlanes,nt),M=z.get(S,C.length),M.init(),C.push(M),Y.enabled===!0&&Y.isPresenting===!0){let Me=P.xr.getDepthSensingMesh();Me!==null&&En(Me,D,-1/0,P.sortObjects)}En(S,D,0,P.sortObjects),M.finish(),F!==null&&F.updateLights(w.state.lightsArray),P.sortObjects===!0&&M.sort(xe,Le),Qe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Qe&&Ce.addToRenderList(M,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&ae.beginShadows();let W=w.state.shadowsArray;if(pe.render(W,S,D),Ze===!0&&ae.endShadows(),(H&&E.hasRenderPass())===!1){let Me=M.opaque,ge=M.transmissive;if(w.setupLights(),D.isArrayCamera){let Ee=D.cameras;if(ge.length>0)for(let Re=0,He=Ee.length;Re<He;Re++){let $e=Ee[Re];Gr(Me,ge,S,$e)}Qe&&Ce.render(S);for(let Re=0,He=Ee.length;Re<He;Re++){let $e=Ee[Re];Vr(M,S,$e,$e.viewport)}}else ge.length>0&&Gr(Me,ge,S,D),Qe&&Ce.render(S),Vr(M,S,D)}j!==null&&k===0&&(J.updateMultisampleRenderTarget(j),J.updateRenderTargetMipmap(j)),H&&E.end(P),S.isScene===!0&&S.onAfterRender(P,S,D),me.resetDefaultState(),q=-1,Q=null,x.pop(),x.length>0?(w=x[x.length-1],J.setTextureUnits(w.state.textureUnits),Ze===!0&&ae.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,F!==null&&F.renderEnd()};function En(S,D,$,H){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Ne)){H&&yt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ie);let Me=ie.update(S),ge=S.material;ge.visible&&M.push(S,Me,ge,$,yt.z,null,D)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Ne))){let Me=ie.update(S),ge=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),yt.copy(S.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),yt.copy(Me.boundingSphere.center)),yt.applyMatrix4(S.matrixWorld).applyMatrix4(Ie)),Array.isArray(ge)){let Ee=Me.groups;for(let Re=0,He=Ee.length;Re<He;Re++){let $e=Ee[Re],Te=ge[$e.materialIndex];Te&&Te.visible&&M.push(S,Me,Te,$,yt.z,$e,D)}}else ge.visible&&M.push(S,Me,ge,$,yt.z,null,D)}}let _e=S.children;for(let Me=0,ge=_e.length;Me<ge;Me++)En(_e[Me],D,$,H)}function Vr(S,D,$,H){let{opaque:W,transmissive:_e,transparent:Me}=S;w.setupLightsView($),Ze===!0&&ae.setGlobalState(P.clippingPlanes,$),H&&_.viewport(te.copy(H)),W.length>0&&Ti(W,D,$),_e.length>0&&Ti(_e,D,$),Me.length>0&&Ti(Me,D,$),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Gr(S,D,$,H){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Te=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new en(1,1,{generateMipmaps:!0,type:Te?An:cn,minFilter:yi,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let _e=w.state.transmissionRenderTarget[H.id],Me=H.viewport||te;_e.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);let ge=P.getRenderTarget(),Ee=P.getActiveCubeFace(),Re=P.getActiveMipmapLevel();P.setRenderTarget(_e),P.getClearColor(Ge),Be=P.getClearAlpha(),Be<1&&P.setClearColor(16777215,.5),P.clear(),Qe&&Ce.render($);let He=P.toneMapping;P.toneMapping=Mn;let $e=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),Ze===!0&&ae.setGlobalState(P.clippingPlanes,H),Ti(S,$,H),J.updateMultisampleRenderTarget(_e),J.updateRenderTargetMipmap(_e),je.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let et=0,bt=D.length;et<bt;et++){let ht=D[et],{object:ot,geometry:Gt,material:Se,group:Zt}=ht;if(Se.side===Un&&ot.layers.test(H.layers)){let Ke=Se.side;Se.side=Kt,Se.needsUpdate=!0,ch(ot,$,H,Gt,Se,Zt),Se.side=Ke,Se.needsUpdate=!0,Te=!0}}Te===!0&&(J.updateMultisampleRenderTarget(_e),J.updateRenderTargetMipmap(_e))}P.setRenderTarget(ge,Ee,Re),P.setClearColor(Ge,Be),$e!==void 0&&(H.viewport=$e),P.toneMapping=He}function Ti(S,D,$){let H=D.isScene===!0?D.overrideMaterial:null;for(let W=0,_e=S.length;W<_e;W++){let Me=S[W],{object:ge,geometry:Ee,group:Re}=Me,He=Me.material;He.allowOverride===!0&&H!==null&&(He=H),ge.layers.test($.layers)&&ch(ge,D,$,Ee,He,Re)}}function ch(S,D,$,H,W,_e){F!==null&&W.isNodeMaterial&&F.setObject(S,W),S.onBeforeRender(P,D,$,H,W,_e),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(P,D,$,H,S,_e),W.transparent===!0&&W.side===Un&&W.forceSinglePass===!1?(W.side=Kt,W.needsUpdate=!0,P.renderBufferDirect($,D,H,W,S,_e),W.side=xi,W.needsUpdate=!0,P.renderBufferDirect($,D,H,W,S,_e),W.side=Un):P.renderBufferDirect($,D,H,W,S,_e),S.onAfterRender(P,D,$,H,W,_e)}function Hr(S,D,$){D.isScene!==!0&&(D=xt);let H=G.get(S),W=w.state.lights,_e=w.state.shadowsArray,Me=W.state.version,ge=fe.getParameters(S,W.state,_e,D,$,w.state.lightProbeGridArray),Ee=fe.getProgramCacheKey(ge),Re=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;let He=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=oe.get(S.envMap||H.environment,He),H.envMapRotation=H.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Re===void 0&&(S.addEventListener("dispose",Nt),Re=new Map,H.programs=Re);let $e=Re.get(Ee);if($e!==void 0){if(H.currentProgram===$e&&H.lightsStateVersion===Me)return uh(S,ge),$e}else ge.uniforms=fe.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,$,ge),S.onBeforeCompile(ge,P),$e=fe.acquireProgram(ge,Ee),Re.set(Ee,$e),H.uniforms=ge.uniforms;let Te=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Te.clippingPlanes=ae.uniform),uh(S,ge),H.needsLights=Xd(S),H.lightsStateVersion=Me,H.needsLights&&(Te.ambientLightColor.value=W.state.ambient,Te.lightProbe.value=W.state.probe,Te.sunLights.value=W.state.sun,Te.sunLightShadows.value=W.state.sunShadow,Te.directionalLights.value=W.state.directional,Te.directionalLightShadows.value=W.state.directionalShadow,Te.spotLights.value=W.state.spot,Te.spotLightShadows.value=W.state.spotShadow,Te.rectAreaLights.value=W.state.rectArea,Te.ltc_1.value=W.state.rectAreaLTC1,Te.ltc_2.value=W.state.rectAreaLTC2,Te.pointLights.value=W.state.point,Te.pointLightShadows.value=W.state.pointShadow,Te.hemisphereLights.value=W.state.hemi,Te.sunShadowMatrix.value=W.state.sunShadowMatrix,Te.sunShadowCascade.value=W.state.sunShadowCascade,Te.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Te.spotLightMatrix.value=W.state.spotLightMatrix,Te.spotLightMap.value=W.state.spotLightMap,Te.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=$e,H.uniformsList=null,$e}function hh(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=Rs.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function uh(S,D){let $=G.get(S);$.outputColorSpace=D.outputColorSpace,$.batching=D.batching,$.batchingColor=D.batchingColor,$.instancing=D.instancing,$.instancingColor=D.instancingColor,$.instancingMorph=D.instancingMorph,$.skinning=D.skinning,$.morphTargets=D.morphTargets,$.morphNormals=D.morphNormals,$.morphColors=D.morphColors,$.morphTargetsCount=D.morphTargetsCount,$.numClippingPlanes=D.numClippingPlanes,$.numIntersection=D.numClipIntersection,$.vertexAlphas=D.vertexAlphas,$.vertexTangents=D.vertexTangents,$.toneMapping=D.toneMapping}function Gd(S,D){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(D.matrixWorld);for(let $=0,H=S.length;$<H;$++){let W=S[$];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function Hd(S,D,$,H,W){D.isScene!==!0&&(D=xt),J.resetTextureUnits();let _e=D.fog,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,ge=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ye.workingColorSpace,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Re=oe.get(H.envMap||Me,Ee),He=H.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,$e=!!$.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Te=!!$.morphAttributes.position,et=!!$.morphAttributes.normal,bt=!!$.morphAttributes.color,ht=Mn;H.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ht=P.toneMapping);let ot=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Gt=ot!==void 0?ot.length:0,Se=G.get(H),Zt=w.state.lights;if(Ze===!0&&(nt===!0||S!==Q)){let lt=S===Q&&H.id===q;ae.setState(H,S,lt)}let Ke=!1;H.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Zt.state.version||Se.outputColorSpace!==ge||W.isBatchedMesh&&Se.batching===!1||!W.isBatchedMesh&&Se.batching===!0||W.isBatchedMesh&&Se.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Se.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Se.instancing===!1||!W.isInstancedMesh&&Se.instancing===!0||W.isSkinnedMesh&&Se.skinning===!1||!W.isSkinnedMesh&&Se.skinning===!0||W.isInstancedMesh&&Se.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Se.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Se.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Se.instancingMorph===!1&&W.morphTexture!==null||Se.envMap!==Re||H.fog===!0&&Se.fog!==_e||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ae.numPlanes||Se.numIntersection!==ae.numIntersection)||Se.vertexAlphas!==He||Se.vertexTangents!==$e||Se.morphTargets!==Te||Se.morphNormals!==et||Se.morphColors!==bt||Se.toneMapping!==ht||Se.morphTargetsCount!==Gt||!!Se.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,Se.__version=H.version);let hn=Se.currentProgram;Ke===!0&&(hn=Hr(H,D,W),F&&H.isNodeMaterial&&F.onUpdateProgram(H,hn,Se));let Tn=!1,ei=!1,Wi=!1,rt=hn.getUniforms(),St=Se.uniforms;if(_.useProgram(hn.program)&&(Tn=!0,ei=!0,Wi=!0),H.id!==q&&(q=H.id,ei=!0),Se.needsLights){let lt=Gd(w.state.lightProbeGridArray,W);Se.lightProbeGrid!==lt&&(Se.lightProbeGrid=lt,ei=!0)}if(Tn||Q!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),rt.setValue(N,"projectionMatrix",S.projectionMatrix),rt.setValue(N,"viewMatrix",S.matrixWorldInverse);let ni=rt.map.cameraPosition;ni!==void 0&&ni.setValue(N,at.setFromMatrixPosition(S.matrixWorld)),T.logarithmicDepthBuffer&&rt.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&rt.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,ei=!0,Wi=!0)}if(Se.needsLights&&(Zt.state.sunShadowMap.length>0&&rt.setValue(N,"sunShadowMap",Zt.state.sunShadowMap,J),Zt.state.directionalShadowMap.length>0&&rt.setValue(N,"directionalShadowMap",Zt.state.directionalShadowMap,J),Zt.state.spotShadowMap.length>0&&rt.setValue(N,"spotShadowMap",Zt.state.spotShadowMap,J),Zt.state.pointShadowMap.length>0&&rt.setValue(N,"pointShadowMap",Zt.state.pointShadowMap,J)),W.isSkinnedMesh){rt.setOptional(N,W,"bindMatrix"),rt.setOptional(N,W,"bindMatrixInverse");let lt=W.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),rt.setValue(N,"boneTexture",lt.boneTexture,J))}W.isBatchedMesh&&(rt.setOptional(N,W,"batchingTexture"),rt.setValue(N,"batchingTexture",W._matricesTexture,J),rt.setOptional(N,W,"batchingIdTexture"),rt.setValue(N,"batchingIdTexture",W._indirectTexture,J),rt.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&rt.setValue(N,"batchingColorTexture",W._colorsTexture,J));let ti=$.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&L.update(W,$,hn),(ei||Se.receiveShadow!==W.receiveShadow)&&(Se.receiveShadow=W.receiveShadow,rt.setValue(N,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(St.envMapIntensity.value=D.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=Fx()),ei){if(rt.setValue(N,"toneMappingExposure",P.toneMappingExposure),Se.needsLights&&Wd(St,Wi),_e&&H.fog===!0&&Ae.refreshFogUniforms(St,_e),Ae.refreshMaterialUniforms(St,H,se,Z,w.state.transmissionRenderTarget[S.id]),Se.needsLights&&Se.lightProbeGrid){let lt=Se.lightProbeGrid;St.probesSH.value=lt.texture,St.probesMin.value.copy(lt.boundingBox.min),St.probesMax.value.copy(lt.boundingBox.max),St.probesResolution.value.copy(lt.resolution)}Rs.upload(N,hh(Se),St,J)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Rs.upload(N,hh(Se),St,J),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&rt.setValue(N,"center",W.center),rt.setValue(N,"modelViewMatrix",W.modelViewMatrix),rt.setValue(N,"normalMatrix",W.normalMatrix),rt.setValue(N,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let lt=H.uniformsGroups;for(let ni=0,Xi=lt.length;ni<Xi;ni++){let fh=lt[ni];re.update(fh,hn),re.bind(fh,hn)}}return hn}function Wd(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Xd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(S,D,$){let H=G.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=D,G.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:$,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){let $=G.get(S);$.__webglFramebuffer=D,$.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,$=0){j=S,X=D,k=$;let H=null,W=!1,_e=!1;if(S){let ge=G.get(S);if(ge.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,ge.__webglFramebuffer),te.copy(S.viewport),be.copy(S.scissor),ye=S.scissorTest,_.viewport(te),_.scissor(be),_.setScissorTest(ye),q=-1;return}else if(ge.__webglFramebuffer===void 0)J.setupRenderTarget(S);else if(ge.__hasExternalTextures)J.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let He=S.depthTexture;if(ge.__boundDepthTexture!==He){if(He!==null&&G.has(He)&&(S.width!==He.image.width||S.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(S)}}let Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(_e=!0);let Re=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?H=Re[D][$]:H=Re[D],W=!0):S.samples>0&&J.useMultisampledRTT(S)===!1?H=G.get(S).__webglMultisampledFramebuffer:Array.isArray(Re)?H=Re[$]:H=Re,te.copy(S.viewport),be.copy(S.scissor),ye=S.scissorTest}else te.copy(ve).multiplyScalar(se).floor(),be.copy(ze).multiplyScalar(se).floor(),ye=_t;if($!==0&&(H=V),_.bindFramebuffer(N.FRAMEBUFFER,H)&&_.drawBuffers(S,H),_.viewport(te),_.scissor(be),_.setScissorTest(ye),W){let ge=G.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,ge.__webglTexture,$)}else if(_e){let ge=D;for(let Ee=0;Ee<S.textures.length;Ee++){let Re=G.get(S.textures[Ee]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ee,Re.__webglTexture,$,ge)}}else if(S!==null&&$!==0){let ge=G.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ge.__webglTexture,$)}q=-1};function dh(S){let D=G.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=T.textureFormatReadable(S.format),D.__typeReadable=T.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,$,H,W,_e,Me,ge=0){if(!(S&&S.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){_.bindFramebuffer(N.FRAMEBUFFER,Ee);try{let Re=S.textures[ge],He=Re.format,$e=Re.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge);let Te=dh(Re);if(Te.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-H&&$>=0&&$<=S.height-W&&N.readPixels(D,$,H,W,he.convert(He),he.convert($e),_e)}finally{let Re=j!==null?G.get(j).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(S,D,$,H,W,_e,Me,ge=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee)if(D>=0&&D<=S.width-H&&$>=0&&$<=S.height-W){_.bindFramebuffer(N.FRAMEBUFFER,Ee);let Re=S.textures[ge],He=Re.format,$e=Re.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge);let Te=dh(Re);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.bufferData(N.PIXEL_PACK_BUFFER,_e.byteLength,N.STREAM_READ),N.readPixels(D,$,H,W,he.convert(He),he.convert($e),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let bt=j!==null?G.get(j).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,bt);let ht=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ou(N,ht,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,_e),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(et),N.deleteSync(ht),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,$=0){let H=Math.pow(2,-$),W=Math.floor(S.image.width*H),_e=Math.floor(S.image.height*H),Me=D!==null?D.x:0,ge=D!==null?D.y:0;J.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,Me,ge,W,_e),_.unbindTexture()},this.copyTextureToTexture=function(S,D,$=null,H=null,W=0,_e=0){let Me,ge,Ee,Re,He,$e,Te,et,bt,ht=S.isCompressedTexture?S.mipmaps[_e]:S.image;if($!==null)Me=$.max.x-$.min.x,ge=$.max.y-$.min.y,Ee=$.isBox3?$.max.z-$.min.z:1,Re=$.min.x,He=$.min.y,$e=$.isBox3?$.min.z:0;else{let St=Math.pow(2,-W);Me=Math.floor(ht.width*St),ge=Math.floor(ht.height*St),S.isDataArrayTexture?Ee=ht.depth:S.isData3DTexture?Ee=Math.floor(ht.depth*St):Ee=1,Re=0,He=0,$e=0}H!==null?(Te=H.x,et=H.y,bt=H.z):(Te=0,et=0,bt=0);let ot=he.convert(D.format),Gt=he.convert(D.type),Se;D.isData3DTexture?(J.setTexture3D(D,0),Se=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(J.setTexture2DArray(D,0),Se=N.TEXTURE_2D_ARRAY):(J.setTexture2D(D,0),Se=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let Zt=_.getParameter(N.UNPACK_ROW_LENGTH),Ke=_.getParameter(N.UNPACK_IMAGE_HEIGHT),hn=_.getParameter(N.UNPACK_SKIP_PIXELS),Tn=_.getParameter(N.UNPACK_SKIP_ROWS),ei=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,ht.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Re),_.pixelStorei(N.UNPACK_SKIP_ROWS,He),_.pixelStorei(N.UNPACK_SKIP_IMAGES,$e);let Wi=S.isDataArrayTexture||S.isData3DTexture,rt=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let St=G.get(S),ti=G.get(D),lt=G.get(St.__renderTarget),ni=G.get(ti.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,lt.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let Xi=0;Xi<Ee;Xi++)Wi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(S).__webglTexture,W,$e+Xi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(D).__webglTexture,_e,bt+Xi)),N.blitFramebuffer(Re,He,Me,ge,Te,et,Me,ge,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||G.has(S)){let St=G.get(S),ti=G.get(D);_.bindFramebuffer(N.READ_FRAMEBUFFER,U),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,O);for(let lt=0;lt<Ee;lt++)Wi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.__webglTexture,W,$e+lt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,St.__webglTexture,W),rt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ti.__webglTexture,_e,bt+lt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ti.__webglTexture,_e),W!==0?N.blitFramebuffer(Re,He,Me,ge,Te,et,Me,ge,N.COLOR_BUFFER_BIT,N.NEAREST):rt?N.copyTexSubImage3D(Se,_e,Te,et,bt+lt,Re,He,Me,ge):N.copyTexSubImage2D(Se,_e,Te,et,Re,He,Me,ge);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else rt?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Se,_e,Te,et,bt,Me,ge,Ee,ot,Gt,ht.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Se,_e,Te,et,bt,Me,ge,Ee,ot,ht.data):N.texSubImage3D(Se,_e,Te,et,bt,Me,ge,Ee,ot,Gt,ht):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,_e,Te,et,Me,ge,ot,Gt,ht.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,_e,Te,et,ht.width,ht.height,ot,ht.data):N.texSubImage2D(N.TEXTURE_2D,_e,Te,et,Me,ge,ot,Gt,ht);_.pixelStorei(N.UNPACK_ROW_LENGTH,Zt),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ke),_.pixelStorei(N.UNPACK_SKIP_PIXELS,hn),_.pixelStorei(N.UNPACK_SKIP_ROWS,Tn),_.pixelStorei(N.UNPACK_SKIP_IMAGES,ei),_e===0&&D.generateMipmaps&&N.generateMipmap(Se),_.unbindTexture()},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&J.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?J.setTextureCube(S,0):S.isData3DTexture?J.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?J.setTexture2DArray(S,0):J.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){X=0,k=0,j=null,_.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};function yd(i){let e=i.trim().replace("#",""),t=e.length===3?e.split("").map(s=>s+s).join(""):e,n=parseInt(t,16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}function Ox(){let i=getComputedStyle(document.documentElement),e=(a,o)=>(i.getPropertyValue(a)||o).trim()||o,t=yd(e("--viz-neutral","#8a919c")),n=yd(e("--viz-accent","#c8f53c")),s=a=>t.map((o,l)=>si(o,n[l],a)),r=e("--viz-mode","dark")==="dark";return{dark:r,alphaGain:r?1:1.3,sizeGain:r?1:1.12,neutral:t,tier:{haiku:s(.38),sonnet:s(.68),opus:n},lineHex:e("--viz-line","#2a2f37"),neutralHex:e("--viz-neutral","#8a919c")}}var Bx=`
attribute vec3 aColor;
attribute float aSize;
attribute float aAlpha;
uniform float uPx;
uniform float uDist;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uPx * (uDist / -mv.z);
  vColor = aColor;
  vAlpha = aAlpha;
}`,kx=`
precision mediump float;
varying vec3 vColor;
varying float vAlpha;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.16, d);
  if (a * vAlpha < 0.01) discard;
  gl_FragColor = vec4(vColor, a * vAlpha);
}`,Sd={haiku:0,sonnet:1,opus:2};function Md(i,e){let t=window.innerWidth<640,n=t?1.5:2,s=document.createElement("canvas");s.className="viz-canvas",s.setAttribute("aria-hidden","true"),i.insertBefore(s,i.querySelector(".vz-overlay"));let r;try{r=new Ps({canvas:s,antialias:!0,alpha:!0,powerPreference:"low-power"})}catch(z){throw s.remove(),z}r.setClearColor(0,0),r.setPixelRatio(Math.min(window.devicePixelRatio||1,n));let a=new ui,o=30,l=9,c=l/2/Math.tan(o/2*Math.PI/180),u=new Dt(o,Mt.aspect,.1,100);u.position.set(0,0,c);let d=l*Mt.aspect,h=(z,ne)=>[(z-.5)*d,(.5-ne)*l],f=Ox(),m=[],y=z=>(m.push(z),z),p=new Ct;a.add(p);let g=y(new di({color:new Fe(f.lineHex),transparent:!0,opacity:1}));function b(){p.children.slice().forEach(ae=>{p.remove(ae),ae.geometry.dispose()});let z=[],ne=9;for(let ae=0;ae<ne;ae++){let pe=si(Mt.src.y0,Mt.src.y1,ae/(ne-1)),Ce=[];for(let L=0;L<=40;L++)Ce.push(gl(pe,L/40));z.push(Ce)}for(let ae of Mt.tiers){let pe=[];for(let Ce=0;Ce<=48;Ce++)pe.push(_l(ae,Ce/48));z.push(pe)}for(let ae of z){let pe=new Float32Array(ae.length*3);ae.forEach(([L,le],ee)=>{let[he,me]=h(L,le);pe[ee*3]=he,pe[ee*3+1]=me,pe[ee*3+2]=-.4});let Ce=new gt;Ce.setAttribute("position",new mt(pe,3)),p.add(new Ni(Ce,g))}}b();let A=new Ct;a.add(A);let v=y(new gt);{let ne=new Float32Array(291);for(let ae=0;ae<=96;ae++){let pe=ae/96*Math.PI*2;ne[ae*3]=Math.cos(pe)*.42,ne[ae*3+1]=Math.sin(pe)*.42}v.setAttribute("position",new mt(ne,3))}let M=y(new di({color:new Fe(f.neutralHex),transparent:!0,opacity:.9}));A.add(new Ni(v,M));let w=y(new ys(new mr(.2))),C=new xs(w,M);A.add(C);let x=y(new ys(new pr(.17,0))),E=Mt.tiers.map(z=>{let ne=y(new di({color:new Fe().setRGB(...f.tier[z.id]),transparent:!0,opacity:.95})),ae=new xs(x,ne);return a.add(ae),{id:z.id,mesh:ae,mat:ne,scale:1}});function P(){let[z,ne]=h(Mt.router.x,Mt.router.y);A.position.set(z,ne,0),Mt.tiers.forEach((ae,pe)=>{let[Ce,L]=h(ae.x,ae.y);E[pe].mesh.position.set(Ce,L,0)})}P();let R=t?520:1100,F=new Float32Array(R*3),V=new Float32Array(R*3),U=new Float32Array(R),O=new Float32Array(R),X=new Uint8Array(R),k=new Float32Array(R),j=new Float32Array(R),q=new Uint8Array(R),Q=new Float32Array(R),te=new Float32Array(R),be=new Float32Array(R),ye=new Float32Array(R),Ge=new Float32Array(R),Be=new Float32Array(R),Xe=new Float32Array(R),Z=new Float32Array(R),se=new Float32Array(R),xe=new Float32Array(R),Le=new Float32Array(R),ve=new Float32Array(R),ze=new Float32Array(R);function _t(z,ne){if(X[z]=0,k[z]=-Math.random()*.25,j[z]=.2+Math.random()*.14,q[z]=Sd[fl[Math.random()*fl.length|0]],Q[z]=si(Mt.src.y0,Mt.src.y1,Math.random()),te[z]=(Math.random()-.5)*1.4,be[z]=2+Math.random()*1.8+(q[z]===2?.9:0),ye[z]=Math.random()*Math.PI*2,Ge[z]=.18+Math.pow(Math.random(),.7)*.55,Be[z]=(.35+Math.random()*.6)*(Math.random()<.5?-1:1),Xe[z]=.35+Math.random()*.9,Z[z]=0,se[z]=3+Math.random()*4.5,xe[z]=Le[z]=ve[z]=ze[z]=0,ne){let ae=Math.random();ae<.4?k[z]=Math.random():ae<.6?(X[z]=1,k[z]=Math.random(),j[z]=.42+Math.random()*.2):(X[z]=2,Z[z]=.7+Math.random()*se[z])}}for(let z=0;z<R;z++)_t(z,!0);let Ne=y(new gt);Ne.setAttribute("position",new mt(F,3)),Ne.setAttribute("aColor",new mt(V,3)),Ne.setAttribute("aSize",new mt(U,1)),Ne.setAttribute("aAlpha",new mt(O,1));let Ze=y(new Rt({vertexShader:Bx,fragmentShader:kx,uniforms:{uPx:{value:r.getPixelRatio()},uDist:{value:c}},transparent:!0,depthWrite:!1,depthTest:!1,blending:f.dark?Ar:Fn})),nt=new Fi(Ne,Ze);nt.frustumCulled=!1,a.add(nt);let Ie={x:0,y:0,nx:0,ny:0,energy:0,inside:!1};function at(z){let ne=i.getBoundingClientRect(),ae=(z.clientX-ne.left)/ne.width,pe=(z.clientY-ne.top)/ne.height,[Ce,L]=h(ae,pe);if(Ie.inside){let le=Math.hypot(Ce-Ie.x,L-Ie.y);Ie.energy=Math.min(1,Ie.energy+le*.9)}Ie.x=Ce,Ie.y=L,Ie.nx=ae-.5,Ie.ny=pe-.5,Ie.inside=!0}function yt(){Ie.inside=!1,Ie.nx=0,Ie.ny=0}i.addEventListener("pointermove",at,{passive:!0}),i.addEventListener("pointerleave",yt,{passive:!0});let xt=e(),Qe=0;function ft(){let z=i.clientWidth,ne=i.clientHeight;!z||!ne||(r.setPixelRatio(Math.min(window.devicePixelRatio||1,window.innerWidth<640?1.5:2)),Ze.uniforms.uPx.value=r.getPixelRatio(),r.setSize(z,ne,!1),u.aspect=z/ne,u.updateProjectionMatrix(),d=l*u.aspect,b(),P())}let N=new ResizeObserver(ft);N.observe(i),ft();let Et=!0,je=new IntersectionObserver(z=>{Et=z[z.length-1].isIntersecting,Ae()});je.observe(i);let T=()=>Ae();document.addEventListener("visibilitychange",T);let _=new I;function B(){let z=i.clientWidth,ne=i.clientHeight;i.querySelectorAll(".tier").forEach(ae=>{let pe=E.find(Ce=>Ce.id===ae.dataset.tier);pe&&(_.copy(pe.mesh.position).project(u),ae.style.left=(_.x*.5+.5)*z+"px",ae.style.top=(-_.y*.5+.5)*ne+"px")})}let G=0,J=0,oe=0,ue=!0,K=!1;function ie(z){oe+=z;let ne=Mt.tiers,ae=[f.tier.haiku,f.tier.sonnet,f.tier.opus],pe=f.neutral;Qe+=((xt?1:0)-Qe)*Math.min(1,z*8);let L=xt?Sd[xt]:-1,le=1.5,ee=le*le;Ie.energy*=Math.pow(.9,z*60);let he=Ie.inside?Ie.energy:0,me=Math.pow(.9,z*60);for(let Y=0;Y<R;Y++){let Je,qe,Yt=te[Y],Nt=1,Ai=pe,Ei=0,Qn=q[Y];if(X[Y]===0){k[Y]+=j[Y]*z;let Tt=Math.max(0,k[Y]);[Je,qe]=gl(Q[Y],Tt),qe+=Math.sin(oe*1.3+Y)*.004*(1-Tt),Yt=te[Y]*(1-Tt),Nt=k[Y]<0?0:Math.min(1,k[Y]/.08)*.75,k[Y]>=1&&(X[Y]=1,k[Y]=0,j[Y]=.42+Math.random()*.2)}else if(X[Y]===1){k[Y]+=j[Y]*z;let Tt=Math.min(1,k[Y]);[Je,qe]=_l(ne[Qn],Tt);let zt=Math.sin(Math.PI*Tt);qe+=te[Y]/1.4*.03*zt,Yt=te[Y]*.4*zt,Nt=.8+.2*Tt,Ai=ae[Qn],Ei=Math.min(1,Tt*1.6),k[Y]>=1&&(X[Y]=2,Z[Y]=0)}else{Z[Y]+=z,ye[Y]+=Be[Y]*z;let Tt=Math.min(1,Z[Y]/.7),zt=Ge[Y]*(1-Math.pow(1-Tt,3)),Gn=ne[Qn];Ai=ae[Qn],Ei=1;let Vt=Math.max(0,(Z[Y]-se[Y])/.6);Nt=Math.max(0,1-Vt);let[En,Vr]=h(Gn.x,Gn.y),Gr=Math.cos(ye[Y]),Ti=Math.sin(ye[Y]);F[Y*3]=En+Gr*zt,F[Y*3+1]=Vr+Ti*zt*Math.cos(Xe[Y])*.75,F[Y*3+2]=Ti*zt*Math.sin(Xe[Y]),Vt>=1&&_t(Y,!1),Je=null}if(Je!==null){let[Tt,zt]=h(Je,qe);F[Y*3]=Tt,F[Y*3+1]=zt,F[Y*3+2]=Yt}if(he>.002){let Tt=F[Y*3]+xe[Y]-Ie.x,zt=F[Y*3+1]+Le[Y]-Ie.y,Gn=Tt*Tt+zt*zt;if(Gn<ee&&Gn>1e-6){let Vt=Math.sqrt(Gn),En=(1-Vt/le)*he*z*9;ve[Y]+=Tt/Vt*.7*En-zt/Vt*1.1*En,ze[Y]+=zt/Vt*.7*En+Tt/Vt*1.1*En}}ve[Y]=(ve[Y]-xe[Y]*5*z)*me,ze[Y]=(ze[Y]-Le[Y]*5*z)*me,xe[Y]+=ve[Y]*z*6,Le[Y]+=ze[Y]*z*6,F[Y*3]+=xe[Y],F[Y*3+1]+=Le[Y];let Hi=be[Y];L>=0&&X[Y]>0?Qn===L?Hi*=1+.35*Qe:Nt*=1-.6*Qe:L>=0&&(Nt*=1-.35*Qe),O[Y]=Math.min(1,Nt*f.alphaGain),U[Y]=Hi*f.sizeGain,V[Y*3]=si(pe[0],Ai[0],Ei),V[Y*3+1]=si(pe[1],Ai[1],Ei),V[Y*3+2]=si(pe[2],Ai[2],Ei)}Ne.attributes.position.needsUpdate=!0,Ne.attributes.aColor.needsUpdate=!0,Ne.attributes.aSize.needsUpdate=!0,Ne.attributes.aAlpha.needsUpdate=!0,C.rotation.y+=z*.6,C.rotation.x+=z*.25,E.forEach((Y,Je)=>{Y.mesh.rotation.y+=z*(.35+Je*.12),Y.mesh.rotation.x+=z*.2;let qe=1+(xt===Y.id?.45:0)*Qe;Y.scale+=(qe-Y.scale)*Math.min(1,z*10),Y.mesh.scale.setScalar(Y.scale),Y.mat.opacity=xt&&xt!==Y.id?1-.55*Qe:.95});let re=Ie.nx*.9+Math.sin(oe*.11)*.25,Pe=-Ie.ny*.6+Math.sin(oe*.07)*.12;u.position.x+=(re-u.position.x)*Math.min(1,z*2.5),u.position.y+=(Pe-u.position.y)*Math.min(1,z*2.5),u.lookAt(0,0,0)}function fe(z){if(G=0,K)return;let ne=J?Math.min(.05,(z-J)/1e3):1/60;J=z,ie(ne),r.render(a,u),B(),ue&&(ue=!1,i.classList.add("is-live")),Ae()}function Ae(){if(K)return;let z=Et&&!document.hidden;z&&!G?G=requestAnimationFrame(fe):!z&&G&&(cancelAnimationFrame(G),G=0,J=0)}return getComputedStyle(s).opacity,Ae(),{select(z){xt=z},placeButtons:B,dispose(){if(K)return;K=!0,G&&cancelAnimationFrame(G),G=0,N.disconnect(),je.disconnect(),document.removeEventListener("visibilitychange",T),i.removeEventListener("pointermove",at),i.removeEventListener("pointerleave",yt),p.children.forEach(ne=>ne.geometry.dispose()),m.forEach(ne=>ne.dispose());let z=r.getContext();r.dispose();try{let ne=z&&z.getExtension("WEBGL_lose_context");ne&&ne.loseContext()}catch{}s.remove(),i.classList.remove("is-live"),i.querySelectorAll(".tier").forEach(ne=>{let ae=Mt.tiers.find(pe=>pe.id===ne.dataset.tier);ne.style.left=+(ae.x*100).toFixed(2)+"%",ne.style.top=+(ae.y*100).toFixed(2)+"%"})}}}var bd=new an,il=new I,Ls=class extends Mr{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new dt(e,3)),this.setAttribute("uv",new dt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new _i(t,6,1);return this.setAttribute("instanceStart",new Sn(n,3,0)),this.setAttribute("instanceEnd",new Sn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new _i(t,6,1);return this.setAttribute("instanceColorStart",new Sn(n,3,0)),this.setAttribute("instanceColorEnd",new Sn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new xr(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),bd.setFromBufferAttribute(t),this.boundingBox.union(bd))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)il.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(il)),il.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(il));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};de.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new we},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};jt.line={uniforms:Ur.merge([de.common,de.fog,de.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var bi=class extends Rt{constructor(e){super({type:"LineMaterial",uniforms:Ur.clone(jt.line.uniforms),vertexShader:jt.line.vertexShader,fragmentShader:jt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var eh=new st,wd=new I,Ad=new I,Ot=new st,Bt=new st,Bn=new st,th=new I,nh=new ct,kt=new br,Ed=new I,sl=new an,rl=new dn,kn=new st,zn,Gi;function Td(i,e,t){return kn.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),kn.multiplyScalar(1/kn.w),kn.x=Gi/t.width,kn.y=Gi/t.height,kn.applyMatrix4(i.projectionMatrixInverse),kn.multiplyScalar(1/kn.w),Math.abs(Math.max(kn.x,kn.y))}function zx(i,e){let t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){kt.start.fromBufferAttribute(s,o),kt.end.fromBufferAttribute(r,o),kt.applyMatrix4(t);let c=new I,u=new I;zn.distanceSqToSegment(kt.start,kt.end,u,c),u.distanceTo(c)<Gi*.5&&e.push({point:u,pointOnLine:c,distance:zn.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function Vx(i,e,t){let n=e.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,u=Math.min(o.instanceCount,l.count),d=-e.near;zn.at(1,Bn),Bn.w=1,Bn.applyMatrix4(e.matrixWorldInverse),Bn.applyMatrix4(n),Bn.multiplyScalar(1/Bn.w),Bn.x*=r.x/2,Bn.y*=r.y/2,Bn.z=0,th.copy(Bn),nh.multiplyMatrices(e.matrixWorldInverse,a);for(let h=0,f=u;h<f;h++){if(Ot.fromBufferAttribute(l,h),Bt.fromBufferAttribute(c,h),Ot.w=1,Bt.w=1,Ot.applyMatrix4(nh),Bt.applyMatrix4(nh),Ot.z>d&&Bt.z>d)continue;if(Ot.z>d){let A=Ot.z-Bt.z,v=(Ot.z-d)/A;Ot.lerp(Bt,v)}else if(Bt.z>d){let A=Bt.z-Ot.z,v=(Bt.z-d)/A;Bt.lerp(Ot,v)}Ot.applyMatrix4(n),Bt.applyMatrix4(n),Ot.multiplyScalar(1/Ot.w),Bt.multiplyScalar(1/Bt.w),Ot.x*=r.x/2,Ot.y*=r.y/2,Bt.x*=r.x/2,Bt.y*=r.y/2,kt.start.copy(Ot),kt.start.z=0,kt.end.copy(Bt),kt.end.z=0;let y=kt.closestPointToPointParameter(th,!0);kt.at(y,Ed);let p=Cc.lerp(Ot.z,Bt.z,y),g=p>=-1&&p<=1,b=th.distanceTo(Ed)<Gi*.5;if(g&&b){kt.start.fromBufferAttribute(l,h),kt.end.fromBufferAttribute(c,h),kt.start.applyMatrix4(a),kt.end.applyMatrix4(a);let A=new I,v=new I;zn.distanceSqToSegment(kt.start,kt.end,v,A),t.push({point:v,pointOnLine:A,distance:zn.origin.distanceTo(v),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}var al=class extends qt{constructor(e=new Ls,t=new bi({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)wd.fromBufferAttribute(t,a),Ad.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+wd.distanceTo(Ad);let r=new _i(s,2,1);return e.setAttribute("instanceDistanceStart",new Sn(r,1,0)),e.setAttribute("instanceDistanceEnd",new Sn(r,1,1)),this}raycast(e,t){let n=this.material.worldUnits,s=e.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;zn=e.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;Gi=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),rl.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=Gi*.5;else{let d=Math.max(s.near,rl.distanceToPoint(zn.origin));c=Td(s,d,l.resolution)}if(rl.radius+=c,zn.intersectsSphere(rl)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),sl.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=Gi*.5;else{let d=Math.max(s.near,sl.distanceToPoint(zn.origin));u=Td(s,d,l.resolution)}sl.expandByScalar(u),zn.intersectsBox(sl)!==!1&&(n?zx(this,t):Vx(this,s,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(eh),this.material.uniforms.resolution.value.set(eh.z,eh.w))}};var Ds=class extends Ls{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){let t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}setFromPoints(e){let t=e.length-1,n=new Float32Array(6*t);for(let s=0;s<t;s++)n[6*s]=e[s].x,n[6*s+1]=e[s].y,n[6*s+2]=e[s].z||0,n[6*s+3]=e[s+1].x,n[6*s+4]=e[s+1].y,n[6*s+5]=e[s+1].z||0;return super.setPositions(n),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var ol=class extends al{constructor(e=new Ds,t=new bi({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};var Br=10,Gx=Br*1.6,vt=(i,e,t=0)=>new I((i-.5)*Gx,(.5-e)*Br,t);function Rd(){let i=getComputedStyle(document.documentElement),e=(t,n)=>(i.getPropertyValue(t)||"").trim()||n;return{neutral:new Fe(e("--viz-neutral","#6b717b")),accent:new Fe(e("--viz-accent","#557300")),line:new Fe(e("--viz-line","#d0d1c9")),bad:new Fe(e("--viz-bad","#b0412e")),warn:new Fe(e("--viz-warn","#8f5f00")),raise:new Fe(e("--bg-raise","#ebebe5")),bg:new Fe(e("--bg","#f4f4f0"))}}function Pd(i=28){let e=new Dt(i,1.6,.1,100),t=Br/2/Math.tan(i/2*Math.PI/180)*1.08;return e.position.set(0,0,t),e.lookAt(0,0,0),e}function ll(i,e,t,n,s,r=0,a=5){let o=[],l=[[i+t/2-s,e+n/2-s,0],[i-t/2+s,e+n/2-s,Math.PI/2],[i-t/2+s,e-n/2+s,Math.PI],[i+t/2-s,e-n/2+s,3*Math.PI/2]];for(let[c,u,d]of l)for(let h=0;h<=a;h++){let f=d+h/a*(Math.PI/2);o.push(new I(c+Math.cos(f)*s,u+Math.sin(f)*s,r))}return o.push(o[0].clone()),o}function ih(i,e,t,n=0,s=48){let r=[];for(let a=0;a<=s;a++){let o=a/s*Math.PI*2;r.push(new I(i+Math.cos(o)*t,e+Math.sin(o)*t,n))}return r}function Id(){let i=[],e=[],t=[],n=d=>(i.push(d),d);function s(d,{color:h,width:f=1.5,dashed:m=!1,dash:y=.18,gap:p=.16,base:g=1}={}){let b=n(new Ds);b.setPositions(d.flatMap(M=>[M.x,M.y,M.z]));let A=n(new bi({color:h.getHex(),linewidth:f,transparent:!0,opacity:g,dashed:m,dashSize:y,gapSize:p,worldUnits:!1}));A.userData.width=f,t.push(A);let v=new ol(b,A);return m&&v.computeLineDistances(),v}function r(d,h,f,m,y,p,{color:g,base:b=1}={}){let A=new Ms,v=d-f/2,M=h-m/2;A.moveTo(v+y,M),A.lineTo(v+f-y,M),A.quadraticCurveTo(v+f,M,v+f,M+y),A.lineTo(v+f,M+m-y),A.quadraticCurveTo(v+f,M+m,v+f-y,M+m),A.lineTo(v+y,M+m),A.quadraticCurveTo(v,M+m,v,M+m-y),A.lineTo(v,M+y),A.quadraticCurveTo(v,M,v+y,M);let w=n(new _r(A,4)),C=n(new Ui({color:g,transparent:!0,opacity:b,depthWrite:!1})),x=new qt(w,C);return x.position.z=p,x}function a(d,h){let f=[];return d.traverse(m=>{m.material&&f.push({mat:m.material,base:m.material.opacity})}),e.push({mats:f,tags:h,alpha:1,target:1}),d}function o(d){for(let h of e)h.target=d(h.tags)}function l(d,h){let f=1-Math.exp(-d/.085);for(let m of e){m.alpha+=(m.target-m.alpha)*f,Math.abs(m.target-m.alpha)<.002&&(m.alpha=m.target);for(let{mat:y,base:p}of m.mats)y.opacity=p*m.alpha,y.visible=y.opacity>.004}for(let m of t)m.linewidth=m.userData.width*h.dpr,m.resolution.set(h.w,h.h)}function c(){for(let d of e)d.alpha=d.target}function u(){i.forEach(d=>d.dispose&&d.dispose())}return{track:n,line:s,fill:r,fade:a,setTargets:o,step:l,snap:c,dispose:u}}var Hx=`
attribute float aAlpha;
uniform float uPx;
uniform float uSize;
varying float vAlpha;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * uPx;
  vAlpha = aAlpha;
}`,Wx=`
precision mediump float;
uniform vec3 uColor;
uniform float uOpacity;
varying float vAlpha;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.2, d) * vAlpha * uOpacity;
  if (a < 0.01) discard;
  gl_FragColor = vec4(uColor, a);
}`;function Ld(i,e,t,n=7){let s=i.track(new gt);s.setAttribute("position",new mt(new Float32Array(e*3),3)),s.setAttribute("aAlpha",new mt(new Float32Array(e).fill(1),1));let r=i.track(new Rt({vertexShader:Hx,fragmentShader:Wx,uniforms:{uPx:{value:1},uSize:{value:n},uColor:{value:t.clone()},uOpacity:{value:1}},transparent:!0,depthWrite:!1,blending:Fn}));Object.defineProperty(r,"opacity",{get:()=>r.uniforms.uOpacity.value,set:o=>r.uniforms.uOpacity.value=o,configurable:!0});let a=new Fi(s,r);return a.frustumCulled=!1,a}var Vn=.45,wi=-.45,pn=Br;function Dd(){let i=Rd(),e=Id(),t=new ui,n=Pd(),s=new Ct;t.add(s);let r=Fs,a=O=>vt(O,0).x,o=O=>vt(0,O).y;r.rows.forEach((O,X)=>{let k=new Ct,j=a(r.scen.cx),q=o(O),Q=r.scen.w*(pn*1.6),te=r.scen.h*pn;k.add(e.fill(j,q,Q,te,.16,Vn-.01,{color:i.raise})),k.add(e.line(ll(j,q,Q,te,.16,Vn),{color:i.neutral,width:1.5}));let be=j-Q/2+.03*pn*1.6;[.15,.18,.12].forEach((ye,Ge)=>{let Be=o(O-.032+Ge*.032);k.add(e.line([vt(0,0,Vn).setX(be).setY(Be),vt(0,0,Vn).setX(be+ye*pn*1.6).setY(Be)],{color:i.neutral,width:1.25,base:.85}))}),s.add(e.fade(k,["scen","s"+X]))}),r.rows.forEach((O,X)=>{let k=new Ct,j=a(r.test.cx),q=o(O),Q=r.test.w*(pn*1.6),te=r.test.h*pn;k.add(e.fill(j,q,Q,te,.1,wi-.01,{color:i.raise})),k.add(e.line(ll(j,q,Q,te,.1,wi),{color:i.neutral,width:1.5}));let be=j-Q/2+.025*pn*1.6;[.09,.06].forEach((ye,Ge)=>{let Be=o(O-.016+Ge*.032);k.add(e.line([vt(0,0,wi).setX(be).setY(Be),vt(0,0,wi).setX(be+ye*pn*1.6).setY(Be)],{color:i.neutral,width:1.25,base:.85}))}),s.add(e.fade(k,["tests","t"+X]))});let l=(O,X=40)=>{let k=[];for(let j=0;j<=X;j++){let q=j/X,[Q,te]=Wr(O,q);k.push(vt(Q,te,Vn+(wi-Vn)*q))}return k},c=r.rows.map((O,X)=>l(X,64));r.rows.forEach((O,X)=>{s.add(e.fade(e.line(c[X],{color:i.accent,width:1.75}),["links","l"+X]))});let u=2,d=Ld(e,r.rows.length*u,i.accent,7);s.add(e.fade(d,["links","pulses"]));let h=new Ct,f=(r.scan.y1-r.scan.y0)*pn,m=o((r.scan.y0+r.scan.y1)/2),y=e.line([vt(0,0,0).set(0,m-f/2,0),vt(0,0,0).set(0,m+f/2,0)],{color:i.neutral,width:1.25,dashed:!0,dash:.12,gap:.2});h.add(y),s.add(e.fade(h,["check"]));let p=a(r.gate.x),g=o(r.gate.y),b=r.gate.r*pn,A=new Ct;A.add(e.line(ih(p,g,b,0),{color:i.accent,width:2})),A.add(e.line([vt(0,0).set(p-b*.42,g,0),vt(0,0).set(p-b*.12,g-b*.32,0),vt(0,0).set(p+b*.44,g+b*.3,0)],{color:i.accent,width:2})),s.add(e.fade(A,["check","gateok"]));let v=new Ct;v.add(e.line(ih(p,g,b,0),{color:i.bad,width:2})),v.add(e.line([vt(0,0).set(p-b*.36,g+b*.36,0),vt(0,0).set(p+b*.36,g-b*.36,0)],{color:i.bad,width:2})),v.add(e.line([vt(0,0).set(p+b*.36,g+b*.36,0),vt(0,0).set(p-b*.36,g-b*.36,0)],{color:i.bad,width:2})),s.add(e.fade(v,["gatebad"]));let M=new Ct;M.add(e.line(c[r.ghost],{color:i.bad,width:1.75,dashed:!0,dash:.16,gap:.14}));{let O=r.rows[r.link[r.ghost]];M.add(e.line(ll(a(r.test.cx),o(O),r.test.w*pn*1.6,r.test.h*pn,.1,wi),{color:i.bad,width:1.5,dashed:!0,dash:.14,gap:.12}))}s.add(e.fade(M,["ghost"]));let w={scenarios:vt(r.labels.scenarios.x,r.labels.scenarios.y,Vn),tests:vt(r.labels.tests.x,r.labels.tests.y,wi),check:vt(r.labels.check.x,r.labels.check.y,0),gap:vt(r.labels.gap.x,r.labels.gap.y,Vn)},C=null;function x(O){C=O&&O.length?new Set(O):null;let X=k=>!!C&&C.has(k);e.setTargets(k=>{let j=q=>k.includes(q);return j("gatebad")||j("ghost")?X("ghost")?1:0:j("gap")?X("gap")?1:0:X("ghost")&&(j("l"+r.ghost)||j("t"+r.link[r.ghost])||j("gateok"))||X("gap")&&(j("l"+r.gap)||j("t"+r.link[r.gap]))?0:C?k.some(q=>C.has(q))?1:.18:1})}x(null),e.snap();let E=d.geometry.attributes.position,P=d.geometry.attributes.aAlpha,R=0,F=0,V=0;function U(O,X,k){let j=.07+k.pointer.y*.05+Math.sin(X*.31)*.012,q=-.2+k.pointer.x*.08+Math.sin(X*.23)*.02,Q=1-Math.exp(-O/.25);R+=(j-R)*Q,F+=(q-F)*Q,s.rotation.set(R,F,0);let te=0;for(let Ge=0;Ge<r.rows.length;Ge++){let Be=C&&C.has("ghost")&&Ge===r.ghost||C&&C.has("gap")&&Ge===r.gap;for(let Xe=0;Xe<u;Xe++){let Z=(X*.16+Xe/u+Ge*.23)%1,[se,xe]=Wr(Ge,Z),Le=vt(se,xe,Vn+(wi-Vn)*Z);E.setXYZ(te,Le.x,Le.y,Le.z),P.setX(te,Be?0:Math.min(1,Z*6,(1-Z)*6)),te++}}E.needsUpdate=!0,P.needsUpdate=!0,d.material.uniforms.uPx.value=k.dpr;let be=C&&C.has("check");V=be?V+O/3.2:0;let ye=be?.5-.5*Math.cos(V*Math.PI*2):.5;y.position.x=a(r.scan.x0+(r.scan.x1-r.scan.x0)*ye),e.step(O,k)}return{scene:t,camera:n,anchors:w,update:U,setFocus:x,dispose(){e.dispose()}}}var Ud={tdd:Dd};function Nd(){let i=null,e=null;function t(){return e||(i=document.createElement("canvas"),e=new Ps({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"}),e.setPixelRatio(1),e.setClearColor(0,0),e.setScissorTest(!0),e)}let n=0,s=0,r=window.matchMedia("(hover: hover) and (pointer: fine)"),a=[],o=0,l=0,c=!1,u=new I,d=new IntersectionObserver(M=>{for(let w of M){let C=a.find(x=>x.pv===w.target);C&&(C.visible=w.isIntersecting,C.visible&&!C.inst&&(C.inst=Ud[C.kind]()),C.inst&&C.focus!==void 0&&C.inst.setFocus(C.focus))}h()},{rootMargin:"120px 0px"});function h(){c||o||document.hidden||a.some(M=>M.visible)&&(o=requestAnimationFrame(y))}let f=()=>{document.hidden&&o&&(cancelAnimationFrame(o),o=0),l=0,h()};document.addEventListener("visibilitychange",f);function m(M,w,C){t();let x=M.stage,E=Math.min(window.devicePixelRatio||1,window.innerWidth<640?1.75:2),P=Math.round(x.clientWidth*E),R=Math.round(x.clientHeight*E);if(P<4||R<4)return;(M.canvas.width!==P||M.canvas.height!==R)&&(M.canvas.width=P,M.canvas.height=R),(P>n||R>s)&&(n=Math.max(n,P),s=Math.max(s,R),e.setSize(n,s,!1));let F=1-Math.exp(-w/.12);M.pointer.x+=(M.pointerTarget.x-M.pointer.x)*F,M.pointer.y+=(M.pointerTarget.y-M.pointer.y)*F;let V=M.inst;V.camera.aspect=P/R,V.camera.updateProjectionMatrix(),V.update(w,C,{w:P,h:R,dpr:E,pointer:M.pointer}),e.setViewport(0,0,P,R),e.setScissor(0,0,P,R),e.clear(),e.render(V.scene,V.camera),M.ctx.clearRect(0,0,P,R),M.ctx.drawImage(i,0,s-R,P,R,0,0,P,R),M.live||(M.live=!0,M.pv.classList.add("is-live"));for(let U of M.labels){let O=V.anchors[U.key];if(!O)continue;u.copy(O).applyMatrix4(V.scene.children[0].matrixWorld).project(V.camera);let X=(u.x+1)/2*100,k=(1-u.y)/2*100;(Math.abs(X-U.x)>.05||Math.abs(k-U.y)>.05)&&(U.x=X,U.y=k,U.el.style.left=X.toFixed(2)+"%",U.el.style.top=k.toFixed(2)+"%")}}function y(M){if(o=0,c)return;let w=l?Math.min((M-l)/1e3,.05):1/60;l=M;let C=M/1e3;for(let x of a)x.visible&&x.inst&&m(x,w,C);h()}function p(M){for(let w of M.querySelectorAll(".pv[data-art]")){let C=w.getAttribute("data-art");if(!Ud[C]||a.some(F=>F.pv===w))continue;let x=w.querySelector(".pv-stage"),E=document.createElement("canvas");E.className="pv-canvas",E.setAttribute("aria-hidden","true"),x.insertBefore(E,x.querySelector(".pv-labels"));let P=[...w.querySelectorAll(".pv-label[data-anchor]")].map(F=>({el:F,key:F.dataset.anchor,x:-1,y:-1,left:F.style.left,top:F.style.top})),R={pv:w,stage:x,kind:C,canvas:E,ctx:E.getContext("2d"),labels:P,inst:null,visible:!1,live:!1,focus:w.hasAttribute("data-focus")?w.getAttribute("data-focus").split(" "):void 0,pointer:{x:0,y:0},pointerTarget:{x:0,y:0}};r.matches&&(R.onMove=F=>{let V=x.getBoundingClientRect();R.pointerTarget.x=(F.clientX-V.left)/V.width*2-1,R.pointerTarget.y=(F.clientY-V.top)/V.height*2-1},R.onLeave=()=>{R.pointerTarget.x=0,R.pointerTarget.y=0},w.addEventListener("pointermove",R.onMove),w.addEventListener("pointerleave",R.onLeave)),a.push(R),d.observe(w)}}function g(M){d.unobserve(M.pv),M.onMove&&(M.pv.removeEventListener("pointermove",M.onMove),M.pv.removeEventListener("pointerleave",M.onLeave)),M.inst&&M.inst.dispose(),M.canvas.remove(),M.pv.classList.remove("is-live");for(let w of M.labels)w.el.style.left=w.left,w.el.style.top=w.top}function b(){a.forEach(g),a=[]}function A(M,w){let C=a.find(x=>x.pv===M);C&&(C.focus=w,C.inst&&C.inst.setFocus(w))}function v(){if(c||(c=!0,o&&cancelAnimationFrame(o),o=0,b(),d.disconnect(),document.removeEventListener("visibilitychange",f),!e))return;let M=e.getContext();e.dispose();try{let w=M&&M.getExtension("WEBGL_lose_context");w&&w.loseContext()}catch{}}return{mount:p,unmount:b,setFocus:A,dispose:v}}function Fd({onFocus:i}){let e=new Map,t=m=>m.closest(".proj"),n=m=>m.getAttribute("data-proj"),s=m=>m.querySelector(".xp"),r=m=>m.querySelector(".pv[data-art]");function a(m,y){let p=s(m),g=[...p.querySelectorAll(".xp-step")],b=g.length;y=Math.max(0,Math.min(b-1,y)),e.set(n(m),y),g.forEach((C,x)=>{C.classList.toggle("is-current",x===y),x===y?C.setAttribute("aria-current","step"):C.removeAttribute("aria-current")});let A=p.querySelector(".xp-count");A&&(A.textContent=A.getAttribute("data-tpl").replace("{n}",String(y+1)).replace("{total}",String(b)));let[v,M]=p.querySelectorAll(".xp-nav .xp-btn");v&&(v.disabled=y===0),M&&(M.disabled=y===b-1);let w=r(m);if(w){let C=mh(w.getAttribute("data-art"),y);C?w.setAttribute("data-focus",C.join(" ")):w.removeAttribute("data-focus"),i(w,C)}}let o=window.matchMedia("(prefers-reduced-motion: reduce)");function l(m){let y=m.querySelector(".xp-step.is-current");if(!y)return;let p=y.getBoundingClientRect(),g=document.querySelector(".bar"),b=g?g.getBoundingClientRect().bottom:0,A=r(m);if(A){let w=A.getBoundingClientRect();w.right>p.left&&w.left<p.right&&(b=Math.max(b,w.bottom))}let v=12,M=0;p.top<b+v?M=p.top-b-v:p.bottom>window.innerHeight-v&&(M=Math.min(p.bottom-window.innerHeight+v,p.top-b-v)),Math.abs(M)>1&&window.scrollBy({top:M,behavior:o.matches?"auto":"smooth"})}function c(m){m.classList.add("is-open"),a(m,e.get(n(m))||0);let y="#p-"+n(m);window.location.hash!==y&&window.history.replaceState(window.history.state,"",y)}function u(m){m.classList.remove("is-open"),e.delete(n(m));let y=r(m);y&&(y.removeAttribute("data-focus"),i(y,null)),window.location.hash==="#p-"+n(m)&&window.history.replaceState(window.history.state,"",window.location.pathname+window.location.search)}function d(m,y){m.querySelectorAll(".proj[data-proj]").forEach(p=>{let g=s(p);if(!g||g.dataset.wired)return;g.dataset.wired="1",g.classList.add("is-stepped");let b=g.querySelector(".xp-nav");b&&(b.hidden=!1),g.addEventListener("toggle",()=>g.open?c(p):u(p)),g.querySelectorAll(".xp-nav .xp-btn").forEach(A=>{A.addEventListener("click",()=>{a(p,(e.get(n(p))||0)+Number(A.dataset.dir)),l(p)})}),g.querySelectorAll(".xp-step").forEach(A=>{A.addEventListener("click",()=>{let v=window.getSelection&&window.getSelection();v&&String(v).length||a(p,Number(A.dataset.step))})}),y&&y.has(n(p))&&(g.open=!0)})}function h(){return new Map(e)}function f(){let m=window.location.hash.match(/^#p-([\w-]+)$/);if(!m)return;let y=document.querySelector(`.proj[data-proj="${m[1]}"]`),p=y&&s(y);p&&!p.open&&(p.open=!0)}return{mount:d,snapshot:h,openFromHash:f}}window.__langPick=yl;var At=document,rh=At.documentElement;function Xx(){try{return window.localStorage.getItem(vl)}catch{return null}}function qx(i){try{window.localStorage.setItem(vl,i)}catch{}}function $x(i){if(!/^https?:$/.test(window.location.protocol))return;let e=window.location.pathname.match(/^(.*\/)(en|tr)\/?(?:index\.html)?$/);if(!e)return;let t=e[1]+i+"/",n=t+window.location.search+window.location.hash;n!==window.location.pathname+window.location.search+window.location.hash&&window.history.replaceState(window.history.state,"",n);let s=At.querySelector('link[rel="canonical"]');s&&s.setAttribute("href",Ns.site.origin+t)}var Oe={lang:rh.lang==="tr"?"tr":"en",rendered:rh.lang==="tr"?"tr":"en",selected:null,scene:null,cards:null},kr=Fd({onFocus:(i,e)=>{Oe.cards&&Oe.cards.setFocus(i,e)}});function Yx(){let i=Ns.site.emails;At.querySelectorAll("[data-email]").forEach(e=>{let t=i[Number(e.getAttribute("data-email"))];if(!t)return;let n=t.user+"@"+t.domain;e.setAttribute("href","mailto:"+n),e.classList.contains("c-link")&&(e.textContent=n)})}function kd(i){let e=Ns[i];if(!e)return;if(i!==Oe.rendered){let s=kr.snapshot();Oe.cards&&Oe.cards.unmount();let r=yh(Ns,i);for(let a of Object.keys(r)){let o=At.querySelector(`[data-slot="${a}"]`);o&&(o.innerHTML=r[a])}Oe.rendered=i,Oe.cards&&Oe.cards.mount(At),kr.mount(At,s)}Oe.lang=i,Yx(),rh.lang=i,At.title=e.title;let t=At.querySelector('meta[name="description"]');t&&t.setAttribute("content",e.description),At.querySelectorAll("[data-lang-btn]").forEach(s=>{s.setAttribute("aria-pressed",String(s.getAttribute("data-lang-btn")===i))});let n=At.querySelector(".lang");n&&n.setAttribute("aria-label",e.ui.toggle),Oe.selected&&zd(Oe.selected),Oe.scene&&Oe.scene.placeButtons()}var cl=()=>At.querySelector(".viz-stage"),oh=()=>At.getElementById("vz-pin"),ah=window.matchMedia("(max-width: 479px)");function zr(){let i=oh(),e=cl();if(!i||!e||!Oe.selected)return;if(ah.matches){i.style.left="",i.style.top="",i.style.maxWidth="";return}let t=e.querySelector(`.tier[data-tier="${Oe.selected}"]`),n=i.parentElement.getBoundingClientRect(),s=e.getBoundingClientRect(),r=t?t.getBoundingClientRect():null,a=Mt.tiers.find(y=>y.id===Oe.selected),o=r?r.left+r.width/2-n.left:s.left-n.left+a.x*s.width,l=r?r.top+r.height/2-n.top:s.top-n.top+a.y*s.height,c=s.left-n.left,u=s.top-n.top,d=Math.max(s.width*.075+6,(r?r.width/2:24)+16),h=Math.min(272,o-d-c-8);i.style.maxWidth=h+"px";let f=i.offsetWidth,m=i.offsetHeight;i.style.left=Math.max(c+8,o-d-f)+"px",i.style.top=Math.min(Math.max(u+8,l-m/2),u+s.height-m-8)+"px"}function zd(i){let e=cl(),t=oh();!e||!t||(Oe.selected=i,t.innerHTML=vh(Oe.lang,i),t.lang=Oe.lang,t.hidden=!1,t.setAttribute("data-tier",i),e.setAttribute("data-selected",i),e.querySelectorAll(".tier").forEach(n=>n.setAttribute("aria-expanded",String(n.dataset.tier===i))),zr(),t.classList.remove("is-in"),t.offsetWidth,t.classList.add("is-in"),Oe.scene&&Oe.scene.select(i))}function sh(){let i=cl(),e=oh();Oe.selected=null,e&&(e.hidden=!0,e.classList.remove("is-in")),i&&(i.removeAttribute("data-selected"),i.querySelectorAll(".tier").forEach(t=>t.setAttribute("aria-expanded","false"))),Oe.scene&&Oe.scene.select(null)}function Zx(){At.querySelectorAll("[data-lang-btn]").forEach(i=>{i.addEventListener("click",()=>{let e=i.getAttribute("data-lang-btn");qx(e),e!==Oe.lang&&kd(e),$x(e)})}),At.addEventListener("click",i=>{let e=i.target instanceof Element?i.target:null,t=e&&e.closest(".tier");if(t){let n=t.dataset.tier;Oe.selected===n?sh():zd(n);return}Oe.selected&&(e&&e.closest(".pin, .lang")||sh())}),At.addEventListener("keydown",i=>{if(i.key!=="Escape"||!Oe.selected)return;let e=Oe.selected;sh();let t=At.querySelector(`.tier[data-tier="${e}"]`);t&&t.focus()}),window.addEventListener("resize",zr,{passive:!0}),ah.addEventListener&&ah.addEventListener("change",zr)}Zx();kr.mount(At);kr.openFromHash();window.addEventListener("hashchange",()=>kr.openFromHash());{let i=At.body.getAttribute("data-force")||"",e=window.navigator,t=e.languages&&e.languages.length?e.languages:[e.language||"en"];kd(yl(i,i?null:Xx(),t))}var Us=window.matchMedia("(prefers-reduced-motion: reduce)"),Jx=()=>!!(navigator.connection&&navigator.connection.saveData);function Kx(){if(Us.matches||Jx())return!1;try{let i=At.createElement("canvas"),e=i.getContext("webgl2")||i.getContext("webgl");if(!e)return!1;let t=e.getExtension("WEBGL_lose_context");return t&&t.loseContext(),!0}catch{return!1}}function jx(){if(!Oe.cards)try{Oe.cards=Nd(),Oe.cards.mount(At)}catch{Oe.cards=null}}function Od(){if(Oe.scene||!Kx())return;jx();let i=cl();if(i)try{Oe.scene=Md(i,()=>Oe.selected),Oe.selected&&(Oe.scene.select(Oe.selected),zr())}catch{Oe.scene=null,i.classList.remove("is-live")}}function Vd(){Oe.cards&&(Oe.cards.dispose(),Oe.cards=null),Oe.scene&&(Oe.scene.dispose(),Oe.scene=null,Oe.selected&&zr())}function lh(){"requestIdleCallback"in window?window.requestIdleCallback(Od,{timeout:1200}):window.setTimeout(Od,400)}window.requestAnimationFrame(()=>window.requestAnimationFrame(lh));var Bd=()=>{Us.matches?Vd():lh()};Us.addEventListener?Us.addEventListener("change",Bd):Us.addListener&&Us.addListener(Bd);window.addEventListener("pagehide",Vd);window.addEventListener("pageshow",i=>{i.persisted&&lh()});})();
