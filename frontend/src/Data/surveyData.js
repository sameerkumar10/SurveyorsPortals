const surveyJson = {
  title: "GPRSS Feedback",
  description: "GPR Strategies and Solutions",
  logo: "https://gprss.in/feedback/logo.webp",
  logoWidth: "200px",
  logoHeight: "100px",
  logoPosition: "right",
  clearInvisibleValues: "onHidden", // Clear values when questions are hidden
  pages: [
    {
      name: "page1",
      description:
        "प्रिय बहन,\r\nउन्नारी को और बेहतर बनाने के लिए आपका सुझाव, अनुभव व् प्रतिक्रिया बहुत ज़रूरी है. आपका सुझाव हमारे लिए महत्वपूर्ण है. सर्वे में दी गयी जानकारी गोपनीय रखी जाएगी व् फ़ोन नंबर, फोटो आदि हमारे साथ सुरक्षित रहेगा।\r\nधन्यवाद!",
      elements: [
        {
          type: "text",
          name: "question1",
          title: "नाम :",
          isRequired: true,
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "text",
          name: "question2",
          title: "पिता / पति का नाम : ",
          isRequired: true,
        },
      ],
    },
    {
      name: "page3",
      elements: [
        {
          type: "comment",
          name: "question3",
          title: "पता :",
          isRequired: true,
        },
      ],
    },
    {
      name: "page4",
      elements: [
        {
          type: "text",
          name: "question4",
          title: "उम्र :",
          isRequired: true,
        },
      ],
    },
    {
      name: "page5",
      elements: [
        {
          type: "text",
          name: "question5",
          title: "फ़ोन नबर :",
          isRequired: true,
        },
      ],
    },
    {
      name: "page6",
      elements: [
        {
          type: "text",
          name: "question6",
          title: " हिाटसएप  नबर :",
          isRequired: true,
        },
      ],
    },
    {
      name: "page7",
      elements: [
        {
          type: "text",
          name: "question7",
          title: " पररवार वगि : प्रनम्न आय / माध्यम आय / उच्च आय ",
          isRequired: true,
        },
      ],
    },
    {
      name: "page8",
      elements: [
        {
          type: "checkbox",
          name: "question8",
          title: " अध्यवसाय :  ",
          isRequired: true,
          choices: [
            { value: "Item 1", text: "Working woman" },
            { value: "Item 2", text: "School student" },
            { value: "Item 3", text: "College student" },
            { value: "Item 4", text: "Housewife" },
          ],
        },
      ],
    },
    {
      name: "page9",
      elements: [
        {
          type: "checkbox",
          name: "question9",
          title: "आपने किस प्रकार के सेनेटरी नैपकिन का उपयोग किया है?  ",
          isRequired: true,
          choices: [
            { value: "Item 1", text: "Sakhi" },
            { value: "Item 2", text: "Sukanya" },
            { value: "Item 3", text: "Srishti" },
            { value: "Item 4", text: "Nari" },
            { value: "Item 5", text: "Vama" },
            { value: "Item 6", text: "Shakti" },
          ],
        },
      ],
    },
    {
      name: "page10",
      elements: [
        {
          type: "tagbox",
          name: "question10",
          title: "आप तक यह उत्पाद किस प्रकार पहुँच| :",
          choices: [
            { value: "Item 1", text: "From retail store" },
            { value: "Item 2", text: "From self-help group" },
            { value: "Item 3", text: "From Sahaj Market Team member" },
          ],
          showOtherItem: true,
          otherText: "Other",
        },
      ],
    },
    {
      name: "page11",
      elements: [
        {
          type: "text",
          name: "question11",
          title: {
            default: "10.A - आप ने किस मूल्य में यह प्रोडक्ट लिया ?",
            en: "10.A - What price did you purchase this product for?",
          },
          isRequired: true,
        },
      ],
    },
    {
      name: "page12",
      elements: [
        {
          type: "html",
          name: "image1",
          html: "<img src='https://img.etimg.com/thumb/width-1200,height-1200,imgsize-33030,resizemode-75,msid-104106414/news/india/the-menstrual-waste-conundrum-in-india-and-why-its-proving-to-be-a-big-bloody-mess-for-sustainability.jpg' alt='Image' style='width:150px;height:auto; margin-left:20px;'/>",
        },
        {
          type: "text",
          name: "question12",
          title: {
            default: "10.B - आप के पैकेट में कितने नैपकिन थे ?",
            en: "10.B - How many napkins were in your packet?",
          },
          isRequired: true,
        },
      ],
    },
    {
      name: "page13",
      elements: [
        {
          type: "imagepicker",
          name: "question13",
          title: "क्या नैपकिन इसमे से कोई था ?",
          choices: [
            { value: "Image 1", imageLink: "https://api.surveyjs.io/private/Surveys/files?name=80be44d9-1303-476d-9c96-050842475384" },
            { value: "Image 2", imageLink: "https://api.surveyjs.io/private/Surveys/files?name=9da61f97-bcaa-48b4-9119-7f22e8b4c9e9" },
            { value: "Image 3", imageLink: "https://api.surveyjs.io/private/Surveys/files?name=1cf435bd-5a1f-43de-8434-635bf5660e2e" },
            { value: "Image 4", imageLink: "https://api.surveyjs.io/private/Surveys/files?name=af1f1095-b952-48bc-8623-1125756a25c0" },
            { value: "Image 5", imageLink: "https://api.surveyjs.io/private/Surveys/files?name=c932f047-099c-4b07-94a9-33e33fb4e9a8" },
            { value: "Image 6", imageLink: "https://api.surveyjs.io/private/Surveys/files?name=36d48fae-52a6-4530-bc62-830d1827950c" },
          ],
          imageFit: "cover",
        },
      ],
    },
    {
      name: "page14",
      description: "कपया ब्रांड का चयन करें और मूल्य इनपुट करें",
      elements: [
        {
          type: "radiogroup",
          name: "question18",
          title: "कृपया नैपकिन ब्रांड चुनें:",
          choices: [
            { value: "A. Whisper", text: "विश्पर" },
            { value: "B. Carefree", text: "केयर फ्री" },
            { value: "C. Kotex", text: "कोटेक्स" },
            { value: "D. Stayfree", text: "स्टे फ्री" },
            { value: "E. Vwow", text: "वाओ" },
            { value: "F. She", text: "शी" },
            { value: "G. Sofy", text: "सोफी" },
            { value: "H. Snowie", text: "स्नोई" },
            { value: "J. Anganwadi/Mitanin", text: "आंगनवाड़ी / मितानिन से" },
            { value: "K. No Napkin Used", text: "कोई नैपकिन उपयोग नहीं करते हैं" },
            
          ],
          isRequired: true,
          showOtherItem: true,
        },
      ],
    },
    {
      name: "page15",
      elements: [
        {
          type: "text",
          name: "brandPrice",
          title: {
            default: "Brand Price:",
            hi: "ब्रांड मूल्य:",
            bn: "ব্র্যান্ড মূল্য:",
            te: "బ్రాండ్ ధర:",
            mr: "ब्रँड किंमत:",
            ta: "பிராண்ட் விலை:",
            gu: "બ્રાન્ડ કિંમત:",
            kn: "ಬ್ರ್ಯಾಂಡ್ ಬೆಲೆ:",
            ml: "ബ്രാന്‍ഡ് വില:",
            pa: "ਬ੍ਰਾਂਡ ਦੀ ਕੀਮਤ:",
            or: "ବ୍ରାଣ୍ଡ ମୂଲ୍ୟ:",
            as: "ব্ৰেণ্ডৰ মূল্য:",
            ma: "ब्रांड मूल्य:",
            bh: "ब्रांड मूल्य:",
          },
          visibleIf: "{question18} != 'I. Other'",
          isRequired: true,
        },
        {
          type: "text",
          name: "otherBrandPrice",
          title: {
            default: "Other Brand Price:",
            hi: "अन्य ब्रांड मूल्य:",
            bn: "অন্যান্য ব্র্যান্ড মূল্য:",
            te: "ఇతర బ్రాండ్ ధర:",
            mr: "इतर ब्रँड किंमत:",
            ta: "மற்ற பிராண்ட் விலை:",
            gu: "અન્ય બ્રાન્ડ કિંમત:",
            kn: "ಇತರೆ ಬ್ರ್ಯಾಂಡ್ ಬೆಲೆ:",
            ml: "മറ്റ് ബ്രാന്‍ഡ് വില:",
            pa: "ਹੋਰ ਬ੍ਰਾਂਡ ਦੀ ਕੀਮਤ:",
            or: "ଅନ୍ୟ ବ୍ରାଣ୍ଡ ମୂଲ୍ୟ:",
            as: "অন্যান্য ব্ৰেণ্ডৰ মূল্য:",
            ma: "अन्य ब्रांड मूल्य:",
            bh: "अन्य ब्रांड मूल्य:",
          },
          visibleIf: "{question18} = 'I. Other'",
          isRequired: true,
        },
      ],
    },
    {
      name: "page16",
      elements: [
        {
          type: "text",
          name: "whisperPrice",
          title: {
            default: "Whisper / Rs - ......../ per pack piece -.........",
            hi: "विश्पर / रु - ......../ प्रति पैक पीस -.........",
            bn: "বিশ্পার / টাকা - ......../ প্রতি প্যাক পিস -.........",
            te: "విస్పర్ / రూ - ......../ ప్యాక్ పీస్ -.........",
            mr: "विस्पर / रु - ......../ प्रति पॅक तुकडा -.........",
            ta: "விஸ்பர் / ரூ - ......../ பாய் பீஸ் -.........",
            gu: "વિસ્પર / રૂ - ......../ પેક ટુકડો -.........",
            kn: "ವಿಸ್ಪರ್ / ರೂ - ......../ ಪ್ಯಾಕ್ ತುಂಡು -.........",
            ml: "വിസ്പര് / രൂ - ......../ പാക്ക് പീസ് -.........",
            pa: "ਵਿਸਪਰ / ਰੁ - ......../ ਪ੍ਰਤੀ ਪੈਕ ਪੀਸ -.........",
            or: "ଵିଶ୍ପର / ରୁ - ......../ ପ୍ୟାକ ପିସ -.........",
            as: "ৱিস্পাৰ / টকা - ......../ প্ৰতি পেক পিচ -.........",
            ma: "विस्पर / रु - ......../ प्रति पैक पीस -.........",
            bh: "विसपर / रु - ......../ प्रति पैक पीस -.........",
          },
          visibleIf: "{question18} = 'A. Whisper'",
          isRequired: true,
        },
        {
          type: "text",
          name: "carefreePrice",
          title: "केयर फ्री / रु. .........../ प्रति पैक पीस ...........",
          visibleIf: "{question18} = 'B. Carefree'",
          isRequired: true,
        },
        {
          type: "text",
          name: "kotexPrice",
          title: "कोटेक्स / रु. .........../ प्रति पैक पीस ...........",
          visibleIf: "{question18} = 'C. Kotex'",
          isRequired: true,
        },
        {
          type: "text",
          name: "stayfreePrice",
          title: "स्टे फ्री / रु. .........../ प्रति पैक पीस ...........",
          visibleIf: "{question18} = 'D. Stayfree'",
          isRequired: true,
        },
        {
          type: "text",
          name: "vwowPrice",
          title: "वाओ / रु. .........../ प्रति पैक पीस ...........",
          visibleIf: "{question18} = 'E. Vwow'",
          isRequired: true,
        },
        {
          type: "text",
          name: "shePrice",
          title: "शी / रु. .........../ प्रति पैक पीस ...........",
          visibleIf: "{question18} = 'F. She'",
          isRequired: true,
        },
        {
          type: "text",
          name: "sofyPrice",
          title: "सोफी / रु. .........../ प्रति पैक पीस ...........",
          visibleIf: "{question18} = 'G. Sofy'",
          isRequired: true,
        },
        {
          type: "text",
          name: "snowiePrice",
          title: "स्नोई / रु. .........../ प्रति पैक पीस ...........",
          visibleIf: "{question18} = 'H. Snowie'",
          isRequired: true,
        },
        {
          type: "text",
          name: "anganwadiMitaninPrice",
          title: "आंगनवाड़ी / मितानिन से / रु. .........../ प्रति पैक पीस ...........",
          visibleIf: "{question18} = 'J. Anganwadi/Mitanin'",
          isRequired: true,
        },
        {
          type: "text",
          name: "otherBrandDetails",
          title: "अन्य / रु. .........../ प्रति पैक पीस ...........",
          visibleIf: "{question18} = 'I. Other'",
          isRequired: true,
        },
      
       
      ],
    },
    {
      name: "page17",
      description:
        "कपया सहज के उपयोग से जुड़े अपने अनुभवों को निम्न बिन्दुओं पर अंको / उत्तरों के माध्यम से दर्शितकरें :(बुरे अनुभव के लिए 1 और सर्वोत्तम अनुभव के लिए 5 लिखें)\r\n\n\n",
      elements: [
        {
          type: "rating",
          name: "question15",
          title: "नैपकिन चूने में कैसे थी  ?",
          isRequired: true,
          rateType: "smileys",
        },
      ],
    },
    {
      name: "page18",
      elements: [
        {
          type: "rating",
          name: "question16",
          title: "शोकने की छमता ?",
          isRequired: true,
          rateType: "stars",
        },
      ],
    },
    {
      name: "page19",
      elements: [
        {
          type: "rating",
          name: "question17",
          title: "चिपकने की क्षमता ? ",
          isRequired: true,
          rateType: "stars",
        },
      ],
    },
    {
      name: "page20",
      elements: [
        {
          type: "boolean",
          name: "question28",
          title: {
            default: " No napkin used",
            hi: " कोई नैपकिन उपयोग नहीं करते हैं",
            bn: " কোনো ন্যাপকিন ব্যবহার করেন না",
            te: " నాప్‌కిన్ వాడలేదు",
            mr: " कोणताही नैपकिन वापरत नाही",
            ta: " எந்த நாப்கினும் பயன்படுத்தவில்லை",
            gu: " કોઈ નૅપકિન વાપરતા નથી",
            kn: " ನಾಪ್ಕಿನ್ ಬಳಸಿಲ್ಲ",
            ml: " কোনো ন্যাপকিন ব্যবহার করেন না",
            pa: " ਕੋਈ ਨੈਪਕਿਨ ਵਰਤੋ ਨਹੀਂ",
            or: " କୌଣସି ନାପକିନ୍ ବ୍ୟବହାର କରନ୍ତି ନାହିଁ",
            as: " কোনো ন্যাপকিন ব্যৱহাৰ নকৰা",
            ma: " कोनो नैपकिन उपयोग नहि करैत छी",
            bh: " कोई नैपकिन उपयोग नहीं करते हैं",
          },
          isRequired: true,
        },
      ],
    },
    {
      name: "page21",
      elements: [
        {
          type: "text",
          name: "question29",
          title: "आप किस मूल्य पर यह उत्पाद लेना चाहेंगे?\n",
          isRequired: true,
        },
      ],
    },
    {
      name: "page22",
      elements: [
        {
          type: "comment",
          name: "question30",
          title: "अन्य सुझाव: ",
        },
      ],
    },
    {
      name: "page23", // Add a new page or an existing page where you want the image capture question
      elements: [
        {
          type: "file",
          name: "photoCapture",
          title: {
            default: "Please take a photo:",
            hi: "कृपया एक फोटो लें:",
            bn: "অনুগ্রহ করে একটি ছবি তুলুন:",
            te: "దయచేసి ఫోటో తీయండి:",
            mr: "कृपया एक फोटो घ्या:",
            ta: "தயவுசெய்து ஒரு புகைப்படம் எடுக்கவும்:",
            gu: "કૃપા કરીને એક ફોટો લો:",
            kn: "ದಯವಿಟ್ಟು ಒಂದು ಫೋಟೋ ತೆಗೆದುಕೊಳ್ಳಿ:",
            ml: "ദയവായി ഒരു ഫോട്ടോ എടുക്കുക:",
            pa: "ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਫੋਟੋ ਲਵੋ:",
            or: "ଦୟାକରି ଗୋଟିଏ ଫୋଟୋ ନିଅନ୍ତୁ:",
            as: "অনুগ্ৰহ কৰি এটি ফটো লৈলাওক:",
            ma: "कृपया एक फोटो लिअ:",
            bh: "कृपया एक फोटो लें:",
          },
          isRequired: true,
          storeDataAsText: false,
          allowMultiple: false,
          showPreview: true,
          imageHeight: "auto",
          imageWidth: "300px",
          acceptedTypes: "image/*",
          capture: "user",
        },
      ],
    },
  ],
};

export default surveyJson;
