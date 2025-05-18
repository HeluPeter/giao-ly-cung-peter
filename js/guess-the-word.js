
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
            title: "Bài 3: Các bí tích",
            color: "bg-purple-100",
            borderColor: "border-purple-300",
            textColor: "text-purple-700",
            icon: "3️⃣",
            sets: [
                {
                    id: 1,
                    title: "Gói 1",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Ân sủng bên trong" },
                        { word: "Sự sống thần linh" },
                        { word: "Chúa Giê su đã lập" },
                        { word: "Các bí tích này tái sinh, củng cố và nuôi dưỡng" },
                        { word: "Bí tích Thống Hối và Xức Dầu Bệnh Nhân" },
                        { word: "Chính Đức Kitô hoạt động và thông ban ân sủng" },
                        { word: "Các bí tích của Hội Thánh được phân thành ba loại" },
                        { word: "Đức Kitô hoạt động và thông ban ân sủng trong các bí tích" },
                        { word: "Các bí tích cho chúng ta tham dự trước vào đời sống vĩnh cửu" },
                        { word: "Các bí tích trao ban ân sủng của Chúa Thánh Thần" }
                    ]
                },
                {
                    id: 2,
                    title: "Gói 2",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Các bí tích khai tâm" },
                        { word: "Các bí tích chữa lành" },
                        { word: "Bí tích Thêm Sức" },
                        { word: "Đức Kitô ngự đến trong vinh quang" },
                        { word: "Các bí tích này phục hồi và củng cố đời sống mới" },
                        { word: "Đem lại ân sủng riêng cho mỗi sứ vụ đặc biệt trong Hội Thánh" },
                        { word: "Các bí tích phục vụ gồm Bí tích Truyền Chức Thánh và Hôn Phối" },
                        { word: "Các bí tích này chỉ được lãnh một lần mà thôi" },
                        { word: "Vì các bí tích trao ban ân sủng của Chúa Thánh Thần" },
                        { word: "Vì khi lãnh nhận bí tích, chúng ta phải có đức tin" }
                    ]
                },
                {
                    id: 3,
                    title: "Gói 3",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Bí tích Rửa Tội" },
                        { word: "Bí tích Truyền Chức Thánh" },
                        { word: "Các bí tích phục vụ" },
                        { word: "Các bí tích này tái sinh, củng cố và nuôi dưỡng các tín hữu" },
                        { word: "Chính Đức Kitô hoạt động và thông ban ân sủng trong các bí tích" },
                        { word: "Các bí tích này phục hồi và củng cố đời sống mới của các tín hữu" },
                        { word: "Bí tích Thống Hối và Xức Dầu Bệnh Nhân" },
                        { word: "Ấn tín bí tích là dấu ấn thiêng liêng" },
                        { word: "Các bí tích chữa lành phục hồi và củng cố" },
                        { word: "Các bí tích cho chúng ta tham dự trước vào đời sống vĩnh cửu" }
                    ]
                },
                {
                    id: 4,
                    title: "Gói 4",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Ấn tín bí tích" },
                        { word: "Các bí tích khai tâm Kitô giáo" },
                        { word: "Các bí tích chữa lành" },
                        { word: "Các bí tích phục vụ" },
                        { word: "Các bí tích của Hội Thánh được phân thành ba loại" },
                        { word: "Các bí tích giúp chúng ta sống đời sống vĩnh cửu" },
                        { word: "Thiên Chúa in vào lòng những người lãnh Bí tích" },
                        { word: "Đức Kitô ngự đến trong vinh quang" },
                        { word: "Các bí tích trao ban ân sủng của Chúa Thánh Thần" },
                        { word: "Các bí tích này phục hồi và củng cố đời sống mới" }
                    ]
                },
                {
                    id: 5,
                    title: "Gói 5",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Các bí tích" },
                        { word: "Bí tích Hôn Phối" },
                        { word: "Các bí tích này tái sinh" },
                        { word: "Là dấu chỉ bên ngoài" },
                        { word: "Chính Đức Kitô hoạt động trong phụng vụ" },
                        { word: "Các bí tích phục vụ gồm Bí tích Truyền Chức Thánh và Hôn Phối" },
                        { word: "Là sự sống thần linh" },
                        { word: "Được phân thành ba loại này" },
                        { word: "Các bí tích của Hội Thánh được phân thành ba loại" },
                        { word: "Các bí tích giúp chúng ta sống đời sống vĩnh cửu" }
                    ]
                }                
            ]
        },
        {
            id: 4,
            title: "Bài 4: Bí tích Rửa Tội",
            color: "bg-red-100",
            borderColor: "border-red-300",
            textColor: "text-red-700",
            icon: "4️⃣",
            sets: [
                {
                    id: 1,
                    title: "Gói 1",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Bí Tích Rửa Tội" },
                        { word: "Được sinh lại trong đời sống mới" },
                        { word: "Chúa Giê su đã lập" },
                        { word: "Dìm xuống nước hay đổ nước trên đầu" },
                        { word: "Là bí tích Chúa Giê su đã lập, để làm cho chúng ta được sinh lại" },
                        { word: "Nghi thức chính yếu của Bí Tích Rửa Tội" },
                        { word: "Được làm con cái Thiên Chúa" },
                        { word: "Được ghi vào linh hồn dấu ấn thiêng liêng không bao giờ xóa được" },
                        { word: "Được tháp nhập vào Đức Kitô và Hội Thánh" },
                        { word: "Cần thiết cho ơn cứu độ" }
                    ]
                },
                {
                    id: 2,
                    title: "Gói 2",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Được tha tội tổ tông" },
                        { word: "Được làm con cái Thiên Chúa" },
                        { word: "Người không lãnh nhận Bí Tích Rửa Tội" },
                        { word: "Người không lãnh Bí Tích Rửa Tội có thể được cứu độ" },
                        { word: "Là bí tích Chúa Giê su đã lập" },
                        { word: "Một là chết vì đức tin" },
                        { word: "Những ơn này: được tha tội tổ tông và các tội riêng đã phạm" },
                        { word: "Bí Tích Rửa Tội ban cho chúng ta những ơn này" },
                        { word: "Chưa được biết Chúa Kitô và Hội Thánh" },
                        { word: "Được làm con cái Thiên Chúa và được tháp nhập vào Đức Kitô" }
                    ]
                },
                {
                    id: 3,
                    title: "Gói 3",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Được tha tội tổ tông" },
                        { word: "Dìm xuống nước hay đổ nước trên đầu người lãnh bí tích" },
                        { word: "Nghi thức chính yếu của Bí Tích Rửa Tội" },
                        { word: "Được làm con cái Thiên Chúa và tháp nhập vào Đức Kitô" },
                        { word: "Cần thiết cho ơn cứu độ" },
                        { word: "Chưa được biết Chúa Kitô và Hội Thánh" },
                        { word: "Người không lãnh Bí Tích Rửa Tội có thể được cứu độ" },
                        { word: "Một là chết vì đức tin" },
                        { word: "Ba là chưa được biết Chúa Kitô và Hội Thánh" },
                        { word: "Được ghi vào linh hồn dấu ấn thiêng liêng không bao giờ xóa được" }
                    ]
                }                
            ]
        },
        {
            id: 5,
            title: "Bài 5: Bí tích Thêm Sức",
            color: "bg-indigo-100",
            borderColor: "border-indigo-300",
            textColor: "text-indigo-700",
            icon: "5️⃣",
            sets: [
                {
                    id: 1,
                    title: "Gói 1",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Bí Tích Thêm Sức" },
                        { word: "Chúa Thánh Thần" },
                        { word: "Ban tràn đầy Chúa Thánh Thần" },
                        { word: "Sống ơn Bí Tích Rửa Tội" },
                        { word: "Thêm Sức giúp chúng ta sống" },
                        { word: "Đổ tràn Chúa Thánh Thần" },
                        { word: "Được ghi ấn tín không thể tẩy xóa" },
                        { word: "Bổn phận của người lãnh Bí Tích Thêm Sức" },
                        { word: "Người lãnh Bí Tích Thêm Sức phải cầu nguyện sốt sắng" },
                        { word: "Nỗ lực thi hành Lời Chúa trong đời sống" }
                    ]
                },
                {
                    id: 2,
                    title: "Gói 2",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Bí Tích Thêm Sức" },
                        { word: "Xức dầu thánh trên trán" },
                        { word: "Đặt tay trên đầu người lãnh Bí Tích" },
                        { word: "Nghi thức chính yếu của Bí Tích Thêm Sức" },
                        { word: "Lãnh nhận ấn tín ơn Chúa Thánh Thần" },
                        { word: "Thêm Sức giúp gia tăng ân sủng" },
                        { word: "Cần học giáo lý về Bí Tích Thêm Sức" },
                        { word: "Bí Tích Thêm Sức gia tăng ân sủng Rửa Tội" },
                        { word: "Cầu nguyện thật lòng ước ao lãnh nhận" },
                        { word: "Ban tràn đầy Chúa Thánh Thần" }
                    ]
                },
                {
                    id: 3,
                    title: "Gói 3",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Người lãnh Bí Tích Thêm Sức" },
                        { word: "Xức dầu thánh" },
                        { word: "Bí Tích Thêm Sức gia tăng ân sủng" },
                        { word: "Thi hành Lời Chúa trong đời sống thường ngày" },
                        { word: "Cần phải sạch tội trọng" },
                        { word: "Bí Tích Thêm Sức giúp sống tốt đẹp hơn" },
                        { word: "Bổn phận xây dựng xã hội theo Tin Mừng" },
                        { word: "Cầu nguyện sốt sắng" },
                        { word: "Được ghi ấn tín không thể xóa được" },
                        { word: "Tích cực giới thiệu Chúa cho mọi người" }
                    ]
                },
                {
                    id: 4,
                    title: "Gói 4",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Bí Tích Thêm Sức" },
                        { word: "Nghi thức chính yếu của Bí Tích Thêm Sức" },
                        { word: "Thêm Sức ban tràn đầy Chúa Thánh Thần" },
                        { word: "Lãnh nhận Bí Tích Thêm Sức" },
                        { word: "Người lãnh Bí Tích Thêm Sức phải học giáo lý" },
                        { word: "Xức dầu thánh trên trán người lãnh Bí Tích" },
                        { word: "Gia tăng ân sủng Bí Tích Rửa Tội" },
                        { word: "Lãnh nhận ấn tín ơn Chúa Thánh Thần" },
                        { word: "Bí Tích Thêm Sức ghi ấn tín không thể xóa" },
                        { word: "Phải cầu nguyện sốt sắng" }
                    ]
                }                
            ]
        },
        {
            id: 6,
            title: "Bài 6: Bí tích Thánh Thể",
            color: "bg-yellow-100",
            borderColor: "border-yellow-300",
            textColor: "text-yellow-700",
            icon: "6️⃣",
            sets: [
                {
                    id: 1,
                    title: "Gói 1",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Bí Tích Thánh Thể" },
                        { word: "Thánh lễ" },
                        { word: "Bí Tích Thánh Thể là gì" },
                        { word: "Chúa Giê su đã lập Bí Tích" },
                        { word: "Bí Tích Thánh Thể là nguồn mạch" },
                        { word: "Cử hành Bí Tích Thánh Thể trong Thánh lễ" },
                        { word: "Việc rước lễ đem lại cho chúng ta những ơn ích" },
                        { word: "một là hoàn toàn thuộc về Hội Thánh" },
                        { word: "Hội Thánh cử hành Bí Tích Thánh Thể trong Thánh lễ" },
                        { word: "Việc rước lễ làm cho chúng ta được kết hợp mật thiết với Đức Kitô và Hội Thánh" }
                    ]
                },
                {
                    id: 2,
                    title: "Gói 2",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Hội Thánh" },
                        { word: "Rước lễ" },
                        { word: "Hội Thánh dạy thế nào về việc rước lễ" },
                        { word: "Việc rước lễ làm cho chúng ta được kết hợp mật thiết" },
                        { word: "Bí Tích Thánh Thể là nguồn mạch và tột đỉnh" },
                        { word: "Bí Tích Thánh Thể làm của ăn nuôi sống chúng ta" },
                        { word: "Chúa Giê su cầm lấy bánh, tạ ơn" },
                        { word: "ba là phải giữ chay theo quy định của Hội Thánh" },
                        { word: "Chúa Giê su đã lập Bí Tích Thánh Thể khi tự nguyện nộp mình chịu khổ hình" },
                        { word: "Hội Thánh khuyên các tín hữu rước lễ mỗi khi tham dự Thánh lễ" }
                    ]
                },
                {
                    id: 3,
                    title: "Gói 3",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Thánh Thể" },
                        { word: "Hội Thánh Công Giáo" },
                        { word: "Bí Tích Thánh Thể là gì" },
                        { word: "Hội Thánh cử hành Bí Tích Thánh Thể trong Thánh lễ" },
                        { word: "Bí Tích Thánh Thể là nguồn mạch và tột đỉnh của toàn bộ đời sống Kitô giáo" },
                        { word: "Việc rước lễ làm cho chúng ta được kết hợp mật thiết với Đức Kitô và Hội Thánh" },
                        { word: "một là hoàn toàn thuộc về Hội Thánh Công Giáo" },
                        { word: "Phải có những điều kiện này: ba là phải giữ chay theo quy định của Hội Thánh" },
                        { word: "Hội Thánh khuyên các tín hữu rước lễ mỗi khi tham dự Thánh lễ" },
                        { word: "Bí Tích Thánh Thể giúp nuôi sống chúng ta" }
                    ]
                },
                {
                    id: 4,
                    title: "Gói 4",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Rước lễ" },
                        { word: "Hội Thánh" },
                        { word: "Bí Tích Thánh Thể" },
                        { word: "hai là ý thức mình không có tội trọng" },
                        { word: "Việc rước lễ làm cho chúng ta được kết hợp mật thiết với Đức Kitô và Hội Thánh" },
                        { word: "Chúa Giê su đã lập Bí Tích Thánh Thể để tiếp tục lễ hy sinh trên Thánh giá" },
                        { word: "Hội Thánh cử hành Bí Tích Thánh Thể trong Thánh lễ, gồm hai phần chính" },
                        { word: "Bí Tích Thánh Thể là để ban Mình Máu Ngài" },
                        { word: "Chúa Giê su cầm lấy chén rượu và nói: “Tất cả các con hãy nhận lấy mà uống”" },
                        { word: "Hội Thánh dạy thế nào về việc rước lễ" }
                    ]
                },
                {
                    id: 5,
                    title: "Gói 5",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Hội Thánh dạy" },
                        { word: "Phải có điều kiện" },
                        { word: "Hội Thánh khuyên các tín hữu rước lễ mỗi khi tham dự Thánh lễ" },
                        { word: "Bí Tích Thánh Thể giúp chúng ta sống ơn Rửa Tội" },
                        { word: "bốn là có thái độ tôn kính Đức Kitô" },
                        { word: "Việc rước lễ làm cho chúng ta được tẩy xóa các tội nhẹ" },
                        { word: "Bí Tích Thánh Thể là nguồn mạch và tột đỉnh của toàn bộ đời sống Kitô giáo" },
                        { word: "hai là ý thức mình không có tội trọng" },
                        { word: "Bí Tích Thánh Thể là để ban Mình Máu Ngài, làm của ăn nuôi sống chúng ta" },
                        { word: "Hội Thánh cử hành Bí Tích Thánh Thể trong Thánh lễ, gồm hai phần chính" }
                    ]
                }                
            ]
        },
        {
            id: 7,
            title: "Bài 7: Bí tích Thống Hối",
            color: "bg-orange-100",
            borderColor: "border-orange-300",
            textColor: "text-orange-700",
            icon: "7️⃣",
            sets: [
                {
                    id: 1,
                    title: "Gói 1",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Bí Tích Thống Hối" },
                        { word: "Tha tội" },
                        { word: "Bí Tích Thống Hối là gì" },
                        { word: "Lời xá giải của linh mục" },
                        { word: "Bí Tích Thống Hối có những yếu tố chính yếu này" },
                        { word: "Muốn lãnh Bí Tích Thống Hối chúng ta phải làm bốn việc này" },
                        { word: "Chúa Giê su đã lập Bí Tích Thống Hối khi Ngài hiện ra với các Tông đồ" },
                        { word: "Khi đến tuổi khôn, mọi tín hữu buộc phải xưng các tội trọng" },
                        { word: "một là tha tội" },
                        { word: "Bí Tích Thống Hối có hai yếu tố chính yếu này" }
                    ]
                },
                {
                    id: 2,
                    title: "Gói 2",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Xưng tội" },
                        { word: "Tha tội" },
                        { word: "Bí Tích Thống Hối có những hiệu quả này" },
                        { word: "Bí Tích Thống Hối có hai yếu tố chính yếu này" },
                        { word: "Ân xá là gì" },
                        { word: "Muốn lãnh Bí Tích Thống Hối chúng ta phải làm bốn việc này" },
                        { word: "Tha hình phạt muôn đời do các tội trọng" },
                        { word: "Khi nào các tín hữu buộc phải xưng các tội trọng" },
                        { word: "Bí Tích Thống Hối là để tha các tội riêng" },
                        { word: "Chúa Giê su đã lập Bí Tích Thống Hối" }
                    ]
                },
                {
                    id: 3,
                    title: "Gói 3",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Sám hối" },
                        { word: "Xưng tội" },
                        { word: "Chúa Giê su đã lập Bí Tích Thống Hối" },
                        { word: "Bí Tích Thống Hối có những hiệu quả này" },
                        { word: "Bí Tích Thống Hối có hai yếu tố chính yếu này" },
                        { word: "ba là ban sự bình an" },
                        { word: "Ân xá là việc tha thứ những hình phạt tạm đáng chịu" },
                        { word: "Khi đến tuổi khôn, mọi tín hữu buộc phải xưng các tội trọng" },
                        { word: "Một là xét mình" },
                        { word: "Khi nào các tín hữu buộc phải xưng các tội trọng" }
                    ]
                },
                {
                    id: 4,
                    title: "Gói 4",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Bí Tích Thống Hối" },
                        { word: "Xưng các tội trọng" },
                        { word: "Ân xá là việc tha thứ những hình phạt" },
                        { word: "khi Ngài hiện ra với các Tông đồ" },
                        { word: "hai là tha hình phạt muôn đời" },
                        { word: "ba là gia tăng sức mạnh cho cuộc chiến đấu thiêng liêng " },
                        { word: "Bí Tích Thống Hối có những yếu tố chính yếu này" },
                        { word: "Muốn lãnh Bí Tích Thống Hối chúng ta phải làm bốn việc này" },
                        { word: "Bí Tích Thống Hối là để tha các tội riêng chúng ta đã phạm" },
                        { word: "Muốn lãnh Bí Tích Thống Hối chúng ta phải làm bốn việc này" }
                    ]
                },
                {
                    id: 5,
                    title: "Gói 5",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Chúa Giê su" },
                        { word: "Tội trọng" },
                        { word: "Ân xá là gì" },
                        { word: "Một là xét mình" },
                        { word: "Chúa Giê su đã lập Bí Tích Thống Hối khi Ngài hiện ra" },
                        { word: "ban sự bình an và gia tăng sức mạnh cho cuộc chiến đấu" },
                        { word: "Bí Tích Thống Hối có hai yếu tố chính yếu này" },
                        { word: "tha tội để giao hòa chúng ta" },
                        { word: "Ân xá là việc tha thứ những hình phạt tạm đáng chịu" },
                        { word: "tha hình phạt muôn đời do các tội trọng đã gây ra" }
                    ]
                }                
            ]
        },
        {
            id: 8,
            title: "Phần II - 3 câu đầu",
            color: "bg-pink-100",
            borderColor: "border-pink-300",
            textColor: "text-pink-700",
            icon: "8️⃣",
            sets: [
                {
                    id: 1,
                    title: "Gói 1",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Chủ đề mục vụ" },
                        { word: "Canh tân đời sống" },
                        { word: "Cử hành phụng vụ" },
                        { word: "Làm mới lại lòng yêu mến" },
                        { word: "Thứ nhất vì phụng vụ" },
                        { word: "Mầu nhiệm thánh, là nguồn mạch" },
                        { word: "Tích cực tham dự phụng vụ" },
                        { word: "Thứ ba loại bỏ lạm dụng" },
                        { word: "Cung cách cử hành phụng vụ" },
                        { word: "Thái độ tham dự khô khan" }
                    ]
                },
                {
                    id: 2,
                    title: "Gói 2",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Canh tân đời sống đức tin" },
                        { word: "Cử hành phụng vụ cách trọn vẹn" },
                        { word: "Làm mới lại lòng yêu mến, tinh thần tham dự" },
                        { word: "Thứ ba cần loại bỏ lạm dụng" },
                        { word: "Thứ hai vì Hội Thánh" },
                        { word: "Tha thiết mong ước tham dự" },
                        { word: "Tham dự cử hành phụng vụ" },
                        { word: "Cần loại bỏ cẩu thả" },
                        { word: "Những cử hành lạm dụng" },
                        { word: "Được hiệp thông với Thiên Chúa" }
                    ]
                },
                {
                    id: 3,
                    title: "Gói 3",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Canh tân đời sống đức tin trong cử hành phụng vụ" },
                        { word: "Thứ ba loại bỏ những lạm dụng" },
                        { word: "Thứ nhất vì phụng vụ là mầu nhiệm thánh" },
                        { word: "Tham dự cử hành phụng vụ tích cực" },
                        { word: "Thứ ba cần loại bỏ khô khan" },
                        { word: "Thái độ tham dự tích cực" },
                        { word: "Cử hành phụng vụ là nguồn mạch" },
                        { word: "Cử hành phụng vụ thánh" },
                        { word: "Làm mới lại lòng yêu mến" },
                        { word: "Cung cách tham dự phụng vụ" }
                    ]
                }                
            ]
        },
        {
            id: 9,
            title: "PHẦN 3 - 4 câu đầu",
            color: "bg-teal-100",
            borderColor: "border-teal-300",
            textColor: "text-teal-700",
            icon: "9️⃣",
            sets: [
                {
                    id: 1,
                    title: "Gói 1",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Năm Thánh là gì" },
                        { word: "Thời kỳ hồng ân" },
                        { word: "Thiên Chúa ban ơn đặc biệt" },
                        { word: "Thống hối và canh tân" },
                        { word: "Thời gian giao hoà với Thiên Chúa" },
                        { word: "Củng cố đức tin" },
                        { word: "Tạo cơ hội thuận tiện" },
                        { word: "Tình liên đới và hiệp thông" },
                        { word: "Tuyên xưng đức tin" },
                        { word: "Sống động hơn nơi Đức Kitô" }
                    ]
                },
                {
                    id: 2,
                    title: "Gói 2",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Năm Thánh hay còn gọi" },
                        { word: "Thời kỳ hồng ân Thiên Chúa" },
                        { word: "Tông sắc “Spes non Confundit”" },
                        { word: "Khẩu hiệu “Những người hành hương của hy vọng”" },
                        { word: "Hy vọng không làm thất vọng" },
                        { word: "Hành hương Năm Thánh" },
                        { word: "Đến một nơi thánh" },
                        { word: "Bước qua Cửa thánh" },
                        { word: "Cuộc hành trình ra khỏi chính mình" },
                        { word: "Bước theo Đức Kitô" }
                    ]
                },
                {
                    id: 3,
                    title: "Gói 3",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Mở Năm Thánh thường lệ" },
                        { word: "Đức Thánh Cha Phan xi cô" },
                        { word: "Hành hương Năm Thánh có ý nghĩa" },
                        { word: "Hoán cải, biến đổi bản thân" },
                        { word: "Phù hợp với sự thánh thiện" },
                        { word: "Hành hương đến nơi thánh" },
                        { word: "Hành trình với Đức Kitô" },
                        { word: "Đồng hình đồng dạng với Người" },
                        { word: "Để củng cố đức tin" },
                        { word: "Học hỏi từ Đức Kitô" }
                    ]
                },
                {
                    id: 4,
                    title: "Gói 4",
                    color: "bg-blue-50",
                    borderColor: "border-blue-200",
                    words: [
                        { word: "Năm Thánh là thời gian giao hoà" },
                        { word: "Tạo cơ hội thuận tiện để xây dựng tình liên đới" },
                        { word: "Hy vọng không làm thất vọng" },
                        { word: "Hành hương đến một nơi thánh" },
                        { word: "Hoán cải bản thân để phù hợp với Thiên Chúa" },
                        { word: "Cuộc hành trình theo Đức Kitô" },
                        { word: "Từng bước nên đồng hình đồng dạng với Người" },
                        { word: "Tuyên xưng đức tin một cách chân thành" },
                        { word: "Khẩu hiệu của Năm Thánh 2025" },
                        { word: "Hành hương với tình yêu và hy vọng" }
                    ]
                }                
            ]
        },
        {
            id: 10,
            title: "Mix Random",
            color: "bg-amber-100",
            borderColor: "border-amber-300",
            textColor: "text-amber-700",
            icon: "🔟",
            sets: [
                {
                    id: 1,
                    title: "Gói 1",
                    color: "bg-amber-50",
                    borderColor: "border-amber-200",
                    words: [
                      { word: "dìm xuống nước hay đổ nước trên đầu" },
                      { word: "phải sạch tội trọng" },
                      { word: "bí tích phục vụ gồm Bí tích Truyền Chức Thánh và Hôn Phối" },
                      { word: "đức tin của chúng ta thêm mạnh mẽ" },
                      { word: "đem lại ân sủng riêng cho mỗi sứ vụ" },
                      { word: "tháp nhập vào Đức Kitô và Hội Thánh" },
                      { word: "Bí tích Thống Hối" },
                      { word: "sự sống thần linh" },
                      { word: "tái sinh, củng cố và nuôi dưỡng các tín hữu" },
                      { word: "làm con cái Thiên Chúa" }
                    ]
                  },
                  {
                    id: 2,
                    title: "Gói 2",
                    color: "bg-amber-50",
                    borderColor: "border-amber-200",
                    words: [
                      { word: "được sinh lại trong đời sống mới" },
                      { word: "ấn tín bí tích là dấu ấn thiêng liêng" },
                      { word: "tiếp tục công trình cứu độ của Ngài trong Hội Thánh" },
                      { word: "Bí tích là dấu chỉ bên ngoài" },
                      { word: "gia tăng ân sủng Bí Tích Rửa Tội" },
                      { word: "phục hồi và củng cố đời sống mới" },
                      { word: "ban Mình Máu Ngài" },
                      { word: "dấu chỉ và biểu tượng" },
                      { word: "được ghi vào linh hồn dấu ấn thiêng liêng" },
                      { word: "phải học giáo lý" }
                    ]
                  },
                  {
                    id: 3,
                    title: "Gói 3",
                    color: "bg-amber-50",
                    borderColor: "border-amber-200",
                    words: [
                      { word: "bí tích đức tin" },
                      { word: "gia tăng ân sủng Bí Tích Rửa Tội" },
                      { word: "các bí tích chữa lành" },
                      { word: "ngày Đức Kitô ngự đến trong vinh quang" },
                      { word: "phải cầu nguyện sốt sắng" },
                      { word: "có lòng ước ao nhưng chưa có điều kiện lãnh nhận Bí Tích" },
                      { word: "tiếp tục lễ hy sinh trên Thánh giá" },
                      { word: "sống ơn Bí Tích Rửa Tội cách mạnh mẽ" },
                      { word: "Hãy lãnh nhận ấn tín ơn Chúa Thánh Thần" },
                      { word: "các bí tích khai tâm Kitô giáo gồm Bí tích Rửa Tội, Thêm Sức và Thánh Thể" }
                    ]
                  },
                  {
                    id: 4,
                    title: "Gói 4",
                    color: "bg-amber-50",
                    borderColor: "border-amber-200",
                    words: [
                      { word: "con người gặp gỡ và đối thoại với Thiên Chúa" },
                      { word: "ghi vào linh hồn dấu ấn thiêng liêng" },
                      { word: "các bí tích này chỉ được lãnh một lần mà thôi" },
                      { word: "được làm con cái Thiên Chúa" },
                      { word: "ban tràn đầy Chúa Thánh Thần" },
                      { word: "thi hành Lời Chúa trong đời sống thường ngày" },
                      { word: "sứ vụ đặc biệt trong Hội Thánh" },
                      { word: "các bí tích phục vụ gồm Bí tích Truyền Chức Thánh và Hôn Phối" },
                      { word: "đối với những ai đã nghe rao giảng Tin Mừng" },
                      { word: "làm cho chúng ta được sinh lại trong đời sống mới" }
                    ]
                  },
                  {
                    id: 5,
                    title: "Gói 5",
                    color: "bg-amber-50",
                    borderColor: "border-amber-200",
                    words: [
                      { word: "có 7 bí tích" },
                      { word: "bí tích Rửa Tội cần thiết cho ơn cứu độ" },
                      { word: "ban Mình Máu Ngài" },
                      { word: "giúp các tín hữu thánh hóa thời gian trong ngày" },
                      { word: "tích cực giới thiệu Chúa cho mọi người" },
                      { word: "các bí tích chữa lành gồm Bí tích Thống Hối và Xức Dầu Bệnh Nhân" },
                      { word: "người lãnh Bí Tích Thêm Sức có những bổn phận" },
                      { word: "làm của ăn nuôi sống chúng ta" },
                      { word: "thật lòng ước ao lãnh nhận Chúa Thánh Thần" },
                      { word: "phải cầu nguyện sốt sắng" }
                    ]
                  },
                  {
                    id: 6,
                    title: "Gói 6",
                    color: "bg-amber-50",
                    borderColor: "border-amber-200",
                    words: [
                      { word: "tái sinh, củng cố và nuôi dưỡng các tín hữu" },
                      { word: "giúp các tín hữu thánh hóa thời gian trong ngày" },
                      { word: "bí tích Chúa Giê su đã lập" },
                      { word: "hành động cứu độ của Đức Kitô" },
                      { word: "tháp nhập vào Đức Kitô và Hội Thánh" },
                      { word: "ban tràn đầy Chúa Thánh Thần" },
                      { word: "Bí Tích Rửa Tội cần thiết cho ơn cứu độ" },
                      { word: "góp phần xây dựng xã hội theo tinh thần Tin Mừng" },
                      { word: "chết vì đức tin" },
                      { word: "tiếp tục lễ hy sinh trên Thánh giá" }
                    ]
                  },
                  {
                    id: 7,
                    title: "Gói 7",
                    color: "bg-amber-50",
                    borderColor: "border-amber-200",
                    words: [
                      { word: "trao ban ân sủng của Chúa Thánh Thần" },
                      { word: "làm của ăn nuôi sống chúng ta" },
                      { word: "tích cực giới thiệu Chúa cho mọi người" },
                      { word: "góp phần xây dựng xã hội theo tinh thần Tin Mừng" },
                      { word: "ban tràn đầy Chúa Thánh Thần" },
                      { word: "các bí tích phục vụ gồm Bí tích Truyền Chức Thánh và Hôn Phối" },
                      { word: "các bí tích này chỉ được lãnh một lần mà thôi" },
                      { word: "gia tăng ân sủng Bí Tích Rửa Tội" },
                      { word: "Bí tích là dấu chỉ bên ngoài" },
                      { word: "ngày Chúa Phục Sinh" }
                    ]
                  },
                  {
                    id: 8,
                    title: "Gói 8",
                    color: "bg-amber-50",
                    borderColor: "border-amber-200",
                    words: [
                      { word: "bí tích Thánh Thể" },
                      { word: "ngày của Chúa" },
                      { word: "được ghi vào linh hồn dấu ấn thiêng liêng" },
                      { word: "làm con cái Thiên Chúa" },
                      { word: "gia tăng ân sủng Bí Tích Rửa Tội" },
                      { word: "phải sạch tội trọng" },
                      { word: "phải học giáo lý" },
                      { word: "tiếp tục công trình cứu độ của Ngài trong Hội Thánh" },
                      { word: "sống ơn Bí Tích Rửa Tội cách mạnh mẽ" },
                      { word: "sự chuẩn bị nội tâm của người lãnh nhận" }
                    ]
                  },
                  {
                    id: 9,
                    title: "Gói 9",
                    color: "bg-amber-50",
                    borderColor: "border-amber-200",
                    words: [
                      { word: "bí tích đức tin" },
                      { word: "đức tin của chúng ta thêm mạnh mẽ" },
                      { word: "dìm xuống nước hay đổ nước trên đầu" },
                      { word: "ngày Đức Kitô ngự đến trong vinh quang" },
                      { word: "dấu chỉ và biểu tượng" },
                      { word: "làm cho chúng ta được sinh lại trong đời sống mới" },
                      { word: "Bí tích Rửa Tội cần thiết cho ơn cứu độ" },
                      { word: "trao ban ân sủng của Chúa Thánh Thần" },
                      { word: "phải cầu nguyện sốt sắng" },
                      { word: "có lòng ước ao nhưng chưa có điều kiện" }
                    ]
                  },
                  {
                    id: 10,
                    title: "Gói 10",
                    color: "bg-amber-50",
                    borderColor: "border-amber-200",
                    words: [
                        { word: "ban tràn đầy Chúa Thánh Thần, hầu giúp chúng ta sống ơn Bí Tích Rửa Tội" },
                        { word: "sự sống thần linh" },
                        { word: "tiếp tục lễ hy sinh trên Thánh giá" },
                        { word: "các bí tích chữa lành gồm Bí tích Thống Hối và Xức Dầu Bệnh Nhân" },
                        { word: "Bí tích Thêm Sức" },
                        { word: "các bí tích khai tâm Kitô giáo gồm Bí tích Rửa Tội, Thêm Sức và Thánh Thể" },
                        { word: "Bí tích Truyền Chức Thánh" },
                        { word: "phải học giáo lý" },
                        { word: "phục hồi và củng cố đời sống mới" },
                        { word: "dấu chỉ và biểu tượng, để diễn tả và thực hiện hành động cứu độ" }
                    ]
                }
            ]
        }
    ]
};

// Lấy tất cả các từ từ vocabularyData
const allWords = vocabularyData.lessons
  .flatMap(lesson => lesson.sets)
  .flatMap(set => set.words)
  .map(wordObj => wordObj.word);

// Hàm chọn ngẫu nhiên N phần tử từ mảng
function getRandomWords(arr, count) {
  const result = [...arr];
  const n = result.length;

  for (let i = 0; i < count; i++) {
    const randIndex = i + Math.floor(Math.random() * (n - i));
    [result[i], result[randIndex]] = [result[randIndex], result[i]];
  }

  return result.slice(0, count);
}

// Tạo 10 set từ id 11 đến 20
const randomSets = [];
for (let i = 0; i < 40; i++) {
  randomSets.push({
    id: 11 + i,
    title: `Gói ${11 + i}`,
    color: "bg-amber-50",
    borderColor: "border-amber-200",
    words: getRandomWords(allWords, 10).map(word => ({ word }))
  });
}

// Nối randomSets vào sets của bài đầu tiên (id: 1)
vocabularyData.lessons[9].sets.push(...randomSets);

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

        let lessonPart = '';
        if (lesson.id >= 1 && lesson.id <= 7) {
            lessonPart = 'PHẦN I';
        } else if (lesson.id === 8) {
            lessonPart = 'PHẦN II';
        } else if (lesson.id === 9) {
            lessonPart = 'PHẦN III';
        } else if (lesson.id === 10) {
            lessonPart = 'MIX ALL';
        }

        const lessonCard = document.createElement('div');
        lessonCard.className = `card ${lesson.color} ${lesson.borderColor} border-2 rounded-xl p-6 cursor-pointer shadow-sm hover:shadow-md`;
        lessonCard.innerHTML = `
            <div class="flex items-center justify-between mb-2">
                <span class="text-4xl">${lesson.icon}</span>
                <span class="bg-white bg-opacity-50 rounded-full px-3 py-1 text-sm ${lesson.textColor} font-medium">${lessonPart}</span>
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
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // hoặc 'auto' nếu bạn không muốn hiệu ứng mượt
    });

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
    setDescription.textContent = currentLesson.title;
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
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // hoặc 'auto' nếu bạn không muốn hiệu ứng mượt
    });

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
