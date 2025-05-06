
// Data structure for lessons, sets, and words
const vocabularyData = {
    lessons: [
        {
            id: 1,
            title: "Bài 1: Phụng Vụ",
            color: "bg-blue-100",
            borderColor: "border-blue-300",
            textColor: "text-blue-700",
            icon: "1️⃣",
            sets: [
                {
                    id: 1,
                    title: "Gói 1",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "nhất là bí tích Thánh Thể." },
                        { word: "Hội Thánh cử hành các bí tích" },
                        { word: "việc Hội Thánh cử hành" },
                        { word: "qua việc Hội Thánh cử hành các bí tích" },
                        { word: "ơn cứu độ của Chúa qua việc Hội Thánh cử hành" },
                        { word: "sự chuyển thông ơn cứu độ của Chúa" },
                        { word: "là sự chuyển thông ơn cứu độ" },
                        { word: "bí tích là sự chuyển thông ơn cứu độ" },
                        { word: "Nhiệm cục bí tích là sự chuyển thông ơn" },
                        { word: "sự chuyển thông" }
                    ]
                },
                {
                    id: 2,
                    title: "Gói 2",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "thông ơn cứu độ" },
                        { word: "thông ơn" },
                        { word: "nhất là bí tích Thánh" },
                        { word: "bí tích Thánh" },
                        { word: "nhất là bí tích Thánh Thể" },
                        { word: "cử hành các bí tích" },
                        { word: "Thánh cử hành" },
                        { word: "Hội Thánh cử hành" },
                        { word: "việc Hội Thánh" },
                        { word: "qua việc Hội Thánh cử hành" }
                    ]
                },
                {
                    id: 3,
                    title: "Gói 3",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "ơn cứu độ của Chúa" },
                        { word: "cứu độ của Chúa" },
                        { word: "chuyển thông ơn cứu độ của Chúa" },
                        { word: "sự chuyển thông ơn cứu độ" },
                        { word: "là sự chuyển thông ơn" },
                        { word: "bí tích là sự chuyển thông ơn" },
                        { word: "Nhiệm cục bí tích là sự chuyển thông" },
                        { word: "nhiệm cục bí tích" },
                        { word: "là nhiệm cục bí tích" },
                        { word: "được gọi là nhiệm cục" }
                    ]
                },
                {
                    id: 4,
                    title: "Gói 4",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "gọi là nhiệm cục" },
                        { word: "được gọi là nhiệm cục bí tích" },
                        { word: "các bí tích được gọi là nhiệm cục" },
                        { word: "qua các bí tích được gọi là nhiệm cục" },
                        { word: "Hội Thánh qua các bí tích được gọi là nhiệm cục" },
                        { word: "qua các bí tích" },
                        { word: "trong Hội Thánh qua các bí tích" },
                        { word: "của Ngài trong Hội Thánh qua các bí tích" },
                        { word: "của Ngài trong Hội Thánh" },
                        { word: "cứu độ của Ngài trong Hội" }
                    ]
                },
                {
                    id: 5,
                    title: "Gói 5",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "tiếp tục công trình cứu độ của Ngài trong Hội Thánh" },
                        { word: "cứu độ của Ngài" },
                        { word: "công trình cứu độ của Ngài." },
                        { word: "tiếp tục công trình cứu độ của Ngài" },
                        { word: "tiếp tục công trình cứu độ" },
                        { word: "Đức Kitô tiếp tục công trình" },
                        { word: "tiếp tục công trình" },
                        { word: "Đức Kitô tiếp tục" },
                        { word: "qua đó Đức Kitô" },
                        { word: "của Hội Thánh" }
                    ]
                },
                {
                    id: 6,
                    title: "Gói 6",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "hoạt động của Hội" },
                        { word: "nguồn mạch các hoạt động" },
                        { word: "các hoạt động của Hội Thánh" },
                        { word: "là nguồn mạch" },
                        { word: "là chóp đỉnh" },
                        { word: "là chóp đỉnh và là nguồn mạch" },
                        { word: "Phụng vụ là chóp đỉnh và là nguồn mạch" },
                        { word: "Phụng vụ là chóp đỉnh" },
                        { word: "Phụng vụ có vị trí" },
                        { word: "thánh hóa con người" }
                    ]
                },
                {
                    id: 7,
                    title: "Gói 7",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "và thánh hóa" },
                        { word: "Thiên Chúa và thánh hóa con người" },
                        { word: "thờ phượng Thiên Chúa và thánh hóa con" },
                        { word: "thờ phượng Thiên Chúa và thánh hóa con người" },
                        { word: "để thờ phượng Thiên Chúa và thánh hóa" },
                        { word: "để thờ phượng" },
                        { word: "để thờ phượng Thiên Chúa" },
                        { word: "mầu nhiệm Đức Kitô" },
                        { word: "cử hành mầu nhiệm Đức Kitô" },
                        { word: "chính thức cử hành mầu nhiệm" }
                    ]
                },
                {
                    id: 8,
                    title: "Gói 8",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Thánh chính thức cử hành" },
                        { word: "Hội Thánh chính thức cử hành" },
                        { word: "việc Hội Thánh chính thức cử hành mầu nhiệm" },
                        { word: "là việc Hội Thánh chính thức cử hành" },
                        { word: "Phụng vụ là việc Hội Thánh" },
                        { word: "CÔNG GIÁO – năm 2023" },
                        { word: "BẢN HỎI THƯA GIÁO LÝ" },
                        { word: "HỎI THƯA GIÁO LÝ HỘI THÁNH" },
                        { word: "BÀI 1: PHỤNG VỤ" },
                        { word: "Phụng vụ" }
                    ]
                },
                {
                    id: 9,
                    title: "Gói 9",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "GIÁO LÝ HỘI THÁNH CÔNG GIÁO – năm 2023" },
                        { word: "HỎI THƯA GIÁO LÝ HỘI THÁNH CÔNG GIÁO" },
                        { word: "Trích BẢN HỎI THƯA" },
                        { word: "Trích BẢN HỎI THƯA GIÁO LÝ" },
                        { word: "MẦU NHIỆM KI-TÔ GIÁO" },
                        { word: "CỬ HÀNH MẦU NHIỆM" },
                        { word: "HỘI THÁNH CÔNG GIÁO" },
                        { word: "GIÁO LÝ HỘI THÁNH CÔNG GIÁO" },
                        { word: "GIÁO LÝ HỘI THÁNH" },
                        { word: "PHẦN I" }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Bài 2: Cử hành phụng vụ của Hội Thánh",
            color: "bg-green-100",
            borderColor: "border-green-300",
            textColor: "text-green-700",
            icon: "2️⃣",
            sets: [
                {
                    id: 1,
                    title: "Gói 1",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "thời gian trong ngày" },
                        { word: "thánh hóa thời gian" },
                        { word: "các tín hữu thánh hóa" },
                        { word: "giúp các tín hữu" },
                        { word: "thánh hóa thời gian trong ngày." },
                        { word: "các tín hữu thánh hóa thời gian" },
                        { word: "để giúp các tín hữu thánh hóa" },
                        { word: "của Đức Kitô" },
                        { word: "cùng với Hội Thánh" },
                        { word: "của Đức Kitô cùng với Hội Thánh" }
                    ]
                },
                {
                    id: 2,
                    title: "Gói 2",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "lời cầu nguyện của Đức Kitô" },
                        { word: "Các Giờ Kinh là lời cầu nguyện" },
                        { word: "Phụng vụ Các Giờ Kinh" },
                        { word: "đến trong vinh quang" },
                        { word: "đón Ngài lại đến trong vinh quang." },
                        { word: "chuẩn bị đón Ngài lại đến" },
                        { word: "hầu chuẩn bị đón Ngài" },
                        { word: "chúng ta sống những mầu nhiệm ấy" },
                        { word: "sống những mầu nhiệm ấy" },
                        { word: "để giúp chúng ta sống" }
                    ]
                },
                {
                    id: 3,
                    title: "Gói 3",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "các mầu nhiệm Đức Kitô" },
                        { word: "cử hành các mầu nhiệm Đức Kitô" },
                        { word: "Hội Thánh cử hành các mầu nhiệm" },
                        { word: "thời gian Hội Thánh cử hành" },
                        { word: "là thời gian Hội Thánh cử hành các mầu nhiệm" },
                        { word: "Năm Phụng vụ là thời gian" },
                        { word: "cả Năm Phụng vụ." },
                        { word: "nền tảng và trung tâm của cả Năm" },
                        { word: "trung tâm của cả Năm Phụng vụ." },
                        { word: "nền tảng và trung tâm" }
                    ]
                },
                {
                    id: 4,
                    title: "Gói 4",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "ngày Chúa Nhật là nền tảng" },
                        { word: "Vì thế, ngày Chúa Nhật" },
                        { word: "Ngày của Chúa" },
                        { word: "rất quan trọng vì là “Ngày của Chúa”" },
                        { word: "trong Năm phụng vụ" },
                        { word: "Ngày Chúa Nhật rất quan trọng" },
                        { word: "Ngày Chúa Nhật quan trọng thế" },
                        { word: "đối thoại với Thiên Chúa" },
                        { word: "gặp gỡ và đối thoại" },
                        { word: "con người gặp gỡ và đối thoại" }
                    ]
                },
                {
                    id: 5,
                    title: "Gói 5",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "nhờ đó con người gặp gỡ" },
                        { word: "lời nói và hành động" },
                        { word: "Hai là lời nói" },
                        { word: "Hai là lời nói và hành động" },
                        { word: "hành động cứu độ của Đức Kitô" },
                        { word: "thực hiện hành động cứu độ" },
                        { word: "diễn tả và thực hiện hành động cứu độ" },
                        { word: "để diễn tả và thực hiện" },
                        { word: "để diễn tả và thực hiện hành động cứu độ của Đức Kitô" },
                        { word: "các dấu chỉ và biểu tượng" }
                    ]
                },
                {
                    id: 6,
                    title: "Gói 6",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Một là các dấu chỉ" },
                        { word: "Một là các dấu chỉ và biểu tượng" },
                        { word: "phụng vụ gồm hai yếu tố" },
                        { word: "Cử hành phụng vụ gồm hai yếu tố này" },
                        { word: "gồm những yếu tố" },
                        { word: "hành động trong phụng vụ." },
                        { word: "ở trần gian hành động" },
                        { word: "Hội Thánh ở trần gian" },
                        { word: "và Hội Thánh ở trần gian" },
                        { word: "Hội Thánh trên trời" }
                    ]
                },
                {
                    id: 7,
                    title: "Gói 7",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Thân Thể của Ngài là Hội Thánh trên trời" },
                        { word: "với Thân Thể của Ngài là Hội Thánh" },
                        { word: "Đức Kitô cùng với Thân Thể của Ngài" },
                        { word: "nghĩa là Đức Kitô cùng với Thân Thể" },
                        { word: "Chính “Đức Kitô toàn thể”" },
                        { word: "Ai hành động" },
                        { word: "CỬ HÀNH PHỤNG VỤ CỦA HỘI THÁNH" },
                        { word: "PHỤNG VỤ CỦA HỘI THÁNH" },
                        { word: "CỬ HÀNH PHỤNG VỤ" },
                        { word: "BÀI 2: CỬ HÀNH PHỤNG VỤ CỦA HỘI THÁNH" }
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
                <span class="bg-white bg-opacity-50 rounded-full px-3 py-1 text-sm ${lesson.textColor} font-medium">Bài ${lesson.id}</span>
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
    setDescription.textContent = `Nguồn: ${currentLesson.title}`;
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
