/* Lektion 1 — Ich und die anderen */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 1,
  de: "Ich und die anderen",
  ar: "أنا والآخرون",
  book: "Kursbuch S. 8–17 · Übungsbuch S. 76–83",
  goals: [
    "تحيّة الآخرين والرد على التحية (رسميًا وغير رسمي)",
    "تقديم نفسك والآخرين: الاسم، البلد، الدراسة أو العمل",
    "السؤال عن الحال: Wie geht es dir / Ihnen?",
    "تهجئة اسمك وقول الأرقام ورقم الهاتف والعنوان والبريد الإلكتروني",
    "ملء استمارة بسيطة بالبيانات الشخصية"
  ],
  units: [
    /* ───────────── 1A ───────────── */
    {
      id: "1A", de: "Guten Tag!", ar: "يوم سعيد! — التحية والتعارف",
      summary: "التحية، السؤال عن الاسم والبلد، الفرق بين du و Sie، الدراسة والعمل.",
      grammar: [
        {
          h: "du أم Sie؟ المخاطبة الرسمية وغير الرسمية",
          p: [
            "في الألمانية طريقتان لمخاطبة شخص واحد: ‹du› (أنتَ/أنتِ) للعائلة والأصدقاء والطلاب فيما بينهم، و‹Sie› (حضرتك) للأساتذة والموظفين والغرباء — تمامًا مثل ‹tu› و‹vous› في الفرنسية.",
            "‹Sie› الرسمية تُكتب دائمًا بحرف S كبير، ومعها نستعمل اللقب: ‹Herr› + اسم العائلة للرجل، و‹Frau› + اسم العائلة للمرأة."
          ],
          table: {
            head: ["", "غير رسمي (du)", "رسمي (Sie)"],
            rows: [
              ["التحية", "‹Hallo! / Grüß dich!›", "‹Guten Tag! / Guten Morgen!›"],
              ["الاسم", "‹Wie heißt du?›", "‹Wie heißen Sie?›"],
              ["البلد", "‹Woher kommst du?›", "‹Woher kommen Sie?›"],
              ["الحال", "‹Wie geht es dir?›", "‹Wie geht es Ihnen?›"]
            ]
          },
          tip: "إذا لم تكن متأكدًا فاستعمل ‹Sie› — هذا أكثر أدبًا. الطلاب في الجامعة يستعملون ‹du› فيما بينهم."
        },
        {
          h: "الفعل في المكان الثاني والسؤال بـ W",
          p: "أسئلة المعلومات تبدأ بكلمة سؤال تبدأ غالبًا بحرف W، ثم يأتي الفعل مباشرة في المكان الثاني، ثم الفاعل.",
          table: {
            head: ["كلمة السؤال (1)", "الفعل (2)", "الفاعل", "…"],
            rows: [
              ["‹Wie›", "‹heißt›", "‹du?›", ""],
              ["‹Woher›", "‹kommen›", "‹Sie?›", ""],
              ["‹Was›", "‹studierst›", "‹du?›", ""],
              ["‹Wo›", "‹wohnst›", "‹du?›", ""]
            ]
          },
          ex: [
            ["Ich heiße Tarik.", "اسمي طارق."],
            ["Ich komme aus Marokko.", "أنا من المغرب."],
            ["Ich studiere Informatik.", "أدرس المعلوميات (الإعلاميات)."]
          ]
        },
        {
          h: "نهايات الفعل: ich ‑e، du ‑st، Sie ‑en",
          p: "الفعل الألماني يتغيّر آخره حسب الفاعل. نأخذ جذر الفعل (نحذف ‑en من المصدر) ونضيف النهاية:",
          table: {
            head: ["", "‹kommen›", "‹heißen›", "‹studieren›"],
            rows: [
              ["‹ich›", "‹komm**e**›", "‹heiß**e**›", "‹studier**e**›"],
              ["‹du›", "‹komm**st**›", "‹heiß**t**› ⚠", "‹studier**st**›"],
              ["‹Sie›", "‹komm**en**›", "‹heiß**en**›", "‹studier**en**›"]
            ]
          },
          tip: "‹heißen›: الجذر ينتهي بـ ß، لذلك مع du نضيف ‑t فقط: ‹du heißt› (وليس heißst)."
        },
        {
          h: "aus + البلد — من أين أنت؟",
          p: "نقول ‹Ich komme aus …› + اسم البلد أو المدينة. معظم البلدان بلا أداة تعريف، لكن بعضها له أداة، فتتغير الأداة بعد ‹aus›:",
          table: {
            head: ["البلد", "بعد aus"],
            rows: [
              ["‹Marokko, Deutschland, Spanien›", "‹aus Marokko, aus Deutschland›"],
              ["‹{f|die} Schweiz, {f|die} Türkei›", "‹aus **der** Schweiz, aus **der** Türkei›"],
              ["‹{m|der} Irak, {m|der} Libanon, {m|der} Oman›", "‹aus **dem** Irak, aus **dem** Libanon›"],
              ["‹{p|die} USA, {p|die} Niederlande›", "‹aus **den** USA, aus **den** Niederlanden›"]
            ]
          }
        },
        {
          h: "المهنة بدون أداة",
          p: "عند ذكر المهنة لا نستعمل أداة: ‹Ich bin Ingenieur.› أو ‹Ich arbeite als Lehrerin.› وللمؤنث غالبًا نضيف ‑in: ‹der Lehrer → die Lehrerin›.",
          ex: [
            ["Ich bin Student. / Ich bin Studentin.", "أنا طالب. / أنا طالبة."],
            ["Ich arbeite schon. Ich bin Ingenieur.", "أنا أعمل بالفعل. أنا مهندس."],
            ["Ich studiere noch nicht. Ich bin Schüler.", "لا أدرس في الجامعة بعد. أنا تلميذ."]
          ]
        }
      ],
      vocab: [
        ["x", "", "Guten Morgen!", "", "صباح الخير!", "Guten Morgen, Frau Brandt!", "صباح الخير يا سيدة برانت!"],
        ["x", "", "Guten Tag!", "", "يوم سعيد! / مرحبًا (رسمي)", "Guten Tag, Herr Amri!", "مرحبًا يا سيد عمري!"],
        ["x", "", "Guten Abend!", "", "مساء الخير!", "Guten Abend! Wie geht es Ihnen?", "مساء الخير! كيف حالك؟"],
        ["x", "", "Hallo!", "", "مرحبًا! (غير رسمي)", "Hallo, ich bin Leyla.", "مرحبًا، أنا ليلى."],
        ["x", "", "Grüß dich!", "", "أهلًا بك! (غير رسمي، جنوب ألمانيا)", "Grüß dich, Tarik!", "أهلًا يا طارق!"],
        ["x", "", "Auf Wiedersehen!", "", "إلى اللقاء! (رسمي)", "Auf Wiedersehen, Frau Brandt!", "إلى اللقاء يا سيدة برانت!"],
        ["x", "", "Tschüss!", "", "باي! مع السلامة (غير رسمي)", "Tschüss, bis morgen!", "باي، إلى الغد!"],
        ["x", "", "Herzlich willkommen!", "", "أهلًا وسهلًا!", "Herzlich willkommen im Sommerkurs!", "أهلًا وسهلًا في الدورة الصيفية!"],
        ["x", "", "Freut mich!", "", "تشرّفت!", "Ich bin Tarik. – Freut mich!", "أنا طارق. – تشرّفت!"],
        ["n", "der", "Herr", "-en", "السيد", "Das ist Herr Amri.", "هذا هو السيد عمري."],
        ["n", "die", "Frau", "-en", "السيدة / امرأة", "Das ist Frau Brandt.", "هذه هي السيدة برانت."],
        ["v", "", "heißen", "du heißt, er heißt", "يُدعى / اسمه", "Wie heißt du?", "ما اسمك؟"],
        ["v", "", "kommen", "du kommst, er kommt", "يأتي", "Woher kommen Sie?", "من أين أنت (حضرتك)؟"],
        ["v", "", "studieren", "du studierst", "يدرس (في الجامعة)", "Ich studiere Medizin.", "أدرس الطب."],
        ["v", "", "arbeiten", "du arbeitest, er arbeitet", "يعمل", "Ich arbeite als Lehrer.", "أعمل معلّمًا."],
        ["q", "", "wie?", "", "كيف؟ / ما؟", "Wie heißen Sie?", "ما اسمك (حضرتك)؟"],
        ["q", "", "woher?", "", "من أين؟", "Woher kommst du?", "من أين أنت؟"],
        ["q", "", "was?", "", "ماذا؟", "Was studierst du?", "ماذا تدرس؟"],
        ["p", "", "aus", "", "من (المكان)", "Ich komme aus Casablanca.", "أنا من الدار البيضاء."],
        ["n", "der", "Sommerkurs", "-e", "الدورة الصيفية", "Der Sommerkurs beginnt heute.", "تبدأ الدورة الصيفية اليوم."],
        ["n", "der", "Deutschkurs", "-e", "دورة اللغة الألمانية", "Ich bin neu im Deutschkurs.", "أنا جديد في دورة الألمانية."],
        ["n", "die", "Universität", "-en", "الجامعة", "Die Universität Tübingen ist alt.", "جامعة توبنغن قديمة."],
        ["n", "der", "Student", "-en", "الطالب (الجامعي)", "Tarik ist Student.", "طارق طالب."],
        ["n", "die", "Studentin", "-nen", "الطالبة (الجامعية)", "Leyla ist Studentin.", "ليلى طالبة."],
        ["n", "der", "Professor", "-en", "الأستاذ الجامعي", "Der Professor heißt Jung.", "اسم الأستاذ يونغ."],
        ["n", "die", "Professorin", "-nen", "الأستاذة الجامعية", "Die Professorin kommt aus Wien.", "الأستاذة من فيينا."],
        ["n", "das", "Studienfach", "¨-er", "التخصّص الدراسي", "Was ist dein Studienfach?", "ما هو تخصّصك؟"],
        ["n", "die", "Informatik", "Sg.", "المعلوميات / علوم الحاسوب", "Er studiert Informatik.", "هو يدرس المعلوميات."],
        ["n", "die", "Medizin", "Sg.", "الطب", "Sie studiert Medizin.", "هي تدرس الطب."],
        ["n", "die", "Wirtschaft", "Sg.", "الاقتصاد", "Ich studiere Wirtschaft.", "أدرس الاقتصاد."],
        ["n", "die", "Architektur", "Sg.", "الهندسة المعمارية", "Architektur ist interessant.", "الهندسة المعمارية مثيرة للاهتمام."],
        ["n", "die", "Mathematik", "Sg.", "الرياضيات", "Mathematik ist schwer.", "الرياضيات صعبة."],
        ["n", "die", "Physik", "Sg.", "الفيزياء", "Enrique studiert Physik.", "إنريكي يدرس الفيزياء."],
        ["n", "die", "Chemie", "Sg.", "الكيمياء", "Chemie ist mein Studienfach.", "الكيمياء تخصّصي."],
        ["n", "die", "Germanistik", "Sg.", "الدراسات الألمانية", "Leyla studiert Germanistik.", "ليلى تدرس الدراسات الألمانية."],
        ["n", "die", "Philosophie", "Sg.", "الفلسفة", "Louise studiert Philosophie.", "لويز تدرس الفلسفة."],
        ["n", "", "Jura", "Pl.", "القانون / الحقوق", "Mein Bruder studiert Jura.", "أخي يدرس الحقوق."],
        ["n", "der", "Lehrer", "-", "المعلّم", "Ich bin Lehrer.", "أنا معلّم."],
        ["n", "die", "Lehrerin", "-nen", "المعلّمة", "Sie ist Deutschlehrerin.", "هي معلّمة ألمانية."],
        ["n", "der", "Ingenieur", "-e", "المهندس", "Mein Vater ist Ingenieur.", "أبي مهندس."],
        ["n", "die", "Ingenieurin", "-nen", "المهندسة", "Josephine ist Ingenieurin.", "جوزفين مهندسة."],
        ["n", "der", "Schüler", "-", "التلميذ", "Jo ist Schüler.", "جو تلميذ."],
        ["n", "die", "Schülerin", "-nen", "التلميذة", "Ana ist Schülerin.", "آنا تلميذة."],
        ["n", "das", "Praktikum", "=Praktika", "التدريب العملي (التربص)", "Ich mache ein Praktikum in Berlin.", "أقوم بتدريب في برلين."],
        ["d", "", "schon", "", "بالفعل / سابقًا", "Ich arbeite schon.", "أنا أعمل بالفعل."],
        ["d", "", "noch nicht", "", "ليس بعد", "Ich studiere noch nicht.", "لا أدرس بعد."],
        ["a", "", "neu", "", "جديد", "Ich bin neu hier.", "أنا جديد هنا."],
        ["c", "", "Marokko", "Arabisch · der Marokkaner / die Marokkanerin", "المغرب", "Ich komme aus Marokko.", "أنا من المغرب."],
        ["c", "", "Deutschland", "Deutsch · der/die Deutsche", "ألمانيا", "Sie kommt aus Deutschland.", "هي من ألمانيا."],
        ["c", "", "Österreich", "Deutsch · der Österreicher / die Österreicherin", "النمسا", "Wien ist in Österreich.", "فيينا في النمسا."],
        ["c", "die", "Schweiz", "Deutsch, Französisch … · der Schweizer / die Schweizerin", "سويسرا", "Mia kommt aus der Schweiz.", "ميا من سويسرا."],
        ["c", "die", "Türkei", "Türkisch · der Türke / die Türkin", "تركيا", "Leyla kommt aus der Türkei.", "ليلى من تركيا."],
        ["c", "", "Frankreich", "Französisch · der Franzose / die Französin", "فرنسا", "Paris ist in Frankreich.", "باريس في فرنسا."],
        ["c", "", "Spanien", "Spanisch · der Spanier / die Spanierin", "إسبانيا", "Er kommt aus Spanien.", "هو من إسبانيا."],
        ["c", "der", "Irak", "Arabisch · der Iraker / die Irakerin", "العراق", "Ali kommt aus dem Irak.", "علي من العراق."],
        ["c", "die", "USA", "Englisch · der Amerikaner / die Amerikanerin", "الولايات المتحدة", "John kommt aus den USA.", "جون من الولايات المتحدة."]
      ],
      phrases: [
        ["Guten Tag! Wie heißen Sie?", "مرحبًا! ما اسمك (حضرتك)؟"],
        ["Ich heiße … / Ich bin … / Mein Name ist …", "اسمي … / أنا … / اسمي هو …"],
        ["Und wie heißt du?", "وأنت، ما اسمك؟"],
        ["Woher kommen Sie? – Ich komme aus Marokko.", "من أين أنت؟ – أنا من المغرب."],
        ["Was studierst du? – Ich studiere Informatik.", "ماذا تدرس؟ – أدرس المعلوميات."],
        ["Ich arbeite schon. Ich bin Ingenieur.", "أنا أعمل. أنا مهندس."],
        ["Das ist Enrique. Er kommt aus Bolivien.", "هذا إنريكي. هو من بوليفيا."],
        ["Freut mich! Herzlich willkommen!", "تشرفت! أهلًا وسهلًا!"]
      ],
      ex: [
        { t: "mc", q: "تقابل أستاذك في الجامعة صباحًا. ماذا تقول؟", o: ["Guten Morgen, Herr Jung!", "Hallo, Jung!", "Tschüss, Herr Jung!"], a: 0, why: "مع الأستاذ نستعمل التحية الرسمية + Herr + اسم العائلة. ‹Tschüss› للوداع وليس للتحية.", tag: "begruessung" },
        { t: "mc", q: "زميلك الطالب يسألك عن اسمك. أي سؤال هو غير الرسمي؟", o: ["Wie heißt du?", "Wie heißen Sie?", "Wie heiße ich?"], a: 0, why: "‹du› للمخاطبة غير الرسمية بين الطلاب، والفعل معها ينتهي بـ ‑t هنا: ‹heißt›.", tag: "begruessung" },
        { t: "gap", q: "أكمل بالنهاية الصحيحة للفعل.", s: "Wie heiß___ du?", a: ["t"], why: "الجذر ‹heiß› ينتهي بـ ß، لذلك du + ‑t فقط: ‹du heißt›.", tag: "praesens", wrong: { "st": "مع الجذر المنتهي بـ ß أو s أو z نضيف ‑t فقط، لا ‑st." } },
        { t: "gap", q: "أكمل بالنهاية الصحيحة.", s: "Woher komm___ Sie?", a: ["en"], why: "مع ‹Sie› الرسمية نستعمل صيغة المصدر: ‹kommen›.", tag: "praesens" },
        { t: "gap", q: "أكمل بالنهاية الصحيحة.", s: "Ich komm___ aus Marokko.", a: ["e"], why: "مع ‹ich› نضيف ‑e: ‹ich komme›.", tag: "praesens", wrong: { "st": "‑st هي نهاية ‹du›. مع ‹ich› النهاية ‑e." } },
        { t: "gap", q: "أكمل بالفعل المناسب.", s: "Was ___ du? – Ich studiere Physik.", a: ["studierst"], hint: "studieren", why: "‹du› + ‑st: ‹du studierst›.", tag: "praesens" },
        { t: "mc", q: "اختر الصحيح.", s: "Mia kommt aus ___ Schweiz.", o: ["der", "die", "dem"], a: 0, why: "‹die Schweiz› مؤنث، وبعد ‹aus› تصبح ‹die› → ‹der›: ‹aus der Schweiz›.", tag: "artikel" },
        { t: "mc", q: "اختر الصحيح.", s: "Ali kommt aus ___ Irak.", o: ["dem", "der", "den"], a: 0, why: "‹der Irak› مذكر، وبعد ‹aus› تصبح ‹dem›: ‹aus dem Irak›.", tag: "artikel" },
        { t: "mc", q: "اختر الصحيح.", s: "John kommt aus ___ USA.", o: ["den", "der", "–"], a: 0, why: "‹die USA› جمع، وبعد ‹aus› تصبح ‹den›: ‹aus den USA›.", tag: "artikel" },
        { t: "order", q: "رتّب الكلمات لتكوّن سؤالًا.", a: "Woher kommst du?", why: "كلمة السؤال أولًا، ثم الفعل في المكان الثاني، ثم الفاعل.", tag: "wortstellung" },
        { t: "order", q: "رتّب الكلمات لتكوّن جملة.", a: "Ich studiere Informatik in Tübingen.", alt: ["In Tübingen studiere ich Informatik."], why: "في الجملة الخبرية يأتي الفعل دائمًا في المكان الثاني.", tag: "wortstellung" },
        { t: "mc", q: "كيف تقول «أنا مهندس»؟", o: ["Ich bin Ingenieur.", "Ich bin ein Ingenieur.", "Ich heiße Ingenieur."], a: 0, why: "المهنة تُذكر بدون أداة: ‹Ich bin Ingenieur.›", tag: "wortschatz" },
        { t: "match", q: "صِل التحية بمعناها.", pairs: [["Guten Morgen!", "صباح الخير!"], ["Guten Abend!", "مساء الخير!"], ["Auf Wiedersehen!", "إلى اللقاء!"], ["Freut mich!", "تشرفت!"], ["Herzlich willkommen!", "أهلًا وسهلًا!"]], tag: "begruessung" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "من أين أنت؟ (غير رسمي)", a: ["Woher kommst du?"], tag: "wfrage" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أنا من المغرب، من الرباط.", a: ["Ich komme aus Marokko, aus Rabat.", "Ich komme aus Rabat in Marokko."], tag: "wortstellung" },
        { t: "mc", q: "ما المؤنث من ‹der Lehrer›؟", o: ["die Lehrerin", "die Lehrere", "das Lehrer"], a: 0, why: "كثير من المهن تصبح مؤنثة بإضافة ‑in: ‹der Lehrer → die Lehrerin›.", tag: "wortschatz" }
      ],
      dialog: {
        title: "Neu im Sommerkurs", ar: "جديد في الدورة الصيفية",
        scene: "أنت طالب جديد في الدورة الصيفية الدولية. المعلّمة تُرحّب بك ثم تقابل طالبة أخرى.",
        who: { A: "Frau Brandt", B: "Leyla" },
        lines: [
          { s: "A", de: "Guten Morgen! Ich bin Christiane Brandt, Ihre Deutschlehrerin.", ar: "صباح الخير! أنا كريستيانه برانت، معلّمة الألمانية." },
          { s: "U", task: "ردّ التحية بشكل رسمي وقدّم نفسك باسمك.", m: "Guten Morgen, Frau Brandt. Ich heiße {NAME}.", ok: ["Guten Morgen Frau Brandt ich heiße *", "Guten Morgen ich heiße *", "Guten Morgen ich bin *", "Guten Morgen mein Name ist *", "Guten Tag ich heiße *", "Guten Morgen Frau Brandt ich bin *", "Guten Morgen Frau Brandt mein Name ist *"], o: ["Guten Morgen, Frau Brandt. Ich heiße {NAME}.", "Hallo, Christiane! Du heißt Brandt.", "Gute Nacht, Frau Brandt. Ich heißen {NAME}."], why: ["", "‹Hallo› والاسم الأول غير رسميين مع المعلّمة، و‹du heißt› تعني «أنتِ تُدعين».", "‹Gute Nacht› تقال قبل النوم، والصحيح ‹ich heiße›."], ar: "صباح الخير يا سيدة برانت. اسمي …" },
          { s: "A", de: "Freut mich! Woher kommen Sie?", ar: "تشرفت! من أين أنت؟" },
          { s: "U", task: "قل من أي بلد أنت ومن أي مدينة.", m: "Ich komme aus {LAND}, aus {CITY}.", ok: ["Ich komme aus *", "Aus *"], o: ["Ich komme aus {LAND}, aus {CITY}.", "Ich kommst aus {LAND}.", "Ich bin aus der {LAND}."], why: ["", "مع ‹ich› نقول ‹komme› وليس ‹kommst›.", "معظم البلدان بلا أداة: ‹aus Marokko› وليس ‹aus der Marokko›."], ar: "أنا من …، من …" },
          { s: "A", de: "Herzlich willkommen im Sommerkurs!", ar: "أهلًا وسهلًا في الدورة الصيفية!" },
          { s: "B", de: "Hallo! Ich bin neu hier. Ich bin Leyla. Und wie heißt du?", ar: "مرحبًا! أنا جديدة هنا. أنا ليلى. وأنت، ما اسمك؟" },
          { s: "U", task: "ردّ بشكل غير رسمي وقل اسمك، ثم اسألها من أين هي.", m: "Hallo Leyla! Ich heiße {NAME}. Woher kommst du?", ok: ["Hallo ich heiße * woher kommst du", "Hallo Leyla ich bin * woher kommst du", "Ich heiße * woher kommst du", "Ich bin * und woher kommst du", "Hallo Leyla ich heiße * und woher kommst du"], o: ["Hallo Leyla! Ich heiße {NAME}. Woher kommst du?", "Guten Tag, Frau Leyla. Woher kommen Sie?", "Hallo! Ich heiße {NAME}. Woher kommt du?"], why: ["", "بين الطلاب نستعمل ‹du›، و«Frau» تأتي مع اسم العائلة فقط.", "مع ‹du› الفعل ‹kommst› (‑st)."], ar: "مرحبًا ليلى! اسمي … من أين أنتِ؟" },
          { s: "B", de: "Aus der Türkei, aus Ankara. Was studierst du?", ar: "من تركيا، من أنقرة. ماذا تدرس؟" },
          { s: "U", task: "قل إنك تعمل بالفعل (أو قل ماذا تدرس).", m: "Ich studiere nicht. Ich arbeite schon.", ok: ["Ich studiere *", "Ich arbeite schon", "Ich arbeite *", "Ich studiere nicht ich arbeite schon"], o: ["Ich studiere nicht. Ich arbeite schon.", "Ich arbeitest schon.", "Ich bin arbeite schon."], why: ["", "مع ‹ich› النهاية ‑e: ‹ich arbeite›.", "لا نجمع ‹bin› مع فعل آخر هنا: ‹Ich arbeite schon.›"], ar: "لا أدرس. أنا أعمل بالفعل." },
          { s: "B", de: "Ah, interessant! Viel Spaß im Kurs!", ar: "آه، مثير! استمتع بالدورة!" }
        ]
      },
      listen: [
        { t: "listen", say: "Guten Tag! Ich heiße Tarik Amri. Ich komme aus Marokko.", q: "من أين طارق؟", o: ["من المغرب", "من تركيا", "من سويسرا"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Hallo, ich bin Veronika. Ich studiere Germanistik.", q: "ماذا تدرس فيرونيكا؟", o: ["الدراسات الألمانية", "الطب", "المعلوميات"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Woher kommen Sie?", q: "هل السؤال رسمي أم غير رسمي؟", o: ["رسمي (Sie)", "غير رسمي (du)"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Wie heißt du?", tag: "hoeren" },
        { t: "dict", say: "Ich komme aus der Schweiz.", tag: "hoeren" }
      ]
    },

    /* ───────────── 1B ───────────── */
    {
      id: "1B", de: "Sprachen öffnen Türen", ar: "اللغات تفتح الأبواب",
      summary: "اللغات، السؤال عن الحال، تصريف الأفعال المنتظمة و sein كاملًا، ترتيب الكلمات في الأسئلة.",
      grammar: [
        {
          h: "تصريف الأفعال المنتظمة في المضارع (Präsens)",
          p: "نحذف ‑en من المصدر فنحصل على الجذر، ثم نضيف النهايات الست. هذه النهايات هي الأساس لكل الأفعال تقريبًا — احفظها جيدًا:",
          table: {
            head: ["", "‹kommen›", "‹wohnen›", "‹heißen›", "‹arbeiten›"],
            rows: [
              ["‹ich›", "‹komm**e**›", "‹wohn**e**›", "‹heiß**e**›", "‹arbeit**e**›"],
              ["‹du›", "‹komm**st**›", "‹wohn**st**›", "‹heiß**t**›", "‹arbeit**est**›"],
              ["‹er / sie / es›", "‹komm**t**›", "‹wohn**t**›", "‹heiß**t**›", "‹arbeit**et**›"],
              ["‹wir›", "‹komm**en**›", "‹wohn**en**›", "‹heiß**en**›", "‹arbeit**en**›"],
              ["‹ihr›", "‹komm**t**›", "‹wohn**t**›", "‹heiß**t**›", "‹arbeit**et**›"],
              ["‹sie / Sie›", "‹komm**en**›", "‹wohn**en**›", "‹heiß**en**›", "‹arbeit**en**›"]
            ]
          },
          list: [
            "إذا انتهى الجذر بـ ‑t أو ‑d نضيف ‑e إضافية مع du و er/sie/es و ihr: ‹du arbeitest, er arbeitet›.",
            "إذا انتهى الجذر بـ ‑s أو ‑ß أو ‑z نضيف ‑t فقط مع du: ‹du heißt›.",
            "‹wir› و‹sie› (هم) و‹Sie› (حضرتك) لها نفس الصيغة دائمًا = المصدر."
          ]
        },
        {
          h: "الفعل sein (يكون) — فعل شاذ مهم جدًا",
          table: {
            head: ["المفرد", "", "الجمع", ""],
            rows: [
              ["‹ich›", "‹bin›", "‹wir›", "‹sind›"],
              ["‹du›", "‹bist›", "‹ihr›", "‹seid›"],
              ["‹er / sie / es›", "‹ist›", "‹sie / Sie›", "‹sind›"]
            ]
          },
          ex: [
            ["Ich bin neu hier.", "أنا جديد هنا."],
            ["Das ist Mia. Sie ist Studentin.", "هذه ميا. هي طالبة."],
            ["Wir sind im Sprachenzentrum.", "نحن في مركز اللغات."]
          ]
        },
        {
          h: "الأسئلة: سؤال W وسؤال نعم/لا",
          p: "في سؤال المعلومات (W-Frage) يأتي الفعل في المكان الثاني. أما في سؤال نعم/لا (Ja/Nein-Frage) فيأتي الفعل **أولًا** في المكان الأول.",
          table: {
            head: ["النوع", "المكان 1", "المكان 2", "…"],
            rows: [
              ["W-Frage", "‹Wo›", "‹wohnst›", "‹du?›"],
              ["Aussage", "‹Ich›", "‹wohne›", "‹in Tübingen.›"],
              ["Ja/Nein-Frage", "‹Wohnst›", "‹du›", "‹in Stuttgart?›"],
              ["Antwort", "‹Nein.› ‹Ich›", "‹wohne›", "‹in Tübingen.›"]
            ]
          },
          tip: "في الجملة الخبرية يمكن أن نبدأ بشيء آخر غير الفاعل، لكن الفعل يبقى ثانيًا: ‹In Tübingen studiere ich Medizin.›"
        },
        {
          h: "اللغات تنتهي غالبًا بـ ‑isch — و sprechen يتغيّر",
          p: "‹Arabisch, Englisch, Französisch, Spanisch, Türkisch› … الاستثناء الأشهر: ‹Deutsch›. الفعل ‹sprechen› (يتكلّم) يغيّر حرف العلة e → i مع du و er/sie/es:",
          table: { head: ["", "‹sprechen›"], rows: [["‹ich›", "‹spreche›"], ["‹du›", "‹spr**i**chst›"], ["‹er / sie›", "‹spr**i**cht›"], ["‹wir / sie / Sie›", "‹sprechen›"], ["‹ihr›", "‹sprecht›"]] },
          ex: [["Ich spreche Arabisch, Französisch und ein bisschen Deutsch.", "أتكلّم العربية والفرنسية وقليلًا من الألمانية."]]
        },
        {
          h: "الكلمة الصغيرة denn و ja و man",
          list: [
            "‹denn› في السؤال تعبّر عن اهتمام حقيقي وتجعل السؤال ألطف: ‹Was macht ihr denn hier?› (طيب، ماذا تفعلون هنا؟)",
            "‹ja› في الجملة الخبرية للتأكيد والدهشة: ‹Das ist ja super!› (هذا رائع حقًا!)",
            "‹man› = الناس عمومًا، وفعله مثل er: ‹In der Schweiz spricht man vier Sprachen.›"
          ]
        }
      ],
      vocab: [
        ["n", "die", "Sprache", "-n", "اللغة", "Welche Sprachen sprichst du?", "ما اللغات التي تتكلمها؟"],
        ["n", "die", "Muttersprache", "-n", "اللغة الأم", "Meine Muttersprache ist Arabisch.", "لغتي الأم هي العربية."],
        ["n", "die", "Zielsprache", "-n", "اللغة الهدف (التي تتعلّمها)", "Meine Zielsprache ist Deutsch.", "لغتي الهدف هي الألمانية."],
        ["n", "das", "Sprachenzentrum", "=Sprachenzentren", "مركز اللغات", "Wir lernen im Sprachenzentrum.", "نتعلّم في مركز اللغات."],
        ["n", "der", "Kurs", "-e", "الدورة / الحصة", "Der Kurs beginnt um neun.", "تبدأ الدورة في التاسعة."],
        ["n", "der", "Sprachkurs", "-e", "دورة لغة", "Viel Spaß im Sprachkurs!", "استمتع بدورة اللغة!"],
        ["n", "die", "Sprachschule", "-n", "مدرسة لغات", "Die Sprachschule ist in Rabat.", "مدرسة اللغات في الرباط."],
        ["n", "der", "Kursteilnehmer", "-", "المشارك في الدورة", "Der Kursteilnehmer kommt aus Polen.", "المشارك من بولندا."],
        ["n", "die", "Kursteilnehmerin", "-nen", "المشاركة في الدورة", "Die Kursteilnehmerin heißt Ana.", "المشاركة اسمها آنا."],
        ["n", "der", "Tandempartner", "-", "شريك التبادل اللغوي", "Ich suche einen Tandempartner.", "أبحث عن شريك تبادل لغوي."],
        ["n", "die", "Tandempartnerin", "-nen", "شريكة التبادل اللغوي", "Meine Tandempartnerin spricht Deutsch.", "شريكتي تتكلّم الألمانية."],
        ["n", "das", "Gespräch", "-e", "المحادثة", "Hören Sie das Gespräch.", "استمع إلى المحادثة."],
        ["n", "das", "Interview", "-s", "المقابلة / الحوار الصحفي", "Das Interview ist interessant.", "المقابلة مثيرة."],
        ["v", "", "sprechen", "du sprichst, er spricht", "يتكلّم", "Sie spricht vier Sprachen.", "هي تتكلّم أربع لغات."],
        ["v", "", "lernen", "", "يتعلّم", "Wir lernen Chinesisch.", "نحن نتعلّم الصينية."],
        ["v", "", "wohnen", "", "يسكن", "Wo wohnst du jetzt?", "أين تسكن الآن؟"],
        ["v", "", "machen", "", "يفعل / يعمل", "Was macht ihr denn hier?", "ماذا تفعلون هنا؟"],
        ["v", "", "verstehen", "", "يفهم", "Ich verstehe das nicht.", "لا أفهم هذا."],
        ["v", "", "beginnen", "", "يبدأ", "Der Kurs beginnt jetzt.", "الدورة تبدأ الآن."],
        ["v", "", "sein", "ich bin, du bist, er ist", "يكون", "Wir sind Studenten.", "نحن طلاب."],
        ["v", "", "sich vorstellen", "ich stelle mich vor", "يقدّم نفسه", "Stellen Sie sich vor!", "قدّم نفسك!"],
        ["x", "", "Wie geht es dir?", "", "كيف حالك؟ (غير رسمي)", "Hallo Rodrigo, wie geht es dir?", "مرحبًا رودريغو، كيف حالك؟"],
        ["x", "", "Wie geht es Ihnen?", "", "كيف حالك؟ (رسمي)", "Guten Tag, Herr Brandt! Wie geht es Ihnen?", "مرحبًا سيد برانت! كيف حالك؟"],
        ["x", "", "Danke, gut. Und dir?", "", "بخير، شكرًا. وأنت؟", "Danke, gut. Und dir?", "بخير، شكرًا. وأنت؟"],
        ["x", "", "Es geht.", "", "لا بأس / ماشي الحال", "Naja, es geht.", "حسنًا، لا بأس."],
        ["x", "", "Viel Spaß!", "", "استمتع! / وقتًا ممتعًا", "Viel Spaß im Kurs!", "استمتع بالدورة!"],
        ["a", "", "gut", "", "جيد", "Ich spreche gut Französisch.", "أتكلّم الفرنسية جيدًا."],
        ["a", "", "international", "", "دولي", "Der Kurs ist international.", "الدورة دولية."],
        ["a", "", "interessant", "", "مثير للاهتمام", "Das ist interessant!", "هذا مثير للاهتمام!"],
        ["a", "", "nett", "", "لطيف", "Die Lehrerin ist sehr nett.", "المعلّمة لطيفة جدًا."],
        ["a", "", "sympathisch", "", "ودود / محبوب", "Tarik ist sympathisch.", "طارق ودود."],
        ["a", "", "groß", "", "كبير", "Berlin ist groß.", "برلين كبيرة."],
        ["a", "", "alt", "", "قديم / كبير في السن", "Tübingen ist alt.", "توبنغن قديمة."],
        ["d", "", "auch", "", "أيضًا", "Ich lerne auch Deutsch.", "أنا أيضًا أتعلّم الألمانية."],
        ["d", "", "jetzt", "", "الآن", "Alex wohnt jetzt in Budapest.", "أليكس يسكن الآن في بودابست."],
        ["d", "", "dort", "", "هناك", "Dort spricht man Deutsch.", "هناك يتكلّمون الألمانية."],
        ["d", "", "hier", "", "هنا", "Ich bin neu hier.", "أنا جديد هنا."],
        ["d", "", "zusammen", "", "معًا", "Wir studieren zusammen.", "ندرس معًا."],
        ["d", "", "ein bisschen", "", "قليلًا", "Ich spreche ein bisschen Deutsch.", "أتكلّم الألمانية قليلًا."],
        ["d", "", "noch", "", "ما زال / بعدُ", "Ich studiere noch.", "ما زلت أدرس."],
        ["q", "", "wo?", "", "أين؟", "Wo wohnen Sie?", "أين تسكن؟"],
        ["p", "", "in", "", "في", "Ich wohne in Errachidia.", "أسكن في الرشيدية."],
        ["p", "", "man", "", "المرء / الناس (ضمير عام)", "In Marokko spricht man Arabisch.", "في المغرب يتكلّمون العربية."],
        ["c", "", "Arabisch", "", "العربية", "Ich spreche Arabisch.", "أتكلّم العربية."],
        ["c", "", "Englisch", "", "الإنجليزية", "Sprichst du Englisch?", "هل تتكلّم الإنجليزية؟"],
        ["c", "", "Französisch", "", "الفرنسية", "Mia spricht sehr gut Französisch.", "ميا تتكلّم الفرنسية جيدًا جدًا."],
        ["c", "", "Spanisch", "", "الإسبانية", "In Kolumbien spricht man Spanisch.", "في كولومبيا يتكلّمون الإسبانية."],
        ["c", "", "Italienisch", "", "الإيطالية", "Italienisch spreche ich nicht so gut.", "الإيطالية لا أتكلّمها جيدًا."],
        ["c", "", "Chinesisch", "", "الصينية", "Wir lernen Chinesisch.", "نتعلّم الصينية."]
      ],
      phrases: [
        ["Wie geht es dir? – Danke, gut. Und dir?", "كيف حالك؟ – بخير، شكرًا. وأنت؟"],
        ["Wie geht es Ihnen? – Sehr gut, danke.", "كيف حالك (حضرتك)؟ – بخير جدًا، شكرًا."],
        ["Naja, es geht. / Nicht so gut.", "لا بأس. / لستُ بخير كثيرًا."],
        ["Welche Sprachen sprechen Sie?", "ما اللغات التي تتكلّمها؟"],
        ["Ich spreche Arabisch und Französisch.", "أتكلّم العربية والفرنسية."],
        ["Was macht ihr denn hier? – Wir lernen Deutsch.", "ماذا تفعلون هنا؟ – نتعلّم الألمانية."],
        ["Das ist ja super!", "هذا رائع حقًا!"],
        ["Wohnst du in Tübingen? – Nein, ich wohne in Stuttgart.", "هل تسكن في توبنغن؟ – لا، أسكن في شتوتغارت."]
      ],
      ex: [
        { t: "gap", q: "صرّف الفعل ‹wohnen›.", s: "Wir ___ in Rabat.", a: ["wohnen"], hint: "wohnen", why: "‹wir› = صيغة المصدر: ‹wir wohnen›.", tag: "praesens" },
        { t: "gap", q: "صرّف الفعل ‹arbeiten›.", s: "Er ___ als Sprachlehrer.", a: ["arbeitet"], hint: "arbeiten", why: "الجذر ‹arbeit› ينتهي بـ ‑t، فنضيف ‑et: ‹er arbeitet›.", tag: "praesens", wrong: { "arbeitt": "عندما ينتهي الجذر بـ ‑t نضيف ‑e إضافية: arbeit‑e‑t." } },
        { t: "gap", q: "صرّف الفعل ‹arbeiten›.", s: "Du ___ viel.", a: ["arbeitest"], hint: "arbeiten", why: "du + ‑est لأن الجذر ينتهي بـ ‑t: ‹du arbeitest›.", tag: "praesens" },
        { t: "gap", q: "صرّف الفعل ‹machen›.", s: "Was ___ ihr hier?", a: ["macht"], hint: "machen", why: "‹ihr› + ‑t: ‹ihr macht›.", tag: "praesens" },
        { t: "gap", q: "أكمل بصيغة ‹sein›.", s: "Ich ___ neu im Kurs.", a: ["bin"], why: "‹ich bin›.", tag: "sein" },
        { t: "gap", q: "أكمل بصيغة ‹sein›.", s: "___ ihr Studenten?", a: ["Seid"], why: "‹ihr seid› — وفي سؤال نعم/لا يأتي الفعل أولًا.", tag: "sein" },
        { t: "gap", q: "أكمل بصيغة ‹sein›.", s: "Das ___ Mia. Sie ___ aus Zürich.", a: ["ist", "ist"], why: "‹das ist› و‹sie ist› (هي).", tag: "sein" },
        { t: "mc", q: "اختر الصيغة الصحيحة.", s: "Alex ___ 14 Sprachen.", o: ["spricht", "sprecht", "sprichst"], a: 0, why: "‹sprechen› يغيّر e → i مع er/sie/es: ‹er spricht›.", tag: "praesens" },
        { t: "mc", q: "أي جملة هي سؤال نعم/لا صحيح؟", o: ["Sprichst du Französisch?", "Du sprichst Französisch?", "Französisch du sprichst?"], a: 0, why: "في سؤال نعم/لا يأتي الفعل في المكان الأول.", tag: "wortstellung" },
        { t: "order", q: "رتّب سؤال نعم/لا.", a: "Wohnst du in Tübingen?", why: "الفعل أولًا ثم الفاعل.", tag: "wortstellung" },
        { t: "order", q: "رتّب الجملة (ابدأ بـ «Dort»).", a: "Dort spricht man Deutsch.", why: "إذا بدأنا بـ ‹Dort› يبقى الفعل ثانيًا ثم يأتي الفاعل ‹man›.", tag: "wortstellung" },
        { t: "mc", q: "صديقك يسأل: ‹Wie geht es dir?› — أنت بخير. ماذا تقول؟", o: ["Danke, gut. Und dir?", "Danke, gut. Und Ihnen?", "Ich heiße gut."], a: 0, why: "مع الصديق نقول ‹Und dir?›؛ و‹Und Ihnen?› للرسمي.", tag: "begruessung" },
        { t: "mc", q: "ما معنى ‹Das ist ja super!›؟", o: ["هذا رائع حقًا!", "هل هذا رائع؟", "هذا ليس رائعًا."], a: 0, why: "‹ja› هنا للتأكيد والإعجاب، وليست «نعم».", tag: "wortschatz" },
        { t: "match", q: "صِل اللغة بالبلد.", pairs: [["Arabisch", "Marokko"], ["Türkisch", "die Türkei"], ["Portugiesisch", "Brasilien"], ["Französisch", "Frankreich"], ["Englisch", "die USA"]], tag: "wortschatz" },
        { t: "read", title: "Mia aus Zürich", text: "Mia Brunner kommt aus der Schweiz, aus Zürich. Ihre Mutter ist Schweizerin, ihr Vater ist Deutscher. Mia wohnt jetzt in Tübingen und studiert Wirtschaft. Sie spricht Deutsch als Muttersprache und sehr gut Französisch. Italienisch spricht sie nicht so gut.", tr: "ميا برونر من سويسرا، من زيورخ. أمها سويسرية وأبوها ألماني. تسكن ميا الآن في توبنغن وتدرس الاقتصاد. تتكلّم الألمانية كلغة أم والفرنسية جيدًا جدًا. أما الإيطالية فلا تتكلّمها جيدًا.", items: [
          { t: "tf", s: "Mia wohnt in Zürich.", a: false, why: "هي من زيورخ لكنها تسكن الآن في توبنغن." },
          { t: "tf", s: "Mia studiert Wirtschaft.", a: true, why: "‹… und studiert Wirtschaft.›" },
          { t: "tf", s: "Mia spricht sehr gut Italienisch.", a: false, why: "‹Italienisch spricht sie nicht so gut.›" }
        ], tag: "lesen" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أتكلّم العربية والفرنسية وقليلًا من الألمانية.", a: ["Ich spreche Arabisch, Französisch und ein bisschen Deutsch.", "Ich spreche Arabisch und Französisch und ein bisschen Deutsch."], tag: "wortschatz" }
      ],
      dialog: {
        title: "Im Sprachenzentrum", ar: "في مركز اللغات",
        scene: "تلتقي بصديقك رودريغو في مركز اللغات. معه طالبة لا تعرفها.",
        who: { A: "Rodrigo", B: "Mia" },
        lines: [
          { s: "A", de: "Hallo! Wie geht es dir?", ar: "مرحبًا! كيف حالك؟" },
          { s: "U", task: "قل إنك بخير واسأله عن حاله.", m: "Danke, gut. Und dir?", ok: ["Danke gut und dir", "Gut danke und dir", "Sehr gut danke und dir", "Danke sehr gut und dir", "Mir geht es gut und dir"], o: ["Danke, gut. Und dir?", "Danke, gut. Und Ihnen?", "Ich bin gut, danke."], why: ["", "‹Ihnen› للرسمي؛ رودريغو صديقك.", "في الألمانية لا نقول ‹Ich bin gut› للحال، بل ‹(Mir geht es) gut›."], ar: "بخير، شكرًا. وأنت؟" },
          { s: "A", de: "Auch gut. Das ist Mia. Wir studieren zusammen.", ar: "بخير أيضًا. هذه ميا. ندرس معًا." },
          { s: "U", task: "حيِّ ميا واسألهما بلطف ماذا يفعلان هنا (استعمل denn).", m: "Hallo Mia! Was macht ihr denn hier?", ok: ["Hallo Mia was macht ihr denn hier", "Hallo was macht ihr denn hier", "Was macht ihr denn hier", "Hallo Mia was macht ihr hier", "Freut mich was macht ihr denn hier"], o: ["Hallo Mia! Was macht ihr denn hier?", "Hallo Mia! Was machen ihr denn hier?", "Hallo Mia! Was macht du denn hier?"], why: ["", "مع ‹ihr› الفعل ‹macht›.", "تخاطب شخصين → ‹ihr›، وليس ‹du›."], ar: "مرحبًا ميا! ماذا تفعلان هنا؟" },
          { s: "B", de: "Wir lernen Chinesisch. Im Sommer machen wir ein Praktikum in China.", ar: "نتعلّم الصينية. في الصيف سنقوم بتدريب في الصين." },
          { s: "U", task: "عبّر عن إعجابك (استعمل ja).", m: "Ihr lernt Chinesisch – das ist ja super!", ok: ["Das ist ja super", "Das ist ja toll", "Ihr lernt Chinesisch das ist ja super", "Super das ist ja interessant", "Das ist ja interessant"], o: ["Ihr lernt Chinesisch – das ist ja super!", "Ihr lernen Chinesisch – das ist ja super!", "Ist das ja super?"], why: ["", "مع ‹ihr› الفعل ‹lernt›.", "‹ja› للتأكيد في جملة خبرية، لا في سؤال."], ar: "تتعلّمان الصينية — هذا رائع حقًا!" },
          { s: "B", de: "Und du? Welche Sprachen sprichst du?", ar: "وأنت؟ ما اللغات التي تتكلّمها؟" },
          { s: "U", task: "قل ما هي اللغات التي تتكلّمها.", m: "Ich spreche Arabisch, Französisch und ein bisschen Deutsch.", ok: ["Ich spreche *"], o: ["Ich spreche Arabisch, Französisch und ein bisschen Deutsch.", "Ich sprichst Arabisch und Französisch.", "Ich spreche Arabien und Frankreich."], why: ["", "مع ‹ich›: ‹ich spreche›.", "اللغة: ‹Arabisch, Französisch›؛ أما ‹Frankreich› فهو البلد."], ar: "أتكلّم العربية والفرنسية وقليلًا من الألمانية." },
          { s: "A", de: "Oh, der Kurs beginnt. Tschüss!", ar: "آه، الدورة تبدأ. باي!" },
          { s: "U", task: "ودّعهما بشكل غير رسمي وتمنَّ لهما وقتًا ممتعًا.", m: "Tschüss! Viel Spaß im Kurs!", ok: ["Tschüss viel Spaß", "Tschüss viel Spaß im Kurs", "Tschüss viel Spaß im Sprachkurs", "Tschüss bis später", "Tschüss"], o: ["Tschüss! Viel Spaß im Kurs!", "Guten Tag! Viel Spaß!", "Herzlich willkommen im Kurs!"], why: ["", "‹Guten Tag› تحية للقاء وليس للوداع.", "هذه جملة ترحيب وليست وداعًا."], ar: "باي! استمتعا بالدورة!" }
        ]
      },
      listen: [
        { t: "listen", say: "Der Brite Alex spricht vierzehn Sprachen.", q: "كم لغة يتكلّم أليكس؟", o: ["14", "4", "40"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Wohnst du in Tübingen? – Nein, ich wohne in Stuttgart.", q: "أين يسكن؟", o: ["في شتوتغارت", "في توبنغن", "في زيورخ"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Wie geht es Ihnen? – Naja, es geht.", q: "كيف حاله؟", o: ["لا بأس / متوسط", "ممتاز", "سيئ جدًا"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Ich spreche ein bisschen Deutsch.", tag: "hoeren" },
        { t: "dict", say: "Was macht ihr hier?", tag: "hoeren" }
      ]
    },

    /* ───────────── 1C ───────────── */
    {
      id: "1C", de: "Buchstaben und Zahlen", ar: "الحروف والأرقام",
      summary: "الأبجدية والتهجئة، الأرقام حتى المليار، الهاتف والعنوان والبريد، الاستمارة، جنس الأسماء وجمعها، لغة الصف.",
      grammar: [
        {
          h: "الأبجدية الألمانية والحروف الخاصة",
          p: "الأبجدية 26 حرفًا مثل الفرنسية، مع أربعة حروف خاصة: ‹ä› (a مع نقطتين)، ‹ö›، ‹ü›، و‹ß› (ويسمّى Eszett أو scharfes S، ويُنطق ss). عند التهجئة: ‹A wie Anton› (A مثل أنطون).",
          table: {
            head: ["الحرف", "النطق التقريبي", "الحرف", "النطق التقريبي"],
            rows: [
              ["‹A›", "آ", "‹N›", "إن"], ["‹B›", "بيه", "‹O›", "أوه"], ["‹C›", "تسيه", "‹P›", "پيه"],
              ["‹D›", "ديه", "‹Q›", "كو"], ["‹E›", "إيه", "‹R›", "إر (راء حلقية)"], ["‹F›", "إف", "‹S›", "إس"],
              ["‹G›", "گيه", "‹T›", "تيه"], ["‹H›", "ها", "‹U›", "أو"], ["‹I›", "إي", "‹V›", "فاو"],
              ["‹J›", "يوت", "‹W›", "ڤيه"], ["‹K›", "كا", "‹X›", "إكس"], ["‹L›", "إل", "‹Y›", "إپسيلون"],
              ["‹M›", "إم", "‹Z›", "تسيت"]
            ]
          },
          tip: "انتبه: ‹J› تُنطق «يوت» (ي)، و‹V› «فاو»، و‹W› «ڤيه»، و‹Z› «تسيت». اضغط زر الاستماع لسماع كل حرف."
        },
        {
          h: "الأرقام",
          table: {
            head: ["", "", "", ""],
            rows: [
              ["0 ‹null›", "1 ‹eins›", "2 ‹zwei›", "3 ‹drei›"],
              ["4 ‹vier›", "5 ‹fünf›", "6 ‹sechs›", "7 ‹sieben›"],
              ["8 ‹acht›", "9 ‹neun›", "10 ‹zehn›", "11 ‹elf›"],
              ["12 ‹zwölf›", "13 ‹dreizehn›", "16 ‹sechzehn› ⚠", "17 ‹siebzehn› ⚠"],
              ["20 ‹zwanzig›", "30 ‹dreißig› ⚠", "40 ‹vierzig›", "60 ‹sechzig› ⚠"],
              ["70 ‹siebzig› ⚠", "100 ‹(ein)hundert›", "1.000 ‹(ein)tausend›", "1.000.000 ‹eine Million›"]
            ]
          },
          list: [
            "من 21 إلى 99 نقول الآحاد أولًا ثم العشرات — مثل العربية تمامًا: 21 = ‹einundzwanzig› (واحد وعشرون)، 35 = ‹fünfunddreißig›.",
            "193 = ‹einhundertdreiundneunzig›. الأرقام تُكتب كلمة واحدة.",
            "في الأرقام الكبيرة تُستعمل النقطة: 1.000 = ألف. وفي الكسور الفاصلة: 1,5."
          ]
        },
        {
          h: "رقم الهاتف والبريد الإلكتروني",
          p: "نقرأ رقم الهاتف رقمًا رقمًا أو مثنى مثنى: 0711 / 98 35 4. في البريد الإلكتروني: ‹@› = ‹at›، ‹.› = ‹Punkt›، ‹-› = ‹minus› أو ‹Bindestrich›، ‹_› = ‹Unterstrich›.",
          ex: [["Wie ist deine Telefonnummer? – Meine Telefonnummer ist 0172 98 35 4.", "ما رقم هاتفك؟ – رقم هاتفي هو …"], ["Wie ist Ihre E-Mail-Adresse? – t.amri@xmu.de: t Punkt amri at xmu Punkt de.", "ما بريدك الإلكتروني؟"]]
        },
        {
          h: "جنس الأسماء: der – das – die",
          p: "كل اسم ألماني له جنس: مذكر ‹{m|der}›، محايد ‹{n|das}›، مؤنث ‹{f|die}›. والجمع دائمًا ‹{p|die}›. الجنس لا يتبع المعنى دائمًا، لذلك **احفظ كل اسم مع أداته**. في هذا التطبيق الألوان تساعدك: الأزرق مذكر، الأخضر محايد، الأحمر مؤنث.",
          table: {
            head: ["", "المفرد", "الجمع"],
            rows: [
              ["مذكر", "‹{m|der} Stift›", "‹{p|die} Stift**e**›"],
              ["محايد", "‹{n|das} Buch›", "‹{p|die} B**ü**ch**er**›"],
              ["مؤنث", "‹{f|die} Tafel›", "‹{p|die} Tafel**n**›"]
            ]
          },
          list: [
            "الأسماء تُكتب دائمًا بحرف أول كبير: ‹der Tisch, das Heft›.",
            "علامات الجمع في القاموس: ‹-e› (Stifte)، ‹¨-er› (Bücher مع Umlaut)، ‹-n› (Tafeln)، ‹-en›، ‹-nen› (Lehrerinnen)، ‹-s› (Tablets)، ‹-› بدون تغيير (Kugelschreiber).",
            "قواعد مساعدة: الكلمات المنتهية بـ ‑ung و‑heit و‑keit و‑ion و‑tät و‑in غالبًا مؤنثة."
          ]
        },
        {
          h: "لغة الصف (Kurssprache)",
          p: "هذه الأوامر تراها في كل تمرين — احفظها:",
          table: {
            head: ["الألمانية", "العربية"],
            rows: [
              ["‹Hören Sie.›", "استمع."], ["‹Lesen Sie.›", "اقرأ."], ["‹Sprechen Sie.›", "تكلّم."], ["‹Schreiben Sie.›", "اكتب."],
              ["‹Ergänzen Sie.›", "أكمل."], ["‹Markieren Sie.›", "ضع علامة / ظلّل."], ["‹Ordnen Sie zu.›", "صِل / رتّب."], ["‹Kreuzen Sie an.›", "ضع علامة ×."],
              ["‹Fragen Sie.›", "اسأل."], ["‹Antworten Sie.›", "أجب."], ["‹Vergleichen Sie.›", "قارن."], ["‹Notieren Sie.›", "دوّن."]
            ]
          }
        }
      ],
      vocab: [
        ["n", "der", "Name", "-n", "الاسم", "Mein Name ist Rodrigo.", "اسمي رودريغو."],
        ["n", "der", "Vorname", "-n", "الاسم الشخصي", "Mein Vorname ist Mia.", "اسمي الشخصي ميا."],
        ["n", "der", "Familienname", "-n", "اسم العائلة", "Wie ist Ihr Familienname?", "ما اسم عائلتك؟"],
        ["n", "der", "Nachname", "-n", "اسم العائلة (اللقب)", "Mein Nachname ist Brunner.", "اسم عائلتي برونر."],
        ["n", "die", "Adresse", "-n", "العنوان", "Wie ist deine Adresse?", "ما عنوانك؟"],
        ["n", "die", "Straße", "-n", "الشارع", "Ich wohne in der Goethestraße.", "أسكن في شارع غوته."],
        ["n", "die", "Hausnummer", "-n", "رقم المنزل", "Die Hausnummer ist 19.", "رقم المنزل 19."],
        ["n", "die", "Postleitzahl", "-en", "الرمز البريدي", "Die Postleitzahl von Tübingen ist 72076.", "الرمز البريدي لتوبنغن 72076."],
        ["n", "der", "Wohnort", "-e", "مكان السكن", "Wohnort: Errachidia", "مكان السكن: الرشيدية"],
        ["n", "die", "Nationalität", "-en", "الجنسية", "Wie ist Ihre Nationalität?", "ما جنسيتك؟"],
        ["n", "das", "Telefon", "-e", "الهاتف", "Das Telefon ist alt.", "الهاتف قديم."],
        ["n", "die", "Telefonnummer", "-n", "رقم الهاتف", "Wie ist Ihre Telefonnummer?", "ما رقم هاتفك؟"],
        ["n", "das", "Handy", "-s", "الهاتف المحمول", "Hast du ein Handy?", "هل عندك هاتف محمول؟"],
        ["n", "die", "Handynummer", "-n", "رقم المحمول", "Meine Handynummer ist 0172 983541.", "رقم محمولي …"],
        ["n", "die", "Vorwahl", "-en", "رمز الاتصال (المنطقة)", "Die Vorwahl von Berlin ist 030.", "رمز برلين 030."],
        ["n", "die", "E-Mail-Adresse", "-n", "عنوان البريد الإلكتروني", "Meine E-Mail-Adresse ist mia@uni.de.", "بريدي الإلكتروني …"],
        ["n", "die", "Zahl", "-en", "الرقم / العدد", "Hören Sie die Zahlen.", "استمع إلى الأرقام."],
        ["n", "die", "Million", "-en", "المليون", "Berlin hat 3,7 Millionen Einwohner.", "في برلين 3.7 مليون نسمة."],
        ["n", "die", "Milliarde", "-n", "المليار", "Eine Milliarde ist viel.", "المليار كثير."],
        ["v", "", "buchstabieren", "", "يتهجّى", "Buchstabieren Sie das bitte!", "تهجَّ ذلك من فضلك!"],
        ["v", "", "schreiben", "", "يكتب", "Wie schreibt man das?", "كيف يُكتب هذا؟"],
        ["v", "", "fragen", "", "يسأل", "Fragen Sie im Kurs.", "اسأل في الصف."],
        ["n", "der", "Stift", "-e", "القلم", "Der Stift ist rot.", "القلم أحمر."],
        ["n", "der", "Kugelschreiber", "-", "قلم الحبر الجاف", "Ich brauche einen Kugelschreiber.", "أحتاج قلم حبر."],
        ["n", "das", "Heft", "-e", "الدفتر", "Das Heft ist neu.", "الدفتر جديد."],
        ["n", "das", "Buch", "¨-er", "الكتاب", "Das Buch ist interessant.", "الكتاب مثير."],
        ["n", "das", "Wörterbuch", "¨-er", "القاموس", "Arbeiten Sie mit dem Wörterbuch.", "اعمل بالقاموس."],
        ["n", "die", "Tafel", "-n", "السبورة", "Die Lehrerin schreibt an die Tafel.", "المعلّمة تكتب على السبورة."],
        ["n", "der", "Tisch", "-e", "الطاولة", "Der Tisch ist groß.", "الطاولة كبيرة."],
        ["n", "der", "Stuhl", "¨-e", "الكرسي", "Hier sind zwei Stühle.", "هنا كرسيان."],
        ["n", "das", "Bild", "-er", "الصورة / اللوحة", "Das Bild ist schön.", "الصورة جميلة."],
        ["n", "der", "Ball", "¨-e", "الكرة", "Die Bälle sind bunt.", "الكرات ملوّنة."],
        ["n", "der", "Apfel", "¨", "التفاحة", "Der Apfel ist rot.", "التفاحة حمراء."],
        ["n", "die", "Gruppe", "-n", "المجموعة", "Arbeiten Sie in Gruppen.", "اعملوا في مجموعات."],
        ["n", "der", "Projektor", "-en", "جهاز العرض", "Der Projektor funktioniert nicht.", "جهاز العرض لا يعمل."],
        ["n", "das", "Tablet", "-s", "اللوح الإلكتروني", "Das Tablet ist praktisch.", "اللوح الإلكتروني عملي."],
        ["n", "der", "Radiergummi", "-s", "الممحاة", "Hast du einen Radiergummi?", "هل عندك ممحاة؟"],
        ["n", "die", "Tasche", "-n", "الحقيبة", "Das Buch ist in der Tasche.", "الكتاب في الحقيبة."],
        ["n", "das", "Fenster", "-", "النافذة", "Das Fenster ist offen.", "النافذة مفتوحة."],
        ["n", "die", "Tür", "-en", "الباب", "Die Tür ist zu.", "الباب مغلق."],
        ["n", "das", "Auto", "-s", "السيارة", "Das Auto kommt aus Deutschland.", "السيارة من ألمانيا."],
        ["x", "", "Wie schreibt man das?", "", "كيف يُكتب ذلك؟", "Wie schreibt man das? – A-M-R-I.", "كيف يُكتب؟ – A-M-R-I."],
        ["x", "", "Wie heißt das auf Deutsch?", "", "ما اسم هذا بالألمانية؟", "Wie heißt das auf Deutsch? – Das heißt Radiergummi.", "ما اسم هذا بالألمانية؟ – اسمه ممحاة."],
        ["x", "", "Das weiß ich nicht.", "", "لا أعرف ذلك.", "Wie heißt das? – Das weiß ich nicht.", "ما اسمه؟ – لا أعرف."]
      ],
      phrases: [
        ["Wie ist Ihr Familienname? – Mein Familienname ist Amri.", "ما اسم عائلتك؟ – اسم عائلتي عمري."],
        ["Wie schreibt man das? – A-M-R-I.", "كيف يُكتب؟ – A-M-R-I."],
        ["Wie ist deine Telefonnummer?", "ما رقم هاتفك؟"],
        ["Wie ist Ihre Adresse? – Goethestraße 19 in Tübingen.", "ما عنوانك؟ – شارع غوته 19 في توبنغن."],
        ["Wie alt bist du? – Ich bin 24 Jahre alt.", "كم عمرك؟ – عمري 24 سنة."],
        ["Wie heißt das auf Deutsch? – Das heißt …", "ما اسم هذا بالألمانية؟ – اسمه …"],
        ["Das weiß ich nicht.", "لا أعرف ذلك."]
      ],
      ex: [
        { t: "mc", q: "ما هو الرقم ‹siebzehn›؟", o: ["17", "70", "7"], a: 0, why: "‹sieben› + ‹zehn› = 17، وننتبه: نقول ‹sieb›zehn بدون ‑en.", tag: "zahlen" },
        { t: "mc", q: "كيف نقول 35؟", o: ["fünfunddreißig", "dreißigfünf", "dreiundfünfzig"], a: 0, why: "الآحاد أولًا ثم ‹und› ثم العشرات: fünf‑und‑dreißig.", tag: "zahlen", wrong: { "dreiundfünfzig": "هذا 53: الآحاد (drei) أولًا ثم العشرات (fünfzig)." } },
        { t: "gap", q: "اكتب الرقم بالحروف.", s: "21 = ___", a: ["einundzwanzig"], why: "21 = ein‑und‑zwanzig (كلمة واحدة، وتسقط s من eins).", tag: "zahlen" },
        { t: "gap", q: "اكتب الرقم بالحروف.", s: "60 = ___", a: ["sechzig"], why: "انتبه: ‹sechzig› بدون s: sech‑zig.", tag: "zahlen", wrong: { "sechszig": "نحذف s: sechzig." } },
        { t: "mc", q: "كيف يُقرأ «@» في البريد الإلكتروني؟", o: ["at", "Punkt", "minus"], a: 0, why: "‹@› = ‹at›، و‹.› = ‹Punkt›.", tag: "zahlen" },
        { t: "mc", q: "اختر الأداة الصحيحة.", s: "___ Buch", o: ["das", "der", "die"], a: 0, why: "‹das Buch› محايد، وجمعه ‹die Bücher›.", tag: "artikel" },
        { t: "mc", q: "اختر الأداة الصحيحة.", s: "___ Tafel", o: ["die", "der", "das"], a: 0, why: "‹die Tafel› مؤنث، وجمعه ‹die Tafeln›.", tag: "artikel" },
        { t: "mc", q: "اختر الأداة الصحيحة.", s: "___ Stift", o: ["der", "das", "die"], a: 0, why: "‹der Stift› مذكر، وجمعه ‹die Stifte›.", tag: "artikel" },
        { t: "mc", q: "ما جمع ‹das Buch›؟", o: ["die Bücher", "die Buche", "die Buchs"], a: 0, why: "علامة الجمع ‹¨-er›: Umlaut + er → Bücher.", tag: "plural" },
        { t: "mc", q: "ما جمع ‹die Lehrerin›؟", o: ["die Lehrerinnen", "die Lehrerine", "die Lehrerin"], a: 0, why: "الأسماء المنتهية بـ ‑in جمعها ‑nen.", tag: "plural" },
        { t: "gap", q: "اكتب الجمع.", s: "ein Apfel → zwei ___", a: ["Äpfel"], why: "‹der Apfel, ¨› → Umlaut فقط: ‹die Äpfel›.", tag: "plural" },
        { t: "mc", q: "المعلّم يقول: ‹Kreuzen Sie an.› ماذا تفعل؟", o: ["أضع علامة × على الإجابة", "أكتب نصًا", "أستمع"], a: 0, why: "‹ankreuzen› = وضع علامة ×.", tag: "wortschatz" },
        { t: "match", q: "صِل لغة الصف بمعناها.", pairs: [["Hören Sie.", "استمع."], ["Ergänzen Sie.", "أكمل."], ["Vergleichen Sie.", "قارن."], ["Ordnen Sie zu.", "صِل / رتّب."], ["Lesen Sie.", "اقرأ."]], tag: "wortschatz" },
        { t: "order", q: "رتّب السؤال.", a: "Wie ist Ihre Telefonnummer?", why: "كلمة السؤال + الفعل + الباقي.", tag: "wortstellung" },
        { t: "read", title: "Ein Online-Formular", text: "Vorname: Rodrigo. Nachname: Alves Barbosa. Wohnort: 72070 Tübingen. Straße: Fichtenweg 11. Herkunftsland: Brasilien. Muttersprache: Portugiesisch. Zielsprache: Deutsch. Handy: 0176 554 23 81.", tr: "الاسم: رودريغو. اللقب: ألفيس باربوسا. السكن: 72070 توبنغن. الشارع: فيشتنفيغ 11. بلد الأصل: البرازيل. اللغة الأم: البرتغالية. اللغة الهدف: الألمانية. المحمول: …", items: [
          { t: "tf", s: "Rodrigo kommt aus Brasilien.", a: true, why: "‹Herkunftsland: Brasilien›." },
          { t: "tf", s: "Seine Muttersprache ist Spanisch.", a: false, why: "اللغة الأم هي البرتغالية: ‹Portugiesisch›." },
          { t: "tf", s: "Die Hausnummer ist 11.", a: true, why: "‹Fichtenweg 11›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Tandempartner gesucht", ar: "مطلوب شريك تبادل لغوي",
        scene: "تسجّل في مكتب الجامعة للبحث عن شريك تبادل لغوي. الموظفة تملأ الاستمارة معك.",
        who: { A: "Frau Möller" },
        lines: [
          { s: "A", de: "Guten Tag! Wie ist Ihr Familienname, bitte?", ar: "مرحبًا! ما اسم عائلتك من فضلك؟" },
          { s: "U", task: "قل اسم عائلتك (يمكنك استعمال أي اسم).", m: "Mein Familienname ist {LAST}.", ok: ["Mein Familienname ist *", "Mein Nachname ist *", "Ich heiße *", "* "], o: ["Mein Familienname ist {LAST}.", "Mein Vorname ist {LAST}.", "Ich bin Familienname {LAST}."], why: ["", "‹Vorname› هو الاسم الشخصي، والسؤال عن اسم العائلة.", "التركيب خطأ؛ قل: ‹Mein Familienname ist …›."], ar: "اسم عائلتي …" },
          { s: "A", de: "Wie schreibt man das?", ar: "كيف يُكتب؟" },
          { s: "U", task: "تهجَّ اسم عائلتك حرفًا حرفًا (مثلًا: A-M-R-I).", m: "{SPELL}", ok: ["*"], o: ["{SPELL}", "Das schreibt man nicht.", "Ich weiß nicht."], why: ["", "المطلوب أن تتهجى اسمك.", "اسمك تعرفه! تهجَّه حرفًا حرفًا."], ar: "حرفًا حرفًا." },
          { s: "A", de: "Danke. Und wie ist Ihre Adresse?", ar: "شكرًا. وما عنوانك؟" },
          { s: "U", task: "قل عنوانك: الشارع والرقم والمدينة.", m: "Meine Adresse ist Goethestraße 19, 72076 Tübingen.", ok: ["Meine Adresse ist *", "Ich wohne in der * ", "Ich wohne *"], o: ["Meine Adresse ist Goethestraße 19, 72076 Tübingen.", "Mein Adresse ist Goethestraße 19.", "Ich wohne Adresse Goethestraße."], why: ["", "‹die Adresse› مؤنث → ‹meine Adresse›.", "قل: ‹Meine Adresse ist …› أو ‹Ich wohne in der …›."], ar: "عنواني: شارع غوته 19، 72076 توبنغن." },
          { s: "A", de: "Und Ihre Handynummer?", ar: "ورقم محمولك؟" },
          { s: "U", task: "أعطِ رقم هاتفك (اكتب الأرقام بالحروف أو بالأرقام).", m: "Meine Handynummer ist 0176 55 42 38.", ok: ["Meine Handynummer ist *", "Meine Telefonnummer ist *", "Die Nummer ist *", "*"], o: ["Meine Handynummer ist 0176 55 42 38.", "Ich bin 0176 55 42 38.", "Meine Handynummer heißt Handy."], why: ["", "لا نقول ‹Ich bin› مع الرقم.", "أعطِ الرقم نفسه."], ar: "رقم محمولي هو …" },
          { s: "A", de: "Welche Sprache möchten Sie lernen?", ar: "أي لغة تريد أن تتعلّم؟" },
          { s: "U", task: "قل إن لغتك الهدف هي الألمانية ولغتك الأم العربية.", m: "Meine Zielsprache ist Deutsch. Meine Muttersprache ist Arabisch.", ok: ["Meine Zielsprache ist Deutsch *", "Ich möchte Deutsch lernen *", "Deutsch meine Muttersprache ist Arabisch", "Ich lerne Deutsch *"], o: ["Meine Zielsprache ist Deutsch. Meine Muttersprache ist Arabisch.", "Mein Zielsprache ist Deutschland.", "Ich spreche Zielsprache Arabisch."], why: ["", "‹die Zielsprache› → ‹meine›، واللغة ‹Deutsch› وليست البلد ‹Deutschland›.", "التركيب غير صحيح."], ar: "لغتي الهدف الألمانية، ولغتي الأم العربية." },
          { s: "A", de: "Super, vielen Dank! Auf Wiedersehen!", ar: "ممتاز، شكرًا جزيلًا! إلى اللقاء!" },
          { s: "U", task: "ودّع الموظفة بشكل رسمي.", m: "Auf Wiedersehen!", ok: ["Auf Wiedersehen *", "Danke auf Wiedersehen", "Vielen Dank auf Wiedersehen"], o: ["Auf Wiedersehen!", "Tschüss, Möller!", "Guten Morgen!"], why: ["", "‹Tschüss› غير رسمي، ولا نستعمل اللقب وحده.", "هذه تحية لقاء وليست وداعًا."], ar: "إلى اللقاء!" }
        ]
      },
      listen: [
        { t: "listen", say: "Meine Telefonnummer ist null sieben eins eins, achtundneunzig, fünfunddreißig.", q: "ما رقم الهاتف؟", o: ["0711 / 98 35", "0711 / 89 53", "0171 / 98 35"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich bin vierundzwanzig Jahre alt.", q: "كم عمره؟", o: ["24", "42", "14"], a: 0, tag: "hoeren" },
        { t: "listen", say: "B, R, U, N, N, E, R.", q: "ما الاسم المتهجّى؟", o: ["Brunner", "Bruner", "Prunner"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Die Postleitzahl ist siebenundzwanzig, null, sechsundsiebzig.", q: "ما الرمز البريدي؟", o: ["72076", "27067", "72067"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Wie schreibt man das?", tag: "hoeren" },
        { t: "dict", say: "dreihundertfünfundsechzig", ans: ["dreihundertfünfundsechzig", "365"], tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "Satzmelodie", ar: "لحن الجملة (التنغيم)",
    body: [
      { p: "في الألمانية يصعد الصوت أو ينزل في آخر الجملة حسب نوعها. هذا يساعد السامع على فهم إن كنت تسأل أم تُخبر." },
      { table: { head: ["نوع الجملة", "اللحن", "مثال"], rows: [
        ["جملة خبرية", "↘ ينزل", "‹Ich komme aus der Türkei. ↘›"],
        ["سؤال W", "↘ ينزل", "‹Woher kommen Sie? ↘›"],
        ["سؤال نعم/لا", "↗ يصعد", "‹Kommen Sie aus Japan? ↗›"],
        ["سؤال مرتد", "↗ يصعد", "‹Gut, und dir? ↗›"]
      ] } },
      { tip: "خطأ شائع: رفع الصوت في آخر سؤال W. في الألمانية سؤال W ينزل مثل الجملة الخبرية." }
    ],
    drills: [
      { t: "listen", say: "Kommen Sie aus Russland?", q: "هل يصعد اللحن أم ينزل في آخر الجملة؟", o: ["يصعد ↗", "ينزل ↘"], a: 0, why: "سؤال نعم/لا → يصعد." },
      { t: "listen", say: "Woher kommen Sie?", q: "هل يصعد اللحن أم ينزل؟", o: ["ينزل ↘", "يصعد ↗"], a: 0, why: "سؤال W → ينزل." },
      { t: "listen", say: "Ich komme aus Polen.", q: "هل يصعد اللحن أم ينزل؟", o: ["ينزل ↘", "يصعد ↗"], a: 0, why: "جملة خبرية → ينزل." },
      { t: "listen", say: "Gut, und dir?", q: "هل يصعد اللحن أم ينزل؟", o: ["يصعد ↗", "ينزل ↘"], a: 0, why: "سؤال مرتد → يصعد." }
    ],
    say: ["Wie geht es dir?", "Gut, und dir?", "Woher kommen Sie?", "Ich komme aus Marokko.", "Kommen Sie aus Russland?", "Nein, ich komme aus Polen.", "Wohnst du in Mannheim?", "Ja, ich wohne in Mannheim."]
  },

  write: [
    {
      ar: "اكتب نصًا قصيرًا (4–6 جمل) تقدّم فيه نفسك لشريك تبادل لغوي: الاسم، البلد والمدينة، اللغات، الدراسة أو العمل، السكن.",
      de: "Stellen Sie sich vor: Name, Land, Sprachen, Studium/Arbeit, Wohnort.",
      model: "Hallo! Ich heiße Karim und komme aus Marokko, aus Errachidia. Meine Muttersprache ist Arabisch. Ich spreche auch Französisch und ein bisschen Deutsch. Ich studiere nicht, ich arbeite schon. Ich wohne in Errachidia. Viele Grüße, Karim",
      check: ["التحية في البداية (Hallo / Liebe …)", "‹Ich heiße …› أو ‹Mein Name ist …›", "‹Ich komme aus …›", "‹Ich spreche …›", "الفعل في المكان الثاني في كل جملة", "تحية الختام (Viele Grüße)"]
    }
  ],
  tutor: [
    { title: "Im Sommerkurs", ar: "تعارف في الدورة الصيفية", role: "eine freundliche Kursteilnehmerin namens Leyla aus Ankara im Sommerkurs in Tübingen", goal: "sich gegenseitig vorstellen: Name, Herkunft, Sprachen, Studium/Arbeit (du-Form)", start: "Hallo! Ich bin Leyla. Ich bin neu hier. Und wie heißt du?" },
    { title: "Im Büro der Uni", ar: "في مكتب الجامعة (رسمي)", role: "Frau Möller, eine Mitarbeiterin im International Office", goal: "ein Formular ausfüllen: Name buchstabieren, Adresse, Telefonnummer, E-Mail (Sie-Form)", start: "Guten Tag! Wie ist Ihr Familienname, bitte?" }
  ]
});

/* Lektion 2 — Menschen und Dinge */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 2,
  de: "Menschen und Dinge",
  ar: "الناس والأشياء",
  book: "Kursbuch S. 18–25 · Übungsbuch S. 84–91",
  goals: [
    "الحديث عن الأشياء قديمًا وحديثًا (التقنية)",
    "استعمال أدوات التعريف والتنكير والنفي في حالتي الرفع والنصب",
    "الحديث عن العائلة باستعمال أدوات الملكية",
    "ربط الجمل بـ und و oder و aber",
    "فهم قائمة الطعام، الطلب والدفع في المطعم، وقول الوقت الرسمي وأيام الأسبوع"
  ],
  units: [
    /* ───────────── 2A ───────────── */
    {
      id: "2A", de: "Früher und heute", ar: "قديمًا وحديثًا",
      summary: "أدوات التعريف والتنكير، أداة النفي kein، حالة النصب (Akkusativ)، haben في المضارع والماضي.",
      grammar: [
        {
          h: "أداة التنكير وأداة التعريف: ein / der",
          p: "عندما نذكر الشيء لأول مرة (معلومة جديدة) نستعمل أداة التنكير ‹ein / eine›. وعندما يكون الشيء معروفًا (ذُكر من قبل) نستعمل أداة التعريف ‹der / das / die›.",
          ex: [["Das ist ein Plattenspieler. Der Plattenspieler funktioniert noch.", "هذا مشغّل أسطوانات. المشغّل ما زال يعمل."], ["Das ist eine Kamera. Die Kamera macht gute Fotos.", "هذه كاميرا. الكاميرا تلتقط صورًا جيدة."]],
          tip: "الجمع ليس له أداة تنكير: ‹Das sind Disketten.› (هذه أقراص مرنة)."
        },
        {
          h: "أداة النفي kein",
          p: "لنفي اسم نكرة نستعمل ‹kein / keine› — ونهاياتها مثل ‹ein› تمامًا، ولها جمع: ‹keine›.",
          table: {
            head: ["الحالة الأولى (Nominativ)", "مذكر", "محايد", "مؤنث", "جمع"],
            rows: [
              ["المعرفة", "‹{m|der} Computer›", "‹{n|das} Telefon›", "‹{f|die} Kamera›", "‹{p|die} Kassetten›"],
              ["النكرة", "‹ein Computer›", "‹ein Telefon›", "‹eine Kamera›", "‹– Kassetten›"],
              ["النفي", "‹kein Computer›", "‹kein Telefon›", "‹keine Kamera›", "‹keine Kassetten›"]
            ]
          },
          ex: [["Das ist kein Telefon. Das ist ein Radio.", "هذا ليس هاتفًا. هذا مذياع."]]
        },
        {
          h: "حالة الرفع والنصب: Nominativ و Akkusativ",
          p: [
            "**الفاعل** (من يفعل؟) في حالة الرفع ‹Nominativ›: نسأل عنه بـ ‹Wer?› للأشخاص و‹Was?› للأشياء.",
            "**المفعول به** (ماذا/من يُفعل به؟) في حالة النصب ‹Akkusativ›: نسأل عنه بـ ‹Wen?› للأشخاص و‹Was?› للأشياء. أفعال مثل ‹haben, brauchen, benutzen, kaufen, nehmen, essen, trinken, möchten› ومعها ‹es gibt› تأتي مع Akkusativ.",
            "الخبر السار: **المذكر فقط يتغيّر** في Akkusativ: ‹der → den›، ‹ein → einen›، ‹kein → keinen›. المحايد والمؤنث والجمع لا تتغيّر."
          ],
          table: {
            head: ["", "مذكر", "محايد", "مؤنث", "جمع"],
            rows: [
              ["Nominativ", "‹der / ein / kein›", "‹das / ein / kein›", "‹die / eine / keine›", "‹die / – / keine›"],
              ["Akkusativ", "‹**den / einen / keinen**›", "‹das / ein / kein›", "‹die / eine / keine›", "‹die / – / keine›"]
            ]
          },
          ex: [
            ["Der Computer ist praktisch.", "الحاسوب عملي. (الفاعل → der)"],
            ["Ich habe einen Computer.", "عندي حاسوب. (مفعول به → einen)"],
            ["Ich brauche den Computer für die Arbeit.", "أحتاج الحاسوب للعمل. (مفعول به → den)"],
            ["Ich habe kein Navi und ich brauche auch keinen E-Reader.", "ليس عندي جهاز ملاحة ولا أحتاج قارئًا إلكترونيًا."]
          ]
        },
        {
          h: "الفعل haben (يملك / عنده) في المضارع والماضي",
          table: {
            head: ["", "المضارع", "الماضي (Präteritum)"],
            rows: [
              ["‹ich›", "‹habe›", "‹hatte›"], ["‹du›", "‹hast›", "‹hattest›"], ["‹er / sie / es›", "‹hat›", "‹hatte›"],
              ["‹wir›", "‹haben›", "‹hatten›"], ["‹ihr›", "‹habt›", "‹hattet›"], ["‹sie / Sie›", "‹haben›", "‹hatten›"]
            ]
          },
          ex: [["Hattest du als Kind ein Handy? – Nein, ich hatte kein Handy.", "هل كان عندك هاتف محمول وأنت طفل؟ – لا، لم يكن عندي."]],
          tip: "مع ‹haben› و‹sein› يستعمل الألمان عادة الماضي البسيط (hatte, war) في الكلام اليومي."
        },
        {
          h: "الأسماء المركّبة (Komposita)",
          p: "الألمانية تحب تركيب الأسماء. **الكلمة الأخيرة تحدد الجنس والمعنى الأساسي**: ‹die Musik + {f|die} Kassette = {f|die} Musikkassette›، ‹das Video + {f|die} Kamera = {f|die} Videokamera›، ‹die Familie + {n|das} Foto = {n|das} Familienfoto›."
        }
      ],
      vocab: [
        ["n", "die", "Technik", "-en", "التقنية", "Ich mag moderne Technik.", "أحب التقنية الحديثة."],
        ["n", "das", "Ding", "-e", "الشيء", "Dinge kommen und gehen.", "الأشياء تأتي وتذهب."],
        ["n", "der", "Gegenstand", "¨-e", "الغرض / الشيء", "Kennen Sie die Gegenstände noch?", "هل ما زلت تعرف هذه الأشياء؟"],
        ["n", "der", "Plattenspieler", "-", "مشغّل الأسطوانات", "Mein Opa hat einen Plattenspieler.", "جدّي عنده مشغّل أسطوانات."],
        ["n", "die", "Schallplatte", "-n", "الأسطوانة", "Die Schallplatten sind alt.", "الأسطوانات قديمة."],
        ["n", "die", "Schreibmaschine", "-n", "الآلة الكاتبة", "Früher hatte man eine Schreibmaschine.", "قديمًا كانت لدى الناس آلة كاتبة."],
        ["n", "die", "Kamera", "-s", "الكاميرا", "Die Kamera macht gute Fotos.", "الكاميرا تلتقط صورًا جيدة."],
        ["n", "der", "Fotoapparat", "-e", "آلة التصوير", "Ich habe meinen Fotoapparat dabei.", "آلة التصوير معي."],
        ["n", "das", "Foto", "-s", "الصورة الفوتوغرافية", "Das Foto ist sehr alt.", "الصورة قديمة جدًا."],
        ["n", "die", "Kassette", "-n", "شريط الكاسيت", "Das sind keine Kassetten.", "هذه ليست أشرطة كاسيت."],
        ["n", "die", "Diskette", "-n", "القرص المرن", "Die Disketten haben nur 1,4 Megabytes.", "الأقراص المرنة سعتها 1.4 ميغابايت فقط."],
        ["n", "der", "Computer", "-", "الحاسوب", "Ich brauche den Computer an der Uni.", "أحتاج الحاسوب في الجامعة."],
        ["n", "der", "Laptop", "-s", "الحاسوب المحمول", "Hast du einen Laptop?", "هل عندك حاسوب محمول؟"],
        ["n", "das", "Smartphone", "-s", "الهاتف الذكي", "Wir telefonieren mit Smartphones.", "نتصل بالهواتف الذكية."],
        ["n", "der", "USB-Stick", "-s", "ذاكرة USB", "Der USB-Stick ist klein.", "ذاكرة USB صغيرة."],
        ["n", "der", "Akku", "-s", "البطارية (القابلة للشحن)", "Der Akku ist leer.", "البطارية فارغة."],
        ["n", "das", "Navigationsgerät", "-e", "جهاز الملاحة (GPS)", "Ich habe kein Navigationsgerät im Auto.", "ليس عندي جهاز ملاحة في السيارة."],
        ["n", "die", "Kreditkarte", "-n", "بطاقة الائتمان", "Kann ich mit Kreditkarte zahlen?", "هل يمكنني الدفع بالبطاقة؟"],
        ["n", "die", "Bibliothek", "-en", "المكتبة", "Ich gehe in die Bibliothek.", "أذهب إلى المكتبة."],
        ["n", "der", "Film", "-e", "الفيلم", "Der Film ist gut.", "الفيلم جيد."],
        ["n", "die", "Musik", "Sg.", "الموسيقى", "Musik hören wir mit dem Handy.", "نستمع إلى الموسيقى بالهاتف."],
        ["v", "", "haben", "du hast, er hat · hatte", "يملك / عنده", "Hast du ein Tablet?", "هل عندك لوح إلكتروني؟"],
        ["v", "", "brauchen", "", "يحتاج", "Ich brauche keinen E-Reader.", "لا أحتاج قارئًا إلكترونيًا."],
        ["v", "", "benutzen", "", "يستعمل", "Was benutzt man heute?", "ماذا يستعمل الناس اليوم؟"],
        ["v", "", "funktionieren", "", "يعمل (جهاز)", "Der Plattenspieler funktioniert noch.", "المشغّل ما زال يعمل."],
        ["v", "", "telefonieren", "", "يتّصل هاتفيًا", "Wir telefonieren jeden Tag.", "نتّصل كل يوم."],
        ["v", "", "hören", "", "يسمع / يستمع", "Ich höre gern Musik.", "أحب الاستماع إلى الموسيقى."],
        ["v", "", "lesen", "du liest, er liest", "يقرأ", "Liest du Bücher aus Papier?", "هل تقرأ كتبًا ورقية؟"],
        ["v", "", "kennen", "", "يعرف (شخصًا/شيئًا)", "Kennen Sie das noch?", "هل ما زلت تعرف هذا؟"],
        ["x", "", "es gibt + Akk.", "", "يوجد / هناك", "Es gibt E-Reader und Online-Bibliotheken.", "توجد قارئات إلكترونية ومكتبات إلكترونية."],
        ["a", "", "modern", "", "حديث", "Das Smartphone ist modern.", "الهاتف الذكي حديث."],
        ["a", "", "altmodisch", "", "قديم الطراز", "Ich bin ein bisschen altmodisch.", "أنا قديم الطراز قليلًا."],
        ["a", "", "praktisch", "", "عملي", "Der Computer ist sehr praktisch.", "الحاسوب عملي جدًا."],
        ["d", "", "früher", "", "قديمًا / سابقًا", "Früher hatten wir kein Internet.", "قديمًا لم يكن عندنا إنترنت."],
        ["d", "", "heute", "", "اليوم / حاليًا", "Heute benutzen wir Smartphones.", "اليوم نستعمل الهواتف الذكية."],
        ["d", "", "nur", "", "فقط", "Ich habe nur ein Handy.", "عندي هاتف واحد فقط."],
        ["d", "", "sogar", "", "حتى (للمبالغة)", "Er hat sogar eine Schreibmaschine.", "عنده حتى آلة كاتبة."],
        ["q", "", "wer?", "", "من؟ (الفاعل)", "Wer ist das?", "من هذا؟"],
        ["q", "", "wen?", "", "من؟ (المفعول به)", "Wen kennst du hier?", "من تعرف هنا؟"]
      ],
      phrases: [
        ["Das ist ein Plattenspieler. Der Plattenspieler ist alt.", "هذا مشغّل أسطوانات. المشغّل قديم."],
        ["Das ist keine Musikkassette.", "هذا ليس شريط موسيقى."],
        ["Ich habe einen Laptop, aber keinen Drucker.", "عندي حاسوب محمول، لكن ليس عندي طابعة."],
        ["Hattest du als Kind ein Handy?", "هل كان عندك هاتف وأنت طفل؟"],
        ["Nein, ich hatte kein Handy.", "لا، لم يكن عندي هاتف."],
        ["Was benutzt du heute?", "ماذا تستعمل اليوم؟"],
        ["Es gibt heute viele Apps.", "توجد اليوم تطبيقات كثيرة."]
      ],
      ex: [
        { t: "mc", q: "معلومة جديدة أم معروفة؟ اختر الأداة.", s: "Das ist ___ Kamera. ___ Kamera ist neu.", o: ["eine … Die", "die … Eine", "ein … Der"], a: 0, why: "أول مرة (جديد) → ‹eine Kamera›؛ ثم أصبحت معروفة → ‹die Kamera›.", tag: "artikel" },
        { t: "mc", q: "اختر أداة النفي.", s: "Das ist ___ Telefon. Das ist ein Radio.", o: ["kein", "keine", "nicht"], a: 0, why: "‹das Telefon› محايد → ‹kein Telefon›. ‹nicht› لا تنفي الاسم النكرة.", tag: "negation" },
        { t: "mc", q: "اختر أداة النفي.", s: "Das sind ___ Kreditkarten.", o: ["keine", "kein", "keinen"], a: 0, why: "الجمع → ‹keine›.", tag: "negation" },
        { t: "gap", q: "أكمل بأداة النكرة في Akkusativ.", s: "Ich habe ___ Computer. (der Computer)", a: ["einen"], why: "‹haben› + Akkusativ، والمذكر يصبح ‹einen›.", tag: "akkusativ", wrong: { "ein": "‹der Computer› مذكر؛ في Akkusativ يصبح ‹ein› → ‹einen›." } },
        { t: "gap", q: "أكمل بأداة التعريف في Akkusativ.", s: "Ich brauche ___ Laptop für die Arbeit. (der Laptop)", a: ["den"], why: "المذكر في Akkusativ: ‹der → den›.", tag: "akkusativ", wrong: { "der": "‹Laptop› هنا مفعول به (ماذا أحتاج؟) → Akkusativ: ‹den›." } },
        { t: "gap", q: "أكمل.", s: "Hast du ___ Tablet? (das Tablet)", a: ["ein"], why: "المحايد لا يتغيّر في Akkusativ: ‹ein Tablet›.", tag: "akkusativ", wrong: { "einen": "‹einen› للمذكر فقط. ‹das Tablet› محايد → ‹ein›." } },
        { t: "gap", q: "أكمل بأداة النفي.", s: "Ich habe ___ Navi und ich brauche auch ___ E-Reader. (das Navi, der E-Reader)", a: ["kein", "keinen"], why: "‹das Navi› → ‹kein›؛ ‹der E-Reader› مفعول به مذكر → ‹keinen›.", tag: "akkusativ" },
        { t: "mc", q: "ما السؤال الصحيح عن الكلمة المظللة؟ ‹**Jan** benutzt ein Tablet.›", o: ["Wer benutzt ein Tablet?", "Wen benutzt ein Tablet?", "Was benutzt Jan?"], a: 0, why: "‹Jan› هو الفاعل (شخص) → ‹Wer?›.", tag: "akkusativ" },
        { t: "mc", q: "ما السؤال الصحيح؟ ‹Ich kenne **den Professor**.›", o: ["Wen kennst du?", "Wer kennst du?", "Was kennst du?"], a: 0, why: "‹den Professor› مفعول به (شخص) → ‹Wen?›.", tag: "akkusativ" },
        { t: "gap", q: "أكمل بـ haben في الماضي.", s: "Meine Eltern ___ früher eine Schreibmaschine.", a: ["hatten"], why: "‹sie (Eltern)› → ‹hatten›.", tag: "praeteritum" },
        { t: "gap", q: "أكمل بـ haben في المضارع.", s: "___ du einen Laptop?", a: ["Hast"], why: "‹du hast›، والفعل أولًا في سؤال نعم/لا.", tag: "haben" },
        { t: "mc", q: "ما جنس الكلمة المركبة ‹Familienfoto›؟ (die Familie + das Foto)", o: ["das", "die", "der"], a: 0, why: "الكلمة الأخيرة تحدد الجنس: ‹das Foto› → ‹das Familienfoto›.", tag: "artikel" },
        { t: "order", q: "رتّب الجملة.", a: "Ich brauche den Computer für die Arbeit.", why: "الفاعل + الفعل (المكان 2) + المفعول به.", tag: "wortstellung" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "ليس عندي سيارة.", a: ["Ich habe kein Auto."], tag: "negation" },
        { t: "read", title: "Dinge kommen und gehen", text: "Früher hatten meine Eltern einen Plattenspieler, eine Schreibmaschine und ein Telefon mit Wählscheibe. Heute hören wir Musik mit dem Smartphone. Bücher lese ich am Tablet. Ich habe einen Laptop und eine Digitalkamera, aber ich habe kein Navi im Auto. Ich bin ein bisschen altmodisch.", tr: "قديمًا كان عند والديّ مشغّل أسطوانات وآلة كاتبة وهاتف بقرص دوّار. اليوم نسمع الموسيقى بالهاتف الذكي. الكتب أقرؤها على اللوح الإلكتروني. عندي حاسوب محمول وكاميرا رقمية، لكن ليس عندي جهاز ملاحة في السيارة. أنا قديم الطراز قليلًا.", items: [
          { t: "tf", s: "Die Eltern hatten früher eine Schreibmaschine.", a: true, why: "‹Früher hatten meine Eltern … eine Schreibmaschine›." },
          { t: "tf", s: "Der Autor hat ein Navi im Auto.", a: false, why: "‹aber ich habe kein Navi im Auto›." },
          { t: "tf", s: "Er liest Bücher am Tablet.", a: true, why: "‹Bücher lese ich am Tablet.›" }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Auf dem Dachboden", ar: "في العليّة",
        scene: "ابن أخيك فيليكس (11 سنة) يجد أشياء قديمة في العليّة ويسألك عنها.",
        who: { A: "Felix" },
        lines: [
          { s: "A", de: "Was ist das? Ist das ein Computer?", ar: "ما هذا؟ هل هذا حاسوب؟" },
          { s: "U", task: "قل: لا، هذا ليس حاسوبًا. هذه آلة كاتبة.", m: "Nein, das ist kein Computer. Das ist eine Schreibmaschine.", ok: ["Nein das ist kein Computer das ist eine Schreibmaschine", "Nein das ist eine Schreibmaschine", "Das ist kein Computer das ist eine Schreibmaschine"], o: ["Nein, das ist kein Computer. Das ist eine Schreibmaschine.", "Nein, das ist nicht Computer. Das ist ein Schreibmaschine.", "Nein, das ist keinen Computer."], why: ["", "نفي الاسم النكرة بـ ‹kein›، و‹die Schreibmaschine› مؤنث → ‹eine›.", "بعد ‹das ist› نستعمل Nominativ: ‹kein Computer›."], ar: "لا، هذا ليس حاسوبًا. هذه آلة كاتبة." },
          { s: "A", de: "Cool! Und das hier? Das sind Kassetten, oder?", ar: "رائع! وهذه؟ هذه أشرطة كاسيت، أليس كذلك؟" },
          { s: "U", task: "قل: لا، هذه ليست أشرطة. هذه أقراص مرنة (Disketten).", m: "Nein, das sind keine Kassetten. Das sind Disketten.", ok: ["Nein das sind keine Kassetten das sind Disketten", "Nein das sind Disketten", "Das sind keine Kassetten das sind Disketten"], o: ["Nein, das sind keine Kassetten. Das sind Disketten.", "Nein, das sind kein Kassetten. Das sind eine Disketten.", "Nein, das ist keine Kassette."], why: ["", "الجمع: ‹keine Kassetten›، والجمع بلا أداة تنكير: ‹Disketten›.", "هي أشياء كثيرة (جمع): ‹das sind›."], ar: "لا، هذه ليست أشرطة. هذه أقراص مرنة." },
          { s: "A", de: "Hattest du als Kind ein Handy?", ar: "هل كان عندك هاتف محمول وأنت طفل؟" },
          { s: "U", task: "قل: لا، لم يكن عندي هاتف محمول، لكن كان عندي كاميرا.", m: "Nein, ich hatte kein Handy, aber ich hatte eine Kamera.", ok: ["Nein ich hatte kein Handy aber ich hatte eine Kamera", "Nein ich hatte kein Handy aber eine Kamera", "Nein aber ich hatte eine Kamera"], o: ["Nein, ich hatte kein Handy, aber ich hatte eine Kamera.", "Nein, ich habe kein Handy, aber eine Kamera.", "Nein, ich hattest kein Handy."], why: ["", "السؤال عن الماضي (als Kind) → ‹hatte›.", "مع ‹ich› الصيغة ‹hatte› وليس ‹hattest›."], ar: "لا، لم يكن عندي هاتف، لكن كانت عندي كاميرا." },
          { s: "A", de: "Und heute? Was brauchst du für die Arbeit?", ar: "واليوم؟ ماذا تحتاج للعمل؟" },
          { s: "U", task: "قل إنك تحتاج حاسوبًا وهاتفًا ذكيًا.", m: "Ich brauche einen Computer und ein Smartphone.", ok: ["Ich brauche einen Computer und ein Smartphone", "Ich brauche einen Laptop und ein Smartphone", "Ich brauche den Computer und das Smartphone", "Für die Arbeit brauche ich einen Computer und ein Smartphone"], o: ["Ich brauche einen Computer und ein Smartphone.", "Ich brauche ein Computer und einen Smartphone.", "Ich brauchen einen Computer."], why: ["", "‹der Computer› → ‹einen›، ‹das Smartphone› → ‹ein›.", "مع ‹ich› الفعل ‹brauche›."], ar: "أحتاج حاسوبًا وهاتفًا ذكيًا." }
        ]
      },
      listen: [
        { t: "listen", say: "Das ist ein Plattenspieler. Der Plattenspieler funktioniert noch.", q: "ماذا يقول عن المشغّل؟", o: ["ما زال يعمل", "معطّل", "جديد"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Das ist keine Musikkassette, das ist eine Videokassette.", q: "ما هذا الشيء؟", o: ["شريط فيديو", "شريط موسيقى", "قرص مرن"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich habe einen Laptop, aber ich habe kein Tablet.", q: "ماذا ليس عنده؟", o: ["لوح إلكتروني", "حاسوب محمول", "هاتف"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Ich brauche den Computer.", tag: "hoeren" },
        { t: "dict", say: "Hattest du als Kind ein Handy?", tag: "hoeren" }
      ]
    },

    /* ───────────── 2B ───────────── */
    {
      id: "2B", de: "Familiengeschichten", ar: "حكايات عائلية",
      summary: "أفراد العائلة، أدوات الملكية (mein, dein, sein, ihr…)، الحالة الاجتماعية، أدوات الربط und / oder / aber.",
      grammar: [
        {
          h: "أدوات الملكية في حالة الرفع",
          p: "أداة الملكية تحلّ محل أداة التعريف، ونهايتها مثل ‹ein / kein›: لا نهاية مع المذكر والمحايد، و‑e مع المؤنث والجمع.",
          table: {
            head: ["الضمير", "مذكر (der Sohn)", "محايد (das Kind)", "مؤنث (die Tochter)", "جمع (die Kinder)"],
            rows: [
              ["‹ich›", "‹mein›", "‹mein›", "‹meine›", "‹meine›"],
              ["‹du›", "‹dein›", "‹dein›", "‹deine›", "‹deine›"],
              ["‹er / es›", "‹sein›", "‹sein›", "‹seine›", "‹seine›"],
              ["‹sie› (هي)", "‹ihr›", "‹ihr›", "‹ihre›", "‹ihre›"],
              ["‹wir›", "‹unser›", "‹unser›", "‹unsere›", "‹unsere›"],
              ["‹ihr›", "‹euer›", "‹euer›", "‹eure›", "‹eure›"],
              ["‹sie› (هم) / ‹Sie›", "‹ihr / Ihr›", "‹ihr / Ihr›", "‹ihre / Ihre›", "‹ihre / Ihre›"]
            ]
          },
          list: [
            "انتبه: ‹sein› = له (للمذكر)، و‹ihr› = لها (للمؤنث) أو لهم. مثل son/sa في الفرنسية؟ لا! في الألمانية يتبع **المالك**: ‹Jan → seine Mutter›، ‹Anna → ihre Mutter›.",
            "‹euer› تصبح ‹eure› (تسقط e): ‹eure Familie›."
          ],
          ex: [["Jan hat eine Schwester. Seine Schwester heißt Karolin.", "لجان أخت. أخته اسمها كارولين."], ["Oma Gisela hat einen Freund. Ihr Freund heißt Bernhard.", "للجدة غيزيلا صديق. صديقها اسمه برنهارد."]]
        },
        {
          h: "‹Jans Mutter› = أم جان",
          p: "مع أسماء الأشخاص نضيف ‑s للدلالة على الملكية (بدون فاصلة علوية): ‹Jans Mutter = die Mutter von Jan›. في الكلام اليومي نستعمل كثيرًا ‹von›: ‹das Auto von Felix›."
        },
        {
          h: "أدوات الربط: und – oder – aber",
          p: "تربط جملتين رئيسيتين وتقف في **المكان صفر** — أي لا تغيّر ترتيب الجملة الثانية: بعدها فاعل ثم فعل.",
          table: {
            head: ["الجملة 1", "المكان 0", "الجملة 2"],
            rows: [
              ["‹Man bekommt Kinder,›", "‹aber›", "‹man heiratet nicht immer.›"],
              ["‹Meine Mutter ist nicht verheiratet›", "‹und›", "‹sie erzieht uns allein.›"],
              ["‹Sie heiraten noch einmal›", "‹oder›", "‹sie bleiben unverheiratet.›"]
            ]
          },
          list: ["‹und› = و (إضافة)", "‹oder› = أو (بديل)", "‹aber› = لكن (تعارض) — قبلها فاصلة دائمًا."]
        }
      ],
      vocab: [
        ["n", "die", "Familie", "-n", "العائلة", "Das ist meine Familie.", "هذه عائلتي."],
        ["n", "die", "Eltern", "Pl.", "الوالدان", "Meine Eltern wohnen in Fès.", "والداي يسكنان في فاس."],
        ["n", "der", "Vater", "¨", "الأب", "Mein Vater ist Ingenieur.", "أبي مهندس."],
        ["n", "die", "Mutter", "¨", "الأم", "Meine Mutter heißt Fatima.", "أمي اسمها فاطمة."],
        ["n", "das", "Kind", "-er", "الطفل", "Sie haben zwei Kinder.", "عندهم طفلان."],
        ["n", "der", "Sohn", "¨-e", "الابن", "Ihr Sohn ist zehn Jahre alt.", "ابنها عمره عشر سنوات."],
        ["n", "die", "Tochter", "¨", "البنت", "Seine Tochter studiert Medizin.", "ابنته تدرس الطب."],
        ["n", "die", "Geschwister", "Pl.", "الإخوة (إخوة وأخوات)", "Hast du Geschwister?", "هل عندك إخوة؟"],
        ["n", "der", "Bruder", "¨", "الأخ", "Mein Bruder wohnt in Berlin.", "أخي يسكن في برلين."],
        ["n", "die", "Schwester", "-n", "الأخت", "Meine Schwester ist Lehrerin.", "أختي معلّمة."],
        ["n", "die", "Großeltern", "Pl.", "الجدّان", "Meine Großeltern leben in Österreich.", "جدّاي يعيشان في النمسا."],
        ["n", "der", "Großvater", "¨", "الجد", "Mein Großvater ist 80.", "جدّي عمره 80."],
        ["n", "die", "Großmutter", "¨", "الجدة", "Meine Großmutter kocht gut.", "جدتي تطبخ جيدًا."],
        ["n", "der", "Opa", "-s", "الجد (عامية)", "Opa Klaus hat einen Hund.", "الجد كلاوس عنده كلب."],
        ["n", "die", "Oma", "-s", "الجدة (عامية)", "Ich besuche meine Oma.", "أزور جدتي."],
        ["n", "der", "Onkel", "-", "العم / الخال", "Mein Onkel wohnt in Paris.", "عمّي يسكن في باريس."],
        ["n", "die", "Tante", "-n", "العمة / الخالة", "Meine Tante hat drei Kinder.", "خالتي عندها ثلاثة أطفال."],
        ["n", "der", "Neffe", "-n", "ابن الأخ / ابن الأخت", "Felix ist mein Neffe.", "فيليكس ابن أخي."],
        ["n", "die", "Nichte", "-n", "بنت الأخ / بنت الأخت", "Meine Nichte heißt Sara.", "بنت أختي اسمها سارة."],
        ["n", "der", "Enkel", "-", "الحفيد", "Oma hat fünf Enkel.", "الجدة عندها خمسة أحفاد."],
        ["n", "die", "Enkelin", "-nen", "الحفيدة", "Ihre Enkelin ist klein.", "حفيدتها صغيرة."],
        ["n", "der", "Schwager", "¨", "زوج الأخت / أخو الزوج", "Mein Schwager ist nett.", "صهري لطيف."],
        ["n", "die", "Schwägerin", "-nen", "زوجة الأخ / أخت الزوج", "Meine Schwägerin kommt aus Spanien.", "زوجة أخي من إسبانيا."],
        ["n", "das", "Einzelkind", "-er", "الطفل الوحيد", "Ich bin ein Einzelkind.", "أنا طفل وحيد."],
        ["n", "der", "Partner", "-", "الشريك", "Viele Frauen haben keinen Partner.", "كثير من النساء ليس لهن شريك."],
        ["n", "die", "Partnerin", "-nen", "الشريكة", "Seine Partnerin heißt Anna.", "شريكته اسمها آنا."],
        ["n", "der", "Freund", "-e", "الصديق", "Ihr Freund heißt Bernhard.", "صديقها اسمه برنهارد."],
        ["n", "die", "Freundin", "-nen", "الصديقة", "Meine Freundin wohnt in Mainz.", "صديقتي تسكن في ماينز."],
        ["n", "der", "Junge", "-n", "الولد", "Der Junge ist Jan.", "الولد هو جان."],
        ["n", "das", "Mädchen", "-", "البنت (الفتاة)", "Das Mädchen ist seine Schwester.", "الفتاة أخته."],
        ["n", "der", "Mensch", "-en", "الإنسان", "Hier leben viele Menschen.", "يعيش هنا كثير من الناس."],
        ["n", "der", "Hund", "-e", "الكلب", "Sie haben einen Hund.", "عندهم كلب."],
        ["a", "", "verheiratet", "", "متزوّج", "Mein Bruder ist verheiratet.", "أخي متزوّج."],
        ["a", "", "ledig", "", "أعزب", "Ich bin ledig.", "أنا أعزب."],
        ["a", "", "geschieden", "", "مطلّق", "Seine Eltern sind geschieden.", "والداه مطلّقان."],
        ["v", "", "heiraten", "", "يتزوّج", "Sie heiraten im Sommer.", "سيتزوجان في الصيف."],
        ["v", "", "leben", "", "يعيش", "Wir leben zusammen.", "نعيش معًا."],
        ["v", "", "erziehen", "", "يربّي", "Sie erzieht ihre Kinder allein.", "تربّي أطفالها وحدها."],
        ["v", "", "glauben", "", "يعتقد / يظن", "Ich glaube, das ist Jan.", "أظن أن هذا جان."],
        ["v", "", "erzählen", "", "يحكي", "Erzähl mal von deiner Familie!", "احكِ لي عن عائلتك!"],
        ["d", "", "allein", "", "وحده", "Er wohnt allein.", "يسكن وحده."],
        ["p", "", "und", "", "و", "Ich habe einen Bruder und eine Schwester.", "عندي أخ وأخت."],
        ["p", "", "oder", "", "أو", "Tee oder Kaffee?", "شاي أم قهوة؟"],
        ["p", "", "aber", "", "لكن", "Er ist alt, aber sehr fit.", "هو كبير في السن لكنه نشيط جدًا."]
      ],
      phrases: [
        ["Das ist meine Mutter. Sie heißt Aicha.", "هذه أمي. اسمها عائشة."],
        ["Hast du Geschwister? – Ja, ich habe zwei Brüder.", "هل عندك إخوة؟ – نعم، عندي أخوان."],
        ["Wie alt sind deine Brüder?", "كم عمر إخوتك؟"],
        ["Sind deine Brüder schon verheiratet?", "هل إخوتك متزوّجون؟"],
        ["Ich glaube, das hier sind Jans Eltern.", "أظن أن هذين والدا جان."],
        ["Mein Bruder ist verheiratet, aber meine Schwester ist ledig.", "أخي متزوّج لكن أختي عزباء."]
      ],
      ex: [
        { t: "mc", q: "اختر أداة الملكية الصحيحة.", s: "Jan hat eine Schwester. ___ Schwester heißt Karolin.", o: ["Seine", "Ihre", "Sein"], a: 0, why: "المالك ‹Jan› (مذكر) → ‹sein›، و‹Schwester› مؤنث → ‹seine›.", tag: "possessiv" },
        { t: "mc", q: "اختر أداة الملكية الصحيحة.", s: "Oma Gisela hat einen Freund. ___ Freund heißt Bernhard.", o: ["Ihr", "Sein", "Ihre"], a: 0, why: "المالكة ‹Oma› (مؤنث) → ‹ihr›، و‹Freund› مذكر → بدون نهاية: ‹ihr Freund›.", tag: "possessiv" },
        { t: "mc", q: "اختر أداة الملكية الصحيحة.", s: "Hanna und Fabian haben einen Hund. ___ Hund ist ein Labrador.", o: ["Ihr", "Sein", "Euer"], a: 0, why: "المالكان (هم) → ‹ihr›.", tag: "possessiv" },
        { t: "gap", q: "أكمل بـ mein / meine.", s: "Das ist ___ Bruder und das ist ___ Schwester.", a: ["mein", "meine"], why: "‹der Bruder› → ‹mein›؛ ‹die Schwester› → ‹meine›.", tag: "possessiv" },
        { t: "gap", q: "أكمل بـ dein / deine.", s: "Wie heißen ___ Eltern?", a: ["deine"], why: "الجمع → ‹deine Eltern›.", tag: "possessiv" },
        { t: "gap", q: "أكمل بـ unser / unsere.", s: "___ Familie ist groß.", a: ["Unsere"], why: "‹die Familie› مؤنث → ‹unsere›.", tag: "possessiv" },
        { t: "gap", q: "أكمل بـ euer / eure.", s: "Ist das ___ Hund?", a: ["euer"], why: "‹der Hund› مذكر → ‹euer› (بدون نهاية).", tag: "possessiv", wrong: { "eure": "‹eure› للمؤنث والجمع؛ ‹der Hund› مذكر → ‹euer›." } },
        { t: "mc", q: "ما معنى ‹Jans Mutter›؟", o: ["أم جان", "جان وأمه", "جان أم"], a: 0, why: "‑s بعد اسم الشخص = ملكية: ‹die Mutter von Jan›.", tag: "possessiv" },
        { t: "mc", q: "اختر أداة الربط المناسبة.", s: "Mein Bruder ist verheiratet, ___ meine Schwester ist ledig.", o: ["aber", "oder", "und"], a: 0, why: "هناك تعارض (متزوّج ≠ عزباء) → ‹aber›.", tag: "konnektor" },
        { t: "mc", q: "اختر أداة الربط المناسبة.", s: "Trinkst du Tee ___ Kaffee?", o: ["oder", "aber", "und"], a: 0, why: "اختيار بين بديلين → ‹oder›.", tag: "konnektor" },
        { t: "order", q: "رتّب الجملة الثانية بعد ‹aber›.", a: "Man bekommt Kinder, aber man heiratet nicht immer.", why: "‹aber› في المكان 0، ثم الفاعل ‹man› ثم الفعل.", tag: "konnektor" },
        { t: "match", q: "صِل أفراد العائلة.", pairs: [["der Vater", "الأب"], ["die Tochter", "البنت"], ["die Geschwister", "الإخوة"], ["der Neffe", "ابن الأخ"], ["die Großeltern", "الجدّان"]], tag: "wortschatz" },
        { t: "mc", q: "ابن أختك هو …", o: ["dein Neffe", "dein Onkel", "dein Enkel"], a: 0, why: "‹der Neffe› = ابن الأخ أو ابن الأخت.", tag: "wortschatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أختي اسمها سارة.", a: ["Meine Schwester heißt Sara."], tag: "possessiv" },
        { t: "read", title: "Patchworkfamilie", text: "Vater, Mutter und Kind – das ist die klassische Kleinfamilie. Aber es gibt auch neue Familienformen. Viele Menschen sind geschieden und finden neue Partner. Sie heiraten noch einmal oder sie bleiben unverheiratet. Die neuen Partner und die Kinder wohnen dann zusammen. Das ist eine Patchworkfamilie.", tr: "أب وأم وطفل — هذه هي العائلة الصغيرة التقليدية. لكن هناك أيضًا أشكال جديدة للعائلة. كثير من الناس مطلّقون ويجدون شركاء جددًا. يتزوجون مرة أخرى أو يبقون غير متزوجين. ثم يعيش الشركاء الجدد والأطفال معًا. هذه عائلة مركّبة (باتشوورك).", items: [
          { t: "tf", s: "In einer Patchworkfamilie wohnen neue Partner und Kinder zusammen.", a: true, why: "‹Die neuen Partner und die Kinder wohnen dann zusammen.›" },
          { t: "tf", s: "Geschiedene Menschen heiraten nie noch einmal.", a: false, why: "‹Sie heiraten noch einmal oder sie bleiben unverheiratet.›" }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Familienfotos", ar: "صور العائلة",
        scene: "زميلتك في الدورة ترى صورة عائلتك على هاتفك وتسأل عنها.",
        who: { A: "Anna" },
        lines: [
          { s: "A", de: "Oh, ein Familienfoto! Wer ist das?", ar: "آه، صورة عائلية! من هذا؟" },
          { s: "U", task: "قل: هذا أبي. اسمه أحمد.", m: "Das ist mein Vater. Er heißt Ahmed.", ok: ["Das ist mein Vater er heißt *", "Das ist mein Vater sein Name ist *", "Das ist mein Vater *"], o: ["Das ist mein Vater. Er heißt Ahmed.", "Das ist meine Vater. Sie heißt Ahmed.", "Das ist mein Vater. Sein heißt Ahmed."], why: ["", "‹der Vater› مذكر → ‹mein›، وضميره ‹er›.", "بعد ‹Vater› نستعمل الضمير ‹er› مع الفعل: ‹Er heißt›."], ar: "هذا أبي. اسمه أحمد." },
          { s: "A", de: "Und die Frau hier? Ist das deine Mutter?", ar: "والمرأة هنا؟ هل هذه أمك؟" },
          { s: "U", task: "قل: نعم، هذه أمي. هي معلّمة.", m: "Ja, das ist meine Mutter. Sie ist Lehrerin.", ok: ["Ja das ist meine Mutter sie ist *", "Ja das ist meine Mutter"], o: ["Ja, das ist meine Mutter. Sie ist Lehrerin.", "Ja, das ist mein Mutter. Sie ist eine Lehrerin.", "Ja, das ist meine Mutter. Er ist Lehrerin."], why: ["", "‹die Mutter› → ‹meine›، والمهنة بلا أداة.", "للمرأة الضمير ‹sie›."], ar: "نعم، هذه أمي. هي معلّمة." },
          { s: "A", de: "Hast du Geschwister?", ar: "هل عندك إخوة؟" },
          { s: "U", task: "قل: نعم، عندي أخ وأختان.", m: "Ja, ich habe einen Bruder und zwei Schwestern.", ok: ["Ja ich habe einen Bruder und zwei Schwestern", "Ja einen Bruder und zwei Schwestern", "Ich habe einen Bruder und zwei Schwestern"], o: ["Ja, ich habe einen Bruder und zwei Schwestern.", "Ja, ich habe ein Bruder und zwei Schwester.", "Ja, ich bin einen Bruder und zwei Schwestern."], why: ["", "‹haben› + Akkusativ: ‹einen Bruder›، والجمع ‹Schwestern›.", "نستعمل ‹haben› وليس ‹sein›."], ar: "نعم، عندي أخ وأختان." },
          { s: "A", de: "Sind deine Schwestern verheiratet?", ar: "هل أختاك متزوجتان؟" },
          { s: "U", task: "قل: أختي سلمى متزوجة، لكن أختي نورا عزباء.", m: "Meine Schwester Salma ist verheiratet, aber meine Schwester Nora ist ledig.", ok: ["Meine Schwester * ist verheiratet aber meine Schwester * ist ledig", "* ist verheiratet aber * ist ledig"], o: ["Meine Schwester Salma ist verheiratet, aber meine Schwester Nora ist ledig.", "Meine Schwester Salma ist verheiratet, aber ist meine Schwester Nora ledig.", "Mein Schwester Salma ist verheiratet, oder Nora ist ledig."], why: ["", "بعد ‹aber› لا يتغيّر الترتيب: الفاعل ثم الفعل.", "‹meine Schwester›، والمعنى تعارض → ‹aber›."], ar: "أختي سلمى متزوّجة، لكن أختي نورا عزباء." }
        ]
      },
      listen: [
        { t: "listen", say: "Jan hat zwei Geschwister: einen Bruder und eine Schwester.", q: "كم أخًا وأختًا لجان؟", o: ["أخ وأخت", "أخوان", "أختان"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Opa Klaus und seine Frau leben in Österreich.", q: "أين يعيش الجد كلاوس؟", o: ["في النمسا", "في سويسرا", "في ألمانيا"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Meine Eltern sind geschieden. Mein Vater lebt in Berlin.", q: "ما وضع والديه؟", o: ["مطلّقان", "متزوجان", "أعزبان"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Das ist meine Schwester.", tag: "hoeren" },
        { t: "dict", say: "Wie heißt dein Bruder?", tag: "hoeren" }
      ]
    },

    /* ───────────── 2C ───────────── */
    {
      id: "2C", de: "Wir gehen essen", ar: "نذهب لتناول الطعام",
      summary: "أيام الأسبوع، الساعة الرسمية، قائمة الطعام، الطلب والدفع في المطعم، nehmen و essen، möchte.",
      grammar: [
        {
          h: "أيام الأسبوع و‹am›",
          p: "كل أيام الأسبوع مذكرة. للسؤال «متى؟» نقول ‹am› + اليوم: ‹am Montag› (يوم الاثنين).",
          table: { head: ["الألمانية", "العربية"], rows: [["‹der Montag›", "الاثنين"], ["‹der Dienstag›", "الثلاثاء"], ["‹der Mittwoch›", "الأربعاء"], ["‹der Donnerstag›", "الخميس"], ["‹der Freitag›", "الجمعة"], ["‹der Samstag / Sonnabend›", "السبت"], ["‹der Sonntag›", "الأحد"]] },
          tip: "‹das Wochenende› = عطلة نهاية الأسبوع (السبت والأحد في ألمانيا)."
        },
        {
          h: "الساعة الرسمية",
          p: "في المواعيد الرسمية (القطارات، المطاعم، العمل) نقرأ الساعة بنظام 24 ساعة: الساعة + ‹Uhr› + الدقائق.",
          table: { head: ["الكتابة", "القراءة"], rows: [["18.00 Uhr", "‹achtzehn Uhr›"], ["18.30 Uhr", "‹achtzehn Uhr dreißig›"], ["11.15 Uhr", "‹elf Uhr fünfzehn›"], ["0.45 Uhr", "‹null Uhr fünfundvierzig›"]] },
          ex: [["Um wie viel Uhr? – Um 19 Uhr.", "في أي ساعة؟ – في السابعة مساءً."], ["Das Restaurant ist von 11.30 bis 14.30 Uhr geöffnet.", "المطعم مفتوح من 11:30 إلى 14:30."]]
        },
        {
          h: "nehmen و essen: أفعال يتغيّر فيها حرف العلة",
          table: {
            head: ["", "‹nehmen› (يأخذ)", "‹essen› (يأكل)", "‹trinken› (يشرب)"],
            rows: [
              ["‹ich›", "‹nehme›", "‹esse›", "‹trinke›"],
              ["‹du›", "‹n**i**mmst›", "‹**i**sst›", "‹trinkst›"],
              ["‹er / sie / es›", "‹n**i**mmt›", "‹**i**sst›", "‹trinkt›"],
              ["‹wir / sie / Sie›", "‹nehmen›", "‹essen›", "‹trinken›"]
            ]
          },
          tip: "في المطعم: ‹Ich nehme …› = سآخذ … (مع Akkusativ): ‹Ich nehme einen Salat und ein Wasser.›"
        },
        {
          h: "möchte — أريد (بأدب)",
          p: "‹möchte› تعبّر عن رغبة مهذبة. يمكن أن تأتي مع اسم (Akkusativ) أو مع فعل في المصدر يقف في **آخر الجملة**.",
          table: { head: ["", "‹möchte›"], rows: [["‹ich›", "‹möchte›"], ["‹du›", "‹möchtest›"], ["‹er / sie›", "‹möchte›"], ["‹wir›", "‹möchten›"], ["‹ihr›", "‹möchtet›"], ["‹sie / Sie›", "‹möchten›"]] },
          ex: [["Ich möchte ein Bier.", "أريد بيرة. (مع اسم)"], ["Wir möchten bitte bezahlen.", "نريد أن ندفع من فضلك. (مع فعل في الآخر)"]]
        },
        {
          h: "موقع الفاعل",
          p: "الفعل ثانيًا دائمًا، أما الفاعل فيمكن أن يأتي أولًا أو بعد الفعل مباشرة: ‹Das Topkapı ist am Montag geschlossen.› = ‹Am Montag ist das Topkapı geschlossen.› نوّع في كتابتك بين الطريقتين."
        }
      ],
      vocab: [
        ["n", "das", "Restaurant", "-s", "المطعم", "Wir gehen ins Restaurant.", "نذهب إلى المطعم."],
        ["n", "der", "Gast", "¨-e", "الضيف / الزبون", "Die Gäste möchten bestellen.", "الزبائن يريدون الطلب."],
        ["n", "der", "Kellner", "-", "النادل", "Der Kellner bringt die Speisekarte.", "النادل يحضر قائمة الطعام."],
        ["n", "die", "Kellnerin", "-nen", "النادلة", "Die Kellnerin ist freundlich.", "النادلة لطيفة."],
        ["n", "die", "Speisekarte", "-n", "قائمة الطعام", "Die Speisekarte, bitte!", "القائمة من فضلك!"],
        ["n", "das", "Gericht", "-e", "الطبق", "Wir haben auch vegane Gerichte.", "عندنا أيضًا أطباق نباتية."],
        ["n", "die", "Vorspeise", "-n", "المقبّلات", "Als Vorspeise nehme ich eine Suppe.", "كمقبّلات آخذ شوربة."],
        ["n", "die", "Hauptspeise", "-n", "الطبق الرئيسي", "Was ist die Hauptspeise?", "ما هو الطبق الرئيسي؟"],
        ["n", "das", "Dessert", "-s", "الحلوى", "Zum Dessert möchte ich ein Eis.", "للحلوى أريد مثلجات."],
        ["n", "die", "Suppe", "-n", "الشوربة", "Mittwoch ist Suppentag.", "الأربعاء يوم الشوربة."],
        ["n", "der", "Salat", "-e", "السلطة", "Ich nehme einen Salat.", "آخذ سلطة."],
        ["n", "das", "Schnitzel", "-", "الشنيتسل (شريحة لحم مقلية)", "Ein Wiener Schnitzel, bitte.", "شنيتسل فييني من فضلك."],
        ["n", "der", "Fisch", "-e", "السمك", "Freitag gibt es frischen Fisch.", "الجمعة يوجد سمك طازج."],
        ["n", "das", "Fleisch", "Sg.", "اللحم", "Ich esse kein Fleisch.", "لا آكل اللحم."],
        ["n", "die", "Kartoffel", "-n", "البطاطس", "Das Schnitzel mit Kartoffeln.", "الشنيتسل مع البطاطس."],
        ["n", "die", "Pommes frites", "Pl.", "البطاطس المقلية", "Pommes frites mit Salat.", "بطاطس مقلية مع سلطة."],
        ["n", "das", "Eis", "Sg.", "المثلجات (الآيس كريم)", "Eis mit Sahne, bitte.", "مثلجات بالقشدة من فضلك."],
        ["n", "die", "Sahne", "Sg.", "القشدة", "Ohne Sahne, bitte.", "بدون قشدة من فضلك."],
        ["n", "das", "Wasser", "Sg.", "الماء", "Ein Wasser, bitte.", "ماء من فضلك."],
        ["n", "das", "Mineralwasser", "Sg.", "الماء المعدني", "Mit oder ohne Kohlensäure?", "مع غاز أم بدون؟"],
        ["n", "die", "Kohlensäure", "Sg.", "الغاز (في المشروب)", "Mineralwasser ohne Kohlensäure.", "ماء معدني بدون غاز."],
        ["n", "die", "Cola", "Sg.", "الكولا", "Ich trinke eine Cola.", "أشرب كولا."],
        ["n", "die", "Limonade", "-n", "الليموناضة / المشروب الغازي", "Eine Limonade, bitte.", "ليموناضة من فضلك."],
        ["n", "der", "Saft", "¨-e", "العصير", "Einen Orangensaft, bitte.", "عصير برتقال من فضلك."],
        ["n", "der", "Tee", "-s", "الشاي", "Ich trinke gern Tee.", "أحب شرب الشاي."],
        ["n", "der", "Kaffee", "-s", "القهوة", "Einen Kaffee, bitte.", "قهوة من فضلك."],
        ["n", "das", "Trinkgeld", "Sg.", "البقشيش", "Der Kellner bekommt Trinkgeld.", "النادل يحصل على بقشيش."],
        ["n", "der", "Wochentag", "-e", "يوم الأسبوع", "Die Woche hat sieben Wochentage.", "الأسبوع فيه سبعة أيام."],
        ["n", "das", "Wochenende", "-n", "عطلة نهاية الأسبوع", "Am Wochenende ist das Café geöffnet.", "في عطلة نهاية الأسبوع المقهى مفتوح."],
        ["n", "der", "Ruhetag", "-e", "يوم الراحة (إغلاق)", "Donnerstag ist Ruhetag.", "الخميس يوم إغلاق."],
        ["n", "der", "Montag", "-e", "الاثنين", "Am Montag ist das Restaurant geschlossen.", "يوم الاثنين المطعم مغلق."],
        ["n", "der", "Dienstag", "-e", "الثلاثاء", "Am Dienstag gehen wir essen.", "يوم الثلاثاء نذهب لنأكل."],
        ["n", "der", "Mittwoch", "-e", "الأربعاء", "Mittwoch ist Suppentag.", "الأربعاء يوم الشوربة."],
        ["n", "der", "Donnerstag", "-e", "الخميس", "Am Donnerstag habe ich Zeit.", "يوم الخميس عندي وقت."],
        ["n", "der", "Freitag", "-e", "الجمعة", "Am Freitag gibt es Fisch.", "يوم الجمعة يوجد سمك."],
        ["n", "der", "Samstag", "-e", "السبت", "Am Samstag schlafe ich lange.", "يوم السبت أنام طويلًا."],
        ["n", "der", "Sonntag", "-e", "الأحد", "Am Sonntag gibt es Brunch.", "يوم الأحد يوجد فطور متأخر."],
        ["v", "", "bestellen", "", "يطلب", "Wir möchten bestellen.", "نريد أن نطلب."],
        ["v", "", "bezahlen", "", "يدفع (الحساب)", "Wir möchten bitte bezahlen.", "نريد أن ندفع من فضلك."],
        ["v", "", "kosten", "", "يكلّف", "Was kostet das Schnitzel?", "كم ثمن الشنيتسل؟"],
        ["v", "", "nehmen", "du nimmst, er nimmt", "يأخذ", "Was nimmst du?", "ماذا ستأخذ؟"],
        ["v", "", "essen", "du isst, er isst", "يأكل", "Was isst du gern?", "ماذا تحب أن تأكل؟"],
        ["v", "", "trinken", "", "يشرب", "Was möchten Sie trinken?", "ماذا تريد أن تشرب؟"],
        ["v", "", "möchten", "ich möchte, du möchtest", "يرغب / يريد (بأدب)", "Ich möchte ein Wasser.", "أريد ماءً."],
        ["v", "", "bekommen", "", "يحصل على / يأخذ", "Was bekommen Sie?", "ماذا تطلب؟"],
        ["v", "", "öffnen", "", "يفتح", "Das Café öffnet um acht.", "يفتح المقهى في الثامنة."],
        ["v", "", "schließen", "", "يغلق", "Wir schließen um 22 Uhr.", "نغلق في العاشرة ليلًا."],
        ["a", "", "geöffnet", "", "مفتوح", "Das Restaurant ist heute geöffnet.", "المطعم مفتوح اليوم."],
        ["a", "", "geschlossen", "", "مغلق", "Am Montag ist es geschlossen.", "يوم الاثنين هو مغلق."],
        ["a", "", "vegetarisch", "", "نباتي", "Ich esse vegetarisch.", "آكل طعامًا نباتيًا."],
        ["a", "", "zusammen", "", "معًا (الحساب)", "Zusammen oder getrennt?", "معًا أم كلٌّ على حدة؟"],
        ["a", "", "getrennt", "", "منفصل (كل واحد يدفع)", "Getrennt, bitte.", "كلٌّ على حدة من فضلك."],
        ["p", "", "mit", "", "مع / بـ", "Schnitzel mit Salat.", "شنيتسل مع سلطة."],
        ["p", "", "ohne", "", "بدون", "Eis ohne Sahne.", "مثلجات بدون قشدة."],
        ["p", "", "um", "", "في (الساعة)", "Um 19 Uhr.", "في الساعة 19."]
      ],
      phrases: [
        ["Wir möchten gerne bestellen.", "نود أن نطلب."],
        ["Ja gern. Was bekommen Sie?", "بكل سرور. ماذا تطلب؟"],
        ["Ich nehme ein Wiener Schnitzel und ein Mineralwasser.", "سآخذ شنيتسل فييني وماءً معدنيًا."],
        ["Das Mineralwasser mit oder ohne Kohlensäure?", "الماء المعدني مع غاز أم بدون؟"],
        ["Ich möchte das Schnitzel nur mit Salat. Geht das?", "أريد الشنيتسل مع السلطة فقط. هل هذا ممكن؟"],
        ["Wir möchten bitte zahlen.", "نريد أن ندفع من فضلك."],
        ["Zusammen oder getrennt? – Zusammen, bitte.", "معًا أم كلٌّ على حدة؟ – معًا من فضلك."],
        ["Das macht 38 Euro 50. – 40, bitte. Stimmt so.", "المجموع 38.50 يورو. – تفضل 40، احتفظ بالباقي."]
      ],
      ex: [
        { t: "mc", q: "ما هو الوقت ‹achtzehn Uhr dreißig›؟", o: ["18:30", "18:13", "8:30"], a: 0, why: "18 ‹achtzehn› + 30 ‹dreißig›.", tag: "uhrzeit" },
        { t: "gap", q: "اكتب الوقت بالحروف (رسمي).", s: "19.15 Uhr = neunzehn Uhr ___", a: ["fünfzehn"], why: "الدقائق تأتي بعد ‹Uhr›: ‹neunzehn Uhr fünfzehn›.", tag: "uhrzeit" },
        { t: "mc", q: "اختر الحرف المناسب.", s: "___ Montag ist das Restaurant geschlossen.", o: ["Am", "Um", "Im"], a: 0, why: "مع الأيام: ‹am Montag›. ‹um› للساعة.", tag: "uhrzeit" },
        { t: "mc", q: "اختر الحرف المناسب.", s: "Wir gehen ___ 19 Uhr essen.", o: ["um", "am", "im"], a: 0, why: "مع الساعة: ‹um 19 Uhr›.", tag: "uhrzeit" },
        { t: "gap", q: "صرّف الفعل nehmen.", s: "Was ___ du? – Ich nehme einen Salat.", a: ["nimmst"], why: "‹nehmen› يتغيّر مع du: ‹du nimmst›.", tag: "vokalwechsel", wrong: { "nehmst": "‹nehmen› فعل شاذ: ‹du nimmst, er nimmt›." } },
        { t: "gap", q: "صرّف الفعل essen.", s: "Felix ___ gern Pommes frites.", a: ["isst"], why: "‹er isst› (e → i).", tag: "vokalwechsel" },
        { t: "gap", q: "أكمل بصيغة möchte.", s: "Was ___ Sie trinken?", a: ["möchten"], why: "‹Sie möchten›، والفعل ‹trinken› في آخر الجملة.", tag: "modal" },
        { t: "gap", q: "أكمل بأداة النكرة (Akkusativ).", s: "Ich nehme ___ Salat und ___ Mineralwasser. (der Salat, das Wasser)", a: ["einen", "ein"], why: "‹der Salat› → ‹einen›؛ ‹das Mineralwasser› → ‹ein›.", tag: "akkusativ" },
        { t: "order", q: "رتّب الجملة.", a: "Wir möchten bitte bezahlen.", why: "‹möchten› في المكان 2، والمصدر ‹bezahlen› في آخر الجملة.", tag: "modal" },
        { t: "order", q: "رتّب الجملة (ابدأ بـ «Am Sonntag»).", a: "Am Sonntag ist das Restaurant geöffnet.", why: "الفعل ثانيًا، والفاعل بعده مباشرة.", tag: "wortstellung" },
        { t: "mc", q: "من يقول ‹Was bekommen Sie?›؟", o: ["النادل", "الزبون"], a: 0, why: "النادل يسأل الزبون عن طلبه.", tag: "wortschatz" },
        { t: "mc", q: "النادل يسأل ‹Zusammen oder getrennt?› ماذا يقصد؟", o: ["هل تدفعون معًا أم كل واحد وحده؟", "هل تجلسون معًا؟", "هل تريد الماء مع غاز؟"], a: 0, why: "هذا سؤال عن طريقة الدفع.", tag: "wortschatz" },
        { t: "match", q: "صِل اليوم بترجمته.", pairs: [["Dienstag", "الثلاثاء"], ["Donnerstag", "الخميس"], ["Mittwoch", "الأربعاء"], ["Samstag", "السبت"], ["Sonntag", "الأحد"]], tag: "wortschatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أريد الشنيتسل بدون بطاطس.", a: ["Ich möchte das Schnitzel ohne Kartoffeln.", "Ich möchte ein Schnitzel ohne Kartoffeln.", "Ich möchte das Schnitzel ohne Pommes frites."], tag: "modal" },
        { t: "read", title: "Restaurant Topkapı", text: "Restaurant Topkapı – die Adresse für Kebab und Köfte! Öffnungszeiten: Dienstag bis Freitag 11.30–14.30 Uhr und 17.30–23.00 Uhr, Samstag und Sonntag 17.30–24.00 Uhr. Am Montag ist unser Restaurant geschlossen.", tr: "مطعم توبكابي – عنوان الكباب والكفتة! أوقات العمل: من الثلاثاء إلى الجمعة 11:30–14:30 و17:30–23:00، السبت والأحد 17:30–24:00. يوم الاثنين مطعمنا مغلق.", items: [
          { t: "tf", s: "Am Montag ist das Topkapı geöffnet.", a: false, why: "‹Am Montag ist unser Restaurant geschlossen.›" },
          { t: "tf", s: "Am Samstag kann man um 13 Uhr dort essen.", a: false, why: "السبت يفتح من 17:30 فقط." },
          { t: "tf", s: "Am Mittwoch um 12 Uhr ist das Restaurant geöffnet.", a: true, why: "من الثلاثاء إلى الجمعة 11:30–14:30." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Im Restaurant", ar: "في المطعم",
        scene: "أنت في مطعم نمساوي مع صديقك. النادل جاء ليأخذ طلبكما.",
        who: { A: "Kellner" },
        lines: [
          { s: "A", de: "Guten Abend! Was möchten Sie trinken?", ar: "مساء الخير! ماذا تريدون أن تشربوا؟" },
          { s: "U", task: "اطلب ماءً معدنيًا بدون غاز.", m: "Ich möchte ein Mineralwasser ohne Kohlensäure, bitte.", ok: ["Ich möchte ein Mineralwasser ohne Kohlensäure *", "Ich nehme ein Mineralwasser ohne Kohlensäure *", "Ein Mineralwasser ohne Kohlensäure bitte", "Ich hätte gern ein Mineralwasser ohne Kohlensäure"], o: ["Ich möchte ein Mineralwasser ohne Kohlensäure, bitte.", "Ich möchte einen Mineralwasser ohne Kohlensäure.", "Ich möchtest ein Mineralwasser mit Kohlensäure."], why: ["", "‹das Mineralwasser› محايد → ‹ein›.", "مع ‹ich›: ‹möchte›، والمطلوب ‹ohne› (بدون)."], ar: "أريد ماءً معدنيًا بدون غاز من فضلك." },
          { s: "A", de: "Gern. Und was möchten Sie essen?", ar: "بكل سرور. وماذا تريدون أن تأكلوا؟" },
          { s: "U", task: "اطلب شنيتسل فييني مع سلطة، لكن بدون بطاطس. واسأل: هل هذا ممكن؟", m: "Ich nehme ein Wiener Schnitzel mit Salat, aber ohne Kartoffeln. Geht das?", ok: ["Ich nehme ein * Schnitzel mit Salat aber ohne Kartoffeln geht das", "Ich möchte ein * Schnitzel mit Salat ohne Kartoffeln geht das", "Ich nehme ein Schnitzel mit Salat ohne Kartoffeln geht das", "Ein Schnitzel mit Salat aber ohne Kartoffeln geht das"], o: ["Ich nehme ein Wiener Schnitzel mit Salat, aber ohne Kartoffeln. Geht das?", "Ich nimmst ein Wiener Schnitzel ohne Salat.", "Ich nehme einen Wiener Schnitzel mit Kartoffeln."], why: ["", "مع ‹ich›: ‹nehme›، والمطلوب مع السلطة.", "‹das Schnitzel› محايد → ‹ein›."], ar: "سآخذ شنيتسل فييني مع سلطة لكن بدون بطاطس. هل هذا ممكن؟" },
          { s: "A", de: "Das geht natürlich. Und Ihr Freund?", ar: "طبعًا ممكن. وصديقك؟" },
          { s: "U", task: "قل: صديقي يأخذ السمك (das Zanderfilet) وكولا.", m: "Mein Freund nimmt das Zanderfilet und eine Cola.", ok: ["Mein Freund nimmt das Zanderfilet und eine Cola", "Er nimmt das Zanderfilet und eine Cola", "Mein Freund nimmt ein Zanderfilet und eine Cola", "Er nimmt ein Zanderfilet und eine Cola"], o: ["Mein Freund nimmt das Zanderfilet und eine Cola.", "Mein Freund nehmt das Zanderfilet und ein Cola.", "Meine Freund nimmt den Zanderfilet."], why: ["", "‹er nimmt›، و‹die Cola› مؤنث → ‹eine›.", "‹der Freund› → ‹mein›، و‹das Zanderfilet› محايد."], ar: "صديقي يأخذ سمك الزاندر وكولا." },
          { s: "A", de: "Sehr gern. … Hat es Ihnen geschmeckt?", ar: "بكل سرور. … هل أعجبكم الطعام؟" },
          { s: "U", task: "قل: نعم، جيد جدًا. نريد أن ندفع من فضلك.", m: "Ja, sehr gut. Wir möchten bitte zahlen.", ok: ["Ja sehr gut wir möchten bitte zahlen", "Ja sehr gut wir möchten bitte bezahlen", "Ja danke wir möchten bitte zahlen", "Ja sehr gut wir möchten zahlen bitte", "Sehr gut wir möchten bezahlen"], o: ["Ja, sehr gut. Wir möchten bitte zahlen.", "Ja, sehr gut. Wir möchten zahlen bitte geben.", "Ja, sehr gut. Wir möchtet bitte zahlen."], why: ["", "جملة غير صحيحة التركيب.", "مع ‹wir›: ‹möchten›."], ar: "نعم، جيد جدًا. نريد أن ندفع من فضلك." },
          { s: "A", de: "Zusammen oder getrennt?", ar: "معًا أم كلٌّ على حدة؟" },
          { s: "U", task: "قل: معًا من فضلك.", m: "Zusammen, bitte.", ok: ["Zusammen bitte", "Zusammen", "Bitte zusammen"], o: ["Zusammen, bitte.", "Getrennt zusammen.", "Mit Kohlensäure, bitte."], why: ["", "اختر واحدًا فقط: معًا.", "هذا جواب عن الماء، لا عن الدفع."], ar: "معًا من فضلك." },
          { s: "A", de: "Das macht 38 Euro 50.", ar: "المجموع 38.50 يورو." },
          { s: "U", task: "أعطِ 40 يورو وقل: احتفظ بالباقي (Stimmt so).", m: "40 Euro, bitte. Stimmt so.", ok: ["40 Euro bitte stimmt so", "Vierzig Euro bitte stimmt so", "Hier sind 40 Euro stimmt so", "40 stimmt so", "Vierzig stimmt so"], o: ["40 Euro, bitte. Stimmt so.", "Das macht 40 Euro.", "38 Euro, bitte. Stimmt so."], why: ["", "هذه جملة النادل.", "38 أقل من المبلغ!"], ar: "تفضل 40 يورو، احتفظ بالباقي." }
        ]
      },
      listen: [
        { t: "listen", say: "Am Dienstag um achtzehn Uhr dreißig gehen wir türkisch essen.", q: "متى يذهبون للأكل؟", o: ["الثلاثاء 18:30", "الخميس 18:00", "الاثنين 19:00"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich nehme eine Kartoffelsuppe und ein Mineralwasser mit Kohlensäure.", q: "ماذا يطلب؟", o: ["شوربة بطاطس وماء بغاز", "سلطة وماء بدون غاز", "شنيتسل وكولا"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Das macht zusammen achtunddreißig Euro fünfzig.", q: "كم المجموع؟", o: ["38,50 €", "83,50 €", "28,50 €"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Donnerstag ist Ruhetag.", q: "ماذا يعني ذلك؟", o: ["الخميس المطعم مغلق", "الخميس يوجد سمك", "الخميس الدخول مجاني"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Wir möchten bitte zahlen.", tag: "hoeren" },
        { t: "dict", say: "Was nimmst du?", tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "sch – sp – st", ar: "نطق sch و sp و st",
    body: [
      { p: "‹sch› يُنطق دائمًا «ش»: ‹Schokolade, Fisch›." },
      { p: "‹sp› و‹st› في **بداية الكلمة أو بداية المقطع** يُنطقان «شپ» و«شت»: ‹Speisekarte = شپايزه…›، ‹Strudel›، ‹bestellen = بِه‑شتلن›، ‹Vorspeise›." },
      { p: "في غير ذلك (وسط المقطع أو آخر الكلمة، أو عند الحد بين كلمتين مركّبتين) يُنطقان «سپ» و«ست»: ‹Gast، Wurst، köstlich، Restaurant، Espresso، Eis‑packung›." },
      { table: { head: ["الكتابة", "النطق", "أمثلة"], rows: [
        ["‹sch›", "[ʃ] ش", "‹Schwester, Fisch, schreiben›"],
        ["‹sp› / ‹st› في البداية", "[ʃp] / [ʃt]", "‹sprechen, Spanien, studieren, Straße›"],
        ["‹st› آخر الكلمة", "[st]", "‹Gast, Dienstag, du bist›"]
      ] } },
      { tip: "للعرب: صوت ‹p› غير موجود في العربية. ضع شفتيك كأنك تنطق «ب» لكن بدون اهتزاز الحنجرة ومع نفخة هواء: ‹p› في ‹Speise› ليست ‹b›." }
    ],
    drills: [
      { t: "listen", say: "Speisekarte", q: "كيف تُنطق ‹sp› هنا؟", o: ["شپ [ʃp]", "سپ [sp]"], a: 0, why: "‹sp› في بداية الكلمة → [ʃp]." },
      { t: "listen", say: "Gast", q: "كيف تُنطق ‹st› هنا؟", o: ["ست [st]", "شت [ʃt]"], a: 0, why: "‹st› في آخر الكلمة → [st]." },
      { t: "listen", say: "bestellen", q: "كيف تُنطق ‹st› هنا؟", o: ["شت [ʃt]", "ست [st]"], a: 0, why: "‹st› في بداية المقطع ‹stel› → [ʃt]." },
      { t: "listen", say: "Restaurant", q: "كيف تُنطق ‹st› هنا؟", o: ["ست [st]", "شت [ʃt]"], a: 0, why: "كلمة أجنبية والحد بين المقطعين Res‑tau → [st]." },
      { t: "listen", say: "Studentin", q: "كيف تُنطق ‹st› هنا؟", o: ["شت [ʃt]", "ست [st]"], a: 0, why: "بداية الكلمة → [ʃt]." }
    ],
    say: ["Schokolade", "Speisekarte", "Strudel", "bestellen", "Vorspeise", "Flasche", "Restaurant", "Gast", "Wurst", "Espresso", "Die Studentin spricht Spanisch.", "Am Samstag bestellen wir Fisch."]
  },

  write: [
    {
      ar: "اكتب 5–6 جمل عن عائلتك: من هم؟ ما أسماؤهم؟ كم أعمارهم؟ ماذا يعملون؟ استعمل mein/meine و aber/und.",
      de: "Schreiben Sie über Ihre Familie.",
      model: "Meine Familie ist groß. Mein Vater heißt Ahmed und ist 58 Jahre alt. Er arbeitet als Lehrer. Meine Mutter heißt Aicha. Ich habe einen Bruder und zwei Schwestern. Mein Bruder ist verheiratet, aber meine Schwestern sind ledig.",
      check: ["أدوات الملكية: mein Vater / meine Mutter / meine Geschwister", "‹haben› + Akkusativ: ‹einen Bruder›", "العمر: ‹… ist … Jahre alt›", "جملة واحدة على الأقل بـ ‹aber› و‹und›"]
    },
    {
      ar: "اكتب رسالة قصيرة لصديق تقترح فيها الذهاب إلى مطعم: اليوم، الساعة، أي مطعم.",
      de: "Schreiben Sie eine Nachricht: Restaurant, Tag, Uhrzeit.",
      model: "Hallo Felix, wir gehen am Dienstag essen. Das Restaurant Topkapı ist am Dienstag geöffnet. Wir treffen uns um 18.30 Uhr. Kommst du auch? Viele Grüße, Jan",
      check: ["‹am› + اليوم", "‹um› + الساعة", "سؤال واحد على الأقل", "تحية في البداية والنهاية"]
    }
  ],
  tutor: [
    { title: "Im Restaurant", ar: "في المطعم", role: "ein Kellner in einem österreichischen Restaurant (Brunnenstüberl)", goal: "Getränke und Essen bestellen, Sonderwünsche (mit/ohne), am Ende bezahlen (zusammen/getrennt)", start: "Guten Abend! Was möchten Sie trinken?" },
    { title: "Meine Familie", ar: "عائلتي", role: "eine neugierige Kursteilnehmerin namens Anna", goal: "über die Familie sprechen: Eltern, Geschwister, Alter, Beruf, verheiratet/ledig (du-Form, Possessivartikel)", start: "Oh, ist das ein Foto von deiner Familie? Wer ist das?" }
  ]
});

/* Lektion 3 — Studentenleben */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 3,
  de: "Studentenleben",
  ar: "حياة الطلاب",
  book: "Kursbuch S. 26–33 · Übungsbuch S. 92–99",
  goals: [
    "قول الساعة بالطريقة غير الرسمية وأوقات اليوم",
    "تحديد موعد: السؤال عن الوقت المتاح والرد",
    "النفي بـ nicht و kein",
    "الشراء في السوبرماركت: الكميات والتعبئة والأسعار",
    "ضمائر المفعول به (mich, dich, ihn …)، الطقس، والماضي war"
  ],
  units: [
    /* ───────────── 3A ───────────── */
    {
      id: "3A", de: "Uni und Termine", ar: "الجامعة والمواعيد",
      summary: "أنشطة الجامعة، أوقات اليوم، الساعة غير الرسمية، تحديد المواعيد، النفي بـ nicht و kein.",
      grammar: [
        {
          h: "الساعة غير الرسمية",
          p: "في الحياة اليومية نقول الساعة بنظام 12 ساعة مع ‹nach› (بعد) و‹vor› (قبل) و‹Viertel› (ربع) و‹halb› (نصف).",
          table: {
            head: ["الساعة", "غير رسمي", "رسمي"],
            rows: [
              ["10:00", "‹zehn (Uhr)›", "‹zehn Uhr›"],
              ["10:05", "‹fünf nach zehn›", "‹zehn Uhr fünf›"],
              ["10:15", "‹Viertel nach zehn›", "‹zehn Uhr fünfzehn›"],
              ["10:30", "‹halb elf› ⚠", "‹zehn Uhr dreißig›"],
              ["10:25", "‹fünf vor halb elf›", "‹zehn Uhr fünfundzwanzig›"],
              ["10:35", "‹fünf nach halb elf›", "‹zehn Uhr fünfunddreißig›"],
              ["10:45", "‹Viertel vor elf›", "‹zehn Uhr fünfundvierzig›"],
              ["10:50", "‹zehn vor elf›", "‹zehn Uhr fünfzig›"]
            ]
          },
          tip: "انتبه للعرب والفرنسيين: ‹halb elf› تعني 10:30 (نصف الطريق نحو الحادية عشرة) وليست 11:30!"
        },
        {
          h: "أوقات اليوم",
          table: {
            head: ["الوقت التقريبي", "متى؟", "دائمًا (كل يوم)"],
            rows: [
              ["5–9", "‹am Morgen›", "‹morgens›"], ["9–11:30", "‹am Vormittag›", "‹vormittags›"], ["11:30–14", "‹am Mittag›", "‹mittags›"],
              ["14–17:30", "‹am Nachmittag›", "‹nachmittags›"], ["17:30–22", "‹am Abend›", "‹abends›"], ["22–5", "‹in der Nacht› ⚠", "‹nachts›"]
            ]
          },
          p: "يمكن دمج اليوم ووقت اليوم: ‹der Montag + der Vormittag = der Montagvormittag› → ‹am Montagvormittag›."
        },
        {
          h: "متى؟ ‹am›، ‹um›، ‹von … bis›",
          list: ["‹am› + يوم / وقت اليوم: ‹am Donnerstag, am Vormittag› (لكن: ‹in der Nacht›)", "‹um› + الساعة: ‹um Viertel nach zehn›", "‹von … bis› + الساعات: ‹von acht bis zehn›"],
          ex: [["Hast du am Montag um Viertel nach zwei Zeit?", "هل لديك وقت يوم الاثنين الساعة الثانية والربع؟"], ["Ja, da habe ich Zeit. / Nein, da habe ich keine Zeit.", "نعم، لدي وقت. / لا، ليس لدي وقت."]]
        },
        {
          h: "النفي: nicht أم kein؟",
          list: [
            "‹kein-› تنفي **اسمًا** نكرة (أو بلا أداة): ‹Ich habe keine Zeit.› ‹Das ist kein Problem.›",
            "‹nicht› تنفي **الجملة كلها أو فعلًا أو صفة**: ‹Am Montag geht es nicht.› ‹Das ist nicht gut.› ‹Ich kann nicht.›",
            "‹nicht› تنفي أيضًا الاسم المعرّف: ‹Das ist nicht mein Buch.›"
          ]
        }
      ],
      vocab: [
        ["n", "die", "Vorlesung", "-en", "المحاضرة", "Ich besuche zwei Vorlesungen.", "أحضر محاضرتين."],
        ["n", "die", "Klausur", "-en", "الامتحان الكتابي", "Morgen schreibe ich eine Klausur.", "غدًا أكتب امتحانًا."],
        ["n", "das", "Referat", "-e", "العرض (البحث الشفهي)", "Ich halte ein Referat.", "أقدّم عرضًا."],
        ["n", "die", "Mensa", "=Mensen", "مطعم الجامعة", "Wir essen in der Mensa.", "نأكل في مطعم الجامعة."],
        ["n", "die", "Sprechstunde", "-n", "الساعة المكتبية للأستاذ", "Ich gehe zur Sprechstunde.", "أذهب إلى ساعة الأستاذ المكتبية."],
        ["n", "die", "Übung", "-en", "الحصة التطبيقية / التمرين", "Am Freitag habe ich Übungen.", "يوم الجمعة عندي حصص تطبيقية."],
        ["n", "das", "Tutorium", "=Tutorien", "حصة دعم (يقودها طالب متقدم)", "Das Tutorium ist am Mittwoch.", "حصة الدعم يوم الأربعاء."],
        ["n", "das", "Semester", "-", "الفصل الدراسي", "Ich bin im ersten Semester.", "أنا في الفصل الأول."],
        ["n", "der", "Termin", "-e", "الموعد", "Ich habe heute einen Termin.", "عندي موعد اليوم."],
        ["n", "der", "Gesprächstermin", "-e", "موعد مقابلة", "Er hat um halb zwei einen Gesprächstermin.", "عنده موعد مقابلة في الواحدة والنصف."],
        ["n", "der", "Terminkalender", "-", "مفكرة المواعيد", "Ich schreibe den Termin in den Terminkalender.", "أكتب الموعد في المفكرة."],
        ["n", "der", "Stundenplan", "¨-e", "جدول الحصص", "Mein Stundenplan ist voll.", "جدول حصصي ممتلئ."],
        ["n", "der", "Kommilitone", "-n", "الزميل في الدراسة", "Ich lerne mit zwei Kommilitonen.", "أدرس مع زميلين."],
        ["n", "die", "Kommilitonin", "-nen", "الزميلة في الدراسة", "Meine Kommilitonin heißt Clara.", "زميلتي اسمها كلارا."],
        ["n", "die", "Zeit", "-en", "الوقت", "Hast du Zeit?", "هل لديك وقت؟"],
        ["n", "die", "Uhr", "-en", "الساعة", "Wie viel Uhr ist es?", "كم الساعة؟"],
        ["n", "die", "Stunde", "-n", "الساعة (مدة)", "Ich lerne eine Stunde Deutsch.", "أتعلّم الألمانية ساعة."],
        ["n", "die", "Minute", "-n", "الدقيقة", "Fünf Minuten, bitte!", "خمس دقائق من فضلك!"],
        ["n", "das", "Viertel", "-", "الربع", "Es ist Viertel nach zwölf.", "الساعة الثانية عشرة والربع."],
        ["n", "die", "Woche", "-n", "الأسبوع", "Was machst du diese Woche?", "ماذا تفعل هذا الأسبوع؟"],
        ["n", "der", "Morgen", "-", "الصباح", "Am Morgen trinke ich Tee.", "في الصباح أشرب الشاي."],
        ["n", "der", "Vormittag", "-e", "الضحى (قبل الظهر)", "Am Vormittag habe ich Zeit.", "قبل الظهر عندي وقت."],
        ["n", "der", "Mittag", "-e", "الظهر", "Am Mittag isst er in der Mensa.", "عند الظهر يأكل في مطعم الجامعة."],
        ["n", "der", "Nachmittag", "-e", "بعد الظهر", "Am Nachmittag jobbt sie.", "بعد الظهر تعمل بدوام جزئي."],
        ["n", "der", "Abend", "-e", "المساء", "Am Abend lerne ich Deutsch.", "في المساء أتعلّم الألمانية."],
        ["n", "die", "Nacht", "¨-e", "الليل", "In der Nacht schlafe ich.", "في الليل أنام."],
        ["v", "", "besuchen", "", "يزور / يحضر (محاضرة)", "Ich besuche eine Vorlesung.", "أحضر محاضرة."],
        ["v", "", "halten", "du hältst, er hält", "يقدّم (عرضًا) / يمسك", "Sie hält ein Referat.", "هي تقدّم عرضًا."],
        ["v", "", "treffen", "du triffst, er trifft", "يلتقي", "Am Wochenende treffe ich Freunde.", "في عطلة الأسبوع ألتقي بأصدقاء."],
        ["v", "", "jobben", "", "يعمل بدوام جزئي (للطلاب)", "Ich jobbe im Supermarkt.", "أعمل بدوام جزئي في السوبرماركت."],
        ["v", "", "passen", "", "يناسب", "Um zehn passt gut.", "الساعة العاشرة تناسب جيدًا."],
        ["x", "", "Das geht.", "", "هذا ممكن / مناسب", "Am Dienstag? – Ja, das geht.", "الثلاثاء؟ – نعم، مناسب."],
        ["x", "", "Das geht nicht.", "", "هذا غير ممكن", "Am Montag geht es nicht.", "يوم الاثنين غير ممكن."],
        ["x", "", "Tut mir leid.", "", "آسف.", "Tut mir leid, da kann ich nicht.", "آسف، لا أستطيع حينها."],
        ["x", "", "Ich habe viel zu tun.", "", "عندي الكثير من العمل.", "Diese Woche habe ich viel zu tun.", "هذا الأسبوع عندي الكثير من العمل."],
        ["a", "", "frei", "", "حرّ / فارغ (غير مشغول)", "Am Freitag habe ich frei.", "يوم الجمعة أنا فارغ."],
        ["a", "", "spät", "", "متأخر", "Wie spät ist es?", "كم الساعة؟"],
        ["a", "", "früh", "", "مبكّر", "Ich stehe früh auf.", "أستيقظ مبكرًا."],
        ["d", "", "nächste Woche", "", "الأسبوع القادم", "Hast du nächste Woche Zeit?", "هل لديك وقت الأسبوع القادم؟"],
        ["q", "", "wann?", "", "متى؟", "Wann hast du Zeit?", "متى لديك وقت؟"],
        ["p", "", "von … bis", "", "من … إلى", "Von acht bis zehn habe ich Vorlesung.", "من الثامنة إلى العاشرة عندي محاضرة."],
        ["p", "", "nicht", "", "لا / ليس (نفي)", "Ich kann nicht.", "لا أستطيع."]
      ],
      phrases: [
        ["Wie spät ist es? / Wie viel Uhr ist es?", "كم الساعة؟"],
        ["Es ist Viertel nach zwölf.", "الساعة الثانية عشرة والربع."],
        ["Hast du am Montag Zeit?", "هل لديك وقت يوم الاثنين؟"],
        ["Ja, da habe ich Zeit. / Nein, da habe ich keine Zeit.", "نعم، لدي وقت. / لا، ليس لدي وقت."],
        ["Tut mir leid. Am Sonntagvormittag kann ich nicht.", "آسف. صباح الأحد لا أستطيع."],
        ["Aber um zehn passt gut, da habe ich frei.", "لكن العاشرة تناسبني، فأنا فارغ."],
        ["Von acht bis zehn schreibe ich eine Klausur.", "من الثامنة إلى العاشرة أكتب امتحانًا."]
      ],
      ex: [
        { t: "mc", q: "ما معنى ‹halb elf›؟", o: ["10:30", "11:30", "11:15"], a: 0, why: "‹halb› + الساعة القادمة: ‹halb elf› = نصف ساعة قبل الحادية عشرة = 10:30.", tag: "uhrzeit" },
        { t: "mc", q: "كيف نقول 9:45 بشكل غير رسمي؟", o: ["Viertel vor zehn", "Viertel nach neun", "halb zehn"], a: 0, why: "ربع ساعة قبل العاشرة: ‹Viertel vor zehn›.", tag: "uhrzeit" },
        { t: "mc", q: "كيف نقول 13:20 بشكل غير رسمي؟", o: ["zwanzig nach eins", "zwanzig vor zwei", "halb zwei"], a: 0, why: "20 دقيقة بعد الواحدة: ‹zwanzig nach eins›.", tag: "uhrzeit" },
        { t: "mc", q: "كيف نقول 14:25 بشكل غير رسمي؟", o: ["fünf vor halb drei", "fünf nach halb drei", "fünf vor halb zwei"], a: 0, why: "14:30 = ‹halb drei›، و14:25 = خمس دقائق قبلها: ‹fünf vor halb drei›.", tag: "uhrzeit" },
        { t: "gap", q: "اكتب الساعة بشكل غير رسمي.", s: "8:15 = Viertel ___ acht", a: ["nach"], why: "بعد الثامنة بربع: ‹Viertel nach acht›.", tag: "uhrzeit" },
        { t: "mc", q: "اختر الصحيح.", s: "___ Nacht schlafe ich.", o: ["In der", "Am", "Um"], a: 0, why: "استثناء: ‹in der Nacht› (وليس am Nacht).", tag: "uhrzeit" },
        { t: "mc", q: "اختر الصحيح.", s: "Ich habe ___ Zeit.", o: ["keine", "nicht", "kein"], a: 0, why: "‹die Zeit› اسم مؤنث بلا أداة → ننفيه بـ ‹keine›.", tag: "negation" },
        { t: "mc", q: "اختر الصحيح.", s: "Am Montag geht es ___.", o: ["nicht", "keine", "kein"], a: 0, why: "ننفي الفعل/الجملة → ‹nicht›.", tag: "negation" },
        { t: "mc", q: "اختر الصحيح.", s: "Das ist ___ gut.", o: ["nicht", "kein", "keine"], a: 0, why: "ننفي صفة (gut) → ‹nicht›.", tag: "negation" },
        { t: "gap", q: "أكمل بـ nicht أو kein-.", s: "Das ist ___ Problem.", a: ["kein"], why: "‹das Problem› اسم محايد نكرة → ‹kein Problem›.", tag: "negation" },
        { t: "gap", q: "أكمل بحرف الجر.", s: "Ich jobbe ___ Freitag ___ 14 ___ 20 Uhr.", a: ["am", "von", "bis"], why: "‹am› + اليوم، ‹von … bis› + الساعات.", tag: "uhrzeit" },
        { t: "order", q: "رتّب السؤال.", a: "Hast du am Mittwochnachmittag Zeit?", why: "سؤال نعم/لا: الفعل أولًا.", tag: "wortstellung" },
        { t: "match", q: "صِل وقت اليوم بالعربية.", pairs: [["am Vormittag", "قبل الظهر"], ["am Nachmittag", "بعد الظهر"], ["am Abend", "في المساء"], ["in der Nacht", "في الليل"], ["am Morgen", "في الصباح"]], tag: "wortschatz" },
        { t: "match", q: "صِل النشاط بمعناه.", pairs: [["eine Vorlesung besuchen", "حضور محاضرة"], ["eine Klausur schreiben", "كتابة امتحان"], ["ein Referat halten", "تقديم عرض"], ["in der Mensa essen", "الأكل في مطعم الجامعة"], ["Freunde treffen", "لقاء الأصدقاء"]], tag: "wortschatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "هل لديك وقت يوم الخميس؟", a: ["Hast du am Donnerstag Zeit?", "Haben Sie am Donnerstag Zeit?"], tag: "uhrzeit" }
      ],
      dialog: {
        title: "Wann hast du Zeit?", ar: "متى لديك وقت؟",
        scene: "زميلك نيلز يريد أن يحضّر معك عرضًا (Referat) هذا الأسبوع. ابحثا عن موعد.",
        who: { A: "Niels" },
        lines: [
          { s: "A", de: "Hallo! Wir müssen noch das Referat machen. Hast du am Montag Zeit?", ar: "مرحبًا! يجب أن نحضّر العرض. هل لديك وقت يوم الاثنين؟" },
          { s: "U", task: "قل: آسف، يوم الاثنين غير ممكن. عندي محاضرتان.", m: "Tut mir leid, am Montag geht es nicht. Ich habe zwei Vorlesungen.", ok: ["Tut mir leid am Montag geht es nicht *", "Tut mir leid am Montag geht nicht *", "Nein am Montag geht es nicht *", "Tut mir leid am Montag kann ich nicht *"], o: ["Tut mir leid, am Montag geht es nicht. Ich habe zwei Vorlesungen.", "Tut mir leid, am Montag geht es kein. Ich habe zwei Vorlesung.", "Tut mir leid, um Montag geht es nicht."], why: ["", "نفي الفعل بـ ‹nicht›، والجمع ‹Vorlesungen›.", "مع الأيام: ‹am Montag›."], ar: "آسف، الاثنين غير ممكن. عندي محاضرتان." },
          { s: "A", de: "Schade. Und am Dienstagvormittag?", ar: "خسارة. وصباح الثلاثاء؟" },
          { s: "U", task: "قل: نعم، صباح الثلاثاء عندي وقت. في أي ساعة؟", m: "Ja, am Dienstagvormittag habe ich Zeit. Um wie viel Uhr?", ok: ["Ja am Dienstagvormittag habe ich Zeit um wie viel Uhr", "Ja da habe ich Zeit um wie viel Uhr", "Ja das geht um wie viel Uhr", "Ja am Dienstag habe ich Zeit um wie viel Uhr", "Ja da habe ich Zeit wann"], o: ["Ja, am Dienstagvormittag habe ich Zeit. Um wie viel Uhr?", "Ja, am Dienstagvormittag ich habe Zeit. Wie viel Uhr?", "Ja, am Dienstagvormittag habe ich keine Zeit."], why: ["", "الفعل ثانيًا: ‹Am Dienstagvormittag habe ich Zeit.›", "أنت تريد أن تقول «عندي وقت»!"], ar: "نعم، صباح الثلاثاء عندي وقت. في أي ساعة؟" },
          { s: "A", de: "Um Viertel nach zehn? Dann können wir in der Bibliothek arbeiten.", ar: "في العاشرة والربع؟ ثم نستطيع العمل في المكتبة." },
          { s: "U", task: "قل: العاشرة والربع تناسبني جيدًا. حتى الساعة الثانية عشرة لدي وقت.", m: "Viertel nach zehn passt gut. Bis zwölf Uhr habe ich Zeit.", ok: ["Viertel nach zehn passt gut *", "Das passt gut bis zwölf habe ich Zeit", "Ja das passt gut *", "Um Viertel nach zehn passt gut *"], o: ["Viertel nach zehn passt gut. Bis zwölf Uhr habe ich Zeit.", "Viertel nach zehn passe gut. Bis zwölf Uhr ich habe Zeit.", "Halb zehn passt gut."], why: ["", "‹das passt› (هو يناسب)، والفعل ثانيًا بعد ‹Bis zwölf Uhr›.", "‹halb zehn› = 9:30 وليس 10:15."], ar: "العاشرة والربع تناسب جيدًا. لدي وقت حتى الثانية عشرة." },
          { s: "A", de: "Super! Dann bis Dienstag!", ar: "ممتاز! إلى الثلاثاء إذن!" },
          { s: "U", task: "ودّعه: إلى الثلاثاء! باي!", m: "Bis Dienstag! Tschüss!", ok: ["Bis Dienstag tschüss", "Bis Dienstag", "Tschüss bis Dienstag", "Bis dann tschüss"], o: ["Bis Dienstag! Tschüss!", "Am Dienstag! Guten Tag!", "Bis Montag! Tschüss!"], why: ["", "‹Guten Tag› للقاء.", "الموعد يوم الثلاثاء وليس الاثنين."], ar: "إلى الثلاثاء! باي!" }
        ]
      },
      listen: [
        { t: "listen", say: "Es ist Viertel vor zehn.", q: "كم الساعة؟", o: ["9:45", "10:15", "9:15"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Um halb zwei hat Professor Jung einen Gesprächstermin.", q: "متى موعد الأستاذ؟", o: ["13:30", "14:30", "12:30"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Am Freitagnachmittag jobbt Franziska im Supermarkt.", q: "متى تعمل فرانتسيسكا؟", o: ["بعد ظهر الجمعة", "صباح الجمعة", "مساء الخميس"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Von drei bis fünf ist der Professor heute im Büro.", q: "متى الأستاذ في المكتب؟", o: ["من 3 إلى 5", "من 3 إلى 6", "من 5 إلى 7"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Hast du nächste Woche Zeit?", tag: "hoeren" },
        { t: "dict", say: "Am Montag geht es nicht.", tag: "hoeren" }
      ]
    },

    /* ───────────── 3B ───────────── */
    {
      id: "3B", de: "Im Supermarkt", ar: "في السوبرماركت",
      summary: "المواد الغذائية، التعبئة والكميات، الأسعار، الحوار عند الطاولة (Theke)، Wie viel? / Wie viele?",
      grammar: [
        {
          h: "الكميات والتعبئة",
          p: "بعد الكمية أو نوع التعبئة يأتي الاسم مباشرة **بدون أداة**: ‹ein Kilo Äpfel, eine Flasche Wasser, 200 Gramm Käse›.",
          table: {
            head: ["التعبئة", "مثال"],
            rows: [
              ["‹{f|die} Flasche›", "‹eine Flasche Wasser› (قنينة ماء)"], ["‹{n|das} Glas›", "‹ein Glas Marmelade› (برطمان مربى)"], ["‹{m|der} Becher›", "‹ein Becher Joghurt› (علبة زبادي)"],
              ["‹{f|die} Packung›", "‹eine Packung Müsli› (علبة موسلي)"], ["‹{n|das} Päckchen›", "‹ein Päckchen Butter› (قالب زبدة)"], ["‹{f|die} Dose›", "‹eine Dose Cola› (علبة كولا)"],
              ["‹{f|die} Tüte›", "‹eine Tüte Chips› (كيس رقائق)"], ["‹{f|die} Tafel›", "‹eine Tafel Schokolade› (لوح شوكولاتة)"], ["‹{n|das} Stück›", "‹ein Stück Käse› (قطعة جبن)"]
            ]
          },
          list: ["الوزن: ‹das Kilo (kg)›، ‹das Gramm (g)›، ‹das Pfund› (= 500 g)، ‹der Liter (l)›.", "وحدات القياس تبقى مفردة بعد الأرقام: ‹zwei Kilo, 500 Gramm, drei Liter›."]
        },
        {
          h: "Wie viel? أم Wie viele؟",
          list: ["‹Wie viel?› للأشياء غير المعدودة (كتلة): ‹Wie viel Käse möchten Sie? – 200 Gramm.› ‹Wie viel kostet das?›", "‹Wie viele?› للأشياء المعدودة (جمع): ‹Wie viele Brötchen möchten Sie? – Sechs Brötchen.›"]
        },
        {
          h: "الأسعار",
          p: "1 يورو = 100 سنت. نقرأ ‹2,49 €› هكذا: ‹zwei Euro neunundvierzig›. في سويسرا: ‹1 Franken = 100 Rappen›.",
          ex: [["Was kostet das? – Das kostet 3,99 Euro.", "كم ثمن هذا؟ – ثمنه 3.99 يورو."], ["Das macht 9 Euro 99.", "المجموع 9.99 يورو."]]
        },
        {
          h: "الكمية غير المحددة: بلا أداة",
          p: "عندما نتكلّم عن مادة بشكل عام (كمية غير محددة) لا نستعمل أداة: ‹Ich kaufe Wasser, Brot und Käse.› (أشتري ماءً وخبزًا وجبنًا)."
        },
        {
          h: "عند الطاولة (Theke): عبارات البائع والزبون",
          table: {
            head: ["البائع/ة", "الزبون/ة"],
            rows: [
              ["‹Was darf es sein?›", "‹Ich hätte gern 500 Gramm Hackfleisch.›"],
              ["‹Wie viel möchten Sie?›", "‹Ich nehme ein Kilo.›"],
              ["‹Wie viele möchten Sie?›", "‹Ich bekomme drei Bratwürstchen.›"],
              ["‹Geschnitten oder am Stück?›", "‹Am Stück, bitte.›"],
              ["‹Darf es sonst noch etwas sein?›", "‹Nein, danke. Das ist alles.›"],
              ["‹Das macht 12,50 Euro.›", "‹Bitte schön.›"]
            ]
          },
          tip: "‹Ich hätte gern …› = «أودّ لو …» — أكثر أدبًا من ‹Ich will›."
        }
      ],
      vocab: [
        ["n", "der", "Supermarkt", "¨-e", "السوبرماركت", "Ich kaufe im Supermarkt ein.", "أتسوق في السوبرماركت."],
        ["n", "das", "Lebensmittel", "-", "المادة الغذائية", "Lebensmittel sind hier billig.", "المواد الغذائية هنا رخيصة."],
        ["n", "der", "Einkaufszettel", "-", "قائمة التسوق", "Schreib einen Einkaufszettel!", "اكتب قائمة تسوق!"],
        ["n", "das", "Angebot", "-e", "العرض (التخفيض)", "Was ist heute im Angebot?", "ما العرض اليوم؟"],
        ["n", "die", "Theke", "-n", "طاولة البيع (الكاونتر)", "An der Käsetheke kaufe ich Gouda.", "عند طاولة الجبن أشتري غودا."],
        ["n", "die", "Bäckerei", "-en", "المخبزة", "Die Bäckerei öffnet um sechs.", "المخبزة تفتح في السادسة."],
        ["n", "der", "Kunde", "-n", "الزبون", "Der Kunde möchte Käse.", "الزبون يريد جبنًا."],
        ["n", "die", "Kundin", "-nen", "الزبونة", "Die Kundin bezahlt.", "الزبونة تدفع."],
        ["n", "der", "Verkäufer", "-", "البائع", "Der Verkäufer ist freundlich.", "البائع لطيف."],
        ["n", "die", "Verkäuferin", "-nen", "البائعة", "Die Verkäuferin fragt: Was darf es sein?", "البائعة تسأل: ماذا تريد؟"],
        ["n", "das", "Obst", "Sg.", "الفواكه", "Obst ist gesund.", "الفواكه صحية."],
        ["n", "das", "Gemüse", "Sg.", "الخضروات", "Ich kaufe frisches Gemüse.", "أشتري خضروات طازجة."],
        ["n", "die", "Banane", "-n", "الموزة", "Ein Kilo Bananen, bitte.", "كيلو موز من فضلك."],
        ["n", "die", "Orange", "-n", "البرتقالة", "Die Orangen kommen aus Marokko.", "البرتقال من المغرب."],
        ["n", "die", "Erdbeere", "-n", "الفراولة", "Erdbeeren sind im Sommer billig.", "الفراولة رخيصة في الصيف."],
        ["n", "die", "Weintraube", "-n", "حبة العنب", "500 Gramm Weintrauben.", "500 غرام عنب."],
        ["n", "die", "Tomate", "-n", "الطماطم", "Ich brauche Tomaten.", "أحتاج طماطم."],
        ["n", "die", "Karotte", "-n", "الجزرة", "Die Karotten sind frisch.", "الجزر طازج."],
        ["n", "die", "Gurke", "-n", "الخيارة", "Eine Gurke kostet 0,59 Euro.", "الخيارة بـ 0.59 يورو."],
        ["n", "die", "Bohne", "-n", "حبة الفاصوليا", "Bohnen sind teuer.", "الفاصوليا غالية."],
        ["n", "das", "Hackfleisch", "Sg.", "اللحم المفروم", "500 Gramm Hackfleisch, bitte.", "500 غرام لحم مفروم من فضلك."],
        ["n", "das", "Rindfleisch", "Sg.", "لحم البقر", "Ich hätte gern Rindfleisch.", "أودّ لحم بقر."],
        ["n", "die", "Wurst", "¨-e", "النقانق / اللحم المصنّع", "Die Wurst ist aus Geflügel.", "النقانق من الدواجن."],
        ["n", "der", "Käse", "-", "الجبن", "Käse ist in Deutschland billig.", "الجبن رخيص في ألمانيا."],
        ["n", "die", "Milch", "Sg.", "الحليب", "Einen Liter Milch, bitte.", "لتر حليب من فضلك."],
        ["n", "die", "Butter", "Sg.", "الزبدة", "Ein Päckchen Butter.", "قالب زبدة."],
        ["n", "der", "Joghurt", "-s", "الزبادي (الياغورت)", "Zwei Becher Joghurt.", "علبتا زبادي."],
        ["n", "das", "Ei", "-er", "البيضة", "Ich brauche sechs Eier.", "أحتاج ست بيضات."],
        ["n", "das", "Brot", "-e", "الخبز", "Ein Vollkornbrot, bitte.", "خبز حبوب كاملة من فضلك."],
        ["n", "das", "Brötchen", "-", "الخبز الصغير (الكعك)", "Sechs Brötchen, bitte.", "ست خبزات صغيرة من فضلك."],
        ["n", "der", "Reis", "Sg.", "الأرز", "Ein Kilo Reis.", "كيلو أرز."],
        ["n", "der", "Zucker", "Sg.", "السكر", "Tee ohne Zucker.", "شاي بدون سكر."],
        ["n", "das", "Salz", "Sg.", "الملح", "Wo ist das Salz?", "أين الملح؟"],
        ["n", "das", "Öl", "-e", "الزيت", "Eine Flasche Olivenöl.", "قنينة زيت زيتون."],
        ["n", "die", "Marmelade", "-n", "المربى", "Ein Glas Marmelade.", "برطمان مربى."],
        ["n", "die", "Schokolade", "-n", "الشوكولاتة", "Eine Tafel Schokolade.", "لوح شوكولاتة."],
        ["n", "das", "Müsli", "-s", "الموسلي (حبوب الفطور)", "Eine Packung Müsli.", "علبة موسلي."],
        ["n", "die", "Flasche", "-n", "القنينة", "Sechs Flaschen Wasser.", "ست قنينات ماء."],
        ["n", "das", "Glas", "¨-er", "البرطمان / الكأس", "Ein Glas Honig.", "برطمان عسل."],
        ["n", "der", "Becher", "-", "العلبة (الكوب)", "Ein Becher Sahne.", "علبة قشدة."],
        ["n", "die", "Packung", "-en", "العلبة (الكرتونة)", "Eine Packung Kaffee.", "علبة قهوة."],
        ["n", "das", "Päckchen", "-", "العلبة الصغيرة", "Ein Päckchen Tee.", "علبة شاي صغيرة."],
        ["n", "die", "Dose", "-n", "العلبة المعدنية", "Eine Dose Cola.", "علبة كولا."],
        ["n", "die", "Tüte", "-n", "الكيس", "Brauchen Sie eine Tüte?", "هل تحتاج كيسًا؟"],
        ["n", "das", "Stück", "-e", "القطعة", "Ein Stück Käse, bitte.", "قطعة جبن من فضلك."],
        ["n", "das", "Kilo", "-s", "الكيلو", "Ein Kilo Äpfel kostet 2,49 €.", "كيلو التفاح بـ 2.49 يورو."],
        ["n", "das", "Gramm", "-", "الغرام", "200 Gramm Käse.", "200 غرام جبن."],
        ["n", "das", "Pfund", "-", "الرطل (500 غرام)", "Ein Pfund Tomaten.", "رطل طماطم."],
        ["n", "der", "Liter", "-", "اللتر", "Zwei Liter Milch.", "لتران من الحليب."],
        ["n", "der", "Euro", "-s", "اليورو", "Das kostet zehn Euro.", "هذا بعشرة يورو."],
        ["n", "der", "Cent", "-s", "السنت", "Ein Euro hat hundert Cent.", "اليورو مئة سنت."],
        ["v", "", "kaufen", "", "يشتري", "Wir kaufen ein Glas Marmelade.", "نشتري برطمان مربى."],
        ["v", "", "einkaufen", "ich kaufe ein", "يتسوّق", "Ich kaufe am Samstag ein.", "أتسوّق يوم السبت."],
        ["a", "", "billig", "", "رخيص", "Die Bananen sind billig.", "الموز رخيص."],
        ["a", "", "teuer", "", "غالٍ", "Bohnen sind teuer.", "الفاصوليا غالية."],
        ["a", "", "frisch", "", "طازج", "Der Fisch ist frisch.", "السمك طازج."],
        ["a", "", "ausverkauft", "", "نفد (بيع كله)", "Die Erdbeeren sind ausverkauft.", "الفراولة نفدت."],
        ["q", "", "wie viel?", "", "كم؟ (غير معدود)", "Wie viel kostet das?", "كم ثمن هذا؟"],
        ["q", "", "wie viele?", "", "كم؟ (معدود)", "Wie viele Brötchen möchten Sie?", "كم خبزة تريد؟"],
        ["x", "", "Ich hätte gern …", "", "أودّ … (طلب مهذب)", "Ich hätte gern 200 Gramm Käse.", "أودّ 200 غرام جبن."],
        ["x", "", "Das ist alles.", "", "هذا كل شيء.", "Danke, das ist alles.", "شكرًا، هذا كل شيء."]
      ],
      phrases: [
        ["Guten Tag. Was darf es sein?", "مرحبًا. ماذا تريد؟"],
        ["Ich hätte gern 500 Gramm Hackfleisch.", "أودّ 500 غرام لحم مفروم."],
        ["Wie viele Bratwürstchen möchten Sie?", "كم نقانق مشوية تريد؟"],
        ["Geschnitten oder am Stück? – Am Stück, bitte.", "مقطّع أم قطعة واحدة؟ – قطعة واحدة من فضلك."],
        ["Darf es sonst noch etwas sein?", "هل تريد شيئًا آخر؟"],
        ["Nein, danke. Das ist alles.", "لا شكرًا. هذا كل شيء."],
        ["Was kostet das? – Das macht 9 Euro 99.", "كم الثمن؟ – المجموع 9.99 يورو."],
        ["Ich finde, Käse ist in Deutschland billig.", "أرى أن الجبن رخيص في ألمانيا."]
      ],
      ex: [
        { t: "mc", q: "اختر التعبئة المناسبة.", s: "eine ___ Wasser", o: ["Flasche", "Tafel", "Becher"], a: 0, why: "الماء في قنينة: ‹eine Flasche Wasser›.", tag: "mengen" },
        { t: "mc", q: "اختر التعبئة المناسبة.", s: "eine ___ Schokolade", o: ["Tafel", "Flasche", "Dose"], a: 0, why: "‹eine Tafel Schokolade› = لوح شوكولاتة.", tag: "mengen" },
        { t: "mc", q: "اختر التعبئة المناسبة.", s: "ein ___ Marmelade", o: ["Glas", "Becher", "Stück"], a: 0, why: "المربى في برطمان: ‹ein Glas Marmelade›.", tag: "mengen" },
        { t: "mc", q: "Wie viel أم Wie viele؟", s: "___ Eier brauchst du?", o: ["Wie viele", "Wie viel"], a: 0, why: "البيض معدود (جمع Eier) → ‹Wie viele›.", tag: "mengen" },
        { t: "mc", q: "Wie viel أم Wie viele؟", s: "___ Käse möchten Sie?", o: ["Wie viel", "Wie viele"], a: 0, why: "الجبن غير معدود هنا → ‹Wie viel›.", tag: "mengen" },
        { t: "mc", q: "Wie viel أم Wie viele؟", s: "___ kostet das?", o: ["Wie viel", "Wie viele"], a: 0, why: "السؤال عن السعر دائمًا ‹Wie viel kostet …?›", tag: "mengen" },
        { t: "gap", q: "اكتب الكمية (بدون أداة بعد الكمية).", s: "Ich kaufe zwei ___ Milch. (Liter)", a: ["Liter"], why: "وحدة القياس تبقى مفردة: ‹zwei Liter Milch›.", tag: "mengen" },
        { t: "mc", q: "كيف نقرأ 2,49 €؟", o: ["zwei Euro neunundvierzig", "zwei Komma vier neun Euro", "zweihundertneunundvierzig Euro"], a: 0, why: "اليورو ثم السنتات: ‹zwei Euro neunundvierzig›.", tag: "zahlen" },
        { t: "mc", q: "البائع يسأل: ‹Geschnitten oder am Stück?› ماذا يقصد؟", o: ["مقطّع شرائح أم قطعة واحدة؟", "كبير أم صغير؟", "طازج أم مجمّد؟"], a: 0, why: "‹geschnitten› = مقطّع، ‹am Stück› = قطعة واحدة.", tag: "wortschatz" },
        { t: "order", q: "رتّب طلبك المهذب.", a: "Ich hätte gern ein Kilo Tomaten.", why: "‹Ich hätte gern› + الكمية + المادة.", tag: "mengen" },
        { t: "match", q: "صِل المادة بالتعبئة المناسبة.", pairs: [["Joghurt", "ein Becher"], ["Butter", "ein Päckchen"], ["Müsli", "eine Packung"], ["Cola", "eine Dose"], ["Käse", "ein Stück"]], tag: "mengen" },
        { t: "match", q: "صِل الطعام بترجمته.", pairs: [["das Brötchen", "الخبز الصغير"], ["die Erdbeere", "الفراولة"], ["das Hackfleisch", "اللحم المفروم"], ["die Gurke", "الخيار"], ["der Käse", "الجبن"]], tag: "wortschatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أودّ 200 غرام جبن من فضلك.", a: ["Ich hätte gern 200 Gramm Käse, bitte.", "Ich hätte gern zweihundert Gramm Käse, bitte.", "Ich hätte gerne 200 Gramm Käse."], tag: "mengen" },
        { t: "read", title: "Franziskas Einkaufszettel", text: "6 Flaschen Wasser, 1 Kilo Äpfel, 500 Gramm Weintrauben, 1 Päckchen Butter, 2 Becher Joghurt, 1 Glas Marmelade, 1 Vollkornbrot. Oma Martha braucht noch 500 Gramm Hackfleisch.", tr: "6 قنينات ماء، 1 كيلو تفاح، 500 غرام عنب، قالب زبدة، علبتا زبادي، برطمان مربى، خبز حبوب كاملة. الجدة مارتا تحتاج أيضًا 500 غرام لحم مفروم.", items: [
          { t: "tf", s: "Franziska kauft ein Kilo Weintrauben.", a: false, why: "500 غرام عنب، وكيلو تفاح." },
          { t: "tf", s: "Sie kauft zwei Becher Joghurt.", a: true, why: "‹2 Becher Joghurt›." },
          { t: "tf", s: "Oma Martha braucht Hackfleisch.", a: true, why: "‹Oma Martha braucht noch 500 Gramm Hackfleisch.›" }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "An der Fleischtheke", ar: "عند طاولة اللحوم",
        scene: "أنت في السوبرماركت عند طاولة اللحوم. تحتاج لحمًا مفرومًا وبعض النقانق من الدواجن.",
        who: { A: "Verkäufer" },
        lines: [
          { s: "A", de: "Guten Tag! Was darf es sein?", ar: "مرحبًا! ماذا تريد؟" },
          { s: "U", task: "اطلب بأدب 500 غرام لحم بقر مفروم.", m: "Guten Tag. Ich hätte gern 500 Gramm Hackfleisch vom Rind.", ok: ["Ich hätte gern 500 Gramm Hackfleisch *", "Ich hätte gerne 500 Gramm Hackfleisch *", "Ich möchte 500 Gramm Hackfleisch *", "Ich nehme 500 Gramm Hackfleisch *", "* hätte gern fünfhundert Gramm Hackfleisch *", "500 Gramm Hackfleisch bitte"], o: ["Guten Tag. Ich hätte gern 500 Gramm Hackfleisch vom Rind.", "Guten Tag. Ich hätte gern 500 Gramms Hackfleisch.", "Guten Tag. Ich habe gern ein Hackfleisch."], why: ["", "‹Gramm› لا يُجمع بعد الرقم.", "‹Ich hätte gern› هي الصيغة المهذبة، والكمية مطلوبة."], ar: "مرحبًا. أودّ 500 غرام لحم بقر مفروم." },
          { s: "A", de: "Gerne. Darf es sonst noch etwas sein?", ar: "بكل سرور. هل تريد شيئًا آخر؟" },
          { s: "U", task: "قل: نعم، أودّ أيضًا 200 غرام نقانق دواجن (Geflügelwurst).", m: "Ja, ich hätte gern noch 200 Gramm Geflügelwurst.", ok: ["Ja ich hätte gern noch 200 Gramm Geflügelwurst", "Ja ich hätte gerne noch 200 Gramm Geflügelwurst", "Ja noch 200 Gramm Geflügelwurst bitte", "Ich hätte gern noch 200 Gramm Geflügelwurst", "Ja ich nehme noch 200 Gramm Geflügelwurst"], o: ["Ja, ich hätte gern noch 200 Gramm Geflügelwurst.", "Ja, ich hätte noch gern eine 200 Gramm Geflügelwurst.", "Nein, danke. Das ist alles."], why: ["", "لا أداة بين الكمية والمادة.", "أنت تريد شيئًا آخر!"], ar: "نعم، أودّ أيضًا 200 غرام نقانق دواجن." },
          { s: "A", de: "Geschnitten oder am Stück?", ar: "مقطّعة أم قطعة واحدة؟" },
          { s: "U", task: "قل: مقطّعة من فضلك.", m: "Geschnitten, bitte.", ok: ["Geschnitten bitte", "Bitte geschnitten", "Geschnitten"], o: ["Geschnitten, bitte.", "Am Stück, geschnitten.", "Ohne Kohlensäure, bitte."], why: ["", "اختر واحدًا فقط.", "هذا للماء!"], ar: "مقطّعة من فضلك." },
          { s: "A", de: "Möchten Sie sonst noch etwas?", ar: "هل تريد شيئًا آخر؟" },
          { s: "U", task: "قل: لا شكرًا، هذا كل شيء. كم الثمن؟", m: "Nein, danke. Das ist alles. Was kostet das?", ok: ["Nein danke das ist alles was kostet das", "Nein danke das ist alles wie viel kostet das", "Nein danke das ist alles", "Das ist alles was kostet das"], o: ["Nein, danke. Das ist alles. Was kostet das?", "Nein, danke. Das ist alle. Wie viele kostet das?", "Ja, bitte. Das ist alles."], why: ["", "‹Das ist alles›، و‹Wie viel / Was kostet das?›", "‹Nein› لأنك لا تريد شيئًا آخر."], ar: "لا شكرًا، هذا كل شيء. كم الثمن؟" },
          { s: "A", de: "Das macht 7 Euro 20.", ar: "المجموع 7.20 يورو." }
        ]
      },
      listen: [
        { t: "listen", say: "Ein Kilo Äpfel kostet heute nur zwei Euro neunundvierzig.", q: "كم ثمن كيلو التفاح؟", o: ["2,49 €", "4,29 €", "2,94 €"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich hätte gern sechs Brötchen und ein Vollkornbrot.", q: "كم خبزة صغيرة يريد؟", o: ["6", "7", "1"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Der Supermarkt schließt um zweiundzwanzig Uhr.", q: "متى يغلق السوبرماركت؟", o: ["22:00", "20:00", "12:00"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Wir kaufen ein Glas Marmelade, einen Liter Milch und eine Packung Müsli.", q: "ماذا لا يشترون؟", o: ["الجبن", "الحليب", "المربى"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Ich hätte gern ein Kilo Tomaten.", tag: "hoeren" },
        { t: "dict", say: "Was darf es sein?", tag: "hoeren" }
      ]
    },

    /* ───────────── 3C ───────────── */
    {
      id: "3C", de: "Endlich Wochenende!", ar: "أخيرًا عطلة نهاية الأسبوع!",
      summary: "رحلة نهاية الأسبوع، المعالم السياحية، ضمائر المفعول به، الطقس، sein في الماضي (war)، كتابة بريد إلكتروني شخصي.",
      grammar: [
        {
          h: "ضمائر المفعول به (Akkusativ)",
          p: "عندما نستبدل مفعولًا به بضمير نستعمل ضمائر الـ Akkusativ:",
          table: {
            head: ["Nominativ", "Akkusativ", "Nominativ", "Akkusativ"],
            rows: [
              ["‹ich›", "‹mich›", "‹wir›", "‹uns›"],
              ["‹du›", "‹dich›", "‹ihr›", "‹euch›"],
              ["‹er›", "‹**ihn**›", "‹sie›", "‹sie›"],
              ["‹es›", "‹es›", "‹Sie›", "‹Sie›"],
              ["‹sie›", "‹sie›", "", ""]
            ]
          },
          ex: [["Mein Bruder arbeitet auf Rügen. Leider sehe ich ihn nur selten.", "أخي يعمل في روغن. للأسف لا أراه إلا نادرًا."], ["Ich höre dich ganz schlecht.", "أسمعك بشكل سيئ جدًا."], ["Ihr besucht mich morgen.", "ستزورونني غدًا."]],
          tip: "فقط ‹er› يتغيّر بشكل كبير: ‹er → ihn›. وتذكّر: ‹den Hafen → ihn›، ‹das Museum → es›، ‹die Insel → sie›."
        },
        {
          h: "الفعل sein في الماضي البسيط (Präteritum)",
          table: { head: ["", "‹sein›", "", "‹sein›"], rows: [["‹ich›", "‹war›", "‹wir›", "‹waren›"], ["‹du›", "‹warst›", "‹ihr›", "‹wart›"], ["‹er / sie / es›", "‹war›", "‹sie / Sie›", "‹waren›"]] },
          ex: [["Am Donnerstag waren wir am Hafen.", "يوم الخميس كنا في الميناء."], ["Leider war das Wetter nicht so gut.", "للأسف لم يكن الطقس جيدًا."]]
        },
        {
          h: "الطقس",
          p: "نستعمل الفاعل الشكلي ‹es› مع أفعال الطقس: ‹Es regnet.› (تمطر) ‹Es schneit.› (تثلج). ومع الصفات: ‹Es ist kalt / warm / windig / sonnig / bewölkt.›",
          ex: [["Wie ist das Wetter? – Die Sonne scheint, es sind 22 Grad.", "كيف الطقس؟ – الشمس مشرقة، الحرارة 22 درجة."]]
        },
        {
          h: "إلى أين؟ ‹Wohin?› + nach",
          p: "مع المدن والجزر والبلدان بدون أداة نقول ‹nach›: ‹Wir fahren nach Rügen / nach Berlin / nach Marokko.› و‹nach Hause› = إلى البيت."
        },
        {
          h: "كم مرة؟ ظروف التكرار",
          p: "‹immer› (دائمًا) ← ‹meistens› (غالبًا) ← ‹oft› (كثيرًا) ← ‹manchmal› (أحيانًا) ← ‹selten› (نادرًا) ← ‹nie› (أبدًا)."
        },
        {
          h: "بريد إلكتروني شخصي",
          list: ["البداية: ‹Liebe Nina,› (لأنثى) / ‹Lieber Tim,› (لذكر) / ‹Hallo …,›", "بعد الفاصلة يبدأ السطر الأول بحرف صغير: ‹hoffentlich bist du wieder gesund.›", "الختام: ‹Viele Grüße› / ‹Liebe Grüße› + اسمك."]
        }
      ],
      vocab: [
        ["n", "die", "Insel", "-n", "الجزيرة", "Rügen ist eine Insel.", "روغن جزيرة."],
        ["n", "der", "Hafen", "¨", "الميناء", "Der Hafen ist interessant.", "الميناء مثير للاهتمام."],
        ["n", "der", "Strand", "¨-e", "الشاطئ", "Heute waren wir am Strand.", "اليوم كنا على الشاطئ."],
        ["n", "der", "Berg", "-e", "الجبل", "Der Berg ist hoch.", "الجبل عالٍ."],
        ["n", "der", "Fluss", "¨-e", "النهر", "Der Rhein ist ein Fluss.", "الراين نهر."],
        ["n", "die", "Kirche", "-n", "الكنيسة", "Die Kirche ist sehr alt.", "الكنيسة قديمة جدًا."],
        ["n", "das", "Museum", "=Museen", "المتحف", "Wir besichtigen das Museum.", "نزور المتحف."],
        ["n", "das", "Denkmal", "¨-er", "النصب التذكاري", "Das Denkmal ist berühmt.", "النصب مشهور."],
        ["n", "die", "Sehenswürdigkeit", "-en", "المَعلم السياحي", "Dort gibt es viele Sehenswürdigkeiten.", "هناك معالم سياحية كثيرة."],
        ["n", "der", "Ausflug", "¨-e", "الرحلة / النزهة", "Wir machen einen Ausflug nach Rügen.", "نقوم برحلة إلى روغن."],
        ["n", "die", "Landkarte", "-n", "الخريطة", "Sehen Sie die Landkarte.", "انظر إلى الخريطة."],
        ["n", "die", "Postkarte", "-n", "البطاقة البريدية", "Ich schreibe eine Postkarte.", "أكتب بطاقة بريدية."],
        ["n", "die", "Freizeit", "Sg.", "وقت الفراغ", "In der Freizeit lese ich.", "في وقت الفراغ أقرأ."],
        ["n", "das", "Wetter", "Sg.", "الطقس", "Wie ist das Wetter?", "كيف الطقس؟"],
        ["n", "die", "Sonne", "-n", "الشمس", "Die Sonne scheint.", "الشمس مشرقة."],
        ["n", "das", "Grad", "-", "الدرجة (الحرارة)", "Es sind 22 Grad.", "الحرارة 22 درجة."],
        ["n", "die", "Grippe", "Sg.", "الإنفلونزا", "Nina hat Grippe.", "نينا مصابة بالإنفلونزا."],
        ["n", "das", "Pech", "Sg.", "سوء الحظ", "Das ist wirklich Pech!", "هذا سوء حظ حقًا!"],
        ["n", "das", "Glück", "Sg.", "الحظ / السعادة", "Zum Glück ist es heute warm.", "لحسن الحظ الجو دافئ اليوم."],
        ["n", "der", "Pullover", "-", "الكنزة", "Wir hatten keinen Pullover.", "لم تكن معنا كنزة."],
        ["n", "das", "Frühstück", "-e", "الفطور", "Das Frühstück ist um acht.", "الفطور في الثامنة."],
        ["n", "das", "Mittagessen", "-", "الغداء", "Das Mittagessen ist lecker.", "الغداء لذيذ."],
        ["n", "das", "Abendessen", "-", "العشاء", "Was gibt es zum Abendessen?", "ماذا يوجد للعشاء؟"],
        ["n", "das", "Konzert", "-e", "الحفلة الموسيقية", "Am Samstag gibt es ein Konzert.", "يوم السبت هناك حفلة."],
        ["v", "", "besichtigen", "", "يزور (معلمًا)", "Wir besichtigen das Schulmuseum.", "نزور متحف المدرسة."],
        ["v", "", "sehen", "du siehst, er sieht", "يرى", "Ich sehe ihn nur selten.", "لا أراه إلا نادرًا."],
        ["v", "", "fahren", "du fährst, er fährt", "يسافر / يذهب بوسيلة", "Wir fahren nach Hiddensee.", "نذهب إلى هيدنزيه."],
        ["v", "", "dauern", "", "يستغرق", "Das Wochenende dauert vier Tage.", "العطلة تستغرق أربعة أيام."],
        ["v", "", "planen", "", "يخطط", "Was plant ihr am Wochenende?", "ماذا تخططون لعطلة الأسبوع؟"],
        ["v", "", "finden", "", "يجد / يرى (رأي)", "Ich finde die Insel schön.", "أجد الجزيرة جميلة."],
        ["v", "", "schlafen", "du schläfst, er schläft", "ينام", "Am Wochenende schlafe ich lange.", "في عطلة الأسبوع أنام طويلًا."],
        ["v", "", "frühstücken", "", "يتناول الفطور", "Wir frühstücken zusammen.", "نتناول الفطور معًا."],
        ["x", "", "Es regnet.", "", "إنها تمطر.", "Heute regnet es.", "اليوم تمطر."],
        ["x", "", "Es schneit.", "", "إنها تثلج.", "Im Winter schneit es.", "في الشتاء تثلج."],
        ["a", "", "windig", "", "عاصف (فيه رياح)", "Es ist windig.", "الجو عاصف."],
        ["a", "", "bewölkt", "", "غائم", "Es ist bewölkt.", "الجو غائم."],
        ["a", "", "sonnig", "", "مشمس", "Morgen ist es sonnig.", "غدًا مشمس."],
        ["a", "", "kalt", "", "بارد", "Es war kalt.", "كان الجو باردًا."],
        ["a", "", "warm", "", "دافئ", "Heute ist es warm.", "اليوم الجو دافئ."],
        ["a", "", "gesund", "", "صحي / معافى", "Hoffentlich bist du wieder gesund.", "أتمنى أن تكون قد تعافيت."],
        ["a", "", "krank", "", "مريض", "Nina ist krank.", "نينا مريضة."],
        ["a", "", "lecker", "", "لذيذ", "Das Essen ist lecker.", "الطعام لذيذ."],
        ["a", "", "toll", "", "رائع", "Open-Air-Konzerte finde ich toll.", "الحفلات في الهواء الطلق أجدها رائعة."],
        ["a", "", "langweilig", "", "مملّ", "Der Film ist langweilig.", "الفيلم مملّ."],
        ["d", "", "hoffentlich", "", "إن شاء الله / أتمنى", "Hoffentlich scheint die Sonne.", "أتمنى أن تشرق الشمس."],
        ["d", "", "leider", "", "للأسف", "Leider war das Wetter nicht gut.", "للأسف لم يكن الطقس جيدًا."],
        ["d", "", "wirklich", "", "حقًا", "Das ist wirklich schön.", "هذا جميل حقًا."],
        ["d", "", "zum Glück", "", "لحسن الحظ", "Zum Glück ist es warm.", "لحسن الحظ الجو دافئ."],
        ["d", "", "immer", "", "دائمًا", "Ich trinke immer Tee.", "أشرب الشاي دائمًا."],
        ["d", "", "oft", "", "كثيرًا / غالبًا", "Wir gehen oft ins Kino.", "نذهب إلى السينما كثيرًا."],
        ["d", "", "manchmal", "", "أحيانًا", "Manchmal koche ich.", "أحيانًا أطبخ."],
        ["d", "", "selten", "", "نادرًا", "Ich sehe ihn selten.", "أراه نادرًا."],
        ["d", "", "nie", "", "أبدًا", "Ich rauche nie.", "لا أدخّن أبدًا."],
        ["d", "", "morgen", "", "غدًا", "Morgen besuchen wir die Kreidefelsen.", "غدًا نزور الصخور الطباشيرية."],
        ["q", "", "wohin?", "", "إلى أين؟", "Wohin fahrt ihr?", "إلى أين تسافرون؟"],
        ["p", "", "nach", "", "إلى (مدينة/بلد)", "Wir fahren nach Rügen.", "نسافر إلى روغن."],
        ["x", "", "Gute Besserung!", "", "شفاك الله! (للمريض)", "Gute Besserung, Nina!", "شفاك الله يا نينا!"],
        ["x", "", "Das ist schade.", "", "هذا مؤسف.", "Du kommst nicht? Das ist schade.", "لن تأتي؟ هذا مؤسف."]
      ],
      phrases: [
        ["Wie ist das Wetter? – Es ist sonnig und warm.", "كيف الطقس؟ – مشمس ودافئ."],
        ["Leider war das Wetter nicht so gut.", "للأسف لم يكن الطقس جيدًا."],
        ["Mein Bruder wohnt auf Rügen. Ich sehe ihn nur selten.", "أخي يسكن في روغن. أراه نادرًا."],
        ["Ich finde die Seebrücke schön.", "أجد الجسر البحري جميلًا."],
        ["Wie findest du Open-Air-Konzerte? – Super!", "ما رأيك في الحفلات في الهواء الطلق؟ – رائعة!"],
        ["Liebe Nina, hoffentlich bist du wieder gesund.", "عزيزتي نينا، أتمنى أن تكوني قد تعافيت."],
        ["Viele Grüße, Clara", "تحياتي، كلارا"]
      ],
      ex: [
        { t: "mc", q: "اختر الضمير المناسب.", s: "Mein Bruder arbeitet auf Rügen. Leider sehe ich ___ nur selten.", o: ["ihn", "er", "sie"], a: 0, why: "‹mein Bruder› مذكر ومفعول به → ‹ihn›.", tag: "pronomen" },
        { t: "mc", q: "اختر الضمير المناسب.", s: "Mein Bruder hat eine neue Freundin. Ich kenne ___ noch nicht.", o: ["sie", "ihr", "ihn"], a: 0, why: "‹die Freundin› مؤنث → في Akkusativ ‹sie›.", tag: "pronomen" },
        { t: "mc", q: "اختر الضمير المناسب.", s: "In Middelhagen gibt es ein Schulmuseum. Ich kenne ___ nicht.", o: ["es", "ihn", "sie"], a: 0, why: "‹das Museum› محايد → ‹es›.", tag: "pronomen" },
        { t: "gap", q: "أكمل بضمير المفعول به.", s: "Bist du noch da? Ich höre ___ ganz schlecht. (du)", a: ["dich"], why: "‹du› → ‹dich›.", tag: "pronomen" },
        { t: "gap", q: "أكمل بضمير المفعول به.", s: "Wir sind am Montag zu Hause. Besucht ihr ___? (wir)", a: ["uns"], why: "‹wir› → ‹uns›.", tag: "pronomen" },
        { t: "gap", q: "أكمل بضمير المفعول به.", s: "Kommt ihr am Samstag? Ich lade ___ ein. (ihr)", a: ["euch"], why: "‹ihr› → ‹euch›.", tag: "pronomen" },
        { t: "gap", q: "أكمل بـ sein في الماضي.", s: "Am Donnerstag ___ wir am Hafen.", a: ["waren"], why: "‹wir waren›.", tag: "praeteritum" },
        { t: "gap", q: "أكمل بـ sein في الماضي.", s: "Wo ___ du am Wochenende?", a: ["warst"], why: "‹du warst›.", tag: "praeteritum" },
        { t: "gap", q: "أكمل بـ sein في الماضي.", s: "Das Wetter ___ leider nicht so gut.", a: ["war"], why: "‹es (das Wetter) war›.", tag: "praeteritum" },
        { t: "mc", q: "ما معنى ‹Es ist bewölkt›؟", o: ["الجو غائم", "الجو مشمس", "إنها تمطر"], a: 0, why: "‹die Wolke› = السحابة → ‹bewölkt› = غائم.", tag: "wortschatz" },
        { t: "match", q: "صِل الطقس بمعناه.", pairs: [["Die Sonne scheint.", "الشمس مشرقة."], ["Es regnet.", "إنها تمطر."], ["Es schneit.", "إنها تثلج."], ["Es ist windig.", "الجو عاصف."], ["Es ist kalt.", "الجو بارد."]], tag: "wortschatz" },
        { t: "mc", q: "رتّب من الأكثر إلى الأقل تكرارًا: أي ترتيب صحيح؟", o: ["immer – oft – manchmal – selten – nie", "oft – immer – nie – manchmal – selten", "nie – selten – immer – oft – manchmal"], a: 0, why: "دائمًا ← كثيرًا ← أحيانًا ← نادرًا ← أبدًا.", tag: "wortschatz" },
        { t: "mc", q: "كيف تبدأ بريدًا لصديقتك نينا؟", o: ["Liebe Nina,", "Lieber Nina,", "Sehr geehrte Nina,"], a: 0, why: "لأنثى: ‹Liebe›. ‹Sehr geehrte› للرسائل الرسمية.", tag: "schreiben" },
        { t: "order", q: "رتّب الجملة.", a: "Am Sonntagmorgen fahren wir nach Hiddensee.", why: "الظرف الزمني أولًا، الفعل ثانيًا، ثم الفاعل.", tag: "wortstellung" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "للأسف كان الطقس سيئًا.", a: ["Leider war das Wetter schlecht.", "Leider war das Wetter nicht gut.", "Das Wetter war leider schlecht."], tag: "praeteritum" },
        { t: "read", title: "Eine E-Mail aus Binz", text: "Liebe Nina, hoffentlich bist du wieder gesund. Wir sind jetzt auf Rügen. Am Donnerstag waren wir am Hafen Sassnitz. Leider war das Wetter nicht so gut: Es waren nur 12 Grad und es war windig. Heute ist es zum Glück warm – fast 20 Grad. Heute Nachmittag besichtigen wir das Schulmuseum. Am Sonntagabend fahren wir wieder nach Hause. Wir besuchen dich am Montag. Gute Besserung! Viele Grüße, Clara", tr: "عزيزتي نينا، أتمنى أن تكوني قد تعافيت. نحن الآن في روغن. يوم الخميس كنا في ميناء ساسنيتس. للأسف لم يكن الطقس جيدًا: كانت الحرارة 12 درجة فقط وكان الجو عاصفًا. اليوم لحسن الحظ الجو دافئ — حوالي 20 درجة. بعد ظهر اليوم نزور متحف المدرسة. مساء الأحد نعود إلى البيت. سنزورك يوم الاثنين. شفاك الله! تحياتي، كلارا", items: [
          { t: "tf", s: "Nina ist auch auf Rügen.", a: false, why: "نينا مريضة وليست معهم: ‹hoffentlich bist du wieder gesund›." },
          { t: "tf", s: "Am Donnerstag war es windig.", a: true, why: "‹… und es war windig.›" },
          { t: "tf", s: "Sie fahren am Sonntagabend nach Hause.", a: true, why: "‹Am Sonntagabend fahren wir wieder nach Hause.›" }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Pläne fürs Wochenende", ar: "خطط عطلة نهاية الأسبوع",
        scene: "صديقتك كلارا تتصل بك. هي في جزيرة روغن وتسألك عن عطلتك.",
        who: { A: "Clara" },
        lines: [
          { s: "A", de: "Hallo! Ich bin auf Rügen. Was machst du am Wochenende?", ar: "مرحبًا! أنا في روغن. ماذا تفعل في عطلة الأسبوع؟" },
          { s: "U", task: "قل: يوم السبت ألتقي بأصدقاء ويوم الأحد أنام طويلًا.", m: "Am Samstag treffe ich Freunde und am Sonntag schlafe ich lange.", ok: ["Am Samstag treffe ich Freunde und am Sonntag schlafe ich lange", "Am Samstag treffe ich Freunde am Sonntag schlafe ich lange", "Ich treffe am Samstag Freunde und am Sonntag schlafe ich lange", "Am Samstag treffe ich Freunde und schlafe am Sonntag lange"], o: ["Am Samstag treffe ich Freunde und am Sonntag schlafe ich lange.", "Am Samstag ich treffe Freunde und am Sonntag ich schlafe lange.", "Am Samstag treffst ich Freunde."], why: ["", "بعد ‹Am Samstag› يأتي الفعل ثانيًا: ‹treffe ich›.", "مع ‹ich›: ‹treffe›."], ar: "يوم السبت ألتقي بأصدقاء ويوم الأحد أنام طويلًا." },
          { s: "A", de: "Schön! Wie ist das Wetter bei euch?", ar: "جميل! كيف الطقس عندكم؟" },
          { s: "U", task: "قل: الشمس مشرقة والحرارة 25 درجة.", m: "Die Sonne scheint und es sind 25 Grad.", ok: ["Die Sonne scheint und es sind * Grad", "Die Sonne scheint es sind * Grad", "Es ist sonnig und es sind * Grad", "Die Sonne scheint *"], o: ["Die Sonne scheint und es sind 25 Grad.", "Die Sonne scheinen und es ist 25 Grads.", "Es regnet und es ist kalt."], why: ["", "‹die Sonne scheint› (مفرد)، و‹es sind 25 Grad›.", "هذا عكس المطلوب."], ar: "الشمس مشرقة والحرارة 25 درجة." },
          { s: "A", de: "Toll! Hier war es gestern kalt und windig. Kennst du Sebastian, meinen Bruder?", ar: "رائع! هنا كان الجو باردًا وعاصفًا أمس. هل تعرف سيباستيان، أخي؟" },
          { s: "U", task: "قل: نعم، أعرفه. لكني لا أراه إلا نادرًا.", m: "Ja, ich kenne ihn. Aber ich sehe ihn nur selten.", ok: ["Ja ich kenne ihn aber ich sehe ihn nur selten", "Ja ich kenne ihn aber ich sehe ihn selten", "Ja ich kenne ihn"], o: ["Ja, ich kenne ihn. Aber ich sehe ihn nur selten.", "Ja, ich kenne er. Aber ich sehe er nur selten.", "Ja, ich kenne sie. Aber ich sehe sie selten."], why: ["", "‹er› في Akkusativ → ‹ihn›.", "‹Sebastian› مذكر → ‹ihn›."], ar: "نعم، أعرفه. لكني أراه نادرًا فقط." },
          { s: "A", de: "Wir kommen am Montag zurück. Besuchst du uns?", ar: "نعود يوم الاثنين. هل تزورنا؟" },
          { s: "U", task: "قل: نعم، أزوركم يوم الاثنين مساءً.", m: "Ja, ich besuche euch am Montagabend.", ok: ["Ja ich besuche euch am Montagabend", "Ja ich besuche euch am Montag", "Ja am Montagabend besuche ich euch", "Ich besuche euch am Montagabend"], o: ["Ja, ich besuche euch am Montagabend.", "Ja, ich besuche ihr am Montagabend.", "Ja, ich besuche uns am Montagabend."], why: ["", "‹ihr› في Akkusativ → ‹euch›.", "‹uns› = نحن؛ أنت تزورهم → ‹euch›."], ar: "نعم، أزوركم مساء الاثنين." }
        ]
      },
      listen: [
        { t: "listen", say: "Auf Rügen ist es heute windig und bewölkt. Es sind fünfzehn Grad.", q: "كيف الطقس في روغن؟", o: ["عاصف وغائم، 15 درجة", "مشمس ودافئ، 25 درجة", "ممطر وبارد، 5 درجات"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Das lange Wochenende dauert vier Tage.", q: "كم تستغرق العطلة؟", o: ["4 أيام", "3 أيام", "5 أيام"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich kenne sie noch nicht, aber ich sehe sie morgen in der Uni.", q: "متى سيراها؟", o: ["غدًا في الجامعة", "اليوم في المقهى", "يوم الأحد"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Leider war das Wetter nicht so gut.", tag: "hoeren" },
        { t: "dict", say: "Ich sehe ihn nur selten.", tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "Rhythmus in Wort und Satz", ar: "الإيقاع والنبر في الكلمة والجملة",
    body: [
      { p: "في كل كلمة ألمانية مقطع واحد منبور (أقوى وأطول وأعلى صوتًا). غالبًا يكون **المقطع الأول**: ‹MOR‑gen, MO‑nat, VOR‑mit‑tag›. لكن الكلمات الأجنبية غالبًا نبرها في الآخر: ‹Ter‑MIN, Stu‑DENT, Re‑fe‑RAT, Se‑MES‑ter›." },
      { table: { head: ["الإيقاع", "أمثلة"], rows: [
        ["● (مقطع واحد)", "‹Nacht, Jahr, Kurs, Job›"],
        ["● ○", "‹Morgen, Monat, Mensa, Übung, Arbeit›"],
        ["○ ●", "‹Termin, Beginn, Student, Gespräch, Klausur›"],
        ["● ○ ○", "‹Vormittag, Feiertag, Vorlesung, Sprechstunde›"],
        ["○ ● ○", "‹Kalender, Semester, Geburtstag›"]
      ] } },
      { p: "وفي الجملة تُنبر الكلمة الأهم (المعلومة الجديدة): ‹Hast du ZEIT? – Nicht HEUte. – Und MORgen? – Ja, das GEHT.›" },
      { tip: "اطرق بإصبعك على الطاولة مع كل مقطع: طرقة قوية للمقطع المنبور وطرقات خفيفة للباقي." }
    ],
    drills: [
      { t: "listen", say: "Kalender", q: "أين النبر؟", o: ["Ka‑LEN‑der", "KA‑len‑der", "Ka‑len‑DER"], a: 0, why: "إيقاع ○ ● ○." },
      { t: "listen", say: "Vormittag", q: "أين النبر؟", o: ["VOR‑mit‑tag", "Vor‑MIT‑tag", "Vor‑mit‑TAG"], a: 0, why: "الكلمات المركّبة الألمانية تُنبر على الجزء الأول." },
      { t: "listen", say: "Termin", q: "أين النبر؟", o: ["Ter‑MIN", "TER‑min"], a: 0, why: "كلمة أجنبية الأصل → النبر في الآخر." },
      { t: "listen", say: "Referat", q: "أين النبر؟", o: ["Re‑fe‑RAT", "RE‑fe‑rat", "Re‑FE‑rat"], a: 0, why: "‑at في الآخر منبور." },
      { t: "listen", say: "Sprechstunde", q: "أين النبر؟", o: ["SPRECH‑stun‑de", "Sprech‑STUN‑de"], a: 0, why: "كلمة مركّبة: sprechen + Stunde → النبر على الأول." }
    ],
    say: ["Nacht", "Morgen", "Termin", "Vormittag", "Kalender", "Geburtstag", "Semester", "Hast du Zeit?", "Nicht heute.", "Und morgen?", "Ja, das geht.", "Wann kannst du?", "Um sieben.", "Bis morgen!"]
  },

  write: [
    {
      ar: "أنت في عطلة. اكتب بريدًا إلكترونيًا (6–8 جمل) لصديق/ة: أين أنت؟ كيف الطقس؟ ماذا فعلت (war/hatte)؟ ماذا ستفعل غدًا؟",
      de: "Schreiben Sie eine Urlaubsmail: Wo? Wetter? Was war? Was machen Sie morgen?",
      model: "Liebe Sara,\nich bin jetzt in Agadir. Das Wetter ist super: Die Sonne scheint und es sind 28 Grad. Gestern war ich am Strand. Das Wasser war leider kalt. Heute besichtigen wir den Hafen. Morgen fahren wir nach Taroudant. Ich mache viele Fotos für dich!\nViele Grüße\nKarim",
      check: ["‹Liebe … / Lieber …,› وبعدها حرف صغير", "جملة عن الطقس (Es ist … / Die Sonne scheint)", "‹war› أو ‹hatte› للماضي", "خطة الغد في المضارع (Morgen fahre ich …)", "الفعل ثانيًا بعد الظرف الزمني", "‹Viele Grüße› + اسمك"]
    }
  ],
  tutor: [
    { title: "Einen Termin finden", ar: "تحديد موعد", role: "Niels, ein Kommilitone, der mit dir ein Referat vorbereiten möchte", goal: "einen gemeinsamen Termin finden: Wochentage, Tageszeiten, Uhrzeiten (informell), Zeit haben / keine Zeit haben", start: "Hi! Wir müssen das Referat vorbereiten. Hast du diese Woche Zeit?" },
    { title: "An der Käsetheke", ar: "عند طاولة الجبن", role: "eine Verkäuferin an der Käsetheke im Supermarkt", goal: "Käse und Wurst kaufen: Mengen (Gramm, Stück), geschnitten oder am Stück, Preis fragen", start: "Guten Tag! Was darf es sein?" }
  ]
});

/* Lektion 4 — Wirtschaft trifft Kultur */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 4,
  de: "Wirtschaft trifft Kultur",
  ar: "الاقتصاد يلتقي بالثقافة",
  book: "Kursbuch S. 34–41 · Übungsbuch S. 100–107",
  goals: [
    "الحديث عمّا يجب وما يمكن وما يُسمح وما تريده: müssen, können, dürfen, wollen, möcht-",
    "فهم «قوس الجملة» (Satzklammer) مع الأفعال الناقصة",
    "ذكر السبب بـ denn",
    "المهن والعمل، كتابة بريد رسمي في المكتب",
    "الأشهر والفصول والتاريخ (am 17. April) وحروف الزمن"
  ],
  units: [
    /* ───────────── 4A ───────────── */
    {
      id: "4A", de: "Hier kann man gut leben und arbeiten", ar: "هنا يمكن العيش والعمل بشكل جيد",
      summary: "الأفعال الناقصة müssen و können، قوس الجملة (الفعل الناقص في المكان 2 والمصدر في الآخر)، السبب بـ denn.",
      grammar: [
        {
          h: "müssen (يجب) و können (يستطيع)",
          table: {
            head: ["", "‹müssen›", "‹können›"],
            rows: [
              ["‹ich›", "‹muss›", "‹kann›"], ["‹du›", "‹musst›", "‹kannst›"], ["‹er / sie / es›", "‹muss›", "‹kann›"],
              ["‹wir›", "‹müssen›", "‹können›"], ["‹ihr›", "‹müsst›", "‹könnt›"], ["‹sie / Sie›", "‹müssen›", "‹können›"]
            ]
          },
          list: ["في المفرد يتغيّر حرف العلة: ‹ü → u›، ‹ö → a›.", "‹ich› و‹er/sie/es› **بلا نهاية**: ‹ich muss, er kann› (وليس er kannt!)."]
        },
        {
          h: "قوس الجملة (Satzklammer)",
          p: "مع الأفعال الناقصة: الفعل الناقص المصرّف في **المكان 2**، والفعل الأساسي في صيغة **المصدر في آخر الجملة**. بينهما يأتي كل شيء آخر — كأن الجملة بين قوسين.",
          table: {
            head: ["المكان 1", "المكان 2", "…", "آخر الجملة"],
            rows: [
              ["‹Beatriz›", "‹muss›", "‹oft früh im Büro›", "‹sein.›"],
              ["‹Am Wochenende›", "‹kann›", "‹sie lange›", "‹schlafen.›"],
              ["‹Wann›", "‹musst›", "‹du morgen›", "‹arbeiten?›"],
              ["‹Kannst›", "‹du›", "‹gut Texte›", "‹lernen?›"]
            ]
          },
          tip: "خطأ شائع: «Ich muss arbeiten heute». الصحيح: ‹Ich muss heute arbeiten.› المصدر دائمًا في الآخر."
        },
        {
          h: "‹man› + فعل ناقص",
          p: "‹man› (المرء/الناس) شائعة جدًا مع الأفعال الناقصة: ‹Hier kann man gut leben.› (هنا يمكن العيش جيدًا) — والفعل معها مثل ‹er›."
        },
        {
          h: "ذكر السبب بـ denn",
          p: "‹denn› (لأنّ) تربط جملتين رئيسيتين وتقف في **المكان 0** مثل ‹und, aber, oder›. قبلها فاصلة دائمًا، وبعدها ترتيب عادي.",
          table: {
            head: ["الجملة 1", "المكان 0", "الجملة 2 (السبب)"],
            rows: [
              ["‹Beatriz geht gern ins Theater,›", "‹denn›", "‹sie liebt Literatur.›"],
              ["‹Ich muss viel lernen,›", "‹denn›", "‹ich habe bald eine Prüfung.›"]
            ]
          },
          tip: "للسؤال عن السبب: ‹Warum?› (لماذا؟)."
        }
      ],
      vocab: [
        ["v", "", "müssen", "ich muss, du musst, er muss", "يجب / يتعيّن", "Ich muss früh aufstehen.", "يجب أن أستيقظ مبكرًا."],
        ["v", "", "können", "ich kann, du kannst, er kann", "يستطيع / يمكن", "Hier kann man gut leben.", "هنا يمكن العيش جيدًا."],
        ["v", "", "leben", "", "يعيش", "Ich lebe gern in Errachidia.", "أحب العيش في الرشيدية."],
        ["v", "", "verdienen", "", "يكسب (مالًا)", "Er verdient viel Geld.", "يكسب مالًا كثيرًا."],
        ["v", "", "entspannen", "", "يسترخي", "Nach der Arbeit entspanne ich.", "بعد العمل أسترخي."],
        ["v", "", "wegfahren", "ich fahre weg", "يسافر (يغادر)", "Am Wochenende kann sie wegfahren.", "في عطلة الأسبوع تستطيع السفر."],
        ["v", "", "aufstehen", "ich stehe auf", "ينهض / يستيقظ", "Ich muss um sechs aufstehen.", "يجب أن أستيقظ في السادسة."],
        ["v", "", "wandern", "", "يمشي في الطبيعة (يتنزّه)", "In Hall kann man wandern.", "في هال يمكن التنزّه سيرًا."],
        ["v", "", "lieben", "", "يحب", "Sie liebt Literatur.", "هي تحب الأدب."],
        ["v", "", "spielen", "", "يلعب / يمثّل", "Leopold spielt einen Koch.", "ليوبولد يمثّل دور طبّاخ."],
        ["n", "die", "Stadt", "¨-e", "المدينة", "Die Stadt ist alt und interessant.", "المدينة قديمة ومثيرة."],
        ["n", "das", "Stadtmagazin", "-e", "مجلة المدينة", "Ich lese das Stadtmagazin.", "أقرأ مجلة المدينة."],
        ["n", "das", "Theater", "-", "المسرح", "Er arbeitet im Theater.", "يعمل في المسرح."],
        ["n", "die", "Bühne", "-n", "خشبة المسرح", "Er steht auf der Bühne.", "يقف على خشبة المسرح."],
        ["n", "die", "Probe", "-n", "التدريب (البروفة)", "Ich muss zur Probe gehen.", "يجب أن أذهب إلى البروفة."],
        ["n", "die", "Literatur", "-en", "الأدب", "Beatriz liebt Literatur.", "بياتريس تحب الأدب."],
        ["n", "das", "Büro", "-s", "المكتب", "Sie muss früh im Büro sein.", "يجب أن تكون في المكتب مبكرًا."],
        ["n", "der", "Schreibtisch", "-e", "مكتب الكتابة", "Ich sitze am Schreibtisch.", "أجلس إلى المكتب."],
        ["n", "die", "Prüfung", "-en", "الامتحان", "Ich habe bald eine Prüfung.", "عندي قريبًا امتحان."],
        ["n", "das", "Geld", "Sg.", "المال", "Ich habe kein Geld.", "ليس عندي مال."],
        ["n", "der", "Grund", "¨-e", "السبب", "Was ist der Grund?", "ما السبب؟"],
        ["a", "", "freundlich", "", "ودود / لطيف", "Die Menschen hier sind freundlich.", "الناس هنا ودودون."],
        ["a", "", "kreativ", "", "مبدع", "Ich kann kreativ sein.", "أستطيع أن أكون مبدعًا."],
        ["a", "", "schön", "", "جميل", "Die Stadt ist sehr schön.", "المدينة جميلة جدًا."],
        ["d", "", "schnell", "", "بسرعة", "Man kann schnell Freunde finden.", "يمكن إيجاد أصدقاء بسرعة."],
        ["d", "", "lange", "", "طويلًا (مدة)", "Am Sonntag kann ich lange schlafen.", "يوم الأحد أستطيع النوم طويلًا."],
        ["d", "", "bald", "", "قريبًا", "Bald ist Wochenende.", "قريبًا عطلة نهاية الأسبوع."],
        ["q", "", "warum?", "", "لماذا؟", "Warum lernst du Deutsch?", "لماذا تتعلّم الألمانية؟"],
        ["p", "", "denn", "", "لأنّ (رابط سبب)", "Ich lerne Deutsch, denn ich möchte in Deutschland arbeiten.", "أتعلّم الألمانية لأنني أريد العمل في ألمانيا."]
      ],
      phrases: [
        ["Hier kann man gut leben und arbeiten.", "هنا يمكن العيش والعمل بشكل جيد."],
        ["Ich muss in der Woche früh aufstehen.", "يجب أن أستيقظ مبكرًا خلال الأسبوع."],
        ["Am Wochenende kann ich lange schlafen.", "في عطلة الأسبوع أستطيع النوم طويلًا."],
        ["Man kann schnell Freunde finden.", "يمكن إيجاد أصدقاء بسرعة."],
        ["Warum? – Ich lerne viel, denn ich habe bald eine Prüfung.", "لماذا؟ – أدرس كثيرًا لأن عندي امتحانًا قريبًا."],
        ["Ich lerne Deutsch, denn ich möchte in Deutschland leben.", "أتعلّم الألمانية لأنني أريد العيش في ألمانيا."]
      ],
      ex: [
        { t: "gap", q: "صرّف müssen.", s: "Beatriz ___ oft früh im Büro sein.", a: ["muss"], why: "‹sie muss› — بلا نهاية مع er/sie/es.", tag: "modal", wrong: { "musst": "‹musst› لـ du. مع sie (هي): ‹muss›.", "müsst": "‹müsst› لـ ihr." } },
        { t: "gap", q: "صرّف können.", s: "___ du gut Texte lernen?", a: ["Kannst"], why: "‹du kannst›، وفي سؤال نعم/لا يأتي أولًا.", tag: "modal" },
        { t: "gap", q: "صرّف können.", s: "Am Wochenende ___ wir lange schlafen.", a: ["können"], why: "‹wir können›.", tag: "modal" },
        { t: "gap", q: "صرّف müssen.", s: "Ihr ___ pünktlich sein.", a: ["müsst"], why: "‹ihr müsst›.", tag: "modal" },
        { t: "mc", q: "أي جملة صحيحة؟", o: ["Ich muss heute arbeiten.", "Ich muss arbeiten heute.", "Ich arbeiten muss heute."], a: 0, why: "قوس الجملة: الفعل الناقص في المكان 2 والمصدر في الآخر.", tag: "modal" },
        { t: "mc", q: "أي جملة صحيحة؟", o: ["Am Sonntag kann er lange schlafen.", "Am Sonntag er kann lange schlafen.", "Am Sonntag kann er schlafen lange."], a: 0, why: "الفعل ثانيًا بعد ‹Am Sonntag›، والمصدر في الآخر.", tag: "modal" },
        { t: "order", q: "رتّب الجملة.", a: "Beatriz muss am Schreibtisch sitzen.", why: "‹muss› في المكان 2، و‹sitzen› في الآخر.", tag: "modal" },
        { t: "order", q: "رتّب السؤال.", a: "Wann musst du morgen arbeiten?", why: "كلمة السؤال + الفعل الناقص + الفاعل + … + المصدر.", tag: "modal" },
        { t: "order", q: "رتّب الجملة (مع man).", a: "Hier kann man viele Sehenswürdigkeiten besichtigen.", why: "‹kann› ثانيًا، ‹besichtigen› في الآخر.", tag: "modal" },
        { t: "mc", q: "أكمل بـ denn بشكل صحيح.", s: "Sie wohnt jetzt in Schwäbisch Hall, denn ___", o: ["sie mag die Stadt.", "mag sie die Stadt.", "sie die Stadt mag."], a: 0, why: "بعد ‹denn› (المكان 0) ترتيب عادي: الفاعل ثم الفعل.", tag: "konnektor" },
        { t: "match", q: "صِل الجملة بالسبب المناسب.", pairs: [["Ich muss viel lernen,", "denn ich habe bald eine Prüfung."], ["Ich kann lange schlafen,", "denn ich habe frei."], ["Sie arbeitet viel am Computer,", "denn sie ist Webentwicklerin."], ["Er geht oft ins Theater,", "denn er liebt Literatur."]], tag: "konnektor" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "يجب أن أستيقظ مبكرًا غدًا.", a: ["Ich muss morgen früh aufstehen.", "Morgen muss ich früh aufstehen."], tag: "modal" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أتعلّم الألمانية لأنني أريد العيش في ألمانيا.", a: ["Ich lerne Deutsch, denn ich möchte in Deutschland leben.", "Ich lerne Deutsch, denn ich will in Deutschland leben."], tag: "konnektor" },
        { t: "read", title: "Menschen in Schwäbisch Hall", text: "Leopold ist Schauspieler. Er wohnt in Hall. Die Stadt ist alt und interessant. Man kann viel machen, zum Beispiel ins Theater oder ins Museum gehen. Leopold muss oft am Sonntag arbeiten, aber am Montag kann er lange schlafen. Die Menschen hier sind sehr freundlich; man kann schnell Freunde finden.", tr: "ليوبولد ممثّل. يسكن في هال. المدينة قديمة ومثيرة. يمكن فعل الكثير، مثلًا الذهاب إلى المسرح أو المتحف. ليوبولد يجب أن يعمل غالبًا يوم الأحد، لكن يوم الاثنين يستطيع النوم طويلًا. الناس هنا ودودون جدًا؛ يمكن إيجاد أصدقاء بسرعة.", items: [
          { t: "tf", s: "Leopold muss oft am Sonntag arbeiten.", a: true, why: "‹Leopold muss oft am Sonntag arbeiten›." },
          { t: "tf", s: "In Hall kann man nicht ins Museum gehen.", a: false, why: "‹… ins Theater oder ins Museum gehen›." },
          { t: "tf", s: "Die Menschen in Hall sind freundlich.", a: true, why: "‹Die Menschen hier sind sehr freundlich›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Ein Interview im Radio", ar: "مقابلة في الإذاعة",
        scene: "مذيعة من إذاعة المدينة تجري معك مقابلة قصيرة عن حياتك وعملك.",
        who: { A: "Reporterin" },
        lines: [
          { s: "A", de: "Guten Tag! Was müssen Sie in der Woche machen?", ar: "مرحبًا! ماذا يجب أن تفعل خلال الأسبوع؟" },
          { s: "U", task: "قل: خلال الأسبوع يجب أن أستيقظ مبكرًا وأعمل في المكتب.", m: "In der Woche muss ich früh aufstehen und im Büro arbeiten.", ok: ["In der Woche muss ich früh aufstehen und im Büro arbeiten", "Ich muss in der Woche früh aufstehen und im Büro arbeiten", "Ich muss früh aufstehen und im Büro arbeiten", "In der Woche muss ich früh aufstehen *"], o: ["In der Woche muss ich früh aufstehen und im Büro arbeiten.", "In der Woche ich muss früh aufstehen und arbeiten im Büro.", "In der Woche muss ich früh aufstehe."], why: ["", "الفعل ثانيًا: ‹muss ich›، والمصدر ‹arbeiten› في الآخر.", "بعد الفعل الناقص يأتي المصدر: ‹aufstehen›."], ar: "خلال الأسبوع يجب أن أستيقظ مبكرًا وأعمل في المكتب." },
          { s: "A", de: "Und was können Sie am Wochenende machen?", ar: "وماذا تستطيع أن تفعل في عطلة الأسبوع؟" },
          { s: "U", task: "قل: في عطلة الأسبوع أستطيع النوم طويلًا ولقاء الأصدقاء.", m: "Am Wochenende kann ich lange schlafen und Freunde treffen.", ok: ["Am Wochenende kann ich lange schlafen und Freunde treffen", "Am Wochenende kann ich lange schlafen *", "Ich kann am Wochenende lange schlafen und Freunde treffen"], o: ["Am Wochenende kann ich lange schlafen und Freunde treffen.", "Am Wochenende kann ich schlafen lange.", "Am Wochenende kannst ich lange schlafen."], why: ["", "المصدر في الآخر: ‹lange schlafen›.", "مع ‹ich›: ‹kann›."], ar: "في عطلة الأسبوع أستطيع النوم طويلًا ولقاء الأصدقاء." },
          { s: "A", de: "Warum lernen Sie Deutsch?", ar: "لماذا تتعلّم الألمانية؟" },
          { s: "U", task: "اذكر سببك بـ denn (مثلًا: لأنني أريد العيش في ألمانيا).", m: "Ich lerne Deutsch, denn ich möchte in Deutschland leben.", ok: ["Ich lerne Deutsch denn *", "Denn ich möchte *", "Ich lerne Deutsch denn ich möchte in Deutschland leben", "Ich lerne Deutsch denn ich möchte in Deutschland arbeiten"], o: ["Ich lerne Deutsch, denn ich möchte in Deutschland leben.", "Ich lerne Deutsch, denn möchte ich in Deutschland leben.", "Ich lerne Deutsch, denn ich möchte leben in Deutschland."], why: ["", "بعد ‹denn› ترتيب عادي: ‹ich möchte›.", "المصدر ‹leben› في الآخر."], ar: "أتعلّم الألمانية لأنني أريد العيش في ألمانيا." },
          { s: "A", de: "Das ist interessant! Vielen Dank für das Interview.", ar: "هذا مثير! شكرًا جزيلًا على المقابلة." }
        ]
      },
      listen: [
        { t: "listen", say: "Leopold muss am Sonntag oft arbeiten, aber am Montag kann er lange schlafen.", q: "متى يستطيع ليوبولد النوم طويلًا؟", o: ["الاثنين", "الأحد", "السبت"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Beatriz wohnt in Schwäbisch Hall, denn sie mag die Stadt.", q: "لماذا تسكن بياتريس في هال؟", o: ["لأنها تحب المدينة", "لأن عائلتها هناك", "لأن السكن رخيص"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich kann morgen nicht kommen, denn ich muss arbeiten.", q: "لماذا لا يستطيع المجيء؟", o: ["يجب أن يعمل", "هو مريض", "ليس عنده سيارة"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Ich muss früh aufstehen.", tag: "hoeren" },
        { t: "dict", say: "Hier kann man gut leben.", tag: "hoeren" }
      ]
    },

    /* ───────────── 4B ───────────── */
    {
      id: "4B", de: "Restaurant oder Picknick?", ar: "مطعم أم نزهة؟",
      summary: "dürfen (مسموح/ممنوع)، wollen و möcht-، mögen، المواعيد الخاصة.",
      grammar: [
        {
          h: "dürfen — مسموح",
          table: { head: ["", "‹dürfen›"], rows: [["‹ich›", "‹darf›"], ["‹du›", "‹darfst›"], ["‹er / sie / es›", "‹darf›"], ["‹wir›", "‹dürfen›"], ["‹ihr›", "‹dürft›"], ["‹sie / Sie›", "‹dürfen›"]] },
          ex: [["Im Stadtpark darf man ein Picknick machen.", "في حديقة المدينة يُسمح بعمل نزهة."], ["Aber man darf nicht grillen.", "لكن لا يُسمح بالشواء."], ["Darf man hier rauchen? – Nein, das darf man nicht!", "هل التدخين مسموح هنا؟ – لا، ممنوع!"]],
          tip: "‹nicht dürfen› = ممنوع. أما «لا يجب / ليس ضروريًا» فهي ‹nicht müssen›: ‹Du musst nicht kommen.› (لست مضطرًا للمجيء)."
        },
        {
          h: "wollen (يريد بإصرار) و möcht- (يودّ بأدب)",
          table: {
            head: ["", "‹wollen›", "‹möchten›", "‹mögen›"],
            rows: [
              ["‹ich›", "‹will›", "‹möchte›", "‹mag›"], ["‹du›", "‹willst›", "‹möchtest›", "‹magst›"], ["‹er / sie / es›", "‹will›", "‹möchte›", "‹mag›"],
              ["‹wir›", "‹wollen›", "‹möchten›", "‹mögen›"], ["‹ihr›", "‹wollt›", "‹möchtet›", "‹mögt›"], ["‹sie / Sie›", "‹wollen›", "‹möchten›", "‹mögen›"]
            ]
          },
          list: [
            "‹wollen› = خطة أو رغبة قوية: ‹Wir wollen heute ins Kino gehen.› (مع الطلب المباشر قد تبدو فظّة: «Ich will …»).",
            "‹möchte› = رغبة مهذبة: ‹Ich möchte ein Bier.› — وهي في الأصل من ‹mögen›.",
            "‹mögen› غالبًا مع اسم: ‹Ich mag Schinken.› (أحب)."
          ]
        },
        {
          h: "الفعل الناقص بدون مصدر",
          p: "أحيانًا نحذف المصدر لأنه مفهوم: ‹Ich möchte ein Bier (haben).› ‹Ich kann Englisch (sprechen).› ‹Ich muss nach Hause (gehen).›"
        },
        {
          h: "تحديد موعد خاص",
          table: {
            head: ["اقتراح", "رد"],
            rows: [
              ["‹Können wir am Samstag ins Kino gehen?›", "‹Ja, gern! Das passt.›"],
              ["‹Hast du am Freitag Zeit?›", "‹Nein, am Freitag geht es nicht. Kannst du am Sonntag?›"],
              ["‹Um wie viel Uhr?›", "‹Um acht? – Ja, das geht.›"]
            ]
          }
        }
      ],
      vocab: [
        ["v", "", "dürfen", "ich darf, du darfst, er darf", "يُسمح له", "Darf man hier rauchen?", "هل التدخين مسموح هنا؟"],
        ["v", "", "wollen", "ich will, du willst, er will", "يريد", "Was willst du am Wochenende machen?", "ماذا تريد أن تفعل في عطلة الأسبوع؟"],
        ["v", "", "mögen", "ich mag, du magst", "يحب (يستلطف)", "Ich mag Schokolade.", "أحب الشوكولاتة."],
        ["v", "", "rauchen", "", "يدخّن", "Hier darf man nicht rauchen.", "التدخين هنا ممنوع."],
        ["v", "", "grillen", "", "يشوي", "Im Park darf man nicht grillen.", "في الحديقة لا يُسمح بالشواء."],
        ["v", "", "einladen", "ich lade ein, du lädst ein", "يدعو", "Ich möchte dich einladen.", "أريد أن أدعوك."],
        ["v", "", "mitbringen", "ich bringe mit", "يُحضر معه", "Darf ich meinen Hund mitbringen?", "هل يمكنني إحضار كلبي؟"],
        ["v", "", "mitnehmen", "ich nehme mit", "يأخذ معه", "Wir nehmen Brot und Wurst mit.", "نأخذ معنا خبزًا ونقانق."],
        ["v", "", "kochen", "", "يطبخ", "Im Büro darf man nicht kochen.", "في المكتب لا يُسمح بالطبخ."],
        ["n", "das", "Picknick", "-s", "النزهة (الأكل في الهواء الطلق)", "Wir machen ein Picknick im Park.", "نقوم بنزهة في الحديقة."],
        ["n", "der", "Park", "-s", "الحديقة العامة", "Der Stadtpark ist groß.", "حديقة المدينة كبيرة."],
        ["n", "das", "Kino", "-s", "السينما", "Gehen wir ins Kino?", "هل نذهب إلى السينما؟"],
        ["n", "die", "Fahrradtour", "-en", "جولة بالدراجة", "Wir machen eine Fahrradtour.", "نقوم بجولة بالدراجة."],
        ["n", "die", "Kurznachricht", "-en", "الرسالة القصيرة (SMS)", "Ich schreibe dir eine Kurznachricht.", "أكتب لك رسالة قصيرة."],
        ["n", "der", "Schinken", "-", "لحم الخنزير المقدد (جامبون)", "Er mag Schinken.", "هو يحب الجامبون."],
        ["n", "der", "Streuselkuchen", "-", "كعكة الفتات (ستروزل)", "Leopold möchte Streuselkuchen essen.", "ليوبولد يريد أكل كعكة ستروزل."],
        ["n", "der", "Kuchen", "-", "الكعكة", "Möchtest du ein Stück Kuchen?", "هل تريد قطعة كعك؟"],
        ["n", "die", "Party", "-s", "الحفلة", "Am Samstag ist eine Party.", "يوم السبت هناك حفلة."],
        ["n", "der", "Bus", "=Busse", "الحافلة", "Im Bus darf man nicht laut Musik hören.", "في الحافلة لا يُسمح بسماع الموسيقى بصوت عالٍ."],
        ["n", "der", "Müll", "Sg.", "القمامة", "Man darf keinen Müll liegen lassen.", "لا يجوز ترك القمامة."],
        ["a", "", "erlaubt", "", "مسموح", "Grillen ist hier nicht erlaubt.", "الشواء هنا غير مسموح."],
        ["a", "", "verboten", "", "ممنوع", "Rauchen ist verboten.", "التدخين ممنوع."],
        ["a", "", "laut", "", "عالٍ (صوت)", "Die Musik ist zu laut.", "الموسيقى عالية جدًا."],
        ["a", "", "pünktlich", "", "دقيق في المواعيد", "Ich muss pünktlich sein.", "يجب أن أكون دقيقًا في الموعد."],
        ["a", "", "spanisch", "", "إسباني", "Ich mag spanische Wurst.", "أحب النقانق الإسبانية."],
        ["d", "", "zu spät", "", "متأخر جدًا", "Ich darf nicht zu spät kommen.", "لا يجوز أن أتأخر."],
        ["d", "", "gern", "", "بكل سرور / بحب", "Ja, gern!", "نعم، بكل سرور!"],
        ["x", "", "Das passt.", "", "هذا مناسب.", "Um acht? – Ja, das passt.", "في الثامنة؟ – نعم، مناسب."],
        ["x", "", "Am Samstag geht nicht.", "", "السبت غير ممكن.", "Am Samstag geht nicht. Kannst du am Sonntag?", "السبت غير ممكن. هل تستطيع الأحد؟"]
      ],
      phrases: [
        ["Darf man hier rauchen? – Nein, das darf man nicht!", "هل التدخين مسموح هنا؟ – لا، ممنوع!"],
        ["Im Park darf man ein Picknick machen, aber man darf nicht grillen.", "في الحديقة يُسمح بالنزهة لكن لا يُسمح بالشواء."],
        ["Was willst du am Wochenende machen?", "ماذا تريد أن تفعل في عطلة الأسبوع؟"],
        ["Können wir am Samstag ins Kino gehen? Hast du Zeit?", "هل يمكننا الذهاب إلى السينما يوم السبت؟ هل لديك وقت؟"],
        ["Nein, am Samstag geht nicht. Kannst du am Sonntag?", "لا، السبت غير ممكن. هل تستطيع الأحد؟"],
        ["Ja, das passt. Um wie viel Uhr?", "نعم، مناسب. في أي ساعة؟"],
        ["Am Wochenende möchte ich lange schlafen.", "في عطلة الأسبوع أريد النوم طويلًا."]
      ],
      ex: [
        { t: "gap", q: "صرّف dürfen.", s: "Hier ___ man nicht grillen.", a: ["darf"], why: "‹man darf› (مثل er).", tag: "modal" },
        { t: "gap", q: "صرّف dürfen.", s: "___ ich das Fenster öffnen?", a: ["Darf"], why: "‹ich darf› — وسؤال نعم/لا يبدأ بالفعل.", tag: "modal" },
        { t: "gap", q: "صرّف wollen.", s: "Was ___ du am Wochenende machen?", a: ["willst"], why: "‹du willst›.", tag: "modal", wrong: { "wollst": "‹wollen› يتغيّر في المفرد: ich will, du willst, er will." } },
        { t: "gap", q: "صرّف wollen.", s: "Leopold ___ ein Picknick machen.", a: ["will"], why: "‹er will› بلا نهاية.", tag: "modal" },
        { t: "gap", q: "صرّف möcht-.", s: "___ ihr einen Kaffee?", a: ["Möchtet"], why: "‹ihr möchtet›.", tag: "modal" },
        { t: "gap", q: "صرّف mögen.", s: "___ du Fisch?", a: ["Magst"], why: "‹du magst›.", tag: "modal" },
        { t: "mc", q: "ما معنى ‹Man darf hier nicht parken›؟", o: ["الوقوف هنا ممنوع", "لا يجب الوقوف هنا (اختياري)", "لا يستطيع أحد الوقوف"], a: 0, why: "‹nicht dürfen› = ممنوع.", tag: "modal" },
        { t: "mc", q: "ما معنى ‹Du musst nicht kommen›؟", o: ["لست مضطرًا للمجيء", "ممنوع أن تأتي", "لا تستطيع المجيء"], a: 0, why: "‹nicht müssen› = ليس ضروريًا. الممنوع هو ‹nicht dürfen›.", tag: "modal" },
        { t: "mc", q: "في المطعم، أي طلب أكثر أدبًا؟", o: ["Ich möchte ein Wasser.", "Ich will ein Wasser.", "Ich darf ein Wasser."], a: 0, why: "‹möchte› مهذبة؛ ‹will› قد تبدو فظّة في الطلب.", tag: "modal" },
        { t: "order", q: "رتّب الجملة.", a: "Im Stadtpark darf man ein Picknick machen.", why: "‹darf› ثانيًا، ‹machen› في الآخر.", tag: "modal" },
        { t: "order", q: "رتّب السؤال.", a: "Können wir am Samstag ins Kino gehen?", why: "سؤال نعم/لا: الفعل الناقص أولًا والمصدر في الآخر.", tag: "modal" },
        { t: "match", q: "صِل الفعل الناقص بمعناه.", pairs: [["müssen", "يجب"], ["können", "يستطيع"], ["dürfen", "يُسمح"], ["wollen", "يريد"], ["möchten", "يودّ"]], tag: "modal" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "هل يُسمح بالتدخين هنا؟", a: ["Darf man hier rauchen?"], tag: "modal" },
        { t: "read", title: "Kurznachrichten", text: "Hallo Leo, wie geht's? War in Madrid. Glaube, du magst Schinken und spanische Wurst. Möchte dich einladen. Wo darf man in Hall ein Picknick machen? Gruß Bea — Hallo Bea, toll! Im Stadtpark darf man ein Picknick machen, aber man darf nicht grillen. Ich muss jetzt zur Probe, ich darf nicht zu spät kommen. Heute Abend 18 Uhr? Gruß Leo", tr: "مرحبًا ليو، كيف حالك؟ كنت في مدريد. أظن أنك تحب الجامبون والنقانق الإسبانية. أريد أن أدعوك. أين يُسمح بعمل نزهة في هال؟ تحياتي، بيا — مرحبًا بيا، رائع! في حديقة المدينة يُسمح بالنزهة لكن لا يُسمح بالشواء. يجب أن أذهب الآن إلى البروفة، لا يجوز أن أتأخر. الليلة الساعة 18؟ تحياتي، ليو", items: [
          { t: "tf", s: "Im Stadtpark darf man grillen.", a: false, why: "‹aber man darf nicht grillen›." },
          { t: "tf", s: "Leo darf nicht zu spät zur Probe kommen.", a: true, why: "‹ich darf nicht zu spät kommen›." },
          { t: "tf", s: "Bea möchte Leo einladen.", a: true, why: "‹Möchte dich einladen.›" }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Was machen wir am Wochenende?", ar: "ماذا نفعل في عطلة الأسبوع؟",
        scene: "صديقتك بيا تتصل بك لتخطيط شيء معًا في عطلة الأسبوع.",
        who: { A: "Bea" },
        lines: [
          { s: "A", de: "Hi! Was willst du am Wochenende machen?", ar: "مرحبًا! ماذا تريد أن تفعل في عطلة الأسبوع؟" },
          { s: "U", task: "اقترح الذهاب إلى السينما يوم السبت (استعمل können).", m: "Können wir am Samstag ins Kino gehen?", ok: ["Können wir am Samstag ins Kino gehen", "Wir können am Samstag ins Kino gehen", "Am Samstag können wir ins Kino gehen", "Ich möchte am Samstag ins Kino gehen", "Ich will am Samstag ins Kino gehen"], o: ["Können wir am Samstag ins Kino gehen?", "Können wir gehen am Samstag ins Kino?", "Kann wir am Samstag ins Kino gehen?"], why: ["", "المصدر ‹gehen› في الآخر.", "مع ‹wir›: ‹können›."], ar: "هل يمكننا الذهاب إلى السينما يوم السبت؟" },
          { s: "A", de: "Am Samstag geht nicht, da muss ich arbeiten. Kannst du am Sonntag?", ar: "السبت غير ممكن، يجب أن أعمل. هل تستطيع الأحد؟" },
          { s: "U", task: "قل: نعم، الأحد مناسب. في أي ساعة؟", m: "Ja, Sonntag passt. Um wie viel Uhr?", ok: ["Ja Sonntag passt um wie viel Uhr", "Ja am Sonntag kann ich um wie viel Uhr", "Ja das passt um wie viel Uhr", "Ja am Sonntag geht es um wie viel Uhr", "Ja Sonntag geht um wie viel Uhr"], o: ["Ja, Sonntag passt. Um wie viel Uhr?", "Ja, Sonntag passt. Wie viele Uhr?", "Nein, Sonntag geht nicht."], why: ["", "السؤال عن الساعة: ‹Um wie viel Uhr?›", "أنت تريد أن توافق!"], ar: "نعم، الأحد مناسب. في أي ساعة؟" },
          { s: "A", de: "Um sieben? Danach können wir essen gehen. Was magst du?", ar: "في السابعة؟ بعدها يمكننا الذهاب للأكل. ماذا تحب؟" },
          { s: "U", task: "قل: أحب السمك، لكنني لا آكل اللحم.", m: "Ich mag Fisch, aber ich esse kein Fleisch.", ok: ["Ich mag Fisch aber ich esse kein Fleisch", "Ich mag Fisch aber kein Fleisch", "Ich esse gern Fisch aber kein Fleisch"], o: ["Ich mag Fisch, aber ich esse kein Fleisch.", "Ich mögen Fisch, aber ich esse nicht Fleisch.", "Ich mag Fisch, aber esse ich kein Fleisch."], why: ["", "‹ich mag›، ونفي الاسم بـ ‹kein›.", "بعد ‹aber› ترتيب عادي: ‹ich esse›."], ar: "أحب السمك، لكنني لا آكل اللحم." },
          { s: "A", de: "Super, dann gehen wir ins Fischrestaurant! Bis Sonntag!", ar: "ممتاز، إذن نذهب إلى مطعم السمك! إلى الأحد!" }
        ]
      },
      listen: [
        { t: "listen", say: "Im Stadtpark darf man ein Picknick machen, aber man darf nicht grillen.", q: "ماذا لا يُسمح في الحديقة؟", o: ["الشواء", "النزهة", "اللعب"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Am Freitag muss Beatriz arbeiten. Am Samstag will sie eine Radtour machen.", q: "ماذا تريد بياتريس أن تفعل يوم السبت؟", o: ["جولة بالدراجة", "العمل", "الذهاب إلى السينما"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Darf ich hier mein Handy benutzen? – Nein, hier ist das verboten.", q: "هل يُسمح باستعمال الهاتف؟", o: ["لا، ممنوع", "نعم، مسموح", "فقط في المساء"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Was willst du am Wochenende machen?", tag: "hoeren" },
        { t: "dict", say: "Hier darf man nicht rauchen.", tag: "hoeren" }
      ]
    },

    /* ───────────── 4C ───────────── */
    {
      id: "4C", de: "Im Beruf", ar: "في العمل",
      summary: "المهن، البريد الإلكتروني الرسمي، الأشهر والفصول، الأعداد الترتيبية والتاريخ، حروف الزمن am / im / um / von … bis.",
      grammar: [
        {
          h: "الأشهر والفصول",
          p: "كل الأشهر والفصول وأوقات اليوم **مذكرة** (der) — ما عدا ‹die Nacht›.",
          table: {
            head: ["الشتاء ‹der Winter›", "الربيع ‹der Frühling›", "الصيف ‹der Sommer›", "الخريف ‹der Herbst›"],
            rows: [
              ["‹Dezember›", "‹März›", "‹Juni›", "‹September›"],
              ["‹Januar›", "‹April›", "‹Juli›", "‹Oktober›"],
              ["‹Februar›", "‹Mai›", "‹August›", "‹November›"]
            ]
          }
        },
        {
          h: "حروف الجر مع الزمن: Wann?",
          table: {
            head: ["الحرف", "مع", "مثال"],
            rows: [
              ["‹im›", "الشهر، الفصل", "‹im Juli, im Sommer›"],
              ["‹am›", "اليوم، وقت اليوم، التاريخ", "‹am Montag, am Vormittag, am 17. April›"],
              ["‹um›", "الساعة", "‹um 10 Uhr›"],
              ["‹von … bis›", "مدة", "‹vom 3. bis zum 5. September›"],
              ["–", "السنة (بلا حرف)", "‹2026 fahre ich nach Deutschland.›"]
            ]
          },
          ex: [["Wann ist das Meeting? – Am Montag, am 17. April, am Vormittag um 10 Uhr.", "متى الاجتماع؟ – يوم الاثنين، 17 أبريل، صباحًا الساعة العاشرة."]]
        },
        {
          h: "الأعداد الترتيبية والتاريخ",
          list: [
            "من 1 إلى 19: العدد + ‑te: ‹der zweite, der vierte, der neunzehnte›. استثناءات: ‹der erste› (1.)، ‹der dritte› (3.)، ‹der siebte› (7.)، ‹der achte› (8.).",
            "من 20 فما فوق: + ‑ste: ‹der zwanzigste, der einunddreißigste›.",
            "مع ‹am› و‹vom/zum› تصبح النهاية ‑ten: ‹am ersten Mai, am 17. (siebzehnten) April›.",
            "نقرأ ‹2.8.› هكذا: ‹der zweite Achte› أو ‹der zweite August›. وفي الكتابة: نقطة بعد العدد."
          ],
          ex: [["Der Wievielte ist heute? – Heute ist der 21. Oktober.", "كم التاريخ اليوم؟ – اليوم 21 أكتوبر."], ["Wann hast du Geburtstag? – Am 15. März.", "متى عيد ميلادك؟ – في 15 مارس."], ["Wir machen vom 20. August bis zum 3. September Urlaub.", "نأخذ عطلة من 20 أغسطس إلى 3 سبتمبر."]]
        },
        {
          h: "السنوات",
          p: "قبل 2000 نقرأ مئات: ‹1995 = neunzehnhundertfünfundneunzig›. من 2000: ‹2026 = zweitausendsechsundzwanzig›."
        },
        {
          h: "البريد الرسمي",
          list: ["البداية: ‹Sehr geehrte Frau Danner,› / ‹Sehr geehrter Herr Kuhler,› / ‹Sehr geehrte Damen und Herren,› (لمن لا تعرف اسمه).", "نستعمل ‹Sie› و‹Ihr/Ihre› بحرف كبير.", "الختام: ‹Mit freundlichen Grüßen› + الاسم الكامل."]
        }
      ],
      vocab: [
        ["n", "der", "Beruf", "-e", "المهنة", "Was sind Sie von Beruf?", "ما مهنتك؟"],
        ["n", "die", "Arbeit", "-en", "العمل", "Die Arbeit macht Spaß.", "العمل ممتع."],
        ["n", "der", "Webentwickler", "-", "مطوّر المواقع", "Beatriz ist Webentwicklerin.", "بياتريس مطوّرة مواقع."],
        ["n", "der", "Informatiker", "-", "المختص في المعلوميات", "Ich möchte Informatiker werden.", "أريد أن أصبح مختصًا في المعلوميات."],
        ["n", "die", "Informatikerin", "-nen", "المختصة في المعلوميات", "Sie ist Informatikerin.", "هي مختصة في المعلوميات."],
        ["n", "der", "Schauspieler", "-", "الممثّل", "Leopold ist Schauspieler.", "ليوبولد ممثّل."],
        ["n", "der", "Arzt", "¨-e", "الطبيب", "Der Arzt hilft Menschen.", "الطبيب يساعد الناس."],
        ["n", "die", "Ärztin", "-nen", "الطبيبة", "Meine Schwester ist Ärztin.", "أختي طبيبة."],
        ["n", "der", "Koch", "¨-e", "الطبّاخ", "Leopold war zuerst Koch.", "كان ليوبولد طبّاخًا في البداية."],
        ["n", "die", "Köchin", "-nen", "الطبّاخة", "Die Köchin arbeitet im Restaurant.", "الطبّاخة تعمل في المطعم."],
        ["n", "der", "Jurist", "-en", "القانوني / رجل القانون", "Der Jurist arbeitet viel.", "القانوني يعمل كثيرًا."],
        ["n", "der", "Betriebswirt", "-e", "خبير إدارة الأعمال", "Er ist Betriebswirt.", "هو خبير في إدارة الأعمال."],
        ["n", "der", "Architekt", "-en", "المهندس المعماري", "Der Architekt plant Häuser.", "المهندس المعماري يخطط المنازل."],
        ["n", "der", "Automechaniker", "-", "ميكانيكي السيارات", "Der Automechaniker repariert Autos.", "الميكانيكي يصلح السيارات."],
        ["n", "der", "Sänger", "-", "المغنّي", "Er möchte Sänger werden.", "يريد أن يصبح مغنيًا."],
        ["n", "der", "Kollege", "-n", "الزميل في العمل", "Mein Kollege kommt aus Spanien.", "زميلي من إسبانيا."],
        ["n", "die", "Kollegin", "-nen", "الزميلة في العمل", "Kann ich mit Frau Kuhler zusammenarbeiten?", "هل يمكنني العمل مع السيدة كولر؟"],
        ["n", "der", "Chef", "-s", "المدير", "Ich schreibe meinem Chef eine Mail.", "أكتب بريدًا لمديري."],
        ["n", "die", "Chefin", "-nen", "المديرة", "Die Chefin heißt Frau Danner.", "المديرة اسمها السيدة دانر."],
        ["n", "das", "Unternehmen", "-", "الشركة / المؤسسة", "Das Unternehmen ist international.", "الشركة دولية."],
        ["n", "die", "Firma", "=Firmen", "الشركة", "Ich arbeite bei einer Firma in Rabat.", "أعمل في شركة في الرباط."],
        ["n", "das", "Team", "-s", "الفريق", "Unser Team ist klein.", "فريقنا صغير."],
        ["n", "das", "Meeting", "-s", "الاجتماع", "Das Meeting ist am Montag.", "الاجتماع يوم الاثنين."],
        ["n", "die", "Besprechung", "-en", "الاجتماع / المناقشة", "Ich habe eine Besprechung.", "عندي اجتماع."],
        ["n", "das", "Treffen", "-", "اللقاء", "Das Treffen ist in Barcelona.", "اللقاء في برشلونة."],
        ["n", "der", "Urlaub", "-e", "الإجازة", "Im August mache ich Urlaub.", "في أغسطس آخذ إجازة."],
        ["n", "der", "Geburtstag", "-e", "عيد الميلاد", "Wann hast du Geburtstag?", "متى عيد ميلادك؟"],
        ["n", "das", "Jahr", "-e", "السنة", "Das Jahr hat zwölf Monate.", "السنة فيها اثنا عشر شهرًا."],
        ["n", "der", "Monat", "-e", "الشهر", "Welcher Monat ist jetzt?", "أي شهر الآن؟"],
        ["n", "das", "Datum", "=Daten", "التاريخ", "Welches Datum ist heute?", "ما تاريخ اليوم؟"],
        ["n", "die", "Jahreszeit", "-en", "الفصل (من السنة)", "Welche Jahreszeit magst du?", "أي فصل تحب؟"],
        ["n", "der", "Frühling", "-e", "الربيع", "Im Frühling ist es warm.", "في الربيع الجو دافئ."],
        ["n", "der", "Sommer", "-", "الصيف", "Im Sommer ist es heiß.", "في الصيف الجو حار."],
        ["n", "der", "Herbst", "-e", "الخريف", "Im Herbst regnet es oft.", "في الخريف تمطر كثيرًا."],
        ["n", "der", "Winter", "-", "الشتاء", "Im Winter schneit es.", "في الشتاء تثلج."],
        ["n", "der", "Januar", "-e", "يناير", "Im Januar ist es kalt.", "في يناير الجو بارد."],
        ["n", "der", "Februar", "-e", "فبراير", "Der Februar hat 28 Tage.", "فبراير فيه 28 يومًا."],
        ["n", "der", "März", "-e", "مارس", "Im März habe ich Zeit.", "في مارس عندي وقت."],
        ["n", "der", "April", "-e", "أبريل", "Am 17. April ist das Meeting.", "الاجتماع في 17 أبريل."],
        ["n", "der", "Mai", "-e", "ماي (مايو)", "Am ersten Mai ist Feiertag.", "الأول من ماي يوم عطلة."],
        ["n", "der", "Juni", "-s", "يونيو", "Im Juni beginnt der Sommer.", "في يونيو يبدأ الصيف."],
        ["n", "der", "Juli", "-s", "يوليوز (يوليو)", "Im Juli muss der Webshop online gehen.", "في يوليو يجب أن يكون المتجر الإلكتروني جاهزًا."],
        ["n", "der", "August", "-e", "غشت (أغسطس)", "Im August mache ich Urlaub.", "في أغسطس آخذ إجازة."],
        ["n", "der", "September", "-", "شتنبر (سبتمبر)", "Das Treffen ist im September.", "اللقاء في سبتمبر."],
        ["n", "der", "Oktober", "-", "أكتوبر", "Heute ist der 21. Oktober.", "اليوم 21 أكتوبر."],
        ["n", "der", "November", "-", "نونبر (نوفمبر)", "Im November regnet es oft.", "في نوفمبر تمطر كثيرًا."],
        ["n", "der", "Dezember", "-", "دجنبر (ديسمبر)", "Im Dezember ist Winter.", "في ديسمبر الشتاء."],
        ["v", "", "reparieren", "", "يصلح", "Er repariert Autos.", "يصلح السيارات."],
        ["v", "", "helfen", "du hilfst, er hilft", "يساعد", "Als Arzt kann man Menschen helfen.", "كطبيب يمكن مساعدة الناس."],
        ["v", "", "unterrichten", "", "يدرّس", "Sie unterrichtet Deutsch.", "هي تدرّس الألمانية."],
        ["v", "", "verkaufen", "", "يبيع", "Wir verkaufen Software.", "نبيع البرمجيات."],
        ["v", "", "telefonieren", "", "يتصل هاتفيًا", "Ich telefoniere mit Kunden.", "أتصل بالعملاء."],
        ["v", "", "werden", "du wirst, er wird", "يصبح", "Ich möchte Ingenieur werden.", "أريد أن أصبح مهندسًا."],
        ["a", "", "weltweit", "", "عالمي", "Die Firma arbeitet weltweit.", "الشركة تعمل عالميًا."],
        ["a", "", "innovativ", "", "مبتكر", "Das Team ist innovativ.", "الفريق مبتكر."],
        ["x", "", "Sehr geehrte Frau …,", "", "السيدة المحترمة … (بداية رسالة رسمية)", "Sehr geehrte Frau Danner,", "السيدة دانر المحترمة،"],
        ["x", "", "Mit freundlichen Grüßen", "", "مع أطيب التحيات (ختام رسمي)", "Mit freundlichen Grüßen, Beatriz García", "مع أطيب التحيات، بياتريس غارسيا"]
      ],
      phrases: [
        ["Was sind Sie von Beruf? – Ich bin Informatiker.", "ما مهنتك؟ – أنا مختص في المعلوميات."],
        ["Welchen Beruf findest du interessant?", "أي مهنة تجدها مثيرة للاهتمام؟"],
        ["Ich finde die Arbeit als Lehrerin interessant, denn man kann kreativ sein.", "أجد العمل كمعلّمة مثيرًا لأنه يمكن أن تكون مبدعًا."],
        ["Wann ist das Meeting? – Am Montag, am 17. April, um 10 Uhr.", "متى الاجتماع؟ – الاثنين 17 أبريل الساعة 10."],
        ["Der Wievielte ist heute? – Heute ist der 21. Oktober.", "كم التاريخ اليوم؟ – اليوم 21 أكتوبر."],
        ["Wann hast du Geburtstag? – Am 15. März.", "متى عيد ميلادك؟ – في 15 مارس."],
        ["Vom 20. August bis zum 3. September möchte ich Urlaub machen.", "من 20 أغسطس إلى 3 سبتمبر أريد أن آخذ إجازة."]
      ],
      ex: [
        { t: "mc", q: "اختر الحرف المناسب.", s: "___ Juli muss der Webshop online gehen.", o: ["Im", "Am", "Um"], a: 0, why: "مع الأشهر: ‹im Juli›.", tag: "datum" },
        { t: "mc", q: "اختر الحرف المناسب.", s: "Das Meeting ist ___ 17. April.", o: ["am", "im", "um"], a: 0, why: "مع التاريخ: ‹am 17. April›.", tag: "datum" },
        { t: "mc", q: "اختر الحرف المناسب.", s: "___ Winter schneit es.", o: ["Im", "Am", "Um"], a: 0, why: "مع الفصول: ‹im Winter›.", tag: "datum" },
        { t: "gap", q: "أكمل بحروف الزمن.", s: "Das Meeting ist ___ Montag ___ 10 Uhr.", a: ["am", "um"], why: "‹am› + اليوم، ‹um› + الساعة.", tag: "datum" },
        { t: "mc", q: "كيف نقول «في الأول من ماي»؟", o: ["am ersten Mai", "am einsten Mai", "im ersten Mai"], a: 0, why: "1. = ‹erste› (استثناء)، ومع ‹am› تنتهي ‑ten: ‹am ersten›.", tag: "datum" },
        { t: "mc", q: "كيف نقول «في الثالث من مارس»؟", o: ["am dritten März", "am dreiten März", "am dreizehnten März"], a: 0, why: "3. = ‹dritte› (استثناء) → ‹am dritten›.", tag: "datum" },
        { t: "gap", q: "اكتب العدد الترتيبي.", s: "Heute ist der ___ (7.) Mai.", a: ["siebte"], why: "7. = ‹siebte› (بدون en).", tag: "datum", wrong: { "siebente": "‹siebente› قديمة ونادرة؛ الشائع ‹siebte›.", "siebenten": "مع ‹der› في الرفع النهاية ‑e: ‹der siebte›. ‹am siebten› مع am." } },
        { t: "gap", q: "اكتب التاريخ بالحروف.", s: "Mein Geburtstag ist am ___ (20.) Juni.", a: ["zwanzigsten"], why: "من 20: ‑ste، ومع ‹am›: ‹am zwanzigsten›.", tag: "datum" },
        { t: "mc", q: "كيف نقرأ السنة 1995؟", o: ["neunzehnhundertfünfundneunzig", "eintausendneunhundertfünfundneunzig", "neunzehnneunzigfünf"], a: 0, why: "قبل 2000 نقرأ بالمئات: ‹neunzehnhundert…›.", tag: "zahlen" },
        { t: "mc", q: "كيف تبدأ بريدًا رسميًا للسيد كولر؟", o: ["Sehr geehrter Herr Kuhler,", "Sehr geehrte Herr Kuhler,", "Lieber Herr Kuhler,"], a: 0, why: "للرجل: ‹Sehr geehrter›؛ للمرأة: ‹Sehr geehrte›.", tag: "schreiben" },
        { t: "mc", q: "ما جنس ‹Oktober›؟", o: ["der", "die", "das"], a: 0, why: "كل الأشهر مذكرة.", tag: "artikel" },
        { t: "match", q: "صِل المهنة بعملها.", pairs: [["der Arzt", "يساعد المرضى"], ["der Koch", "يطبخ في المطعم"], ["der Automechaniker", "يصلح السيارات"], ["der Webentwickler", "يبني المواقع"], ["der Lehrer", "يدرّس"]], tag: "wortschatz" },
        { t: "order", q: "رتّب الجملة.", a: "Im März habe ich Zeit.", why: "‹Im März› في المكان 1، الفعل ثانيًا.", tag: "wortstellung" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "عيد ميلادي في 15 مارس.", a: ["Mein Geburtstag ist am 15. März.", "Ich habe am 15. März Geburtstag.", "Mein Geburtstag ist am fünfzehnten März."], tag: "datum" },
        { t: "read", title: "Eine Mail an die Chefin", text: "Sehr geehrte Frau Danner, im Juli muss der Webshop online gehen. Im März habe ich Zeit und kann eine Ideenliste machen. Ich habe noch eine Frage: Kann ich im Herbst Kollegen in Spanien treffen? In Barcelona ist vom 3.9. bis zum 5.9. ein Treffen für Webentwickler. Vom 20. August bis 3. September möchte ich Urlaub machen, denn meine Schwester kommt nach Deutschland. Mit freundlichen Grüßen, Beatriz García", tr: "السيدة دانر المحترمة، في يوليو يجب أن يعمل المتجر الإلكتروني. في مارس عندي وقت وأستطيع عمل قائمة أفكار. عندي سؤال: هل يمكنني لقاء زملاء في إسبانيا في الخريف؟ في برشلونة لقاء لمطوري المواقع من 3 إلى 5 سبتمبر. من 20 أغسطس إلى 3 سبتمبر أريد أخذ إجازة لأن أختي قادمة إلى ألمانيا. مع أطيب التحيات، بياتريس غارسيا", items: [
          { t: "tf", s: "Der Webshop muss im März online gehen.", a: false, why: "في يوليو: ‹im Juli muss der Webshop online gehen›." },
          { t: "tf", s: "Das Treffen in Barcelona ist im September.", a: true, why: "من 3.9 إلى 5.9." },
          { t: "tf", s: "Beatriz möchte im August Urlaub machen.", a: true, why: "‹Vom 20. August bis 3. September›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Ein Termin im Büro", ar: "موعد في المكتب",
        scene: "زميلتك السيدة كولر تتصل بك لتحديد موعد اجتماع عمل.",
        who: { A: "Frau Kuhler" },
        lines: [
          { s: "A", de: "Guten Tag! Wir müssen über das Projekt sprechen. Haben Sie am Montag Zeit?", ar: "مرحبًا! يجب أن نتحدث عن المشروع. هل لديك وقت يوم الاثنين؟" },
          { s: "U", task: "قل بأدب: آسف، يوم الاثنين عندي اجتماع. هل الثلاثاء ممكن؟", m: "Tut mir leid, am Montag habe ich eine Besprechung. Geht es am Dienstag?", ok: ["Tut mir leid am Montag habe ich eine Besprechung geht es am Dienstag", "Tut mir leid am Montag habe ich ein Meeting geht es am Dienstag", "Leider habe ich am Montag eine Besprechung geht Dienstag", "Tut mir leid am Montag habe ich eine Besprechung geht Dienstag", "Tut mir leid am Montag habe ich eine Besprechung *"], o: ["Tut mir leid, am Montag habe ich eine Besprechung. Geht es am Dienstag?", "Tut mir leid, am Montag ich habe eine Besprechung.", "Tut mir leid, im Montag habe ich eine Besprechung."], why: ["", "بعد ‹am Montag› يأتي الفعل: ‹habe ich›.", "مع الأيام: ‹am Montag›."], ar: "آسف، يوم الاثنين عندي اجتماع. هل الثلاثاء ممكن؟" },
          { s: "A", de: "Ja, Dienstag geht. Um wie viel Uhr können Sie?", ar: "نعم، الثلاثاء ممكن. في أي ساعة تستطيع؟" },
          { s: "U", task: "قل: أستطيع في العاشرة صباحًا.", m: "Ich kann um 10 Uhr am Vormittag.", ok: ["Ich kann um * Uhr *", "Um * Uhr *", "Ich kann am Vormittag um * Uhr", "Um zehn Uhr kann ich"], o: ["Ich kann um 10 Uhr am Vormittag.", "Ich kann am 10 Uhr.", "Ich kann im 10 Uhr."], why: ["", "مع الساعة: ‹um›.", "مع الساعة: ‹um›."], ar: "أستطيع في العاشرة صباحًا." },
          { s: "A", de: "Gut. Und wann machen Sie dieses Jahr Urlaub?", ar: "جيد. ومتى تأخذ إجازتك هذه السنة؟" },
          { s: "U", task: "قل: في أغسطس، من 1 إلى 20 أغسطس.", m: "Im August, vom ersten bis zum zwanzigsten August.", ok: ["Im August *", "Vom ersten bis zum zwanzigsten August", "Vom 1. bis zum 20. August", "Im August vom 1. bis 20. August"], o: ["Im August, vom ersten bis zum zwanzigsten August.", "Am August, von eins bis zwanzig August.", "Um August."], why: ["", "مع الأشهر ‹im›، والتاريخ بالأعداد الترتيبية.", "مع الأشهر: ‹im August›."], ar: "في أغسطس، من الأول إلى العشرين من أغسطس." },
          { s: "A", de: "Danke! Dann bis Dienstag um zehn. Auf Wiederhören!", ar: "شكرًا! إذن إلى الثلاثاء في العاشرة. إلى اللقاء (هاتفيًا)!" },
          { s: "U", task: "ودّعها في الهاتف بشكل رسمي.", m: "Auf Wiederhören, Frau Kuhler!", ok: ["Auf Wiederhören *", "Auf Wiederhören"], o: ["Auf Wiederhören, Frau Kuhler!", "Tschüss, Kuhler!", "Gute Nacht!"], why: ["", "غير رسمي ولا نستعمل اللقب وحده.", "غير مناسب."], ar: "إلى اللقاء يا سيدة كولر!" }
        ]
      },
      listen: [
        { t: "listen", say: "Am Donnerstag, also am zwölften Mai, ist der Kinostart.", q: "ما تاريخ عرض الفيلم؟", o: ["12 ماي", "2 ماي", "20 ماي"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Mein Geburtstag ist am dritten Oktober.", q: "متى عيد ميلاده؟", o: ["3 أكتوبر", "13 أكتوبر", "30 أكتوبر"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Wir machen vom zehnten bis zum einundzwanzigsten Juni Urlaub.", q: "متى الإجازة؟", o: ["10–21 يونيو", "10–21 يوليو", "1–21 يونيو"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Leopold war zuerst Koch, dann Gitarrist. Jetzt ist er Schauspieler.", q: "ما مهنته الآن؟", o: ["ممثّل", "طبّاخ", "عازف غيتار"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Heute ist der einundzwanzigste Oktober.", ans: ["Heute ist der einundzwanzigste Oktober.", "Heute ist der 21. Oktober."], tag: "hoeren" },
        { t: "dict", say: "Wann hast du Geburtstag?", tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "Lange und kurze Vokale", ar: "حروف العلة الطويلة والقصيرة",
    body: [
      { p: "طول حرف العلة يغيّر المعنى في الألمانية: ‹Staat› (دولة) ≠ ‹Stadt› (مدينة)، ‹ihn› ≠ ‹in›. والكتابة تساعدك على معرفة الطول:" },
      { table: { head: ["القاعدة", "الطول", "أمثلة"], rows: [
        ["حرف علة + ‹h›", "طويل", "‹Lehrer, Bahn, Uhr, ihn›"],
        ["حرف علة مضاعف", "طويل", "‹Tee, Boot, Saal›"],
        ["‹ie›", "طويل دائمًا", "‹vier, Liebe, spielen›"],
        ["حرف علة + حرف ساكن واحد (غالبًا)", "طويل", "‹Name, Tag, gut›"],
        ["حرف علة + حرفان ساكنان أو مضاعف", "قصير", "‹Koch, Kellner, kommen, Mutter, Arzt›"]
      ] } },
      { tip: "اختبر نفسك بأسماء العائلات: ‹Dahner› (طويل) ≠ ‹Danner› (قصير)، ‹Niemer› ≠ ‹Nimmer›، ‹Kuhler› ≠ ‹Kuller›." }
    ],
    drills: [
      { t: "listen", say: "Lehrer", q: "هل حرف العلة المنبور طويل أم قصير؟", o: ["طويل", "قصير"], a: 0, why: "‹eh› → طويل." },
      { t: "listen", say: "Kellner", q: "هل حرف العلة المنبور طويل أم قصير؟", o: ["قصير", "طويل"], a: 0, why: "‹ll› مضاعف → قصير." },
      { t: "listen", say: "Danner", q: "أي اسم سمعت؟", o: ["Danner (قصير)", "Dahner (طويل)"], a: 0, why: "‹nn› → a قصيرة." },
      { t: "listen", say: "Kuhler", q: "أي اسم سمعت؟", o: ["Kuhler (طويل)", "Kuller (قصير)"], a: 0, why: "‹uh› → u طويلة." },
      { t: "listen", say: "Koch", q: "هل حرف العلة طويل أم قصير؟", o: ["قصير", "طويل"], a: 0, why: "‹o› + ‹ch› → قصير." },
      { t: "listen", say: "Jurist", q: "هل حرف العلة المنبور (i) طويل أم قصير؟", o: ["قصير", "طويل"], a: 0, why: "‹i› + ‹st› → قصير، والنبر على ‑rist." }
    ],
    say: ["Herr Dahner – Herr Danner", "Frau Niemer – Frau Nimmer", "Herr Kuhler – Herr Kuller", "Lehrer", "Koch", "Arzt", "Sänger", "Philosoph", "Professor", "Der Lehrer kommt um vier."]
  },

  write: [
    {
      ar: "اكتب بريدًا رسميًا قصيرًا (5–7 جمل) لمديرك/مديرتك: تطلب إجازة (التاريخ من … إلى …) وتذكر السبب بـ denn، واسأل سؤالًا واحدًا بفعل ناقص.",
      de: "Schreiben Sie eine formelle Mail: Urlaub (von … bis …), Grund mit „denn“, eine Frage.",
      model: "Sehr geehrte Frau Danner,\nich möchte vom 1. bis zum 20. August Urlaub machen, denn meine Familie besucht mich. Im Juli kann ich das Projekt fertig machen. Ich habe noch eine Frage: Kann ich im September an einem Kurs teilnehmen?\nMit freundlichen Grüßen\nKarim Amrani",
      check: ["‹Sehr geehrte Frau … / Sehr geehrter Herr …,›", "التاريخ: ‹vom … bis zum …›", "السبب بـ ‹denn› + ترتيب عادي", "فعل ناقص + مصدر في آخر الجملة", "‹Mit freundlichen Grüßen› + الاسم الكامل"]
    }
  ],
  tutor: [
    { title: "Ein Interview", ar: "مقابلة عن حياتك", role: "eine Radioreporterin vom Stadtradio", goal: "über Arbeit und Freizeit sprechen: was man muss / kann / darf / will, Gründe mit „denn“", start: "Hallo! Wir machen ein Interview für das Stadtradio. Was müssen Sie in der Woche machen?" },
    { title: "Verabredung", ar: "ترتيب موعد مع صديق", role: "Bea, eine gute Freundin", goal: "eine Verabredung fürs Wochenende machen: Vorschläge mit können/wollen, Tag und Uhrzeit, Vorlieben (mögen)", start: "Hi! Bald ist Wochenende. Was willst du machen?" }
  ]
});

/* Lektion 5 — Spiel und Spaß */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 5,
  de: "Spiel und Spaß",
  ar: "اللعب والمتعة",
  book: "Kursbuch S. 42–49 · Übungsbuch S. 108–115",
  goals: [
    "الحديث عن وقت الفراغ والهوايات والرياضة",
    "التعبير عمّا تحب وما لا تحب: gern / lieber / nicht gern",
    "تصريف الأفعال التي يتغيّر فيها حرف العلة (lesen, fahren, laufen …)",
    "الأفعال المنفصلة (anrufen, aufstehen, mitkommen …)",
    "الحديث عن الماضي بالـ Perfekt للأفعال المنتظمة"
  ],
  units: [
    /* ───────────── 5A ───────────── */
    {
      id: "5A", de: "Das macht Spaß!", ar: "هذا ممتع!",
      summary: "الهوايات ووقت الفراغ، الأفعال بتغيير حرف العلة (e→i، e→ie، a→ä، au→äu)، wissen، gern و lieber.",
      grammar: [
        {
          h: "أفعال يتغيّر فيها حرف العلة",
          p: "بعض الأفعال الشائعة تغيّر حرف العلة **فقط مع du و er/sie/es**. باقي الضمائر عادية.",
          table: {
            head: ["", "e → i ‹sprechen›", "e → ie ‹lesen›", "a → ä ‹fahren›", "au → äu ‹laufen›"],
            rows: [
              ["‹ich›", "‹spreche›", "‹lese›", "‹fahre›", "‹laufe›"],
              ["‹du›", "‹spr**i**chst›", "‹l**ie**st›", "‹f**ä**hrst›", "‹l**äu**fst›"],
              ["‹er / sie / es›", "‹spr**i**cht›", "‹l**ie**st›", "‹f**ä**hrt›", "‹l**äu**ft›"],
              ["‹wir›", "‹sprechen›", "‹lesen›", "‹fahren›", "‹laufen›"],
              ["‹ihr›", "‹sprecht›", "‹lest›", "‹fahrt›", "‹lauft›"],
              ["‹sie / Sie›", "‹sprechen›", "‹lesen›", "‹fahren›", "‹laufen›"]
            ]
          },
          list: [
            "e → i: ‹sprechen, treffen (triffst), essen (isst), nehmen (nimmst), geben (gibst), helfen (hilfst)›",
            "e → ie: ‹lesen (liest), sehen (siehst)›",
            "a → ä: ‹fahren, schlafen (schläfst), tragen (trägst), waschen (wäschst), einladen (lädst ein)›"
          ]
        },
        {
          h: "wissen (يعرف معلومة)",
          table: { head: ["", "‹wissen›", "", "‹wissen›"], rows: [["‹ich›", "‹weiß›", "‹wir›", "‹wissen›"], ["‹du›", "‹weißt›", "‹ihr›", "‹wisst›"], ["‹er / sie / es›", "‹weiß›", "‹sie / Sie›", "‹wissen›"]] },
          tip: "‹wissen› لمعرفة معلومة: ‹Ich weiß es nicht.› أما ‹kennen› فلمعرفة شخص أو مكان: ‹Ich kenne Berlin.›"
        },
        {
          h: "gern – lieber: ما تحب وما تفضّل",
          p: "‹gern› بعد الفعل تعني «بحب»، و‹lieber› تعني «أفضّل»، و‹nicht gern› = لا أحب.",
          ex: [["Spielst du gern Fußball? – Ja, sehr gern!", "هل تحب لعب كرة القدم؟ – نعم، جدًا!"], ["Tanzt du gern? – Nein, nicht so gern.", "هل تحب الرقص؟ – لا، ليس كثيرًا."], ["Fährst du gern Fahrrad? – Nein, ich laufe lieber.", "هل تحب ركوب الدراجة؟ – لا، أفضّل الجري."], ["Liest du gern? – Nein, überhaupt nicht gern.", "هل تحب القراءة؟ – لا، لا أحبها إطلاقًا."]]
        }
      ],
      vocab: [
        ["n", "die", "Freizeit", "Sg.", "وقت الفراغ", "Was machst du in der Freizeit?", "ماذا تفعل في وقت الفراغ؟"],
        ["n", "das", "Hobby", "-s", "الهواية", "Mein Hobby ist Lesen.", "هوايتي القراءة."],
        ["n", "das", "Schwarze Brett", "Sg.", "لوحة الإعلانات", "Am Schwarzen Brett hängen Anzeigen.", "على لوحة الإعلانات توجد إعلانات."],
        ["n", "die", "Anzeige", "-n", "الإعلان", "Ich schreibe eine Anzeige.", "أكتب إعلانًا."],
        ["n", "die", "Zeitung", "-en", "الجريدة", "Ich lese die Zeitung.", "أقرأ الجريدة."],
        ["n", "das", "Buch", "¨-er", "الكتاب", "Sie liest ein Buch.", "هي تقرأ كتابًا."],
        ["n", "die", "Gitarre", "-n", "الغيتار", "Er spielt Gitarre.", "هو يعزف الغيتار."],
        ["n", "das", "Klavier", "-e", "البيانو", "Ich spiele Klavier.", "أعزف البيانو."],
        ["n", "das", "Schach", "Sg.", "الشطرنج", "Wir spielen Schach.", "نلعب الشطرنج."],
        ["n", "die", "Oper", "-n", "الأوبرا", "Gehst du gern in die Oper?", "هل تحب الذهاب إلى الأوبرا؟"],
        ["n", "das", "Internet", "Sg.", "الإنترنت", "Ich surfe im Internet.", "أتصفح الإنترنت."],
        ["n", "das", "Sofa", "-s", "الأريكة", "Ich sitze auf dem Sofa.", "أجلس على الأريكة."],
        ["n", "der", "Kontakt", "-e", "الاتصال / التواصل", "Ich suche Kontakt zu Sportlern.", "أبحث عن تواصل مع رياضيين."],
        ["n", "das", "Interesse", "-n", "الاهتمام", "Hast du Interesse?", "هل أنت مهتم؟"],
        ["v", "", "lesen", "du liest, er liest", "يقرأ", "Er liest gern Romane.", "يحب قراءة الروايات."],
        ["v", "", "sehen", "du siehst, er sieht", "يرى / يشاهد", "Siehst du gern Filme?", "هل تحب مشاهدة الأفلام؟"],
        ["v", "", "fernsehen", "du siehst fern", "يشاهد التلفاز", "Am Abend sehe ich fern.", "في المساء أشاهد التلفاز."],
        ["v", "", "fahren", "du fährst, er fährt", "يركب / يقود / يسافر", "Fährst du gern Fahrrad?", "هل تحب ركوب الدراجة؟"],
        ["v", "", "laufen", "du läufst, er läuft", "يجري / يمشي", "Er läuft jeden Morgen.", "يجري كل صباح."],
        ["v", "", "schlafen", "du schläfst, er schläft", "ينام", "Am Sonntag schläft sie lange.", "يوم الأحد تنام طويلًا."],
        ["v", "", "treffen", "du triffst, er trifft", "يلتقي", "Er trifft seine Freunde.", "يلتقي بأصدقائه."],
        ["v", "", "wissen", "ich weiß, du weißt", "يعرف (معلومة)", "Weißt du, wann das Training ist?", "هل تعرف متى التدريب؟"],
        ["v", "", "tanzen", "", "يرقص", "Tanzt du gern?", "هل تحب الرقص؟"],
        ["v", "", "spielen", "", "يلعب / يعزف", "Ich spiele gern Fußball.", "أحب لعب كرة القدم."],
        ["v", "", "schwimmen", "", "يسبح", "Im Sommer schwimme ich viel.", "في الصيف أسبح كثيرًا."],
        ["v", "", "surfen", "", "يتصفّح / يركب الأمواج", "Er surft im Internet.", "يتصفح الإنترنت."],
        ["v", "", "suchen", "", "يبحث", "Ich suche einen Tennispartner.", "أبحث عن شريك تنس."],
        ["v", "", "wünschen", "", "يتمنى", "Ich wünsche dir viel Spaß.", "أتمنى لك وقتًا ممتعًا."],
        ["a", "", "glücklich", "", "سعيد", "Sie ist glücklich.", "هي سعيدة."],
        ["a", "", "zufrieden", "", "راضٍ", "Ich bin zufrieden.", "أنا راضٍ."],
        ["a", "", "blöd", "", "سخيف / غبي (عامية)", "Das ist blöd!", "هذا سخيف!"],
        ["a", "", "wunderbar", "", "رائع / عجيب", "Das Wetter ist wunderbar.", "الطقس رائع."],
        ["d", "", "gern", "", "بحب / بسرور", "Ich lese gern.", "أحب القراءة."],
        ["d", "", "lieber", "", "أفضل (تفضيلًا)", "Ich trinke lieber Tee.", "أفضّل الشاي."],
        ["d", "", "überhaupt nicht", "", "إطلاقًا لا", "Ich tanze überhaupt nicht gern.", "لا أحب الرقص إطلاقًا."],
        ["d", "", "allein", "", "وحده", "Ich jogge nicht gern allein.", "لا أحب الجري وحدي."],
        ["x", "", "Das macht Spaß!", "", "هذا ممتع!", "Fußball macht Spaß!", "كرة القدم ممتعة!"],
        ["x", "", "Auf keinen Fall!", "", "على الإطلاق لا! / مستحيل!", "Fallschirmspringen? Auf keinen Fall!", "القفز بالمظلة؟ مستحيل!"]
      ],
      phrases: [
        ["Was machst du in deiner Freizeit?", "ماذا تفعل في وقت فراغك؟"],
        ["Spielst du gern Fußball? – Ja, sehr gern.", "هل تحب لعب كرة القدم؟ – نعم، كثيرًا."],
        ["Liest du gern? – Nein, überhaupt nicht gern.", "هل تحب القراءة؟ – لا، إطلاقًا."],
        ["Fährst du gern Fahrrad? – Nein, ich laufe lieber.", "هل تحب ركوب الدراجة؟ – لا، أفضّل الجري."],
        ["Ich sehe nicht so gern fern, ich lese lieber.", "لا أحب مشاهدة التلفاز كثيرًا، أفضّل القراءة."],
        ["Weißt du, wann das Training beginnt? – Nein, das weiß ich nicht.", "هل تعرف متى يبدأ التدريب؟ – لا، لا أعرف."]
      ],
      ex: [
        { t: "gap", q: "صرّف الفعل.", s: "Er ___ gern Romane. (lesen)", a: ["liest"], why: "‹lesen›: e → ie → ‹er liest›.", tag: "vokalwechsel", wrong: { "lest": "‹lest› لـ ihr. مع er: ‹liest›." } },
        { t: "gap", q: "صرّف الفعل.", s: "___ du gern Fahrrad? (fahren)", a: ["Fährst"], why: "‹fahren›: a → ä → ‹du fährst›.", tag: "vokalwechsel", wrong: { "fahrst": "لا تنسَ Umlaut: ‹fährst›." } },
        { t: "gap", q: "صرّف الفعل.", s: "Anna ___ jeden Morgen fünf Kilometer. (laufen)", a: ["läuft"], why: "‹laufen›: au → äu → ‹sie läuft›.", tag: "vokalwechsel" },
        { t: "gap", q: "صرّف الفعل.", s: "Am Sonntag ___ Tobias lange. (schlafen)", a: ["schläft"], why: "‹schlafen›: a → ä → ‹er schläft›.", tag: "vokalwechsel" },
        { t: "gap", q: "صرّف الفعل.", s: "Wen ___ du heute? (treffen)", a: ["triffst"], why: "‹treffen›: e → i، ومع du ‹triffst› (ff).", tag: "vokalwechsel" },
        { t: "gap", q: "صرّف الفعل.", s: "Ihr ___ viele Bücher. (lesen)", a: ["lest"], why: "مع ‹ihr› لا يتغيّر حرف العلة: ‹ihr lest›.", tag: "vokalwechsel", wrong: { "liest": "حرف العلة يتغيّر فقط مع du و er/sie/es. مع ihr: ‹lest›." } },
        { t: "gap", q: "صرّف wissen.", s: "Das ___ ich nicht.", a: ["weiß"], why: "‹ich weiß›.", tag: "vokalwechsel" },
        { t: "mc", q: "wissen أم kennen؟", s: "Ich ___ Berlin sehr gut.", o: ["kenne", "weiß"], a: 0, why: "معرفة مكان أو شخص → ‹kennen›.", tag: "vokalwechsel" },
        { t: "mc", q: "wissen أم kennen؟", s: "___ du, wann der Kurs beginnt?", o: ["Weißt", "Kennst"], a: 0, why: "معرفة معلومة → ‹wissen›.", tag: "vokalwechsel" },
        { t: "mc", q: "صديقك يسأل: ‹Spielst du gern Tennis?› أنت تفضّل كرة القدم.", o: ["Nein, ich spiele lieber Fußball.", "Nein, ich spiele gern lieber Fußball.", "Ja, ich spiele lieber nicht."], a: 0, why: "‹lieber› = أفضّل.", tag: "wortschatz" },
        { t: "order", q: "رتّب الجملة.", a: "Am Abend sieht er gern fern.", why: "‹fernsehen› فعل منفصل: ‹sieht … fern›، و‹gern› بعد الفعل.", tag: "vokalwechsel" },
        { t: "match", q: "صِل الهواية بمعناها.", pairs: [["Gitarre spielen", "عزف الغيتار"], ["im Internet surfen", "تصفح الإنترنت"], ["fernsehen", "مشاهدة التلفاز"], ["Schach spielen", "لعب الشطرنج"], ["tanzen", "الرقص"]], tag: "wortschatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "هل تحب القراءة؟", a: ["Liest du gern?", "Lesen Sie gern?"], tag: "vokalwechsel" },
        { t: "read", title: "Am Schwarzen Brett", text: "Suche Tennispartner/in! Ich heiße Paul, bin 25 und spiele seit fünf Jahren Tennis. Ich spiele gern am Abend oder am Wochenende. Joggen finde ich langweilig, ich spiele lieber Tennis. Hast du Interesse? Ruf mich an: 0176 223 45 89.", tr: "أبحث عن شريك/ة تنس! اسمي باول، عمري 25 وألعب التنس منذ خمس سنوات. أحب اللعب في المساء أو في عطلة الأسبوع. الجري أجده مملًا، أفضّل التنس. هل أنت مهتم؟ اتصل بي: …", items: [
          { t: "tf", s: "Paul spielt gern am Abend.", a: true, why: "‹am Abend oder am Wochenende›." },
          { t: "tf", s: "Paul joggt lieber.", a: false, why: "‹Joggen finde ich langweilig, ich spiele lieber Tennis.›" }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Hobbys", ar: "الهوايات",
        scene: "في استراحة الدورة تتحدث مع زميلك ماكس عن الهوايات.",
        who: { A: "Max" },
        lines: [
          { s: "A", de: "Was machst du in deiner Freizeit?", ar: "ماذا تفعل في وقت فراغك؟" },
          { s: "U", task: "قل: أحب القراءة وأحب مشاهدة الأفلام.", m: "Ich lese gern und ich sehe gern Filme.", ok: ["Ich lese gern und ich sehe gern Filme", "Ich lese gern und sehe gern Filme", "Ich lese gern *", "In meiner Freizeit lese ich gern *"], o: ["Ich lese gern und ich sehe gern Filme.", "Ich gern lese und ich gern sehe Filme.", "Ich liest gern und ich siehst gern Filme."], why: ["", "‹gern› بعد الفعل.", "مع ‹ich›: ‹lese›، ‹sehe› (التغيير فقط مع du/er)."], ar: "أحب القراءة ومشاهدة الأفلام." },
          { s: "A", de: "Cool. Spielst du auch gern Fußball?", ar: "رائع. هل تحب أيضًا كرة القدم؟" },
          { s: "U", task: "قل: لا، ليس كثيرًا. أفضّل الجري.", m: "Nein, nicht so gern. Ich laufe lieber.", ok: ["Nein nicht so gern ich laufe lieber", "Nein ich laufe lieber", "Nicht so gern ich jogge lieber", "Nein nicht so gern ich jogge lieber"], o: ["Nein, nicht so gern. Ich laufe lieber.", "Nein, nicht so gern. Ich läufe lieber.", "Nein, nicht gern. Ich lieber laufe."], why: ["", "مع ‹ich›: ‹laufe› (بدون Umlaut).", "‹lieber› بعد الفعل: ‹Ich laufe lieber.›"], ar: "لا، ليس كثيرًا. أفضّل الجري." },
          { s: "A", de: "Ich laufe auch! Mein Bruder läuft jeden Morgen zehn Kilometer.", ar: "أنا أيضًا أجري! أخي يجري كل صباح عشرة كيلومترات." },
          { s: "U", task: "اسأله: وأنت؟ كم كيلومترًا تجري؟", m: "Und du? Wie viele Kilometer läufst du?", ok: ["Und du wie viele Kilometer läufst du", "Wie viele Kilometer läufst du", "Und du wie viel läufst du", "Und wie viele Kilometer läufst du"], o: ["Und du? Wie viele Kilometer läufst du?", "Und du? Wie viele Kilometer laufst du?", "Und du? Wie viel Kilometer läuft du?"], why: ["", "مع ‹du›: ‹läufst› مع Umlaut.", "‹Kilometer› معدودة → ‹wie viele›، و‹du läufst›."], ar: "وأنت؟ كم كيلومترًا تجري؟" },
          { s: "A", de: "Fünf. Weißt du, wann das Lauftraining an der Uni ist?", ar: "خمسة. هل تعرف متى تدريب الجري في الجامعة؟" },
          { s: "U", task: "قل: لا، لا أعرف ذلك.", m: "Nein, das weiß ich nicht.", ok: ["Nein das weiß ich nicht", "Das weiß ich nicht", "Nein ich weiß das nicht", "Nein ich weiß es nicht", "Keine Ahnung"], o: ["Nein, das weiß ich nicht.", "Nein, das kenne ich nicht.", "Nein, das wisse ich nicht."], why: ["", "معلومة → ‹wissen› وليس ‹kennen›.", "‹ich weiß›."], ar: "لا، لا أعرف ذلك." }
        ]
      },
      listen: [
        { t: "listen", say: "Ich spiele nicht gern Fußball. Ich schwimme lieber.", q: "ماذا يفضّل؟", o: ["السباحة", "كرة القدم", "الجري"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Am Wochenende schläft Tobias lange und dann liest er die Zeitung.", q: "ماذا يفعل توبياس بعد النوم؟", o: ["يقرأ الجريدة", "يجري", "يشاهد التلفاز"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Fährst du gern Fahrrad? – Ja, sehr gern!", q: "هل يحب ركوب الدراجة؟", o: ["نعم كثيرًا", "لا إطلاقًا", "ليس كثيرًا"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Er liest gern.", tag: "hoeren" },
        { t: "dict", say: "Was machst du in deiner Freizeit?", tag: "hoeren" }
      ]
    },

    /* ───────────── 5B ───────────── */
    {
      id: "5B", de: "Hochschulsport", ar: "رياضة الجامعة",
      summary: "الرياضات، الأفعال المنفصلة في المضارع (قوس الجملة)، مع الأفعال الناقصة، الحديث عن الأسبوع.",
      grammar: [
        {
          h: "الأفعال المنفصلة (trennbare Verben)",
          p: "بعض الأفعال لها بادئة (‹an-, auf-, aus-, ein-, mit-, fern-, zurück-, weg-›…). في المضارع **تنفصل البادئة وتذهب إلى آخر الجملة**، والفعل المصرّف في المكان 2. البادئة منبورة دائمًا: ‹ÁNrufen›.",
          table: {
            head: ["المصدر", "المكان 1", "المكان 2", "…", "آخر الجملة"],
            rows: [
              ["‹anrufen›", "‹Ich›", "‹rufe›", "‹dich morgen›", "‹an.›"],
              ["‹aufstehen›", "‹Wann›", "‹stehst›", "‹du›", "‹auf?›"],
              ["‹anfangen›", "‹Das Training›", "‹fängt›", "‹um acht›", "‹an.›"],
              ["‹mitkommen›", "‹Kommst›", "‹du›", "‹zum Training›", "‹mit?›"],
              ["‹einkaufen›", "‹Wir›", "‹kaufen›", "‹am Samstag›", "‹ein.›"]
            ]
          }
        },
        {
          h: "الفعل المنفصل مع فعل ناقص",
          p: "مع الفعل الناقص يبقى الفعل المنفصل **ملتصقًا** في صيغة المصدر في آخر الجملة:",
          ex: [["Ich möchte unbedingt beim Lauftraining mitmachen.", "أريد حتمًا المشاركة في تدريب الجري."], ["Tim kann uns im Auto mitnehmen.", "تيم يستطيع أن يأخذنا في السيارة."], ["Ich muss morgen früh aufstehen.", "يجب أن أستيقظ مبكرًا غدًا."]]
        },
        {
          h: "حروف مفيدة",
          list: ["‹ab› + زمن = ابتداءً من: ‹ab Montag, ab Oktober›", "‹per› = عبر/بواسطة: ‹per Mail, per SMS›", "‹beim› (= bei dem) = أثناء/في: ‹beim Training, beim Sport›"]
        }
      ],
      vocab: [
        ["n", "der", "Sport", "Sg.", "الرياضة", "Ich mache gern Sport.", "أحب ممارسة الرياضة."],
        ["n", "der", "Hochschulsport", "Sg.", "رياضة الجامعة", "Der Hochschulsport ist billig.", "رياضة الجامعة رخيصة."],
        ["n", "das", "Training", "-s", "التدريب", "Das Training fängt um acht an.", "التدريب يبدأ في الثامنة."],
        ["n", "das", "Lauftraining", "-s", "تدريب الجري", "Ich mache beim Lauftraining mit.", "أشارك في تدريب الجري."],
        ["n", "die", "Mannschaft", "-en", "الفريق", "Unsere Mannschaft spielt gut.", "فريقنا يلعب جيدًا."],
        ["n", "das", "Spiel", "-e", "المباراة / اللعبة", "Das Spiel beginnt um drei.", "المباراة تبدأ في الثالثة."],
        ["n", "der", "Spieler", "-", "اللاعب", "Er ist ein guter Spieler.", "هو لاعب جيد."],
        ["n", "der", "Fan", "-s", "المشجّع", "Ich bin ein Fan von Raja.", "أنا مشجّع للرجاء."],
        ["n", "das", "Fitness-Studio", "-s", "صالة الرياضة", "Ich gehe ins Fitness-Studio.", "أذهب إلى صالة الرياضة."],
        ["n", "die", "Sporthalle", "-n", "القاعة الرياضية", "Das Training ist in der Sporthalle.", "التدريب في القاعة الرياضية."],
        ["n", "der", "Kilometer", "-", "الكيلومتر", "Ich laufe fünf Kilometer.", "أجري خمسة كيلومترات."],
        ["n", "der", "Muskelkater", "Sg.", "ألم العضلات بعد الرياضة", "Ich habe Muskelkater.", "عندي ألم في العضلات."],
        ["n", "der", "Flyer", "-", "المطوية الإعلانية", "Lies den Flyer!", "اقرأ المطوية!"],
        ["n", "der", "Vorteil", "-e", "الميزة", "Ein Vorteil: Es ist billig.", "ميزة: إنه رخيص."],
        ["n", "der", "Nachteil", "-e", "العيب", "Der Nachteil: Es ist früh.", "العيب: إنه مبكر."],
        ["n", "der", "Langschläfer", "-", "من يحب النوم طويلًا", "Ich bin ein Langschläfer.", "أنا أحب النوم طويلًا."],
        ["v", "", "anrufen", "ich rufe an · hat angerufen", "يتصل هاتفيًا", "Ich rufe dich morgen an.", "سأتصل بك غدًا."],
        ["v", "", "aufstehen", "ich stehe auf · ist aufgestanden", "ينهض / يستيقظ", "Wann stehst du auf?", "متى تستيقظ؟"],
        ["v", "", "anfangen", "es fängt an · hat angefangen", "يبدأ", "Nächste Woche fängt das Training an.", "الأسبوع القادم يبدأ التدريب."],
        ["v", "", "ausprobieren", "ich probiere aus", "يجرّب", "Wir probieren das Lauftraining aus.", "نجرّب تدريب الجري."],
        ["v", "", "mitkommen", "ich komme mit", "يأتي معه", "Kommst du mit?", "هل تأتي معنا؟"],
        ["v", "", "mitmachen", "ich mache mit", "يشارك", "Ich möchte beim Training mitmachen.", "أريد المشاركة في التدريب."],
        ["v", "", "mitnehmen", "ich nehme mit", "يأخذ معه", "Tim kann uns im Auto mitnehmen.", "تيم يستطيع أخذنا بالسيارة."],
        ["v", "", "einkaufen", "ich kaufe ein", "يتسوّق", "Am Samstag kaufe ich ein.", "يوم السبت أتسوّق."],
        ["v", "", "trainieren", "", "يتدرّب", "Wir trainieren zweimal pro Woche.", "نتدرّب مرتين في الأسبوع."],
        ["v", "", "joggen", "", "يجري (رياضة)", "Ich jogge im Park.", "أجري في الحديقة."],
        ["v", "", "Rad fahren", "ich fahre Rad", "يركب الدراجة", "Am Wochenende fahre ich Rad.", "في عطلة الأسبوع أركب الدراجة."],
        ["v", "", "wandern", "", "يمشي في الطبيعة", "Im Sommer wandern wir.", "في الصيف نتنزّه سيرًا."],
        ["v", "", "Sport treiben", "", "يمارس الرياضة", "Treibst du Sport?", "هل تمارس الرياضة؟"],
        ["v", "", "motivieren", "", "يحفّز", "Die Gruppe motiviert mich.", "المجموعة تحفّزني."],
        ["a", "", "fit", "", "لائق بدنيًا", "Ich will fit sein.", "أريد أن أكون لائقًا."],
        ["a", "", "anstrengend", "", "مُتعب / شاق", "Das Training ist anstrengend.", "التدريب شاق."],
        ["a", "", "begeistert", "", "متحمّس", "Ich bin begeistert!", "أنا متحمّس!"],
        ["p", "", "ab", "", "ابتداءً من", "Ab Montag trainiere ich.", "ابتداءً من الاثنين أتدرّب."],
        ["p", "", "per", "", "عبر / بواسطة", "Melde dich per Mail an.", "سجّل عبر البريد."]
      ],
      phrases: [
        ["Kommst du mit zum Training?", "هل تأتي معي إلى التدريب؟"],
        ["Wann fängt das Training an? – Um halb sieben.", "متى يبدأ التدريب؟ – في السادسة والنصف."],
        ["Ich rufe dich heute Abend an.", "سأتصل بك هذا المساء."],
        ["Ich möchte unbedingt mitmachen.", "أريد حتمًا المشاركة."],
        ["Am Montag stehe ich um sechs Uhr auf.", "يوم الاثنين أستيقظ في السادسة."],
        ["Ich kann zehn Minuten länger schlafen.", "أستطيع النوم عشر دقائق أطول."]
      ],
      ex: [
        { t: "order", q: "رتّب الجملة (anrufen).", a: "Ich rufe dich morgen an.", why: "الفعل ‹rufe› في المكان 2، والبادئة ‹an› في الآخر.", tag: "trennbar" },
        { t: "order", q: "رتّب السؤال (aufstehen).", a: "Wann stehst du am Montag auf?", why: "‹stehst› ثانيًا، ‹auf› في الآخر.", tag: "trennbar" },
        { t: "gap", q: "أكمل بالفعل المنفصل (anfangen).", s: "Das Training ___ um acht ___.", a: ["fängt", "an"], why: "‹anfangen› → ‹fängt … an› (a → ä مع es).", tag: "trennbar" },
        { t: "gap", q: "أكمل بالفعل المنفصل (mitkommen).", s: "___ du ins Kino ___?", a: ["Kommst", "mit"], why: "سؤال نعم/لا: ‹Kommst du … mit?›", tag: "trennbar" },
        { t: "gap", q: "أكمل بالفعل المنفصل (einkaufen).", s: "Wir ___ am Samstag im Supermarkt ___.", a: ["kaufen", "ein"], why: "‹einkaufen› → ‹kaufen … ein›.", tag: "trennbar" },
        { t: "mc", q: "أي جملة صحيحة؟", o: ["Ich möchte beim Training mitmachen.", "Ich möchte beim Training machen mit.", "Ich mitmachen möchte beim Training."], a: 0, why: "مع الفعل الناقص يبقى الفعل المنفصل كاملًا في الآخر.", tag: "trennbar" },
        { t: "mc", q: "أي جملة صحيحة؟", o: ["Tim kann uns im Auto mitnehmen.", "Tim kann uns mit im Auto nehmen.", "Tim nimmt kann uns mit."], a: 0, why: "‹kann› في المكان 2 و‹mitnehmen› في الآخر.", tag: "trennbar" },
        { t: "mc", q: "أي جملة صحيحة؟", o: ["Am Abend sehe ich fern.", "Am Abend fernsehe ich.", "Am Abend ich sehe fern."], a: 0, why: "‹fernsehen› منفصل: ‹sehe … fern›.", tag: "trennbar" },
        { t: "match", q: "صِل الفعل بمعناه.", pairs: [["anrufen", "يتّصل"], ["aufstehen", "يستيقظ"], ["mitkommen", "يأتي معه"], ["einkaufen", "يتسوّق"], ["ausprobieren", "يجرّب"]], tag: "trennbar" },
        { t: "gap", q: "أكمل بحرف الجر.", s: "___ Oktober gibt es einen neuen Kurs.", a: ["Ab"], why: "‹ab› = ابتداءً من.", tag: "wortschatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "متى تستيقظ؟", a: ["Wann stehst du auf?", "Wann stehen Sie auf?"], tag: "trennbar" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "سأتصل بك غدًا.", a: ["Ich rufe dich morgen an.", "Morgen rufe ich dich an."], tag: "trennbar" },
        { t: "read", title: "Hochschulsport: Lauftraining", text: "Lauftraining für Anfänger! Ab Oktober jeden Dienstag und Donnerstag von 7.00 bis 8.00 Uhr. Treffpunkt: vor der Sporthalle. Probier es aus und mach mit! Die ersten zwei Termine sind kostenlos. Anmeldung per Mail: sport@uni-muenster.de", tr: "تدريب جري للمبتدئين! ابتداءً من أكتوبر كل ثلاثاء وخميس من 7 إلى 8 صباحًا. نقطة اللقاء: أمام القاعة الرياضية. جرّبه وشارك! الموعدان الأولان مجانيان. التسجيل عبر البريد: …", items: [
          { t: "tf", s: "Das Training ist am Montag und Mittwoch.", a: false, why: "‹jeden Dienstag und Donnerstag›." },
          { t: "tf", s: "Das Training fängt um sieben Uhr an.", a: true, why: "‹von 7.00 bis 8.00 Uhr›." },
          { t: "tf", s: "Man meldet sich per Telefon an.", a: false, why: "‹Anmeldung per Mail›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Machst du mit?", ar: "هل تشارك؟",
        scene: "زميلتك أنيكا تريد أن تجرّب تدريب الجري في الجامعة وتسألك.",
        who: { A: "Annika" },
        lines: [
          { s: "A", de: "Ab Oktober gibt es Lauftraining an der Uni. Kommst du mit?", ar: "ابتداءً من أكتوبر هناك تدريب جري في الجامعة. هل تأتي معي؟" },
          { s: "U", task: "قل: نعم، بكل سرور! متى يبدأ التدريب؟", m: "Ja, gern! Wann fängt das Training an?", ok: ["Ja gern wann fängt das Training an", "Ja gerne wann fängt das Training an", "Gern wann fängt das Training an", "Ja wann fängt das Training an"], o: ["Ja, gern! Wann fängt das Training an?", "Ja, gern! Wann anfängt das Training?", "Ja, gern! Wann fangt das Training an?"], why: ["", "الفعل المنفصل: ‹fängt … an›.", "مع ‹das Training› (es): ‹fängt› مع Umlaut."], ar: "نعم، بكل سرور! متى يبدأ التدريب؟" },
          { s: "A", de: "Um sieben Uhr morgens. Stehst du so früh auf?", ar: "في السابعة صباحًا. هل تستيقظ مبكرًا هكذا؟" },
          { s: "U", task: "قل: عادةً أستيقظ في السادسة والنصف. هذا ليس مشكلة.", m: "Ich stehe meistens um halb sieben auf. Das ist kein Problem.", ok: ["Ich stehe meistens um halb sieben auf *", "Ich stehe um halb sieben auf *", "Meistens stehe ich um halb sieben auf *"], o: ["Ich stehe meistens um halb sieben auf. Das ist kein Problem.", "Ich aufstehe meistens um halb sieben.", "Ich stehe auf meistens um halb sieben."], why: ["", "الفعل المنفصل: ‹stehe … auf› والبادئة في الآخر.", "البادئة ‹auf› تذهب إلى آخر الجملة."], ar: "أستيقظ عادةً في السادسة والنصف. لا مشكلة." },
          { s: "A", de: "Super! Tim kann uns im Auto mitnehmen.", ar: "ممتاز! تيم يستطيع أخذنا في السيارة." },
          { s: "U", task: "قل: رائع! سأتصل بتيم هذا المساء.", m: "Toll! Ich rufe Tim heute Abend an.", ok: ["Toll ich rufe Tim heute Abend an", "Super ich rufe Tim heute Abend an", "Ich rufe Tim heute Abend an", "Toll heute Abend rufe ich Tim an"], o: ["Toll! Ich rufe Tim heute Abend an.", "Toll! Ich anrufe Tim heute Abend.", "Toll! Ich rufe an Tim heute Abend."], why: ["", "‹anrufen› منفصل: ‹rufe … an›.", "البادئة ‹an› في آخر الجملة."], ar: "رائع! سأتصل بتيم هذا المساء." }
        ]
      },
      listen: [
        { t: "listen", say: "Das Training fängt am Dienstag um halb sieben an.", q: "متى يبدأ التدريب؟", o: ["الثلاثاء 6:30", "الخميس 7:30", "الثلاثاء 7:30"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich stehe jeden Morgen um sechs auf und laufe fünf Kilometer.", q: "كم كيلومترًا يجري؟", o: ["5", "6", "15"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Kommst du mit? Wir probieren das Fitness-Studio aus.", q: "ماذا سيجربون؟", o: ["صالة الرياضة", "المسبح", "تدريب الجري"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Wann stehst du auf?", tag: "hoeren" },
        { t: "dict", say: "Ich rufe dich an.", tag: "hoeren" }
      ]
    },

    /* ───────────── 5C ───────────── */
    {
      id: "5C", de: "Gut gelaufen", ar: "جرى بشكل جيد",
      summary: "الماضي التام Perfekt للأفعال المنتظمة: haben/sein + ge…t، الأفعال المنتهية بـ ‑ieren، التسجيل في سباق.",
      grammar: [
        {
          h: "Perfekt: الماضي في الكلام اليومي",
          p: "في الكلام اليومي نتحدث عن الماضي بالـ Perfekt: **‹haben› أو ‹sein› مصرّفًا في المكان 2** + **اسم المفعول (Partizip II) في آخر الجملة**.",
          table: {
            head: ["المكان 1", "المكان 2 (haben/sein)", "…", "آخر الجملة (Partizip II)"],
            rows: [
              ["‹Ich›", "‹habe›", "‹am Wochenende Fußball›", "‹gespielt.›"],
              ["‹Wir›", "‹haben›", "‹das Ziel›", "‹geschafft.›"],
              ["‹Was›", "‹hast›", "‹du gestern›", "‹gemacht?›"],
              ["‹Tobias›", "‹ist›", "‹um 10 Uhr›", "‹gestartet.›"]
            ]
          }
        },
        {
          h: "اسم المفعول للأفعال المنتظمة",
          table: {
            head: ["القاعدة", "المصدر", "Partizip II"],
            rows: [
              ["‹ge› + الجذر + ‹t›", "‹machen, spielen, kaufen›", "‹gemacht, gespielt, gekauft›"],
              ["الجذر ينتهي بـ t/d → ‹ge› + الجذر + ‹et›", "‹arbeiten, starten, landen›", "‹gearbeitet, gestartet, gelandet›"],
              ["‑ieren → **بدون ge**: الجذر + ‹t›", "‹trainieren, passieren, studieren›", "‹trainiert, passiert, studiert›"]
            ]
          }
        },
        {
          h: "haben أم sein؟",
          list: [
            "معظم الأفعال مع ‹haben›: ‹Ich habe trainiert.›",
            "مع ‹sein›: أفعال الحركة من مكان إلى آخر (‹gehen, fahren, laufen, kommen, starten›) وأفعال تغيّر الحالة (‹aufstehen, passieren›)، وأيضًا ‹sein› و‹bleiben›.",
            "مثال: ‹Was ist passiert?› (ماذا حدث؟) ‹Sie ist um 10 Uhr gestartet.›"
          ],
          tip: "الفعل في المكان 2 والـ Partizip في الآخر — نفس فكرة قوس الجملة مع الأفعال الناقصة!"
        }
      ],
      vocab: [
        ["n", "der", "Lauf", "¨-e", "السباق (الجري)", "Der Campus-Lauf ist am Samstag.", "سباق الحرم الجامعي يوم السبت."],
        ["n", "der", "Start", "-s", "الانطلاق", "Der Start ist um zehn Uhr.", "الانطلاق في العاشرة."],
        ["n", "das", "Ziel", "-e", "خط الوصول / الهدف", "Wir haben das Ziel geschafft.", "وصلنا إلى خط النهاية."],
        ["n", "die", "Strecke", "-n", "المسافة / المسار", "Die Strecke ist zehn Kilometer lang.", "المسار طوله عشرة كيلومترات."],
        ["n", "der", "Platz", "¨-e", "المركز / المكان", "Sie ist auf Platz drei.", "هي في المركز الثالث."],
        ["n", "der", "Sieger", "-", "الفائز", "Der Sieger bekommt einen Preis.", "الفائز يحصل على جائزة."],
        ["n", "die", "Siegerin", "-nen", "الفائزة", "Die Siegerin kommt aus Kenia.", "الفائزة من كينيا."],
        ["n", "der", "Rekord", "-e", "الرقم القياسي", "Das ist ein neuer Rekord!", "هذا رقم قياسي جديد!"],
        ["n", "die", "Anmeldung", "-en", "التسجيل", "Die Anmeldung ist online.", "التسجيل عبر الإنترنت."],
        ["n", "das", "Startgeld", "-er", "رسوم المشاركة", "Das Startgeld ist zehn Euro.", "رسوم المشاركة عشرة يورو."],
        ["n", "der", "Rabatt", "-e", "الخصم", "Studenten bekommen Rabatt.", "الطلاب يحصلون على خصم."],
        ["n", "das", "Publikum", "Sg.", "الجمهور", "Das Publikum war begeistert.", "الجمهور كان متحمّسًا."],
        ["n", "der", "Applaus", "Sg.", "التصفيق", "Es gab viel Applaus.", "كان هناك تصفيق كثير."],
        ["n", "die", "Überschrift", "-en", "العنوان (في الجريدة)", "Lesen Sie die Überschrift.", "اقرأ العنوان."],
        ["n", "das", "Gefühl", "-e", "الشعور", "Das ist ein tolles Gefühl!", "هذا شعور رائع!"],
        ["v", "", "schaffen", "hat geschafft", "ينجح في / ينجز", "Ich habe es geschafft!", "لقد نجحت!"],
        ["v", "", "starten", "ist gestartet", "ينطلق", "Wir sind um zehn gestartet.", "انطلقنا في العاشرة."],
        ["v", "", "passieren", "ist passiert", "يحدث", "Was ist passiert?", "ماذا حدث؟"],
        ["v", "", "trainieren", "hat trainiert", "يتدرّب", "Ich habe viel trainiert.", "تدرّبت كثيرًا."],
        ["v", "", "machen", "hat gemacht", "يفعل", "Was hast du am Wochenende gemacht?", "ماذا فعلت في عطلة الأسبوع؟"],
        ["v", "", "spielen", "hat gespielt", "يلعب", "Wir haben Tennis gespielt.", "لعبنا التنس."],
        ["v", "", "kaufen", "hat gekauft", "يشتري", "Ich habe neue Schuhe gekauft.", "اشتريت حذاءً جديدًا."],
        ["v", "", "arbeiten", "hat gearbeitet", "يعمل", "Gestern habe ich lange gearbeitet.", "أمس عملت طويلًا."],
        ["v", "", "feiern", "hat gefeiert", "يحتفل", "Wir haben den Sieg gefeiert.", "احتفلنا بالفوز."],
        ["v", "", "stürzen", "ist gestürzt", "يسقط / يتعثّر", "Er ist beim Lauf gestürzt.", "سقط أثناء السباق."],
        ["v", "", "organisieren", "hat organisiert", "ينظّم", "Die Uni hat den Lauf organisiert.", "الجامعة نظّمت السباق."],
        ["v", "", "sich anmelden", "hat sich angemeldet", "يسجّل نفسه", "Ich melde mich für den Lauf an.", "أسجّل نفسي في السباق."],
        ["v", "", "stattfinden", "es findet statt", "يُقام / يجري", "Der Lauf findet am Samstag statt.", "السباق يُقام يوم السبت."],
        ["v", "", "klappen", "hat geklappt", "ينجح (عامية)", "Hat alles geklappt?", "هل نجح كل شيء؟"],
        ["d", "", "gestern", "", "أمس", "Gestern habe ich trainiert.", "أمس تدرّبت."],
        ["d", "", "letzte Woche", "", "الأسبوع الماضي", "Letzte Woche war ich krank.", "الأسبوع الماضي كنت مريضًا."],
        ["d", "", "einmal", "", "مرة واحدة", "Ich war einmal in Berlin.", "كنت مرة في برلين."],
        ["d", "", "wieder", "", "مرة أخرى", "Nächstes Jahr laufe ich wieder.", "السنة القادمة أجري مرة أخرى."],
        ["x", "", "Schon mal gemacht?", "", "هل فعلت ذلك من قبل؟", "Hast du schon mal Rugby gespielt?", "هل لعبت الرغبي من قبل؟"]
      ],
      phrases: [
        ["Was hast du am Wochenende gemacht?", "ماذا فعلت في عطلة الأسبوع؟"],
        ["Ich habe Fußball gespielt und meine Eltern besucht.", "لعبت كرة القدم وزرت والديّ."],
        ["Wir sind um zehn Uhr gestartet.", "انطلقنا في العاشرة."],
        ["Was ist passiert? – Er ist gestürzt.", "ماذا حدث؟ – سقط."],
        ["Hast du schon mal Rugby gespielt? – Nein, noch nie.", "هل لعبت الرغبي من قبل؟ – لا، أبدًا."],
        ["Ich habe es geschafft!", "لقد نجحت!"]
      ],
      ex: [
        { t: "gap", q: "اكتب اسم المفعول (Partizip II).", s: "machen → ___", a: ["gemacht"], why: "‹ge› + ‹mach› + ‹t›.", tag: "perfekt" },
        { t: "gap", q: "اكتب اسم المفعول.", s: "arbeiten → ___", a: ["gearbeitet"], why: "الجذر ينتهي بـ ‑t → ‹ge…et›.", tag: "perfekt", wrong: { "gearbeit": "الجذر ينتهي بـ t → نضيف ‑et: gearbeit‑et." } },
        { t: "gap", q: "اكتب اسم المفعول.", s: "trainieren → ___", a: ["trainiert"], why: "أفعال ‑ieren بدون ‹ge›.", tag: "perfekt", wrong: { "getrainiert": "أفعال ‑ieren لا تأخذ ge: ‹trainiert›." } },
        { t: "gap", q: "اكتب اسم المفعول.", s: "spielen → ___", a: ["gespielt"], why: "‹ge› + ‹spiel› + ‹t›.", tag: "perfekt" },
        { t: "gap", q: "أكمل بـ haben أو sein.", s: "Ich ___ am Samstag Tennis gespielt.", a: ["habe"], why: "‹spielen› مع ‹haben›.", tag: "perfekt" },
        { t: "gap", q: "أكمل بـ haben أو sein.", s: "Was ___ passiert?", a: ["ist"], why: "‹passieren› مع ‹sein›.", tag: "perfekt" },
        { t: "gap", q: "أكمل بـ haben أو sein.", s: "Wir ___ um zehn Uhr gestartet.", a: ["sind"], why: "‹starten› (حركة/بدء) مع ‹sein› في هذا السياق.", tag: "perfekt" },
        { t: "mc", q: "أي جملة صحيحة؟", o: ["Ich habe gestern viel gearbeitet.", "Ich habe gearbeitet gestern viel.", "Ich gearbeitet habe gestern viel."], a: 0, why: "‹habe› في المكان 2، و‹gearbeitet› في الآخر.", tag: "perfekt" },
        { t: "mc", q: "اختر الصحيح.", s: "Hast du schon mal Rugby ___?", o: ["gespielt", "spielt", "gespielen"], a: 0, why: "Perfekt: ‹hast … gespielt›.", tag: "perfekt" },
        { t: "order", q: "رتّب الجملة في الـ Perfekt.", a: "Was hast du am Wochenende gemacht?", why: "كلمة السؤال + ‹hast› + الفاعل + … + ‹gemacht›.", tag: "perfekt" },
        { t: "order", q: "رتّب الجملة.", a: "Wir haben den Sieg gefeiert.", why: "‹haben› ثانيًا، ‹gefeiert› في الآخر.", tag: "perfekt" },
        { t: "tr", q: "ترجم إلى الألمانية (Perfekt).", ar: "أمس اشتريت كتابًا.", a: ["Gestern habe ich ein Buch gekauft.", "Ich habe gestern ein Buch gekauft."], tag: "perfekt" },
        { t: "tr", q: "ترجم إلى الألمانية (Perfekt).", ar: "ماذا فعلت في عطلة الأسبوع؟", a: ["Was hast du am Wochenende gemacht?", "Was haben Sie am Wochenende gemacht?"], tag: "perfekt" },
        { t: "read", title: "Der Campus-Run", text: "Am Samstag hat die Uni den Campus-Run organisiert. 800 Studenten sind um zehn Uhr gestartet. Das Wetter war super und das Publikum war begeistert. Annika hat die zehn Kilometer in 52 Minuten geschafft – ein tolles Gefühl! Leider ist Tobias nach zwei Kilometern gestürzt. Am Abend haben alle zusammen gefeiert.", tr: "يوم السبت نظّمت الجامعة سباق الحرم. انطلق 800 طالب في العاشرة. كان الطقس رائعًا والجمهور متحمّسًا. أنجزت أنيكا العشرة كيلومترات في 52 دقيقة — شعور رائع! للأسف سقط توبياس بعد كيلومترين. في المساء احتفل الجميع معًا.", items: [
          { t: "tf", s: "Annika hat die zehn Kilometer geschafft.", a: true, why: "‹Annika hat die zehn Kilometer in 52 Minuten geschafft›." },
          { t: "tf", s: "Tobias ist nach acht Kilometern gestürzt.", a: false, why: "بعد كيلومترين: ‹nach zwei Kilometern›." },
          { t: "tf", s: "Das Wetter war schlecht.", a: false, why: "‹Das Wetter war super›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Wie war dein Wochenende?", ar: "كيف كانت عطلتك؟",
        scene: "يوم الاثنين في الدورة. زميلتك تسألك عن عطلة نهاية الأسبوع.",
        who: { A: "Lena" },
        lines: [
          { s: "A", de: "Hallo! Was hast du am Wochenende gemacht?", ar: "مرحبًا! ماذا فعلت في عطلة الأسبوع؟" },
          { s: "U", task: "قل: يوم السبت لعبت كرة القدم مع أصدقاء.", m: "Am Samstag habe ich mit Freunden Fußball gespielt.", ok: ["Am Samstag habe ich mit Freunden Fußball gespielt", "Ich habe am Samstag mit Freunden Fußball gespielt", "Am Samstag habe ich Fußball gespielt *"], o: ["Am Samstag habe ich mit Freunden Fußball gespielt.", "Am Samstag ich habe mit Freunden Fußball gespielt.", "Am Samstag habe ich mit Freunden Fußball spielen."], why: ["", "بعد ‹Am Samstag›: الفعل ثانيًا ‹habe ich›.", "الـ Perfekt يحتاج Partizip: ‹gespielt›."], ar: "يوم السبت لعبت كرة القدم مع أصدقاء." },
          { s: "A", de: "Und am Sonntag?", ar: "ويوم الأحد؟" },
          { s: "U", task: "قل: يوم الأحد عملت ثم تعلّمت الألمانية.", m: "Am Sonntag habe ich gearbeitet und dann habe ich Deutsch gelernt.", ok: ["Am Sonntag habe ich gearbeitet und dann habe ich Deutsch gelernt", "Am Sonntag habe ich gearbeitet und Deutsch gelernt", "Am Sonntag habe ich gearbeitet *"], o: ["Am Sonntag habe ich gearbeitet und dann habe ich Deutsch gelernt.", "Am Sonntag habe ich gearbeit und Deutsch gelernt.", "Am Sonntag bin ich gearbeitet."], why: ["", "‹arbeiten› → ‹gearbeitet› (‑et).", "‹arbeiten› مع ‹haben›."], ar: "يوم الأحد عملت ثم تعلّمت الألمانية." },
          { s: "A", de: "Ich habe beim Campus-Run mitgemacht! Hast du schon mal bei einem Lauf mitgemacht?", ar: "شاركت في سباق الحرم! هل شاركت من قبل في سباق؟" },
          { s: "U", task: "قل: لا، أبدًا. لكن السنة القادمة أريد أن أشارك.", m: "Nein, noch nie. Aber nächstes Jahr möchte ich mitmachen.", ok: ["Nein noch nie aber nächstes Jahr möchte ich mitmachen", "Nein noch nie aber nächstes Jahr will ich mitmachen", "Noch nie aber nächstes Jahr möchte ich mitmachen", "Nein noch nie *"], o: ["Nein, noch nie. Aber nächstes Jahr möchte ich mitmachen.", "Nein, noch nie. Aber nächstes Jahr möchte ich machen mit.", "Nein, schon mal. Aber ich möchte nicht."], why: ["", "مع الفعل الناقص يبقى ‹mitmachen› كاملًا في الآخر.", "‹schon mal› تعني «من قبل» (نعم)."], ar: "لا، أبدًا. لكن السنة القادمة أريد المشاركة." },
          { s: "A", de: "Super! Was ist passiert? Du siehst müde aus.", ar: "ممتاز! ماذا حدث؟ تبدو متعبًا." },
          { s: "U", task: "قل: تدرّبت كثيرًا أمس. عندي ألم في العضلات.", m: "Ich habe gestern viel trainiert. Ich habe Muskelkater.", ok: ["Ich habe gestern viel trainiert ich habe Muskelkater", "Gestern habe ich viel trainiert ich habe Muskelkater", "Ich habe gestern viel trainiert *"], o: ["Ich habe gestern viel trainiert. Ich habe Muskelkater.", "Ich habe gestern viel getrainiert.", "Ich bin gestern viel trainiert."], why: ["", "أفعال ‑ieren بدون ‹ge›: ‹trainiert›.", "‹trainieren› مع ‹haben›."], ar: "تدرّبت كثيرًا أمس. عندي ألم في العضلات." }
        ]
      },
      listen: [
        { t: "listen", say: "Am Samstag haben wir Tennis gespielt und am Abend haben wir gefeiert.", q: "ماذا فعلوا مساء السبت؟", o: ["احتفلوا", "لعبوا التنس", "عملوا"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Tobias ist beim Lauf gestürzt, aber er hat das Ziel geschafft.", q: "هل وصل توبياس إلى خط النهاية؟", o: ["نعم", "لا", "لا نعرف"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich habe gestern bis zehn Uhr abends gearbeitet.", q: "حتى متى عمل أمس؟", o: ["حتى العاشرة مساءً", "حتى العاشرة صباحًا", "حتى الثامنة"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Was hast du gemacht?", tag: "hoeren" },
        { t: "dict", say: "Wir haben es geschafft.", tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "„e“ oder „i“?", ar: "e أم i؟",
    body: [
      { p: "يخلط كثير من المتعلمين العرب بين ‹e› و‹i› لأن العربية فيها كسرة واحدة. في الألمانية هما صوتان مختلفان، وكل منهما طويل أو قصير:" },
      { table: { head: ["الصوت", "الوصف", "أمثلة"], rows: [
        ["‹ie / ih› طويلة [iː]", "مثل «ي» طويلة مع ابتسامة", "‹Ihle, Liebe, sieht, liest›"],
        ["‹i› قصيرة [ɪ]", "قصيرة ومرتخية قليلًا", "‹Hinz, Fisch, trifft, spricht›"],
        ["‹e / eh› طويلة [eː]", "بين «إي» و«ي»، الفم أقل انغلاقًا", "‹lesen, sehen, Ehle, Seebe›"],
        ["‹e› قصيرة [ɛ]", "مثل «إ» مفتوحة", "‹Fenster, Henz, sprechen, treffen›"]
      ] } },
      { tip: "مع أفعال تغيير حرف العلة يتغير الصوت لكن الطول يبقى: ‹lesen› (e طويلة) → ‹liest› (i طويلة)؛ ‹sprechen› (e قصيرة) → ‹spricht› (i قصيرة)." }
    ],
    drills: [
      { t: "listen", say: "er liest", q: "ماذا سمعت؟", o: ["er liest", "ihr lest"], a: 0, why: "‹ie› = i طويلة." },
      { t: "listen", say: "ihr trefft", q: "ماذا سمعت؟", o: ["ihr trefft", "er trifft"], a: 0, why: "e قصيرة." },
      { t: "listen", say: "er spricht", q: "ماذا سمعت؟", o: ["er spricht", "ihr sprecht"], a: 0, why: "i قصيرة." },
      { t: "listen", say: "ihr seht", q: "ماذا سمعت؟", o: ["ihr seht", "er sieht"], a: 0, why: "‹eh› = e طويلة." },
      { t: "listen", say: "Fenster", q: "ماذا سمعت؟", o: ["Fenster", "Finster"], a: 0, why: "e قصيرة." },
      { t: "listen", say: "Siebe", q: "ماذا سمعت؟", o: ["Siebe", "Seebe"], a: 0, why: "‹ie› = i طويلة." }
    ],
    say: ["lesen – er liest", "sehen – er sieht", "sprechen – er spricht", "treffen – er trifft", "Ihle – Ehle", "Hinz – Henz", "Finster – Fenster", "Er liest, ihr lest.", "Er trifft, ihr trefft."]
  },

  write: [
    {
      ar: "اكتب إعلانًا قصيرًا للوحة الإعلانات تبحث فيه عن شريك/ة لهواية (رياضة، موسيقى…): من أنت، ماذا تحب، متى، كيف يتصلون بك.",
      de: "Schreiben Sie eine Anzeige: Freizeitpartner/in gesucht.",
      model: "Suche Laufpartner/in! Ich heiße Karim, bin 28 und laufe gern im Park. Ich stehe früh auf und laufe am Morgen, meistens um sieben Uhr. Allein laufe ich nicht gern. Kommst du mit? Ruf mich an oder schreib mir per Mail: karim@mail.ma",
      check: ["عنوان: ‹Suche …!›", "‹gern / lieber / nicht gern›", "فعل منفصل واحد على الأقل (aufstehen, mitkommen, anrufen)", "الوقت (‹am Morgen, um … Uhr›)", "طريقة الاتصال"]
    },
    {
      ar: "اكتب 5–6 جمل عن عطلة نهاية الأسبوع الماضية بالـ Perfekt.",
      de: "Was haben Sie am Wochenende gemacht? (Perfekt)",
      model: "Am Samstag habe ich lange geschlafen. Dann habe ich im Supermarkt eingekauft. Am Nachmittag habe ich mit Freunden Fußball gespielt. Am Sonntag habe ich meine Eltern besucht. Am Abend habe ich Deutsch gelernt.",
      check: ["‹haben/sein› في المكان 2", "Partizip II في آخر الجملة", "‹ge…t› / ‹ge…et› / ‑iert بدون ge", "ظروف زمنية (Am Samstag, Dann, Am Abend)"]
    }
  ],
  tutor: [
    { title: "Freizeit und Hobbys", ar: "الهوايات", role: "Max, ein sportlicher Kursteilnehmer", goal: "über Hobbys und Sport sprechen: gern / lieber / nicht gern, Verben mit Vokalwechsel, trennbare Verben", start: "Hey! Was machst du gern in deiner Freizeit?" },
    { title: "Das Wochenende", ar: "عطلة الأسبوع الماضية", role: "Lena, eine Freundin, die am Montag nach dem Wochenende fragt", goal: "über das vergangene Wochenende im Perfekt sprechen (regelmäßige Verben, haben/sein)", start: "Guten Morgen! Wie war dein Wochenende? Was hast du gemacht?" }
  ]
});

/* Lektion 6 — Endlich ein Zimmer */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 6,
  de: "Endlich ein Zimmer",
  ar: "أخيرًا غرفة",
  book: "Kursbuch S. 50–57 · Übungsbuch S. 116–123",
  goals: [
    "البحث عن غرفة أو شقة وفهم الإعلانات",
    "الحديث عن الماضي بالـ Perfekt للأفعال الشاذة والمختلطة",
    "Perfekt للأفعال المنفصلة وغير المنفصلة",
    "الأثاث والمواد، وطلب الإعادة عند عدم الفهم",
    "تحديد مكان الأشياء: Wo? + حروف الجر مع Dativ"
  ],
  units: [
    /* ───────────── 6A ───────────── */
    {
      id: "6A", de: "Zimmer gesucht – und gefunden", ar: "غرفة مطلوبة — ووُجدت",
      summary: "السكن الجامعي والبحث عن غرفة، Perfekt للأفعال الشاذة (ge…en) والمختلطة، haben/sein، Präteritum لـ war/hatte.",
      grammar: [
        {
          h: "Perfekt للأفعال الشاذة: ge + … + en",
          p: "الأفعال الشاذة (غير المنتظمة) ينتهي اسم مفعولها غالبًا بـ ‑en، وكثيرًا ما يتغيّر حرف العلة. **احفظها مع المصدر**:",
          table: {
            head: ["المصدر", "Perfekt", "المصدر", "Perfekt"],
            rows: [
              ["‹treffen›", "‹hat getroffen›", "‹fahren›", "‹ist gefahren›"],
              ["‹finden›", "‹hat gefunden›", "‹bleiben›", "‹ist geblieben›"],
              ["‹schlafen›", "‹hat geschlafen›", "‹kommen›", "‹ist gekommen›"],
              ["‹lesen›", "‹hat gelesen›", "‹gehen›", "‹ist gegangen›"],
              ["‹helfen›", "‹hat geholfen›", "‹laufen›", "‹ist gelaufen›"],
              ["‹sprechen›", "‹hat gesprochen›", "‹sein›", "‹ist gewesen›"],
              ["‹essen›", "‹hat gegessen›", "‹trinken›", "‹hat getrunken›"],
              ["‹sehen›", "‹hat gesehen›", "‹schreiben›", "‹hat geschrieben›"],
              ["‹nehmen›", "‹hat genommen›", "‹geben›", "‹hat gegeben›"]
            ]
          }
        },
        {
          h: "الأفعال المختلطة: ge + … + t مع تغيير حرف العلة",
          table: { head: ["المصدر", "Perfekt"], rows: [["‹wissen›", "‹hat gewusst›"], ["‹denken›", "‹hat gedacht›"], ["‹bringen›", "‹hat gebracht›"], ["‹kennen›", "‹hat gekannt›"]] }
        },
        {
          h: "war و hatte بدل Perfekt",
          p: "مع ‹sein› و‹haben› يستعمل الألمان عادة الماضي البسيط بدل Perfekt: ‹Ich war im Kino.› أفضل من ‹Ich bin im Kino gewesen.› و‹Ich hatte keine Zeit.›",
          tip: "‹sitzen, stehen, liegen›: في شمال ألمانيا مع ‹haben› (hat gesessen)، وفي الجنوب والنمسا وسويسرا مع ‹sein› (ist gesessen)."
        },
        {
          h: "تذكير: haben أم sein؟",
          list: ["‹sein›: حركة من مكان إلى آخر (‹gehen, fahren, kommen, laufen, fliegen›)، تغيّر حالة (‹aufstehen, einschlafen›)، و‹sein, bleiben, passieren›.", "‹haben›: كل الباقي — وهو الأغلبية."]
        }
      ],
      vocab: [
        ["n", "das", "Zimmer", "-", "الغرفة", "Ich suche ein Zimmer.", "أبحث عن غرفة."],
        ["n", "das", "Einzelzimmer", "-", "غرفة فردية", "Das Einzelzimmer kostet 300 Euro.", "الغرفة الفردية بـ 300 يورو."],
        ["n", "die", "Wohnung", "-en", "الشقة", "Die Wohnung hat drei Zimmer.", "الشقة فيها ثلاث غرف."],
        ["n", "das", "Haus", "¨-er", "المنزل", "Das Haus ist groß.", "المنزل كبير."],
        ["n", "das", "Apartment", "-s", "الشقة الصغيرة (أستوديو)", "Ich wohne in einem Apartment.", "أسكن في شقة صغيرة."],
        ["n", "das", "Wohnheim", "-e", "السكن (الطلابي)", "Ich wohne im Studierendenwohnheim.", "أسكن في السكن الجامعي."],
        ["n", "die", "Wohngemeinschaft", "-en", "السكن المشترك (WG)", "Ich wohne in einer WG.", "أسكن في سكن مشترك."],
        ["n", "die", "Miete", "-n", "الإيجار", "Die Miete beträgt 300 Euro.", "الإيجار 300 يورو."],
        ["n", "der", "Mieter", "-", "المستأجر", "Der Mieter zahlt die Miete.", "المستأجر يدفع الإيجار."],
        ["n", "der", "Vermieter", "-", "المؤجّر", "Ich rufe den Vermieter an.", "أتصل بالمؤجّر."],
        ["n", "der", "Hausmeister", "-", "حارس العمارة / القيّم", "Der Hausmeister repariert die Heizung.", "القيّم يصلح التدفئة."],
        ["n", "der", "Antrag", "¨-e", "الطلب (الاستمارة)", "Ich habe den Antrag ausgefüllt.", "ملأت الطلب."],
        ["n", "der", "Schlüssel", "-", "المفتاح", "Wo ist mein Schlüssel?", "أين مفتاحي؟"],
        ["n", "die", "Küche", "-n", "المطبخ", "Die Küche ist klein.", "المطبخ صغير."],
        ["n", "das", "Bad", "¨-er", "الحمّام", "Das Bad ist neu.", "الحمّام جديد."],
        ["n", "das", "Fenster", "-", "النافذة", "Das Zimmer hat zwei Fenster.", "الغرفة فيها نافذتان."],
        ["n", "der", "Quadratmeter", "-", "المتر المربع (m²)", "Das Zimmer hat 15 Quadratmeter.", "الغرفة مساحتها 15 مترًا مربعًا."],
        ["n", "die", "Heizung", "-en", "التدفئة", "Die Heizung ist ausgegangen.", "التدفئة انطفأت."],
        ["n", "die", "Nachricht", "-en", "الرسالة / الخبر", "Ich habe dir eine Nachricht geschrieben.", "كتبت لك رسالة."],
        ["n", "die", "Überraschung", "-en", "المفاجأة", "Was für eine Überraschung!", "يا لها من مفاجأة!"],
        ["v", "", "suchen", "hat gesucht", "يبحث", "Ich habe lange ein Zimmer gesucht.", "بحثت طويلًا عن غرفة."],
        ["v", "", "finden", "hat gefunden", "يجد", "Endlich habe ich ein Zimmer gefunden!", "أخيرًا وجدت غرفة!"],
        ["v", "", "mieten", "hat gemietet", "يستأجر", "Ich möchte ein Zimmer mieten.", "أريد استئجار غرفة."],
        ["v", "", "einziehen", "ist eingezogen", "ينتقل للسكن (يسكن)", "Ich bin gestern eingezogen.", "انتقلت للسكن أمس."],
        ["v", "", "ausziehen", "ist ausgezogen", "يغادر السكن", "Mein Mitbewohner ist ausgezogen.", "شريكي في السكن غادر."],
        ["v", "", "treffen", "hat getroffen", "يلتقي", "Ich habe Leon getroffen.", "التقيت ليون."],
        ["v", "", "schlafen", "hat geschlafen", "ينام", "Ich habe gut geschlafen.", "نمت جيدًا."],
        ["v", "", "gehen", "ist gegangen", "يذهب (مشيًا)", "Wir sind ins Kino gegangen.", "ذهبنا إلى السينما."],
        ["v", "", "kommen", "ist gekommen", "يأتي", "Er ist um zehn gekommen.", "جاء في العاشرة."],
        ["v", "", "bleiben", "ist geblieben", "يبقى", "Ich bin zu Hause geblieben.", "بقيت في البيت."],
        ["v", "", "helfen", "hat geholfen", "يساعد", "Leon hat mir geholfen.", "ساعدني ليون."],
        ["v", "", "sprechen", "hat gesprochen", "يتكلّم", "Ich habe mit dem Hausmeister gesprochen.", "تكلّمت مع القيّم."],
        ["v", "", "denken", "hat gedacht", "يفكّر / يظن", "Ich habe an dich gedacht.", "فكّرت فيك."],
        ["v", "", "bringen", "hat gebracht", "يُحضر", "Er hat Pizza gebracht.", "أحضر بيتزا."],
        ["v", "", "wissen", "hat gewusst", "يعرف", "Das habe ich nicht gewusst.", "لم أكن أعرف ذلك."],
        ["v", "", "ausgehen", "ist ausgegangen", "ينطفئ / يخرج للتنزه", "Die Heizung ist ausgegangen.", "انطفأت التدفئة."],
        ["a", "", "möbliert", "", "مفروش", "Das Zimmer ist möbliert.", "الغرفة مفروشة."],
        ["a", "", "frei", "", "شاغر / متاح", "Ab Oktober ist ein Zimmer frei.", "ابتداءً من أكتوبر غرفة شاغرة."],
        ["a", "", "inklusive", "", "شاملًا", "Die Miete ist inklusive Heizung.", "الإيجار شامل التدفئة."],
        ["d", "", "endlich", "", "أخيرًا", "Endlich habe ich ein Zimmer!", "أخيرًا عندي غرفة!"],
        ["d", "", "sofort", "", "فورًا", "Das Zimmer ist sofort frei.", "الغرفة متاحة فورًا."],
        ["x", "", "Die Miete beträgt …", "", "الإيجار يبلغ …", "Die Miete beträgt 300 Euro im Monat.", "الإيجار يبلغ 300 يورو شهريًا."]
      ],
      phrases: [
        ["Endlich habe ich ein Zimmer gefunden!", "أخيرًا وجدت غرفة!"],
        ["Wie war dein Wochenende? – Super! Ich bin nach Frankfurt gefahren.", "كيف كانت عطلتك؟ – رائعة! سافرت إلى فرانكفورت."],
        ["Am Samstag habe ich Freunde getroffen.", "يوم السبت التقيت بأصدقاء."],
        ["Am Sonntag bin ich zu Hause geblieben.", "يوم الأحد بقيت في البيت."],
        ["Ich war im Kino. Der Film war toll.", "كنت في السينما. الفيلم كان رائعًا."],
        ["Das habe ich nicht gewusst.", "لم أكن أعرف ذلك."]
      ],
      ex: [
        { t: "gap", q: "اكتب اسم المفعول (فعل شاذ).", s: "finden → hat ___", a: ["gefunden"], why: "‹finden› → ‹gefunden› (i → u).", tag: "perfekt" },
        { t: "gap", q: "اكتب اسم المفعول.", s: "treffen → hat ___", a: ["getroffen"], why: "‹treffen› → ‹getroffen› (e → o).", tag: "perfekt" },
        { t: "gap", q: "اكتب اسم المفعول.", s: "gehen → ist ___", a: ["gegangen"], why: "‹gehen› → ‹gegangen› (شاذ جدًا).", tag: "perfekt" },
        { t: "gap", q: "اكتب اسم المفعول.", s: "schreiben → hat ___", a: ["geschrieben"], why: "‹schreiben› → ‹geschrieben› (ei → ie).", tag: "perfekt" },
        { t: "gap", q: "اكتب اسم المفعول (فعل مختلط).", s: "wissen → hat ___", a: ["gewusst"], why: "مختلط: ‹ge…t› مع تغيّر الجذر: ‹gewusst›.", tag: "perfekt" },
        { t: "gap", q: "اكتب اسم المفعول (فعل مختلط).", s: "denken → hat ___", a: ["gedacht"], why: "‹denken› → ‹gedacht›.", tag: "perfekt" },
        { t: "gap", q: "أكمل بـ haben أو sein.", s: "Am Sonntag ___ ich zu Hause geblieben.", a: ["bin"], why: "‹bleiben› مع ‹sein›.", tag: "perfekt" },
        { t: "gap", q: "أكمل بـ haben أو sein.", s: "Wir ___ nach Berlin gefahren.", a: ["sind"], why: "‹fahren› (حركة) مع ‹sein›.", tag: "perfekt" },
        { t: "gap", q: "أكمل بـ haben أو sein.", s: "Leon ___ mir geholfen.", a: ["hat"], why: "‹helfen› مع ‹haben›.", tag: "perfekt" },
        { t: "mc", q: "أي صيغة أكثر استعمالًا في الكلام؟", o: ["Ich war gestern im Kino.", "Ich bin gestern im Kino gewesen."], a: 0, why: "مع ‹sein› و‹haben› يستعمل الألمان الماضي البسيط (war, hatte).", tag: "praeteritum" },
        { t: "mc", q: "اختر الصحيح.", s: "Was ___ du am Wochenende gemacht?", o: ["hast", "bist", "warst"], a: 0, why: "‹machen› مع ‹haben›: ‹hast … gemacht›.", tag: "perfekt" },
        { t: "order", q: "رتّب الجملة.", a: "Endlich habe ich ein Zimmer gefunden.", why: "‹habe› ثانيًا بعد ‹Endlich›، و‹gefunden› في الآخر.", tag: "perfekt" },
        { t: "match", q: "صِل المصدر باسم المفعول.", pairs: [["lesen", "gelesen"], ["sprechen", "gesprochen"], ["kommen", "gekommen"], ["bringen", "gebracht"], ["schlafen", "geschlafen"]], tag: "perfekt" },
        { t: "tr", q: "ترجم إلى الألمانية (Perfekt).", ar: "يوم السبت التقيت بأصدقائي.", a: ["Am Samstag habe ich meine Freunde getroffen.", "Am Samstag habe ich Freunde getroffen.", "Ich habe am Samstag meine Freunde getroffen."], tag: "perfekt" },
        { t: "read", title: "Ein Zimmer im Wohnheim", text: "Studierendenwohnheim am Park: Ab 1. Oktober ist ein Einzelzimmer frei. Das Zimmer hat 14 Quadratmeter und ist möbliert: Bett, Schreibtisch, Schrank und Regal. Küche und Bad teilt man mit drei Mitbewohnern. Die Miete beträgt 290 Euro inklusive Heizung und Internet.", tr: "السكن الطلابي عند الحديقة: ابتداءً من 1 أكتوبر غرفة فردية شاغرة. الغرفة مساحتها 14 مترًا مربعًا ومفروشة: سرير، مكتب، خزانة ورف. المطبخ والحمّام مشتركان مع ثلاثة سكان. الإيجار 290 يورو شاملًا التدفئة والإنترنت.", items: [
          { t: "tf", s: "Das Zimmer ist ab Oktober frei.", a: true, why: "‹Ab 1. Oktober ist ein Einzelzimmer frei.›" },
          { t: "tf", s: "Das Zimmer hat ein eigenes Bad.", a: false, why: "الحمّام مشترك مع ثلاثة سكان." },
          { t: "tf", s: "Internet kostet extra.", a: false, why: "الإيجار شامل التدفئة والإنترنت." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Wie war dein Wochenende?", ar: "كيف كانت عطلة نهاية أسبوعك؟",
        scene: "في المطبخ المشترك بالسكن الجامعي. جارتك صوفي تسألك عن عطلتك.",
        who: { A: "Sophie" },
        lines: [
          { s: "A", de: "Hallo! Wie war dein Wochenende?", ar: "مرحبًا! كيف كانت عطلتك؟" },
          { s: "U", task: "قل: كانت رائعة! يوم السبت سافرت إلى فرانكفورت.", m: "Super! Am Samstag bin ich nach Frankfurt gefahren.", ok: ["Super am Samstag bin ich nach Frankfurt gefahren", "Toll am Samstag bin ich nach Frankfurt gefahren", "Es war super am Samstag bin ich nach Frankfurt gefahren", "Am Samstag bin ich nach Frankfurt gefahren"], o: ["Super! Am Samstag bin ich nach Frankfurt gefahren.", "Super! Am Samstag habe ich nach Frankfurt gefahren.", "Super! Am Samstag bin ich nach Frankfurt gefahrt."], why: ["", "‹fahren› (حركة) مع ‹sein›.", "‹fahren› فعل شاذ: ‹gefahren›."], ar: "رائعة! يوم السبت سافرت إلى فرانكفورت." },
          { s: "A", de: "Oh, schön! Was hast du dort gemacht?", ar: "آه، جميل! ماذا فعلت هناك؟" },
          { s: "U", task: "قل: التقيت بأخي وأكلنا في مطعم.", m: "Ich habe meinen Bruder getroffen und wir haben im Restaurant gegessen.", ok: ["Ich habe meinen Bruder getroffen und wir haben im Restaurant gegessen", "Ich habe meinen Bruder getroffen und wir haben in einem Restaurant gegessen", "Ich habe meinen Bruder getroffen *"], o: ["Ich habe meinen Bruder getroffen und wir haben im Restaurant gegessen.", "Ich habe meinen Bruder getrefft und wir haben im Restaurant gegesst.", "Ich bin meinen Bruder getroffen."], why: ["", "‹treffen› → ‹getroffen›، ‹essen› → ‹gegessen›.", "‹treffen› مع ‹haben›."], ar: "التقيت بأخي وأكلنا في مطعم." },
          { s: "A", de: "Und am Sonntag?", ar: "ويوم الأحد؟" },
          { s: "U", task: "قل: يوم الأحد بقيت في البيت وقرأت كتابًا.", m: "Am Sonntag bin ich zu Hause geblieben und habe ein Buch gelesen.", ok: ["Am Sonntag bin ich zu Hause geblieben und habe ein Buch gelesen", "Am Sonntag bin ich zu Hause geblieben und ich habe ein Buch gelesen", "Am Sonntag bin ich zu Hause geblieben *"], o: ["Am Sonntag bin ich zu Hause geblieben und habe ein Buch gelesen.", "Am Sonntag habe ich zu Hause geblieben und ein Buch gelesen.", "Am Sonntag bin ich zu Hause gebleibt und habe ein Buch gelest."], why: ["", "‹bleiben› مع ‹sein›.", "‹geblieben›، ‹gelesen› — أفعال شاذة."], ar: "يوم الأحد بقيت في البيت وقرأت كتابًا." },
          { s: "A", de: "Und ich habe endlich ein Zimmer im Wohnheim gefunden!", ar: "وأنا وجدت أخيرًا غرفة في السكن الجامعي!" },
          { s: "U", task: "هنّئها: رائع! متى انتقلتِ للسكن؟", m: "Toll! Wann bist du eingezogen?", ok: ["Toll wann bist du eingezogen", "Super wann bist du eingezogen", "Wann bist du eingezogen", "Toll wann ziehst du ein"], o: ["Toll! Wann bist du eingezogen?", "Toll! Wann hast du eingezogen?", "Toll! Wann bist du geeinzogen?"], why: ["", "‹einziehen› (حركة/تغيير) مع ‹sein›.", "الفعل المنفصل: ‹ge› بين البادئة والجذر: ‹eingezogen›."], ar: "رائع! متى انتقلتِ؟" }
        ]
      },
      listen: [
        { t: "listen", say: "Am Wochenende bin ich nach Frankfurt gefahren und habe meine Schwester besucht.", q: "من زار في فرانكفورت؟", o: ["أخته", "أخاه", "صديقه"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich habe lange gesucht, aber endlich habe ich ein Zimmer gefunden.", q: "هل وجد غرفة؟", o: ["نعم أخيرًا", "لا", "ليس بعد"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Die Miete beträgt dreihundertzwanzig Euro im Monat.", q: "كم الإيجار؟", o: ["320 €", "230 €", "302 €"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Ich bin zu Hause geblieben.", tag: "hoeren" },
        { t: "dict", say: "Wie war dein Wochenende?", tag: "hoeren" }
      ]
    },

    /* ───────────── 6B ───────────── */
    {
      id: "6B", de: "Zimmer eingerichtet", ar: "تأثيث الغرفة",
      summary: "الأثاث والمواد، إعلانات الأثاث، Perfekt للأفعال المنفصلة (an‑ge‑rufen) وغير المنفصلة (vergessen)، zu + صفة، طلب الإعادة.",
      grammar: [
        {
          h: "Perfekt للأفعال المنفصلة: ‹ge› في الوسط",
          p: "في الأفعال المنفصلة تأتي ‹ge› **بين البادئة والجذر**:",
          table: {
            head: ["المصدر", "Perfekt"],
            rows: [
              ["‹anrufen›", "‹hat an**ge**rufen›"], ["‹ausfüllen›", "‹hat aus**ge**füllt›"], ["‹mitnehmen›", "‹hat mit**ge**nommen›"],
              ["‹aufstehen›", "‹ist auf**ge**standen›"], ["‹wegfahren›", "‹ist weg**ge**fahren›"], ["‹zurückrufen›", "‹hat zurück**ge**rufen›"],
              ["‹einkaufen›", "‹hat ein**ge**kauft›"], ["‹aufräumen›", "‹hat auf**ge**räumt›"]
            ]
          }
        },
        {
          h: "Perfekt للأفعال غير المنفصلة: بدون ‹ge›",
          p: "البادئات ‹be-, er-, ver-, ent-, emp-, ge-, zer-, hinter-› لا تنفصل أبدًا، والنبر على الجذر، ولا تأخذ ‹ge› في Perfekt:",
          table: {
            head: ["المصدر", "Perfekt"],
            rows: [["‹besuchen›", "‹hat besucht›"], ["‹bekommen›", "‹hat bekommen›"], ["‹bezahlen›", "‹hat bezahlt›"], ["‹erreichen›", "‹hat erreicht›"], ["‹erzählen›", "‹hat erzählt›"], ["‹vergessen›", "‹hat vergessen›"], ["‹verkaufen›", "‹hat verkauft›"], ["‹hinterlassen›", "‹hat hinterlassen›"]]
          },
          tip: "اختبار سريع: هل البادئة منبورة وتنفصل؟ (‹ÁNrufen› → ‹angerufen›). أم غير منبورة؟ (‹be‑SÚ‑chen› → ‹besucht›)."
        },
        {
          h: "zu + صفة = أكثر من اللازم",
          p: "‹zu› قبل الصفة = «أكثر من اللازم» (غالبًا سلبي): ‹Das Bett ist zu groß.› ‹Die Lampe ist zu teuer.› ← أما ‹sehr› فتعني «جدًا» فقط: ‹Das Sofa ist sehr schön.›"
        },
        {
          h: "المواد: aus + المادة",
          p: "‹Der Tisch ist aus Holz.› (الطاولة من خشب) — ‹aus Holz, aus Metall, aus Glas, aus Kunststoff›."
        },
        {
          h: "عندما لا تفهم: الطلب بالإعادة",
          ex: [["Entschuldigung, können Sie das bitte noch einmal wiederholen?", "عذرًا، هل يمكنك إعادة ذلك من فضلك؟"], ["Wie schreibt man das?", "كيف يُكتب ذلك؟"], ["Können Sie bitte langsamer sprechen?", "هل يمكنك التكلّم ببطء أكثر؟"]]
        }
      ],
      vocab: [
        ["n", "das", "Möbel", "- (meist Pl.)", "قطعة الأثاث / الأثاث", "Ich brauche Möbel für mein Zimmer.", "أحتاج أثاثًا لغرفتي."],
        ["n", "das", "Bett", "-en", "السرير", "Das Bett ist zu klein.", "السرير صغير جدًا."],
        ["n", "der", "Schrank", "¨-e", "الخزانة", "Der Schrank ist aus Holz.", "الخزانة من خشب."],
        ["n", "der", "Kleiderschrank", "¨-e", "خزانة الملابس", "Der Kleiderschrank ist groß.", "خزانة الملابس كبيرة."],
        ["n", "der", "Kühlschrank", "¨-e", "الثلاجة", "Was ist im Kühlschrank?", "ماذا في الثلاجة؟"],
        ["n", "der", "Tisch", "-e", "الطاولة", "Der Tisch steht am Fenster.", "الطاولة عند النافذة."],
        ["n", "der", "Schreibtisch", "-e", "المكتب", "Ich habe einen Schreibtisch gekauft.", "اشتريت مكتبًا."],
        ["n", "der", "Stuhl", "¨-e", "الكرسي", "Der Stuhl ist bequem.", "الكرسي مريح."],
        ["n", "der", "Sessel", "-", "الكرسي ذو الذراعين (الفوتيل)", "Der Sessel ist alt.", "الفوتيل قديم."],
        ["n", "das", "Sofa", "-s", "الأريكة", "Das Sofa ist gebraucht.", "الأريكة مستعملة."],
        ["n", "das", "Regal", "-e", "الرف", "Die Bücher stehen im Regal.", "الكتب في الرف."],
        ["n", "die", "Lampe", "-n", "المصباح", "Die Lampe hängt über dem Tisch.", "المصباح معلّق فوق الطاولة."],
        ["n", "die", "Kommode", "-n", "الخزانة ذات الأدراج", "Die Kommode steht neben dem Bett.", "الخزانة بجانب السرير."],
        ["n", "der", "Spiegel", "-", "المرآة", "Der Spiegel hängt im Bad.", "المرآة معلّقة في الحمّام."],
        ["n", "die", "Matratze", "-n", "المرتبة", "Ich brauche eine neue Matratze.", "أحتاج مرتبة جديدة."],
        ["n", "der", "Teppich", "-e", "السجادة", "Der Teppich kommt aus Marokko.", "السجادة من المغرب."],
        ["n", "der", "Herd", "-e", "الموقد", "Der Herd ist neu.", "الموقد جديد."],
        ["n", "die", "Pinnwand", "¨-e", "لوحة الملاحظات", "Die Nachricht hängt an der Pinnwand.", "الرسالة معلّقة على لوحة الملاحظات."],
        ["n", "das", "Holz", "¨-er", "الخشب", "Der Tisch ist aus Holz.", "الطاولة من خشب."],
        ["n", "das", "Metall", "-e", "المعدن", "Das Regal ist aus Metall.", "الرف من معدن."],
        ["n", "das", "Glas", "Sg.", "الزجاج", "Der Tisch ist aus Glas.", "الطاولة من زجاج."],
        ["n", "der", "Kunststoff", "-e", "البلاستيك", "Der Stuhl ist aus Kunststoff.", "الكرسي من بلاستيك."],
        ["n", "die", "Größe", "-n", "الحجم / المقاس", "Welche Größe hat das Bett?", "ما حجم السرير؟"],
        ["v", "", "einrichten", "hat eingerichtet", "يؤثّث", "Ich habe mein Zimmer eingerichtet.", "أثّثت غرفتي."],
        ["v", "", "anrufen", "hat angerufen", "يتصل", "Ich habe dich mehrmals angerufen.", "اتصلت بك عدة مرات."],
        ["v", "", "zurückrufen", "hat zurückgerufen", "يعاود الاتصال", "Du hast leider nicht zurückgerufen.", "للأسف لم تعاود الاتصال."],
        ["v", "", "ausfüllen", "hat ausgefüllt", "يملأ (استمارة)", "Er hat den Antrag ausgefüllt.", "ملأ الطلب."],
        ["v", "", "vergessen", "hat vergessen", "ينسى", "Ich habe euch nicht vergessen.", "لم أنسكم."],
        ["v", "", "erreichen", "hat erreicht", "يصل إلى (شخصًا)", "Du hast den Hausmeister nicht erreicht.", "لم تصل إلى القيّم."],
        ["v", "", "beschreiben", "hat beschrieben", "يصف", "Beschreiben Sie Ihr Zimmer.", "صف غرفتك."],
        ["v", "", "bekommen", "hat bekommen", "يحصل على", "Ich habe das Sofa billig bekommen.", "حصلت على الأريكة بسعر رخيص."],
        ["v", "", "verkaufen", "hat verkauft", "يبيع", "Er hat seinen Schreibtisch verkauft.", "باع مكتبه."],
        ["v", "", "abholen", "hat abgeholt", "يستلم / يأخذ من مكان", "Ich hole das Sofa am Samstag ab.", "سآخذ الأريكة يوم السبت."],
        ["v", "", "wiederholen", "hat wiederholt", "يكرّر / يعيد", "Können Sie das bitte wiederholen?", "هل يمكنك إعادة ذلك؟"],
        ["a", "", "gebraucht", "", "مستعمل", "Das Sofa ist gebraucht, aber gut.", "الأريكة مستعملة لكنها جيدة."],
        ["a", "", "billig", "", "رخيص", "Der Stuhl ist billig.", "الكرسي رخيص."],
        ["a", "", "preiswert", "", "بسعر مناسب", "Das Bett ist preiswert.", "السرير بسعر مناسب."],
        ["a", "", "breit", "", "عريض", "Das Bett ist 1,40 Meter breit.", "السرير عرضه 1.40 متر."],
        ["a", "", "schmal", "", "ضيّق", "Das Regal ist schmal.", "الرف ضيّق."],
        ["a", "", "hoch", "", "عالٍ", "Der Schrank ist zu hoch.", "الخزانة عالية جدًا."],
        ["a", "", "niedrig", "", "منخفض", "Der Tisch ist niedrig.", "الطاولة منخفضة."],
        ["a", "", "leer", "", "فارغ", "Das Zimmer ist noch leer.", "الغرفة ما زالت فارغة."],
        ["d", "", "zu", "", "أكثر من اللازم (+ صفة)", "Das ist zu teuer.", "هذا غالٍ جدًا."],
        ["x", "", "Auf Wiederhören!", "", "إلى اللقاء (في الهاتف)", "Danke, auf Wiederhören!", "شكرًا، إلى اللقاء!"]
      ],
      phrases: [
        ["Entschuldigung, können Sie das noch einmal wiederholen?", "عذرًا، هل يمكنك إعادة ذلك؟"],
        ["Wie groß ist das Bett? – Es ist 2 Meter lang und 1,40 Meter breit.", "ما حجم السرير؟ – طوله مترين وعرضه 1.40."],
        ["Der Schrank ist leider zu groß für mein Zimmer.", "للأسف الخزانة كبيرة جدًا لغرفتي."],
        ["Der Tisch ist aus Holz.", "الطاولة من خشب."],
        ["Ich habe dich heute mehrmals angerufen.", "اتصلت بك اليوم عدة مرات."],
        ["Ich habe den Antrag schon ausgefüllt.", "ملأت الطلب بالفعل."],
        ["Kann ich das Sofa am Samstag abholen?", "هل يمكنني أخذ الأريكة يوم السبت؟"]
      ],
      ex: [
        { t: "gap", q: "اكتب Perfekt للفعل المنفصل.", s: "anrufen → hat ___", a: ["angerufen"], why: "‹ge› بين البادئة والجذر: ‹an‑ge‑rufen›.", tag: "perfekt", wrong: { "geanrufen": "في الأفعال المنفصلة ‹ge› في الوسط: ‹angerufen›." } },
        { t: "gap", q: "اكتب Perfekt.", s: "ausfüllen → hat ___", a: ["ausgefüllt"], why: "‹aus‑ge‑füllt›.", tag: "perfekt" },
        { t: "gap", q: "اكتب Perfekt.", s: "aufstehen → ist ___", a: ["aufgestanden"], why: "‹auf‑ge‑standen› (stehen شاذ).", tag: "perfekt" },
        { t: "gap", q: "اكتب Perfekt.", s: "einkaufen → hat ___", a: ["eingekauft"], why: "‹ein‑ge‑kauft›.", tag: "perfekt" },
        { t: "gap", q: "اكتب Perfekt للفعل غير المنفصل.", s: "besuchen → hat ___", a: ["besucht"], why: "البادئة ‹be-› لا تنفصل: بدون ‹ge›.", tag: "perfekt", wrong: { "gebesucht": "مع ‹be-, er-, ver-…› لا نضيف ‹ge›: ‹besucht›." } },
        { t: "gap", q: "اكتب Perfekt.", s: "vergessen → hat ___", a: ["vergessen"], why: "‹ver-› غير منفصلة، واسم المفعول = المصدر هنا.", tag: "perfekt" },
        { t: "gap", q: "اكتب Perfekt.", s: "erzählen → hat ___", a: ["erzählt"], why: "‹er-› بدون ‹ge›: ‹erzählt›.", tag: "perfekt" },
        { t: "mc", q: "اختر الجملة الصحيحة.", o: ["Ich habe den Hausmeister nicht erreicht.", "Ich habe den Hausmeister nicht geerreicht.", "Ich habe den Hausmeister nicht erreichen."], a: 0, why: "‹erreichen› غير منفصل → ‹erreicht›.", tag: "perfekt" },
        { t: "mc", q: "ماذا تعني ‹Das Bett ist zu groß›؟", o: ["السرير كبير أكثر من اللازم", "السرير كبير جدًا (وهذا رائع)", "السرير إلى الكبير"], a: 0, why: "‹zu› + صفة = أكثر من اللازم (مشكلة).", tag: "wortschatz" },
        { t: "mc", q: "اختر الحرف المناسب.", s: "Das Regal ist ___ Metall.", o: ["aus", "von", "mit"], a: 0, why: "المادة: ‹aus Metall›.", tag: "wortschatz" },
        { t: "order", q: "رتّب الجملة.", a: "Ich habe dich heute mehrmals angerufen.", why: "‹habe› ثانيًا، ‹angerufen› في الآخر.", tag: "perfekt" },
        { t: "match", q: "صِل قطعة الأثاث بمعناها.", pairs: [["das Regal", "الرف"], ["der Schrank", "الخزانة"], ["die Lampe", "المصباح"], ["der Spiegel", "المرآة"], ["der Sessel", "الفوتيل"]], tag: "wortschatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "هل يمكنك إعادة ذلك من فضلك؟", a: ["Können Sie das bitte wiederholen?", "Können Sie das bitte noch einmal wiederholen?", "Kannst du das bitte wiederholen?", "Können Sie das noch einmal wiederholen?"], tag: "wortschatz" },
        { t: "read", title: "Möbelanzeigen", text: "1) Verkaufe Schreibtisch aus Holz, 120 x 60 cm, gebraucht, aber sehr gut. Nur 40 Euro! Tel. 0160 456 78 21. — 2) Sofa, 3 Jahre alt, blau, 2 Meter breit. Preis: 90 Euro. Abholen am Wochenende. — 3) Kleiderschrank aus Metall, neu, 1,80 m hoch. 75 Euro.", tr: "1) أبيع مكتبًا من خشب، 120×60 سم، مستعمل لكن جيد جدًا. فقط 40 يورو! — 2) أريكة عمرها 3 سنوات، زرقاء، عرضها مترين. السعر 90 يورو. الاستلام في عطلة الأسبوع. — 3) خزانة ملابس من معدن، جديدة، ارتفاعها 1.80 م. 75 يورو.", items: [
          { t: "tf", s: "Der Schreibtisch ist neu.", a: false, why: "‹gebraucht, aber sehr gut›." },
          { t: "tf", s: "Das Sofa kann man am Wochenende abholen.", a: true, why: "‹Abholen am Wochenende›." },
          { t: "tf", s: "Der Kleiderschrank ist aus Holz.", a: false, why: "‹aus Metall›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Ein Sofa am Telefon kaufen", ar: "شراء أريكة عبر الهاتف",
        scene: "رأيت إعلانًا عن أريكة مستعملة. تتصل بالبائع السيد فيبر.",
        who: { A: "Herr Weber" },
        lines: [
          { s: "A", de: "Weber, guten Tag!", ar: "فيبر، مرحبًا!" },
          { s: "U", task: "عرّف بنفسك وقل إنك تتصل بخصوص الأريكة في الإعلان.", m: "Guten Tag, hier ist {NAME}. Ich rufe wegen der Anzeige an.", ok: ["Guten Tag hier ist * ich rufe wegen * an", "Guten Tag mein Name ist * ich rufe wegen * an", "Guten Tag ich heiße * ich habe Interesse an dem Sofa", "Guten Tag hier ist * ist das Sofa noch da", "Guten Tag * ich rufe wegen der Anzeige an"], o: ["Guten Tag, hier ist {NAME}. Ich rufe wegen der Anzeige an.", "Guten Tag, hier ist {NAME}. Ich anrufe wegen der Anzeige.", "Guten Tag, ich bin das Sofa."], why: ["", "‹anrufen› منفصل: ‹Ich rufe … an.›", "خطأ في المعنى."], ar: "مرحبًا، معك … أتصل بخصوص الإعلان." },
          { s: "A", de: "Ah ja. Das Sofa ist drei Jahre alt und kostet 90 Euro.", ar: "آه نعم. الأريكة عمرها ثلاث سنوات وثمنها 90 يورو." },
          { s: "U", task: "لم تفهم جيدًا. اطلب منه الإعادة بأدب.", m: "Entschuldigung, können Sie das bitte noch einmal wiederholen?", ok: ["Entschuldigung können Sie das bitte noch einmal wiederholen", "Können Sie das bitte wiederholen", "Entschuldigung können Sie das wiederholen", "Können Sie das noch einmal wiederholen", "Wie bitte können Sie das wiederholen"], o: ["Entschuldigung, können Sie das bitte noch einmal wiederholen?", "Entschuldigung, können Sie wiederholen das bitte?", "Entschuldigung, kannst du wiederholen?"], why: ["", "المصدر ‹wiederholen› في الآخر.", "مع البائع (غريب) نستعمل ‹Sie›."], ar: "عذرًا، هل يمكنك إعادة ذلك من فضلك؟" },
          { s: "A", de: "Natürlich: Das Sofa ist drei Jahre alt, es ist blau und kostet 90 Euro.", ar: "طبعًا: الأريكة عمرها ثلاث سنوات، زرقاء وثمنها 90 يورو." },
          { s: "U", task: "اسأل: كم عرض الأريكة؟", m: "Wie breit ist das Sofa?", ok: ["Wie breit ist das Sofa", "Wie breit ist es", "Wie groß ist das Sofa"], o: ["Wie breit ist das Sofa?", "Wie breit das Sofa ist?", "Was breit ist das Sofa?"], why: ["", "في سؤال W الفعل ثانيًا.", "للسؤال عن المقاس: ‹Wie breit?›"], ar: "كم عرض الأريكة؟" },
          { s: "A", de: "Zwei Meter.", ar: "متران." },
          { s: "U", task: "قل: ممتاز. هل يمكنني أخذها يوم السبت؟", m: "Super. Kann ich das Sofa am Samstag abholen?", ok: ["Super kann ich das Sofa am Samstag abholen", "Gut kann ich das Sofa am Samstag abholen", "Kann ich das Sofa am Samstag abholen", "Kann ich es am Samstag abholen"], o: ["Super. Kann ich das Sofa am Samstag abholen?", "Super. Kann ich das Sofa am Samstag holen ab?", "Super. Ich kann abholen das Sofa?"], why: ["", "مع الفعل الناقص يبقى ‹abholen› كاملًا في الآخر.", "سؤال نعم/لا: الفعل الناقص أولًا."], ar: "ممتاز. هل يمكنني أخذ الأريكة يوم السبت؟" },
          { s: "A", de: "Ja, gern. Bis Samstag! Auf Wiederhören!", ar: "نعم، بكل سرور. إلى السبت! إلى اللقاء!" }
        ]
      },
      listen: [
        { t: "listen", say: "Der Schreibtisch ist aus Holz und kostet nur vierzig Euro.", q: "مم صُنع المكتب؟", o: ["من خشب", "من معدن", "من زجاج"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich habe dich heute dreimal angerufen, aber du hast nicht zurückgerufen.", q: "كم مرة اتصل؟", o: ["3 مرات", "مرتين", "مرة واحدة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Der Schrank ist leider zu hoch für mein Zimmer.", q: "ما مشكلة الخزانة؟", o: ["عالية جدًا", "غالية جدًا", "صغيرة جدًا"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Ich habe den Antrag ausgefüllt.", tag: "hoeren" },
        { t: "dict", say: "Der Tisch ist aus Holz.", tag: "hoeren" }
      ]
    },

    /* ───────────── 6C ───────────── */
    {
      id: "6C", de: "In der WG eingelebt", ar: "التأقلم في السكن المشترك",
      summary: "الحياة في السكن المشترك والأعمال المنزلية، Wo? + حروف الجر مع Dativ (in, an, auf, unter, über, neben, vor, hinter, zwischen)، stehen / liegen / hängen.",
      grammar: [
        {
          h: "أين؟ (Wo?) + حرف جر + Dativ",
          p: "للإجابة عن ‹Wo?› (أين الشيء؟) نستعمل هذه الحروف مع حالة الجر ‹Dativ›: ‹in, an, auf, unter, über, neben, vor, hinter, zwischen›.",
          table: {
            head: ["", "مذكر", "محايد", "مؤنث", "جمع"],
            rows: [
              ["Nominativ", "‹der Tisch›", "‹das Sofa›", "‹die Kommode›", "‹die Regale›"],
              ["Dativ", "‹**dem** Tisch›", "‹**dem** Sofa›", "‹**der** Kommode›", "‹**den** Regale**n**›"],
              ["Dativ (نكرة)", "‹einem Tisch›", "‹einem Sofa›", "‹einer Kommode›", "‹– Regalen›"]
            ]
          },
          list: ["دمج شائع: ‹in + dem = im› (‹im Zimmer›)، ‹an + dem = am› (‹am Fenster›).", "في الجمع نضيف ‑n للاسم في Dativ إن لم ينتهِ بـ n أو s: ‹zwischen den Regalen›."]
        },
        {
          h: "معاني الحروف",
          table: {
            head: ["الحرف", "المعنى", "مثال"],
            rows: [
              ["‹auf›", "على (فوق مع تلامس)", "‹Das Buch liegt auf dem Tisch.›"],
              ["‹über›", "فوق (بدون تلامس)", "‹Die Lampe hängt über dem Tisch.›"],
              ["‹unter›", "تحت", "‹Die Tasche liegt unter dem Stuhl.›"],
              ["‹in›", "في / داخل", "‹Der Käse ist im Kühlschrank.›"],
              ["‹an›", "عند / على (جانب عمودي)", "‹Das Bild hängt an der Wand.›"],
              ["‹neben›", "بجانب", "‹Der Stuhl steht neben dem Bett.›"],
              ["‹vor›", "أمام", "‹Das Fahrrad steht vor dem Haus.›"],
              ["‹hinter›", "خلف", "‹Der Müll ist hinter der Tür.›"],
              ["‹zwischen›", "بين", "‹Das Sofa steht zwischen den Regalen.›"]
            ]
          }
        },
        {
          h: "stehen – liegen – hängen – sitzen",
          list: ["‹stehen›: شيء واقف عموديًا (خزانة، زجاجة، كرسي)", "‹liegen›: شيء مستلقٍ أفقيًا (كتاب، هاتف، سجادة)", "‹hängen›: شيء معلّق (صورة، مصباح، ساعة)", "‹sitzen›: للأشخاص والحيوانات الجالسة"],
          ex: [["Wo ist mein Handy? – Es liegt auf dem Sofa.", "أين هاتفي؟ – إنه على الأريكة."], ["Die Flaschen stehen im Kühlschrank.", "القنينات في الثلاجة."]]
        }
      ],
      vocab: [
        ["n", "die", "WG", "-s", "السكن المشترك", "In unserer WG wohnen vier Leute.", "في سكننا المشترك يعيش أربعة أشخاص."],
        ["n", "der", "Mitbewohner", "-", "الشريك في السكن", "Mein Mitbewohner kocht gern.", "شريكي في السكن يحب الطبخ."],
        ["n", "die", "Mitbewohnerin", "-nen", "الشريكة في السكن", "Meine Mitbewohnerin heißt Sophie.", "شريكتي في السكن اسمها صوفي."],
        ["n", "der", "Haushalt", "-e", "شؤون المنزل", "Wir machen den Haushalt zusammen.", "نقوم بأعمال المنزل معًا."],
        ["n", "der", "Müll", "Sg.", "القمامة", "Wer bringt den Müll runter?", "من ينزل القمامة؟"],
        ["n", "der", "Eimer", "-", "الدلو / سلة", "Der Müll ist im Eimer.", "القمامة في السلة."],
        ["n", "die", "Wand", "¨-e", "الجدار", "Das Bild hängt an der Wand.", "الصورة معلّقة على الجدار."],
        ["n", "der", "Boden", "¨", "الأرضية", "Die Tasche liegt auf dem Boden.", "الحقيبة على الأرض."],
        ["n", "die", "Ecke", "-n", "الزاوية", "Der Sessel steht in der Ecke.", "الفوتيل في الزاوية."],
        ["n", "die", "Tasche", "-n", "الحقيبة", "Das Handy ist in der Tasche.", "الهاتف في الحقيبة."],
        ["n", "das", "Handy", "-s", "الهاتف المحمول", "Wo ist mein Handy?", "أين هاتفي؟"],
        ["n", "die", "Leute", "Pl.", "الناس", "Die Leute in der WG sind nett.", "الناس في السكن لطفاء."],
        ["n", "der", "Plan", "¨-e", "الخطة / الجدول", "Wir haben einen Putzplan.", "عندنا جدول تنظيف."],
        ["v", "", "stehen", "hat gestanden", "يقف / موضوع واقفًا", "Der Schrank steht neben der Tür.", "الخزانة بجانب الباب."],
        ["v", "", "liegen", "hat gelegen", "يستلقي / موضوع أفقيًا", "Das Buch liegt auf dem Tisch.", "الكتاب على الطاولة."],
        ["v", "", "hängen", "hat gehangen", "معلّق", "Die Lampe hängt über dem Tisch.", "المصباح معلّق فوق الطاولة."],
        ["v", "", "sitzen", "hat gesessen", "يجلس", "Leon sitzt auf dem Sofa.", "ليون يجلس على الأريكة."],
        ["v", "", "aufräumen", "hat aufgeräumt", "يرتّب", "Ich räume mein Zimmer auf.", "أرتّب غرفتي."],
        ["v", "", "putzen", "hat geputzt", "ينظّف", "Wer putzt heute das Bad?", "من ينظّف الحمّام اليوم؟"],
        ["v", "", "spülen", "hat gespült", "يغسل الأواني", "Ich spüle nach dem Essen.", "أغسل الأواني بعد الأكل."],
        ["v", "", "kochen", "hat gekocht", "يطبخ", "Heute koche ich für alle.", "اليوم أطبخ للجميع."],
        ["v", "", "runterbringen", "hat runtergebracht", "ينزل شيئًا (إلى الأسفل)", "Hast du den Müll runtergebracht?", "هل أنزلت القمامة؟"],
        ["v", "", "erledigen", "hat erledigt", "ينجز", "Ich habe alles erledigt.", "أنجزت كل شيء."],
        ["v", "", "vergessen", "hat vergessen", "ينسى", "Ich habe den Schlüssel vergessen.", "نسيت المفتاح."],
        ["p", "", "auf", "+ Dat. (wo?)", "على", "Das Handy liegt auf dem Tisch.", "الهاتف على الطاولة."],
        ["p", "", "unter", "+ Dat. (wo?)", "تحت", "Die Schuhe stehen unter dem Bett.", "الحذاء تحت السرير."],
        ["p", "", "über", "+ Dat. (wo?)", "فوق", "Die Uhr hängt über der Tür.", "الساعة فوق الباب."],
        ["p", "", "neben", "+ Dat. (wo?)", "بجانب", "Der Stuhl steht neben dem Schreibtisch.", "الكرسي بجانب المكتب."],
        ["p", "", "vor", "+ Dat. (wo?)", "أمام", "Das Fahrrad steht vor dem Haus.", "الدراجة أمام المنزل."],
        ["p", "", "hinter", "+ Dat. (wo?)", "خلف", "Die Tasche ist hinter der Tür.", "الحقيبة خلف الباب."],
        ["p", "", "zwischen", "+ Dat. (wo?)", "بين", "Das Sofa steht zwischen den Regalen.", "الأريكة بين الرفوف."],
        ["p", "", "an", "+ Dat. (wo?)", "عند / على (جدار)", "Das Poster hängt an der Wand.", "الملصق على الجدار."],
        ["d", "", "abwechselnd", "", "بالتناوب", "Wir kochen abwechselnd.", "نطبخ بالتناوب."],
        ["x", "", "Wo ist bloß …?", "", "أين يا ترى …؟", "Wo ist bloß mein Schlüssel?", "أين يا ترى مفتاحي؟"]
      ],
      phrases: [
        ["Wo ist mein Handy? – Es liegt auf dem Sofa.", "أين هاتفي؟ – إنه على الأريكة."],
        ["Der Schreibtisch steht am Fenster.", "المكتب عند النافذة."],
        ["Die Lampe hängt über dem Tisch.", "المصباح معلّق فوق الطاولة."],
        ["Was ist im Kühlschrank? – Milch, Käse und Eier.", "ماذا في الثلاجة؟ – حليب وجبن وبيض."],
        ["Wer bringt heute den Müll runter?", "من ينزل القمامة اليوم؟"],
        ["Wir machen den Haushalt zusammen.", "نقوم بأعمال المنزل معًا."]
      ],
      ex: [
        { t: "mc", q: "اختر الأداة (Dativ).", s: "Das Buch liegt auf ___ Tisch. (der Tisch)", o: ["dem", "den", "der"], a: 0, why: "‹Wo?› + ‹auf› → Dativ؛ المذكر ‹der → dem›.", tag: "dativ" },
        { t: "mc", q: "اختر الأداة (Dativ).", s: "Die Tasche ist neben ___ Kommode. (die Kommode)", o: ["der", "die", "dem"], a: 0, why: "المؤنث في Dativ: ‹die → der›.", tag: "dativ" },
        { t: "mc", q: "اختر الأداة (Dativ).", s: "Das Sofa steht zwischen ___ Regalen.", o: ["den", "die", "dem"], a: 0, why: "الجمع في Dativ: ‹die → den› + ‑n.", tag: "dativ" },
        { t: "gap", q: "أكمل بـ im أو am.", s: "Der Käse ist ___ Kühlschrank.", a: ["im"], why: "‹in + dem = im› (داخل).", tag: "dativ" },
        { t: "gap", q: "أكمل بـ im أو am.", s: "Der Schreibtisch steht ___ Fenster.", a: ["am"], why: "‹an + dem = am› (عند).", tag: "dativ" },
        { t: "gap", q: "أكمل بالأداة.", s: "Die Lampe hängt über ___ Bett. (das Bett)", a: ["dem"], why: "المحايد في Dativ: ‹das → dem›.", tag: "dativ" },
        { t: "gap", q: "أكمل بالأداة.", s: "Der Müll steht hinter ___ Tür. (die Tür)", a: ["der"], why: "المؤنث في Dativ: ‹der›.", tag: "dativ" },
        { t: "mc", q: "stehen أم liegen أم hängen؟", s: "Das Bild ___ an der Wand.", o: ["hängt", "liegt", "steht"], a: 0, why: "الصورة معلّقة → ‹hängen›.", tag: "dativ" },
        { t: "mc", q: "stehen أم liegen أم hängen؟", s: "Das Handy ___ auf dem Tisch.", o: ["liegt", "steht", "hängt"], a: 0, why: "الهاتف مستلقٍ أفقيًا → ‹liegen›.", tag: "dativ" },
        { t: "mc", q: "stehen أم liegen أم hängen؟", s: "Die Flaschen ___ im Kühlschrank.", o: ["stehen", "liegen", "hängen"], a: 0, why: "القنينات واقفة → ‹stehen›.", tag: "dativ" },
        { t: "mc", q: "auf أم über؟", s: "Die Lampe hängt ___ dem Tisch.", o: ["über", "auf"], a: 0, why: "فوق بدون تلامس → ‹über›.", tag: "dativ" },
        { t: "order", q: "رتّب الجملة.", a: "Der Stuhl steht neben dem Bett.", why: "الفاعل + الفعل + حرف الجر + Dativ.", tag: "dativ" },
        { t: "match", q: "صِل حرف الجر بمعناه.", pairs: [["unter", "تحت"], ["neben", "بجانب"], ["hinter", "خلف"], ["zwischen", "بين"], ["vor", "أمام"]], tag: "dativ" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "الكتاب على الطاولة.", a: ["Das Buch liegt auf dem Tisch.", "Das Buch ist auf dem Tisch."], tag: "dativ" },
        { t: "read", title: "Leons Zimmer", text: "Mein Zimmer ist klein, aber gemütlich. Das Bett steht an der Wand, neben dem Fenster. Der Schreibtisch steht vor dem Fenster. Über dem Schreibtisch hängt eine Lampe. Meine Bücher stehen im Regal zwischen dem Bett und dem Schrank. Mein Fahrrad steht im Keller.", tr: "غرفتي صغيرة لكنها مريحة. السرير عند الجدار بجانب النافذة. المكتب أمام النافذة. فوق المكتب مصباح معلّق. كتبي في الرف بين السرير والخزانة. دراجتي في القبو.", items: [
          { t: "tf", s: "Der Schreibtisch steht vor dem Fenster.", a: true, why: "‹Der Schreibtisch steht vor dem Fenster.›" },
          { t: "tf", s: "Die Lampe hängt über dem Bett.", a: false, why: "فوق المكتب: ‹Über dem Schreibtisch hängt eine Lampe.›" },
          { t: "tf", s: "Das Regal steht zwischen dem Bett und dem Schrank.", a: true, why: "‹im Regal zwischen dem Bett und dem Schrank›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Wo ist bloß mein Schlüssel?", ar: "أين يا ترى مفتاحي؟",
        scene: "شريكك في السكن ليون يبحث عن أشيائه ويسألك.",
        who: { A: "Leon" },
        lines: [
          { s: "A", de: "Hast du meinen Schlüssel gesehen?", ar: "هل رأيت مفتاحي؟" },
          { s: "U", task: "قل: نعم، المفتاح على الطاولة في المطبخ.", m: "Ja, der Schlüssel liegt auf dem Tisch in der Küche.", ok: ["Ja der Schlüssel liegt auf dem Tisch in der Küche", "Ja er liegt auf dem Tisch in der Küche", "Der Schlüssel liegt auf dem Tisch in der Küche", "Ja er ist auf dem Tisch in der Küche"], o: ["Ja, der Schlüssel liegt auf dem Tisch in der Küche.", "Ja, der Schlüssel liegt auf den Tisch in die Küche.", "Ja, der Schlüssel steht auf dem Tisch in dem Küche."], why: ["", "‹Wo?› → Dativ: ‹auf dem Tisch›، ‹in der Küche›.", "المفتاح مستلقٍ → ‹liegt›، و‹die Küche› → ‹in der Küche›."], ar: "نعم، المفتاح على الطاولة في المطبخ." },
          { s: "A", de: "Danke! Und meine Tasche? Wo ist sie?", ar: "شكرًا! وحقيبتي؟ أين هي؟" },
          { s: "U", task: "قل: هي تحت الكرسي، بجانب الباب.", m: "Sie liegt unter dem Stuhl, neben der Tür.", ok: ["Sie liegt unter dem Stuhl neben der Tür", "Sie ist unter dem Stuhl neben der Tür", "Die Tasche liegt unter dem Stuhl neben der Tür", "Unter dem Stuhl neben der Tür"], o: ["Sie liegt unter dem Stuhl, neben der Tür.", "Sie liegt unter den Stuhl, neben die Tür.", "Er liegt unter dem Stuhl, neben dem Tür."], why: ["", "Dativ: ‹unter dem Stuhl›، ‹neben der Tür›.", "‹die Tasche› → ‹sie›، ‹die Tür› → ‹der Tür›."], ar: "هي تحت الكرسي بجانب الباب." },
          { s: "A", de: "Super. Sag mal, wer bringt heute den Müll runter?", ar: "ممتاز. قل لي، من ينزل القمامة اليوم؟" },
          { s: "U", task: "قل: أنا أنزلها. لكن هل نظّفت الحمّام؟", m: "Ich bringe ihn runter. Aber hast du das Bad geputzt?", ok: ["Ich bringe ihn runter aber hast du das Bad geputzt", "Ich bringe den Müll runter aber hast du das Bad geputzt", "Ich mache das aber hast du das Bad geputzt", "Ich bringe ihn runter *"], o: ["Ich bringe ihn runter. Aber hast du das Bad geputzt?", "Ich runterbringe ihn. Aber hast du das Bad geputzt?", "Ich bringe ihn runter. Aber bist du das Bad geputzt?"], why: ["", "‹runterbringen› منفصل: ‹bringe … runter›.", "‹putzen› مع ‹haben›."], ar: "أنا أنزلها. لكن هل نظّفت الحمّام؟" },
          { s: "A", de: "Oh nein, das habe ich vergessen! Ich mache es sofort.", ar: "آه لا، نسيت ذلك! سأفعله فورًا." }
        ]
      },
      listen: [
        { t: "listen", say: "Dein Handy liegt auf dem Sofa, neben der Lampe.", q: "أين الهاتف؟", o: ["على الأريكة", "تحت الأريكة", "في المطبخ"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Die Milch steht im Kühlschrank, der Käse liegt auf dem Tisch.", q: "أين الجبن؟", o: ["على الطاولة", "في الثلاجة", "تحت الطاولة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Am Montag putzt Sophie das Bad und ich räume die Küche auf.", q: "ماذا تفعل صوفي يوم الاثنين؟", o: ["تنظّف الحمّام", "ترتّب المطبخ", "تطبخ"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Das Buch liegt auf dem Tisch.", tag: "hoeren" },
        { t: "dict", say: "Die Lampe hängt über dem Bett.", tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "Akzent: trennbare und untrennbare Verben", ar: "النبر في الأفعال المنفصلة وغير المنفصلة",
    body: [
      { p: "في الأفعال **المنفصلة** النبر دائمًا على **البادئة**: ‹ÁBholen, MÍTspielen, ÁNrufen, ÁUFräumen› — وكذلك في Perfekt: ‹ÁNgerufen›." },
      { p: "في الأفعال **غير المنفصلة** النبر على **الجذر**، والبادئة خفيفة: ‹beSÚchen, beSCHRÉIben, beZÁHlen, erZÄHlen, verGLÉIchen, verGÉSSen›." },
      { tip: "هذه القاعدة تساعدك في الكتابة: إذا سمعت البادئة قوية فالفعل منفصل → ‹ge› في الوسط في Perfekt." }
    ],
    drills: [
      { t: "listen", say: "anrufen", q: "أين النبر؟", o: ["AN‑rufen", "an‑RU‑fen"], a: 0, why: "منفصل → النبر على البادئة." },
      { t: "listen", say: "besuchen", q: "أين النبر؟", o: ["be‑SU‑chen", "BE‑suchen"], a: 0, why: "غير منفصل → النبر على الجذر." },
      { t: "listen", say: "aufräumen", q: "أين النبر؟", o: ["AUF‑räumen", "auf‑RÄU‑men"], a: 0, why: "منفصل → البادئة." },
      { t: "listen", say: "vergessen", q: "أين النبر؟", o: ["ver‑GES‑sen", "VER‑gessen"], a: 0, why: "غير منفصل → الجذر." },
      { t: "listen", say: "Die Heizung ist ausgegangen.", q: "أين النبر في ‹ausgegangen›؟", o: ["AUS‑gegangen", "aus‑ge‑GAN‑gen"], a: 0, why: "منفصل → البادئة." }
    ],
    say: ["abholen – Ich hole dich ab.", "mitspielen – Spielt ihr mit?", "anrufen – Du rufst an.", "aufräumen – Sie räumen auf.", "besuchen – Besuchst du mich morgen?", "bezahlen – Ich möchte bitte bezahlen.", "erzählen – Er erzählt im Kurs.", "Die Heizung ist ausgegangen.", "Der Vermieter hat nicht zurückgerufen."]
  },

  write: [
    {
      ar: "صِف غرفتك (6–8 جمل): ما الأثاث الموجود؟ أين يوجد كل شيء؟ استعمل stehen / liegen / hängen + حروف الجر مع Dativ.",
      de: "Beschreiben Sie Ihr Zimmer: Was steht, liegt, hängt wo?",
      model: "Mein Zimmer ist nicht groß, aber hell. Das Bett steht an der Wand. Neben dem Bett steht eine Kommode. Der Schreibtisch steht vor dem Fenster und über dem Schreibtisch hängt eine Lampe. Meine Bücher stehen im Regal. Ein Teppich aus Marokko liegt auf dem Boden.",
      check: ["‹stehen / liegen / hängen› بشكل صحيح", "Dativ بعد الحرف: ‹dem / der / den …n›", "‹im› و‹am›", "مواد: ‹aus Holz / aus Metall›"]
    },
    {
      ar: "اكتب بريدًا إلكترونيًا لصديق عن انتقالك إلى غرفة جديدة بالـ Perfekt: ماذا وجدت؟ ماذا اشتريت؟ من ساعدك؟",
      de: "Mail: Ich bin umgezogen! (Perfekt)",
      model: "Lieber Tim,\nendlich habe ich ein Zimmer gefunden! Am Samstag bin ich eingezogen. Mein Bruder hat mir geholfen. Wir haben ein Sofa gekauft und einen Schreibtisch abgeholt. Am Abend haben wir Pizza gegessen. Besuchst du mich bald?\nViele Grüße\nKarim",
      check: ["Perfekt مع ‹haben› و‹sein› بشكل صحيح", "أفعال شاذة: gefunden, geholfen, gegessen", "أفعال منفصلة: eingezogen, abgeholt", "بداية وختام البريد"]
    }
  ],
  tutor: [
    { title: "Zimmersuche", ar: "البحث عن غرفة", role: "Herr Weber, ein Vermieter, der ein möbliertes Zimmer vermietet", goal: "nach einem Zimmer fragen: Größe, Miete, Möbel, ab wann frei; nachfragen und wiederholen lassen (Sie-Form)", start: "Weber, guten Tag! Sie rufen wegen der Anzeige an?" },
    { title: "In der WG", ar: "في السكن المشترك", role: "Leon, ein chaotischer Mitbewohner in der WG", goal: "sagen, wo Dinge sind (Präpositionen mit Dativ, stehen/liegen/hängen) und über Hausarbeit im Perfekt sprechen", start: "Hilfe! Wo ist bloß mein Handy? Hast du es gesehen?" }
  ]
});

/* Lektion 7 — Kleider machen Freunde */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 7,
  de: "Kleider machen Freunde",
  ar: "الملابس تصنع الأصدقاء",
  book: "Kursbuch S. 58–65 · Übungsbuch S. 124–131",
  goals: [
    "فهم التعليمات وإعطاؤها: صيغة الأمر الرسمية وغير الرسمية",
    "تقديم اقتراحات: Gehen wir …! / Sollen wir …? / Soll ich …?",
    "الملابس والألوان والمواد",
    "الطلب بأدب والاستفسار، واستعمال doch و mal",
    "ردود الفعل الإيجابية والسلبية"
  ],
  units: [
    /* ───────────── 7A ───────────── */
    {
      id: "7A", de: "„Café Waschsalon“", ar: "«مقهى المغسلة»",
      summary: "في المغسلة، فهم التعليمات، الأمر الرسمي مع Sie، الاقتراح بـ wir، Sollen/Wollen wir …? و Soll ich …?",
      grammar: [
        {
          h: "الأمر الرسمي مع Sie",
          p: "نأخذ صيغة ‹Sie› للفعل ونضع **الفعل أولًا** ثم ‹Sie›. نستعمله في التعليمات والإرشادات (آلات، استمارات) ومع الغرباء.",
          table: {
            head: ["جملة عادية", "أمر"],
            rows: [
              ["‹Sie öffnen die Tür.›", "‹Öffnen Sie die Tür!›"],
              ["‹Sie füllen das Waschpulver ein.›", "‹Füllen Sie das Waschpulver ein!›"],
              ["‹Sie drücken auf Start.›", "‹Drücken Sie auf Start!›"],
              ["‹Sie sind vorsichtig.›", "‹Seien Sie vorsichtig!› ⚠"]
            ]
          },
          tip: "في الأفعال المنفصلة البادئة في الآخر: ‹Machen Sie die Maschine an!›. ونضيف ‹bitte› للأدب: ‹Warten Sie bitte!›"
        },
        {
          h: "الاقتراح مع wir",
          p: "للاقتراح نضع الفعل أولًا ثم ‹wir› — مثل «هيّا نذهب»: ‹Gehen wir ins Kino!› ‹Trinken wir doch einen Kaffee!›"
        },
        {
          h: "Sollen wir …? / Wollen wir …? / Soll ich …?",
          table: {
            head: ["الصيغة", "المعنى"],
            rows: [
              ["‹Sollen wir einen Kaffee trinken?›", "هل نشرب قهوة؟ (أقترح ذلك)"],
              ["‹Wollen wir zusammen kochen?›", "هل نطبخ معًا؟"],
              ["‹Soll ich dir helfen?›", "هل أساعدك؟ (أعرض المساعدة)"]
            ]
          },
          list: ["تصريف ‹sollen›: ‹ich soll, du sollst, er soll, wir sollen, ihr sollt, sie sollen›."]
        }
      ],
      vocab: [
        ["n", "der", "Waschsalon", "-s", "المغسلة العامة", "Ich wasche meine Wäsche im Waschsalon.", "أغسل ملابسي في المغسلة العامة."],
        ["n", "die", "Wäsche", "Sg.", "الغسيل (الملابس)", "Die Wäsche ist schmutzig.", "الغسيل متّسخ."],
        ["n", "die", "Waschmaschine", "-n", "آلة الغسيل", "Die Waschmaschine ist frei.", "آلة الغسيل فارغة."],
        ["n", "der", "Trockner", "-", "آلة التجفيف", "Die Wäsche ist im Trockner.", "الغسيل في آلة التجفيف."],
        ["n", "das", "Waschpulver", "-", "مسحوق الغسيل", "Füllen Sie das Waschpulver ein.", "ضع مسحوق الغسيل."],
        ["n", "das", "Waschprogramm", "-e", "برنامج الغسيل", "Wählen Sie ein Waschprogramm.", "اختر برنامج غسيل."],
        ["n", "der", "Waschkorb", "¨-e", "سلة الغسيل", "Der Waschkorb ist voll.", "سلة الغسيل ممتلئة."],
        ["n", "der", "Automat", "-en", "الآلة (للبيع / الدفع)", "Bezahlen Sie am Automaten.", "ادفع عند الآلة."],
        ["n", "die", "Anleitung", "-en", "التعليمات / دليل الاستعمال", "Lesen Sie die Anleitung.", "اقرأ التعليمات."],
        ["n", "die", "Anweisung", "-en", "التوجيه / التعليمة", "Folgen Sie den Anweisungen.", "اتبع التوجيهات."],
        ["n", "der", "Vorschlag", "¨-e", "الاقتراح", "Ich habe einen Vorschlag.", "عندي اقتراح."],
        ["n", "die", "Tür", "-en", "الباب", "Öffnen Sie die Tür.", "افتح الباب."],
        ["n", "die", "Münze", "-n", "قطعة النقد المعدنية", "Werfen Sie zwei Münzen ein.", "أدخل قطعتين نقديتين."],
        ["n", "der", "Espresso", "-s", "الإسبريسو", "Ein Espresso, bitte.", "إسبريسو من فضلك."],
        ["n", "der", "Milchkaffee", "-s", "القهوة بالحليب", "Ich nehme einen Milchkaffee.", "آخذ قهوة بالحليب."],
        ["n", "der", "Schokoladenkuchen", "-", "كعكة الشوكولاتة", "Der Schokoladenkuchen ist lecker.", "كعكة الشوكولاتة لذيذة."],
        ["n", "die", "Kasse", "-n", "الصندوق (الدفع)", "Bezahlen Sie bitte an der Kasse.", "ادفع عند الصندوق من فضلك."],
        ["v", "", "waschen", "du wäschst, er wäscht", "يغسل", "Ich wasche meine Jeans.", "أغسل الجينز."],
        ["v", "", "trocknen", "", "يجفّف / يجفّ", "Die Wäsche trocknet schnell.", "الغسيل يجف بسرعة."],
        ["v", "", "öffnen", "", "يفتح", "Öffnen Sie die Tür!", "افتح الباب!"],
        ["v", "", "schließen", "", "يغلق", "Schließen Sie die Tür!", "أغلق الباب!"],
        ["v", "", "sortieren", "", "يفرز", "Sortieren Sie die Wäsche nach Farben.", "افرز الغسيل حسب الألوان."],
        ["v", "", "einfüllen", "ich fülle ein", "يملأ / يضع داخل", "Füllen Sie das Waschpulver ein.", "ضع مسحوق الغسيل."],
        ["v", "", "wählen", "", "يختار", "Wählen Sie das Programm.", "اختر البرنامج."],
        ["v", "", "drücken", "", "يضغط", "Drücken Sie auf Start.", "اضغط على زر البدء."],
        ["v", "", "anmachen", "ich mache an", "يشغّل", "Machen Sie die Maschine an.", "شغّل الآلة."],
        ["v", "", "warten", "du wartest", "ينتظر", "Warten Sie bitte zehn Minuten.", "انتظر عشر دقائق من فضلك."],
        ["v", "", "sollen", "ich soll, du sollst", "ينبغي / هل … ؟ (اقتراح)", "Soll ich dir helfen?", "هل أساعدك؟"],
        ["v", "", "helfen", "du hilfst, er hilft", "يساعد", "Können Sie mir helfen?", "هل يمكنك مساعدتي؟"],
        ["a", "", "fertig", "", "جاهز / انتهى", "Die Wäsche ist fertig.", "الغسيل جاهز."],
        ["a", "", "sauber", "", "نظيف", "Die Wäsche ist sauber.", "الغسيل نظيف."],
        ["a", "", "nass", "", "مبلّل", "Die Jacke ist noch nass.", "السترة ما زالت مبلّلة."],
        ["a", "", "vorsichtig", "", "حذر", "Seien Sie vorsichtig!", "كن حذرًا!"],
        ["d", "", "später", "", "لاحقًا", "Bis später!", "إلى اللقاء لاحقًا!"]
      ],
      phrases: [
        ["Öffnen Sie die Tür und füllen Sie die Wäsche ein.", "افتح الباب وضع الغسيل."],
        ["Wählen Sie das Programm und drücken Sie auf Start.", "اختر البرنامج واضغط على البدء."],
        ["Warten Sie bitte, die Maschine ist noch nicht fertig.", "انتظر من فضلك، الآلة لم تنتهِ بعد."],
        ["Gehen wir doch ins Kino!", "هيّا نذهب إلى السينما!"],
        ["Sollen wir einen Kaffee trinken?", "هل نشرب قهوة؟"],
        ["Soll ich dir helfen? – Ja, gern!", "هل أساعدك؟ – نعم، بكل سرور!"]
      ],
      ex: [
        { t: "gap", q: "حوّل إلى أمر رسمي.", s: "Sie öffnen die Tür. → ___ Sie die Tür!", a: ["Öffnen"], why: "الأمر الرسمي: الفعل أولًا ثم ‹Sie›.", tag: "imperativ" },
        { t: "gap", q: "حوّل إلى أمر رسمي (فعل منفصل).", s: "Sie füllen das Waschpulver ein. → ___ Sie das Waschpulver ___!", a: ["Füllen", "ein"], why: "البادئة ‹ein› في آخر الجملة.", tag: "imperativ" },
        { t: "gap", q: "حوّل إلى أمر رسمي.", s: "Sie sind vorsichtig. → ___ Sie vorsichtig!", a: ["Seien"], why: "‹sein› شاذ: ‹Seien Sie …!›", tag: "imperativ", wrong: { "Sind": "الأمر من ‹sein› شاذ: ‹Seien Sie›." } },
        { t: "mc", q: "اختر الأمر الرسمي الصحيح.", o: ["Drücken Sie auf Start!", "Sie drücken auf Start!", "Drückt Sie auf Start!"], a: 0, why: "الفعل (صيغة Sie) أولًا ثم ‹Sie›.", tag: "imperativ" },
        { t: "order", q: "رتّب الأمر.", a: "Machen Sie die Maschine an!", why: "الفعل أولًا، ‹Sie›، المفعول، البادئة في الآخر.", tag: "imperativ" },
        { t: "order", q: "رتّب التعليمات.", a: "Wählen Sie bitte das Programm!", why: "الفعل أولًا ثم ‹Sie›.", tag: "imperativ" },
        { t: "mc", q: "كيف تقترح الذهاب إلى السينما؟", o: ["Gehen wir ins Kino!", "Wir gehen ins Kino?", "Geht wir ins Kino!"], a: 0, why: "اقتراح: الفعل أولًا + ‹wir›.", tag: "vorschlag" },
        { t: "mc", q: "تعرض المساعدة على شخص. ماذا تقول؟", o: ["Soll ich Ihnen helfen?", "Sollen Sie mir helfen?", "Helfen Sie!"], a: 0, why: "‹Soll ich …?› = عرض: هل أفعل لك …؟", tag: "vorschlag" },
        { t: "gap", q: "أكمل بـ sollen.", s: "___ wir zusammen kochen?", a: ["Sollen"], why: "‹wir sollen› في سؤال اقتراح.", tag: "vorschlag" },
        { t: "match", q: "صِل التعليمة بمعناها.", pairs: [["Öffnen Sie die Tür.", "افتح الباب."], ["Wählen Sie das Programm.", "اختر البرنامج."], ["Drücken Sie auf Start.", "اضغط على البدء."], ["Warten Sie bitte.", "انتظر من فضلك."], ["Sortieren Sie die Wäsche.", "افرز الغسيل."]], tag: "imperativ" },
        { t: "tr", q: "ترجم إلى الألمانية (أمر رسمي).", ar: "اقرأ التعليمات من فضلك!", a: ["Lesen Sie bitte die Anleitung!", "Lesen Sie die Anleitung, bitte!", "Bitte lesen Sie die Anleitung!"], tag: "imperativ" },
        { t: "read", title: "So waschen Sie im Café Waschsalon", text: "1. Sortieren Sie die Wäsche nach Farben. 2. Öffnen Sie die Tür und füllen Sie die Wäsche ein. 3. Füllen Sie Waschpulver ein. 4. Wählen Sie das Waschprogramm: 30, 40 oder 60 Grad. 5. Bezahlen Sie am Automaten. 6. Drücken Sie auf Start. Trinken Sie in der Zwischenzeit einen Kaffee in unserem Café!", tr: "1. افرز الغسيل حسب الألوان. 2. افتح الباب وضع الغسيل. 3. ضع مسحوق الغسيل. 4. اختر برنامج الغسيل: 30 أو 40 أو 60 درجة. 5. ادفع عند الآلة. 6. اضغط على البدء. في هذه الأثناء اشرب قهوة في مقهانا!", items: [
          { t: "tf", s: "Man bezahlt an der Kasse im Café.", a: false, why: "‹Bezahlen Sie am Automaten.›" },
          { t: "tf", s: "Zuerst sortiert man die Wäsche.", a: true, why: "الخطوة الأولى." },
          { t: "tf", s: "Es gibt nur ein Programm mit 60 Grad.", a: false, why: "‹30, 40 oder 60 Grad›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Im Waschsalon", ar: "في المغسلة",
        scene: "أنت في المغسلة للمرة الأولى. السيدة هوفباور صاحبة المقهى تساعدك.",
        who: { A: "Frau Hofbauer" },
        lines: [
          { s: "A", de: "Guten Tag! Kann ich Ihnen helfen?", ar: "مرحبًا! هل يمكنني مساعدتك؟" },
          { s: "U", task: "قل: نعم من فضلك. أنا هنا لأول مرة. كيف تعمل الآلة؟", m: "Ja, bitte. Ich bin zum ersten Mal hier. Wie funktioniert die Maschine?", ok: ["Ja bitte ich bin zum ersten Mal hier wie funktioniert die Maschine", "Ja bitte wie funktioniert die Maschine", "Ja gern wie funktioniert die Waschmaschine", "Ja bitte ich bin neu hier wie funktioniert die Maschine"], o: ["Ja, bitte. Ich bin zum ersten Mal hier. Wie funktioniert die Maschine?", "Ja, bitte. Wie funktionieren die Maschine?", "Nein, danke. Ich bin fertig."], why: ["", "‹die Maschine› مفرد → ‹funktioniert›.", "أنت تحتاج المساعدة!"], ar: "نعم من فضلك. أنا هنا لأول مرة. كيف تعمل الآلة؟" },
          { s: "A", de: "Ganz einfach. Öffnen Sie die Tür und füllen Sie die Wäsche ein. Dann wählen Sie das Programm.", ar: "بسيط جدًا. افتح الباب وضع الغسيل. ثم اختر البرنامج." },
          { s: "U", task: "اسأل: وأين أضع مسحوق الغسيل؟ (Wo …?)", m: "Und wo fülle ich das Waschpulver ein?", ok: ["Und wo fülle ich das Waschpulver ein", "Wo fülle ich das Waschpulver ein", "Und wo ist das Waschpulver"], o: ["Und wo fülle ich das Waschpulver ein?", "Und wo einfülle ich das Waschpulver?", "Und wo füllen ich das Waschpulver ein?"], why: ["", "‹einfüllen› منفصل: ‹fülle … ein›.", "مع ‹ich›: ‹fülle›."], ar: "وأين أضع مسحوق الغسيل؟" },
          { s: "A", de: "Hier oben. Bezahlen Sie dann am Automaten und drücken Sie auf Start.", ar: "هنا في الأعلى. ثم ادفع عند الآلة واضغط على البدء." },
          { s: "U", task: "اشكرها واطلب: قهوة بالحليب من فضلك (أثناء الانتظار).", m: "Vielen Dank! Ich hätte gern einen Milchkaffee, bitte.", ok: ["Vielen Dank ich hätte gern einen Milchkaffee *", "Danke ich hätte gern einen Milchkaffee *", "Danke einen Milchkaffee bitte", "Vielen Dank ich möchte einen Milchkaffee *", "Danke ich nehme einen Milchkaffee"], o: ["Vielen Dank! Ich hätte gern einen Milchkaffee, bitte.", "Vielen Dank! Ich hätte gern ein Milchkaffee.", "Vielen Dank! Trinken Sie einen Milchkaffee!"], why: ["", "‹der Milchkaffee› مذكر → ‹einen›.", "هذا أمر لها، وأنت تريد أن تطلب لنفسك."], ar: "شكرًا جزيلًا! أودّ قهوة بالحليب من فضلك." },
          { s: "A", de: "Gern! Möchten Sie auch ein Stück Schokoladenkuchen?", ar: "بكل سرور! هل تريد أيضًا قطعة كعكة شوكولاتة؟" },
          { s: "U", task: "قل: نعم، ولكن قطعة صغيرة من فضلك.", m: "Ja, aber ein kleines Stück, bitte.", ok: ["Ja aber ein kleines Stück bitte", "Ja gern aber ein kleines Stück", "Ja bitte ein kleines Stück"], o: ["Ja, aber ein kleines Stück, bitte.", "Ja, aber eine kleine Stück, bitte.", "Nein, aber ein Stück, bitte."], why: ["", "‹das Stück› محايد → ‹ein kleines Stück›.", "تناقض: ‹Nein› ثم تطلب!"], ar: "نعم، لكن قطعة صغيرة من فضلك." }
        ]
      },
      listen: [
        { t: "listen", say: "Öffnen Sie die Tür, füllen Sie die Wäsche ein und wählen Sie das Programm.", q: "ما الخطوة الثالثة؟", o: ["اختيار البرنامج", "فتح الباب", "الدفع"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Sollen wir heute Abend ins Kino gehen? – Gute Idee!", q: "ماذا يقترح؟", o: ["الذهاب إلى السينما", "الذهاب إلى المقهى", "غسل الملابس"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Bezahlen Sie bitte am Automaten, nicht an der Kasse.", q: "أين يُدفع؟", o: ["عند الآلة", "عند الصندوق", "عبر الإنترنت"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Drücken Sie auf Start.", tag: "hoeren" },
        { t: "dict", say: "Soll ich dir helfen?", tag: "hoeren" }
      ]
    },

    /* ───────────── 7B ───────────── */
    {
      id: "7B", de: "Pass auf, der läuft ein!", ar: "انتبه، سينكمش!",
      summary: "الملابس والألوان والمواد، الأمر غير الرسمي (du/ihr)، الطلب المهذب، doch و mal، ein paar / ein Paar.",
      grammar: [
        {
          h: "الأمر غير الرسمي: du و ihr",
          p: "مع ‹du›: نأخذ صيغة du ونحذف ‹du› والنهاية ‑st. مع ‹ihr›: صيغة ihr بدون ‹ihr›.",
          table: {
            head: ["المصدر", "du", "ihr", "Sie"],
            rows: [
              ["‹kommen›", "‹Komm!›", "‹Kommt!›", "‹Kommen Sie!›"],
              ["‹warten›", "‹Warte!›", "‹Wartet!›", "‹Warten Sie!›"],
              ["‹aufpassen›", "‹Pass auf!›", "‹Passt auf!›", "‹Passen Sie auf!›"],
              ["‹lesen› (e→ie)", "‹L**ie**s!›", "‹Lest!›", "‹Lesen Sie!›"],
              ["‹nehmen› (e→i)", "‹N**i**mm!›", "‹Nehmt!›", "‹Nehmen Sie!›"],
              ["‹fahren› (a→ä)", "‹Fahr!› ⚠ بدون Umlaut", "‹Fahrt!›", "‹Fahren Sie!›"],
              ["‹haben›", "‹Hab keine Angst!›", "‹Habt keine Angst!›", "‹Haben Sie keine Angst!›"],
              ["‹sein›", "‹Sei vorsichtig!›", "‹Seid vorsichtig!›", "‹Seien Sie vorsichtig!›"]
            ]
          },
          list: ["الأفعال التي جذرها ينتهي بـ t/d أو ‑n بعد ساكن تأخذ ‑e مع du: ‹Warte! Öffne! Rede!›", "أفعال a → ä تفقد الـ Umlaut في الأمر: ‹du fährst → Fahr!›، ‹du schläfst → Schlaf gut!›."]
        },
        {
          h: "doch و mal: تليين الأمر",
          list: [
            "‹mal› تجعل الأمر خفيفًا وعابرًا: ‹Komm mal her!› (تعال هنا لحظة)",
            "‹doch› تجعله اقتراحًا ودودًا أو تُظهر نفاد الصبر حسب النبرة: ‹Probier das doch an!›",
            "‹doch mal› معًا: ‹Ruf mich doch mal an!› (اتصل بي يومًا ما!)"
          ]
        },
        {
          h: "الطلب المهذب والاستفسار",
          ex: [["Entschuldigen Sie, können Sie mir bitte helfen?", "عذرًا، هل يمكنك مساعدتي من فضلك؟"], ["Können Sie mir das bitte erklären?", "هل يمكنك أن تشرح لي ذلك؟"], ["Wiederholen Sie das doch bitte noch mal!", "أعد ذلك مرة أخرى من فضلك!"], ["Darf ich noch mal nachfragen?", "هل يمكنني أن أسأل مرة أخرى؟"]]
        },
        {
          h: "ein Paar أم ein paar؟",
          list: ["‹ein Paar› (P كبيرة) = زوج من شيئين متلازمين: ‹ein Paar Socken› (زوج جوارب)، ‹ein Ehepaar›.", "‹ein paar› (p صغيرة) = بعض / قليل من: ‹ein paar Minuten› (بضع دقائق)."]
        }
      ],
      vocab: [
        ["n", "die", "Kleidung", "Sg.", "الملابس", "Ich kaufe neue Kleidung.", "أشتري ملابس جديدة."],
        ["n", "das", "Kleidungsstück", "-e", "قطعة الملابس", "Welches Kleidungsstück ist das?", "ما هذه القطعة؟"],
        ["n", "die", "Hose", "-n", "البنطال", "Die Hose ist zu lang.", "البنطال طويل جدًا."],
        ["n", "die", "Jeans", "Pl.", "الجينز", "Meine Jeans ist blau.", "جينزي أزرق."],
        ["n", "das", "T-Shirt", "-s", "القميص القصير (تيشيرت)", "Das T-Shirt ist aus Baumwolle.", "التيشيرت من القطن."],
        ["n", "das", "Hemd", "-en", "القميص", "Er trägt ein weißes Hemd.", "يرتدي قميصًا أبيض."],
        ["n", "die", "Bluse", "-n", "البلوزة", "Die Bluse ist aus Seide.", "البلوزة من الحرير."],
        ["n", "der", "Pullover", "-", "الكنزة", "Der Pullover ist aus Wolle.", "الكنزة من الصوف."],
        ["n", "die", "Jacke", "-n", "السترة", "Nimm eine Jacke mit!", "خذ سترة معك!"],
        ["n", "der", "Mantel", "¨", "المعطف", "Im Winter brauche ich einen Mantel.", "في الشتاء أحتاج معطفًا."],
        ["n", "der", "Anzug", "¨-e", "البدلة", "Er trägt einen Anzug.", "يرتدي بدلة."],
        ["n", "das", "Kleid", "-er", "الفستان", "Das Kleid ist rot.", "الفستان أحمر."],
        ["n", "der", "Rock", "¨-e", "التنورة", "Der Rock ist kurz.", "التنورة قصيرة."],
        ["n", "die", "Socke", "-n", "الجورب", "Ein Paar Socken, bitte.", "زوج جوارب من فضلك."],
        ["n", "der", "Schuh", "-e", "الحذاء", "Die Schuhe sind neu.", "الحذاء جديد."],
        ["n", "der", "Schal", "-s", "الوشاح", "Der Schal ist warm.", "الوشاح دافئ."],
        ["n", "die", "Mütze", "-n", "القبعة الصوفية", "Setz die Mütze auf!", "البس القبعة!"],
        ["n", "der", "Hut", "¨-e", "القبعة", "Der Hut ist schick.", "القبعة أنيقة."],
        ["n", "der", "Handschuh", "-e", "القفاز", "Ich brauche Handschuhe.", "أحتاج قفازات."],
        ["n", "die", "Krawatte", "-n", "ربطة العنق", "Die Krawatte ist bunt.", "ربطة العنق ملوّنة."],
        ["n", "der", "Gürtel", "-", "الحزام", "Der Gürtel ist aus Leder.", "الحزام من الجلد."],
        ["n", "die", "Baumwolle", "Sg.", "القطن", "Das Hemd ist aus Baumwolle.", "القميص من القطن."],
        ["n", "die", "Wolle", "Sg.", "الصوف", "Wolle kann man nicht heiß waschen.", "الصوف لا يُغسل بماء ساخن."],
        ["n", "das", "Leder", "Sg.", "الجلد", "Die Jacke ist aus Leder.", "السترة من الجلد."],
        ["n", "die", "Seide", "Sg.", "الحرير", "Die Bluse ist aus Seide.", "البلوزة من الحرير."],
        ["n", "das", "Polyester", "Sg.", "البوليستر", "Die Hose ist aus Polyester.", "البنطال من البوليستر."],
        ["n", "die", "Farbe", "-n", "اللون", "Welche Farbe hat die Jacke?", "ما لون السترة؟"],
        ["n", "die", "Angst", "¨-e", "الخوف", "Hab keine Angst!", "لا تخف!"],
        ["n", "das", "Paar", "-e", "الزوج (شيئان)", "Ich kaufe ein Paar Schuhe.", "أشتري زوج أحذية."],
        ["a", "", "rot", "", "أحمر", "Die Socken sind rot.", "الجوارب حمراء."],
        ["a", "", "blau", "", "أزرق", "Der Himmel ist blau.", "السماء زرقاء."],
        ["a", "", "grün", "", "أخضر", "Die Jacke ist grün.", "السترة خضراء."],
        ["a", "", "gelb", "", "أصفر", "Das T-Shirt ist gelb.", "التيشيرت أصفر."],
        ["a", "", "schwarz", "", "أسود", "Der Anzug ist schwarz.", "البدلة سوداء."],
        ["a", "", "weiß", "", "أبيض", "Das Hemd ist weiß.", "القميص أبيض."],
        ["a", "", "grau", "", "رمادي", "Der Mantel ist grau.", "المعطف رمادي."],
        ["a", "", "braun", "", "بنّي", "Die Schuhe sind braun.", "الحذاء بنّي."],
        ["a", "", "rosa", "", "وردي", "Die Bluse ist rosa.", "البلوزة وردية."],
        ["a", "", "lila", "", "بنفسجي", "Der Schal ist lila.", "الوشاح بنفسجي."],
        ["a", "", "orange", "", "برتقالي", "Die Mütze ist orange.", "القبعة برتقالية."],
        ["a", "", "beige", "", "بيج", "Die Hose ist beige.", "البنطال بيج."],
        ["a", "", "bunt", "", "ملوّن", "Das Kleid ist bunt.", "الفستان ملوّن."],
        ["a", "", "hellblau", "", "أزرق فاتح", "Das Hemd ist hellblau.", "القميص أزرق فاتح."],
        ["a", "", "dunkelrot", "", "أحمر داكن", "Der Pullover ist dunkelrot.", "الكنزة حمراء داكنة."],
        ["v", "", "aufpassen", "pass auf!", "ينتبه", "Pass auf, der Pullover läuft ein!", "انتبه، الكنزة ستنكمش!"],
        ["v", "", "einlaufen", "er läuft ein", "ينكمش (القماش)", "Wolle läuft bei 60 Grad ein.", "الصوف ينكمش على 60 درجة."],
        ["v", "", "tragen", "du trägst, er trägt", "يرتدي / يحمل", "Sie trägt ein rotes Kleid.", "ترتدي فستانًا أحمر."],
        ["v", "", "erklären", "", "يشرح", "Kannst du mir das erklären?", "هل تستطيع أن تشرح لي ذلك؟"],
        ["v", "", "nachfragen", "ich frage nach", "يستفسر", "Darf ich noch mal nachfragen?", "هل يمكنني الاستفسار مرة أخرى؟"],
        ["x", "", "ein paar", "", "بعض / قليل من", "Warte ein paar Minuten!", "انتظر بضع دقائق!"]
      ],
      phrases: [
        ["Pass auf, der Pullover läuft ein!", "انتبه، الكنزة ستنكمش!"],
        ["Hab keine Angst! Sei vorsichtig!", "لا تخف! كن حذرًا!"],
        ["Entschuldigen Sie, können Sie mir bitte helfen?", "عذرًا، هل يمكنك مساعدتي من فضلك؟"],
        ["Können Sie mir das bitte erklären?", "هل يمكنك أن تشرح لي ذلك؟"],
        ["Komm doch mal her!", "تعال هنا لحظة!"],
        ["Welche Farbe hat dein Pullover? – Er ist dunkelblau.", "ما لون كنزتك؟ – زرقاء داكنة."],
        ["Das T-Shirt ist aus Baumwolle.", "التيشيرت من القطن."]
      ],
      ex: [
        { t: "gap", q: "أمر لـ du.", s: "du kommst → ___!", a: ["Komm"], why: "نحذف ‹du› و‑st: ‹Komm!›", tag: "imperativ" },
        { t: "gap", q: "أمر لـ du.", s: "du liest → ___!", a: ["Lies"], why: "‹du liest› → ‹Lies!› (يبقى ie).", tag: "imperativ", wrong: { "Les": "أفعال e → ie / e → i تحتفظ بالتغيير في الأمر: ‹Lies!›", "Lese": "الأمر من ‹lesen›: ‹Lies!›" } },
        { t: "gap", q: "أمر لـ du.", s: "du fährst → ___ langsam!", a: ["Fahr"], why: "أفعال a → ä تفقد الـ Umlaut: ‹Fahr!›", tag: "imperativ", wrong: { "Fähr": "في الأمر لا Umlaut: ‹Fahr!›" } },
        { t: "gap", q: "أمر لـ du.", s: "du wartest → ___ einen Moment!", a: ["Warte"], why: "الجذر ينتهي بـ ‑t → ‹Warte!›", tag: "imperativ" },
        { t: "gap", q: "أمر لـ du (sein).", s: "___ vorsichtig!", a: ["Sei"], why: "‹sein› → ‹Sei!› (du)، ‹Seid!› (ihr)، ‹Seien Sie!›", tag: "imperativ" },
        { t: "gap", q: "أمر لـ ihr.", s: "ihr kommt bald → ___ bald!", a: ["Kommt"], why: "صيغة ihr بدون ‹ihr›: ‹Kommt!›", tag: "imperativ" },
        { t: "gap", q: "أمر لـ du (فعل منفصل).", s: "du passt auf → ___ ___!", a: ["Pass", "auf"], why: "‹Pass auf!›", tag: "imperativ" },
        { t: "mc", q: "أي أمر صحيح لصديق؟", o: ["Nimm doch eine Jacke mit!", "Nehm doch eine Jacke mit!", "Nimmst doch eine Jacke mit!"], a: 0, why: "‹nehmen› → ‹du nimmst› → ‹Nimm!›", tag: "imperativ" },
        { t: "mc", q: "ein Paar أم ein paar؟", s: "Ich brauche ___ Socken. (زوج واحد)", o: ["ein Paar", "ein paar"], a: 0, why: "زوج (شيئان متلازمان) → ‹ein Paar›.", tag: "wortschatz" },
        { t: "mc", q: "ein Paar أم ein paar؟", s: "Warte ___ Minuten! (بضع دقائق)", o: ["ein paar", "ein Paar"], a: 0, why: "بعض/قليل → ‹ein paar›.", tag: "wortschatz" },
        { t: "match", q: "صِل اللون بمعناه.", pairs: [["gelb", "أصفر"], ["grün", "أخضر"], ["schwarz", "أسود"], ["grau", "رمادي"], ["braun", "بنّي"]], tag: "wortschatz" },
        { t: "match", q: "صِل الملابس بمعناها.", pairs: [["die Hose", "البنطال"], ["das Hemd", "القميص"], ["der Rock", "التنورة"], ["die Jacke", "السترة"], ["der Schal", "الوشاح"]], tag: "wortschatz" },
        { t: "order", q: "رتّب الطلب المهذب.", a: "Können Sie mir bitte helfen?", why: "سؤال نعم/لا: الفعل الناقص أولًا والمصدر في الآخر.", tag: "modal" },
        { t: "tr", q: "ترجم إلى الألمانية (لصديق).", ar: "لا تخف!", a: ["Hab keine Angst!", "Hab doch keine Angst!"], tag: "imperativ" },
        { t: "read", title: "Eine Nachricht von Mama", text: "Hallo Tobias, wasch deine Wollpullover bitte nicht bei 60 Grad! Wolle läuft ein. Nimm das Programm für Wolle, 30 Grad. Die Jeans kannst du mit den T-Shirts waschen, aber pass auf: Die rote Socke nicht mit den weißen Hemden! Ruf mich doch mal an! Liebe Grüße, Mama", tr: "مرحبًا توبياس، لا تغسل كنزاتك الصوفية على 60 درجة من فضلك! الصوف ينكمش. خذ برنامج الصوف، 30 درجة. الجينز يمكنك غسله مع التيشيرتات، لكن انتبه: الجورب الأحمر ليس مع القمصان البيضاء! اتصل بي يومًا ما! مع حبي، ماما", items: [
          { t: "tf", s: "Tobias soll Wolle bei 60 Grad waschen.", a: false, why: "‹nicht bei 60 Grad› → 30 درجة." },
          { t: "tf", s: "Die Jeans kann er mit den T-Shirts waschen.", a: true, why: "‹Die Jeans kannst du mit den T-Shirts waschen›." },
          { t: "tf", s: "Die rote Socke soll mit den weißen Hemden in die Maschine.", a: false, why: "‹Die rote Socke nicht mit den weißen Hemden!›" }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Kannst du mir helfen?", ar: "هل يمكنك مساعدتي؟",
        scene: "صديقك توبياس في المغسلة ولا يعرف ماذا يفعل. أعطه نصائح بصيغة الأمر (du).",
        who: { A: "Tobias" },
        lines: [
          { s: "A", de: "Hilfe! Ich habe einen Pullover aus Wolle. Welches Programm soll ich nehmen?", ar: "النجدة! عندي كنزة من صوف. أي برنامج آخذ؟" },
          { s: "U", task: "قل له: خذ برنامج الصوف، 30 درجة!", m: "Nimm das Programm für Wolle, 30 Grad!", ok: ["Nimm das Programm für Wolle *", "Nimm das Wollprogramm *", "Nimm 30 Grad", "Nimm doch das Programm für Wolle *"], o: ["Nimm das Programm für Wolle, 30 Grad!", "Nehm das Programm für Wolle, 30 Grad!", "Nimmst das Programm für Wolle!"], why: ["", "‹nehmen› → ‹Nimm!›", "في الأمر نحذف ‑st: ‹Nimm!›"], ar: "خذ برنامج الصوف، 30 درجة!" },
          { s: "A", de: "Okay. Und die rote Socke? Kann ich sie mit den weißen Hemden waschen?", ar: "حسنًا. والجورب الأحمر؟ هل أغسله مع القمصان البيضاء؟" },
          { s: "U", task: "قل: لا! انتبه! اغسل الجورب الأحمر وحده.", m: "Nein! Pass auf! Wasch die rote Socke allein.", ok: ["Nein pass auf wasch die rote Socke allein", "Nein pass auf *", "Pass auf wasch die rote Socke allein", "Nein wasch die rote Socke allein"], o: ["Nein! Pass auf! Wasch die rote Socke allein.", "Nein! Aufpass! Wäschst die rote Socke allein.", "Nein! Pass auf! Wäsch die rote Socke allein."], why: ["", "‹aufpassen› → ‹Pass auf!›، ‹waschen› → ‹Wasch!›", "أفعال a → ä تفقد الـ Umlaut: ‹Wasch!›"], ar: "لا! انتبه! اغسل الجورب الأحمر وحده." },
          { s: "A", de: "Und wie lange dauert das?", ar: "وكم يستغرق ذلك؟" },
          { s: "U", task: "قل: حوالي ساعة. اشرب قهوة وانتظر!", m: "Ungefähr eine Stunde. Trink einen Kaffee und warte!", ok: ["Ungefähr eine Stunde trink einen Kaffee und warte", "Eine Stunde trink einen Kaffee und warte", "Ungefähr eine Stunde trink doch einen Kaffee", "Eine Stunde trink doch einen Kaffee und warte"], o: ["Ungefähr eine Stunde. Trink einen Kaffee und warte!", "Ungefähr eine Stunde. Trinkst einen Kaffee und wartest!", "Ungefähr eine Stunde. Trink ein Kaffee und wart!"], why: ["", "الأمر بدون ‑st: ‹Trink! Warte!›", "‹der Kaffee› → ‹einen›، و‹warten› → ‹Warte!›"], ar: "حوالي ساعة. اشرب قهوة وانتظر!" },
          { s: "A", de: "Danke! Du bist super!", ar: "شكرًا! أنت رائع!" }
        ]
      },
      listen: [
        { t: "listen", say: "Pass auf, Tobias! Der Pullover ist aus Wolle, er läuft ein!", q: "مم صُنعت الكنزة؟", o: ["من الصوف", "من القطن", "من الحرير"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich trage heute eine blaue Jeans und ein weißes Hemd.", q: "ما لون القميص؟", o: ["أبيض", "أزرق", "أسود"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Kommt bitte bald! Wir warten im Café.", q: "أين ينتظرون؟", o: ["في المقهى", "في البيت", "في المغسلة"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Hab keine Angst!", tag: "hoeren" },
        { t: "dict", say: "Lies die Anleitung!", tag: "hoeren" }
      ]
    },

    /* ───────────── 7C ───────────── */
    {
      id: "7C", de: "Neue Kleider – neue Freunde", ar: "ملابس جديدة — أصدقاء جدد",
      summary: "مراجعة كل صيغ الأمر، Soll ich …? عند التسوق، ردود الفعل الإيجابية والسلبية، المفاجآت والأحداث.",
      grammar: [
        {
          h: "الأمر: الصيغ الثلاث معًا",
          table: {
            head: ["لمن؟", "الصيغة", "مثال"],
            rows: [
              ["صديق واحد (du)", "الجذر (+e)", "‹Probier die Jacke an!›"],
              ["عدة أصدقاء (ihr)", "صيغة ihr", "‹Probiert die Jacken an!›"],
              ["رسمي (Sie)", "صيغة Sie + Sie", "‹Probieren Sie die Jacke an!›"],
              ["نحن (اقتراح)", "صيغة wir + wir", "‹Probieren wir die Jacken an!›"]
            ]
          }
        },
        {
          h: "Soll ich …? عند التسوق",
          ex: [["Soll ich die Hose anprobieren? – Ja, probier sie doch an!", "هل أجرّب البنطال؟ – نعم، جرّبه!"], ["Soll ich das rote oder das blaue Kleid nehmen?", "هل آخذ الفستان الأحمر أم الأزرق؟"]]
        },
        {
          h: "ردود الفعل",
          table: {
            head: ["إيجابي", "سلبي"],
            rows: [
              ["‹Das ist ja toll! / super!›", "‹Oh nein! / So ein Pech!›"],
              ["‹Das steht dir gut!›", "‹Das ist ja schrecklich!›"],
              ["‹Wie schön!›", "‹Wie schade!›"],
              ["‹Gute Idee!›", "‹Das gefällt mir nicht.›"]
            ]
          }
        }
      ],
      vocab: [
        ["v", "", "anprobieren", "ich probiere an", "يجرّب (ملابس)", "Soll ich die Jacke anprobieren?", "هل أجرّب السترة؟"],
        ["v", "", "kaufen", "", "يشتري", "Kauf doch die blaue Hose!", "اشترِ البنطال الأزرق!"],
        ["v", "", "passen", "", "يناسب (المقاس)", "Die Hose passt nicht.", "البنطال لا يناسب."],
        ["v", "", "stehen (+ Dat.)", "das steht dir", "يليق (بشخص)", "Die Farbe steht dir gut.", "اللون يليق بك."],
        ["v", "", "einladen", "lad ein!", "يدعو", "Lad doch deine Freunde ein!", "ادعُ أصدقاءك!"],
        ["v", "", "mitbringen", "bring mit!", "يُحضر معه", "Bring bitte Brot mit!", "أحضر خبزًا معك من فضلك!"],
        ["v", "", "lächeln", "lächle!", "يبتسم", "Lächle doch mal!", "ابتسم قليلًا!"],
        ["v", "", "entschuldigen", "entschuldige!", "يعتذر / يعذر", "Entschuldige, ich bin zu spät.", "عذرًا، تأخرت."],
        ["v", "", "kennenlernen", "ich lerne kennen", "يتعرّف على", "Im Waschsalon habe ich Mia kennengelernt.", "في المغسلة تعرّفت على ميا."],
        ["v", "", "versuchen", "", "يحاول", "Versuch es noch einmal!", "حاول مرة أخرى!"],
        ["v", "", "vermuten", "", "يخمّن / يتوقّع", "Ich vermute, das ist Leder.", "أتوقّع أن هذا جلد."],
        ["v", "", "träumen", "", "يحلم", "Ich träume von einer Reise.", "أحلم برحلة."],
        ["n", "die", "Größe", "-n", "المقاس", "Welche Größe haben Sie?", "ما مقاسك؟"],
        ["n", "die", "Umkleidekabine", "-n", "غرفة القياس", "Die Umkleidekabine ist dort.", "غرفة القياس هناك."],
        ["n", "der", "Bekannte", "-n", "المعرفة (شخص تعرفه)", "Er ist ein Bekannter von mir.", "هو أحد معارفي."],
        ["n", "die", "Veranstaltung", "-en", "الفعالية / الحدث", "Im Café gibt es heute eine Veranstaltung.", "في المقهى اليوم فعالية."],
        ["n", "die", "Neuigkeit", "-en", "الخبر الجديد", "Ich habe eine Neuigkeit!", "عندي خبر جديد!"],
        ["n", "das", "Gedicht", "-e", "القصيدة", "Sie liest ein Gedicht.", "هي تقرأ قصيدة."],
        ["n", "der", "Roman", "-e", "الرواية", "Ich lese einen Roman.", "أقرأ رواية."],
        ["n", "die", "Lösung", "-en", "الحل", "Das ist eine gute Lösung.", "هذا حل جيد."],
        ["a", "", "schick", "", "أنيق", "Das Kleid ist schick.", "الفستان أنيق."],
        ["a", "", "kurz", "", "قصير", "Der Rock ist zu kurz.", "التنورة قصيرة جدًا."],
        ["a", "", "lang", "", "طويل", "Die Hose ist zu lang.", "البنطال طويل جدًا."],
        ["a", "", "eng", "", "ضيّق", "Die Jeans ist zu eng.", "الجينز ضيّق جدًا."],
        ["a", "", "weit", "", "واسع", "Der Pullover ist zu weit.", "الكنزة واسعة جدًا."],
        ["a", "", "höflich", "", "مهذّب", "Sei höflich!", "كن مهذبًا!"],
        ["a", "", "herzlich", "", "ودّي / قلبي", "Herzlich willkommen!", "أهلًا وسهلًا!"],
        ["a", "", "passend", "", "مناسب", "Ich suche eine passende Jacke.", "أبحث عن سترة مناسبة."],
        ["x", "", "Das steht dir gut!", "", "هذا يليق بك!", "Die Jacke steht dir gut!", "السترة تليق بك!"],
        ["x", "", "Wie schade!", "", "يا للأسف!", "Du kannst nicht kommen? Wie schade!", "لا تستطيع المجيء؟ يا للأسف!"],
        ["x", "", "Gute Idee!", "", "فكرة جيدة!", "Gehen wir ins Café? – Gute Idee!", "هل نذهب إلى المقهى؟ – فكرة جيدة!"]
      ],
      phrases: [
        ["Soll ich die Jacke anprobieren? – Ja, probier sie doch an!", "هل أجرّب السترة؟ – نعم، جرّبها!"],
        ["Die Farbe steht dir gut!", "اللون يليق بك!"],
        ["Die Hose ist zu eng. Haben Sie sie eine Nummer größer?", "البنطال ضيّق جدًا. هل عندكم مقاس أكبر؟"],
        ["Das ist ja toll! / Oh nein, wie schade!", "هذا رائع! / آه لا، يا للأسف!"],
        ["Bring doch deine Freunde mit!", "أحضر أصدقاءك معك!"],
        ["Probieren wir die Jacken an!", "هيّا نجرّب السترات!"]
      ],
      ex: [
        { t: "mc", q: "اختر الأمر المناسب لصديقة.", s: "(anprobieren) ___ die Jacke doch ___!", o: ["Probier … an", "Probieren Sie … an", "Probiert … an"], a: 0, why: "لصديقة واحدة (du): ‹Probier … an!›", tag: "imperativ" },
        { t: "mc", q: "اختر الأمر المناسب لصديقين.", s: "(mitbringen) ___ bitte Brot ___!", o: ["Bringt … mit", "Bring … mit", "Bringen Sie … mit"], a: 0, why: "لعدة أشخاص (ihr): ‹Bringt … mit!›", tag: "imperativ" },
        { t: "mc", q: "اختر الأمر المناسب لبائعة.", s: "(zeigen) ___ mir bitte die Jacke!", o: ["Zeigen Sie", "Zeig", "Zeigt"], a: 0, why: "رسمي: ‹Zeigen Sie …!›", tag: "imperativ" },
        { t: "gap", q: "أمر لـ du.", s: "du lädst ein → ___ deine Freunde ___!", a: ["Lad", "ein"], why: "‹einladen› (a → ä) يفقد Umlaut: ‹Lad … ein!›", tag: "imperativ" },
        { t: "gap", q: "أمر لـ du.", s: "du lächelst → ___ doch mal!", a: [["Lächle", "Lächel"]], why: "‹lächeln› → ‹Lächle!› (أو ‹Lächel!›).", tag: "imperativ" },
        { t: "gap", q: "أمر لـ du.", s: "du entschuldigst → ___!", a: ["Entschuldige"], why: "‹Entschuldige!›", tag: "imperativ" },
        { t: "mc", q: "صديقك يقول: ‹Ich habe die Prüfung bestanden!› — ردّك:", o: ["Das ist ja toll!", "Wie schade!", "So ein Pech!"], a: 0, why: "خبر جيد → رد إيجابي.", tag: "wortschatz" },
        { t: "mc", q: "صديقك يقول: ‹Mein Pullover ist eingelaufen.› — ردّك:", o: ["Oh nein, so ein Pech!", "Gute Idee!", "Das steht dir gut!"], a: 0, why: "خبر سيئ → رد سلبي متعاطف.", tag: "wortschatz" },
        { t: "mc", q: "ماذا تعني ‹Die Hose ist zu eng›؟", o: ["البنطال ضيّق جدًا", "البنطال واسع جدًا", "البنطال طويل جدًا"], a: 0, why: "‹eng› = ضيّق، و‹zu› = أكثر من اللازم.", tag: "wortschatz" },
        { t: "order", q: "رتّب السؤال.", a: "Soll ich die blaue Hose anprobieren?", why: "‹Soll› أولًا، والمصدر ‹anprobieren› في الآخر.", tag: "vorschlag" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "السترة تليق بك!", a: ["Die Jacke steht dir gut!", "Die Jacke steht dir!"], tag: "wortschatz" },
        { t: "read", title: "Neue Freunde im Café Waschsalon", text: "Mia wohnt seit zwei Monaten in Wien. Jeden Samstag wäscht sie ihre Wäsche im Café Waschsalon. Dort hat sie Jonas kennengelernt. Er hat ihr geholfen, denn ihr Pullover ist eingelaufen. Jetzt gehen sie oft zusammen einkaufen. Gestern hat Mia eine Jacke anprobiert. Jonas hat gesagt: „Die Farbe steht dir super!“", tr: "ميا تسكن في فيينا منذ شهرين. كل سبت تغسل ملابسها في مقهى المغسلة. هناك تعرّفت على يوناس. ساعدها لأن كنزتها انكمشت. الآن يذهبان كثيرًا للتسوق معًا. أمس جرّبت ميا سترة. قال يوناس: «اللون يليق بك جدًا!»", items: [
          { t: "tf", s: "Mia hat Jonas im Waschsalon kennengelernt.", a: true, why: "‹Dort hat sie Jonas kennengelernt.›" },
          { t: "tf", s: "Jonas findet die Farbe der Jacke nicht schön.", a: false, why: "‹Die Farbe steht dir super!›" },
          { t: "tf", s: "Mia wohnt seit zwei Jahren in Wien.", a: false, why: "منذ شهرين: ‹seit zwei Monaten›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Einkaufen mit einer Freundin", ar: "التسوق مع صديقة",
        scene: "أنت مع صديقتك ميا في متجر ملابس. ساعدها في الاختيار.",
        who: { A: "Mia" },
        lines: [
          { s: "A", de: "Schau mal, die Jacke! Soll ich sie anprobieren?", ar: "انظر إلى السترة! هل أجرّبها؟" },
          { s: "U", task: "قل: نعم، جرّبيها!", m: "Ja, probier sie doch an!", ok: ["Ja probier sie doch an", "Ja probier sie an", "Probier sie doch an", "Ja klar probier sie an"], o: ["Ja, probier sie doch an!", "Ja, anprobier sie doch!", "Ja, probierst sie doch an!"], why: ["", "الفعل المنفصل في الأمر: ‹Probier … an!›", "الأمر بدون ‑st."], ar: "نعم، جرّبيها!" },
          { s: "A", de: "Und? Wie findest du die Farbe?", ar: "وإذن؟ ما رأيك في اللون؟" },
          { s: "U", task: "قل: اللون يليق بك جيدًا! لكن السترة واسعة جدًا.", m: "Die Farbe steht dir gut! Aber die Jacke ist zu weit.", ok: ["Die Farbe steht dir gut aber die Jacke ist zu weit", "Die Farbe steht dir gut aber sie ist zu weit", "Die Farbe steht dir sehr gut aber die Jacke ist zu weit", "Die Farbe steht dir *"], o: ["Die Farbe steht dir gut! Aber die Jacke ist zu weit.", "Die Farbe steht dich gut! Aber die Jacke ist sehr weit.", "Die Farbe steht gut dir! Aber die Jacke zu weit ist."], why: ["", "‹stehen› + Dativ: ‹dir›، و‹zu weit› = واسعة أكثر من اللازم.", "ترتيب الكلمات غير صحيح."], ar: "اللون يليق بك! لكن السترة واسعة جدًا." },
          { s: "A", de: "Hm, stimmt. Was soll ich machen?", ar: "همم، صحيح. ماذا أفعل؟" },
          { s: "U", task: "اقترح: اسألي البائعة عن مقاس أصغر!", m: "Frag doch die Verkäuferin nach einer kleineren Größe!", ok: ["Frag doch die Verkäuferin *", "Frag die Verkäuferin *", "Nimm doch eine kleinere Größe", "Probier doch eine kleinere Größe an"], o: ["Frag doch die Verkäuferin nach einer kleineren Größe!", "Fragst doch die Verkäuferin!", "Fragen die Verkäuferin!"], why: ["", "الأمر لـ du: ‹Frag!› (بدون ‑st).", "‹Fragen …!› بدون ‹Sie› ليست صيغة أمر صحيحة هنا."], ar: "اسألي البائعة عن مقاس أصغر!" },
          { s: "A", de: "Gute Idee! Danke, du bist ein echter Freund.", ar: "فكرة جيدة! شكرًا، أنت صديق حقيقي." }
        ]
      },
      listen: [
        { t: "listen", say: "Die Hose ist leider zu eng. Haben Sie sie eine Nummer größer?", q: "ما المشكلة؟", o: ["البنطال ضيّق", "البنطال طويل", "البنطال غالٍ"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Bringt bitte Getränke mit, wir haben nur Kuchen.", q: "ماذا يجب أن يحضروا؟", o: ["مشروبات", "كعكًا", "خبزًا"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Oh nein, mein Pullover ist eingelaufen! – So ein Pech!", q: "ماذا حدث للكنزة؟", o: ["انكمشت", "تلوّنت", "ضاعت"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Probier sie doch an!", tag: "hoeren" },
        { t: "dict", say: "Die Farbe steht dir gut.", tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "„w“ oder „f“?", ar: "w أم f؟",
    body: [
      { p: "‹w› في الألمانية يُنطق مثل [v] الفرنسية (ڤ): ‹Wasser, Wolle, Wien, weiß›. أما ‹f› و‹v› (في الكلمات الألمانية) و‹ph› فتُنطق [f]: ‹Farbe, vier, viel, Vater, Phonetik›." },
      { table: { head: ["نكتب", "ننطق", "أمثلة"], rows: [
        ["‹f›", "[f] ف", "‹füllen, höflich, Farbe›"],
        ["‹v› (كلمات ألمانية)", "[f] ف", "‹vier, Vorschlag, versuchen, viel›"],
        ["‹ph›", "[f] ف", "‹Alphabet, Phonetik›"],
        ["‹w›", "[v] ڤ", "‹Wetter, weiß, Anweisung›"],
        ["‹v› (كلمات أجنبية)", "[v] ڤ", "‹Klavier, November, Viskose, privat›"]
      ] } },
      { tip: "للعرب: صوت [v] غير موجود في العربية الفصحى. عضّ شفتك السفلى بلطف بأسنانك العليا كما في «ف»، لكن مع اهتزاز الحنجرة (ضع يدك على حلقك لتشعر بالاهتزاز)." }
    ],
    drills: [
      { t: "listen", say: "Wetter", q: "ماذا سمعت؟", o: ["Wetter", "Vetter"], a: 0, why: "‹W› = [v]؛ ‹Vetter› تبدأ بـ [f]." },
      { t: "listen", say: "Fehler", q: "ماذا سمعت؟", o: ["Fehler", "Wehler"], a: 0, why: "[f]." },
      { t: "listen", say: "vier", q: "كيف يُنطق ‹v› هنا؟", o: ["[f]", "[v]"], a: 0, why: "كلمة ألمانية → ‹v› = [f]." },
      { t: "listen", say: "Klavier", q: "كيف يُنطق ‹v› هنا؟", o: ["[v]", "[f]"], a: 0, why: "كلمة أجنبية → ‹v› = [v]." },
      { t: "listen", say: "Pullover", q: "كيف يُنطق ‹v› هنا؟", o: ["[v]", "[f]"], a: 0, why: "كلمة أجنبية (إنجليزية) → [v]." },
      { t: "listen", say: "Phonetik", q: "كيف يُنطق ‹ph›؟", o: ["[f]", "[p]"], a: 0, why: "‹ph› = [f]." }
    ],
    say: ["Wahrenberg – Fahrenberg", "Wehler – Fehler", "Wetter – Vetter", "vier", "Farbe", "Krawatte", "Wäsche", "Pullover", "vorsichtig", "Wir Wiener Waschweiber wollen weiße Wäsche waschen."]
  },

  write: [
    {
      ar: "اكتب تعليمات (5–6 خطوات) لاستعمال آلة (آلة قهوة أو آلة غسيل) بصيغة الأمر الرسمي مع Sie.",
      de: "Schreiben Sie eine Anleitung mit Imperativ (Sie).",
      model: "So machen Sie einen Kaffee: Öffnen Sie die Maschine. Füllen Sie Wasser ein. Nehmen Sie eine Tasse und stellen Sie sie unter die Maschine. Wählen Sie Espresso oder Milchkaffee. Drücken Sie auf Start. Warten Sie eine Minute – fertig!",
      check: ["الفعل أولًا + ‹Sie›", "الأفعال المنفصلة: البادئة في الآخر (Füllen Sie … ein)", "‹bitte› للأدب", "ترتيب منطقي للخطوات"]
    },
    {
      ar: "اكتب رسالة دعوة لصديقين إلى حفلة صغيرة بصيغة الأمر (ihr): متى، أين، ماذا يحضران.",
      de: "Einladung an zwei Freunde (Imperativ mit ihr).",
      model: "Hallo Lena, hallo Max,\nkommt am Samstag um 19 Uhr zu meiner Party! Bringt bitte Getränke mit. Ich koche Couscous. Habt ihr Fragen? Ruft mich an! Seid pünktlich!\nBis Samstag\nKarim",
      check: ["أوامر ‹ihr›: Kommt! Bringt … mit! Seid …!", "الزمان والمكان", "‹bitte›"]
    }
  ],
  tutor: [
    { title: "Im Waschsalon", ar: "في المغسلة", role: "Frau Hofbauer, die freundliche Besitzerin vom Café Waschsalon", goal: "nach Anleitungen fragen und sie verstehen (Imperativ mit Sie), höflich bitten, im Café bestellen", start: "Grüß Gott! Sind Sie zum ersten Mal hier? Kann ich Ihnen helfen?" },
    { title: "Kleider kaufen", ar: "شراء الملابس", role: "Mia, eine Freundin beim Kleiderkauf", goal: "über Kleidung, Farben, Größen sprechen; Vorschläge mit Imperativ (du) und „Soll ich …?“; positiv/negativ reagieren", start: "Schau mal, die Jacke da! Soll ich sie anprobieren?" }
  ]
});

/* Lektion 8 — Grüezi in der Schweiz */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 8,
  de: "Grüezi in der Schweiz",
  ar: "مرحبًا في سويسرا (Grüezi)",
  book: "Kursbuch S. 66–73 · Übungsbuch S. 132–139",
  goals: [
    "السؤال عن الطريق ووصفه",
    "استعمال von, zu, bei, mit مع Dativ، و durch و um … herum مع Akkusativ",
    "التمييز بين wo? (Dativ) و wohin? (Akkusativ) مع in",
    "الشكر والاعتذار، والكلمات etwas, nichts, alle, man",
    "استعمال المضارع للمستقبل، ووصف لوحة والتعبير عن الإعجاب"
  ],
  units: [
    /* ───────────── 8A ───────────── */
    {
      id: "8A", de: "Neu in Bern", ar: "جديد في برن",
      summary: "معالم مدينة برن، مكتب السياحة، وصف الطريق، حروف الجر von / zu / bei / mit + Dativ، المواصلات.",
      grammar: [
        {
          h: "حروف الجر مع Dativ: von – zu – bei – mit",
          p: "هذه الحروف تأتي **دائمًا** مع حالة الجر Dativ. وتندمج كثيرًا مع الأداة:",
          table: {
            head: ["الحرف", "المعنى", "مذكر/محايد", "مؤنث"],
            rows: [
              ["‹von›", "من (مكان/شخص)", "‹vom (= von dem) Bahnhof›", "‹von der Post›"],
              ["‹zu›", "إلى (شخص/مكان)", "‹zum (= zu dem) Park›", "‹zur (= zu der) Zytglogge›"],
              ["‹bei›", "عند / قرب", "‹beim (= bei dem) Bahnhof›", "‹bei der Kirche›"],
              ["‹mit›", "مع / بواسطة", "‹mit dem Bus›", "‹mit der Tram›"]
            ]
          },
          ex: [["Wie komme ich zum Bahnhof?", "كيف أصل إلى المحطة؟"], ["Gehen Sie vom Münster bis zum Bärenpark.", "امشِ من الكاتدرائية حتى حديقة الدببة."], ["Ich fahre mit dem Bus zur Uni.", "أذهب بالحافلة إلى الجامعة."]],
          tip: "‹zu Fuß gehen› = المشي على الأقدام. ‹nach Hause› (إلى البيت) و‹zu Hause› (في البيت)."
        },
        {
          h: "وصف الطريق",
          table: {
            head: ["الألمانية", "العربية"],
            rows: [
              ["‹Gehen Sie geradeaus.›", "امشِ إلى الأمام مباشرة."],
              ["‹Gehen Sie nach rechts / nach links.›", "اذهب يمينًا / يسارًا."],
              ["‹Biegen Sie die erste Straße rechts ab.›", "انعطف في أول شارع يمينًا."],
              ["‹Gehen Sie bis zur Kreuzung.›", "امشِ حتى التقاطع."],
              ["‹Gehen Sie über die Kreuzung.›", "اعبر التقاطع."],
              ["‹Dann sehen Sie das Münster.›", "ثم سترى الكاتدرائية."],
              ["‹Das ist ganz in der Nähe / weit.›", "هذا قريب جدًا / بعيد."]
            ]
          }
        },
        {
          h: "Wie komme ich …?",
          ex: [["Entschuldigung, wie komme ich zum Bundeshaus?", "عذرًا، كيف أصل إلى مبنى البرلمان؟"], ["Ist das weit? – Nein, nur fünf Minuten zu Fuß.", "هل هو بعيد؟ – لا، خمس دقائق مشيًا فقط."]]
        },
        {
          h: "سويسرا: كلمات خاصة",
          list: ["‹Grüezi!› = مرحبًا (رسمي) — ‹Hoi!› = مرحبًا (غير رسمي)", "‹Merci!› = شكرًا", "‹das Velo› = الدراجة (في ألمانيا: das Fahrrad)", "‹das Tram› = الترام (في ألمانيا: die Straßenbahn)", "‹der Franken / der Rappen› = العملة السويسرية"]
        }
      ],
      vocab: [
        ["n", "die", "Stadt", "¨-e", "المدينة", "Bern ist die Hauptstadt der Schweiz.", "برن هي عاصمة سويسرا."],
        ["n", "die", "Touristeninformation", "-en", "مكتب الإرشاد السياحي", "Die Touristeninformation ist am Bahnhof.", "مكتب الإرشاد السياحي في المحطة."],
        ["n", "der", "Stadtplan", "¨-e", "خريطة المدينة", "Haben Sie einen Stadtplan?", "هل عندكم خريطة للمدينة؟"],
        ["n", "die", "Sehenswürdigkeit", "-en", "المعلم السياحي", "Was sind die Sehenswürdigkeiten in Bern?", "ما هي معالم برن؟"],
        ["n", "die", "Führung", "-en", "الجولة المرشدة", "Die Führung beginnt um 14 Uhr.", "الجولة تبدأ في الثانية ظهرًا."],
        ["n", "der", "Turm", "¨-e", "البرج", "Die Zytglogge ist ein Turm mit Uhr.", "الزيتغلوغه برج بساعة."],
        ["n", "die", "Glocke", "-n", "الجرس", "Die Glocke ist sehr alt.", "الجرس قديم جدًا."],
        ["n", "das", "Münster", "-", "الكاتدرائية الكبرى", "Das Berner Münster ist groß.", "كاتدرائية برن كبيرة."],
        ["n", "das", "Parlament", "-e", "البرلمان", "Das Parlament ist im Bundeshaus.", "البرلمان في مبنى الحكومة الاتحادية."],
        ["n", "das", "Gebäude", "-", "المبنى", "Das Gebäude ist modern.", "المبنى حديث."],
        ["n", "die", "Gasse", "-n", "الزقاق", "Die Kramgasse ist sehr schön.", "زقاق كرامغاسه جميل جدًا."],
        ["n", "der", "Platz", "¨-e", "الساحة", "Wir treffen uns am Bundesplatz.", "نلتقي في الساحة الاتحادية."],
        ["n", "die", "Straße", "-n", "الشارع", "Gehen Sie die Straße geradeaus.", "امشِ في الشارع مباشرة."],
        ["n", "die", "Kreuzung", "-en", "التقاطع", "Gehen Sie bis zur Kreuzung.", "امشِ حتى التقاطع."],
        ["n", "die", "Ecke", "-n", "الزاوية / الناصية", "Das Café ist an der Ecke.", "المقهى في الناصية."],
        ["n", "der", "Weg", "-e", "الطريق", "Können Sie mir den Weg zeigen?", "هل يمكنك أن تريني الطريق؟"],
        ["n", "der", "Bahnhof", "¨-e", "محطة القطار", "Wie komme ich zum Bahnhof?", "كيف أصل إلى المحطة؟"],
        ["n", "die", "Haltestelle", "-n", "المحطة (حافلة/ترام)", "Die Haltestelle ist dort.", "المحطة هناك."],
        ["n", "das", "Verkehrsmittel", "-", "وسيلة النقل", "Welches Verkehrsmittel nimmst du?", "أي وسيلة نقل تأخذ؟"],
        ["n", "der", "Bus", "=Busse", "الحافلة", "Ich fahre mit dem Bus.", "أذهب بالحافلة."],
        ["n", "die", "Straßenbahn", "-en", "الترام", "Nehmen Sie die Straßenbahn Nummer 9.", "خذ الترام رقم 9."],
        ["n", "das", "Tram", "-s", "الترام (سويسرا)", "Das Tram fährt zum Zentrum.", "الترام يذهب إلى المركز."],
        ["n", "die", "Bahn", "-en", "القطار / السكة", "Ich fahre mit der Bahn nach Zürich.", "أسافر بالقطار إلى زيورخ."],
        ["n", "das", "Fahrrad", "¨-er", "الدراجة", "Ich fahre mit dem Fahrrad.", "أذهب بالدراجة."],
        ["n", "das", "Velo", "-s", "الدراجة (سويسرا)", "In Bern fahren viele Leute Velo.", "في برن كثير من الناس يركبون الدراجة."],
        ["n", "die", "Fahrkarte", "-n", "تذكرة السفر", "Wo kann ich eine Fahrkarte kaufen?", "أين يمكنني شراء تذكرة؟"],
        ["n", "die", "Tageskarte", "-n", "تذكرة يومية", "Eine Tageskarte kostet 9 Franken.", "التذكرة اليومية بـ 9 فرنكات."],
        ["n", "der", "Fahrkartenautomat", "-en", "آلة بيع التذاكر", "Der Fahrkartenautomat ist kaputt.", "آلة التذاكر معطّلة."],
        ["v", "", "abbiegen", "ich biege ab", "ينعطف", "Biegen Sie rechts ab.", "انعطف يمينًا."],
        ["v", "", "einsteigen", "ich steige ein", "يركب (وسيلة)", "Steigen Sie hier ein.", "اركب هنا."],
        ["v", "", "aussteigen", "ich steige aus", "ينزل (من وسيلة)", "Steigen Sie am Bahnhof aus.", "انزل عند المحطة."],
        ["v", "", "umsteigen", "ich steige um", "يغيّر (الوسيلة)", "Sie müssen am Zytglogge umsteigen.", "يجب أن تغيّر عند الزيتغلوغه."],
        ["v", "", "halten", "der Bus hält", "يتوقف", "Der Bus hält vor dem Museum.", "الحافلة تتوقف أمام المتحف."],
        ["v", "", "besichtigen", "", "يزور (معلمًا)", "Wir besichtigen das Münster.", "نزور الكاتدرائية."],
        ["v", "", "zeigen", "", "يُري / يشير", "Zeigen Sie mir den Weg auf dem Stadtplan?", "هل تريني الطريق على الخريطة؟"],
        ["d", "", "geradeaus", "", "إلى الأمام مباشرة", "Gehen Sie immer geradeaus.", "امشِ دائمًا إلى الأمام."],
        ["d", "", "rechts", "", "يمينًا", "Das Museum ist rechts.", "المتحف على اليمين."],
        ["d", "", "links", "", "يسارًا", "Gehen Sie nach links.", "اذهب يسارًا."],
        ["d", "", "hier", "", "هنا", "Hier ist der Bahnhof.", "هنا المحطة."],
        ["d", "", "dort", "", "هناك", "Dort ist die Haltestelle.", "هناك المحطة."],
        ["a", "", "weit", "", "بعيد", "Ist das weit?", "هل هو بعيد؟"],
        ["a", "", "berühmt", "", "مشهور", "Die Zytglogge ist berühmt.", "الزيتغلوغه مشهورة."],
        ["p", "", "von", "+ Dat.", "من", "Ich komme vom Bahnhof.", "أنا قادم من المحطة."],
        ["p", "", "zu", "+ Dat.", "إلى", "Ich gehe zur Post.", "أذهب إلى البريد."],
        ["p", "", "bei", "+ Dat.", "عند / قرب", "Das Café ist beim Bahnhof.", "المقهى قرب المحطة."],
        ["p", "", "mit", "+ Dat.", "مع / بـ (وسيلة)", "Ich fahre mit dem Tram.", "أذهب بالترام."],
        ["x", "", "zu Fuß gehen", "", "يمشي على الأقدام", "Wir gehen zu Fuß.", "نمشي على الأقدام."],
        ["x", "", "Grüezi!", "", "مرحبًا! (سويسرا، رسمي)", "Grüezi, wie kann ich Ihnen helfen?", "مرحبًا، كيف يمكنني مساعدتك؟"],
        ["x", "", "Merci!", "", "شكرًا! (سويسرا)", "Merci vielmals!", "شكرًا جزيلًا!"]
      ],
      phrases: [
        ["Entschuldigung, wie komme ich zum Bahnhof?", "عذرًا، كيف أصل إلى محطة القطار؟"],
        ["Gehen Sie geradeaus bis zur Kreuzung.", "امشِ مباشرة حتى التقاطع."],
        ["Dann biegen Sie links ab.", "ثم انعطف يسارًا."],
        ["Ist das weit? – Nein, nur fünf Minuten zu Fuß.", "هل هو بعيد؟ – لا، خمس دقائق مشيًا فقط."],
        ["Nehmen Sie das Tram Nummer 9 und steigen Sie am Zytglogge aus.", "خذ الترام رقم 9 وانزل عند الزيتغلوغه."],
        ["Ich fahre mit dem Bus zur Uni.", "أذهب بالحافلة إلى الجامعة."],
        ["Haben Sie einen Stadtplan für mich?", "هل عندكم خريطة للمدينة لي؟"]
      ],
      ex: [
        { t: "mc", q: "اختر الصحيح.", s: "Wie komme ich ___ Bahnhof? (der Bahnhof)", o: ["zum", "zur", "zu"], a: 0, why: "‹zu› + Dativ، المذكر: ‹zu dem = zum›.", tag: "dativ" },
        { t: "mc", q: "اختر الصحيح.", s: "Wie komme ich ___ Post? (die Post)", o: ["zur", "zum", "zu die"], a: 0, why: "المؤنث: ‹zu der = zur›.", tag: "dativ" },
        { t: "mc", q: "اختر الصحيح.", s: "Ich fahre mit ___ Bus. (der Bus)", o: ["dem", "den", "der"], a: 0, why: "‹mit› + Dativ: ‹dem Bus›.", tag: "dativ", wrong: {} },
        { t: "mc", q: "اختر الصحيح.", s: "Ich fahre mit ___ Straßenbahn. (die Straßenbahn)", o: ["der", "die", "dem"], a: 0, why: "المؤنث في Dativ: ‹der›.", tag: "dativ" },
        { t: "gap", q: "أكمل بـ vom / von der.", s: "Gehen Sie ___ Bahnhof bis zum Münster. (der Bahnhof)", a: ["vom"], why: "‹von dem = vom›.", tag: "dativ" },
        { t: "gap", q: "أكمل بـ beim / bei der.", s: "Das Café ist ___ Kirche. (die Kirche)", a: ["bei der"], why: "المؤنث: ‹bei der›.", tag: "dativ" },
        { t: "gap", q: "أكمل.", s: "Das Museum ist ___ Bahnhof. (bei + der Bahnhof)", a: ["beim"], why: "‹bei dem = beim›.", tag: "dativ" },
        { t: "mc", q: "ما معنى ‹Biegen Sie die erste Straße rechts ab›؟", o: ["انعطف في أول شارع يمينًا", "امشِ مباشرة في الشارع الأول", "اعبر الشارع الأول"], a: 0, why: "‹abbiegen› = ينعطف، ‹rechts› = يمينًا.", tag: "richtung" },
        { t: "mc", q: "ما معنى ‹Gehen Sie über die Kreuzung›؟", o: ["اعبر التقاطع", "قف عند التقاطع", "انعطف عند التقاطع"], a: 0, why: "‹über die Kreuzung› = عبر التقاطع.", tag: "richtung" },
        { t: "mc", q: "ما معنى ‹Wir gehen zu Fuß›؟", o: ["نمشي على الأقدام", "نذهب بالحافلة", "نذهب إلى القدم"], a: 0, why: "‹zu Fuß› = مشيًا.", tag: "richtung" },
        { t: "order", q: "رتّب السؤال.", a: "Wie komme ich zum Bahnhof?", why: "‹Wie› + الفعل + الفاعل + ‹zum Bahnhof›.", tag: "richtung" },
        { t: "order", q: "رتّب الإرشاد.", a: "Steigen Sie am Bahnhof aus!", why: "أمر رسمي بفعل منفصل: ‹aus› في الآخر.", tag: "imperativ" },
        { t: "match", q: "صِل الكلمة السويسرية بمرادفها الألماني.", pairs: [["Grüezi", "Guten Tag"], ["Merci", "Danke"], ["das Velo", "das Fahrrad"], ["das Tram", "die Straßenbahn"]], tag: "wortschatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "عذرًا، كيف أصل إلى المتحف؟", a: ["Entschuldigung, wie komme ich zum Museum?", "Entschuldigen Sie, wie komme ich zum Museum?"], tag: "richtung" },
        { t: "read", title: "In der Touristeninformation", text: "Grüezi und willkommen in Bern! Die Altstadt ist klein und man kann alles zu Fuß besichtigen. Gehen Sie vom Bahnhof durch die Spitalgasse bis zur Zytglogge – das ist ein berühmter Turm mit einer astronomischen Uhr. Von dort gehen Sie geradeaus durch die Kramgasse bis zum Bärenpark. Das dauert etwa 15 Minuten. Mit dem Tram geht es schneller.", tr: "مرحبًا بكم في برن! المدينة القديمة صغيرة ويمكن زيارة كل شيء مشيًا. امشِ من المحطة عبر شارع شبيتالغاسه حتى الزيتغلوغه — وهو برج مشهور بساعة فلكية. من هناك امشِ مباشرة عبر كرامغاسه حتى حديقة الدببة. يستغرق ذلك حوالي 15 دقيقة. بالترام يكون أسرع.", items: [
          { t: "tf", s: "Die Altstadt von Bern ist sehr groß.", a: false, why: "‹Die Altstadt ist klein›." },
          { t: "tf", s: "Die Zytglogge ist ein Turm mit Uhr.", a: true, why: "‹ein berühmter Turm mit einer astronomischen Uhr›." },
          { t: "tf", s: "Zu Fuß dauert es bis zum Bärenpark etwa 15 Minuten.", a: true, why: "‹Das dauert etwa 15 Minuten.›" }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Wie komme ich zum Münster?", ar: "كيف أصل إلى الكاتدرائية؟",
        scene: "أنت في برن عند المحطة وتريد الذهاب إلى الكاتدرائية (das Münster). تسأل امرأة في الشارع.",
        who: { A: "Passantin" },
        lines: [
          { s: "U", task: "اسألها بأدب كيف تصل إلى الكاتدرائية.", m: "Entschuldigung, wie komme ich zum Münster?", ok: ["Entschuldigung wie komme ich zum Münster", "Entschuldigen Sie wie komme ich zum Münster", "Grüezi wie komme ich zum Münster", "Wie komme ich zum Münster"], o: ["Entschuldigung, wie komme ich zum Münster?", "Entschuldigung, wie komme ich zur Münster?", "Entschuldigung, wo komme ich zum Münster?"], why: ["", "‹das Münster› محايد → ‹zum›.", "للسؤال عن الطريق: ‹Wie komme ich …?›"], ar: "عذرًا، كيف أصل إلى الكاتدرائية؟" },
          { s: "A", de: "Gehen Sie hier geradeaus bis zur Kreuzung. Dann biegen Sie rechts ab und gehen durch die Kramgasse.", ar: "امشِ هنا مباشرة حتى التقاطع. ثم انعطف يمينًا وامشِ عبر كرامغاسه." },
          { s: "U", task: "تأكّد: حتى التقاطع، ثم يمينًا؟ واسأل: هل هو بعيد؟", m: "Bis zur Kreuzung und dann rechts? Ist das weit?", ok: ["Bis zur Kreuzung und dann rechts ist das weit", "Bis zur Kreuzung dann rechts ist das weit", "Also geradeaus und dann rechts ist das weit", "Ist das weit"], o: ["Bis zur Kreuzung und dann rechts? Ist das weit?", "Bis zum Kreuzung und dann links? Ist das weit?", "Bis zur Kreuzung und dann rechts? Ist das nah weit?"], why: ["", "‹die Kreuzung› → ‹zur›، وقالت ‹rechts›.", "السؤال: ‹Ist das weit?›"], ar: "حتى التقاطع ثم يمينًا؟ هل هو بعيد؟" },
          { s: "A", de: "Nein, nur zehn Minuten zu Fuß. Oder Sie fahren mit dem Bus Nummer 12.", ar: "لا، عشر دقائق مشيًا فقط. أو تذهب بالحافلة رقم 12." },
          { s: "U", task: "قل: سأمشي على الأقدام. شكرًا جزيلًا! (بالسويسري إن أردت)", m: "Ich gehe zu Fuß. Vielen Dank!", ok: ["Ich gehe zu Fuß vielen Dank", "Ich gehe zu Fuß merci", "Ich gehe zu Fuß danke", "Ich gehe zu Fuß merci vielmals", "Ich gehe zu Fuß danke schön"], o: ["Ich gehe zu Fuß. Vielen Dank!", "Ich gehe mit Fuß. Vielen Dank!", "Ich fahre zu Fuß. Vielen Dank!"], why: ["", "التعبير الثابت: ‹zu Fuß›.", "مع ‹zu Fuß› نستعمل ‹gehen›."], ar: "سأمشي. شكرًا جزيلًا!" },
          { s: "A", de: "Gern geschehen! Einen schönen Tag noch!", ar: "عفوًا! يومًا سعيدًا!" }
        ]
      },
      listen: [
        { t: "listen", say: "Gehen Sie geradeaus und dann die zweite Straße links.", q: "في أي شارع ينعطف؟", o: ["الثاني يسارًا", "الأول يمينًا", "الثاني يمينًا"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Nehmen Sie das Tram Nummer neun und steigen Sie am Bahnhof aus.", q: "أين ينزل؟", o: ["عند المحطة", "عند الكاتدرائية", "عند الحديقة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Das ist nicht weit, nur fünf Minuten zu Fuß.", q: "كم يستغرق المشي؟", o: ["5 دقائق", "15 دقيقة", "50 دقيقة"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Wie komme ich zum Bahnhof?", tag: "hoeren" },
        { t: "dict", say: "Ich fahre mit dem Bus.", tag: "hoeren" }
      ]
    },

    /* ───────────── 8B ───────────── */
    {
      id: "8B", de: "Es geht um die Wurst", ar: "الأمر حاسم! (حفلة الشواء)",
      summary: "دعوة إلى حفلة شواء، الاختلافات الثقافية، الشكر والاعتذار، etwas / nichts / alle / man، المضارع للمستقبل، تعابير بكلمة Wurst.",
      grammar: [
        {
          h: "الضمائر غير المحددة: etwas – nichts – alle – man",
          table: {
            head: ["الكلمة", "المعنى", "مثال"],
            rows: [
              ["‹etwas›", "شيء ما / قليلًا", "‹Ich bringe etwas zur Party mit.› (لا أعرف ماذا بعد)"],
              ["‹nichts›", "لا شيء", "‹Ich bringe nichts mit.›"],
              ["‹alle›", "الجميع / كل", "‹Alle haben einen Salat mitgebracht.› (الفعل بالجمع)"],
              ["‹man›", "المرء / الناس (قاعدة عامة)", "‹Man bringt ein Geschenk mit.›"]
            ]
          }
        },
        {
          h: "المضارع للتعبير عن المستقبل",
          p: "في الألمانية نستعمل **المضارع + ظرف زمني** للحديث عن المستقبل القريب: ‹Morgen gehe ich ins Museum.› ‹Nächste Woche fahre ich nach Zürich.› ‹In zwei Wochen habe ich Geburtstag.›",
          tip: "لا تحتاج في المستوى A1 إلى صيغة المستقبل (werden)؛ المضارع + الظرف يكفي."
        },
        {
          h: "الشكر والاعتذار",
          table: {
            head: ["الشخص أ", "الشخص ب"],
            rows: [
              ["‹Vielen Dank für die Einladung!›", "‹Bitte, bitte! / Gern geschehen!›"],
              ["‹Die Blumen sind für dich.›", "‹Oh, vielen Dank!›"],
              ["‹Oh, Entschuldigung! Das tut mir (echt) leid.›", "‹Das ist kein Problem. / Das ist doch nicht so schlimm.›"]
            ]
          },
          list: ["‹danken für› + Akkusativ: ‹Danke für den Abend!›"]
        },
        {
          h: "تعابير بكلمة Wurst",
          list: ["‹Das ist mir Wurst.› = لا يهمني / سيّان عندي (عامية)", "‹Es geht um die Wurst.› = الأمر حاسم / الآن أو أبدًا", "‹Alles hat ein Ende, nur die Wurst hat zwei.› = لكل شيء نهاية (مثل شعبي مازح)"]
        }
      ],
      vocab: [
        ["n", "die", "Party", "-s", "الحفلة", "Am Samstag ist eine Grillparty.", "يوم السبت حفلة شواء."],
        ["n", "die", "Grillparty", "-s", "حفلة الشواء", "Kommst du zur Grillparty?", "هل تأتي إلى حفلة الشواء؟"],
        ["n", "die", "Einladung", "-en", "الدعوة", "Danke für die Einladung!", "شكرًا على الدعوة!"],
        ["n", "das", "Geschenk", "-e", "الهدية", "Man bringt ein Geschenk mit.", "يُحضر المرء هدية."],
        ["n", "die", "Blume", "-n", "الزهرة", "Die Blumen sind für dich.", "الزهور لك."],
        ["n", "der", "Gastgeber", "-", "المضيف", "Der Gastgeber grillt Würste.", "المضيف يشوي النقانق."],
        ["n", "die", "Gastgeberin", "-nen", "المضيفة", "Die Gastgeberin ist sehr nett.", "المضيفة لطيفة جدًا."],
        ["n", "die", "Sitte", "-n", "العادة / العرف", "Das ist eine Sitte in der Schweiz.", "هذه عادة في سويسرا."],
        ["n", "der", "Unterschied", "-e", "الفرق", "Es gibt viele Unterschiede.", "هناك فروق كثيرة."],
        ["n", "der", "Fehler", "-", "الخطأ", "Das war ein Fehler.", "كان ذلك خطأ."],
        ["n", "die", "Stimmung", "-en", "الجو / المزاج", "Die Stimmung war super.", "الجو كان رائعًا."],
        ["n", "der", "Appetit", "Sg.", "الشهية", "Guten Appetit!", "بالهناء والشفاء!"],
        ["n", "das", "Ehepaar", "-e", "الزوجان", "Das Ehepaar wohnt in Bern.", "الزوجان يسكنان في برن."],
        ["n", "die", "Vergangenheit", "Sg.", "الماضي", "In der Vergangenheit war alles anders.", "في الماضي كان كل شيء مختلفًا."],
        ["n", "die", "Gegenwart", "Sg.", "الحاضر", "Wir sprechen über die Gegenwart.", "نتحدث عن الحاضر."],
        ["n", "die", "Zukunft", "Sg.", "المستقبل", "In der Zukunft möchte ich in Deutschland leben.", "في المستقبل أريد العيش في ألمانيا."],
        ["v", "", "grillen", "hat gegrillt", "يشوي", "Wir grillen am Wochenende.", "نشوي في عطلة الأسبوع."],
        ["v", "", "danken (für + Akk.)", "hat gedankt", "يشكر", "Ich danke dir für die Hilfe.", "أشكرك على المساعدة."],
        ["v", "", "mitbringen", "hat mitgebracht", "يُحضر معه", "Alle haben einen Salat mitgebracht.", "الجميع أحضروا سلطة."],
        ["v", "", "dabeihaben", "ich habe dabei", "يحمل معه", "Ich habe kein Geschenk dabei.", "ليس معي هدية."],
        ["v", "", "schmecken", "hat geschmeckt", "يكون لذيذًا", "Die Wurst schmeckt gut.", "النقانق لذيذة."],
        ["v", "", "gehören (zu + Dat.)", "hat gehört", "ينتمي إلى", "Das gehört zur Schweizer Kultur.", "هذا جزء من الثقافة السويسرية."],
        ["v", "", "entschuldigen", "", "يعذر", "Entschuldigen Sie bitte!", "اعذرني من فضلك!"],
        ["a", "", "peinlich", "", "محرج", "Das war mir peinlich.", "كان ذلك محرجًا لي."],
        ["a", "", "pünktlich", "", "في الموعد", "In der Schweiz ist man pünktlich.", "في سويسرا الناس دقيقون في المواعيد."],
        ["a", "", "fröhlich", "", "مرح / سعيد", "Alle waren fröhlich.", "الجميع كانوا مرحين."],
        ["a", "", "lustig", "", "مضحك / ممتع", "Die Party war lustig.", "الحفلة كانت ممتعة."],
        ["a", "", "traurig", "", "حزين", "Warum bist du traurig?", "لماذا أنت حزين؟"],
        ["a", "", "verärgert", "", "غاضب / منزعج", "Der Gastgeber war verärgert.", "المضيف كان منزعجًا."],
        ["d", "", "nächste Woche", "", "الأسبوع القادم", "Nächste Woche fahre ich nach Zürich.", "الأسبوع القادم أسافر إلى زيورخ."],
        ["d", "", "in zwei Wochen", "", "بعد أسبوعين", "In zwei Wochen habe ich Urlaub.", "بعد أسبوعين عندي إجازة."],
        ["d", "", "das nächste Mal", "", "المرة القادمة", "Das nächste Mal bringe ich Blumen mit.", "المرة القادمة أحضر زهورًا."],
        ["p", "", "etwas", "", "شيء ما", "Ich bringe etwas mit.", "أحضر شيئًا."],
        ["p", "", "nichts", "", "لا شيء", "Ich habe nichts mitgebracht.", "لم أحضر شيئًا."],
        ["p", "", "alle", "", "الجميع", "Alle sind da.", "الجميع هنا."],
        ["p", "", "für", "+ Akk.", "لـ / من أجل", "Das Geschenk ist für dich.", "الهدية لك."],
        ["x", "", "Das tut mir leid.", "", "أنا آسف.", "Oh, das tut mir echt leid!", "آه، أنا آسف حقًا!"],
        ["x", "", "Das ist kein Problem.", "", "لا مشكلة.", "Das ist kein Problem!", "لا مشكلة!"],
        ["x", "", "Gern geschehen!", "", "عفوًا! (رد على الشكر)", "Danke! – Gern geschehen!", "شكرًا! – عفوًا!"],
        ["x", "", "Das ist mir Wurst.", "", "لا يهمني (عامية)", "Pizza oder Pasta? Das ist mir Wurst!", "بيتزا أم معكرونة؟ سيّان عندي!"]
      ],
      phrases: [
        ["Vielen Dank für die Einladung!", "شكرًا جزيلًا على الدعوة!"],
        ["Die Blumen sind für dich.", "الزهور لك."],
        ["Oh, Entschuldigung! Das tut mir echt leid.", "آه، عذرًا! أنا آسف حقًا."],
        ["Das ist doch nicht so schlimm.", "ليس الأمر بهذا السوء."],
        ["Man bringt zu einer Party etwas mit.", "يُحضر المرء شيئًا إلى الحفلة."],
        ["Morgen gehe ich ins Zentrum Paul Klee.", "غدًا أذهب إلى مركز باول كلي."],
        ["Guten Appetit!", "بالهناء والشفاء!"]
      ],
      ex: [
        { t: "mc", q: "اختر الكلمة المناسبة.", s: "Ich weiß noch nicht, was ich mitbringe. Aber ich bringe ___ mit.", o: ["etwas", "nichts", "alle"], a: 0, why: "شيء غير محدد → ‹etwas›.", tag: "indefinit" },
        { t: "mc", q: "اختر الكلمة المناسبة.", s: "Ich habe kein Geld. Ich kann ___ kaufen.", o: ["nichts", "etwas", "man"], a: 0, why: "لا شيء → ‹nichts›.", tag: "indefinit" },
        { t: "mc", q: "اختر الكلمة المناسبة.", s: "___ haben einen Salat mitgebracht.", o: ["Alle", "Man", "Etwas"], a: 0, why: "الجميع → ‹Alle› (مع فعل بالجمع ‹haben›).", tag: "indefinit" },
        { t: "mc", q: "اختر الكلمة المناسبة.", s: "In der Schweiz ist ___ pünktlich.", o: ["man", "alle", "nichts"], a: 0, why: "قاعدة عامة → ‹man› (مع فعل مفرد).", tag: "indefinit" },
        { t: "mc", q: "أي جملة تتحدث عن المستقبل؟", o: ["Morgen fahre ich nach Zürich.", "Gestern bin ich nach Zürich gefahren.", "Ich war in Zürich."], a: 0, why: "المضارع + ‹morgen› = مستقبل.", tag: "praesens" },
        { t: "order", q: "رتّب الجملة (مستقبل).", a: "Nächste Woche besuche ich meine Eltern.", why: "الظرف الزمني أولًا، الفعل ثانيًا.", tag: "praesens" },
        { t: "mc", q: "صديقك يقول: ‹Vielen Dank für die Blumen!› — ردّك:", o: ["Gern geschehen!", "Das tut mir leid.", "Guten Appetit!"], a: 0, why: "ردًا على الشكر: ‹Gern geschehen! / Bitte!›", tag: "wortschatz" },
        { t: "mc", q: "أسقطت كأسًا عند صديقك. ماذا تقول؟", o: ["Oh, Entschuldigung! Das tut mir leid.", "Gern geschehen!", "Das ist mir Wurst."], a: 0, why: "للاعتذار: ‹Entschuldigung! Das tut mir leid.›", tag: "wortschatz" },
        { t: "mc", q: "ما معنى ‹Das ist mir Wurst›؟", o: ["لا يهمني", "أحب النقانق", "أنا جائع"], a: 0, why: "تعبير عامي = سيّان عندي.", tag: "wortschatz" },
        { t: "gap", q: "أكمل بحرف الجر.", s: "Vielen Dank ___ die Einladung!", a: ["für"], why: "‹danken für› + Akkusativ.", tag: "wortschatz" },
        { t: "match", q: "صِل الشعور بمعناه.", pairs: [["fröhlich", "مرح"], ["traurig", "حزين"], ["peinlich", "محرج"], ["verärgert", "منزعج"], ["lustig", "ممتع / مضحك"]], tag: "wortschatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "شكرًا على الدعوة!", a: ["Danke für die Einladung!", "Vielen Dank für die Einladung!"], tag: "wortschatz" },
        { t: "read", title: "Eine peinliche Party", text: "Lukas aus Hamburg ist neu in Bern. Seine Kollegen haben ihn zu einer Grillparty eingeladen. Er ist ohne Geschenk gekommen – und eine halbe Stunde zu spät! Alle anderen Gäste haben etwas mitgebracht: einen Salat, Brot oder Getränke. Das war Lukas sehr peinlich. Aber die Gastgeberin hat gesagt: „Das ist doch nicht so schlimm!“ Das nächste Mal bringt er Blumen mit.", tr: "لوكاس من هامبورغ جديد في برن. دعاه زملاؤه إلى حفلة شواء. جاء بدون هدية — ومتأخرًا نصف ساعة! كل الضيوف الآخرين أحضروا شيئًا: سلطة أو خبزًا أو مشروبات. كان ذلك محرجًا جدًا للوكاس. لكن المضيفة قالت: «ليس الأمر بهذا السوء!» المرة القادمة سيحضر زهورًا.", items: [
          { t: "tf", s: "Lukas ist pünktlich gekommen.", a: false, why: "جاء متأخرًا نصف ساعة." },
          { t: "tf", s: "Alle anderen Gäste haben etwas mitgebracht.", a: true, why: "‹Alle anderen Gäste haben etwas mitgebracht›." },
          { t: "tf", s: "Die Gastgeberin war verärgert.", a: false, why: "قالت: ‹Das ist doch nicht so schlimm!›" }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Auf der Grillparty", ar: "في حفلة الشواء",
        scene: "وصلت إلى حفلة شواء عند زميلتك السويسرية أنّا، مع زهور، لكنك تأخرت قليلًا.",
        who: { A: "Anna" },
        lines: [
          { s: "A", de: "Hoi! Schön, dass du da bist!", ar: "أهلًا! جميل أنك هنا!" },
          { s: "U", task: "اعتذر عن التأخير وقدّم لها الزهور.", m: "Entschuldigung, ich bin zu spät. Die Blumen sind für dich.", ok: ["Entschuldigung ich bin zu spät die Blumen sind für dich", "Entschuldige ich bin zu spät die Blumen sind für dich", "Tut mir leid ich bin zu spät die Blumen sind für dich", "Entschuldigung die Blumen sind für dich", "Die Blumen sind für dich *"], o: ["Entschuldigung, ich bin zu spät. Die Blumen sind für dich.", "Gern geschehen, ich bin zu spät. Die Blumen sind für dir.", "Entschuldigung, ich bin zu früh. Die Blumen ist für dich."], why: ["", "‹Gern geschehen› رد على الشكر، و‹für› + Akkusativ: ‹für dich›.", "‹die Blumen› جمع → ‹sind›، وأنت متأخر."], ar: "عذرًا، تأخرت. الزهور لك." },
          { s: "A", de: "Oh, vielen Dank! Das ist kein Problem. Möchtest du etwas trinken?", ar: "آه، شكرًا جزيلًا! لا مشكلة. هل تريد شيئًا تشربه؟" },
          { s: "U", task: "قل: نعم، عصير من فضلك. هل أساعدك في الشواء؟", m: "Ja, einen Saft, bitte. Soll ich dir beim Grillen helfen?", ok: ["Ja einen Saft bitte soll ich dir beim Grillen helfen", "Ja einen Saft bitte soll ich dir helfen", "Einen Saft bitte soll ich helfen", "Ja gern einen Saft soll ich dir helfen"], o: ["Ja, einen Saft, bitte. Soll ich dir beim Grillen helfen?", "Ja, ein Saft, bitte. Soll ich dich helfen?", "Ja, einen Saft, bitte. Sollst du mir helfen?"], why: ["", "‹der Saft› → ‹einen›، و‹helfen› + Dativ: ‹dir›.", "تعرض المساعدة → ‹Soll ich …?›"], ar: "نعم، عصير من فضلك. هل أساعدك في الشواء؟" },
          { s: "A", de: "Gern! Und – was machst du morgen?", ar: "بكل سرور! و… ماذا ستفعل غدًا؟" },
          { s: "U", task: "قل: غدًا أذهب إلى مركز باول كلي (المضارع للمستقبل).", m: "Morgen gehe ich ins Zentrum Paul Klee.", ok: ["Morgen gehe ich ins Zentrum Paul Klee", "Ich gehe morgen ins Zentrum Paul Klee", "Morgen besuche ich das Zentrum Paul Klee", "Morgen fahre ich zum Zentrum Paul Klee", "Morgen gehe ich *"], o: ["Morgen gehe ich ins Zentrum Paul Klee.", "Morgen ich gehe ins Zentrum Paul Klee.", "Gestern gehe ich ins Zentrum Paul Klee."], why: ["", "بعد ‹Morgen› الفعل ثانيًا: ‹gehe ich›.", "‹gestern› = أمس (ماضٍ)."], ar: "غدًا أذهب إلى مركز باول كلي." },
          { s: "A", de: "Super! Die Bilder sind wunderbar. Guten Appetit übrigens!", ar: "رائع! اللوحات مذهلة. بالهناء والشفاء بالمناسبة!" },
          { s: "U", task: "ردّ: شكرًا، وأنتِ أيضًا!", m: "Danke, gleichfalls!", ok: ["Danke gleichfalls", "Danke ebenfalls", "Danke dir auch", "Danke du auch", "Danke gleichfalls *"], o: ["Danke, gleichfalls!", "Gern geschehen!", "Das tut mir leid!"], why: ["", "هذا رد على الشكر وليس على التمني.", "لا داعي للاعتذار."], ar: "شكرًا، وأنتِ أيضًا!" }
        ]
      },
      listen: [
        { t: "listen", say: "Alle Gäste haben etwas mitgebracht, nur Lukas hat nichts mitgebracht.", q: "ماذا أحضر لوكاس؟", o: ["لا شيء", "سلطة", "زهورًا"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Nächste Woche fahre ich mit der Bahn nach Zürich.", q: "كيف سيسافر؟", o: ["بالقطار", "بالحافلة", "بالسيارة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Oh, Entschuldigung! – Das ist doch nicht so schlimm.", q: "كيف كان رد الفعل؟", o: ["متسامح", "غاضب", "حزين"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Vielen Dank für die Einladung!", tag: "hoeren" },
        { t: "dict", say: "Das tut mir leid.", tag: "hoeren" }
      ]
    },

    /* ───────────── 8C ───────────── */
    {
      id: "8C", de: "Wie komme ich …?", ar: "كيف أصل إلى …؟",
      summary: "الطريق إلى مركز باول كلي، durch و um … herum + Akkusativ، in + Akkusativ (wohin?) مقابل in + Dativ (wo?)، الفن ووصف اللوحات.",
      grammar: [
        {
          h: "durch و um … herum + Akkusativ",
          table: {
            head: ["الحرف", "المعنى", "أمثلة"],
            rows: [
              ["‹durch›", "عبر / خلال", "‹durch den Park, durch das Einkaufszentrum, durch die Stadt›"],
              ["‹um … herum›", "حول / بالالتفاف", "‹um den Haupteingang herum, um das Haus herum, um die Ecke›"]
            ]
          }
        },
        {
          h: "wo? أم wohin؟ — حرف in مع حالتين",
          p: "‹in› حرف «متغيّر» (Wechselpräposition): مع **wo?** (المكان الثابت) يأتي Dativ، ومع **wohin?** (الاتجاه/الحركة) يأتي Akkusativ.",
          table: {
            head: ["", "wohin? → Akkusativ", "wo? → Dativ"],
            rows: [
              ["مذكر (der Park)", "‹Ich gehe in den Park.›", "‹Ich bin im Park.›"],
              ["محايد (das Museum)", "‹Ich gehe ins Museum.›", "‹Ich bin im Museum.›"],
              ["مؤنث (die Stadt)", "‹Ich gehe in die Stadt.›", "‹Ich bin in der Stadt.›"]
            ]
          },
          tip: "‹in das = ins›، ‹in dem = im›. نفس الفكرة مع ‹an, auf, unter, über, neben, vor, hinter, zwischen› (ستتعمق فيها في A2)."
        },
        {
          h: "الكلام عن لوحة",
          ex: [["Das Bild gefällt mir gut. / Das Bild gefällt mir nicht.", "اللوحة تعجبني. / اللوحة لا تعجبني."], ["Die Farben sind fröhlich / traurig / bunt.", "الألوان مرحة / حزينة / زاهية."], ["Ich finde das Bild abstrakt und interessant.", "أجد اللوحة تجريدية ومثيرة."], ["Auf dem Bild sieht man ein Haus und einen Baum.", "في اللوحة نرى منزلًا وشجرة."]]
        }
      ],
      vocab: [
        ["n", "das", "Zentrum", "=Zentren", "المركز", "Das Zentrum Paul Klee ist ein Museum.", "مركز باول كلي متحف."],
        ["n", "das", "Einkaufszentrum", "=Einkaufszentren", "المركز التجاري", "Gehen Sie durch das Einkaufszentrum.", "امشِ عبر المركز التجاري."],
        ["n", "der", "Eingang", "¨-e", "المدخل", "Der Eingang ist um die Ecke.", "المدخل خلف الزاوية."],
        ["n", "der", "Haupteingang", "¨-e", "المدخل الرئيسي", "Gehen Sie um den Haupteingang herum.", "التفّ حول المدخل الرئيسي."],
        ["n", "der", "Ausgang", "¨-e", "المخرج", "Wo ist der Ausgang?", "أين المخرج؟"],
        ["n", "der", "Park", "-s", "الحديقة", "Wir gehen durch den Park.", "نمشي عبر الحديقة."],
        ["n", "das", "Bild", "-er", "اللوحة / الصورة", "Das Bild gefällt mir.", "اللوحة تعجبني."],
        ["n", "die", "Kunst", "¨-e", "الفن", "Ich interessiere mich für Kunst.", "أنا مهتم بالفن."],
        ["n", "die", "Malerei", "Sg.", "الرسم (فن الرسم)", "Die Malerei von Paul Klee ist bunt.", "رسم باول كلي ملوّن."],
        ["n", "der", "Maler", "-", "الرسّام", "Paul Klee war ein berühmter Maler.", "كان باول كلي رسامًا مشهورًا."],
        ["n", "die", "Malerin", "-nen", "الرسّامة", "Die Malerin malt Blumen.", "الرسامة ترسم زهورًا."],
        ["n", "die", "Ausstellung", "-en", "المعرض", "Die Ausstellung ist interessant.", "المعرض مثير."],
        ["n", "die", "Biografie", "-n", "السيرة الذاتية", "Lies die Biografie von Paul Klee.", "اقرأ سيرة باول كلي."],
        ["n", "das", "Leben", "-", "الحياة", "Er hat sein Leben lang gemalt.", "رسم طوال حياته."],
        ["n", "die", "Kunstakademie", "-n", "أكاديمية الفنون", "Er hat an der Kunstakademie studiert.", "درس في أكاديمية الفنون."],
        ["n", "der", "Baum", "¨-e", "الشجرة", "Auf dem Bild ist ein Baum.", "في اللوحة شجرة."],
        ["n", "die", "Farbe", "-n", "اللون", "Die Farben sind fröhlich.", "الألوان مرحة."],
        ["n", "die", "Reise", "-n", "الرحلة / السفر", "Die Reise nach Tunesien war wichtig für Klee.", "الرحلة إلى تونس كانت مهمة لكلي."],
        ["n", "das", "Symbol", "-e", "الرمز", "Der Bär ist das Symbol von Bern.", "الدب رمز برن."],
        ["n", "der", "Bär", "-en", "الدب", "Im Bärenpark wohnen Bären.", "في حديقة الدببة تعيش الدببة."],
        ["v", "", "malen", "hat gemalt", "يرسم (بالألوان)", "Klee hat viele Bilder gemalt.", "رسم كلي لوحات كثيرة."],
        ["v", "", "gefallen (+ Dat.)", "es gefällt mir", "يعجب", "Das Bild gefällt mir gut.", "اللوحة تعجبني."],
        ["v", "", "sterben", "er stirbt · ist gestorben", "يموت", "Paul Klee ist 1940 gestorben.", "توفي باول كلي عام 1940."],
        ["v", "", "heiraten", "hat geheiratet", "يتزوّج", "Er hat 1906 geheiratet.", "تزوّج عام 1906."],
        ["v", "", "zurückgehen", "ist zurückgegangen", "يعود", "Er ist nach Bern zurückgegangen.", "عاد إلى برن."],
        ["a", "", "abstrakt", "", "تجريدي", "Das Bild ist abstrakt.", "اللوحة تجريدية."],
        ["a", "", "original", "", "أصلي", "Das ist ein Original!", "هذه نسخة أصلية!"],
        ["a", "", "bunt", "", "ملوّن", "Die Bilder sind sehr bunt.", "اللوحات ملوّنة جدًا."],
        ["a", "", "einfach", "", "بسيط", "Die Formen sind einfach.", "الأشكال بسيطة."],
        ["a", "", "aggressiv", "", "عدواني / حاد", "Die Farben wirken aggressiv.", "الألوان تبدو حادة."],
        ["a", "", "berühmt", "", "مشهور", "Paul Klee ist berühmt.", "باول كلي مشهور."],
        ["p", "", "durch", "+ Akk.", "عبر", "Wir gehen durch die Stadt.", "نمشي عبر المدينة."],
        ["p", "", "um … herum", "+ Akk.", "حول", "Gehen Sie um das Haus herum.", "التفّ حول المنزل."],
        ["x", "", "… gefällt mir gut / nicht gut.", "", "… يعجبني / لا يعجبني.", "Das Bild gefällt mir nicht so gut.", "اللوحة لا تعجبني كثيرًا."]
      ],
      phrases: [
        ["Gehen Sie durch den Park und dann um das Haus herum.", "امشِ عبر الحديقة ثم التفّ حول المنزل."],
        ["Ich gehe ins Museum. – Ich bin im Museum.", "أذهب إلى المتحف. – أنا في المتحف."],
        ["Wir fahren in die Stadt. – Wir sind in der Stadt.", "نذهب إلى المدينة. – نحن في المدينة."],
        ["Das Bild gefällt mir gut. Die Farben sind fröhlich.", "اللوحة تعجبني. الألوان مرحة."],
        ["Paul Klee war ein berühmter Maler aus Bern.", "كان باول كلي رسامًا مشهورًا من برن."],
        ["Wie gefällt dir das Bild? – Es gefällt mir nicht so gut.", "كيف تجد اللوحة؟ – لا تعجبني كثيرًا."]
      ],
      ex: [
        { t: "mc", q: "اختر الصحيح.", s: "Wir gehen durch ___ Park. (der Park)", o: ["den", "dem", "der"], a: 0, why: "‹durch› + Akkusativ: ‹den Park›.", tag: "richtung" },
        { t: "mc", q: "اختر الصحيح.", s: "Gehen Sie um ___ Haus herum. (das Haus)", o: ["das", "dem", "den"], a: 0, why: "‹um … herum› + Akkusativ؛ المحايد يبقى ‹das›.", tag: "richtung" },
        { t: "mc", q: "wohin أم wo؟", s: "Ich gehe ___ Museum.", o: ["ins", "im"], a: 0, why: "حركة → wohin → Akkusativ: ‹in das = ins›.", tag: "richtung" },
        { t: "mc", q: "wohin أم wo؟", s: "Ich bin ___ Museum.", o: ["im", "ins"], a: 0, why: "مكان ثابت → wo → Dativ: ‹in dem = im›.", tag: "richtung" },
        { t: "mc", q: "wohin أم wo؟", s: "Wir fahren in ___ Stadt.", o: ["die", "der"], a: 0, why: "اتجاه → Akkusativ: ‹in die Stadt›.", tag: "richtung" },
        { t: "mc", q: "wohin أم wo؟", s: "Wir wohnen in ___ Stadt.", o: ["der", "die"], a: 0, why: "مكان ثابت → Dativ: ‹in der Stadt›.", tag: "richtung" },
        { t: "gap", q: "أكمل.", s: "Wohin gehst du? – Ich gehe in ___ Park. (der Park)", a: ["den"], why: "wohin → Akkusativ مذكر: ‹den›.", tag: "richtung" },
        { t: "gap", q: "أكمل.", s: "Wo bist du? – Ich bin ___ Park.", a: ["im"], why: "wo → Dativ: ‹im Park›.", tag: "richtung" },
        { t: "mc", q: "اختر الصحيح.", s: "Das Bild ___ mir gut.", o: ["gefällt", "gefalle", "gefallen"], a: 0, why: "الفاعل ‹das Bild› (هو) → ‹gefällt›، و‹mir› هو الشخص المعجَب.", tag: "wortschatz" },
        { t: "mc", q: "اختر الصحيح.", s: "Die Bilder ___ mir nicht.", o: ["gefallen", "gefällt", "gefalle"], a: 0, why: "الفاعل جمع ‹die Bilder› → ‹gefallen›.", tag: "wortschatz" },
        { t: "order", q: "رتّب الجملة.", a: "Das Bild gefällt mir sehr gut.", why: "الفاعل + الفعل + Dativ + الظرف.", tag: "wortschatz" },
        { t: "match", q: "صِل الوصف بمعناه.", pairs: [["abstrakt", "تجريدي"], ["bunt", "ملوّن"], ["einfach", "بسيط"], ["berühmt", "مشهور"], ["original", "أصلي"]], tag: "wortschatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أذهب إلى المتحف.", a: ["Ich gehe ins Museum.", "Ich gehe in das Museum."], tag: "richtung" },
        { t: "read", title: "Paul Klee – ein berühmter Berner", text: "Paul Klee ist 1879 bei Bern geboren. Er hat in München an der Kunstakademie studiert. 1914 ist er nach Tunesien gereist. Die Farben dort waren sehr wichtig für seine Malerei. Später hat er am Bauhaus unterrichtet. 1933 ist er nach Bern zurückgegangen. Er ist 1940 gestorben. Heute kann man im Zentrum Paul Klee in Bern viele Bilder von ihm sehen.", tr: "وُلد باول كلي عام 1879 قرب برن. درس في أكاديمية الفنون في ميونخ. عام 1914 سافر إلى تونس. كانت الألوان هناك مهمة جدًا لرسمه. لاحقًا درّس في الباوهاوس. عام 1933 عاد إلى برن. توفي عام 1940. اليوم يمكن رؤية كثير من لوحاته في مركز باول كلي في برن.", items: [
          { t: "tf", s: "Paul Klee hat in München studiert.", a: true, why: "‹Er hat in München an der Kunstakademie studiert.›" },
          { t: "tf", s: "Die Reise nach Tunesien war nicht wichtig.", a: false, why: "الألوان هناك كانت مهمة جدًا لرسمه." },
          { t: "tf", s: "Im Zentrum Paul Klee kann man seine Bilder sehen.", a: true, why: "آخر جملة." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Im Zentrum Paul Klee", ar: "في مركز باول كلي",
        scene: "أنت في متحف باول كلي مع صديقتك لورا. تتحدثان عن اللوحات.",
        who: { A: "Laura" },
        lines: [
          { s: "A", de: "Schau mal, das Bild da! Wie gefällt es dir?", ar: "انظر إلى تلك اللوحة! كيف تجدها؟" },
          { s: "U", task: "قل: تعجبني جدًا. الألوان مرحة وزاهية.", m: "Es gefällt mir sehr gut. Die Farben sind fröhlich und bunt.", ok: ["Es gefällt mir sehr gut die Farben sind fröhlich und bunt", "Es gefällt mir gut die Farben sind fröhlich *", "Das Bild gefällt mir sehr gut *", "Sehr gut die Farben sind fröhlich und bunt"], o: ["Es gefällt mir sehr gut. Die Farben sind fröhlich und bunt.", "Ich gefalle das Bild sehr gut.", "Es gefällt mich sehr gut. Die Farben ist fröhlich."], why: ["", "اللوحة هي الفاعل: ‹Es gefällt mir›، وليس «أنا أعجب».", "‹gefallen› + Dativ: ‹mir›، و‹die Farben› جمع → ‹sind›."], ar: "تعجبني جدًا. الألوان مرحة وزاهية." },
          { s: "A", de: "Mir auch! Und das Bild hier? Ich finde es ein bisschen traurig.", ar: "وأنا أيضًا! وهذه اللوحة؟ أجدها حزينة قليلًا." },
          { s: "U", task: "قل: صحيح، هي تجريدية ولا تعجبني كثيرًا.", m: "Stimmt, es ist abstrakt und gefällt mir nicht so gut.", ok: ["Stimmt es ist abstrakt und gefällt mir nicht so gut", "Stimmt es ist abstrakt es gefällt mir nicht so gut", "Es ist abstrakt und gefällt mir nicht so gut", "Es gefällt mir nicht so gut *"], o: ["Stimmt, es ist abstrakt und gefällt mir nicht so gut.", "Stimmt, es ist abstrakt und gefällt mir kein gut.", "Stimmt, es ist abstrakt und ich gefalle nicht."], why: ["", "نفي الصفة/الفعل بـ ‹nicht›.", "‹es gefällt mir nicht›."], ar: "صحيح، هي تجريدية ولا تعجبني كثيرًا." },
          { s: "A", de: "Wollen wir danach in den Park gehen? Er ist gleich hinter dem Museum.", ar: "هل نذهب بعدها إلى الحديقة؟ هي خلف المتحف مباشرة." },
          { s: "U", task: "وافق: نعم، فكرة جيدة! نمشي عبر الحديقة إلى الحافلة.", m: "Ja, gute Idee! Wir gehen durch den Park zum Bus.", ok: ["Ja gute Idee wir gehen durch den Park zum Bus", "Gute Idee wir gehen durch den Park *", "Ja gute Idee gehen wir durch den Park", "Ja gern wir gehen durch den Park zum Bus"], o: ["Ja, gute Idee! Wir gehen durch den Park zum Bus.", "Ja, gute Idee! Wir gehen durch dem Park zum Bus.", "Ja, gute Idee! Wir gehen durch den Park zu den Bus."], why: ["", "‹durch› + Akkusativ: ‹den Park›.", "‹zu› + Dativ: ‹zum Bus›."], ar: "نعم، فكرة جيدة! نمشي عبر الحديقة إلى الحافلة." }
        ]
      },
      listen: [
        { t: "listen", say: "Gehen Sie durch den Park und dann um das Museum herum. Der Eingang ist hinten.", q: "أين المدخل؟", o: ["في الخلف", "في الأمام", "في الحديقة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Paul Klee ist neunzehnhundertvierzehn nach Tunesien gereist.", q: "متى سافر كلي إلى تونس؟", o: ["1914", "1940", "1904"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich bin schon im Museum. Kommst du auch ins Museum?", q: "أين المتكلم؟", o: ["في المتحف", "في الحديقة", "في الطريق"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Das Bild gefällt mir gut.", tag: "hoeren" },
        { t: "dict", say: "Wir gehen durch den Park.", tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "R-Laute", ar: "أصوات الراء",
    body: [
      { p: "في الألمانية نوعان من ‹r›:" },
      { table: { head: ["النوع", "متى؟", "أمثلة"], rows: [
        ["‹r› ساكن [ʁ] — يُسمع بوضوح", "في بداية الكلمة أو المقطع، بعد ساكن، بعد حرف علة قصير", "‹Region, Touristen, braun, Bern, Park›"],
        ["‹r› صائت [ɐ] — يشبه «ا» خفيفة", "بعد حرف علة طويل في آخر المقطع، في ‑er آخر الكلمة، في البادئات er‑/ver‑/zer‑", "‹Bär, mir, Besucher, verkaufen›"]
      ] } },
      { tip: "للعرب: الـ ‹r› الألمانية الساكنة ليست الراء العربية المكرّرة؛ هي قريبة من «غ» الخفيفة في الحلق. تدرّب بالغرغرة بالماء! والـ ‹‑er› في آخر الكلمة تُنطق تقريبًا «ا»: ‹Lehrer› ≈ «ليرا»." }
    ],
    drills: [
      { t: "listen", say: "braun", q: "أي ‹r› تسمع؟", o: ["ساكن [ʁ] واضح", "صائت [ɐ] مثل ا"], a: 0, why: "بعد ساكن (b) → [ʁ]." },
      { t: "listen", say: "der Bär", q: "أي ‹r› في ‹Bär›؟", o: ["صائت [ɐ] مثل ا", "ساكن [ʁ] واضح"], a: 0, why: "بعد حرف علة طويل في آخر المقطع → [ɐ]." },
      { t: "listen", say: "die Bären", q: "أي ‹r› في ‹Bären›؟", o: ["ساكن [ʁ] واضح", "صائت [ɐ]"], a: 0, why: "في بداية المقطع ‹ren› → [ʁ]." },
      { t: "listen", say: "Besucher", q: "كيف تُنطق ‑er في الآخر؟", o: ["مثل «ا» خفيفة", "راء واضحة"], a: 0, why: "‑er في آخر الكلمة → [ɐ]." },
      { t: "listen", say: "Region", q: "أي ‹r›؟", o: ["ساكن [ʁ] واضح", "صائت [ɐ]"], a: 0, why: "بداية الكلمة → [ʁ]." }
    ],
    say: ["braun – der Bär", "Region", "Touristen", "verkaufen", "Besucher", "Ich bin der berühmte Bär von Bern.", "Viele Touristen reisen nach Bern.", "Der Park ist wirklich das Zentrum von Bern."]
  },

  write: [
    {
      ar: "تريد زيارة فيينا في ماي. اكتب بريدًا (حوالي 30–40 كلمة) لمكتب السياحة: لماذا تكتب، اطلب معلومات عن المعالم والمتاحف والبرنامج الثقافي، واطلب عناوين فنادق. (مثل امتحان Start Deutsch 1)",
      de: "Schreiben Sie an die Touristeninformation in Wien (ca. 30 Wörter).",
      model: "Sehr geehrte Damen und Herren,\nich möchte im Mai nach Wien fahren. Bitte schicken Sie mir Informationen über Sehenswürdigkeiten, Museen und das Kulturprogramm. Ich brauche auch Hoteladressen. Vielen Dank!\nMit freundlichen Grüßen\nKarim Amrani",
      check: ["‹Sehr geehrte Damen und Herren,›", "سبب الكتابة (Ich möchte im Mai …)", "طلب المعلومات (Bitte schicken Sie mir …)", "الفنادق (Hoteladressen)", "‹Mit freundlichen Grüßen›", "حوالي 30 كلمة"]
    },
    {
      ar: "اكتب بريد شكر لصديق بعد حفلة: اشكره، صِف الجو، اعتذر عن شيء صغير، واقترح لقاءً قادمًا (المضارع للمستقبل).",
      de: "Danke-Mail nach einer Party.",
      model: "Liebe Anna,\nvielen Dank für die tolle Grillparty! Die Stimmung war super und die Würste haben sehr gut geschmeckt. Entschuldige bitte, ich war ein bisschen zu spät. Nächste Woche koche ich für dich – kommst du am Samstag?\nViele Grüße\nKarim",
      check: ["‹Vielen Dank für …› + Akkusativ", "وصف الجو (Die Stimmung war …)", "اعتذار (Entschuldige / Es tut mir leid)", "المستقبل بالمضارع (Nächste Woche …)"]
    }
  ],
  tutor: [
    { title: "Nach dem Weg fragen", ar: "السؤال عن الطريق في برن", role: "eine hilfsbereite Passantin in der Berner Altstadt", goal: "nach dem Weg fragen und Wegbeschreibungen verstehen: geradeaus, rechts, links, bis zur Kreuzung, zum/zur, mit dem Bus/Tram", start: "Grüezi! Suchen Sie etwas? Kann ich Ihnen helfen?" },
    { title: "Auf der Party", ar: "في الحفلة", role: "Anna, eine Schweizer Kollegin und Gastgeberin einer Grillparty", goal: "sich bedanken und entschuldigen, über Pläne in der Zukunft (Präsens + Zeitangabe) sprechen, etwas/nichts/alle/man benutzen", start: "Hoi! Schön, dass du da bist! Möchtest du etwas trinken?" }
  ]
});

/* Extras: tags, difficult sounds, exam practice */
window.COURSE = window.COURSE || { lessons: [] };

window.COURSE.tags = {
  begruessung: { ar: "التحية والتعارف", skill: "sprechen" },
  praesens: { ar: "تصريف المضارع", skill: "grammatik" },
  sein: { ar: "الفعل sein", skill: "grammatik" },
  haben: { ar: "الفعل haben", skill: "grammatik" },
  wortstellung: { ar: "ترتيب الكلمات", skill: "grammatik" },
  wfrage: { ar: "أسئلة W", skill: "grammatik" },
  artikel: { ar: "أدوات التعريف der/die/das", skill: "grammatik" },
  plural: { ar: "جمع الأسماء", skill: "wortschatz" },
  zahlen: { ar: "الأرقام والأسعار", skill: "wortschatz" },
  akkusativ: { ar: "حالة النصب (Akkusativ)", skill: "grammatik" },
  possessiv: { ar: "أدوات الملكية", skill: "grammatik" },
  konnektor: { ar: "أدوات الربط", skill: "grammatik" },
  uhrzeit: { ar: "الساعة والأيام", skill: "wortschatz" },
  negation: { ar: "النفي nicht / kein", skill: "grammatik" },
  mengen: { ar: "الكميات والتسوق", skill: "wortschatz" },
  pronomen: { ar: "ضمائر المفعول به", skill: "grammatik" },
  praeteritum: { ar: "الماضي war / hatte", skill: "grammatik" },
  modal: { ar: "الأفعال الناقصة", skill: "grammatik" },
  datum: { ar: "التاريخ والأشهر", skill: "wortschatz" },
  vokalwechsel: { ar: "أفعال بتغيير حرف العلة", skill: "grammatik" },
  trennbar: { ar: "الأفعال المنفصلة", skill: "grammatik" },
  perfekt: { ar: "الماضي التام Perfekt", skill: "grammatik" },
  dativ: { ar: "حالة الجر (Dativ)", skill: "grammatik" },
  imperativ: { ar: "صيغة الأمر", skill: "grammatik" },
  vorschlag: { ar: "الاقتراحات", skill: "sprechen" },
  richtung: { ar: "الاتجاهات ووصف الطريق", skill: "grammatik" },
  indefinit: { ar: "etwas / nichts / alle / man", skill: "grammatik" },
  wortschatz: { ar: "المفردات", skill: "wortschatz" },
  hoeren: { ar: "الاستماع", skill: "hoeren" },
  lesen: { ar: "القراءة", skill: "lesen" },
  schreiben: { ar: "الكتابة", skill: "schreiben" },
  sprechen: { ar: "النطق", skill: "sprechen" },
  dialog: { ar: "المحادثة", skill: "sprechen" }
};

window.COURSE.skills = {
  wortschatz: "المفردات",
  grammatik: "القواعد",
  hoeren: "الاستماع",
  lesen: "القراءة",
  schreiben: "الكتابة",
  sprechen: "المحادثة والنطق"
};

/* Difficult German sounds for Arabic speakers */
window.COURSE.sounds = [
  {
    id: "ue", de: "ü", ar: "الصوت ü",
    how: "قل «إي» ثم دوّر شفتيك كأنك تنطق «أو» دون أن يتحرك لسانك. اللسان في مكان «إي» والشفتان في مكان «أو».",
    pairs: [["Tier", "Tür"], ["Kissen", "küssen"], ["vier", "für"], ["Kiste", "Küste"], ["Mutter", "Mütter"]],
    words: ["über", "Tür", "fünf", "Küche", "Müll", "grün", "Schüler", "müssen"]
  },
  {
    id: "oe", de: "ö", ar: "الصوت ö",
    how: "قل «إيه» (e) ثم دوّر شفتيك كأنك تنطق «أو». مثل eu في الكلمة الفرنسية ‹peu› أو ‹fleur›.",
    pairs: [["lesen", "lösen"], ["Sohn", "Söhne"], ["schon", "schön"], ["Ofen", "Öfen"], ["kennen", "können"]],
    words: ["schön", "hören", "Österreich", "zwölf", "können", "möchten", "Brötchen", "Größe"]
  },
  {
    id: "ae", de: "ä", ar: "الصوت ä",
    how: "قريب من «إ» المفتوحة (مثل è الفرنسية). الطويلة ‹ä› في ‹Käse› تشبه «إيه» مفتوحة وطويلة.",
    pairs: [["Mann", "Männer"], ["Vater", "Väter"], ["Bar", "Bär"], ["fahren", "fährt"]],
    words: ["Käse", "Mädchen", "Äpfel", "spät", "Getränk", "März", "Sessel", "Gäste"]
  },
  {
    id: "ich", de: "ch [ç] — Ich-Laut", ar: "ch الناعمة (ich)",
    how: "بعد i, e, ä, ö, ü, ei, eu وبعد الحروف الساكنة: ‹ch› ناعمة كأنك تقول «ي» بقوة وتُخرج الهواء بين اللسان والحنك — تشبه «هـ» ممزوجة بـ «ي». ليست «ش» وليست «خ».",
    pairs: [["Kirche", "Kirsche"], ["mich", "misch"], ["Fächer", "Fäscher"]],
    words: ["ich", "nicht", "Milch", "Mädchen", "Küche", "sprechen", "München", "zwanzig"]
  },
  {
    id: "ach", de: "ch [x] — Ach-Laut", ar: "ch الخشنة (ach)",
    how: "بعد a, o, u, au: ‹ch› تُنطق مثل «خ» العربية — هذه سهلة عليك! ‹Buch›، ‹machen›، ‹auch›.",
    pairs: [["Buch", "Bücher"], ["Koch", "Köche"], ["Nacht", "Nächte"], ["Tochter", "Töchter"]],
    words: ["Buch", "machen", "acht", "auch", "Kuchen", "Woche", "noch", "Nacht"]
  },
  {
    id: "r", de: "r [ʁ] / -er [ɐ]", ar: "الراء الألمانية",
    how: "الـ r الألمانية تُنطق من الحلق وتشبه «غ» خفيفة جدًا، وليست راءً مكررة. وفي آخر الكلمة (‑er) تصبح تقريبًا «ا» خفيفة: ‹Lehrer› ≈ «ليرا».",
    pairs: [["Rat", "Grad"], ["Bär", "Bären"], ["Lehrer", "Lehre"]],
    words: ["rot", "Brot", "Frau", "Straße", "drei", "Vater", "Lehrer", "immer"]
  },
  {
    id: "pb", de: "p ≠ b", ar: "p و b",
    how: "صوت ‹p› غير موجود في العربية. ضع شفتيك كأنك تقول «ب» لكن دون اهتزاز الحنجرة، مع نفخة هواء قوية (ضع ورقة أمام فمك: يجب أن تتحرك مع p).",
    pairs: [["Paar", "Bar"], ["packen", "backen"], ["Pein", "Bein"], ["Oper", "Ober"], ["Platz", "Blatz"]],
    words: ["Papier", "Pause", "Post", "Pizza", "Apfel", "Suppe", "Polen", "Prüfung"]
  },
  {
    id: "fv", de: "f / v / w", ar: "f و v و w",
    how: "‹f› و‹v› في الكلمات الألمانية = «ف». ‹w› = [v] مثل الفرنسية (ڤ): الشفة السفلى على الأسنان العليا مع اهتزاز الحنجرة.",
    pairs: [["vier", "wir"], ["fein", "Wein"], ["Vetter", "Wetter"], ["fahren", "wahren"]],
    words: ["Wasser", "Wohnung", "wie", "Vater", "viel", "Farbe", "Woche", "Wien"]
  },
  {
    id: "ei", de: "ei / ie / eu", ar: "ei و ie و eu",
    how: "‹ei› = «آي» (‹drei, mein›). ‹ie› = «إي» طويلة (‹vier, Liebe›). ‹eu› و‹äu› = «أوي» (‹neu, Häuser›). خطأ شائع: قراءة ‹ie› مثل «آي».",
    pairs: [["Wein", "Wien"], ["mein", "Miene"], ["Leid", "Lied"], ["neun", "nein"]],
    words: ["Zeit", "Arbeit", "Bier", "spielen", "Deutsch", "Freund", "heute", "Häuser"]
  },
  {
    id: "z", de: "z [ts]", ar: "z = تس",
    how: "‹z› في الألمانية تُنطق دائمًا «تس» وليست «ز»: ‹Zimmer› = «تسيمر». و‹s› في بداية الكلمة قبل حرف علة تُنطق «ز»: ‹Sonne› = «زونه».",
    pairs: [["Zahl", "Saal"], ["Zoo", "so"], ["reizen", "reisen"]],
    words: ["Zimmer", "zehn", "Zeit", "zwei", "Platz", "Pizza", "Sonne", "Salat"]
  },
  {
    id: "h", de: "h", ar: "حرف h",
    how: "‹h› في بداية الكلمة أو المقطع تُنطق «هـ» خفيفة: ‹Haus, Hallo›. أما بعد حرف علة فلا تُنطق، بل تُطيل حرف العلة فقط: ‹gehen, Uhr, Bahn›.",
    pairs: [["Haus", "aus"], ["hier", "ihr"], ["Hund", "und"]],
    words: ["Hallo", "Haus", "heute", "Uhr", "gehen", "Bahn", "wohnen", "Lehrer"]
  },
  {
    id: "end", de: "b/d/g في آخر الكلمة", ar: "تصلّب الحروف في آخر الكلمة",
    how: "في آخر الكلمة أو المقطع: ‹b› تُنطق p، ‹d› تُنطق t، ‹g› تُنطق k: ‹Tag› = «تاك»، ‹Hund› = «هونت»، ‹halb› = «هالپ». و‹‑ig› في الآخر تُنطق مثل ‹ich›: ‹zwanzig›.",
    pairs: [["Tag", "Tage"], ["Hund", "Hunde"], ["gelb", "gelbe"]],
    words: ["Tag", "Abend", "halb", "Freund", "Weg", "Montag", "Kind", "zwanzig"]
  }
];

/* Start Deutsch 1 practice (original items in the exam format) */
window.COURSE.exam = {
  title: "تدريب على امتحان Start Deutsch 1",
  intro: "بعد إنهاء الكتاب يمكنك اجتياز امتحان «Start Deutsch 1» (Goethe / ÖSD). الامتحان أربعة أجزاء: الاستماع، القراءة، الكتابة، المحادثة — لكل جزء 25 نقطة، والنجاح من 60 نقطة. هذا تدريب بأسئلة جديدة بنفس الشكل.",
  parts: [
    {
      id: "hoeren", de: "Hören", ar: "الاستماع", info: "استمع إلى محادثات وإعلانات قصيرة. يمكنك إعادة الاستماع مرتين في التدريب.",
      items: [
        { t: "listen", say: "Entschuldigung, wann fährt der Zug nach Hamburg? – Um vierzehn Uhr zehn, von Gleis drei.", q: "متى ينطلق القطار إلى هامبورغ؟", o: ["14:10", "13:10", "14:30"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Was kostet der Pullover? – Er kostet neunundzwanzig Euro neunzig.", q: "كم ثمن الكنزة؟", o: ["29,90 €", "92,90 €", "19,90 €"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Achtung, eine Durchsage: Der Bus Nummer fünf fährt heute nicht zum Bahnhof. Bitte nehmen Sie die Straßenbahn.", q: "ماذا يجب أن يفعل الركاب؟", o: ["أخذ الترام", "انتظار الحافلة", "المشي"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Liebe Kunden, heute im Angebot: Tomaten, ein Kilo nur ein Euro neunundneunzig.", q: "ما العرض اليوم؟", o: ["الطماطم", "التفاح", "البطاطس"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Hallo Markus, hier ist Iris. Ich kann morgen leider nicht um zwei. Geht es um drei? Ruf mich bitte zurück.", q: "متى تستطيع إيريس غدًا؟", o: ["الساعة 3", "الساعة 2", "لا تستطيع"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Guten Tag, hier ist die Praxis Doktor Maier. Ihr Termin ist nicht am Montag, sondern am Dienstag um neun Uhr.", q: "متى الموعد الجديد؟", o: ["الثلاثاء 9:00", "الاثنين 9:00", "الثلاثاء 10:00"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Wo wohnst du jetzt? – In der Bachstraße, Nummer zwölf, gleich neben dem Supermarkt.", q: "أين يسكن؟", o: ["في شارع باخ 12", "في شارع باخ 20", "في السوبرماركت"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Sebastian, deine Wäsche ist fertig. Du kannst sie am Freitag ab zehn Uhr abholen.", q: "متى يمكن أخذ الغسيل؟", o: ["الجمعة من 10", "السبت من 10", "الجمعة حتى 10"], a: 0, tag: "hoeren" }
      ]
    },
    {
      id: "lesen", de: "Lesen", ar: "القراءة", info: "اقرأ رسائل وإعلانات ولافتات قصيرة وأجب.",
      items: [
        { t: "read", title: "Eine Nachricht", text: "Liebe Sara, ich bin heute leider krank und kann nicht zum Deutschkurs kommen. Kannst du mir bitte die Hausaufgaben per Mail schicken? Morgen bin ich hoffentlich wieder gesund. Danke und liebe Grüße, Nadia", tr: "عزيزتي سارة، أنا مريضة اليوم للأسف ولا أستطيع الحضور إلى دورة الألمانية. هل يمكنك أن ترسلي لي الواجبات عبر البريد؟ غدًا أتمنى أن أكون قد تعافيت. شكرًا وتحياتي، نادية", items: [
          { t: "tf", s: "Nadia kommt heute nicht zum Kurs.", a: true, why: "‹kann nicht zum Deutschkurs kommen›." },
          { t: "tf", s: "Sara soll die Hausaufgaben per Post schicken.", a: false, why: "عبر البريد الإلكتروني: ‹per Mail›." }
        ], tag: "lesen" },
        { t: "mc", q: "تريد استئجار غرفة رخيصة لمدة شهر في فيينا. أي إعلان تختار؟", o: ["Zimmer auf Zeit in Wien – möbliert, ab 280 € im Monat.", "Luxushotel Wien – Doppelzimmer ab 250 € pro Nacht."], a: 0, why: "الأول غرفة مؤقتة ورخيصة شهريًا.", tag: "lesen" },
        { t: "mc", q: "تريد ممارسة الرياضة مساءً. أي إعلان يناسبك؟", o: ["Lauftreff: jeden Dienstag um 19 Uhr im Stadtpark.", "Morgensport: Montag und Mittwoch um 6.30 Uhr."], a: 0, why: "الساعة 19 مساءً.", tag: "lesen" },
        { t: "read", title: "Schild an der Tür", text: "Praxis Dr. Weber – Sprechzeiten: Mo–Fr 8.00–12.00 Uhr, Di und Do auch 15.00–18.00 Uhr. Mittwochnachmittag geschlossen.", tr: "عيادة د. فيبر – أوقات الاستقبال: الاثنين إلى الجمعة 8–12، والثلاثاء والخميس أيضًا 15–18. مساء الأربعاء مغلق.", items: [
          { t: "tf", s: "Am Donnerstag um 16 Uhr ist die Praxis geöffnet.", a: true, why: "الخميس 15–18." },
          { t: "tf", s: "Am Mittwoch um 16 Uhr kann man zum Arzt gehen.", a: false, why: "‹Mittwochnachmittag geschlossen›." }
        ], tag: "lesen" },
        { t: "read", title: "Im Kaufhaus", text: "Erdgeschoss: Kosmetik, Taschen · 1. Stock: Damenmode · 2. Stock: Herrenmode, Schuhe · 3. Stock: Möbel, Lampen · 4. Stock: Restaurant", tr: "الطابق الأرضي: مستحضرات تجميل، حقائب · الأول: أزياء نسائية · الثاني: أزياء رجالية، أحذية · الثالث: أثاث، مصابيح · الرابع: مطعم", items: [
          { t: "tf", s: "Eine Lampe finden Sie im 3. Stock.", a: true, why: "‹3. Stock: Möbel, Lampen›." },
          { t: "tf", s: "Schuhe gibt es im Erdgeschoss.", a: false, why: "الأحذية في الطابق الثاني." }
        ], tag: "lesen" }
      ]
    },
    {
      id: "schreiben", de: "Schreiben", ar: "الكتابة", info: "الجزء 1: املأ استمارة. الجزء 2: اكتب رسالة قصيرة (حوالي 30 كلمة) تجيب فيها عن ثلاث نقاط.",
      form: {
        ar: "صديقك عمر بنعلي (32 سنة) يريد تسجيل ابنته ياسمين (6 سنوات) في دورة سباحة للمبتدئين بعد الظهر. يسكن في Goethestraße 25، 45127 Essen. املأ الخانات الناقصة.",
        fields: [
          { label: "Nachname des Kindes", a: ["Benali"] },
          { label: "Vorname des Kindes", a: ["Yasmin", "Yasmine"] },
          { label: "Alter", a: ["6", "sechs", "6 Jahre"] },
          { label: "Postleitzahl / Ort", a: ["45127 Essen"] },
          { label: "Kurs (Vormittag / Nachmittag / Abend)", a: ["Nachmittag", "Nachmittagskurs"] }
        ]
      },
      letter: {
        ar: "تريد زيارة برلين في يوليو. اكتب لمكتب السياحة: 1) لماذا تكتب؟ 2) اطلب معلومات عن المتاحف والجولات. 3) اسأل عن فندق رخيص. ابدأ بتحية واختم بتحية.",
        de: "Sie möchten im Juli Berlin besuchen. Schreiben Sie an die Touristeninformation.",
        model: "Sehr geehrte Damen und Herren,\nich möchte im Juli eine Woche nach Berlin fahren. Bitte schicken Sie mir Informationen über Museen und Stadtführungen. Können Sie mir auch ein billiges Hotel empfehlen?\nMit freundlichen Grüßen\nKarim Amrani",
        check: ["تحية رسمية", "سبب الكتابة", "طلب معلومات عن المتاحف والجولات", "سؤال عن فندق رخيص", "تحية ختامية", "حوالي 30 كلمة"]
      }
    },
    {
      id: "sprechen", de: "Sprechen", ar: "المحادثة", info: "في الامتحان تتحدث مع مجموعة صغيرة. تدرّب هنا على الأجزاء الثلاثة بصوت عالٍ.",
      intro: { ar: "الجزء 1: قدّم نفسك باستعمال هذه الكلمات.", keys: ["Name?", "Alter?", "Land?", "Wohnort?", "Sprachen?", "Beruf?", "Hobby?"], model: "Ich heiße Karim. Ich bin 28 Jahre alt. Ich komme aus Marokko und wohne in Errachidia. Ich spreche Arabisch, Französisch und ein bisschen Deutsch. Ich arbeite im Büro. Mein Hobby ist Lesen." },
      cards: [
        { theme: "Freizeit", word: "Wochenende", q: "Was machst du am Wochenende?", a: "Am Wochenende schlafe ich lange und treffe Freunde." },
        { theme: "Freizeit", word: "Sport", q: "Machst du gern Sport?", a: "Ja, ich laufe gern im Park." },
        { theme: "Freizeit", word: "Kino", q: "Gehst du gern ins Kino?", a: "Ja, ich gehe einmal im Monat ins Kino." },
        { theme: "Essen", word: "Frühstück", q: "Was isst du zum Frühstück?", a: "Zum Frühstück esse ich Brot mit Käse und trinke Tee." },
        { theme: "Essen", word: "Lieblingsessen", q: "Was ist dein Lieblingsessen?", a: "Mein Lieblingsessen ist Couscous." },
        { theme: "Essen", word: "Kochen", q: "Kochst du gern?", a: "Ja, am Sonntag koche ich für meine Familie." }
      ],
      requests: [
        { word: "Stift", a: "Gib mir bitte einen Stift! – Ja, gern, hier ist er." },
        { word: "Fenster", a: "Mach bitte das Fenster auf! – Ja, natürlich." },
        { word: "Wasser", a: "Kannst du mir bitte ein Glas Wasser geben? – Ja, gern." },
        { word: "Handy", a: "Darf ich bitte dein Handy benutzen? – Ja, kein Problem." }
      ]
    }
  ]
};
