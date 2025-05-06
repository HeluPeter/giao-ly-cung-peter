
// Data structure for lessons, sets, and words
const vocabularyData = {
    lessons: [
        {
            id: 1,
            title: "Lesson 1: Animals",
            color: "bg-blue-100",
            borderColor: "border-blue-300",
            textColor: "text-blue-700",
            icon: "1️⃣",
            sets: [
                {
                    id: 1,
                    title: "Set 1: Mammals",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "guess the word guess the word" },
                        { word: "Elephant" },
                        { word: "Giraffe" },
                        { word: "Dolphin" },
                        { word: "Kangaroo" },
                        { word: "Tiger" },
                        { word: "Bear" },
                        { word: "Wolf" },
                        { word: "Monkey" },
                        { word: "Zebra" }
                    ]
                },
                {
                    id: 2,
                    title: "Set 2: Birds",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Eagle" },
                        { word: "Penguin" },
                        { word: "Owl" },
                        { word: "Parrot" },
                        { word: "Flamingo" },
                        { word: "Peacock" },
                        { word: "Hummingbird" },
                        { word: "Swan" },
                        { word: "Toucan" },
                        { word: "Ostrich" }
                    ]
                },
                {
                    id: 3,
                    title: "Set 3: Reptiles",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Crocodile" },
                        { word: "Snake" },
                        { word: "Turtle" },
                        { word: "Lizard" },
                        { word: "Gecko" },
                        { word: "Iguana" },
                        { word: "Chameleon" },
                        { word: "Alligator" },
                        { word: "Komodo Dragon" },
                        { word: "Tortoise" }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Lesson 2: Food",
            color: "bg-green-100",
            borderColor: "border-green-300",
            textColor: "text-green-700",
            icon: "2️⃣",
            sets: [
                {
                    id: 1,
                    title: "Set 1: Fruits",
                    color: "bg-green-50",
                    borderColor: "border-green-200",
                    words: [
                        { word: "Apple" },
                        { word: "Banana" },
                        { word: "Orange" },
                        { word: "Strawberry" },
                        { word: "Grape" },
                        { word: "Watermelon" },
                        { word: "Pineapple" },
                        { word: "Mango" },
                        { word: "Kiwi" },
                        { word: "Peach" }
                    ]
                },
                {
                    id: 2,
                    title: "Set 2: Vegetables",
                    color: "bg-green-50",
                    borderColor: "border-green-200",
                    words: [
                        { word: "Carrot" },
                        { word: "Broccoli" },
                        { word: "Potato" },
                        { word: "Tomato" },
                        { word: "Cucumber" },
                        { word: "Spinach" },
                        { word: "Onion" },
                        { word: "Lettuce" },
                        { word: "Corn" },
                        { word: "Peas" }
                    ]
                },
                {
                    id: 3,
                    title: "Set 3: Desserts",
                    color: "bg-green-50",
                    borderColor: "border-green-200",
                    words: [
                        { word: "Cake" },
                        { word: "Ice Cream" },
                        { word: "Cookie" },
                        { word: "Pie" },
                        { word: "Chocolate" },
                        { word: "Pudding" },
                        { word: "Cupcake" },
                        { word: "Brownie" },
                        { word: "Donut" },
                        { word: "Cheesecake" }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Lesson 3: Travel",
            color: "bg-purple-100",
            borderColor: "border-purple-300",
            textColor: "text-purple-700",
            icon: "3️⃣",
            sets: [
                {
                    id: 1,
                    title: "Set 1: Transportation",
                    color: "bg-purple-50",
                    borderColor: "border-purple-200",
                    words: [
                        { word: "Airplane" },
                        { word: "Train" },
                        { word: "Car" },
                        { word: "Bus" },
                        { word: "Bicycle" },
                        { word: "Ship" },
                        { word: "Subway" },
                        { word: "Taxi" },
                        { word: "Helicopter" },
                        { word: "Motorcycle" }
                    ]
                },
                {
                    id: 2,
                    title: "Set 2: Destinations",
                    color: "bg-purple-50",
                    borderColor: "border-purple-200",
                    words: [
                        { word: "Beach" },
                        { word: "Mountain" },
                        { word: "City" },
                        { word: "Forest" },
                        { word: "Island" },
                        { word: "Desert" },
                        { word: "Lake" },
                        { word: "Waterfall" },
                        { word: "Volcano" },
                        { word: "Canyon" }
                    ]
                },
                {
                    id: 3,
                    title: "Set 3: Travel Items",
                    color: "bg-purple-50",
                    borderColor: "border-purple-200",
                    words: [
                        { word: "Passport" },
                        { word: "Suitcase" },
                        { word: "Map" },
                        { word: "Camera" },
                        { word: "Sunscreen" },
                        { word: "Backpack" },
                        { word: "Ticket" },
                        { word: "Guidebook" },
                        { word: "Sunglasses" },
                        { word: "Wallet" }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Lesson 4: Professions",
            color: "bg-red-100",
            borderColor: "border-red-300",
            textColor: "text-red-700",
            icon: "4️⃣",
            sets: [
                {
                    id: 1,
                    title: "Set 1: Healthcare",
                    color: "bg-red-50",
                    borderColor: "border-red-200",
                    words: [
                        { word: "Doctor" },
                        { word: "Nurse" },
                        { word: "Surgeon" },
                        { word: "Pharmacist" },
                        { word: "Dentist" },
                        { word: "Therapist" },
                        { word: "Veterinarian" },
                        { word: "Paramedic" },
                        { word: "Psychologist" },
                        { word: "Nutritionist" }
                    ]
                },
                {
                    id: 2,
                    title: "Set 2: Business",
                    color: "bg-red-50",
                    borderColor: "border-red-200",
                    words: [
                        { word: "Manager" },
                        { word: "Accountant" },
                        { word: "Entrepreneur" },
                        { word: "Consultant" },
                        { word: "Analyst" },
                        { word: "Executive" },
                        { word: "Marketer" },
                        { word: "Salesperson" },
                        { word: "Investor" },
                        { word: "Banker" }
                    ]
                },
                {
                    id: 3,
                    title: "Set 3: Creative",
                    color: "bg-red-50",
                    borderColor: "border-red-200",
                    words: [
                        { word: "Artist" },
                        { word: "Designer" },
                        { word: "Writer" },
                        { word: "Musician" },
                        { word: "Photographer" },
                        { word: "Architect" },
                        { word: "Actor" },
                        { word: "Director" },
                        { word: "Chef" },
                        { word: "Animator" }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "Lesson 5: Technology",
            color: "bg-indigo-100",
            borderColor: "border-indigo-300",
            textColor: "text-indigo-700",
            icon: "5️⃣",
            sets: [
                {
                    id: 1,
                    title: "Set 1: Devices",
                    color: "bg-indigo-50",
                    borderColor: "border-indigo-200",
                    words: [
                        { word: "Smartphone" },
                        { word: "Laptop" },
                        { word: "Tablet" },
                        { word: "Smartwatch" },
                        { word: "Headphones" },
                        { word: "Monitor" },
                        { word: "Printer" },
                        { word: "Router" },
                        { word: "Keyboard" },
                        { word: "Mouse" }
                    ]
                },
                {
                    id: 2,
                    title: "Set 2: Software",
                    color: "bg-indigo-50",
                    borderColor: "border-indigo-200",
                    words: [
                        { word: "Browser" },
                        { word: "Application" },
                        { word: "Database" },
                        { word: "Algorithm" },
                        { word: "Interface" },
                        { word: "Operating System" },
                        { word: "Spreadsheet" },
                        { word: "Antivirus" },
                        { word: "Firewall" },
                        { word: "Plugin" }
                    ]
                },
                {
                    id: 3,
                    title: "Set 3: Internet",
                    color: "bg-indigo-50",
                    borderColor: "border-indigo-200",
                    words: [
                        { word: "Website" },
                        { word: "Email" },
                        { word: "Cloud" },
                        { word: "Server" },
                        { word: "Domain" },
                        { word: "Bandwidth" },
                        { word: "Streaming" },
                        { word: "Download" },
                        { word: "Upload" },
                        { word: "Encryption" }
                    ]
                }
            ]
        },
        {
            id: 6,
            title: "Lesson 6: Nature",
            color: "bg-yellow-100",
            borderColor: "border-yellow-300",
            textColor: "text-yellow-700",
            icon: "6️⃣",
            sets: [
                {
                    id: 1,
                    title: "Set 1: Landscapes",
                    color: "bg-yellow-50",
                    borderColor: "border-yellow-200",
                    words: [
                        { word: "Mountain" },
                        { word: "Valley" },
                        { word: "Forest" },
                        { word: "Desert" },
                        { word: "Ocean" },
                        { word: "River" },
                        { word: "Glacier" },
                        { word: "Canyon" },
                        { word: "Meadow" },
                        { word: "Cliff" }
                    ]
                },
                {
                    id: 2,
                    title: "Set 2: Weather",
                    color: "bg-yellow-50",
                    borderColor: "border-yellow-200",
                    words: [
                        { word: "Rain" },
                        { word: "Snow" },
                        { word: "Wind" },
                        { word: "Storm" },
                        { word: "Sunshine" },
                        { word: "Fog" },
                        { word: "Hail" },
                        { word: "Thunder" },
                        { word: "Lightning" },
                        { word: "Hurricane" }
                    ]
                },
                {
                    id: 3,
                    title: "Set 3: Plants",
                    color: "bg-yellow-50",
                    borderColor: "border-yellow-200",
                    words: [
                        { word: "Tree" },
                        { word: "Flower" },
                        { word: "Grass" },
                        { word: "Bush" },
                        { word: "Cactus" },
                        { word: "Fern" },
                        { word: "Moss" },
                        { word: "Vine" },
                        { word: "Seaweed" },
                        { word: "Palm" }
                    ]
                }
            ]
        },
        {
            id: 7,
            title: "Lesson 7: Sports",
            color: "bg-orange-100",
            borderColor: "border-orange-300",
            textColor: "text-orange-700",
            icon: "7️⃣",
            sets: [
                {
                    id: 1,
                    title: "Set 1: Team Sports",
                    color: "bg-orange-50",
                    borderColor: "border-orange-200",
                    words: [
                        { word: "Soccer" },
                        { word: "Basketball" },
                        { word: "Baseball" },
                        { word: "Volleyball" },
                        { word: "Hockey" },
                        { word: "Rugby" },
                        { word: "Cricket" },
                        { word: "Football" },
                        { word: "Handball" },
                        { word: "Lacrosse" }
                    ]
                },
                {
                    id: 2,
                    title: "Set 2: Individual Sports",
                    color: "bg-orange-50",
                    borderColor: "border-orange-200",
                    words: [
                        { word: "Tennis" },
                        { word: "Golf" },
                        { word: "Swimming" },
                        { word: "Gymnastics" },
                        { word: "Boxing" },
                        { word: "Skiing" },
                        { word: "Skateboarding" },
                        { word: "Surfing" },
                        { word: "Archery" },
                        { word: "Cycling" }
                    ]
                },
                {
                    id: 3,
                    title: "Set 3: Equipment",
                    color: "bg-orange-50",
                    borderColor: "border-orange-200",
                    words: [
                        { word: "Ball" },
                        { word: "Racket" },
                        { word: "Helmet" },
                        { word: "Glove" },
                        { word: "Net" },
                        { word: "Goal" },
                        { word: "Bat" },
                        { word: "Club" },
                        { word: "Skates" },
                        { word: "Board" }
                    ]
                }
            ]
        },
        {
            id: 8,
            title: "Lesson 8: Music",
            color: "bg-pink-100",
            borderColor: "border-pink-300",
            textColor: "text-pink-700",
            icon: "8️⃣",
            sets: [
                {
                    id: 1,
                    title: "Set 1: Instruments",
                    color: "bg-pink-50",
                    borderColor: "border-pink-200",
                    words: [
                        { word: "Guitar" },
                        { word: "Piano" },
                        { word: "Drums" },
                        { word: "Violin" },
                        { word: "Flute" },
                        { word: "Saxophone" },
                        { word: "Trumpet" },
                        { word: "Harp" },
                        { word: "Cello" },
                        { word: "Clarinet" }
                    ]
                },
                {
                    id: 2,
                    title: "Set 2: Genres",
                    color: "bg-pink-50",
                    borderColor: "border-pink-200",
                    words: [
                        { word: "Rock" },
                        { word: "Jazz" },
                        { word: "Classical" },
                        { word: "Pop" },
                        { word: "Hip-Hop" },
                        { word: "Country" },
                        { word: "Electronic" },
                        { word: "Blues" },
                        { word: "Reggae" },
                        { word: "Folk" }
                    ]
                },
                {
                    id: 3,
                    title: "Set 3: Music Terms",
                    color: "bg-pink-50",
                    borderColor: "border-pink-200",
                    words: [
                        { word: "Melody" },
                        { word: "Rhythm" },
                        { word: "Harmony" },
                        { word: "Tempo" },
                        { word: "Chord" },
                        { word: "Note" },
                        { word: "Scale" },
                        { word: "Octave" },
                        { word: "Beat" },
                        { word: "Lyrics" }
                    ]
                }
            ]
        },
        {
            id: 9,
            title: "Lesson 9: Space",
            color: "bg-teal-100",
            borderColor: "border-teal-300",
            textColor: "text-teal-700",
            icon: "9️⃣",
            sets: [
                {
                    id: 1,
                    title: "Set 1: Celestial Bodies",
                    color: "bg-teal-50",
                    borderColor: "border-teal-200",
                    words: [
                        { word: "Planet" },
                        { word: "Star" },
                        { word: "Moon" },
                        { word: "Asteroid" },
                        { word: "Comet" },
                        { word: "Galaxy" },
                        { word: "Nebula" },
                        { word: "Black Hole" },
                        { word: "Supernova" },
                        { word: "Meteor" }
                    ]
                },
                {
                    id: 2,
                    title: "Set 2: Solar System",
                    color: "bg-teal-50",
                    borderColor: "border-teal-200",
                    words: [
                        { word: "Mercury" },
                        { word: "Venus" },
                        { word: "Earth" },
                        { word: "Mars" },
                        { word: "Jupiter" },
                        { word: "Saturn" },
                        { word: "Uranus" },
                        { word: "Neptune" },
                        { word: "Pluto" },
                        { word: "Sun" }
                    ]
                },
                {
                    id: 3,
                    title: "Set 3: Space Exploration",
                    color: "bg-teal-50",
                    borderColor: "border-teal-200",
                    words: [
                        { word: "Rocket" },
                        { word: "Astronaut" },
                        { word: "Satellite" },
                        { word: "Telescope" },
                        { word: "Spacecraft" },
                        { word: "Orbit" },
                        { word: "Gravity" },
                        { word: "Mission" },
                        { word: "Spacewalk" },
                        { word: "Launch" }
                    ]
                }
            ]
        },
        {
            id: 10,
            title: "Lesson 10: Art",
            color: "bg-amber-100",
            borderColor: "border-amber-300",
            textColor: "text-amber-700",
            icon: "🔟",
            sets: [
                {
                    id: 1,
                    title: "Set 1: Art Forms",
                    color: "bg-amber-50",
                    borderColor: "border-amber-200",
                    words: [
                        { word: "Painting" },
                        { word: "Sculpture" },
                        { word: "Photography" },
                        { word: "Drawing" },
                        { word: "Printmaking" },
                        { word: "Ceramics" },
                        { word: "Collage" },
                        { word: "Mosaic" },
                        { word: "Calligraphy" },
                        { word: "Graffiti" }
                    ]
                },
                {
                    id: 2,
                    title: "Set 2: Art Materials",
                    color: "bg-amber-50",
                    borderColor: "border-amber-200",
                    words: [
                        { word: "Canvas" },
                        { word: "Brush" },
                        { word: "Paint" },
                        { word: "Pencil" },
                        { word: "Clay" },
                        { word: "Charcoal" },
                        { word: "Pastel" },
                        { word: "Ink" },
                        { word: "Watercolor" },
                        { word: "Easel" }
                    ]
                },
                {
                    id: 3,
                    title: "Set 3: Art Movements",
                    color: "bg-amber-50",
                    borderColor: "border-amber-200",
                    words: [
                        { word: "Impressionism" },
                        { word: "Cubism" },
                        { word: "Surrealism" },
                        { word: "Renaissance" },
                        { word: "Abstract" },
                        { word: "Baroque" },
                        { word: "Modernism" },
                        { word: "Pop Art" },
                        { word: "Minimalism" },
                        { word: "Realism" }
                    ]
                }
            ]
        }
    ]
};

// DOM elements
const lessonsView = document.getElementById('lessons-view');
const setsView = document.getElementById('sets-view');
const wordsView = document.getElementById('words-view');
const lessonsContainer = document.getElementById('lessons-container');
const setsContainer = document.getElementById('sets-container');
const wordsContainer = document.getElementById('words-container');
const lessonTitle = document.getElementById('lesson-title');
const setTitle = document.getElementById('set-title');
const setDescription = document.getElementById('set-description');
const backToLessons = document.getElementById('back-to-lessons');
const backToSets = document.getElementById('back-to-sets');

// Current state
let currentLesson = null;
let currentSet = null;

// Initialize the app
function init() {
    renderLessons();
    setupEventListeners();
}

// Render lessons on the homepage
function renderLessons() {
    lessonsContainer.innerHTML = '';
    vocabularyData.lessons.forEach(lesson => {
        const lessonCard = document.createElement('div');
        lessonCard.className = `card ${lesson.color} ${lesson.borderColor} border-2 rounded-xl p-6 cursor-pointer shadow-sm hover:shadow-md`;
        lessonCard.innerHTML = `
            <div class="flex items-center justify-between mb-2">
                <span class="text-4xl">${lesson.icon}</span>
                <span class="bg-white bg-opacity-50 rounded-full px-3 py-1 text-sm ${lesson.textColor} font-medium">Lesson ${lesson.id}</span>
            </div>
            <h3 class="text-xl font-semibold ${lesson.textColor}">${lesson.title}</h3>
            <p class="text-gray-600 mt-2">${lesson.sets.length} sets</p>
        `;
        lessonCard.addEventListener('click', () => showSets(lesson));
        lessonsContainer.appendChild(lessonCard);
    });
}

// Show sets for a selected lesson
function showSets(lesson) {
    currentLesson = lesson;
    lessonTitle.textContent = lesson.title;
    setsContainer.innerHTML = '';

    lesson.sets.forEach(set => {
        const setCard = document.createElement('div');
        setCard.className = `card ${set.color} ${set.borderColor} border-2 rounded-xl p-6 cursor-pointer shadow-sm hover:shadow-md`;
        setCard.innerHTML = `
            <h3 class="text-xl font-semibold ${lesson.textColor}">${set.title}</h3>
            <p class="text-gray-600 mt-2">${set.words.length} words</p>
        `;
        setCard.addEventListener('click', () => showWords(set));
        setsContainer.appendChild(setCard);
    });

    switchView(lessonsView, setsView);
}

// Show words for a selected set
function showWords(set) {
    currentSet = set;
    setTitle.textContent = set.title;
    setDescription.textContent = `From ${currentLesson.title}`;
    wordsContainer.innerHTML = '';

    set.words.forEach((wordItem, index) => {
        const wordCard = document.createElement('div');
        wordCard.className = `word-item bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col items-center justify-center text-center`;

        // Get the color scheme from the current lesson
        const colorClass = currentLesson.textColor;

        wordCard.innerHTML = `
            <div class="w-8 h-8 ${currentLesson.color} rounded-full flex items-center justify-center mb-3">
                <span class="font-bold ${colorClass}">${index + 1}</span>
            </div>
            <h4 class="text-lg font-semibold text-gray-800">${wordItem.word}</h4>
        `;
        wordsContainer.appendChild(wordCard);
    });

    switchView(setsView, wordsView);
}

// Switch between views with animation
function switchView(fromView, toView) {
    fromView.classList.remove('visible-view');
    fromView.classList.add('hidden-view');

    setTimeout(() => {
        toView.classList.remove('hidden-view');
        toView.classList.add('visible-view');
    }, 300);
}

// Setup event listeners
function setupEventListeners() {
    backToLessons.addEventListener('click', () => {
        switchView(setsView, lessonsView);
    });

    backToSets.addEventListener('click', () => {
        switchView(wordsView, setsView);
    });
}

// Initialize the app when the page loads
window.addEventListener('DOMContentLoaded', init);
