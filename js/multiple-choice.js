
// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbze-TUhudNqN0KfQhwOxJ8v28765w64BgKW-MvQsmC2pcewmiIl2jTPVikDR4EfKJwxvQ/exec';

// Quiz questions by topic
const quizQuestionsByTopic = {
    general: [
        {
            question: "Chọn câu sai",
            options: [
                "A. Bí tích Thánh Thể là bí tích Chúa Giêsu đã lập, để tiếp tục lễ hy sinh trên Thánh giá và để ban Mình Máu Ngài, làm của ăn nuôi sống chúng ta.",
                "B. Người lãnh Bí tích Thêm Sức có những bổn phận này: Ba là phải cầu nguyện sốt sắng và thật lòng ước ao lãnh nhận Chúa Thánh Thần.",
                "C. Hiệu quả của Bí tích Thêm Sức giúp gia tăng ân sủng Bí tích Rửa Tội.",
                "D. Các bí tích là do Chúa Giê-su lập."
            ],
            correctAnswer: "B. Người lãnh Bí tích Thêm Sức có những bổn phận này: Ba là phải cầu nguyện sốt sắng và thật lòng ước ao lãnh nhận Chúa Thánh Thần.",
            explanation: "[Câu 29, 30]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai:",
            options: [
                "A. Người lãnh Bí tích Thêm Sức phải sạch tội trọng.",
                "B. Người lãnh Bí tích Thêm Sức có bổn phận góp phần xây dựng hội thánh theo tinh thần Tin Mừng.",
                "C. Bí tích Thêm Sức ghi ấn tín không thể tẩy xóa.",
                "D. Người lãnh Bí tích Thêm Sức có bổn phận nỗ lực thi hành Lời Chúa trong đời sống thường ngày"
            ],
            correctAnswer: "B. Người lãnh Bí tích Thêm Sức có bổn phận góp phần xây dựng hội thánh theo tinh thần Tin Mừng.",
            explanation: "hội thánh => xã hội",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai:",
            options: [
                "A. Bí tích Rửa Tội ban cho chúng ta được tháp nhập vào Đức Kitô và Hội Thánh.",
                "B. Bí tích Rửa Tội tha các tội tổ tông và các tội riêng đã phạm.",
                "C. Người không lãnh Bí tích Rửa Tội có thể được cứu độ trong ba trường hợp.",
                "D. Bí tích Rửa Tội làm cho chúng ta được sinh lại trong đời sống mới bởi nước và Thánh Thần."
            ],
            correctAnswer: "B. Bí tích Rửa Tội tha các tội tổ tông và các tội riêng đã phạm.",
            explanation: "các tội tổ tông => tội tổ tông",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai:",
            options: [
                "A. Bí tích Hôn Phối cho chúng ta tham dự trước vào đời sống vĩnh cửu, đang khi mong chờ ngày Đức Kitô ngự đến trong vinh quang.",
                "B. Bí tích Truyền Chức Thánh trao ban ân sủng của Đức Kitô, để Ngài chữa lành và biến đổi chúng ta",
                "C. Chính Đức Kitô hoạt động và thông ban ân sủng trong bí tích Thêm Sức.",
                "D. Khi lãnh nhận bí tích, chúng ta phải có đức tin, đồng thời nhờ các bí tích, đức tin của chúng ta thêm mạnh mẽ vững vàng."
            ],
            correctAnswer: "B. Bí tích Truyền Chức Thánh trao ban ân sủng của Đức Kitô, để Ngài chữa lành và biến đổi chúng ta",
            explanation: "Đức Kitô => Chúa Thánh Thần",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng:",
            options: [
                "A. Các bí tích khai tâm Kitô giáo giúp tái sinh, củng cố và nuôi dưỡng các tín hữu trong đời sống.",
                "B. Các bí tích chữa lành gồm Bí tích Thống Hối và Xức Dầu Bệnh Nhân. Các bí tích này phục hồi và củng cố đời sống của các tín hữu đã bị suy yếu hoặc mất đi do tội lỗi.",
                "C. Một trong các bí tích khai tâm Kitô giáo làm cho chúng ta được sinh lại trong đời sống bởi nước và Thánh Thần.",
                "D. Các bí tích phục vụ đem lại ân sủng riêng cho mỗi sứ vụ đặc biệt trong Hội Thánh, để xây dựng Dân Thiên Chúa"
            ],
            correctAnswer: "D. Các bí tích phục vụ đem lại ân sủng riêng cho mỗi sứ vụ đặc biệt trong Hội Thánh, để xây dựng Dân Thiên Chúa",
            explanation: "các câu còn lại đều không phải “đời sống mới”",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai",
            options: [
                "A. Các tín hữu nên rước lễ ít nhất một năm một lần trong mùa Phục Sinh",
                "B. Người lãnh Bí tích Truyền Chức Thánh sẽ nên đồng hình đồng dạng với Đức Kitô",
                "C. Người lãnh Bí tích Thêm Sức có bổn phận thứ 2 là góp phần xây dựng xã hội theo tinh thần Tin Mừng",
                "D. “Đức Kitô toàn thể” hành động trong phụng vụ"
            ],
            correctAnswer: "A. Các tín hữu nên rước lễ ít nhất một năm một lần trong mùa Phục Sinh",
            explanation: "[đang cập nhật]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Bí tích Thêm Sức gia tăng ân sủng các Bí tích khác",
                "B. Ngày Chúa phục sinh là nguồn mạch của cả năm phụng vụ",
                "C. Qua Bí tích Rửa Tội, Thiên Chúa in một lời hứa với người lãnh nhận",
                "D. Phụng vụ có 1 mục đích"
            ],
            correctAnswer: "C. Qua Bí tích Rửa Tội, Thiên Chúa in một lời hứa với người lãnh nhận",
            explanation: "[đang cập nhật]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai",
            options: [
                "A. Mình máu Chúa Giêsu là của ăn nuôi sống chúng ta",
                "B. Bí tích Xức Dầu đem lại ơn nâng đỡ về phần hồn cũng như phần xác",
                "C. Người tín hữu có thể xây dựng Hội Thánh",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "D. Tất cả đều sai",
            explanation: "[đang cập nhật]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Nếu phạm tội mà chưa xưng được thì không còn cách nào khác để được tha tội",
                "B. Bí tích Truyền Chức Thánh cần thiết cho ơn cứu độ",
                "C. Phụng vụ các giờ kinh giúp các tín hữu thánh hóa bản thân",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "B. Bí tích Truyền Chức Thánh cần thiết cho ơn cứu độ",
            explanation: "[đang cập nhật]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Thánh lễ thánh hóa con người",
                "B. Nghi thức là một trong những yếu tố của cử hành phụng vụ",
                "C. Trong bữa ăn tối, Người cầm lấy chén rượu, cũng tạ ơn, trao cho các môn đệ",
                "D. Tất cả đều đúng"
            ],
            correctAnswer: "A. Thánh lễ thánh hóa con người",
            explanation: "[đang cập nhật]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Có mấy mục đích của hôn nhân công giáo, mấy hiệu quả của Bí tích Truyền Chức Thánh, muốn lãnh Bí tích Thống Hối phải làm mấy việc?",
            options: [
                "A. 2, 3, 3",
                "B. 2, 3, 2",
                "C. 2, 3, 4",
                "D. 3, 3, 4"
            ],
            correctAnswer: "C. 2, 3, 4",
            explanation: "[đang cập nhật]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai",
            options: [
                "A. Chúng ta sống các mầu nhiệm Đức Kitô để chuẩn bị đón Ngài lại đến trong vinh quang",
                "B. Chúa Giêsu đã lập Bí tích Thống Hối khi Ngài hiện ra với các Tông đồ vào chiều ngày Phục sinh",
                "C. Phải xưng các tội trọng trước khi rước lễ",
                "D. Máu Thánh Chúa Kitô là Giao Ước"
            ],
            correctAnswer: "D. Máu Thánh Chúa Kitô là Giao Ước",
            explanation: "[đang cập nhật]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Bí tích Hôn Phối được cử hành cách công khai",
                "B. Có 3 Bí tích được Chúa Giêsu lập trong bữa tiệc ly",
                "C. Bí tích Thánh Thể ghi vào linh hồn dấu ấn thiêng liêng không thể tẩy xóa",
                "D. Thiên Chúa in dấu ấn vào lòng những người lãnh các Bí tích khai tâm"
            ],
            correctAnswer: "A. Bí tích Hôn Phối được cử hành cách công khai",
            explanation: "[đang cập nhật]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Bí tích là dấu chỉ Chúa Giêsu đã lập và truyền lại cho Hội Thánh cử hành",
                "B. Lời nói và hành động trong cử hành phụng vụ giúp con người gặp gỡ và đối thoại với Thiên Chúa",
                "C. Có một Bí tích không phải do Chúa Giêsu lập",
                "D. Hội Thánh buộc các tín hữu rước lễ mỗi khi tham dự Thánh lễ"
            ],
            correctAnswer: "B. Lời nói và hành động trong cử hành phụng vụ giúp con người gặp gỡ và đối thoại với Thiên Chúa",
            explanation: "[đang cập nhật]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai",
            options: [
                "A. Khi lãnh nhận các bí tích, phải có đức tin",
                "B. Mọi tín hữu đều có thể lãnh Bí tích Xức Dầu",
                "C. Chức tư tế thừa tác khác biệt với chức tư tế cộng đồng",
                "D. Các Bí tích phụng vụ giúp xây dựng dân Thiên Chúa"
            ],
            correctAnswer: "D. Các Bí tích phụng vụ giúp xây dựng dân Thiên Chúa",
            explanation: "[đang cập nhật]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Bí tích Thêm Sức phục hồi đời sống mới của các tín hữu",
                "B. Nghi thức chính yếu của Bí tích Rửa Tội là dìm xuống nước hay đổ nước trên đầu người lãnh bí tích và nói: “Nhân danh Cha và Con và Thánh Thần”",
                "C. Đức Kitô chính là Chiên Vượt Qua của chúng ta",
                "D. Chỉ Bí tích Thêm Sức mới ban tràn đầy Chúa Thánh Thần"
            ],
            correctAnswer: "C. Đức Kitô chính là Chiên Vượt Qua của chúng ta",
            explanation: "[đang cập nhật]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Bí tích Hôn Phối",
            options: [
                "A. Có mục đích thứ nhất là sinh sản và dưỡng dục con cái",
                "B. Có liên quan đến Bí tích khác",
                "C. Ban ân sủng cần thiết nhưng không phải ân sủng Chúa Thánh Thần",
                "D. Muốn lãnh nhận thì phải đáp ứng 3 điều kiện"
            ],
            correctAnswer: "B. Có liên quan đến Bí tích khác",
            explanation: "[đang cập nhật]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Bí tích là dấu chỉ bên ngoài Chúa Giêsu đã lập",
                "B. Bí tích là dấu chỉ bên ngoài Chúa Giêsu truyền lại cho Hội Thánh cử hành",
                "C. A đúng B sai.",
                "D. A và B đều đúng"
            ],
            correctAnswer: "D. A và B đều đúng",
            explanation: "[Câu 10]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai",
            options: [
                "A. Qua phụng vụ, Đức Kitô tiếp tục công trình cứu độ của Ngài",
                "B. Qua phụng vụ, con người thờ phượng và thánh hóa Thiên Chúa",
                "C. A đúng B sai",
                "D. Tất cả đều đúng"
            ],
            correctAnswer: "B. Qua phụng vụ, con người thờ phượng và thánh hóa Thiên Chúa",
            explanation: "[Câu 2]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Trong cử hành phụng vụ, có một yếu tố giúp thực hiện hành động cứu độ của Đức Kitô;",
                "B. Cử hành phụng vụ có 3 yếu tố",
                "C. Cử hành phụng vụ có 4 yếu tố",
                "D. Trong cử hành phụng vụ, có một yếu tố là “Đức Kitô toàn thể”"
            ],
            correctAnswer: "A. Trong cử hành phụng vụ, có một yếu tố giúp thực hiện hành động cứu độ của Đức Kitô;",
            explanation: "[Câu 6]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai",
            options: [
                "A. Có bảy bí tích, Các bí tích của Hội Thánh được phân thành ba loại.",
                "B. Tiêu đề bài 3: Các bí tích; Các bí tích của Hội Thánh được phân thành 3 loại.",
                "C. Có bảy bí tích, Tiêu đề bài 3: Các bí tích và phụng vụ",
                "D. Tiêu đề bài 3: Các bí tích"
            ],
            correctAnswer: "C. Có bảy bí tích, Tiêu đề bài 3: Các bí tích và phụng vụ",
            explanation: "Tiêu đề bài 3: Các bí tích - [Câu 11, 12]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai",
            options: [
                "A. Bí tích Thống Hối và Xức Dầu Bệnh Nhân giúp phục hồi và củng cố đời sống mới của các tín hữu đã bị suy yếu hoặc mất đi do tội lỗi.",
                "B. Các bí tích phục vụ gồm Bí tích Truyền Chức Thánh và Hôn Phối.",
                "C. Các bí tích chữa lành gồm Bí tích Thống Hối và Xức Dầu Thánh",
                "D. Các bí tích của Hội Thánh được phân thành ba loại"
            ],
            correctAnswer: "C. Các bí tích chữa lành gồm Bí tích Thống Hối và Xức Dầu Thánh",
            explanation: "[Câu 14]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Ấn tín bí tích là dấu ấn thiêng liêng, Thiên Chúa in vào lòng tất cả mọi người",
                "B. Nhờ phụng vụ, đức tin của chúng ta thêm mạnh mẽ vững vàng.",
                "C. Các bí tích phục vụ gồm Bí tích Truyền Chức Thánh và Hôn Phối",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "C. Các bí tích phục vụ gồm Bí tích Truyền Chức Thánh và Hôn Phối",
            explanation: "[Câu 15]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Ai ban ân sủng trong các bí tích?",
            options: [
                "A. Đức Kitô",
                "B. Chúa Giê-su",
                "C. Đức Giê-su Ki-tô",
                "D. Tất cả đều đúng"
            ],
            correctAnswer: "D. Tất cả đều đúng",
            explanation: "[Câu 18]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Bí tích Rửa Tội ___.",
            options: [
                "A. là Bí tích Chúa Giê-su đã lập",
                "B. để làm cho chúng ta được sinh lại trong đời sống bởi nước và Thánh Thần.",
                "C. là bí tích Chúa Giêsu đã lập, để làm cho chúng ta được sinh lại trong đời sống bởi nước và Thánh Thần.",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "A. là Bí tích Chúa Giê-su đã lập",
            explanation: "[Câu 21]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai:",
            options: [
                "A. Bí tích Thánh Thể là nguồn mạch và tột đỉnh của toàn bộ đời sống Kitô giáo.",
                "B. Hội Thánh khuyên các tín hữu rước lễ mỗi khi tham dự Thánh thể, và buộc rước lễ một năm ít là một lần trong mùa Phục Sinh.",
                "C. Một trong những điều kiện để được rước lễ là ý thức mình không có tội trọng",
                "D. Việc rước lễ giúp chúng ta tẩy xóa các tội nhẹ."
            ],
            correctAnswer: "B. Hội Thánh khuyên các tín hữu rước lễ mỗi khi tham dự Thánh thể, và buộc rước lễ một năm ít là một lần trong mùa Phục Sinh.",
            explanation: "Thánh thể => Thánh lễ",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Năm Phụng vụ là nền tảng và trung tâm của Phụng vụ",
                "B. Bí tích Thêm Sức giúp chúng ta sống ơn Bí tích Giải Tội",
                "C. Ơn thứ tư của Bí tích Rửa Tội có liên quan đến linh hồn.",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "C. Ơn thứ tư của Bí tích Rửa Tội có liên quan đến linh hồn.",
            explanation: "[Câu 25]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Bí tích Thêm Sức là do Hội Thánh Lập",
                "B. Điều kiện thức ba để lãnh bí tích Thêm Sức là phải học giáo lý.",
                "C. Bí tích rửa Tội, Thêm Sức chỉ được lãnh một lần.",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "C. Bí tích rửa Tội, Thêm Sức chỉ được lãnh một lần.",
            explanation: "[Câu 16]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Có mấy điều kiện để lãnh bí tích thêm sức, các bí tích được phân thành mấy loại?",
            options: [
                "A. 3,3",
                "B. 3,4",
                "C. 3,2",
                "D. Tất cả điều sai"
            ],
            correctAnswer: "A. 3,3",
            explanation: "[Câu 29, 12]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Phụng vụ các giờ kinh là ___.",
            options: [
                "A. thời gian Hội Thánh cử hành các mầu nhiệm Đức Kitô",
                "B. lời cầu nguyện của Đức Kitô cùng với Hội Thánh",
                "C. thời gian Hội Thánh cử hành phụng vụ Đức Kitô",
                "D. giờ phụng vụ của Đức Kitô cùng với Hội Thánh"
            ],
            correctAnswer: "B. lời cầu nguyện của Đức Kitô cùng với Hội Thánh",
            explanation: "[Câu 9]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Phụng vụ các giờ kinh có mục đích là để ___.",
            options: [
                "A. giúp chúng ta sống những mầu nhiệm Đức Ki-tô",
                "B. giúp các tín hữu thánh hóa thời gian trong ngày",
                "C. giúp các tín hữu thánh hóa thời gian trong ngày phụng vụ",
                "D. giúp chúng ta sống các các Bí tích của Đức Ki-tô"
            ],
            correctAnswer: "B. giúp các tín hữu thánh hóa thời gian trong ngày",
            explanation: "[Câu 9]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng:",
            options: [
                "A. Các dấu chỉ và biểu tượng giúp con người gặp gỡ và đối thoại với Thiên Chúa",
                "B. Đức Kitô tiếp tục công trình cứu độ của Ngài trong Hội Thánh qua các bí tích được gọi là nhiệm cục bí tích.",
                "C. lời cầu nguyện của Hội Thánh còn được gọi là Phụng vụ Các Giờ Kinh",
                "D. Tất cả đều đúng"
            ],
            correctAnswer: "B. Đức Kitô tiếp tục công trình cứu độ của Ngài trong Hội Thánh qua các bí tích được gọi là nhiệm cục bí tích.",
            explanation: "[Câu 6]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng:",
            options: [
                "A. Bí tích là dấu chỉ bên ngoài Chúa Giêsu đã lập và truyền lại cho Hội Thánh cử hành",
                "B. Vì ấn tín không thể xóa được, nên các bí tích chỉ được lãnh một lần mà thôi.",
                "C. 7 bí tích được chia ra ba loại; cử hành phụng vụ gồm dấu chỉ, hình ảnh, lời nói và hành động.",
                "D. A và C đúng"
            ],
            correctAnswer: "A. Bí tích là dấu chỉ bên ngoài Chúa Giêsu đã lập và truyền lại cho Hội Thánh cử hành",
            explanation: "[Bài 3: Các bí tích]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng:",
            options: [
                "A. Đáp án B và C đều sai",
                "B. Ấn tín bí tích được xem như là lời hứa Đức Ki-tô sẽ trở lại trong vinh quang",
                "C. Điều kiện để lãnh Bí tích Thêm Sức là phải có lòng ước ao",
                "D. Đáp án B đúng, C sai"
            ],
            correctAnswer: "A. Đáp án B và C đều sai",
            explanation: "[Câu 29]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng:",
            options: [
                "A. Trong bảy bí tích, có 4 bí tích có thể tha tội.",
                "B. Trong bảy bí tích, có 3 bí tích có thể tha tội.",
                "C. Trong bảy bí tích, có 2 bí tích có thể tha tội.",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "A. Trong bảy bí tích, có 4 bí tích có thể tha tội.",
            explanation: "[Câu ?]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng:",
            options: [
                "A. Lãnh nhận bí tích Thêm Sức giúp ta sạch tội trọng.",
                "B. Chúa Giêsu đã lập Bí tích Thống Hối trong bữa tiệc ly",
                "C. Lãnh nhận bí tích Rửa Tội giúp ta sạch tội trọng.",
                "D. Tất cả đều đúng"
            ],
            correctAnswer: "C. Lãnh nhận bí tích Rửa Tội giúp ta sạch tội trọng.",
            explanation: "[Câu ?]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng:",
            options: [
                "A. Ấn tín bí tích là sự chuyển thông ơn cứu độ của Chúa",
                "B. Chúa Thánh Thần luôn hoạt động trong các bí tích",
                "C. Bí tích Thánh Thể chứa đựng toàn bộ kho tàng thiêng liêng của Chúa Ki-tô",
                "D. A, C sai, B đúng"
            ],
            correctAnswer: "B. Chúa Thánh Thần luôn hoạt động trong các bí tích",
            explanation: "[Câu ?]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai:",
            options: [
                "A. Người lãnh Bí tích Truyền Chức Thánh thi hành tác vụ với thẩm quyền do Đức Kitô trao ban, không do cộng đoàn ủy thác.",
                "B. Bí tích Xức Dầu tha thứ các tội lỗi đã phạm chưa xưng được.",
                "C. Bí tích Hôn Phối tạo nên mối dây liên kết vĩnh viễn và độc chiếm giữa hai người phối ngẫu. Vì thế hôn nhân thành sự và hoàn hợp giữa những người đã được xưng tội không bao giờ có thể tháo gỡ được",
                "D. Bí tích Thống Hối có hiệu quả là tha một phần các hình phạt tạm"
            ],
            correctAnswer: "C. Bí tích Hôn Phối tạo nên mối dây liên kết vĩnh viễn và độc chiếm giữa hai người phối ngẫu. Vì thế hôn nhân thành sự và hoàn hợp giữa những người đã được xưng tội không bao giờ có thể tháo gỡ được",
            explanation: "xưng tội => rửa tội",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai:",
            options: [
                "A. Bí tích Thống Hối tha tội để giao hòa chúng ta với Thiên Chúa",
                "B. Muốn lãnh Bí tích Thống Hối chúng ta phải làm bốn việc",
                "C. Chúa Giêsu đã lập Bí tích khi Ngài hiện ra với các Tông đồ vào chiều ngày Phục sinh và nói rằng: “Anh em hãy nhận lấy Thánh Thần; anh em tha tội cho ai, thì tội người ấy được tha; anh em cầm giữ ai, thì tội người ấy bị cầm giữ”",
                "D. Yếu tố chính yếu thứ 2 của bí tích Thống Hối là lời xá giải của linh mục"
            ],
            correctAnswer: "C. Chúa Giêsu đã lập Bí tích khi Ngài hiện ra với các Tông đồ vào chiều ngày Phục sinh và nói rằng: “Anh em hãy nhận lấy Thánh Thần; anh em tha tội cho ai, thì tội người ấy được tha; anh em cầm giữ ai, thì tội người ấy bị cầm giữ”",
            explanation: "cụ thể là Bí tích Thống Hối",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng:",
            options: [
                "A. Mọi tín hữu buộc phải xưng các tội trọng của mình ít nhất một năm một lần và trong mọi trường hợp, phải xưng các tội trọng trước khi rước lễ.",
                "B. Bí tích Thống Hối tha thứ những hình phạt tạm đáng chịu vì những tội chúng ta đã phạm, dù những tội này đã được tha thứ.",
                "C. Chúa Giêsu đã lập Bí tích Thống Hối khi Ngài hiện ra với các Tông đồ vào chiều ngày Phục sinh",
                "D. A sai, B C đúng."
            ],
            correctAnswer: "C. Chúa Giêsu đã lập Bí tích Thống Hối khi Ngài hiện ra với các Tông đồ vào chiều ngày Phục sinh",
            explanation: "B cũng sai =)))",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai:",
            options: [
                "A. Bí tích Thống Hối là bí tích Chúa Giêsu đã lập, để tha các tội riêng chúng ta đã phạm từ khi lãnh Bí tích Rửa tội về sau.",
                "B. Bí tích Xức Dầu bệnh nhân là bí tích Chúa Giêsu đã lập, để ban ơn nâng đỡ bệnh nhân và người già yếu, về phần hồn cũng như phần xác.",
                "C. Bí tích Truyền Chức Thánh là bí tích Chúa Giêsu đã lập, để ủy thác tác vụ của Ngài cho các Tông đồ.",
                "D. Bí tích Thánh Thể là bí tích Chúa Giêsu đã lập, để tiếp tục lễ hy sinh trên Thánh giá và để ban Mình Máu Ngài, làm của ăn nuôi sống chúng ta."
            ],
            correctAnswer: "B. Bí tích Xức Dầu bệnh nhân là bí tích Chúa Giêsu đã lập, để ban ơn nâng đỡ bệnh nhân và người già yếu, về phần hồn cũng như phần xác.",
            explanation: "tác vụ => sứ vụ",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai",
            options: [
                "A. Bí tích Thánh Thể là bí tích Chúa Giêsu đã lập, để tiếp tục lễ hy sinh trên Thánh giá và để ban Mình Máu Ngài, làm của ăn nuôi sống chúng ta.",
                "B. Người lãnh Bí tích Thêm Sức có những bổn phận này: Ba là phải cầu nguyện sốt sắng và thật lòng ước ao lãnh nhận Chúa Thánh Thần.",
                "C. Hiệu quả của Bí tích Thêm Sức giúp gia tăng ân sủng Bí tích Rửa Tội.",
                "D. Các bí tích là do Chúa Giê-su lập."
            ],
            correctAnswer: "B. Người lãnh Bí tích Thêm Sức có những bổn phận này: Ba là phải cầu nguyện sốt sắng và thật lòng ước ao lãnh nhận Chúa Thánh Thần.",
            explanation: "[Câu 29, 30]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai",
            options: [
                "A. Phụng vụ là nguồn mạch và tột đỉnh của toàn bộ đời sống Kitô giáo",
                "B. Kho tàng thiêng liêng của Hội Thánh là chính Đức Kitô, Chiên Vượt Qua của chúng ta.",
                "C. Để được rước lễ, thì phải có điều kiện là hoàn toàn thuộc về Hội Thánh Công Giáo",
                "D. Hội Thánh buộc các tín hữu rước lễ một năm ít là một lần trong mùa Phục Sinh."
            ],
            correctAnswer: "A. Phụng vụ là nguồn mạch và tột đỉnh của toàn bộ đời sống Kitô giáo",
            explanation: "[Câu 2]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Hội Thánh buộc các tín hữu rước lễ mỗi khi tham dự Thánh lễ",
                "B. Điều kiện để rước lễ là ý thức mình không có tội trọng;",
                "C. A và B đúng",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "B. Điều kiện để rước lễ là ý thức mình không có tội trọng;",
            explanation: "[Câu 36]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Người không lãnh Bí tích Rửa Tội không được cứu độ",
                "B. Bí tích Xức dầu Thánh cho chúng ta tham dự trước vào đời sống vĩnh cửu.",
                "C. A sai, B đúng",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "D. Tất cả đều sai",
            explanation: "[Câu 20, 24]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Nhờ ân sủng của Chúa Thánh Thần, chúng ta được chữa lành và biến đổi",
                "B. Các bí tích khai tâm Ki-tô giáo, giúp củng cố và phục hồi các tín hữu trong đời sống mới",
                "C. Ngày Chúa Nhật là nền tảng và trung tâm của các bí tích",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "A. Nhờ ân sủng của Chúa Thánh Thần, chúng ta được chữa lành và biến đổi",
            explanation: "[Câu 19]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Bí tích Rửa Tôi cần thiết cho ơn cứu độ",
                "B. Xức dầu thánh trên trán là một trong những nghi thức của Bí tích Thêm Sức.",
                "C. Bí tích Rửa Tội là do Chúa Giê-su lập. Đây là 1 khẳng định sai.",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "B. Xức dầu thánh trên trán là một trong những nghi thức của Bí tích Thêm Sức.",
            explanation: "[Câu 27]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Bí tích Thống Hối giúp tái sinh, củng cố và nuôi dưỡng các tín hữu trong đời sống mới.",
                "B. Theo tài liệu, câu số 11, bí tích thứ năm là bí tích Truyền Chức Thánh.",
                "C. Bí tích Xức Dầu Bệnh Nhân giúp phục hồi và củng cố các tín hữu đã bị suy yếu hoặc mất đi do tội lỗi.",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "D. Tất cả đều sai",
            explanation: "[Câu 14, 11]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Người không lãnh nhận Bí tích Rửa Tội không được cứu độ",
                "B. Có bốn trước hợp mà người không lãnh Bí tích Rửa Tội có thể được cứu độ",
                "C. A và B Đúng",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "D. Tất cả đều sai",
            explanation: "[Câu 24]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Bí tích Rửa Tội ban cho ta ơn:",
            options: [
                "A. tháp nhập vào Đức Kitô và Hội Thánh",
                "B. làm con cái Thiên Chúa",
                "C. tha tội tổ tông và các tội riêng đã phạm",
                "D. Tất cả đều đúng"
            ],
            correctAnswer: "D. Tất cả đều đúng",
            explanation: "[Câu 25]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Nghi thức chính yếu của Bí tích Thêm Sức là gì?",
            options: [
                "A. xức dầu thánh",
                "B. đặt tay",
                "C. đổ nước trên đầu",
                "D. A B đúng C sai"
            ],
            correctAnswer: "D. A B đúng C sai",
            explanation: "[Câu 27]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai",
            options: [
                "A. Phụng vụ là nguồn mạch và tột đỉnh của toàn bộ đời sống Kitô giáo",
                "B. Kho tàng thiêng liêng của Hội Thánh là chính Đức Kitô, Chiên Vượt Qua của chúng ta.",
                "C. Để được rước lễ, thì phải có điều kiện là hoàn toàn thuộc về Hội Thánh Công Giáo",
                "D. Hội Thánh buộc các tín hữu rước lễ một năm ít là một lần trong mùa Phục Sinh."
            ],
            correctAnswer: "A. Phụng vụ là nguồn mạch và tột đỉnh của toàn bộ đời sống Kitô giáo",
            explanation: "[Câu 2]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Hội Thánh buộc các tín hữu rước lễ mỗi khi tham dự Thánh lễ",
                "B. Điều kiện để rước lễ là ý thức mình không có tội trọng;",
                "C. A và B đúng",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "B. Điều kiện để rước lễ là ý thức mình không có tội trọng;",
            explanation: "[Câu 36]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Người không lãnh Bí tích Rửa Tội không được cứu độ",
                "B. Bí tích Xức dầu Thánh cho chúng ta tham dự trước vào đời sống vĩnh cửu.",
                "C. A sai, B đúng",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "D. Tất cả đều sai",
            explanation: "[Câu 20, 24]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Nhờ ân sủng của Chúa Thánh Thần, chúng ta được chữa lành và biến đổi",
                "B. Các bí tích khai tâm Ki-tô giáo, giúp củng cố và phục hồi các tín hữu trong đời sống mới",
                "C. ngày Chúa Nhật là nền tảng và trung tâm của các bí tích",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "A. Nhờ ân sủng của Chúa Thánh Thần, chúng ta được chữa lành và biến đổi",
            explanation: "[Câu 19]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Bí tích Rửa Tôi cần thiết cho ơn cứu độ",
                "B. Xức dầu thánh trên trán là một trong những nghi thức của Bí tích Thêm Sức.",
                "C. Bí tích Rửa Tội là do Chúa Giê-su lập. Đây là 1 khẳng định sai.",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "B. Xức dầu thánh trên trán là một trong những nghi thức của Bí tích Thêm Sức.",
            explanation: "[Câu 27]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Bí tích Thống Hối giúp tái sinh, củng cố và nuôi dưỡng các tín hữu trong đời sống mới.",
                "B. Theo tài liệu, câu số 11, bí tích thứ năm là bí tích Truyền Chức Thánh.",
                "C. Bí tích Xức Dầu Bệnh Nhân giúp phục hồi và củng cố các tín hữu đã bị suy yếu hoặc mất đi do tội lỗi.",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "D. Tất cả đều sai",
            explanation: "[Câu 14, 11]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Năm Phụng vụ là nền tảng và trung tâm của Phụng vụ",
                "B. Bí tích Thêm Sức giúp chúng ta sống ơn Bí tích Giải Tội",
                "C. Ơn thứ tư của Bí tích Rửa Tội có liên quan đến linh hồn.",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "C. Ơn thứ tư của Bí tích Rửa Tội có liên quan đến linh hồn.",
            explanation: "[Câu 25]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Bí tích Thêm Sức là do Hội Thánh Lập",
                "B. Điều kiện thức ba để lãnh bí tích Thêm Sức là phải học giáo lý.",
                "C. Bí tích rửa Tội, Thêm Sức chỉ được lãnh một lần.",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "C. Bí tích rửa Tội, Thêm Sức chỉ được lãnh một lần.",
            explanation: "[Câu 16]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Có mấy điều kiện để lãnh bí tích thêm sức, các bí tích được phân thành mấy loại?",
            options: [
                "A. 3,3",
                "B. 3,4",
                "C. 3,2",
                "D. Tất cả điều sai"
            ],
            correctAnswer: "A. 3,3",
            explanation: "[Câu 29, 12]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "PHẦN I – GIÁO LÝ HỘI THÁNH CÔNG GIÁO CỬ HÀNH MẦU NHIỆM KI-TÔ GIÁO (Trích BẢN HỎI THƯA GIÁO LÝ HỘI THÁNH CÔNG GIÁO – năm 2023). Bài 2 có tiêu đề là gì?",
            options: [
                "A. CỬ HÀNH PHỤNG VỤ CỦA HỘI THÁNH",
                "B. HỘI THÁNH CỬ HÀNH PHỤNG VỤ",
                "C. HỘI THÁNH VÀ PHỤNG VỤ",
                "D. PHỤNG VỤ VÀ HỘI THÁNH"
            ],
            correctAnswer: "A. CỬ HÀNH PHỤNG VỤ CỦA HỘI THÁNH",
            explanation: "",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Phụng vụ các giờ kinh là ___.",
            options: [
                "A. thời gian Hội Thánh cử hành các mầu nhiệm Đức Kitô",
                "B. lời cầu nguyện của Đức Kitô cùng với Hội Thánh",
                "C. thời gian Hội Thánh cử hành phụng vụ Đức Kitô",
                "D. giờ phụng vụ của Đức Kitô cùng với Hội Thánh"
            ],
            correctAnswer: "B. lời cầu nguyện của Đức Kitô cùng với Hội Thánh",
            explanation: "[Câu 9]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Phụng vụ các giờ kinh có mục đích là để ___.",
            options: [
                "A. giúp chúng ta sống những mầu nhiệm Đức Ki-tô",
                "B. giúp các tín hữu thánh hóa thời gian trong ngày",
                "C. giúp các tín hữu thánh hóa thời gian trong ngày phụng vụ",
                "D. giúp chúng ta sống các các Bí tích của Đức Ki-tô"
            ],
            correctAnswer: "B. giúp các tín hữu thánh hóa thời gian trong ngày",
            explanation: "[Câu 9]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Bí tích là dấu chỉ bên ngoài Chúa Giêsu đã lập",
                "B. Bí tích là dấu chỉ bên ngoài Chúa Giêsu truyền lại cho Hội Thánh cử hành",
                "C. A đúng B sai.",
                "D. A và B đều đúng"
            ],
            correctAnswer: "D. A và B đều đúng",
            explanation: "[Câu 10]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai",
            options: [
                "A. Qua phụng vụ, Đức Kitô tiếp tục công trình cứu độ của Ngài",
                "B. Qua phụng vụ, con người thờ phượng và thánh hóa Thiên Chúa",
                "C. A đúng B sai",
                "D. Tất cả đều đúng"
            ],
            correctAnswer: "B. Qua phụng vụ, con người thờ phượng và thánh hóa Thiên Chúa",
            explanation: "[Câu 2]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Trong cử hành phụng vụ, có một yếu tố giúp thực hiện hành động cứu độ của Đức Kitô;",
                "B. Cử hành phụng vụ có 3 yếu tố",
                "C. Cử hành phụng vụ có 4 yếu tố",
                "D. Trong cử hành phụng vụ, có một yếu tố là “Đức Kitô toàn thể”"
            ],
            correctAnswer: "A. Trong cử hành phụng vụ, có một yếu tố giúp thực hiện hành động cứu độ của Đức Kitô;",
            explanation: "[Câu 6]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai",
            options: [
                "A. Có bảy bí tích, Các bí tích của Hội Thánh được phân thành ba loại.",
                "B. Tiêu đề bài 3: Các bí tích; Các bí tích của Hội Thánh được phân thành 3 loại.",
                "C. Có bảy bí tích, Tiêu đề bài 3: Các bí tích và phụng vụ",
                "D. Tiêu đề bài 3: Các bí tích"
            ],
            correctAnswer: "C. Có bảy bí tích, Tiêu đề bài 3: Các bí tích và phụng vụ",
            explanation: "Tiêu đề bài 3: Các bí tích - [Câu 11, 12]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai",
            options: [
                "A. Bí tích Thống Hối và Xức Dầu Bệnh Nhân giúp phục hồi và củng cố đời sống mới của các tín hữu đã bị suy yếu hoặc mất đi do tội lỗi.",
                "B. Các bí tích phục vụ gồm Bí tích Truyền Chức Thánh và Hôn Phối.",
                "C. Các bí tích chữa lành gồm Bí tích Thống Hối và Xức Dầu Thánh",
                "D. Các bí tích của Hội Thánh được phân thành ba loại"
            ],
            correctAnswer: "C. Các bí tích chữa lành gồm Bí tích Thống Hối và Xức Dầu Thánh",
            explanation: "[Câu 14]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Ấn tín bí tích là dấu ấn thiêng liêng, Thiên Chúa in vào lòng tất cả mọi người",
                "B. Nhờ phụng vụ, đức tin của chúng ta thêm mạnh mẽ vững vàng.",
                "C. Các bí tích phục vụ gồm Bí tích Truyền Chức Thánh và Hôn Phối",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "C. Các bí tích phục vụ gồm Bí tích Truyền Chức Thánh và Hôn Phối",
            explanation: "[Câu 15]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Ai ban ân sủng trong các bí tích?",
            options: [
                "A. Đức Kitô",
                "B. Chúa Giê-su",
                "C. Đức Giê-su Ki-tô",
                "D. Tất cả đều đúng"
            ],
            correctAnswer: "D. Tất cả đều đúng",
            explanation: "[Câu 18]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Bí tích Rửa Tội ___.",
            options: [
                "A. là Bí tích Chúa Giê-su đã lập",
                "B. để làm cho chúng ta được sinh lại trong đời sống bởi nước và Thánh Thần.",
                "C. là bí tích Chúa Giêsu đã lập, để làm cho chúng ta được sinh lại trong đời sống bởi nước và Thánh Thần.",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "A. là Bí tích Chúa Giê-su đã lập",
            explanation: "[Câu 21]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng",
            options: [
                "A. Người không lãnh nhận Bí tích Rửa Tội không được cứu độ",
                "B. Có bốn trước hợp mà người không lãnh Bí tích Rửa Tội có thể được cứu độ",
                "C. A và B Đúng",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "D. Tất cả đều sai",
            explanation: "[Câu 24]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Năm Phụng vụ là thời gian Hội Thánh cử hành các bí tích. Đ hay S?",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "các mầu nhiệm Đức Kitô [Câu 8]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Bí tích Thánh Thể chứa đựng tất cả kho tàng thiêng liêng của Hội Thánh là chính Đức Kitô. Đ hay S?",
            options: ["Đúng", "Sai"],
            correctAnswer: "Đúng",
            explanation: "[Câu 33]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Phụng vụ Lời Chúa, khởi đi từ lời nguyện nhập lễ cho đến hết lời hiệp lễ. Đ hay S?",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "lời nguyện chung [Câu 34]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Việc tham dự thánh lễ giúp ta được kết hợp mật thiết với Đức Kitô và Hội Thánh, được tẩy xóa các tội nhẹ. Đ hay S?",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "Việc rước lễ [Câu 37]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Điều kiện thứ bốn để được rước lễ là phải có thái độ tôn kính Đức Kitô. Đ hay S?",
            options: ["Đúng", "Sai"],
            correctAnswer: "Đúng",
            explanation: "[Câu 36]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Bổn phận thứ hai của người lãnh Bí tích Thêm Sức là góp phần xây dựng Hội Thánh theo tinh thần Tin Mừng. Đ hay S?",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "xây dựng xã hội [Câu 30]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Muốn lãnh bí tích thêm sức thì phải sạch mọi tội. Đ hay S?",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "Sạch tội trọng [Câu 29]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Đối với mọi người, bí tích Rửa Tội cần thiết cho ơn cứu độ. Đ hay S?",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "[Câu 23]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Bí tích Hôn Phối có thể giúp cho chúng ta tham dự trước vào đời sống vĩnh cửu. Đ hay S?",
            options: ["Đúng", "Sai"],
            correctAnswer: "Đúng",
            explanation: "[Câu 20]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Bí tích Xức Dầu Bệnh Nhân trao ban ân sủng của Chúa Thánh Thần. Đ hay S?",
            options: ["Đúng", "Sai"],
            correctAnswer: "Đúng",
            explanation: "[Câu 19]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Bí tích là dấu chỉ bên ngoài Chúa Giêsu đã lập và truyền lại cho Hội Thánh cử hành, để thờ phượng Thiên Chúa và thánh hóa con người. Đ hay S?",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "để diễn tả và thông ban cho chúng ta ân sủng bên trong là sự sống thần linh. [Câu 10]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Có hai bí tích phụng vụ. Đ hay S?",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "phục vụ [Câu 15]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Có ba bí tích khai tâm Ki-tô giáo và hai bí tích chữa lành. Đ hay S?",
            options: ["Đúng", "Sai"],
            correctAnswer: "Đúng",
            explanation: "[Câu 13, 14]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Thân thể của Đức Kitô là Hội Thánh ở trần gian và Hội Thánh ở trên trời. Đ hay S?",
            options: ["Đúng", "Sai"],
            correctAnswer: "Đúng",
            explanation: "[Câu 5]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Ngày Chúa Nhật là đỉnh cao và trung tâm của cả năm phụng vụ. Đ hay S?",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "nền tảng và trung tâm [Câu 7]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Yếu tố thứ 2 của cử hành phụng vụ là để con người gặp gỡ và đối thoại với Thiên Chúa. Đ hay S?",
            options: ["Đúng", "Sai"],
            correctAnswer: "Đúng",
            explanation: "[Câu 6]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Bí tích thứ bốn là Bí tích Thống Hối, Bí tích thứ năm là Bí tích Xức Dầu bệnh nhân, loại thứ ba của các Bí tích của Hội Thánh là các bí tích phục vụ. Đ hay S?",
            options: ["Đúng", "Sai"],
            correctAnswer: "Đúng",
            explanation: "[Câu 11, 12]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Các bí tích cần thiết cho ơn cứu độ vì các bí tích củng cố và nuôi dưỡng các tín hữu trong đời sống mới.",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "Vì các bí tích trao ban ân sủng của Chúa Thánh Thần [Câu 19]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Bí tích là dấu chỉ bên ngoài Chúa Giêsu đã lập và truyền lại cho Hội Thánh cử hành, để diễn tả cho chúng ta ân sủng bên trong là sự sống thần linh.",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "để diễn tả và thông ban cho chúng ta [Câu 10]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Bí tích Rửa Tội ban cho chúng ta được tháp nhập vào Đức Kitô và Hội Thánh.",
            options: ["Đúng", "Sai"],
            correctAnswer: "Đúng",
            explanation: "[Câu 25]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Ấn tín bí tích là dấu ấn thiêng liêng, Thiên Chúa in vào lòng những người lãnh Bí tích Giải Tội, Thêm Sức, Truyền Chức Thánh.",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "bí tích Rửa Tội [Câu 16]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Khi lãnh nhận bí tích, chúng ta phải có đức tin, đồng thời nhờ các bí tích, đời sống của chúng ta thêm mạnh mẽ vững vàng.",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "đức tin của chúng ta [Câu 17]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Bí tích Rửa Tội ban cho ta ơn:",
            options: [
                "A. tháp nhập vào Đức Kitô và Hội Thánh",
                "B. làm con cái Thiên Chúa",
                "C. tha tội tổ tông và các tội riêng đã phạm",
                "D. Tất cả đều đúng"
            ],
            correctAnswer: "D. Tất cả đều đúng",
            explanation: "[Câu 25]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Nghi thức chính yếu của Bí tích Thêm Sức là gì?",
            options: [
                "A. xức dầu thánh",
                "B. đặt tay",
                "C. đổ nước trên đầu",
                "D. A B đúng C sai"
            ],
            correctAnswer: "D. A B đúng C sai",
            explanation: "[Câu 27]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng:",
            options: [
                "A. Các dấu chỉ và biểu tượng giúp con người gặp gỡ và đối thoại với Thiên Chúa",
                "B. Đức Kitô tiếp tục công trình cứu độ của Ngài trong Hội Thánh qua các bí tích được gọi là nhiệm cục bí tích.",
                "C. lời cầu nguyện của Hội Thánh còn được gọi là Phụng vụ Các Giờ Kinh",
                "D. Tất cả đều đúng"
            ],
            correctAnswer: "B. Đức Kitô tiếp tục công trình cứu độ của Ngài trong Hội Thánh qua các bí tích được gọi là nhiệm cục bí tích.",
            explanation: "[Câu 6]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng:",
            options: [
                "A. Bí tích là dấu chỉ bên ngoài Chúa Giêsu đã lập và truyền lại cho Hội Thánh cử hành",
                "B. Vì ấn tín không thể xóa được, nên các bí tích chỉ được lãnh một lần mà thôi.",
                "C. 7 bí tích được chia ra ba loại; cử hành phụng vụ gồm dấu chỉ, hình ảnh, lời nói và hành động.",
                "D. A và C đúng"
            ],
            correctAnswer: "A. Bí tích là dấu chỉ bên ngoài Chúa Giêsu đã lập và truyền lại cho Hội Thánh cử hành",
            explanation: "[Bài 3: Các bí tích]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng:",
            options: [
                "A. Đáp án B và C đều sai",
                "B. Ấn tín bí tích được xem như là lời hứa Đức Ki-tô sẽ trở lại trong vinh quang",
                "C. Điều kiện để lãnh Bí tích Thêm Sức là phải có lòng ước ao",
                "D. Đáp án B đúng, C sai"
            ],
            correctAnswer: "A. Đáp án B và C đều sai",
            explanation: "[Câu 29]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Người lãnh Bí tích Thêm sức được 4 ơn và 3 bổn phận.",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "Trong tài liệu không có nói đến mấy ơn [Bài 5]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Người lãnh Bí tích Thêm Sức phải góp phần xây dựng xã hội theo tinh thần Tin Mừng.",
            options: ["Đúng", "Sai"],
            correctAnswer: "Đúng",
            explanation: "Câu 30",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Ơn thứ ba của Bí tích Rửa Tội là được làm con cái Thiên Chúa.",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "Ơn thứ 2 [Câu 25]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Bí tích Thánh Thể có thể tẩy xóa được 1 số tội lỗi.",
            options: ["Đúng", "Sai"],
            correctAnswer: "Đúng",
            explanation: "Bài 6",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "1 trong những điều kiện để lãnh các Bí tích khai tâm là phải sạch tội trọng.",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "Bí tích Rửa Tội thì không cần [Câu 29]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng:",
            options: [
                "A. Trong bảy bí tích, có 4 bí tích có thể tha tội.",
                "B. Trong bảy bí tích, có 3 bí tích có thể tha tội.",
                "C. Trong bảy bí tích, có 2 bí tích có thể tha tội.",
                "D. Tất cả đều sai"
            ],
            correctAnswer: "A. Trong bảy bí tích, có 4 bí tích có thể tha tội.",
            explanation: "[Câu ?]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng:",
            options: [
                "A. Lãnh nhận bí tích Thêm Sức giúp ta sạch tội trọng.",
                "B. Chúa Giêsu đã lập Bí tích Thống Hối trong bữa tiệc ly",
                "C. Lãnh nhận bí tích Rửa Tội giúp ta sạch tội trọng.",
                "D. Tất cả đều đúng"
            ],
            correctAnswer: "C. Lãnh nhận bí tích Rửa Tội giúp ta sạch tội trọng.",
            explanation: "[Câu ?]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng:",
            options: [
                "A. Ấn tín bí tích là sự chuyển thông ơn cứu độ của Chúa",
                "B. Chúa Thánh Thần luôn hoạt động trong các bí tích",
                "C. Bí tích Thánh Thể chứa đựng toàn bộ kho tàng thiêng liêng của Chúa Ki-tô",
                "D. A, C sai, B đúng"
            ],
            correctAnswer: "B. Chúa Thánh Thần luôn hoạt động trong các bí tích",
            explanation: "[Câu ?]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu sai:",
            options: [
                "A. Bí tích Rửa Tội có thể tha tội cho người lãnh nhận",
                "B. Ân xá có thể tha tội cho người lãnh nhận",
                "C. Bí tích Thống Hối có thể tha tội cho người lãnh nhận",
                "D. B sai; A, C đúng =))"
            ],
            correctAnswer: "B. Ân xá có thể tha tội cho người lãnh nhận",
            explanation: "[Câu ?]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chọn câu đúng:",
            options: [
                "A. Các bí tích phụng vụ gồm có Bí tích Truyền Chức Thánh và Hôn Phối",
                "B. Các bí tích trao ban ân sủng của Chúa Giê-su",
                "C. Bí tích Thống Hối có 3 yếu tố chính",
                "D. A sai; B và C sai"
            ],
            correctAnswer: "D. A sai; B và C sai",
            explanation: "[Câu ?]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Mọi tín hữu buộc phải xưng các tội trọng của mình ít nhất một năm một lần và trong mọi trường hợp, phải xưng các tội trọng trước khi rước lễ.",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "Khi đến tuổi khôn [Câu ?]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Ân xá là việc tha thứ những hình phạt tạm đáng chịu vì những tội chúng ta đã phạm, dù những tội này đã được tha thứ.",
            options: ["Đúng", "Sai"],
            correctAnswer: "Đúng",
            explanation: "[Câu ?]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Trong nhiều trường hợp, phải xưng các tội trọng trước khi rước lễ.",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "Phải xưng trong mọi trường hợp [Câu ?]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Chúa Giêsu đã lập Bí tích Thống Hối khi Ngài hiện ra với các Tông đồ vào sáng ngày Phục sinh và nói rằng: “Anh em hãy nhận lấy Thánh Thần; anh em tha tội cho ai, thì tội người ấy được tha; anh em cầm giữ ai, thì tội người ấy bị cầm giữ”.",
            options: ["Đúng", "Sai"],
            correctAnswer: "Sai",
            explanation: "Lúc chiều ngày Phục Sinh [Câu ?]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        },
        {
            question: "Ân xá là việc tha thứ những hình phạt tạm đáng chịu vì những tội chúng ta đã phạm, dù những tội này đã được tha thứ.",
            options: ["Đúng", "Sai"],
            correctAnswer: "Đúng",
            explanation: "[Câu ?]",
            attempts: 0,
            completed: false,
            failed: false,
            userAnswer: "",
            timeTaken: 0
        }
    ],
    science: [
        {}
    ],
    history: [
        {}
    ]
};

// Topic descriptions
const topicDescriptions = {
    general: "Cùng tìm hiểu cách Hội Thánh cử hành các mầu nhiệm cứu độ và nuôi dưỡng đời sống đức tin qua Phụng Vụ và các Bí Tích.",
    science: "Canh tân đời sống đức tin qua việc tham dự và cử hành Phụng Vụ cách sâu sắc trong Năm Mục Vụ 2025.",
    history: "Cùng bước vào Năm Thánh 2025 như những người hành hương mang niềm hy vọng và tình yêu đến cho thế giới.",
    // geography: "Travel the world with questions about countries, landmarks, natural features, and more.",
    // entertainment: "Test your pop culture knowledge with questions about movies, music, books, and celebrities."
};

// Working copy of quiz questions (will be randomized if option is selected)
let quizQuestions = [];

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('username-error');
const startBtn = document.getElementById('start-btn');
const displayUsername = document.getElementById('display-username');
const displayTopic = document.getElementById('display-topic');
const randomizeQuestionsToggle = document.getElementById('randomize-questions');
const quizTopicSelect = document.getElementById('quiz-topic');
const topicDescription = document.getElementById('topic-description');

const currentQuestionContainer = document.getElementById('current-question-container');
const currentScoreElement = document.getElementById('current-score');
const quizProgress = document.getElementById('quiz-progress');
const timerCountdown = document.getElementById('timer-countdown');
const timerCircleBg = document.getElementById('timer-circle-bg');
const submitQuizBtn = document.getElementById('submit-quiz-btn');

const perfectScoreMessage = document.getElementById('perfect-score-message');
const finalScore = document.getElementById('final-score');
const totalPossible = document.getElementById('total-possible');
const timeTaken = document.getElementById('time-taken');
const summaryTableBody = document.getElementById('summary-table-body');
const restartBtn = document.getElementById('restart-btn');

const leaderboardContainer = document.getElementById('leaderboard-container');
const topPlayersContainer = document.getElementById('top-players-container');
const leaderboardLoading = document.getElementById('leaderboard-loading');
const leaderboardError = document.getElementById('leaderboard-error');
const leaderboardEmpty = document.getElementById('leaderboard-empty');
const leaderboardContent = document.getElementById('leaderboard-content');
const leaderboardBody = document.getElementById('leaderboard-body');
const pagination = document.getElementById('pagination');

const confirmationModal = document.getElementById('confirmation-modal');
const modalCancel = document.getElementById('modal-cancel');
const modalConfirm = document.getElementById('modal-confirm');

// Quiz state
let currentUser = '';
let currentTopic = 'general';
let score = 0;
let quizStartTime;
let quizEndTime;
let quizTotalTime;
let currentQuestionIndex = 0;
let questionTimer;
let questionStartTime;
let timeRemaining = 25;
let leaderboardData = [];
let currentPage = 1;
const itemsPerPage = 5;
const questionTimeLimit = 25; // seconds per question
let selectedOption = null;
let questionOrder = []; // To track the original order of questions when randomized

// Initialize
updateTopicDescription();

// Load leaderboard on page load
loadLeaderboard();

// Event Listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);
submitQuizBtn.addEventListener('click', showSubmitConfirmation);
modalCancel.addEventListener('click', hideSubmitConfirmation);
modalConfirm.addEventListener('click', submitQuiz);

usernameInput.addEventListener('input', validateUsername);
quizTopicSelect.addEventListener('change', updateTopicDescription);

// Functions
function updateTopicDescription() {
    const selectedTopic = quizTopicSelect.value;
    topicDescription.textContent = topicDescriptions[selectedTopic];

    // Update max score display based on selected topic
    const topicQuestions = quizQuestionsByTopic[selectedTopic];
    totalPossible.textContent = topicQuestions.length * 2;
    document.getElementById('max-score').textContent = topicQuestions.length;
}

function validateUsername() {
    const username = usernameInput.value.trim();
    const isValid = /^[a-z0-9]+$/.test(username);

    if (username === '') {
        usernameError.textContent = 'Tên người dùng không được để trống.';
        usernameError.classList.remove('hidden');
        startBtn.disabled = true;
        return false;
    } else if (!isValid) {
        usernameError.textContent = 'Tên người dùng phải viết thường, không có ký tự đặc biệt hoặc khoảng trắng.';
        usernameError.classList.remove('hidden');
        startBtn.disabled = true;
        return false;
    } else {
        usernameError.classList.add('hidden');
        startBtn.disabled = false;
        return true;
    }
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    const newArray = [...array]; // Create a copy to avoid modifying the original
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function prepareQuestions() {
    // Get the selected topic
    currentTopic = quizTopicSelect.value;

    // Deep clone the questions for the selected topic
    const clonedQuestions = JSON.parse(JSON.stringify(quizQuestionsByTopic[currentTopic]));

    // Reset question order array
    questionOrder = [];

    if (randomizeQuestionsToggle.checked) {
        // If randomize is checked, shuffle the questions
        quizQuestions = shuffleArray(clonedQuestions);

        // Store the original index of each question for the summary
        quizQuestions.forEach((question, index) => {
            // Find the original index of this question
            const originalIndex = quizQuestionsByTopic[currentTopic].findIndex(q => q.question === question.question);
            questionOrder.push(originalIndex);
        });
    } else {
        // If not randomized, use the original order
        quizQuestions = clonedQuestions;
        // Create sequential order
        questionOrder = Array.from({ length: clonedQuestions.length }, (_, i) => i);
    }
}

function startQuiz() {
    if (!validateUsername()) return;

    currentUser = usernameInput.value.trim();
    displayUsername.textContent = currentUser;

    // Set the topic badge
    const topicName = quizTopicSelect.options[quizTopicSelect.selectedIndex].text;
    displayTopic.textContent = topicName;

    welcomeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    // Reset quiz state
    score = 0;
    currentQuestionIndex = 0;
    currentScoreElement.textContent = score;

    // Prepare questions (randomize if selected)
    prepareQuestions();

    // Start quiz timer
    quizStartTime = new Date();

    // Show first question
    showCurrentQuestion();

    // Highlight current user in leaderboard
    highlightCurrentUser();
}

function showCurrentQuestion() {
    // Clear any existing timer
    if (questionTimer) {
        clearInterval(questionTimer);
    }

    // Reset timer
    timeRemaining = questionTimeLimit;
    timerCountdown.textContent = timeRemaining;
    timerCircleBg.style.background = `conic-gradient(var(--accent-color) 0%, transparent 0%)`;
    timerCountdown.parentElement.classList.remove('timer-warning');

    // Reset selected option
    selectedOption = null;

    // Update progress
    const progressPercentage = (currentQuestionIndex / quizQuestions.length) * 100;
    quizProgress.style.width = `${progressPercentage}%`;

    // Get current question
    const question = quizQuestions[currentQuestionIndex];

    // Start question timer
    questionStartTime = new Date();
    startQuestionTimer();

    // Create question card
    currentQuestionContainer.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold">Câu hỏi số ${currentQuestionIndex + 1} trên ${quizQuestions.length}</h3>
            <div class="attempts-badge">Số lượt làm: <span id="current-attempts">0</span>/1</div>
        </div>
        
        <p class="text-lg mb-4">${question.question}</p>
        
        <div class="option-container" id="option-container">
            ${question.options.map((option, index) => `
                <label class="option-label" data-option="${option}">
                    <input type="radio" name="answer" value="${option}" class="option-input">
                    <span>${option}</span>
                </label>
            `).join('')}
        </div>
        
        <div id="feedback-container" class="hidden">
            <div id="feedback-message" class="feedback-message"></div>
        </div>
        
        <div class="button-group">
            <button id="check-answer-btn" class="btn">Kiểm Tra</button>
            <button id="next-question-btn" class="btn next-btn hidden">Câu tiếp theo</button>
        </div>
    `;

    // Add event listeners to options
    const optionLabels = document.querySelectorAll('.option-label');
    optionLabels.forEach(label => {
        label.addEventListener('click', () => {
            // Remove selected class from all options
            optionLabels.forEach(l => l.classList.remove('selected'));

            // Add selected class to clicked option
            label.classList.add('selected');

            // Update selected option
            selectedOption = label.dataset.option;

            // Check the radio button
            const radio = label.querySelector('input[type="radio"]');
            radio.checked = true;
        });
    });

    // Add event listener to check button
    document.getElementById('check-answer-btn').addEventListener('click', checkCurrentAnswer);

    // Add event listener to next button (if visible)
    const nextButton = document.getElementById('next-question-btn');
    if (nextButton) {
        nextButton.addEventListener('click', moveToNextQuestion);
    }
}

function startQuestionTimer() {
    questionTimer = setInterval(() => {
        timeRemaining--;
        timerCountdown.textContent = timeRemaining;

        // Update timer circle
        const percentage = ((questionTimeLimit - timeRemaining) / questionTimeLimit) * 100;
        timerCircleBg.style.background = `conic-gradient(var(--accent-color) ${percentage}%, transparent ${percentage}%)`;

        // Warning when time is running low
        if (timeRemaining <= 10) {
            timerCountdown.parentElement.classList.add('timer-warning');
        }

        if (timeRemaining <= 0) {
            clearInterval(questionTimer);
            handleTimeUp();
        }
    }, 1000);
}

function handleTimeUp() {
    const question = quizQuestions[currentQuestionIndex];
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackMessage = document.getElementById('feedback-message');
    const checkButton = document.getElementById('check-answer-btn');
    const nextButton = document.getElementById('next-question-btn');
    const optionContainer = document.getElementById('option-container');

    // Record the user's answer (if any)
    question.userAnswer = selectedOption || "";

    // Record time taken
    const questionEndTime = new Date();
    question.timeTaken = Math.floor((questionEndTime - questionStartTime) / 1000);

    // Mark question as failed
    question.failed = true;

    // Show feedback
    feedbackContainer.classList.remove('hidden');
    feedbackMessage.textContent = `Hết thời gian! Câu trả lời đúng là: ${question.correctAnswer} - Giải thích: ${question.explanation}`;
    feedbackMessage.className = 'feedback-message feedback-incorrect';

    // Highlight correct answer
    const optionLabels = optionContainer.querySelectorAll('.option-label');
    optionLabels.forEach(label => {
        if (label.dataset.option === question.correctAnswer) {
            label.classList.add('correct');
        }
    });

    // Disable options
    optionLabels.forEach(label => {
        const radio = label.querySelector('input[type="radio"]');
        radio.disabled = true;
        label.style.cursor = 'default';
    });

    // Hide check button and show next button
    checkButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
}

function checkCurrentAnswer() {
    const question = quizQuestions[currentQuestionIndex];

    // If no option selected, alert user
    if (!selectedOption) {
        alert("Vui lòng chọn một câu trả lời trước.");
        return;
    }

    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackMessage = document.getElementById('feedback-message');
    const attemptsElement = document.getElementById('current-attempts');
    const checkButton = document.getElementById('check-answer-btn');
    const nextButton = document.getElementById('next-question-btn');
    const optionContainer = document.getElementById('option-container');

    // Record the user's answer
    question.userAnswer = selectedOption;

    // Increment attempts
    question.attempts++;
    attemptsElement.textContent = question.attempts;

    // Check if answer is correct
    const isCorrect = selectedOption === question.correctAnswer;

    if (isCorrect) {
        // Stop the timer
        clearInterval(questionTimer);

        // Record time taken
        const questionEndTime = new Date();
        question.timeTaken = Math.floor((questionEndTime - questionStartTime) / 1000);

        // Correct answer
        feedbackContainer.classList.remove('hidden');
        feedbackMessage.textContent = `Chính xác! Làm tốt lắm! - Giải thích: ${question.explanation}`;
        feedbackMessage.className = 'feedback-message feedback-correct';

        // Update score
        score += 1;
        currentScoreElement.textContent = score;

        // Mark question as completed
        question.completed = true;

        // Highlight correct answer
        const optionLabels = optionContainer.querySelectorAll('.option-label');
        optionLabels.forEach(label => {
            if (label.dataset.option === question.correctAnswer) {
                label.classList.add('correct');
            }
        });

        // Disable options
        optionLabels.forEach(label => {
            const radio = label.querySelector('input[type="radio"]');
            radio.disabled = true;
            label.style.cursor = 'default';
        });

        // Hide check button and show next button
        checkButton.classList.add('hidden');
        nextButton.classList.remove('hidden');
    } else {
        // Incorrect answer
        feedbackContainer.classList.remove('hidden');

        if (question.attempts === 1) {
        //     // First attempt - show hint
        //     feedbackMessage.textContent = 'Incorrect. Try again!';
        //     feedbackMessage.className = 'feedback-message feedback-incorrect';

        //     // Highlight incorrect answer
        //     const optionLabels = optionContainer.querySelectorAll('.option-label');
        //     optionLabels.forEach(label => {
        //         if (label.dataset.option === selectedOption) {
        //             label.classList.add('incorrect');
        //             label.classList.remove('selected');
        //         }
        //     });

        //     // Reset selected option
        //     selectedOption = null;
        // } else {
            // Stop the timer
            clearInterval(questionTimer);

            // Record time taken
            const questionEndTime = new Date();
            question.timeTaken = Math.floor((questionEndTime - questionStartTime) / 1000);

            // Second attempt - lock question
            feedbackMessage.textContent = `Sai. Đáp án đúng là: ${question.correctAnswer} - Giải thích: ${question.explanation}`;
            feedbackMessage.className = 'feedback-message feedback-incorrect';

            // Mark question as failed
            question.failed = true;

            // Highlight correct and incorrect answers
            const optionLabels = optionContainer.querySelectorAll('.option-label');
            optionLabels.forEach(label => {
                if (label.dataset.option === question.correctAnswer) {
                    label.classList.add('correct');
                } else if (label.dataset.option === selectedOption) {
                    label.classList.add('incorrect');
                }
            });

            // Disable options
            optionLabels.forEach(label => {
                const radio = label.querySelector('input[type="radio"]');
                radio.disabled = true;
                label.style.cursor = 'default';
            });

            // Hide check button and show next button
            checkButton.classList.add('hidden');
            nextButton.classList.remove('hidden');
        }
    }
}

function moveToNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        // Show next question
        showCurrentQuestion();
    } else {
        // All questions completed
        finishQuiz();
    }
}

function showSubmitConfirmation() {
    // Only show confirmation if not on the last question
    if (currentQuestionIndex < quizQuestions.length - 1) {
        confirmationModal.classList.remove('hidden');
    } else {
        // If on last question, just submit directly
        submitQuiz();
    }
}

function hideSubmitConfirmation() {
    confirmationModal.classList.add('hidden');
}

function submitQuiz() {
    // Hide confirmation modal if it's open
    hideSubmitConfirmation();

    // Stop the timer
    if (questionTimer) {
        clearInterval(questionTimer);
    }

    // Record the current question's answer if not already completed or failed
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (!currentQuestion.completed && !currentQuestion.failed) {
        currentQuestion.userAnswer = selectedOption || "";

        // Record time taken
        const questionEndTime = new Date();
        currentQuestion.timeTaken = Math.floor((questionEndTime - questionStartTime) / 1000);
    }

    // Finish the quiz
    finishQuiz();
}

function finishQuiz() {
    quizEndTime = new Date();
    const timeDiff = Math.floor((quizEndTime - quizStartTime) / 1000); // in seconds
    const minutes = Math.floor(timeDiff / 60);
    const seconds = timeDiff % 60;
    quizTotalTime = `${minutes}'${seconds.toString().padStart(2, '0')}s`;

    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');

    finalScore.textContent = score;
    timeTaken.textContent = quizTotalTime;

    // Generate summary table
    generateSummaryTable();

    // Check for perfect score
    const maxPossibleScore = quizQuestions.length * 2;
    if (score === maxPossibleScore) {
        perfectScoreMessage.classList.remove('hidden');
        createConfetti();
    } else {
        perfectScoreMessage.classList.add('hidden');
    }

    // Save result to Google Sheets
    saveResult();
}

function generateSummaryTable() {
    summaryTableBody.innerHTML = '';

    quizQuestions.forEach((question, index) => {
        const row = document.createElement('tr');

        const isCorrect = question.completed;
        const resultClass = isCorrect ? 'summary-correct' : 'summary-incorrect';
        const resultText = isCorrect ? 'Đúng' : 'Sai';

        // Get the original question number (for display purposes)
        const originalQuestionNumber = questionOrder[index] + 1;

        row.innerHTML = `
            <td>${originalQuestionNumber}</td>
            <td>${question.question}</td>
            <td>${question.userAnswer || '-'}</td>
            <td>${question.correctAnswer}</td>
            <td class="${resultClass}">${resultText}</td>
        `;

        summaryTableBody.appendChild(row);
    });
}

function saveResult() {
    const data = {
        action: 'addOrUpdate',
        username: currentUser,
        topic: quizTopicSelect.options[quizTopicSelect.selectedIndex].text,
        score: score,
        time: quizTotalTime,
    };

    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data)
    }).then(() => {
        // Reload leaderboard after saving
        setTimeout(loadLeaderboard, 1000);
    }).catch(error => {
        console.error('Error saving result:', error);
    });
}

function loadLeaderboard() {
    // Show loading state
    leaderboardLoading.classList.remove('hidden');
    leaderboardError.classList.add('hidden');
    leaderboardEmpty.classList.add('hidden');
    leaderboardContent.classList.add('hidden');
    topPlayersContainer.classList.add('hidden');

    // Fetch leaderboard data
    fetch(`${GOOGLE_SCRIPT_URL}?action=getLeaderboard`)
        .then(response => response.json())
        .then(data => {
            leaderboardLoading.classList.add('hidden');

            if (data.status === 'success') {
                leaderboardData = data.data;

                if (leaderboardData.length === 0) {
                    leaderboardEmpty.classList.remove('hidden');
                } else {
                    // Sort by score (descending) and time (descending)
                    leaderboardData.sort((a, b) => {
                        if (b.score !== a.score) {
                            return b.score - a.score;
                        }

                        // Convert time strings to seconds for comparison
                        const aTime = timeToSeconds(a.time);
                        const bTime = timeToSeconds(b.time);
                        return aTime - bTime;
                    });

                    leaderboardContent.classList.remove('hidden');
                    displayTopPlayers();
                    displayLeaderboard();
                    highlightCurrentUser();
                }
            } else {
                leaderboardError.classList.remove('hidden');
            }
        })
        .catch(error => {
            console.error('Error fetching leaderboard:', error);
            leaderboardLoading.classList.add('hidden');
            leaderboardError.classList.remove('hidden');

            // For demo purposes, use sample data if fetch fails
            leaderboardData = [
                { username: 'player1', score: 18, time: "2'45s", date: '2023-06-15T10:30:00Z' },
                { username: 'player2', score: 16, time: "3'12s", date: '2023-06-15T11:20:00Z' },
                { username: 'player3', score: 20, time: "2'30s", date: '2023-06-15T09:45:00Z' },
                { username: 'player4', score: 14, time: "4'10s", date: '2023-06-14T14:20:00Z' },
                { username: 'player5', score: 12, time: "3'50s", date: '2023-06-14T16:15:00Z' },
                { username: 'player6', score: 10, time: "5'05s", date: '2023-06-13T09:10:00Z' },
                { username: 'player7', score: 16, time: "3'25s", date: '2023-06-13T11:45:00Z' },
                { username: 'player8', score: 18, time: "2'55s", date: '2023-06-12T15:30:00Z' },
                { username: 'player9', score: 14, time: "3'40s", date: '2023-06-12T16:20:00Z' },
                { username: 'player10', score: 20, time: "2'20s", date: '2023-06-11T10:15:00Z' },
                { username: 'player11', score: 12, time: "4'30s", date: '2023-06-11T14:50:00Z' },
                { username: 'player12', score: 16, time: "3'15s", date: '2023-06-10T09:25:00Z' },
            ];

            // Sort by score (descending) and time (descending)
            leaderboardData.sort((a, b) => {
                if (b.score !== a.score) {
                    return b.score - a.score;
                }

                // Convert time strings to seconds for comparison
                const aTime = timeToSeconds(a.time);
                const bTime = timeToSeconds(b.time);
                return bTime - aTime;
            });

            leaderboardContent.classList.remove('hidden');
            displayTopPlayers();
            displayLeaderboard();
        });
}

function displayTopPlayers() {
    if (leaderboardData.length < 1) return;

    topPlayersContainer.innerHTML = '';
    topPlayersContainer.classList.remove('hidden');

    // Display top 3 players
    const topPlayers = leaderboardData.slice(0, 3);

    const trophyEmojis = ['🥇', '🥈', '🥉'];
    const playerClasses = ['gold', 'silver', 'bronze'];

    topPlayers.forEach((player, index) => {
        const playerElement = document.createElement('div');
        playerElement.className = `top-player ${playerClasses[index]} fade-in`;

        // Format date
        const date = new Date(player.date);
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;

        playerElement.innerHTML = `
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <span class="trophy">${trophyEmojis[index]}</span>
                    <div>
                        <div class="font-bold">${player.username}</div>
                        <div class="text-sm text-gray-600">Điểm: ${player.score} | Thời gian: ${player.time}</div>
                    </div>
                </div>
                <div class="top-rank rank-${index + 1}">${index + 1}</div>
            </div>
        `;

        topPlayersContainer.appendChild(playerElement);
    });
}

function displayLeaderboard() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = leaderboardData.slice(startIndex, endIndex);

    leaderboardBody.innerHTML = '';

    if (currentPageData.length === 0) {
        leaderboardEmpty.classList.remove('hidden');
        leaderboardContent.classList.add('hidden');
        return;
    }

    currentPageData.forEach((entry, index) => {
        const rank = startIndex + index + 1;
        const row = document.createElement('tr');

        // Format date for display
        const date = new Date(entry.date);
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;

        let rankDisplay = rank;

        // Special styling for top 3
        if (rank <= 3) {
            const rankClasses = ['rank-1', 'rank-2', 'rank-3'];
            rankDisplay = `<div class="top-rank ${rankClasses[rank - 1]}">${rank}</div>`;
        } else {
            rankDisplay = `<div class="top-rank rank-4">${rank}</div>`;
        }

        row.innerHTML = `
            <td>${rankDisplay}</td>
            <td>${entry.username}</td>
            <td>${entry.score}</td>
            <td>${entry.time}</td>
            <td>${formattedDate}</td>
        `;

        row.dataset.username = entry.username;
        leaderboardBody.appendChild(row);
    });

    // Create pagination
    createPagination();
}

function highlightCurrentUser() {
    if (!currentUser) return;

    // Remove highlight from all rows
    const rows = leaderboardBody.querySelectorAll('tr');
    rows.forEach(row => {
        row.classList.remove('current-user');
    });

    // Add highlight to current user
    rows.forEach(row => {
        if (row.dataset.username === currentUser) {
            row.classList.add('current-user');
        }
    });
}

function createPagination() {
    pagination.innerHTML = '';

    const totalPages = Math.ceil(leaderboardData.length / itemsPerPage);

    if (totalPages <= 1) {
        return;
    }

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pagination-btn';
    prevBtn.textContent = '←';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayLeaderboard();
            highlightCurrentUser();
        }
    });
    pagination.appendChild(prevBtn);

    // Page buttons
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            displayLeaderboard();
            highlightCurrentUser();
        });
        pagination.appendChild(pageBtn);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pagination-btn';
    nextBtn.textContent = '→';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayLeaderboard();
            highlightCurrentUser();
        }
    });
    pagination.appendChild(nextBtn);
}

function restartQuiz() {
    resultsScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    usernameInput.value = currentUser;
    validateUsername();
}

function timeToSeconds(timeStr) {
    // Handle the format like "2'45s"
    if (timeStr.includes("'")) {
        const parts = timeStr.split("'");
        const minutes = parseInt(parts[0]);
        const seconds = parseInt(parts[1]);
        return minutes * 60 + seconds;
    }

    // Handle the format like "02:45"
    const parts = timeStr.split(':');
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}

function createConfetti() {
    const colors = ['#a8e6cf', '#dcedc1', '#7fd8be', '#57cc99', '#80ed99', '#c7f9cc', '#22577a'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';

            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 10 + 5;
            const left = Math.random() * window.innerWidth;

            confetti.style.backgroundColor = color;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.left = `${left}px`;
            confetti.style.top = '-10px';

            document.body.appendChild(confetti);

            const animationDuration = Math.random() * 3 + 2;
            const xMovement = (Math.random() - 0.5) * 20;

            confetti.animate([
                { transform: `translateY(0) translateX(0) rotate(0deg)`, opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) translateX(${xMovement}vw) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: animationDuration * 1000,
                easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
            });

            setTimeout(() => {
                document.body.removeChild(confetti);
            }, animationDuration * 1000);
        }, Math.random() * 1500);
    }
}
