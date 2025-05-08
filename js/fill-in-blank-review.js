
// Question sets for different sections
const questionSets = [
    // Section 1: PHẦN I
    [
        {
            question: "1. H. Phụng vụ là gì?",
            tips: "Thưa. Phụng vụ ______ ______ nhiệm ______.",
            correctAnswers: "Thưa. Phụng vụ là việc Hội Thánh chính thức cử hành mầu nhiệm Đức Kitô, để thờ phượng Thiên Chúa và thánh hóa con người."
        },
        {
        question: "2. H. Phụng vụ có vị trí nào trong Hội Thánh?",
        tips: "Thưa. Phụng vụ là ______ và ______ mạch ______.",
        correctAnswers: "Thưa. Phụng vụ là chóp đỉnh và là nguồn mạch các hoạt động của Hội Thánh, qua đó Đức Kitô tiếp tục công trình cứu độ của Ngài."
        },
        {
        question: "3. H. Đức Kitô tiếp tục công trình cứu độ của Ngài trong Hội Thánh thế nào?",
        tips: "Thưa. Đức Kitô ______ ______ cứu độ ______ qua ______.",
        correctAnswers: "Thưa. Đức Kitô tiếp tục công trình cứu độ của Ngài trong Hội Thánh qua các bí tích được gọi là nhiệm cục bí tích."
        },
        {
        question: "4. H. Nhiệm cục bí tích là gì?",
        tips: "Thưa. Nhiệm cục bí tích là ______ ______ ơn ______ qua ______.",
        correctAnswers: "Thưa. Nhiệm cục bí tích là sự chuyển thông ơn cứu độ của Chúa qua việc Hội Thánh cử hành các bí tích, nhất là bí tích Thánh Thể."
        },
        {
        question: "5. H. Ai hành động trong phụng vụ?",
        tips: "Thưa. Chính ______ ______, nghĩa là ______ với ______ của Ngài là ______ hành động trong phụng vụ.",
        correctAnswers: "Thưa. Chính “Đức Kitô toàn thể”, nghĩa là Đức Kitô cùng với Thân Thể của Ngài là Hội Thánh trên trời và Hội Thánh ở trần gian hành động trong phụng vụ."
        },
        {
        question: "6. H. Cử hành phụng vụ gồm những yếu tố nào?",
        tips: "Thưa. Cử hành phụng vụ gồm ______ yếu tố này: ______ và ______.",
        correctAnswers: "Thưa. Cử hành phụng vụ gồm hai yếu tố này: - Một là các dấu chỉ và biểu tượng, để diễn tả và thực hiện hành động cứu độ của Đức Kitô; - Hai là lời nói và hành động, nhờ đó con người gặp gỡ và đối thoại với Thiên Chúa."
        },
        {
        question: "7. H. Ngày Chúa Nhật quan trọng thế nào trong Năm phụng vụ?",
        tips: "Thưa. Ngày Chúa Nhật ______ ______ vì là “Ngày của Chúa”, ______ ______ của cả Năm Phụng vụ.",
        correctAnswers: "Thưa. Ngày Chúa Nhật rất quan trọng vì là “Ngày của Chúa”, ngày Chúa Phục Sinh. Vì thế, ngày Chúa Nhật là nền tảng và trung tâm của cả Năm Phụng vụ."
        },
        {
        question: "8. H. Năm phụng vụ là gì?",
        tips: "Thưa. Năm Phụng vụ là ______ ______ Hội Thánh ______ các mầu nhiệm Đức Kitô.",
        correctAnswers: "Thưa. Năm Phụng vụ là thời gian Hội Thánh cử hành các mầu nhiệm Đức Kitô, để giúp chúng ta sống những mầu nhiệm ấy, hầu chuẩn bị đón Ngài lại đến trong vinh quang."
        },
        {
        question: "9. H. Phụng vụ Các Giờ Kinh là gì?",
        tips: "Thưa. Phụng vụ Các Giờ Kinh là ______ ______ của Đức Kitô cùng với Hội Thánh.",
        correctAnswers: "Thưa. Phụng vụ Các Giờ Kinh là lời cầu nguyện của Đức Kitô cùng với Hội Thánh, để giúp các tín hữu thánh hóa thời gian trong ngày."
        },
        {
        question: "10. H. Bí tích là gì?",
        tips: "Thưa. Bí tích là ______ ______ bên ngoài Chúa Giê-su đã lập.",
        correctAnswers: "Thưa. Bí tích là dấu chỉ bên ngoài Chúa Giê-su đã lập và truyền lại cho Hội Thánh cử hành, để diễn tả và thông ban cho chúng ta ân sủng bên trong là sự sống thần linh."
        },
        {
        question: "11. H. Có mấy bí tích?",
        tips: "Thưa. Có 7 bí tích: ______, ______, ______, ______, ______, ______, ______.",
        correctAnswers: "Thưa. Có 7 bí tích: - Một là Bí tích Rửa Tội; - Hai là Bí tích Thêm Sức; - Ba là Bí tích Thánh Thể; - Bốn là Bí tích Thống Hối; - Năm là Bí tích Xức Dầu Bệnh Nhân; - Sáu là Bí tích Truyền Chức Thánh; - Bảy là Bí tích Hôn Phối."
        },
        {
        question: "12. H. Các bí tích của Hội Thánh được phân loại thế nào?",
        tips: "Thưa. Các bí tích của Hội Thánh được phân ______ ba loại: ______, ______, ______.",
        correctAnswers: "Thưa. Các bí tích của Hội Thánh được phân thành ba loại này: - Một là các bí tích khai tâm Kitô giáo; - Hai là các bí tích chữa lành; - Ba là các bí tích phục vụ."
        },
        {
        question: "13. H. Các bí tích khai tâm Kitô Giáo gồm những bí tích nào?",
        tips: "Thưa. Các bí tích khai tâm Kitô giáo gồm ______, ______, ______.",
        correctAnswers: "Thưa. Các bí tích khai tâm Kitô giáo gồm Bí tích Rửa Tội, Thêm Sức và Thánh Thể. Các bí tích này tái sinh, củng cố và nuôi dưỡng các tín hữu trong đời sống mới."
        },
        {
        question: "14. H. Các bí tích chữa lành gồm những bí tích nào?",
        tips: "Thưa. Các bí tích chữa lành gồm ______ và ______.",
        correctAnswers: "Thưa. Các bí tích chữa lành gồm Bí tích Thống Hối và Xức Dầu Bệnh Nhân. Các bí tích này phục hồi và củng cố đời sống mới của các tín hữu đã bị suy yếu hoặc mất đi do tội lỗi."
        },
        {
        question: "15. H. Các bí tích phục vụ gồm những bí tích nào?",
        tips: "Thưa. Các bí tích phục vụ gồm ______ và ______.",
        correctAnswers: "Thưa. Các bí tích phục vụ gồm Bí tích Truyền Chức Thánh và Hôn Phối. Hai bí tích này đem lại ân sủng riêng cho mỗi sứ vụ đặc biệt trong Hội Thánh, để xây dựng Dân Thiên Chúa."
        },
        {
        question: "16. H. Ấn tín bí tích là gì?",
        tips: "Thưa. Ấn tín bí tích là ______ ______ thiêng liêng, ______ vào lòng những người lãnh ______.",
        correctAnswers: "Thưa. Ấn tín bí tích là dấu ấn thiêng liêng, Thiên Chúa in vào lòng những người lãnh Bí tích Rửa Tội, Thêm Sức, Truyền Chức Thánh, như lời hứa và bảo đảm cho sự che chở của Ngài. Vì ấn tín không thể xóa được, nên các bí tích này chỉ được lãnh một lần mà thôi."
        },
        {
        question: "17. H. Vì sao gọi là bí tích đức tin?",
        tips: "Thưa. Vì khi lãnh nhận bí tích, chúng ta phải có ______, đồng thời ______ ______, đức tin của chúng ta thêm ______.",
        correctAnswers: "Thưa. Vì khi lãnh nhận bí tích, chúng ta phải có đức tin, đồng thời nhờ các bí tích, đức tin của chúng ta thêm mạnh mẽ vững vàng."
        },
        {
        question: "18. H. Ai ban ân sủng trong các bí tích?",
        tips: "Thưa. Chính Đức Kitô ______ và ______ ân sủng trong các bí tích, nhưng ______ ______ này có mang lại lợi ích hay không thì ______.",
        correctAnswers: "Thưa. Chính Đức Kitô hoạt động và thông ban ân sủng trong các bí tích, nhưng ân sủng này có mang lại lợi ích hay không thì còn tùy thuộc vào sự chuẩn bị nội tâm của người lãnh nhận."
        },
        {
        question: "19. H. Vì sao các bí tích cần thiết cho ơn cứu độ?",
        tips: "Thưa. Vì các bí tích ______ ______ ân sủng của Chúa Thánh Thần, để Ngài ______ và ______ chúng ta.",
        correctAnswers: "Thưa. Vì các bí tích trao ban ân sủng của Chúa Thánh Thần, để Ngài chữa lành và biến đổi chúng ta."
        },
        {
        question: "20. H. Các bí tích giúp chúng ta sống đời sống vĩnh cửu thế nào?",
        tips: "Thưa. Các bí tích cho chúng ta ______ ______ vào đời sống vĩnh cửu, đang khi ______ ______ Đức Kitô ngự đến trong vinh quang.",
        correctAnswers: "Thưa. Các bí tích cho chúng ta tham dự trước vào đời sống vĩnh cửu, đang khi mong chờ ngày Đức Kitô ngự đến trong vinh quang."
        },
        {
        question: "21. H. Bí Tích Rửa Tội là gì?",
        tips: "Thưa. Là bí tích Chúa Giê-su đã lập, để ______ chúng ta ______ trong đời sống mới bởi ______ và ______.",
        correctAnswers: "Thưa. Là bí tích Chúa Giê-su đã lập, để làm cho chúng ta được sinh lại trong đời sống mới bởi nước và Thánh Thần."
        },
        {
        question: "22. H. Nghi thức chính yếu của Bí Tích Rửa Tội là gì?",
        tips: "Thưa. Nghi thức chính yếu của Bí Tích Rửa Tội là ______ xuống nước hay ______ nước trên đầu người lãnh bí tích.",
        correctAnswers: "Thưa. Nghi thức chính yếu của Bí Tích Rửa Tội là dìm xuống nước hay đổ nước trên đầu người lãnh bí tích và nói: “Tôi rửa anh, nhân danh Cha và Con và Thánh Thần.”"
        },
        {
        question: "23. H. Bí Tích Rửa Tội có cần thiết cho ơn cứu độ không?",
        tips: "Thưa. Bí Tích Rửa Tội ______ ______ cho ơn cứu độ, đối với những ai đã ______ rao giảng Tin Mừng và có khả năng ______ bí tích này.",
        correctAnswers: "Thưa. Bí Tích Rửa Tội cần thiết cho ơn cứu độ, đối với những ai đã nghe rao giảng Tin Mừng và có khả năng xin lãnh nhận bí tích này."
        },
        {
        question: "24. H. Người không lãnh nhận Bí Tích Rửa Tội có được cứu độ không?",
        tips: "Thưa. Người không lãnh Bí Tích Rửa Tội có thể ______ ______ trong ba trường hợp này: ______, ______, ______.",
        correctAnswers: "Thưa. Người không lãnh Bí Tích Rửa Tội có thể được cứu độ trong ba trường hợp này: - Một là chết vì đức tin; - Hai là có lòng ước ao nhưng chưa có điều kiện lãnh nhận Bí Tích Rửa Tội; - Ba là chưa được biết Chúa Kitô và Hội Thánh, nhưng đã theo tiếng lương tâm mà sống ngay lành."
        },
        {
        question: "25. H. Bí Tích Rửa Tội ban cho chúng ta những ơn nào?",
        tips: "Thưa. Bí Tích Rửa Tội ban cho chúng ta ______ ______: ______, ______, ______, ______.",
        correctAnswers: "Thưa. Bí Tích Rửa Tội ban cho chúng ta những ơn này: - Một là được tha tội tổ tông và các tội riêng đã phạm; - Hai là được làm con cái Thiên Chúa; - Ba là được tháp nhập vào Đức Kitô và Hội Thánh; - Bốn là được ghi vào linh hồn dấu ấn thiêng liêng không bao giờ xóa được."
        },
        {
        question: "26. H. Bí Tích Thêm Sức là gì?",
        tips: "Thưa. Là bí tích Chúa Giê-su đã lập, để ______ ______ Chúa Thánh Thần, hầu giúp chúng ta ______ ơn Bí Tích Rửa Tội cách ______ và ______ hơn.",
        correctAnswers: "Thưa. Là bí tích Chúa Giê-su đã lập, để ban tràn đầy Chúa Thánh Thần, hầu giúp chúng ta sống ơn Bí Tích Rửa Tội cách mạnh mẽ và tốt đẹp hơn."
        },
        {
        question: "27. H. Nghi thức chính yếu của Bí Tích Thêm Sức là gì?",
        tips: "Thưa. Là việc ______ thánh trên trán người đã lãnh Bí Tích Rửa Tội, cùng với việc ______ tay trên đầu người ấy.",
        correctAnswers: "Thưa. Là việc xức dầu thánh trên trán người đã lãnh Bí Tích Rửa Tội, cùng với việc đặt tay trên đầu người ấy và đọc rằng “Hãy lãnh nhận ấn tín ơn Chúa Thánh Thần.”"
        },
        {
        question: "28. H. Hiệu quả của Bí Tích Thêm Sức là gì?",
        tips: "Thưa. Là việc ______ Chúa Thánh Thần trên người lãnh bí tích, nhờ đó họ được ______ không thể tẩy ______ và gia tăng ân sủng Bí Tích Rửa Tội.",
        correctAnswers: "Thưa. Là việc đổ tràn Chúa Thánh Thần trên người lãnh bí tích, nhờ đó họ được ghi ấn tín không thể tẩy xóa và gia tăng ân sủng Bí Tích Rửa Tội."
        },
        {
        question: "29. H. Người muốn lãnh nhận Bí Tích Thêm Sức cần phải làm gì?",
        tips: "Thưa. Người lãnh Bí Tích Thêm Sức phải làm ______ điều này: ______, ______, ______.",
        correctAnswers: "Thưa. Người lãnh Bí Tích Thêm Sức phải làm những điều này: - Một là phải sạch tội trọng; - Hai là phải học giáo lý, nhất là về Bí Tích Thêm Sức; - Ba là phải cầu nguyện sốt sắng và thật lòng ước ao lãnh nhận Chúa Thánh Thần."
        },
        {
        question: "30. H. Người lãnh Bí Tích Thêm Sức có những bổn phận nào?",
        tips: "Thưa. Người lãnh Bí Tích Thêm Sức có những ______ này: ______, ______, ______.",
        correctAnswers: "Thưa. Người lãnh Bí Tích Thêm Sức có những bổn phận này: - Một là nỗ lực thi hành Lời Chúa trong đời sống thường ngày; - Hai là góp phần xây dựng xã hội theo tinh thần Tin Mừng; - Ba là tích cực giới thiệu Chúa cho mọi người."
        },
        {
        question: "31. H. Bí Tích Thánh Thể là gì?",
        tips: "Thưa. Là bí tích Chúa Giê-su đã lập, để ______ ______ lễ hy sinh trên ______ ______ và để ______ Mình Máu Ngài.",
        correctAnswers: "Thưa. Là bí tích Chúa Giê-su đã lập, để tiếp tục lễ hy sinh trên Thánh giá và để ban Mình Máu Ngài, làm của ăn nuôi sống chúng ta."
        },
        {
        question: "32. H. Chúa Giê-su đã lập Bí Tích Thánh Thể thế nào?",
        tips: "Thưa. Khi ______ nộp mình ______ khổ hình, Chúa Giê-su cầm lấy ______, tạ ơn, bẻ ra và ______ cho các môn đệ.",
        correctAnswers: "Thưa. Khi tự nguyện nộp mình chịu khổ hình, Chúa Giê-su cầm lấy bánh, tạ ơn, bẻ ra và trao cho các môn đệ mà nói: “Tất cả các con hãy nhận lấy mà ăn: vì này là mình Thầy, sẽ bị nộp vì các con”. Cùng một thể thức ấy, sau bữa ăn tối, Người cầm lấy chén rượu, cũng tạ ơn, trao cho các môn đệ mà nói: “Tất cả các con hãy nhận lấy mà uống: vì này là chén máu Thầy, máu Giao ước mới và vĩnh cửu, sẽ đổ ra cho các con và nhiều người được tha tội: Các con hãy làm việc này mà nhớ đến Thầy.”"
        },
        {
        question: "33. H. Bí Tích Thánh Thể có ý nghĩa gì trong đời sống Kitô giáo?",
        tips: "Thưa. Bí Tích Thánh Thể là ______ ______ và ______ của toàn bộ đời sống Kitô giáo.",
        correctAnswers: "Thưa. Bí Tích Thánh Thể là nguồn mạch và tột đỉnh của toàn bộ đời sống Kitô giáo, chứa đựng tất cả kho tàng thiêng liêng của Hội Thánh là chính Đức Kitô, Chiên Vượt Qua của chúng ta."
        },
        {
        question: "34. H. Hội Thánh cử hành Bí Tích Thánh Thể thế nào?",
        tips: "Thưa. Hội Thánh cử hành Bí Tích Thánh Thể trong ______, gồm hai phần chính: ______ và ______.",
        correctAnswers: "Thưa. Hội Thánh cử hành Bí Tích Thánh Thể trong Thánh lễ, gồm hai phần chính: - Một là Phụng vụ Lời Chúa, khởi đi từ lời nguyện nhập lễ cho đến hết lời nguyện chung; - Hai là Phụng vụ Thánh Thể, khởi đi từ việc chuẩn bị lễ vật cho đến hết lời nguyện hiệp lễ."
        },
        {
        question: "35. H. Hội Thánh dạy thế nào về việc rước lễ?",
        tips: "Thưa. Hội Thánh khuyên các tín hữu ______ lễ mỗi khi tham dự ______, và buộc ______ một năm ít là một lần trong ______.",
        correctAnswers: "Thưa. Hội Thánh khuyên các tín hữu rước lễ mỗi khi tham dự Thánh lễ, và buộc rước lễ một năm ít là một lần trong mùa Phục Sinh."
        },
        {
        question: "36. H. Phải có điều kiện nào để được rước lễ?",
        tips: "Thưa. Phải có những ______ này: ______, ______, ______, ______.",
        correctAnswers: "Thưa. Phải có những điều kiện này: - Một là hoàn toàn thuộc về Hội Thánh Công Giáo; - Hai là ý thức mình không có tội trọng; - Ba là phải giữ chay theo quy định của Hội Thánh; - Bốn là có thái độ tôn kính Đức Kitô."
        },
        {
        question: "37. H. Việc rước lễ đem lại cho chúng ta những ơn ích nào?",
        tips: "Thưa. Việc rước lễ làm cho chúng ta ______ ______ mật thiết với Đức Kitô và Hội Thánh, được ______ các tội nhẹ, gia tăng ______ và lòng yêu mến ______.",
        correctAnswers: "Thưa. Việc rước lễ làm cho chúng ta được kết hợp mật thiết với Đức Kitô và Hội Thánh, được tẩy xóa các tội nhẹ, gia tăng ân sủng và lòng yêu mến tha nhân."
        },
        {
        question: "38. H. Bí Tích Thống Hối là gì?",
        tips: "Thưa. Là bí tích Chúa Giê-su đã lập, để ______ các tội ______ chúng ta đã phạm từ khi lãnh Bí Tích Rửa Tội về sau.",
        correctAnswers: "Thưa. Là bí tích Chúa Giê-su đã lập, để tha các tội riêng chúng ta đã phạm từ khi lãnh Bí Tích Rửa Tội về sau, cùng giao hòa chúng ta với Thiên Chúa và Hội Thánh."
        },
        {
        question: "39. H. Chúa Giê-su đã lập Bí Tích Thống Hối khi nào?",
        tips: "Thưa. Chúa Giê-su đã lập Bí Tích Thống Hối khi ______ ______ với các Tông đồ vào chiều ngày ______ ______.",
        correctAnswers: "Thưa. Chúa Giê-su đã lập Bí Tích Thống Hối khi Ngài hiện ra với các Tông đồ vào chiều ngày Phục Sinh và nói rằng: “Anh em hãy nhận lấy Thánh Thần; anh em tha tội cho ai, thì tội người ấy được tha; anh em cầm giữ ai, thì tội người ấy bị cầm giữ.”"
        },
        {
        question: "40. H. Bí Tích Thống Hối có những yếu tố chính yếu nào?",
        tips: "Thưa. Bí Tích Thống Hối có hai yếu tố ______ này: ______ và ______.",
        correctAnswers: "Thưa. Bí Tích Thống Hối có hai yếu tố chính yếu này: - Một là hành vi của người sám hối; - Hai là lời xá giải của linh mục."
        },
        {
        question: "41. H. Muốn lãnh nhận Bí Tích Thống Hối chúng ta phải làm gì?",
        tips: "Thưa. Muốn lãnh Bí Tích Thống Hối chúng ta phải làm ______ việc này: ______, ______, ______, ______.",
        correctAnswers: "Thưa. Muốn lãnh Bí Tích Thống Hối chúng ta phải làm bốn việc này: - Một là xét mình; - Hai là ăn năn và dốc lòng chừa; - Ba là xưng tội; - Bốn là đền tội."
        },
        {
        question: "42. H. Khi nào các tín hữu buộc phải xưng các tội trọng?",
        tips: "Thưa. Khi đến ______ khôn, mọi tín hữu buộc ______ xưng các tội ______ của mình ít nhất một năm một lần.",
        correctAnswers: "Thưa. Khi đến tuổi khôn, mọi tín hữu buộc phải xưng các tội trọng của mình ít nhất một năm một lần và trong mọi trường hợp, phải xưng các tội trọng trước khi rước lễ."
        },
        {
        question: "43. H. Bí Tích Thống Hối có những hiệu quả nào?",
        tips: "Thưa. Bí Tích Thống Hối có những ______ này: ______, ______, ______.",
        correctAnswers: "Thưa. Bí Tích Thống Hối có những hiệu quả này: - Một là tha tội để giao hòa chúng ta với Thiên Chúa và Hội Thánh; - Hai là tha hình phạt muôn đời do các tội trọng đã gây ra và tha một phần các hình phạt tạm; - Ba là ban sự bình an và gia tăng sức mạnh cho cuộc chiến đấu thiêng liêng của người Kitô hữu."
        },
        {
        question: "44. H. Ân xá là gì?",
        tips: "Thưa. Ân xá là việc ______ những hình phạt tạm ______ vì những tội chúng ta đã ______.",
        correctAnswers: "Thưa. Ân xá là việc tha thứ những hình phạt tạm đáng chịu vì những tội chúng ta đã phạm, dù những tội này đã được tha thứ."
        },
        {
        question: "45. H. Bí Tích Xức Dầu Bệnh Nhân là gì?",
        tips: "Thưa. Là bí tích Chúa Giê-su đã lập, để ______ ơn ______ bệnh nhân và người ______ yếu.",
        correctAnswers: "Thưa. Là bí tích Chúa Giê-su đã lập, để ban ơn nâng đỡ bệnh nhân và người già yếu, về phần hồn cũng như phần xác."
        },
        {
        question: "46. H. Ai có thể lãnh Bí Tích Xức Dầu?",
        tips: "Thưa. Mọi tín hữu khi ______ nặng, khi gặp ______ tử hoặc bị ______ vì tuổi già, đều có thể lãnh Bí Tích Xức Dầu.",
        correctAnswers: "Thưa. Mọi tín hữu khi lâm bệnh nặng, khi gặp nguy tử hoặc bị yếu liệt vì tuổi già, đều có thể lãnh Bí Tích Xức Dầu."
        },
        {
        question: "47. H. Bí Tích Xức Dầu được cử hành thế nào?",
        tips: "Thưa. Bí Tích Xức Dầu được cử hành qua việc ______ dầu trên ______ và ______ bàn tay, với lời nguyện xin ______ của bí tích này.",
        correctAnswers: "Thưa. Bí Tích Xức Dầu được cử hành qua việc xức dầu trên trán và hai lòng bàn tay, với lời nguyện xin ân sủng của bí tích này."
        },
        {
        question: "48. H. Bí Tích Xức Dầu có những hiệu quả nào?",
        tips: "Thưa. Bí Tích Xức Dầu có những ______ này: ______, ______, ______.",
        correctAnswers: "Thưa. Bí Tích Xức Dầu có những hiệu quả này: - Một là kết hợp bệnh nhân với cuộc khổ nạn của Chúa Kitô, để sinh ích cho họ và cho Hội Thánh; - Hai là mang lại cho họ niềm an ủi và lòng can đảm, để chịu đựng những đau đớn của bệnh tật hoặc tuổi già; - Ba là tha thứ các tội lỗi đã phạm nếu chưa xưng được; - Bốn là chữa lành thân xác nếu phù hợp với ý Chúa; - Năm là chuẩn bị cho “cuộc vượt qua” sang cõi sống đời đời."
        },
        {
        question: "49. H. Bí Tích Truyền Chức Thánh là gì?",
        tips: "Thưa. Là bí tích Chúa Giê-su đã lập, để ______ ______ sứ vụ của Ngài cho các ______.",
        correctAnswers: "Thưa. Là bí tích Chúa Giê-su đã lập, để ủy thác sứ vụ của Ngài cho các Tông đồ, nhờ đó sứ vụ này tiếp tục thực thi trong Hội Thánh cho đến ngày tận thế."
        },
        {
        question: "50. H. Chúa Giê-su lập Bí Tích Truyền Chức Thánh khi nào?",
        tips: "Thưa. Chúa Giê-su lập Bí Tích Truyền Chức Thánh trong ______ ______, khi Ngài nói với các Tông đồ rằng: “______ ______ việc này mà tưởng nhớ đến Thầy.”",
        correctAnswers: "Thưa. Chúa Giê-su lập Bí Tích Truyền Chức Thánh trong Bữa Tiệc Ly, khi Ngài nói với các Tông đồ rằng: “Anh em hãy làm việc này mà tưởng nhớ đến Thầy.”"
        },
        {
        question: "51. H. Bí Tích Truyền Chức Thánh có những hiệu quả nào?",
        tips: "Thưa. Bí Tích Truyền Chức Thánh có những ______ này: ______, ______, ______.",
        correctAnswers: "Thưa. Bí Tích Truyền Chức Thánh có những hiệu quả này: - Một là ban tràn đầy Chúa Thánh Thần; - Hai là làm cho người thụ phong nên đồng hình đồng dạng với Đức Kitô trong ba chức năng tư tế, tiên tri và vương đế theo từng cấp bậc của Bí Tích Truyền Chức Thánh; - Ba là trao ban một ấn tín thiêng liêng không tẩy xóa được."
        },
        {
        question: "52. H. Bí Tích Truyền Chức Thánh gồm những cấp bậc nào?",
        tips: "Thưa. Bí Tích Truyền Chức Thánh gồm ______ cấp bậc này: ______, ______, ______.",
        correctAnswers: "Thưa. Bí Tích Truyền Chức Thánh gồm ba cấp bậc này: một là phó tế, hai là linh mục, ba là giám mục."
        },
        {
        question: "53. H. Những người lãnh Bí Tích Truyền Chức Thánh thi hành tác vụ với thẩm quyền nào?",
        tips: "Thưa. Những người lãnh Bí Tích Truyền Chức Thánh thi hành ______ với ______ không do cộng đoàn ủy thác.",
        correctAnswers: "Thưa. Những người lãnh Bí Tích Truyền Chức Thánh thi hành tác vụ với thẩm quyền không do cộng đoàn ủy thác, nhưng do Đức Kitô trao ban. Họ thi hành tác vụ trong cương vị Đức Kitô là Đầu và nhân danh Hội Thánh. Vì thế, chức tư tế thừa tác khác biệt với chức tư tế cộng đồng mà các tín hữu đã lãnh nhận khi được rửa tội."
        },
        {
        question: "54. H. Người tín hữu có bổn phận nào đối với các vị Chủ chăn của mình?",
        tips: "Thưa. Người tín hữu có bổn phận ______, ______, ______ và ______ với các vị Chủ chăn của mình.",
        correctAnswers: "Thưa. Người tín hữu có bổn phận cầu nguyện, tôn trọng, vâng lời và cộng tác với các vị Chủ chăn của mình trong việc xây dựng Hội Thánh, đồng thời giúp đỡ các ngài về cả tinh thần lẫn vật chất."
        },
        {
        question: "55. H. Bí Tích Hôn Phối là gì?",
        tips: "Thưa. Là bí tích Chúa Giê-su đã lập, để ______ hai người tín hữu ______ thành vợ chồng trước mặt ______ và ______.",
        correctAnswers: "Thưa. Là bí tích Chúa Giê-su đã lập, để kết hợp hai người tín hữu một nam một nữ thành vợ chồng trước mặt Thiên Chúa và Hội Thánh, cùng ban ân sủng để họ yêu thương nhau như Ngài đã yêu thương Hội Thánh."
        },
        {
        question: "56. H. Hôn nhân Công giáo có mục đích nào?",
        tips: "Thưa. Hôn nhân Công giáo có hai ______ này: ______ và ______.",
        correctAnswers: "Thưa. Hôn nhân Công giáo có hai mục đích này: - Một là trọn đời yêu thương nhau; - Hai là sinh sản và dưỡng dục con cái."
        },
        {
        question: "57. H. Bí Tích Hôn Phối được cử hành thế nào?",
        tips: "Thưa. Bí Tích Hôn Phối được cử hành cách ______, trước sự ______ của vị đại diện Hội Thánh.",
        correctAnswers: "Thưa. Bí Tích Hôn Phối được cử hành cách công khai, trước sự chứng kiến của vị đại diện Hội Thánh và những người làm chứng."
        },
        {
        question: "58. H. Muốn lãnh Bí Tích Hôn Phối phải có những điều kiện nào?",
        tips: "Thưa. Muốn lãnh Bí Tích Hôn Phối phải có những ______ này: ______, ______, ______, ______.",
        correctAnswers: "Thưa. Muốn lãnh Bí Tích Hôn Phối phải có những điều kiện này: - Một là đã lãnh nhận Bí Tích Rửa Tội; - Hai là không bị ngăn trở bởi luật tự nhiên và luật Hội Thánh; - Ba là hiểu biết về Bí Tích Hôn Phối và đời sống gia đình; - Bốn là có tự do kết hôn và công khai nói lên sự ưng thuận của mình theo nghi thức Hội Thánh."
        },
        {
        question: "59. H. Hiệu quả của Bí Tích Hôn Phối là gì?",
        tips: "Thưa. Bí Tích Hôn Phối tạo nên ______ ______ ______ và ______ giữa hai người phối ngẫu.",
        correctAnswers: "Thưa. Bí Tích Hôn Phối tạo nên mối dây liên kết vĩnh viễn và độc chiếm giữa hai người phối ngẫu. Vì thế hôn nhân thành sự và hoàn hợp giữa những người đã được rửa tội không bao giờ có thể tháo gỡ được. Bí Tích Hôn Phối còn ban ân sủng cần thiết để họ đạt tới sự thánh thiện trong đời sống hôn nhân."
        }
    ],
    // Section 2:  PHẦN II
    [
        {
            question: "1. H. Chủ đề mục vụ năm 2025 của Tổng Giáo Phận Hà Nội là gì?",
            tips: "Thưa. Chủ đề ______ Tổng Giáo Phận Hà Nội là “______ ______ ______ ______.”",
            correctAnswers: "Thưa. Chủ đề mục vụ năm 2025 của Tổng Giáo Phận Hà Nội là “Canh tân đời sống đức tin trong cử hành phụng vụ.”"
        },
        {
            question: "2. H. Canh tân đời sống đức tin trong cử hành phụng vụ là canh tân điều gì?",
            tips: "Thưa. Canh tân đời ______ phụng vụ là làm mới lại ______, ______ và ______, qua đó khám phá lại, ______ các cử hành phụng vụ.",
            correctAnswers: "Thưa. Canh tân đời sống đức tin trong cử hành phụng vụ là làm mới lại lòng yêu mến, tinh thần tham dự và cung cách cử hành phụng vụ, qua đó khám phá lại, bảo toàn và sống trọn vẹn những ý nghĩa xác thực và sức mạnh của các cử hành phụng vụ."
        },
        {
            question: "3. H. Tại sao cần phải canh tân đời sống đức tin trong cử hành phụng vụ?",
            tips: "Thưa. Phải canh tân ______ lý do này:- Thứ nhất vì phụng vụ là ______, là ______ trước tiên ______ với Thiên Chúa và với nhau.\n- Thứ hai vì Hội Thánh ______ ______ cách trọn vẹn, ______.\n- Thứ ba vì cần loại bỏ đi ______, ______, và ______.",
            correctAnswers: "Thưa. Phải canh tân đời sống đức tin trong cử hành phụng vụ vì những lý do này:- Thứ nhất vì phụng vụ là những mầu nhiệm thánh, là nguồn mạch trước tiên và thiết yếu để các tín hữu được thánh hóa, được hiệp thông mật thiết với Thiên Chúa và với nhau.- Thứ hai vì Hội Thánh tha thiết mong ước toàn thể các tín hữu được hướng dẫn tham dự cử hành phụng vụ cách trọn vẹn, ý thức và tích cực.- Thứ ba vì cần loại bỏ đi những cử hành cẩu thả, những lạm dụng vì thiếu hiểu biết, và thái độ tham dự khô khan nguội lạnh của nhiều tín hữu."
        }
    ],
    // Section 3:  PHẦN III
    [
        {
            question: "1. H. Năm Thánh là gì?",
            tips: "Thưa. Năm Thánh hay còn gọi là ______, là một thời kỳ ______ mở lòng để ______ và ______.",
            correctAnswers: "Thưa. Năm Thánh hay còn gọi là năm Toàn Xá, là một thời kỳ hồng ân, qua đó Thiên Chúa ban ơn đặc biệt hơn khi con người mở lòng để thống hối và canh tân. Năm Thánh là thời gian giao hoà với Thiên Chúa và anh chị em, nhằm thánh hóa cuộc sống, củng cố đức tin, tạo cơ hội thuận tiện để xây dựng tình liên đới và hiệp thông huynh đệ trong lòng Giáo Hội và thế giới, khuyến khích mọi người tuyên xưng đức tin một cách chân thành và sống động hơn nơi đức Kitô, đấng Cứu độ duy nhất của nhân loại."
        },
        {
            question: "2. H. Để mở Năm Thánh thường lệ 2025, Đức Thánh Cha Phanxicô đã ban hành tông sắc gì?",
            tips: "Thưa. Đức Thánh Cha Phanxicô đã ban hành tông sắc “______” nghĩa là “______”.",
            correctAnswers: "Thưa. Đức Thánh Cha Phanxicô đã ban hành tông sắc “Spes non Confundit” nghĩa là “Hy vọng không làm thất vọng”."
        },
        {
            question: "3. H. Năm Thánh thường lệ 2025 có khẩu hiệu là gì?",
            tips: "Thưa. Năm Thánh 2025 có khẩu hiệu là “______”.",
            correctAnswers: "Thưa. Năm Thánh 2025 có khẩu hiệu là “Những người hành hương của hy vọng”."
        },
        {
            question: "4. H. Hành hương Năm Thánh mang những ý nghĩa gì?",
            tips: "Thưa. Hành hương Năm Thánh có những ý nghĩa này:\n- Một là ______ ______h.\n- Hai là ______, biến đổi chí______.\n- Ba là ______, bước theo Đức Kitô như ______ đồng dạng với Người.",
            correctAnswers: "Thưa. Hành hương Năm Thánh có những ý nghĩa này:\n- Một là lên đường hành hương đến một nơi thánh và bước qua Cửa Thánh.\n- Hai là sống kinh nghiệm hoán cải, biến đổi chính bản thân để phù hợp với sự thánh thiện của Thiên Chúa.\n- Ba là cuộc hành trình ra khỏi chính mình, bước theo Đức Kitô như người môn đệ, để từng bước nên đồng hình đồng dạng với Người."
        }
    ]
];

// Main application state
let currentSection = 0;
let questions = questionSets[currentSection];
let currentQuestionIndex = 0;
let attemptCount = 0;
const maxAttempts = 2;
let sidebarVisible = false;

// DOM Elements
const loadingState = document.getElementById('loadingState');
const questionContent = document.getElementById('questionContent');
const questionText = document.getElementById('questionText');
const answerInput = document.getElementById('answerInput');
const checkButton = document.getElementById('checkButton');
const showAnswerButton = document.getElementById('showAnswerButton');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const feedbackArea = document.getElementById('feedbackArea');
const correctFeedback = document.getElementById('correctFeedback');
const incorrectFeedback = document.getElementById('incorrectFeedback');
const tipText = document.getElementById('tipText');
const correctAnswerText = document.getElementById('correctAnswerText');
const questionCounter = document.getElementById('questionCounter');
const progressBar = document.getElementById('progressBar');
const randomButton = document.getElementById('randomButton');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');
const resultsContainer = document.getElementById('resultsContainer');
const backToQuizButton = document.getElementById('backToQuizButton');
const quizCard = document.getElementById('quizCard');
const rulesButton = document.getElementById('rulesButton');
const rulesModal = document.getElementById('rulesModal');
const closeRulesButton = document.getElementById('closeRulesButton');
const closeRulesButtonBottom = document.getElementById('closeRulesButtonBottom');
const sectionSelector = document.getElementById('sectionSelector');
const errorMessageArea = document.getElementById('errorMessageArea');
const errorMessage = document.getElementById('errorMessage');
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggleSidebar');

// Initialize the quiz
function initQuiz() {
    // Update UI
    loadingState.classList.add('hidden');
    questionContent.classList.remove('hidden');
    updateProgressBar();
    displayQuestion(0);

    // Start countdown
    startCountdown();
}

// Display a question by index
function displayQuestion(index) {
    if (index < 0 || index >= questions.length) return;

    currentQuestionIndex = index;
    const question = questions[index];

    // Reset state
    answerInput.value = '';
    feedbackArea.classList.add('hidden');
    correctFeedback.classList.add('hidden');
    incorrectFeedback.classList.add('hidden');
    showAnswerButton.classList.add('hidden'); // Hide show answer button on new question
    hideErrorMessage(); // Hide any error messages
    attemptCount = 0;

    // Update UI
    questionText.textContent = question.question;
    questionCounter.textContent = `Câu hỏi ${index + 1} / ${questions.length}`;
    updateProgressBar();

    // Update navigation button states
    prevButton.disabled = index === 0;
    prevButton.classList.toggle('opacity-50', index === 0);
    prevButton.classList.toggle('cursor-not-allowed', index === 0);

    // Add fade-in animation
    questionText.classList.add('fade-in');
    setTimeout(() => questionText.classList.remove('fade-in'), 500);
}

// Update progress bar
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Normalize text for comparison
function normalizeText(answer) {
    return answer
      .replace(/“|”|"/g,'') // Loại bỏ dấu nháy
      .replace(/-/g,'') // Loại bỏ dấu gạch nối
      .replace(/[.,;|/?\\!@#$%^&*()_+=~`'{}\[\]:<>]/g,'') // Loại bỏ dấu chấm, phẩy và các ký tự đặc biệt
      .replace(/\s+/g,' ') // Thay thế nhiều khoảng trắng bằng một khoảng trắng
      .trim() // Cắt bỏ khoảng trắng thừa
      .toLowerCase(); // Chuyển đổi thành chữ thường
}

// Show error message
function showErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessageArea.classList.remove('hidden');
}

// Hide error message
function hideErrorMessage() {
    errorMessageArea.classList.add('hidden');
}

// Check if the answer is correct
function checkAnswer() {
    const userAnswer = answerInput.value;
    const currentQuestion = questions[currentQuestionIndex];

    if (!userAnswer.trim()) {
        showErrorMessage('Vui lòng nhập câu trả lời trước khi kiểm tra.');
        return;
    }

    // Hide error message if it was shown
    hideErrorMessage();

    attemptCount++;

    const normalizedUserAnswer = normalizeText(userAnswer);
    const normalizedCorrectAnswer = normalizeText(currentQuestion.correctAnswers);
    console.log("🚀 ~ checkAnswer ~ normalizedCorrectAnswer:", normalizedCorrectAnswer)

    feedbackArea.classList.remove('hidden');

    // Show the "Show Answer" button after checking
    showAnswerButton.classList.remove('hidden');
    showAnswerButton.classList.add('button-appear');

    if (normalizedUserAnswer === normalizedCorrectAnswer) {
        // Correct answer
        correctFeedback.classList.remove('hidden');
        incorrectFeedback.classList.add('hidden');
        correctAnswerText.textContent = currentQuestion.correctAnswers;
    } else {
        // Incorrect answer
        incorrectFeedback.classList.remove('hidden');
        correctFeedback.classList.add('hidden');
        tipText.textContent = currentQuestion.tips;

        if (attemptCount >= maxAttempts) {
            tipText.innerHTML = `${currentQuestion.tips}<br><br><strong>Đáp án đúng:</strong> ${currentQuestion.correctAnswers}`;
        }
    }
}

// Show the correct answer
function showAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    feedbackArea.classList.remove('hidden');
    correctFeedback.classList.remove('hidden');
    incorrectFeedback.classList.add('hidden');
    correctAnswerText.textContent = currentQuestion.correctAnswers;
}

// Go to next question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        displayQuestion(currentQuestionIndex + 1);
    } else {
        // Reached the end, loop back to first question
        displayQuestion(0);
    }
}

// Go to previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        displayQuestion(currentQuestionIndex - 1);
    }
}

// Go to a random question
function goToRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    displayQuestion(randomIndex);
}

// Search questions
function searchQuestions() {
    const searchTerm = normalizeText(searchInput.value);

    if (!searchTerm) {
        showErrorMessage('Vui lòng nhập từ khóa tìm kiếm.');
        return;
    }

    // Hide error message if it was shown
    hideErrorMessage();

    const results = questions.filter(q =>
        normalizeText(q.question).includes(searchTerm) ||
        normalizeText(q.correctAnswers).includes(searchTerm)
    );

    // Show search results
    questionContent.classList.add('hidden');
    searchResults.classList.remove('hidden');

    // Clear previous results
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p class="text-gray-600">Không tìm thấy kết quả.</p>';
    } else {
        results.forEach((result, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = 'p-4 bg-pastelGreenLight rounded-lg cursor-pointer hover:bg-pastelGreen transition-colors';
            resultItem.innerHTML = `<p class="font-medium">${result.question}</p>`;
            resultItem.addEventListener('click', () => {
                const questionIndex = questions.findIndex(q => q.question === result.question);
                if (questionIndex !== -1) {
                    searchResults.classList.add('hidden');
                    questionContent.classList.remove('hidden');
                    displayQuestion(questionIndex);
                }
            });
            resultsContainer.appendChild(resultItem);
        });
    }
}

// Return to quiz from search results
function backToQuiz() {
    searchResults.classList.add('hidden');
    questionContent.classList.remove('hidden');
}

// Show rules modal
function showRulesModal() {
    rulesModal.classList.remove('hidden');
    rulesModal.classList.add('fade-in');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Hide rules modal
function hideRulesModal() {
    rulesModal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
}

// Change question section
function changeSection(sectionIndex) {
    currentSection = sectionIndex;
    questions = questionSets[sectionIndex];
    currentQuestionIndex = 0;
    sectionSelector.value = sectionIndex;
    displayQuestion(0);
}

// Toggle sidebar visibility on mobile
function toggleSidebarVisibility() {
    sidebarVisible = !sidebarVisible;
    if (sidebarVisible) {
        sidebar.classList.remove('sidebar-mobile-hidden');
    } else {
        sidebar.classList.add('sidebar-mobile-hidden');
    }
}

// Start countdown timer
function startCountdown() {
    const examDate = new Date('May 25, 2025 00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = examDate - now;

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById('countdown').innerHTML = "<p class='text-red-600 font-bold'>KỲ THI ĐÃ BẮT ĐẦU!</p>";
        }
    }

    // Update the countdown every 1 second
    updateCountdown();
    const x = setInterval(updateCountdown, 1000);
}

// Event Listeners
checkButton.addEventListener('click', checkAnswer);
showAnswerButton.addEventListener('click', showAnswer);
nextButton.addEventListener('click', nextQuestion);
prevButton.addEventListener('click', prevQuestion);
randomButton.addEventListener('click', goToRandomQuestion);
searchButton.addEventListener('click', searchQuestions);
backToQuizButton.addEventListener('click', backToQuiz);
rulesButton.addEventListener('click', showRulesModal);
closeRulesButton.addEventListener('click', hideRulesModal);
closeRulesButtonBottom.addEventListener('click', hideRulesModal);
toggleSidebar.addEventListener('click', toggleSidebarVisibility);

// Section selector listener
sectionSelector.addEventListener('change', function () {
    changeSection(parseInt(this.value));
});

// Close modals when clicking outside
rulesModal.addEventListener('click', (e) => {
    if (e.target === rulesModal) {
        hideRulesModal();
    }
});

// Allow pressing Enter in search input
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchQuestions();
    }
});

// Allow pressing Enter in answer input
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        checkAnswer();
    }
});

// Start the quiz
initQuiz();
