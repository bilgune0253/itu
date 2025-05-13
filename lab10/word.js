const gameData = {
    wordList: [
        { word: "ЖАВХЛАН", hint: "Муис-ын царайлаг багш нарын нэг?" },
        { word: "ТЭНГЭР", hint: "Дээшээ харвал үзэгдэх зүйл?" },
        { word: "НАР", hint: "Өдөр биднийг гэрэлтүүлдэг?" },
        { word: "НОМ", hint: "Ертөнцийг харах цонх?" },
        { word: "ИХСУРГУУЛЬ", hint: "Оюутан сурагчид суралцдаг газар?" },
        { word: "ЦАГ", hint: "Хугацааг заадаг зүйл?" },
        { word: "УС", hint: "Шингэн алт?" },
        { word: "МОД", hint: "Ойд ургадаг ногоон ургамал?" },
        { word: "ЗАГАС", hint: "Усанд амьдардаг...?" },
        { word: "ЭЭЖ", hint: "Таныг төрүүлсэн хүн?" },
        { word: "ХАЙР", hint: "Анхны үнсэлт өгч дурлал дууссанаар юу эхэлдэг вэ?" },
        { word: "НОХОЙ", hint: "үнэнч амьтан?" },
        { word: "ЦЭЦЭГ", hint: "Сайхан үнэртэй, гоё өнгөтэй ургамал?" },
        { word: "МАШИН", hint: "Хүмүүс болон бусад зүйлсийг тээвэрлэдэг төмөр?" },
        { word: "НОГООН", hint: " Цэнхэр, шар өнгөний дундаас ямар өнгө гардаг вэ?" },
        { word: "НООЛУУР", hint: "Маш нарийн зөөлөн ноос?" },
        { word: "ЭЛС", hint: "Шилийг юунаас гарган авдаг вэ?   " },
        { word: "ХООРМОГ", hint: "Ингэний сүүгээр хийсэн ундаа?  " },
        { word: "ӨЛЗИЙХҮҮ", hint: "Мануухайгийн нөгөө нэр?" },
        { word: "АЛТАНГАДАС", hint: "Чанх хойд зүгийг заадаг од?" },
        { word: "ТЭМЭЭ", hint: "12 жилд багтаагүй амьтан?" },
    ],
    usedIndices: [], 
    currentWord: "",
    currentHint: "",
    guessedLetters: [],
    wrongGuesses: 0,
    score: 0,
    timer: 60,
    timerInterval: null,
    isGameActive: false,
    playerName: "",
};

function getNewWord() {
    if (gameData.usedIndices.length === gameData.wordList.length) {
        alert("Бүх үг хэрэглэгдсэн байна!"); // Эсвэл: gameData.usedIndices = []; // дахин эхлүүлэх
        return;
    }

    let index;
    do {
        index = Math.floor(Math.random() * gameData.wordList.length);
    } while (gameData.usedIndices.includes(index)); // давхацаж байвал дахин сонгоно

    gameData.usedIndices.push(index); // хэрэглэсэнд бүртгэнэ
    const selected = gameData.wordList[index];
    gameData.currentWord = selected.word;
    gameData.currentHint = selected.hint;
}
