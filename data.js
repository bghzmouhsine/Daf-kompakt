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

/* Lektion 9 (A2) — Gesund und munter */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 9,
  level: "A2",
  de: "Gesund und munter",
  ar: "بصحة وعافية",
  book: "منهج A2 · محتوى أصلي (الصحة والجسم والطبيب)",
  goals: [
    "تسمية أعضاء الجسم ووصف الألم والمرض",
    "استعمال ضمائر Dativ: mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen",
    "حجز موعد عند الطبيب وفهم تعليمات الدواء",
    "التعليل بجملة weil (الفعل في آخر الجملة)",
    "إعطاء نصيحة بـ ‹Du solltest …› و‹An deiner Stelle würde ich …›"
  ],
  units: [
    /* ───────────── 9A ───────────── */
    {
      id: "9A", de: "Was fehlt dir?", ar: "ما بك؟",
      summary: "أعضاء الجسم، الأمراض الشائعة، ‹Mir tut … weh›، ضمائر Dativ والأفعال التي تأخذ Dativ (helfen, gefallen, schmecken, wehtun).",
      grammar: [
        {
          h: "ضمائر Dativ (لِـ / إلى)",
          p: "بعض الأفعال تأخذ مفعولًا في حالة **Dativ** وليس Akkusativ. تعلّم الضمائر الثلاثة معًا:",
          table: {
            head: ["Nominativ", "Akkusativ", "Dativ", "مثال بـ Dativ"],
            rows: [
              ["‹ich›", "‹mich›", "‹mir›", "‹Kannst du mir helfen?›"],
              ["‹du›", "‹dich›", "‹dir›", "‹Wie geht es dir?›"],
              ["‹er›", "‹ihn›", "‹ihm›", "‹Der Kopf tut ihm weh.›"],
              ["‹sie›", "‹sie›", "‹ihr›", "‹Das Kleid gefällt ihr.›"],
              ["‹es›", "‹es›", "‹ihm›", "‹Das Kind ist krank. Ich helfe ihm.›"],
              ["‹wir›", "‹uns›", "‹uns›", "‹Das Essen schmeckt uns.›"],
              ["‹ihr›", "‹euch›", "‹euch›", "‹Wie geht es euch?›"],
              ["‹sie / Sie›", "‹sie / Sie›", "‹ihnen / Ihnen›", "‹Was fehlt Ihnen?›"]
            ]
          },
          tip: "انتبه: ‹uns› و‹euch› لهما الشكل نفسه في Akkusativ و Dativ. أما ‹mich/mir› و‹dich/dir› و‹ihn/ihm› فمختلفة — وهنا يخطئ المتعلّمون كثيرًا."
        },
        {
          h: "أفعال تأخذ Dativ",
          table: {
            head: ["الفعل", "المعنى", "مثال"],
            rows: [
              ["‹wehtun›", "يؤلم", "‹Mein Bein tut mir weh.›"],
              ["‹helfen›", "يساعد", "‹Die Ärztin hilft dem Patienten.›"],
              ["‹gefallen›", "يعجب", "‹Die Wohnung gefällt mir.›"],
              ["‹schmecken›", "يكون لذيذًا لـ", "‹Schmeckt dir die Suppe?›"],
              ["‹gehören›", "يكون ملكًا لـ", "‹Gehört das Handy dir?›"],
              ["‹passen›", "يناسب (المقاس/الوقت)", "‹Passt Ihnen der Termin?›"],
              ["‹danken›", "يشكر", "‹Ich danke Ihnen!›"],
              ["‹fehlen›", "ينقص / ما بك؟", "‹Was fehlt dir?›"]
            ]
          },
          tip: "الشيء الذي يؤلم أو يعجب هو **الفاعل**، والشخص في Dativ: ‹Der Kopf tut mir weh› = الرأس يؤلمني. لذلك مع الجمع يتغيّر الفعل: ‹Die Füße tun mir weh.›"
        },
        {
          h: "كيف تصف المرض؟",
          table: {
            head: ["الألمانية", "العربية"],
            rows: [
              ["‹Ich habe Kopfschmerzen / Bauchschmerzen / Halsschmerzen.›", "عندي صداع / ألم في البطن / ألم في الحلق."],
              ["‹Mir tut der Rücken weh.›", "ظهري يؤلمني."],
              ["‹Ich habe Fieber / Husten / Schnupfen.›", "عندي حمّى / سعال / زكام."],
              ["‹Ich bin erkältet.›", "أنا مصاب بالبرد."],
              ["‹Mir ist schlecht / kalt / schwindlig.›", "أشعر بالغثيان / بالبرد / بالدوار."],
              ["‹Ich fühle mich nicht gut.›", "لا أشعر أنني بخير."]
            ]
          },
          ex: [["Was fehlt dir? – Ich habe Halsschmerzen.", "ما بك؟ – عندي ألم في الحلق."], ["Mir ist schlecht. Ich habe zu viel gegessen.", "أشعر بالغثيان. أكلت كثيرًا."], ["Gute Besserung!", "شفاك الله! (أتمنى لك الشفاء)"]]
        },
        {
          h: "‹mein› في Dativ",
          p: "أدوات الملكية تأخذ نهايات Dativ مثل ‹einem / einer›: ‹Ich helfe **meinem** Bruder.› ‹Ich gebe **meiner** Mutter die Tabletten.› الجمع: ‹meinen Eltern›.",
          ex: [["Ich telefoniere mit meiner Ärztin.", "أتصل بطبيبتي."], ["Das Buch gehört meinem Freund.", "الكتاب لصديقي."]]
        }
      ],
      vocab: [
        ["n", "der", "Körper", "-", "الجسم", "Der Körper braucht Bewegung.", "الجسم يحتاج إلى الحركة."],
        ["n", "der", "Kopf", "¨-e", "الرأس", "Mein Kopf tut weh.", "رأسي يؤلمني."],
        ["n", "das", "Gesicht", "-er", "الوجه", "Sie hat ein freundliches Gesicht.", "لها وجه بشوش."],
        ["n", "das", "Auge", "-n", "العين", "Meine Augen sind müde.", "عيناي متعبتان."],
        ["n", "das", "Ohr", "-en", "الأذن", "Das Kind hat Ohrenschmerzen.", "الطفل يشكو من ألم في الأذن."],
        ["n", "die", "Nase", "-n", "الأنف", "Meine Nase läuft.", "أنفي يسيل."],
        ["n", "der", "Mund", "¨-er", "الفم", "Mach bitte den Mund auf!", "افتح فمك من فضلك!"],
        ["n", "der", "Zahn", "¨-e", "السن", "Ich putze zweimal am Tag die Zähne.", "أنظّف أسناني مرتين في اليوم."],
        ["n", "der", "Hals", "¨-e", "الحلق / الرقبة", "Mein Hals tut weh.", "حلقي يؤلمني."],
        ["n", "die", "Schulter", "-n", "الكتف", "Meine Schulter tut beim Sport weh.", "كتفي يؤلمني أثناء الرياضة."],
        ["n", "der", "Arm", "-e", "الذراع", "Er hat sich den Arm gebrochen.", "كسر ذراعه."],
        ["n", "die", "Hand", "¨-e", "اليد", "Wasch dir die Hände!", "اغسل يديك!"],
        ["n", "der", "Finger", "-", "الإصبع", "Ich habe mich in den Finger geschnitten.", "جرحت إصبعي."],
        ["n", "der", "Bauch", "¨-e", "البطن", "Mir tut der Bauch weh.", "بطني يؤلمني."],
        ["n", "der", "Rücken", "-", "الظهر", "Vom Sitzen tut mir der Rücken weh.", "ظهري يؤلمني من الجلوس."],
        ["n", "das", "Bein", "-e", "الساق / الرجل", "Nach dem Lauf tun mir die Beine weh.", "بعد الجري تؤلمني ساقاي."],
        ["n", "das", "Knie", "-", "الركبة", "Mein Knie ist geschwollen.", "ركبتي متورّمة."],
        ["n", "der", "Fuß", "¨-e", "القدم", "Meine Füße sind kalt.", "قدماي باردتان."],
        ["n", "das", "Herz", "-en", "القلب", "Das Herz schlägt schnell.", "القلب يدق بسرعة."],
        ["n", "die", "Kopfschmerzen", "Pl.", "الصداع", "Ich habe starke Kopfschmerzen.", "عندي صداع شديد."],
        ["n", "die", "Bauchschmerzen", "Pl.", "ألم البطن", "Nach dem Essen habe ich Bauchschmerzen.", "بعد الأكل يؤلمني بطني."],
        ["n", "die", "Halsschmerzen", "Pl.", "ألم الحلق", "Tee mit Honig hilft gegen Halsschmerzen.", "الشاي بالعسل يفيد ضد ألم الحلق."],
        ["n", "das", "Fieber", "Sg.", "الحمّى", "Das Kind hat hohes Fieber.", "الطفل عنده حمّى مرتفعة."],
        ["n", "der", "Husten", "Sg.", "السعال", "Ich habe seit drei Tagen Husten.", "عندي سعال منذ ثلاثة أيام."],
        ["n", "der", "Schnupfen", "Sg.", "الزكام", "Im Winter habe ich oft Schnupfen.", "في الشتاء أُصاب بالزكام كثيرًا."],
        ["n", "die", "Erkältung", "-en", "نزلة البرد", "Ich habe eine Erkältung.", "عندي نزلة برد."],
        ["n", "die", "Besserung", "Sg.", "التحسّن / الشفاء", "Gute Besserung!", "شفاك الله!"],
        ["v", "", "wehtun", "es tut weh", "يؤلم", "Was tut dir weh?", "ما الذي يؤلمك؟"],
        ["v", "", "fehlen", "was fehlt dir?", "ينقص / ما بك", "Was fehlt Ihnen denn?", "ما بك إذن؟"],
        ["v", "", "husten", "hat gehustet", "يسعل", "Er hustet die ganze Nacht.", "يسعل طوال الليل."],
        ["v", "", "niesen", "hat geniest", "يعطس", "Sie niest ständig.", "تعطس باستمرار."],
        ["v", "", "helfen", "er hilft, hat geholfen", "يساعد", "Kannst du mir bitte helfen?", "هل يمكنك مساعدتي من فضلك؟"],
        ["a", "", "müde", "", "متعب / نعسان", "Ich bin heute sehr müde.", "أنا متعب جدًا اليوم."],
        ["a", "", "erkältet", "", "مصاب بالبرد", "Bist du erkältet?", "هل أنت مصاب بالبرد؟"],
        ["a", "", "schwindlig", "", "دائخ", "Mir ist schwindlig.", "أشعر بالدوار."],
        ["a", "", "stark", "", "قوي / شديد", "Die Schmerzen sind sehr stark.", "الآلام شديدة جدًا."],
        ["a", "", "geschwollen", "", "متورّم", "Der Fuß ist geschwollen.", "القدم متورّمة."],
        ["x", "", "mir / dir / ihm / ihr", "Dativ", "لي / لك / له / لها", "Das gefällt mir.", "هذا يعجبني."],
        ["x", "", "Gute Besserung!", "", "شفاك الله!", "Du bist krank? Gute Besserung!", "أنت مريض؟ شفاك الله!"],
        ["x", "", "Mir ist schlecht.", "", "أشعر بالغثيان.", "Mir ist schlecht, ich gehe nach Hause.", "أشعر بالغثيان، سأذهب إلى البيت."]
      ],
      phrases: [
        ["Was fehlt dir? – Mir tut der Kopf weh.", "ما بك؟ – رأسي يؤلمني."],
        ["Ich habe Fieber und Halsschmerzen.", "عندي حمّى وألم في الحلق."],
        ["Mir ist kalt und ein bisschen schwindlig.", "أشعر بالبرد وبدوار خفيف."],
        ["Kannst du mir helfen?", "هل يمكنك مساعدتي؟"],
        ["Die Füße tun mir weh.", "قدماي تؤلمانني."],
        ["Du Armer! Gute Besserung!", "يا مسكين! شفاك الله!"],
        ["Wie geht es Ihnen heute?", "كيف حالك اليوم؟ (رسمي)"]
      ],
      ex: [
        { t: "gap", q: "أكمل بضمير Dativ.", s: "Der Kopf tut ___ weh. (ich)", a: ["mir"], why: "‹ich› في Dativ = ‹mir›.", tag: "dativpron" },
        { t: "gap", q: "أكمل بضمير Dativ.", s: "Wie geht es ___? (du)", a: ["dir"], why: "‹Wie geht es dir?› — ‹du› في Dativ = ‹dir›.", tag: "dativpron" },
        { t: "gap", q: "أكمل بضمير Dativ.", s: "Die Suppe schmeckt ___ nicht. (er)", a: ["ihm"], why: "‹er› في Dativ = ‹ihm›.", tag: "dativpron" },
        { t: "gap", q: "أكمل بضمير Dativ.", s: "Das Kleid gefällt ___ sehr gut. (sie, هي)", a: ["ihr"], why: "‹sie› (مفرد مؤنث) في Dativ = ‹ihr›.", tag: "dativpron" },
        { t: "gap", q: "أكمل بضمير Dativ (رسمي).", s: "Was fehlt ___ denn, Herr Kaya? (Sie)", a: ["Ihnen"], why: "الرسمي ‹Sie› في Dativ = ‹Ihnen› بحرف كبير.", tag: "dativpron" },
        { t: "mc", q: "اختر الصحيح.", s: "Kannst du ___ helfen?", o: ["mir", "mich", "ich"], a: 0, why: "‹helfen› يأخذ Dativ: ‹mir›.", wrong: { mich: "‹mich› Akkusativ. ‹helfen› فعل يأخذ Dativ." }, tag: "dativpron" },
        { t: "mc", q: "اختر الصحيح.", s: "Mir ___ die Beine weh.", o: ["tun", "tut", "tue"], a: 0, why: "الفاعل ‹die Beine› جمع → ‹tun›.", tag: "dativpron" },
        { t: "mc", q: "اختر الصحيح.", s: "Mir ___ der Bauch weh.", o: ["tut", "tun", "tust"], a: 0, why: "الفاعل ‹der Bauch› مفرد → ‹tut›.", tag: "dativpron" },
        { t: "mc", q: "اختر الصحيح.", s: "Wir besuchen Oma, denn wir wollen ___ helfen. (sie = Oma)", o: ["ihr", "sie", "ihnen"], a: 0, why: "‹helfen› + Dativ، و‹Oma› مفرد مؤنث → ‹ihr›.", tag: "dativpron" },
        { t: "mc", q: "اختر الصحيح.", s: "Ich helfe ___ Bruder bei den Hausaufgaben.", o: ["meinem", "meinen", "mein"], a: 0, why: "‹helfen› + Dativ، و‹der Bruder› مذكر → ‹meinem›.", tag: "dativ" },
        { t: "match", q: "صِل العضو بمعناه.", pairs: [["der Kopf", "الرأس"], ["der Rücken", "الظهر"], ["der Hals", "الحلق"], ["das Knie", "الركبة"], ["der Bauch", "البطن"]], tag: "gesundheit" },
        { t: "mc", q: "ماذا يعني ‹Mir ist schwindlig›؟", o: ["أشعر بالدوار", "أنا جائع", "أشعر بالبرد"], a: 0, why: "‹schwindlig› = دائخ.", tag: "gesundheit" },
        { t: "order", q: "رتّب الجملة.", a: "Mir tut der Rücken weh.", why: "‹Mir› في المكان الأول، ثم الفعل ‹tut›، ثم الفاعل، و‹weh› في الآخر.", tag: "dativpron" },
        { t: "order", q: "رتّب السؤال.", a: "Was fehlt dir denn?", why: "سؤال W: ‹Was› + الفعل + ‹dir›.", tag: "dativpron" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "عندي صداع وحمّى.", a: ["Ich habe Kopfschmerzen und Fieber.", "Ich habe Fieber und Kopfschmerzen."], tag: "gesundheit" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "هل يمكنك مساعدتي؟", a: ["Kannst du mir helfen?", "Können Sie mir helfen?", "Kannst du mir bitte helfen?", "Können Sie mir bitte helfen?"], tag: "dativpron" },
        { t: "read", title: "Nachricht an die Kursleiterin", text: "Liebe Frau Weber, leider kann ich heute nicht zum Deutschkurs kommen. Ich bin seit gestern erkältet: Ich habe Fieber, Husten und starke Halsschmerzen. Mein Kopf tut auch weh. Morgen gehe ich zum Arzt. Können Sie mir bitte die Hausaufgaben schicken? Vielen Dank und viele Grüße, Samir", tr: "عزيزتي السيدة فيبر، للأسف لا أستطيع المجيء إلى دورة الألمانية اليوم. أنا مصاب بالبرد منذ أمس: عندي حمّى وسعال وألم شديد في الحلق. ورأسي يؤلمني أيضًا. غدًا أذهب إلى الطبيب. هل يمكنك أن ترسلي لي الواجبات من فضلك؟ شكرًا جزيلًا وتحياتي، سمير", items: [
          { t: "tf", s: "Samir ist seit einer Woche krank.", a: false, why: "‹seit gestern› = منذ أمس." },
          { t: "tf", s: "Samir hat Halsschmerzen und Kopfschmerzen.", a: true, why: "‹starke Halsschmerzen … Mein Kopf tut auch weh›." },
          { t: "tf", s: "Samir möchte die Hausaufgaben bekommen.", a: true, why: "‹Können Sie mir bitte die Hausaufgaben schicken?›" }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Du siehst müde aus", ar: "تبدو متعبًا",
        scene: "في الجامعة تلتقي زميلتك سارة. ترى أنك لست بخير وتسألك.",
        who: { A: "Sara" },
        lines: [
          { s: "A", de: "Hallo {FIRST}! Du siehst aber müde aus. Was fehlt dir denn?", ar: "مرحبًا! تبدو متعبًا. ما بك؟" },
          { s: "U", task: "قل: لست بخير. رأسي يؤلمني جدًا.", m: "Mir geht es nicht gut. Mein Kopf tut sehr weh.", ok: ["Mir geht es nicht gut mein Kopf tut sehr weh", "Mir geht es nicht gut mir tut der Kopf sehr weh", "Mir geht es nicht gut der Kopf tut mir sehr weh", "Es geht mir nicht gut *", "Mir geht es nicht gut *"], o: ["Mir geht es nicht gut. Mein Kopf tut sehr weh.", "Ich geht es nicht gut. Mein Kopf tut sehr weh.", "Mir geht es nicht gut. Mein Kopf tun sehr weh."], why: ["", "مع ‹es geht› نستعمل Dativ: ‹Mir geht es …›.", "‹mein Kopf› مفرد → ‹tut›."], ar: "لست بخير. رأسي يؤلمني جدًا." },
          { s: "A", de: "Oh je! Hast du auch Fieber?", ar: "يا إلهي! هل عندك حمّى أيضًا؟" },
          { s: "U", task: "قل: لا، لكن عندي سعال وزكام. أظن أنني مصاب بالبرد.", m: "Nein, aber ich habe Husten und Schnupfen. Ich glaube, ich bin erkältet.", ok: ["Nein aber ich habe Husten und Schnupfen ich glaube ich bin erkältet", "Nein aber ich habe Schnupfen und Husten *", "Nein ich habe Husten und Schnupfen *", "Nein aber ich habe Husten und Schnupfen"], o: ["Nein, aber ich habe Husten und Schnupfen. Ich glaube, ich bin erkältet.", "Nein, aber ich bin Husten und Schnupfen. Ich glaube, ich habe erkältet.", "Nein, aber mir hat Husten und Schnupfen."], why: ["", "‹Ich habe Husten› لكن ‹Ich bin erkältet›.", "مع الأمراض: ‹Ich habe …› وليس Dativ."], ar: "لا، لكن عندي سعال وزكام. أظن أنني مصاب بالبرد." },
          { s: "A", de: "Dann trink viel Tee mit Honig und geh früh ins Bett. Soll ich dir meine Notizen geben?", ar: "إذن اشرب شايًا كثيرًا بالعسل ونم مبكرًا. هل أعطيك ملاحظاتي؟" },
          { s: "U", task: "قل: نعم، هذا لطيف جدًا! شكرًا لك.", m: "Ja, das ist sehr nett! Ich danke dir.", ok: ["Ja das ist sehr nett ich danke dir", "Ja das ist sehr nett danke", "Das ist sehr nett von dir danke", "Ja gern das ist sehr nett *", "Ja das ist nett ich danke dir"], o: ["Ja, das ist sehr nett! Ich danke dir.", "Ja, das ist sehr nett! Ich danke dich.", "Ja, das ist sehr nett! Ich danke du."], why: ["", "‹danken› يأخذ Dativ: ‹dir›.", "‹danken› + Dativ: ‹dir›."], ar: "نعم، هذا لطيف جدًا! شكرًا لك." },
          { s: "A", de: "Gern! Gute Besserung!", ar: "عفوًا! شفاك الله!" }
        ]
      },
      listen: [
        { t: "listen", say: "Ich habe seit zwei Tagen Fieber und mein Hals tut sehr weh.", q: "منذ متى عنده حمّى؟", o: ["منذ يومين", "منذ أسبوعين", "منذ ساعتين"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Nach dem Fußballspiel tun mir die Knie weh.", q: "ما الذي يؤلمه؟", o: ["الركبتان", "الظهر", "الرأس"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Mir ist schlecht. Ich glaube, der Fisch war nicht mehr frisch.", q: "لماذا يشعر بالغثيان؟", o: ["السمك لم يكن طازجًا", "شرب كثيرًا", "عنده صداع"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Mir tut der Kopf weh.", tag: "hoeren" },
        { t: "dict", say: "Kannst du mir helfen?", tag: "hoeren" }
      ]
    },

    /* ───────────── 9B ───────────── */
    {
      id: "9B", de: "In der Arztpraxis", ar: "في عيادة الطبيب",
      summary: "حجز موعد، بطاقة التأمين، الفحص، الوصفة والصيدلية، تعليمات الدواء، التعليل بـ weil والفرق بين weil و denn.",
      grammar: [
        {
          h: "الجملة الفرعية بـ weil: الفعل في الآخر",
          p: "‹weil› = لأنّ. بعدها تأتي **جملة فرعية**: الفاعل بعد ‹weil› مباشرة، والفعل المصرّف ينتقل إلى **آخر الجملة**. وبين الجملتين فاصلة.",
          table: {
            head: ["الجملة الرئيسية", "", "الجملة الفرعية (الفعل في الآخر)"],
            rows: [
              ["‹Ich gehe zum Arzt,›", "‹weil›", "‹ich Fieber **habe**.›"],
              ["‹Samir kommt nicht,›", "‹weil›", "‹er krank **ist**.›"],
              ["‹Ich bleibe im Bett,›", "‹weil›", "‹ich nicht arbeiten **kann**.› (الفعل الناقص في الآخر)"],
              ["‹Ich bin müde,›", "‹weil›", "‹ich früh **aufstehe**.› (المنفصل يلتصق من جديد)"],
              ["‹Er hat Bauchschmerzen,›", "‹weil›", "‹er zu viel gegessen **hat**.› (haben/sein في الآخر)"]
            ]
          },
          tip: "قاعدة ذهبية: في الجملة الفرعية الفعل المصرّف هو **آخر كلمة**. ‹weil ich krank bin› ✓ — ‹weil ich bin krank› ✗."
        },
        {
          h: "weil أم denn؟",
          p: "المعنى نفسه (لأنّ)، لكن الترتيب مختلف: بعد ‹denn› الترتيب العادي (الفعل في المكان الثاني). بعد ‹weil› الفعل في الآخر.",
          table: {
            head: ["denn (ترتيب عادي)", "weil (الفعل في الآخر)"],
            rows: [
              ["‹Ich komme nicht, denn ich **bin** krank.›", "‹Ich komme nicht, weil ich krank **bin**.›"],
              ["‹Er bleibt zu Hause, denn er **hat** Fieber.›", "‹Er bleibt zu Hause, weil er Fieber **hat**.›"]
            ]
          },
          tip: "للإجابة عن ‹Warum?› في الكلام نستعمل كثيرًا ‹weil› وحدها: ‹Warum gehst du nicht zur Arbeit? – Weil ich krank bin.›"
        },
        {
          h: "الجملة الفرعية في البداية",
          p: "إذا بدأت بـ ‹weil›، تأتي الجملة الرئيسية بعدها **وفعلها أولًا**: فعل، فعل. ‹Weil ich krank **bin**, **bleibe** ich zu Hause.›",
          ex: [["Weil ich Fieber habe, gehe ich heute nicht zur Uni.", "لأن عندي حمّى، لن أذهب اليوم إلى الجامعة."], ["Weil die Praxis voll ist, muss ich lange warten.", "لأن العيادة مزدحمة، يجب أن أنتظر طويلًا."]]
        },
        {
          h: "عند الطبيب: جمل مهمة",
          table: {
            head: ["الطبيب / المساعدة", "المريض"],
            rows: [
              ["‹Haben Sie einen Termin?›", "‹Nein, aber es ist dringend.›"],
              ["‹Ihre Versichertenkarte, bitte.›", "‹Hier, bitte.›"],
              ["‹Was fehlt Ihnen?› / ‹Was kann ich für Sie tun?›", "‹Ich habe seit drei Tagen Fieber.›"],
              ["‹Machen Sie bitte den Oberkörper frei.›", "—"],
              ["‹Ich verschreibe Ihnen ein Medikament.›", "‹Wie oft muss ich die Tabletten nehmen?›"],
              ["‹Dreimal täglich nach dem Essen.›", "‹Brauche ich eine Krankschreibung?›"]
            ]
          }
        }
      ],
      vocab: [
        ["n", "die", "Arztpraxis", "=Arztpraxen", "عيادة الطبيب", "Die Arztpraxis ist im zweiten Stock.", "العيادة في الطابق الثاني."],
        ["n", "das", "Wartezimmer", "-", "قاعة الانتظار", "Bitte warten Sie im Wartezimmer.", "انتظر في قاعة الانتظار من فضلك."],
        ["n", "die", "Versichertenkarte", "-n", "بطاقة التأمين الصحي", "Haben Sie Ihre Versichertenkarte dabei?", "هل معك بطاقة التأمين؟"],
        ["n", "die", "Krankenversicherung", "-en", "التأمين الصحي", "In Deutschland braucht jeder eine Krankenversicherung.", "في ألمانيا يحتاج كل شخص إلى تأمين صحي."],
        ["n", "der", "Patient", "-en", "المريض", "Der Patient wartet schon lange.", "المريض ينتظر منذ مدة طويلة."],
        ["n", "die", "Patientin", "-nen", "المريضة", "Die Patientin hat Fieber.", "المريضة عندها حمّى."],
        ["n", "die", "Untersuchung", "-en", "الفحص", "Die Untersuchung dauert zehn Minuten.", "الفحص يستغرق عشر دقائق."],
        ["n", "das", "Rezept", "-e", "الوصفة الطبية", "Die Ärztin schreibt mir ein Rezept.", "الطبيبة تكتب لي وصفة."],
        ["n", "die", "Apotheke", "-n", "الصيدلية", "Mit dem Rezept gehe ich zur Apotheke.", "أذهب بالوصفة إلى الصيدلية."],
        ["n", "das", "Medikament", "-e", "الدواء", "Nehmen Sie das Medikament nach dem Essen.", "خذ الدواء بعد الأكل."],
        ["n", "die", "Tablette", "-n", "القرص (حبة دواء)", "Nehmen Sie dreimal täglich eine Tablette.", "خذ قرصًا ثلاث مرات يوميًا."],
        ["n", "der", "Saft", "¨-e", "الشراب (دواء سائل) / العصير", "Der Hustensaft schmeckt nicht gut.", "شراب السعال طعمه غير جيد."],
        ["n", "die", "Salbe", "-n", "المرهم", "Die Salbe hilft gegen die Schmerzen.", "المرهم يفيد ضد الألم."],
        ["n", "das", "Pflaster", "-", "اللصقة الطبية", "Hast du ein Pflaster für mich?", "هل عندك لصقة لي؟"],
        ["n", "die", "Krankschreibung", "-en", "الشهادة الطبية (إجازة مرضية)", "Ich brauche eine Krankschreibung für meinen Chef.", "أحتاج شهادة طبية لمديري."],
        ["n", "der", "Notfall", "¨-e", "الحالة الطارئة", "Im Notfall rufen Sie 112 an.", "في الحالات الطارئة اتصل بـ 112."],
        ["n", "das", "Krankenhaus", "¨-er", "المستشفى", "Er liegt im Krankenhaus.", "هو في المستشفى."],
        ["n", "der", "Krankenwagen", "-", "سيارة الإسعاف", "Der Krankenwagen kommt sofort.", "سيارة الإسعاف تأتي فورًا."],
        ["n", "der", "Zahnarzt", "¨-e", "طبيب الأسنان", "Ich habe morgen einen Termin beim Zahnarzt.", "عندي غدًا موعد عند طبيب الأسنان."],
        ["n", "die", "Nebenwirkung", "-en", "الأثر الجانبي", "Das Medikament hat keine Nebenwirkungen.", "الدواء ليس له آثار جانبية."],
        ["v", "", "untersuchen", "hat untersucht", "يفحص", "Die Ärztin untersucht den Patienten.", "الطبيبة تفحص المريض."],
        ["v", "", "verschreiben", "hat verschrieben", "يصف (دواء)", "Der Arzt verschreibt mir Tabletten.", "الطبيب يصف لي أقراصًا."],
        ["v", "", "einnehmen", "er nimmt ein, hat eingenommen", "يتناول (دواء)", "Wann soll ich die Tabletten einnehmen?", "متى يجب أن أتناول الأقراص؟"],
        ["v", "", "messen", "er misst, hat gemessen", "يقيس", "Die Krankenschwester misst das Fieber.", "الممرضة تقيس الحرارة."],
        ["v", "", "krankschreiben", "hat krankgeschrieben", "يمنح إجازة مرضية", "Die Ärztin schreibt mich drei Tage krank.", "الطبيبة تعطيني إجازة مرضية ثلاثة أيام."],
        ["v", "", "warten", "hat gewartet", "ينتظر", "Ich warte schon eine Stunde.", "أنتظر منذ ساعة."],
        ["p", "", "weil", "+ Verb am Ende", "لأنّ", "Ich bleibe zu Hause, weil ich krank bin.", "أبقى في البيت لأنني مريض."],
        ["a", "", "dringend", "", "عاجل", "Es ist dringend!", "الأمر عاجل!"],
        ["d", "", "täglich", "", "يوميًا", "Nehmen Sie die Tabletten zweimal täglich.", "خذ الأقراص مرتين يوميًا."],
        ["d", "", "vor dem Essen / nach dem Essen", "", "قبل الأكل / بعد الأكل", "Bitte nach dem Essen einnehmen.", "يُتناول بعد الأكل من فضلك."],
        ["x", "", "einen Termin vereinbaren", "", "يحجز / يتفق على موعد", "Ich möchte einen Termin vereinbaren.", "أريد أن أحجز موعدًا."]
      ],
      phrases: [
        ["Ich möchte einen Termin vereinbaren, weil ich Fieber habe.", "أريد أن أحجز موعدًا لأن عندي حمّى."],
        ["Haben Sie heute noch einen Termin frei?", "هل عندكم موعد شاغر اليوم؟"],
        ["Es ist dringend.", "الأمر عاجل."],
        ["Wie oft muss ich die Tabletten nehmen?", "كم مرة يجب أن أتناول الأقراص؟"],
        ["Dreimal täglich nach dem Essen.", "ثلاث مرات يوميًا بعد الأكل."],
        ["Brauche ich eine Krankschreibung?", "هل أحتاج شهادة طبية؟"],
        ["Ich komme nicht, weil ich krank bin.", "لن آتي لأنني مريض."]
      ],
      ex: [
        { t: "order", q: "رتّب الجملة الفرعية (الفعل في الآخر).", a: "Ich gehe zum Arzt, weil ich Fieber habe.", why: "بعد ‹weil›: الفاعل ثم … ثم الفعل ‹habe› في الآخر.", tag: "nebensatz" },
        { t: "order", q: "رتّب الجملة.", a: "Er kommt nicht, weil er krank ist.", why: "‹weil er krank ist› — الفعل ‹ist› في الآخر.", tag: "nebensatz" },
        { t: "order", q: "رتّب: الجملة الفرعية في البداية.", a: "Weil ich krank bin, bleibe ich zu Hause.", why: "بعد الجملة الفرعية يأتي فعل الجملة الرئيسية أولًا: ‹…, bleibe ich›.", tag: "nebensatz" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Ich trinke viel Tee, weil ___.", o: ["ich Halsschmerzen habe", "ich habe Halsschmerzen", "habe ich Halsschmerzen"], a: 0, why: "بعد ‹weil› الفعل في الآخر.", tag: "nebensatz" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Ich bin müde, denn ___.", o: ["ich habe schlecht geschlafen", "ich schlecht geschlafen habe", "schlecht geschlafen ich habe"], a: 0, why: "بعد ‹denn› الترتيب العادي: الفعل في المكان الثاني.", tag: "nebensatz" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Ich bleibe heute zu Hause, weil ___.", o: ["ich nicht arbeiten kann", "ich kann nicht arbeiten", "ich nicht kann arbeiten"], a: 0, why: "الفعل الناقص المصرّف ‹kann› في آخر الجملة الفرعية.", tag: "nebensatz" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Sie ist müde, weil ___.", o: ["sie jeden Tag um 5 Uhr aufsteht", "sie steht jeden Tag um 5 Uhr auf", "sie jeden Tag um 5 Uhr auf steht"], a: 0, why: "الفعل المنفصل يلتصق في الجملة الفرعية: ‹aufsteht›.", tag: "nebensatz" },
        { t: "gap", q: "أكمل بالفعل الصحيح في آخر الجملة.", s: "Ich nehme eine Tablette, weil mir der Kopf ___.", a: ["wehtut"], hint: "wehtun", why: "‹weil mir der Kopf wehtut› — الفعل المنفصل يُكتب موصولًا في الآخر.", tag: "nebensatz" },
        { t: "gap", q: "أكمل.", s: "Er hat Bauchschmerzen, weil er zu viel gegessen ___.", a: ["hat"], why: "في Perfekt داخل الجملة الفرعية: ‹haben› المصرّف في الآخر.", tag: "nebensatz" },
        { t: "gap", q: "أكمل بـ weil أو denn.", s: "Ich gehe zur Apotheke, ___ ich brauche Tabletten.", a: ["denn"], why: "الفعل ‹brauche› في المكان الثاني → ‹denn›.", tag: "nebensatz" },
        { t: "gap", q: "أكمل بـ weil أو denn.", s: "Ich gehe zur Apotheke, ___ ich Tabletten brauche.", a: ["weil"], why: "الفعل في الآخر → ‹weil›.", tag: "nebensatz" },
        { t: "mc", q: "ماذا يعني ‹Dreimal täglich nach dem Essen›؟", o: ["ثلاث مرات يوميًا بعد الأكل", "ثلاثة أيام قبل الأكل", "مرة كل ثلاثة أيام"], a: 0, why: "‹täglich› = يوميًا، ‹nach dem Essen› = بعد الأكل.", tag: "gesundheit" },
        { t: "match", q: "صِل الكلمة بمعناها.", pairs: [["das Rezept", "الوصفة"], ["die Apotheke", "الصيدلية"], ["das Wartezimmer", "قاعة الانتظار"], ["die Salbe", "المرهم"], ["der Notfall", "الحالة الطارئة"]], tag: "gesundheit" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "لن آتي لأنني مريض.", a: ["Ich komme nicht, weil ich krank bin.", "Ich komme nicht, denn ich bin krank."], tag: "nebensatz" },
        { t: "read", title: "Beipackzettel: Hustensaft", text: "Erwachsene nehmen dreimal täglich 10 ml, Kinder ab 6 Jahren zweimal täglich 5 ml. Nehmen Sie den Saft nach dem Essen ein. Trinken Sie dazu viel Wasser oder Tee. Nehmen Sie den Saft nicht länger als eine Woche. Wenn der Husten nicht besser wird, gehen Sie bitte zum Arzt. Für Kinder unter 6 Jahren ist der Saft nicht geeignet.", tr: "يتناول الكبار 10 مل ثلاث مرات يوميًا، والأطفال من 6 سنوات 5 مل مرتين يوميًا. تناول الشراب بعد الأكل. واشرب معه كثيرًا من الماء أو الشاي. لا تتناول الشراب أكثر من أسبوع. إذا لم يتحسّن السعال فاذهب إلى الطبيب من فضلك. الشراب غير مناسب للأطفال دون 6 سنوات.", items: [
          { t: "tf", s: "Erwachsene nehmen den Saft dreimal am Tag.", a: true, why: "‹Erwachsene nehmen dreimal täglich 10 ml›." },
          { t: "tf", s: "Man nimmt den Saft vor dem Essen.", a: false, why: "‹nach dem Essen›." },
          { t: "tf", s: "Ein Kind mit vier Jahren darf den Saft nehmen.", a: false, why: "‹Für Kinder unter 6 Jahren ist der Saft nicht geeignet.›" }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Ein Termin beim Arzt", ar: "موعد عند الطبيب",
        scene: "تتصل بعيادة الدكتور فولف لأنك مريض. تردّ عليك مساعدة الطبيب السيدة بيكر.",
        who: { A: "Frau Becker" },
        lines: [
          { s: "A", de: "Praxis Dr. Wolf, Becker am Apparat. Guten Morgen!", ar: "عيادة الدكتور فولف، بيكر على الخط. صباح الخير!" },
          { s: "U", task: "حيِّها، قدّم نفسك، واطلب موعدًا لأن عندك حمّى.", m: "Guten Morgen, hier ist {NAME}. Ich möchte einen Termin, weil ich Fieber habe.", ok: ["Guten Morgen hier ist * ich möchte einen Termin weil ich Fieber habe", "Guten Morgen mein Name ist * ich brauche einen Termin weil ich Fieber habe", "Guten Morgen hier ist * ich brauche einen Termin weil ich Fieber habe", "Guten Morgen ich heiße * ich möchte einen Termin weil ich Fieber habe", "* weil ich Fieber habe"], o: ["Guten Morgen, hier ist {NAME}. Ich möchte einen Termin, weil ich Fieber habe.", "Guten Morgen, hier ist {NAME}. Ich möchte einen Termin, weil ich habe Fieber.", "Guten Morgen, hier ist {NAME}. Ich möchte einen Termin, denn ich Fieber habe."], why: ["", "بعد ‹weil› الفعل في الآخر: ‹weil ich Fieber habe›.", "بعد ‹denn› الترتيب العادي: ‹denn ich habe Fieber›."], ar: "صباح الخير، معك … أريد موعدًا لأن عندي حمّى." },
          { s: "A", de: "Seit wann haben Sie Fieber?", ar: "منذ متى عندك حمّى؟" },
          { s: "U", task: "قل: منذ أمس. وحلقي يؤلمني أيضًا.", m: "Seit gestern. Und mein Hals tut auch weh.", ok: ["Seit gestern und mein Hals tut auch weh", "Seit gestern und mir tut auch der Hals weh", "Seit gestern und der Hals tut mir auch weh", "Seit gestern *"], o: ["Seit gestern. Und mein Hals tut auch weh.", "Ab gestern. Und mein Hals tut auch weh.", "Seit gestern. Und mein Hals tun auch weh."], why: ["", "للمدة التي بدأت في الماضي ومستمرة: ‹seit›.", "‹mein Hals› مفرد → ‹tut›."], ar: "منذ أمس. وحلقي يؤلمني أيضًا." },
          { s: "A", de: "Können Sie heute um 11:30 Uhr kommen? Bringen Sie bitte Ihre Versichertenkarte mit.", ar: "هل يمكنك المجيء اليوم في 11:30؟ أحضر معك بطاقة التأمين من فضلك." },
          { s: "U", task: "قل: نعم، الساعة 11:30 تناسبني. هل أحتاج شهادة طبية لعملي؟", m: "Ja, 11:30 Uhr passt mir gut. Brauche ich eine Krankschreibung für die Arbeit?", ok: ["Ja * passt mir gut brauche ich eine Krankschreibung für die Arbeit", "Ja das passt mir gut brauche ich eine Krankschreibung *", "Ja * passt mir brauche ich eine Krankschreibung *", "Ja gern brauche ich eine Krankschreibung *"], o: ["Ja, 11:30 Uhr passt mir gut. Brauche ich eine Krankschreibung für die Arbeit?", "Ja, 11:30 Uhr passt mich gut. Brauche ich eine Krankschreibung für die Arbeit?", "Ja, 11:30 Uhr passt ich gut. Ich brauche eine Krankschreibung für die Arbeit?"], why: ["", "‹passen› + Dativ: ‹mir›.", "‹passen› + Dativ: ‹mir›، وسؤال نعم/لا يبدأ بالفعل."], ar: "نعم، الساعة 11:30 تناسبني. هل أحتاج شهادة طبية لعملي؟" },
          { s: "A", de: "Das bespricht der Doktor mit Ihnen. Bis später, und gute Besserung!", ar: "سيتحدث الطبيب معك عن ذلك. إلى اللقاء، وشفاك الله!" }
        ]
      },
      listen: [
        { t: "listen", say: "Nehmen Sie die Tabletten zweimal täglich, morgens und abends, immer nach dem Essen.", q: "متى يتناول الأقراص؟", o: ["صباحًا ومساءً بعد الأكل", "ثلاث مرات قبل الأكل", "مرة واحدة في المساء"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Die Praxis ist heute bis 18 Uhr geöffnet, aber am Mittwochnachmittag ist sie geschlossen.", q: "متى تكون العيادة مغلقة؟", o: ["يوم الأربعاء بعد الظهر", "اليوم بعد السادسة صباحًا", "يوم الأربعاء صباحًا"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich kann morgen nicht kommen, weil ich einen Termin beim Zahnarzt habe.", q: "لماذا لا يستطيع المجيء غدًا؟", o: ["عنده موعد عند طبيب الأسنان", "هو مريض بالحمّى", "يعمل غدًا"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Ich bleibe zu Hause, weil ich krank bin.", tag: "hoeren" },
        { t: "dict", say: "Ich brauche ein Rezept.", tag: "hoeren" }
      ]
    },

    /* ───────────── 9C ───────────── */
    {
      id: "9C", de: "Gesund leben", ar: "عِش بصحة",
      summary: "نصائح لحياة صحية: النوم، الحركة، الأكل، الضغط النفسي. النصيحة بـ ‹sollte› و‹An deiner Stelle würde ich …›.",
      grammar: [
        {
          h: "النصيحة بـ sollte (Konjunktiv II من sollen)",
          p: "لإعطاء نصيحة مهذبة نستعمل ‹sollte› + مصدر في آخر الجملة (مثل الأفعال الناقصة):",
          table: {
            head: ["الضمير", "sollte", "مثال"],
            rows: [
              ["‹ich›", "‹sollte›", "‹Ich sollte mehr schlafen.›"],
              ["‹du›", "‹solltest›", "‹Du solltest mehr Wasser trinken.›"],
              ["‹er/sie/es›", "‹sollte›", "‹Er sollte nicht so viel arbeiten.›"],
              ["‹wir›", "‹sollten›", "‹Wir sollten öfter spazieren gehen.›"],
              ["‹ihr›", "‹solltet›", "‹Ihr solltet früher ins Bett gehen.›"],
              ["‹sie/Sie›", "‹sollten›", "‹Sie sollten zum Arzt gehen.›"]
            ]
          },
          tip: "‹Du sollst …› = شخص آخر أمرك بذلك (الطبيب قال). ‹Du solltest …› = نصيحة مني لك. ‹Der Arzt sagt, ich soll weniger Kaffee trinken.› / ‹Du solltest weniger Kaffee trinken.›"
        },
        {
          h: "طرق أخرى للنصيحة",
          table: {
            head: ["الصيغة", "مثال"],
            rows: [
              ["الأمر مع ‹doch mal›", "‹Mach doch mal eine Pause!›"],
              ["‹An deiner Stelle würde ich …›", "‹An deiner Stelle würde ich zum Arzt gehen.› (لو كنت مكانك …)"],
              ["‹Es ist gut, wenn …›", "‹Es ist gut, wenn du jeden Tag spazieren gehst.›"],
              ["‹Hast du schon mal … probiert?›", "‹Hast du schon mal Yoga probiert?›"]
            ]
          }
        },
        {
          h: "الفعل الناقص في آخر الجملة: قوس الجملة",
          p: "مع ‹sollte› مثل باقي الأفعال الناقصة: ‹sollte› في المكان الثاني، والمصدر في **الآخر**. والسؤال يبدأ بـ ‹Sollte›: ‹Sollte ich mehr Sport machen?›",
          ex: [["Du solltest jeden Tag eine halbe Stunde spazieren gehen.", "يجب (من الأفضل) أن تمشي نصف ساعة كل يوم."], ["Man sollte abends nicht so lange am Handy sitzen.", "لا ينبغي الجلوس على الهاتف طويلًا في المساء."]]
        }
      ],
      vocab: [
        ["n", "die", "Gesundheit", "Sg.", "الصحة", "Gesundheit ist wichtiger als Geld.", "الصحة أهم من المال."],
        ["n", "die", "Ernährung", "Sg.", "التغذية", "Eine gesunde Ernährung ist wichtig.", "التغذية الصحية مهمة."],
        ["n", "der", "Schlaf", "Sg.", "النوم", "Ich brauche acht Stunden Schlaf.", "أحتاج ثماني ساعات نوم."],
        ["n", "der", "Stress", "Sg.", "الضغط النفسي / التوتر", "Vor der Prüfung habe ich viel Stress.", "قبل الامتحان عندي ضغط كبير."],
        ["n", "die", "Bewegung", "Sg.", "الحركة", "Bewegung ist gut für den Rücken.", "الحركة مفيدة للظهر."],
        ["n", "das", "Vitamin", "-e", "الفيتامين", "Obst hat viele Vitamine.", "الفواكه فيها فيتامينات كثيرة."],
        ["n", "der", "Ratschlag", "¨-e", "النصيحة", "Danke für deinen Ratschlag!", "شكرًا على نصيحتك!"],
        ["n", "der", "Tipp", "-s", "النصيحة / الفكرة", "Hast du einen Tipp für mich?", "هل عندك نصيحة لي؟"],
        ["n", "die", "Pause", "-n", "الاستراحة", "Mach doch mal eine Pause!", "خذ استراحة!"],
        ["n", "der", "Spaziergang", "¨-e", "النزهة سيرًا", "Nach dem Essen mache ich einen Spaziergang.", "بعد الأكل أتمشى."],
        ["n", "die", "Treppe", "-n", "الدرج", "Nimm doch die Treppe und nicht den Aufzug!", "اصعد الدرج وليس المصعد!"],
        ["n", "der", "Aufzug", "¨-e", "المصعد", "Der Aufzug ist kaputt.", "المصعد معطّل."],
        ["n", "die", "Süßigkeit", "-en", "الحلوى", "Kinder lieben Süßigkeiten.", "الأطفال يحبون الحلويات."],
        ["n", "das", "Yoga", "Sg.", "اليوغا", "Yoga hilft gegen Stress.", "اليوغا تفيد ضد التوتر."],
        ["n", "die", "Stelle", "-n", "المكان / الموضع", "An deiner Stelle würde ich schlafen.", "لو كنت مكانك لنمت."],
        ["v", "", "sollte", "du solltest", "ينبغي (نصيحة)", "Du solltest mehr Obst essen.", "ينبغي أن تأكل فواكه أكثر."],
        ["v", "", "spazieren gehen", "ist spazieren gegangen", "يتمشّى", "Wir gehen am Sonntag im Park spazieren.", "نتمشى يوم الأحد في الحديقة."],
        ["v", "", "aufhören (mit + Dat.)", "hört auf, hat aufgehört", "يتوقف (عن)", "Mein Vater hört mit dem Rauchen auf.", "أبي يتوقف عن التدخين."],
        ["v", "", "achten (auf + Akk.)", "hat geachtet", "ينتبه / يهتم (بـ)", "Ich achte auf meine Gesundheit.", "أهتم بصحتي."],
        ["v", "", "ausschlafen", "schläft aus, hat ausgeschlafen", "ينام حتى يشبع", "Am Wochenende schlafe ich aus.", "في عطلة الأسبوع أنام حتى أشبع."],
        ["v", "", "probieren", "hat probiert", "يجرّب", "Probier doch mal Yoga!", "جرّب اليوغا!"],
        ["v", "", "sich bewegen", "hat sich bewegt", "يتحرك", "Du solltest dich mehr bewegen.", "ينبغي أن تتحرك أكثر."],
        ["a", "", "ungesund", "", "غير صحي", "Zu viel Zucker ist ungesund.", "السكر الكثير غير صحي."],
        ["a", "", "regelmäßig", "", "منتظم / بانتظام", "Ich mache regelmäßig Sport.", "أمارس الرياضة بانتظام."],
        ["a", "", "süß", "", "حلو", "Der Kuchen ist sehr süß.", "الكعكة حلوة جدًا."],
        ["a", "", "salzig", "", "مالح", "Die Suppe ist zu salzig.", "الشوربة مالحة أكثر من اللازم."],
        ["a", "", "stressig", "", "مُرهِق / مليء بالضغط", "Mein Job ist sehr stressig.", "عملي مرهق جدًا."],
        ["a", "", "aktiv", "", "نشيط", "Meine Oma ist mit 80 noch sehr aktiv.", "جدتي في الثمانين ما زالت نشيطة جدًا."],
        ["d", "", "genug", "", "كافٍ / بما فيه الكفاية", "Trinkst du genug Wasser?", "هل تشرب ماءً كافيًا؟"],
        ["d", "", "mindestens", "", "على الأقل", "Schlaf mindestens sieben Stunden!", "نم سبع ساعات على الأقل!"],
        ["x", "", "An deiner Stelle würde ich …", "", "لو كنت مكانك لـ …", "An deiner Stelle würde ich früher ins Bett gehen.", "لو كنت مكانك لذهبت إلى النوم أبكر."]
      ],
      phrases: [
        ["Du solltest mehr Wasser trinken.", "ينبغي أن تشرب ماءً أكثر."],
        ["Sie sollten regelmäßig Sport machen.", "ينبغي أن تمارس الرياضة بانتظام."],
        ["Mach doch mal eine Pause!", "خذ استراحة إذن!"],
        ["An deiner Stelle würde ich zum Arzt gehen.", "لو كنت مكانك لذهبت إلى الطبيب."],
        ["Hast du schon mal Yoga probiert?", "هل جرّبت اليوغا من قبل؟"],
        ["Danke für den Tipp!", "شكرًا على النصيحة!"],
        ["Der Arzt sagt, ich soll weniger Kaffee trinken.", "الطبيب يقول إنه يجب أن أشرب قهوة أقل."]
      ],
      ex: [
        { t: "gap", q: "أكمل بـ sollte بالشكل الصحيح.", s: "Du ___ mehr schlafen.", a: ["solltest"], why: "‹du› → ‹solltest›.", tag: "ratschlag" },
        { t: "gap", q: "أكمل بـ sollte بالشكل الصحيح.", s: "Sie ___ zum Arzt gehen, Frau Yilmaz.", a: ["sollten"], why: "‹Sie› (رسمي) → ‹sollten›.", tag: "ratschlag" },
        { t: "gap", q: "أكمل بـ sollte بالشكل الصحيح.", s: "Wir ___ öfter spazieren gehen.", a: ["sollten"], why: "‹wir› → ‹sollten›.", tag: "ratschlag" },
        { t: "gap", q: "أكمل بـ sollte بالشكل الصحيح.", s: "Ihr ___ nicht so viele Süßigkeiten essen.", a: ["solltet"], why: "‹ihr› → ‹solltet›.", tag: "ratschlag" },
        { t: "mc", q: "اختر الصحيح.", s: "Er ___ weniger arbeiten.", o: ["sollte", "solltet", "solltest"], a: 0, why: "‹er› → ‹sollte› (بدون ‑t، مثل ‹ich›).", tag: "ratschlag" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Nadia hat oft Rückenschmerzen. → Sie ___.", o: ["sollte mehr Sport machen", "sollte machen mehr Sport", "mehr Sport sollte machen"], a: 0, why: "‹sollte› في المكان الثاني والمصدر ‹machen› في الآخر.", tag: "ratschlag" },
        { t: "mc", q: "ما الفرق؟ ‹Der Arzt sagt, ich soll Tabletten nehmen.›", o: ["هذا ما قاله الطبيب (تعليمات شخص آخر)", "هذه نصيحتي لنفسي", "هذا في الماضي"], a: 0, why: "‹sollen› = نقل طلب أو تعليمات من شخص آخر. ‹sollte› = نصيحة.", tag: "ratschlag" },
        { t: "mc", q: "اختر النصيحة المناسبة: «Ich bin immer so müde.»", o: ["Du solltest früher ins Bett gehen.", "Du solltest mehr Kaffee am Abend trinken.", "Du solltest nachts lange fernsehen."], a: 0, why: "النصيحة المنطقية: النوم مبكرًا.", tag: "ratschlag" },
        { t: "mc", q: "اختر النصيحة المناسبة: «Ich habe so viel Stress bei der Arbeit.»", o: ["Mach doch mal eine Pause!", "Arbeite doch mal mehr!", "Iss doch mal mehr Süßigkeiten!"], a: 0, why: "مع الضغط: استراحة.", tag: "ratschlag" },
        { t: "order", q: "رتّب النصيحة.", a: "Du solltest mehr Obst und Gemüse essen.", why: "‹solltest› ثانيًا، ‹essen› في الآخر.", tag: "ratschlag" },
        { t: "order", q: "رتّب الجملة.", a: "An deiner Stelle würde ich zum Arzt gehen.", why: "‹An deiner Stelle› في البداية، ثم ‹würde›، ثم ‹ich›، والمصدر ‹gehen› في الآخر.", tag: "ratschlag" },
        { t: "gap", q: "أكمل بحرف الجر.", s: "Mein Vater hört ___ dem Rauchen auf.", a: ["mit"], why: "‹aufhören mit› + Dativ.", tag: "verbpraep" },
        { t: "gap", q: "أكمل بحرف الجر.", s: "Ich achte ___ meine Ernährung.", a: ["auf"], why: "‹achten auf› + Akkusativ.", tag: "verbpraep" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "ينبغي أن تتحرك أكثر.", a: ["Du solltest dich mehr bewegen.", "Sie sollten sich mehr bewegen.", "Ihr solltet euch mehr bewegen."], tag: "ratschlag" },
        { t: "read", title: "Forum: Immer müde – was tun?", text: "Lisa (22): Ich bin immer müde, auch am Morgen. Ich studiere und arbeite abends in einem Café. Was soll ich machen? — Jonas: Du solltest mindestens sieben Stunden schlafen. Und trink am Abend keinen Kaffee! — Maria: An deiner Stelle würde ich weniger arbeiten. Und geh doch mal jeden Tag eine halbe Stunde spazieren, frische Luft hilft wirklich. — Dr. Klein: Wenn die Müdigkeit länger als einen Monat dauert, sollten Sie zum Arzt gehen.", tr: "ليزا (22): أنا متعبة دائمًا، حتى في الصباح. أدرس وأعمل مساءً في مقهى. ماذا أفعل؟ — يوناس: ينبغي أن تنامي سبع ساعات على الأقل. ولا تشربي قهوة في المساء! — ماريا: لو كنت مكانك لعملت أقل. وتمشّي كل يوم نصف ساعة، الهواء النقي يفيد فعلًا. — د. كلاين: إذا استمر التعب أكثر من شهر، فينبغي أن تذهبي إلى الطبيب.", items: [
          { t: "tf", s: "Lisa arbeitet am Abend.", a: true, why: "‹arbeite abends in einem Café›." },
          { t: "tf", s: "Jonas sagt: Lisa sollte am Abend Kaffee trinken.", a: false, why: "‹trink am Abend keinen Kaffee›." },
          { t: "mc", q: "ماذا تنصح ماريا؟", o: ["العمل أقل والمشي يوميًا", "شرب القهوة صباحًا", "الذهاب فورًا إلى الطبيب"], a: 0, why: "‹weniger arbeiten … spazieren gehen›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Ich habe so viel Stress!", ar: "عندي ضغط كبير!",
        scene: "صديقك ماكس متوتر بسبب الامتحانات ولا ينام جيدًا. أعطه نصائح.",
        who: { A: "Max" },
        lines: [
          { s: "A", de: "Ich kann nicht mehr! Nächste Woche habe ich drei Prüfungen und ich schlafe total schlecht.", ar: "لم أعد أحتمل! الأسبوع القادم عندي ثلاثة امتحانات وأنام بشكل سيئ جدًا." },
          { s: "U", task: "انصحه: ينبغي أن تأخذ استراحة وتتمشى قليلًا.", m: "Du solltest eine Pause machen und ein bisschen spazieren gehen.", ok: ["Du solltest eine Pause machen und ein bisschen spazieren gehen", "Du solltest eine Pause machen und spazieren gehen", "Du solltest mal eine Pause machen *", "Mach doch mal eine Pause und geh spazieren", "Du solltest eine Pause machen *"], o: ["Du solltest eine Pause machen und ein bisschen spazieren gehen.", "Du solltest machen eine Pause und ein bisschen spazieren gehen.", "Du sollte eine Pause machen und ein bisschen spazieren gehen."], why: ["", "المصدر ‹machen› يأتي في الآخر.", "‹du› → ‹solltest›."], ar: "ينبغي أن تأخذ استراحة وتتمشى قليلًا." },
          { s: "A", de: "Aber ich habe keine Zeit! Ich lerne bis zwei Uhr nachts und trinke viel Kaffee.", ar: "لكن ليس عندي وقت! أذاكر حتى الثانية ليلًا وأشرب قهوة كثيرة." },
          { s: "U", task: "قل: لو كنت مكانك لما شربت قهوة في المساء. وينبغي أن تنام سبع ساعات على الأقل.", m: "An deiner Stelle würde ich am Abend keinen Kaffee trinken. Und du solltest mindestens sieben Stunden schlafen.", ok: ["An deiner Stelle würde ich am Abend keinen Kaffee trinken und du solltest mindestens sieben Stunden schlafen", "An deiner Stelle würde ich abends keinen Kaffee trinken *", "An deiner Stelle würde ich am Abend keinen Kaffee trinken *", "Du solltest am Abend keinen Kaffee trinken *"], o: ["An deiner Stelle würde ich am Abend keinen Kaffee trinken. Und du solltest mindestens sieben Stunden schlafen.", "An deiner Stelle ich würde am Abend keinen Kaffee trinken. Und du solltest mindestens sieben Stunden schlafen.", "An deiner Stelle würde ich am Abend nicht Kaffee trinken. Und du solltest schlafen mindestens sieben Stunden."], why: ["", "بعد ‹An deiner Stelle› يأتي الفعل ‹würde› ثم ‹ich›.", "النفي مع اسم بلا أداة: ‹keinen Kaffee›، والمصدر ‹schlafen› في الآخر."], ar: "لو كنت مكانك لما شربت قهوة مساءً. وينبغي أن تنام سبع ساعات على الأقل." },
          { s: "A", de: "Hm, vielleicht hast du recht. Was machst du denn gegen Stress?", ar: "هم، ربما أنت محق. وماذا تفعل أنت ضد التوتر؟" },
          { s: "U", task: "قل: أمارس الرياضة بانتظام وأستمع إلى الموسيقى. يجب أن تجرّب ذلك!", m: "Ich mache regelmäßig Sport und höre Musik. Du solltest das auch probieren!", ok: ["Ich mache regelmäßig Sport und höre Musik du solltest das auch probieren", "Ich mache regelmäßig Sport und ich höre Musik *", "Ich mache regelmäßig Sport *", "Ich mache Sport und höre Musik *"], o: ["Ich mache regelmäßig Sport und höre Musik. Du solltest das auch probieren!", "Ich mache regelmäßig Sport und höre Musik. Du solltest das auch probierst!", "Ich regelmäßig mache Sport und höre Musik. Du solltest das auch probieren!"], why: ["", "بعد ‹solltest› المصدر: ‹probieren›.", "الفعل ‹mache› في المكان الثاني: ‹Ich mache regelmäßig …›."], ar: "أمارس الرياضة بانتظام وأستمع إلى الموسيقى. يجب أن تجرّب ذلك!" },
          { s: "A", de: "Okay, danke für die Tipps! Morgen gehe ich joggen.", ar: "حسنًا، شكرًا على النصائح! غدًا سأذهب للركض." }
        ]
      },
      listen: [
        { t: "listen", say: "Sie sollten weniger Salz essen und jeden Tag mindestens zwei Liter Wasser trinken.", q: "ماذا تنصح الطبيبة؟", o: ["ملح أقل وماء أكثر", "سكر أقل وقهوة أكثر", "نوم أقل ورياضة أكثر"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich nehme jetzt immer die Treppe, nicht den Aufzug. Das ist gut für die Beine.", q: "ماذا يفعل المتكلّم الآن؟", o: ["يصعد الدرج", "يأخذ المصعد", "يذهب بالدراجة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Mein Arzt sagt, ich soll mit dem Rauchen aufhören.", q: "ماذا قال الطبيب؟", o: ["أن يتوقف عن التدخين", "أن يدخّن أقل في الصباح", "أن يشرب قهوة أقل"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Du solltest mehr schlafen.", tag: "hoeren" },
        { t: "dict", say: "Mach doch mal eine Pause!", tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "pf, z, tz und Konsonanten-Gruppen", ar: "pf و z و tz ومجموعات الحروف الساكنة",
    body: [
      { p: "في الألمانية تجتمع حروف ساكنة كثيرة دون حرف علة بينها. المتحدث بالعربية يميل إلى إضافة «إ» قبلها أو بينها (‹ِشْبورت›). تدرّب على نطقها متصلة:" },
      { table: { head: ["الحروف", "النطق", "أمثلة"], rows: [
        ["‹pf›", "p و f معًا بسرعة: الشفتان مغلقتان ثم تنفتحان على f", "‹Kopf, Apfel, Pflaster, Schnupfen›"],
        ["‹z› / ‹tz›", "«تس» دائمًا", "‹Zahn, Herz, Arzt, Salz, jetzt, sitzen›"],
        ["‹schm› / ‹schn› / ‹schw›", "«ش» متصلة بالحرف التالي بلا «إ»", "‹Schmerzen, Schnupfen, schwindlig›"],
        ["‹-tzt› / ‹-chts›", "مجموعات في آخر الكلمة", "‹jetzt, nachts, rechts›"]
      ] } },
      { tip: "سرّ ‹pf›: ضع شفتيك كأنك ستقول «ب»، ثم أخرج الهواء على شفتك السفلى كأنك تقول «ف». لا تقل ‹Fflaster› ولا ‹Plaster›. وفي ‹Schmerzen› لا تقل «إشميرتسن»؛ ابدأ مباشرة بـ «شم»." }
    ],
    drills: [
      { t: "listen", say: "der Kopf", q: "ماذا تسمع في آخر ‹Kopf›؟", o: ["pf", "f فقط", "p فقط"], a: 0, why: "‹Kopf› تنتهي بـ ‹pf›: p+f معًا." },
      { t: "listen", say: "das Herz", q: "كيف تُنطق ‹z› في آخر ‹Herz›؟", o: ["«تس»", "«ز»", "«س»"], a: 0, why: "‹z› في الألمانية = «تس» دائمًا." },
      { t: "listen", say: "der Zahn", q: "بأي صوت تبدأ ‹Zahn›؟", o: ["«تس»", "«ز» عربية", "«ث»"], a: 0, why: "‹Z› = «تس»: ‹Zahn› ≈ «تسان»." },
      { t: "listen", say: "die Schmerzen", q: "كم مقطعًا تسمع في ‹Schmerzen›؟", o: ["مقطعين: Schmer-zen", "ثلاثة: I-schmer-zen", "مقطعًا واحدًا"], a: 0, why: "لا نضيف «إ» قبل ‹Schm›: ‹Schmer-zen›." },
      { t: "listen", say: "das Pflaster", q: "بماذا تبدأ ‹Pflaster›؟", o: ["pf", "f", "p"], a: 0, why: "‹Pfl› = p+f+l متصلة." }
    ],
    say: ["der Kopf – die Köpfe", "der Apfel", "das Pflaster", "der Schnupfen", "das Herz", "der Arzt", "jetzt", "die Schmerzen", "Mir tut der Kopf jetzt sehr weh.", "Der Arzt verschreibt mir ein Pflaster und Tropfen gegen Schnupfen.", "Zwei Zahnärzte sitzen zusammen in der Praxis."]
  },

  write: [
    {
      ar: "أنت مريض ولا تستطيع الذهاب إلى العمل/الدورة. اكتب رسالة قصيرة (40–50 كلمة) لمديرك أو معلمتك: اعتذر، قل ما بك ومنذ متى (استعمل weil)، قل متى تذهب إلى الطبيب، واطلب شيئًا (مثل الواجبات أو إرسال الشهادة لاحقًا).",
      de: "Krankmeldung an den Chef / die Kursleiterin.",
      model: "Sehr geehrte Frau Weber,\nleider kann ich heute nicht zum Kurs kommen, weil ich krank bin. Ich habe seit gestern Fieber und starke Halsschmerzen. Heute Nachmittag habe ich einen Termin beim Arzt. Können Sie mir bitte die Hausaufgaben per E-Mail schicken?\nVielen Dank und viele Grüße\nKarim Amrani",
      check: ["تحية رسمية (Sehr geehrte …)", "الاعتذار (leider kann ich nicht …)", "جملة بـ ‹weil› والفعل في آخرها", "ما بك ومنذ متى (seit …)", "موعد الطبيب", "طلب مهذب (Können Sie mir bitte …?)", "تحية ختامية"]
    },
    {
      ar: "صديقك كتب في منتدى: «Ich sitze den ganzen Tag am Computer und habe immer Rückenschmerzen.» اكتب له ثلاث نصائح على الأقل (sollte / An deiner Stelle würde ich … / Mach doch mal …).",
      de: "Tipps im Forum geben.",
      model: "Hallo Tim,\ndas kenne ich! Du solltest jede Stunde eine kurze Pause machen und ein bisschen laufen. An deiner Stelle würde ich auch regelmäßig schwimmen gehen, das ist super für den Rücken. Und mach doch mal Yoga! Gute Besserung!\nSamir",
      check: ["نصيحة بـ ‹solltest› + مصدر في الآخر", "‹An deiner Stelle würde ich …›", "أمر مع ‹doch mal›", "تحية وختام"]
    }
  ],
  tutor: [
    { title: "Beim Arzt", ar: "عند الطبيبة", role: "Frau Dr. Wagner, eine freundliche Hausärztin in der Sprechstunde", goal: "Beschwerden beschreiben (Mir tut … weh, Ich habe Fieber/Husten), seit wann, Fragen zu Medikamenten verstehen und stellen, mit weil begründen", start: "Guten Tag, nehmen Sie bitte Platz. Was fehlt Ihnen denn?" },
    { title: "Eine Freundin braucht Tipps", ar: "صديقة تحتاج نصائح", role: "Julia, eine gestresste Freundin, die schlecht schläft und viel Kaffee trinkt", goal: "Ratschläge geben mit sollte, An deiner Stelle würde ich …, Imperativ mit doch mal; nach Gründen fragen (Warum? – Weil …)", start: "Hallo! Ach, ich bin so müde und gestresst. Ich weiß nicht, was ich machen soll …" }
  ]
});

/* Lektion 10 (A2) — Arbeitswelt */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 10,
  level: "A2",
  de: "Arbeitswelt",
  ar: "عالم العمل",
  book: "منهج A2 · محتوى أصلي (المهن، طلب العمل، الهاتف في المكتب)",
  goals: [
    "الحديث عن مسارك الدراسي والمهني في الماضي",
    "تصريف الأفعال الناقصة في الماضي: konnte, musste, wollte, durfte",
    "فهم إعلان وظيفة وكتابة طلب قصير",
    "التعبير عن الرأي والمعرفة بجملة dass",
    "الطلب المهذب على الهاتف: Könnten Sie …? Würden Sie …? Ich hätte …"
  ],
  units: [
    /* ───────────── 10A ───────────── */
    {
      id: "10A", de: "Mein Weg in den Beruf", ar: "طريقي إلى المهنة",
      summary: "المهن، التكوين والدراسة، حلم الطفولة، الأفعال الناقصة في Präteritum (konnte, musste, wollte, durfte, sollte) و war / hatte.",
      grammar: [
        {
          h: "الأفعال الناقصة في الماضي (Präteritum)",
          p: "للحديث عن الماضي نستعمل مع الأفعال الناقصة **Präteritum** (وليس Perfekt). الشكل: الجذع بدون Umlaut + ‑te.",
          table: {
            head: ["", "können", "müssen", "wollen", "dürfen", "sollen"],
            rows: [
              ["‹ich›", "‹konnte›", "‹musste›", "‹wollte›", "‹durfte›", "‹sollte›"],
              ["‹du›", "‹konntest›", "‹musstest›", "‹wolltest›", "‹durftest›", "‹solltest›"],
              ["‹er/sie/es›", "‹konnte›", "‹musste›", "‹wollte›", "‹durfte›", "‹sollte›"],
              ["‹wir›", "‹konnten›", "‹mussten›", "‹wollten›", "‹durften›", "‹sollten›"],
              ["‹ihr›", "‹konntet›", "‹musstet›", "‹wolltet›", "‹durftet›", "‹solltet›"],
              ["‹sie/Sie›", "‹konnten›", "‹mussten›", "‹wollten›", "‹durften›", "‹sollten›"]
            ]
          },
          tip: "لاحظ: ‹ich› و‹er/sie› لهما الشكل نفسه (بدون نهاية): ‹ich konnte – er konnte›. ولا توجد نقطتا Umlaut: ‹können → konnte›، ‹müssen → musste›."
        },
        {
          h: "الترتيب: الفعل الناقص ثانيًا والمصدر في الآخر",
          ex: [["Als Kind wollte ich Pilot werden.", "في طفولتي كنت أريد أن أصبح طيارًا."], ["Ich musste jeden Tag früh aufstehen.", "كان عليّ أن أستيقظ مبكرًا كل يوم."], ["Wir durften in der Schule kein Handy benutzen.", "لم يكن مسموحًا لنا باستعمال الهاتف في المدرسة."], ["Konntest du damals schon Englisch?", "هل كنت تعرف الإنجليزية آنذاك؟"]]
        },
        {
          h: "تذكير: war و hatte",
          p: "مع ‹sein› و‹haben› نستعمل في الكلام عادة Präteritum أيضًا:",
          table: {
            head: ["", "sein", "haben"],
            rows: [["‹ich›", "‹war›", "‹hatte›"], ["‹du›", "‹warst›", "‹hattest›"], ["‹er/sie/es›", "‹war›", "‹hatte›"], ["‹wir›", "‹waren›", "‹hatten›"], ["‹ihr›", "‹wart›", "‹hattet›"], ["‹sie/Sie›", "‹waren›", "‹hatten›"]]
          },
          tip: "باقي الأفعال في الكلام: Perfekt (‹ich habe gearbeitet›). أما الأفعال الناقصة و sein و haben: Präteritum (‹ich musste›, ‹ich war›, ‹ich hatte›)."
        },
        {
          h: "الحديث عن المهنة",
          table: {
            head: ["الألمانية", "العربية"],
            rows: [
              ["‹Ich arbeite als Krankenpfleger.›", "أعمل ممرّضًا. (بدون أداة)"],
              ["‹Ich bin angestellt / selbstständig.›", "أنا موظف / أعمل لحسابي."],
              ["‹Ich mache eine Ausbildung als Elektriker.›", "أتكوّن (أقوم بتكوين مهني) كهربائيًا."],
              ["‹Ich habe Informatik studiert.›", "درست المعلوميات."],
              ["‹Ich arbeite Vollzeit / Teilzeit.›", "أعمل بدوام كامل / جزئي."],
              ["‹Ich suche eine neue Stelle.›", "أبحث عن وظيفة جديدة."]
            ]
          }
        }
      ],
      vocab: [
        ["n", "der", "Traumberuf", "-e", "المهنة الحلم", "Mein Traumberuf war Pilot.", "كانت مهنتي الحلم طيارًا."],
        ["n", "die", "Ausbildung", "-en", "التكوين المهني", "Sie macht eine Ausbildung als Köchin.", "هي في تكوين مهني لتصبح طبّاخة."],
        ["n", "der", "Abschluss", "¨-e", "الشهادة / التخرّج", "Nach dem Abschluss suche ich eine Stelle.", "بعد التخرّج أبحث عن وظيفة."],
        ["n", "das", "Studium", "=Studien", "الدراسة الجامعية", "Mein Studium dauert vier Jahre.", "دراستي تستغرق أربع سنوات."],
        ["n", "die", "Erfahrung", "-en", "الخبرة / التجربة", "Ich habe drei Jahre Erfahrung im Verkauf.", "عندي خبرة ثلاث سنوات في البيع."],
        ["n", "die", "Stelle", "-n", "الوظيفة / المنصب", "Ich habe eine neue Stelle gefunden.", "وجدت وظيفة جديدة."],
        ["n", "der", "Arbeitsplatz", "¨-e", "مكان العمل", "Mein Arbeitsplatz ist im Zentrum.", "مكان عملي في المركز."],
        ["n", "der", "Arbeitgeber", "-", "صاحب العمل", "Mein Arbeitgeber ist sehr fair.", "صاحب عملي منصف جدًا."],
        ["n", "das", "Gehalt", "¨-er", "الراتب", "Das Gehalt ist nicht schlecht.", "الراتب ليس سيئًا."],
        ["n", "die", "Abteilung", "-en", "القسم", "Ich arbeite in der Abteilung Marketing.", "أعمل في قسم التسويق."],
        ["n", "der", "Mitarbeiter", "-", "الموظف / العامل", "Die Firma hat 200 Mitarbeiter.", "الشركة فيها 200 موظف."],
        ["n", "die", "Mitarbeiterin", "-nen", "الموظفة", "Die neue Mitarbeiterin heißt Frau Sommer.", "الموظفة الجديدة اسمها السيدة زومر."],
        ["n", "der", "Azubi", "-s", "المتدرّب (في التكوين)", "Unsere Azubis lernen schnell.", "متدرّبونا يتعلّمون بسرعة."],
        ["n", "die", "Schicht", "-en", "المناوبة (دوام بالتناوب)", "Diese Woche habe ich Nachtschicht.", "هذا الأسبوع عندي مناوبة ليلية."],
        ["n", "die", "Überstunde", "-n", "الساعة الإضافية", "Gestern musste ich zwei Überstunden machen.", "أمس كان عليّ أن أعمل ساعتين إضافيتين."],
        ["n", "der", "Feierabend", "-e", "نهاية الدوام", "Um 17 Uhr habe ich Feierabend.", "في الخامسة مساءً ينتهي دوامي."],
        ["n", "die", "Kantine", "-n", "مطعم الشركة", "Wir essen mittags in der Kantine.", "نأكل ظهرًا في مطعم الشركة."],
        ["n", "der", "Pilot", "-en", "الطيار", "Als Kind wollte ich Pilot werden.", "في طفولتي كنت أريد أن أصبح طيارًا."],
        ["n", "der", "Krankenpfleger", "-", "الممرّض", "Er arbeitet als Krankenpfleger im Krankenhaus.", "يعمل ممرّضًا في المستشفى."],
        ["n", "die", "Krankenpflegerin", "-nen", "الممرّضة", "Die Krankenpflegerin arbeitet nachts.", "الممرّضة تعمل ليلًا."],
        ["n", "der", "Polizist", "-en", "الشرطي", "Mein Onkel ist Polizist.", "عمي شرطي."],
        ["n", "der", "Elektriker", "-", "الكهربائي", "Der Elektriker repariert das Licht.", "الكهربائي يصلح الضوء."],
        ["n", "der", "Verkauf", "Sg.", "البيع / قسم المبيعات", "Sie arbeitet im Verkauf.", "هي تعمل في المبيعات."],
        ["v", "", "konnte", "können → ich konnte", "استطعتُ / كان يستطيع", "Früher konnte ich nicht schwimmen.", "في الماضي لم أكن أستطيع السباحة."],
        ["v", "", "musste", "müssen → ich musste", "كان يجب", "Ich musste lange warten.", "كان عليّ أن أنتظر طويلًا."],
        ["v", "", "wollte", "wollen → ich wollte", "كان يريد", "Ich wollte Ärztin werden.", "كنت أريد أن أصبح طبيبة."],
        ["v", "", "durfte", "dürfen → ich durfte", "كان مسموحًا له", "Als Kind durfte ich nicht lange fernsehen.", "في طفولتي لم يكن مسموحًا لي بمشاهدة التلفاز طويلًا."],
        ["v", "", "kündigen", "hat gekündigt", "يستقيل / يفسخ العقد", "Er hat seine Stelle gekündigt.", "استقال من وظيفته."],
        ["v", "", "wechseln", "hat gewechselt", "يغيّر / يبدّل", "Ich möchte den Job wechseln.", "أريد أن أغيّر عملي."],
        ["a", "", "angestellt", "", "موظف (بعقد)", "Ich bin bei einer Bank angestellt.", "أنا موظف في بنك."],
        ["a", "", "selbstständig", "", "يعمل لحسابه الخاص", "Mein Vater ist selbstständig, er hat ein Geschäft.", "أبي يعمل لحسابه، عنده متجر."],
        ["a", "", "arbeitslos", "", "عاطل عن العمل", "Er war ein Jahr arbeitslos.", "كان عاطلًا عن العمل سنة."],
        ["a", "", "zuverlässig", "", "موثوق / يُعتمد عليه", "Sie ist sehr zuverlässig.", "هي موثوقة جدًا."],
        ["a", "", "flexibel", "", "مرن", "Die Arbeitszeiten sind flexibel.", "أوقات العمل مرنة."],
        ["x", "", "Vollzeit / Teilzeit", "", "دوام كامل / جزئي", "Ich arbeite Teilzeit, 20 Stunden pro Woche.", "أعمل بدوام جزئي، 20 ساعة في الأسبوع."],
        ["x", "", "als Kind", "", "في الطفولة / عندما كنت طفلًا", "Als Kind wollte ich Lehrer werden.", "في طفولتي كنت أريد أن أصبح معلّمًا."]
      ],
      phrases: [
        ["Als Kind wollte ich Pilot werden.", "في طفولتي كنت أريد أن أصبح طيارًا."],
        ["Ich musste viel lernen, aber es hat sich gelohnt.", "كان عليّ أن أدرس كثيرًا، لكن الأمر كان يستحق."],
        ["Früher konnte ich kein Deutsch.", "في الماضي لم أكن أعرف الألمانية."],
        ["Ich arbeite als Krankenpfleger im Schichtdienst.", "أعمل ممرّضًا بنظام المناوبات."],
        ["Um fünf habe ich Feierabend.", "في الخامسة ينتهي دوامي."],
        ["Was bist du von Beruf? – Ich bin Elektriker.", "ما مهنتك؟ – أنا كهربائي."],
        ["Ich bin bei einer Firma in Casablanca angestellt.", "أنا موظف في شركة بالدار البيضاء."]
      ],
      ex: [
        { t: "gap", q: "أكمل بـ Präteritum.", s: "Als Kind ___ ich Ärztin werden. (wollen)", a: ["wollte"], why: "‹wollen› → ‹ich wollte›.", tag: "modal" },
        { t: "gap", q: "أكمل بـ Präteritum.", s: "Gestern ___ wir zwei Überstunden machen. (müssen)", a: ["mussten"], why: "‹müssen› → ‹wir mussten› (بدون Umlaut).", tag: "modal" },
        { t: "gap", q: "أكمل بـ Präteritum.", s: "___ du als Kind schon schwimmen? (können)", a: ["Konntest"], why: "‹können› → ‹du konntest›.", tag: "modal" },
        { t: "gap", q: "أكمل بـ Präteritum.", s: "In der Schule ___ wir kein Handy benutzen. (dürfen)", a: ["durften"], why: "‹dürfen› → ‹wir durften›.", tag: "modal" },
        { t: "gap", q: "أكمل بـ Präteritum.", s: "Mein Vater ___ früher Polizist. (sein)", a: ["war"], why: "‹sein› → ‹er war›.", tag: "praeteritum" },
        { t: "gap", q: "أكمل بـ Präteritum.", s: "Wir ___ damals keine Zeit. (haben)", a: ["hatten"], why: "‹haben› → ‹wir hatten›.", tag: "praeteritum" },
        { t: "mc", q: "اختر الصحيح.", s: "Er ___ nicht kommen, weil er arbeiten musste.", o: ["konnte", "könnte", "konntet"], a: 0, why: "الماضي مع ‹er›: ‹konnte›. ‹könnte› = Konjunktiv II (لو استطاع).", tag: "modal" },
        { t: "mc", q: "اختر الصحيح.", s: "Früher ___ ich jeden Tag um 6 Uhr aufstehen.", o: ["musste", "müsste", "muss"], a: 0, why: "‹früher› = في الماضي → ‹musste›.", tag: "modal" },
        { t: "mc", q: "اختر الترتيب الصحيح.", o: ["Ich wollte Lehrer werden.", "Ich wollte werden Lehrer.", "Ich Lehrer wollte werden."], a: 0, why: "الفعل الناقص ثانيًا، والمصدر ‹werden› في الآخر.", tag: "modal" },
        { t: "mc", q: "اختر الصحيح.", s: "Ich arbeite ___ Krankenpfleger.", o: ["als", "wie", "für"], a: 0, why: "المهنة: ‹arbeiten als› + اسم بدون أداة.", tag: "beruf" },
        { t: "mc", q: "ماذا يعني ‹Ich habe um 17 Uhr Feierabend›؟", o: ["ينتهي دوامي في الخامسة", "عندي حفلة في الخامسة", "أبدأ العمل في الخامسة"], a: 0, why: "‹der Feierabend› = نهاية يوم العمل.", tag: "beruf" },
        { t: "match", q: "صِل الكلمة بمعناها.", pairs: [["das Gehalt", "الراتب"], ["die Ausbildung", "التكوين المهني"], ["die Überstunde", "الساعة الإضافية"], ["arbeitslos", "عاطل عن العمل"], ["selbstständig", "يعمل لحسابه"]], tag: "beruf" },
        { t: "order", q: "رتّب الجملة.", a: "Als Kind durfte ich nicht lange fernsehen.", why: "‹Als Kind› أولًا، ثم ‹durfte›، ثم ‹ich›، والمصدر في الآخر.", tag: "modal" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "في طفولتي كنت أريد أن أصبح طيارًا.", a: ["Als Kind wollte ich Pilot werden.", "Als Kind wollte ich Pilotin werden."], tag: "modal" },
        { t: "read", title: "Mein Weg", text: "Ich heiße Youssef und komme aus Agadir. Als Kind wollte ich Fußballprofi werden, aber meine Eltern waren dagegen. Ich musste zuerst die Schule fertig machen. Danach konnte ich in Marrakesch Informatik studieren. Das Studium war schwer und ich hatte wenig Geld, deshalb musste ich abends in einem Hotel arbeiten. Heute bin ich Webentwickler bei einer Firma in Casablanca. Ich arbeite Vollzeit, aber ich darf zweimal pro Woche von zu Hause arbeiten.", tr: "اسمي يوسف وأنا من أكادير. في طفولتي كنت أريد أن أصبح لاعب كرة محترفًا، لكن والديّ كانا ضد ذلك. كان عليّ أولًا أن أُنهي المدرسة. بعد ذلك استطعت أن أدرس المعلوميات في مراكش. كانت الدراسة صعبة وكان عندي مال قليل، لذلك كان عليّ أن أعمل مساءً في فندق. اليوم أنا مطوّر مواقع في شركة بالدار البيضاء. أعمل بدوام كامل، لكن يُسمح لي بالعمل من البيت مرتين في الأسبوع.", items: [
          { t: "tf", s: "Youssefs Eltern fanden die Idee mit dem Fußball gut.", a: false, why: "‹meine Eltern waren dagegen› = كانا ضد ذلك." },
          { t: "tf", s: "Während des Studiums hat Youssef in einem Hotel gearbeitet.", a: true, why: "‹musste ich abends in einem Hotel arbeiten›." },
          { t: "tf", s: "Youssef arbeitet heute nur im Büro.", a: false, why: "‹ich darf zweimal pro Woche von zu Hause arbeiten›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Was wolltest du als Kind werden?", ar: "ماذا كنت تريد أن تصبح في طفولتك؟",
        scene: "في استراحة الغداء في مطعم الشركة يسألك زميلك الجديد دانيال عن ماضيك.",
        who: { A: "Daniel" },
        lines: [
          { s: "A", de: "Sag mal, {FIRST}, was wolltest du eigentlich als Kind werden?", ar: "قل لي، ماذا كنت تريد أن تصبح في طفولتك؟" },
          { s: "U", task: "قل: كنت أريد أن أصبح طيارًا، لكن نظري لم يكن جيدًا.", m: "Ich wollte Pilot werden, aber meine Augen waren nicht gut.", ok: ["Ich wollte Pilot werden aber meine Augen waren nicht gut", "Als Kind wollte ich Pilot werden *", "Ich wollte Pilot werden *", "Ich wollte * werden *"], o: ["Ich wollte Pilot werden, aber meine Augen waren nicht gut.", "Ich wolltet Pilot werden, aber meine Augen waren nicht gut.", "Ich wollte werden Pilot, aber meine Augen waren nicht gut."], why: ["", "‹ich› → ‹wollte› (بدون ‑t في الآخر).", "المصدر ‹werden› في آخر الجملة."], ar: "كنت أريد أن أصبح طيارًا، لكن نظري لم يكن جيدًا." },
          { s: "A", de: "Schade! Und was hast du dann gemacht?", ar: "يا للأسف! وماذا فعلت بعد ذلك؟" },
          { s: "U", task: "قل: درست المعلوميات. كان عليّ أن أدرس كثيرًا.", m: "Ich habe Informatik studiert. Ich musste viel lernen.", ok: ["Ich habe Informatik studiert ich musste viel lernen", "Ich habe Informatik studiert und musste viel lernen", "Ich habe Informatik studiert *", "* ich musste viel lernen"], o: ["Ich habe Informatik studiert. Ich musste viel lernen.", "Ich habe Informatik studiert. Ich müsste viel lernen.", "Ich bin Informatik studiert. Ich musste viel lernen."], why: ["", "الماضي: ‹musste›. ‹müsste› = Konjunktiv II.", "‹studieren› في Perfekt مع ‹haben›."], ar: "درست المعلوميات. كان عليّ أن أدرس كثيرًا." },
          { s: "A", de: "Und konntest du während des Studiums arbeiten?", ar: "وهل استطعت أن تعمل أثناء الدراسة؟" },
          { s: "U", task: "قل: نعم، كنت أعمل مساءً في مقهى، لأنه لم يكن عندي مال كثير.", m: "Ja, ich habe abends in einem Café gearbeitet, weil ich nicht viel Geld hatte.", ok: ["Ja ich habe abends in einem Café gearbeitet weil ich nicht viel Geld hatte", "Ja ich habe abends in einem Café gearbeitet weil ich wenig Geld hatte", "Ja ich habe in einem Café gearbeitet weil ich nicht viel Geld hatte", "* weil ich nicht viel Geld hatte", "* weil ich wenig Geld hatte"], o: ["Ja, ich habe abends in einem Café gearbeitet, weil ich nicht viel Geld hatte.", "Ja, ich habe abends in einem Café gearbeitet, weil ich hatte nicht viel Geld.", "Ja, ich habe abends in einem Café gearbeitet, weil ich nicht viel Geld hattet."], why: ["", "بعد ‹weil› الفعل ‹hatte› في الآخر.", "‹ich› → ‹hatte›."], ar: "نعم، كنت أعمل مساءً في مقهى لأنه لم يكن عندي مال كثير." },
          { s: "A", de: "Interessant! Ich durfte als Student nicht arbeiten, ich hatte ein Stipendium.", ar: "مثير للاهتمام! أنا لم يكن مسموحًا لي بالعمل كطالب، كانت عندي منحة." }
        ]
      },
      listen: [
        { t: "listen", say: "Früher war ich Lehrerin, aber vor zwei Jahren habe ich gekündigt. Jetzt bin ich selbstständig.", q: "ما وضعها الآن؟", o: ["تعمل لحسابها", "معلّمة", "عاطلة عن العمل"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Gestern musste ich bis neun Uhr abends arbeiten. Ich konnte nicht zum Sport gehen.", q: "لماذا لم يذهب إلى الرياضة؟", o: ["كان عليه أن يعمل حتى التاسعة", "كان مريضًا", "لم يكن عنده مال"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich arbeite Teilzeit, nur vormittags von acht bis zwölf.", q: "متى يعمل؟", o: ["صباحًا فقط", "مساءً فقط", "طوال اليوم"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Als Kind wollte ich Lehrer werden.", tag: "hoeren" },
        { t: "dict", say: "Ich musste lange warten.", tag: "hoeren" }
      ]
    },

    /* ───────────── 10B ───────────── */
    {
      id: "10B", de: "Die Bewerbung", ar: "طلب العمل",
      summary: "إعلانات الوظائف، السيرة الذاتية، رسالة الطلب، مقابلة العمل؛ الجملة الفرعية بـ dass، والزمن بـ vor / seit / nach + Dativ.",
      grammar: [
        {
          h: "الجملة الفرعية بـ dass (أنّ)",
          p: "بعد أفعال الرأي والمعرفة والقول نستعمل ‹dass›. مثل ‹weil›: الفعل المصرّف في **آخر** الجملة.",
          table: {
            head: ["الجملة الرئيسية", "dass + … + الفعل"],
            rows: [
              ["‹Ich glaube,›", "‹dass ich gut ins Team **passe**.›"],
              ["‹Ich finde,›", "‹dass die Arbeitszeiten flexibel **sind**.›"],
              ["‹Ich hoffe,›", "‹dass ich die Stelle **bekomme**.›"],
              ["‹Ich weiß,›", "‹dass man hier Deutsch sprechen **muss**.›"],
              ["‹Es ist wichtig,›", "‹dass Sie pünktlich **sind**.›"],
              ["‹Er sagt,›", "‹dass er drei Jahre Erfahrung **hat**.›"]
            ]
          },
          tip: "لا تخلط: ‹das› (أداة / ضمير) و‹dass› (أنّ) — الثانية بحرفي s. حيلة: إذا أمكن وضع ‹dieses› أو ‹welches› مكانها فهي ‹das›."
        },
        {
          h: "الزمن: vor, seit, nach + Dativ",
          table: {
            head: ["الحرف", "المعنى", "مثال"],
            rows: [
              ["‹vor›", "منذ (قبل، انتهى)", "‹Vor drei Jahren habe ich mein Studium beendet.›"],
              ["‹seit›", "منذ (ما زال مستمرًا)", "‹Seit zwei Jahren arbeite ich bei Siemens.›"],
              ["‹nach›", "بعد", "‹Nach dem Abitur habe ich eine Ausbildung gemacht.›"],
              ["‹während›", "أثناء", "‹Während des Studiums habe ich gejobbt.› (Genitiv — للتعرّف)"]
            ]
          },
          tip: "بعد ‹vor/seit› + Dativ جمع: ‹Jahren, Monaten, Wochen, Tagen› (لاحظ ‑n في الآخر). و‹seit› مع المضارع: ‹Ich wohne seit 2023 in Köln.›"
        },
        {
          h: "عبارات من رسالة الطلب",
          table: {
            head: ["الألمانية", "العربية"],
            rows: [
              ["‹mit großem Interesse habe ich Ihre Anzeige gelesen.›", "قرأت إعلانكم باهتمام كبير."],
              ["‹Ich bewerbe mich um die Stelle als …›", "أتقدّم لوظيفة …"],
              ["‹Ich habe Erfahrung in …›", "عندي خبرة في …"],
              ["‹Ich spreche Arabisch, Französisch und Deutsch (A2).›", "أتكلم العربية والفرنسية والألمانية (A2)."],
              ["‹Über eine Einladung zu einem Vorstellungsgespräch freue ich mich sehr.›", "سأكون سعيدًا جدًا بدعوة لمقابلة."]
            ]
          }
        }
      ],
      vocab: [
        ["n", "die", "Bewerbung", "-en", "طلب العمل", "Ich schreibe eine Bewerbung.", "أكتب طلب عمل."],
        ["n", "der", "Lebenslauf", "¨-e", "السيرة الذاتية", "Bitte schicken Sie uns Ihren Lebenslauf.", "أرسل لنا سيرتك الذاتية من فضلك."],
        ["n", "das", "Anschreiben", "-", "رسالة التحفيز / الطلب", "Das Anschreiben ist eine Seite lang.", "رسالة الطلب طولها صفحة."],
        ["n", "die", "Stellenanzeige", "-n", "إعلان الوظيفة", "Ich habe die Stellenanzeige im Internet gelesen.", "قرأت إعلان الوظيفة على الإنترنت."],
        ["n", "das", "Vorstellungsgespräch", "-e", "مقابلة العمل", "Morgen habe ich ein Vorstellungsgespräch.", "غدًا عندي مقابلة عمل."],
        ["n", "die", "Kenntnisse", "Pl.", "المعارف / الإلمام", "Sie haben gute Computerkenntnisse.", "عندك معارف جيدة بالحاسوب."],
        ["n", "die", "Sprachkenntnisse", "Pl.", "المعارف اللغوية", "Gute Deutschkenntnisse sind wichtig.", "المعرفة الجيدة بالألمانية مهمة."],
        ["n", "das", "Zeugnis", "-se", "الشهادة (الدراسية/العمل)", "Hier sind meine Zeugnisse.", "هذه شهاداتي."],
        ["n", "das", "Abitur", "Sg.", "البكالوريا", "Nach dem Abitur habe ich studiert.", "بعد البكالوريا درست."],
        ["n", "die", "Arbeitszeit", "-en", "أوقات العمل", "Die Arbeitszeiten sind von 8 bis 16 Uhr.", "أوقات العمل من 8 إلى 16."],
        ["n", "die", "Aufgabe", "-n", "المهمة", "Was sind meine Aufgaben?", "ما هي مهامي؟"],
        ["n", "die", "Stärke", "-n", "نقطة القوة", "Meine Stärke ist die Teamarbeit.", "نقطة قوتي العمل الجماعي."],
        ["n", "die", "Schwäche", "-n", "نقطة الضعف", "Meine Schwäche: Ich bin manchmal ungeduldig.", "نقطة ضعفي: أنا أحيانًا قليل الصبر."],
        ["n", "der", "Bewerber", "-", "المترشّح", "Es gibt viele Bewerber für die Stelle.", "هناك مترشحون كثيرون للوظيفة."],
        ["n", "die", "Bewerberin", "-nen", "المترشّحة", "Die Bewerberin hat viel Erfahrung.", "المترشّحة عندها خبرة كبيرة."],
        ["n", "die", "Probezeit", "-en", "فترة التجربة", "Die Probezeit dauert sechs Monate.", "فترة التجربة تستغرق ستة أشهر."],
        ["v", "", "sich bewerben (um + Akk.)", "bewirbt sich, hat sich beworben", "يتقدّم لوظيفة", "Ich bewerbe mich um die Stelle als Verkäufer.", "أتقدّم لوظيفة بائع."],
        ["v", "", "einstellen", "stellt ein, hat eingestellt", "يوظّف", "Die Firma stellt zehn neue Mitarbeiter ein.", "الشركة توظّف عشرة موظفين جدد."],
        ["v", "", "erwarten", "hat erwartet", "يتوقّع / ينتظر", "Wir erwarten gute Deutschkenntnisse.", "نتوقّع معرفة جيدة بالألمانية."],
        ["v", "", "hoffen", "hat gehofft", "يأمل", "Ich hoffe, dass ich die Stelle bekomme.", "آمل أن أحصل على الوظيفة."],
        ["v", "", "beenden", "hat beendet", "يُنهي", "Vor einem Jahr habe ich mein Studium beendet.", "قبل سنة أنهيت دراستي."],
        ["v", "", "sich vorstellen", "stellt sich vor", "يقدّم نفسه", "Können Sie sich kurz vorstellen?", "هل يمكنك أن تقدّم نفسك باختصار؟"],
        ["p", "", "dass", "+ Verb am Ende", "أنّ", "Ich glaube, dass er recht hat.", "أظن أنه محق."],
        ["p", "", "vor", "+ Dat. (Zeit)", "قبل / منذ", "Vor zwei Monaten bin ich nach Deutschland gekommen.", "قبل شهرين جئت إلى ألمانيا."],
        ["p", "", "seit", "+ Dat.", "منذ (مستمر)", "Seit einem Jahr lerne ich Deutsch.", "منذ سنة أتعلم الألمانية."],
        ["a", "", "teamfähig", "", "يجيد العمل في فريق", "Ich bin teamfähig und flexibel.", "أجيد العمل في فريق وأنا مرن."],
        ["a", "", "motiviert", "", "متحمّس", "Wir suchen motivierte Mitarbeiter.", "نبحث عن موظفين متحمسين."],
        ["a", "", "ungeduldig", "", "قليل الصبر", "Manchmal bin ich ungeduldig.", "أحيانًا أكون قليل الصبر."],
        ["x", "", "Mit freundlichen Grüßen", "", "مع أطيب التحيات (ختام رسمي)", "Mit freundlichen Grüßen, Karim Amrani", "مع أطيب التحيات، كريم عمراني"]
      ],
      phrases: [
        ["Ich bewerbe mich um die Stelle als Verkäufer.", "أتقدّم لوظيفة بائع."],
        ["Ich glaube, dass ich gut ins Team passe.", "أعتقد أنني أنسجم جيدًا مع الفريق."],
        ["Seit zwei Jahren arbeite ich in einem Hotel.", "منذ سنتين أعمل في فندق."],
        ["Vor einem Jahr habe ich mein Studium beendet.", "قبل سنة أنهيت دراستي."],
        ["Meine Stärken sind Zuverlässigkeit und Teamarbeit.", "نقاط قوتي الموثوقية والعمل الجماعي."],
        ["Ich hoffe, dass ich bald von Ihnen höre.", "آمل أن أسمع منكم قريبًا."],
        ["Was sind die Aufgaben in dieser Stelle?", "ما هي مهام هذه الوظيفة؟"]
      ],
      ex: [
        { t: "order", q: "رتّب الجملة (dass + الفعل في الآخر).", a: "Ich glaube, dass ich gut ins Team passe.", why: "بعد ‹dass› الفعل ‹passe› في الآخر.", tag: "nebensatz" },
        { t: "order", q: "رتّب الجملة.", a: "Ich hoffe, dass ich die Stelle bekomme.", why: "‹dass ich die Stelle bekomme› — الفعل في الآخر.", tag: "nebensatz" },
        { t: "mc", q: "اختر الصحيح.", s: "Ich weiß, ___ die Firma neue Mitarbeiter sucht.", o: ["dass", "das", "weil"], a: 0, why: "بعد ‹Ich weiß,› = أنّ → ‹dass›.", tag: "nebensatz" },
        { t: "mc", q: "اختر الصحيح.", s: "___ Vorstellungsgespräch war sehr gut.", o: ["Das", "Dass", "Der"], a: 0, why: "هنا أداة لاسم محايد: ‹das Vorstellungsgespräch›.", tag: "artikel" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Es ist wichtig, dass ___.", o: ["Sie gute Deutschkenntnisse haben", "Sie haben gute Deutschkenntnisse", "haben Sie gute Deutschkenntnisse"], a: 0, why: "الفعل ‹haben› في آخر جملة ‹dass›.", tag: "nebensatz" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Er sagt, dass ___.", o: ["er am Montag anfangen kann", "er kann am Montag anfangen", "er am Montag kann anfangen"], a: 0, why: "الفعل الناقص المصرّف ‹kann› آخر الجملة، بعد المصدر.", tag: "nebensatz" },
        { t: "gap", q: "أكمل بـ vor أو seit.", s: "___ drei Jahren habe ich mein Abitur gemacht.", a: ["Vor"], why: "حدث منتهٍ في الماضي → ‹vor›.", tag: "temporal" },
        { t: "gap", q: "أكمل بـ vor أو seit.", s: "___ einem Jahr wohne ich in München.", a: ["Seit"], why: "ما زال مستمرًا (أسكن الآن) → ‹seit›.", tag: "temporal" },
        { t: "gap", q: "أكمل بالنهاية الصحيحة.", s: "Ich lerne seit zwei Monat___ Deutsch.", a: ["en"], why: "‹seit› + Dativ جمع: ‹Monaten›.", tag: "dativ" },
        { t: "gap", q: "أكمل بحرف الجر.", s: "Ich bewerbe mich ___ die Stelle als Kellner.", a: ["um"], why: "‹sich bewerben um› + Akkusativ.", tag: "verbpraep" },
        { t: "match", q: "صِل الكلمة بمعناها.", pairs: [["der Lebenslauf", "السيرة الذاتية"], ["das Vorstellungsgespräch", "مقابلة العمل"], ["die Stellenanzeige", "إعلان الوظيفة"], ["das Zeugnis", "الشهادة"], ["die Probezeit", "فترة التجربة"]], tag: "beruf" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أعتقد أن العمل مثير للاهتمام.", a: ["Ich glaube, dass die Arbeit interessant ist.", "Ich finde, dass die Arbeit interessant ist.", "Ich denke, dass die Arbeit interessant ist."], tag: "nebensatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "منذ سنة أتعلم الألمانية.", a: ["Seit einem Jahr lerne ich Deutsch.", "Ich lerne seit einem Jahr Deutsch."], tag: "temporal" },
        { t: "read", title: "Stellenanzeige", text: "Café Morgenrot sucht ab sofort eine Servicekraft (m/w/d) in Teilzeit, 20 Stunden pro Woche. Ihre Aufgaben: Gäste bedienen, Kaffee kochen, kassieren. Wir erwarten: Erfahrung in der Gastronomie, gute Deutschkenntnisse, Freundlichkeit und Teamfähigkeit. Wir bieten: ein nettes Team, flexible Arbeitszeiten und kostenloses Mittagessen. Arbeitszeit: auch am Wochenende. Bitte schicken Sie Ihre Bewerbung mit Lebenslauf per E-Mail an jobs@morgenrot.de.", tr: "مقهى مورغنروت يبحث فورًا عن عامل/عاملة خدمة بدوام جزئي، 20 ساعة أسبوعيًا. مهامك: خدمة الزبائن، تحضير القهوة، التحصيل. نتوقع: خبرة في المطاعم، معرفة جيدة بالألمانية، لطفًا وقدرة على العمل الجماعي. نقدم: فريقًا لطيفًا، أوقات عمل مرنة وغداءً مجانيًا. أوقات العمل: أيضًا في عطلة الأسبوع. أرسل طلبك مع السيرة الذاتية بالبريد الإلكتروني إلى jobs@morgenrot.de.", items: [
          { t: "tf", s: "Die Stelle ist eine Vollzeitstelle.", a: false, why: "‹in Teilzeit, 20 Stunden pro Woche›." },
          { t: "tf", s: "Man muss manchmal am Samstag oder Sonntag arbeiten.", a: true, why: "‹auch am Wochenende›." },
          { t: "tf", s: "Die Mitarbeiter bekommen ein Essen ohne Kosten.", a: true, why: "‹kostenloses Mittagessen›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Das Vorstellungsgespräch", ar: "مقابلة العمل",
        scene: "تقدّمت لوظيفة نادل في مقهى مورغنروت. السيدة شرودر، مديرة المقهى، تجري معك المقابلة.",
        who: { A: "Frau Schröder" },
        lines: [
          { s: "A", de: "Guten Tag, schön, dass Sie da sind. Können Sie sich bitte kurz vorstellen?", ar: "مرحبًا، جميل أنك هنا. هل يمكنك أن تقدّم نفسك باختصار؟" },
          { s: "U", task: "قل اسمك، وأنك من المغرب، وأنك في ألمانيا منذ سنة.", m: "Mein Name ist {NAME}. Ich komme aus Marokko und bin seit einem Jahr in Deutschland.", ok: ["Mein Name ist * ich komme aus Marokko und bin seit einem Jahr in Deutschland", "Ich heiße * ich komme aus Marokko und bin seit einem Jahr in Deutschland", "Ich heiße * und komme aus Marokko ich bin seit einem Jahr in Deutschland", "* seit einem Jahr in Deutschland"], o: ["Mein Name ist {NAME}. Ich komme aus Marokko und bin seit einem Jahr in Deutschland.", "Mein Name ist {NAME}. Ich komme aus Marokko und bin vor einem Jahr in Deutschland.", "Mein Name ist {NAME}. Ich komme aus Marokko und bin seit ein Jahr in Deutschland."], why: ["", "الحالة مستمرة (ما زلت هنا) → ‹seit›.", "‹seit› + Dativ: ‹seit einem Jahr›."], ar: "اسمي … أنا من المغرب وأنا في ألمانيا منذ سنة." },
          { s: "A", de: "Haben Sie schon Erfahrung in der Gastronomie?", ar: "هل عندك خبرة في المطاعم؟" },
          { s: "U", task: "قل: نعم، قبل سنتين عملت في فندق بأكادير.", m: "Ja, vor zwei Jahren habe ich in einem Hotel in Agadir gearbeitet.", ok: ["Ja vor zwei Jahren habe ich in einem Hotel in Agadir gearbeitet", "Ja ich habe vor zwei Jahren in einem Hotel in Agadir gearbeitet", "Ja vor zwei Jahren habe ich in einem Hotel gearbeitet", "* in einem Hotel * gearbeitet"], o: ["Ja, vor zwei Jahren habe ich in einem Hotel in Agadir gearbeitet.", "Ja, vor zwei Jahren ich habe in einem Hotel in Agadir gearbeitet.", "Ja, vor zwei Jahre habe ich in einem Hotel in Agadir gearbeitet."], why: ["", "بعد ‹vor zwei Jahren› في البداية يأتي الفعل ‹habe› ثم الفاعل.", "‹vor› + Dativ جمع: ‹Jahren›."], ar: "نعم، قبل سنتين عملت في فندق بأكادير." },
          { s: "A", de: "Sehr gut. Und warum möchten Sie bei uns arbeiten?", ar: "جيد جدًا. ولماذا تريد العمل عندنا؟" },
          { s: "U", task: "قل: لأنني أحب العمل مع الناس. وأعتقد أن فريقكم لطيف جدًا.", m: "Weil ich gern mit Menschen arbeite. Und ich glaube, dass Ihr Team sehr nett ist.", ok: ["Weil ich gern mit Menschen arbeite und ich glaube dass Ihr Team sehr nett ist", "Weil ich gern mit Menschen arbeite *", "Ich arbeite gern mit Menschen und ich glaube dass Ihr Team sehr nett ist", "* dass Ihr Team sehr nett ist"], o: ["Weil ich gern mit Menschen arbeite. Und ich glaube, dass Ihr Team sehr nett ist.", "Weil ich arbeite gern mit Menschen. Und ich glaube, dass Ihr Team sehr nett ist.", "Weil ich gern mit Menschen arbeite. Und ich glaube, dass Ihr Team ist sehr nett."], why: ["", "بعد ‹weil› الفعل ‹arbeite› في الآخر.", "بعد ‹dass› الفعل ‹ist› في الآخر."], ar: "لأنني أحب العمل مع الناس. وأعتقد أن فريقكم لطيف جدًا." },
          { s: "A", de: "Danke! Wir melden uns bis Freitag bei Ihnen.", ar: "شكرًا! سنتواصل معك قبل يوم الجمعة." }
        ]
      },
      listen: [
        { t: "listen", say: "Seit drei Jahren arbeite ich als Verkäuferin, aber ich möchte jetzt eine Ausbildung machen.", q: "ماذا تريد الآن؟", o: ["أن تقوم بتكوين مهني", "أن تعمل بائعة", "أن تتوقف عن العمل"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Die Probezeit dauert drei Monate. Danach bekommen Sie einen festen Vertrag.", q: "كم تستغرق فترة التجربة؟", o: ["ثلاثة أشهر", "ستة أشهر", "ثلاثة أسابيع"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich glaube, dass das Vorstellungsgespräch gut war. Ich hoffe, dass sie mich anrufen.", q: "كيف كانت المقابلة في رأيه؟", o: ["جيدة", "سيئة", "لم تحدث بعد"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Ich hoffe, dass ich die Stelle bekomme.", tag: "hoeren" },
        { t: "dict", say: "Seit einem Jahr lerne ich Deutsch.", tag: "hoeren" }
      ]
    },

    /* ───────────── 10C ───────────── */
    {
      id: "10C", de: "Am Telefon im Büro", ar: "على الهاتف في المكتب",
      summary: "المكالمات الرسمية، ترك رسالة، تأجيل موعد، الطلب المهذب بـ Konjunktiv II: könnte, würde, hätte, wäre.",
      grammar: [
        {
          h: "الأدب في الطلب: Konjunktiv II",
          p: "لنطلب بأدب شديد (في العمل، مع الغرباء) نستعمل صيغ Konjunktiv II. أهمها أربع:",
          table: {
            head: ["الفعل", "ich / er", "Sie / wir", "مثال"],
            rows: [
              ["‹können›", "‹könnte›", "‹könnten›", "‹Könnten Sie mir bitte helfen?›"],
              ["‹werden›", "‹würde›", "‹würden›", "‹Würden Sie bitte langsamer sprechen?›"],
              ["‹haben›", "‹hätte›", "‹hätten›", "‹Ich hätte eine Frage.› ‹Hätten Sie morgen Zeit?›"],
              ["‹sein›", "‹wäre›", "‹wären›", "‹Wäre Montag für Sie möglich?›"]
            ]
          },
          tip: "قارن: ‹Können Sie …?› (مهذب) → ‹Könnten Sie …?› (أكثر تهذيبًا). ‹Ich möchte …› و‹Ich hätte gern …› كلاهما مهذب جدًا."
        },
        {
          h: "‹du›: könntest, würdest, hättest, wärst",
          p: "مع الأصدقاء أيضًا: ‹Könntest du mir das Salz geben?› ‹Würdest du mich anrufen?› ‹Hättest du heute Abend Zeit?›",
          ex: [["Könntest du mir kurz helfen?", "هل يمكنك أن تساعدني قليلًا؟"], ["Würden Sie mir bitte Ihre Telefonnummer geben?", "هلّا أعطيتني رقم هاتفك من فضلك؟"]]
        },
        {
          h: "على الهاتف في العمل",
          table: {
            head: ["الجملة", "المعنى"],
            rows: [
              ["‹Firma Lindner, Lang am Apparat.›", "شركة ليندنر، لانغ على الخط."],
              ["‹Könnte ich bitte Herrn Neumann sprechen?›", "هل يمكنني التحدث مع السيد نويمان من فضلك؟"],
              ["‹Einen Moment bitte, ich verbinde Sie.›", "لحظة من فضلك، سأحوّلك."],
              ["‹Er ist gerade in einer Besprechung / nicht im Haus.›", "هو الآن في اجتماع / ليس في المكتب."],
              ["‹Kann ich ihm etwas ausrichten?›", "هل أبلغه شيئًا؟"],
              ["‹Würden Sie ihm bitte sagen, dass ich angerufen habe?›", "هلّا قلت له إنني اتصلت؟"],
              ["‹Könnten Sie das bitte buchstabieren?›", "هل يمكنك تهجئة ذلك من فضلك؟"]
            ]
          }
        }
      ],
      vocab: [
        ["n", "der", "Anruf", "-e", "المكالمة", "Danke für Ihren Anruf!", "شكرًا على مكالمتك!"],
        ["n", "der", "Anrufbeantworter", "-", "المجيب الآلي", "Bitte sprechen Sie auf den Anrufbeantworter.", "اترك رسالة على المجيب الآلي من فضلك."],
        ["n", "die", "Durchwahl", "-en", "الرقم الداخلي المباشر", "Meine Durchwahl ist 214.", "رقمي الداخلي 214."],
        ["n", "die", "Verbindung", "-en", "الاتصال / الخط", "Die Verbindung ist schlecht.", "الخط سيئ."],
        ["n", "das", "Sekretariat", "-e", "الكتابة / السكرتارية", "Rufen Sie bitte im Sekretariat an.", "اتصل بالسكرتارية من فضلك."],
        ["n", "die", "Frage", "-n", "السؤال", "Ich hätte eine Frage.", "عندي سؤال."],
        ["n", "die", "Bitte", "-n", "الطلب / الرجاء", "Ich habe eine Bitte.", "عندي طلب."],
        ["n", "die", "Rückmeldung", "-en", "الرد / الإفادة", "Ich warte auf Ihre Rückmeldung.", "أنتظر ردّك."],
        ["n", "der", "Vertrag", "¨-e", "العقد", "Ich unterschreibe den Vertrag.", "أوقّع العقد."],
        ["n", "die", "Unterschrift", "-en", "التوقيع", "Hier fehlt noch Ihre Unterschrift.", "هنا ينقص توقيعك."],
        ["n", "die", "Kopie", "-n", "النسخة", "Könnten Sie mir eine Kopie schicken?", "هل يمكنك أن ترسل لي نسخة؟"],
        ["n", "der", "Drucker", "-", "الطابعة", "Der Drucker funktioniert nicht.", "الطابعة لا تعمل."],
        ["v", "", "könnte", "Sie könnten", "يمكن (بأدب)", "Könnten Sie mir bitte helfen?", "هل يمكنك مساعدتي من فضلك؟"],
        ["v", "", "würde", "Sie würden", "لـ (صيغة مهذبة)", "Würden Sie bitte langsamer sprechen?", "هلّا تكلمت أبطأ من فضلك؟"],
        ["v", "", "hätte", "Sie hätten", "عندي (بأدب)", "Ich hätte gern einen Termin.", "أودّ موعدًا."],
        ["v", "", "wäre", "es wäre", "يكون (بأدب)", "Wäre das möglich?", "هل يكون ذلك ممكنًا؟"],
        ["v", "", "verbinden", "hat verbunden", "يوصل / يحوّل (مكالمة)", "Ich verbinde Sie mit Frau Lang.", "سأحوّلك إلى السيدة لانغ."],
        ["v", "", "ausrichten", "richtet aus, hat ausgerichtet", "يبلّغ (رسالة)", "Kann ich etwas ausrichten?", "هل أبلّغ شيئًا؟"],
        ["v", "", "verschieben", "hat verschoben", "يؤجّل", "Könnten wir den Termin verschieben?", "هل يمكننا تأجيل الموعد؟"],
        ["v", "", "absagen", "sagt ab, hat abgesagt", "يلغي (موعدًا)", "Leider muss ich den Termin absagen.", "للأسف يجب أن ألغي الموعد."],
        ["v", "", "unterschreiben", "hat unterschrieben", "يوقّع", "Bitte unterschreiben Sie hier.", "وقّع هنا من فضلك."],
        ["v", "", "drucken", "hat gedruckt", "يطبع", "Ich drucke das Formular aus.", "أطبع الاستمارة."],
        ["v", "", "sich melden", "hat sich gemeldet", "يتواصل / يتصل", "Ich melde mich morgen bei Ihnen.", "سأتواصل معك غدًا."],
        ["a", "", "besetzt", "", "مشغول (الخط)", "Die Leitung ist besetzt.", "الخط مشغول."],
        ["a", "", "möglich", "", "ممكن", "Ist das möglich?", "هل هذا ممكن؟"],
        ["d", "", "gerade", "", "الآن / حاليًا", "Herr Neumann ist gerade nicht da.", "السيد نويمان ليس هنا الآن."],
        ["x", "", "am Apparat", "", "على الخط (أنا المتكلّم)", "Müller am Apparat.", "مولر على الخط."],
        ["x", "", "außer Haus", "", "خارج المكتب", "Frau Lang ist heute außer Haus.", "السيدة لانغ خارج المكتب اليوم."]
      ],
      phrases: [
        ["Könnte ich bitte Herrn Neumann sprechen?", "هل يمكنني التحدث مع السيد نويمان من فضلك؟"],
        ["Einen Moment bitte, ich verbinde Sie.", "لحظة من فضلك، سأحوّلك."],
        ["Kann ich ihm etwas ausrichten?", "هل أبلّغه شيئًا؟"],
        ["Würden Sie ihm bitte sagen, dass ich angerufen habe?", "هلّا قلت له إنني اتصلت؟"],
        ["Könnten wir den Termin auf Donnerstag verschieben?", "هل يمكننا تأجيل الموعد إلى الخميس؟"],
        ["Ich hätte noch eine Frage.", "عندي سؤال آخر."],
        ["Wäre Montag um zehn möglich?", "هل يكون يوم الاثنين في العاشرة ممكنًا؟"]
      ],
      ex: [
        { t: "mc", q: "اختر الأكثر تهذيبًا.", o: ["Könnten Sie mir bitte helfen?", "Helfen Sie mir!", "Sie helfen mir."], a: 0, why: "‹Könnten Sie …?› + ‹bitte› = طلب مهذب جدًا.", tag: "konjunktiv" },
        { t: "gap", q: "أكمل بـ Konjunktiv II.", s: "___ Sie bitte langsamer sprechen? (werden)", a: ["Würden"], why: "‹werden› → ‹Sie würden›.", tag: "konjunktiv" },
        { t: "gap", q: "أكمل بـ Konjunktiv II.", s: "Ich ___ gern einen Termin am Montag. (haben)", a: ["hätte"], why: "‹haben› → ‹ich hätte›.", tag: "konjunktiv" },
        { t: "gap", q: "أكمل بـ Konjunktiv II.", s: "___ Dienstag um 14 Uhr möglich? (sein)", a: ["Wäre"], why: "‹sein› → ‹es wäre›.", tag: "konjunktiv" },
        { t: "gap", q: "أكمل بـ Konjunktiv II.", s: "___ du mir kurz deinen Kuli geben? (können)", a: ["Könntest"], why: "‹können› → ‹du könntest›.", tag: "konjunktiv" },
        { t: "mc", q: "اختر الصحيح.", s: "___ Sie morgen Zeit für ein kurzes Gespräch?", o: ["Hätten", "Hatten", "Hättest"], a: 0, why: "طلب مهذب عن المستقبل → ‹Hätten Sie …?›. ‹Hatten› = الماضي.", tag: "konjunktiv" },
        { t: "mc", q: "ماذا يعني ‹Kann ich etwas ausrichten?›؟", o: ["هل أبلّغه رسالة؟", "هل أصلح شيئًا؟", "هل أحجز موعدًا؟"], a: 0, why: "‹ausrichten› = يبلّغ رسالة.", tag: "beruf" },
        { t: "mc", q: "السكرتيرة تقول: «Herr Neumann ist gerade in einer Besprechung.» ماذا تقول؟", o: ["Könnte er mich bitte zurückrufen?", "Ich bin in einer Besprechung.", "Verbinden Sie mich bitte mit mir."], a: 0, why: "الرد المناسب: طلب معاودة الاتصال.", tag: "konjunktiv" },
        { t: "order", q: "رتّب الطلب.", a: "Könnten wir den Termin verschieben?", why: "سؤال نعم/لا: الفعل ‹Könnten› أولًا، والمصدر في الآخر.", tag: "konjunktiv" },
        { t: "order", q: "رتّب الطلب.", a: "Würden Sie mir bitte eine Kopie schicken?", why: "‹Würden Sie› … والمصدر ‹schicken› في الآخر.", tag: "konjunktiv" },
        { t: "match", q: "صِل الكلمة بمعناها.", pairs: [["verschieben", "يؤجّل"], ["absagen", "يلغي"], ["unterschreiben", "يوقّع"], ["besetzt", "مشغول"], ["der Anruf", "المكالمة"]], tag: "beruf" },
        { t: "tr", q: "ترجم إلى الألمانية (بأدب).", ar: "هل يمكنك تهجئة ذلك من فضلك؟", a: ["Könnten Sie das bitte buchstabieren?", "Können Sie das bitte buchstabieren?", "Könntest du das bitte buchstabieren?", "Würden Sie das bitte buchstabieren?"], tag: "konjunktiv" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "عندي سؤال (بأدب).", a: ["Ich hätte eine Frage.", "Ich habe eine Frage."], tag: "konjunktiv" },
        { t: "read", title: "Telefonnotiz", text: "Für: Herrn Neumann — Von: Frau Aziz, Firma Kaya Logistik — Datum: 14.3., 10:15 Uhr. Frau Aziz hat angerufen. Sie kann am Donnerstag nicht zur Besprechung kommen, weil sie krank ist. Sie fragt, ob man den Termin auf nächsten Dienstag verschieben könnte. Bitte rufen Sie sie bis morgen zurück. Ihre Durchwahl: 0221 48 31 – 56. Notiert: S. Lang", tr: "إلى: السيد نويمان — من: السيدة عزيز، شركة كايا للخدمات اللوجستية — التاريخ: 14/3، 10:15. اتصلت السيدة عزيز. لا تستطيع المجيء إلى الاجتماع يوم الخميس لأنها مريضة. تسأل هل يمكن تأجيل الموعد إلى الثلاثاء القادم. اتصل بها من فضلك قبل الغد. رقمها المباشر: ... سجّلته: س. لانغ", items: [
          { t: "tf", s: "Frau Aziz kommt am Donnerstag zur Besprechung.", a: false, why: "‹Sie kann am Donnerstag nicht … kommen›." },
          { t: "tf", s: "Frau Aziz möchte einen neuen Termin.", a: true, why: "‹den Termin auf nächsten Dienstag verschieben›." },
          { t: "tf", s: "Herr Neumann soll Frau Aziz eine E-Mail schreiben.", a: false, why: "‹Bitte rufen Sie sie … zurück› = اتصل بها." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Herr Neumann ist nicht da", ar: "السيد نويمان غير موجود",
        scene: "تتصل بشركة ليندنر لتتحدث مع السيد نويمان عن موعد عملك. تردّ السكرتيرة السيدة لانغ.",
        who: { A: "Frau Lang" },
        lines: [
          { s: "A", de: "Firma Lindner, Lang am Apparat. Guten Tag!", ar: "شركة ليندنر، لانغ على الخط. مرحبًا!" },
          { s: "U", task: "حيِّها، قل اسمك، واطلب بأدب التحدث مع السيد نويمان.", m: "Guten Tag, hier ist {NAME}. Könnte ich bitte Herrn Neumann sprechen?", ok: ["Guten Tag hier ist * könnte ich bitte Herrn Neumann sprechen", "Guten Tag mein Name ist * könnte ich bitte Herrn Neumann sprechen", "Guten Tag * kann ich bitte Herrn Neumann sprechen", "* könnte ich bitte mit Herrn Neumann sprechen", "* könnte ich Herrn Neumann sprechen"], o: ["Guten Tag, hier ist {NAME}. Könnte ich bitte Herrn Neumann sprechen?", "Guten Tag, hier ist {NAME}. Könnte ich bitte Herr Neumann sprechen?", "Guten Tag, hier ist {NAME}. Ich könnte bitte Herrn Neumann sprechen?"], why: ["", "‹Herr› في Akkusativ يصبح ‹Herrn›.", "السؤال المهذب يبدأ بالفعل: ‹Könnte ich …?›"], ar: "مرحبًا، معك … هل يمكنني التحدث مع السيد نويمان من فضلك؟" },
          { s: "A", de: "Das tut mir leid, Herr Neumann ist gerade in einer Besprechung. Kann ich ihm etwas ausrichten?", ar: "آسفة، السيد نويمان الآن في اجتماع. هل أبلّغه شيئًا؟" },
          { s: "U", task: "قل: نعم من فضلك. هلّا قلت له إن عليّ تأجيل الموعد يوم الأربعاء؟", m: "Ja, bitte. Würden Sie ihm sagen, dass ich den Termin am Mittwoch verschieben muss?", ok: ["Ja bitte würden Sie ihm sagen dass ich den Termin am Mittwoch verschieben muss", "Ja bitte könnten Sie ihm sagen dass ich den Termin am Mittwoch verschieben muss", "* dass ich den Termin am Mittwoch verschieben muss", "* dass ich den Termin verschieben muss"], o: ["Ja, bitte. Würden Sie ihm sagen, dass ich den Termin am Mittwoch verschieben muss?", "Ja, bitte. Würden Sie ihn sagen, dass ich den Termin am Mittwoch verschieben muss?", "Ja, bitte. Würden Sie ihm sagen, dass ich muss den Termin am Mittwoch verschieben?"], why: ["", "‹sagen› + Dativ للشخص: ‹ihm›.", "بعد ‹dass› الفعل الناقص ‹muss› في الآخر."], ar: "نعم من فضلك. هلّا قلت له إن عليّ تأجيل الموعد يوم الأربعاء؟" },
          { s: "A", de: "Natürlich. Wäre Freitag um 9 Uhr für Sie möglich?", ar: "بالطبع. هل يكون الجمعة في التاسعة ممكنًا بالنسبة لك؟" },
          { s: "U", task: "قل: نعم، الجمعة مناسب جدًا. هل يمكنه أن يعاود الاتصال بي للتأكيد؟", m: "Ja, Freitag passt sehr gut. Könnte er mich zur Bestätigung zurückrufen?", ok: ["Ja Freitag passt sehr gut könnte er mich zur Bestätigung zurückrufen", "Ja Freitag passt gut könnte er mich zurückrufen", "Ja Freitag passt mir sehr gut könnte er mich zurückrufen", "* könnte er mich * zurückrufen"], o: ["Ja, Freitag passt sehr gut. Könnte er mich zur Bestätigung zurückrufen?", "Ja, Freitag passt sehr gut. Könnte er mir zur Bestätigung zurückrufen?", "Ja, Freitag passt sehr gut. Könnte er mich zur Bestätigung rufen zurück?"], why: ["", "‹zurückrufen› + Akkusativ: ‹mich›.", "مع الفعل الناقص يبقى المنفصل موصولًا في الآخر: ‹zurückrufen›."], ar: "نعم، الجمعة مناسب جدًا. هل يمكنه أن يعاود الاتصال بي للتأكيد؟" },
          { s: "A", de: "Gern. Ich richte es ihm aus. Auf Wiederhören!", ar: "بكل سرور. سأبلغه. إلى اللقاء (على الهاتف)!" }
        ]
      },
      listen: [
        { t: "listen", say: "Guten Tag, hier ist der Anrufbeantworter von Dr. Haas. Wir sind ab Montag wieder für Sie da.", q: "متى تفتح العيادة من جديد؟", o: ["من يوم الاثنين", "اليوم", "يوم الجمعة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Könnten Sie mir die Unterlagen bitte bis Mittwoch per E-Mail schicken?", q: "ماذا يطلب؟", o: ["إرسال الوثائق بالبريد الإلكتروني قبل الأربعاء", "الاتصال يوم الأربعاء", "إحضار الوثائق إلى المكتب"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Die Leitung ist leider besetzt. Bitte versuchen Sie es später noch einmal.", q: "ما المشكلة؟", o: ["الخط مشغول", "الرقم خطأ", "المكتب مغلق"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Könnten Sie mir bitte helfen?", tag: "hoeren" },
        { t: "dict", say: "Ich hätte eine Frage.", tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "Wortakzent bei internationalen Wörtern", ar: "النبر في الكلمات الدولية",
    body: [
      { p: "الكلمات الألمانية العادية نبرها غالبًا على المقطع الأول (‹ar-bei-ten›). لكن الكلمات الدولية لها نهايات تحمل النبر دائمًا:" },
      { table: { head: ["النهاية", "النبر", "أمثلة"], rows: [
        ["‹‑ion›", "النبر على ‹‑ion› (آخر مقطع)", "‹Information, Nation, Produktion›"],
        ["‹‑ieren›", "النبر على ‹‑ie›", "‹telefonieren, studieren, reparieren›"],
        ["‹‑tät›", "النبر على ‹‑tät›", "‹Universität, Qualität›"],
        ["‹‑ei›", "النبر على ‹‑ei›", "‹Bäckerei, Polizei›"],
        ["‹‑ent› / ‹‑ant›", "النبر على المقطع الأخير", "‹Student, Restaurant›"],
        ["‹‑ur›", "النبر على ‹‑ur›", "‹Kultur, Natur›"]
      ] } },
      { tip: "هذه الكلمات تشبه الفرنسية، لكن انتبه: في الألمانية تُنطق كل الحروف. ‹Information› = «إنفورما‑تسيون» (ti = «تسي»)." }
    ],
    drills: [
      { t: "listen", say: "die Information", q: "أين النبر؟", o: ["Infor-ma-TION", "IN-for-ma-tion", "In-FOR-ma-tion"], a: 0, why: "‹‑ion› تحمل النبر." },
      { t: "listen", say: "telefonieren", q: "أين النبر؟", o: ["telefo-NIE-ren", "TE-le-fo-nie-ren", "te-le-FO-nie-ren"], a: 0, why: "‹‑ieren›: النبر على ‹ie›." },
      { t: "listen", say: "die Universität", q: "أين النبر؟", o: ["Universi-TÄT", "U-ni-ver-si-tät", "u-NI-ver-si-tät"], a: 0, why: "‹‑tät› تحمل النبر." },
      { t: "listen", say: "die Polizei", q: "أين النبر؟", o: ["Poli-ZEI", "PO-li-zei", "po-LI-zei"], a: 0, why: "‹‑ei› تحمل النبر." },
      { t: "listen", say: "arbeiten", q: "أين النبر في هذه الكلمة الألمانية العادية؟", o: ["AR-bei-ten", "ar-BEI-ten", "ar-bei-TEN"], a: 0, why: "الكلمات الألمانية الأصلية: النبر غالبًا على المقطع الأول." }
    ],
    say: ["die Information", "die Universität", "die Bäckerei", "telefonieren", "reparieren", "der Student", "die Kultur", "Die Information ist an der Universität.", "Der Student telefoniert mit der Polizei.", "Könnten Sie mir bitte helfen?"]
  },

  write: [
    {
      ar: "اكتب ردًا قصيرًا (50–60 كلمة) على إعلان «Café Morgenrot sucht Servicekraft»: قدّم نفسك، اذكر خبرتك (vor/seit)، لماذا تريد العمل هناك (weil)، ورأيك بنفسك (Ich glaube, dass …)، واطلب موعد مقابلة.",
      de: "Kurze Bewerbung per E-Mail.",
      model: "Sehr geehrte Damen und Herren,\nich habe Ihre Anzeige gelesen und bewerbe mich um die Stelle als Servicekraft. Ich heiße Karim Amrani und bin 26 Jahre alt. Vor zwei Jahren habe ich in einem Hotel in Agadir gearbeitet. Seit einem Jahr lebe ich in Köln und lerne Deutsch. Ich möchte bei Ihnen arbeiten, weil ich gern mit Menschen arbeite. Ich glaube, dass ich gut in Ihr Team passe. Über eine Einladung zu einem Vorstellungsgespräch freue ich mich sehr.\nMit freundlichen Grüßen\nKarim Amrani",
      check: ["‹Sehr geehrte Damen und Herren,›", "‹ich bewerbe mich um die Stelle als …›", "خبرة مع ‹vor› أو ‹seit›", "جملة بـ ‹weil›", "جملة بـ ‹dass›", "طلب مقابلة", "‹Mit freundlichen Grüßen›"]
    },
    {
      ar: "لا تستطيع حضور اجتماع يوم الخميس. اكتب بريدًا مهذبًا لزميلك/مديرك: اعتذر، اذكر السبب، اقترح موعدًا آخر (Wäre … möglich?)، واطلب ردًا (Könnten Sie …?).",
      de: "Einen Termin höflich verschieben.",
      model: "Sehr geehrter Herr Neumann,\nleider kann ich am Donnerstag nicht zur Besprechung kommen, weil ich einen Arzttermin habe. Wäre es auch am Freitag um 9 Uhr möglich? Könnten Sie mir bitte kurz Bescheid geben? Vielen Dank!\nMit freundlichen Grüßen\nKarim Amrani",
      check: ["اعتذار (leider kann ich nicht …)", "السبب بـ ‹weil›", "اقتراح بـ ‹Wäre … möglich?›", "طلب بـ ‹Könnten Sie …?›", "تحية وختام رسميان"]
    }
  ],
  tutor: [
    { title: "Vorstellungsgespräch", ar: "مقابلة عمل", role: "Herr Schneider, Personalchef in einem Hotel in Köln, freundlich aber genau", goal: "sich vorstellen, über Ausbildung und Erfahrung sprechen (Präteritum der Modalverben, Perfekt, vor/seit), Meinungen mit dass und Gründe mit weil ausdrücken", start: "Guten Tag! Nehmen Sie bitte Platz. Erzählen Sie doch mal: Was haben Sie bisher gemacht?" },
    { title: "Anruf in der Firma", ar: "مكالمة مع شركة", role: "Frau Lang, Sekretärin bei der Firma Lindner", goal: "höflich telefonieren mit Konjunktiv II (Könnte ich …? Würden Sie …? Wäre … möglich?), eine Nachricht hinterlassen, einen Termin verschieben", start: "Firma Lindner, Lang am Apparat. Guten Tag, was kann ich für Sie tun?" }
  ]
});

/* Lektion 11 (A2) — Neue Wohnung, neue Nachbarn */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 11,
  level: "A2",
  de: "Neue Wohnung, neue Nachbarn",
  ar: "شقة جديدة، جيران جدد",
  book: "منهج A2 · محتوى أصلي (السكن والانتقال والجيران)",
  goals: [
    "فهم إعلانات الشقق والمقارنة بينها",
    "المقارنة والتفضيل: größer als, so groß wie, am größten",
    "وصف أين يوجد الشيء وأين نضعه: wo? + Dativ / wohin? + Akkusativ",
    "التمييز بين stellen/stehen، legen/liegen، hängen/hängen",
    "فهم نظام العمارة واستعمال المصدر مع zu"
  ],
  units: [
    /* ───────────── 11A ───────────── */
    {
      id: "11A", de: "Wohnungssuche", ar: "البحث عن شقة",
      summary: "إعلانات الشقق، الموقع والتكاليف، زيارة الشقة، المقارنة: Komparativ و Superlativ و als / wie.",
      grammar: [
        {
          h: "المقارنة: Komparativ (‑er) و Superlativ (am ‑sten)",
          table: {
            head: ["الصفة", "Komparativ (أكثر)", "Superlativ (الأكثر)"],
            rows: [
              ["‹klein›", "‹kleiner›", "‹am kleinsten›"],
              ["‹hell›", "‹heller›", "‹am hellsten›"],
              ["‹billig›", "‹billiger›", "‹am billigsten›"],
              ["‹groß›", "‹größer›", "‹am größten›"],
              ["‹alt›", "‹älter›", "‹am ältesten›"],
              ["‹warm›", "‹wärmer›", "‹am wärmsten›"],
              ["‹teuer›", "‹teurer›", "‹am teuersten›"],
              ["‹dunkel›", "‹dunkler›", "‹am dunkelsten›"]
            ]
          },
          tip: "صفات قصيرة كثيرة بحرف a/o/u تأخذ Umlaut: ‹groß – größer›، ‹alt – älter›، ‹jung – jünger›، ‹kurz – kürzer›. والصفات المنتهية بـ ‑t/‑z/‑ß تأخذ ‑esten: ‹am ältesten›، ‹am kürzesten›."
        },
        {
          h: "صيغ شاذة مهمة جدًا",
          table: {
            head: ["الأصل", "Komparativ", "Superlativ"],
            rows: [
              ["‹gut›", "‹besser›", "‹am besten›"],
              ["‹viel›", "‹mehr›", "‹am meisten›"],
              ["‹gern›", "‹lieber›", "‹am liebsten›"],
              ["‹hoch›", "‹höher›", "‹am höchsten›"],
              ["‹nah›", "‹näher›", "‹am nächsten›"]
            ]
          }
        },
        {
          h: "als و wie",
          table: {
            head: ["المعنى", "الصيغة", "مثال"],
            rows: [
              ["مختلف (أكثر/أقل)", "Komparativ + ‹als›", "‹Die Wohnung in Ehrenfeld ist größer als die Wohnung in Deutz.›"],
              ["متساوٍ", "‹so› + الصفة + ‹wie›", "‹Das Zimmer ist so hell wie die Küche.›"],
              ["غير متساوٍ", "‹nicht so› + الصفة + ‹wie›", "‹Die Wohnung ist nicht so teuer wie das Haus.›"]
            ]
          },
          tip: "خطأ شائع عند المتعلمين العرب والفرنسيين: ‹größer wie› ✗ — الصحيح ‹größer **als**› ✓."
        },
        {
          h: "كلمات إعلانات الشقق",
          list: ["‹3-Zi.-Whg.› = شقة من 3 غرف", "‹KM / Kaltmiete› = الإيجار دون التدفئة والمصاريف", "‹NK / Nebenkosten› = المصاريف الإضافية (الماء، التدفئة، القمامة…)", "‹WM / Warmmiete› = الإيجار الشامل", "‹Kaution› = الضمانة (غالبًا 3 أشهر)", "‹EG / 2. OG› = الطابق الأرضي / الطابق الثاني", "‹ab sofort› = متاحة فورًا"]
        }
      ],
      vocab: [
        ["n", "die", "Lage", "-n", "الموقع", "Die Wohnung hat eine gute Lage.", "الشقة في موقع جيد."],
        ["n", "die", "Umgebung", "-en", "المحيط / المنطقة المجاورة", "In der Umgebung gibt es viele Geschäfte.", "في المنطقة المجاورة متاجر كثيرة."],
        ["n", "der", "Stadtteil", "-e", "الحي", "Ehrenfeld ist ein schöner Stadtteil.", "إهرنفلد حي جميل."],
        ["n", "der", "Balkon", "-e", "الشرفة", "Die Wohnung hat einen großen Balkon.", "الشقة لها شرفة كبيرة."],
        ["n", "der", "Garten", "¨", "الحديقة", "Hinter dem Haus ist ein Garten.", "خلف المنزل حديقة."],
        ["n", "der", "Stock", "=Stockwerke", "الطابق", "Die Wohnung liegt im dritten Stock.", "الشقة في الطابق الثالث."],
        ["n", "das", "Erdgeschoss", "-e", "الطابق الأرضي", "Im Erdgeschoss ist eine Bäckerei.", "في الطابق الأرضي مخبزة."],
        ["n", "der", "Altbau", "=Altbauten", "بناء قديم", "Ich mag Altbauwohnungen mit hohen Decken.", "أحب شقق البنايات القديمة ذات الأسقف العالية."],
        ["n", "der", "Neubau", "=Neubauten", "بناء جديد", "Der Neubau hat einen Aufzug.", "البناء الجديد فيه مصعد."],
        ["n", "die", "Kaltmiete", "-n", "الإيجار الأساسي", "Die Kaltmiete beträgt 650 Euro.", "الإيجار الأساسي 650 يورو."],
        ["n", "die", "Nebenkosten", "Pl.", "المصاريف الإضافية", "Die Nebenkosten sind 150 Euro.", "المصاريف الإضافية 150 يورو."],
        ["n", "die", "Kaution", "-en", "الضمانة (مبلغ التأمين)", "Die Kaution ist drei Monatsmieten.", "الضمانة إيجار ثلاثة أشهر."],
        ["n", "die", "Vermieterin", "-nen", "المؤجّرة", "Die Vermieterin zeigt uns die Wohnung.", "المؤجّرة تُرينا الشقة."],
        ["n", "die", "Besichtigung", "-en", "المعاينة (زيارة الشقة)", "Die Besichtigung ist am Samstag um 10 Uhr.", "المعاينة يوم السبت في العاشرة."],
        ["n", "der", "Quadratmeter", "-", "المتر المربع", "Die Wohnung hat 70 Quadratmeter.", "الشقة مساحتها 70 مترًا مربعًا."],
        ["n", "das", "Schlafzimmer", "-", "غرفة النوم", "Das Schlafzimmer ist ruhig.", "غرفة النوم هادئة."],
        ["n", "das", "Wohnzimmer", "-", "غرفة الجلوس", "Das Wohnzimmer ist sehr hell.", "غرفة الجلوس مضيئة جدًا."],
        ["n", "der", "Flur", "-e", "الممر", "Im Flur hängt ein Spiegel.", "في الممر مرآة معلّقة."],
        ["a", "", "hell", "heller, am hellsten", "مضيء", "Das Zimmer ist hell und freundlich.", "الغرفة مضيئة ولطيفة."],
        ["a", "", "dunkel", "dunkler, am dunkelsten", "مظلم", "Die Küche ist leider dunkel.", "المطبخ مظلم للأسف."],
        ["a", "", "ruhig", "ruhiger, am ruhigsten", "هادئ", "Die Straße ist sehr ruhig.", "الشارع هادئ جدًا."],
        ["a", "", "zentral", "", "في المركز / قريب من كل شيء", "Die Wohnung liegt sehr zentral.", "الشقة في موقع مركزي جدًا."],
        ["a", "", "gemütlich", "", "مريح / دافئ الأجواء", "Das Wohnzimmer ist gemütlich.", "غرفة الجلوس مريحة."],
        ["a", "", "günstig", "", "بسعر مناسب", "Die Miete ist günstig.", "الإيجار بسعر مناسب."],
        ["a", "", "renoviert", "", "مُجدّد / مرمّم", "Die Wohnung ist frisch renoviert.", "الشقة مرمّمة حديثًا."],
        ["a", "", "besser", "gut – besser – am besten", "أفضل", "Diese Wohnung gefällt mir besser.", "هذه الشقة تعجبني أكثر."],
        ["a", "", "lieber", "gern – lieber – am liebsten", "أفضّل", "Ich wohne lieber im Zentrum.", "أفضّل السكن في المركز."],
        ["a", "", "mehr", "viel – mehr – am meisten", "أكثر", "Die Wohnung kostet mehr als 800 Euro.", "الشقة تكلّف أكثر من 800 يورو."],
        ["p", "", "als", "Komparativ + als", "من (في المقارنة)", "Köln ist größer als Bonn.", "كولونيا أكبر من بون."],
        ["p", "", "so … wie", "", "مثل (في المساواة)", "Die Küche ist so groß wie das Bad.", "المطبخ كبير مثل الحمّام."],
        ["x", "", "in der Nähe", "", "قريب", "Ist ein Supermarkt in der Nähe?", "هل يوجد سوبرماركت قريب؟"]
      ],
      phrases: [
        ["Die Wohnung in Ehrenfeld ist größer als die Wohnung in Deutz.", "الشقة في إهرنفلد أكبر من الشقة في دويتس."],
        ["Das Zimmer ist so hell wie die Küche.", "الغرفة مضيئة مثل المطبخ."],
        ["Am liebsten möchte ich eine Wohnung mit Balkon.", "أكثر ما أتمناه شقة بشرفة."],
        ["Wie hoch sind die Nebenkosten?", "كم تبلغ المصاريف الإضافية؟"],
        ["Ab wann ist die Wohnung frei?", "من متى تكون الشقة متاحة؟"],
        ["Ist die Kaution verhandelbar?", "هل الضمانة قابلة للتفاوض؟"],
        ["Die zweite Wohnung gefällt mir am besten.", "الشقة الثانية تعجبني أكثر من الكل."]
      ],
      ex: [
        { t: "gap", q: "أكمل بـ Komparativ.", s: "Die Wohnung in Ehrenfeld ist ___ als die Wohnung in Deutz. (groß)", a: ["größer"], why: "‹groß → größer› مع Umlaut.", tag: "komparativ" },
        { t: "gap", q: "أكمل بـ Komparativ.", s: "Der Neubau ist ___ als der Altbau. (teuer)", a: ["teurer"], why: "‹teuer → teurer› (يسقط e).", tag: "komparativ" },
        { t: "gap", q: "أكمل بـ Superlativ.", s: "Die Wohnung mit Balkon gefällt mir am ___. (gut)", a: ["besten"], why: "‹gut – besser – am besten›.", tag: "komparativ" },
        { t: "gap", q: "أكمل بـ Superlativ.", s: "Im Zentrum ist die Miete am ___. (hoch)", a: ["höchsten"], why: "‹hoch – höher – am höchsten›.", tag: "komparativ" },
        { t: "gap", q: "أكمل بـ als أو wie.", s: "Mein Zimmer ist kleiner ___ dein Zimmer.", a: ["als"], why: "Komparativ + ‹als›.", tag: "komparativ" },
        { t: "gap", q: "أكمل بـ als أو wie.", s: "Die Küche ist so groß ___ das Wohnzimmer.", a: ["wie"], why: "‹so … wie› = مساواة.", tag: "komparativ" },
        { t: "mc", q: "اختر الصحيح.", s: "Ich wohne ___ im Zentrum als am Stadtrand.", o: ["lieber", "gerner", "mehr gern"], a: 0, why: "‹gern – lieber – am liebsten›.", tag: "komparativ" },
        { t: "mc", q: "اختر الصحيح.", s: "Berlin ist ___ Stadt in Deutschland.", o: ["die größte", "die größer", "am größten"], a: 0, why: "قبل الاسم: ‹die größte Stadt›. ‹am größten› تأتي بعد الفعل: ‹Berlin ist am größten.›", tag: "komparativ" },
        { t: "mc", q: "اختر الصحيح.", s: "Die alte Wohnung war nicht so hell ___ die neue.", o: ["wie", "als", "dass"], a: 0, why: "‹nicht so … wie›.", tag: "komparativ" },
        { t: "mc", q: "ماذا تعني ‹Nebenkosten›؟", o: ["المصاريف الإضافية (الماء، التدفئة…)", "ثمن الأثاث", "إيجار الجيران"], a: 0, why: "‹die Nebenkosten› = المصاريف الإضافية على الإيجار.", tag: "wortschatz" },
        { t: "match", q: "صِل الكلمة بمعناها.", pairs: [["die Kaution", "الضمانة"], ["der Balkon", "الشرفة"], ["das Erdgeschoss", "الطابق الأرضي"], ["die Lage", "الموقع"], ["hell", "مضيء"]], tag: "wortschatz" },
        { t: "order", q: "رتّب المقارنة.", a: "Die Wohnung ist billiger als das Haus.", why: "Komparativ ‹billiger› + ‹als›.", tag: "komparativ" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "هذه الشقة أكبر من شقتي.", a: ["Diese Wohnung ist größer als meine Wohnung.", "Diese Wohnung ist größer als meine.", "Die Wohnung ist größer als meine Wohnung.", "Die Wohnung ist größer als meine."], tag: "komparativ" },
        { t: "read", title: "Zwei Wohnungsanzeigen", text: "A) Köln-Ehrenfeld: 3-Zimmer-Wohnung, 78 m², Altbau, 2. Stock, großer Balkon, ruhige Lage. Kaltmiete 890 Euro + 180 Euro Nebenkosten. Frei ab 1. Mai. — B) Köln-Kalk: 2-Zimmer-Wohnung, 55 m², Neubau, Erdgeschoss mit kleinem Garten, Aufzug, U-Bahn direkt vor der Tür. Kaltmiete 690 Euro + 140 Euro Nebenkosten. Frei ab sofort.", tr: "أ) كولونيا‑إهرنفلد: شقة 3 غرف، 78 م²، بناء قديم، الطابق الثاني، شرفة كبيرة، موقع هادئ. الإيجار الأساسي 890 يورو + 180 يورو مصاريف إضافية. متاحة من 1 ماي. — ب) كولونيا‑كالك: شقة غرفتين، 55 م²، بناء جديد، طابق أرضي مع حديقة صغيرة، مصعد، المترو أمام الباب مباشرة. الإيجار الأساسي 690 يورو + 140 يورو مصاريف. متاحة فورًا.", items: [
          { t: "tf", s: "Wohnung A ist größer als Wohnung B.", a: true, why: "78 m² أكبر من 55 m²." },
          { t: "tf", s: "Wohnung B ist teurer als Wohnung A.", a: false, why: "B: 690 + 140 = 830 €، A: 890 + 180 = 1070 €." },
          { t: "tf", s: "Man kann sofort in Wohnung B einziehen.", a: true, why: "‹Frei ab sofort›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Die Wohnungsbesichtigung", ar: "معاينة الشقة",
        scene: "تزور شقة في إهرنفلد مع المؤجّرة السيدة كروغر. أمس رأيت شقة أخرى في كالك.",
        who: { A: "Frau Krüger" },
        lines: [
          { s: "A", de: "So, das ist das Wohnzimmer. Wie gefällt Ihnen die Wohnung?", ar: "هذه غرفة الجلوس. كيف تجد الشقة؟" },
          { s: "U", task: "قل: تعجبني جدًا. هي أكبر وأكثر إضاءة من الشقة التي رأيتها أمس (der Wohnung gestern).", m: "Sie gefällt mir sehr gut. Sie ist größer und heller als die Wohnung gestern.", ok: ["Sie gefällt mir sehr gut sie ist größer und heller als die Wohnung gestern", "Sie gefällt mir gut sie ist größer und heller als die Wohnung gestern", "Die Wohnung gefällt mir sehr gut sie ist größer und heller als *", "* größer und heller als *"], o: ["Sie gefällt mir sehr gut. Sie ist größer und heller als die Wohnung gestern.", "Sie gefällt mir sehr gut. Sie ist größer und heller wie die Wohnung gestern.", "Sie gefällt mir sehr gut. Sie ist mehr groß und mehr hell als die Wohnung gestern."], why: ["", "بعد Komparativ: ‹als› وليس ‹wie›.", "في الألمانية: ‹größer›، ‹heller› (‑er) وليس ‹mehr groß›."], ar: "تعجبني جدًا. هي أكبر وأكثر إضاءة من شقة الأمس." },
          { s: "A", de: "Ja, die Wohnung ist wirklich schön hell. Und der Balkon ist nach Süden.", ar: "نعم، الشقة مضيئة فعلًا. والشرفة جهة الجنوب." },
          { s: "U", task: "اسأل: كم تبلغ المصاريف الإضافية؟ ومن متى تكون الشقة متاحة؟", m: "Wie hoch sind die Nebenkosten? Und ab wann ist die Wohnung frei?", ok: ["Wie hoch sind die Nebenkosten und ab wann ist die Wohnung frei", "Wie viel sind die Nebenkosten und ab wann ist die Wohnung frei", "Wie hoch sind die Nebenkosten *", "* ab wann ist die Wohnung frei"], o: ["Wie hoch sind die Nebenkosten? Und ab wann ist die Wohnung frei?", "Wie hoch ist die Nebenkosten? Und ab wann ist die Wohnung frei?", "Wie hoch sind die Nebenkosten? Und seit wann ist die Wohnung frei?"], why: ["", "‹die Nebenkosten› جمع → ‹sind›.", "للمستقبل: ‹ab wann› (من متى)، و‹seit wann› للماضي المستمر."], ar: "كم تبلغ المصاريف الإضافية؟ ومن متى تكون الشقة متاحة؟" },
          { s: "A", de: "Die Nebenkosten sind 180 Euro. Und Sie können am 1. Mai einziehen.", ar: "المصاريف 180 يورو. ويمكنك أن تنتقل في 1 ماي." },
          { s: "U", task: "قل: الشقة أغلى من شقة كالك، لكنها تعجبني أكثر. أريد أن أستأجرها.", m: "Die Wohnung ist teurer als die Wohnung in Kalk, aber sie gefällt mir besser. Ich möchte sie mieten.", ok: ["Die Wohnung ist teurer als die Wohnung in Kalk aber sie gefällt mir besser ich möchte sie mieten", "Die Wohnung ist teurer als die in Kalk aber sie gefällt mir besser *", "* teurer als * aber sie gefällt mir besser *"], o: ["Die Wohnung ist teurer als die Wohnung in Kalk, aber sie gefällt mir besser. Ich möchte sie mieten.", "Die Wohnung ist teuerer als die Wohnung in Kalk, aber sie gefällt mir gutter. Ich möchte sie mieten.", "Die Wohnung ist teurer als die Wohnung in Kalk, aber sie gefällt mir mehr gut. Ich möchte sie mieten."], why: ["", "‹teuer → teurer›، و‹gut → besser›.", "‹gut› شاذة: ‹besser›."], ar: "الشقة أغلى من شقة كالك، لكنها تعجبني أكثر. أريد أن أستأجرها." },
          { s: "A", de: "Wunderbar! Dann schicke ich Ihnen den Mietvertrag per E-Mail.", ar: "رائع! إذن سأرسل لك عقد الإيجار بالبريد الإلكتروني." }
        ]
      },
      listen: [
        { t: "listen", say: "Die Wohnung ist zwar kleiner als meine alte, aber sie ist viel ruhiger.", q: "ما ميزة الشقة الجديدة؟", o: ["أهدأ", "أكبر", "أرخص"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Die Kaltmiete beträgt siebenhundert Euro, die Nebenkosten sind hundertfünfzig Euro.", q: "كم الإيجار الأساسي؟", o: ["700 يورو", "150 يورو", "850 يورو"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Am liebsten möchte ich im Erdgeschoss wohnen, mit einem kleinen Garten für meinen Hund.", q: "أين يريد أن يسكن؟", o: ["في الطابق الأرضي مع حديقة", "في الطابق الأخير", "في بناء جديد بمصعد"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Die Wohnung ist größer als mein Zimmer.", tag: "hoeren" },
        { t: "dict", say: "Wie hoch sind die Nebenkosten?", tag: "hoeren" }
      ]
    },

    /* ───────────── 11B ───────────── */
    {
      id: "11B", de: "Der Umzug", ar: "الانتقال إلى البيت الجديد",
      summary: "الانتقال وترتيب الأثاث؛ حروف الجر ذات الحالتين: wo? + Dativ و wohin? + Akkusativ؛ stellen/stehen، legen/liegen، hängen، setzen/sitzen.",
      grammar: [
        {
          h: "حروف الجر ذات الحالتين (Wechselpräpositionen)",
          p: "تسعة حروف: ‹in, an, auf, unter, über, vor, hinter, neben, zwischen›. السؤال يحدد الحالة:",
          table: {
            head: ["السؤال", "المعنى", "الحالة", "مثال"],
            rows: [
              ["‹Wo?›", "مكان ثابت، لا حركة", "Dativ", "‹Das Bild hängt **an der** Wand.›"],
              ["‹Wohin?›", "حركة نحو مكان (اتجاه)", "Akkusativ", "‹Ich hänge das Bild **an die** Wand.›"]
            ]
          },
          tip: "تذكّر: تعلّمت Wo? + Dativ في الدرس 6. الجديد هنا: مع الحركة نحو مكان نستعمل **Akkusativ**: ‹in den / in die / ins›."
        },
        {
          h: "أزواج الأفعال: حركة ↔ وضع",
          table: {
            head: ["Wohin? + Akk. (أفعال حركة، منتظمة)", "Wo? + Dat. (أفعال وضع، شاذة)"],
            rows: [
              ["‹stellen›: ‹Ich stelle die Lampe **auf den** Tisch.›", "‹stehen›: ‹Die Lampe steht **auf dem** Tisch.›"],
              ["‹legen›: ‹Ich lege das Buch **ins** Regal.›", "‹liegen›: ‹Das Buch liegt **im** Regal.›"],
              ["‹hängen›: ‹Ich hänge die Jacke **in den** Schrank.›", "‹hängen›: ‹Die Jacke hängt **im** Schrank.›"],
              ["‹setzen›: ‹Ich setze das Kind **auf das** Sofa.›", "‹sitzen›: ‹Das Kind sitzt **auf dem** Sofa.›"]
            ]
          },
          tip: "‹stellen/stehen› للأشياء الواقفة (قنينة، مصباح، خزانة)، ‹legen/liegen› للأشياء الممدّدة (كتاب، هاتف، سجادة). في Perfekt: ‹Ich habe … gestellt / gelegt / gehängt› لكن ‹Es hat … gestanden / gelegen / gehangen›."
        },
        {
          h: "الأدوات في Akkusativ و Dativ",
          table: {
            head: ["", "مذكر", "محايد", "مؤنث", "جمع"],
            rows: [
              ["Wohin? (Akk.)", "‹in den Schrank›", "‹ins (= in das) Regal›", "‹in die Küche›", "‹in die Kisten›"],
              ["Wo? (Dat.)", "‹im (= in dem) Schrank›", "‹im Regal›", "‹in der Küche›", "‹in den Kisten›"]
            ]
          },
          list: ["‹an das = ans›، ‹an dem = am›", "‹auf das = aufs› (في الكلام)"]
        }
      ],
      vocab: [
        ["n", "der", "Umzug", "¨-e", "الانتقال (إلى سكن جديد)", "Am Samstag ist mein Umzug.", "يوم السبت انتقالي."],
        ["n", "der", "Umzugskarton", "-s", "صندوق الانتقال", "Wir brauchen noch zehn Umzugskartons.", "نحتاج عشرة صناديق أخرى."],
        ["n", "die", "Kiste", "-n", "الصندوق", "Stell die Kiste bitte in die Küche.", "ضع الصندوق في المطبخ من فضلك."],
        ["n", "die", "Decke", "-n", "السقف / البطانية", "Die Lampe hängt an der Decke.", "المصباح معلّق في السقف."],
        ["n", "die", "Pflanze", "-n", "النبتة", "Die Pflanze steht am Fenster.", "النبتة عند النافذة."],
        ["n", "der", "Vorhang", "¨-e", "الستارة", "Hängst du die Vorhänge auf?", "هل تعلّق الستائر؟"],
        ["n", "die", "Steckdose", "-n", "المقبس الكهربائي", "Neben dem Bett ist eine Steckdose.", "بجانب السرير مقبس كهربائي."],
        ["n", "der", "Nagel", "¨", "المسمار", "Ich brauche einen Nagel für das Bild.", "أحتاج مسمارًا للوحة."],
        ["n", "die", "Bohrmaschine", "-n", "آلة الثقب", "Kannst du mir deine Bohrmaschine leihen?", "هل يمكنك أن تعيرني آلة الثقب؟"],
        ["n", "der", "Umzugswagen", "-", "شاحنة الانتقال", "Der Umzugswagen steht vor dem Haus.", "شاحنة الانتقال أمام المنزل."],
        ["n", "die", "Waschmaschine", "-n", "آلة الغسيل", "Die Waschmaschine kommt ins Bad.", "آلة الغسيل توضع في الحمّام."],
        ["n", "der", "Esstisch", "-e", "طاولة الأكل", "Wir stellen den Esstisch in die Küche.", "نضع طاولة الأكل في المطبخ."],
        ["n", "der", "Nachttisch", "-e", "الطاولة الجانبية للسرير", "Das Handy liegt auf dem Nachttisch.", "الهاتف على الطاولة الجانبية."],
        ["n", "das", "Kissen", "-", "الوسادة", "Die Kissen liegen auf dem Sofa.", "الوسائد على الأريكة."],
        ["v", "", "umziehen", "zieht um, ist umgezogen", "ينتقل (إلى سكن آخر)", "Wir ziehen nächsten Monat um.", "سننتقل الشهر القادم."],
        ["v", "", "packen", "hat gepackt", "يحزم / يعبّئ", "Ich packe die Bücher in die Kisten.", "أعبّئ الكتب في الصناديق."],
        ["v", "", "auspacken", "packt aus, hat ausgepackt", "يفرغ / يفتح (الصناديق)", "Heute packen wir die Kisten aus.", "اليوم نفرغ الصناديق."],
        ["v", "", "stellen", "hat gestellt", "يضع (واقفًا)", "Ich stelle die Flasche in den Kühlschrank.", "أضع القنينة في الثلاجة."],
        ["v", "", "legen", "hat gelegt", "يضع (ممدّدًا)", "Leg das Handy auf den Tisch!", "ضع الهاتف على الطاولة!"],
        ["v", "", "setzen", "hat gesetzt", "يُجلس", "Die Mutter setzt das Baby auf den Stuhl.", "الأم تُجلس الطفل على الكرسي."],
        ["v", "", "hängen (Akk.)", "hat gehängt", "يعلّق", "Wir hängen das Bild über das Sofa.", "نعلّق اللوحة فوق الأريكة."],
        ["v", "", "bohren", "hat gebohrt", "يثقب", "Am Sonntag darf man nicht bohren.", "يوم الأحد لا يُسمح بالثقب."],
        ["v", "", "leihen", "hat geliehen", "يعير / يستعير", "Kannst du mir dein Auto leihen?", "هل تعيرني سيارتك؟"],
        ["v", "", "tragen", "trägt, hat getragen", "يحمل", "Hilfst du mir, das Sofa zu tragen?", "هل تساعدني في حمل الأريكة؟"],
        ["a", "", "schwer", "", "ثقيل / صعب", "Der Schrank ist sehr schwer.", "الخزانة ثقيلة جدًا."],
        ["a", "", "leicht", "", "خفيف / سهل", "Die Kiste ist leicht.", "الصندوق خفيف."],
        ["p", "", "in / an / auf …", "wo? + Dat. / wohin? + Akk.", "حروف الجر ذات الحالتين", "Ich lege das Buch auf den Tisch. – Das Buch liegt auf dem Tisch.", "أضع الكتاب على الطاولة. – الكتاب على الطاولة."],
        ["q", "", "wohin?", "+ Akk.", "إلى أين؟", "Wohin stellen wir das Sofa?", "أين نضع الأريكة؟"]
      ],
      phrases: [
        ["Wohin stellen wir den Schrank? – An die Wand neben das Fenster.", "أين نضع الخزانة؟ – عند الجدار بجانب النافذة."],
        ["Leg die Bücher bitte ins Regal.", "ضع الكتب في الرف من فضلك."],
        ["Die Lampe steht jetzt auf dem Schreibtisch.", "المصباح الآن على مكتب الكتابة."],
        ["Kannst du mir beim Umzug helfen?", "هل يمكنك مساعدتي في الانتقال؟"],
        ["Ich hänge das Bild über das Sofa.", "أعلّق اللوحة فوق الأريكة."],
        ["Vorsicht, der Karton ist schwer!", "انتبه، الصندوق ثقيل!"],
        ["Wo ist mein Handy? – Es liegt auf dem Nachttisch.", "أين هاتفي؟ – إنه على الطاولة الجانبية."]
      ],
      ex: [
        { t: "mc", q: "اختر الصحيح (Wohin? = Akkusativ).", s: "Ich stelle die Lampe auf ___ Tisch.", o: ["den", "dem", "der"], a: 0, why: "حركة (‹stellen›) → Akkusativ: ‹auf den Tisch›.", tag: "wechselpraep" },
        { t: "mc", q: "اختر الصحيح (Wo? = Dativ).", s: "Die Lampe steht auf ___ Tisch.", o: ["dem", "den", "das"], a: 0, why: "وضع (‹stehen›) → Dativ: ‹auf dem Tisch›.", tag: "wechselpraep" },
        { t: "mc", q: "اختر الفعل الصحيح.", s: "Das Buch ___ im Regal.", o: ["liegt", "legt", "stellt"], a: 0, why: "‹im Regal› (Dativ) = مكان → ‹liegt›.", tag: "wechselpraep" },
        { t: "mc", q: "اختر الفعل الصحيح.", s: "Ich ___ das Buch ins Regal.", o: ["lege", "liege", "stehe"], a: 0, why: "‹ins Regal› (Akkusativ) = اتجاه → ‹legen›.", tag: "wechselpraep" },
        { t: "gap", q: "أكمل بـ in den / ins / in die.", s: "Stell die Milch bitte ___ Kühlschrank. (der Kühlschrank)", a: ["in den"], why: "حركة + مذكر → ‹in den›.", tag: "wechselpraep" },
        { t: "gap", q: "أكمل بـ im / in der.", s: "Die Milch steht ___ Kühlschrank.", a: ["im"], why: "مكان + مذكر → ‹im›.", tag: "wechselpraep" },
        { t: "gap", q: "أكمل.", s: "Wir hängen das Bild an ___ Wand. (die Wand)", a: ["die"], why: "‹hängen› (حركة) + مؤنث Akkusativ → ‹an die Wand›.", tag: "wechselpraep" },
        { t: "gap", q: "أكمل.", s: "Das Bild hängt an ___ Wand.", a: ["der"], why: "وضع + مؤنث Dativ → ‹an der Wand›.", tag: "wechselpraep" },
        { t: "gap", q: "أكمل بـ ins / im.", s: "Das Kind läuft ___ Wohnzimmer.", a: ["ins"], why: "حركة نحو الغرفة → ‹ins (in das)›.", tag: "wechselpraep" },
        { t: "mc", q: "اختر السؤال المناسب: «Ich lege die Schlüssel auf den Tisch.»", o: ["Wohin legst du die Schlüssel?", "Wo legst du die Schlüssel?", "Woher legst du die Schlüssel?"], a: 0, why: "Akkusativ (‹auf den›) = ‹Wohin?›.", tag: "wechselpraep" },
        { t: "match", q: "صِل الفعل بمقابله.", pairs: [["stellen", "stehen"], ["legen", "liegen"], ["setzen", "sitzen"], ["packen", "auspacken"]], tag: "wechselpraep" },
        { t: "order", q: "رتّب الجملة.", a: "Ich stelle den Schrank neben das Fenster.", why: "‹stellen› + ‹neben das Fenster› (Akkusativ).", tag: "wechselpraep" },
        { t: "order", q: "رتّب الجملة.", a: "Der Teppich liegt unter dem Tisch.", why: "‹liegen› + ‹unter dem Tisch› (Dativ).", tag: "wechselpraep" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أضع الكتب في الرف.", a: ["Ich lege die Bücher ins Regal.", "Ich stelle die Bücher ins Regal.", "Ich lege die Bücher in das Regal.", "Ich stelle die Bücher in das Regal."], tag: "wechselpraep" },
        { t: "read", title: "Nachricht an die Umzugshelfer", text: "Hallo ihr Lieben, danke, dass ihr mir am Samstag beim Umzug helft! Hier ein kleiner Plan: Das Sofa kommt ins Wohnzimmer an die lange Wand. Den Esstisch stellen wir in die Küche vor das Fenster. Das Bett und den Kleiderschrank tragen wir ins Schlafzimmer. Die Kisten mit den Büchern stellt ihr bitte erst mal in den Flur. Die Waschmaschine kommt ins Bad. Für Pizza und Getränke ist gesorgt! Bis Samstag, Nadia", tr: "مرحبًا يا أعزّائي، شكرًا لأنكم ستساعدونني في الانتقال يوم السبت! هذه خطة صغيرة: الأريكة توضع في غرفة الجلوس عند الجدار الطويل. طاولة الأكل نضعها في المطبخ أمام النافذة. السرير وخزانة الملابس نحملهما إلى غرفة النوم. صناديق الكتب ضعوها مؤقتًا في الممر. آلة الغسيل توضع في الحمّام. البيتزا والمشروبات مضمونة! إلى السبت، نادية", items: [
          { t: "tf", s: "Der Esstisch kommt ins Wohnzimmer.", a: false, why: "‹Den Esstisch stellen wir in die Küche›." },
          { t: "tf", s: "Die Bücherkisten stehen zuerst im Flur.", a: true, why: "‹stellt ihr bitte erst mal in den Flur›." },
          { t: "tf", s: "Die Helfer bekommen etwas zu essen.", a: true, why: "‹Für Pizza und Getränke ist gesorgt!›" }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Wohin mit dem Sofa?", ar: "أين نضع الأريكة؟",
        scene: "صديقك يان يساعدك في الانتقال. تقرّران معًا أين توضع الأشياء.",
        who: { A: "Jan" },
        lines: [
          { s: "A", de: "Puh, das Sofa ist schwer! Wohin stellen wir es?", ar: "أوف، الأريكة ثقيلة! أين نضعها؟" },
          { s: "U", task: "قل: نضعها في غرفة الجلوس، عند الجدار تحت النافذة.", m: "Wir stellen es ins Wohnzimmer an die Wand unter das Fenster.", ok: ["Wir stellen es ins Wohnzimmer an die Wand unter das Fenster", "Wir stellen das Sofa ins Wohnzimmer an die Wand unter das Fenster", "Ins Wohnzimmer an die Wand unter das Fenster", "Wir stellen es ins Wohnzimmer *", "* ins Wohnzimmer an die Wand *"], o: ["Wir stellen es ins Wohnzimmer an die Wand unter das Fenster.", "Wir stellen es im Wohnzimmer an der Wand unter dem Fenster.", "Wir legen es ins Wohnzimmer an die Wand unter das Fenster."], why: ["", "مع ‹stellen› (حركة/اتجاه) نستعمل Akkusativ: ‹ins›، ‹an die›، ‹unter das›.", "الأريكة «تقف» → ‹stellen› وليس ‹legen›."], ar: "نضعها في غرفة الجلوس عند الجدار تحت النافذة." },
          { s: "A", de: "Gute Idee. Und wo ist der Werkzeugkasten? Ich brauche einen Nagel für dein Bild.", ar: "فكرة جيدة. وأين صندوق الأدوات؟ أحتاج مسمارًا للوحتك." },
          { s: "U", task: "قل: صندوق الأدوات في المطبخ على الكرسي.", m: "Der Werkzeugkasten steht in der Küche auf dem Stuhl.", ok: ["Der Werkzeugkasten steht in der Küche auf dem Stuhl", "Er steht in der Küche auf dem Stuhl", "In der Küche auf dem Stuhl", "Der Werkzeugkasten ist in der Küche auf dem Stuhl", "Er ist in der Küche auf dem Stuhl"], o: ["Der Werkzeugkasten steht in der Küche auf dem Stuhl.", "Der Werkzeugkasten steht in die Küche auf den Stuhl.", "Der Werkzeugkasten stellt in der Küche auf dem Stuhl."], why: ["", "‹Wo?› → Dativ: ‹in der Küche›، ‹auf dem Stuhl›.", "الوضع الثابت: ‹steht› وليس ‹stellt›."], ar: "صندوق الأدوات في المطبخ على الكرسي." },
          { s: "A", de: "Okay. Wohin soll ich das Bild hängen?", ar: "حسنًا. أين أعلّق اللوحة؟" },
          { s: "U", task: "قل: من فضلك علّقها فوق الأريكة. لكن لا تثقب الآن، اليوم الأحد!", m: "Häng es bitte über das Sofa. Aber bohr jetzt nicht, heute ist Sonntag!", ok: ["Häng es bitte über das Sofa aber bohr jetzt nicht heute ist Sonntag", "Häng das Bild bitte über das Sofa *", "Bitte häng es über das Sofa *", "Häng es bitte über das Sofa *"], o: ["Häng es bitte über das Sofa. Aber bohr jetzt nicht, heute ist Sonntag!", "Häng es bitte über dem Sofa. Aber bohr jetzt nicht, heute ist Sonntag!", "Häng es bitte über das Sofa. Aber bohrst du jetzt nicht, heute ist Sonntag!"], why: ["", "حركة التعليق → Akkusativ: ‹über das Sofa›.", "الأمر مع ‹du›: ‹bohr nicht!› بدون ‹du›."], ar: "علّقها فوق الأريكة من فضلك. لكن لا تثقب الآن، اليوم الأحد!" },
          { s: "A", de: "Stimmt, Sonntagsruhe! Dann trinken wir jetzt erst mal einen Kaffee.", ar: "صحيح، راحة الأحد! إذن نشرب قهوة أولًا." }
        ]
      },
      listen: [
        { t: "listen", say: "Die Schlüssel liegen auf dem Regal im Flur, neben der Lampe.", q: "أين المفاتيح؟", o: ["على الرف في الممر", "في المطبخ على الطاولة", "في الخزانة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Stell die Pflanze bitte nicht ans Fenster, da ist es zu kalt.", q: "لماذا لا يضع النبتة عند النافذة؟", o: ["المكان بارد جدًا", "المكان مظلم", "النافذة مكسورة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Wir ziehen am fünfzehnten um. Kannst du uns mit dem Auto helfen?", q: "ماذا يطلب؟", o: ["المساعدة بالسيارة", "إعارة صناديق", "المساعدة في الطبخ"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Ich lege das Buch auf den Tisch.", tag: "hoeren" },
        { t: "dict", say: "Das Bild hängt an der Wand.", tag: "hoeren" }
      ]
    },

    /* ───────────── 11C ───────────── */
    {
      id: "11C", de: "Die Hausordnung", ar: "نظام العمارة",
      summary: "الجيران، أوقات الهدوء، فرز القمامة، الشكوى بأدب؛ المصدر مع zu: ‹Es ist verboten, … zu …›، والفرق بين ‹nicht müssen› و‹nicht dürfen›.",
      grammar: [
        {
          h: "المصدر مع zu (Infinitiv mit zu)",
          p: "بعد بعض العبارات والأفعال تأتي جملة بالمصدر في **الآخر** و‹zu› قبله:",
          table: {
            head: ["العبارة", "مثال"],
            rows: [
              ["‹Es ist verboten, …›", "‹Es ist verboten, im Treppenhaus **zu rauchen**.›"],
              ["‹Es ist (nicht) erlaubt, …›", "‹Es ist nicht erlaubt, nach 22 Uhr laut Musik **zu hören**.›"],
              ["‹Es ist wichtig, …›", "‹Es ist wichtig, den Müll **zu trennen**.›"],
              ["‹Vergiss nicht, …›", "‹Vergiss nicht, die Tür **abzuschließen**!›"],
              ["‹Ich habe keine Lust / keine Zeit, …›", "‹Ich habe keine Lust, heute **aufzuräumen**.›"],
              ["‹Ich versuche, …›", "‹Ich versuche, leise **zu sein**.›"]
            ]
          },
          tip: "مع الأفعال المنفصلة تدخل ‹zu› في الوسط: ‹ab**zu**schließen›، ‹auf**zu**räumen›، ‹an**zu**rufen›. ومع الأفعال الناقصة **لا** نستعمل zu: ‹Ich muss aufräumen› (بدون zu)."
        },
        {
          h: "nicht müssen ≠ nicht dürfen",
          table: {
            head: ["الصيغة", "المعنى", "مثال"],
            rows: [
              ["‹Man darf nicht …›", "ممنوع", "‹Man darf im Hof nicht grillen.›"],
              ["‹Man muss nicht …›", "ليس ضروريًا (لكن مسموح)", "‹Man muss den Hof nicht putzen, das macht der Hausmeister.›"],
              ["‹Man braucht nicht … zu …›", "ليس ضروريًا (= muss nicht)", "‹Sie brauchen nicht anzurufen.›"]
            ]
          },
          tip: "خطأ شائع عند الناطقين بالفرنسية والإنجليزية: ‹Du musst nicht rauchen› لا تعني «ممنوع أن تدخّن»، بل «لست مضطرًا أن تدخّن». الممنوع = ‹Du darfst nicht rauchen.›"
        },
        {
          h: "الشكوى بأدب",
          table: {
            head: ["الجملة", "المعنى"],
            rows: [
              ["‹Entschuldigung, ich wohne über Ihnen.›", "عذرًا، أنا أسكن فوقكم."],
              ["‹Die Musik ist leider ein bisschen laut.›", "الموسيقى للأسف عالية قليلًا."],
              ["‹Könnten Sie bitte etwas leiser sein?›", "هل يمكنكم أن تكونوا أهدأ قليلًا من فضلكم؟"],
              ["‹Das tut mir leid, das wusste ich nicht.›", "آسف، لم أكن أعرف ذلك."],
              ["‹Kein Problem, das kann passieren.›", "لا مشكلة، هذا يحدث."]
            ]
          }
        }
      ],
      vocab: [
        ["n", "die", "Hausordnung", "-en", "نظام العمارة", "In der Hausordnung steht, wann man leise sein muss.", "في نظام العمارة مكتوب متى يجب الهدوء."],
        ["n", "der", "Nachbar", "-n", "الجار", "Mein Nachbar ist sehr nett.", "جاري لطيف جدًا."],
        ["n", "die", "Nachbarin", "-nen", "الجارة", "Die Nachbarin gießt meine Pflanzen.", "الجارة تسقي نباتاتي."],
        ["n", "der", "Lärm", "Sg.", "الضجيج", "Der Lärm von der Straße stört mich.", "ضجيج الشارع يزعجني."],
        ["n", "die", "Ruhe", "Sg.", "الهدوء", "Ich brauche Ruhe zum Lernen.", "أحتاج الهدوء للدراسة."],
        ["n", "die", "Ruhezeit", "-en", "وقت الهدوء", "Die Ruhezeit ist von 22 bis 6 Uhr.", "وقت الهدوء من 22 إلى 6."],
        ["n", "das", "Treppenhaus", "¨-er", "درج العمارة", "Im Treppenhaus darf man nicht rauchen.", "في درج العمارة لا يُسمح بالتدخين."],
        ["n", "der", "Hof", "¨-e", "الفناء", "Die Fahrräder stehen im Hof.", "الدراجات في الفناء."],
        ["n", "der", "Keller", "-", "القبو", "Die Kisten sind im Keller.", "الصناديق في القبو."],
        ["n", "die", "Mülltonne", "-n", "حاوية القمامة", "Die Mülltonnen stehen hinter dem Haus.", "حاويات القمامة خلف المنزل."],
        ["n", "der", "Biomüll", "Sg.", "النفايات العضوية", "Obst und Gemüse kommen in den Biomüll.", "الفواكه والخضروات توضع في النفايات العضوية."],
        ["n", "das", "Altpapier", "Sg.", "الورق القديم (للتدوير)", "Zeitungen kommen ins Altpapier.", "الجرائد توضع في الورق القديم."],
        ["n", "der", "Briefkasten", "¨", "صندوق البريد", "Dein Name steht noch nicht am Briefkasten.", "اسمك لم يُكتب بعد على صندوق البريد."],
        ["n", "die", "Klingel", "-n", "الجرس", "Die Klingel funktioniert nicht.", "الجرس لا يعمل."],
        ["v", "", "trennen", "hat getrennt", "يفرز / يفصل", "In Deutschland trennt man den Müll.", "في ألمانيا يفرزون القمامة."],
        ["v", "", "stören", "hat gestört", "يزعج", "Störe ich?", "هل أزعجك؟"],
        ["v", "", "sich beschweren (über + Akk.)", "hat sich beschwert", "يشتكي (من)", "Der Nachbar beschwert sich über den Lärm.", "الجار يشتكي من الضجيج."],
        ["v", "", "abschließen", "schließt ab, hat abgeschlossen", "يقفل بالمفتاح", "Bitte schließen Sie die Haustür ab.", "أقفل باب العمارة من فضلك."],
        ["v", "", "klingeln", "hat geklingelt", "يرنّ الجرس", "Es hat geklingelt.", "رنّ الجرس."],
        ["v", "", "vergessen", "vergisst, hat vergessen", "ينسى", "Vergiss nicht, den Müll rauszubringen!", "لا تنس أن تُخرج القمامة!"],
        ["v", "", "versuchen", "hat versucht", "يحاول", "Ich versuche, leise zu sein.", "أحاول أن أكون هادئًا."],
        ["v", "", "gießen", "hat gegossen", "يسقي", "Kannst du meine Blumen gießen?", "هل يمكنك أن تسقي زهوري؟"],
        ["v", "", "brauchen … zu", "", "يحتاج إلى (مع النفي: ليس ضروريًا)", "Du brauchst nicht zu kommen.", "لا داعي لأن تأتي."],
        ["a", "", "leise", "", "هادئ (الصوت) / بصوت منخفض", "Bitte sprecht leise, das Baby schläft.", "تكلّموا بهدوء من فضلكم، الطفل نائم."],
        ["a", "", "erlaubt", "", "مسموح", "Ist es erlaubt, im Hof zu grillen?", "هل الشواء في الفناء مسموح؟"],
        ["a", "", "verboten", "", "ممنوع", "Es ist verboten, hier zu parken.", "ممنوع الوقوف هنا."],
        ["x", "", "Lust haben, … zu …", "", "له رغبة في …", "Hast du Lust, mit mir zu kochen?", "هل لديك رغبة في الطبخ معي؟"],
        ["x", "", "den Müll rausbringen", "", "يُخرج القمامة", "Heute bringe ich den Müll raus.", "اليوم أُخرج القمامة."]
      ],
      phrases: [
        ["Es ist verboten, im Treppenhaus zu rauchen.", "ممنوع التدخين في درج العمارة."],
        ["Es ist wichtig, den Müll zu trennen.", "من المهم فرز القمامة."],
        ["Vergiss nicht, die Haustür abzuschließen!", "لا تنس أن تقفل باب العمارة!"],
        ["Hast du Lust, am Samstag zum Hoffest zu kommen?", "هل لديك رغبة في المجيء إلى حفلة الفناء يوم السبت؟"],
        ["Könnten Sie die Musik bitte etwas leiser machen?", "هل يمكنك خفض صوت الموسيقى قليلًا من فضلك؟"],
        ["Das tut mir leid, das wusste ich nicht.", "آسف، لم أكن أعرف ذلك."],
        ["Man muss den Hof nicht putzen, das macht der Hausmeister.", "لا يلزم تنظيف الفناء، الحارس يفعل ذلك."]
      ],
      ex: [
        { t: "gap", q: "أكمل بالمصدر مع zu.", s: "Es ist verboten, im Hof ___ ___. (grillen)", a: ["zu", "grillen"], why: "‹Es ist verboten, … zu grillen.›", tag: "infinitivzu" },
        { t: "gap", q: "أكمل بالمصدر مع zu (فعل منفصل).", s: "Vergiss nicht, die Tür ___. (abschließen)", a: ["abzuschließen"], why: "مع المنفصل تدخل ‹zu› في الوسط: ‹abzuschließen›.", tag: "infinitivzu" },
        { t: "gap", q: "أكمل بالمصدر مع zu (فعل منفصل).", s: "Ich habe keine Lust, heute ___. (aufräumen)", a: ["aufzuräumen"], why: "‹auf + zu + räumen›.", tag: "infinitivzu" },
        { t: "mc", q: "اختر الصحيح.", s: "Ich muss heute den Müll ___.", o: ["rausbringen", "rauszubringen", "zu rausbringen"], a: 0, why: "مع الفعل الناقص (‹muss›) لا نستعمل ‹zu›.", tag: "infinitivzu" },
        { t: "mc", q: "اختر الصحيح.", s: "Es ist wichtig, ___.", o: ["den Müll zu trennen", "zu trennen den Müll", "den Müll trennen zu"], a: 0, why: "‹zu› + المصدر في **آخر** الجملة.", tag: "infinitivzu" },
        { t: "mc", q: "اختر الصحيح.", s: "Hast du Lust, mit mir ins Kino ___?", o: ["zu gehen", "gehen", "gehst"], a: 0, why: "‹Lust haben› + ‹zu› + المصدر.", tag: "infinitivzu" },
        { t: "mc", q: "ماذا يعني: «Sie müssen den Hof nicht putzen.»؟", o: ["ليس ضروريًا أن تنظّفوا الفناء", "ممنوع أن تنظّفوا الفناء", "يجب أن تنظّفوا الفناء"], a: 0, why: "‹nicht müssen› = ليس ضروريًا.", tag: "modal" },
        { t: "mc", q: "اختر الصحيح: «ممنوع إيقاف الدراجات في الممر.»", o: ["Man darf die Fahrräder nicht in den Flur stellen.", "Man muss die Fahrräder nicht in den Flur stellen.", "Man kann die Fahrräder in den Flur stellen."], a: 0, why: "الممنوع = ‹nicht dürfen›.", tag: "modal" },
        { t: "gap", q: "أكمل بحرف الجر.", s: "Die Nachbarin beschwert sich ___ den Lärm.", a: ["über"], why: "‹sich beschweren über› + Akkusativ.", tag: "verbpraep" },
        { t: "match", q: "صِل الكلمة بمعناها.", pairs: [["der Lärm", "الضجيج"], ["das Treppenhaus", "درج العمارة"], ["die Mülltonne", "حاوية القمامة"], ["leise", "هادئ (صوتًا)"], ["abschließen", "يقفل بالمفتاح"]], tag: "wortschatz" },
        { t: "order", q: "رتّب الجملة.", a: "Es ist verboten, im Treppenhaus zu rauchen.", why: "‹zu rauchen› في الآخر.", tag: "infinitivzu" },
        { t: "order", q: "رتّب الجملة.", a: "Ich versuche, leise zu sein.", why: "‹versuchen› + ‹zu› + المصدر.", tag: "infinitivzu" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "من المهم فرز القمامة.", a: ["Es ist wichtig, den Müll zu trennen."], tag: "infinitivzu" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "لا تنس أن تتصل بي!", a: ["Vergiss nicht, mich anzurufen!", "Vergiss nicht, mich anzurufen.", "Vergessen Sie nicht, mich anzurufen!"], tag: "infinitivzu" },
        { t: "read", title: "Aus der Hausordnung", text: "Liebe Mieterinnen und Mieter, für ein gutes Zusammenleben bitten wir Sie: Die Ruhezeiten sind von 13 bis 15 Uhr und von 22 bis 6 Uhr. Am Sonntag ist den ganzen Tag Ruhe. Es ist nicht erlaubt, im Treppenhaus Fahrräder oder Kinderwagen abzustellen. Bitte vergessen Sie nicht, den Müll zu trennen: Papier kommt in die blaue Tonne, Bioabfall in die braune. Grillen auf dem Balkon ist nur mit einem Elektrogrill erlaubt. Den Hof brauchen Sie nicht zu reinigen, das macht der Hausmeister. Ihre Hausverwaltung", tr: "أعزاءنا المستأجرين، من أجل عيش مشترك جيد نرجو منكم: أوقات الهدوء من 13 إلى 15 ومن 22 إلى 6. يوم الأحد هدوء طوال اليوم. لا يُسمح بترك الدراجات أو عربات الأطفال في درج العمارة. لا تنسوا فرز القمامة: الورق في الحاوية الزرقاء، والنفايات العضوية في البنية. الشواء في الشرفة مسموح فقط بشواية كهربائية. لا داعي لتنظيف الفناء، الحارس يفعل ذلك. إدارة العمارة", items: [
          { t: "tf", s: "Am Sonntag muss man den ganzen Tag leise sein.", a: true, why: "‹Am Sonntag ist den ganzen Tag Ruhe.›" },
          { t: "tf", s: "Man darf das Fahrrad im Treppenhaus abstellen.", a: false, why: "‹Es ist nicht erlaubt, im Treppenhaus Fahrräder … abzustellen.›" },
          { t: "tf", s: "Die Mieter müssen den Hof putzen.", a: false, why: "‹Den Hof brauchen Sie nicht zu reinigen›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Die Musik ist zu laut", ar: "الموسيقى عالية جدًا",
        scene: "الساعة 23:00 وعندك امتحان غدًا. جارتك السيدة هوفمان تحت شقتك تستمع إلى موسيقى عالية. تطرق بابها.",
        who: { A: "Frau Hoffmann" },
        lines: [
          { s: "A", de: "Ja, bitte? Oh, guten Abend!", ar: "نعم؟ آه، مساء الخير!" },
          { s: "U", task: "قل: مساء الخير، أنا جارك من فوق. عذرًا، لكن الموسيقى عالية قليلًا.", m: "Guten Abend, ich bin Ihr Nachbar von oben. Entschuldigung, aber die Musik ist ein bisschen laut.", ok: ["Guten Abend ich bin Ihr Nachbar von oben Entschuldigung aber die Musik ist ein bisschen laut", "Guten Abend ich wohne über Ihnen Entschuldigung aber die Musik ist ein bisschen laut", "* die Musik ist ein bisschen laut", "* die Musik ist sehr laut", "* die Musik ist zu laut"], o: ["Guten Abend, ich bin Ihr Nachbar von oben. Entschuldigung, aber die Musik ist ein bisschen laut.", "Guten Abend, ich bin Ihr Nachbar von oben. Entschuldigung, aber die Musik ist ein bisschen leise.", "Guten Abend, ich bin dein Nachbar von oben. Die Musik ist laut, mach leiser!"], why: ["", "‹leise› = هادئ، عكس ما تريد قوله.", "مع جارة لا تعرفها: ‹Sie / Ihr› والطلب بأدب."], ar: "مساء الخير، أنا جارك من فوق. عذرًا، لكن الموسيقى عالية قليلًا." },
          { s: "A", de: "Oh, das tut mir leid! Ich habe Geburtstag und ein paar Freunde sind da.", ar: "آه، آسفة! إنه عيد ميلادي وبعض الأصدقاء هنا." },
          { s: "U", task: "قل: عيد ميلاد سعيد! لكن عندي امتحان غدًا. هل يمكنك أن تخفضي الموسيقى قليلًا من فضلك؟", m: "Alles Gute zum Geburtstag! Aber ich habe morgen eine Prüfung. Könnten Sie die Musik bitte etwas leiser machen?", ok: ["Alles Gute zum Geburtstag aber ich habe morgen eine Prüfung könnten Sie die Musik bitte etwas leiser machen", "Alles Gute zum Geburtstag * könnten Sie die Musik bitte leiser machen", "* könnten Sie die Musik bitte etwas leiser machen", "* könnten Sie bitte etwas leiser sein"], o: ["Alles Gute zum Geburtstag! Aber ich habe morgen eine Prüfung. Könnten Sie die Musik bitte etwas leiser machen?", "Alles Gute zum Geburtstag! Aber ich habe morgen eine Prüfung. Könnten Sie die Musik bitte etwas leiser zu machen?", "Alles Gute zum Geburtstag! Aber ich habe morgen eine Prüfung. Könnten Sie die Musik bitte etwas lauter machen?"], why: ["", "بعد الفعل الناقص ‹Könnten› لا نستعمل ‹zu›.", "‹lauter› = أعلى صوتًا، والمطلوب ‹leiser›."], ar: "عيد ميلاد سعيد! لكن عندي امتحان غدًا. هل يمكنك خفض الموسيقى قليلًا من فضلك؟" },
          { s: "A", de: "Natürlich, kein Problem! Und es ist ja auch schon nach zehn. Entschuldigung noch mal!", ar: "بالطبع، لا مشكلة! وقد تجاوزت الساعة العاشرة أيضًا. آسفة مرة أخرى!" },
          { s: "U", task: "قل: لا بأس، هذا يحدث. أتمنى لك أمسية جميلة!", m: "Kein Problem, das kann passieren. Ich wünsche Ihnen noch einen schönen Abend!", ok: ["Kein Problem das kann passieren ich wünsche Ihnen noch einen schönen Abend", "Kein Problem das kann passieren *", "Kein Problem ich wünsche Ihnen einen schönen Abend", "* einen schönen Abend"], o: ["Kein Problem, das kann passieren. Ich wünsche Ihnen noch einen schönen Abend!", "Kein Problem, das kann passieren. Ich wünsche Sie noch einen schönen Abend!", "Kein Problem, das kann passieren. Ich wünsche Ihnen noch ein schönen Abend!"], why: ["", "‹wünschen› + Dativ للشخص: ‹Ihnen›.", "‹der Abend› مذكر Akkusativ: ‹einen schönen Abend›."], ar: "لا بأس، هذا يحدث. أتمنى لك أمسية جميلة!" }
        ]
      },
      listen: [
        { t: "listen", say: "Bitte denken Sie daran: Am Mittwoch wird der Biomüll abgeholt. Stellen Sie die braune Tonne an die Straße.", q: "ماذا يحدث يوم الأربعاء؟", o: ["تُجمع النفايات العضوية", "يُنظّف الدرج", "يأتي الحارس"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Du brauchst den Schlüssel nicht mitzunehmen, ich bin den ganzen Tag zu Hause.", q: "لماذا لا يحتاج المفتاح؟", o: ["المتكلّمة في البيت طوال اليوم", "الباب مفتوح", "الحارس عنده مفتاح"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Hast du Lust, am Samstag beim Hoffest zu helfen? Wir brauchen noch Leute für den Grill.", q: "ما الذي تحتاجه حفلة الفناء؟", o: ["أشخاص للشواء", "كراسي", "موسيقى"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Es ist verboten, hier zu rauchen.", tag: "hoeren" },
        { t: "dict", say: "Vergiss nicht, die Tür abzuschließen.", tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "Diphthonge: ei – eu/äu – au", ar: "الأصوات المركّبة: ei و eu/äu و au",
    body: [
      { p: "في الألمانية ثلاثة أصوات مركّبة (حرفا علة يُنطقان معًا كصوت واحد). الكتابة لا تشبه النطق دائمًا:" },
      { table: { head: ["الكتابة", "النطق", "أمثلة"], rows: [
        ["‹ei› / ‹ai›", "«آي»", "‹Heizung, leise, klein, Mai›"],
        ["‹eu› / ‹äu›", "«أوي»", "‹Leute, neu, teuer, Häuser, träumen›"],
        ["‹au›", "«آو»", "‹Haus, Bauch, laut, auspacken, Frau›"],
        ["‹ie›", "«إي» طويلة (ليست مركّبة!)", "‹Miete, liegen, vier›"]
      ] } },
      { tip: "لا تخلط ‹ei› و‹ie›: ‹Miete› (إيجار) = «ميتِه»، و‹Meile› = «مايله». القاعدة: اقرأ الحرف الثاني — ‹ie› = «إي»، ‹ei› = «آي». والجمع ‹Haus → Häuser› يغيّر «آو» إلى «أوي»." }
    ],
    drills: [
      { t: "listen", say: "die Heizung", q: "ماذا تسمع في ‹Hei-›؟", o: ["«آي»", "«إي»", "«أوي»"], a: 0, why: "‹ei› = «آي»." },
      { t: "listen", say: "die Miete", q: "ماذا تسمع في ‹Mie-›؟", o: ["«إي» طويلة", "«آي»", "«أوي»"], a: 0, why: "‹ie› = «إي» طويلة." },
      { t: "listen", say: "die Häuser", q: "ماذا تسمع في ‹Häu-›؟", o: ["«أوي»", "«آو»", "«إي»"], a: 0, why: "‹äu› = «أوي»، مثل ‹eu›." },
      { t: "listen", say: "laut", q: "ماذا تسمع في ‹laut›؟", o: ["«آو»", "«أوي»", "«أو» طويلة"], a: 0, why: "‹au› = «آو»." },
      { t: "listen", say: "die Leute", q: "ماذا تسمع في ‹Leu-›؟", o: ["«أوي»", "«إيه»", "«آو»"], a: 0, why: "‹eu› = «أوي»." }
    ],
    say: ["die Heizung", "leise – laut", "die Leute", "teuer", "das Haus – die Häuser", "die Miete", "Meine neue Wohnung ist leise, aber teuer.", "Die Leute im Haus sind freundlich.", "Im Mai ziehe ich in ein kleines Haus."]
  },

  write: [
    {
      ar: "انتقلت إلى شقة جديدة. اكتب رسالة (50–60 كلمة) لصديق: صِف الشقة وقارنها بالقديمة (größer als, nicht so … wie, am besten)، وقل أين وضعت بعض الأثاث (Wohin/Wo)، وادعُه لزيارتك.",
      de: "Meine neue Wohnung — E-Mail an einen Freund.",
      model: "Lieber Tarik,\nendlich habe ich eine neue Wohnung! Sie ist größer und heller als meine alte Wohnung, aber nicht so zentral. Am besten gefällt mir der Balkon. Das Sofa habe ich ins Wohnzimmer unter das Fenster gestellt und mein Schreibtisch steht jetzt im Schlafzimmer. Hast du Lust, am Samstag zu kommen? Ich koche Couscous!\nViele Grüße\nKarim",
      check: ["مقارنة بـ Komparativ + ‹als›", "‹nicht so … wie› أو ‹so … wie›", "Superlativ (am besten / am liebsten)", "جملة بـ Wohin + Akkusativ (gestellt/gelegt/gehängt)", "جملة بـ Wo + Dativ (steht/liegt/hängt)", "دعوة بـ ‹Hast du Lust, … zu …?›"]
    },
    {
      ar: "التدفئة في شقتك لا تعمل منذ ثلاثة أيام. اكتب بريدًا مهذبًا للمؤجّرة: اشرح المشكلة، منذ متى، واطلب أن ترسل عاملًا بسرعة. استعمل Konjunktiv II و ‹Es ist wichtig, … zu …›.",
      de: "Problem in der Wohnung — E-Mail an die Vermieterin.",
      model: "Sehr geehrte Frau Krüger,\nseit drei Tagen funktioniert die Heizung in meiner Wohnung nicht. Es ist sehr kalt und ich kann nicht gut schlafen. Könnten Sie bitte so schnell wie möglich einen Handwerker schicken? Es ist wichtig, das Problem vor dem Wochenende zu lösen. Ich bin jeden Tag ab 16 Uhr zu Hause.\nVielen Dank und freundliche Grüße\nKarim Amrani",
      check: ["تحية رسمية", "المشكلة ومنذ متى (seit)", "طلب مهذب ‹Könnten Sie …?›", "‹Es ist wichtig, … zu …›", "متى أنت في البيت", "ختام رسمي"]
    }
  ],
  tutor: [
    { title: "Wohnungsbesichtigung", ar: "معاينة شقة", role: "Frau Krüger, Vermieterin einer 3-Zimmer-Wohnung in Köln-Ehrenfeld", goal: "nach Miete, Nebenkosten, Kaution und Lage fragen, Wohnungen vergleichen (Komparativ, Superlativ, als/wie), Wünsche nennen (am liebsten)", start: "Guten Tag! Kommen Sie herein. Das hier ist der Flur, und hier links ist das Wohnzimmer. Was suchen Sie denn genau?" },
    { title: "Ärger mit dem Nachbarn", ar: "خلاف مع الجار", role: "Herr Fischer, ein älterer Nachbar, der sich über Lärm und Fahrräder im Treppenhaus beschwert", goal: "höflich reagieren und sich entschuldigen, Regeln der Hausordnung besprechen (Es ist verboten/erlaubt, … zu …; nicht müssen / nicht dürfen), Wechselpräpositionen benutzen", start: "Guten Tag. Sind Sie der neue Mieter? Ich muss Ihnen leider etwas sagen: Ihr Fahrrad steht im Treppenhaus …" }
  ]
});

/* Lektion 12 (A2) — Feste feiern */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 12,
  level: "A2",
  de: "Feste feiern",
  ar: "نحتفل بالأعياد",
  book: "منهج A2 · محتوى أصلي (الأعياد والهدايا والدعوات)",
  goals: [
    "الحديث عن الأعياد في ألمانيا والمغرب",
    "الأفعال ذات المفعولين: jemandem etwas schenken / geben / zeigen وترتيبهما",
    "قبول دعوة أو الاعتذار عنها، والشرط بـ wenn",
    "تصريف الصفة بعد ein / kein / mein: ein schöner Abend, eine tolle Party",
    "التهنئة والمجاملة في الحفلات"
  ],
  units: [
    /* ───────────── 12A ───────────── */
    {
      id: "12A", de: "Was schenken wir ihr?", ar: "ماذا نهديها؟",
      summary: "الأعياد والمناسبات، الهدايا، التهاني؛ أفعال بمفعولين (Dativ للشخص، Akkusativ للشيء) وترتيب الكلمات.",
      grammar: [
        {
          h: "jemandem etwas … — الشخص في Dativ والشيء في Akkusativ",
          p: "أفعال مثل ‹schenken, geben, bringen, zeigen, schicken, erklären, empfehlen, kaufen› لها مفعولان: **من؟** (الشخص، Dativ) و**ماذا؟** (الشيء، Akkusativ).",
          table: {
            head: ["الفاعل", "الفعل", "Dativ (لمن؟)", "Akkusativ (ماذا؟)"],
            rows: [
              ["‹Ich›", "‹schenke›", "‹meiner Mutter›", "‹einen Schal›."],
              ["‹Wir›", "‹geben›", "‹dem Kind›", "‹ein Geschenk›."],
              ["‹Kannst du›", "", "‹mir›", "‹das Foto› ‹zeigen›?"],
              ["‹Der Verkäufer›", "‹empfiehlt›", "‹uns›", "‹das Parfüm›."]
            ]
          },
          tip: "القاعدة الأساسية: إذا كان المفعولان اسمين → **Dativ قبل Akkusativ**: ‹Ich schenke meinem Vater ein Buch.›"
        },
        {
          h: "عندما يكون أحدهما ضميرًا",
          table: {
            head: ["الحالة", "الترتيب", "مثال"],
            rows: [
              ["اسمان", "Dativ ← Akkusativ", "‹Ich gebe dem Kind den Ball.›"],
              ["ضمير Dativ + اسم", "الضمير أولًا", "‹Ich gebe ihm den Ball.›"],
              ["اسم + ضمير Akkusativ", "الضمير أولًا", "‹Ich gebe ihn dem Kind.›"],
              ["ضميران", "**Akkusativ قبل Dativ**", "‹Ich gebe ihn ihm.›"]
            ]
          },
          tip: "تذكير بسيط: الضمير القصير يأتي قبل الاسم الطويل. ومع ضميرين: Akkusativ أولًا (‹es mir›، ‹ihn dir›)."
        },
        {
          h: "الأعياد والتهاني",
          table: {
            head: ["المناسبة", "التهنئة"],
            rows: [
              ["‹der Geburtstag›", "‹Alles Gute zum Geburtstag!› / ‹Herzlichen Glückwunsch!›"],
              ["‹der Ramadan› / ‹das Zuckerfest›", "‹Ramadan Mubarak!› / ‹Frohes Fest!›"],
              ["‹das Opferfest›", "‹Frohes Opferfest!›"],
              ["‹Weihnachten›", "‹Frohe Weihnachten!›"],
              ["‹Silvester / Neujahr›", "‹Guten Rutsch!› / ‹Frohes neues Jahr!›"],
              ["‹die Hochzeit›", "‹Herzlichen Glückwunsch zur Hochzeit!›"],
              ["‹die Prüfung›", "‹Herzlichen Glückwunsch zur bestandenen Prüfung!› / قبلها: ‹Viel Erfolg!›"]
            ]
          }
        }
      ],
      vocab: [
        ["n", "das", "Fest", "-e", "العيد / الحفل", "Das Zuckerfest ist ein großes Fest in Marokko.", "عيد الفطر عيد كبير في المغرب."],
        ["n", "der", "Feiertag", "-e", "يوم العطلة الرسمية", "Am Feiertag sind die Geschäfte geschlossen.", "في يوم العطلة تكون المتاجر مغلقة."],
        ["n", "das", "Zuckerfest", "Sg.", "عيد الفطر", "Zum Zuckerfest besuchen wir die Familie.", "في عيد الفطر نزور العائلة."],
        ["n", "das", "Opferfest", "Sg.", "عيد الأضحى", "Am Opferfest kommt die ganze Familie zusammen.", "في عيد الأضحى تجتمع العائلة كلها."],
        ["n", "der", "Ramadan", "Sg.", "رمضان", "Im Ramadan fasten viele Menschen.", "في رمضان يصوم كثير من الناس."],
        ["n", "das", "Weihnachten", "Sg.", "عيد الميلاد (الكريسماس)", "An Weihnachten schenkt man sich etwas.", "في الكريسماس يتبادل الناس الهدايا."],
        ["n", "das", "Ostern", "Sg.", "عيد الفصح", "An Ostern suchen die Kinder Eier.", "في عيد الفصح يبحث الأطفال عن البيض."],
        ["n", "das", "Silvester", "Sg.", "ليلة رأس السنة", "An Silvester gibt es ein Feuerwerk.", "في ليلة رأس السنة هناك ألعاب نارية."],
        ["n", "die", "Hochzeit", "-en", "حفل الزفاف", "Die Hochzeit war wunderschön.", "حفل الزفاف كان رائعًا."],
        ["n", "der", "Glückwunsch", "¨-e", "التهنئة", "Herzlichen Glückwunsch!", "تهانينا القلبية!"],
        ["n", "die", "Karte", "-n", "البطاقة", "Ich schreibe meiner Oma eine Karte.", "أكتب لجدتي بطاقة."],
        ["n", "der", "Gutschein", "-e", "قسيمة الشراء", "Wir schenken ihr einen Gutschein.", "نهديها قسيمة شراء."],
        ["n", "das", "Parfüm", "-s", "العطر", "Das Parfüm riecht sehr gut.", "العطر رائحته جميلة جدًا."],
        ["n", "der", "Schmuck", "Sg.", "الحُلي", "Sie trägt gern Schmuck.", "هي تحب لبس الحُلي."],
        ["n", "die", "Kette", "-n", "القلادة / السلسلة", "Die Kette ist aus Silber.", "القلادة من الفضة."],
        ["n", "die", "Süßigkeiten", "Pl.", "الحلويات", "Zum Fest gibt es viele Süßigkeiten.", "في العيد هناك حلويات كثيرة."],
        ["n", "das", "Feuerwerk", "-e", "الألعاب النارية", "Um Mitternacht beginnt das Feuerwerk.", "عند منتصف الليل تبدأ الألعاب النارية."],
        ["n", "die", "Tradition", "-en", "التقليد", "Das ist eine alte Tradition.", "هذا تقليد قديم."],
        ["v", "", "schenken", "hat geschenkt", "يُهدي", "Was schenkst du deinem Bruder?", "ماذا تُهدي أخاك؟"],
        ["v", "", "geben", "gibt, hat gegeben", "يعطي", "Gib mir bitte das Salz.", "أعطني الملح من فضلك."],
        ["v", "", "schicken", "hat geschickt", "يرسل", "Ich schicke dir ein Foto.", "أرسل لك صورة."],
        ["v", "", "empfehlen", "empfiehlt, hat empfohlen", "يوصي / ينصح بـ", "Können Sie mir ein Geschenk empfehlen?", "هل يمكنك أن تنصحني بهدية؟"],
        ["v", "", "erklären", "hat erklärt", "يشرح", "Kannst du mir die Tradition erklären?", "هل يمكنك أن تشرح لي هذا التقليد؟"],
        ["v", "", "wünschen", "hat gewünscht", "يتمنّى", "Ich wünsche dir viel Glück!", "أتمنى لك حظًا سعيدًا!"],
        ["v", "", "gratulieren", "hat gratuliert", "يهنّئ", "Ich gratuliere dir zum Geburtstag!", "أهنّئك بعيد ميلادك!"],
        ["v", "", "fasten", "hat gefastet", "يصوم", "Im Ramadan fastet meine Familie.", "في رمضان تصوم عائلتي."],
        ["v", "", "verpacken", "hat verpackt", "يغلّف", "Können Sie das Geschenk verpacken?", "هل يمكنك تغليف الهدية؟"],
        ["a", "", "festlich", "", "احتفالي", "Alle tragen festliche Kleidung.", "الجميع يلبسون ملابس احتفالية."],
        ["x", "", "Alles Gute!", "", "كل التمنيات الطيبة!", "Alles Gute zum Geburtstag!", "عيد ميلاد سعيد!"],
        ["x", "", "Frohes Fest!", "", "عيد سعيد!", "Frohes Fest und schöne Feiertage!", "عيد سعيد وعطلة جميلة!"],
        ["x", "", "Guten Rutsch!", "", "سنة جديدة سعيدة! (قبل رأس السنة)", "Guten Rutsch ins neue Jahr!", "انتقال سعيد إلى السنة الجديدة!"]
      ],
      phrases: [
        ["Was schenken wir Mama zum Geburtstag?", "ماذا نهدي ماما في عيد ميلادها؟"],
        ["Ich schenke ihr einen Gutschein.", "أُهديها قسيمة شراء."],
        ["Kannst du mir das Foto zeigen? – Ja, ich zeige es dir gleich.", "هل تريني الصورة؟ – نعم، سأريك إياها حالًا."],
        ["Können Sie mir ein Geschenk für meinen Vater empfehlen?", "هل يمكنك أن تنصحني بهدية لأبي؟"],
        ["Herzlichen Glückwunsch zum Geburtstag!", "تهانينا بعيد ميلادك!"],
        ["Zum Zuckerfest besuchen wir die ganze Familie.", "في عيد الفطر نزور العائلة كلها."],
        ["Ich wünsche dir alles Gute!", "أتمنى لك كل الخير!"]
      ],
      ex: [
        { t: "mc", q: "اختر الصحيح.", s: "Ich schenke ___ Mutter eine Kette.", o: ["meiner", "meine", "meinen"], a: 0, why: "لمن؟ الأم → Dativ مؤنث: ‹meiner›.", tag: "dativakk" },
        { t: "mc", q: "اختر الصحيح.", s: "Wir geben ___ Kind ein Geschenk.", o: ["dem", "das", "den"], a: 0, why: "لمن؟ ‹das Kind› → Dativ: ‹dem›.", tag: "dativakk" },
        { t: "mc", q: "اختر الصحيح.", s: "Er schenkt seinem Vater ___ Buch.", o: ["ein", "einem", "einen"], a: 0, why: "ماذا؟ ‹das Buch› → Akkusativ محايد: ‹ein›.", tag: "dativakk" },
        { t: "mc", q: "اختر الترتيب الصحيح.", o: ["Ich gebe ihm den Ball.", "Ich gebe den Ball ihm.", "Ich ihm gebe den Ball."], a: 0, why: "ضمير Dativ (‹ihm›) قبل الاسم (‹den Ball›).", tag: "dativakk" },
        { t: "mc", q: "اختر الترتيب الصحيح (ضميران).", o: ["Ich zeige es dir.", "Ich zeige dir es.", "Ich es dir zeige."], a: 0, why: "مع ضميرين: Akkusativ (‹es›) قبل Dativ (‹dir›).", tag: "dativakk" },
        { t: "gap", q: "أكمل بضمير Dativ.", s: "Mein Bruder hat Geburtstag. Ich schenke ___ eine Uhr.", a: ["ihm"], why: "‹mein Bruder› → ‹ihm›.", tag: "dativpron" },
        { t: "gap", q: "أكمل بضمير Dativ.", s: "Meine Eltern feiern Hochzeitstag. Wir schicken ___ Blumen.", a: ["ihnen"], why: "جمع (‹meine Eltern›) → ‹ihnen›.", tag: "dativpron" },
        { t: "gap", q: "أكمل بأداة Dativ.", s: "Kannst du ___ Gästen den Weg erklären? (die Gäste)", a: ["den"], why: "Dativ جمع: ‹den Gästen› (والاسم + ‑n).", tag: "dativakk" },
        { t: "gap", q: "أكمل بأداة Akkusativ.", s: "Ich empfehle dir ___ Parfüm hier. (das Parfüm)", a: ["das"], why: "ماذا؟ Akkusativ محايد: ‹das›.", tag: "dativakk" },
        { t: "match", q: "صِل المناسبة بالتهنئة.", pairs: [["der Geburtstag", "Alles Gute!"], ["Silvester", "Guten Rutsch!"], ["das Zuckerfest", "Frohes Fest!"], ["vor der Prüfung", "Viel Erfolg!"]], tag: "wortschatz" },
        { t: "order", q: "رتّب الجملة.", a: "Ich schenke meiner Schwester einen Gutschein.", why: "Dativ (‹meiner Schwester›) قبل Akkusativ (‹einen Gutschein›).", tag: "dativakk" },
        { t: "order", q: "رتّب الجملة.", a: "Kannst du mir das Geschenk zeigen?", why: "‹mir› (ضمير) قبل ‹das Geschenk›، و‹zeigen› في الآخر.", tag: "dativakk" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أهدي أبي كتابًا.", a: ["Ich schenke meinem Vater ein Buch."], tag: "dativakk" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "هل يمكنك أن تريني الصورة؟", a: ["Kannst du mir das Foto zeigen?", "Können Sie mir das Foto zeigen?", "Kannst du mir das Bild zeigen?", "Können Sie mir das Bild zeigen?"], tag: "dativakk" },
        { t: "read", title: "Feste in zwei Ländern", text: "Ich heiße Amal und lebe seit drei Jahren in Hamburg. Mein Lieblingsfest ist das Zuckerfest am Ende vom Ramadan. In Marokko besuchen wir an diesem Tag die ganze Familie, die Kinder bekommen neue Kleider und wir essen viele Süßigkeiten. In Hamburg feiere ich mit Freunden aus vielen Ländern. Meine deutschen Freunde haben mir Weihnachten erklärt: Man schmückt einen Baum und schenkt der Familie etwas. Letztes Jahr hat mir meine Kollegin Lena einen Adventskalender geschenkt. Das fand ich sehr lieb!", tr: "اسمي أمل وأعيش في هامبورغ منذ ثلاث سنوات. عيدي المفضل هو عيد الفطر في آخر رمضان. في المغرب نزور في هذا اليوم العائلة كلها، والأطفال يحصلون على ملابس جديدة ونأكل حلويات كثيرة. في هامبورغ أحتفل مع أصدقاء من بلدان كثيرة. أصدقائي الألمان شرحوا لي عيد الميلاد: يزيّنون شجرة ويهدون العائلة شيئًا. السنة الماضية أهدتني زميلتي لينا تقويم المجيء. وجدت ذلك لطيفًا جدًا!", items: [
          { t: "tf", s: "Amal feiert das Zuckerfest gern.", a: true, why: "‹Mein Lieblingsfest ist das Zuckerfest›." },
          { t: "tf", s: "In Marokko bekommen die Kinder zum Fest neue Kleider.", a: true, why: "‹die Kinder bekommen neue Kleider›." },
          { t: "tf", s: "Amal hat Lena einen Adventskalender geschenkt.", a: false, why: "العكس: ‹hat mir meine Kollegin Lena einen Adventskalender geschenkt›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Ein Geschenk für Mama", ar: "هدية لماما",
        scene: "صديقتك إليف تبحث عن هدية لعيد ميلاد أمها. أنتما في مركز تجاري.",
        who: { A: "Elif" },
        lines: [
          { s: "A", de: "Meine Mutter hat am Sonntag Geburtstag und ich habe noch kein Geschenk. Was soll ich ihr schenken?", ar: "أمي عيد ميلادها الأحد وليس عندي هدية بعد. ماذا أهديها؟" },
          { s: "U", task: "اقترح: أهديها عطرًا أو قلادة.", m: "Schenk ihr doch ein Parfüm oder eine Kette!", ok: ["Schenk ihr doch ein Parfüm oder eine Kette", "Schenk ihr ein Parfüm oder eine Kette", "Du kannst ihr ein Parfüm oder eine Kette schenken", "Vielleicht ein Parfüm oder eine Kette", "* ihr ein Parfüm oder eine Kette *"], o: ["Schenk ihr doch ein Parfüm oder eine Kette!", "Schenk sie doch ein Parfüm oder eine Kette!", "Schenk ihr doch einem Parfüm oder einer Kette!"], why: ["", "لمن؟ الأم → Dativ: ‹ihr› وليس ‹sie›.", "ماذا؟ → Akkusativ: ‹ein Parfüm›، ‹eine Kette›."], ar: "أهديها عطرًا أو قلادة!" },
          { s: "A", de: "Hm, Parfüm hat sie schon viel. Aber eine Kette ist eine gute Idee! Schau mal, die hier mit dem blauen Stein.", ar: "هم، عندها عطور كثيرة. لكن القلادة فكرة جيدة! انظر، هذه بالحجر الأزرق." },
          { s: "U", task: "قل: جميلة جدًا! اطلبي من البائعة أن تغلّفها لك.", m: "Die ist sehr schön! Frag die Verkäuferin, ob sie sie dir verpackt.", ok: ["Die ist sehr schön frag die Verkäuferin ob sie sie dir verpackt", "Die ist sehr schön *", "Sehr schön * verpackt", "* frag die Verkäuferin *"], o: ["Die ist sehr schön! Frag die Verkäuferin, ob sie sie dir verpackt.", "Die ist sehr schön! Frag die Verkäuferin, ob sie dir sie verpackt.", "Die ist sehr schön! Frag die Verkäuferin, ob sie verpackt sie dir."], why: ["", "مع ضميرين: Akkusativ (‹sie› = القلادة) قبل Dativ (‹dir›).", "بعد ‹ob› الفعل في الآخر."], ar: "جميلة جدًا! اسألي البائعة إن كانت تغلّفها لك." },
          { s: "A", de: "Gute Idee! Und was schenkst du deiner Mutter zum Geburtstag?", ar: "فكرة جيدة! وماذا تهدي أنت أمك في عيد ميلادها؟" },
          { s: "U", task: "قل: أرسل لها كل سنة صورة لي وأتصل بها، لأنها في المغرب.", m: "Ich schicke ihr jedes Jahr ein Foto und rufe sie an, weil sie in Marokko ist.", ok: ["Ich schicke ihr jedes Jahr ein Foto und rufe sie an weil sie in Marokko ist", "Ich schicke ihr jedes Jahr ein Foto und rufe sie an weil sie in Marokko wohnt", "Ich schicke ihr ein Foto und rufe sie an *", "* weil sie in Marokko ist", "* weil sie in Marokko wohnt"], o: ["Ich schicke ihr jedes Jahr ein Foto und rufe sie an, weil sie in Marokko ist.", "Ich schicke sie jedes Jahr ein Foto und rufe ihr an, weil sie in Marokko ist.", "Ich schicke ihr jedes Jahr ein Foto und rufe sie an, weil sie ist in Marokko."], why: ["", "‹schicken› + Dativ للشخص (‹ihr›)، و‹anrufen› + Akkusativ (‹sie›).", "بعد ‹weil› الفعل في الآخر."], ar: "أرسل لها كل سنة صورة وأتصل بها، لأنها في المغرب." }
        ]
      },
      listen: [
        { t: "listen", say: "Zum Geburtstag hat mir mein Bruder einen Gutschein für ein Restaurant geschenkt.", q: "ماذا أهداه أخوه؟", o: ["قسيمة لمطعم", "عطرًا", "كتابًا"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Am Zuckerfest stehen wir früh auf, ziehen neue Kleider an und besuchen die Großeltern.", q: "من يزورون في عيد الفطر؟", o: ["الجدّين", "الجيران", "الأصدقاء في المدينة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Könnten Sie mir das Geschenk bitte verpacken? Es ist für meine Freundin.", q: "ماذا يطلب؟", o: ["تغليف الهدية", "تبديل الهدية", "شراء هدية لصديقته"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Ich schenke meiner Mutter eine Kette.", tag: "hoeren" },
        { t: "dict", say: "Alles Gute zum Geburtstag!", tag: "hoeren" }
      ]
    },

    /* ───────────── 12B ───────────── */
    {
      id: "12B", de: "Die Einladung", ar: "الدعوة",
      summary: "دعوة إلى حفلة أو عرس، القبول والاعتذار؛ الجملة الشرطية والزمنية بـ wenn (الفعل في الآخر).",
      grammar: [
        {
          h: "wenn: إذا / عندما",
          p: "‹wenn› تبدأ جملة فرعية: الفعل المصرّف في **آخر** الجملة. تستعمل للشرط (إذا) وللتكرار (كلما/عندما).",
          table: {
            head: ["الجملة", "المعنى"],
            rows: [
              ["‹Ich komme gern, wenn ich Zeit **habe**.›", "آتي بكل سرور إذا كان عندي وقت."],
              ["‹Wenn das Wetter schön **ist**, **grillen** wir im Garten.›", "إذا كان الطقس جميلًا، نشوي في الحديقة."],
              ["‹Wenn ich nach Hause **komme**, **rufe** ich dich **an**.›", "عندما أصل إلى البيت، أتصل بك."],
              ["‹Immer wenn wir **feiern**, **kocht** meine Oma.›", "كلما احتفلنا، تطبخ جدتي."]
            ]
          },
          tip: "إذا بدأت بـ ‹Wenn …›، يأتي فعل الجملة الرئيسية أولًا بعد الفاصلة: ‹Wenn ich Zeit habe, **komme** ich.› (فعل، فعل). ويمكن إضافة ‹dann›: ‹Wenn …, dann komme ich.›"
        },
        {
          h: "قبول الدعوة والاعتذار",
          table: {
            head: ["القبول", "الاعتذار"],
            rows: [
              ["‹Danke für die Einladung! Ich komme gern.›", "‹Danke für die Einladung, aber leider kann ich nicht kommen.›"],
              ["‹Super, ich bin dabei!›", "‹Schade, an dem Tag habe ich schon etwas vor.›"],
              ["‹Soll ich etwas mitbringen?›", "‹Vielleicht ein anderes Mal?›"],
              ["‹Was soll ich anziehen?›", "‹Ich wünsche euch viel Spaß!›"]
            ]
          }
        },
        {
          h: "‹etwas vorhaben› = عندي خطط",
          p: "‹Hast du am Samstag schon etwas vor?› = هل عندك خطط يوم السبت؟ ‹Ich habe nichts vor.› = ليس عندي شيء.",
          ex: [["Was hast du am Wochenende vor?", "ماذا تنوي أن تفعل في عطلة الأسبوع؟"], ["Am Freitag habe ich leider schon etwas vor.", "يوم الجمعة عندي للأسف موعد آخر."]]
        }
      ],
      vocab: [
        ["n", "die", "Einladung", "-en", "الدعوة", "Vielen Dank für die Einladung!", "شكرًا جزيلًا على الدعوة!"],
        ["n", "die", "Feier", "-n", "الحفل", "Die Feier beginnt um 19 Uhr.", "الحفل يبدأ في السابعة."],
        ["n", "die", "Gästeliste", "-n", "قائمة الضيوف", "Bist du auf der Gästeliste?", "هل أنت في قائمة الضيوف؟"],
        ["n", "das", "Brautpaar", "-e", "العروسان", "Das Brautpaar tanzt zuerst.", "العروسان يرقصان أولًا."],
        ["n", "die", "Braut", "¨-e", "العروس", "Die Braut trägt ein weißes Kleid.", "العروس تلبس فستانًا أبيض."],
        ["n", "der", "Bräutigam", "-e", "العريس", "Der Bräutigam ist sehr nervös.", "العريس متوتر جدًا."],
        ["n", "die", "Überraschungsparty", "-s", "حفلة مفاجئة", "Wir machen eine Überraschungsparty für Leon.", "نقيم حفلة مفاجئة لليون."],
        ["n", "die", "Zusage", "-n", "الموافقة (على الدعوة)", "Danke für deine Zusage!", "شكرًا على موافقتك!"],
        ["n", "die", "Absage", "-n", "الاعتذار / الرفض", "Leider habe ich drei Absagen bekommen.", "للأسف وصلتني ثلاثة اعتذارات."],
        ["n", "das", "Getränk", "-e", "المشروب", "Ich bringe Getränke mit.", "سأحضر مشروبات."],
        ["n", "die", "Musik", "Sg.", "الموسيقى", "Die Musik war super.", "الموسيقى كانت رائعة."],
        ["n", "die", "Stimmung", "-en", "الجو", "Die Stimmung war toll.", "الجو كان رائعًا."],
        ["v", "", "einladen", "lädt ein, hat eingeladen", "يدعو", "Ich lade dich zu meiner Party ein.", "أدعوك إلى حفلتي."],
        ["v", "", "zusagen", "sagt zu, hat zugesagt", "يقبل (الدعوة)", "Hast du schon zugesagt?", "هل قبلت الدعوة؟"],
        ["v", "", "absagen", "sagt ab, hat abgesagt", "يعتذر (عن الحضور)", "Ich muss leider absagen.", "يجب أن أعتذر للأسف."],
        ["v", "", "vorhaben", "hat vor, hat vorgehabt", "ينوي / عنده خطط", "Hast du heute Abend etwas vor?", "هل عندك خطط هذا المساء؟"],
        ["v", "", "mitbringen", "bringt mit, hat mitgebracht", "يحضر معه", "Soll ich einen Salat mitbringen?", "هل أحضر سلطة؟"],
        ["v", "", "anziehen", "zieht an, hat angezogen", "يلبس", "Was ziehst du zur Hochzeit an?", "ماذا ستلبس في العرس؟"],
        ["v", "", "tanzen", "hat getanzt", "يرقص", "Wir haben die ganze Nacht getanzt.", "رقصنا طوال الليل."],
        ["v", "", "stattfinden", "findet statt, hat stattgefunden", "يُقام", "Die Feier findet im Garten statt.", "الحفل يقام في الحديقة."],
        ["v", "", "sich freuen (auf + Akk.)", "hat sich gefreut", "يتطلّع بفرح إلى", "Ich freue mich auf die Party!", "أتطلّع إلى الحفلة!"],
        ["p", "", "wenn", "+ Verb am Ende", "إذا / عندما", "Wenn ich Zeit habe, komme ich.", "إذا كان عندي وقت، آتي."],
        ["d", "", "dann", "", "إذن / ثم", "Wenn es regnet, dann feiern wir drinnen.", "إذا أمطرت، نحتفل في الداخل."],
        ["d", "", "drinnen", "", "في الداخل", "Bei Regen feiern wir drinnen.", "عند المطر نحتفل في الداخل."],
        ["d", "", "draußen", "", "في الخارج", "Im Sommer essen wir draußen.", "في الصيف نأكل في الخارج."],
        ["x", "", "Ich bin dabei!", "", "أنا مشارك! / سآتي!", "Grillen am Samstag? Ich bin dabei!", "شواء يوم السبت؟ سآتي!"],
        ["x", "", "ein anderes Mal", "", "مرة أخرى", "Vielleicht klappt es ein anderes Mal.", "ربما ينجح الأمر مرة أخرى."]
      ],
      phrases: [
        ["Ich komme gern, wenn ich Zeit habe.", "آتي بكل سرور إذا كان عندي وقت."],
        ["Wenn das Wetter schön ist, feiern wir im Garten.", "إذا كان الطقس جميلًا، نحتفل في الحديقة."],
        ["Danke für die Einladung, aber leider kann ich nicht kommen.", "شكرًا على الدعوة، لكن للأسف لا أستطيع المجيء."],
        ["Hast du am Samstag schon etwas vor?", "هل عندك خطط يوم السبت؟"],
        ["Soll ich etwas mitbringen?", "هل أحضر شيئًا؟"],
        ["Ich freue mich schon auf die Feier!", "أتطلع بشوق إلى الحفل!"],
        ["Schade! Vielleicht ein anderes Mal.", "يا للأسف! ربما مرة أخرى."]
      ],
      ex: [
        { t: "order", q: "رتّب الجملة (wenn + الفعل في الآخر).", a: "Ich komme gern, wenn ich Zeit habe.", why: "‹wenn ich Zeit habe› — ‹habe› في الآخر.", tag: "nebensatz" },
        { t: "order", q: "رتّب: الجملة الفرعية أولًا.", a: "Wenn das Wetter schön ist, grillen wir.", why: "بعد ‹Wenn …,› يأتي الفعل ‹grillen› أولًا.", tag: "nebensatz" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Wenn ich nach Hause komme, ___.", o: ["rufe ich dich an", "ich rufe dich an", "ich dich anrufe"], a: 0, why: "بعد الجملة الفرعية: فعل الجملة الرئيسية أولًا.", tag: "nebensatz" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Wir feiern draußen, wenn ___.", o: ["es nicht regnet", "es regnet nicht", "regnet es nicht"], a: 0, why: "بعد ‹wenn› الفعل في الآخر.", tag: "nebensatz" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Wenn du willst, ___.", o: ["kannst du deinen Bruder mitbringen", "du kannst deinen Bruder mitbringen", "du deinen Bruder mitbringen kannst"], a: 0, why: "الجملة الرئيسية بعد ‹Wenn …,›: الفعل ‹kannst› أولًا.", tag: "nebensatz" },
        { t: "gap", q: "أكمل بالفعل في الآخر.", s: "Ich bringe einen Kuchen mit, wenn du ___. (wollen)", a: ["willst"], why: "‹du willst› في آخر الجملة الفرعية.", tag: "nebensatz" },
        { t: "gap", q: "أكمل بالفعل المنفصل.", s: "Ich bin traurig, wenn du nicht ___. (mitkommen)", a: ["mitkommst"], why: "الفعل المنفصل يلتصق في الجملة الفرعية: ‹mitkommst›.", tag: "nebensatz" },
        { t: "gap", q: "أكمل بـ wenn / weil.", s: "Ich kann nicht kommen, ___ ich arbeiten muss.", a: ["weil"], why: "سبب → ‹weil›.", tag: "nebensatz" },
        { t: "gap", q: "أكمل بـ wenn / weil.", s: "___ du Hilfe brauchst, ruf mich an!", a: ["Wenn"], why: "شرط → ‹Wenn›.", tag: "nebensatz" },
        { t: "mc", q: "اختر الرد المناسب للاعتذار عن دعوة.", o: ["Danke für die Einladung, aber leider habe ich schon etwas vor.", "Danke, ich bin dabei!", "Super, ich bringe einen Salat mit."], a: 0, why: "‹leider … schon etwas vor› = اعتذار مهذب.", tag: "dialog" },
        { t: "match", q: "صِل الكلمة بمعناها.", pairs: [["zusagen", "يقبل الدعوة"], ["absagen", "يعتذر"], ["vorhaben", "ينوي"], ["das Brautpaar", "العروسان"], ["draußen", "في الخارج"]], tag: "wortschatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "إذا كان عندي وقت، آتي.", a: ["Wenn ich Zeit habe, komme ich.", "Ich komme, wenn ich Zeit habe.", "Wenn ich Zeit habe, dann komme ich."], tag: "nebensatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "هل أحضر شيئًا؟", a: ["Soll ich etwas mitbringen?"], tag: "modal" },
        { t: "read", title: "Einladung zur Hochzeit", text: "Liebe Freunde, wir heiraten! Am Samstag, den 14. Juni, feiern wir unsere Hochzeit im Restaurant Seeblick. Die Feier beginnt um 16 Uhr mit Kaffee und Kuchen, um 19 Uhr gibt es ein Abendessen. Danach wollen wir mit euch tanzen! Wenn das Wetter schön ist, feiern wir auch auf der Terrasse am See. Bitte sagt uns bis zum 1. Mai, ob ihr kommt. Ihr müsst uns nichts schenken – wenn ihr möchtet, könnt ihr uns etwas für unsere Hochzeitsreise geben. Wir freuen uns auf euch! Sara und Jonas", tr: "أصدقاءنا الأعزاء، سنتزوج! يوم السبت 14 يونيو نحتفل بزفافنا في مطعم «زيبليك». الحفل يبدأ في الرابعة بالقهوة والكعك، وفي السابعة عشاء. بعد ذلك نريد أن نرقص معكم! إذا كان الطقس جميلًا، نحتفل أيضًا على الشرفة عند البحيرة. أخبرونا قبل 1 ماي هل ستأتون. لا يجب أن تهدونا شيئًا — إذا أردتم، يمكنكم أن تعطونا شيئًا لرحلة شهر العسل. نحن متشوقون لرؤيتكم! سارة ويوناس", items: [
          { t: "tf", s: "Das Abendessen beginnt um 16 Uhr.", a: false, why: "16 Uhr: قهوة وكعك. العشاء في ‹19 Uhr›." },
          { t: "tf", s: "Bei schönem Wetter feiern sie auch draußen.", a: true, why: "‹Wenn das Wetter schön ist, feiern wir auch auf der Terrasse›." },
          { t: "tf", s: "Die Gäste müssen ein teures Geschenk kaufen.", a: false, why: "‹Ihr müsst uns nichts schenken›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Kommst du zu meiner Party?", ar: "هل تأتي إلى حفلتي؟",
        scene: "صديقك باول يتصل بك ليدعوك إلى حفلة عيد ميلاده يوم السبت. عندك عمل حتى الساعة الثامنة.",
        who: { A: "Paul" },
        lines: [
          { s: "A", de: "Hey {FIRST}! Ich feiere am Samstag meinen Geburtstag. Hast du Lust zu kommen?", ar: "مرحبًا! أحتفل يوم السبت بعيد ميلادي. هل لديك رغبة في المجيء؟" },
          { s: "U", task: "اشكره على الدعوة وقل: آتي بكل سرور إذا لم يكن عليّ أن أعمل طويلًا.", m: "Danke für die Einladung! Ich komme gern, wenn ich nicht lange arbeiten muss.", ok: ["Danke für die Einladung ich komme gern wenn ich nicht lange arbeiten muss", "Danke für die Einladung ich komme gern wenn ich nicht so lange arbeiten muss", "* ich komme gern wenn ich nicht lange arbeiten muss", "* wenn ich nicht lange arbeiten muss"], o: ["Danke für die Einladung! Ich komme gern, wenn ich nicht lange arbeiten muss.", "Danke für die Einladung! Ich komme gern, wenn ich muss nicht lange arbeiten.", "Danke für die Einladung! Ich komme gern, weil ich nicht lange arbeiten muss."], why: ["", "بعد ‹wenn› الفعل ‹muss› في الآخر.", "هذا شرط وليس سببًا → ‹wenn›."], ar: "شكرًا على الدعوة! آتي بكل سرور إذا لم يكن عليّ أن أعمل طويلًا." },
          { s: "A", de: "Die Party fängt um sieben an, aber du kannst auch später kommen.", ar: "الحفلة تبدأ في السابعة، لكن يمكنك أن تأتي لاحقًا." },
          { s: "U", task: "قل: عندما أنتهي من العمل في الثامنة، آتي مباشرة. هل أحضر شيئًا؟", m: "Wenn ich um acht Feierabend habe, komme ich direkt. Soll ich etwas mitbringen?", ok: ["Wenn ich um acht Feierabend habe komme ich direkt soll ich etwas mitbringen", "Wenn ich um acht Uhr Feierabend habe komme ich direkt *", "Wenn ich um acht fertig bin komme ich direkt *", "* komme ich direkt soll ich etwas mitbringen"], o: ["Wenn ich um acht Feierabend habe, komme ich direkt. Soll ich etwas mitbringen?", "Wenn ich um acht Feierabend habe, ich komme direkt. Soll ich etwas mitbringen?", "Wenn ich habe um acht Feierabend, komme ich direkt. Soll ich etwas mitbringen?"], why: ["", "بعد ‹Wenn …,› فعل الجملة الرئيسية أولًا: ‹komme ich›.", "بعد ‹Wenn› الفعل ‹habe› في الآخر."], ar: "عندما ينتهي عملي في الثامنة، آتي مباشرة. هل أحضر شيئًا؟" },
          { s: "A", de: "Wenn du willst, kannst du einen Nachtisch mitbringen. Deine Datteln mit Mandeln waren letztes Mal super!", ar: "إذا أردت، يمكنك إحضار حلوى. تمرك باللوز كان رائعًا المرة الماضية!" },
          { s: "U", task: "قل: حسنًا، أحضر التمر. أتطلع إلى الحفلة!", m: "Okay, ich bringe die Datteln mit. Ich freue mich auf die Party!", ok: ["Okay ich bringe die Datteln mit ich freue mich auf die Party", "Gut ich bringe die Datteln mit ich freue mich auf die Party", "* ich freue mich auf die Party", "Okay ich bringe die Datteln mit *"], o: ["Okay, ich bringe die Datteln mit. Ich freue mich auf die Party!", "Okay, ich mitbringe die Datteln. Ich freue mich auf die Party!", "Okay, ich bringe die Datteln mit. Ich freue mich über die Party!"], why: ["", "المنفصل في الجملة الرئيسية: ‹bringe … mit›.", "للمستقبل: ‹sich freuen auf›؛ و‹über› لشيء حدث."], ar: "حسنًا، أحضر التمر. أتطلع إلى الحفلة!" }
        ]
      },
      listen: [
        { t: "listen", say: "Wenn es am Samstag regnet, feiern wir nicht im Park, sondern bei mir zu Hause.", q: "أين يحتفلون إذا أمطرت؟", o: ["في بيت المتكلم", "في الحديقة العامة", "في مطعم"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Danke für die Einladung! Leider kann ich nicht kommen, weil meine Eltern zu Besuch sind.", q: "لماذا لا يستطيع المجيء؟", o: ["والداه في زيارته", "يعمل", "هو مريض"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Die Hochzeit findet am zwanzigsten Juli statt. Die Feier beginnt um sechs Uhr abends.", q: "متى يبدأ الحفل؟", o: ["في السادسة مساءً", "في العشرين صباحًا", "في السابعة مساءً"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Ich komme gern, wenn ich Zeit habe.", tag: "hoeren" },
        { t: "dict", say: "Danke für die Einladung!", tag: "hoeren" }
      ]
    },

    /* ───────────── 12C ───────────── */
    {
      id: "12C", de: "Eine tolle Party!", ar: "حفلة رائعة!",
      summary: "في الحفلة: المجاملات والحديث القصير والوصف؛ تصريف الصفة بعد ein / kein / mein في Nominativ و Akkusativ و Dativ.",
      grammar: [
        {
          h: "الصفة قبل الاسم بعد ein / kein / mein",
          p: "عندما تأتي الصفة **قبل الاسم** تأخذ نهاية. بعد ‹ein, kein, mein, dein …› تُظهر الصفة جنس الاسم إذا لم تُظهره الأداة:",
          table: {
            head: ["", "مذكر", "محايد", "مؤنث", "جمع (keine/meine)"],
            rows: [
              ["Nominativ", "‹ein schön**er** Abend›", "‹ein neu**es** Kleid›", "‹eine toll**e** Party›", "‹meine neu**en** Freunde›"],
              ["Akkusativ", "‹einen schön**en** Abend›", "‹ein neu**es** Kleid›", "‹eine toll**e** Party›", "‹keine neu**en** Freunde›"],
              ["Dativ", "‹mit einem schön**en** Abend›", "‹mit einem neu**en** Kleid›", "‹mit einer toll**en** Party›", "‹mit meinen neu**en** Freunden›"]
            ]
          },
          tip: "حيلة: في Dativ وفي الجمع تكون النهاية دائمًا ‑en. وفي Akkusativ يتغير المذكر فقط (‹einen … ‑en›). الصعب حفظه هو Nominativ: ‑er (مذكر)، ‑es (محايد)، ‑e (مؤنث)."
        },
        {
          h: "الصفة بعد الفعل: بدون نهاية",
          p: "إذا جاءت الصفة بعد ‹sein / werden / finden› فلا تأخذ نهاية: ‹Die Party ist **toll**.› ‹Das Kleid finde ich **schön**.› لكن: ‹Das ist eine **tolle** Party.›",
          ex: [["Du hast ein schönes Kleid an!", "تلبسين فستانًا جميلًا!"], ["Das war ein toller Abend!", "كانت أمسية رائعة!"], ["Ich wünsche dir einen schönen Abend!", "أتمنى لك أمسية جميلة!"]]
        },
        {
          h: "مجاملات وحديث قصير (Small Talk)",
          table: {
            head: ["الجملة", "المعنى"],
            rows: [
              ["‹Du siehst toll aus! Das Kleid steht dir super.›", "تبدين رائعة! الفستان يليق بك جدًا."],
              ["‹Der Kuchen schmeckt fantastisch! Hast du ihn selbst gebacken?›", "الكعكة لذيذة جدًا! هل خبزتها بنفسك؟"],
              ["‹Woher kennst du Lea?›", "من أين تعرف ليا؟"],
              ["‹Die Musik ist echt gut. Wollen wir tanzen?›", "الموسيقى جيدة فعلًا. هل نرقص؟"],
              ["‹Vielen Dank für den schönen Abend!›", "شكرًا جزيلًا على الأمسية الجميلة!"]
            ]
          }
        }
      ],
      vocab: [
        ["n", "die", "Gastgeberin", "-nen", "المضيفة", "Die Gastgeberin hat viel gekocht.", "المضيفة طبخت كثيرًا."],
        ["n", "der", "Gast", "¨-e", "الضيف", "Heute kommen zwanzig Gäste.", "اليوم يأتي عشرون ضيفًا."],
        ["n", "das", "Kompliment", "-e", "المجاملة / الإطراء", "Danke für das Kompliment!", "شكرًا على الإطراء!"],
        ["n", "der", "Nachtisch", "-e", "الحلوى (بعد الأكل)", "Zum Nachtisch gibt es Eis.", "كحلوى هناك آيس كريم."],
        ["n", "das", "Buffet", "-s", "البوفيه", "Das Buffet ist eröffnet!", "البوفيه مفتوح!"],
        ["n", "die", "Kerze", "-n", "الشمعة", "Auf dem Kuchen sind dreißig Kerzen.", "على الكعكة ثلاثون شمعة."],
        ["n", "der", "Luftballon", "-s", "البالون", "Die Kinder spielen mit Luftballons.", "الأطفال يلعبون بالبالونات."],
        ["n", "die", "Dekoration", "-en", "الزينة", "Die Dekoration ist sehr schön.", "الزينة جميلة جدًا."],
        ["n", "die", "Erinnerung", "-en", "الذكرى", "Das Foto ist eine schöne Erinnerung.", "الصورة ذكرى جميلة."],
        ["n", "die", "Dattel", "-n", "التمرة", "Datteln mit Mandeln sind lecker.", "التمر باللوز لذيذ."],
        ["v", "", "aussehen", "sieht aus, hat ausgesehen", "يبدو", "Du siehst heute toll aus!", "تبدو رائعًا اليوم!"],
        ["v", "", "backen", "hat gebacken", "يخبز", "Hast du den Kuchen selbst gebacken?", "هل خبزت الكعكة بنفسك؟"],
        ["v", "", "sich unterhalten", "unterhält sich, hat sich unterhalten", "يتحادث", "Wir haben uns lange unterhalten.", "تحادثنا طويلًا."],
        ["v", "", "kennenlernen", "lernt kennen, hat kennengelernt", "يتعرّف على", "Auf der Party habe ich nette Leute kennengelernt.", "في الحفلة تعرفت على أناس لطفاء."],
        ["v", "", "anstoßen", "stößt an, hat angestoßen", "يرفع الكؤوس (نخب)", "Lasst uns auf Lea anstoßen!", "لنرفع الكؤوس احتفالًا بليا!"],
        ["v", "", "aufräumen", "räumt auf, hat aufgeräumt", "يرتّب", "Nach der Party räumen wir auf.", "بعد الحفلة نرتّب."],
        ["a", "", "toll", "", "رائع", "Das ist eine tolle Party!", "هذه حفلة رائعة!"],
        ["a", "", "fantastisch", "", "مذهل", "Das Essen ist fantastisch.", "الأكل مذهل."],
        ["a", "", "elegant", "", "أنيق", "Sie trägt ein elegantes Kleid.", "تلبس فستانًا أنيقًا."],
        ["a", "", "witzig", "", "مضحك / ظريف", "Er ist ein witziger Typ.", "هو شخص ظريف."],
        ["a", "", "selbst gemacht", "", "مصنوع في البيت", "Das ist selbst gemachter Kuchen.", "هذه كعكة مصنوعة في البيت."],
        ["a", "", "lieb", "", "لطيف / عزيز", "Das ist sehr lieb von dir!", "هذا لطيف جدًا منك!"],
        ["x", "", "Das steht dir gut.", "", "هذا يليق بك.", "Die Farbe steht dir gut.", "اللون يليق بك."],
        ["x", "", "Das war ein schöner Abend!", "", "كانت أمسية جميلة!", "Danke, das war ein schöner Abend!", "شكرًا، كانت أمسية جميلة!"]
      ],
      phrases: [
        ["Das ist eine tolle Party!", "هذه حفلة رائعة!"],
        ["Du hast ein schönes Kleid an. Es steht dir super!", "تلبسين فستانًا جميلًا. يليق بك جدًا!"],
        ["Der Kuchen schmeckt fantastisch! Hast du ihn selbst gebacken?", "الكعكة لذيذة جدًا! هل خبزتها بنفسك؟"],
        ["Woher kennst du Lea?", "من أين تعرف ليا؟"],
        ["Ich habe einen neuen Kollegen kennengelernt.", "تعرّفت على زميل جديد."],
        ["Vielen Dank für den schönen Abend!", "شكرًا جزيلًا على الأمسية الجميلة!"],
        ["Ich wünsche dir noch einen schönen Abend!", "أتمنى لك بقية أمسية جميلة!"]
      ],
      ex: [
        { t: "gap", q: "أكمل نهاية الصفة (Nominativ).", s: "Das ist ein schön___ Abend. (der Abend)", a: ["er"], why: "مذكر Nominativ بعد ‹ein›: ‹schöner›.", tag: "adjektiv" },
        { t: "gap", q: "أكمل نهاية الصفة (Nominativ).", s: "Das ist eine toll___ Party. (die Party)", a: ["e"], why: "مؤنث بعد ‹eine›: ‹tolle›.", tag: "adjektiv" },
        { t: "gap", q: "أكمل نهاية الصفة (Nominativ).", s: "Das ist ein neu___ Kleid. (das Kleid)", a: ["es"], why: "محايد بعد ‹ein›: ‹neues›.", tag: "adjektiv" },
        { t: "gap", q: "أكمل نهاية الصفة (Akkusativ).", s: "Ich wünsche dir einen schön___ Abend.", a: ["en"], why: "مذكر Akkusativ: ‹einen schönen›.", tag: "adjektiv" },
        { t: "gap", q: "أكمل نهاية الصفة (Dativ).", s: "Sie kommt mit einer gut___ Freundin.", a: ["en"], why: "Dativ دائمًا ‑en: ‹einer guten›.", tag: "adjektiv" },
        { t: "gap", q: "أكمل نهاية الصفة (جمع).", s: "Ich habe keine warm___ Getränke.", a: ["en"], why: "بعد ‹keine› في الجمع: ‑en.", tag: "adjektiv" },
        { t: "mc", q: "اختر الصحيح.", s: "Du hast ___ Kleid an!", o: ["ein schönes", "ein schöner", "einen schönen"], a: 0, why: "‹das Kleid› محايد Akkusativ: ‹ein schönes›.", tag: "adjektiv" },
        { t: "mc", q: "اختر الصحيح.", s: "Er ist ___ Typ.", o: ["ein witziger", "ein witziges", "einen witzigen"], a: 0, why: "‹der Typ› مذكر Nominativ (بعد ‹ist›): ‹ein witziger›.", tag: "adjektiv" },
        { t: "mc", q: "اختر الصحيح.", s: "Die Party ist ___.", o: ["toll", "tolle", "toller"], a: 0, why: "الصفة بعد ‹sein› بدون نهاية.", tag: "adjektiv" },
        { t: "mc", q: "اختر الصحيح.", s: "Vielen Dank für ___ Abend!", o: ["den schönen", "der schöne", "dem schönen"], a: 0, why: "‹für› + Akkusativ، مذكر: ‹den schönen Abend›.", tag: "adjektiv" },
        { t: "match", q: "صِل الكلمة بمعناها.", pairs: [["die Kerze", "الشمعة"], ["der Nachtisch", "الحلوى"], ["das Kompliment", "الإطراء"], ["aussehen", "يبدو"], ["witzig", "ظريف"]], tag: "wortschatz" },
        { t: "order", q: "رتّب الجملة.", a: "Das war ein schöner Abend!", why: "‹ein schöner Abend› مذكر Nominativ.", tag: "adjektiv" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "هذه حفلة رائعة!", a: ["Das ist eine tolle Party!", "Das ist eine tolle Party.", "Das ist eine super Party!", "Das ist eine fantastische Party!"], tag: "adjektiv" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أتمنى لك أمسية جميلة!", a: ["Ich wünsche dir einen schönen Abend!", "Ich wünsche Ihnen einen schönen Abend!", "Ich wünsche dir einen schönen Abend.", "Ich wünsche Ihnen einen schönen Abend."], tag: "adjektiv" },
        { t: "read", title: "Nachricht nach der Party", text: "Liebe Lea, vielen Dank für den wunderschönen Abend! Du hattest eine tolle Idee: ein marokkanischer Abend mit selbst gemachtem Essen. Die Tajine war fantastisch und dein neuer Freund ist wirklich ein witziger Typ. Ich habe auch eine nette Kollegin von dir kennengelernt – wir wollen nächste Woche zusammen ins Kino gehen. Nur eine kleine Frage: Ich habe meinen grauen Schal bei dir vergessen. Kann ich ihn am Wochenende abholen? Liebe Grüße, Nadia", tr: "عزيزتي ليا، شكرًا جزيلًا على الأمسية الرائعة! كانت فكرتك رائعة: أمسية مغربية بأكل مصنوع في البيت. الطاجين كان مذهلًا وصديقك الجديد ظريف حقًا. تعرفت أيضًا على زميلة لطيفة لك — نريد أن نذهب معًا إلى السينما الأسبوع القادم. فقط سؤال صغير: نسيت وشاحي الرمادي عندك. هل يمكنني أن آخذه في عطلة الأسبوع؟ تحياتي، نادية", items: [
          { t: "tf", s: "Auf der Party gab es marokkanisches Essen.", a: true, why: "‹ein marokkanischer Abend … Die Tajine›." },
          { t: "tf", s: "Nadia möchte mit Leas Kollegin ins Kino gehen.", a: true, why: "‹wir wollen nächste Woche zusammen ins Kino gehen›." },
          { t: "tf", s: "Nadia hat ihre Jacke vergessen.", a: false, why: "‹meinen grauen Schal› = وشاحها." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Auf Leas Party", ar: "في حفلة ليا",
        scene: "أنت في حفلة صديقتك ليا. هي تلبس فستانًا جديدًا وخبزت كعكة.",
        who: { A: "Lea" },
        lines: [
          { s: "A", de: "Hallo {FIRST}, schön, dass du da bist! Komm rein!", ar: "مرحبًا، جميل أنك هنا! تفضّل بالدخول!" },
          { s: "U", task: "قل: مرحبًا ليا! تلبسين فستانًا جميلًا. يليق بك جدًا!", m: "Hallo Lea! Du hast ein schönes Kleid an. Es steht dir super!", ok: ["Hallo Lea du hast ein schönes Kleid an es steht dir super", "Hallo Lea du hast ein schönes Kleid an es steht dir sehr gut", "* ein schönes Kleid * steht dir *", "Hallo Lea dein Kleid ist schön *"], o: ["Hallo Lea! Du hast ein schönes Kleid an. Es steht dir super!", "Hallo Lea! Du hast ein schöner Kleid an. Es steht dir super!", "Hallo Lea! Du hast ein schönes Kleid an. Es steht dich super!"], why: ["", "‹das Kleid› محايد: ‹ein schönes›.", "‹stehen› (يليق) + Dativ: ‹dir›."], ar: "مرحبًا ليا! تلبسين فستانًا جميلًا. يليق بك جدًا!" },
          { s: "A", de: "Danke, das ist lieb! Probier mal den Kuchen, ich habe ihn heute Morgen gebacken.", ar: "شكرًا، هذا لطيف! جرّب الكعكة، خبزتها هذا الصباح." },
          { s: "U", task: "قل: ممم، الكعكة لذيذة جدًا! هذه حفلة رائعة.", m: "Mmh, der Kuchen schmeckt fantastisch! Das ist eine tolle Party.", ok: ["Mmh der Kuchen schmeckt fantastisch das ist eine tolle Party", "Der Kuchen schmeckt fantastisch das ist eine tolle Party", "* schmeckt * das ist eine tolle Party", "Der Kuchen ist sehr lecker das ist eine tolle Party"], o: ["Mmh, der Kuchen schmeckt fantastisch! Das ist eine tolle Party.", "Mmh, der Kuchen schmeckt fantastisch! Das ist ein toller Party.", "Mmh, der Kuchen schmeckt fantastisch! Das ist eine toller Party."], why: ["", "‹die Party› مؤنث: ‹eine tolle›.", "بعد ‹eine› النهاية ‑e: ‹tolle›."], ar: "ممم، الكعكة لذيذة جدًا! هذه حفلة رائعة." },
          { s: "A", de: "Danke! Kennst du schon meinen Kollegen Mehmet? Er kommt auch aus einem warmen Land.", ar: "شكرًا! هل تعرف زميلي محمد؟ هو أيضًا من بلد دافئ." },
          { s: "U", task: "قل: لا، ليس بعد. سأذهب لأتعرف عليه. وشكرًا على الدعوة الجميلة!", m: "Nein, noch nicht. Ich lerne ihn gleich kennen. Und danke für die schöne Einladung!", ok: ["Nein noch nicht ich lerne ihn gleich kennen und danke für die schöne Einladung", "Nein noch nicht * danke für die schöne Einladung", "Nein noch nicht ich lerne ihn gleich kennen *", "* danke für die schöne Einladung"], o: ["Nein, noch nicht. Ich lerne ihn gleich kennen. Und danke für die schöne Einladung!", "Nein, noch nicht. Ich lerne ihn gleich kennen. Und danke für die schönen Einladung!", "Nein, noch nicht. Ich kennenlerne ihn gleich. Und danke für die schöne Einladung!"], why: ["", "بعد ‹die› (مؤنث Akkusativ) النهاية ‑e: ‹die schöne Einladung›.", "‹kennenlernen› منفصل: ‹ich lerne … kennen›."], ar: "لا، ليس بعد. سأتعرف عليه حالًا. وشكرًا على الدعوة الجميلة!" }
        ]
      },
      listen: [
        { t: "listen", say: "Ich habe auf der Party einen netten Mann aus Spanien kennengelernt. Er ist Koch.", q: "من تعرّفت عليه؟", o: ["رجل إسباني طبّاخ", "امرأة إسبانية", "طبّاخ ألماني"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Lisa trägt ein langes rotes Kleid und ihre Schwester eine schwarze Hose.", q: "ماذا تلبس ليزا؟", o: ["فستانًا أحمر طويلًا", "بنطالًا أسود", "فستانًا أسود قصيرًا"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Vielen Dank für den schönen Abend! Das Essen war super und die Musik auch.", q: "ماذا يقول الضيف؟", o: ["يشكر على الأمسية", "يعتذر عن التأخر", "يدعو إلى حفلة"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Das ist eine tolle Party!", tag: "hoeren" },
        { t: "dict", say: "Ich wünsche dir einen schönen Abend.", tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "Der Knacklaut (Neueinsatz)", ar: "الوقفة الحنجرية (مثل الهمزة)",
    body: [
      { p: "في الألمانية الكلمات أو المقاطع التي تبدأ بحرف علة تُنطق مع **وقفة صغيرة في الحنجرة** قبلها — مثل **الهمزة** العربية! لذلك لا نربط الكلمات كما في الفرنسية:" },
      { table: { head: ["الألمانية", "النطق الصحيح", "ليس هكذا"], rows: [
        ["‹ein altes Auto›", "‹ʔein ʔaltes ʔAuto› (همزات)", "‹einaltesauto› (ربط فرنسي)"],
        ["‹Ich esse ein Ei.›", "‹ʔIch ʔesse ʔein ʔEi›", "‹Ichesseinei›"],
        ["‹be-antworten›", "‹beʔantworten›", "‹beantworten› مربوطة"],
        ["‹Ver-ein›", "‹Verʔein›", "‹Ve-rein›"]
      ] } },
      { tip: "خبر سار للعرب: أنت تعرف هذا الصوت من الهمزة (أ). المتعلمون الفرنسيون يجدونه صعبًا لأنهم يربطون الكلمات (liaison). في الألمانية: كل كلمة تبدأ بحرف علة = همزة خفيفة." }
    ],
    drills: [
      { t: "listen", say: "ein altes Auto", q: "هل تسمع وقفات صغيرة (همزات) قبل حروف العلة؟", o: ["نعم: ʔein ʔaltes ʔAuto", "لا، الكلمات مربوطة"], a: 0, why: "قبل كل كلمة تبدأ بحرف علة وقفة حنجرية." },
      { t: "listen", say: "Ich esse ein Ei.", q: "كم همزة تسمع؟", o: ["أربعًا", "واحدة", "لا شيء"], a: 0, why: "‹ʔIch ʔesse ʔein ʔEi› — أربع كلمات تبدأ بحرف علة." },
      { t: "listen", say: "beantworten", q: "هل هناك وقفة في وسط الكلمة؟", o: ["نعم: be‑ʔantworten", "لا"], a: 0, why: "بعد البادئة ‹be-› يبدأ مقطع جديد بحرف علة → وقفة." },
      { t: "listen", say: "der Verein", q: "كيف تُقسم الكلمة؟", o: ["Ver‑ʔein", "Ve‑rein"], a: 0, why: "‹ver-› بادئة، ثم ‹ein› بهمزة." }
    ],
    say: ["ein altes Auto", "am Abend", "Ich esse ein Ei.", "Alles Gute!", "Er ist am Ende auch eingeladen.", "Am Abend essen alle Onkel und Tanten zusammen.", "beantworten", "die Einladung"]
  },

  write: [
    {
      ar: "اكتب دعوة (40–50 كلمة) لأصدقائك إلى حفلة عيد ميلادك: متى وأين، ماذا ستفعلون، ماذا يحضرون، وجملة بـ wenn (مثلًا عن الطقس). واطلب الرد قبل تاريخ معيّن.",
      de: "Einladung zur Geburtstagsparty.",
      model: "Liebe Freunde,\nam Samstag, den 12. Juli, werde ich 25! Ich möchte mit euch feiern: um 19 Uhr bei mir zu Hause. Es gibt marokkanisches Essen und gute Musik. Wenn das Wetter schön ist, grillen wir im Garten. Bringt bitte etwas zu trinken mit. Sagt mir bitte bis Mittwoch, ob ihr kommt.\nIch freue mich auf euch!\nKarim",
      check: ["المناسبة والتاريخ والوقت والمكان", "جملة بـ ‹Wenn …, …› (الفعل فعل)", "ماذا يحضرون (mitbringen)", "طلب الرد", "‹Ich freue mich auf euch!›"]
    },
    {
      ar: "اعتذر عن دعوة إلى عرس: اشكر، هنّئ، اعتذر مع السبب (weil)، وأرسل هدية صغيرة واكتب لمن تُرسلها وماذا (Dativ + Akkusativ).",
      de: "Absage zur Hochzeit mit Glückwunsch.",
      model: "Liebe Sara, lieber Jonas,\nvielen Dank für eure Einladung! Herzlichen Glückwunsch zur Hochzeit! Leider kann ich nicht kommen, weil ich an dem Tag eine wichtige Prüfung habe. Ich schicke euch aber ein kleines Geschenk: Ich schenke euch einen Gutschein für ein schönes Restaurant. Ich wünsche euch eine wunderbare Feier!\nAlles Liebe\nKarim",
      check: ["الشكر على الدعوة", "التهنئة (Herzlichen Glückwunsch zur …)", "الاعتذار مع ‹weil›", "jemandem etwas schenken/schicken", "صفة مع نهاية صحيحة (ein schönes …)", "تمنٍّ في الختام"]
    }
  ],
  tutor: [
    { title: "Geschenk kaufen", ar: "شراء هدية", role: "eine freundliche Verkäuferin in einem Geschenkladen in Hamburg", goal: "ein Geschenk suchen und beschreiben (Adjektivendungen: ein schöner Schal, eine elegante Kette), jemandem etwas schenken/empfehlen/verpacken, nach Preis fragen", start: "Guten Tag! Suchen Sie ein Geschenk? Für wen ist es denn?" },
    { title: "Feste in Marokko", ar: "الأعياد في المغرب", role: "Lukas, ein deutscher Freund, der neugierig auf marokkanische Feste ist", goal: "über Feste und Traditionen erzählen, wenn-Sätze benutzen (Wenn Ramadan ist, …), Geschenke und Bräuche beschreiben", start: "Du, erzähl mal: Wie feiert ihr eigentlich das Zuckerfest in Marokko?" }
  ]
});

/* Lektion 13 (A2) — Unterwegs */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 13,
  level: "A2",
  de: "Unterwegs",
  ar: "في السفر",
  book: "منهج A2 · محتوى أصلي (السفر والقطار والفندق)",
  goals: [
    "الحديث عن وجهات السفر: nach Spanien, in die Türkei, ans Meer, in die Berge",
    "التمييز بين Wohin? و Wo? و Woher? مع حروف المكان",
    "طرح أسئلة مهذبة غير مباشرة: Können Sie mir sagen, wann …? Wissen Sie, ob …?",
    "شراء تذكرة القطار وحجز غرفة في فندق",
    "فهم قصة سفر بالماضي البسيط (Präteritum) وترتيب الأحداث: zuerst, dann, danach"
  ],
  units: [
    /* ───────────── 13A ───────────── */
    {
      id: "13A", de: "Wohin fährst du in Urlaub?", ar: "إلى أين تسافر في العطلة؟",
      summary: "وجهات السفر وأنواع العطل؛ حروف المكان والاتجاه: nach, in, an, auf, zu (wohin?) و in, an, auf, bei (wo?) و aus, von (woher?).",
      grammar: [
        {
          h: "إلى أين؟ (Wohin?) — اختيار الحرف",
          table: {
            head: ["الوجهة", "الحرف", "مثال"],
            rows: [
              ["مدن، دول بدون أداة، قارات", "‹nach›", "‹nach Berlin, nach Spanien, nach Afrika›"],
              ["دول بأداة، غرف، مبانٍ", "‹in› + Akk.", "‹in die Türkei, in die Schweiz, in die USA, ins Kino›"],
              ["البحر، الشاطئ، البحيرة، النهر", "‹an› + Akk.", "‹ans Meer, an den Strand, an den See›"],
              ["جزيرة، جبل، سوق، حفلة", "‹auf› + Akk.", "‹auf eine Insel, auf den Markt, auf die Party›"],
              ["الجبال (جمع)", "‹in› + Akk.", "‹in die Berge›"],
              ["أشخاص، أماكن معيّنة", "‹zu› + Dat.", "‹zu meiner Tante, zum Bahnhof, zur Post›"],
              ["البيت", "—", "‹nach Hause› (إلى البيت)"]
            ]
          },
          tip: "دول مؤنثة شائعة: ‹die Türkei, die Schweiz, die Slowakei›. ودول جمع: ‹die USA, die Niederlande›. هذه نقول معها ‹in die …›."
        },
        {
          h: "أين؟ (Wo?) ومن أين؟ (Woher?)",
          table: {
            head: ["Wohin? (Akk.)", "Wo? (Dat.)", "Woher?"],
            rows: [
              ["‹nach Spanien›", "‹in Spanien›", "‹aus Spanien›"],
              ["‹in die Türkei›", "‹in der Türkei›", "‹aus der Türkei›"],
              ["‹ans Meer›", "‹am Meer›", "‹vom Meer›"],
              ["‹in die Berge›", "‹in den Bergen›", "‹aus den Bergen›"],
              ["‹auf eine Insel›", "‹auf einer Insel›", "‹von einer Insel›"],
              ["‹zu meiner Tante›", "‹bei meiner Tante›", "‹von meiner Tante›"],
              ["‹nach Hause›", "‹zu Hause›", "‹von zu Hause›"]
            ]
          },
          tip: "‹bei› + شخص = في بيته: ‹Ich wohne bei meinem Onkel.›"
        },
        {
          h: "أنواع العطل",
          list: ["‹Urlaub am Meer / in den Bergen / auf dem Land / in der Stadt›", "‹eine Städtereise› = رحلة لزيارة مدينة", "‹Campingurlaub› = عطلة تخييم", "‹eine Rundreise› = جولة في عدة أماكن", "‹Urlaub machen› / ‹in Urlaub fahren› = يذهب في عطلة"]
        }
      ],
      vocab: [
        ["n", "der", "Urlaub", "-e", "العطلة / الإجازة", "Im August fahre ich in Urlaub.", "في غشت أذهب في عطلة."],
        ["n", "die", "Reise", "-n", "الرحلة / السفر", "Die Reise war lang, aber schön.", "الرحلة كانت طويلة لكن جميلة."],
        ["n", "das", "Reiseziel", "-e", "وجهة السفر", "Mein Reiseziel ist Istanbul.", "وجهة سفري إسطنبول."],
        ["n", "das", "Meer", "-e", "البحر", "Wir fahren ans Meer.", "نذهب إلى البحر."],
        ["n", "der", "See", "-n", "البحيرة", "Am See kann man schwimmen.", "في البحيرة يمكن السباحة."],
        ["n", "die", "Berge", "Pl.", "الجبال", "Im Winter fahren wir in die Berge.", "في الشتاء نذهب إلى الجبال."],
        ["n", "die", "Wüste", "-n", "الصحراء", "In der Wüste ist es tagsüber sehr heiß.", "في الصحراء يكون الجو حارًا جدًا نهارًا."],
        ["n", "das", "Land", "Sg.", "الريف", "Meine Großeltern wohnen auf dem Land.", "جدّاي يسكنان في الريف."],
        ["n", "die", "Städtereise", "-n", "رحلة لزيارة مدينة", "Eine Städtereise nach Wien ist toll.", "رحلة إلى فيينا رائعة."],
        ["n", "der", "Campingplatz", "¨-e", "مخيّم", "Wir übernachten auf einem Campingplatz.", "نبيت في مخيّم."],
        ["n", "das", "Zelt", "-e", "الخيمة", "Wir schlafen im Zelt.", "ننام في الخيمة."],
        ["n", "der", "Koffer", "-", "حقيبة السفر", "Mein Koffer ist zu schwer.", "حقيبتي ثقيلة جدًا."],
        ["n", "der", "Rucksack", "¨-e", "حقيبة الظهر", "Ich reise nur mit einem Rucksack.", "أسافر بحقيبة ظهر فقط."],
        ["n", "der", "Reisepass", "¨-e", "جواز السفر", "Vergiss deinen Reisepass nicht!", "لا تنس جواز سفرك!"],
        ["n", "der", "Flughafen", "¨", "المطار", "Der Flughafen ist weit vom Zentrum.", "المطار بعيد عن المركز."],
        ["n", "der", "Flug", "¨-e", "الرحلة الجوية", "Der Flug dauert drei Stunden.", "الرحلة الجوية تستغرق ثلاث ساعات."],
        ["n", "die", "Türkei", "Sg.", "تركيا", "Wir fliegen in die Türkei.", "نسافر جوًا إلى تركيا."],
        ["n", "die", "Schweiz", "Sg.", "سويسرا", "Sie macht Urlaub in der Schweiz.", "هي تقضي العطلة في سويسرا."],
        ["v", "", "reisen", "ist gereist", "يسافر", "Ich reise gern allein.", "أحب السفر وحدي."],
        ["v", "", "fliegen", "ist geflogen", "يطير / يسافر بالطائرة", "Wir fliegen nach Madrid.", "نسافر جوًا إلى مدريد."],
        ["v", "", "übernachten", "hat übernachtet", "يبيت", "Wo übernachtet ihr?", "أين تبيتون؟"],
        ["v", "", "packen", "hat gepackt", "يحزم الأمتعة", "Hast du deinen Koffer schon gepackt?", "هل حزمت حقيبتك؟"],
        ["v", "", "sich erholen", "hat sich erholt", "يرتاح / يستعيد نشاطه", "Im Urlaub möchte ich mich erholen.", "في العطلة أريد أن أرتاح."],
        ["v", "", "zelten", "hat gezeltet", "يخيّم", "Wir zelten am See.", "نخيّم عند البحيرة."],
        ["p", "", "nach", "+ Stadt/Land", "إلى", "Ich fahre nach Marrakesch.", "أذهب إلى مراكش."],
        ["p", "", "an", "+ Akk./Dat.", "إلى/عند (الماء)", "Wir fahren ans Meer. – Wir sind am Meer.", "نذهب إلى البحر. – نحن عند البحر."],
        ["p", "", "auf", "+ Akk./Dat.", "إلى/على (جزيرة)", "Sie fliegt auf eine Insel.", "تسافر إلى جزيرة."],
        ["d", "", "unterwegs", "", "في الطريق / مسافر", "Ich bin viel unterwegs.", "أنا كثير السفر."],
        ["d", "", "tagsüber", "", "خلال النهار", "Tagsüber ist es warm, nachts kalt.", "خلال النهار دافئ وفي الليل بارد."],
        ["x", "", "in Urlaub fahren", "", "يذهب في عطلة", "Wann fahrt ihr in Urlaub?", "متى تذهبون في عطلة؟"]
      ],
      phrases: [
        ["Wohin fährst du in Urlaub? – Ich fahre in die Türkei.", "إلى أين تسافر في العطلة؟ – أسافر إلى تركيا."],
        ["Wir fahren ans Meer und dann in die Berge.", "نذهب إلى البحر ثم إلى الجبال."],
        ["Ich übernachte bei meiner Tante in Rabat.", "أبيت عند عمتي في الرباط."],
        ["Am liebsten mache ich Urlaub am Meer.", "أكثر ما أحب العطلة على البحر."],
        ["Im Sommer fliege ich nach Hause, nach Marokko.", "في الصيف أسافر إلى البلد، إلى المغرب."],
        ["Hast du schon deinen Koffer gepackt?", "هل حزمت حقيبتك؟"],
        ["Ich möchte mich im Urlaub richtig erholen.", "أريد أن أرتاح فعلًا في العطلة."]
      ],
      ex: [
        { t: "mc", q: "اختر الحرف الصحيح.", s: "Wir fahren im Sommer ___ Spanien.", o: ["nach", "in", "zu"], a: 0, why: "دولة بدون أداة → ‹nach›.", tag: "lokal" },
        { t: "mc", q: "اختر الحرف الصحيح.", s: "Wir fliegen ___ Türkei.", o: ["in die", "nach", "zur"], a: 0, why: "‹die Türkei› دولة بأداة → ‹in die›.", tag: "lokal" },
        { t: "mc", q: "اختر الحرف الصحيح.", s: "Am Wochenende fahren wir ___ Meer.", o: ["ans", "ins", "nach"], a: 0, why: "الماء (البحر) → ‹an das = ans›.", tag: "lokal" },
        { t: "mc", q: "اختر الحرف الصحيح.", s: "Im Winter fahren viele Leute ___ Berge.", o: ["in die", "an die", "nach"], a: 0, why: "الجبال → ‹in die Berge›.", tag: "lokal" },
        { t: "mc", q: "اختر الحرف الصحيح.", s: "Ich fahre ___ meiner Tante.", o: ["zu", "nach", "bei"], a: 0, why: "إلى شخص → ‹zu› + Dativ.", tag: "lokal" },
        { t: "gap", q: "أكمل (Wo?).", s: "Meine Schwester wohnt ___ Schweiz.", a: ["in der"], why: "Wo? + دولة مؤنثة → ‹in der Schweiz›.", tag: "lokal" },
        { t: "gap", q: "أكمل (Wo?).", s: "Wir waren eine Woche ___ Meer.", a: ["am"], why: "Wo? + البحر → ‹am (an dem) Meer›.", tag: "lokal" },
        { t: "gap", q: "أكمل (Wo?).", s: "In den Ferien wohne ich ___ meinen Großeltern.", a: ["bei"], why: "في بيت أشخاص → ‹bei›.", tag: "lokal" },
        { t: "gap", q: "أكمل (Woher?).", s: "Mein Kollege kommt ___ Türkei.", a: ["aus der"], why: "‹aus› + Dativ: ‹aus der Türkei›.", tag: "lokal" },
        { t: "gap", q: "أكمل بـ nach Hause / zu Hause.", s: "Nach dem Urlaub bin ich gern wieder ___ ___.", a: ["zu", "Hause"], why: "Wo? → ‹zu Hause›.", tag: "lokal" },
        { t: "match", q: "صِل الوجهة بالحرف.", pairs: [["Berlin", "nach"], ["die Türkei", "in die"], ["das Meer", "ans"], ["eine Insel", "auf"], ["mein Onkel", "zu"]], tag: "lokal" },
        { t: "order", q: "رتّب الجملة.", a: "Im August fahren wir ans Meer.", why: "الظرف أولًا، ثم الفعل ‹fahren›، ثم الفاعل.", tag: "lokal" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "نذهب في الصيف إلى البحر.", a: ["Im Sommer fahren wir ans Meer.", "Wir fahren im Sommer ans Meer.", "Im Sommer fahren wir an das Meer.", "Wir fahren im Sommer an das Meer."], tag: "lokal" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أبيت عند صديقي.", a: ["Ich übernachte bei meinem Freund.", "Ich schlafe bei meinem Freund.", "Ich übernachte bei meiner Freundin."], tag: "lokal" },
        { t: "read", title: "Urlaubspläne", text: "Dieses Jahr machen wir keinen Strandurlaub. Wir wollen eine Rundreise durch Marokko machen. Zuerst fliegen wir nach Fès und besuchen die Altstadt. Dann fahren wir mit dem Bus in die Wüste nach Merzouga und schlafen zwei Nächte in einem Zelt. Danach fahren wir in die Berge, ins Atlasgebirge, und wandern drei Tage. Zum Schluss erholen wir uns am Meer in Essaouira. Dort wohnen wir bei Freunden.", tr: "هذه السنة لن نقضي عطلة على الشاطئ. نريد أن نقوم بجولة في المغرب. أولًا نسافر جوًا إلى فاس ونزور المدينة القديمة. ثم نذهب بالحافلة إلى الصحراء إلى مرزوكة وننام ليلتين في خيمة. بعد ذلك نذهب إلى الجبال، إلى جبال الأطلس، ونتنزه ثلاثة أيام. في النهاية نرتاح على البحر في الصويرة. هناك نسكن عند أصدقاء.", items: [
          { t: "tf", s: "Sie machen dieses Jahr Urlaub nur am Strand.", a: false, why: "‹Dieses Jahr machen wir keinen Strandurlaub.›" },
          { t: "tf", s: "In der Wüste schlafen sie in einem Hotel.", a: false, why: "‹schlafen zwei Nächte in einem Zelt›." },
          { t: "tf", s: "In Essaouira übernachten sie bei Freunden.", a: true, why: "‹Dort wohnen wir bei Freunden.›" }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Urlaubspläne", ar: "خطط العطلة",
        scene: "زميلتك نينا تسألك عن خططك للعطلة الصيفية.",
        who: { A: "Nina" },
        lines: [
          { s: "A", de: "Bald sind Sommerferien! Wohin fährst du in Urlaub?", ar: "قريبًا عطلة الصيف! إلى أين تسافر في العطلة؟" },
          { s: "U", task: "قل: أسافر جوًا إلى المغرب، إلى عائلتي في {CITY}.", m: "Ich fliege nach Marokko, zu meiner Familie in {CITY}.", ok: ["Ich fliege nach Marokko zu meiner Familie in *", "Ich fliege nach Marokko zu meiner Familie", "Ich fahre nach Marokko zu meiner Familie *", "Nach Marokko zu meiner Familie *"], o: ["Ich fliege nach Marokko, zu meiner Familie in {CITY}.", "Ich fliege in Marokko, zu meiner Familie in {CITY}.", "Ich fliege nach Marokko, bei meiner Familie in {CITY}."], why: ["", "دولة بدون أداة → ‹nach Marokko›.", "إلى أشخاص (حركة) → ‹zu›؛ ‹bei› للمكان الثابت."], ar: "أسافر إلى المغرب، إلى عائلتي في …" },
          { s: "A", de: "Schön! Und was machst du dort? Fahrt ihr auch ans Meer?", ar: "جميل! وماذا تفعل هناك؟ هل تذهبون أيضًا إلى البحر؟" },
          { s: "U", task: "قل: نعم، نذهب أسبوعًا إلى البحر، ثم إلى الجبال.", m: "Ja, wir fahren eine Woche ans Meer und dann in die Berge.", ok: ["Ja wir fahren eine Woche ans Meer und dann in die Berge", "Ja wir fahren eine Woche an das Meer und dann in die Berge", "Ja wir fahren ans Meer und dann in die Berge", "* ans Meer und dann in die Berge"], o: ["Ja, wir fahren eine Woche ans Meer und dann in die Berge.", "Ja, wir fahren eine Woche am Meer und dann in den Bergen.", "Ja, wir fahren eine Woche nach Meer und dann nach Berge."], why: ["", "حركة (wohin?) → Akkusativ: ‹ans Meer›، ‹in die Berge›.", "مع البحر والجبال لا نستعمل ‹nach›."], ar: "نعم، نذهب أسبوعًا إلى البحر ثم إلى الجبال." },
          { s: "A", de: "Toll! Ich bleibe leider zu Hause. Ich muss arbeiten.", ar: "رائع! أنا للأسف سأبقى في البيت. يجب أن أعمل." },
          { s: "U", task: "قل: يا للأسف! لكن ربما يمكنك في الخريف أن تسافري إلى جزيرة.", m: "Schade! Aber vielleicht kannst du im Herbst auf eine Insel fliegen.", ok: ["Schade aber vielleicht kannst du im Herbst auf eine Insel fliegen", "Schade vielleicht kannst du im Herbst auf eine Insel fliegen", "Schade aber vielleicht kannst du im Herbst auf eine Insel fahren", "* auf eine Insel *"], o: ["Schade! Aber vielleicht kannst du im Herbst auf eine Insel fliegen.", "Schade! Aber vielleicht kannst du im Herbst in eine Insel fliegen.", "Schade! Aber vielleicht kannst du im Herbst auf eine Insel fliegst."], why: ["", "الجزيرة → ‹auf eine Insel›.", "بعد ‹kannst› المصدر: ‹fliegen›."], ar: "يا للأسف! لكن ربما يمكنك في الخريف أن تسافري إلى جزيرة." }
        ]
      },
      listen: [
        { t: "listen", say: "Letzten Sommer war ich in der Schweiz. Dieses Jahr fahre ich nach Italien.", q: "إلى أين يسافر هذه السنة؟", o: ["إيطاليا", "سويسرا", "تركيا"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Wir übernachten nicht im Hotel, sondern bei meinem Onkel in Tanger.", q: "أين يبيتون؟", o: ["عند العم في طنجة", "في فندق في طنجة", "في مخيّم"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Am liebsten mache ich Urlaub in den Bergen. Am Meer ist es mir zu heiß.", q: "لماذا لا يحب البحر؟", o: ["الجو حار جدًا", "البحر بعيد", "لا يحب السباحة"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Wir fahren ans Meer.", tag: "hoeren" },
        { t: "dict", say: "Ich fliege in die Türkei.", tag: "hoeren" }
      ]
    },

    /* ───────────── 13B ───────────── */
    {
      id: "13B", de: "Am Bahnhof und im Hotel", ar: "في محطة القطار وفي الفندق",
      summary: "شراء تذكرة القطار، الاستعلام عن المواعيد، حجز غرفة؛ الأسئلة غير المباشرة بـ W‑كلمة و ob (الفعل في الآخر).",
      grammar: [
        {
          h: "السؤال غير المباشر (مهذب): W‑كلمة",
          p: "لسؤال أكثر تهذيبًا نبدأ بـ ‹Können Sie mir sagen, …› أو ‹Wissen Sie, …› ثم كلمة السؤال، والفعل في **الآخر**:",
          table: {
            head: ["السؤال المباشر", "السؤال غير المباشر"],
            rows: [
              ["‹Wann fährt der Zug nach Köln?›", "‹Können Sie mir sagen, wann der Zug nach Köln **fährt**?›"],
              ["‹Wo ist Gleis 7?›", "‹Wissen Sie, wo Gleis 7 **ist**?›"],
              ["‹Wie viel kostet die Fahrkarte?›", "‹Ich möchte wissen, wie viel die Fahrkarte **kostet**.›"],
              ["‹Wann kommt der Zug an?›", "‹Können Sie mir sagen, wann der Zug **ankommt**?›"]
            ]
          }
        },
        {
          h: "السؤال غير المباشر: نعم/لا → ob",
          p: "إذا كان السؤال الأصلي بدون كلمة سؤال (جوابه نعم/لا)، نستعمل ‹ob› (هل):",
          table: {
            head: ["السؤال المباشر", "السؤال غير المباشر"],
            rows: [
              ["‹Hält der Zug in Bonn?›", "‹Wissen Sie, ob der Zug in Bonn **hält**?›"],
              ["‹Ist das Zimmer frei?›", "‹Können Sie mir sagen, ob das Zimmer frei **ist**?›"],
              ["‹Gibt es WLAN?›", "‹Ich möchte wissen, ob es WLAN **gibt**.›"]
            ]
          },
          tip: "لا تخلط ‹ob› (هل) و‹wenn› (إذا): ‹Ich weiß nicht, **ob** er kommt› (لا أعرف هل سيأتي). ‹Ich komme, **wenn** ich Zeit habe› (آتي إذا كان عندي وقت)."
        },
        {
          h: "في محطة القطار",
          table: {
            head: ["الكلمة / الجملة", "المعنى"],
            rows: [
              ["‹eine einfache Fahrt / hin und zurück›", "ذهاب فقط / ذهاب وإياب"],
              ["‹Muss ich umsteigen?›", "هل يجب أن أغيّر القطار؟"],
              ["‹Der Zug hat 10 Minuten Verspätung.›", "القطار متأخر 10 دقائق."],
              ["‹Der Zug fährt von Gleis 4 ab.›", "القطار يغادر من الرصيف 4."],
              ["‹Ich möchte einen Sitzplatz reservieren.›", "أريد حجز مقعد."]
            ]
          }
        }
      ],
      vocab: [
        ["n", "der", "Zug", "¨-e", "القطار", "Der Zug nach Köln fährt um 9:15 Uhr.", "القطار إلى كولونيا يغادر في 9:15."],
        ["n", "das", "Gleis", "-e", "الرصيف (السكة)", "Der Zug fährt von Gleis 7 ab.", "القطار يغادر من الرصيف 7."],
        ["n", "die", "Abfahrt", "-en", "المغادرة", "Die Abfahrt ist um 10 Uhr.", "المغادرة في العاشرة."],
        ["n", "die", "Ankunft", "¨-e", "الوصول", "Die Ankunft in Berlin ist um 14 Uhr.", "الوصول إلى برلين في الثانية."],
        ["n", "die", "Verspätung", "-en", "التأخير", "Der Zug hat 20 Minuten Verspätung.", "القطار متأخر 20 دقيقة."],
        ["n", "der", "Fahrplan", "¨-e", "جدول المواعيد", "Schau mal auf den Fahrplan!", "انظر إلى جدول المواعيد!"],
        ["n", "die", "Rückfahrt", "-en", "رحلة العودة", "Die Rückfahrt ist am Sonntag.", "رحلة العودة يوم الأحد."],
        ["n", "der", "Sitzplatz", "¨-e", "المقعد", "Ich habe einen Sitzplatz reserviert.", "حجزت مقعدًا."],
        ["n", "der", "Schalter", "-", "الشبّاك", "Fahrkarten gibt es am Schalter.", "التذاكر تُباع في الشبّاك."],
        ["n", "die", "Rezeption", "-en", "الاستقبال (في الفندق)", "Fragen Sie an der Rezeption.", "اسأل في الاستقبال."],
        ["n", "das", "Doppelzimmer", "-", "غرفة مزدوجة", "Wir möchten ein Doppelzimmer.", "نريد غرفة مزدوجة."],
        ["n", "die", "Übernachtung", "-en", "المبيت (ليلة)", "Eine Übernachtung kostet 80 Euro.", "ليلة المبيت بـ 80 يورو."],
        ["n", "die", "Halbpension", "Sg.", "نصف إقامة (فطور + عشاء)", "Das Zimmer mit Halbpension kostet mehr.", "الغرفة بنصف إقامة تكلّف أكثر."],
        ["n", "das", "WLAN", "Sg.", "الإنترنت اللاسلكي (واي فاي)", "Gibt es im Hotel WLAN?", "هل في الفندق واي فاي؟"],
        ["n", "die", "Buchung", "-en", "الحجز", "Ich habe eine Buchung auf den Namen Amrani.", "عندي حجز باسم عمراني."],
        ["v", "", "abfahren", "fährt ab, ist abgefahren", "يغادر", "Wann fährt der Bus ab?", "متى تغادر الحافلة؟"],
        ["v", "", "ankommen", "kommt an, ist angekommen", "يصل", "Wir kommen um 18 Uhr in Hamburg an.", "نصل في السادسة إلى هامبورغ."],
        ["v", "", "umsteigen", "steigt um, ist umgestiegen", "يغيّر (وسيلة النقل)", "Sie müssen in Frankfurt umsteigen.", "يجب أن تغيّر القطار في فرانكفورت."],
        ["v", "", "reservieren", "hat reserviert", "يحجز", "Ich möchte ein Zimmer reservieren.", "أريد حجز غرفة."],
        ["v", "", "buchen", "hat gebucht", "يحجز (رحلة / فندق)", "Ich habe den Flug online gebucht.", "حجزت الرحلة عبر الإنترنت."],
        ["v", "", "verpassen", "hat verpasst", "يفوّت", "Ich habe den Zug verpasst!", "فاتني القطار!"],
        ["v", "", "wissen", "weiß, hat gewusst", "يعرف (معلومة)", "Wissen Sie, wo die Toiletten sind?", "هل تعرف أين المراحيض؟"],
        ["p", "", "ob", "+ Verb am Ende", "هل (في السؤال غير المباشر)", "Ich weiß nicht, ob der Zug pünktlich ist.", "لا أعرف هل القطار في موعده."],
        ["a", "", "pünktlich", "", "في الموعد", "Der Zug ist heute pünktlich.", "القطار اليوم في موعده."],
        ["a", "", "direkt", "", "مباشر", "Gibt es eine direkte Verbindung?", "هل هناك خط مباشر؟"],
        ["a", "", "ausgebucht", "", "محجوز بالكامل", "Das Hotel ist leider ausgebucht.", "الفندق محجوز بالكامل للأسف."],
        ["x", "", "hin und zurück", "", "ذهاب وإياب", "Einmal Köln hin und zurück, bitte.", "تذكرة إلى كولونيا ذهابًا وإيابًا من فضلك."],
        ["x", "", "eine einfache Fahrt", "", "ذهاب فقط", "Eine einfache Fahrt nach Bonn, bitte.", "تذكرة ذهاب فقط إلى بون من فضلك."]
      ],
      phrases: [
        ["Können Sie mir sagen, wann der nächste Zug nach Köln fährt?", "هل يمكنك أن تقول لي متى يغادر القطار القادم إلى كولونيا؟"],
        ["Wissen Sie, ob der Zug in Bonn hält?", "هل تعرف هل يتوقف القطار في بون؟"],
        ["Einmal Hamburg hin und zurück, bitte.", "تذكرة إلى هامبورغ ذهابًا وإيابًا من فضلك."],
        ["Muss ich umsteigen?", "هل يجب أن أغيّر القطار؟"],
        ["Ich habe ein Doppelzimmer auf den Namen Amrani reserviert.", "حجزت غرفة مزدوجة باسم عمراني."],
        ["Ab wann gibt es Frühstück?", "من متى يُقدَّم الفطور؟"],
        ["Ich möchte wissen, ob das Zimmer einen Balkon hat.", "أريد أن أعرف هل للغرفة شرفة."]
      ],
      ex: [
        { t: "order", q: "رتّب السؤال غير المباشر.", a: "Können Sie mir sagen, wann der Zug fährt?", why: "بعد ‹wann› الفاعل ثم الفعل ‹fährt› في الآخر.", tag: "nebensatz" },
        { t: "order", q: "رتّب السؤال غير المباشر.", a: "Wissen Sie, ob das Hotel WLAN hat?", why: "‹ob› + … + ‹hat› في الآخر.", tag: "nebensatz" },
        { t: "mc", q: "اختر الصحيح.", s: "Können Sie mir sagen, wo ___?", o: ["Gleis 5 ist", "ist Gleis 5", "Gleis 5"], a: 0, why: "في السؤال غير المباشر الفعل في الآخر.", tag: "nebensatz" },
        { t: "mc", q: "اختر الصحيح.", s: "Ich weiß nicht, ___ der Zug Verspätung hat.", o: ["ob", "wenn", "dass"], a: 0, why: "سؤال نعم/لا غير مباشر → ‹ob›.", tag: "nebensatz" },
        { t: "mc", q: "اختر الصحيح.", s: "Wissen Sie, ___ die Fahrkarte kostet?", o: ["wie viel", "ob viel", "was viel"], a: 0, why: "السؤال الأصلي: ‹Wie viel kostet …?› → ‹wie viel›.", tag: "nebensatz" },
        { t: "mc", q: "حوّل: «Hält der Bus am Bahnhof?»", o: ["Wissen Sie, ob der Bus am Bahnhof hält?", "Wissen Sie, wenn der Bus am Bahnhof hält?", "Wissen Sie, ob hält der Bus am Bahnhof?"], a: 0, why: "سؤال نعم/لا → ‹ob›، والفعل في الآخر.", tag: "nebensatz" },
        { t: "gap", q: "أكمل بـ ob أو W‑كلمة.", s: "Können Sie mir sagen, ___ der Zug ankommt? (متى)", a: ["wann"], why: "‹Wann kommt der Zug an?› → ‹wann›.", tag: "nebensatz" },
        { t: "gap", q: "أكمل بالفعل المنفصل في الآخر.", s: "Ich möchte wissen, wann der Zug in München ___. (ankommen)", a: ["ankommt"], why: "في الجملة الفرعية يلتصق المنفصل: ‹ankommt›.", tag: "nebensatz" },
        { t: "gap", q: "أكمل.", s: "Einmal Berlin hin und ___, bitte.", a: ["zurück"], why: "‹hin und zurück› = ذهاب وإياب.", tag: "reise" },
        { t: "match", q: "صِل الكلمة بمعناها.", pairs: [["die Verspätung", "التأخير"], ["das Gleis", "الرصيف"], ["umsteigen", "يغيّر القطار"], ["ausgebucht", "محجوز بالكامل"], ["die Ankunft", "الوصول"]], tag: "reise" },
        { t: "mc", q: "ماذا يعني: «Der Zug hat zehn Minuten Verspätung.»؟", o: ["القطار متأخر عشر دقائق", "القطار يصل بعد عشر دقائق في موعده", "القطار يتوقف عشر دقائق"], a: 0, why: "‹die Verspätung› = التأخير.", tag: "reise" },
        { t: "tr", q: "ترجم إلى الألمانية (بأدب).", ar: "هل تعرف أين الرصيف 3؟", a: ["Wissen Sie, wo Gleis 3 ist?", "Wissen Sie, wo das Gleis 3 ist?", "Können Sie mir sagen, wo Gleis 3 ist?"], tag: "nebensatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "لا أعرف هل القطار في موعده.", a: ["Ich weiß nicht, ob der Zug pünktlich ist.", "Ich weiß nicht, ob der Zug pünktlich kommt."], tag: "nebensatz" },
        { t: "read", title: "Durchsage am Bahnhof", text: "Achtung an Gleis 7: Der ICE 527 nach München, planmäßige Abfahrt 10:42 Uhr, hat heute circa 15 Minuten Verspätung. Grund dafür ist eine Reparatur an der Strecke. Reisende nach Stuttgart: Bitte steigen Sie in Mannheim in den IC 2013 um. Dieser Zug wartet auf den ICE. Wir bitten um Entschuldigung.", tr: "انتباه على الرصيف 7: قطار ICE 527 إلى ميونخ، موعد المغادرة 10:42، متأخر اليوم حوالي 15 دقيقة. السبب إصلاح على السكة. المسافرون إلى شتوتغارت: غيّروا في مانهايم إلى قطار IC 2013. هذا القطار ينتظر قطار ICE. نعتذر.", items: [
          { t: "tf", s: "Der ICE nach München fährt heute später ab.", a: true, why: "‹hat heute circa 15 Minuten Verspätung›." },
          { t: "tf", s: "Die Verspätung kommt vom schlechten Wetter.", a: false, why: "السبب: ‹eine Reparatur an der Strecke›." },
          { t: "tf", s: "Reisende nach Stuttgart müssen in Mannheim umsteigen.", a: true, why: "‹Bitte steigen Sie in Mannheim … um.›" }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Am Fahrkartenschalter", ar: "في شبّاك التذاكر",
        scene: "أنت في محطة كولونيا وتريد السفر إلى هامبورغ يوم الجمعة. الموظف السيد فوغل في الشبّاك.",
        who: { A: "Herr Vogel" },
        lines: [
          { s: "A", de: "Guten Tag, was kann ich für Sie tun?", ar: "مرحبًا، ماذا يمكنني أن أفعل لك؟" },
          { s: "U", task: "اسأل بأدب: هل يمكنك أن تقول لي متى يغادر القطار إلى هامبورغ يوم الجمعة صباحًا؟", m: "Können Sie mir sagen, wann am Freitagmorgen ein Zug nach Hamburg fährt?", ok: ["Können Sie mir sagen wann am Freitagmorgen ein Zug nach Hamburg fährt", "Können Sie mir sagen wann der Zug nach Hamburg am Freitagmorgen fährt", "Können Sie mir sagen wann am Freitag ein Zug nach Hamburg fährt", "Können Sie mir sagen wann * nach Hamburg fährt", "Wissen Sie wann * nach Hamburg fährt"], o: ["Können Sie mir sagen, wann am Freitagmorgen ein Zug nach Hamburg fährt?", "Können Sie mir sagen, wann fährt am Freitagmorgen ein Zug nach Hamburg?", "Können Sie mir sagen, ob wann am Freitagmorgen ein Zug nach Hamburg fährt?"], why: ["", "في السؤال غير المباشر الفعل ‹fährt› في الآخر.", "مع كلمة السؤال ‹wann› لا نضيف ‹ob›."], ar: "هل يمكنك أن تقول لي متى يغادر قطار إلى هامبورغ يوم الجمعة صباحًا؟" },
          { s: "A", de: "Um 8:12 Uhr fährt ein ICE. Sie sind um 12:20 Uhr in Hamburg.", ar: "في 8:12 يغادر قطار ICE. وتكون في هامبورغ في 12:20." },
          { s: "U", task: "اسأل: هل يجب أن أغيّر القطار؟ وأريد أن أعرف هل يمكنني حجز مقعد.", m: "Muss ich umsteigen? Und ich möchte wissen, ob ich einen Sitzplatz reservieren kann.", ok: ["Muss ich umsteigen und ich möchte wissen ob ich einen Sitzplatz reservieren kann", "Muss ich umsteigen ich möchte wissen ob ich einen Sitzplatz reservieren kann", "Muss ich umsteigen *", "* ob ich einen Sitzplatz reservieren kann"], o: ["Muss ich umsteigen? Und ich möchte wissen, ob ich einen Sitzplatz reservieren kann.", "Muss ich umsteigen? Und ich möchte wissen, ob ich kann einen Sitzplatz reservieren.", "Muss ich umsteigen? Und ich möchte wissen, wenn ich einen Sitzplatz reservieren kann."], why: ["", "بعد ‹ob› الفعل الناقص ‹kann› في الآخر.", "سؤال نعم/لا غير مباشر → ‹ob›."], ar: "هل يجب أن أغيّر القطار؟ وأريد أن أعرف هل يمكنني حجز مقعد." },
          { s: "A", de: "Nein, die Verbindung ist direkt. Eine Reservierung kostet fünf Euro. Einfache Fahrt oder hin und zurück?", ar: "لا، الخط مباشر. الحجز بخمسة يورو. ذهاب فقط أم ذهاب وإياب؟" },
          { s: "U", task: "قل: ذهاب وإياب من فضلك، العودة يوم الأحد. ومع حجز مقعد.", m: "Hin und zurück, bitte. Die Rückfahrt ist am Sonntag. Und mit Sitzplatzreservierung.", ok: ["Hin und zurück bitte die Rückfahrt ist am Sonntag und mit Sitzplatzreservierung", "Hin und zurück bitte die Rückfahrt ist am Sonntag *", "Hin und zurück bitte *", "Hin und zurück * am Sonntag *"], o: ["Hin und zurück, bitte. Die Rückfahrt ist am Sonntag. Und mit Sitzplatzreservierung.", "Hin und her, bitte. Die Rückfahrt ist am Sonntag. Und mit Sitzplatzreservierung.", "Hin und zurück, bitte. Die Rückfahrt ist im Sonntag. Und mit Sitzplatzreservierung."], why: ["", "التعبير الثابت: ‹hin und zurück›.", "مع أيام الأسبوع: ‹am Sonntag›."], ar: "ذهاب وإياب من فضلك، العودة يوم الأحد. ومع حجز مقعد." },
          { s: "A", de: "Gern. Das macht zusammen 139 Euro. Gute Reise!", ar: "بكل سرور. المجموع 139 يورو. رحلة سعيدة!" }
        ]
      },
      listen: [
        { t: "listen", say: "Der Regionalexpress nach Düsseldorf fährt heute von Gleis drei statt von Gleis fünf ab.", q: "من أي رصيف يغادر القطار اليوم؟", o: ["الرصيف 3", "الرصيف 5", "الرصيف 8"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Das Frühstück gibt es von sieben bis zehn Uhr im Erdgeschoss.", q: "أين يُقدَّم الفطور؟", o: ["في الطابق الأرضي", "في الغرفة", "في الطابق الأول"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Wissen Sie, ob ich mit dieser Fahrkarte auch die U-Bahn benutzen darf?", q: "عمّ يسأل؟", o: ["هل التذكرة صالحة للمترو", "كم ثمن التذكرة", "أين محطة المترو"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Wann fährt der Zug ab?", tag: "hoeren" },
        { t: "dict", say: "Ich weiß nicht, ob er kommt.", tag: "hoeren" }
      ]
    },

    /* ───────────── 13C ───────────── */
    {
      id: "13C", de: "Eine Reise mit Hindernissen", ar: "رحلة بعقبات",
      summary: "قصص السفر والمشاكل في الطريق؛ Präteritum للأفعال الشائعة في النصوص المكتوبة (kam, ging, fuhr, sah …) وأدوات ترتيب الأحداث.",
      grammar: [
        {
          h: "Präteritum في القصص والنصوص المكتوبة",
          p: "في الكلام نستعمل Perfekt. لكن في **الكتب والجرائد والقصص** نجد Präteritum. يجب أن تفهم الأفعال الشائعة:",
          table: {
            head: ["المصدر", "Präteritum (ich/er)", "Perfekt"],
            rows: [
              ["‹kommen›", "‹kam›", "‹ist gekommen›"],
              ["‹gehen›", "‹ging›", "‹ist gegangen›"],
              ["‹fahren›", "‹fuhr›", "‹ist gefahren›"],
              ["‹sehen›", "‹sah›", "‹hat gesehen›"],
              ["‹geben› (es gibt)", "‹gab› (es gab)", "‹hat gegeben›"],
              ["‹finden›", "‹fand›", "‹hat gefunden›"],
              ["‹nehmen›", "‹nahm›", "‹hat genommen›"],
              ["‹bleiben›", "‹blieb›", "‹ist geblieben›"],
              ["‹wissen›", "‹wusste›", "‹hat gewusst›"],
              ["‹denken›", "‹dachte›", "‹hat gedacht›"],
              ["‹machen› (منتظم)", "‹machte›", "‹hat gemacht›"]
            ]
          },
          tip: "الأفعال المنتظمة: الجذع + ‑te (‹machte, wohnte, spielte›). الشاذة تغيّر حرف العلة ولا تأخذ ‑te (‹fahren → fuhr›). مع ‹wir/sie›: + ‑en (‹wir fuhren, sie kamen›)."
        },
        {
          h: "ترتيب الأحداث في القصة",
          table: {
            head: ["الكلمة", "المعنى", "مثال"],
            rows: [
              ["‹zuerst›", "أولًا", "‹Zuerst fuhren wir zum Flughafen.›"],
              ["‹dann›", "ثم", "‹Dann hatte der Flug Verspätung.›"],
              ["‹danach›", "بعد ذلك", "‹Danach nahmen wir ein Taxi.›"],
              ["‹plötzlich›", "فجأة", "‹Plötzlich war mein Koffer weg!›"],
              ["‹später›", "لاحقًا", "‹Später fanden wir ein Hotel.›"],
              ["‹zum Schluss / am Ende›", "في النهاية", "‹Am Ende war alles gut.›"]
            ]
          },
          tip: "بعد هذه الكلمات في أول الجملة يأتي الفعل مباشرة (المكان الثاني): ‹Dann **kam** der Bus.› وليس ‹Dann der Bus kam›."
        }
      ],
      vocab: [
        ["n", "das", "Hindernis", "-se", "العائق", "Die Reise hatte viele Hindernisse.", "كان للرحلة عوائق كثيرة."],
        ["n", "das", "Problem", "-e", "المشكلة", "Wir hatten ein Problem mit dem Auto.", "كانت لدينا مشكلة مع السيارة."],
        ["n", "der", "Stau", "-s", "الازدحام المروري", "Wir standen zwei Stunden im Stau.", "وقفنا ساعتين في الازدحام."],
        ["n", "der", "Streik", "-s", "الإضراب", "Wegen eines Streiks fuhren keine Züge.", "بسبب إضراب لم تكن هناك قطارات."],
        ["n", "die", "Panne", "-n", "العطل (في السيارة)", "Unser Auto hatte eine Panne.", "سيارتنا تعطلت."],
        ["n", "das", "Gepäck", "Sg.", "الأمتعة", "Mein Gepäck ist nicht angekommen.", "أمتعتي لم تصل."],
        ["n", "das", "Fundbüro", "-s", "مكتب المفقودات", "Fragen Sie im Fundbüro!", "اسأل في مكتب المفقودات!"],
        ["n", "die", "Polizei", "Sg.", "الشرطة", "Wir sind zur Polizei gegangen.", "ذهبنا إلى الشرطة."],
        ["n", "das", "Taxi", "-s", "سيارة الأجرة", "Wir nahmen ein Taxi zum Hotel.", "أخذنا سيارة أجرة إلى الفندق."],
        ["n", "das", "Abenteuer", "-", "المغامرة", "Die Reise war ein echtes Abenteuer.", "الرحلة كانت مغامرة حقيقية."],
        ["n", "das", "Erlebnis", "-se", "التجربة (المعاشة)", "Das war ein tolles Erlebnis.", "كانت تجربة رائعة."],
        ["n", "die", "Erinnerung", "-en", "الذكرى", "Das ist eine lustige Erinnerung.", "هذه ذكرى مضحكة."],
        ["v", "", "kam", "kommen → er kam", "جاء / وصل", "Der Bus kam nicht.", "الحافلة لم تأتِ."],
        ["v", "", "ging", "gehen → er ging", "ذهب / مشى", "Wir gingen zur Polizei.", "ذهبنا إلى الشرطة."],
        ["v", "", "fuhr", "fahren → er fuhr", "ذهب (بوسيلة)", "Der Zug fuhr ohne uns ab.", "القطار غادر بدوننا."],
        ["v", "", "sah", "sehen → er sah", "رأى", "Wir sahen das Meer.", "رأينا البحر."],
        ["v", "", "gab", "es gibt → es gab", "كان هناك", "Es gab kein Zimmer mehr.", "لم تعد هناك غرفة."],
        ["v", "", "fand", "finden → er fand", "وجد", "Sie fand ihren Pass im Koffer.", "وجدت جوازها في الحقيبة."],
        ["v", "", "nahm", "nehmen → er nahm", "أخذ", "Er nahm den nächsten Zug.", "أخذ القطار التالي."],
        ["v", "", "blieb", "bleiben → er blieb", "بقي", "Wir blieben eine Nacht in Lyon.", "بقينا ليلة في ليون."],
        ["v", "", "verlieren", "hat verloren", "يفقد / يضيّع", "Ich habe meinen Schlüssel verloren.", "أضعت مفتاحي."],
        ["v", "", "stehlen", "stiehlt, hat gestohlen", "يسرق", "Jemand hat meine Tasche gestohlen.", "أحدهم سرق حقيبتي."],
        ["v", "", "passieren", "ist passiert", "يحدث", "Was ist passiert?", "ماذا حدث؟"],
        ["d", "", "plötzlich", "", "فجأة", "Plötzlich fing es an zu regnen.", "فجأة بدأت تمطر."],
        ["d", "", "zuerst", "", "أولًا", "Zuerst haben wir gefrühstückt.", "أولًا تناولنا الفطور."],
        ["d", "", "danach", "", "بعد ذلك", "Danach sind wir ans Meer gefahren.", "بعد ذلك ذهبنا إلى البحر."],
        ["d", "", "zum Schluss", "", "في النهاية", "Zum Schluss waren alle müde, aber glücklich.", "في النهاية كان الجميع متعبين لكن سعداء."],
        ["a", "", "verloren", "", "مفقود / ضائع", "Mein Koffer ist verloren.", "حقيبتي ضائعة."],
        ["x", "", "zum Glück", "", "لحسن الحظ", "Zum Glück war ein Hotel in der Nähe.", "لحسن الحظ كان هناك فندق قريب."]
      ],
      phrases: [
        ["Zuerst hatte der Flug zwei Stunden Verspätung.", "أولًا تأخرت الرحلة ساعتين."],
        ["Dann kam mein Koffer nicht an.", "ثم لم تصل حقيبتي."],
        ["Plötzlich war mein Handy weg!", "فجأة اختفى هاتفي!"],
        ["Zum Glück fanden wir ein kleines Hotel.", "لحسن الحظ وجدنا فندقًا صغيرًا."],
        ["Am Ende war es ein tolles Abenteuer.", "في النهاية كانت مغامرة رائعة."],
        ["Was ist passiert? – Wir haben den Zug verpasst.", "ماذا حدث؟ – فاتنا القطار."],
        ["Wir standen drei Stunden im Stau.", "وقفنا ثلاث ساعات في الازدحام."]
      ],
      ex: [
        { t: "mc", q: "ما المصدر؟ ‹Wir fuhren nach Tanger.›", o: ["fahren", "führen", "fliegen"], a: 0, why: "‹fuhr› = Präteritum من ‹fahren›.", tag: "praeteritum" },
        { t: "mc", q: "ما المصدر؟ ‹Er kam spät nach Hause.›", o: ["kommen", "kaufen", "können"], a: 0, why: "‹kam› = Präteritum من ‹kommen›.", tag: "praeteritum" },
        { t: "mc", q: "ما المصدر؟ ‹Es gab kein Zimmer mehr.›", o: ["geben", "gehen", "gefallen"], a: 0, why: "‹es gab› = Präteritum من ‹es gibt›.", tag: "praeteritum" },
        { t: "mc", q: "ما المصدر؟ ‹Sie fand den Schlüssel.›", o: ["finden", "fahren", "fallen"], a: 0, why: "‹fand› من ‹finden›.", tag: "praeteritum" },
        { t: "match", q: "صِل Präteritum بالمصدر.", pairs: [["ging", "gehen"], ["sah", "sehen"], ["nahm", "nehmen"], ["blieb", "bleiben"], ["wusste", "wissen"]], tag: "praeteritum" },
        { t: "gap", q: "أكمل بـ Präteritum.", s: "Gestern ___ wir den ganzen Tag am Strand. (bleiben)", a: ["blieben"], why: "‹bleiben → blieb›، ومع ‹wir› + ‑en: ‹blieben›.", tag: "praeteritum" },
        { t: "gap", q: "أكمل بـ Präteritum (فعل منتظم).", s: "Im Urlaub ___ ich viele Fotos. (machen)", a: ["machte"], why: "منتظم: ‹mach + te›.", tag: "praeteritum" },
        { t: "mc", q: "اختر الترتيب الصحيح.", o: ["Dann kam der Bus endlich.", "Dann der Bus kam endlich.", "Dann der Bus endlich kam."], a: 0, why: "بعد ‹Dann› يأتي الفعل مباشرة.", tag: "wortstellung" },
        { t: "mc", q: "اختر الكلمة المناسبة: «___ war mein Pass weg! Ich hatte Angst.»", o: ["Plötzlich", "Zum Schluss", "Zuerst"], a: 0, why: "حدث مفاجئ → ‹Plötzlich›.", tag: "temporal" },
        { t: "order", q: "رتّب الجملة.", a: "Zum Glück fanden wir ein kleines Hotel.", why: "‹Zum Glück› أولًا ثم الفعل ‹fanden›.", tag: "praeteritum" },
        { t: "order", q: "رتّب الجملة (Perfekt للكلام).", a: "Ich habe meinen Koffer verloren.", why: "‹habe› ثانيًا، و‹verloren› في الآخر.", tag: "perfekt" },
        { t: "tr", q: "ترجم إلى الألمانية (Perfekt).", ar: "فاتنا القطار.", a: ["Wir haben den Zug verpasst."], tag: "perfekt" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "ماذا حدث؟", a: ["Was ist passiert?"], tag: "perfekt" },
        { t: "read", title: "Mein verrückter Urlaub", text: "Letzten Sommer wollte ich mit meinem Freund Omar nach Barcelona fliegen. Zuerst gab es einen Streik am Flughafen und unser Flug fiel aus. Wir nahmen also den Bus – 24 Stunden! In Barcelona kam dann mein Koffer nicht an. Ich hatte nur meinen Rucksack. Danach suchten wir unser Hotel, aber die Adresse war falsch. Plötzlich sprach uns eine alte Frau an und zeigte uns den Weg. Zum Schluss fanden wir das Hotel, und am nächsten Tag kam auch mein Koffer. Es war ein verrückter, aber wunderschöner Urlaub.", tr: "الصيف الماضي أردت أن أسافر جوًا مع صديقي عمر إلى برشلونة. أولًا كان هناك إضراب في المطار وأُلغيت رحلتنا. فأخذنا الحافلة — 24 ساعة! وفي برشلونة لم تصل حقيبتي. لم يكن معي إلا حقيبة الظهر. بعد ذلك بحثنا عن الفندق، لكن العنوان كان خطأ. فجأة كلمتنا امرأة عجوز وأرتنا الطريق. في النهاية وجدنا الفندق، وفي اليوم التالي وصلت حقيبتي أيضًا. كانت عطلة مجنونة لكنها رائعة جدًا.", items: [
          { t: "tf", s: "Sie sind mit dem Flugzeug nach Barcelona geflogen.", a: false, why: "الرحلة أُلغيت: ‹Wir nahmen also den Bus›." },
          { t: "tf", s: "Eine Frau hat ihnen geholfen.", a: true, why: "‹eine alte Frau … zeigte uns den Weg›." },
          { t: "tf", s: "Der Koffer ist nie angekommen.", a: false, why: "‹am nächsten Tag kam auch mein Koffer›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Wie war die Reise?", ar: "كيف كانت الرحلة؟",
        scene: "رجعت من رحلة إلى باريس كانت مليئة بالمشاكل. صديقتك هانا تسألك.",
        who: { A: "Hanna" },
        lines: [
          { s: "A", de: "Na, wie war deine Reise nach Paris?", ar: "إذن، كيف كانت رحلتك إلى باريس؟" },
          { s: "U", task: "قل: كانت رحلة بعقبات! أولًا كان القطار متأخرًا ساعتين.", m: "Das war eine Reise mit Hindernissen! Zuerst hatte der Zug zwei Stunden Verspätung.", ok: ["Das war eine Reise mit Hindernissen zuerst hatte der Zug zwei Stunden Verspätung", "* zuerst hatte der Zug zwei Stunden Verspätung", "Zuerst hatte der Zug zwei Stunden Verspätung", "* zuerst hat der Zug zwei Stunden Verspätung gehabt"], o: ["Das war eine Reise mit Hindernissen! Zuerst hatte der Zug zwei Stunden Verspätung.", "Das war eine Reise mit Hindernissen! Zuerst der Zug hatte zwei Stunden Verspätung.", "Das war eine Reise mit Hindernissen! Zuerst hatte der Zug zwei Stunden Verspätungen."], why: ["", "بعد ‹Zuerst› الفعل مباشرة: ‹hatte der Zug›.", "‹zwei Stunden Verspätung› — ‹Verspätung› تبقى مفردًا."], ar: "كانت رحلة بعقبات! أولًا كان القطار متأخرًا ساعتين." },
          { s: "A", de: "Oh nein! Und dann?", ar: "يا إلهي! ثم ماذا؟" },
          { s: "U", task: "قل: ثم فاتني قطاري في باريس، وكان عليّ أن أنتظر ساعة.", m: "Dann habe ich meinen Anschlusszug verpasst und musste eine Stunde warten.", ok: ["Dann habe ich meinen Anschlusszug verpasst und musste eine Stunde warten", "Dann habe ich meinen Zug verpasst und musste eine Stunde warten", "Dann habe ich den Anschlusszug verpasst und musste eine Stunde warten", "Dann habe ich * verpasst und musste eine Stunde warten"], o: ["Dann habe ich meinen Anschlusszug verpasst und musste eine Stunde warten.", "Dann ich habe meinen Anschlusszug verpasst und musste eine Stunde warten.", "Dann habe ich meinen Anschlusszug verpasst und muss eine Stunde gewartet."], why: ["", "بعد ‹Dann› الفعل ‹habe› ثم الفاعل.", "الماضي: ‹musste … warten› (Präteritum للفعل الناقص)."], ar: "ثم فاتني القطار التالي وكان عليّ أن أنتظر ساعة." },
          { s: "A", de: "Wie ärgerlich! Aber war Paris wenigstens schön?", ar: "كم هذا مزعج! لكن هل كانت باريس جميلة على الأقل؟" },
          { s: "U", task: "قل: نعم! لحسن الحظ كان الطقس رائعًا، وفي النهاية كانت مغامرة جميلة.", m: "Ja! Zum Glück war das Wetter super, und am Ende war es ein schönes Abenteuer.", ok: ["Ja zum Glück war das Wetter super und am Ende war es ein schönes Abenteuer", "Ja zum Glück war das Wetter toll und am Ende war es ein schönes Abenteuer", "Zum Glück war das Wetter super *", "* am Ende war es ein schönes Abenteuer"], o: ["Ja! Zum Glück war das Wetter super, und am Ende war es ein schönes Abenteuer.", "Ja! Zum Glück das Wetter war super, und am Ende es war ein schönes Abenteuer.", "Ja! Zum Glück war das Wetter super, und am Ende war es ein schöner Abenteuer."], why: ["", "بعد ‹Zum Glück› و‹am Ende› يأتي الفعل ‹war› مباشرة.", "‹das Abenteuer› محايد: ‹ein schönes›."], ar: "نعم! لحسن الحظ كان الطقس رائعًا، وفي النهاية كانت مغامرة جميلة." }
        ]
      },
      listen: [
        { t: "listen", say: "Auf der Autobahn standen wir drei Stunden im Stau. Wir kamen erst um Mitternacht an.", q: "متى وصلوا؟", o: ["عند منتصف الليل", "بعد ثلاث ساعات صباحًا", "في المساء الباكر"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Am Flughafen war mein Koffer weg. Zum Glück hatte ich meinen Pass in der Jackentasche.", q: "أين كان الجواز؟", o: ["في جيب السترة", "في الحقيبة الضائعة", "في الفندق"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Zuerst gingen wir ins Museum, danach aßen wir in einem kleinen Restaurant am Hafen.", q: "ماذا فعلوا بعد المتحف؟", o: ["أكلوا في مطعم عند الميناء", "سبحوا في البحر", "رجعوا إلى الفندق"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Plötzlich war mein Koffer weg.", tag: "hoeren" },
        { t: "dict", say: "Zum Glück war das Wetter schön.", tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "Lange Vokale: Dehnungs-h und Doppelvokale", ar: "حروف العلة الطويلة: h الصامتة والحروف المضاعفة",
    body: [
      { p: "في الألمانية تدلّ الكتابة على طول حرف العلة. حرف ‹h› بعد حرف علة **لا يُنطق**، بل يجعل الحرف طويلًا. وكذلك الحرف المضاعف ‹aa, ee, oo›:" },
      { table: { head: ["الكتابة", "النطق", "أمثلة"], rows: [
        ["‹ah, eh, oh, uh, äh, öh, üh›", "حرف علة طويل، h صامتة", "‹Bahn, fahren, Zahl, sehr, Uhr, Bahnhof, früh›"],
        ["‹aa, ee, oo›", "حرف علة طويل", "‹Haar, Meer, See, Tee, Boot, Zoo›"],
        ["‹ie›", "«إي» طويلة", "‹Ziel, fliegen, Miete›"],
        ["حرف علة + حرفان ساكنان", "غالبًا قصير", "‹Stadt, kommen, Zimmer, Bett›"]
      ] } },
      { tip: "لا تنطق ‹h› في ‹Bahn› أو ‹fahren› أو ‹Uhr›: ‹Bahn› = «بااان». لكن في بداية الكلمة أو المقطع تُنطق ‹h›: ‹Hotel, Hafen, wohin› (wo‑hin)." }
    ],
    drills: [
      { t: "listen", say: "die Bahn", q: "هل تسمع ‹h›؟", o: ["لا، فقط «آ» طويلة", "نعم، «باهن»"], a: 0, why: "‹h› بعد حرف العلة صامتة وتطيل الحرف." },
      { t: "listen", say: "das Meer", q: "هل حرف العلة طويل أم قصير؟", o: ["طويل", "قصير"], a: 0, why: "‹ee› = «إيه» طويلة." },
      { t: "listen", say: "die Stadt", q: "هل ‹a› طويلة أم قصيرة؟", o: ["قصيرة", "طويلة"], a: 0, why: "بعد ‹a› حرفان ساكنان (dt) → قصيرة." },
      { t: "listen", say: "der Hafen", q: "هل تسمع ‹h› في البداية؟", o: ["نعم", "لا"], a: 0, why: "في بداية الكلمة ‹h› تُنطق." },
      { t: "listen", say: "fahren", q: "كيف تُنطق ‹fah-›؟", o: ["«فاا» طويلة بدون h", "«فاه» مع h"], a: 0, why: "‹h› صامتة: ‹fahren› ≈ «فاارن»." }
    ],
    say: ["die Bahn – der Bahnhof", "fahren – die Fahrt", "das Meer – der See", "das Boot", "die Uhr", "früh", "Wir fahren mit der Bahn ans Meer.", "Der Zug fährt um zehn Uhr ab.", "Am See steht ein kleines Boot."]
  },

  write: [
    {
      ar: "اكتب بريدًا لفندق (50–60 كلمة): تريد حجز غرفة مزدوجة من … إلى …، واسأل بأسئلة غير مباشرة: هل الفطور مشمول، ومتى يمكنكم الوصول، وهل يوجد موقف للسيارة. (Ich möchte wissen, ob … / Können Sie mir sagen, wann …?)",
      de: "Zimmeranfrage an ein Hotel.",
      model: "Sehr geehrte Damen und Herren,\nich möchte vom 3. bis 6. August ein Doppelzimmer reservieren. Können Sie mir bitte sagen, ob das Frühstück im Preis inklusive ist? Ich möchte auch wissen, ab wann wir das Zimmer am Anreisetag haben können. Gibt es einen Parkplatz am Hotel?\nVielen Dank im Voraus!\nMit freundlichen Grüßen\nKarim Amrani",
      check: ["تحية رسمية", "التاريخ ونوع الغرفة", "سؤال غير مباشر بـ ‹ob› والفعل في الآخر", "سؤال غير مباشر بـ W‑كلمة", "ختام رسمي"]
    },
    {
      ar: "اكتب قصة قصيرة (60–80 كلمة) عن رحلة فيها مشاكل. استعمل zuerst, dann, danach, plötzlich, zum Glück, am Ende، وبعض أفعال Präteritum (war, hatte, kam, fuhr, gab, fand) أو Perfekt.",
      de: "Eine Reise mit Hindernissen.",
      model: "Letzten Winter bin ich mit meiner Schwester nach Ifrane gefahren. Zuerst hatte unser Bus eine Panne und wir mussten zwei Stunden warten. Dann fing es an zu schneien. Plötzlich war die Straße gesperrt! Zum Glück gab es in der Nähe ein kleines Café. Dort tranken wir Tee und warteten. Am Ende kamen wir um Mitternacht an – müde, aber glücklich. Ifrane im Schnee war wunderschön!",
      check: ["ترتيب الأحداث: zuerst, dann, plötzlich, zum Glück, am Ende", "الفعل في المكان الثاني بعد هذه الكلمات", "أفعال في الماضي (Präteritum/Perfekt)", "خاتمة / شعور"]
    }
  ],
  tutor: [
    { title: "An der Hotelrezeption", ar: "في استقبال الفندق", role: "Herr Becker, Rezeptionist in einem kleinen Hotel in München", goal: "einchecken, nach Frühstück, WLAN, Parkplatz fragen (indirekte Fragen: Können Sie mir sagen, …? Wissen Sie, ob …?), ein Problem mit dem Zimmer melden", start: "Grüß Gott und herzlich willkommen im Hotel Isartor! Haben Sie eine Reservierung?" },
    { title: "Urlaubserzählung", ar: "حكاية العطلة", role: "Emma, eine Freundin, die neugierig nach deinem letzten Urlaub fragt", goal: "von einer Reise erzählen (Perfekt, war/hatte, einige Präteritumformen), Ereignisse ordnen (zuerst, dann, danach, plötzlich, zum Schluss), lokale Präpositionen (nach, in die, ans Meer, bei)", start: "Hey, du bist ja wieder da! Wo warst du denn im Urlaub? Erzähl mal!" }
  ]
});

/* Lektion 14 (A2) — Medien im Alltag */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 14,
  level: "A2",
  de: "Medien im Alltag",
  ar: "الإعلام في الحياة اليومية",
  book: "منهج A2 · محتوى أصلي (الهاتف، الإنترنت، وسائل التواصل)",
  goals: [
    "وصف روتينك اليومي والإعلامي بالأفعال الانعكاسية: sich informieren, sich ärgern …",
    "استعمال ضمائر الانعكاس في Akkusativ و Dativ (mich/mir)",
    "أفعال مع حروف جر: warten auf, sich interessieren für, sprechen über …",
    "السؤال والإحالة بـ worauf? / darauf, wofür? / dafür",
    "مناقشة إيجابيات وسلبيات وسائل التواصل بـ deshalb, trotzdem, obwohl"
  ],
  units: [
    /* ───────────── 14A ───────────── */
    {
      id: "14A", de: "Ohne Handy geht nichts", ar: "بدون هاتف لا شيء يمشي",
      summary: "الهاتف الذكي والتطبيقات والروتين اليومي؛ الأفعال الانعكاسية (sich) في Akkusativ و Dativ.",
      grammar: [
        {
          h: "الأفعال الانعكاسية: sich",
          p: "بعض الأفعال تأتي مع ضمير يعود على الفاعل نفسه (‹sich›). في الترجمة العربية غالبًا وزن «تفعّل/افتعل»: ‹sich freuen› = يفرح، ‹sich ärgern› = يغضب/ينزعج.",
          table: {
            head: ["الضمير", "ضمير الانعكاس (Akk.)", "مثال"],
            rows: [
              ["‹ich›", "‹mich›", "‹Ich informiere mich im Internet.›"],
              ["‹du›", "‹dich›", "‹Ärgerst du dich oft?›"],
              ["‹er/sie/es›", "‹sich›", "‹Sie entspannt sich mit Musik.›"],
              ["‹wir›", "‹uns›", "‹Wir treffen uns online.›"],
              ["‹ihr›", "‹euch›", "‹Beeilt euch!›"],
              ["‹sie/Sie›", "‹sich›", "‹Melden Sie sich bitte an.›"]
            ]
          },
          tip: "‹sich› فقط مع ‹er/sie/es/sie/Sie›. مع ‹ich› = ‹mich›، مع ‹du› = ‹dich›… وفي السؤال: ‹Freust du dich?›"
        },
        {
          h: "ضمير الانعكاس في Dativ (mir/dir)",
          p: "إذا كان في الجملة مفعول آخر (شيء)، يصبح ضمير الانعكاس في **Dativ** (يتغير فقط مع ich و du):",
          table: {
            head: ["Akkusativ (بدون شيء آخر)", "Dativ (مع شيء في Akkusativ)"],
            rows: [
              ["‹Ich wasche **mich**.›", "‹Ich wasche **mir** die Hände.›"],
              ["‹Du ziehst **dich** an.›", "‹Du ziehst **dir** eine Jacke an.›"],
              ["‹Er kauft sich nichts.›", "‹Er kauft **sich** ein neues Handy.›"]
            ]
          },
          ex: [["Ich lade mir eine neue App herunter.", "أنزّل لنفسي تطبيقًا جديدًا."], ["Kannst du dir das vorstellen?", "هل يمكنك أن تتخيل ذلك؟"]]
        },
        {
          h: "الهاتف والتطبيقات",
          table: {
            head: ["الألمانية", "العربية"],
            rows: [
              ["‹eine App herunterladen / installieren›", "تنزيل / تثبيت تطبيق"],
              ["‹das Handy aufladen›", "شحن الهاتف"],
              ["‹eine Nachricht schicken / bekommen›", "إرسال / استلام رسالة"],
              ["‹sich anmelden / sich abmelden›", "تسجيل الدخول / الخروج"],
              ["‹das Passwort vergessen›", "نسيان كلمة السر"],
              ["‹online / offline sein›", "متصل / غير متصل"]
            ]
          }
        }
      ],
      vocab: [
        ["n", "das", "Smartphone", "-s", "الهاتف الذكي", "Ohne Smartphone kann ich nicht leben.", "لا أستطيع العيش بدون هاتف ذكي."],
        ["n", "die", "App", "-s", "التطبيق", "Diese App ist kostenlos.", "هذا التطبيق مجاني."],
        ["n", "der", "Akku", "-s", "البطارية", "Mein Akku ist leer.", "بطاريتي فارغة."],
        ["n", "das", "Ladekabel", "-", "كابل الشحن", "Hast du ein Ladekabel für mich?", "هل عندك كابل شحن لي؟"],
        ["n", "das", "Passwort", "¨-er", "كلمة السر", "Ich habe mein Passwort vergessen.", "نسيت كلمة السر."],
        ["n", "der", "Bildschirm", "-e", "الشاشة", "Der Bildschirm ist kaputt.", "الشاشة مكسورة."],
        ["n", "die", "Nachricht", "-en", "الرسالة / الخبر", "Ich habe dir eine Nachricht geschickt.", "أرسلت لك رسالة."],
        ["n", "die", "Sprachnachricht", "-en", "الرسالة الصوتية", "Sie schickt nur Sprachnachrichten.", "هي ترسل رسائل صوتية فقط."],
        ["n", "das", "Netz", "-e", "الشبكة", "Hier habe ich kein Netz.", "هنا ليست عندي شبكة."],
        ["n", "die", "Benachrichtigung", "-en", "الإشعار", "Ich schalte die Benachrichtigungen aus.", "أطفئ الإشعارات."],
        ["n", "der", "Wecker", "-", "المنبّه", "Mein Handy ist auch mein Wecker.", "هاتفي هو منبّهي أيضًا."],
        ["n", "der", "Alltag", "Sg.", "الحياة اليومية", "Das Handy hilft mir im Alltag.", "الهاتف يساعدني في حياتي اليومية."],
        ["v", "", "sich informieren (über + Akk.)", "hat sich informiert", "يستعلم / يطّلع", "Ich informiere mich online über das Wetter.", "أطّلع على الطقس عبر الإنترنت."],
        ["v", "", "sich ärgern (über + Akk.)", "hat sich geärgert", "ينزعج / يغضب", "Ich ärgere mich über den leeren Akku.", "أنزعج من البطارية الفارغة."],
        ["v", "", "sich freuen (über + Akk.)", "hat sich gefreut", "يفرح (بـ)", "Ich freue mich über deine Nachricht.", "أفرح برسالتك."],
        ["v", "", "sich entspannen", "hat sich entspannt", "يسترخي", "Abends entspanne ich mich mit Musik.", "في المساء أسترخي بالموسيقى."],
        ["v", "", "sich beeilen", "hat sich beeilt", "يستعجل", "Beeil dich, der Bus kommt!", "أسرع، الحافلة قادمة!"],
        ["v", "", "sich anmelden", "meldet sich an, hat sich angemeldet", "يسجّل (الدخول / في دورة)", "Melde dich mit deinem Passwort an.", "سجّل الدخول بكلمة السر."],
        ["v", "", "sich anziehen", "zieht sich an, hat sich angezogen", "يرتدي ملابسه", "Ich ziehe mich schnell an.", "أرتدي ملابسي بسرعة."],
        ["v", "", "sich waschen", "wäscht sich, hat sich gewaschen", "يغتسل", "Ich wasche mir die Hände.", "أغسل يديّ."],
        ["v", "", "sich treffen", "trifft sich, hat sich getroffen", "يلتقي (بعضهم)", "Wir treffen uns um acht.", "نلتقي في الثامنة."],
        ["v", "", "herunterladen", "lädt herunter, hat heruntergeladen", "ينزّل (من الإنترنت)", "Ich lade mir die App herunter.", "أنزّل التطبيق."],
        ["v", "", "aufladen", "lädt auf, hat aufgeladen", "يشحن", "Ich muss mein Handy aufladen.", "يجب أن أشحن هاتفي."],
        ["v", "", "ausschalten", "schaltet aus, hat ausgeschaltet", "يطفئ", "Schalte das Handy beim Essen aus!", "أطفئ الهاتف أثناء الأكل!"],
        ["a", "", "kostenlos", "", "مجاني", "Die App ist kostenlos.", "التطبيق مجاني."],
        ["a", "", "leer", "", "فارغ", "Der Akku ist schon wieder leer.", "البطارية فارغة من جديد."],
        ["a", "", "süchtig", "", "مدمن", "Bist du handysüchtig?", "هل أنت مدمن على الهاتف؟"],
        ["d", "", "online / offline", "", "متصل / غير متصل", "Am Wochenende bin ich offline.", "في عطلة الأسبوع أكون غير متصل."],
        ["x", "", "Beeil dich!", "", "أسرع!", "Beeil dich, wir sind spät!", "أسرع، لقد تأخرنا!"]
      ],
      phrases: [
        ["Ich informiere mich jeden Morgen im Internet.", "أطّلع على الأخبار كل صباح على الإنترنت."],
        ["Ich ärgere mich, wenn der Akku leer ist.", "أنزعج عندما تكون البطارية فارغة."],
        ["Ich freue mich über deine Nachricht!", "أفرح برسالتك!"],
        ["Wann treffen wir uns?", "متى نلتقي؟"],
        ["Ich lade mir eine neue App herunter.", "أنزّل تطبيقًا جديدًا."],
        ["Beim Essen schalte ich das Handy aus.", "أثناء الأكل أطفئ الهاتف."],
        ["Abends entspanne ich mich ohne Bildschirm.", "في المساء أسترخي بدون شاشة."]
      ],
      ex: [
        { t: "gap", q: "أكمل بضمير الانعكاس.", s: "Ich freue ___ über deine Nachricht.", a: ["mich"], why: "‹ich› → ‹mich›.", tag: "reflexiv" },
        { t: "gap", q: "أكمل بضمير الانعكاس.", s: "Ärgerst du ___ oft über dein Handy?", a: ["dich"], why: "‹du› → ‹dich›.", tag: "reflexiv" },
        { t: "gap", q: "أكمل بضمير الانعكاس.", s: "Mein Vater informiert ___ im Radio.", a: ["sich"], why: "‹er› → ‹sich›.", tag: "reflexiv" },
        { t: "gap", q: "أكمل بضمير الانعكاس.", s: "Wir treffen ___ morgen im Café.", a: ["uns"], why: "‹wir› → ‹uns›.", tag: "reflexiv" },
        { t: "gap", q: "أكمل بضمير الانعكاس.", s: "Beeilt ___, der Film fängt an!", a: ["euch"], why: "‹ihr› → ‹euch›.", tag: "reflexiv" },
        { t: "mc", q: "اختر الصحيح (مع مفعول آخر).", s: "Ich wasche ___ die Hände.", o: ["mir", "mich", "sich"], a: 0, why: "مع شيء آخر (‹die Hände›) → Dativ: ‹mir›.", tag: "reflexiv" },
        { t: "mc", q: "اختر الصحيح.", s: "Ich wasche ___ jeden Morgen.", o: ["mich", "mir", "sich"], a: 0, why: "بدون مفعول آخر → Akkusativ: ‹mich›.", tag: "reflexiv" },
        { t: "mc", q: "اختر الصحيح.", s: "Du ziehst ___ eine warme Jacke an.", o: ["dir", "dich", "du"], a: 0, why: "مع ‹eine Jacke› → Dativ: ‹dir›.", tag: "reflexiv" },
        { t: "mc", q: "اختر الصحيح.", s: "Sie (هم) kaufen ___ ein neues Handy.", o: ["sich", "ihnen", "uns"], a: 0, why: "‹sie› (جمع) → ‹sich›.", tag: "reflexiv" },
        { t: "mc", q: "ماذا يعني ‹Mein Akku ist leer›؟", o: ["بطاريتي فارغة", "هاتفي جديد", "شاشتي مكسورة"], a: 0, why: "‹der Akku› = البطارية، ‹leer› = فارغ.", tag: "medien" },
        { t: "match", q: "صِل الفعل بمعناه.", pairs: [["herunterladen", "ينزّل"], ["aufladen", "يشحن"], ["sich beeilen", "يستعجل"], ["sich entspannen", "يسترخي"], ["ausschalten", "يطفئ"]], tag: "medien" },
        { t: "order", q: "رتّب الجملة.", a: "Ich informiere mich jeden Tag im Internet.", why: "‹mich› بعد الفعل مباشرة.", tag: "reflexiv" },
        { t: "order", q: "رتّب السؤال.", a: "Wann treffen wir uns morgen?", why: "سؤال W: ‹Wann› + فعل + فاعل + ‹uns›.", tag: "reflexiv" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أفرح برسالتك.", a: ["Ich freue mich über deine Nachricht.", "Ich freue mich über Ihre Nachricht."], tag: "reflexiv" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أسرع! (لشخص واحد)", a: ["Beeil dich!", "Beeil dich.", "Beeile dich!"], tag: "reflexiv" },
        { t: "read", title: "Ein Tag mit dem Handy", text: "Um 6:30 Uhr klingelt mein Wecker – das ist natürlich mein Handy. Zuerst lese ich meine Nachrichten, dann informiere ich mich über das Wetter. Im Bus höre ich Podcasts auf Deutsch, so lerne ich jeden Tag ein bisschen. Bei der Arbeit schalte ich die Benachrichtigungen aus, sonst kann ich mich nicht konzentrieren. Abends telefoniere ich per Video mit meiner Familie in Marokko. Aber eine Stunde vor dem Schlafen lege ich das Handy weg und lese ein Buch. So entspanne ich mich besser.", tr: "في 6:30 يرنّ منبّهي — وهو طبعًا هاتفي. أولًا أقرأ رسائلي، ثم أطّلع على الطقس. في الحافلة أستمع إلى بودكاست بالألمانية، هكذا أتعلم قليلًا كل يوم. في العمل أطفئ الإشعارات، وإلا لا أستطيع التركيز. في المساء أتصل بالفيديو بعائلتي في المغرب. لكن قبل النوم بساعة أضع الهاتف جانبًا وأقرأ كتابًا. هكذا أسترخي بشكل أفضل.", items: [
          { t: "tf", s: "Die Person hört im Bus Podcasts auf Deutsch.", a: true, why: "‹Im Bus höre ich Podcasts auf Deutsch›." },
          { t: "tf", s: "Bei der Arbeit sind die Benachrichtigungen an.", a: false, why: "‹schalte ich die Benachrichtigungen aus›." },
          { t: "tf", s: "Vor dem Schlafen benutzt die Person das Handy nicht.", a: true, why: "‹eine Stunde vor dem Schlafen lege ich das Handy weg›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Wo bleibst du?", ar: "أين أنت؟",
        scene: "كان عندك موعد مع صديقتك كاتارينا في المقهى، لكنك متأخر. هي تتصل بك.",
        who: { A: "Katrin" },
        lines: [
          { s: "A", de: "Hallo {FIRST}, wo bleibst du denn? Ich warte schon seit zwanzig Minuten!", ar: "أين أنت؟ أنتظر منذ عشرين دقيقة!" },
          { s: "U", task: "اعتذر: آسف! هاتفي كانت بطاريته فارغة ولم يرنّ المنبه.", m: "Entschuldigung! Mein Akku war leer und der Wecker hat nicht geklingelt.", ok: ["Entschuldigung mein Akku war leer und der Wecker hat nicht geklingelt", "Tut mir leid mein Akku war leer und der Wecker hat nicht geklingelt", "Entschuldigung mein Akku war leer *", "* der Wecker hat nicht geklingelt"], o: ["Entschuldigung! Mein Akku war leer und der Wecker hat nicht geklingelt.", "Entschuldigung! Mein Akku war leer und der Wecker ist nicht geklingelt.", "Entschuldigung! Mein Akku hat leer und der Wecker hat nicht geklingelt."], why: ["", "‹klingeln› في Perfekt مع ‹haben›.", "مع الصفة: ‹war leer› (sein)."], ar: "آسف! بطاريتي كانت فارغة والمنبه لم يرنّ." },
          { s: "A", de: "Oh nein! Und wann bist du hier?", ar: "يا إلهي! ومتى ستكون هنا؟" },
          { s: "U", task: "قل: أرتدي ملابسي بسرعة وأسرع. نلتقي بعد عشرين دقيقة.", m: "Ich ziehe mich schnell an und beeile mich. Wir treffen uns in zwanzig Minuten.", ok: ["Ich ziehe mich schnell an und beeile mich wir treffen uns in zwanzig Minuten", "Ich ziehe mich schnell an und beeile mich *", "* wir treffen uns in zwanzig Minuten", "Ich beeile mich wir treffen uns in zwanzig Minuten"], o: ["Ich ziehe mich schnell an und beeile mich. Wir treffen uns in zwanzig Minuten.", "Ich ziehe mir schnell an und beeile mir. Wir treffen uns in zwanzig Minuten.", "Ich ziehe mich schnell an und beeile mich. Wir treffen sich in zwanzig Minuten."], why: ["", "بدون مفعول آخر → Akkusativ: ‹mich›.", "‹wir› → ‹uns›."], ar: "أرتدي ملابسي بسرعة وأسرع. نلتقي بعد عشرين دقيقة." },
          { s: "A", de: "Okay, dann bestelle ich schon mal einen Tee. Ärgerst du dich nicht über dein Handy?", ar: "حسنًا، إذن سأطلب شايًا. ألا تنزعج من هاتفك؟" },
          { s: "U", task: "قل: نعم، أنزعج جدًا! سأشتري لنفسي منبّهًا حقيقيًا.", m: "Doch, ich ärgere mich total! Ich kaufe mir einen richtigen Wecker.", ok: ["Doch ich ärgere mich total ich kaufe mir einen richtigen Wecker", "Ja ich ärgere mich total ich kaufe mir einen richtigen Wecker", "Doch ich ärgere mich sehr *", "* ich kaufe mir einen richtigen Wecker", "* ich kaufe mir einen Wecker"], o: ["Doch, ich ärgere mich total! Ich kaufe mir einen richtigen Wecker.", "Doch, ich ärgere mir total! Ich kaufe mich einen richtigen Wecker.", "Doch, ich ärgere mich total! Ich kaufe mich einen richtigen Wecker."], why: ["", "‹sich ärgern› → ‹mich›؛ ومع شيء (‹einen Wecker›) → ‹mir›.", "مع مفعول آخر ‹einen Wecker› → Dativ: ‹mir›."], ar: "بلى، أنزعج جدًا! سأشتري لنفسي منبّهًا حقيقيًا." }
        ]
      },
      listen: [
        { t: "listen", say: "Ich ärgere mich, weil ich mein Passwort schon wieder vergessen habe.", q: "لماذا ينزعج؟", o: ["نسي كلمة السر", "البطارية فارغة", "الشاشة مكسورة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Wir treffen uns am Samstag um drei vor dem Kino, okay?", q: "أين يلتقيان؟", o: ["أمام السينما", "في المقهى", "في المحطة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Am Wochenende schalte ich mein Handy aus und entspanne mich im Park.", q: "ماذا يفعل في عطلة الأسبوع؟", o: ["يطفئ هاتفه ويسترخي في الحديقة", "يلعب ألعابًا على الهاتف", "يعمل على الحاسوب"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Ich freue mich über deine Nachricht.", tag: "hoeren" },
        { t: "dict", say: "Wir treffen uns um acht.", tag: "hoeren" }
      ]
    },

    /* ───────────── 14B ───────────── */
    {
      id: "14B", de: "Worüber sprechen wir?", ar: "عمّ نتحدث؟",
      summary: "الأخبار والبرامج والاهتمامات؛ أفعال تأتي مع حروف جر ثابتة (warten auf, sich interessieren für …)، والسؤال بـ wo(r)- والإحالة بـ da(r)-.",
      grammar: [
        {
          h: "أفعال مع حروف جر ثابتة",
          p: "هذه الأفعال تأتي **دائمًا** مع حرف جر معيّن — احفظها معًا كوحدة:",
          table: {
            head: ["الفعل + الحرف", "الحالة", "مثال"],
            rows: [
              ["‹warten auf›", "Akk.", "‹Ich warte auf den Bus.›"],
              ["‹sich freuen auf›", "Akk.", "‹Ich freue mich auf das Wochenende.› (شيء قادم)"],
              ["‹sich freuen über›", "Akk.", "‹Ich freue mich über das Geschenk.› (شيء حصل)"],
              ["‹sich interessieren für›", "Akk.", "‹Ich interessiere mich für Politik.›"],
              ["‹sprechen über›", "Akk.", "‹Wir sprechen über den Film.›"],
              ["‹denken an›", "Akk.", "‹Ich denke oft an meine Familie.›"],
              ["‹sich ärgern über›", "Akk.", "‹Er ärgert sich über die Werbung.›"],
              ["‹träumen von›", "Dat.", "‹Sie träumt von einer Reise.›"],
              ["‹telefonieren mit›", "Dat.", "‹Ich telefoniere mit meiner Mutter.›"],
              ["‹Angst haben vor›", "Dat.", "‹Er hat Angst vor der Prüfung.›"]
            ]
          }
        },
        {
          h: "السؤال: wo(r) + الحرف — والجواب: da(r) + الحرف",
          p: "للأشياء (ليس للأشخاص) نسأل بـ ‹wo› + الحرف، ونحيل بـ ‹da› + الحرف. إذا بدأ الحرف بحرف علة نضيف ‹r›:",
          table: {
            head: ["الحرف", "السؤال (شيء)", "الإحالة (شيء)", "للأشخاص"],
            rows: [
              ["‹auf›", "‹Worauf wartest du?›", "‹Ich warte darauf.›", "‹Auf wen wartest du? – Auf ihn.›"],
              ["‹für›", "‹Wofür interessierst du dich?›", "‹Ich interessiere mich dafür.›", "‹Für wen? – Für sie.›"],
              ["‹über›", "‹Worüber sprecht ihr?›", "‹Wir sprechen darüber.›", "‹Über wen? – Über ihn.›"],
              ["‹an›", "‹Woran denkst du?›", "‹Ich denke daran.›", "‹An wen? – An dich.›"],
              ["‹mit›", "‹Womit schreibst du?›", "‹Damit.›", "‹Mit wem? – Mit ihr.›"],
              ["‹von›", "‹Wovon träumst du?›", "‹Davon.›", "‹Von wem? – Von ihm.›"]
            ]
          },
          tip: "‹Woran denkst du?› = بماذا تفكر؟ (شيء). ‹An wen denkst du?› = بمن تفكر؟ (شخص)."
        }
      ],
      vocab: [
        ["n", "die", "Nachrichten", "Pl.", "الأخبار (نشرة)", "Ich sehe jeden Abend die Nachrichten.", "أشاهد الأخبار كل مساء."],
        ["n", "die", "Sendung", "-en", "البرنامج (تلفزي/إذاعي)", "Die Sendung beginnt um 20 Uhr.", "البرنامج يبدأ في الثامنة."],
        ["n", "die", "Serie", "-n", "المسلسل", "Ich schaue gern Serien.", "أحب مشاهدة المسلسلات."],
        ["n", "der", "Podcast", "-s", "البودكاست", "Hörst du deutsche Podcasts?", "هل تستمع إلى بودكاست ألماني؟"],
        ["n", "die", "Zeitschrift", "-en", "المجلة", "Sie liest eine Zeitschrift über Sport.", "تقرأ مجلة عن الرياضة."],
        ["n", "die", "Werbung", "Sg.", "الإعلانات", "Die Werbung im Fernsehen nervt.", "الإعلانات في التلفاز مزعجة."],
        ["n", "die", "Politik", "Sg.", "السياسة", "Interessierst du dich für Politik?", "هل تهتم بالسياسة؟"],
        ["n", "die", "Wissenschaft", "-en", "العلم", "Er liest viel über Wissenschaft.", "يقرأ كثيرًا عن العلوم."],
        ["n", "das", "Thema", "=Themen", "الموضوع", "Das ist ein wichtiges Thema.", "هذا موضوع مهم."],
        ["n", "der", "Artikel", "-", "المقال", "Ich habe einen interessanten Artikel gelesen.", "قرأت مقالًا مثيرًا للاهتمام."],
        ["n", "der", "Fernseher", "-", "جهاز التلفاز", "Wir haben keinen Fernseher.", "ليس عندنا تلفاز."],
        ["n", "das", "Programm", "-e", "البرنامج / القناة", "Was kommt heute im Programm?", "ماذا يُعرض اليوم؟"],
        ["v", "", "warten (auf + Akk.)", "hat gewartet", "ينتظر", "Worauf wartest du? – Auf den Bus.", "ماذا تنتظر؟ – الحافلة."],
        ["v", "", "sich interessieren (für + Akk.)", "hat sich interessiert", "يهتم بـ", "Ich interessiere mich für Technik.", "أهتم بالتقنية."],
        ["v", "", "sprechen (über + Akk.)", "spricht, hat gesprochen", "يتحدث عن", "Wir sprechen über die Nachrichten.", "نتحدث عن الأخبار."],
        ["v", "", "denken (an + Akk.)", "hat gedacht", "يفكر في", "Ich denke oft an meine Heimat.", "أفكر كثيرًا في وطني."],
        ["v", "", "träumen (von + Dat.)", "hat geträumt", "يحلم بـ", "Ich träume von einem eigenen Haus.", "أحلم ببيت خاص."],
        ["v", "", "sich freuen (auf + Akk.)", "hat sich gefreut", "يتطلع إلى", "Ich freue mich auf die Ferien.", "أتطلع إلى العطلة."],
        ["v", "", "Angst haben (vor + Dat.)", "hat Angst gehabt", "يخاف من", "Hast du Angst vor Spinnen?", "هل تخاف من العناكب؟"],
        ["v", "", "diskutieren (über + Akk.)", "hat diskutiert", "يناقش", "Wir diskutieren über das Thema.", "نناقش الموضوع."],
        ["v", "", "schauen", "hat geschaut", "يشاهد / ينظر", "Abends schaue ich eine Serie.", "في المساء أشاهد مسلسلًا."],
        ["q", "", "worauf? / wofür? / worüber?", "", "ماذا؟ (مع auf/für/über)", "Worüber sprecht ihr?", "عمّ تتحدثون؟"],
        ["d", "", "darauf / dafür / darüber", "", "عليه / له / عنه (إحالة لشيء)", "Ich freue mich darauf.", "أتطلع إلى ذلك."],
        ["a", "", "aktuell", "", "حديث / راهن", "Das ist ein aktuelles Thema.", "هذا موضوع راهن."],
        ["a", "", "spannend", "", "مشوّق", "Die Serie ist sehr spannend.", "المسلسل مشوّق جدًا."],
        ["a", "", "nervig", "", "مزعج", "Die Werbung ist nervig.", "الإعلانات مزعجة."]
      ],
      phrases: [
        ["Ich interessiere mich für Technik und Sport.", "أهتم بالتقنية والرياضة."],
        ["Worauf wartest du? – Auf eine wichtige E-Mail.", "ماذا تنتظر؟ – رسالة إلكترونية مهمة."],
        ["Worüber sprecht ihr? – Über die neue Serie.", "عمّ تتحدثون؟ – عن المسلسل الجديد."],
        ["Ich freue mich schon darauf!", "أتطلع إلى ذلك بشوق!"],
        ["Woran denkst du? – An meine Familie in Marokko.", "بماذا تفكر؟ – بعائلتي في المغرب."],
        ["Ich ärgere mich über die viele Werbung.", "أنزعج من كثرة الإعلانات."],
        ["Er träumt von einer Reise nach Japan.", "يحلم برحلة إلى اليابان."]
      ],
      ex: [
        { t: "gap", q: "أكمل بحرف الجر.", s: "Ich warte ___ den Bus.", a: ["auf"], why: "‹warten auf› + Akkusativ.", tag: "verbpraep" },
        { t: "gap", q: "أكمل بحرف الجر.", s: "Sie interessiert sich ___ Musik.", a: ["für"], why: "‹sich interessieren für›.", tag: "verbpraep" },
        { t: "gap", q: "أكمل بحرف الجر.", s: "Wir sprechen ___ den Film.", a: ["über"], why: "‹sprechen über› + Akkusativ.", tag: "verbpraep" },
        { t: "gap", q: "أكمل بحرف الجر.", s: "Ich denke oft ___ meine Großmutter.", a: ["an"], why: "‹denken an› + Akkusativ.", tag: "verbpraep" },
        { t: "gap", q: "أكمل بحرف الجر.", s: "Er träumt ___ einem neuen Auto.", a: ["von"], why: "‹träumen von› + Dativ.", tag: "verbpraep" },
        { t: "mc", q: "اختر الصحيح.", s: "Nächste Woche fahren wir in Urlaub. Ich freue mich ___ die Reise.", o: ["auf", "über", "für"], a: 0, why: "شيء قادم → ‹sich freuen auf›.", tag: "verbpraep" },
        { t: "mc", q: "اختر الصحيح.", s: "Danke für das Geschenk! Ich freue mich sehr ___.", o: ["darüber", "darauf", "dafür"], a: 0, why: "شيء حصل الآن → ‹sich freuen über› → ‹darüber›.", tag: "verbpraep" },
        { t: "mc", q: "اختر السؤال الصحيح: «Ich interessiere mich für Fußball.»", o: ["Wofür interessierst du dich?", "Für wen interessierst du dich?", "Worauf interessierst du dich?"], a: 0, why: "شيء + ‹für› → ‹Wofür?›.", tag: "verbpraep" },
        { t: "mc", q: "اختر السؤال الصحيح: «Ich warte auf meine Freundin.»", o: ["Auf wen wartest du?", "Worauf wartest du?", "Wofür wartest du?"], a: 0, why: "شخص → ‹Auf wen?›.", tag: "verbpraep" },
        { t: "mc", q: "اختر الصحيح.", s: "Wartest du auf die E-Mail? – Ja, ich warte ___.", o: ["darauf", "auf sie", "worauf"], a: 0, why: "للإحالة لشيء: ‹darauf›.", tag: "verbpraep" },
        { t: "gap", q: "أكمل بـ wo(r)+حرف.", s: "___ sprecht ihr? – Über die Nachrichten.", a: ["Worüber"], why: "‹über› تبدأ بحرف علة → ‹wo + r + über›.", tag: "verbpraep" },
        { t: "match", q: "صِل الفعل بحرفه.", pairs: [["warten", "auf"], ["sich interessieren", "für"], ["träumen", "von"], ["denken", "an"], ["Angst haben", "vor"]], tag: "verbpraep" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أهتم بالسياسة.", a: ["Ich interessiere mich für Politik."], tag: "verbpraep" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "بماذا تفكر؟", a: ["Woran denkst du?", "Woran denken Sie?"], tag: "verbpraep" },
        { t: "read", title: "Umfrage: Welche Medien nutzt du?", text: "Leon (19): Ich sehe nie fern. Ich informiere mich nur auf Social Media und höre Podcasts. Ich interessiere mich besonders für Technik. — Frau Maier (54): Ich lese jeden Morgen die Zeitung beim Frühstück. Über die viele Werbung im Internet ärgere ich mich. — Karim (27): Ich schaue Nachrichten auf Arabisch und auf Deutsch. So weiß ich, was in Marokko und in Deutschland passiert. Und ich freue mich immer auf die neue Folge von meiner Lieblingsserie!", tr: "ليون (19): لا أشاهد التلفاز أبدًا. أطّلع فقط عبر وسائل التواصل وأستمع إلى البودكاست. أهتم خاصة بالتقنية. — السيدة ماير (54): أقرأ الجريدة كل صباح مع الفطور. أنزعج من كثرة الإعلانات على الإنترنت. — كريم (27): أشاهد الأخبار بالعربية والألمانية. هكذا أعرف ما يحدث في المغرب وفي ألمانيا. وأتطلع دائمًا إلى الحلقة الجديدة من مسلسلي المفضل!", items: [
          { t: "tf", s: "Leon sieht jeden Abend fern.", a: false, why: "‹Ich sehe nie fern.›" },
          { t: "tf", s: "Frau Maier ärgert sich über Werbung im Internet.", a: true, why: "‹Über die viele Werbung im Internet ärgere ich mich.›" },
          { t: "tf", s: "Karim sieht Nachrichten in zwei Sprachen.", a: true, why: "‹auf Arabisch und auf Deutsch›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Wofür interessierst du dich?", ar: "بماذا تهتم؟",
        scene: "في دورة الألمانية، زميلك ماركو يجري معك مقابلة قصيرة لمشروع عن وسائل الإعلام.",
        who: { A: "Marco" },
        lines: [
          { s: "A", de: "Erste Frage: Wofür interessierst du dich am meisten?", ar: "السؤال الأول: بماذا تهتم أكثر؟" },
          { s: "U", task: "قل: أهتم كثيرًا بالرياضة والتقنية.", m: "Ich interessiere mich sehr für Sport und Technik.", ok: ["Ich interessiere mich sehr für Sport und Technik", "Ich interessiere mich für Sport und Technik", "Für Sport und Technik", "Ich interessiere mich * für *"], o: ["Ich interessiere mich sehr für Sport und Technik.", "Ich interessiere mir sehr für Sport und Technik.", "Ich interessiere mich sehr über Sport und Technik."], why: ["", "‹ich› → ‹mich› (Akkusativ).", "‹sich interessieren für›."], ar: "أهتم كثيرًا بالرياضة والتقنية." },
          { s: "A", de: "Und wie informierst du dich? Liest du Zeitung?", ar: "وكيف تطّلع؟ هل تقرأ الجريدة؟" },
          { s: "U", task: "قل: لا، أطّلع على الإنترنت وأستمع إلى بودكاست بالألمانية.", m: "Nein, ich informiere mich im Internet und höre Podcasts auf Deutsch.", ok: ["Nein ich informiere mich im Internet und höre Podcasts auf Deutsch", "Nein ich informiere mich online und höre Podcasts auf Deutsch", "Nein ich informiere mich im Internet *", "* höre Podcasts auf Deutsch"], o: ["Nein, ich informiere mich im Internet und höre Podcasts auf Deutsch.", "Nein, ich informiere im Internet und höre Podcasts auf Deutsch.", "Nein, ich informiere mich im Internet und höre Podcasts in Deutsch."], why: ["", "‹sich informieren› فعل انعكاسي: لا تنس ‹mich›.", "اللغة: ‹auf Deutsch›."], ar: "لا، أطّلع على الإنترنت وأستمع إلى بودكاست بالألمانية." },
          { s: "A", de: "Interessant! Und worüber ärgerst du dich bei den Medien?", ar: "مثير! وما الذي يزعجك في وسائل الإعلام؟" },
          { s: "U", task: "قل: أنزعج من الأخبار الكاذبة ومن الإعلانات.", m: "Ich ärgere mich über Fake News und über die Werbung.", ok: ["Ich ärgere mich über Fake News und über die Werbung", "Ich ärgere mich über Fake News und die Werbung", "Ich ärgere mich über die Werbung und Fake News", "Ich ärgere mich über *"], o: ["Ich ärgere mich über Fake News und über die Werbung.", "Ich ärgere mich auf Fake News und auf die Werbung.", "Ich ärgere mir über Fake News und über die Werbung."], why: ["", "‹sich ärgern über›.", "‹ich› → ‹mich›."], ar: "أنزعج من الأخبار الكاذبة ومن الإعلانات." },
          { s: "A", de: "Das verstehe ich gut. Danke für das Interview!", ar: "أفهم ذلك جيدًا. شكرًا على المقابلة!" }
        ]
      },
      listen: [
        { t: "listen", say: "Ich warte schon seit einer Woche auf eine Antwort von der Firma.", q: "ماذا ينتظر؟", o: ["ردًا من الشركة", "طردًا بريديًا", "صديقًا"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Meine Tochter interessiert sich nur für Tiere. Sie möchte Tierärztin werden.", q: "بماذا تهتم البنت؟", o: ["بالحيوانات", "بالتقنية", "بالسياسة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Worüber habt ihr im Kurs gesprochen? – Über das Thema Umwelt.", q: "عمّ تحدثوا في الدورة؟", o: ["عن البيئة", "عن السياسة", "عن الرياضة"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Ich warte auf den Bus.", tag: "hoeren" },
        { t: "dict", say: "Ich freue mich darauf.", tag: "hoeren" }
      ]
    },

    /* ───────────── 14C ───────────── */
    {
      id: "14C", de: "Social Media: Pro und Contra", ar: "وسائل التواصل: مع وضد",
      summary: "إيجابيات وسلبيات وسائل التواصل، التعبير عن الرأي والموازنة؛ deshalb (لذلك) و trotzdem (مع ذلك) و obwohl (رغم أنّ).",
      grammar: [
        {
          h: "deshalb و trotzdem: الفعل بعدهما مباشرة",
          p: "‹deshalb› (لذلك) تعطي **نتيجة**، و‹trotzdem› (مع ذلك) تعطي **عكس المتوقّع**. إذا جاءت في أول الجملة، يأتي الفعل بعدها مباشرة:",
          table: {
            head: ["الأداة", "مثال"],
            rows: [
              ["‹deshalb›", "‹Ich habe viele Freunde im Ausland. **Deshalb benutze** ich WhatsApp.›"],
              ["‹trotzdem›", "‹Social Media kostet viel Zeit. **Trotzdem benutze** ich es jeden Tag.›"],
              ["(في الوسط)", "‹Ich benutze es **trotzdem** jeden Tag.›"]
            ]
          },
          tip: "مثل ‹dann› و‹danach›: بعد ‹deshalb / trotzdem› في البداية → فعل ثم فاعل. ‹Deshalb ich benutze› ✗."
        },
        {
          h: "obwohl: جملة فرعية (الفعل في الآخر)",
          p: "‹obwohl› = رغم أنّ. مثل ‹weil› و‹dass›: الفعل المصرّف في **آخر** الجملة.",
          table: {
            head: ["trotzdem (جملتان رئيسيتان)", "obwohl (جملة فرعية)"],
            rows: [
              ["‹Ich bin müde. Trotzdem schaue ich noch eine Folge.›", "‹Ich schaue noch eine Folge, obwohl ich müde **bin**.›"],
              ["‹Das Wetter ist schlecht. Trotzdem gehen wir raus.›", "‹Obwohl das Wetter schlecht **ist**, **gehen** wir raus.›"]
            ]
          }
        },
        {
          h: "التعبير عن الرأي والموازنة",
          table: {
            head: ["الجملة", "المعنى"],
            rows: [
              ["‹Ich finde, dass …› / ‹Meiner Meinung nach …›", "أرى أنّ … / في رأيي …"],
              ["‹Ein Vorteil ist, dass …›", "من المزايا أنّ …"],
              ["‹Ein Nachteil ist, dass …›", "من العيوب أنّ …"],
              ["‹Einerseits …, andererseits …›", "من جهة …، ومن جهة أخرى …"],
              ["‹Da hast du recht. / Das sehe ich anders.›", "معك حق. / أرى ذلك بشكل مختلف."]
            ]
          }
        }
      ],
      vocab: [
        ["n", "die", "sozialen Medien", "Pl.", "وسائل التواصل الاجتماعي", "Viele Jugendliche nutzen die sozialen Medien.", "كثير من الشباب يستعملون وسائل التواصل."],
        ["n", "der", "Vorteil", "-e", "الميزة", "Ein Vorteil ist, dass es schnell geht.", "من المزايا أنه سريع."],
        ["n", "der", "Nachteil", "-e", "العيب", "Ein Nachteil ist, dass es viel Zeit kostet.", "من العيوب أنه يأخذ وقتًا كثيرًا."],
        ["n", "die", "Meinung", "-en", "الرأي", "Meiner Meinung nach ist das gefährlich.", "في رأيي هذا خطير."],
        ["n", "der", "Kontakt", "-e", "التواصل / الصلة", "Ich halte Kontakt mit meinen Freunden.", "أحافظ على التواصل مع أصدقائي."],
        ["n", "das", "Profil", "-e", "الملف الشخصي", "Mein Profil ist privat.", "ملفي الشخصي خاص."],
        ["n", "der", "Beitrag", "¨-e", "المنشور", "Sie hat einen lustigen Beitrag gepostet.", "نشرت منشورًا مضحكًا."],
        ["n", "die", "Daten", "Pl.", "البيانات", "Schütze deine Daten!", "احمِ بياناتك!"],
        ["n", "die", "Gefahr", "-en", "الخطر", "Das Internet hat auch Gefahren.", "للإنترنت أيضًا مخاطر."],
        ["n", "die", "Privatsphäre", "Sg.", "الخصوصية", "Die Privatsphäre ist wichtig.", "الخصوصية مهمة."],
        ["n", "der", "Jugendliche", "-n", "المراهق / الشاب", "Jugendliche sind oft online.", "الشباب غالبًا متصلون."],
        ["v", "", "nutzen", "hat genutzt", "يستعمل / يستفيد", "Ich nutze Instagram nur selten.", "أستعمل إنستغرام نادرًا فقط."],
        ["v", "", "posten", "hat gepostet", "ينشر", "Er postet jeden Tag Fotos.", "ينشر صورًا كل يوم."],
        ["v", "", "teilen", "hat geteilt", "يشارك", "Teile keine privaten Daten!", "لا تشارك بيانات خاصة!"],
        ["v", "", "kommentieren", "hat kommentiert", "يعلّق", "Viele Leute kommentieren den Beitrag.", "كثيرون يعلّقون على المنشور."],
        ["v", "", "schützen", "hat geschützt", "يحمي", "Wie kann ich meine Daten schützen?", "كيف أحمي بياناتي؟"],
        ["v", "", "Zeit verschwenden", "hat verschwendet", "يضيّع الوقت", "Am Handy verschwende ich viel Zeit.", "أضيّع وقتًا كثيرًا على الهاتف."],
        ["p", "", "deshalb", "+ Verb (Position 2)", "لذلك", "Ich lerne Deutsch, deshalb höre ich deutsche Podcasts.", "أتعلم الألمانية، لذلك أستمع إلى بودكاست ألماني."],
        ["p", "", "trotzdem", "+ Verb (Position 2)", "مع ذلك", "Es regnet. Trotzdem gehe ich joggen.", "تمطر. مع ذلك أذهب للركض."],
        ["p", "", "obwohl", "+ Verb am Ende", "رغم أنّ", "Ich gehe joggen, obwohl es regnet.", "أذهب للركض رغم أنها تمطر."],
        ["a", "", "gefährlich", "", "خطير", "Das kann gefährlich sein.", "قد يكون هذا خطيرًا."],
        ["a", "", "privat", "", "خاص", "Das ist privat.", "هذا خاص."],
        ["a", "", "nützlich", "", "مفيد", "Die App ist sehr nützlich.", "التطبيق مفيد جدًا."],
        ["d", "", "einerseits … andererseits", "", "من جهة … ومن جهة أخرى", "Einerseits ist es praktisch, andererseits kostet es Zeit.", "من جهة هو عملي، ومن جهة أخرى يأخذ وقتًا."],
        ["x", "", "Meiner Meinung nach …", "+ Verb", "في رأيي …", "Meiner Meinung nach ist das zu viel.", "في رأيي هذا كثير."],
        ["x", "", "Da hast du recht.", "", "معك حق.", "Da hast du recht, das ist ein Problem.", "معك حق، هذه مشكلة."]
      ],
      phrases: [
        ["Ein Vorteil ist, dass man schnell Kontakt halten kann.", "من المزايا أنه يمكن الحفاظ على التواصل بسرعة."],
        ["Ein Nachteil ist, dass man viel Zeit verschwendet.", "من العيوب أن المرء يضيّع وقتًا كثيرًا."],
        ["Meine Familie wohnt in Marokko, deshalb nutze ich Videoanrufe.", "عائلتي تسكن في المغرب، لذلك أستعمل مكالمات الفيديو."],
        ["Social Media kostet viel Zeit. Trotzdem nutze ich es jeden Tag.", "وسائل التواصل تأخذ وقتًا كثيرًا. مع ذلك أستعملها كل يوم."],
        ["Ich poste keine Fotos, obwohl ich viele Follower habe.", "لا أنشر صورًا رغم أن عندي متابعين كثيرين."],
        ["Einerseits ist es praktisch, andererseits ist es gefährlich.", "من جهة هو عملي، ومن جهة أخرى خطير."],
        ["Das sehe ich anders.", "أرى ذلك بشكل مختلف."]
      ],
      ex: [
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Ich habe Freunde in vielen Ländern. Deshalb ___.", o: ["benutze ich WhatsApp", "ich benutze WhatsApp", "ich WhatsApp benutze"], a: 0, why: "بعد ‹Deshalb› الفعل مباشرة.", tag: "konnektor" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Ich bin müde. Trotzdem ___.", o: ["schaue ich noch eine Folge", "ich schaue noch eine Folge", "ich noch eine Folge schaue"], a: 0, why: "بعد ‹Trotzdem› الفعل مباشرة.", tag: "konnektor" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Ich schaue noch eine Folge, obwohl ___.", o: ["ich müde bin", "ich bin müde", "bin ich müde"], a: 0, why: "بعد ‹obwohl› الفعل في الآخر.", tag: "nebensatz" },
        { t: "mc", q: "اختر الأداة المناسبة.", s: "Es regnet. ___ gehen wir spazieren.", o: ["Trotzdem", "Deshalb", "Obwohl"], a: 0, why: "عكس المتوقع → ‹Trotzdem›. (‹Obwohl› تحتاج الفعل في الآخر).", tag: "konnektor" },
        { t: "mc", q: "اختر الأداة المناسبة.", s: "Mein Handy ist kaputt. ___ kann ich dich nicht anrufen.", o: ["Deshalb", "Trotzdem", "Obwohl"], a: 0, why: "نتيجة → ‹Deshalb›.", tag: "konnektor" },
        { t: "gap", q: "أكمل بـ weil / deshalb / obwohl.", s: "Ich lerne Deutsch, ___ ich in Deutschland studieren will.", a: ["weil"], why: "الفعل في الآخر والمعنى «لأن» → ‹weil›.", tag: "nebensatz" },
        { t: "gap", q: "أكمل بـ deshalb / trotzdem / obwohl.", s: "Er hat keine Zeit. ___ hilft er mir.", a: ["Trotzdem"], why: "عكس المتوقع + الفعل مباشرة → ‹Trotzdem›.", tag: "konnektor" },
        { t: "gap", q: "أكمل بـ deshalb / trotzdem / obwohl.", s: "___ sie wenig Zeit hat, postet sie jeden Tag.", a: ["Obwohl"], why: "الفعل ‹hat› في الآخر + عكس → ‹Obwohl›.", tag: "nebensatz" },
        { t: "gap", q: "أكمل بـ deshalb / trotzdem / obwohl.", s: "Meine Familie ist weit weg. ___ telefoniere ich oft mit ihr.", a: ["Deshalb"], why: "نتيجة → ‹Deshalb›.", tag: "konnektor" },
        { t: "order", q: "رتّب الجملة.", a: "Ich poste keine Fotos, obwohl ich ein Profil habe.", why: "بعد ‹obwohl› الفعل ‹habe› في الآخر.", tag: "nebensatz" },
        { t: "order", q: "رتّب الجملة.", a: "Trotzdem nutze ich das Handy jeden Tag.", why: "‹Trotzdem› + فعل + فاعل.", tag: "konnektor" },
        { t: "match", q: "صِل الكلمة بمعناها.", pairs: [["der Vorteil", "الميزة"], ["der Nachteil", "العيب"], ["deshalb", "لذلك"], ["trotzdem", "مع ذلك"], ["obwohl", "رغم أنّ"]], tag: "konnektor" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "تمطر. مع ذلك أذهب للركض.", a: ["Es regnet. Trotzdem gehe ich joggen.", "Es regnet, trotzdem gehe ich joggen.", "Es regnet. Trotzdem gehe ich laufen."], tag: "konnektor" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أذهب للركض رغم أنها تمطر.", a: ["Ich gehe joggen, obwohl es regnet.", "Ich gehe laufen, obwohl es regnet."], tag: "nebensatz" },
        { t: "read", title: "Forum: Brauchen wir Social Media?", text: "Sara: Für mich sind soziale Medien sehr wichtig. Meine Familie lebt in drei Ländern, deshalb sehen wir uns nur online. — Tom: Einerseits ist es praktisch, andererseits verschwende ich zu viel Zeit. Obwohl ich das weiß, schaue ich jeden Abend zwei Stunden Videos. — Ines: Ich habe kein Profil mehr. Ich hatte Angst um meine Daten. Trotzdem habe ich Kontakt mit meinen Freunden: Wir telefonieren oder treffen uns.", tr: "سارة: بالنسبة لي وسائل التواصل مهمة جدًا. عائلتي تعيش في ثلاث دول، لذلك لا نرى بعضنا إلا عبر الإنترنت. — توم: من جهة هي عملية، ومن جهة أخرى أضيّع وقتًا كثيرًا. رغم أنني أعرف ذلك، أشاهد كل مساء ساعتين من الفيديوهات. — إينيس: لم يعد عندي حساب. كنت أخاف على بياناتي. مع ذلك أنا على تواصل مع أصدقائي: نتهاتف أو نلتقي.", items: [
          { t: "tf", s: "Sara sieht ihre Familie vor allem online.", a: true, why: "‹deshalb sehen wir uns nur online›." },
          { t: "tf", s: "Tom schaut abends keine Videos.", a: false, why: "‹schaue ich jeden Abend zwei Stunden Videos›." },
          { t: "tf", s: "Ines hat keinen Kontakt mehr mit ihren Freunden.", a: false, why: "‹Trotzdem habe ich Kontakt mit meinen Freunden›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Brauchst du Instagram?", ar: "هل تحتاج إنستغرام؟",
        scene: "صديقتك بيترا تقول إنها حذفت كل حساباتها في وسائل التواصل. ناقشها.",
        who: { A: "Petra" },
        lines: [
          { s: "A", de: "Ich habe alle meine Social-Media-Konten gelöscht! Ich finde, sie kosten zu viel Zeit.", ar: "حذفت كل حساباتي في وسائل التواصل! أرى أنها تأخذ وقتًا كثيرًا." },
          { s: "U", task: "قل: معك حق، هذا عيب. لكن عائلتي في المغرب، لذلك أحتاج واتساب.", m: "Da hast du recht, das ist ein Nachteil. Aber meine Familie ist in Marokko, deshalb brauche ich WhatsApp.", ok: ["Da hast du recht das ist ein Nachteil aber meine Familie ist in Marokko deshalb brauche ich WhatsApp", "Da hast du recht aber meine Familie ist in Marokko deshalb brauche ich WhatsApp", "* deshalb brauche ich WhatsApp", "* deshalb nutze ich WhatsApp"], o: ["Da hast du recht, das ist ein Nachteil. Aber meine Familie ist in Marokko, deshalb brauche ich WhatsApp.", "Da hast du recht, das ist ein Nachteil. Aber meine Familie ist in Marokko, deshalb ich brauche WhatsApp.", "Da hast du recht, das ist ein Nachteil. Aber meine Familie ist in Marokko, trotzdem brauche ich WhatsApp."], why: ["", "بعد ‹deshalb› الفعل مباشرة: ‹deshalb brauche ich›.", "هذه نتيجة وليست عكسًا → ‹deshalb›."], ar: "معك حق، هذا عيب. لكن عائلتي في المغرب، لذلك أحتاج واتساب." },
          { s: "A", de: "Okay, WhatsApp ist etwas anderes. Aber Instagram und TikTok?", ar: "حسنًا، واتساب شيء آخر. لكن إنستغرام وتيك توك؟" },
          { s: "U", task: "قل: أستعمل إنستغرام قليلًا فقط، رغم أنه ممتع.", m: "Instagram nutze ich nur wenig, obwohl es Spaß macht.", ok: ["Instagram nutze ich nur wenig obwohl es Spaß macht", "Ich nutze Instagram nur wenig obwohl es Spaß macht", "* obwohl es Spaß macht", "Ich nutze Instagram nur selten obwohl es Spaß macht"], o: ["Instagram nutze ich nur wenig, obwohl es Spaß macht.", "Instagram nutze ich nur wenig, obwohl es macht Spaß.", "Instagram ich nutze nur wenig, obwohl es Spaß macht."], why: ["", "بعد ‹obwohl› الفعل ‹macht› في الآخر.", "إذا بدأت بـ ‹Instagram› يأتي الفعل ثانيًا: ‹nutze ich›."], ar: "أستعمل إنستغرام قليلًا فقط، رغم أنه ممتع." },
          { s: "A", de: "Und hast du keine Angst um deine Daten?", ar: "ألا تخاف على بياناتك؟" },
          { s: "U", task: "قل: بلى، قليلًا. لذلك ملفي الشخصي خاص ولا أنشر صورًا خاصة.", m: "Doch, ein bisschen. Deshalb ist mein Profil privat und ich poste keine privaten Fotos.", ok: ["Doch ein bisschen deshalb ist mein Profil privat und ich poste keine privaten Fotos", "Doch deshalb ist mein Profil privat *", "* deshalb ist mein Profil privat *", "Ja ein bisschen deshalb ist mein Profil privat *"], o: ["Doch, ein bisschen. Deshalb ist mein Profil privat und ich poste keine privaten Fotos.", "Doch, ein bisschen. Deshalb mein Profil ist privat und ich poste keine privaten Fotos.", "Doch, ein bisschen. Deshalb ist mein Profil privat und ich poste keine private Fotos."], why: ["", "بعد ‹Deshalb› الفعل ‹ist› مباشرة.", "بعد ‹keine› في الجمع: ‹privaten› (‑en)."], ar: "بلى، قليلًا. لذلك ملفي خاص ولا أنشر صورًا خاصة." },
          { s: "A", de: "Das ist vernünftig. Vielleicht installiere ich WhatsApp wieder …", ar: "هذا معقول. ربما أثبّت واتساب من جديد …" }
        ]
      },
      listen: [
        { t: "listen", say: "Ich habe wenig Zeit. Trotzdem lese ich jeden Abend zwanzig Minuten.", q: "ماذا يفعل كل مساء؟", o: ["يقرأ عشرين دقيقة", "يشاهد التلفاز", "ينام مبكرًا"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Obwohl mein Bruder erst zehn ist, hat er schon ein Smartphone.", q: "كم عمر الأخ؟", o: ["عشر سنوات", "اثنتا عشرة سنة", "عشرون سنة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ein Vorteil ist, dass man kostenlos telefonieren kann. Ein Nachteil sind die vielen Nachrichten.", q: "ما العيب حسب المتكلم؟", o: ["كثرة الرسائل", "المكالمات المكلفة", "الشبكة الضعيفة"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Trotzdem gehe ich joggen.", tag: "hoeren" },
        { t: "dict", say: "Ich lerne, obwohl ich müde bin.", tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "Satzakzent: Kontrast und Emphase", ar: "نبر الجملة: التباين والتأكيد",
    body: [
      { p: "في الجملة الألمانية نضغط على الكلمة **الأهم أو الجديدة**. عندما نقارن أو نعارض، ينتقل النبر إلى الكلمة التي تحمل التباين:" },
      { table: { head: ["الجملة", "المعنى"], rows: [
        ["‹Ich nutze **WhatsApp**, nicht Instagram.›", "التباين بين تطبيقين."],
        ["‹**Ich** nutze WhatsApp, nicht mein Bruder.›", "التباين بين شخصين."],
        ["‹Ich nutze es **trotzdem**!›", "تأكيد عكس المتوقع."],
        ["‹Doch, ich habe **doch** Zeit!›", "‹doch› المنبورة = بلى/فعلًا (رد على نفي)."]
      ] } },
      { tip: "النبر يغيّر المعنى! جرّب: ‹ICH komme morgen› (أنا وليس غيري) / ‹Ich komme MORGEN› (غدًا وليس اليوم)." }
    ],
    drills: [
      { t: "listen", say: "Ich nutze WhatsApp, nicht Instagram.", q: "ما الكلمة المنبورة الأولى؟", o: ["WhatsApp", "Ich", "nutze"], a: 0, why: "التباين بين التطبيقين → ‹WhatsApp› و‹Instagram›." },
      { t: "listen", say: "Doch, ich habe Zeit!", q: "ما معنى ‹Doch› هنا؟", o: ["بلى (رد على نفي)", "لكن", "إذن"], a: 0, why: "‹Doch› في البداية = بلى." },
      { t: "listen", say: "Trotzdem gehe ich joggen.", q: "أين النبر غالبًا؟", o: ["TROTZdem", "gehe", "ich"], a: 0, why: "الكلمة التي تحمل التباين: ‹Trotzdem›." }
    ],
    say: ["Ich nutze WhatsApp, nicht Instagram.", "Ich komme morgen, nicht heute.", "Doch, ich habe Zeit!", "Trotzdem gehe ich joggen.", "Das sehe ich anders.", "Einerseits ist es praktisch, andererseits kostet es Zeit."]
  },

  write: [
    {
      ar: "اكتب رأيك في منتدى (70–80 كلمة): «Social Media – gut oder schlecht?». اذكر ميزة وعيبًا، واستعمل deshalb و trotzdem و obwohl، وأنهِ برأيك الشخصي.",
      de: "Meinung im Forum: Social Media.",
      model: "Meiner Meinung nach haben soziale Medien Vorteile und Nachteile. Ein Vorteil ist, dass ich Kontakt mit meiner Familie in Marokko halten kann. Deshalb nutze ich jeden Tag WhatsApp. Ein Nachteil ist, dass man viel Zeit verschwendet. Obwohl ich das weiß, schaue ich abends oft Videos. Trotzdem finde ich Social Media nützlich, wenn man vorsichtig ist und seine Daten schützt.",
      check: ["‹Meiner Meinung nach …› أو ‹Ich finde, dass …›", "ميزة: ‹Ein Vorteil ist, dass …›", "عيب: ‹Ein Nachteil ist, dass …›", "‹deshalb› + فعل مباشرة", "‹trotzdem› + فعل مباشرة", "‹obwohl› + الفعل في الآخر"]
    },
    {
      ar: "اكتب لصديق عن روتينك الإعلامي اليومي (50–60 كلمة) باستعمال أفعال انعكاسية (sich informieren, sich entspannen, sich ärgern über, sich freuen auf) وفعل مع حرف جر.",
      de: "Mein Medien-Alltag.",
      model: "Hallo Lukas,\nmorgens informiere ich mich zuerst im Internet über das Wetter und die Nachrichten. Im Bus höre ich Podcasts, so entspanne ich mich. Ich ärgere mich manchmal über die viele Werbung. Abends telefoniere ich mit meiner Familie. Ich freue mich schon auf das Wochenende – dann bin ich offline!\nBis bald\nKarim",
      check: ["3 أفعال انعكاسية على الأقل مع الضمير الصحيح", "فعل مع حرف جر (sich freuen auf, sich ärgern über …)", "تحية وختام"]
    }
  ],
  tutor: [
    { title: "Handy-Probleme", ar: "مشاكل الهاتف", role: "Herr Kraus, Mitarbeiter in einem Handyladen", goal: "ein Problem mit dem Handy beschreiben (Akku, Bildschirm, App, Passwort), Fragen stellen, reflexive Verben benutzen (sich anmelden, sich ärgern)", start: "Guten Tag! Was kann ich für Sie tun? Haben Sie ein Problem mit Ihrem Handy?" },
    { title: "Diskussion: Social Media", ar: "نقاش: وسائل التواصل", role: "Katrin, eine Kommilitonin, die Social Media sehr kritisch sieht", goal: "eine Meinung sagen und begründen, Vor- und Nachteile nennen, deshalb / trotzdem / obwohl benutzen, höflich widersprechen (Das sehe ich anders.)", start: "Ich finde, Social Media macht uns alle unglücklich. Wie siehst du das?" }
  ]
});

/* Lektion 15 (A2) — Guten Appetit! */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 15,
  level: "A2",
  de: "Guten Appetit!",
  ar: "بالهناء والشفاء!",
  book: "منهج A2 · محتوى أصلي (الأكل والطبخ والمطعم)",
  goals: [
    "الحديث عن عادات الأكل والأطباق المفضلة",
    "تصريف الصفة بعد der/die/das: der frische Fisch, den scharfen Käse",
    "السؤال بـ welcher? والإشارة بـ dieser",
    "فهم وصفة طبخ: المبني للمجهول (Passiv) — Die Zwiebeln werden geschnitten.",
    "الطلب في المطعم والشكوى بأدب؛ الصفة بدون أداة: frisches Brot, heiße Suppe"
  ],
  units: [
    /* ───────────── 15A ───────────── */
    {
      id: "15A", de: "Was isst du gern?", ar: "ماذا تحب أن تأكل؟",
      summary: "عادات الأكل في ألمانيا والمغرب، الأذواق؛ الصفة بعد الأداة المعرفة (der/die/das)، و welcher? / dieser.",
      grammar: [
        {
          h: "الصفة بعد der / die / das",
          p: "بعد الأداة المعرّفة (وكذلك ‹dieser, welcher, jeder›) الأداة تُظهر الجنس والحالة، لذلك الصفة تأخذ نهاية بسيطة: **‑e** أو **‑en**.",
          table: {
            head: ["", "مذكر", "محايد", "مؤنث", "جمع"],
            rows: [
              ["Nominativ", "‹der frisch**e** Fisch›", "‹das kalt**e** Wasser›", "‹die scharf**e** Soße›", "‹die rot**en** Äpfel›"],
              ["Akkusativ", "‹den frisch**en** Fisch›", "‹das kalt**e** Wasser›", "‹die scharf**e** Soße›", "‹die rot**en** Äpfel›"],
              ["Dativ", "‹dem frisch**en** Fisch›", "‹dem kalt**en** Wasser›", "‹der scharf**en** Soße›", "‹den rot**en** Äpfeln›"]
            ]
          },
          tip: "حفظ سهل: ‑e في خمسة أماكن فقط (Nominativ المفرد الثلاثة + Akkusativ المحايد والمؤنث). كل الباقي ‑en."
        },
        {
          h: "welcher? و dieser",
          p: "‹welcher?› = أيّ؟ و‹dieser› = هذا. نهايتهما مثل الأداة المعرّفة: ‹der → dieser/welcher›، ‹die → diese/welche›، ‹das → dieses/welches›، ‹den → diesen/welchen›.",
          ex: [["Welchen Käse möchten Sie? – Diesen hier, den französischen.", "أيّ جبن تريد؟ – هذا هنا، الفرنسي."], ["Welche Suppe ist vegetarisch? – Diese Linsensuppe.", "أي شوربة نباتية؟ – شوربة العدس هذه."], ["Welches Brot ist frisch? – Dieses dunkle Brot.", "أي خبز طازج؟ – هذا الخبز الأسمر."]]
        },
        {
          h: "عن الأذواق",
          table: {
            head: ["الألمانية", "العربية"],
            rows: [
              ["‹Ich esse gern scharf / süß.›", "أحب الأكل الحار / الحلو."],
              ["‹Ich esse kein Schweinefleisch.›", "لا آكل لحم الخنزير."],
              ["‹Ich bin Vegetarier / Vegetarierin.›", "أنا نباتي / نباتية."],
              ["‹Ich vertrage keine Milch.›", "لا أتحمّل الحليب."],
              ["‹Mein Lieblingsessen ist Couscous.›", "أكلتي المفضلة الكسكس."],
              ["‹Das schmeckt mir (nicht).›", "هذا (لا) يعجبني طعمه."]
            ]
          }
        }
      ],
      vocab: [
        ["n", "das", "Lieblingsessen", "-", "الأكلة المفضلة", "Mein Lieblingsessen ist Tajine.", "أكلتي المفضلة الطاجين."],
        ["n", "die", "Essgewohnheit", "-en", "عادة الأكل", "Die Essgewohnheiten sind in jedem Land anders.", "عادات الأكل مختلفة في كل بلد."],
        ["n", "die", "Mahlzeit", "-en", "الوجبة", "Das Mittagessen ist meine wichtigste Mahlzeit.", "الغداء أهم وجبة عندي."],
        ["n", "die", "Soße", "-n", "الصلصة", "Die Soße ist sehr scharf.", "الصلصة حارة جدًا."],
        ["n", "das", "Gewürz", "-e", "التابل", "In Marokko kocht man mit vielen Gewürzen.", "في المغرب يطبخون بتوابل كثيرة."],
        ["n", "die", "Linse", "-n", "العدسة (العدس)", "Ich koche eine Suppe mit Linsen.", "أطبخ شوربة بالعدس."],
        ["n", "das", "Hähnchen", "-", "الدجاج", "Heute gibt es Hähnchen mit Reis.", "اليوم هناك دجاج بالأرز."],
        ["n", "das", "Lamm", "Sg.", "لحم الخروف", "Zum Fest essen wir Lamm.", "في العيد نأكل لحم الخروف."],
        ["n", "das", "Schweinefleisch", "Sg.", "لحم الخنزير", "Ich esse kein Schweinefleisch.", "لا آكل لحم الخنزير."],
        ["n", "der", "Vegetarier", "-", "النباتي", "Mein Bruder ist Vegetarier.", "أخي نباتي."],
        ["n", "die", "Vegetarierin", "-nen", "النباتية", "Sie ist seit zwei Jahren Vegetarierin.", "هي نباتية منذ سنتين."],
        ["n", "die", "Olive", "-n", "الزيتونة", "Die grünen Oliven sind aus Meknès.", "الزيتون الأخضر من مكناس."],
        ["n", "die", "Minze", "Sg.", "النعناع", "Marokkanischer Tee ist mit Minze.", "الشاي المغربي بالنعناع."],
        ["n", "der", "Honig", "Sg.", "العسل", "Brot mit Honig ist mein Frühstück.", "الخبز بالعسل فطوري."],
        ["n", "die", "Nuss", "¨-e", "الجوزة / المكسّرات", "Ich bin allergisch gegen Nüsse.", "عندي حساسية من المكسّرات."],
        ["n", "der", "Geschmack", "¨-e", "الطعم / الذوق", "Der Geschmack ist intensiv.", "الطعم قوي."],
        ["v", "", "probieren", "hat probiert", "يتذوّق / يجرّب", "Möchtest du mal probieren?", "هل تريد أن تتذوّق؟"],
        ["v", "", "vertragen", "verträgt, hat vertragen", "يتحمّل (طعامًا)", "Ich vertrage keine Milch.", "لا أتحمّل الحليب."],
        ["v", "", "riechen", "hat gerochen", "يشمّ / تفوح رائحته", "Das riecht lecker!", "رائحته شهية!"],
        ["q", "", "welcher? / welche? / welches?", "", "أيّ؟", "Welcher Tee schmeckt dir am besten?", "أي شاي يعجبك أكثر؟"],
        ["p", "", "dieser / diese / dieses", "", "هذا / هذه", "Dieser Kuchen ist sehr süß.", "هذه الكعكة حلوة جدًا."],
        ["a", "", "scharf", "", "حار (طعم)", "Ich esse gern scharf.", "أحب الأكل الحار."],
        ["a", "", "sauer", "", "حامض", "Die Zitrone ist sauer.", "الليمون حامض."],
        ["a", "", "bitter", "", "مرّ", "Der Kaffee ist zu bitter.", "القهوة مرّة جدًا."],
        ["a", "", "fettig", "", "دهني", "Pommes sind sehr fettig.", "البطاطس المقلية دهنية جدًا."],
        ["a", "", "allergisch (gegen + Akk.)", "", "عنده حساسية (من)", "Bist du gegen etwas allergisch?", "هل عندك حساسية من شيء؟"],
        ["a", "", "typisch", "", "نموذجي / تقليدي", "Was ist typisch deutsch?", "ما الشيء النموذجي الألماني؟"],
        ["x", "", "Das schmeckt mir.", "", "يعجبني طعمه.", "Die Suppe schmeckt mir sehr.", "الشوربة تعجبني جدًا."]
      ],
      phrases: [
        ["Welchen Käse möchten Sie? – Diesen hier, bitte.", "أي جبن تريد؟ – هذا هنا من فضلك."],
        ["Der marokkanische Tee schmeckt mir am besten.", "الشاي المغربي يعجبني أكثر من الكل."],
        ["Ich esse kein Schweinefleisch.", "لا آكل لحم الخنزير."],
        ["Ich bin gegen Nüsse allergisch.", "عندي حساسية من المكسّرات."],
        ["Kannst du mir die scharfe Soße geben?", "هل تعطيني الصلصة الحارة؟"],
        ["Was ist dein Lieblingsessen?", "ما أكلتك المفضلة؟"],
        ["Das riecht lecker! Darf ich probieren?", "رائحته شهية! هل يمكنني أن أتذوّق؟"]
      ],
      ex: [
        { t: "gap", q: "أكمل نهاية الصفة (Nominativ).", s: "Der frisch___ Fisch kommt aus Agadir.", a: ["e"], why: "بعد ‹der› في Nominativ: ‑e.", tag: "adjektiv" },
        { t: "gap", q: "أكمل نهاية الصفة (Akkusativ).", s: "Ich nehme den frisch___ Fisch.", a: ["en"], why: "مذكر Akkusativ بعد ‹den›: ‑en.", tag: "adjektiv" },
        { t: "gap", q: "أكمل نهاية الصفة.", s: "Die scharf___ Soße ist lecker.", a: ["e"], why: "مؤنث Nominativ بعد ‹die›: ‑e.", tag: "adjektiv" },
        { t: "gap", q: "أكمل نهاية الصفة (Dativ).", s: "Ich esse Brot mit dem süß___ Honig.", a: ["en"], why: "Dativ دائمًا ‑en.", tag: "adjektiv" },
        { t: "gap", q: "أكمل نهاية الصفة (جمع).", s: "Die grün___ Oliven sind aus Meknès.", a: ["en"], why: "الجمع بعد ‹die›: ‑en.", tag: "adjektiv" },
        { t: "mc", q: "اختر الصحيح.", s: "Möchtest du das ___ Wasser?", o: ["kalte", "kalten", "kaltes"], a: 0, why: "محايد Akkusativ بعد ‹das›: ‑e.", tag: "adjektiv" },
        { t: "mc", q: "اختر الصحيح.", s: "Ich kaufe die ___ Tomaten.", o: ["roten", "rote", "roter"], a: 0, why: "جمع بعد ‹die›: ‑en.", tag: "adjektiv" },
        { t: "mc", q: "اختر الصحيح.", s: "___ Käse möchten Sie? (der Käse)", o: ["Welchen", "Welcher", "Welches"], a: 0, why: "Akkusativ مذكر: ‹welchen› (مثل ‹den›).", tag: "adjektiv" },
        { t: "mc", q: "اختر الصحيح.", s: "___ Suppe ist vegetarisch? (die Suppe)", o: ["Welche", "Welcher", "Welchen"], a: 0, why: "مؤنث: ‹welche› (مثل ‹die›).", tag: "adjektiv" },
        { t: "gap", q: "أكمل بـ dieser / diese / dieses / diesen.", s: "Ich nehme ___ Kuchen hier. (der Kuchen)", a: ["diesen"], why: "مذكر Akkusativ: ‹diesen›.", tag: "adjektiv" },
        { t: "match", q: "صِل الطعم بمعناه.", pairs: [["scharf", "حار"], ["sauer", "حامض"], ["bitter", "مرّ"], ["süß", "حلو"], ["salzig", "مالح"]], tag: "wortschatz" },
        { t: "order", q: "رتّب الجملة.", a: "Der marokkanische Tee schmeckt mir sehr gut.", why: "‹Der marokkanische Tee› فاعل (‑e)، ثم ‹schmeckt mir›.", tag: "adjektiv" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "عندي حساسية من المكسّرات.", a: ["Ich bin gegen Nüsse allergisch.", "Ich bin allergisch gegen Nüsse.", "Ich habe eine Nussallergie."], tag: "wortschatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أي شاي يعجبك؟", a: ["Welcher Tee schmeckt dir?", "Welcher Tee gefällt dir?", "Welchen Tee magst du?"], tag: "adjektiv" },
        { t: "read", title: "Essen in Deutschland und Marokko", text: "In Deutschland ist das Frühstück oft einfach: Brot mit Butter, Käse oder Marmelade und ein starker Kaffee. Das warme Essen gibt es mittags oder abends. In Marokko ist das Mittagessen die große Mahlzeit: Am Freitag isst die ganze Familie zusammen Couscous. Der süße Pfefferminztee gehört zu jedem Essen. Viele Deutsche lieben die marokkanische Küche, weil sie die vielen Gewürze interessant finden. Und viele Marokkaner in Deutschland mögen das dunkle deutsche Brot.", tr: "في ألمانيا يكون الفطور بسيطًا غالبًا: خبز بالزبدة أو الجبن أو المربى وقهوة قوية. الأكل الساخن يكون ظهرًا أو مساءً. في المغرب الغداء هو الوجبة الكبيرة: يوم الجمعة تأكل العائلة كلها الكسكس معًا. الشاي الحلو بالنعناع يرافق كل أكل. كثير من الألمان يحبون المطبخ المغربي لأنهم يجدون التوابل الكثيرة مثيرة للاهتمام. وكثير من المغاربة في ألمانيا يحبون الخبز الألماني الأسمر.", items: [
          { t: "tf", s: "In Deutschland isst man warm nur zum Frühstück.", a: false, why: "‹Das warme Essen gibt es mittags oder abends.›" },
          { t: "tf", s: "In Marokko essen viele Familien am Freitag Couscous.", a: true, why: "‹Am Freitag isst die ganze Familie zusammen Couscous.›" },
          { t: "tf", s: "Viele Deutsche finden die marokkanischen Gewürze interessant.", a: true, why: "‹weil sie die vielen Gewürze interessant finden›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Auf dem Markt", ar: "في السوق",
        scene: "أنت في سوق أسبوعي في كولونيا وتريد شراء جبن وزيتون. البائعة السيدة كلاين.",
        who: { A: "Frau Klein" },
        lines: [
          { s: "A", de: "Guten Morgen! Was darf es sein?", ar: "صباح الخير! ماذا تريد؟" },
          { s: "U", task: "قل: صباح الخير! أريد 200 غرام من هذا الجبن هنا.", m: "Guten Morgen! Ich möchte 200 Gramm von diesem Käse hier.", ok: ["Guten Morgen ich möchte 200 Gramm von diesem Käse hier", "Guten Morgen ich hätte gern 200 Gramm von diesem Käse", "Guten Morgen ich möchte 200 Gramm von diesem Käse", "* 200 Gramm von diesem Käse *"], o: ["Guten Morgen! Ich möchte 200 Gramm von diesem Käse hier.", "Guten Morgen! Ich möchte 200 Gramm von dieser Käse hier.", "Guten Morgen! Ich möchte 200 Gramm von diesen Käse hier."], why: ["", "‹der Käse› مذكر و‹von› + Dativ → ‹diesem›.", "‹von› + Dativ: ‹diesem› وليس ‹diesen›."], ar: "صباح الخير! أريد 200 غرام من هذا الجبن هنا." },
          { s: "A", de: "Gern. Möchten Sie den jungen oder den alten Gouda?", ar: "بكل سرور. هل تريد الغودا الطري أم المعتّق؟" },
          { s: "U", task: "قل: الغودا الطري من فضلك. وأي زيتون حار؟", m: "Den jungen Gouda, bitte. Und welche Oliven sind scharf?", ok: ["Den jungen Gouda bitte und welche Oliven sind scharf", "Den jungen bitte und welche Oliven sind scharf", "* welche Oliven sind scharf"], o: ["Den jungen Gouda, bitte. Und welche Oliven sind scharf?", "Den junge Gouda, bitte. Und welche Oliven sind scharf?", "Den jungen Gouda, bitte. Und welcher Oliven sind scharf?"], why: ["", "مذكر Akkusativ بعد ‹den›: ‹jungen›.", "‹die Oliven› جمع → ‹welche›."], ar: "الغودا الطري من فضلك. وأي زيتون حار؟" },
          { s: "A", de: "Die grünen Oliven hier mit Chili. Möchten Sie mal probieren?", ar: "هذا الزيتون الأخضر بالفلفل الحار. هل تريد أن تتذوّق؟" },
          { s: "U", task: "تذوّق وقل: ممم، الزيتون الأخضر لذيذ جدًا! أعطيني 300 غرام من فضلك.", m: "Mmh, die grünen Oliven sind sehr lecker! Geben Sie mir bitte 300 Gramm.", ok: ["Mmh die grünen Oliven sind sehr lecker geben Sie mir bitte 300 Gramm", "Die grünen Oliven sind sehr lecker geben Sie mir bitte 300 Gramm", "* sehr lecker * 300 Gramm", "Die grünen Oliven sind lecker *"], o: ["Mmh, die grünen Oliven sind sehr lecker! Geben Sie mir bitte 300 Gramm.", "Mmh, die grüne Oliven sind sehr lecker! Geben Sie mir bitte 300 Gramm.", "Mmh, die grünen Oliven sind sehr lecker! Geben Sie mich bitte 300 Gramm."], why: ["", "الجمع بعد ‹die›: ‹grünen›.", "‹geben› + Dativ للشخص: ‹mir›."], ar: "ممم، الزيتون الأخضر لذيذ جدًا! أعطيني 300 غرام من فضلك." },
          { s: "A", de: "Sehr gern. Das macht zusammen 8,40 Euro.", ar: "بكل سرور. المجموع 8.40 يورو." }
        ]
      },
      listen: [
        { t: "listen", say: "Ich esse gern scharf, aber meine Frau mag lieber süße Gerichte.", q: "ماذا تحب الزوجة؟", o: ["الأطباق الحلوة", "الأكل الحار", "السمك"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Welchen Saft möchtest du? Den Apfelsaft oder den Orangensaft? – Den Orangensaft, bitte.", q: "أي عصير يريد؟", o: ["عصير البرتقال", "عصير التفاح", "الماء"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Mein Sohn ist allergisch gegen Milch. Er trinkt nur Hafermilch.", q: "ماذا يشرب الابن؟", o: ["حليب الشوفان", "حليب البقر", "العصير"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Der frische Fisch ist lecker.", tag: "hoeren" },
        { t: "dict", say: "Welchen Käse möchten Sie?", tag: "hoeren" }
      ]
    },

    /* ───────────── 15B ───────────── */
    {
      id: "15B", de: "Das Rezept", ar: "الوصفة",
      summary: "أدوات المطبخ وطرق الطبخ، وصفة الحريرة؛ المبني للمجهول في المضارع (Passiv Präsens): werden + Partizip II.",
      grammar: [
        {
          h: "Passiv Präsens: werden + اسم المفعول",
          p: "في الوصفات والتعليمات يهمّنا **ماذا يحدث** وليس **من يفعل**. لذلك نستعمل المبني للمجهول: ‹werden› (مصرّف) + Partizip II في **الآخر**.",
          table: {
            head: ["Aktiv (المعلوم)", "Passiv (المجهول)"],
            rows: [
              ["‹Man schneidet die Zwiebeln.›", "‹Die Zwiebeln **werden** klein **geschnitten**.›"],
              ["‹Man kocht das Wasser.›", "‹Das Wasser **wird** **gekocht**.›"],
              ["‹Man brät das Fleisch.›", "‹Das Fleisch **wird** in Öl **gebraten**.›"],
              ["‹Man serviert die Suppe heiß.›", "‹Die Suppe **wird** heiß **serviert**.›"]
            ]
          },
          tip: "مفرد → ‹wird›، جمع → ‹werden›: ‹Die Tomate wird geschnitten› / ‹Die Tomaten werden geschnitten›. وتذكّر: Partizip II = الشكل نفسه في Perfekt (‹geschnitten, gekocht, gebraten›)."
        },
        {
          h: "werden: ثلاثة استعمالات",
          table: {
            head: ["الاستعمال", "مثال"],
            rows: [
              ["يصبح (فعل كامل)", "‹Ich werde Koch.› ‹Es wird kalt.›"],
              ["المبني للمجهول (+ Partizip II)", "‹Das Brot wird gebacken.›"],
              ["المستقبل (+ مصدر) — في الدرس 17", "‹Ich werde morgen kochen.›"]
            ]
          }
        },
        {
          h: "ترتيب خطوات الوصفة",
          list: ["‹Zuerst werden die Linsen gewaschen.›", "‹Dann wird das Fleisch klein geschnitten.›", "‹Danach wird alles 45 Minuten gekocht.›", "‹Zum Schluss wird die Suppe mit Zitrone serviert.›"]
        }
      ],
      vocab: [
        ["n", "das", "Rezept", "-e", "الوصفة", "Hast du ein Rezept für Harira?", "هل عندك وصفة للحريرة؟"],
        ["n", "die", "Zutat", "-en", "المكوّن", "Welche Zutaten brauchen wir?", "ما المكوّنات التي نحتاجها؟"],
        ["n", "die", "Zwiebel", "-n", "البصلة", "Die Zwiebeln werden klein geschnitten.", "البصل يُقطع صغيرًا."],
        ["n", "der", "Knoblauch", "Sg.", "الثوم", "Ich mag keinen Knoblauch.", "لا أحب الثوم."],
        ["n", "die", "Kichererbse", "-n", "الحمّص", "Für Harira braucht man Kichererbsen.", "للحريرة نحتاج الحمّص."],
        ["n", "das", "Mehl", "Sg.", "الدقيق", "Für den Teig braucht man Mehl.", "للعجين نحتاج الدقيق."],
        ["n", "der", "Teig", "-e", "العجين", "Der Teig muss eine Stunde ruhen.", "العجين يجب أن يرتاح ساعة."],
        ["n", "die", "Petersilie", "Sg.", "البقدونس", "Die Petersilie wird gehackt.", "البقدونس يُفرم."],
        ["n", "der", "Koriander", "Sg.", "القزبر (الكزبرة)", "Koriander gibt der Suppe einen guten Geschmack.", "القزبر يعطي الشوربة طعمًا جيدًا."],
        ["n", "der", "Kreuzkümmel", "Sg.", "الكمّون", "Ein Teelöffel Kreuzkümmel, bitte.", "ملعقة صغيرة من الكمّون من فضلك."],
        ["n", "der", "Topf", "¨-e", "القِدر", "Die Suppe kocht im großen Topf.", "الشوربة تطبخ في القدر الكبير."],
        ["n", "die", "Pfanne", "-n", "المقلاة", "Das Fleisch wird in der Pfanne gebraten.", "اللحم يُقلى في المقلاة."],
        ["n", "der", "Ofen", "¨", "الفرن", "Der Kuchen ist im Ofen.", "الكعكة في الفرن."],
        ["n", "die", "Schüssel", "-n", "الوعاء (الزلافة)", "Mischen Sie alles in einer Schüssel.", "اخلط كل شيء في وعاء."],
        ["n", "der", "Löffel", "-", "الملعقة", "Ein Löffel Zucker reicht.", "ملعقة سكر تكفي."],
        ["n", "das", "Messer", "-", "السكين", "Das Messer ist sehr scharf.", "السكين حادة جدًا."],
        ["v", "", "schneiden", "hat geschnitten", "يقطع", "Die Tomaten werden geschnitten.", "الطماطم تُقطع."],
        ["v", "", "schälen", "hat geschält", "يقشّر", "Die Kartoffeln werden geschält.", "البطاطس تُقشّر."],
        ["v", "", "braten", "brät, hat gebraten", "يقلي / يحمّر", "Das Fleisch wird kurz gebraten.", "اللحم يُحمّر قليلًا."],
        ["v", "", "mischen", "hat gemischt", "يخلط", "Mehl und Wasser werden gemischt.", "الدقيق والماء يُخلطان."],
        ["v", "", "würzen", "hat gewürzt", "يتبّل", "Die Suppe wird mit Salz und Pfeffer gewürzt.", "الشوربة تُتبّل بالملح والفلفل."],
        ["v", "", "umrühren", "rührt um, hat umgerührt", "يحرّك", "Die Soße wird ab und zu umgerührt.", "الصلصة تُحرّك من حين لآخر."],
        ["v", "", "dazugeben", "gibt dazu, hat dazugegeben", "يضيف", "Dann werden die Linsen dazugegeben.", "ثم يُضاف العدس."],
        ["v", "", "servieren", "hat serviert", "يقدّم (الطعام)", "Die Harira wird mit Datteln serviert.", "الحريرة تُقدّم مع التمر."],
        ["v", "", "werden", "wird, ist geworden", "يصبح / (للمجهول)", "Das Wasser wird gekocht.", "الماء يُغلى."],
        ["a", "", "fein", "", "ناعم / رفيع", "Die Zwiebeln werden fein gehackt.", "البصل يُفرم ناعمًا."],
        ["a", "", "gar", "", "ناضج (مطبوخ)", "Das Fleisch ist gar.", "اللحم ناضج."],
        ["d", "", "ab und zu", "", "من حين لآخر", "Ab und zu umrühren.", "يُحرّك من حين لآخر."],
        ["x", "", "eine Prise Salz", "", "رشة ملح", "Eine Prise Salz dazugeben.", "تُضاف رشة ملح."]
      ],
      phrases: [
        ["Zuerst werden die Zwiebeln klein geschnitten.", "أولًا يُقطع البصل صغيرًا."],
        ["Dann wird das Fleisch in Öl gebraten.", "ثم يُحمّر اللحم في الزيت."],
        ["Danach wird alles 45 Minuten gekocht.", "بعد ذلك يُطبخ كل شيء 45 دقيقة."],
        ["Die Suppe wird mit Zitrone und Datteln serviert.", "تُقدّم الشوربة بالليمون والتمر."],
        ["Welche Zutaten brauchen wir?", "ما المكوّنات التي نحتاجها؟"],
        ["Ab und zu umrühren!", "حرّك من حين لآخر!"],
        ["Das riecht fantastisch!", "رائحته رائعة!"]
      ],
      ex: [
        { t: "gap", q: "أكمل بـ wird / werden.", s: "Die Zwiebeln ___ klein geschnitten.", a: ["werden"], why: "‹die Zwiebeln› جمع → ‹werden›.", tag: "passiv" },
        { t: "gap", q: "أكمل بـ wird / werden.", s: "Das Wasser ___ gekocht.", a: ["wird"], why: "‹das Wasser› مفرد → ‹wird›.", tag: "passiv" },
        { t: "gap", q: "أكمل باسم المفعول.", s: "Das Fleisch wird in der Pfanne ___. (braten)", a: ["gebraten"], why: "‹braten → gebraten›.", tag: "passiv" },
        { t: "gap", q: "أكمل باسم المفعول.", s: "Die Kartoffeln werden ___. (schälen)", a: ["geschält"], why: "‹schälen → geschält›.", tag: "passiv" },
        { t: "gap", q: "أكمل باسم المفعول (فعل منفصل).", s: "Dann werden die Linsen ___. (dazugeben)", a: ["dazugegeben"], why: "‹dazu + ge + geben›.", tag: "passiv" },
        { t: "mc", q: "حوّل إلى Passiv: «Man mischt Mehl und Wasser.»", o: ["Mehl und Wasser werden gemischt.", "Mehl und Wasser wird mischen.", "Mehl und Wasser haben gemischt."], a: 0, why: "‹werden› (جمع) + Partizip II.", tag: "passiv" },
        { t: "mc", q: "حوّل إلى Passiv: «Man serviert den Tee heiß.»", o: ["Der Tee wird heiß serviert.", "Den Tee wird heiß serviert.", "Der Tee werden heiß serviert."], a: 0, why: "المفعول ‹den Tee› يصبح فاعلًا ‹der Tee› + ‹wird›.", tag: "passiv" },
        { t: "mc", q: "ما معنى ‹werden› هنا؟ «Mein Bruder wird Koch.»", o: ["يصبح", "يُطبخ (مجهول)", "سوف (مستقبل)"], a: 0, why: "‹werden› + اسم = يصبح.", tag: "passiv" },
        { t: "order", q: "رتّب الجملة.", a: "Zuerst werden die Linsen gewaschen.", why: "بعد ‹Zuerst› الفعل ‹werden›، واسم المفعول في الآخر.", tag: "passiv" },
        { t: "order", q: "رتّب الجملة.", a: "Die Suppe wird mit Zitrone serviert.", why: "‹wird› ثانيًا و‹serviert› في الآخر.", tag: "passiv" },
        { t: "match", q: "صِل الفعل بمعناه.", pairs: [["schneiden", "يقطع"], ["schälen", "يقشّر"], ["braten", "يقلي"], ["würzen", "يتبّل"], ["umrühren", "يحرّك"]], tag: "wortschatz" },
        { t: "match", q: "صِل الأداة بمعناها.", pairs: [["der Topf", "القدر"], ["die Pfanne", "المقلاة"], ["die Schüssel", "الوعاء"], ["das Messer", "السكين"]], tag: "wortschatz" },
        { t: "tr", q: "ترجم إلى الألمانية (Passiv).", ar: "البصل يُقطع.", a: ["Die Zwiebeln werden geschnitten.", "Die Zwiebel wird geschnitten."], tag: "passiv" },
        { t: "tr", q: "ترجم إلى الألمانية (Passiv).", ar: "الشاي يُقدّم ساخنًا.", a: ["Der Tee wird heiß serviert."], tag: "passiv" },
        { t: "read", title: "Rezept: Harira (marokkanische Suppe)", text: "Zutaten für 4 Personen: 200 g Lammfleisch, 1 Zwiebel, 100 g Linsen, 100 g Kichererbsen, 3 Tomaten, Petersilie, Koriander, Salz, Pfeffer, Kreuzkümmel, 2 Löffel Mehl. Zubereitung: Zuerst werden die Kichererbsen über Nacht in Wasser gelegt. Dann wird das Fleisch klein geschnitten und mit der Zwiebel in einem großen Topf gebraten. Danach werden Tomaten, Linsen, Kichererbsen und Gewürze dazugegeben. Alles wird mit zwei Litern Wasser 45 Minuten gekocht. Zum Schluss wird das Mehl mit etwas Wasser gemischt und in die Suppe gegeben. Die Harira wird heiß mit Datteln und Zitrone serviert.", tr: "المكوّنات لـ 4 أشخاص: 200 غ لحم خروف، بصلة، 100 غ عدس، 100 غ حمّص، 3 طماطم، بقدونس، قزبر، ملح، فلفل، كمّون، ملعقتان دقيق. التحضير: أولًا يوضع الحمّص في الماء طوال الليل. ثم يُقطع اللحم صغيرًا ويُحمّر مع البصل في قدر كبير. بعد ذلك تُضاف الطماطم والعدس والحمّص والتوابل. يُطبخ كل شيء مع لترين من الماء 45 دقيقة. في النهاية يُخلط الدقيق مع قليل من الماء ويُضاف إلى الشوربة. تُقدّم الحريرة ساخنة مع التمر والليمون.", items: [
          { t: "tf", s: "Die Kichererbsen werden über Nacht in Wasser gelegt.", a: true, why: "‹Zuerst werden die Kichererbsen über Nacht in Wasser gelegt.›" },
          { t: "tf", s: "Die Suppe kocht zwei Stunden.", a: false, why: "‹45 Minuten gekocht›." },
          { t: "tf", s: "Die Harira wird kalt serviert.", a: false, why: "‹wird heiß … serviert›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Wir kochen Harira", ar: "نطبخ الحريرة",
        scene: "صديقتك الألمانية ماري تريد تعلّم طبخ الحريرة. أنت تشرح لها الخطوات.",
        who: { A: "Marie" },
        lines: [
          { s: "A", de: "Ich habe alle Zutaten gekauft! Was machen wir zuerst?", ar: "اشتريت كل المكوّنات! ماذا نفعل أولًا؟" },
          { s: "U", task: "قل: أولًا يُقطع البصل واللحم صغيرًا.", m: "Zuerst werden die Zwiebel und das Fleisch klein geschnitten.", ok: ["Zuerst werden die Zwiebel und das Fleisch klein geschnitten", "Zuerst werden die Zwiebeln und das Fleisch klein geschnitten", "Zuerst werden das Fleisch und die Zwiebel klein geschnitten", "Zuerst schneiden wir die Zwiebel und das Fleisch klein", "Zuerst werden * geschnitten"], o: ["Zuerst werden die Zwiebel und das Fleisch klein geschnitten.", "Zuerst wird die Zwiebel und das Fleisch klein schneiden.", "Zuerst werden die Zwiebel und das Fleisch klein geschneidet."], why: ["", "Passiv: ‹werden› (شيئان) + Partizip II ‹geschnitten›.", "‹schneiden› شاذ: ‹geschnitten›."], ar: "أولًا يُقطع البصل واللحم صغيرًا." },
          { s: "A", de: "Okay, fertig! Und dann?", ar: "حسنًا، انتهيت! ثم؟" },
          { s: "U", task: "قل: ثم يُحمّر اللحم مع البصل في القدر. وبعد ذلك تُضاف الطماطم والتوابل.", m: "Dann wird das Fleisch mit der Zwiebel im Topf gebraten. Danach werden die Tomaten und die Gewürze dazugegeben.", ok: ["Dann wird das Fleisch mit der Zwiebel im Topf gebraten danach werden die Tomaten und die Gewürze dazugegeben", "Dann wird das Fleisch mit der Zwiebel gebraten danach werden die Tomaten und die Gewürze dazugegeben", "Dann wird das Fleisch * gebraten danach werden * dazugegeben", "Dann wird das Fleisch * gebraten *"], o: ["Dann wird das Fleisch mit der Zwiebel im Topf gebraten. Danach werden die Tomaten und die Gewürze dazugegeben.", "Dann wird das Fleisch mit der Zwiebel im Topf gebraten. Danach wird die Tomaten und die Gewürze dazugegeben.", "Dann wird das Fleisch mit der Zwiebel im Topf gebratet. Danach werden die Tomaten und die Gewürze dazugegeben."], why: ["", "الطماطم والتوابل جمع → ‹werden›.", "‹braten› → ‹gebraten›."], ar: "ثم يُحمّر اللحم مع البصل في القدر. بعد ذلك تُضاف الطماطم والتوابل." },
          { s: "A", de: "Das riecht schon super! Wie lange muss die Suppe kochen?", ar: "رائحتها رائعة من الآن! كم يجب أن تُطبخ الشوربة؟" },
          { s: "U", task: "قل: حوالي 45 دقيقة. ويُحرّك من حين لآخر.", m: "Ungefähr 45 Minuten. Und ab und zu wird umgerührt.", ok: ["Ungefähr 45 Minuten und ab und zu wird umgerührt", "Ungefähr 45 Minuten und ab und zu umrühren", "Etwa 45 Minuten und ab und zu wird umgerührt", "* 45 Minuten *"], o: ["Ungefähr 45 Minuten. Und ab und zu wird umgerührt.", "Ungefähr 45 Minuten. Und ab und zu wird umgerühren.", "Ungefähr 45 Minuten. Und ab und zu werden umgerührt."], why: ["", "Partizip II من ‹umrühren› = ‹umgerührt›.", "بدون فاعل محدد نستعمل ‹wird› (مفرد)."], ar: "حوالي 45 دقيقة. ويُحرّك من حين لآخر." },
          { s: "A", de: "Ich freue mich schon aufs Essen!", ar: "أتطلع إلى الأكل!" }
        ]
      },
      listen: [
        { t: "listen", say: "Zuerst wird der Ofen auf hundertachtzig Grad vorgeheizt.", q: "على كم درجة يُسخّن الفرن؟", o: ["180 درجة", "80 درجة", "100 درجة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Die Kartoffeln werden geschält und in kleine Stücke geschnitten.", q: "ماذا يُفعل بالبطاطس؟", o: ["تُقشّر وتُقطّع", "تُقلى", "تُغسل فقط"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Zum Schluss wird der Couscous mit Gemüse und Fleisch serviert.", q: "كيف يُقدّم الكسكس؟", o: ["مع الخضر واللحم", "مع السمك", "مع الحليب"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Die Zwiebeln werden geschnitten.", tag: "hoeren" },
        { t: "dict", say: "Das Wasser wird gekocht.", tag: "hoeren" }
      ]
    },

    /* ───────────── 15C ───────────── */
    {
      id: "15C", de: "Im Restaurant", ar: "في المطعم",
      summary: "قائمة الطعام، الطلب، الشكوى بأدب، الدفع؛ الصفة بدون أداة (frisches Brot, heiße Suppe) كما في القوائم والإعلانات.",
      grammar: [
        {
          h: "الصفة بدون أداة",
          p: "عندما لا توجد أداة (في القوائم، مع المواد، مع الجمع بلا أداة) تأخذ **الصفة** نهاية الأداة المعرفة:",
          table: {
            head: ["", "مذكر (der)", "محايد (das)", "مؤنث (die)", "جمع (die)"],
            rows: [
              ["Nominativ", "‹kalt**er** Kaffee›", "‹frisch**es** Brot›", "‹heiß**e** Suppe›", "‹frisch**e** Eier›"],
              ["Akkusativ", "‹kalt**en** Kaffee›", "‹frisch**es** Brot›", "‹heiß**e** Suppe›", "‹frisch**e** Eier›"],
              ["Dativ", "‹mit kalt**em** Kaffee›", "‹mit frisch**em** Brot›", "‹mit heiß**er** Suppe›", "‹mit frisch**en** Eiern›"]
            ]
          },
          tip: "انظر إلى نهاية ‹der/das/die/dem› وانقلها إلى الصفة: ‹der → kalter›، ‹das → frisches›، ‹dem → mit frischem›."
        },
        {
          h: "في المطعم: الطلب والشكوى",
          table: {
            head: ["الجملة", "المعنى"],
            rows: [
              ["‹Haben Sie einen Tisch für zwei Personen?›", "هل عندكم طاولة لشخصين؟"],
              ["‹Was können Sie empfehlen?›", "ماذا تنصحون؟"],
              ["‹Ist das Gericht mit Schweinefleisch?›", "هل الطبق بلحم الخنزير؟"],
              ["‹Entschuldigung, die Suppe ist leider kalt.›", "عذرًا، الشوربة باردة للأسف."],
              ["‹Ich habe den Salat ohne Zwiebeln bestellt.›", "طلبت السلطة بدون بصل."],
              ["‹Könnten Sie mir bitte ein neues Glas bringen?›", "هل يمكنك أن تحضر لي كأسًا جديدًا من فضلك؟"],
              ["‹Die Rechnung, bitte. – Zusammen oder getrennt?›", "الحساب من فضلك. – معًا أم منفصلًا؟"],
              ["‹Stimmt so.›", "احتفظ بالباقي."]
            ]
          }
        }
      ],
      vocab: [
        ["n", "die", "Speisekarte", "-n", "قائمة الطعام", "Können Sie mir die Speisekarte bringen?", "هل تحضر لي قائمة الطعام؟"],
        ["n", "die", "Rechnung", "-en", "الفاتورة / الحساب", "Die Rechnung, bitte!", "الحساب من فضلك!"],
        ["n", "die", "Beschwerde", "-n", "الشكوى", "Ich habe eine Beschwerde.", "عندي شكوى."],
        ["n", "die", "Reservierung", "-en", "الحجز", "Wir haben eine Reservierung auf den Namen Amrani.", "عندنا حجز باسم عمراني."],
        ["n", "das", "Tagesgericht", "-e", "طبق اليوم", "Das Tagesgericht ist heute Fisch.", "طبق اليوم سمك."],
        ["n", "die", "Beilage", "-n", "الطبق الجانبي", "Als Beilage gibt es Reis oder Kartoffeln.", "كطبق جانبي هناك أرز أو بطاطس."],
        ["n", "die", "Portion", "-en", "الحصة", "Die Portion ist sehr groß.", "الحصة كبيرة جدًا."],
        ["n", "die", "Serviette", "-n", "المنديل", "Könnten Sie mir eine Serviette bringen?", "هل تحضر لي منديلًا؟"],
        ["n", "die", "Gabel", "-n", "الشوكة", "Mir fehlt eine Gabel.", "تنقصني شوكة."],
        ["n", "die", "Bedienung", "Sg.", "الخدمة / النادل", "Die Bedienung war sehr freundlich.", "الخدمة كانت لطيفة جدًا."],
        ["n", "der", "Fleck", "-en", "البقعة", "Das Glas hat einen Fleck.", "الكأس عليه بقعة."],
        ["v", "", "reklamieren", "hat reklamiert", "يشتكي / يعترض", "Ich möchte das Essen reklamieren.", "أريد أن أشتكي من الأكل."],
        ["v", "", "empfehlen", "empfiehlt, hat empfohlen", "يوصي بـ", "Was können Sie uns empfehlen?", "ماذا توصينا؟"],
        ["v", "", "bestellen", "hat bestellt", "يطلب", "Ich habe einen Salat bestellt.", "طلبت سلطة."],
        ["v", "", "bringen", "hat gebracht", "يحضر", "Könnten Sie mir bitte Wasser bringen?", "هل تحضر لي ماءً من فضلك؟"],
        ["v", "", "zurückgehen lassen", "", "يعيد (طبقًا)", "Ich lasse die Suppe zurückgehen.", "أعيد الشوربة."],
        ["a", "", "heiß", "", "ساخن جدًا", "Vorsicht, die Suppe ist heiß!", "انتبه، الشوربة ساخنة!"],
        ["a", "", "kalt", "", "بارد", "Der Kaffee ist kalt.", "القهوة باردة."],
        ["a", "", "versalzen", "", "مالح جدًا (كثير الملح)", "Das Essen ist versalzen.", "الأكل مالح جدًا."],
        ["a", "", "zäh", "", "قاسٍ (لحم)", "Das Fleisch ist zäh.", "اللحم قاسٍ."],
        ["a", "", "hausgemacht", "", "مصنوع في المطعم / البيت", "Wir haben hausgemachte Nudeln.", "عندنا معكرونة مصنوعة في المطعم."],
        ["a", "", "halal", "", "حلال", "Ist das Fleisch halal?", "هل اللحم حلال؟"],
        ["x", "", "Stimmt so.", "", "احتفظ بالباقي.", "Das macht 18,50 Euro. – 20 Euro, stimmt so.", "المجموع 18.50 يورو. – 20 يورو، احتفظ بالباقي."],
        ["x", "", "Zusammen oder getrennt?", "", "معًا أم منفصلًا؟", "Zahlen Sie zusammen oder getrennt?", "تدفعون معًا أم منفصلين؟"]
      ],
      phrases: [
        ["Haben Sie einen Tisch für zwei Personen?", "هل عندكم طاولة لشخصين؟"],
        ["Was können Sie uns empfehlen?", "ماذا تنصحوننا؟"],
        ["Entschuldigung, die Suppe ist leider kalt.", "عذرًا، الشوربة باردة للأسف."],
        ["Ich habe den Salat ohne Zwiebeln bestellt.", "طلبت السلطة بدون بصل."],
        ["Könnten Sie mir bitte ein neues Glas bringen?", "هل يمكنك أن تحضر لي كأسًا جديدًا من فضلك؟"],
        ["Ist das Fleisch halal?", "هل اللحم حلال؟"],
        ["Die Rechnung, bitte. – Zusammen oder getrennt?", "الحساب من فضلك. – معًا أم منفصلًا؟"]
      ],
      ex: [
        { t: "gap", q: "أكمل نهاية الصفة (بدون أداة).", s: "Hier gibt es frisch___ Brot. (das Brot)", a: ["es"], why: "محايد بدون أداة: ‹frisches› (مثل ‹das›).", tag: "adjektiv" },
        { t: "gap", q: "أكمل نهاية الصفة (بدون أداة).", s: "Ich trinke gern kalt___ Tee. (der Tee, Akk.)", a: ["en"], why: "مذكر Akkusativ: ‹kalten› (مثل ‹den›).", tag: "adjektiv" },
        { t: "gap", q: "أكمل نهاية الصفة (بدون أداة).", s: "Heiß___ Suppe ist gut im Winter. (die Suppe)", a: ["e"], why: "مؤنث: ‹heiße› (مثل ‹die›).", tag: "adjektiv" },
        { t: "gap", q: "أكمل نهاية الصفة (Dativ بدون أداة).", s: "Fisch mit frisch___ Gemüse. (das Gemüse)", a: ["em"], why: "Dativ محايد: ‹frischem› (مثل ‹dem›).", tag: "adjektiv" },
        { t: "mc", q: "اختر الصحيح (قائمة طعام).", o: ["Hausgemachter Kuchen", "Hausgemachte Kuchen (مفرد)", "Hausgemachtes Kuchen"], a: 0, why: "‹der Kuchen› مذكر بدون أداة: ‹hausgemachter›.", tag: "adjektiv" },
        { t: "mc", q: "اختر الصحيح.", s: "Ich esse gern ___ Oliven.", o: ["grüne", "grünen", "grüner"], a: 0, why: "جمع Akkusativ بدون أداة: ‑e.", tag: "adjektiv" },
        { t: "mc", q: "اختر الشكوى المهذبة.", o: ["Entschuldigung, das Fleisch ist leider zäh.", "Das Fleisch ist schlecht! Bringen Sie neues!", "Ich zahle nicht."], a: 0, why: "‹Entschuldigung … leider …› = مهذب.", tag: "konjunktiv" },
        { t: "mc", q: "النادل يسأل: «Zusammen oder getrennt?» ماذا يعني؟", o: ["هل تدفعون معًا أم كل واحد وحده؟", "هل تأكلون معًا؟", "هل تريدون طاولة كبيرة؟"], a: 0, why: "سؤال عن الدفع.", tag: "wortschatz" },
        { t: "order", q: "رتّب الطلب المهذب.", a: "Könnten Sie mir bitte eine Gabel bringen?", why: "‹Könnten Sie› … و‹bringen› في الآخر.", tag: "konjunktiv" },
        { t: "order", q: "رتّب الشكوى.", a: "Ich habe den Salat ohne Zwiebeln bestellt.", why: "Perfekt: ‹habe … bestellt›.", tag: "perfekt" },
        { t: "match", q: "صِل المشكلة بمعناها.", pairs: [["versalzen", "مالح جدًا"], ["zäh", "قاسٍ"], ["kalt", "بارد"], ["der Fleck", "البقعة"]], tag: "wortschatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "الحساب من فضلك!", a: ["Die Rechnung, bitte!", "Die Rechnung bitte!", "Die Rechnung, bitte.", "Zahlen, bitte!"], tag: "wortschatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "هل اللحم حلال؟", a: ["Ist das Fleisch halal?"], tag: "wortschatz" },
        { t: "read", title: "Speisekarte – Restaurant Zum Hafen", text: "Vorspeisen: Frische Tomatensuppe mit hausgemachtem Brot – 5,90 €. Gemischter Salat mit gegrilltem Hähnchen – 8,50 €. Hauptgerichte: Gebratener Fisch mit jungem Gemüse und Reis – 16,90 €. Vegetarische Lasagne mit frischem Spinat – 12,50 €. Desserts: Warmer Apfelkuchen mit Vanilleeis – 5,50 €. Alle Fleischgerichte auf Wunsch auch halal. Montag Ruhetag.", tr: "المقبلات: شوربة طماطم طازجة مع خبز مصنوع في المطعم — 5.90 €. سلطة مشكّلة مع دجاج مشوي — 8.50 €. الأطباق الرئيسية: سمك مقلي مع خضر طرية وأرز — 16.90 €. لازانيا نباتية بالسبانخ الطازج — 12.50 €. الحلويات: كعكة تفاح دافئة مع آيس كريم الفانيليا — 5.50 €. كل أطباق اللحم حلال عند الطلب. الاثنين يوم الراحة.", items: [
          { t: "tf", s: "Die Lasagne ist ohne Fleisch.", a: true, why: "‹Vegetarische Lasagne›." },
          { t: "tf", s: "Der Fisch kostet weniger als 15 Euro.", a: false, why: "16,90 €." },
          { t: "tf", s: "Am Montag ist das Restaurant geschlossen.", a: true, why: "‹Montag Ruhetag›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Die Suppe ist kalt", ar: "الشوربة باردة",
        scene: "أنت في مطعم «زوم هافن». طلبت شوربة طماطم وسلطة بدون بصل. النادل يأتي ليسأل.",
        who: { A: "Kellner" },
        lines: [
          { s: "A", de: "Schmeckt es Ihnen?", ar: "هل يعجبك الأكل؟" },
          { s: "U", task: "اشتكِ بأدب: عذرًا، الشوربة باردة للأسف. وطلبت السلطة بدون بصل.", m: "Entschuldigung, die Suppe ist leider kalt. Und ich habe den Salat ohne Zwiebeln bestellt.", ok: ["Entschuldigung die Suppe ist leider kalt und ich habe den Salat ohne Zwiebeln bestellt", "Entschuldigung die Suppe ist kalt und ich habe den Salat ohne Zwiebeln bestellt", "* die Suppe ist leider kalt *", "* den Salat ohne Zwiebeln bestellt"], o: ["Entschuldigung, die Suppe ist leider kalt. Und ich habe den Salat ohne Zwiebeln bestellt.", "Entschuldigung, die Suppe ist leider kalt. Und ich bin den Salat ohne Zwiebeln bestellt.", "Die Suppe ist kalt! Und der Salat ist falsch! Das ist schlecht!"], why: ["", "‹bestellen› في Perfekt مع ‹haben›.", "الشكوى أفضل بأدب: ‹Entschuldigung … leider›."], ar: "عذرًا، الشوربة باردة للأسف. وطلبت السلطة بدون بصل." },
          { s: "A", de: "Oh, das tut mir sehr leid! Ich bringe Ihnen sofort eine heiße Suppe und einen neuen Salat.", ar: "آه، آسف جدًا! سأحضر لك فورًا شوربة ساخنة وسلطة جديدة." },
          { s: "U", task: "قل: شكرًا! وهل يمكنك أن تحضر لي ماءً بالغاز من فضلك؟", m: "Danke! Und könnten Sie mir bitte ein Wasser mit Kohlensäure bringen?", ok: ["Danke und könnten Sie mir bitte ein Wasser mit Kohlensäure bringen", "Danke könnten Sie mir bitte ein Wasser mit Kohlensäure bringen", "* könnten Sie mir bitte * bringen", "Danke und ein Wasser mit Kohlensäure bitte"], o: ["Danke! Und könnten Sie mir bitte ein Wasser mit Kohlensäure bringen?", "Danke! Und könnten Sie mich bitte ein Wasser mit Kohlensäure bringen?", "Danke! Und könnten Sie mir bitte ein Wasser mit Kohlensäure bringt?"], why: ["", "‹bringen› + Dativ للشخص: ‹mir›.", "بعد ‹könnten› المصدر: ‹bringen›."], ar: "شكرًا! وهل تحضر لي ماءً بالغاز من فضلك؟" },
          { s: "A", de: "Natürlich. Und als Entschuldigung bekommen Sie den Nachtisch gratis.", ar: "بالطبع. وكاعتذار تحصل على الحلوى مجانًا." },
          { s: "U", task: "قل: هذا لطيف جدًا! إذن آخذ كعكة التفاح الدافئة.", m: "Das ist sehr nett! Dann nehme ich den warmen Apfelkuchen.", ok: ["Das ist sehr nett dann nehme ich den warmen Apfelkuchen", "Das ist nett dann nehme ich den warmen Apfelkuchen", "* dann nehme ich den warmen Apfelkuchen", "* ich nehme den warmen Apfelkuchen"], o: ["Das ist sehr nett! Dann nehme ich den warmen Apfelkuchen.", "Das ist sehr nett! Dann nehme ich den warme Apfelkuchen.", "Das ist sehr nett! Dann ich nehme den warmen Apfelkuchen."], why: ["", "مذكر Akkusativ بعد ‹den›: ‹warmen›.", "بعد ‹Dann› الفعل مباشرة: ‹nehme ich›."], ar: "هذا لطيف جدًا! إذن آخذ كعكة التفاح الدافئة." }
        ]
      },
      listen: [
        { t: "listen", say: "Heute empfehle ich Ihnen den gebratenen Fisch mit frischem Gemüse.", q: "بماذا ينصح النادل؟", o: ["السمك المقلي مع الخضر", "اللازانيا", "الشوربة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Entschuldigung, das Fleisch ist leider ganz zäh. Kann ich etwas anderes bekommen?", q: "ما المشكلة؟", o: ["اللحم قاسٍ", "الأكل بارد", "الأكل مالح"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Das macht zusammen dreiundzwanzig Euro achtzig. – Hier sind fünfundzwanzig, stimmt so.", q: "كم يدفع الزبون؟", o: ["25 يورو", "23.80 يورو", "20 يورو"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Die Rechnung, bitte.", tag: "hoeren" },
        { t: "dict", say: "Die Suppe ist leider kalt.", tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "ich-Laut und ach-Laut", ar: "صوتا ch: ‹ich› و‹ach›",
    body: [
      { p: "الحرفان ‹ch› لهما في الألمانية صوتان حسب الحرف الذي قبلهما:" },
      { table: { head: ["الصوت", "متى؟", "أمثلة"], rows: [
        ["ach-Laut [x] = «خ»", "بعد ‹a, o, u, au›", "‹Bach, kochen, Kuchen, Knoblauch, auch›"],
        ["ich-Laut [ç] = «هـ/ش» ناعمة", "بعد ‹i, e, ä, ö, ü, ei, eu›، بعد ‹l, n, r›، وفي ‹‑chen›", "‹ich, Milch, Küche, Brötchen, leicht, durch›"],
        ["‹‑ig› في آخر الكلمة", "تُنطق مثل ‹ich›", "‹fettig, wenig, König, ruhig›"]
      ] } },
      { tip: "للعرب: ‹ach› = «خ» عادية (‹Kuchen› = «كوخن»). أما ‹ich› فليست «خ» ولا «ش»: ضع لسانك كأنك تقول «ي» واخرج الهواء بقوة: «إيهْ» مع احتكاك. ‹Küche› ≠ ‹Kuchen›: المطبخ ≠ الكعكة!" }
    ],
    drills: [
      { t: "listen", say: "der Kuchen", q: "أي صوت تسمع في ‹Kuchen›؟", o: ["«خ» (ach-Laut)", "ich-Laut الناعم", "«ك»"], a: 0, why: "بعد ‹u› → «خ»." },
      { t: "listen", say: "die Küche", q: "أي صوت تسمع في ‹Küche›؟", o: ["ich-Laut الناعم", "«خ» (ach-Laut)", "«ش» عربية"], a: 0, why: "بعد ‹ü› → ich-Laut." },
      { t: "listen", say: "die Milch", q: "أي صوت في آخر ‹Milch›؟", o: ["ich-Laut الناعم", "«خ»", "«ك»"], a: 0, why: "بعد ‹l› → ich-Laut." },
      { t: "listen", say: "fettig", q: "كيف تُنطق ‹‑ig›؟", o: ["مثل ‹ich›", "مثل «إغ»", "مثل «إك»"], a: 0, why: "‹‑ig› في الآخر = [ɪç]." },
      { t: "listen", say: "der Knoblauch", q: "أي صوت في آخر ‹Knoblauch›؟", o: ["«خ»", "ich-Laut الناعم"], a: 0, why: "بعد ‹au› → «خ»." }
    ],
    say: ["der Kuchen – die Küche", "kochen – die Köchin", "die Milch", "das Brötchen", "der Knoblauch", "fettig – wenig", "Ich koche in der Küche einen Kuchen.", "Möchtest du Milch oder lieber Tee?", "Das Brötchen ist leicht und lecker."]
  },

  write: [
    {
      ar: "اكتب وصفة طبق تحبه (50–70 كلمة): المكوّنات ثم الخطوات بـ Passiv (wird/werden + Partizip II) مع zuerst, dann, danach, zum Schluss.",
      de: "Mein Lieblingsrezept.",
      model: "Rezept: Marokkanischer Tee\nZutaten: grüner Tee, frische Minze, Zucker, Wasser.\nZuerst wird das Wasser gekocht. Dann wird ein Löffel grüner Tee in die Teekanne gegeben und kurz gewaschen. Danach werden die frische Minze und der Zucker dazugegeben. Das heiße Wasser wird in die Kanne gegossen. Zum Schluss wird der Tee in kleinen Gläsern serviert – von hoch oben!",
      check: ["قائمة المكوّنات", "Passiv بـ ‹wird› (مفرد)", "Passiv بـ ‹werden› (جمع)", "zuerst / dann / danach / zum Schluss", "صفة مع نهاية صحيحة"]
    },
    {
      ar: "كنت في مطعم وكانت هناك مشاكل (أكل بارد، انتظار طويل…). اكتب بريد شكوى مهذبًا (60 كلمة) إلى المطعم: متى كنت هناك، ما المشكلة، ماذا تتمنى (Konjunktiv II).",
      de: "Beschwerde an ein Restaurant.",
      model: "Sehr geehrte Damen und Herren,\nam Samstagabend war ich mit meiner Familie in Ihrem Restaurant. Leider mussten wir eine Stunde auf das Essen warten. Die Suppe war kalt und das Fleisch war sehr zäh. Ich habe auch einen Salat ohne Zwiebeln bestellt, aber er kam mit Zwiebeln. Ich wäre froh, wenn Sie mir einen Gutschein schicken könnten.\nMit freundlichen Grüßen\nKarim Amrani",
      check: ["متى كنت هناك (Präteritum/Perfekt)", "المشاكل مع صفات", "طلب بـ Konjunktiv II", "تحية وختام رسميان"]
    }
  ],
  tutor: [
    { title: "Im Restaurant", ar: "في المطعم", role: "ein freundlicher Kellner im Restaurant Zum Hafen in Hamburg", goal: "einen Tisch bekommen, nach Empfehlungen fragen, bestellen (Adjektivendungen: den frischen Fisch, heiße Suppe), höflich reklamieren und bezahlen (zusammen/getrennt, Stimmt so)", start: "Guten Abend und herzlich willkommen! Haben Sie reserviert?" },
    { title: "Zusammen kochen", ar: "نطبخ معًا", role: "Marie, eine deutsche Freundin, die ein marokkanisches Gericht lernen möchte", goal: "ein Rezept erklären (Passiv Präsens: wird/werden + Partizip II; zuerst, dann, danach), Zutaten und Küchengeräte benennen, Geschmack beschreiben", start: "Du hast versprochen, mir ein marokkanisches Rezept zu zeigen! Was kochen wir heute?" }
  ]
});

/* Lektion 16 (A2) — Lernen ein Leben lang */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 16,
  level: "A2",
  de: "Lernen ein Leben lang",
  ar: "التعلّم مدى الحياة",
  book: "منهج A2 · محتوى أصلي (المدرسة والجامعة والدورات)",
  goals: [
    "مقارنة النظام المدرسي في ألمانيا والمغرب",
    "التعبير عن الملكية والانتماء بحالة Genitiv: das Auto meines Vaters",
    "التعبير عن الهدف بـ um … zu: Ich lerne Deutsch, um in Deutschland zu studieren.",
    "وصف الأشخاص والأشياء بجملة موصولة: der Kurs, der abends stattfindet",
    "اختيار دورة والاستعلام عنها"
  ],
  units: [
    /* ───────────── 16A ───────────── */
    {
      id: "16A", de: "Schule hier und dort", ar: "المدرسة هنا وهناك",
      summary: "مراحل التعليم في ألمانيا والمغرب، المواد الدراسية، الذكريات المدرسية؛ حالة الإضافة Genitiv (des/der + ‑s).",
      grammar: [
        {
          h: "Genitiv: لمن؟ (wessen?)",
          p: "‹Genitiv› يعبّر عن الإضافة (مثل «كتابُ الأستاذِ»). في الكتابة واللغة الرسمية نستعمله كثيرًا:",
          table: {
            head: ["", "مذكر", "محايد", "مؤنث", "جمع"],
            rows: [
              ["الأداة المعرّفة", "‹des Lehrers›", "‹des Kindes›", "‹der Schule›", "‹der Schüler›"],
              ["الأداة النكرة / الملكية", "‹eines / meines Vaters›", "‹eines / meines Kindes›", "‹einer / meiner Mutter›", "‹meiner Eltern›"]
            ]
          },
          tip: "المذكر والمحايد: الأداة ‹des› **والاسم يأخذ ‑s أو ‑es** (‹des Vaters›، ‹des Kindes›). المؤنث والجمع: ‹der› بدون تغيير في الاسم."
        },
        {
          h: "Genitiv مع الأسماء الشخصية و von + Dativ",
          table: {
            head: ["Genitiv (مكتوب)", "von + Dativ (كلام)"],
            rows: [
              ["‹Mias Schule› (اسم + s بدون فاصلة علوية)", "‹die Schule von Mia›"],
              ["‹das Auto meines Vaters›", "‹das Auto von meinem Vater›"],
              ["‹der Direktor der Schule›", "‹der Direktor von der Schule›"]
            ]
          },
          tip: "في الكلام اليومي يفضّل الألمان ‹von› + Dativ. لكن يجب أن **تفهم** Genitiv في النصوص."
        },
        {
          h: "حروف مع Genitiv: wegen, während, trotz",
          ex: [["Wegen des Regens bleiben wir zu Hause.", "بسبب المطر نبقى في البيت."], ["Während des Studiums habe ich gejobbt.", "أثناء الدراسة عملت."], ["Trotz der Prüfung geht sie auf die Party.", "رغم الامتحان تذهب إلى الحفلة."]]
        },
        {
          h: "التعليم في ألمانيا",
          list: ["‹die Grundschule› (6–10 سنوات) = المدرسة الابتدائية", "‹das Gymnasium› → ‹das Abitur› = الثانوية → البكالوريا", "‹die Realschule / die Gesamtschule› = مدارس إعدادية/شاملة", "‹die Ausbildung› = تكوين مهني (نظام مزدوج: شركة + مدرسة مهنية)", "‹die Universität / die Hochschule› = الجامعة / المعهد العالي", "‹die Volkshochschule (VHS)› = معهد تعليم الكبار (دورات لغة وغيرها)"]
        }
      ],
      vocab: [
        ["n", "die", "Grundschule", "-n", "المدرسة الابتدائية", "Meine Tochter geht in die Grundschule.", "ابنتي تذهب إلى المدرسة الابتدائية."],
        ["n", "das", "Gymnasium", "=Gymnasien", "الثانوية (Gymnasium)", "Nach dem Gymnasium macht man Abitur.", "بعد الثانوية يجتاز المرء البكالوريا."],
        ["n", "die", "Klasse", "-n", "القسم / الفصل", "In meiner Klasse waren 40 Schüler.", "في قسمي كان 40 تلميذًا."],
        ["n", "das", "Fach", "¨-er", "المادة الدراسية", "Mein Lieblingsfach war Mathe.", "مادتي المفضلة كانت الرياضيات."],
        ["n", "die", "Note", "-n", "النقطة / العلامة", "Ich hatte gute Noten in Französisch.", "كانت عندي نقاط جيدة في الفرنسية."],
        ["n", "das", "Zeugnis", "-se", "كشف النقاط / الشهادة", "Am Ende des Jahres gibt es Zeugnisse.", "في نهاية السنة تُعطى كشوف النقاط."],
        ["n", "die", "Hausaufgabe", "-n", "الواجب المنزلي", "Hast du deine Hausaufgaben gemacht?", "هل أنجزت واجباتك؟"],
        ["n", "die", "Pause", "-n", "الاستراحة", "In der Pause spielen die Kinder.", "في الاستراحة يلعب الأطفال."],
        ["n", "der", "Direktor", "-en", "المدير", "Der Direktor der Schule ist streng.", "مدير المدرسة صارم."],
        ["n", "die", "Schuluniform", "-en", "الزي المدرسي", "In Marokko tragen viele Schüler eine Schuluniform.", "في المغرب يلبس كثير من التلاميذ زيًا مدرسيًا."],
        ["n", "das", "Schuljahr", "-e", "السنة الدراسية", "Das Schuljahr beginnt im September.", "السنة الدراسية تبدأ في شتنبر."],
        ["n", "die", "Ferien", "Pl.", "العطلة المدرسية", "In den Ferien fahren wir ans Meer.", "في العطلة نذهب إلى البحر."],
        ["n", "die", "Erinnerung", "-en", "الذكرى", "Ich habe schöne Erinnerungen an meine Schulzeit.", "عندي ذكريات جميلة عن أيام المدرسة."],
        ["n", "die", "Schulzeit", "Sg.", "فترة الدراسة المدرسية", "In meiner Schulzeit war ich sehr fleißig.", "في فترة دراستي كنت مجتهدًا جدًا."],
        ["n", "der", "Regen", "Sg.", "المطر", "Wegen des Regens fällt der Ausflug aus.", "بسبب المطر أُلغيت الرحلة."],
        ["v", "", "unterrichten", "hat unterrichtet", "يدرّس", "Meine Mutter unterrichtet Arabisch.", "أمي تدرّس العربية."],
        ["v", "", "bestehen", "hat bestanden", "ينجح (في امتحان)", "Ich habe die Prüfung bestanden!", "نجحت في الامتحان!"],
        ["v", "", "durchfallen", "fällt durch, ist durchgefallen", "يرسب", "Er ist leider durchgefallen.", "للأسف رسب."],
        ["v", "", "wiederholen", "hat wiederholt", "يعيد / يراجع", "Ich wiederhole die Grammatik.", "أراجع القواعد."],
        ["v", "", "sich erinnern (an + Akk.)", "hat sich erinnert", "يتذكّر", "Ich erinnere mich gern an meine Lehrerin.", "أتذكّر معلّمتي بسرور."],
        ["p", "", "wegen", "+ Gen.", "بسبب", "Wegen der Prüfung habe ich keine Zeit.", "بسبب الامتحان ليس عندي وقت."],
        ["p", "", "während", "+ Gen.", "أثناء", "Während des Unterrichts ist das Handy aus.", "أثناء الدرس يكون الهاتف مطفأ."],
        ["p", "", "trotz", "+ Gen.", "رغم", "Trotz des Regens gehen wir spazieren.", "رغم المطر نتمشى."],
        ["a", "", "streng", "", "صارم", "Unser Lehrer war sehr streng.", "معلمنا كان صارمًا جدًا."],
        ["a", "", "fleißig", "", "مجتهد", "Sie ist eine fleißige Schülerin.", "هي تلميذة مجتهدة."],
        ["a", "", "faul", "", "كسول", "Am Wochenende bin ich faul.", "في عطلة الأسبوع أكون كسولًا."],
        ["a", "", "staatlich", "", "حكومي / عمومي", "Ich war auf einer staatlichen Schule.", "كنت في مدرسة عمومية."],
        ["x", "", "die Schule von Mia / Mias Schule", "", "مدرسة ميا", "Mias Schule ist ganz in der Nähe.", "مدرسة ميا قريبة جدًا."]
      ],
      phrases: [
        ["Das ist das Auto meines Vaters.", "هذه سيارة أبي."],
        ["Der Direktor der Schule heißt Herr Alami.", "مدير المدرسة اسمه السيد العلمي."],
        ["Wegen des Regens bleiben wir zu Hause.", "بسبب المطر نبقى في البيت."],
        ["Während des Studiums habe ich gejobbt.", "أثناء الدراسة عملت."],
        ["Mein Lieblingsfach war Mathematik.", "مادتي المفضلة كانت الرياضيات."],
        ["Ich erinnere mich gern an meine Schulzeit.", "أتذكّر أيام المدرسة بسرور."],
        ["Ich habe die Prüfung bestanden!", "نجحت في الامتحان!"]
      ],
      ex: [
        { t: "mc", q: "اختر الصحيح (Genitiv).", s: "Das ist das Buch ___ Lehrers.", o: ["des", "der", "dem"], a: 0, why: "مذكر Genitiv: ‹des› + الاسم ‑s: ‹des Lehrers›.", tag: "genitiv" },
        { t: "mc", q: "اختر الصحيح (Genitiv).", s: "Der Name ___ Schule ist «Ibn Khaldoun».", o: ["der", "des", "die"], a: 0, why: "مؤنث Genitiv: ‹der Schule›.", tag: "genitiv" },
        { t: "mc", q: "اختر الصحيح (Genitiv).", s: "Das Zimmer ___ Kindes ist klein.", o: ["des", "der", "dem"], a: 0, why: "محايد Genitiv: ‹des Kindes›.", tag: "genitiv" },
        { t: "mc", q: "اختر الصحيح.", s: "Das ist das Auto ___ Vaters.", o: ["meines", "meiner", "meinem"], a: 0, why: "مذكر Genitiv: ‹meines Vaters›.", tag: "genitiv" },
        { t: "gap", q: "أكمل بنهاية الاسم (Genitiv).", s: "Das Handy des Schüler___ ist neu.", a: ["s"], why: "المذكر في Genitiv: ‹des Schülers›.", tag: "genitiv" },
        { t: "gap", q: "أكمل (Genitiv بالاسم).", s: "___ Schule ist ganz in der Nähe. (Mia)", a: ["Mias"], why: "اسم + s بدون فاصلة علوية: ‹Mias Schule›.", tag: "genitiv" },
        { t: "mc", q: "حوّل إلى الكلام اليومي: «das Fahrrad meiner Schwester»", o: ["das Fahrrad von meiner Schwester", "das Fahrrad von meine Schwester", "das Fahrrad für meiner Schwester"], a: 0, why: "‹von› + Dativ: ‹von meiner Schwester›.", tag: "genitiv" },
        { t: "mc", q: "اختر الصحيح.", s: "___ des Regens bleiben wir zu Hause.", o: ["Wegen", "Während", "Trotz"], a: 0, why: "سبب → ‹wegen›.", tag: "genitiv" },
        { t: "mc", q: "اختر الصحيح.", s: "___ des Studiums habe ich in einem Café gearbeitet.", o: ["Während", "Wegen", "Trotz"], a: 0, why: "في وقت → ‹während› (أثناء).", tag: "genitiv" },
        { t: "match", q: "صِل الكلمة بمعناها.", pairs: [["die Grundschule", "الابتدائية"], ["die Note", "النقطة"], ["bestehen", "ينجح"], ["durchfallen", "يرسب"], ["streng", "صارم"]], tag: "wortschatz" },
        { t: "order", q: "رتّب الجملة.", a: "Das ist das Auto meines Vaters.", why: "‹meines Vaters› = Genitiv بعد الاسم.", tag: "genitiv" },
        { t: "gap", q: "أكمل بحرف الجر.", s: "Ich erinnere mich gern ___ meine Schulzeit.", a: ["an"], why: "‹sich erinnern an› + Akkusativ.", tag: "verbpraep" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "نجحت في الامتحان!", a: ["Ich habe die Prüfung bestanden!", "Ich habe die Prüfung bestanden."], tag: "perfekt" },
        { t: "tr", q: "ترجم إلى الألمانية (كلام يومي).", ar: "هذه دراجة أخي.", a: ["Das ist das Fahrrad von meinem Bruder.", "Das ist das Fahrrad meines Bruders.", "Das ist das Rad von meinem Bruder."], tag: "genitiv" },
        { t: "read", title: "Meine Schulzeit in Marokko", text: "Ich bin in Meknès in die Schule gegangen. Die Grundschule war nur fünf Minuten vom Haus meiner Großeltern entfernt. In meiner Klasse waren fast vierzig Kinder und wir trugen alle eine weiße Schuluniform. Mein Lieblingsfach war Französisch, weil meine Lehrerin so lustig war. Mathematik fand ich schwer. Trotz der vielen Hausaufgaben hatten wir viel Spaß. Nach dem Abitur bin ich wegen des Studiums nach Rabat gezogen. Heute lerne ich Deutsch an der Volkshochschule in Köln.", tr: "ذهبت إلى المدرسة في مكناس. المدرسة الابتدائية كانت على بعد خمس دقائق فقط من بيت جدّي. في قسمي كان حوالي أربعين طفلًا وكنا كلنا نلبس زيًا مدرسيًا أبيض. مادتي المفضلة كانت الفرنسية، لأن معلّمتي كانت مرحة جدًا. الرياضيات وجدتها صعبة. رغم الواجبات الكثيرة كنا نستمتع كثيرًا. بعد البكالوريا انتقلت إلى الرباط بسبب الدراسة. اليوم أتعلم الألمانية في معهد تعليم الكبار في كولونيا.", items: [
          { t: "tf", s: "Die Grundschule war weit vom Haus der Großeltern.", a: false, why: "‹nur fünf Minuten … entfernt›." },
          { t: "tf", s: "Die Person mochte Französisch wegen der Lehrerin.", a: true, why: "‹weil meine Lehrerin so lustig war›." },
          { t: "tf", s: "Nach dem Abitur ist die Person wegen der Arbeit nach Rabat gezogen.", a: false, why: "‹wegen des Studiums›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Wie war deine Schulzeit?", ar: "كيف كانت أيام دراستك؟",
        scene: "زميلتك في الدورة إيفا تسألك عن المدرسة في المغرب.",
        who: { A: "Eva" },
        lines: [
          { s: "A", de: "Wie war die Schule in Marokko? Wart ihr viele Schüler in einer Klasse?", ar: "كيف كانت المدرسة في المغرب؟ هل كنتم تلاميذ كثيرين في القسم؟" },
          { s: "U", task: "قل: نعم، حوالي أربعين. وكنا نلبس زيًا مدرسيًا.", m: "Ja, ungefähr vierzig. Und wir haben eine Schuluniform getragen.", ok: ["Ja ungefähr vierzig und wir haben eine Schuluniform getragen", "Ja ungefähr 40 und wir haben eine Schuluniform getragen", "Ja etwa vierzig und wir haben eine Schuluniform getragen", "Ja ungefähr vierzig und wir trugen eine Schuluniform", "* eine Schuluniform getragen"], o: ["Ja, ungefähr vierzig. Und wir haben eine Schuluniform getragen.", "Ja, ungefähr vierzig. Und wir sind eine Schuluniform getragen.", "Ja, ungefähr vierzig. Und wir haben eine Schuluniform getragt."], why: ["", "‹tragen› في Perfekt مع ‹haben›.", "‹tragen› شاذ: ‹getragen›."], ar: "نعم، حوالي أربعين. وكنا نلبس زيًا مدرسيًا." },
          { s: "A", de: "Interessant! Und was war dein Lieblingsfach?", ar: "مثير! وما كانت مادتك المفضلة؟" },
          { s: "U", task: "قل: الفرنسية، بسبب معلّمتي. كانت مرحة جدًا.", m: "Französisch, wegen meiner Lehrerin. Sie war sehr lustig.", ok: ["Französisch wegen meiner Lehrerin sie war sehr lustig", "Französisch wegen meiner Lehrerin sie war lustig", "Französisch weil meine Lehrerin sehr lustig war", "Französisch wegen meiner Lehrerin *"], o: ["Französisch, wegen meiner Lehrerin. Sie war sehr lustig.", "Französisch, wegen meine Lehrerin. Sie war sehr lustig.", "Französisch, wegen meinem Lehrerin. Sie war sehr lustig."], why: ["", "‹wegen› + Genitiv، مؤنث: ‹meiner Lehrerin›.", "‹die Lehrerin› مؤنث → ‹meiner›."], ar: "الفرنسية، بسبب معلّمتي. كانت مرحة جدًا." },
          { s: "A", de: "Und hast du gute Noten gehabt?", ar: "وهل كانت عندك نقاط جيدة؟" },
          { s: "U", task: "قل: في الفرنسية نعم، لكن الرياضيات كانت صعبة. رغم ذلك نجحت في البكالوريا.", m: "In Französisch ja, aber Mathe war schwer. Trotzdem habe ich das Abitur bestanden.", ok: ["In Französisch ja aber Mathe war schwer trotzdem habe ich das Abitur bestanden", "In Französisch ja aber Mathematik war schwer trotzdem habe ich das Abitur bestanden", "* trotzdem habe ich das Abitur bestanden", "* aber Mathe war schwer *"], o: ["In Französisch ja, aber Mathe war schwer. Trotzdem habe ich das Abitur bestanden.", "In Französisch ja, aber Mathe war schwer. Trotzdem ich habe das Abitur bestanden.", "In Französisch ja, aber Mathe war schwer. Trotzdem habe ich das Abitur bestehen."], why: ["", "بعد ‹Trotzdem› الفعل مباشرة: ‹habe ich›.", "Perfekt: ‹habe … bestanden›."], ar: "في الفرنسية نعم، لكن الرياضيات كانت صعبة. مع ذلك نجحت في البكالوريا." }
        ]
      },
      listen: [
        { t: "listen", say: "Wegen des Streiks gibt es morgen keinen Unterricht.", q: "لماذا لا يوجد درس غدًا؟", o: ["بسبب الإضراب", "بسبب المطر", "بسبب العطلة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Die Lehrerin meines Sohnes hat mich angerufen. Er hat seine Hausaufgaben vergessen.", q: "من اتصل؟", o: ["معلّمة الابن", "مدير المدرسة", "الابن"], a: 0, tag: "hoeren" },
        { t: "listen", say: "In Deutschland dauert die Grundschule meistens vier Jahre.", q: "كم تدوم الابتدائية غالبًا في ألمانيا؟", o: ["أربع سنوات", "ست سنوات", "خمس سنوات"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Das ist das Auto meines Vaters.", tag: "hoeren" },
        { t: "dict", say: "Ich habe die Prüfung bestanden.", tag: "hoeren" }
      ]
    },

    /* ───────────── 16B ───────────── */
    {
      id: "16B", de: "Warum lernst du Deutsch?", ar: "لماذا تتعلّم الألمانية؟",
      summary: "أهداف تعلّم اللغة، نصائح للتعلّم؛ التعبير عن الهدف بـ um … zu + مصدر، والمقارنة مع weil.",
      grammar: [
        {
          h: "الهدف: um … zu + مصدر",
          p: "للتعبير عن **الهدف** (لكي) عندما يكون الفاعل نفسه في الجملتين، نستعمل ‹um› في البداية و‹zu› + المصدر في **الآخر**:",
          table: {
            head: ["الجملة الرئيسية", "um … zu + مصدر"],
            rows: [
              ["‹Ich lerne Deutsch,›", "‹um in Deutschland **zu studieren**.›"],
              ["‹Sie spart Geld,›", "‹um ein Auto **zu kaufen**.›"],
              ["‹Ich höre Podcasts,›", "‹um mein Hörverstehen **zu verbessern**.›"],
              ["‹Er steht früh auf,›", "‹um den Bus **zu erreichen**.›"],
              ["‹Wir gehen in die Stadt,›", "‹um Freunde **zu treffen**.›"]
            ]
          },
          tip: "مع الفعل المنفصل تدخل ‹zu› في الوسط: ‹um früh auf**zu**stehen›، ‹um sie an**zu**rufen›. وبعد ‹um … zu› لا يوجد فاعل!"
        },
        {
          h: "weil (سبب) أم um … zu (هدف)؟",
          table: {
            head: ["السؤال", "الجواب"],
            rows: [
              ["‹Warum lernst du Deutsch?›", "‹Weil ich in Deutschland arbeiten **möchte**.› (سبب، الفعل في الآخر)"],
              ["‹Wozu lernst du Deutsch?›", "‹Um in Deutschland **zu arbeiten**.› (هدف، بدون فاعل)"]
            ]
          },
          tip: "إذا كان الفاعلان مختلفين لا يمكن ‹um … zu›: نستعمل ‹damit› (B1): ‹Ich spreche langsam, damit du mich verstehst.›"
        },
        {
          h: "zum + مصدر كاسم",
          p: "بديل قصير: ‹zum Lernen› (للتعلّم)، ‹zum Einkaufen› (للتسوّق)، ‹zum Arbeiten›: ‹Ich brauche Ruhe zum Lernen.›",
          ex: [["Ich brauche das Wörterbuch zum Übersetzen.", "أحتاج القاموس للترجمة."], ["Ich gehe zum Einkaufen in die Stadt.", "أذهب إلى المدينة للتسوّق."]]
        }
      ],
      vocab: [
        ["n", "das", "Ziel", "-e", "الهدف", "Mein Ziel ist das Niveau B1.", "هدفي هو مستوى B1."],
        ["n", "das", "Niveau", "-s", "المستوى", "Welches Niveau hast du?", "ما مستواك؟"],
        ["n", "die", "Fremdsprache", "-n", "اللغة الأجنبية", "Deutsch ist meine dritte Fremdsprache.", "الألمانية لغتي الأجنبية الثالثة."],
        ["n", "die", "Aussprache", "Sg.", "النطق", "Meine Aussprache wird besser.", "نطقي يتحسّن."],
        ["n", "der", "Wortschatz", "Sg.", "المفردات (رصيد)", "Ich lerne jeden Tag Wortschatz.", "أتعلم المفردات كل يوم."],
        ["n", "das", "Hörverstehen", "Sg.", "فهم المسموع", "Podcasts sind gut für das Hörverstehen.", "البودكاست مفيد لفهم المسموع."],
        ["n", "die", "Übung", "-en", "التمرين", "Übung macht den Meister.", "التمرين يصنع المعلّم (المِران يصنع الإتقان)."],
        ["n", "der", "Fortschritt", "-e", "التقدّم", "Ich mache große Fortschritte.", "أحقق تقدّمًا كبيرًا."],
        ["n", "die", "Motivation", "Sg.", "الحافز", "Meine Motivation ist sehr groß.", "حافزي كبير جدًا."],
        ["n", "das", "Visum", "=Visa", "التأشيرة", "Für das Visum brauche ich ein Sprachzertifikat.", "للتأشيرة أحتاج شهادة لغة."],
        ["n", "das", "Zertifikat", "-e", "الشهادة", "Ich mache im Juni das Zertifikat A2.", "سأجتاز في يونيو شهادة A2."],
        ["n", "das", "Stipendium", "=Stipendien", "المنحة الدراسية", "Sie hat ein Stipendium bekommen.", "حصلت على منحة."],
        ["v", "", "verbessern", "hat verbessert", "يحسّن", "Ich möchte mein Deutsch verbessern.", "أريد أن أحسّن ألمانيتي."],
        ["v", "", "üben", "hat geübt", "يتمرّن", "Ich übe jeden Tag zehn Minuten.", "أتمرّن كل يوم عشر دقائق."],
        ["v", "", "sparen", "hat gespart", "يدّخر / يوفّر", "Ich spare Geld, um zu reisen.", "أدّخر المال لكي أسافر."],
        ["v", "", "erreichen", "hat erreicht", "يبلغ / يحقق", "Ich will das Niveau B1 erreichen.", "أريد أن أبلغ مستوى B1."],
        ["v", "", "übersetzen", "hat übersetzt", "يترجم", "Kannst du mir den Brief übersetzen?", "هل تترجم لي الرسالة؟"],
        ["v", "", "nachschlagen", "schlägt nach, hat nachgeschlagen", "يبحث (في القاموس)", "Ich schlage das Wort im Wörterbuch nach.", "أبحث عن الكلمة في القاموس."],
        ["v", "", "sich konzentrieren (auf + Akk.)", "hat sich konzentriert", "يركّز", "Ich konzentriere mich auf die Grammatik.", "أركّز على القواعد."],
        ["p", "", "um … zu", "+ Infinitiv", "لكي / من أجل", "Ich lerne Deutsch, um in Deutschland zu arbeiten.", "أتعلم الألمانية لكي أعمل في ألمانيا."],
        ["q", "", "wozu?", "", "لأي غرض؟", "Wozu brauchst du das Zertifikat?", "لأي غرض تحتاج الشهادة؟"],
        ["a", "", "fließend", "", "بطلاقة", "Sie spricht fließend Deutsch.", "تتكلم الألمانية بطلاقة."],
        ["a", "", "motiviert", "", "متحمّس", "Ich bin sehr motiviert.", "أنا متحمّس جدًا."],
        ["d", "", "jeden Tag", "", "كل يوم", "Ich lerne jeden Tag eine Stunde.", "أتعلم كل يوم ساعة."],
        ["x", "", "Übung macht den Meister.", "", "المِران يصنع الإتقان.", "Nicht aufgeben – Übung macht den Meister!", "لا تستسلم — المران يصنع الإتقان!"]
      ],
      phrases: [
        ["Ich lerne Deutsch, um in Deutschland zu studieren.", "أتعلم الألمانية لكي أدرس في ألمانيا."],
        ["Wozu brauchst du das Zertifikat? – Um ein Visum zu bekommen.", "لأي غرض تحتاج الشهادة؟ – لكي أحصل على تأشيرة."],
        ["Ich höre Podcasts, um mein Hörverstehen zu verbessern.", "أستمع إلى البودكاست لكي أحسّن فهمي للمسموع."],
        ["Ich stehe früh auf, um vor der Arbeit zu lernen.", "أستيقظ مبكرًا لكي أدرس قبل العمل."],
        ["Ich brauche Ruhe zum Lernen.", "أحتاج الهدوء للتعلّم."],
        ["Mein Ziel ist das Niveau B1 in acht Monaten.", "هدفي مستوى B1 في ثمانية أشهر."],
        ["Übung macht den Meister!", "المران يصنع الإتقان!"]
      ],
      ex: [
        { t: "order", q: "رتّب الجملة (um … zu).", a: "Ich lerne Deutsch, um in Deutschland zu studieren.", why: "‹um› في البداية، ‹zu studieren› في الآخر.", tag: "finalsatz" },
        { t: "order", q: "رتّب الجملة.", a: "Sie spart Geld, um ein Auto zu kaufen.", why: "‹um ein Auto zu kaufen›.", tag: "finalsatz" },
        { t: "gap", q: "أكمل (um … zu).", s: "Ich höre Podcasts, ___ mein Deutsch ___ verbessern.", a: ["um", "zu"], why: "‹um … zu› + المصدر.", tag: "finalsatz" },
        { t: "gap", q: "أكمل بالمصدر مع zu (فعل منفصل).", s: "Er steht um 5 Uhr auf, um früh ___. (anfangen)", a: ["anzufangen"], why: "‹an + zu + fangen›.", tag: "finalsatz" },
        { t: "mc", q: "اختر الصحيح.", s: "Ich gehe in die Bibliothek, ___ zu lernen.", o: ["um", "weil", "dass"], a: 0, why: "هدف + ‹zu› في الآخر → ‹um›.", tag: "finalsatz" },
        { t: "mc", q: "اختر الصحيح.", s: "Ich gehe in die Bibliothek, ___ es dort ruhig ist.", o: ["weil", "um", "um zu"], a: 0, why: "سبب + فعل في الآخر → ‹weil›.", tag: "nebensatz" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Wir fahren in die Stadt, ___.", o: ["um Freunde zu treffen", "um zu treffen Freunde", "um wir Freunde treffen"], a: 0, why: "‹zu› + المصدر في **الآخر**، وبدون فاعل.", tag: "finalsatz" },
        { t: "mc", q: "اختر الجواب المناسب: «Wozu brauchst du das Wörterbuch?»", o: ["Zum Übersetzen.", "Weil das Übersetzen.", "Um Übersetzen."], a: 0, why: "‹zum› + مصدر كاسم = للغرض.", tag: "finalsatz" },
        { t: "mc", q: "أي جملة صحيحة؟", o: ["Ich spare, um nach Japan zu reisen.", "Ich spare, um ich nach Japan reise.", "Ich spare, um nach Japan reisen."], a: 0, why: "‹um … zu reisen› — بدون فاعل ومع ‹zu›.", tag: "finalsatz" },
        { t: "match", q: "صِل الكلمة بمعناها.", pairs: [["das Ziel", "الهدف"], ["die Aussprache", "النطق"], ["verbessern", "يحسّن"], ["das Stipendium", "المنحة"], ["fließend", "بطلاقة"]], tag: "wortschatz" },
        { t: "gap", q: "أكمل بحرف الجر.", s: "Ich konzentriere mich ___ die Aussprache.", a: ["auf"], why: "‹sich konzentrieren auf› + Akkusativ.", tag: "verbpraep" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أتعلم الألمانية لكي أعمل في ألمانيا.", a: ["Ich lerne Deutsch, um in Deutschland zu arbeiten."], tag: "finalsatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أحتاج الهدوء للتعلّم.", a: ["Ich brauche Ruhe zum Lernen.", "Zum Lernen brauche ich Ruhe."], tag: "finalsatz" },
        { t: "read", title: "Tipps zum Deutschlernen", text: "Viele Lernende fragen: Wie lerne ich schneller? Hier sind fünf Tipps. 1. Lernen Sie jeden Tag ein bisschen – zwanzig Minuten jeden Tag sind besser als drei Stunden am Sonntag. 2. Hören Sie deutsche Podcasts oder Radio, um Ihr Hörverstehen zu verbessern. 3. Sprechen Sie laut, auch allein, um die Aussprache zu üben. 4. Schreiben Sie neue Wörter immer mit Artikel und Plural auf. 5. Suchen Sie einen Tandempartner, um mit Muttersprachlern zu sprechen. Und vergessen Sie nicht: Fehler sind normal!", tr: "كثير من المتعلمين يسألون: كيف أتعلم أسرع؟ هذه خمس نصائح. 1. تعلّم قليلًا كل يوم — عشرون دقيقة يوميًا أفضل من ثلاث ساعات يوم الأحد. 2. استمع إلى بودكاست أو راديو ألماني لكي تحسّن فهمك للمسموع. 3. تكلّم بصوت عالٍ، حتى وحدك، لكي تتمرن على النطق. 4. اكتب الكلمات الجديدة دائمًا مع الأداة والجمع. 5. ابحث عن شريك تبادل لغوي لكي تتحدث مع ناطقين أصليين. ولا تنسَ: الأخطاء طبيعية!", items: [
          { t: "tf", s: "Drei Stunden am Sonntag sind besser als jeden Tag zwanzig Minuten.", a: false, why: "العكس: ‹zwanzig Minuten jeden Tag sind besser›." },
          { t: "tf", s: "Man soll laut sprechen, um die Aussprache zu üben.", a: true, why: "‹Sprechen Sie laut … um die Aussprache zu üben.›" },
          { t: "tf", s: "Der Text sagt, dass Fehler schlecht sind.", a: false, why: "‹Fehler sind normal!›" }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Warum Deutsch?", ar: "لماذا الألمانية؟",
        scene: "في أول يوم في دورة جديدة، المعلّمة السيدة برغر تسأل كل مشارك عن هدفه.",
        who: { A: "Frau Berger" },
        lines: [
          { s: "A", de: "Herzlich willkommen! Erzählen Sie mal: Warum lernen Sie Deutsch?", ar: "أهلًا وسهلًا! احكِ لنا: لماذا تتعلم الألمانية؟" },
          { s: "U", task: "قل: أتعلم الألمانية لكي أدرس في ألمانيا. هدفي مستوى B1.", m: "Ich lerne Deutsch, um in Deutschland zu studieren. Mein Ziel ist das Niveau B1.", ok: ["Ich lerne Deutsch um in Deutschland zu studieren mein Ziel ist das Niveau B1", "Ich lerne Deutsch um in Deutschland zu studieren mein Ziel ist B1", "Ich lerne Deutsch um in Deutschland zu arbeiten *", "* um in Deutschland zu studieren *", "* um in Deutschland zu arbeiten *"], o: ["Ich lerne Deutsch, um in Deutschland zu studieren. Mein Ziel ist das Niveau B1.", "Ich lerne Deutsch, um ich in Deutschland studiere. Mein Ziel ist das Niveau B1.", "Ich lerne Deutsch, um in Deutschland studieren. Mein Ziel ist das Niveau B1."], why: ["", "بعد ‹um› لا يوجد فاعل: ‹um … zu studieren›.", "لا تنسَ ‹zu› قبل المصدر."], ar: "أتعلم الألمانية لكي أدرس في ألمانيا. هدفي مستوى B1." },
          { s: "A", de: "Sehr gut! Und wie lernen Sie zu Hause?", ar: "جيد جدًا! وكيف تتعلم في البيت؟" },
          { s: "U", task: "قل: أتعلم كل يوم ساعة بتطبيق، وأستمع إلى بودكاست لكي أحسّن فهمي للمسموع.", m: "Ich lerne jeden Tag eine Stunde mit einer App und höre Podcasts, um mein Hörverstehen zu verbessern.", ok: ["Ich lerne jeden Tag eine Stunde mit einer App und höre Podcasts um mein Hörverstehen zu verbessern", "Ich lerne jeden Tag mit einer App und höre Podcasts um mein Hörverstehen zu verbessern", "* höre Podcasts um mein Hörverstehen zu verbessern", "* um mein Hörverstehen zu verbessern"], o: ["Ich lerne jeden Tag eine Stunde mit einer App und höre Podcasts, um mein Hörverstehen zu verbessern.", "Ich lerne jeden Tag eine Stunde mit einer App und höre Podcasts, um mein Hörverstehen verbessern zu.", "Ich lerne jeden Tag eine Stunde mit einer App und höre Podcasts, weil mein Hörverstehen zu verbessern."], why: ["", "الترتيب: ‹zu› ثم المصدر: ‹zu verbessern›.", "للهدف مع ‹zu› نستعمل ‹um›."], ar: "أتعلم كل يوم ساعة بتطبيق وأستمع إلى بودكاست لكي أحسّن فهمي للمسموع." },
          { s: "A", de: "Toll! Was ist für Sie am schwierigsten?", ar: "رائع! ما الأصعب بالنسبة لك؟" },
          { s: "U", task: "قل: النطق صعب، خاصة ü و ch. لذلك أتكلم بصوت عالٍ كل يوم.", m: "Die Aussprache ist schwer, besonders ü und ch. Deshalb spreche ich jeden Tag laut.", ok: ["Die Aussprache ist schwer besonders ü und ch deshalb spreche ich jeden Tag laut", "Die Aussprache ist schwierig besonders ü und ch deshalb spreche ich jeden Tag laut", "Die Aussprache ist schwer * deshalb spreche ich jeden Tag laut", "* deshalb spreche ich jeden Tag laut"], o: ["Die Aussprache ist schwer, besonders ü und ch. Deshalb spreche ich jeden Tag laut.", "Die Aussprache ist schwer, besonders ü und ch. Deshalb ich spreche jeden Tag laut.", "Die Aussprache ist schwer, besonders ü und ch. Trotzdem spreche ich jeden Tag laut."], why: ["", "بعد ‹Deshalb› الفعل مباشرة.", "هذه نتيجة → ‹Deshalb› وليس ‹Trotzdem›."], ar: "النطق صعب، خاصة ü و ch. لذلك أتكلم بصوت عالٍ كل يوم." },
          { s: "A", de: "Das ist eine sehr gute Strategie. Übung macht den Meister!", ar: "هذه استراتيجية جيدة جدًا. المران يصنع الإتقان!" }
        ]
      },
      listen: [
        { t: "listen", say: "Ich lerne Deutsch, um als Krankenpflegerin in Deutschland zu arbeiten.", q: "ما هدفها؟", o: ["أن تعمل ممرّضة في ألمانيا", "أن تدرس الطب", "أن تسافر سائحة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich stehe jeden Morgen eine halbe Stunde früher auf, um Vokabeln zu lernen.", q: "لماذا يستيقظ مبكرًا؟", o: ["ليتعلم المفردات", "ليذهب إلى العمل", "ليمارس الرياضة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Für das Visum brauche ich das Zertifikat B1. Die Prüfung ist im Mai.", q: "متى الامتحان؟", o: ["في ماي", "في مارس", "في يونيو"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Ich lerne Deutsch, um in Deutschland zu studieren.", tag: "hoeren" },
        { t: "dict", say: "Übung macht den Meister.", tag: "hoeren" }
      ]
    },

    /* ───────────── 16C ───────────── */
    {
      id: "16C", de: "Der passende Kurs", ar: "الدورة المناسبة",
      summary: "دورات معهد تعليم الكبار، التسجيل والاستعلام؛ الجمل الموصولة (Relativsätze) في Nominativ و Akkusativ و Dativ.",
      grammar: [
        {
          h: "الجملة الموصولة: der, die, das (الذي/التي)",
          p: "الجملة الموصولة تصف اسمًا. ضمير الوصل له **جنس الاسم**، وحالته حسب **دوره في الجملة الموصولة**. والفعل في **الآخر**.",
          table: {
            head: ["الاسم", "Nominativ (فاعل)", "Akkusativ (مفعول)"],
            rows: [
              ["‹der Kurs›", "‹Das ist ein Kurs, **der** abends **stattfindet**.›", "‹Das ist der Kurs, **den** ich **besuche**.›"],
              ["‹das Buch›", "‹Das ist ein Buch, **das** viele Übungen **hat**.›", "‹Das ist das Buch, **das** ich **brauche**.›"],
              ["‹die Lehrerin›", "‹Das ist die Lehrerin, **die** Spanisch **spricht**.›", "‹Das ist die Lehrerin, **die** ich sehr **mag**.›"],
              ["‹die Kurse› (جمع)", "‹Es gibt Kurse, **die** online **sind**.›", "‹Das sind die Kurse, **die** ich **empfehle**.›"]
            ]
          },
          tip: "ضمائر الوصل تشبه الأداة المعرّفة. الفرق الوحيد في Nominativ/Akkusativ: المذكر ‹der› (فاعل) و‹den› (مفعول)."
        },
        {
          h: "ضمير الوصل في Dativ",
          table: {
            head: ["الجنس", "Dativ", "مثال"],
            rows: [
              ["مذكر / محايد", "‹dem›", "‹Das ist der Lehrer, **dem** ich eine Frage gestellt habe.›"],
              ["مؤنث", "‹der›", "‹Das ist die Frau, **der** ich helfe.›"],
              ["جمع", "‹denen›", "‹Das sind die Kollegen, **mit denen** ich lerne.›"]
            ]
          },
          tip: "مع حرف جر: الحرف قبل ضمير الوصل: ‹der Kurs, **in dem** ich bin› / ‹die Freundin, **mit der** ich lerne›."
        },
        {
          h: "عند التسجيل في دورة",
          table: {
            head: ["الجملة", "المعنى"],
            rows: [
              ["‹Ich suche einen Kurs, der am Abend stattfindet.›", "أبحث عن دورة تقام مساءً."],
              ["‹Wie viele Teilnehmer hat der Kurs?›", "كم مشاركًا في الدورة؟"],
              ["‹Wann beginnt der Kurs und wie lange dauert er?›", "متى تبدأ الدورة وكم تدوم؟"],
              ["‹Gibt es einen Einstufungstest?›", "هل هناك اختبار تحديد المستوى؟"],
              ["‹Wie viel kostet die Kursgebühr?›", "كم رسوم الدورة؟"]
            ]
          }
        }
      ],
      vocab: [
        ["n", "die", "Volkshochschule", "-n", "معهد تعليم الكبار", "An der Volkshochschule gibt es viele Kurse.", "في معهد تعليم الكبار دورات كثيرة."],
        ["n", "der", "Kursleiter", "-", "مدرّس الدورة", "Der Kursleiter ist sehr geduldig.", "مدرّس الدورة صبور جدًا."],
        ["n", "die", "Kursleiterin", "-nen", "مدرّسة الدورة", "Die Kursleiterin kommt aus Wien.", "مدرّسة الدورة من فيينا."],
        ["n", "der", "Teilnehmer", "-", "المشارك", "Der Kurs hat zwölf Teilnehmer.", "الدورة فيها اثنا عشر مشاركًا."],
        ["n", "die", "Kursgebühr", "-en", "رسوم الدورة", "Die Kursgebühr beträgt 250 Euro.", "رسوم الدورة 250 يورو."],
        ["n", "der", "Einstufungstest", "-s", "اختبار تحديد المستوى", "Vor dem Kurs machen Sie einen Einstufungstest.", "قبل الدورة تجتاز اختبار تحديد المستوى."],
        ["n", "der", "Abendkurs", "-e", "دورة مسائية", "Ich besuche einen Abendkurs.", "أحضر دورة مسائية."],
        ["n", "der", "Intensivkurs", "-e", "دورة مكثفة", "Der Intensivkurs ist jeden Tag.", "الدورة المكثفة كل يوم."],
        ["n", "der", "Onlinekurs", "-e", "دورة عبر الإنترنت", "Ein Onlinekurs ist flexibel.", "الدورة عبر الإنترنت مرنة."],
        ["n", "die", "Anmeldung", "-en", "التسجيل", "Die Anmeldung ist bis Freitag möglich.", "التسجيل ممكن حتى الجمعة."],
        ["n", "die", "Weiterbildung", "-en", "التكوين المستمر", "Die Firma bezahlt meine Weiterbildung.", "الشركة تدفع تكويني المستمر."],
        ["n", "der", "Computerkurs", "-e", "دورة الحاسوب", "Meine Mutter macht einen Computerkurs.", "أمي تأخذ دورة حاسوب."],
        ["n", "die", "Teilnahme", "Sg.", "المشاركة / الحضور", "Am Ende bekommen Sie eine Teilnahmebestätigung.", "في النهاية تحصل على شهادة حضور."],
        ["v", "", "besuchen", "hat besucht", "يحضر (دورة) / يزور", "Ich besuche einen Deutschkurs.", "أحضر دورة ألمانية."],
        ["v", "", "teilnehmen (an + Dat.)", "nimmt teil, hat teilgenommen", "يشارك في", "Ich nehme an einem Kochkurs teil.", "أشارك في دورة طبخ."],
        ["v", "", "stattfinden", "findet statt, hat stattgefunden", "يقام / ينعقد", "Der Kurs findet dienstags statt.", "الدورة تقام أيام الثلاثاء."],
        ["v", "", "sich anmelden (für + Akk.)", "hat sich angemeldet", "يسجّل نفسه", "Ich melde mich für den Kurs an.", "أسجّل نفسي في الدورة."],
        ["v", "", "empfehlen", "empfiehlt, hat empfohlen", "يوصي بـ", "Welchen Kurs empfehlen Sie mir?", "أي دورة توصيني بها؟"],
        ["p", "", "der / die / das (Relativpronomen)", "", "الذي / التي", "Das ist der Kurs, der mir gefällt.", "هذه هي الدورة التي تعجبني."],
        ["a", "", "geduldig", "", "صبور", "Die Lehrerin ist sehr geduldig.", "المعلمة صبورة جدًا."],
        ["a", "", "passend", "", "مناسب", "Ich suche einen passenden Kurs.", "أبحث عن دورة مناسبة."],
        ["a", "", "berufsbegleitend", "", "إلى جانب العمل", "Der Kurs ist berufsbegleitend, abends und am Samstag.", "الدورة إلى جانب العمل، مساءً ويوم السبت."],
        ["d", "", "dienstags / abends", "", "أيام الثلاثاء / مساءً", "Ich habe dienstags und donnerstags Kurs.", "عندي دورة أيام الثلاثاء والخميس."],
        ["x", "", "Kurs für Anfänger / Fortgeschrittene", "", "دورة للمبتدئين / للمتقدمين", "Gibt es auch einen Kurs für Fortgeschrittene?", "هل هناك أيضًا دورة للمتقدمين؟"]
      ],
      phrases: [
        ["Ich suche einen Kurs, der am Abend stattfindet.", "أبحث عن دورة تقام مساءً."],
        ["Das ist die Lehrerin, die ich sehr mag.", "هذه هي المعلمة التي أحبها كثيرًا."],
        ["Das ist der Kurs, den ich besuche.", "هذه هي الدورة التي أحضرها."],
        ["Das sind die Kollegen, mit denen ich lerne.", "هؤلاء هم الزملاء الذين أتعلم معهم."],
        ["Gibt es einen Einstufungstest?", "هل هناك اختبار تحديد المستوى؟"],
        ["Wie viel kostet die Kursgebühr?", "كم رسوم الدورة؟"],
        ["Ich möchte mich für den Kurs A2.2 anmelden.", "أريد التسجيل في دورة A2.2."]
      ],
      ex: [
        { t: "mc", q: "اختر ضمير الوصل (Nominativ).", s: "Ich suche einen Kurs, ___ am Abend stattfindet.", o: ["der", "den", "das"], a: 0, why: "‹der Kurs› فاعل في الجملة الموصولة → ‹der›.", tag: "relativ" },
        { t: "mc", q: "اختر ضمير الوصل (Akkusativ).", s: "Das ist der Kurs, ___ ich besuche.", o: ["den", "der", "dem"], a: 0, why: "‹ich besuche den Kurs› → مفعول → ‹den›.", tag: "relativ" },
        { t: "mc", q: "اختر ضمير الوصل.", s: "Das ist die Lehrerin, ___ Spanisch spricht.", o: ["die", "der", "das"], a: 0, why: "مؤنث → ‹die›.", tag: "relativ" },
        { t: "mc", q: "اختر ضمير الوصل.", s: "Das ist das Buch, ___ ich brauche.", o: ["das", "den", "der"], a: 0, why: "محايد Akkusativ → ‹das›.", tag: "relativ" },
        { t: "mc", q: "اختر ضمير الوصل (جمع + Dativ).", s: "Das sind die Kollegen, mit ___ ich lerne.", o: ["denen", "den", "die"], a: 0, why: "جمع Dativ → ‹denen›.", tag: "relativ" },
        { t: "gap", q: "أكمل بضمير الوصل.", s: "Der Mann, ___ dort steht, ist mein Lehrer.", a: ["der"], why: "‹der Mann steht› → فاعل → ‹der›.", tag: "relativ" },
        { t: "gap", q: "أكمل بضمير الوصل.", s: "Die App, ___ ich benutze, ist kostenlos.", a: ["die"], why: "مؤنث Akkusativ → ‹die›.", tag: "relativ" },
        { t: "gap", q: "أكمل بضمير الوصل.", s: "Der Film, ___ wir gesehen haben, war super.", a: ["den"], why: "‹wir haben den Film gesehen› → ‹den›.", tag: "relativ" },
        { t: "gap", q: "أكمل بالفعل في آخر الجملة الموصولة.", s: "Das ist der Kurs, der dienstags ___. (stattfinden)", a: ["stattfindet"], why: "الفعل المنفصل يلتصق في الآخر: ‹stattfindet›.", tag: "relativ" },
        { t: "order", q: "رتّب الجملة.", a: "Ich suche einen Kurs, der am Abend stattfindet.", why: "ضمير الوصل ‹der› ثم … الفعل ‹stattfindet› في الآخر.", tag: "relativ" },
        { t: "match", q: "صِل الكلمة بمعناها.", pairs: [["die Volkshochschule", "معهد تعليم الكبار"], ["die Kursgebühr", "رسوم الدورة"], ["der Einstufungstest", "اختبار المستوى"], ["teilnehmen", "يشارك"], ["geduldig", "صبور"]], tag: "wortschatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أبحث عن دورة تقام مساءً.", a: ["Ich suche einen Kurs, der am Abend stattfindet.", "Ich suche einen Kurs, der abends stattfindet."], tag: "relativ" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "هذه هي المعلمة التي أحبها.", a: ["Das ist die Lehrerin, die ich mag.", "Das ist die Lehrerin, die ich gern mag.", "Das ist die Lehrerin, die ich sehr mag."], tag: "relativ" },
        { t: "read", title: "Kursprogramm der VHS Köln", text: "Deutsch A2.2 – Abendkurs: Für Teilnehmer, die schon A2.1 abgeschlossen haben. Dienstag und Donnerstag, 18:30 bis 21:00 Uhr, 12 Wochen. Kursgebühr: 240 Euro. — Deutsch A2 – Intensiv: Ein Kurs, der jeden Vormittag von Montag bis Freitag stattfindet. 8 Wochen, 390 Euro. — Prüfungstraining Goethe A2: Für alle, die im Juni die Prüfung machen möchten. Samstag, 10 bis 13 Uhr. Für neue Teilnehmer gibt es vor jedem Kurs einen kostenlosen Einstufungstest.", tr: "الألمانية A2.2 — دورة مسائية: للمشاركين الذين أنهوا A2.1. الثلاثاء والخميس 18:30–21:00، 12 أسبوعًا. الرسوم: 240 يورو. — الألمانية A2 — مكثفة: دورة تقام كل صباح من الاثنين إلى الجمعة. 8 أسابيع، 390 يورو. — التدريب على امتحان غوته A2: لكل من يريد اجتياز الامتحان في يونيو. السبت 10–13. للمشاركين الجدد هناك اختبار تحديد مستوى مجاني قبل كل دورة.", items: [
          { t: "tf", s: "Der Abendkurs findet zweimal pro Woche statt.", a: true, why: "‹Dienstag und Donnerstag›." },
          { t: "tf", s: "Der Intensivkurs ist teurer als der Abendkurs.", a: true, why: "390 € أكثر من 240 €." },
          { t: "tf", s: "Der Einstufungstest kostet 20 Euro.", a: false, why: "‹einen kostenlosen Einstufungstest›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Anmeldung an der VHS", ar: "التسجيل في معهد تعليم الكبار",
        scene: "تريد التسجيل في دورة ألمانية في معهد تعليم الكبار. تعمل نهارًا. الموظفة السيدة شولتس.",
        who: { A: "Frau Schulz" },
        lines: [
          { s: "A", de: "Guten Tag! Wie kann ich Ihnen helfen?", ar: "مرحبًا! كيف أساعدك؟" },
          { s: "U", task: "قل: أبحث عن دورة ألمانية تقام مساءً، لأنني أعمل نهارًا.", m: "Ich suche einen Deutschkurs, der am Abend stattfindet, weil ich tagsüber arbeite.", ok: ["Ich suche einen Deutschkurs der am Abend stattfindet weil ich tagsüber arbeite", "Ich suche einen Deutschkurs der abends stattfindet weil ich tagsüber arbeite", "Ich suche einen Kurs der am Abend stattfindet *", "* der am Abend stattfindet *", "* der abends stattfindet *"], o: ["Ich suche einen Deutschkurs, der am Abend stattfindet, weil ich tagsüber arbeite.", "Ich suche einen Deutschkurs, den am Abend stattfindet, weil ich tagsüber arbeite.", "Ich suche einen Deutschkurs, der findet am Abend statt, weil ich tagsüber arbeite."], why: ["", "الدورة فاعل في الجملة الموصولة → ‹der›.", "في الجملة الموصولة الفعل في الآخر: ‹stattfindet›."], ar: "أبحث عن دورة ألمانية تقام مساءً لأنني أعمل نهارًا." },
          { s: "A", de: "Da haben wir den Kurs A2.2, der dienstags und donnerstags von 18:30 bis 21 Uhr ist. Welches Niveau haben Sie?", ar: "عندنا دورة A2.2 التي تقام الثلاثاء والخميس من 18:30 إلى 21. ما مستواك؟" },
          { s: "U", task: "قل: أنهيت A2.1. هل هناك اختبار تحديد المستوى؟", m: "Ich habe A2.1 abgeschlossen. Gibt es einen Einstufungstest?", ok: ["Ich habe A2.1 abgeschlossen gibt es einen Einstufungstest", "Ich habe A2 1 abgeschlossen gibt es einen Einstufungstest", "* gibt es einen Einstufungstest", "Ich habe A2.1 gemacht gibt es einen Einstufungstest"], o: ["Ich habe A2.1 abgeschlossen. Gibt es einen Einstufungstest?", "Ich habe A2.1 abgeschlossen. Es gibt einen Einstufungstest?", "Ich bin A2.1 abgeschlossen. Gibt es einen Einstufungstest?"], why: ["", "سؤال نعم/لا يبدأ بالفعل: ‹Gibt es …?›", "‹abschließen› في Perfekt مع ‹haben›."], ar: "أنهيت A2.1. هل هناك اختبار تحديد المستوى؟" },
          { s: "A", de: "Ja, der Test ist kostenlos und dauert dreißig Minuten. Sie können ihn gleich heute machen.", ar: "نعم، الاختبار مجاني ويستغرق ثلاثين دقيقة. يمكنك إجراؤه اليوم." },
          { s: "U", task: "قل: ممتاز! وكم رسوم الدورة التي تقام مساءً؟", m: "Super! Und wie viel kostet der Kurs, der am Abend stattfindet?", ok: ["Super und wie viel kostet der Kurs der am Abend stattfindet", "Super wie viel kostet der Kurs der am Abend stattfindet", "* wie viel kostet der Kurs *", "* wie hoch ist die Kursgebühr"], o: ["Super! Und wie viel kostet der Kurs, der am Abend stattfindet?", "Super! Und wie viel kostet der Kurs, der am Abend findet statt?", "Super! Und wie viel kostet der Kurs, das am Abend stattfindet?"], why: ["", "الفعل في آخر الجملة الموصولة: ‹stattfindet›.", "‹der Kurs› مذكر → ‹der›."], ar: "ممتاز! وكم ثمن الدورة المسائية؟" },
          { s: "A", de: "Der Kurs kostet 240 Euro für zwölf Wochen. Ich gebe Ihnen gleich das Anmeldeformular.", ar: "الدورة بـ 240 يورو لاثني عشر أسبوعًا. سأعطيك استمارة التسجيل." }
        ]
      },
      listen: [
        { t: "listen", say: "Der Kurs, der am Samstag stattfindet, ist leider schon voll.", q: "ما مشكلة دورة السبت؟", o: ["ممتلئة", "ملغاة", "غالية"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Das ist Frau Yilmaz, die Kursleiterin, die mir so viel geholfen hat.", q: "من هي السيدة يلماز؟", o: ["مدرّسة الدورة", "زميلة في الدورة", "موظفة التسجيل"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich nehme an einem Computerkurs teil, den meine Firma bezahlt.", q: "من يدفع الدورة؟", o: ["الشركة", "هو نفسه", "المعهد"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Das ist der Kurs, den ich besuche.", tag: "hoeren" },
        { t: "dict", say: "Ich suche einen Kurs, der abends stattfindet.", tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "Das Murmel-e: -e, -en, -el, -er", ar: "حرف e المخفّف في آخر الكلمات",
    body: [
      { p: "في النهايات غير المنبورة ‹‑e, ‑en, ‑el, ‑er› لا يُنطق e كاملًا. يصبح صوتًا خفيفًا قصيرًا (Schwa ə)، وفي الكلام السريع يكاد يختفي:" },
      { table: { head: ["الكتابة", "النطق", "أمثلة"], rows: [
        ["‹‑e›", "[ə] خفيفة جدًا", "‹Schule, Klasse, bitte›"],
        ["‹‑en›", "غالبًا [n] فقط", "‹lernen ≈ lern'n, haben ≈ hab'm, schreiben›"],
        ["‹‑el›", "[l] تقريبًا", "‹Löffel, Mittel, Vogel›"],
        ["‹‑er›", "[ɐ] «ا» خفيفة", "‹Lehrer, Fenster, besser›"]
      ] } },
      { tip: "هذا مهم للاستماع أكثر من النطق: الألمان يقولون ‹wir ham› بدل ‹wir haben› و‹lern'n› بدل ‹lernen›. إذا عرفت ذلك ستفهم الكلام السريع أفضل. وانتبه: ‹Schule› ليست «شولي» ولا «شولا» تمامًا؛ النهاية خفيفة جدًا." }
    ],
    drills: [
      { t: "listen", say: "lernen", q: "كيف تُنطق النهاية ‹‑en›؟", o: ["خفيفة جدًا تقريبًا ‹lern'n›", "«إين» واضحة", "«آن»"], a: 0, why: "‹‑en› غير منبورة → Schwa أو تختفي." },
      { t: "listen", say: "die Schule", q: "كيف تُنطق ‹‑e› في الآخر؟", o: ["صوت خفيف قصير", "«إي» طويلة", "لا تُنطق أبدًا"], a: 0, why: "‹‑e› = [ə] خفيفة." },
      { t: "listen", say: "der Lehrer", q: "كيف تُنطق ‹‑er›؟", o: ["«ا» خفيفة", "«إير» مع راء واضحة"], a: 0, why: "‹‑er› في الآخر = [ɐ]." },
      { t: "listen", say: "der Löffel", q: "كيف تُنطق ‹‑el›؟", o: ["تقريبًا ‹Löff'l›", "«إيل» واضحة"], a: 0, why: "‹‑el› = [əl] خفيفة." }
    ],
    say: ["lernen – wir lernen", "die Schule", "die Klasse", "der Lehrer – die Lehrerin", "der Löffel", "besser", "Wir lernen jeden Abend in der Schule.", "Die Lehrerin erklärt die Regeln sehr gut.", "Wir haben heute keine Hausaufgaben."]
  },

  write: [
    {
      ar: "اكتب بريدًا (50–60 كلمة) لمعهد تعليم الكبار: تريد دورة ألمانية مسائية. صِف ما تبحث عنه بجملة موصولة (einen Kurs, der …)، واذكر هدفك بـ um … zu، واسأل عن الرسوم واختبار المستوى.",
      de: "Anfrage an die Volkshochschule.",
      model: "Sehr geehrte Damen und Herren,\nich suche einen Deutschkurs, der am Abend oder am Samstag stattfindet, weil ich tagsüber arbeite. Ich lerne Deutsch, um im nächsten Jahr in Deutschland zu studieren. Mein Niveau ist A2.1. Wie hoch ist die Kursgebühr? Gibt es vor dem Kurs einen Einstufungstest?\nMit freundlichen Grüßen\nKarim Amrani",
      check: ["جملة موصولة صحيحة (der/den/die … + الفعل في الآخر)", "هدف بـ ‹um … zu›", "مستواك", "سؤالان (الرسوم، الاختبار)", "تحية وختام رسميان"]
    },
    {
      ar: "اكتب نصًا (60–80 كلمة) عن أيام دراستك: المدرسة، المادة المفضلة، المعلم الذي تتذكره (جملة موصولة)، واستعمل Genitiv أو von + Dativ مرة واحدة على الأقل.",
      de: "Meine Schulzeit.",
      model: "Ich bin in Errachidia in die Schule gegangen. Die Schule meiner Kindheit war klein, aber schön. Mein Lieblingsfach war Geschichte. Ich erinnere mich besonders an Herrn Bennani, der uns jeden Tag eine Geschichte erzählt hat. Er war der Lehrer, den alle Schüler mochten. Wegen der vielen Hausaufgaben hatte ich wenig Freizeit, aber ich habe trotzdem jeden Nachmittag Fußball gespielt.",
      check: ["الماضي (Perfekt / war / hatte)", "جملة موصولة في Nominativ", "جملة موصولة في Akkusativ", "Genitiv أو ‹von› + Dativ", "‹wegen› أو ‹trotzdem›"]
    }
  ],
  tutor: [
    { title: "Kursberatung", ar: "استشارة حول دورة", role: "Frau Schulz, Mitarbeiterin der Volkshochschule Köln", goal: "einen passenden Kurs finden (Relativsätze: ein Kurs, der … / den …), nach Zeiten, Kosten und Einstufungstest fragen, das eigene Ziel mit um … zu nennen", start: "Guten Tag! Sie interessieren sich für einen Deutschkurs? Was für einen Kurs suchen Sie denn?" },
    { title: "Erinnerungen an die Schule", ar: "ذكريات المدرسة", role: "Jonas, ein deutscher Kommilitone, der über Schulsysteme diskutieren möchte", goal: "über die eigene Schulzeit sprechen (Perfekt, war/hatte), vergleichen (Komparativ), Genitiv / von + Dativ, wegen und trotz benutzen", start: "Bei uns in Deutschland gibt es so viele Schularten. Wie ist das Schulsystem in Marokko?" }
  ]
});

/* Lektion 17 (A2) — Natur und Umwelt */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 17,
  level: "A2",
  de: "Natur und Umwelt",
  ar: "الطبيعة والبيئة",
  book: "منهج A2 · محتوى أصلي (الطقس والمناخ وحماية البيئة والمدينة والريف)",
  goals: [
    "فهم نشرة الطقس والحديث عن المناخ",
    "التنبؤ بالمستقبل بـ werden + مصدر (Futur I) والاحتمال بـ wahrscheinlich / wohl",
    "الحديث عن حماية البيئة في الحياة اليومية",
    "التمنّي والشرط غير الواقعي: Wenn ich Zeit hätte, würde ich …",
    "الحديث عن الماضي بـ als (مرة واحدة) و wenn (تكرار)"
  ],
  units: [
    /* ───────────── 17A ───────────── */
    {
      id: "17A", de: "Wie wird das Wetter?", ar: "كيف سيكون الطقس؟",
      summary: "نشرة الطقس، الفصول والمناخ في ألمانيا والمغرب؛ المستقبل بـ werden + مصدر، والاحتمال: wahrscheinlich, vielleicht, wohl.",
      grammar: [
        {
          h: "المستقبل: werden + مصدر (Futur I)",
          p: "للتنبؤ أو الوعد أو الخطط البعيدة نستعمل ‹werden› (مصرّف) + المصدر في **الآخر**:",
          table: {
            head: ["الضمير", "werden", "مثال"],
            rows: [
              ["‹ich›", "‹werde›", "‹Ich werde nächstes Jahr in Berlin studieren.›"],
              ["‹du›", "‹wirst›", "‹Du wirst die Prüfung bestehen!›"],
              ["‹er/sie/es›", "‹wird›", "‹Morgen wird es regnen.›"],
              ["‹wir›", "‹werden›", "‹Wir werden euch besuchen.›"],
              ["‹ihr›", "‹werdet›", "‹Ihr werdet sehen!›"],
              ["‹sie/Sie›", "‹werden›", "‹Die Temperaturen werden steigen.›"]
            ]
          },
          tip: "في الكلام اليومي غالبًا يكفي المضارع مع ظرف زمن: ‹Morgen regnet es.› لكن في نشرة الطقس والتنبؤات والوعود نسمع ‹werden› كثيرًا."
        },
        {
          h: "الاحتمال",
          table: {
            head: ["الكلمة", "درجة اليقين", "مثال"],
            rows: [
              ["‹bestimmt / sicher›", "مؤكد تقريبًا", "‹Es wird bestimmt schön.›"],
              ["‹wahrscheinlich›", "محتمل جدًا", "‹Am Wochenende wird es wahrscheinlich schneien.›"],
              ["‹vielleicht›", "ربما", "‹Vielleicht gibt es ein Gewitter.›"],
              ["‹wohl›", "على الأرجح (تخمين)", "‹Er wird wohl im Stau stehen.›"]
            ]
          }
        },
        {
          h: "لغة نشرة الطقس",
          table: {
            head: ["الألمانية", "العربية"],
            rows: [
              ["‹Es ist bewölkt / sonnig / neblig.›", "الجو غائم / مشمس / ضبابي."],
              ["‹Es regnet / schneit / blitzt / donnert.›", "تمطر / تثلج / يلمع البرق / يرعد."],
              ["‹Die Temperaturen liegen bei 25 Grad.›", "درجات الحرارة حوالي 25."],
              ["‹Es wird kälter / wärmer.›", "سيصبح الجو أبرد / أدفأ."],
              ["‹Im Süden gibt es Gewitter.›", "في الجنوب عواصف رعدية."],
              ["‹Es ist minus fünf Grad.›", "الحرارة خمس درجات تحت الصفر."]
            ]
          }
        }
      ],
      vocab: [
        ["n", "die", "Wettervorhersage", "-n", "توقعات الطقس", "Hast du die Wettervorhersage gehört?", "هل سمعت توقعات الطقس؟"],
        ["n", "der", "Wetterbericht", "-e", "نشرة الطقس", "Der Wetterbericht sagt Regen.", "نشرة الطقس تقول مطر."],
        ["n", "das", "Klima", "Sg.", "المناخ", "Das Klima in Marokko ist warm.", "المناخ في المغرب دافئ."],
        ["n", "die", "Temperatur", "-en", "درجة الحرارة", "Die Temperaturen steigen.", "درجات الحرارة ترتفع."],
        ["n", "das", "Gewitter", "-", "العاصفة الرعدية", "Heute Abend gibt es ein Gewitter.", "هذا المساء ستكون هناك عاصفة رعدية."],
        ["n", "der", "Schnee", "Sg.", "الثلج", "Im Atlas liegt viel Schnee.", "في الأطلس ثلج كثير."],
        ["n", "der", "Nebel", "Sg.", "الضباب", "Am Morgen gibt es oft Nebel.", "في الصباح غالبًا ضباب."],
        ["n", "der", "Wind", "-e", "الريح", "Der Wind ist sehr stark.", "الريح قوية جدًا."],
        ["n", "der", "Sturm", "¨-e", "العاصفة", "Der Sturm hat viele Bäume umgeworfen.", "العاصفة أسقطت أشجارًا كثيرة."],
        ["n", "die", "Hitze", "Sg.", "الحرّ الشديد", "Im Sommer ist die Hitze in Errachidia groß.", "في الصيف الحر شديد في الراشيدية."],
        ["n", "die", "Kälte", "Sg.", "البرد الشديد", "Ich mag die Kälte nicht.", "لا أحب البرد."],
        ["n", "der", "Himmel", "Sg.", "السماء", "Der Himmel ist blau.", "السماء زرقاء."],
        ["n", "die", "Wolke", "-n", "الغيمة", "Am Himmel sind viele Wolken.", "في السماء غيوم كثيرة."],
        ["n", "der", "Süden / Norden / Osten / Westen", "Sg.", "الجنوب / الشمال / الشرق / الغرب", "Im Süden ist es wärmer.", "في الجنوب أدفأ."],
        ["v", "", "werden (Futur)", "wird + Infinitiv", "سوف (المستقبل)", "Morgen wird es regnen.", "غدًا ستمطر."],
        ["v", "", "regnen", "es regnet, hat geregnet", "تمطر", "Es regnet seit drei Tagen.", "تمطر منذ ثلاثة أيام."],
        ["v", "", "schneien", "es schneit, hat geschneit", "تثلج", "Im Januar schneit es oft.", "في يناير تثلج كثيرًا."],
        ["v", "", "scheinen", "hat geschienen", "تسطع (الشمس)", "Morgen scheint die Sonne.", "غدًا تسطع الشمس."],
        ["v", "", "steigen", "ist gestiegen", "يرتفع", "Die Temperaturen steigen auf 30 Grad.", "الحرارة ترتفع إلى 30 درجة."],
        ["v", "", "sinken", "ist gesunken", "ينخفض", "In der Nacht sinken die Temperaturen.", "في الليل تنخفض الحرارة."],
        ["a", "", "neblig", "", "ضبابي", "Es ist heute sehr neblig.", "الجو ضبابي جدًا اليوم."],
        ["a", "", "nass", "", "مبتل", "Die Straßen sind nass.", "الشوارع مبتلة."],
        ["a", "", "trocken", "", "جاف", "Der Sommer war sehr trocken.", "الصيف كان جافًا جدًا."],
        ["a", "", "feucht", "", "رطب", "Die Luft ist feucht.", "الهواء رطب."],
        ["d", "", "wahrscheinlich", "", "على الأرجح / غالبًا", "Morgen wird es wahrscheinlich regnen.", "غدًا على الأرجح ستمطر."],
        ["d", "", "bestimmt", "", "بالتأكيد", "Das wird bestimmt ein schöner Tag.", "سيكون بالتأكيد يومًا جميلًا."],
        ["d", "", "wohl", "", "على الأرجح (تخمين)", "Sie wird wohl schon schlafen.", "على الأرجح هي نائمة الآن."],
        ["x", "", "minus / plus fünf Grad", "", "ناقص / زائد خمس درجات", "In der Nacht hat es minus fünf Grad.", "في الليل الحرارة ناقص خمس درجات."]
      ],
      phrases: [
        ["Wie wird das Wetter morgen?", "كيف سيكون الطقس غدًا؟"],
        ["Morgen wird es wahrscheinlich regnen.", "غدًا على الأرجح ستمطر."],
        ["Am Wochenende wird die Sonne scheinen.", "في عطلة الأسبوع ستسطع الشمس."],
        ["Die Temperaturen werden auf 35 Grad steigen.", "ستصعد الحرارة إلى 35 درجة."],
        ["Ich werde nächstes Jahr in Deutschland studieren.", "سأدرس في ألمانيا السنة القادمة."],
        ["Du wirst die Prüfung bestimmt bestehen!", "ستنجح في الامتحان بالتأكيد!"],
        ["Im Süden gibt es heute Abend Gewitter.", "في الجنوب هذا المساء عواصف رعدية."]
      ],
      ex: [
        { t: "gap", q: "أكمل بـ werden.", s: "Morgen ___ es regnen.", a: ["wird"], why: "‹es› → ‹wird›.", tag: "futur" },
        { t: "gap", q: "أكمل بـ werden.", s: "Ich ___ nächstes Jahr in Berlin studieren.", a: ["werde"], why: "‹ich› → ‹werde›.", tag: "futur" },
        { t: "gap", q: "أكمل بـ werden.", s: "Du ___ die Prüfung bestimmt bestehen.", a: ["wirst"], why: "‹du› → ‹wirst›.", tag: "futur" },
        { t: "gap", q: "أكمل بـ werden.", s: "Die Temperaturen ___ steigen.", a: ["werden"], why: "جمع → ‹werden›.", tag: "futur" },
        { t: "mc", q: "اختر الترتيب الصحيح.", o: ["Am Wochenende wird die Sonne scheinen.", "Am Wochenende wird scheinen die Sonne.", "Am Wochenende die Sonne wird scheinen."], a: 0, why: "‹wird› ثانيًا والمصدر ‹scheinen› في الآخر.", tag: "futur" },
        { t: "mc", q: "ما معنى ‹werden› هنا؟ «Es wird kalt.»", o: ["يصبح (بدون مصدر)", "المستقبل", "المجهول"], a: 0, why: "‹werden› + صفة = يصبح.", tag: "futur" },
        { t: "mc", q: "ما معنى ‹werden› هنا؟ «Es wird schneien.»", o: ["المستقبل (+ مصدر)", "يصبح", "المجهول"], a: 0, why: "‹werden› + مصدر = المستقبل.", tag: "futur" },
        { t: "mc", q: "ما معنى ‹werden› هنا؟ «Die Straße wird repariert.»", o: ["المجهول (+ Partizip II)", "المستقبل", "يصبح"], a: 0, why: "‹werden› + Partizip II = Passiv.", tag: "passiv" },
        { t: "mc", q: "اختر الأنسب: «Der Himmel ist schwarz. ___ gibt es gleich ein Gewitter.»", o: ["Wahrscheinlich", "Gestern", "Nie"], a: 0, why: "تنبؤ محتمل → ‹Wahrscheinlich›.", tag: "futur" },
        { t: "match", q: "صِل الكلمة بمعناها.", pairs: [["das Gewitter", "العاصفة الرعدية"], ["der Nebel", "الضباب"], ["die Hitze", "الحرّ الشديد"], ["trocken", "جاف"], ["schneien", "تثلج"]], tag: "wortschatz" },
        { t: "order", q: "رتّب الجملة.", a: "Morgen wird es wahrscheinlich regnen.", why: "‹Morgen› + ‹wird› + ‹es› … ‹regnen› في الآخر.", tag: "futur" },
        { t: "tr", q: "ترجم إلى الألمانية (Futur).", ar: "غدًا ستسطع الشمس.", a: ["Morgen wird die Sonne scheinen.", "Die Sonne wird morgen scheinen."], tag: "futur" },
        { t: "tr", q: "ترجم إلى الألمانية (Futur).", ar: "سأزورك في الصيف.", a: ["Ich werde dich im Sommer besuchen.", "Im Sommer werde ich dich besuchen.", "Ich werde Sie im Sommer besuchen."], tag: "futur" },
        { t: "read", title: "Wetterbericht für das Wochenende", text: "Am Samstag wird es im Norden bewölkt sein und es wird immer wieder regnen. Die Temperaturen liegen bei 12 bis 15 Grad. Im Süden scheint dagegen die Sonne bei bis zu 22 Grad. Am Abend wird es in den Bergen Gewitter geben. Am Sonntag wird es überall freundlicher: Die Wolken verschwinden und es wird wärmer. In der Nacht sinken die Temperaturen aber auf 5 Grad. Nehmen Sie also eine Jacke mit!", tr: "يوم السبت سيكون الجو غائمًا في الشمال وستمطر من حين لآخر. درجات الحرارة بين 12 و15. أما في الجنوب فتسطع الشمس مع حتى 22 درجة. في المساء ستكون هناك عواصف رعدية في الجبال. يوم الأحد سيتحسّن الجو في كل مكان: تختفي الغيوم ويصبح الجو أدفأ. لكن في الليل تنخفض الحرارة إلى 5 درجات. لذلك خذ معك سترة!", items: [
          { t: "tf", s: "Am Samstag ist es im Süden wärmer als im Norden.", a: true, why: "الجنوب 22، الشمال 12–15." },
          { t: "tf", s: "Am Sonntag wird es überall regnen.", a: false, why: "‹Die Wolken verschwinden und es wird wärmer.›" },
          { t: "tf", s: "In der Nacht wird es kalt.", a: true, why: "‹sinken die Temperaturen aber auf 5 Grad›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Picknick am Sonntag?", ar: "نزهة يوم الأحد؟",
        scene: "صديقتك يسمينة تريد تنظيم نزهة يوم الأحد. أنت سمعت نشرة الطقس.",
        who: { A: "Yasmina" },
        lines: [
          { s: "A", de: "Wollen wir am Sonntag ein Picknick am See machen? Wie wird das Wetter?", ar: "هل نقوم بنزهة عند البحيرة يوم الأحد؟ كيف سيكون الطقس؟" },
          { s: "U", task: "قل: حسب نشرة الطقس ستسطع الشمس يوم الأحد. ستكون الحرارة 24 درجة.", m: "Laut Wetterbericht wird am Sonntag die Sonne scheinen. Es wird 24 Grad warm.", ok: ["Laut Wetterbericht wird am Sonntag die Sonne scheinen es wird 24 Grad warm", "Laut Wetterbericht wird am Sonntag die Sonne scheinen *", "Am Sonntag wird die Sonne scheinen *", "* wird die Sonne scheinen *"], o: ["Laut Wetterbericht wird am Sonntag die Sonne scheinen. Es wird 24 Grad warm.", "Laut Wetterbericht wird am Sonntag die Sonne scheint. Es wird 24 Grad warm.", "Laut Wetterbericht am Sonntag wird die Sonne scheinen. Es wird 24 Grad warm."], why: ["", "مع ‹wird› المصدر في الآخر: ‹scheinen›.", "بعد ‹Laut Wetterbericht› يأتي الفعل ‹wird› مباشرة."], ar: "حسب نشرة الطقس ستسطع الشمس يوم الأحد. ستكون 24 درجة." },
          { s: "A", de: "Super! Und am Samstag? Dann könnten wir alles vorbereiten.", ar: "رائع! ويوم السبت؟ يمكننا أن نحضّر كل شيء." },
          { s: "U", task: "قل: يوم السبت ستمطر على الأرجح. لكن يمكننا أن نطبخ في البيت.", m: "Am Samstag wird es wahrscheinlich regnen. Aber wir können zu Hause kochen.", ok: ["Am Samstag wird es wahrscheinlich regnen aber wir können zu Hause kochen", "Am Samstag regnet es wahrscheinlich aber wir können zu Hause kochen", "* wird es wahrscheinlich regnen *", "Am Samstag wird es regnen *"], o: ["Am Samstag wird es wahrscheinlich regnen. Aber wir können zu Hause kochen.", "Am Samstag es wird wahrscheinlich regnen. Aber wir können zu Hause kochen.", "Am Samstag wird es wahrscheinlich regnet. Aber wir können zu Hause kochen."], why: ["", "بعد ‹Am Samstag› الفعل ‹wird› مباشرة.", "مع ‹wird› المصدر: ‹regnen›."], ar: "يوم السبت ستمطر على الأرجح. لكن يمكننا أن نطبخ في البيت." },
          { s: "A", de: "Gute Idee! Ich bringe Obst mit. Was bringst du mit?", ar: "فكرة جيدة! سأحضر فواكه. ماذا ستحضر؟" },
          { s: "U", task: "قل: سأحضر الشاي بالنعناع والحلويات. سيكون بالتأكيد يومًا جميلًا!", m: "Ich werde Pfefferminztee und Süßigkeiten mitbringen. Das wird bestimmt ein schöner Tag!", ok: ["Ich werde Pfefferminztee und Süßigkeiten mitbringen das wird bestimmt ein schöner Tag", "Ich bringe Pfefferminztee und Süßigkeiten mit das wird bestimmt ein schöner Tag", "* das wird bestimmt ein schöner Tag", "Ich werde * mitbringen *"], o: ["Ich werde Pfefferminztee und Süßigkeiten mitbringen. Das wird bestimmt ein schöner Tag!", "Ich werde Pfefferminztee und Süßigkeiten bringen mit. Das wird bestimmt ein schöner Tag!", "Ich werde Pfefferminztee und Süßigkeiten mitbringen. Das wird bestimmt ein schönes Tag!"], why: ["", "مع ‹werde› المنفصل موصول في الآخر: ‹mitbringen›.", "‹der Tag› مذكر: ‹ein schöner Tag›."], ar: "سأحضر الشاي بالنعناع والحلويات. سيكون بالتأكيد يومًا جميلًا!" }
        ]
      },
      listen: [
        { t: "listen", say: "Morgen wird es im ganzen Land sonnig. Die Temperaturen steigen auf achtundzwanzig Grad.", q: "كم ستكون الحرارة؟", o: ["28 درجة", "18 درجة", "20 درجة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Heute Nacht wird es in den Bergen schneien. Fahren Sie bitte vorsichtig!", q: "ماذا سيحدث في الجبال؟", o: ["ستثلج", "ستمطر", "ستكون عاصفة رملية"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich werde nach dem Abitur ein Jahr in Kanada arbeiten.", q: "ماذا سيفعل بعد البكالوريا؟", o: ["يعمل سنة في كندا", "يدرس في كندا", "يسافر سائحًا"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Morgen wird es regnen.", tag: "hoeren" },
        { t: "dict", say: "Die Sonne wird scheinen.", tag: "hoeren" }
      ]
    },

    /* ───────────── 17B ───────────── */
    {
      id: "17B", de: "Wenn ich Bürgermeister wäre …", ar: "لو كنت رئيس البلدية …",
      summary: "حماية البيئة: القمامة، الماء، الطاقة، المواصلات؛ الشرط غير الواقعي والتمنّي بـ Konjunktiv II: hätte, wäre, würde + مصدر.",
      grammar: [
        {
          h: "Konjunktiv II: غير الواقعي (لو …)",
          p: "للحديث عن أشياء **غير حقيقية** أو أحلام نستعمل Konjunktiv II: ‹wäre› (من sein)، ‹hätte› (من haben)، و‹würde› + مصدر لباقي الأفعال.",
          table: {
            head: ["الواقع", "غير الواقعي (Konjunktiv II)"],
            rows: [
              ["‹Ich habe kein Auto.›", "‹Wenn ich ein Auto **hätte**, **würde** ich nach Spanien **fahren**.›"],
              ["‹Ich bin nicht reich.›", "‹Wenn ich reich **wäre**, **würde** ich ein Haus am Meer **kaufen**.›"],
              ["‹Ich habe keine Zeit.›", "‹Wenn ich mehr Zeit **hätte**, **würde** ich mehr **lesen**.›"],
              ["‹Er ist nicht Bürgermeister.›", "‹Wenn er Bürgermeister **wäre**, **würde** er mehr Parks **bauen**.›"]
            ]
          },
          tip: "الترتيب: ‹Wenn› + … + الفعل في الآخر، ثم الجملة الرئيسية تبدأ بالفعل: ‹…, **würde** ich … **machen**.› فعل، فعل!"
        },
        {
          h: "التمنّي بـ Konjunktiv II",
          table: {
            head: ["الصيغة", "مثال"],
            rows: [
              ["‹Ich hätte gern …›", "‹Ich hätte gern einen Garten.›"],
              ["‹Ich wäre gern …›", "‹Ich wäre gern am Meer.›"],
              ["‹Ich würde gern …›", "‹Ich würde gern mit dem Rad zur Arbeit fahren.›"],
              ["‹Es wäre schön, wenn …›", "‹Es wäre schön, wenn es mehr Bäume gäbe.›"]
            ]
          },
          tip: "تذكير من الدرس 10: ‹könnte, würde, hätte, wäre› تستعمل أيضًا للأدب. هنا نستعملها للأحلام وغير الواقعي."
        },
        {
          h: "عادات صديقة للبيئة",
          list: ["‹den Müll trennen› = فرز القمامة", "‹Strom / Wasser sparen› = توفير الكهرباء / الماء", "‹mit dem Fahrrad fahren / öffentliche Verkehrsmittel nehmen› = ركوب الدراجة / النقل العام", "‹Plastik vermeiden› = تجنّب البلاستيك", "‹regionale Produkte kaufen› = شراء منتجات محلية", "‹Licht ausmachen› = إطفاء الضوء"]
        }
      ],
      vocab: [
        ["n", "die", "Umwelt", "Sg.", "البيئة", "Wir müssen die Umwelt schützen.", "يجب أن نحمي البيئة."],
        ["n", "der", "Umweltschutz", "Sg.", "حماية البيئة", "Umweltschutz ist mir wichtig.", "حماية البيئة مهمة لي."],
        ["n", "der", "Bürgermeister", "-", "رئيس البلدية", "Der Bürgermeister will mehr Radwege bauen.", "رئيس البلدية يريد بناء مسالك دراجات أكثر."],
        ["n", "die", "Energie", "-n", "الطاقة", "Solarenergie ist in Marokko sehr wichtig.", "الطاقة الشمسية مهمة جدًا في المغرب."],
        ["n", "der", "Strom", "Sg.", "الكهرباء (التيار)", "Wir sparen Strom.", "نوفّر الكهرباء."],
        ["n", "das", "Plastik", "Sg.", "البلاستيك", "Am Strand liegt viel Plastik.", "على الشاطئ بلاستيك كثير."],
        ["n", "die", "Plastiktüte", "-n", "الكيس البلاستيكي", "Ich brauche keine Plastiktüte.", "لا أحتاج كيسًا بلاستيكيًا."],
        ["n", "der", "Radweg", "-e", "مسلك الدراجات", "In Kopenhagen gibt es viele Radwege.", "في كوبنهاغن مسالك دراجات كثيرة."],
        ["n", "die", "Luft", "Sg.", "الهواء", "Die Luft in der Stadt ist schlecht.", "الهواء في المدينة سيئ."],
        ["n", "der", "Verkehr", "Sg.", "حركة المرور", "Es gibt zu viel Verkehr.", "هناك حركة مرور كثيرة جدًا."],
        ["n", "die", "Solaranlage", "-n", "اللوح الشمسي / منشأة شمسية", "Auf dem Dach ist eine Solaranlage.", "على السطح منشأة شمسية."],
        ["n", "der", "Baum", "¨-e", "الشجرة", "Wir sollten mehr Bäume pflanzen.", "ينبغي أن نغرس أشجارًا أكثر."],
        ["n", "die", "Wasserflasche", "-n", "قنينة الماء", "Ich habe immer meine Wasserflasche dabei.", "معي دائمًا قنينة مائي."],
        ["v", "", "schützen", "hat geschützt", "يحمي", "Wie können wir die Natur schützen?", "كيف نحمي الطبيعة؟"],
        ["v", "", "sparen", "hat gespart", "يوفّر", "Beim Duschen kann man Wasser sparen.", "عند الاستحمام يمكن توفير الماء."],
        ["v", "", "vermeiden", "hat vermieden", "يتجنّب", "Ich versuche, Plastik zu vermeiden.", "أحاول تجنّب البلاستيك."],
        ["v", "", "pflanzen", "hat gepflanzt", "يغرس", "Die Schüler pflanzen Bäume.", "التلاميذ يغرسون أشجارًا."],
        ["v", "", "verbrauchen", "hat verbraucht", "يستهلك", "Das Auto verbraucht viel Benzin.", "السيارة تستهلك بنزينًا كثيرًا."],
        ["v", "", "ausmachen", "macht aus, hat ausgemacht", "يطفئ", "Mach bitte das Licht aus!", "أطفئ الضوء من فضلك!"],
        ["v", "", "hätte", "haben → ich hätte", "لو كان عندي", "Wenn ich Geld hätte, würde ich reisen.", "لو كان عندي مال لسافرت."],
        ["v", "", "wäre", "sein → ich wäre", "لو كنت", "Wenn ich Bürgermeister wäre, würde ich Parks bauen.", "لو كنت رئيس البلدية لبنيت حدائق."],
        ["v", "", "würde", "werden → ich würde + Inf.", "لـ (صيغة الشرط)", "Ich würde gern mehr Rad fahren.", "أودّ لو أركب الدراجة أكثر."],
        ["a", "", "umweltfreundlich", "", "صديق للبيئة", "Das Fahrrad ist umweltfreundlich.", "الدراجة صديقة للبيئة."],
        ["a", "", "regional", "", "محلي", "Ich kaufe regionales Obst.", "أشتري فواكه محلية."],
        ["a", "", "öffentlich", "", "عمومي", "Ich fahre mit öffentlichen Verkehrsmitteln.", "أتنقل بوسائل النقل العمومية."],
        ["a", "", "schmutzig", "", "متّسخ / ملوّث", "Der Fluss ist schmutzig.", "النهر ملوّث."],
        ["x", "", "Es wäre schön, wenn …", "", "سيكون جميلًا لو …", "Es wäre schön, wenn es mehr Parks gäbe.", "سيكون جميلًا لو كانت هناك حدائق أكثر."]
      ],
      phrases: [
        ["Wenn ich Bürgermeister wäre, würde ich mehr Radwege bauen.", "لو كنت رئيس البلدية لبنيت مسالك دراجات أكثر."],
        ["Wenn ich mehr Zeit hätte, würde ich mit dem Rad zur Arbeit fahren.", "لو كان عندي وقت أكثر لذهبت إلى العمل بالدراجة."],
        ["Ich würde gern auf dem Land wohnen.", "أودّ لو أسكن في الريف."],
        ["Es wäre schön, wenn es weniger Verkehr gäbe.", "سيكون جميلًا لو كانت حركة المرور أقل."],
        ["Ich trenne den Müll und spare Wasser.", "أفرز القمامة وأوفّر الماء."],
        ["Ich brauche keine Plastiktüte, danke.", "لا أحتاج كيسًا بلاستيكيًا، شكرًا."],
        ["Mach bitte das Licht aus, wenn du gehst.", "أطفئ الضوء من فضلك عندما تخرج."]
      ],
      ex: [
        { t: "gap", q: "أكمل بـ hätte / wäre.", s: "Wenn ich reich ___, würde ich ein Haus am Meer kaufen.", a: ["wäre"], why: "‹reich sein› → ‹wäre›.", tag: "konjunktiv" },
        { t: "gap", q: "أكمل بـ hätte / wäre.", s: "Wenn ich ein Auto ___, würde ich nach Spanien fahren.", a: ["hätte"], why: "‹ein Auto haben› → ‹hätte›.", tag: "konjunktiv" },
        { t: "gap", q: "أكمل بـ würde.", s: "Wenn ich Zeit hätte, ___ ich mehr lesen.", a: ["würde"], why: "الجملة الرئيسية: ‹würde› + مصدر.", tag: "konjunktiv" },
        { t: "gap", q: "أكمل بـ würde بالشكل الصحيح.", s: "Wenn du Bürgermeisterin wärst, was ___ du machen?", a: ["würdest"], why: "‹du› → ‹würdest›.", tag: "konjunktiv" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Wenn ich mehr Geld hätte, ___.", o: ["würde ich eine Solaranlage kaufen", "ich würde eine Solaranlage kaufen", "würde ich kaufen eine Solaranlage"], a: 0, why: "بعد ‹Wenn …,› الفعل ‹würde› أولًا، والمصدر في الآخر.", tag: "konjunktiv" },
        { t: "mc", q: "ماذا تعني: «Wenn ich Zeit hätte, würde ich kommen.»؟", o: ["ليس عندي وقت، لذلك لن آتي", "عندي وقت وسآتي", "كان عندي وقت وأتيت"], a: 0, why: "Konjunktiv II = غير واقعي: الواقع عكسه.", tag: "konjunktiv" },
        { t: "mc", q: "اختر الصحيح.", s: "Ich ___ gern auf dem Land wohnen.", o: ["würde", "werde", "wurde"], a: 0, why: "تمنٍّ → ‹würde gern›. ‹werde› = مستقبل، ‹wurde› = ماضٍ.", tag: "konjunktiv" },
        { t: "mc", q: "اختر الصحيح.", s: "Wenn es mehr Radwege ___, würden mehr Leute Rad fahren.", o: ["gäbe", "gibt", "gab"], a: 0, why: "‹es gibt› في Konjunktiv II = ‹es gäbe›.", tag: "konjunktiv" },
        { t: "match", q: "صِل الفعل بمعناه.", pairs: [["schützen", "يحمي"], ["sparen", "يوفّر"], ["vermeiden", "يتجنّب"], ["pflanzen", "يغرس"], ["verbrauchen", "يستهلك"]], tag: "wortschatz" },
        { t: "order", q: "رتّب الجملة.", a: "Wenn ich Bürgermeister wäre, würde ich mehr Bäume pflanzen.", why: "‹wäre› في آخر الجملة الفرعية، ثم ‹würde ich … pflanzen›.", tag: "konjunktiv" },
        { t: "order", q: "رتّب الجملة.", a: "Ich würde gern mit dem Fahrrad fahren.", why: "‹würde› ثانيًا والمصدر ‹fahren› في الآخر.", tag: "konjunktiv" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "لو كان عندي وقت، لزرتك.", a: ["Wenn ich Zeit hätte, würde ich dich besuchen.", "Wenn ich Zeit hätte, würde ich Sie besuchen.", "Ich würde dich besuchen, wenn ich Zeit hätte."], tag: "konjunktiv" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أودّ لو أسكن في الريف.", a: ["Ich würde gern auf dem Land wohnen.", "Ich würde gerne auf dem Land wohnen.", "Ich würde gern auf dem Land leben."], tag: "konjunktiv" },
        { t: "read", title: "Umfrage: Was würdest du für die Umwelt tun?", text: "Hamza (24): Wenn ich Bürgermeister von Casablanca wäre, würde ich die Straßenbahn bis in alle Stadtteile bauen. Dann würden weniger Leute mit dem Auto fahren. — Julia (31): Ich trenne schon den Müll und kaufe regionales Obst. Wenn ich einen Garten hätte, würde ich mein Gemüse selbst pflanzen. — Herr Wolf (58): Ich würde gern eine Solaranlage auf mein Dach bauen, aber sie ist noch zu teuer. Es wäre schön, wenn der Staat mehr helfen würde.", tr: "حمزة (24): لو كنت رئيس بلدية الدار البيضاء لمددت الترامواي إلى كل الأحياء. عندها سيقل عدد من يتنقلون بالسيارة. — يوليا (31): أنا أفرز القمامة وأشتري فواكه محلية. لو كانت عندي حديقة لزرعت خضري بنفسي. — السيد فولف (58): أودّ أن أضع منشأة شمسية على سطحي، لكنها ما زالت غالية جدًا. سيكون جميلًا لو ساعدت الدولة أكثر.", items: [
          { t: "tf", s: "Hamza ist Bürgermeister von Casablanca.", a: false, why: "‹Wenn ich Bürgermeister … wäre› = غير واقعي." },
          { t: "tf", s: "Julia hat keinen Garten.", a: true, why: "‹Wenn ich einen Garten hätte› → ليس عندها حديقة." },
          { t: "tf", s: "Herr Wolf findet die Solaranlage zu teuer.", a: true, why: "‹sie ist noch zu teuer›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Was würdest du machen?", ar: "ماذا كنت ستفعل؟",
        scene: "في الدورة لعبة: «لو كنت رئيس البلدية…». زميلتك صوفيا تسألك.",
        who: { A: "Sofia" },
        lines: [
          { s: "A", de: "Stell dir vor, du wärst Bürgermeister von deiner Stadt. Was würdest du als Erstes machen?", ar: "تخيّل أنك رئيس بلدية مدينتك. ماذا كنت ستفعل أولًا؟" },
          { s: "U", task: "قل: لو كنت رئيس البلدية، لغرست أشجارًا كثيرة، لأن الجو في الصيف حار جدًا.", m: "Wenn ich Bürgermeister wäre, würde ich viele Bäume pflanzen, weil es im Sommer sehr heiß ist.", ok: ["Wenn ich Bürgermeister wäre würde ich viele Bäume pflanzen weil es im Sommer sehr heiß ist", "Wenn ich Bürgermeister wäre würde ich viele Bäume pflanzen *", "* würde ich viele Bäume pflanzen *", "Ich würde viele Bäume pflanzen *"], o: ["Wenn ich Bürgermeister wäre, würde ich viele Bäume pflanzen, weil es im Sommer sehr heiß ist.", "Wenn ich Bürgermeister bin, würde ich viele Bäume pflanzen, weil es im Sommer sehr heiß ist.", "Wenn ich Bürgermeister wäre, ich würde viele Bäume pflanzen, weil es im Sommer sehr heiß ist."], why: ["", "غير الواقعي → ‹wäre› وليس ‹bin›.", "بعد ‹Wenn …,› الفعل ‹würde› أولًا."], ar: "لو كنت رئيس البلدية لغرست أشجارًا كثيرة لأن الصيف حار جدًا." },
          { s: "A", de: "Gute Idee! Und was würdest du gegen den Verkehr machen?", ar: "فكرة جيدة! وماذا كنت ستفعل ضد ازدحام المرور؟" },
          { s: "U", task: "قل: كنت سأبني مسالك دراجات. وسيكون جميلًا لو كانت الحافلات مجانية.", m: "Ich würde Radwege bauen. Und es wäre schön, wenn die Busse kostenlos wären.", ok: ["Ich würde Radwege bauen und es wäre schön wenn die Busse kostenlos wären", "Ich würde Radwege bauen *", "* es wäre schön wenn die Busse kostenlos wären", "Ich würde mehr Radwege bauen *"], o: ["Ich würde Radwege bauen. Und es wäre schön, wenn die Busse kostenlos wären.", "Ich würde Radwege bauen. Und es wäre schön, wenn die Busse wären kostenlos.", "Ich werde Radwege bauen. Und es wäre schön, wenn die Busse kostenlos sind."], why: ["", "بعد ‹wenn› الفعل ‹wären› في الآخر.", "غير واقعي: ‹würde› و‹wären›."], ar: "كنت سأبني مسالك دراجات. وسيكون جميلًا لو كانت الحافلات مجانية." },
          { s: "A", de: "Und was machst du heute schon für die Umwelt?", ar: "وماذا تفعل اليوم فعلًا من أجل البيئة؟" },
          { s: "U", task: "قل: أفرز القمامة وأوفّر الماء. وأودّ لو أشتري دراجة.", m: "Ich trenne den Müll und spare Wasser. Und ich würde gern ein Fahrrad kaufen.", ok: ["Ich trenne den Müll und spare Wasser und ich würde gern ein Fahrrad kaufen", "Ich trenne den Müll und spare Wasser *", "* ich würde gern ein Fahrrad kaufen", "* ich würde gerne ein Fahrrad kaufen"], o: ["Ich trenne den Müll und spare Wasser. Und ich würde gern ein Fahrrad kaufen.", "Ich trenne den Müll und spare Wasser. Und ich würde gern ein Fahrrad kaufe.", "Ich trenne den Müll und spare Wasser. Und ich wäre gern ein Fahrrad kaufen."], why: ["", "بعد ‹würde› المصدر: ‹kaufen›.", "مع الأفعال العادية: ‹würde› + مصدر."], ar: "أفرز القمامة وأوفّر الماء. وأودّ لو أشتري دراجة." }
        ]
      },
      listen: [
        { t: "listen", say: "Wenn ich mehr Geld hätte, würde ich ein Elektroauto kaufen.", q: "ماذا كان سيشتري؟", o: ["سيارة كهربائية", "دراجة", "منزلًا"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Bitte machen Sie das Licht aus, wenn Sie den Raum verlassen. So sparen wir Strom.", q: "ماذا يطلب؟", o: ["إطفاء الضوء", "إغلاق النافذة", "فرز القمامة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich würde gern am Meer wohnen, aber meine Arbeit ist in der Stadt.", q: "لماذا لا يسكن قرب البحر؟", o: ["عمله في المدينة", "البحر بعيد جدًا", "الإيجار غالٍ"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Wenn ich Zeit hätte, würde ich kommen.", tag: "hoeren" },
        { t: "dict", say: "Ich würde gern reisen.", tag: "hoeren" }
      ]
    },

    /* ───────────── 17C ───────────── */
    {
      id: "17C", de: "Stadt oder Land?", ar: "المدينة أم الريف؟",
      summary: "الحياة في المدينة والريف، ذكريات الطفولة؛ als (حدث واحد في الماضي) و wenn (تكرار / حاضر / مستقبل).",
      grammar: [
        {
          h: "als أم wenn؟ (عندما)",
          p: "كلاهما «عندما» وكلاهما جملة فرعية (الفعل في الآخر). الفرق في **الزمن والتكرار**:",
          table: {
            head: ["الأداة", "متى؟", "مثال"],
            rows: [
              ["‹als›", "**مرة واحدة** أو فترة واحدة في **الماضي**", "‹Als ich ein Kind **war**, **habe** ich auf dem Land gewohnt.›"],
              ["‹als›", "حدث واحد", "‹Als ich nach Deutschland **kam**, **konnte** ich kein Deutsch.›"],
              ["‹wenn›", "**تكرار** في الماضي (immer wenn)", "‹Immer wenn wir Oma **besucht haben**, **hat** sie Brot gebacken.›"],
              ["‹wenn›", "الحاضر / المستقبل", "‹Wenn ich in Errachidia **bin**, **besuche** ich meine Freunde.›"]
            ]
          },
          tip: "قاعدة سريعة: ماضٍ + مرة واحدة = ‹als›. كل الباقي = ‹wenn›. مع ‹als› نستعمل كثيرًا Präteritum: ‹war, hatte, kam, konnte›."
        },
        {
          h: "المدينة والريف: مقارنة",
          table: {
            head: ["المدينة", "الريف"],
            rows: [
              ["‹Es gibt viele Geschäfte und Kinos.›", "‹Die Luft ist sauber und es ist ruhig.›"],
              ["‹Die Mieten sind teurer.›", "‹Man braucht ein Auto.›"],
              ["‹Es ist laut und es gibt viel Verkehr.›", "‹Jeder kennt jeden.›"],
              ["‹Man kann gut Arbeit finden.›", "‹Es gibt nicht so viele Ärzte.›"]
            ]
          }
        }
      ],
      vocab: [
        ["n", "das", "Dorf", "¨-er", "القرية", "Meine Großeltern leben in einem kleinen Dorf.", "جدّاي يعيشان في قرية صغيرة."],
        ["n", "die", "Großstadt", "¨-e", "المدينة الكبيرة", "In der Großstadt ist immer etwas los.", "في المدينة الكبيرة هناك دائمًا ما يحدث."],
        ["n", "die", "Kindheit", "Sg.", "الطفولة", "In meiner Kindheit habe ich viel draußen gespielt.", "في طفولتي لعبت كثيرًا في الخارج."],
        ["n", "die", "Landschaft", "-en", "المنظر الطبيعي", "Die Landschaft ist wunderschön.", "المنظر الطبيعي رائع."],
        ["n", "das", "Feld", "-er", "الحقل", "Hinter dem Dorf sind Felder.", "خلف القرية حقول."],
        ["n", "die", "Oase", "-n", "الواحة", "In der Oase gibt es viele Palmen.", "في الواحة نخيل كثير."],
        ["n", "die", "Palme", "-n", "النخلة", "Unter der Palme ist es kühl.", "تحت النخلة الجو منعش."],
        ["n", "der", "Bauernhof", "¨-e", "المزرعة", "Mein Onkel hat einen Bauernhof.", "عمي عنده مزرعة."],
        ["n", "das", "Tier", "-e", "الحيوان", "Auf dem Bauernhof gibt es viele Tiere.", "في المزرعة حيوانات كثيرة."],
        ["n", "die", "Kuh", "¨-e", "البقرة", "Die Kühe sind auf der Wiese.", "الأبقار في المرج."],
        ["n", "die", "Ziege", "-n", "الماعز", "Meine Oma hatte drei Ziegen.", "جدتي كانت عندها ثلاث معزات."],
        ["n", "die", "Wiese", "-n", "المرج", "Wir picknicken auf der Wiese.", "نتنزه على المرج."],
        ["n", "die", "Ruhe", "Sg.", "الهدوء", "Auf dem Land findet man Ruhe.", "في الريف يجد المرء الهدوء."],
        ["n", "die", "Verbindung", "-en", "خط المواصلات / الاتصال", "Die Busverbindung ins Dorf ist schlecht.", "خط الحافلة إلى القرية سيئ."],
        ["v", "", "aufwachsen", "wächst auf, ist aufgewachsen", "يكبر / ينشأ", "Ich bin in einem Dorf aufgewachsen.", "نشأت في قرية."],
        ["v", "", "vermissen", "hat vermisst", "يشتاق إلى / يفتقد", "Ich vermisse meine Familie.", "أشتاق إلى عائلتي."],
        ["v", "", "sich gewöhnen (an + Akk.)", "hat sich gewöhnt", "يتعوّد على", "Ich habe mich an das Wetter gewöhnt.", "تعوّدت على الطقس."],
        ["v", "", "leben", "hat gelebt", "يعيش", "Ich lebe lieber in der Stadt.", "أفضّل العيش في المدينة."],
        ["p", "", "als", "+ Verb am Ende (Vergangenheit, einmal)", "عندما (في الماضي، مرة)", "Als ich klein war, wohnten wir in Erfoud.", "عندما كنت صغيرًا كنا نسكن في أرفود."],
        ["p", "", "wenn", "+ Verb am Ende (immer / Zukunft)", "عندما / كلما", "Wenn ich Zeit habe, fahre ich aufs Land.", "عندما يكون عندي وقت أذهب إلى الريف."],
        ["a", "", "ländlich", "", "ريفي", "Die Gegend ist sehr ländlich.", "المنطقة ريفية جدًا."],
        ["a", "", "lebendig", "", "حيوي / نابض بالحياة", "Die Stadt ist lebendig.", "المدينة حيوية."],
        ["a", "", "einsam", "", "وحيد / منعزل", "Auf dem Land fühlen sich manche Leute einsam.", "في الريف يشعر بعض الناس بالوحدة."],
        ["a", "", "sauber", "", "نظيف", "Die Luft ist sauber.", "الهواء نظيف."],
        ["d", "", "früher", "", "في الماضي", "Früher war alles ruhiger.", "في الماضي كان كل شيء أهدأ."],
        ["x", "", "Jeder kennt jeden.", "", "الكل يعرف الكل.", "Im Dorf kennt jeder jeden.", "في القرية الكل يعرف الكل."]
      ],
      phrases: [
        ["Als ich ein Kind war, habe ich in einem Dorf gewohnt.", "عندما كنت طفلًا كنت أسكن في قرية."],
        ["Als ich nach Deutschland kam, konnte ich kein Deutsch.", "عندما جئت إلى ألمانيا لم أكن أعرف الألمانية."],
        ["Immer wenn wir Oma besucht haben, hat sie Brot gebacken.", "كلما زرنا جدتي كانت تخبز الخبز."],
        ["Wenn ich in Marokko bin, besuche ich meine Freunde.", "عندما أكون في المغرب أزور أصدقائي."],
        ["Ich bin in Errachidia aufgewachsen.", "نشأت في الراشيدية."],
        ["Auf dem Land ist die Luft sauberer als in der Stadt.", "في الريف الهواء أنظف منه في المدينة."],
        ["Ich vermisse die Ruhe der Oase.", "أشتاق إلى هدوء الواحة."]
      ],
      ex: [
        { t: "gap", q: "أكمل بـ als أو wenn.", s: "___ ich ein Kind war, habe ich viel draußen gespielt.", a: ["Als"], why: "فترة واحدة في الماضي → ‹Als›.", tag: "temporal" },
        { t: "gap", q: "أكمل بـ als أو wenn.", s: "Immer ___ es geregnet hat, sind wir zu Hause geblieben.", a: ["wenn"], why: "تكرار في الماضي → ‹immer wenn›.", tag: "temporal" },
        { t: "gap", q: "أكمل بـ als أو wenn.", s: "___ ich nächstes Jahr nach Marokko fliege, besuche ich meine Oma.", a: ["Wenn"], why: "مستقبل → ‹Wenn›.", tag: "temporal" },
        { t: "gap", q: "أكمل بـ als أو wenn.", s: "___ ich 2023 nach Deutschland kam, war es Winter.", a: ["Als"], why: "حدث واحد في الماضي → ‹Als›.", tag: "temporal" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Als ich klein war, ___.", o: ["wohnten wir auf dem Land", "wir wohnten auf dem Land", "wir auf dem Land wohnten"], a: 0, why: "بعد الجملة الفرعية: الفعل ‹wohnten› أولًا.", tag: "temporal" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Ich konnte kein Deutsch, als ___.", o: ["ich nach Deutschland kam", "ich kam nach Deutschland", "kam ich nach Deutschland"], a: 0, why: "بعد ‹als› الفعل ‹kam› في الآخر.", tag: "temporal" },
        { t: "mc", q: "أي جملة صحيحة؟", o: ["Wenn ich Zeit habe, fahre ich aufs Land.", "Als ich Zeit habe, fahre ich aufs Land.", "Wenn ich Zeit habe, ich fahre aufs Land."], a: 0, why: "حاضر/تكرار → ‹wenn›، وبعدها ‹fahre ich›.", tag: "temporal" },
        { t: "gap", q: "أكمل بحرف الجر.", s: "Ich habe mich ___ das kalte Wetter gewöhnt.", a: ["an"], why: "‹sich gewöhnen an› + Akkusativ.", tag: "verbpraep" },
        { t: "match", q: "صِل الكلمة بمعناها.", pairs: [["das Dorf", "القرية"], ["die Oase", "الواحة"], ["aufwachsen", "ينشأ"], ["vermissen", "يشتاق"], ["einsam", "وحيد"]], tag: "wortschatz" },
        { t: "order", q: "رتّب الجملة.", a: "Als ich ein Kind war, hatte ich eine Ziege.", why: "‹war› في آخر الجملة الفرعية، ثم ‹hatte ich›.", tag: "temporal" },
        { t: "order", q: "رتّب الجملة (Perfekt).", a: "Ich bin in einem Dorf aufgewachsen.", why: "‹aufwachsen› مع ‹sein›: ‹bin … aufgewachsen›.", tag: "perfekt" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "عندما كنت طفلًا كنت أسكن في قرية.", a: ["Als ich ein Kind war, habe ich in einem Dorf gewohnt.", "Als ich ein Kind war, wohnte ich in einem Dorf.", "Als ich Kind war, habe ich in einem Dorf gewohnt.", "Als ich klein war, habe ich in einem Dorf gewohnt."], tag: "temporal" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أشتاق إلى عائلتي.", a: ["Ich vermisse meine Familie."], tag: "wortschatz" },
        { t: "read", title: "Vom Dorf in die Stadt", text: "Ich heiße Fatima und bin in einem kleinen Dorf in der Nähe von Erfoud aufgewachsen. Als ich ein Kind war, gab es dort keine Straße, nur einen Weg durch die Palmen. Immer wenn mein Vater vom Markt kam, brachte er uns Datteln und Süßigkeiten mit. Als ich achtzehn war, bin ich zum Studium nach Fès gezogen. Am Anfang war die Großstadt zu laut für mich, aber ich habe mich schnell daran gewöhnt. Heute lebe ich in Frankfurt. Wenn ich im Sommer nach Hause fahre, genieße ich die Ruhe der Oase.", tr: "اسمي فاطمة ونشأت في قرية صغيرة قرب أرفود. عندما كنت طفلة لم يكن هناك طريق معبّد، فقط ممر بين النخيل. كلما عاد أبي من السوق أحضر لنا تمرًا وحلويات. عندما كنت في الثامنة عشرة انتقلت إلى فاس للدراسة. في البداية كانت المدينة الكبيرة صاخبة جدًا بالنسبة لي، لكنني تعودت عليها بسرعة. اليوم أعيش في فرانكفورت. عندما أعود إلى البيت في الصيف أستمتع بهدوء الواحة.", items: [
          { t: "tf", s: "Fatima ist in einer Großstadt aufgewachsen.", a: false, why: "‹in einem kleinen Dorf … aufgewachsen›." },
          { t: "tf", s: "Der Vater brachte oft Datteln vom Markt mit.", a: true, why: "‹Immer wenn mein Vater vom Markt kam, brachte er uns Datteln … mit.›" },
          { t: "tf", s: "Fatima mochte die Großstadt sofort.", a: false, why: "‹Am Anfang war die Großstadt zu laut für mich›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Wo bist du aufgewachsen?", ar: "أين نشأت؟",
        scene: "جارك الألماني السيد مولر يسألك عن طفولتك.",
        who: { A: "Herr Müller" },
        lines: [
          { s: "A", de: "Sagen Sie mal, sind Sie in einer Großstadt aufgewachsen?", ar: "قل لي، هل نشأت في مدينة كبيرة؟" },
          { s: "U", task: "قل: لا، نشأت في {CITY}. هي مدينة صغيرة قرب الصحراء.", m: "Nein, ich bin in {CITY} aufgewachsen. Das ist eine kleine Stadt in der Nähe der Wüste.", ok: ["Nein ich bin in * aufgewachsen das ist eine kleine Stadt in der Nähe der Wüste", "Nein ich bin in * aufgewachsen das ist eine kleine Stadt in der Nähe von der Wüste", "Nein ich bin in * aufgewachsen *", "Ich bin in * aufgewachsen *"], o: ["Nein, ich bin in {CITY} aufgewachsen. Das ist eine kleine Stadt in der Nähe der Wüste.", "Nein, ich habe in {CITY} aufgewachsen. Das ist eine kleine Stadt in der Nähe der Wüste.", "Nein, ich bin in {CITY} aufwachsen. Das ist eine kleine Stadt in der Nähe der Wüste."], why: ["", "‹aufwachsen› في Perfekt مع ‹sein›.", "اسم المفعول: ‹aufgewachsen›."], ar: "لا، نشأت في … هي مدينة صغيرة قرب الصحراء." },
          { s: "A", de: "Interessant! Und wie war Ihre Kindheit dort?", ar: "مثير للاهتمام! وكيف كانت طفولتك هناك؟" },
          { s: "U", task: "قل: عندما كنت طفلًا، كنت ألعب كثيرًا في الخارج. وكلما كان الجو حارًا جدًا، كنا نسبح في النهر.", m: "Als ich ein Kind war, habe ich viel draußen gespielt. Und immer wenn es sehr heiß war, sind wir im Fluss geschwommen.", ok: ["Als ich ein Kind war habe ich viel draußen gespielt und immer wenn es sehr heiß war sind wir im Fluss geschwommen", "Als ich ein Kind war habe ich viel draußen gespielt *", "Als ich klein war habe ich viel draußen gespielt *", "* immer wenn es sehr heiß war sind wir im Fluss geschwommen"], o: ["Als ich ein Kind war, habe ich viel draußen gespielt. Und immer wenn es sehr heiß war, sind wir im Fluss geschwommen.", "Wenn ich ein Kind war, habe ich viel draußen gespielt. Und immer als es sehr heiß war, sind wir im Fluss geschwommen.", "Als ich ein Kind war, ich habe viel draußen gespielt. Und immer wenn es sehr heiß war, wir sind im Fluss geschwommen."], why: ["", "فترة واحدة في الماضي → ‹als›؛ والتكرار → ‹immer wenn›.", "بعد الجملة الفرعية الفعل أولًا: ‹habe ich›، ‹sind wir›."], ar: "عندما كنت طفلًا كنت ألعب كثيرًا في الخارج. وكلما كان الجو حارًا جدًا كنا نسبح في النهر." },
          { s: "A", de: "Das klingt schön! Vermissen Sie das manchmal?", ar: "يبدو هذا جميلًا! هل تشتاق إليه أحيانًا؟" },
          { s: "U", task: "قل: نعم، أشتاق إلى الهدوء. لكنني تعوّدت على المدينة.", m: "Ja, ich vermisse die Ruhe. Aber ich habe mich an die Stadt gewöhnt.", ok: ["Ja ich vermisse die Ruhe aber ich habe mich an die Stadt gewöhnt", "Ja ich vermisse die Ruhe *", "* aber ich habe mich an die Stadt gewöhnt", "Ja ich vermisse die Ruhe aber ich habe mich an das Leben in der Stadt gewöhnt"], o: ["Ja, ich vermisse die Ruhe. Aber ich habe mich an die Stadt gewöhnt.", "Ja, ich vermisse die Ruhe. Aber ich habe mich auf die Stadt gewöhnt.", "Ja, ich vermisse die Ruhe. Aber ich habe mir an die Stadt gewöhnt."], why: ["", "‹sich gewöhnen an›.", "‹ich› → ‹mich› (Akkusativ)."], ar: "نعم، أشتاق إلى الهدوء. لكنني تعوّدت على المدينة." }
        ]
      },
      listen: [
        { t: "listen", say: "Als ich zwölf war, sind wir von Agadir nach Rabat gezogen.", q: "كم كان عمره عندما انتقلوا؟", o: ["12 سنة", "20 سنة", "2 سنة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Immer wenn ich bei meinen Großeltern war, durfte ich die Ziegen füttern.", q: "ماذا كان يفعل عند جدّيه؟", o: ["يطعم الماعز", "يسبح في النهر", "يعمل في الحقل"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Auf dem Land ist es ruhig, aber man braucht unbedingt ein Auto.", q: "ما عيب الريف حسب المتكلم؟", o: ["يحتاج المرء سيارة", "الجو صاخب", "الإيجار غالٍ"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Als ich ein Kind war, wohnten wir auf dem Land.", tag: "hoeren" },
        { t: "dict", say: "Ich vermisse meine Familie.", tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "s-Laute: [z] oder [s]?", ar: "أصوات s: «ز» أم «س»؟",
    body: [
      { p: "حرف ‹s› في الألمانية يُنطق «ز» أحيانًا و«س» أحيانًا. للعرب هذا سهل لأن الصوتين موجودان في العربية، لكن يجب معرفة القاعدة:" },
      { table: { head: ["الكتابة", "النطق", "أمثلة"], rows: [
        ["‹s› قبل حرف علة (بداية المقطع)", "«ز» [z]", "‹Sonne, sauber, Saison, Gemüse, Rose›"],
        ["‹s› في آخر الكلمة أو قبل ساكن", "«س» [s]", "‹Haus, Gras, Fenster, Ast›"],
        ["‹ss› و‹ß›", "«س» [s] دائمًا", "‹Wasser, Fluss, heiß, Straße›"],
        ["‹sch, sp, st› (البداية)", "«ش»", "‹Schnee, Sport, Sturm›"]
      ] } },
      { tip: "‹Sonne› = «زونه» وليس «سونه»! و‹heiß› = «هايس». الفرق بين ‹ss› و‹ß›: بعد حرف علة قصير نكتب ‹ss› (‹Fluss›)، وبعد حرف علة طويل أو مركّب ‹ß› (‹Straße, heiß›)." }
    ],
    drills: [
      { t: "listen", say: "die Sonne", q: "كيف تُنطق ‹S› في ‹Sonne›؟", o: ["«ز»", "«س»", "«ش»"], a: 0, why: "‹s› قبل حرف علة في البداية → [z]." },
      { t: "listen", say: "das Haus", q: "كيف تُنطق ‹s› في آخر ‹Haus›؟", o: ["«س»", "«ز»"], a: 0, why: "في آخر الكلمة → [s]." },
      { t: "listen", say: "heiß", q: "كيف تُنطق ‹ß›؟", o: ["«س»", "«ز»", "«ب»"], a: 0, why: "‹ß› = [s] دائمًا." },
      { t: "listen", say: "der Sturm", q: "كيف تبدأ ‹Sturm›؟", o: ["«شت»", "«ست»", "«زت»"], a: 0, why: "‹st› في البداية = «شت»." },
      { t: "listen", say: "sauber", q: "كيف تبدأ ‹sauber›؟", o: ["«ز»", "«س»"], a: 0, why: "‹s› + حرف علة → [z]." }
    ],
    say: ["die Sonne", "sauber", "das Gemüse", "das Haus – die Häuser", "das Wasser", "heiß", "die Straße", "Im Sommer scheint die Sonne und es ist sehr heiß.", "Der Fluss ist sauber und das Wasser ist kalt.", "Sieben Rosen stehen im Glas."]
  },

  write: [
    {
      ar: "اكتب نصًا (60–70 كلمة): «Wenn ich Bürgermeister/in wäre …» — ماذا كنت ستغيّر في مدينتك من أجل البيئة؟ استعمل Konjunktiv II (wäre, hätte, würde) وجملة ‹Es wäre schön, wenn …›.",
      de: "Wenn ich Bürgermeister wäre …",
      model: "Wenn ich Bürgermeister von Errachidia wäre, würde ich zuerst viele Bäume pflanzen, weil es im Sommer sehr heiß ist. Ich würde auch Solaranlagen auf alle Schulen bauen. Wenn wir mehr Busse hätten, würden die Leute weniger Auto fahren. Außerdem würde ich überall Mülltonnen aufstellen. Es wäre schön, wenn die Stadt grüner und sauberer wäre.",
      check: ["جملة ‹Wenn ich … wäre/hätte, würde ich …›", "الفعل ‹würde› أولًا بعد جملة wenn", "‹Es wäre schön, wenn …›", "سبب بـ ‹weil›", "مفردات البيئة"]
    },
    {
      ar: "اكتب عن طفولتك (60–80 كلمة): أين نشأت، كيف كانت الحياة، وماذا كنت تفعل دائمًا. استعمل als (مرة واحدة) و (immer) wenn (تكرار)، وقارن بحياتك اليوم.",
      de: "Meine Kindheit.",
      model: "Ich bin in einem kleinen Dorf bei Errachidia aufgewachsen. Als ich ein Kind war, gab es dort kein Internet. Immer wenn ich aus der Schule kam, habe ich mit meinen Freunden Fußball gespielt. Im Sommer war es sehr heiß. Als ich fünfzehn war, sind wir in die Stadt gezogen. Heute wohne ich in einer Großstadt. Das Leben hier ist lebendiger, aber manchmal vermisse ich die Ruhe von früher.",
      check: ["‹als› + حدث واحد في الماضي", "‹immer wenn› + تكرار", "Perfekt / Präteritum صحيح", "مقارنة بالحاضر (Komparativ)"]
    }
  ],
  tutor: [
    { title: "Wochenende planen", ar: "تخطيط عطلة الأسبوع", role: "Yasmina, eine Freundin, die mit dir das Wochenende planen will und gern nach dem Wetter fragt", goal: "über das Wetter sprechen und Vorhersagen machen (Futur I mit werden; wahrscheinlich, bestimmt, vielleicht), Pläne vorschlagen", start: "Hey! Was machen wir am Wochenende? Weißt du, wie das Wetter wird?" },
    { title: "Wenn ich Bürgermeister wäre …", ar: "لو كنت رئيس البلدية …", role: "Sofia, eine Kursteilnehmerin, die mit dir über Umwelt und Ideen für die Stadt diskutiert", goal: "Wünsche und irreale Bedingungen ausdrücken (Wenn ich … wäre/hätte, würde ich …; Es wäre schön, wenn …), über Umweltschutz und Stadt/Land sprechen, als/wenn benutzen", start: "Stell dir vor, du bist Bürgermeister deiner Stadt. Was würdest du ändern?" }
  ]
});

/* Lektion 18 (A2) — Alltag in Deutschland */
(window.COURSE = window.COURSE || { lessons: [] }).lessons.push({
  id: 18,
  level: "A2",
  de: "Alltag in Deutschland",
  ar: "الحياة اليومية في ألمانيا",
  book: "منهج A2 · محتوى أصلي (البنك والبريد، التدريب على امتحان A2، مراجعة الجمل الفرعية)",
  goals: [
    "فتح حساب بنكي وإرسال طرد في البريد",
    "الضمائر غير المحددة: einer, eine, eins, keiner, welche",
    "أدوات الربط: aber, sondern, denn, deshalb, trotzdem، و entweder … oder، و nicht nur … sondern auch",
    "التدرّب على مهام امتحان Goethe A2 (الكلام والكتابة)",
    "مراجعة كل الجمل الفرعية: weil, dass, wenn, ob, obwohl, als، الجمل الموصولة والأسئلة غير المباشرة"
  ],
  units: [
    /* ───────────── 18A ───────────── */
    {
      id: "18A", de: "Bank und Post", ar: "البنك والبريد",
      summary: "فتح حساب، بطاقة البنك، تحويل المال، إرسال طرد؛ الضمائر غير المحددة: einer / eine / eins، keiner، welche.",
      grammar: [
        {
          h: "الضمائر غير المحددة: einer, eine, eins",
          p: "عندما لا نريد تكرار الاسم نستعمل ضميرًا مكان ‹ein/kein + اسم›. النهاية تُظهر الجنس والحالة:",
          table: {
            head: ["", "مذكر", "محايد", "مؤنث", "جمع"],
            rows: [
              ["Nominativ", "‹einer› / ‹keiner›", "‹eins› / ‹keins›", "‹eine› / ‹keine›", "‹welche› / ‹keine›"],
              ["Akkusativ", "‹einen› / ‹keinen›", "‹eins› / ‹keins›", "‹eine› / ‹keine›", "‹welche› / ‹keine›"],
              ["Dativ", "‹einem› / ‹keinem›", "‹einem› / ‹keinem›", "‹einer› / ‹keiner›", "‹welchen› / ‹keinen›"]
            ]
          },
          tip: "انتبه للفرق: ‹Ich habe einen Kuli› (أداة + اسم) لكن ‹Ich habe einen› (ضمير، بدون اسم). الفرق فقط في المذكر Nominativ (‹einer›) والمحايد (‹eins›)."
        },
        {
          h: "أمثلة في الحوار",
          table: {
            head: ["السؤال", "الجواب"],
            rows: [
              ["‹Haben Sie einen Kugelschreiber?›", "‹Ja, hier ist einer.› / ‹Nein, ich habe leider keinen.›"],
              ["‹Brauchst du ein Formular?›", "‹Ja, ich brauche eins.› / ‹Nein, ich habe schon eins.›"],
              ["‹Gibt es hier eine Bank?›", "‹Ja, dort ist eine.› / ‹Nein, hier gibt es keine.›"],
              ["‹Hast du Briefmarken?›", "‹Ja, ich habe noch welche.› / ‹Nein, ich habe keine.›"]
            ]
          },
          tip: "مع الجمع (أو الأشياء غير المعدودة) نستعمل ‹welche› للإيجاب: ‹Ist noch Milch da? – Ja, da ist noch welche.›"
        },
        {
          h: "في البنك والبريد",
          table: {
            head: ["الجملة", "المعنى"],
            rows: [
              ["‹Ich möchte ein Konto eröffnen.›", "أريد أن أفتح حسابًا."],
              ["‹Ich möchte Geld überweisen / abheben / einzahlen.›", "أريد تحويل / سحب / إيداع المال."],
              ["‹Meine Karte ist gesperrt.›", "بطاقتي موقوفة."],
              ["‹Ich möchte dieses Paket nach Marokko schicken.›", "أريد إرسال هذا الطرد إلى المغرب."],
              ["‹Wie lange dauert das?› / ‹Was kostet das?›", "كم يستغرق؟ / كم يكلّف؟"],
              ["‹Ich habe eine Abholkarte bekommen.›", "وصلتني بطاقة استلام."]
            ]
          }
        }
      ],
      vocab: [
        ["n", "die", "Bank", "-en", "البنك", "Die Bank öffnet um neun Uhr.", "البنك يفتح في التاسعة."],
        ["n", "das", "Konto", "=Konten", "الحساب البنكي", "Ich möchte ein Konto eröffnen.", "أريد أن أفتح حسابًا."],
        ["n", "die", "Bankkarte", "-n", "البطاقة البنكية", "Ich habe meine Bankkarte verloren.", "أضعت بطاقتي البنكية."],
        ["n", "der", "Geldautomat", "-en", "الصراف الآلي", "Der Geldautomat ist neben der Bank.", "الصراف الآلي بجانب البنك."],
        ["n", "die", "Überweisung", "-en", "التحويل", "Die Überweisung dauert zwei Tage.", "التحويل يستغرق يومين."],
        ["n", "die", "Gebühr", "-en", "الرسوم", "Das Konto hat keine Gebühren.", "الحساب بدون رسوم."],
        ["n", "die", "Geheimzahl", "-en", "الرقم السري", "Vergiss deine Geheimzahl nicht!", "لا تنس رقمك السري!"],
        ["n", "der", "Ausweis", "-e", "بطاقة الهوية", "Bitte zeigen Sie Ihren Ausweis.", "أظهر بطاقة هويتك من فضلك."],
        ["n", "das", "Formular", "-e", "الاستمارة", "Füllen Sie bitte dieses Formular aus.", "املأ هذه الاستمارة من فضلك."],
        ["n", "die", "Post", "Sg.", "البريد", "Ich gehe zur Post.", "أذهب إلى البريد."],
        ["n", "das", "Paket", "-e", "الطرد", "Ich schicke ein Paket an meine Familie.", "أرسل طردًا لعائلتي."],
        ["n", "das", "Päckchen", "-", "الطرد الصغير", "Ein Päckchen ist billiger als ein Paket.", "الطرد الصغير أرخص من الطرد."],
        ["n", "die", "Briefmarke", "-n", "الطابع البريدي", "Ich brauche drei Briefmarken.", "أحتاج ثلاثة طوابع."],
        ["n", "der", "Briefumschlag", "¨-e", "الظرف", "Haben Sie einen Briefumschlag?", "هل عندكم ظرف؟"],
        ["n", "der", "Absender", "-", "المرسِل", "Schreiben Sie den Absender oben links.", "اكتب المرسِل في الأعلى يسارًا."],
        ["n", "der", "Empfänger", "-", "المرسَل إليه", "Der Empfänger wohnt in Fès.", "المرسَل إليه يسكن في فاس."],
        ["n", "die", "Abholkarte", "-n", "بطاقة استلام الطرد", "Mit der Abholkarte holen Sie das Paket ab.", "ببطاقة الاستلام تأخذ الطرد."],
        ["v", "", "eröffnen", "hat eröffnet", "يفتح (حسابًا)", "Ich eröffne ein Konto bei der Sparkasse.", "أفتح حسابًا في بنك شباركاسه."],
        ["v", "", "überweisen", "hat überwiesen", "يحوّل (مالًا)", "Ich überweise die Miete jeden Monat.", "أحوّل الإيجار كل شهر."],
        ["v", "", "abheben", "hebt ab, hat abgehoben", "يسحب (مالًا)", "Ich hebe 100 Euro ab.", "أسحب 100 يورو."],
        ["v", "", "einzahlen", "zahlt ein, hat eingezahlt", "يودع", "Ich möchte Geld einzahlen.", "أريد إيداع مال."],
        ["v", "", "sperren", "hat gesperrt", "يوقف (بطاقة)", "Bitte sperren Sie meine Karte!", "أوقفوا بطاقتي من فضلكم!"],
        ["v", "", "ausfüllen", "füllt aus, hat ausgefüllt", "يملأ (استمارة)", "Hast du das Formular schon ausgefüllt?", "هل ملأت الاستمارة؟"],
        ["v", "", "abholen", "holt ab, hat abgeholt", "يستلم / يأخذ", "Ich hole das Paket bei der Post ab.", "أستلم الطرد من البريد."],
        ["p", "", "einer / eine / eins", "Indefinitpronomen", "واحد / واحدة (ضمير)", "Haben Sie einen Kuli? – Ja, hier ist einer.", "هل عندك قلم؟ – نعم، هذا واحد."],
        ["p", "", "keiner / keine / keins", "", "لا أحد / ولا واحد", "Ich habe keinen.", "ليس عندي واحد."],
        ["p", "", "welche", "Plural", "بعض (ضمير للجمع)", "Hast du Briefmarken? – Ja, ich habe welche.", "هل عندك طوابع؟ – نعم، عندي بعضها."],
        ["a", "", "gebührenfrei", "", "بدون رسوم", "Das Konto ist gebührenfrei.", "الحساب بدون رسوم."],
        ["x", "", "Geld abheben", "", "يسحب المال", "Wo kann ich hier Geld abheben?", "أين يمكنني سحب المال هنا؟"]
      ],
      phrases: [
        ["Ich möchte ein Konto eröffnen.", "أريد أن أفتح حسابًا."],
        ["Haben Sie einen Kugelschreiber? – Ja, hier ist einer.", "هل عندك قلم؟ – نعم، تفضل."],
        ["Brauchen Sie ein Formular? – Nein, ich habe schon eins.", "هل تحتاج استمارة؟ – لا، عندي واحدة."],
        ["Gibt es hier einen Geldautomaten? – Ja, dort ist einer.", "هل يوجد هنا صراف آلي؟ – نعم، هناك واحد."],
        ["Ich möchte dieses Paket nach Marokko schicken.", "أريد إرسال هذا الطرد إلى المغرب."],
        ["Meine Karte ist weg. Bitte sperren Sie sie!", "بطاقتي ضاعت. أوقفوها من فضلكم!"],
        ["Hast du noch Briefmarken? – Ja, ich habe noch welche.", "هل ما زالت عندك طوابع؟ – نعم، عندي بعضها."]
      ],
      ex: [
        { t: "mc", q: "اختر الضمير الصحيح.", s: "Haben Sie einen Kuli? – Ja, hier ist ___.", o: ["einer", "einen", "eins"], a: 0, why: "مذكر Nominativ (بعد ‹ist›): ‹einer›.", tag: "indefinit" },
        { t: "mc", q: "اختر الضمير الصحيح.", s: "Brauchst du ein Formular? – Nein, ich habe schon ___.", o: ["eins", "einen", "einer"], a: 0, why: "محايد: ‹eins›.", tag: "indefinit" },
        { t: "mc", q: "اختر الضمير الصحيح.", s: "Gibt es hier eine Post? – Nein, hier gibt es ___.", o: ["keine", "keinen", "keins"], a: 0, why: "مؤنث: ‹keine›.", tag: "indefinit" },
        { t: "mc", q: "اختر الضمير الصحيح.", s: "Hast du Briefmarken? – Ja, ich habe noch ___.", o: ["welche", "eine", "einen"], a: 0, why: "جمع (إيجاب): ‹welche›.", tag: "indefinit" },
        { t: "gap", q: "أكمل بالضمير (Akkusativ مذكر).", s: "Ich brauche einen Briefumschlag. Haben Sie ___?", a: ["einen"], why: "مذكر Akkusativ: ‹einen›.", tag: "indefinit" },
        { t: "gap", q: "أكمل بالضمير (نفي).", s: "Hast du einen Ausweis dabei? – Nein, ich habe ___.", a: ["keinen"], why: "مذكر Akkusativ نفي: ‹keinen›.", tag: "indefinit" },
        { t: "gap", q: "أكمل بالضمير.", s: "Ist hier ein Geldautomat? – Ja, dort ist ___.", a: ["einer"], why: "مذكر Nominativ: ‹einer›.", tag: "indefinit" },
        { t: "mc", q: "ماذا يعني ‹Geld abheben›؟", o: ["سحب المال", "إيداع المال", "تحويل المال"], a: 0, why: "‹abheben› = يسحب.", tag: "wortschatz" },
        { t: "match", q: "صِل الكلمة بمعناها.", pairs: [["überweisen", "يحوّل"], ["einzahlen", "يودع"], ["das Konto", "الحساب"], ["die Briefmarke", "الطابع"], ["der Empfänger", "المرسَل إليه"]], tag: "wortschatz" },
        { t: "order", q: "رتّب الجملة.", a: "Ich möchte dieses Paket nach Marokko schicken.", why: "‹möchte› ثانيًا و‹schicken› في الآخر.", tag: "modal" },
        { t: "order", q: "رتّب الجملة.", a: "Füllen Sie bitte dieses Formular aus.", why: "أمر رسمي بفعل منفصل: ‹aus› في الآخر.", tag: "imperativ" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "أريد أن أفتح حسابًا.", a: ["Ich möchte ein Konto eröffnen.", "Ich würde gern ein Konto eröffnen."], tag: "wortschatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "هل عندك قلم؟ – نعم، تفضل واحدًا.", a: ["Hast du einen Kuli? – Ja, hier ist einer.", "Haben Sie einen Kuli? – Ja, hier ist einer.", "Hast du einen Kugelschreiber? – Ja, hier ist einer.", "Haben Sie einen Kugelschreiber? – Ja, hier ist einer."], tag: "indefinit" },
        { t: "read", title: "Ein Konto eröffnen – so geht's", text: "Sie wohnen neu in Deutschland und brauchen ein Konto? Das ist nicht schwer. Sie brauchen Ihren Pass oder Ausweis und Ihre Meldebescheinigung. Bei vielen Banken können Sie das Konto auch online eröffnen. Ein Girokonto kostet oft zwischen 0 und 10 Euro im Monat – fragen Sie nach einem gebührenfreien Konto! Nach etwa einer Woche bekommen Sie Ihre Bankkarte per Post. Die Geheimzahl kommt in einem anderen Brief. Wichtig: Schreiben Sie die Geheimzahl nie auf die Karte!", tr: "تسكن حديثًا في ألمانيا وتحتاج حسابًا؟ هذا ليس صعبًا. تحتاج جواز سفرك أو بطاقة هويتك وشهادة تسجيل السكن. في بنوك كثيرة يمكنك فتح الحساب عبر الإنترنت. الحساب الجاري يكلّف غالبًا بين 0 و10 يورو شهريًا — اسأل عن حساب بدون رسوم! بعد حوالي أسبوع تصلك بطاقتك البنكية بالبريد. والرقم السري يأتي في رسالة أخرى. مهم: لا تكتب الرقم السري أبدًا على البطاقة!", items: [
          { t: "tf", s: "Man kann bei vielen Banken online ein Konto eröffnen.", a: true, why: "‹können Sie das Konto auch online eröffnen›." },
          { t: "tf", s: "Die Bankkarte und die Geheimzahl kommen im gleichen Brief.", a: false, why: "‹Die Geheimzahl kommt in einem anderen Brief.›" },
          { t: "tf", s: "Jedes Konto kostet mindestens 10 Euro im Monat.", a: false, why: "‹zwischen 0 und 10 Euro›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "In der Bank", ar: "في البنك",
        scene: "تريد فتح حساب في البنك. الموظف السيد كراوزه يساعدك.",
        who: { A: "Herr Krause" },
        lines: [
          { s: "A", de: "Guten Tag! Was kann ich für Sie tun?", ar: "مرحبًا! ماذا يمكنني أن أفعل لك؟" },
          { s: "U", task: "قل: مرحبًا، أريد أن أفتح حسابًا. هل عندكم حساب بدون رسوم؟", m: "Guten Tag, ich möchte ein Konto eröffnen. Haben Sie ein Konto ohne Gebühren?", ok: ["Guten Tag ich möchte ein Konto eröffnen haben Sie ein Konto ohne Gebühren", "Guten Tag ich möchte ein Konto eröffnen haben Sie ein gebührenfreies Konto", "* ich möchte ein Konto eröffnen *", "Ich möchte ein Konto eröffnen *"], o: ["Guten Tag, ich möchte ein Konto eröffnen. Haben Sie ein Konto ohne Gebühren?", "Guten Tag, ich möchte ein Konto öffnen machen. Haben Sie ein Konto ohne Gebühren?", "Guten Tag, ich möchte eröffnen ein Konto. Haben Sie ein Konto ohne Gebühren?"], why: ["", "مع الحساب: ‹ein Konto eröffnen›.", "المصدر ‹eröffnen› في الآخر بعد ‹möchte›."], ar: "مرحبًا، أريد أن أفتح حسابًا. هل عندكم حساب بدون رسوم؟" },
          { s: "A", de: "Ja, unser Studentenkonto ist kostenlos. Haben Sie Ihren Ausweis dabei?", ar: "نعم، حساب الطلبة عندنا مجاني. هل معك بطاقة هويتك؟" },
          { s: "U", task: "قل: نعم، هذا جواز سفري. وأحتاج قلمًا — هل عندك واحد؟", m: "Ja, hier ist mein Pass. Und ich brauche einen Kuli – haben Sie einen?", ok: ["Ja hier ist mein Pass und ich brauche einen Kuli haben Sie einen", "Ja hier ist mein Reisepass und ich brauche einen Kuli haben Sie einen", "* ich brauche einen Kuli haben Sie einen", "* haben Sie einen Kuli"], o: ["Ja, hier ist mein Pass. Und ich brauche einen Kuli – haben Sie einen?", "Ja, hier ist mein Pass. Und ich brauche einen Kuli – haben Sie einer?", "Ja, hier ist mein Pass. Und ich brauche einen Kuli – haben Sie eins?"], why: ["", "مذكر Akkusativ (مفعول ‹haben›): ‹einen›.", "‹der Kuli› مذكر → ‹einen› وليس ‹eins›."], ar: "نعم، هذا جواز سفري. وأحتاج قلمًا — هل عندك واحد؟" },
          { s: "A", de: "Natürlich, hier ist einer. Bitte füllen Sie das Formular aus. Ihre Karte bekommen Sie in einer Woche per Post.", ar: "طبعًا، تفضل. املأ الاستمارة من فضلك. ستصلك بطاقتك بعد أسبوع بالبريد." },
          { s: "U", task: "اسأل: هل يمكنني أن أحوّل مالًا إلى المغرب بهذا الحساب؟", m: "Kann ich mit diesem Konto auch Geld nach Marokko überweisen?", ok: ["Kann ich mit diesem Konto auch Geld nach Marokko überweisen", "Kann ich mit dem Konto Geld nach Marokko überweisen", "Kann ich mit diesem Konto Geld nach Marokko überweisen", "* Geld nach Marokko überweisen"], o: ["Kann ich mit diesem Konto auch Geld nach Marokko überweisen?", "Kann ich mit diesem Konto auch Geld nach Marokko überweise?", "Kann ich mit dieses Konto auch Geld nach Marokko überweisen?"], why: ["", "بعد ‹kann› المصدر: ‹überweisen›.", "‹mit› + Dativ محايد: ‹diesem›."], ar: "هل يمكنني أن أحوّل مالًا إلى المغرب بهذا الحساب؟" },
          { s: "A", de: "Ja, das geht online. Für Überweisungen ins Ausland gibt es aber eine kleine Gebühr.", ar: "نعم، هذا ممكن عبر الإنترنت. لكن للتحويلات إلى الخارج هناك رسوم صغيرة." }
        ]
      },
      listen: [
        { t: "listen", say: "Bitte geben Sie Ihre Geheimzahl ein und drücken Sie dann die grüne Taste.", q: "ماذا يجب أن يفعل بعد الرقم السري؟", o: ["يضغط الزر الأخضر", "يأخذ البطاقة", "يضغط الزر الأحمر"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ein Paket nach Marokko kostet neunzehn Euro und dauert ungefähr zehn Tage.", q: "كم يستغرق الطرد؟", o: ["حوالي عشرة أيام", "يومين", "شهرًا"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Haben Sie noch Briefmarken? – Nein, leider habe ich keine mehr.", q: "هل عنده طوابع؟", o: ["لا، لم يعد عنده", "نعم، عنده كثير", "عنده واحد فقط"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Ich möchte ein Konto eröffnen.", tag: "hoeren" },
        { t: "dict", say: "Ja, hier ist einer.", tag: "hoeren" }
      ]
    },

    /* ───────────── 18B ───────────── */
    {
      id: "18B", de: "Fit für die Prüfung A2", ar: "مستعد لامتحان A2",
      summary: "مهام امتحان Goethe A2 (Hören, Lesen, Schreiben, Sprechen)؛ أدوات الربط بين الجمل الرئيسية: aber / sondern، denn، deshalb، trotzdem، entweder … oder، nicht nur … sondern auch.",
      grammar: [
        {
          h: "أدوات الربط: أين يقع الفعل؟",
          table: {
            head: ["المجموعة", "الأدوات", "الترتيب", "مثال"],
            rows: [
              ["الموقع 0", "‹und, aber, oder, denn, sondern›", "لا تغيّر الترتيب", "‹Ich lerne, **denn** ich **habe** eine Prüfung.›"],
              ["ظرف (الموقع 1)", "‹deshalb, trotzdem, dann, danach›", "الفعل مباشرة بعدها", "‹**Deshalb lerne** ich jeden Tag.›"],
              ["جملة فرعية", "‹weil, dass, wenn, ob, obwohl, als›", "الفعل في الآخر", "‹…, **weil** ich eine Prüfung **habe**.›"]
            ]
          },
          tip: "هذا الجدول هو «خريطة» الجملة الألمانية. إذا عرفت مجموعة الأداة عرفت أين تضع الفعل."
        },
        {
          h: "aber أم sondern؟",
          p: "‹sondern› = بل، بعد **نفي** (nicht / kein) لتصحيح المعلومة. ‹aber› = لكن (إضافة معلومة مخالفة).",
          table: {
            head: ["aber", "sondern"],
            rows: [
              ["‹Das Zimmer ist klein, **aber** sehr hell.›", "‹Das Zimmer ist nicht groß, **sondern** klein.›"],
              ["‹Ich habe wenig Zeit, **aber** ich komme.›", "‹Ich komme nicht heute, **sondern** morgen.›"]
            ]
          }
        },
        {
          h: "أدوات مزدوجة",
          table: {
            head: ["الأداة", "المعنى", "مثال"],
            rows: [
              ["‹entweder … oder›", "إما … أو", "‹Wir fahren entweder mit dem Zug oder mit dem Bus.›"],
              ["‹nicht nur … sondern auch›", "ليس فقط … بل أيضًا", "‹Sie spricht nicht nur Deutsch, sondern auch Spanisch.›"],
              ["‹sowohl … als auch›", "كلٌّ من … و", "‹Ich mag sowohl Tee als auch Kaffee.› (B1)"]
            ]
          }
        },
        {
          h: "امتحان Goethe-Zertifikat A2: نظرة سريعة",
          list: ["‹Hören› (30 دقيقة): إعلانات، مكالمات، حوارات قصيرة — تسمع مرتين غالبًا", "‹Lesen› (30 دقيقة): إعلانات، رسائل، مقالات قصيرة", "‹Schreiben› (30 دقيقة): رسالة SMS قصيرة + بريد إلكتروني (حوالي 30–40 كلمة)", "‹Sprechen› (15 دقيقة، مع شريك): أسئلة وأجوبة بالبطاقات، الحديث عن نفسك، تخطيط شيء معًا", "النجاح: 60% من النقاط"]
        }
      ],
      vocab: [
        ["n", "die", "Prüfung", "-en", "الامتحان", "Im Juni mache ich die Prüfung A2.", "في يونيو أجتاز امتحان A2."],
        ["n", "der", "Prüfer", "-", "الممتحن", "Der Prüfer ist freundlich.", "الممتحن لطيف."],
        ["n", "die", "Prüferin", "-nen", "الممتحِنة", "Die Prüferin stellt Fragen.", "الممتحنة تطرح أسئلة."],
        ["n", "die", "Aufgabe", "-n", "المهمة / السؤال", "Lesen Sie die Aufgabe genau.", "اقرأ المهمة بدقة."],
        ["n", "der", "Teil", "-e", "الجزء", "Die Prüfung hat vier Teile.", "الامتحان له أربعة أجزاء."],
        ["n", "die", "Punktzahl", "-en", "عدد النقاط", "Ich brauche 60 Prozent der Punktzahl.", "أحتاج 60% من النقاط."],
        ["n", "das", "Ergebnis", "-se", "النتيجة", "Das Ergebnis kommt nach vier Wochen.", "النتيجة تأتي بعد أربعة أسابيع."],
        ["n", "die", "Lösung", "-en", "الحل", "Schreiben Sie die Lösung auf den Antwortbogen.", "اكتب الحل على ورقة الإجابة."],
        ["n", "der", "Antwortbogen", "¨", "ورقة الإجابة", "Kreuzen Sie auf dem Antwortbogen an.", "ضع علامة على ورقة الإجابة."],
        ["n", "die", "Nervosität", "Sg.", "التوتر", "Gegen Nervosität hilft gute Vorbereitung.", "ضد التوتر يفيد التحضير الجيد."],
        ["n", "die", "Vorbereitung", "-en", "التحضير", "Die Vorbereitung dauert drei Monate.", "التحضير يستغرق ثلاثة أشهر."],
        ["v", "", "ankreuzen", "kreuzt an, hat angekreuzt", "يضع علامة (✗)", "Kreuzen Sie die richtige Antwort an.", "ضع علامة على الإجابة الصحيحة."],
        ["v", "", "sich vorbereiten (auf + Akk.)", "bereitet sich vor, hat sich vorbereitet", "يستعد لـ", "Ich bereite mich auf die Prüfung vor.", "أستعد للامتحان."],
        ["v", "", "bestehen", "hat bestanden", "ينجح", "Ich hoffe, dass ich die Prüfung bestehe.", "آمل أن أنجح في الامتحان."],
        ["v", "", "zuordnen", "ordnet zu, hat zugeordnet", "يربط / يصل", "Ordnen Sie die Texte den Bildern zu.", "صِل النصوص بالصور."],
        ["v", "", "nachfragen", "fragt nach, hat nachgefragt", "يستفسر", "Wenn Sie etwas nicht verstehen, fragen Sie nach.", "إذا لم تفهم شيئًا فاستفسر."],
        ["p", "", "sondern", "nach Negation", "بل", "Nicht heute, sondern morgen.", "ليس اليوم، بل غدًا."],
        ["p", "", "entweder … oder", "", "إما … أو", "Entweder du kommst mit oder du bleibst hier.", "إما أن تأتي معنا أو تبقى هنا."],
        ["p", "", "nicht nur … sondern auch", "", "ليس فقط … بل أيضًا", "Er spricht nicht nur Arabisch, sondern auch Deutsch.", "يتكلم ليس فقط العربية بل الألمانية أيضًا."],
        ["a", "", "nervös", "", "متوتر", "Vor der Prüfung bin ich nervös.", "قبل الامتحان أكون متوترًا."],
        ["a", "", "vorbereitet", "", "مستعد", "Ich bin gut vorbereitet.", "أنا مستعد جيدًا."],
        ["d", "", "genau", "", "بدقة", "Hören Sie genau zu.", "استمع بدقة."],
        ["x", "", "Können Sie das bitte wiederholen?", "", "هل يمكنك أن تعيد ذلك من فضلك؟", "Entschuldigung, können Sie das bitte wiederholen?", "عذرًا، هل يمكنك أن تعيد ذلك من فضلك؟"],
        ["x", "", "Viel Erfolg!", "", "بالتوفيق!", "Viel Erfolg bei der Prüfung!", "بالتوفيق في الامتحان!"]
      ],
      phrases: [
        ["Ich bereite mich auf die Prüfung A2 vor.", "أستعد لامتحان A2."],
        ["Ich lerne nicht nur Grammatik, sondern auch Wortschatz.", "لا أتعلم القواعد فقط بل المفردات أيضًا."],
        ["Die Prüfung ist nicht im Mai, sondern im Juni.", "الامتحان ليس في ماي بل في يونيو."],
        ["Wir können entweder am Samstag oder am Sonntag lernen.", "يمكننا أن ندرس إما يوم السبت أو يوم الأحد."],
        ["Entschuldigung, können Sie das bitte wiederholen?", "عذرًا، هل يمكنك أن تعيد ذلك من فضلك؟"],
        ["Ich bin ein bisschen nervös, aber gut vorbereitet.", "أنا متوتر قليلًا لكن مستعد جيدًا."],
        ["Viel Erfolg bei der Prüfung!", "بالتوفيق في الامتحان!"]
      ],
      ex: [
        { t: "gap", q: "أكمل بـ aber أو sondern.", s: "Die Prüfung ist nicht schwer, ___ lang.", a: ["sondern"], why: "بعد نفي (‹nicht schwer›) لتصحيح → ‹sondern›.", tag: "konnektor" },
        { t: "gap", q: "أكمل بـ aber أو sondern.", s: "Die Prüfung ist schwer, ___ ich bin gut vorbereitet.", a: ["aber"], why: "بدون نفي، معلومة مخالفة → ‹aber›.", tag: "konnektor" },
        { t: "gap", q: "أكمل بـ aber أو sondern.", s: "Ich trinke keinen Kaffee, ___ Tee.", a: ["sondern"], why: "بعد ‹keinen› → ‹sondern›.", tag: "konnektor" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Ich habe morgen eine Prüfung, deshalb ___.", o: ["lerne ich heute viel", "ich lerne heute viel", "ich heute viel lerne"], a: 0, why: "‹deshalb› + الفعل مباشرة.", tag: "konnektor" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Ich lerne heute viel, denn ___.", o: ["ich habe morgen eine Prüfung", "habe ich morgen eine Prüfung", "ich morgen eine Prüfung habe"], a: 0, why: "‹denn› في الموقع 0: الترتيب العادي.", tag: "konnektor" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Ich lerne heute viel, weil ___.", o: ["ich morgen eine Prüfung habe", "ich habe morgen eine Prüfung", "habe ich morgen eine Prüfung"], a: 0, why: "‹weil› جملة فرعية: الفعل في الآخر.", tag: "nebensatz" },
        { t: "mc", q: "اختر الأداة المناسبة.", s: "Er spricht nicht nur Französisch, ___ auch Englisch.", o: ["sondern", "aber", "oder"], a: 0, why: "‹nicht nur … sondern auch›.", tag: "konnektor" },
        { t: "mc", q: "اختر الأداة المناسبة.", s: "Wir fahren ___ mit dem Zug oder mit dem Auto.", o: ["entweder", "weder", "sowohl"], a: 0, why: "‹entweder … oder› = إما … أو.", tag: "konnektor" },
        { t: "gap", q: "أكمل بحرف الجر.", s: "Ich bereite mich ___ die Prüfung vor.", a: ["auf"], why: "‹sich vorbereiten auf› + Akkusativ.", tag: "verbpraep" },
        { t: "match", q: "صِل الأداة بموقع الفعل.", pairs: [["denn", "لأنّ (ترتيب عادي)"], ["deshalb", "لذلك (الفعل بعدها)"], ["weil", "لأنّ (الفعل في الآخر)"], ["trotzdem", "مع ذلك (الفعل بعدها)"], ["sondern", "بل (بعد النفي)"]], tag: "konnektor" },
        { t: "order", q: "رتّب الجملة.", a: "Ich komme nicht heute, sondern morgen.", why: "‹nicht heute, sondern morgen›.", tag: "konnektor" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "ليس اليوم، بل غدًا.", a: ["Nicht heute, sondern morgen.", "Nicht heute, sondern morgen!"], tag: "konnektor" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "هل يمكنك أن تعيد ذلك من فضلك؟", a: ["Können Sie das bitte wiederholen?", "Könnten Sie das bitte wiederholen?", "Kannst du das bitte wiederholen?"], tag: "konjunktiv" },
        { t: "read", title: "Prüfungsaufgabe Lesen: E-Mail von Tom", text: "Hallo Karim, wie geht's? Ich habe eine Bitte: Am Samstag ziehe ich um, nicht in die Goethestraße, sondern in die Schillerstraße 12. Kannst du mir helfen? Wir brauchen nicht nur Leute zum Tragen, sondern auch ein Auto. Hast du noch das Auto von deinem Bruder? Wir fangen um neun Uhr an. Entweder bestellen wir mittags Pizza oder meine Mutter kocht für alle. Danach machen wir eine kleine Party! Sag mir bitte bis Donnerstag Bescheid. Viele Grüße, Tom", tr: "مرحبًا كريم، كيف حالك؟ عندي طلب: يوم السبت أنتقل، ليس إلى شارع غوته بل إلى شارع شيلر 12. هل يمكنك مساعدتي؟ نحتاج ليس فقط أشخاصًا للحمل بل سيارة أيضًا. هل ما زالت عندك سيارة أخيك؟ نبدأ في التاسعة. إما أن نطلب بيتزا ظهرًا أو تطبخ أمي للجميع. بعد ذلك نقيم حفلة صغيرة! أخبرني من فضلك قبل الخميس. تحياتي، توم", items: [
          { t: "mc", q: "إلى أين ينتقل توم؟", o: ["Schillerstraße 12", "Goethestraße 12", "Schillerstraße 9"], a: 0, why: "‹nicht in die Goethestraße, sondern in die Schillerstraße 12›." },
          { t: "tf", s: "Tom braucht nur Hilfe beim Tragen.", a: false, why: "‹nicht nur Leute zum Tragen, sondern auch ein Auto›." },
          { t: "tf", s: "Karim soll bis Donnerstag antworten.", a: true, why: "‹Sag mir bitte bis Donnerstag Bescheid.›" }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Prüfung Sprechen: Etwas zusammen planen", ar: "امتحان الكلام: نخطط شيئًا معًا",
        scene: "في امتحان A2 (الجزء 3) تخطّط مع شريكتك نينا لشراء هدية لزميلة في الدورة. لديكما مواعيد مختلفة.",
        who: { A: "Nina" },
        lines: [
          { s: "A", de: "Anna hat nächste Woche Geburtstag. Wollen wir zusammen ein Geschenk kaufen? Wann hast du Zeit?", ar: "آنا عيد ميلادها الأسبوع القادم. هل نشتري هدية معًا؟ متى عندك وقت؟" },
          { s: "U", task: "قل: يوم الاثنين لا أستطيع لأن عندي دورة. لكن الثلاثاء بعد الظهر عندي وقت.", m: "Am Montag kann ich nicht, weil ich einen Kurs habe. Aber am Dienstagnachmittag habe ich Zeit.", ok: ["Am Montag kann ich nicht weil ich einen Kurs habe aber am Dienstagnachmittag habe ich Zeit", "Am Montag kann ich nicht weil ich Kurs habe aber am Dienstagnachmittag habe ich Zeit", "* weil ich einen Kurs habe aber am Dienstag * habe ich Zeit", "* am Dienstagnachmittag habe ich Zeit"], o: ["Am Montag kann ich nicht, weil ich einen Kurs habe. Aber am Dienstagnachmittag habe ich Zeit.", "Am Montag ich kann nicht, weil ich habe einen Kurs. Aber am Dienstagnachmittag ich habe Zeit.", "Am Montag kann ich nicht, denn ich einen Kurs habe. Aber am Dienstagnachmittag habe ich Zeit."], why: ["", "بعد ‹Am Montag› الفعل ثانيًا، وبعد ‹weil› الفعل في الآخر.", "بعد ‹denn› الترتيب العادي: ‹denn ich habe …›."], ar: "يوم الاثنين لا أستطيع لأن عندي دورة. لكن الثلاثاء بعد الظهر عندي وقت." },
          { s: "A", de: "Dienstag passt mir leider nicht, da arbeite ich. Wie wäre es mit Mittwoch?", ar: "الثلاثاء لا يناسبني للأسف، أعمل فيه. ما رأيك في الأربعاء؟" },
          { s: "U", task: "قل: الأربعاء جيد. ماذا نشتري؟ إما كتابًا أو قسيمة شراء؟", m: "Mittwoch ist gut. Was kaufen wir? Entweder ein Buch oder einen Gutschein?", ok: ["Mittwoch ist gut was kaufen wir entweder ein Buch oder einen Gutschein", "Mittwoch passt mir was kaufen wir entweder ein Buch oder einen Gutschein", "* entweder ein Buch oder einen Gutschein", "Mittwoch ist gut *"], o: ["Mittwoch ist gut. Was kaufen wir? Entweder ein Buch oder einen Gutschein?", "Mittwoch ist gut. Was kaufen wir? Entweder ein Buch und einen Gutschein?", "Mittwoch ist gut. Was wir kaufen? Entweder ein Buch oder einen Gutschein?"], why: ["", "‹entweder … oder›.", "سؤال W: ‹Was kaufen wir?›"], ar: "الأربعاء جيد. ماذا نشتري؟ إما كتابًا أو قسيمة؟" },
          { s: "A", de: "Ein Gutschein ist praktisch, aber ein bisschen langweilig, oder?", ar: "القسيمة عملية لكنها مملة قليلًا، أليس كذلك؟" },
          { s: "U", task: "قل: صحيح. لنشتري ليس فقط كتابًا بل زهورًا أيضًا!", m: "Stimmt. Dann kaufen wir nicht nur ein Buch, sondern auch Blumen!", ok: ["Stimmt dann kaufen wir nicht nur ein Buch sondern auch Blumen", "Stimmt wir kaufen nicht nur ein Buch sondern auch Blumen", "* nicht nur ein Buch sondern auch Blumen", "Stimmt dann kaufen wir ein Buch und Blumen"], o: ["Stimmt. Dann kaufen wir nicht nur ein Buch, sondern auch Blumen!", "Stimmt. Dann kaufen wir nicht nur ein Buch, aber auch Blumen!", "Stimmt. Dann wir kaufen nicht nur ein Buch, sondern auch Blumen!"], why: ["", "‹nicht nur … sondern auch›.", "بعد ‹Dann› الفعل مباشرة: ‹kaufen wir›."], ar: "صحيح. إذن نشتري ليس فقط كتابًا بل زهورًا أيضًا!" },
          { s: "A", de: "Super Idee! Dann treffen wir uns am Mittwoch um 17 Uhr vor der Buchhandlung.", ar: "فكرة رائعة! إذن نلتقي يوم الأربعاء في الخامسة أمام المكتبة." }
        ]
      },
      listen: [
        { t: "listen", say: "Die Prüfung beginnt nicht um acht, sondern um halb neun. Bitte seien Sie pünktlich.", q: "متى يبدأ الامتحان؟", o: ["في الثامنة والنصف", "في الثامنة", "في التاسعة"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Im Teil Hören hören Sie jeden Text zweimal. Kreuzen Sie dann die richtige Lösung an.", q: "كم مرة يسمع كل نص؟", o: ["مرتين", "مرة واحدة", "ثلاث مرات"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Ich war sehr nervös, aber ich habe trotzdem alle Aufgaben geschafft.", q: "كيف كان الامتحان بالنسبة له؟", o: ["متوتر لكنه أنجز كل المهام", "سهل جدًا", "لم ينهه"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Nicht heute, sondern morgen.", tag: "hoeren" },
        { t: "dict", say: "Viel Erfolg bei der Prüfung!", tag: "hoeren" }
      ]
    },

    /* ───────────── 18C ───────────── */
    {
      id: "18C", de: "Mein Jahr mit Deutsch", ar: "سنتي مع الألمانية",
      summary: "مراجعة المستوى A2: كل أنواع الجمل الفرعية (weil, dass, wenn, ob, obwohl, als، الموصولة، السؤال غير المباشر) والنظر إلى الخطوة التالية B1.",
      grammar: [
        {
          h: "الجمل الفرعية: نظرة شاملة",
          p: "في **كل** الجمل الفرعية: أداة الربط في البداية، الفاعل بعدها، والفعل المصرّف في **الآخر**. والفاصلة دائمًا.",
          table: {
            head: ["الأداة", "المعنى", "مثال"],
            rows: [
              ["‹weil›", "لأنّ (سبب)", "‹…, weil ich in Deutschland studieren **möchte**.›"],
              ["‹dass›", "أنّ (رأي/معلومة)", "‹Ich glaube, dass ich viel gelernt **habe**.›"],
              ["‹wenn›", "إذا / كلما / عندما", "‹Wenn ich Zeit **habe**, lese ich deutsche Bücher.›"],
              ["‹als›", "عندما (ماضٍ، مرة)", "‹Als ich anfing, **konnte** ich nur „Hallo“ sagen.›"],
              ["‹obwohl›", "رغم أنّ", "‹Obwohl Deutsch schwer **ist**, macht es Spaß.›"],
              ["‹ob›", "هل (سؤال غير مباشر)", "‹Ich weiß nicht, ob ich die Prüfung **bestehe**.›"],
              ["‹wann, wo, wie …›", "سؤال غير مباشر", "‹Kannst du mir sagen, wann der Kurs **beginnt**?›"],
              ["‹der, die, das›", "الذي/التي (موصول)", "‹Das ist die Lehrerin, die mir sehr **geholfen hat**.›"]
            ]
          },
          tip: "مع فعلين في الجملة الفرعية: الفعل المصرّف هو الأخير: ‹weil ich nicht kommen **kann**›، ‹dass er angerufen **hat**›."
        },
        {
          h: "الجملة الفرعية أولًا: فعل، فعل",
          p: "إذا بدأت الجملة بجملة فرعية، تبدأ الجملة الرئيسية بالفعل: ‹Weil ich viel geübt **habe**, **spreche** ich jetzt besser.› ‹Wenn ich B1 **habe**, **bewerbe** ich mich an der Uni.›",
          ex: [["Als ich nach Köln kam, kannte ich niemanden.", "عندما جئت إلى كولونيا لم أكن أعرف أحدًا."], ["Obwohl ich wenig Zeit hatte, habe ich jeden Tag gelernt.", "رغم أنه كان عندي وقت قليل، درست كل يوم."], ["Wenn ich die Prüfung bestehe, feiern wir!", "إذا نجحت في الامتحان سنحتفل!"]]
        },
        {
          h: "ماذا بعد A2؟ المستوى B1",
          list: ["في B1 ستتعلم: ‹damit› (لكي، بفاعلين مختلفين)، ‹bevor / nachdem› (قبل / بعد)، Präteritum لكل الأفعال، Passiv في الماضي، Konjunktiv II في الماضي (‹hätte gemacht›)، Relativsätze مع حروف الجر بتوسع، وأفعال كثيرة مع حروف جر.", "امتحان B1 (Goethe / telc / ÖSD) مطلوب غالبًا للتأشيرة الوطنية، للعمل في التمريض، وللإقامة الدائمة.", "نصيحة: واصل ساعة يوميًا — من A2 إلى B1 تحتاج عادة 3–4 أشهر بهذا الإيقاع."]
        }
      ],
      vocab: [
        ["n", "der", "Rückblick", "-e", "نظرة إلى الوراء", "Ein Rückblick auf mein Jahr.", "نظرة إلى سنتي."],
        ["n", "der", "Anfang", "¨-e", "البداية", "Am Anfang war alles schwer.", "في البداية كان كل شيء صعبًا."],
        ["n", "das", "Ende", "-n", "النهاية", "Am Ende des Kurses gibt es eine Prüfung.", "في نهاية الدورة امتحان."],
        ["n", "die", "Herausforderung", "-en", "التحدّي", "Deutsch zu lernen ist eine Herausforderung.", "تعلّم الألمانية تحدٍّ."],
        ["n", "der", "Erfolg", "-e", "النجاح", "Das ist ein großer Erfolg!", "هذا نجاح كبير!"],
        ["n", "die", "Geduld", "Sg.", "الصبر", "Man braucht viel Geduld.", "يحتاج المرء صبرًا كثيرًا."],
        ["n", "der", "Plan", "¨-e", "الخطة", "Was sind deine Pläne für die Zukunft?", "ما خططك للمستقبل؟"],
        ["n", "der", "Traum", "¨-e", "الحلم", "Mein Traum ist ein Studium in Deutschland.", "حلمي الدراسة في ألمانيا."],
        ["n", "die", "Zukunft", "Sg.", "المستقبل", "In der Zukunft möchte ich als Ingenieur arbeiten.", "في المستقبل أريد أن أعمل مهندسًا."],
        ["n", "die", "Heimat", "Sg.", "الوطن", "Ich vermisse meine Heimat.", "أشتاق إلى وطني."],
        ["n", "der", "Mut", "Sg.", "الشجاعة", "Hab Mut und sprich einfach!", "تشجّع وتكلّم فحسب!"],
        ["v", "", "aufgeben", "gibt auf, hat aufgegeben", "يستسلم", "Ich gebe nicht auf!", "لن أستسلم!"],
        ["v", "", "schaffen", "hat geschafft", "ينجح في / يتمكن من", "Du schaffst das!", "ستنجح في ذلك!"],
        ["v", "", "sich verbessern", "hat sich verbessert", "يتحسّن", "Mein Deutsch hat sich sehr verbessert.", "ألمانيتي تحسّنت كثيرًا."],
        ["v", "", "stolz sein (auf + Akk.)", "war stolz", "يفخر بـ", "Ich bin stolz auf mich.", "أنا فخور بنفسي."],
        ["v", "", "weitermachen", "macht weiter, hat weitergemacht", "يواصل", "Ich mache mit B1 weiter.", "سأواصل مع B1."],
        ["v", "", "planen", "hat geplant", "يخطط", "Ich plane ein Studium in Deutschland.", "أخطط للدراسة في ألمانيا."],
        ["a", "", "stolz", "", "فخور", "Meine Eltern sind stolz auf mich.", "والداي فخوران بي."],
        ["a", "", "zufrieden", "", "راضٍ", "Ich bin mit meinem Ergebnis zufrieden.", "أنا راضٍ عن نتيجتي."],
        ["a", "", "selbstbewusst", "", "واثق من نفسه", "Ich spreche jetzt selbstbewusster.", "أتكلم الآن بثقة أكبر."],
        ["d", "", "inzwischen", "", "في هذه الأثناء / الآن", "Inzwischen verstehe ich fast alles.", "الآن أفهم كل شيء تقريبًا."],
        ["d", "", "am Anfang", "", "في البداية", "Am Anfang habe ich nur wenig verstanden.", "في البداية فهمت قليلًا فقط."],
        ["x", "", "Du schaffst das!", "", "ستنجح!", "Keine Angst, du schaffst das!", "لا تخف، ستنجح!"],
        ["x", "", "Ich gebe nicht auf.", "", "لن أستسلم.", "Es ist schwer, aber ich gebe nicht auf.", "الأمر صعب لكنني لن أستسلم."]
      ],
      phrases: [
        ["Als ich anfing, konnte ich nur „Hallo“ sagen.", "عندما بدأت لم أكن أستطيع أن أقول إلا «Hallo»."],
        ["Inzwischen verstehe ich fast alles.", "الآن أفهم كل شيء تقريبًا."],
        ["Obwohl Deutsch schwer ist, macht es mir Spaß.", "رغم أن الألمانية صعبة، فهي تمتعني."],
        ["Ich glaube, dass ich viel gelernt habe.", "أعتقد أنني تعلمت كثيرًا."],
        ["Wenn ich B1 habe, bewerbe ich mich an einer Uni.", "عندما أحصل على B1 سأقدّم في جامعة."],
        ["Ich bin stolz auf mich!", "أنا فخور بنفسي!"],
        ["Ich gebe nicht auf – ich mache mit B1 weiter!", "لن أستسلم — سأواصل مع B1!"]
      ],
      ex: [
        { t: "mc", q: "اختر الأداة المناسبة.", s: "Ich lerne Deutsch, ___ ich in Deutschland studieren möchte.", o: ["weil", "obwohl", "ob"], a: 0, why: "سبب → ‹weil›.", tag: "nebensatz" },
        { t: "mc", q: "اختر الأداة المناسبة.", s: "___ Deutsch schwer ist, macht es mir Spaß.", o: ["Obwohl", "Weil", "Wenn"], a: 0, why: "عكس المتوقع → ‹Obwohl›.", tag: "nebensatz" },
        { t: "mc", q: "اختر الأداة المناسبة.", s: "Ich weiß nicht, ___ ich die Prüfung bestehe.", o: ["ob", "dass", "wenn"], a: 0, why: "سؤال نعم/لا غير مباشر → ‹ob›.", tag: "nebensatz" },
        { t: "mc", q: "اختر الأداة المناسبة.", s: "___ ich nach Deutschland kam, kannte ich niemanden.", o: ["Als", "Wenn", "Ob"], a: 0, why: "مرة واحدة في الماضي → ‹Als›.", tag: "temporal" },
        { t: "mc", q: "اختر الأداة المناسبة.", s: "Das ist der Lehrer, ___ mir am meisten geholfen hat.", o: ["der", "den", "dem"], a: 0, why: "فاعل في الجملة الموصولة، مذكر → ‹der›.", tag: "relativ" },
        { t: "gap", q: "أكمل بالفعل في الآخر.", s: "Ich glaube, dass ich viel gelernt ___.", a: ["habe"], why: "Perfekt في جملة ‹dass›: ‹habe› في الآخر.", tag: "nebensatz" },
        { t: "gap", q: "أكمل بالفعل في الآخر.", s: "Ich komme nicht, weil ich arbeiten ___. (müssen)", a: ["muss"], why: "الفعل الناقص المصرّف في الآخر.", tag: "nebensatz" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Wenn ich die Prüfung bestehe, ___.", o: ["feiern wir", "wir feiern", "wir feiern werden"], a: 0, why: "بعد الجملة الفرعية: الفعل أولًا.", tag: "nebensatz" },
        { t: "mc", q: "اختر الترتيب الصحيح.", s: "Kannst du mir sagen, ___?", o: ["wann der Kurs beginnt", "wann beginnt der Kurs", "der Kurs wann beginnt"], a: 0, why: "سؤال غير مباشر: الفعل في الآخر.", tag: "nebensatz" },
        { t: "order", q: "رتّب الجملة.", a: "Obwohl ich wenig Zeit hatte, habe ich jeden Tag gelernt.", why: "‹hatte› في آخر الفرعية، ثم ‹habe ich … gelernt›.", tag: "nebensatz" },
        { t: "order", q: "رتّب الجملة.", a: "Ich bin stolz auf mich.", why: "‹stolz sein auf› + Akkusativ.", tag: "verbpraep" },
        { t: "match", q: "صِل الأداة بمعناها.", pairs: [["weil", "لأنّ"], ["obwohl", "رغم أنّ"], ["ob", "هل"], ["als", "عندما (ماضٍ)"], ["dass", "أنّ"]], tag: "nebensatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "رغم أن الألمانية صعبة، فهي ممتعة.", a: ["Obwohl Deutsch schwer ist, macht es Spaß.", "Obwohl Deutsch schwierig ist, macht es Spaß.", "Deutsch macht Spaß, obwohl es schwer ist."], tag: "nebensatz" },
        { t: "tr", q: "ترجم إلى الألمانية.", ar: "لن أستسلم!", a: ["Ich gebe nicht auf!", "Ich gebe nicht auf."], tag: "wortschatz" },
        { t: "read", title: "Mein Jahr mit Deutsch", text: "Vor einem Jahr habe ich mit Deutsch angefangen. Als ich die erste Lektion gemacht habe, konnte ich nur „Guten Tag“ sagen. Am Anfang war die Aussprache sehr schwer, besonders ü und ch. Obwohl ich oft müde war, habe ich jeden Abend eine Stunde gelernt. Inzwischen kann ich Filme mit Untertiteln verstehen und mit meinem Tandempartner telefonieren. Ich glaube, dass ich die Prüfung A2 bestehen werde. Wenn ich B1 schaffe, möchte ich mich an einer Hochschule in Deutschland bewerben. Ich weiß noch nicht, ob ich Informatik oder Maschinenbau studiere – aber ich gebe nicht auf!", tr: "قبل سنة بدأت الألمانية. عندما أنجزت الدرس الأول لم أكن أستطيع أن أقول إلا «مرحبًا». في البداية كان النطق صعبًا جدًا، خاصة ü و ch. رغم أنني كنت متعبًا كثيرًا، درست كل مساء ساعة. الآن أستطيع فهم الأفلام مع الترجمة والتحدث بالهاتف مع شريك التبادل. أعتقد أنني سأنجح في امتحان A2. إذا نجحت في B1 أريد أن أقدّم في معهد عالٍ في ألمانيا. لا أعرف بعد هل سأدرس المعلوميات أم الهندسة الميكانيكية — لكنني لن أستسلم!", items: [
          { t: "tf", s: "Am Anfang konnte die Person schon viel sagen.", a: false, why: "‹konnte ich nur „Guten Tag“ sagen›." },
          { t: "tf", s: "Die Person hat jeden Abend gelernt, obwohl sie müde war.", a: true, why: "‹Obwohl ich oft müde war, habe ich jeden Abend … gelernt.›" },
          { t: "tf", s: "Die Person weiß schon genau, was sie studieren will.", a: false, why: "‹Ich weiß noch nicht, ob ich Informatik oder Maschinenbau studiere›." }
        ], tag: "lesen" }
      ],
      dialog: {
        title: "Ein Jahr später", ar: "بعد سنة",
        scene: "معلّمتك السيدة برغر تسألك في آخر يوم من دورة A2 عن تجربتك.",
        who: { A: "Frau Berger" },
        lines: [
          { s: "A", de: "So, das war unser letzter Kurstag! Wie war das Jahr für Sie?", ar: "هذا كان آخر يوم في دورتنا! كيف كانت السنة بالنسبة لك؟" },
          { s: "U", task: "قل: عندما بدأت، لم أكن أفهم شيئًا تقريبًا. لكن الآن أفهم كثيرًا.", m: "Als ich angefangen habe, habe ich fast nichts verstanden. Aber jetzt verstehe ich viel.", ok: ["Als ich angefangen habe habe ich fast nichts verstanden aber jetzt verstehe ich viel", "Als ich anfing habe ich fast nichts verstanden aber jetzt verstehe ich viel", "Als ich angefangen habe verstand ich fast nichts *", "* aber jetzt verstehe ich viel"], o: ["Als ich angefangen habe, habe ich fast nichts verstanden. Aber jetzt verstehe ich viel.", "Wenn ich angefangen habe, habe ich fast nichts verstanden. Aber jetzt verstehe ich viel.", "Als ich habe angefangen, ich habe fast nichts verstanden. Aber jetzt verstehe ich viel."], why: ["", "مرة واحدة في الماضي → ‹Als›.", "الفعل المصرّف في آخر الفرعية، ثم ‹habe ich›."], ar: "عندما بدأت لم أكن أفهم شيئًا تقريبًا. لكن الآن أفهم كثيرًا." },
          { s: "A", de: "Das stimmt, Sie haben große Fortschritte gemacht! Was war am schwersten?", ar: "صحيح، حققت تقدّمًا كبيرًا! ما كان الأصعب؟" },
          { s: "U", task: "قل: القواعد، خاصة النهايات. لكنني أعتقد أنني أتقنها الآن أفضل.", m: "Die Grammatik, besonders die Endungen. Aber ich glaube, dass ich sie jetzt besser kann.", ok: ["Die Grammatik besonders die Endungen aber ich glaube dass ich sie jetzt besser kann", "Die Grammatik besonders die Adjektivendungen aber ich glaube dass ich sie jetzt besser kann", "* ich glaube dass ich sie jetzt besser kann", "* dass ich sie jetzt besser kann"], o: ["Die Grammatik, besonders die Endungen. Aber ich glaube, dass ich sie jetzt besser kann.", "Die Grammatik, besonders die Endungen. Aber ich glaube, dass ich kann sie jetzt besser.", "Die Grammatik, besonders die Endungen. Aber ich glaube, ob ich sie jetzt besser kann."], why: ["", "بعد ‹dass› الفعل ‹kann› في الآخر.", "بعد ‹glauben› نستعمل ‹dass›."], ar: "القواعد، خاصة النهايات. لكنني أعتقد أنني أتقنها الآن أفضل." },
          { s: "A", de: "Und was sind Ihre Pläne?", ar: "وما خططك؟" },
          { s: "U", task: "قل: إذا نجحت في امتحان A2، سأواصل مع B1، لأنني أريد أن أدرس في ألمانيا.", m: "Wenn ich die Prüfung A2 bestehe, mache ich mit B1 weiter, weil ich in Deutschland studieren möchte.", ok: ["Wenn ich die Prüfung A2 bestehe mache ich mit B1 weiter weil ich in Deutschland studieren möchte", "Wenn ich die Prüfung bestehe mache ich mit B1 weiter weil ich in Deutschland studieren möchte", "Wenn ich die Prüfung A2 bestehe mache ich mit B1 weiter *", "* weil ich in Deutschland studieren möchte"], o: ["Wenn ich die Prüfung A2 bestehe, mache ich mit B1 weiter, weil ich in Deutschland studieren möchte.", "Wenn ich die Prüfung A2 bestehe, ich mache mit B1 weiter, weil ich in Deutschland studieren möchte.", "Wenn ich die Prüfung A2 bestehe, mache ich mit B1 weiter, weil ich möchte in Deutschland studieren."], why: ["", "بعد ‹Wenn …,› الفعل ‹mache› أولًا.", "بعد ‹weil› الفعل ‹möchte› في الآخر."], ar: "إذا نجحت في امتحان A2 سأواصل مع B1، لأنني أريد الدراسة في ألمانيا." },
          { s: "A", de: "Wunderbar! Ich bin sicher, dass Sie das schaffen. Viel Erfolg!", ar: "رائع! أنا متأكدة أنك ستنجح. بالتوفيق!" }
        ]
      },
      listen: [
        { t: "listen", say: "Ich weiß nicht, ob ich nächstes Jahr in Deutschland oder in Österreich studiere.", q: "ما الذي لا يعرفه؟", o: ["هل سيدرس في ألمانيا أم النمسا", "متى سيبدأ الدراسة", "ماذا سيدرس"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Obwohl die Prüfung schwer war, habe ich achtzig Prozent geschafft.", q: "كم حصّل في الامتحان؟", o: ["80%", "60%", "18%"], a: 0, tag: "hoeren" },
        { t: "listen", say: "Als ich das erste Mal in Deutschland war, habe ich mich oft verlaufen.", q: "ماذا كان يحدث له أول مرة في ألمانيا؟", o: ["كان يضيع الطريق", "كان يمرض", "كان يتأخر"], a: 0, tag: "hoeren" },
        { t: "dict", say: "Ich glaube, dass ich viel gelernt habe.", tag: "hoeren" },
        { t: "dict", say: "Ich gebe nicht auf.", tag: "hoeren" }
      ]
    }
  ],

  phon: {
    de: "Emotionen in der Stimme", ar: "المشاعر في نبرة الصوت",
    body: [
      { p: "الكلمة نفسها تعني أشياء مختلفة حسب النبرة. في الألمانية الصوت يرتفع وينخفض بقوة مع المشاعر:" },
      { table: { head: ["الشعور", "النبرة", "أمثلة"], rows: [
        ["الفرح / الحماس", "عالية ومرتفعة، طويلة", "‹Super! Toll! Das ist ja wunderbar!›"],
        ["المفاجأة", "صعود قوي في الآخر", "‹Wirklich? Echt? Was, schon fertig?›"],
        ["الانزعاج", "قصيرة، قوية، منخفضة في الآخر", "‹Nicht schon wieder! Das ist doch nicht wahr!›"],
        ["التردّد", "متوسطة، بطيئة", "‹Na ja … vielleicht … mal sehen.›"]
      ] } },
      { tip: "في الامتحان الشفهي، النبرة الحيّة تُظهر أنك تتواصل فعلًا. لا تقرأ الجمل بصوت آلي؛ أظهر الاهتمام: ‹Oh, wirklich? Das ist ja interessant!›" }
    ],
    drills: [
      { t: "listen", say: "Wirklich?", q: "ماذا تعبّر هذه النبرة؟", o: ["مفاجأة (صعود في الآخر)", "انزعاج", "حزن"], a: 0, why: "صعود قوي = مفاجأة أو سؤال." },
      { t: "listen", say: "Das ist ja wunderbar!", q: "ما الشعور؟", o: ["فرح", "انزعاج", "تردد"], a: 0, why: "‹wunderbar› مع ‹ja› = حماس." },
      { t: "listen", say: "Na ja, mal sehen.", q: "ما الشعور؟", o: ["تردّد", "حماس", "غضب"], a: 0, why: "‹Na ja … mal sehen› = لست متأكدًا." }
    ],
    say: ["Super! Das ist ja toll!", "Wirklich? Echt?", "Nicht schon wieder!", "Na ja, vielleicht.", "Oh, das ist ja interessant!", "Ich habe die Prüfung bestanden! Ist das nicht wunderbar?"]
  },

  write: [
    {
      ar: "مهمة امتحان A2 (Schreiben Teil 1): صديقك دعاك لحفلة يوم السبت لكن لا تستطيع. اكتب رسالة قصيرة (20–30 كلمة): اشكره، قل لماذا لا تأتي (weil)، واقترح موعدًا آخر.",
      de: "Prüfung A2, Schreiben Teil 1: SMS.",
      model: "Hallo Tom, danke für die Einladung! Leider kann ich am Samstag nicht kommen, weil meine Eltern zu Besuch sind. Wollen wir uns nächste Woche treffen? Vielleicht am Mittwoch? Viele Grüße, Karim",
      check: ["الشكر", "السبب بـ ‹weil› + الفعل في الآخر", "اقتراح موعد", "20–30 كلمة"]
    },
    {
      ar: "اكتب نصًا (80–100 كلمة): «Mein Jahr mit Deutsch». استعمل خمس أدوات مختلفة على الأقل: als, weil, obwohl, dass, wenn, deshalb, trotzdem، وجملة موصولة.",
      de: "Mein Jahr mit Deutsch.",
      model: "Vor einem Jahr habe ich mit Deutsch angefangen. Als ich die erste Lektion gelernt habe, war alles neu für mich. Ich lerne Deutsch, weil ich in Deutschland studieren möchte. Obwohl ich tagsüber arbeite, lerne ich jeden Abend eine Stunde. Meine App, die mich jeden Tag erinnert, hilft mir sehr. Ich glaube, dass mein Deutsch viel besser geworden ist. Wenn ich die Prüfung A2 bestehe, mache ich sofort mit B1 weiter. Deutsch ist nicht leicht, trotzdem macht es mir viel Spaß!",
      check: ["‹als›", "‹weil›", "‹obwohl›", "‹dass›", "‹wenn›", "‹deshalb› أو ‹trotzdem›", "جملة موصولة", "الفعل في المكان الصحيح في كل جملة"]
    }
  ],
  tutor: [
    { title: "Prüfung A2: Sprechen", ar: "امتحان A2: الكلام", role: "Frau Dr. Lehmann, freundliche Prüferin bei der Goethe-Prüfung A2", goal: "Prüfungssimulation: sich vorstellen, Fragen zu Themenkarten stellen und beantworten (Wohnen, Arbeit, Freizeit, Essen), etwas zusammen planen; alle Konnektoren und Nebensätze benutzen", start: "Guten Tag und herzlich willkommen zur Prüfung! Wir beginnen mit Teil 1. Bitte stellen Sie sich kurz vor." },
    { title: "In der Bank / auf der Post", ar: "في البنك / في البريد", role: "Herr Krause, Bankberater, der auch bei Fragen zur Post hilft", goal: "ein Konto eröffnen, nach Gebühren und Überweisungen fragen, ein Paket schicken; Indefinitpronomen (einer, eins, keine, welche) und höfliche Fragen benutzen", start: "Guten Tag! Nehmen Sie Platz. Wie kann ich Ihnen helfen?" }
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
  dialog: { ar: "المحادثة", skill: "sprechen" },
  /* A2 */
  dativpron: { ar: "ضمائر Dativ (mir, dir, ihm …)", skill: "grammatik" },
  nebensatz: { ar: "الجمل الفرعية (weil, dass, wenn, ob …)", skill: "grammatik" },
  ratschlag: { ar: "النصائح (sollte)", skill: "grammatik" },
  konjunktiv: { ar: "صيغة التمني والأدب Konjunktiv II", skill: "grammatik" },
  komparativ: { ar: "المقارنة والتفضيل", skill: "grammatik" },
  wechselpraep: { ar: "حروف الجر ذات الحالتين (wo? / wohin?)", skill: "grammatik" },
  infinitivzu: { ar: "المصدر مع zu", skill: "grammatik" },
  dativakk: { ar: "أفعال بمفعولين (Dativ + Akkusativ)", skill: "grammatik" },
  adjektiv: { ar: "تصريف الصفات", skill: "grammatik" },
  lokal: { ar: "حروف المكان والاتجاه", skill: "grammatik" },
  reflexiv: { ar: "الأفعال الانعكاسية (sich)", skill: "grammatik" },
  verbpraep: { ar: "أفعال مع حروف جر", skill: "grammatik" },
  passiv: { ar: "المبني للمجهول (Passiv)", skill: "grammatik" },
  genitiv: { ar: "حالة الإضافة (Genitiv)", skill: "grammatik" },
  finalsatz: { ar: "الغاية: um … zu", skill: "grammatik" },
  relativ: { ar: "الجمل الموصولة (der, die, das …)", skill: "grammatik" },
  futur: { ar: "المستقبل (werden)", skill: "grammatik" },
  temporal: { ar: "أدوات الزمن (als, wenn, zuerst …)", skill: "grammatik" },
  gesundheit: { ar: "الجسم والصحة", skill: "wortschatz" },
  beruf: { ar: "العمل والمهن", skill: "wortschatz" },
  reise: { ar: "السفر", skill: "wortschatz" },
  medien: { ar: "الإعلام والتواصل", skill: "wortschatz" }
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

/* Pictures (emoji) for concrete nouns — shown in vocabulary lists, flashcards and quizzes */
(window.COURSE = window.COURSE || { lessons: [] }).pics = {
  Herr: "👨", Frau: "👩", Universität: "🏛️", Student: "🧑‍🎓", Studentin: "👩‍🎓", Professor: "👨‍🏫", Professorin: "👩‍🏫", Informatik: "💻", Medizin: "🩺", Wirtschaft: "📈", Architektur: "📐", Mathematik: "➗", Physik: "⚛️", Chemie: "🧪", Philosophie: "🤔", Jura: "⚖️",
  Lehrer: "👨‍🏫", Lehrerin: "👩‍🏫", Ingenieur: "👷‍♂️", Ingenieurin: "👷‍♀️", Schüler: "🧒", Schülerin: "👧", Sprache: "🗣️", Gespräch: "💬", Interview: "🎙️", Name: "🏷️", Adresse: "🏠", Straße: "🛣️", Hausnummer: "🔢", Postleitzahl: "📮",
  Telefon: "☎️", Telefonnummer: "☎️", Handy: "📱", Handynummer: "📱", "E-Mail-Adresse": "📧", Zahl: "🔢", Stift: "🖊️", Kugelschreiber: "🖊️", Heft: "📓", Buch: "📕", Wörterbuch: "📖", Tafel: "🧑‍🏫", Tisch: "🪑", Stuhl: "🪑",
  Bild: "🖼️", Ball: "⚽", Apfel: "🍎", Gruppe: "👥", Projektor: "📽️", Tablet: "📱", Radiergummi: "🧽", Tasche: "👜", Fenster: "🪟", Tür: "🚪", Auto: "🚗", Plattenspieler: "📀", Schallplatte: "💿", Schreibmaschine: "⌨️",
  Kamera: "📷", Fotoapparat: "📷", Foto: "🖼️", Kassette: "📼", Diskette: "💾", Computer: "🖥️", Laptop: "💻", Smartphone: "📱", "USB-Stick": "💾", Akku: "🔋", Navigationsgerät: "🧭", Kreditkarte: "💳", Bibliothek: "📚", Film: "🎬", Musik: "🎵",
  Familie: "👨‍👩‍👧‍👦", Eltern: "👫", Vater: "👨", Mutter: "👩", Kind: "🧒", Sohn: "👦", Tochter: "👧", Geschwister: "👫", Bruder: "👦", Schwester: "👧", Großeltern: "👴👵", Großvater: "👴", Großmutter: "👵", Opa: "👴", Oma: "👵", Onkel: "👨", Tante: "👩",
  Enkel: "👶", Enkelin: "👶", Partner: "🧑‍🤝‍🧑", Partnerin: "🧑‍🤝‍🧑", Freund: "🧑‍🤝‍🧑", Freundin: "👭", Junge: "👦", Mädchen: "👧", Mensch: "🧍", Hund: "🐕",
  Restaurant: "🍽️", Gast: "🧑", Kellner: "🤵", Kellnerin: "🤵‍♀️", Speisekarte: "📜", Gericht: "🍲", Vorspeise: "🥗", Hauptspeise: "🍛", Dessert: "🍨", Suppe: "🍜", Salat: "🥗", Schnitzel: "🍖", Fisch: "🐟", Fleisch: "🥩", Kartoffel: "🥔",
  "Pommes frites": "🍟", Eis: "🍦", Sahne: "🍦", Wasser: "💧", Mineralwasser: "🫧", Cola: "🥤", Limonade: "🍋", Saft: "🧃", Tee: "🍵", Kaffee: "☕", Trinkgeld: "🪙",
  Wochentag: "📅", Wochenende: "🎉", Montag: "📅", Dienstag: "📅", Mittwoch: "📅", Donnerstag: "📅", Freitag: "📅", Samstag: "📅", Sonntag: "📅",
  Vorlesung: "🎓", Klausur: "📝", Referat: "🗣️", Mensa: "🍱", Semester: "🎓", Termin: "📆", Terminkalender: "📆", Stundenplan: "🗓️", Zeit: "⏰", Uhr: "🕒", Stunde: "⏳", Minute: "⏱️", Woche: "🗓️",
  Morgen: "🌅", Vormittag: "🌤️", Mittag: "☀️", Nachmittag: "🌇", Abend: "🌆", Nacht: "🌙", Supermarkt: "🛒", Lebensmittel: "🛒", Einkaufszettel: "📝", Angebot: "🏷️", Bäckerei: "🥖", Kunde: "🧑", Kundin: "👩", Verkäufer: "🧑‍💼", Verkäuferin: "👩‍💼",
  Obst: "🍇", Gemüse: "🥦", Banane: "🍌", Orange: "🍊", Erdbeere: "🍓", Weintraube: "🍇", Tomate: "🍅", Karotte: "🥕", Gurke: "🥒", Bohne: "🫘", Hackfleisch: "🥩", Rindfleisch: "🥩", Wurst: "🌭", Käse: "🧀", Milch: "🥛", Butter: "🧈",
  Joghurt: "🥛", Ei: "🥚", Brot: "🍞", Brötchen: "🥯", Reis: "🍚", Zucker: "🍬", Salz: "🧂", Öl: "🫒", Marmelade: "🍯", Schokolade: "🍫", Müsli: "🥣", Flasche: "🍾", Glas: "🫙", Becher: "🥤", Packung: "📦", Päckchen: "📦", Dose: "🥫", Tüte: "🛍️",
  Stück: "🍰", Kilo: "⚖️", Gramm: "⚖️", Pfund: "⚖️", Liter: "🧴", Euro: "💶", Cent: "🪙",
  Insel: "🏝️", Hafen: "⚓", Strand: "🏖️", Berg: "⛰️", Fluss: "🏞️", Kirche: "⛪", Museum: "🏛️", Denkmal: "🗽", Sehenswürdigkeit: "📸", Ausflug: "🚌", Landkarte: "🗺️", Postkarte: "💌", Freizeit: "🏖️", Wetter: "🌦️", Sonne: "☀️", Grad: "🌡️",
  Grippe: "🤒", Pech: "😣", Glück: "🍀", Pullover: "🧶", Frühstück: "🍳", Mittagessen: "🍝", Abendessen: "🍲", Konzert: "🎤", Stadt: "🏙️", Stadtmagazin: "📰", Theater: "🎭", Bühne: "🎭", Literatur: "📚", Büro: "🏢", Schreibtisch: "🗄️",
  Prüfung: "📝", Geld: "💰", Picknick: "🧺", Park: "🌳", Kino: "🎬", Fahrradtour: "🚴", Kurznachricht: "💬", Schinken: "🥓", Streuselkuchen: "🍰", Kuchen: "🎂", Party: "🎉", Bus: "🚌", Müll: "🗑️",
  Beruf: "💼", Arbeit: "💼", Webentwickler: "👨‍💻", Informatiker: "👨‍💻", Informatikerin: "👩‍💻", Schauspieler: "🎭", Arzt: "👨‍⚕️", Ärztin: "👩‍⚕️", Koch: "👨‍🍳", Köchin: "👩‍🍳", Jurist: "⚖️", Architekt: "📐", Automechaniker: "🔧", Sänger: "🎤",
  Kollege: "🧑‍💼", Kollegin: "👩‍💼", Chef: "👔", Chefin: "👩‍💼", Unternehmen: "🏢", Firma: "🏢", Team: "👥", Meeting: "👥", Besprechung: "👥", Treffen: "🤝", Urlaub: "🏖️", Geburtstag: "🎂", Jahr: "📅", Monat: "🗓️", Datum: "📅",
  Jahreszeit: "🍂", Frühling: "🌷", Sommer: "☀️", Herbst: "🍂", Winter: "❄️", Hobby: "🎨", "Schwarze Brett": "📌", Anzeige: "📢", Zeitung: "📰", Gitarre: "🎸", Klavier: "🎹", Schach: "♟️", Oper: "🎼", Internet: "🌐", Sofa: "🛋️",
  Sport: "🏅", Training: "🏋️", Lauftraining: "🏃", Mannschaft: "👥", Spiel: "🎮", Spieler: "⛹️", Fan: "📣", "Fitness-Studio": "🏋️", Sporthalle: "🏟️", Kilometer: "📏", Muskelkater: "💪", Flyer: "📄", Langschläfer: "😴", Lauf: "🏃",
  Start: "🏁", Ziel: "🎯", Sieger: "🏆", Siegerin: "🏆", Rekord: "🥇", Publikum: "👏", Applaus: "👏", Zeitungsartikel: "📰",
  Zimmer: "🚪", Einzelzimmer: "🛏️", Wohnung: "🏢", Haus: "🏠", Apartment: "🏢", Wohnheim: "🏢", Wohngemeinschaft: "🏘️", Miete: "💶", Schlüssel: "🔑", Küche: "🍳", Bad: "🛁", Heizung: "🔥", Nachricht: "✉️", Überraschung: "🎁",
  Möbel: "🛋️", Bett: "🛏️", Schrank: "🗄️", Kleiderschrank: "🚪", Kühlschrank: "🧊", Sessel: "💺", Regal: "📚", Lampe: "💡", Kommode: "🗄️", Spiegel: "🪞", Matratze: "🛏️", Teppich: "🧶", Herd: "🍳", Pinnwand: "📌", Holz: "🪵", Metall: "🔩",
  Kunststoff: "🧴", WG: "🏘️", Eimer: "🪣", Wand: "🧱", Boden: "🟫", Leute: "👥", Plan: "🗒️",
  Waschsalon: "🧺", Wäsche: "👕", Waschmaschine: "🫧", Trockner: "🌀", Waschpulver: "🧼", Waschkorb: "🧺", Automat: "🏧", Anleitung: "📋", Münze: "🪙", Espresso: "☕", Milchkaffee: "☕", Schokoladenkuchen: "🍰", Kasse: "🧾",
  Kleidung: "👚", Kleidungsstück: "👕", Hose: "👖", Jeans: "👖", "T-Shirt": "👕", Hemd: "👔", Bluse: "👚", Jacke: "🧥", Mantel: "🧥", Anzug: "🤵", Kleid: "👗", Rock: "👗", Socke: "🧦", Schuh: "👞", Schal: "🧣", Mütze: "🧢", Hut: "🎩",
  Handschuh: "🧤", Krawatte: "👔", Gürtel: "🪢", Baumwolle: "🌱", Wolle: "🧶", Leder: "👞", Seide: "🎀", Farbe: "🎨", Angst: "😨", Umkleidekabine: "🚪",
  Gedicht: "📜", Roman: "📖", Lösung: "💡", Touristeninformation: "ℹ️", Stadtplan: "🗺️", Führung: "🚶", Turm: "🗼", Glocke: "🔔", Münster: "⛪", Parlament: "🏛️", Gebäude: "🏢", Kreuzung: "🚦", Weg: "🛤️", Bahnhof: "🚉", Haltestelle: "🚏",
  Verkehrsmittel: "🚇", Straßenbahn: "🚋", Tram: "🚋", Bahn: "🚆", Fahrrad: "🚲", Velo: "🚲", Fahrkarte: "🎫", Tageskarte: "🎫", Fahrkartenautomat: "🎫", Grillparty: "🍖", Einladung: "💌", Geschenk: "🎁", Blume: "🌷", Gastgeber: "🧑‍🍳", Gastgeberin: "👩‍🍳",
  Fehler: "❌", Appetit: "😋", Ehepaar: "💑", Zukunft: "🔮", Zentrum: "🏙️", Einkaufszentrum: "🏬", Eingang: "🚪", Ausgang: "🚪", Kunst: "🎨", Malerei: "🖌️", Maler: "👨‍🎨", Malerin: "👩‍🎨", Ausstellung: "🖼️", Biografie: "📘", Leben: "🌱",
  Baum: "🌳", Reise: "🧳", Symbol: "🔣", Bär: "🐻"
};
