let quizData = [
    {
        question: 'اعتصموا بحبل الله جميعا سر جمال الاستعارة',
        answer: 'التجسيم',
        options: [
           'التوضيح',
           'التجسيم',
           'التشخيص',
           'التوكيد'
        ]
  },
  {
    question: 'قال تعالى : ( كتاب أنزلناه إليك لتخرج الناس من الظلمات  إلى النور ) نوع الصورة البيانية',
    answer: 'استعارة تصريحية',
    options: [
       'تشبيه بليغ',
       'تشبيه مجمل',
       'استعارة مكنية',
       'استعارة تصريحية'
    ]
  },
  {
    question: 'ما  أجمل النيل والأمواج راقصة  **   فرحانة برمال الشط تلتطم سر جمال الصورة',
    answer: 'التشخيص',
    options: [
       'التجسيم',
       'التوضيح',
       'التجسيد',
       'التشخيص'
    ]
  },
  {
    question: 'الأسود تحرس ثغور الوطن',
    answer: 'استعارة تصريحية',
    options: [
       'تشبيه بليغ',
       'تشبيه مجمل',
       'استعارة مكنية',
       'استعارة تصريحية'
    ]
  },
  {
    question: 'كل ما يلي  فنون النثر الجاهلي ماعدا',
    answer: 'الرسائل',
    options: [
       'الخطب',
       'الحكم',
       'الرسائل',
       'الوصايا'
    ]
  },
  {
    question: '..........رجع بخفي حنين يمثل المقطع السابق فن',
    answer: 'أمثال',
    options: [
       'وضية',
       'حكم',
       'خطب',
       'أمثال'
    ]
  },
  {
    question: 'قال الشاعر: أبيت نجيا للهموم كأنما  **   خلال فراشي جمرة تتوهج',
    answer: 'خبر أبيت منصوب بالفتحة',
    options: [
       'حال منصوبة بالفتحة',
       'تمييز منصوب بالفتحة',
       'خبر أبيت منصوب بالفتحة',
       'مفعول به منصوب بالفتحة'
    ]
  },
  {
    question: '....العجز مفتاح الفقر ، وخير الأمور الصبر المحسن البديعي',
    answer: 'ازدواج',
    options: [
       'حسن تقسيم',
       'ازدواج',
       'مقابلة',
       'جناس'
    ]
  },
  {
    question: 'لى النفوس وللطير اللحوم * وللوحش العظام  وللخيالة السلب نوع البديع',
    answer: 'حسن تقسيم',
    options: [
       'حسن تقسيم',
       'ازدواج',
       'مقابلة',
       'جناس'
    ]
  },
  {
    question: '.......قال عمرو بن كلثوم: ونشرب إن وردنا الماء صفوا  ** ويشرب غيرنا كدرا وطينا ميز الغرض',
    answer: 'الفخر',
    options: [
       'الهجاء',
       'المدح',
       'الفخر',
       'الرثاء'
    ]
  },
  {
    question: 'من أسس البناء الفني للقصيدة الجاهلية',
    answer: 'تعدد الأغراض',
    options: [
       'البدء بالوصف',
       'تعدد الأغراض',
       'صوغها في شكل قصصي',
       'تسجيل تاريخ القبيلة'
    ]
  },
  {
    question: 'مازلنا مهتمين بطلابنا بعد حذف الفعل الناسخ',
    answer: 'نحن مهتمون بطلابنا',
    options: [
       'نحن مهتمين بطلابنا',
       'نحن مهتمون بطلابنا',
       'هم مهتمون بطلابنا',
       'أنتم مهتمون بطلابنا'
    ]
  },
  {
    question: 'إلى الله تصير الأمور',
    answer: 'فاعل مرفوع',
    options: [
       'خبر يصير',
       'فاعل مرفوع',
       'مبتدأ مرفوع',
       'مفعول به مصنوب'
    ]
  },
  {
    question: 'ما برح الرجل وطنه',
    answer: 'تامة',
    options: [
       'تامة',
       'ناقصة',
       'تامة تصرف',
       'جامدة'
    ]
  },
  {
    question: 'مازال الإسلام نوره ساطع',
    answer: 'اسم مازال',
    options: [
       'اسم مازال',
       'خبر مازال',
       'فاعل',
       'مفعول به'
    ]
  },
  ];
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const resultBox = document.querySelector('.result-box');
  const tryagainBtn = document.querySelector('.tryAgain-btn');
  const showAnswerBtn = document.querySelector('.showanswer-btn');


  tryagainBtn.onclick = () => {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    questionNumb = 1;
    quizContainer.style.display = 'block';
    nextBtn.classList.remove('activew');
    backBtn.style.display = 'inline-block';
    resultContainer.innerHTML = '';
    backBtn.classList.remove('activee');    
    resultBox.classList.remove('active'); 
    finishBtn.classList.remove('active');

    displayQuestion();
    questioncounter(questionNumb);
  }

  showAnswerBtn.onclick = () => {
    quizContainer.style.display = 'none';
    nextBtn.style.display = 'none';
    backBtn.style.display = 'none';
    resultBox.classList.remove('active');  
    finishBtn.classList.remove('active');


    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p class="check">
          <div class="text"> ${incorrectAnswers[i].question} </div> <strong>:السؤال</strong> <br>
          <div class="text"> ${incorrectAnswers[i].incorrectAnswer} </div> <strong>:اجابتك</strong> <br>
          <div class="text"> ${incorrectAnswers[i].correctAnswer} </div> <strong>:الاجابة الصحيحة</strong>
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <h2>الأسئلة الخاطئة</h2>
      ${incorrectAnswersHtml}
    `;
  }



  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  let questionNumb = 1;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
      
    }
  }
  
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
    
    
    questioncounter(questionNumb);
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
    
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
    
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
    
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
      
      option.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        option.classList.add('active');
      
    });
  
  
    
        

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
      
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
      
    }
    
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  



  const nextBtn = document.querySelector('.next-btn');

  nextBtn.onclick = () => {
    
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }};
    
            
  if (currentQuestion < quizData.length -1) {
      currentQuestion++;
      displayQuestion();

      questionNumb++;
      questioncounter(questionNumb);
    backBtn.classList.add('activee');
  }
     
  else {
      finishBtn.classList.add('active');
      nextBtn.classList.add('activew');
    }
    
  };

  const finishBtn = document.querySelector('.finish-btn');

finishBtn.onclick = () => {
    showResultBox();
}
  
  const backBtn = document.querySelector('.back-btn');
  
  backBtn.onclick = () => {
    currentQuestion--;
    displayQuestion();
    questionNumb--;
    questioncounter(questionNumb);
    
    finishBtn.classList.remove('active');
    nextBtn.classList.remove('activew');
    
    if (currentQuestion <= 0) {
      
    backBtn.classList.remove('activee')
      
    }
    
  }

  function questioncounter(index) {
    const questionTotal =document.querySelector('.question-total');
    questionTotal.textContent = `${quizData.length}  السؤال ${index} من`
}


  function showResultBox() {
  resultBox.classList.add('active');
  quizContainer.style.display = 'none';

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = ` الاجابة الصحيحة  ${score} من ${quizData.length}`;

    const circularprogress = document.querySelector('.circular-progress');
    const progressValue =document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = (Math.floor((score / quizData.length) * 100));
    let speed =20;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularprogress.style.background = `conic-gradient(#c40094 ${progressStartValue *3.6}deg, rgba(255, 255, 255, .1) 0deg)`;
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}




  displayQuestion();