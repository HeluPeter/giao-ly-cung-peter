// Quiz Data
let quizData = {
    part1: {
        title: "ABCD",
        rules: "1. Phần thi này có tất cả 10 câu hỏi. Mỗi câu hỏi sẽ có 4 phương án để lựa chọn (A,B,C,D) và chỉ có một đáp án đúng nhất. \n 2. Mỗi thí sinh sẽ có 10 giây suy nghĩ để tìm ra đáp án đúng nhất. Sau đó, các thí sinh giơ đáp án của mình (A,B,C,D). Thí sinh nào có đáp án đúng sẽ ghi được 10 điểm, sai không được điểm. Tổng điểm của phần thi này là 100 điểm. \n 3. Các thí sinh sẽ giơ bảng và giữ nguyên đáp án của mình cho đến khi có hiệu lệnh chuyển sang câu hỏi khác. Thí sinh nào giơ trước hoặc sau hiệu lệnh sẽ không được tính điểm. \n 4. Khi đã giơ đáp án rồi thì các thí sinh không được thay đổi đáp án. Nếu thay đổi, kết quả câu đó sẽ bị hủy.",
        questions: [
            {
                "question": "Chọn câu sai:",
                "options": {
                    "A": "Người lãnh Bí tích Thêm Sức phải sạch tội trọng.",
                    "B": "Người lãnh Bí tích Thêm Sức có bổn phận góp phần xây dựng hội thánh theo tinh thần Tin Mừng.",
                    "C": "Bí tích Thêm Sức ghi ấn tín không thể tẩy xóa.",
                    "D": "Người lãnh Bí tích Thêm Sức có bổn phận nỗ lực thi hành Lời Chúa trong đời sống thường ngày"
                },
                "correctAnswer": "B",
                "explanation": "hội thánh => xã hội"
            },
            {
                "question": "Chọn câu sai:",
                "options": {
                    "A": "Bí tích Rửa Tội ban cho chúng ta được tháp nhập vào Đức Kitô và Hội Thánh.",
                    "B": "Bí tích Rửa Tội tha các tội tổ tông và các tội riêng đã phạm.",
                    "C": "Người không lãnh Bí tích Rửa Tội có thể được cứu độ trong ba trường hợp.",
                    "D": "Bí tích Rửa Tội làm cho chúng ta được sinh lại trong đời sống mới bởi nước và Thánh Thần."
                },
                "explanation": "các tội tổ tông => tội tổ tông"
            },
            {
                "question": "Chọn câu sai:",
                "options": {
                    "A": "Bí tích Hôn Phối cho chúng ta tham dự trước vào đời sống vĩnh cửu, đang khi mong chờ ngày Đức Kitô ngự đến trong vinh quang.",
                    "B": "Bí tích Truyền Chức Thánh trao ban ân sủng của Đức Kitô, để Ngài chữa lành và biến đổi chúng ta",
                    "C": "Chính Đức Kitô hoạt động và thông ban ân sủng trong bí tích Thêm Sức.",
                    "D": "Khi lãnh nhận bí tích, chúng ta phải có đức tin, đồng thời nhờ các bí tích, đức tin của chúng ta thêm mạnh mẽ vững vàng."
                },
                "correctAnswer": "B",
                "explanation": "Đức Kitô => Chúa Thánh Thần"
            },
            {
                "question": "Chọn câu đúng:",
                "options": {
                    "A": "Các bí tích khai tâm Kitô giáo giúp tái sinh, củng cố và nuôi dưỡng các tín hữu trong đời sống.",
                    "B": "Các bí tích chữa lành gồm Bí tích Thống Hối và Xức Dầu Bệnh Nhân. Các bí tích này phục hồi và củng cố đời sống của các tín hữu đã bị suy yếu hoặc mất đi do tội lỗi.",
                    "C": "Một trong các bí tích khai tâm Kitô giáo làm cho chúng ta được sinh lại trong đời sống bởi nước và Thánh Thần.",
                    "D": "Các bí tích phục vụ đem lại ân sủng riêng cho mỗi sứ vụ đặc biệt trong Hội Thánh, để xây dựng Dân Thiên Chúa"
                },
                "correctAnswer": "D",
                "explanation": "các câu còn lại đều không phải “đời sống mới”"
            },
            {
                "question": "Chọn câu đúng:",
                "options": {
                    "A": "Mọi tín hữu buộc phải xưng các tội trọng của mình ít nhất một năm một lần và trong mọi trường hợp, phải xưng các tội trọng trước khi rước lễ.",
                    "B": "Bí tích Thống Hối tha thứ những hình phạt tạm đáng chịu vì những tội chúng ta đã phạm, dù những tội này đã được tha thứ.",
                    "C": "Chúa Giêsu đã lập Bí tích Thống Hối khi Ngài hiện ra với các Tông đồ vào chiều ngày Phục sinh",
                    "D": "A sai, B C đúng."
                },
                "correctAnswer": "C",
                "explanation": "B cũng sai =)))"
            },
            {
                "question": "Chọn câu sai:",
                "options": {
                    "A": "Bí tích Thống Hối là bí tích Chúa Giêsu đã lập, để tha các tội riêng chúng ta đã phạm từ khi lãnh Bí tích Rửa tội về sau.",
                    "B": "Bí tích Xức Dầu bệnh nhân là bí tích Chúa Giêsu đã lập, để ban ơn nâng đỡ bệnh nhân và người già yếu, về phần hồn cũng như phần xác.",
                    "C": "Bí tích Truyền Chức Thánh là bí tích Chúa Giêsu đã lập, để ủy thác tác vụ của Ngài cho các Tông đồ.",
                    "D": "Bí tích Thánh Thể là bí tích Chúa Giêsu đã lập, để tiếp tục lễ hy sinh trên Thánh giá và để ban Mình Máu Ngài, làm của ăn nuôi sống chúng ta."
                },
                "correctAnswer": "B",
                "explanation": "tác vụ => sứ vụ"
            },
            {
                "question": "Chọn câu sai",
                "options": {
                    "A": "Bí tích Thánh Thể là bí tích Chúa Giêsu đã lập, để tiếp tục lễ hy sinh trên Thánh giá và để ban Mình Máu Ngài, làm của ăn nuôi sống chúng ta.",
                    "B": "Người lãnh Bí tích Thêm Sức có những bổn phận này: Ba là phải cầu nguyện sốt sắng và thật lòng ước ao lãnh nhận Chúa Thánh Thần.",
                    "C": "Hiệu quả của Bí tích Thêm Sức giúp gia tăng ân sủng Bí tích Rửa Tội.",
                    "D": "Các bí tích là do Chúa Giê-su lập."
                },
                "correctAnswer": "B",
                "explanation": "[Câu 29, 30]"
            },
            {
                "question": "Chọn câu sai",
                "options": {
                    "A": "Phụng vụ là nguồn mạch và tột đỉnh của toàn bộ đời sống Kitô giáo",
                    "B": "Kho tàng thiêng liêng của Hội Thánh là chính Đức Kitô, Chiên Vượt Qua của chúng ta.",
                    "C": "Để được rước lễ, thì phải có điều kiện là hoàn toàn thuộc về Hội Thánh Công Giáo",
                    "D": "Hội Thánh buộc các tín hữu rước lễ một năm ít là một lần trong mùa Phục Sinh."
                },
                "correctAnswer": "A",
                "explanation": "[Câu 2]"
            },
            {
                "question": "Chọn câu đúng",
                "options": {
                    "A": "Hội Thánh buộc các tín hữu rước lễ mỗi khi tham dự Thánh lễ",
                    "B": "Điều kiện để rước lễ là ý thức mình không có tội trọng;",
                    "C": "A và B đúng",
                    "D": "Tất cả đều sai"
                },
                "correctAnswer": "B",
                "explanation": "[Câu 36]"
            },
            {
                "question": "Chọn câu đúng",
                "options": {
                    "A": "Người không lãnh Bí tích Rửa Tội không được cứu độ",
                    "B": "Bí tích Xức dầu Thánh cho chúng ta tham dự trước vào đời sống vĩnh cửu.",
                    "C": "A sai, B đúng",
                    "D": "Tất cả đều sai"
                },
                "correctAnswer": "D",
                "explanation": "[Câu 20, 24]"
            },
            {
                "question": "Chọn câu đúng",
                "options": {
                    "A": "Nhờ ân sủng của Chúa Thánh Thần, chúng ta được chữa lành và biến đổi",
                    "B": "Các bí tích khai tâm Ki-tô giáo, giúp củng cố và phục hồi các tín hữu trong đời sống mới",
                    "C": "Ngày Chúa Nhật là nền tảng và trung tâm của các bí tích",
                    "D": "Tất cả đều sai"
                },
                "correctAnswer": "A",
                "explanation": "[Câu 19]"
            },
            {
                "question": "Chọn câu đúng",
                "options": {
                    "A": "Bí tích Rửa Tôi cần thiết cho ơn cứu độ",
                    "B": "Xức dầu thánh trên trán là một trong những nghi thức của Bí tích Thêm Sức.",
                    "C": "Bí tích Rửa Tội là do Chúa Giê-su lập. Đây là 1 khẳng định sai.",
                    "D": "Tất cả đều sai"
                },
                "correctAnswer": "B",
                "explanation": "[Câu 27]"
            },
            {
                "question": "Chọn câu đúng",
                "options": {
                    "A": "Bí tích Thống Hối giúp tái sinh, củng cố và nuôi dưỡng các tín hữu trong đời sống mới.",
                    "B": "Theo tài liệu, câu số 11, bí tích thứ năm là bí tích Truyền Chức Thánh.",
                    "C": "Bí tích Xức Dầu Bệnh Nhân giúp phục hồi và củng cố các tín hữu đã bị suy yếu hoặc mất đi do tội lỗi.",
                    "D": "Tất cả đều sai"
                },
                "correctAnswer": "D",
                "explanation": "[Câu 14, 11]"
            },
            {
                "question": "Chọn câu đúng",
                "options": {
                    "A": "Người không lãnh nhận Bí tích Rửa Tội không được cứu độ",
                    "B": "Có bốn trước hợp mà người không lãnh Bí tích Rửa Tội có thể được cứu độ",
                    "C": "A và B Đúng",
                    "D": "Tất cả đều sai"
                },
                "correctAnswer": "D",
                "explanation": "[Câu 24]"
            },
            {
                "question": "Bí tích Rửa Tội ban cho ta ơn:",
                "options": {
                    "A": "tháp nhập vào Đức Kitô và Hội Thánh",
                    "B": "làm con cái Thiên Chúa",
                    "C": "tha tội tổ tông và các tội riêng đã phạm",
                    "D": "Tất cả đều đúng"
                },
                "correctAnswer": "D",
                "explanation": "[Câu 25]"
            },
            {
                "question": "Nghi thức chính yếu của Bí tích Thêm Sức là gì?",
                "options": {
                    "A": "xức dầu thánh",
                    "B": "đặt tay",
                    "C": "đổ nước trên đầu",
                    "D": "A B đúng C sai"
                },
                "correctAnswer": "D",
                "explanation": "[Câu 27]"
            },
            {
                "question": "Chọn câu đúng:",
                "options": {
                    "A": "Các dấu chỉ và biểu tượng giúp con người gặp gỡ và đối thoại với Thiên Chúa",
                    "B": "Đức Kitô tiếp tục công trình cứu độ của Ngài trong Hội Thánh qua các bí tích được gọi là nhiệm cục bí tích.",
                    "C": "lời cầu nguyện của Hội Thánh còn được gọi là Phụng vụ Các Giờ Kinh",
                    "D": "Tất cả đều đúng"
                },
                "correctAnswer": "B",
                "explanation": "[Câu 6]"
            },
            {
                "question": "Chọn câu đúng:",
                "options": {
                    "A": "Bí tích là dấu chỉ bên ngoài Chúa Giêsu đã lập và truyền lại cho Hội Thánh cử hành",
                    "B": "Vì ấn tín không thể xóa được, nên các bí tích chỉ được lãnh một lần mà thôi.",
                    "C": "7 bí tích được chia ra ba loại; cử hành phụng vụ gồm dấu chỉ, hình ảnh, lời nói và hành động.",
                    "D": "A và C đúng"
                },
                "correctAnswer": "A",
                "explanation": "[Bài 3: Các bí tích]"
            },
            {
                "question": "Chọn câu đúng:",
                "options": {
                    "A": "Đáp án B và C đều sai",
                    "B": "Ấn tín bí tích được xem như là lời hứa Đức Ki-tô sẽ trở lại trong vinh quang",
                    "C": "Điều kiện để lãnh Bí tích Thêm Sức là phải có lòng ước ao",
                    "D": "Đáp án B đúng, C sai"
                },
                "correctAnswer": "A",
                "explanation": "[Câu 29]"
            },
            {
                "question": "Chọn câu đúng:",
                "options": {
                    "A": "Trong bảy bí tích, có 4 bí tích có thể tha tội.",
                    "B": "Trong bảy bí tích, có 3 bí tích có thể tha tội.",
                    "C": "Trong bảy bí tích, có 2 bí tích có thể tha tội.",
                    "D": "Tất cả đều sai"
                },
                "correctAnswer": "A",
                "explanation": "[Câu ?]"
            },
            {
                "question": "Chọn câu đúng:",
                "options": {
                    "A": "Lãnh nhận bí tích Thêm Sức giúp ta sạch tội trọng.",
                    "B": "Chúa Giêsu đã lập Bí tích Thống Hối trong bữa tiệc ly",
                    "C": "Lãnh nhận bí tích Rửa Tội giúp ta sạch tội trọng.",
                    "D": "Tất cả đều đúng"
                },
                "correctAnswer": "C",
                "explanation": "[Câu ?]"
            },
            {
                "question": "Chọn câu đúng:",
                "options": {
                    "A": "Ấn tín bí tích là sự chuyển thông ơn cứu độ của Chúa",
                    "B": "Chúa Thánh Thần luôn hoạt động trong các bí tích",
                    "C": "Bí tích Thánh Thể chứa đựng toàn bộ kho tàng thiêng liêng của Chúa Ki-tô",
                    "D": "A, C sai, B đúng"
                },
                "correctAnswer": "B",
                "explanation": "[Câu ?]"
            },
            {
                "question": "Chọn câu sai:",
                "options": {
                    "A": "Người lãnh Bí tích Truyền Chức Thánh thi hành tác vụ với thẩm quyền do Đức Kitô trao ban, không do cộng đoàn ủy thác.",
                    "B": "Bí tích Xức Dầu tha thứ các tội lỗi đã phạm chưa xưng được.",
                    "C": "Bí tích Hôn Phối tạo nên mối dây liên kết vĩnh viễn và độc chiếm giữa hai người phối ngẫu. Vì thế hôn nhân thành sự và hoàn hợp giữa những người đã được xưng tội không bao giờ có thể tháo gỡ được",
                    "D": "Bí tích Thống Hối có hiệu quả là tha một phần các hình phạt tạm"
                },
                "correctAnswer": "C",
                "explanation": "xưng tội => rửa tội"
            },
            {
                "question": "Chọn câu sai:",
                "options": {
                    "A": "Bí tích Thống Hối tha tội để giao hòa chúng ta với Thiên Chúa",
                    "B": "Muốn lãnh Bí tích Thống Hối chúng ta phải làm bốn việc",
                    "C": "Chúa Giêsu đã lập Bí tích khi Ngài hiện ra với các Tông đồ vào chiều ngày Phục sinh và nói rằng: “Anh em hãy nhận lấy Thánh Thần; anh em tha tội cho ai, thì tội người ấy được tha; anh em cầm giữ ai, thì tội người ấy bị cầm giữ”",
                    "D": "Yếu tố chính yếu thứ 2 của bí tích Thống Hối là lời xá giải của linh mục"
                },
                "correctAnswer": "C",
                "explanation": "cụ thể là Bí tích Thống Hối"
            },
            {
                "question": "Chọn câu sai:",
                "options": {
                    "A": "Bí tích Thánh Thể là nguồn mạch và tột đỉnh của toàn bộ đời sống Kitô giáo.",
                    "B": "Hội Thánh khuyên các tín hữu rước lễ mỗi khi tham dự Thánh thể, và buộc rước lễ một năm ít là một lần trong mùa Phục Sinh.",
                    "C": "Một trong những điều kiện để được rước lễ là ý thức mình không có tội trọng",
                    "D": "Việc rước lễ giúp chúng ta tẩy xóa các tội nhẹ."
                },
                "correctAnswer": "B",
                "explanation": "Thánh thể => Thánh lễ"
            },
            {
                "question": "Chọn câu đúng",
                "options": {
                    "A": "Năm Phụng vụ là nền tảng và trung tâm của Phụng vụ",
                    "B": "Bí tích Thêm Sức giúp chúng ta sống ơn Bí tích Giải Tội",
                    "C": "Ơn thứ tư của Bí tích Rửa Tội có liên quan đến linh hồn.",
                    "D": "Tất cả đều sai"
                },
                "correctAnswer": "C",
                "explanation": "[Câu 25]"
            },
            {
                "question": "Chọn câu đúng",
                "options": {
                    "A": "Bí tích Thêm Sức là do Hội Thánh Lập",
                    "B": "Điều kiện thức ba để lãnh bí tích Thêm Sức là phải học giáo lý.",
                    "C": "Bí tích rửa Tội, Thêm Sức chỉ được lãnh một lần.",
                    "D": "Tất cả đều sai"
                },
                "correctAnswer": "C",
                "explanation": "[Câu 16]"
            },
            {
                "question": "Có mấy điều kiện để lãnh bí tích thêm sức, các bí tích được phân thành mấy loại?",
                "options": {
                    "A": "3,3",
                    "B": "3,4",
                    "C": "3,2",
                    "D": "Tất cả điều sai"
                },
                "correctAnswer": "A",
                "explanation": "[Câu 29, 12]"
            },
            {
                "question": "Phụng vụ các giờ kinh là ___.",
                "options": {
                    "A": "thời gian Hội Thánh cử hành các mầu nhiệm Đức Kitô",
                    "B": "lời cầu nguyện của Đức Kitô cùng với Hội Thánh",
                    "C": "thời gian Hội Thánh cử hành phụng vụ Đức Kitô",
                    "D": "giờ phụng vụ của Đức Kitô cùng với Hội Thánh"
                },
                "correctAnswer": "B",
                "explanation": "[Câu 9]"
            },
            {
                "question": "Phụng vụ các giờ kinh có mục đích là để ___.",
                "options": {
                    "A": "giúp chúng ta sống những mầu nhiệm Đức Ki-tô",
                    "B": "giúp các tín hữu thánh hóa thời gian trong ngày",
                    "C": "giúp các tín hữu thánh hóa thời gian trong ngày phụng vụ",
                    "D": "giúp chúng ta sống các các Bí tích của Đức Ki-tô"
                },
                "correctAnswer": "B",
                "explanation": "[Câu 9]"
            },
            {
                "question": "Chọn câu đúng",
                "options": {
                    "A": "Bí tích là dấu chỉ bên ngoài Chúa Giêsu đã lập",
                    "B": "Bí tích là dấu chỉ bên ngoài Chúa Giêsu truyền lại cho Hội Thánh cử hành",
                    "C": "A đúng B sai.",
                    "D": "A và B đều đúng"
                },
                "correctAnswer": "D",
                "explanation": "[Câu 10]"
            },
            {
                "question": "Chọn câu sai",
                "options": {
                    "A": "Qua phụng vụ, Đức Kitô tiếp tục công trình cứu độ của Ngài",
                    "B": "Qua phụng vụ, con người thờ phượng và thánh hóa Thiên Chúa",
                    "C": "A đúng B sai",
                    "D": "Tất cả đều đúng"
                },
                "correctAnswer": "B",
                "explanation": "[Câu 2]"
            },
            {
                "question": "Chọn câu đúng",
                "options": {
                    "A": "Trong cử hành phụng vụ, có một yếu tố giúp thực hiện hành động cứu độ của Đức Kitô;",
                    "B": "Cử hành phụng vụ có 3 yếu tố",
                    "C": "Cử hành phụng vụ có 4 yếu tố",
                    "D": "Trong cử hành phụng vụ, có một yếu tố là “Đức Kitô toàn thể”"
                },
                "correctAnswer": "A",
                "explanation": "[Câu 6]"
            },
            {
                "question": "Chọn câu sai",
                "options": {
                    "A": "Có bảy bí tích, Các bí tích của Hội Thánh được phân thành ba loại.",
                    "B": "Tiêu đề bài 3: Các bí tích; Các bí tích của Hội Thánh được phân thành 3 loại.",
                    "C": "Có bảy bí tích, Tiêu đề bài 3: Các bí tích và phụng vụ",
                    "D": "Tiêu đề bài 3: Các bí tích"
                },
                "correctAnswer": "C",
                "explanation": "Tiêu đề bài 3: Các bí tích - [Câu 11, 12]"
            },
            {
                "question": "Chọn câu sai",
                "options": {
                    "A": "Bí tích Thống Hối và Xức Dầu Bệnh Nhân giúp phục hồi và củng cố đời sống mới của các tín hữu đã bị suy yếu hoặc mất đi do tội lỗi.",
                    "B": "Các bí tích phục vụ gồm Bí tích Truyền Chức Thánh và Hôn Phối.",
                    "C": "Các bí tích chữa lành gồm Bí tích Thống Hối và Xức Dầu Thánh",
                    "D": "Các bí tích của Hội Thánh được phân thành ba loại"
                },
                "correctAnswer": "C",
                "explanation": "[Câu 14]"
            },
            {
                "question": "Chọn câu đúng",
                "options": {
                    "A": "Ấn tín bí tích là dấu ấn thiêng liêng, Thiên Chúa in vào lòng tất cả mọi người",
                    "B": "Nhờ phụng vụ, đức tin của chúng ta thêm mạnh mẽ vững vàng.",
                    "C": "Các bí tích phục vụ gồm Bí tích Truyền Chức Thánh và Hôn Phối",
                    "D": "Tất cả đều sai"
                },
                "correctAnswer": "C",
                "explanation": "[Câu 15]"
            },
            {
                "question": "Ai ban ân sủng trong các bí tích?",
                "options": {
                    "A": "Đức Kitô",
                    "B": "Chúa Giê-su",
                    "C": "Đức Giê-su Ki-tô",
                    "D": "Tất cả đều đúng"
                },
                "correctAnswer": "D",
                "explanation": "[Câu 18]"
            },
            {
                "question": "Bí tích Rửa Tội ___.",
                "options": {
                    "A": "là Bí tích Chúa Giê-su đã lập",
                    "B": "để làm cho chúng ta được sinh lại trong đời sống bởi nước và Thánh Thần.",
                    "C": "là bí tích Chúa Giêsu đã lập, để làm cho chúng ta được sinh lại trong đời sống bởi nước và Thánh Thần.",
                    "D": "Tất cả đều sai"
                },
                "correctAnswer": "A",
                "explanation": "[Câu 21]"
            },
            {
                question: "Bí tích Thêm Sức",
                options: {
                A: "Tha các tội trọng",
                B: "Có nghi thức chính yếu là dìm xuống nước",
                C: "Giúp chúng ta tham dự trước vào đời sống vĩnh cửu",
                D: "Tất cả đều đúng"
                },
                correctAnswer: "C",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Chọn câu sai",
                options: {
                A: "Muốn lãnh Bí tích Thống Hối phải làm 4 việc",
                B: "Bí tích Thống Hối có 3 hiệu quả",
                C: "Bí tích Rửa Tội ban cho chúng ta 3 ơn",
                D: "Có 4 điều kiện để được rước lễ"
                },
                correctAnswer: "C",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Chọn câu đúng",
                options: {
                A: "Theo tài liệu câu 11, Bí tích 4-5-6 lần lượt là Thống Hối - Truyền Chức Thánh - Xức Dầu Bệnh Nhân",
                B: "Hiệu quả thứ 4 của Bí tích Xức Dầu là chữa lành thân xác nếu phù hợp với ý Chúa",
                C: "Bí tích Thánh Thể là nguồn mạch và trung tâm của toàn bộ năm phụng vụ",
                D: "Để rước lễ thì phải có thái độ tôn kính"
                },
                correctAnswer: "B",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Chọn câu sai",
                options: {
                A: "Hội Thánh trên trời và Hội Thánh ở trần gian hành động trong phụng vụ",
                B: "Qua việc Hội Thánh cử hành Bí tích Hôn Phối, Thiên Chúa chuyển thông ơn cứu độ",
                C: "Không phải lúc nào ân sủng của Chúa Kitô trong các Bí tích cũng mang lại lợi ích",
                D: "Tất cả đều sai"
                },
                correctAnswer: "D",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Người muốn lãnh Bí tích Thêm Sức cần phải làm gì?",
                options: {
                A: "Góp phần xây dựng xã hội theo tinh thần Tin Mừng",
                B: "Nỗ lực thi hành Lời Chúa trong đời sống thường ngày",
                C: "Tích cực giới thiệu Chúa cho mọi người",
                D: "Tất cả đều sai"
                },
                correctAnswer: "D",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Chọn câu sai",
                options: {
                A: "Phụng vụ Lời Chúa khởi đi từ lời nguyện hiệp lễ cho đến hết lời nguyện chung",
                B: "Bí tích Thống Hối là để tha các tội riêng",
                C: "Bí tích Truyền Chức Thánh gồm 3 cấp bậc",
                D: "Bí tích Hôn Phối ban ân sủng cần thiết"
                },
                correctAnswer: "A",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Chọn câu đúng",
                options: {
                A: "Khi tự nguyện nộp mình chịu khổ hình, Chúa Giêsu cầm lấy bánh, bẻ ra và trao cho các môn đệ",
                B: "Có 3 Bí tích trao ban ấn tín thiêng liêng không tẩy xóa được",
                C: "Bí tích Truyền Chức Thánh có thể được lãnh 3 lần: 1 lần chức Phó tế, 1 lần Linh mục và 1 lần Giám mục",
                D: "Bí tích Xức Dầu chuẩn bị cho cuộc vượt qua của Đức Kitô"
                },
                correctAnswer: "B",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Ấn tín Bí tích",
                options: {
                A: "Giúp đức tin của chúng ta thêm mạnh mẽ vững vàng",
                B: "Để lãnh nhận thì phải sạch tội trọng",
                C: "Giao hòa chúng ta với Thiên Chúa và Hội Thánh",
                D: "Nằm trong nhóm các Bí tích khai tâm Kitô giáo"
                },
                correctAnswer: "A",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Bí tích Thêm Sức",
                options: [
                    "A. Tha các tội trọng",
                    "B. Có nghi thức chính yếu là dìm xuống nước",
                    "C. Giúp chúng ta tham dự trước vào đời sống vĩnh cửu",
                    "D. Tất cả đều đúng"
                ],
                correctAnswer: "C. Giúp chúng ta tham dự trước vào đời sống vĩnh cửu",
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
                    "A. Muốn lãnh Bí tích Thống Hối phải làm 4 việc",
                    "B. Bí tích Thống Hối có 3 hiệu quả",
                    "C. Bí tích Rửa Tội ban cho chúng ta 3 ơn",
                    "D. Có 4 điều kiện để được rước lễ"
                ],
                correctAnswer: "C. Bí tích Rửa Tội ban cho chúng ta 3 ơn",
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
                    "A. Theo tài liệu câu 11, Bí tích 4-5-6 lần lượt là Thống Hối - Truyền Chức Thánh - Xức Dầu Bệnh Nhân",
                    "B. Hiệu quả thứ 4 của Bí tích Xức Dầu là chữa lành thân xác nếu phù hợp với ý Chúa",
                    "C. Bí tích Thánh Thể là nguồn mạch và trung tâm của toàn bộ năm phụng vụ",
                    "D. Để rước lễ thì phải có thái độ tôn kính"
                ],
                correctAnswer: "B. Hiệu quả thứ 4 của Bí tích Xức Dầu là chữa lành thân xác nếu phù hợp với ý Chúa",
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
                    "A. Hội Thánh trên trời và Hội Thánh ở trần gian hành động trong phụng vụ",
                    "B. Qua việc Hội Thánh cử hành Bí tích Hôn Phối, Thiên Chúa chuyển thông ơn cứu độ",
                    "C. Không phải lúc nào ân sủng của Chúa Kitô trong các Bí tích cũng mang lại lợi ích",
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
                question: "Người muốn lãnh Bí tích Thêm Sức cần phải làm gì?",
                options: [
                    "A. Góp phần xây dựng xã hội theo tinh thần Tin Mừng",
                    "B. Nỗ lực thi hành Lời Chúa trong đời sống thường ngày",
                    "C. Tích cực giới thiệu Chúa cho mọi người",
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
                question: "Chọn câu sai",
                options: [
                    "A. Phụng vụ Lời Chúa khởi đi từ lời nguyện hiệp lễ cho đến hết lời nguyện chung",
                    "B. Bí tích Thống Hối là để tha các tội riêng",
                    "C. Bí tích Truyền Chức Thánh gồm 3 cấp bậc",
                    "D. Bí tích Hôn Phối ban ân sủng cần thiết"
                ],
                correctAnswer: "A. Phụng vụ Lời Chúa khởi đi từ lời nguyện hiệp lễ cho đến hết lời nguyện chung",
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
                    "A. Khi tự nguyện nộp mình chịu khổ hình, Chúa Giêsu cầm lấy bánh, bẻ ra và trao cho các môn đệ",
                    "B. Có 3 Bí tích trao ban ấn tín thiêng liêng không tẩy xóa được",
                    "C. Bí tích Truyền Chức Thánh có thể được lãnh 3 lần: 1 lần chức Phó tế, 1 lần Linh mục và 1 lần Giám mục",
                    "D. Bí tích Xức Dầu chuẩn bị cho cuộc vượt qua của Đức Kitô"
                ],
                correctAnswer: "B. Có 3 Bí tích trao ban ấn tín thiêng liêng không tẩy xóa được",
                explanation: "[đang cập nhật]",
                attempts: 0,
                completed: false,
                failed: false,
                userAnswer: "",
                timeTaken: 0
            },
            {
                question: "Ấn tín Bí tích",
                options: [
                    "A. Giúp đức tin của chúng ta thêm mạnh mẽ vững vàng",
                    "B. Để lãnh nhận thì phải sạch tội trọng",
                    "C. Giao hòa chúng ta với Thiên Chúa và Hội Thánh",
                    "D. Nằm trong nhóm các Bí tích khai tâm Kitô giáo"
                ],
                correctAnswer: "A. Giúp đức tin của chúng ta thêm mạnh mẽ vững vàng",
                explanation: "[đang cập nhật]",
                attempts: 0,
                completed: false,
                failed: false,
                userAnswer: "",
                timeTaken: 0
            },
            {
                question: "Có mấy mục đích của hôn nhân công giáo, mấy hiệu quả của Bí tích Truyền Chức Thánh, muốn lãnh Bí tích Thống Hối phải làm mấy việc?",
                options: {
                A: "2, 3, 3",
                B: "2, 3, 2",
                C: "2, 3, 4",
                D: "3, 3, 4"
                },
                correctAnswer: "C",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Chọn câu sai",
                options: {
                A: "Chúng ta sống các mầu nhiệm Đức Kitô để chuẩn bị đón Ngài lại đến trong vinh quang",
                B: "Chúa Giêsu đã lập Bí tích Thống Hối khi Ngài hiện ra với các Tông đồ vào chiều ngày Phục sinh",
                C: "Phải xưng các tội trọng trước khi rước lễ",
                D: "Máu Thánh Chúa Kitô là Giao Ước"
                },
                correctAnswer: "D",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Chọn câu đúng",
                options: {
                A: "Bí tích Hôn Phối được cử hành cách công khai",
                B: "Có 3 Bí tích được Chúa Giêsu lập trong bữa tiệc ly",
                C: "Bí tích Thánh Thể ghi vào linh hồn dấu ấn thiêng liêng không thể tẩy xóa",
                D: "Thiên Chúa in dấu ấn vào lòng những người lãnh các Bí tích khai tâm"
                },
                correctAnswer: "A",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Chọn câu đúng",
                options: {
                A: "Bí tích là dấu chỉ Chúa Giêsu đã lập và truyền lại cho Hội Thánh cử hành",
                B: "Lời nói và hành động trong cử hành phụng vụ giúp con người gặp gỡ và đối thoại với Thiên Chúa",
                C: "Có một Bí tích không phải do Chúa Giêsu lập",
                D: "Hội Thánh buộc các tín hữu rước lễ mỗi khi tham dự Thánh lễ"
                },
                correctAnswer: "B",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Chọn câu sai",
                options: {
                A: "Khi lãnh nhận các bí tích, phải có đức tin",
                B: "Mọi tín hữu đều có thể lãnh Bí tích Xức Dầu",
                C: "Chức tư tế thừa tác khác biệt với chức tư tế cộng đồng",
                D: "Các Bí tích phụng vụ giúp xây dựng dân Thiên Chúa"
                },
                correctAnswer: "D",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Chọn câu đúng",
                options: {
                A: "Bí tích Thêm Sức phục hồi đời sống mới của các tín hữu",
                B: "Nghi thức chính yếu của Bí tích Rửa Tội là dìm xuống nước hay đổ nước trên đầu người lãnh bí tích và nói: “Nhân danh Cha và Con và Thánh Thần”",
                C: "Đức Kitô chính là Chiên Vượt Qua của chúng ta",
                D: "Chỉ Bí tích Thêm Sức mới ban tràn đầy Chúa Thánh Thần"
                },
                correctAnswer: "C",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Bí tích Hôn Phối",
                options: {
                A: "Có mục đích thứ nhất là sinh sản và dưỡng dục con cái",
                B: "Có liên quan đến Bí tích khác",
                C: "Ban ân sủng cần thiết nhưng không phải ân sủng Chúa Thánh Thần",
                D: "Muốn lãnh nhận thì phải đáp ứng 3 điều kiện"
                },
                correctAnswer: "B",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Chọn câu sai",
                options: {
                A: "Các tín hữu nên rước lễ ít nhất một năm một lần trong mùa Phục Sinh",
                B: "Người lãnh Bí tích Truyền Chức Thánh sẽ nên đồng hình đồng dạng với Đức Kitô",
                C: "Người lãnh Bí tích Thêm Sức có bổn phận thứ 2 là góp phần xây dựng xã hội theo tinh thần Tin Mừng",
                D: "“Đức Kitô toàn thể” hành động trong phụng vụ"
                },
                correctAnswer: "A",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Chọn câu đúng",
                options: {
                A: "Bí tích Thêm Sức gia tăng ân sủng các Bí tích khác",
                B: "Ngày Chúa phục sinh là nguồn mạch của cả năm phụng vụ",
                C: "Qua Bí tích Rửa Tội, Thiên Chúa in một lời hứa với người lãnh nhận",
                D: "Phụng vụ có 1 mục đích"
                },
                correctAnswer: "C",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Chọn câu sai",
                options: {
                A: "Mình máu Chúa Giêsu là của ăn nuôi sống chúng ta",
                B: "Bí tích Xức Dầu đem lại ơn nâng đỡ về phần hồn cũng như phần xác",
                C: "Người tín hữu có thể xây dựng Hội Thánh",
                D: "Tất cả đều sai"
                },
                correctAnswer: "D",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Chọn câu đúng",
                options: {
                A: "Nếu phạm tội mà chưa xưng được thì không còn cách nào khác để được tha tội",
                B: "Bí tích Truyền Chức Thánh cần thiết cho ơn cứu độ",
                C: "Phụng vụ các giờ kinh giúp các tín hữu thánh hóa bản thân",
                D: "Tất cả đều sai"
                },
                correctAnswer: "B",
                explanation: "[đang cập nhật]"
            },
            {
                question: "Chọn câu đúng",
                options: {
                A: "Thánh lễ thánh hóa con người",
                B: "Nghi thức là một trong những yếu tố của cử hành phụng vụ",
                C: "Trong bữa ăn tối, Người cầm lấy chén rượu, cũng tạ ơn, trao cho các môn đệ",
                D: "Tất cả đều đúng"
                },
                correctAnswer: "A",
                explanation: "[đang cập nhật]"
            }
        ]
    },
    part2: {
        title: "Đúng - Sai",
        rules: "1. Phần thi này có tất cả 10 câu hỏi. Mỗi câu hỏi sẽ có 4 phương án để lựa chọn (A,B,C,D) và chỉ có một đáp án đúng nhất. \n 2. Mỗi thí sinh sẽ có 10 giây suy nghĩ để tìm ra đáp án đúng nhất. Sau đó, các thí sinh giơ đáp án của mình (A,B,C,D). Thí sinh nào có đáp án đúng sẽ ghi được 10 điểm, sai không được điểm. Tổng điểm của phần thi này là 100 điểm. \n 3. Các thí sinh sẽ giơ bảng và giữ nguyên đáp án của mình cho đến khi có hiệu lệnh chuyển sang câu hỏi khác. Thí sinh nào giơ trước hoặc sau hiệu lệnh sẽ không được tính điểm. \n 4. Khi đã giơ đáp án rồi thì các thí sinh không được thay đổi đáp án. Nếu thay đổi, kết quả câu đó sẽ bị hủy.",
        questions: [
            {
                "question": "Năm Phụng vụ là thời gian Hội Thánh cử hành các bí tích. Đ hay S?",
                "correctAnswer": "Sai",
                "explanation": "các mầu nhiệm Đức Kitô [Câu 8]"
            },
            {
                "question": "Bí tích Thánh Thể chứa đựng tất cả kho tàng thiêng liêng của Hội Thánh là chính Đức Kitô. Đ hay S?",
                "correctAnswer": "Đúng",
                "explanation": "[Câu 33]"
            },
            {
                "question": "Phụng vụ Lời Chúa, khởi đi từ lời nguyện nhập lễ cho đến hết lời hiệp lễ. Đ hay S?",
                "correctAnswer": "Sai",
                "explanation": "lời nguyện chung [Câu 34]"
            },
            {
                "question": "Việc tham dự thánh lễ giúp ta được kết hợp mật thiết với Đức Kitô và Hội Thánh, được tẩy xóa các tội nhẹ. Đ hay S?",
                "correctAnswer": "Sai",
                "explanation": "Việc rước lễ [Câu 37]"
            },
            {
                "question": "Điều kiện thứ bốn để được rước lễ là phải có thái độ tôn kính Đức Kitô. Đ hay S?",
                "correctAnswer": "Đúng",
                "explanation": "[Câu 36]"
            },
            {
                "question": "Bổn phận thứ hai của người lãnh Bí tích Thêm Sức là góp phần xây dựng Hội Thánh theo tinh thần Tin Mừng. Đ hay S?",
                "correctAnswer": "Sai",
                "explanation": "xây dựng xã hội [Câu 30]"
            },
            {
                "question": "Muốn lãnh bí tích thêm sức thì phải sạch mọi tội. Đ hay S?",
                "correctAnswer": "Sai",
                "explanation": "Sạch tội trọng [Câu 29]"
            },
            {
                "question": "Đối với mọi người, bí tích Rửa Tội cần thiết cho ơn cứu độ. Đ hay S?",
                "correctAnswer": "Sai",
                "explanation": "[Câu 23]"
            },
            {
                "question": "Bí tích Hôn Phối có thể giúp cho chúng ta tham dự trước vào đời sống vĩnh cửu. Đ hay S?",
                "correctAnswer": "Đúng",
                "explanation": "[Câu 20]"
            },
            {
                "question": "Bí tích Xức Dầu Bệnh Nhân trao ban ân sủng của Chúa Thánh Thần. Đ hay S?",
                "correctAnswer": "Đúng",
                "explanation": "[Câu 19]"
            },
            {
                "question": "Bí tích là dấu chỉ bên ngoài Chúa Giêsu đã lập và truyền lại cho Hội Thánh cử hành, để thờ phượng Thiên Chúa và thánh hóa con người. Đ hay S?",
                "correctAnswer": "Sai",
                "explanation": "để diễn tả và thông ban cho chúng ta ân sủng bên trong là sự sống thần linh. [Câu 10]"
            },
            {
                "question": "Có hai bí tích phụng vụ. Đ hay S?",
                "correctAnswer": "Sai",
                "explanation": "phục vụ [Câu 15]"
            },
            {
                "question": "Có ba bí tích khai tâm Ki-tô giáo và hai bí tích chữa lành. Đ hay S?",
                "correctAnswer": "Đúng",
                "explanation": "[Câu 13, 14]"
            },
            {
                "question": "Thân thể của Đức Kitô là Hội Thánh ở trần gian và Hội Thánh ở trên trời. Đ hay S?",
                "correctAnswer": "Đúng",
                "explanation": "[Câu 5]"
            },
            {
                "question": "Ngày Chúa Nhật là đỉnh cao và trung tâm của cả năm phụng vụ. Đ hay S?",
                "correctAnswer": "Sai",
                "explanation": "nền tảng và trung tâm [Câu 7]"
            },
            {
                "question": "Yếu tố thứ 2 của cử hành phụng vụ là để con người gặp gỡ và đối thoại với Thiên Chúa. Đ hay S?",
                "correctAnswer": "Đúng",
                "explanation": "[Câu 6]"
            },
            {
                "question": "Bí tích thứ bốn là Bí tích Thống Hối, Bí tích thứ năm là Bí tích Xức Dầu bệnh nhân, loại thứ ba của các Bí tích của Hội Thánh là các bí tích phục vụ. Đ hay S?",
                "correctAnswer": "Đúng",
                "explanation": "[Câu 11, 12]"
            },
            {
                "question": "Các bí tích cần thiết cho ơn cứu độ vì các bí tích củng cố và nuôi dưỡng các tín hữu trong đời sống mới.",
                "correctAnswer": "Sai",
                "explanation": "Vì các bí tích trao ban ân sủng của Chúa Thánh Thần [Câu 19]"
            },
            {
                "question": "Bí tích là dấu chỉ bên ngoài Chúa Giêsu đã lập và truyền lại cho Hội Thánh cử hành, để diễn tả cho chúng ta ân sủng bên trong là sự sống thần linh.",
                "correctAnswer": "Sai",
                "explanation": "để diễn tả và thông ban cho chúng ta [Câu 10]"
            },
            {
                "question": "Bí tích Rửa Tội ban cho chúng ta được tháp nhập vào Đức Kitô và Hội Thánh.",
                "correctAnswer": "Đúng",
                "explanation": "[Câu 25]"
            },
            {
                "question": "Ấn tín bí tích là dấu ấn thiêng liêng, Thiên Chúa in vào lòng những người lãnh Bí tích Giải Tội, Thêm Sức, Truyền Chức Thánh.",
                "correctAnswer": "Sai",
                "explanation": "bí tích Rửa Tội [Câu 16]"
            },
            {
                "question": "Khi lãnh nhận bí tích, chúng ta phải có đức tin, đồng thời nhờ các bí tích, đời sống của chúng ta thêm mạnh mẽ vững vàng.",
                "correctAnswer": "Sai",
                "explanation": "đức tin của chúng ta [Câu 17]"
            },
            {
                "question": "Người lãnh Bí tích Thêm sức được 4 ơn và 3 bổn phận.",
                "correctAnswer": "Sai",
                "explanation": "Trong tài liệu không có nói đến mấy ơn [Bài 5]"
            },
            {
                "question": "Người lãnh Bí tích Thêm Sức phải góp phần xây dựng xã hội theo tinh thần Tin Mừng.",
                "correctAnswer": "Đúng",
                "explanation": "Câu 30"
            },
            {
                "question": "Ơn thứ ba của Bí tích Rửa Tội là được làm con cái Thiên Chúa.",
                "correctAnswer": "Sai",
                "explanation": "Ơn thứ 2 [Câu 25]"
            },
            {
                "question": "Bí tích Thánh Thể có thể tẩy xóa được 1 số tội lỗi.",
                "correctAnswer": "Đúng",
                "explanation": "Bài 6"
            },
            {
                "question": "1 trong những điều kiện để lãnh các Bí tích khai tâm là phải sạch tội trọng.",
                "correctAnswer": "Sai",
                "explanation": "Bí tích Rửa Tội thì không cần [Câu 29]"
            },
            {
                "question": "Mọi tín hữu buộc phải xưng các tội trọng của mình ít nhất một năm một lần và trong mọi trường hợp, phải xưng các tội trọng trước khi rước lễ.",
                "correctAnswer": "Sai",
                "explanation": "Khi đến tuổi khôn [Câu ?]"
            },
            {
                "question": "Ân xá là việc tha thứ những hình phạt tạm đáng chịu vì những tội chúng ta đã phạm, dù những tội này đã được tha thứ.",
                "correctAnswer": "Đúng",
                "explanation": "[Câu ?]"
            },
            {
                "question": "Trong nhiều trường hợp, phải xưng các tội trọng trước khi rước lễ.",
                "correctAnswer": "Sai",
                "explanation": "Phải xưng trong mọi trường hợp [Câu ?]"
            },
            {
                "question": "Chúa Giêsu đã lập Bí tích Thống Hối khi Ngài hiện ra với các Tông đồ vào sáng ngày Phục sinh và nói rằng: “Anh em hãy nhận lấy Thánh Thần; anh em tha tội cho ai, thì tội người ấy được tha; anh em cầm giữ ai, thì tội người ấy bị cầm giữ”.",
                "correctAnswer": "Sai",
                "explanation": "Lúc chiều ngày Phục Sinh [Câu ?]"
            },
            {
                "question": "Ân xá là việc tha thứ những hình phạt tạm đáng chịu vì những tội chúng ta đã phạm, dù những tội này đã được tha thứ.",
                "correctAnswer": "Đúng",
                "explanation": "[Câu ?]"
            }
        ]
    },
    part3: {
        title: "Âm tiết",
        rules: "You will be presented with 5 open-ended questions. Click 'Start Timer' to begin the 20-second countdown for reflection. After the timer ends, you can view the answer.",
        questions: [
            {
                question: "What is the Great Commission given by Jesus?",
                answer: "The Great Commission is Jesus' instruction to His disciples to spread His teachings to all the nations. It's found in Matthew 28:19-20: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you.'"
            },
            {
                question: "What are the Beatitudes and where are they found?",
                answer: "The Beatitudes are a series of blessings declared by Jesus in the Sermon on the Mount, found in Matthew 5:3-12. They begin with 'Blessed are the poor in spirit, for theirs is the kingdom of heaven.'"
            },
            {
                question: "What is the significance of baptism in Christianity?",
                answer: "Baptism is a sacrament that symbolizes the washing away of sins, rebirth, and admission into the Christian church. It represents dying to sin and being reborn in Christ, following His death and resurrection."
            },
            {
                question: "What is the meaning of the Eucharist or Holy Communion?",
                answer: "The Eucharist or Holy Communion is a sacrament that commemorates Jesus' Last Supper with His disciples. The bread represents His body and the wine His blood, symbolizing His sacrifice for humanity's salvation."
            },
            {
                question: "What are the Fruits of the Holy Spirit?",
                answer: "The Fruits of the Holy Spirit are virtues that are developed in a person's life when they follow the guidance of the Holy Spirit. According to Galatians 5:22-23, they are love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control."
            }
        ]
    },
    part4: {
        title: "Trả lời câu hỏi",
        rules: "You will be presented with 5 questions along with their answers. Take time to read and understand each one before moving to the next.",
        questions: [
            {
                question: "What is the Trinity?",
                answer: "The Trinity is the Christian doctrine that God exists as three persons—the Father, the Son (Jesus Christ), and the Holy Spirit—who are of one substance, essence, or nature."
            },
            {
                question: "What is the meaning of Advent in the Christian calendar?",
                answer: "Advent is a season of preparation and waiting for the celebration of Jesus' birth at Christmas. It covers the four Sundays before Christmas and symbolizes the waiting for Christ's return."
            },
            {
                question: "What is the significance of Lent?",
                answer: "Lent is a 40-day period of fasting, prayer, and penitence before Easter. It represents Jesus' 40 days of fasting in the wilderness and is a time for reflection, repentance, and spiritual discipline."
            },
            {
                question: "What are the Seven Sacraments in Catholic tradition?",
                answer: "The Seven Sacraments are Baptism, Confirmation, Eucharist, Reconciliation (Confession), Anointing of the Sick, Holy Orders, and Matrimony. They are considered outward signs of inward grace instituted by Christ."
            },
            {
                question: "What is the Apostles' Creed?",
                answer: "The Apostles' Creed is a statement of Christian belief that summarizes key doctrines, including belief in God the Father, Jesus Christ, the Holy Spirit, the Church, forgiveness of sins, and resurrection of the body. It's used in baptismal ceremonies and regular worship."
            }
        ]
    }
};

// Default Team Scores
const updatedScores = [
    { team: "Mai", part1: 32, part2: 0, part3: 0, part4: 0, total: 32 },
    { team: "Vy", part1: 24, part2: 0, part3: 0, part4: 0, total: 24 },
    { team: "Phanh", part1: 29, part2: 0, part3: 0, part4: 0, total: 29 },
    { team: "Đạt", part1: 24, part2: 0, part3: 0, part4: 0, total: 24 },
    { team: "Lộc", part1: 26, part2: 0, part3: 0, part4: 0, total: 26 },
    { team: "Vịnh", part1: 21, part2: 0, part3: 0, part4: 0, total: 21 }
];


// Team Scores (will be loaded from localStorage if available)
let scores = [];

// Quiz State
let currentPart = null;
let currentQuestionIndex = 0;
let timer = null;
let timerValue = 0;
let timerRunning = false;

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const rulesScreen = document.getElementById('rules-screen');
const quizScreen = document.getElementById('quiz-screen');
const completionScreen = document.getElementById('completion-screen');
const partTitle = document.getElementById('part-title');
const currentPartTitle = document.getElementById('current-part-title');
const completedPartTitle = document.getElementById('completed-part-title');
const rulesContent = document.getElementById('rules-content');
const startQuizBtn = document.getElementById('start-quiz-btn');
// const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const trueFalseContainer = document.getElementById('true-false-container');
const openAnswerContainer = document.getElementById('open-answer-container');
const timerElement = document.getElementById('timer');
const timerContainer = document.getElementById('timer-container');
const startTimerBtn = document.getElementById('start-timer-btn');
const showAnswerBtn = document.getElementById('show-answer-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const answerModal = document.getElementById('answer-modal');
const answerContent = document.getElementById('answer-content');
const closeModalBtn = document.getElementById('close-modal-btn');
const scoreboardBody = document.getElementById('scoreboard-body');
const toggleAdminBtn = document.getElementById('toggle-admin-btn');
const adminControls = document.getElementById('admin-controls');
const teamSelect = document.getElementById('team-select');
const nextSound = document.getElementById('nextSound');
const correctSound = document.getElementById('correctSound');

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.getElementById("loading-screen").classList.add("hidden");
      document.getElementById("welcome-screen").classList.remove("hidden");
    }, 2000); // 5000 ms = 5 giây
});

// Initialize the app
function init() {
    // Load scores from localStorage or use defaults
    loadScores();

    updateScoreboard();
    populateTeamSelect();

    // Event listeners
    startQuizBtn.addEventListener('click', startQuiz);
    startTimerBtn.addEventListener('click', startTimerManually);
    showAnswerBtn.addEventListener('click', showAnswer);
    nextQuestionBtn.addEventListener('click', nextQuestion);
    closeModalBtn.addEventListener('click', closeModal);
    toggleAdminBtn.addEventListener('click', toggleAdminControls);

    // Add event listeners to true/false buttons
    document.querySelectorAll('.true-false-btn').forEach(btn => {
        btn.addEventListener('click', () => selectTrueFalseOption(btn.dataset.value === 'true'));
    });
}

let question = {}; // Câu hỏi hiện tại

// Lấy dữ liệu khi trang load
// async function fetchPart1Questions() {
//   const sheetUrl = "https://script.google.com/macros/s/AKfycbzKIF86iFQsPPF4AxR0elPx0lkEyfm4a4KHc4ofpGJMpsFHu7-jQ2BkE1y75kMg7QrH/exec";

//   try {
//     const response = await fetch(sheetUrl);
//     const data = await response.json();

//     if (Array.isArray(data)) {
//       quizData.part1.questions.push(...data);
//       console.log("✅ Câu hỏi part1 đã load:", quizData.part1.questions);
//     } else {
//       throw new Error("Dữ liệu không hợp lệ");
//     }
//   } catch (error) {
//     console.error("❌ Lỗi khi lấy part1:", error);
//   }
// }

// async function fetchPart2Questions() {
//   const sheetUrl = "https://script.google.com/macros/s/AKfycbzOF_rJDZAs3Uc9I81q6MuoYLLcUoTubU41X7qamxsCpxvUOjMDI9rLkhEPy6XUml8U/exec";

//   try {
//     const response = await fetch(sheetUrl);
//     const data = await response.json();

//     if (Array.isArray(data)) {
//       quizData.part2.questions.push(...data);
//       console.log("✅ Câu hỏi part1 đã load:", quizData.part2.questions);
//     } else {
//       throw new Error("Dữ liệu không hợp lệ");
//     }
//   } catch (error) {
//     console.error("❌ Lỗi khi lấy part1:", error);
//   }
// }

// document.addEventListener("DOMContentLoaded", fetchPart1Questions);
// document.addEventListener("DOMContentLoaded", fetchPart2Questions);

// 🔁 Hàm trộn mảng (Fisher–Yates shuffle)
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 🔄 Shuffle đáp án và cập nhật correctAnswer
function shuffleOptions(questionObj) {
  const entries = Object.entries(questionObj.options);
  const shuffled = shuffleArray(entries);

  const labels = ['A', 'B', 'C', 'D'];
  const newOptions = {};
  let newCorrectAnswer = '';

  shuffled.forEach(([_, text], index) => {
    const label = labels[index];
    newOptions[label] = text;

    if (questionObj.correctAnswer) {
      const originalText = questionObj.options[questionObj.correctAnswer];
      if (text === originalText) {
        newCorrectAnswer = label;
      }
    }
  });

  return {
    ...questionObj,
    options: newOptions,
    ...(questionObj.correctAnswer && { correctAnswer: newCorrectAnswer })
  };
}

// 🔄 Shuffle toàn bộ quiz: cả câu hỏi lẫn đáp án
function prepareQuizData() {
  // Shuffle câu hỏi
  const shuffledQuestions = shuffleArray(quizData.part1.questions);

  // Shuffle options trong mỗi câu hỏi
  const shuffledWithAnswers = shuffledQuestions.map(shuffleOptions);

  // Gán lại vào quizData
  quizData.part1.questions = shuffledWithAnswers;
}

document.addEventListener("DOMContentLoaded", prepareQuizData);

// Load scores from localStorage
function loadScores() {
    const savedScores = localStorage.getItem('catechismQuizScores');
    if (savedScores) {
        scores = JSON.parse(savedScores);
    } else {
        scores = [...updatedScores]; // Use a copy of the default scores
    }
}

// Save scores to localStorage
function saveScores() {
    localStorage.setItem('catechismQuizScores', JSON.stringify(scores));
}

// Reset scores to default
function resetScores() {
    if (confirm('Are you sure you want to reset all scores?')) {
        scores = [...updatedScores]; // Use a copy of the default scores
        saveScores();
        updateScoreboard();
        populateTeamSelect();
    }
}

// Start a specific quiz part
function startPart(partNumber) {
    currentPart = `part${partNumber}`;
    currentQuestionIndex = 0;

    // Show rules screen
    welcomeScreen.classList.add('hidden');
    rulesScreen.classList.remove('hidden');
    quizScreen.classList.add('hidden');
    completionScreen.classList.add('hidden');

    // Update rules content
    partTitle.textContent = quizData[currentPart].title;
    rulesContent.textContent = quizData[currentPart].rules;
}

// Start the quiz after showing rules
function startQuiz() {
    rulesScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    // Load first question
    loadQuestion();
}

// Load the current question
function loadQuestion() {
    const question = quizData[currentPart].questions[currentQuestionIndex];

    // Update question info
    currentPartTitle.textContent = `Phần ${currentPart.slice(-1)}: ${quizData[currentPart].title}`;
    // questionNumber.textContent = currentQuestionIndex + 1;
    questionText.textContent = question.question;

    // Reset buttons
    showAnswerBtn.classList.add('hidden');
    nextQuestionBtn.classList.add('hidden');

    // Reset timer
    clearInterval(timer);
    timerRunning = false;

    // Set timer value based on part
    if (currentPart === 'part1' || currentPart === 'part2') {
        timerValue = 10;
    } else if (currentPart === 'part3') {
        timerValue = 20;
    }

    timerElement.textContent = timerValue;

    // Show or hide timer button
    if (currentPart === 'part4') {
        timerContainer.classList.add('hidden');
    } else {
        timerContainer.classList.remove('hidden');
        startTimerBtn.classList.remove('hidden');
        startTimerBtn.disabled = false;
        startTimerBtn.classList.remove('opacity-50');
    }

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Show appropriate answer type container
    if (currentPart === 'part1') {
        optionsContainer.classList.remove('hidden');
        trueFalseContainer.classList.add('hidden');
        openAnswerContainer.classList.add('hidden');

        // Create multiple choice options
        for (const [key, value] of Object.entries(question.options)) {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn bg-white border-2 border-[#7b2d30] hover:bg-[#7b2d30] hover:text-white text-[#7b2d30] font-bold text-2xl py-3 px-6 rounded-lg transition-colors';
            optionBtn.textContent = `${value}`;
            optionBtn.dataset.option = key;
            optionBtn.addEventListener('click', () => selectOption(key));
            optionsContainer.appendChild(optionBtn);
        }
    } else if (currentPart === 'part2') {
        optionsContainer.classList.add('hidden');
        trueFalseContainer.classList.remove('hidden');
        openAnswerContainer.classList.add('hidden');

        // Reset true/false buttons
        document.querySelectorAll('.true-false-btn').forEach(btn => {
            btn.classList.remove('bg-[#7b2d30]', 'text-white');
            btn.classList.add('bg-white', 'text-[#7b2d30]');
            btn.disabled = false;
            btn.classList.remove('opacity-70');
        });
    } else if (currentPart === 'part3') {
        optionsContainer.classList.add('hidden');
        trueFalseContainer.classList.add('hidden');
        openAnswerContainer.classList.remove('hidden');
        openAnswerContainer.innerHTML = '<p class="text-gray-600 italic">Think about your answer...</p>';
    } else if (currentPart === 'part4') {
        optionsContainer.classList.add('hidden');
        trueFalseContainer.classList.add('hidden');
        openAnswerContainer.classList.remove('hidden');

        // Show answer immediately
        const answerText = document.createElement('div');
        answerText.className = 'mt-4 p-4 bg-gray-100 rounded-lg';
        answerText.innerHTML = `<p class="font-bold text-[#7b2d30]">Answer:</p><p>${question.answer}</p>`;
        openAnswerContainer.innerHTML = '';
        openAnswerContainer.appendChild(answerText);

        // Show next button immediately
        nextQuestionBtn.classList.remove('hidden');
    }
}

// Start the timer manually
function startTimerManually() {
    if (timerRunning) return;

    const audio = document.getElementById("start-sound");
    audio.currentTime = 0;
    audio.play().catch(e => console.warn("Không phát được âm thanh:", e));

    timerRunning = true;

    clearInterval(timer);
    timer = setInterval(() => {
        timerValue--;
        timerElement.textContent = timerValue;

        if (timerValue <= 0) {
            clearInterval(timer);
            timerEnd();
        }
    }, 1000);
}

// Handle timer end
function timerEnd() {
    timerRunning = false;
    showAnswerBtn.classList.remove('hidden');
    nextQuestionBtn.classList.remove('hidden');

    // Disable option buttons
    if (currentPart === 'part1') {
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            btn.classList.add('opacity-70');
        });
    } else if (currentPart === 'part2') {
        document.querySelectorAll('.true-false-btn').forEach(btn => {
            btn.disabled = true;
            btn.classList.add('opacity-70');
        });
    }
}

// Select a multiple choice option
function selectOption(option) {
    document.querySelectorAll('.option-btn').forEach(btn => {
        if (btn.dataset.option === option) {
            btn.classList.remove('bg-white', 'text-[#7b2d30]');
            btn.classList.add('bg-[#7b2d30]', 'text-white');
        } else {
            btn.classList.remove('bg-[#7b2d30]', 'text-white');
            btn.classList.add('bg-white', 'text-[#7b2d30]');
        }
    });
}

// Select a true/false option
function selectTrueFalseOption(isTrue) {
    document.querySelectorAll('.true-false-btn').forEach(btn => {
        if ((btn.dataset.value === 'true' && isTrue) || (btn.dataset.value === 'false' && !isTrue)) {
            btn.classList.remove('bg-white', 'text-[#7b2d30]');
            btn.classList.add('bg-[#7b2d30]', 'text-white');
        } else {
            btn.classList.remove('bg-[#7b2d30]', 'text-white');
            btn.classList.add('bg-white', 'text-[#7b2d30]');
        }
    });
}

function playCorrectSound() {
    try {
        correctSound.currentTime = 0;
        correctSound.play();
    } catch (e) {
        console.log("Correct sound not available yet");
    }
}
function playNextSound() {
    try {
        nextSound.currentTime = 0;
        nextSound.play();
    } catch (e) {
        console.log("Next sound not available yet");
    }
}

// Show the answer
function showAnswer() {
    const question = quizData[currentPart].questions[currentQuestionIndex];

    // Prepare answer content
    let content = '';

    if (currentPart === 'part1') {
        const correctOption = question.correctAnswer?.charAt(0);
        content = `
            <p class="font-bold text-8xl mb-10">${correctOption}</p>
            <p class="text-gray-700">${question.explanation}</p>
        `;
    } else if (currentPart === 'part2') {
        content = `
            <p class="font-bold text-8xl mb-10">${question.correctAnswer}</p>
            <p class="text-gray-700">${question.explanation}</p>
        `;
    } else {
        content = `
            <p class="text-gray-700">${question.answer}</p>
        `;
    }

    playCorrectSound();

    // Update and show modal
    answerContent.innerHTML = content;
    answerModal.classList.remove('hidden');
}

// Close the answer modal
function closeModal() {
    answerModal.classList.add('hidden');
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    playNextSound();

    // Check if we've reached the end of questions
    if (currentQuestionIndex >= quizData[currentPart].questions.length) {
        completeQuiz();
    } else {
        loadQuestion();
    }
}

// Complete the current quiz part
function completeQuiz() {
    clearInterval(timer);

    quizScreen.classList.add('hidden');
    completionScreen.classList.remove('hidden');

    completedPartTitle.textContent = `Part ${currentPart.slice(-1)}: ${quizData[currentPart].title}`;
}

// Return to home screen
function returnToHome() {
    completionScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
}

// Update the scoreboard
function updateScoreboard() {
    // Sort teams by total score
    scores.sort((a, b) => b.total - a.total);

    // Clear scoreboard
    scoreboardBody.innerHTML = '';

    // Add team scores
    scores.forEach((team, index) => {
        const row = document.createElement('tr');
        row.className = index === 0 ? 'bg-[#7b2d30] text-white' : (index % 2 === 0 ? 'bg-gray-100' : 'bg-white');

        row.innerHTML = `
            <td class="py-2 px-2 font-medium">${team.team}</td>
            <td class="py-2 px-1 text-center">${team.part1}</td>
            <td class="py-2 px-1 text-center">${team.part2}</td>
            <td class="py-2 px-2 text-center font-bold">${team.total}</td>
        `;

        scoreboardBody.appendChild(row);
    });
}

// Toggle admin controls
function toggleAdminControls() {
    adminControls.classList.toggle('hidden');
}

// Populate team select dropdown
function populateTeamSelect() {
    teamSelect.innerHTML = '';
    scores.forEach(team => {
        const option = document.createElement('option');
        option.value = team.team;
        option.textContent = team.team;
        teamSelect.appendChild(option);
    });
}

// Adjust team score
function adjustScore(amount) {
    const selectedTeam = teamSelect.value;
    const selectedPart = document.getElementById('part-select').value;

    // Find the team and update score
    const team = scores.find(t => t.team === selectedTeam);
    if (team) {
        team[selectedPart] = Math.max(0, team[selectedPart] + amount);
        team.total = team.part1 + team.part2 + team.part3 + team.part4;
        saveScores();
        updateScoreboard();
    }
}

// Initialize the app
init();
