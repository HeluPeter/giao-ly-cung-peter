// Question-answer pairs
const originalQuestions = [
    { question: "H. Phụng vụ là gì?", answer: "Thưa. Phụng vụ là việc Hội Thánh chính thức cử hành mầu nhiệm Đức Kitô, để thờ phượng Thiên Chúa và thánh hóa con người." },
    { question: "H. Phụng vụ có vị trí nào trong Hội Thánh?", answer: "Thưa. Phụng vụ là chóp đỉnh và là nguồn mạch các hoạt động của Hội Thánh, qua đó Đức Kitô tiếp tục công trình cứu độ của Ngài." },
    { question: "H. Đức Kitô tiếp tục công trình cứu độ của Ngài trong Hội Thánh thế nào?", answer: "Thưa. Đức Kitô tiếp tục công trình cứu độ của Ngài trong Hội Thánh qua các bí tích được gọi là nhiệm cục bí tích." },
    { question: "H. Nhiệm cục bí tích là gì?", answer: "Thưa. Nhiệm cục bí tích là sự chuyển thông ơn cứu độ của Chúa qua việc Hội Thánh cử hành các bí tích, nhất là bí tích Thánh Thể." },
    { question: "H. Ai hành động trong phụng vụ?", answer: "Thưa. Chính “Đức Kitô toàn thể”, nghĩa là Đức Kitô cùng với Thân Thể của Ngài là Hội Thánh trên trời và Hội Thánh ở trần gian hành động trong phụng vụ." },
    { question: "H. Cử hành phụng vụ gồm những yếu tố nào?", answer: "Thưa. Cử hành phụng vụ gồm hai yếu tố này: - Một là các dấu chỉ và biểu tượng, để diễn tả và thực hiện hành động cứu độ của Đức Kitô; - Hai là lời nói và hành động, nhờ đó con người gặp gỡ và đối thoại với Thiên Chúa." },
    { question: "H. Ngày Chúa Nhật quan trọng thế nào trong Năm phụng vụ?", answer: "Thưa. Ngày Chúa Nhật rất quan trọng vì là “Ngày của Chúa”, ngày Chúa Phục Sinh. Vì thế, ngày Chúa Nhật là nền tảng và trung tâm của cả Năm Phụng vụ." },
    { question: "H. Năm phụng vụ là gì?", answer: "Thưa. Năm Phụng vụ là thời gian Hội Thánh cử hành các mầu nhiệm Đức Kitô, để giúp chúng ta sống những mầu nhiệm ấy, hầu chuẩn bị đón Ngài lại đến trong vinh quang." },
    { question: "H. Phụng vụ Các Giờ Kinh là gì?", answer: "Thưa. Phụng vụ Các Giờ Kinh là lời cầu nguyện của Đức Kitô cùng với Hội Thánh, để giúp các tín hữu thánh hóa thời gian trong ngày." },
    { question: "H. Bí tích là gì?", answer: "Thưa. Bí tích là dấu chỉ bên ngoài Chúa Giê-su đã lập và truyền lại cho Hội Thánh cử hành, để diễn tả và thông ban cho chúng ta ân sủng bên trong là sự sống thần linh." },
    { question: "H. Có mấy bí tích?", answer: "Thưa. Có 7 bí tích: - Một là Bí tích Rửa Tội; - Hai là Bí tích Thêm Sức; - Ba là Bí tích Thánh Thể; - Bốn là Bí tích Thống Hối; - Năm là Bí tích Xức Dầu Bệnh Nhân; - Sáu là Bí tích Truyền Chức Thánh; - Bảy là Bí tích Hôn Phối." },
    { question: "H. Các bí tích của Hội Thánh được phân loại thế nào?", answer: "Thưa. Các bí tích của Hội Thánh được phân thành ba loại này: - Một là các bí tích khai tâm Kitô giáo; - Hai là các bí tích chữa lành; - Ba là các bí tích phục vụ." },
    { question: "H. Các bí tích khai tâm Kitô Giáo gồm những bí tích nào?", answer: "Thưa. Các bí tích khai tâm Kitô giáo gồm Bí tích Rửa Tội, Thêm Sức và Thánh Thể. Các bí tích này tái sinh, củng cố và nuôi dưỡng các tín hữu trong đời sống mới." },
    { question: "H. Các bí tích chữa lành gồm những bí tích nào?", answer: "Thưa. Các bí tích chữa lành gồm Bí tích Thống Hối và Xức Dầu Bệnh Nhân. Các bí tích này phục hồi và củng cố đời sống mới của các tín hữu đã bị suy yếu hoặc mất đi do tội lỗi." },
    { question: "H. Các bí tích phục vụ gồm những bí tích nào?", answer: "Thưa. Các bí tích phục vụ gồm Bí tích Truyền Chức Thánh và Hôn Phối. Hai bí tích này đem lại ân sủng riêng cho mỗi sứ vụ đặc biệt trong Hội Thánh, để xây dựng Dân Thiên Chúa." },
    { question: "H. Ấn tín bí tích là gì?", answer: "Thưa. Ấn tín bí tích là dấu ấn thiêng liêng, Thiên Chúa in vào lòng những người lãnh Bí tích Rửa Tội, Thêm Sức, Truyền Chức Thánh, như lời hứa và bảo đảm cho sự che chở của Ngài. Vì ấn tín không thể xóa được, nên các bí tích này chỉ được lãnh một lần mà thôi." },
    { question: "Vì sao gọi là bí tích đức tin?", answer: "Thưa. Vì khi lãnh nhận bí tích, chúng ta phải có đức tin, đồng thời nhờ các bí tích, đức tin của chúng ta thêm mạnh mẽ vững vàng." },
    { question: "Ai ban ân sủng trong các bí tích?", answer: "Thưa. Chính Đức Kitô hoạt động và thông ban ân sủng trong các bí tích, nhưng ân sủng này có mang lại lợi ích hay không thì còn tùy thuộc vào sự chuẩn bị nội tâm của người lãnh nhận." },
    { question: "Vì sao các bí tích cần thiết cho ơn cứu độ?", answer: "Thưa. Vì các bí tích trao ban ân sủng của Chúa Thánh Thần, để Ngài chữa lành và biến đổi chúng ta." },
    { question: "Các bí tích giúp chúng ta sống đời sống vĩnh cửu thế nào?", answer: "Thưa. Các bí tích cho chúng ta tham dự trước vào đời sống vĩnh cửu, đang khi mong chờ ngày Đức Kitô ngự đến trong vinh quang." },
    { question: "Bí Tích Rửa Tội là gì?", answer: "Thưa. Là bí tích Chúa Giê-su đã lập, để làm cho chúng ta được sinh lại trong đời sống mới bởi nước và Thánh Thần." },
    { question: "Nghi thức chính yếu của Bí Tích Rửa Tội là gì?", answer: "Thưa. Nghi thức chính yếu của Bí Tích Rửa Tội là dìm xuống nước hay đổ nước trên đầu người lãnh bí tích và nói: “Tôi rửa anh, nhân danh Cha và Con và Thánh Thần.”" },
    { question: "Bí Tích Rửa Tội có cần thiết cho ơn cứu độ không?", answer: "Thưa. Bí Tích Rửa Tội cần thiết cho ơn cứu độ, đối với những ai đã nghe rao giảng Tin Mừng và có khả năng xin lãnh nhận bí tích này." },
    { question: "Người không lãnh nhận Bí Tích Rửa Tội có được cứu độ không?", answer: "Thưa. Người không lãnh Bí Tích Rửa Tội có thể được cứu độ trong ba trường hợp này: - Một là chết vì đức tin; - Hai là có lòng ước ao nhưng chưa có điều kiện lãnh nhận Bí Tích Rửa Tội; - Ba là chưa được biết Chúa Kitô và Hội Thánh, nhưng đã theo tiếng lương tâm mà sống ngay lành." },
    { question: "Bí Tích Rửa Tội ban cho chúng ta những ơn nào?", answer: "Thưa. Bí Tích Rửa Tội ban cho chúng ta những ơn này: - Một là được tha tội tổ tông và các tội riêng đã phạm; - Hai là được làm con cái Thiên Chúa; - Ba là được tháp nhập vào Đức Kitô và Hội Thánh; - Bốn là được ghi vào linh hồn dấu ấn thiêng liêng không bao giờ xóa được." },
    { question: "Bí Tích Thêm Sức là gì?", answer: "Thưa. Là bí tích Chúa Giê-su đã lập, để ban tràn đầy Chúa Thánh Thần, hầu giúp chúng ta sống ơn Bí Tích Rửa Tội cách mạnh mẽ và tốt đẹp hơn." },
    { question: "Nghi thức chính yếu của Bí Tích Thêm Sức là gì?", answer: "Thưa. Là việc xức dầu thánh trên trán người đã lãnh Bí Tích Rửa Tội, cùng với việc đặt tay trên đầu người ấy và đọc rằng “Hãy lãnh nhận ấn tín ơn Chúa Thánh Thần.”" },
    { question: "Hiệu quả của Bí Tích Thêm Sức là gì?", answer: "Thưa. Là việc đổ tràn Chúa Thánh Thần trên người lãnh bí tích, nhờ đó họ được ghi ấn tín không thể tẩy xóa và gia tăng ân sủng Bí Tích Rửa Tội." },
    { question: "Người muốn lãnh nhận Bí Tích Thêm Sức cần phải làm gì?", answer: "Thưa. Người lãnh Bí Tích Thêm Sức phải làm những điều này: - Một là phải sạch tội trọng; - Hai là phải học giáo lý, nhất là về Bí Tích Thêm Sức; - Ba là phải cầu nguyện sốt sắng và thật lòng ước ao lãnh nhận Chúa Thánh Thần." },
    { question: "Người lãnh Bí Tích Thêm Sức có những bổn phận nào?", answer: "Thưa. Người lãnh Bí Tích Thêm Sức có những bổn phận này: - Một là nỗ lực thi hành Lời Chúa trong đời sống thường ngày; - Hai là góp phần xây dựng xã hội theo tinh thần Tin Mừng; - Ba là tích cực giới thiệu Chúa cho mọi người." },
    { question: "Bí Tích Thánh Thể là gì?", answer: "Thưa. Là bí tích Chúa Giê-su đã lập, để tiếp tục lễ hy sinh trên Thánh giá và để ban Mình Máu Ngài, làm của ăn nuôi sống chúng ta." },
    { question: "Chúa Giê-su đã lập Bí Tích Thánh Thể thế nào?", answer: "Thưa. Khi tự nguyện nộp mình chịu khổ hình, Chúa Giê-su cầm lấy bánh, tạ ơn, bẻ ra và trao cho các môn đệ mà nói: “Tất cả các con hãy nhận lấy mà ăn: vì này là mình Thầy, sẽ bị nộp vì các con”. Cùng một thể thức ấy, sau bữa ăn tối, Người cầm lấy chén rượu, cũng tạ ơn, trao cho các môn đệ mà nói: “Tất cả các con hãy nhận lấy mà uống: vì này là chén máu Thầy, máu Giao ước mới và vĩnh cửu, sẽ đổ ra cho các con và nhiều người được tha tội: Các con hãy làm việc này mà nhớ đến Thầy.”" },
    { question: "Bí Tích Thánh Thể có ý nghĩa gì trong đời sống Kitô giáo?", answer: "Thưa. Bí Tích Thánh Thể là nguồn mạch và tột đỉnh của toàn bộ đời sống Kitô giáo, chứa đựng tất cả kho tàng thiêng liêng của Hội Thánh là chính Đức Kitô, Chiên Vượt Qua của chúng ta." },
    { question: "Hội Thánh cử hành Bí Tích Thánh Thể thế nào?", answer: "Thưa. Hội Thánh cử hành Bí Tích Thánh Thể trong Thánh lễ, gồm hai phần chính: - Một là Phụng vụ Lời Chúa, khởi đi từ lời nguyện nhập lễ cho đến hết lời nguyện chung; - Hai là Phụng vụ Thánh Thể, khởi đi từ việc chuẩn bị lễ vật cho đến hết lời nguyện hiệp lễ." },
    { question: "Hội Thánh dạy thế nào về việc rước lễ?", answer: "Thưa. Hội Thánh khuyên các tín hữu rước lễ mỗi khi tham dự Thánh lễ, và buộc rước lễ một năm ít là một lần trong mùa Phục Sinh." },
    {
        question: "H. Phải có điều kiện nào để được rước lễ?",
        answer: "Thưa. Phải có những điều kiện này: - Một là hoàn toàn thuộc về Hội Thánh Công Giáo; - Hai là ý thức mình không có tội trọng; - Ba là phải giữ chay theo quy định của Hội Thánh; - Bốn là có thái độ tôn kính Đức Kitô."
    },
    {
        question: "H. Việc rước lễ đem lại cho chúng ta những ơn ích nào?",
        answer: "Thưa. Việc rước lễ làm cho chúng ta được kết hợp mật thiết với Đức Kitô và Hội Thánh, được tẩy xóa các tội nhẹ, gia tăng ân sủng và lòng yêu mến tha nhân."
    },
    {
        question: "H. Bí Tích Thống Hối là gì?",
        answer: "Thưa. Là bí tích Chúa Giê-su đã lập, để tha các tội riêng chúng ta đã phạm từ khi lãnh Bí Tích Rửa Tội về sau, cùng giao hòa chúng ta với Thiên Chúa và Hội Thánh."
    },
    {
        question: "H. Chúa Giê-su đã lập Bí Tích Thống Hối khi nào?",
        answer: "Thưa. Chúa Giê-su đã lập Bí Tích Thống Hối khi Ngài hiện ra với các Tông đồ vào chiều ngày Phục Sinh và nói rằng: “Anh em hãy nhận lấy Thánh Thần; anh em tha tội cho ai, thì tội người ấy được tha; anh em cầm giữ ai, thì tội người ấy bị cầm giữ.”"
    },
    {
        question: "H. Bí Tích Thống Hối có những yếu tố chính yếu nào?",
        answer: "Thưa. Bí Tích Thống Hối có hai yếu tố chính yếu này: - Một là hành vi của người sám hối; - Hai là lời xá giải của linh mục."
    },
    {
        question: "H. Muốn lãnh nhận Bí Tích Thống Hối chúng ta phải làm gì?",
        answer: "Thưa. Muốn lãnh Bí Tích Thống Hối chúng ta phải làm bốn việc này: - Một là xét mình; - Hai là ăn năn và dốc lòng chừa; - Ba là xưng tội; - Bốn là đền tội."
    },
    {
        question: "H. Khi nào các tín hữu buộc phải xưng các tội trọng?",
        answer: "Thưa. Khi đến tuổi khôn, mọi tín hữu buộc phải xưng các tội trọng của mình ít nhất một năm một lần và trong mọi trường hợp, phải xưng các tội trọng trước khi rước lễ."
    },
    {
        question: "H. Bí Tích Thống Hối có những hiệu quả nào?",
        answer: "Thưa. Bí Tích Thống Hối có những hiệu quả này: - Một là tha tội để giao hòa chúng ta với Thiên Chúa và Hội Thánh; - Hai là tha hình phạt muôn đời do các tội trọng đã gây ra và tha một phần các hình phạt tạm; - Ba là ban sự bình an và gia tăng sức mạnh cho cuộc chiến đấu thiêng liêng của người Kitô hữu."
    },
    {
        question: "H. Ân xá là gì?",
        answer: "Thưa. Ân xá là việc tha thứ những hình phạt tạm đáng chịu vì những tội chúng ta đã phạm, dù những tội này đã được tha thứ."
    },
    {
        question: "H. Bí Tích Xức Dầu Bệnh Nhân là gì?",
        answer: "Thưa. Là bí tích Chúa Giê-su đã lập, để ban ơn nâng đỡ bệnh nhân và người già yếu, về phần hồn cũng như phần xác."
    },
    {
        question: "H. Ai có thể lãnh Bí Tích Xức Dầu?",
        answer: "Thưa. Mọi tín hữu khi lâm bệnh nặng, khi gặp nguy tử hoặc bị yếu liệt vì tuổi già, đều có thể lãnh Bí Tích Xức Dầu."
    },
    {
        question: "H. Bí Tích Xức Dầu được cử hành thế nào?",
        answer: "Thưa. Bí Tích Xức Dầu được cử hành qua việc xức dầu trên trán và hai lòng bàn tay, với lời nguyện xin ân sủng của bí tích này."
    },
    {
        question: "H. Bí Tích Xức Dầu có những hiệu quả nào?",
        answer: "Thưa. Bí Tích Xức Dầu có những hiệu quả này: - Một là kết hợp bệnh nhân với cuộc khổ nạn của Chúa Kitô, để sinh ích cho họ và cho Hội Thánh; - Hai là mang lại cho họ niềm an ủi và lòng can đảm, để chịu đựng những đau đớn của bệnh tật hoặc tuổi già; - Ba là tha thứ các tội lỗi đã phạm nếu chưa xưng được; - Bốn là chữa lành thân xác nếu phù hợp với ý Chúa; - Năm là chuẩn bị cho “cuộc vượt qua” sang cõi sống đời đời."
    },
    {
        question: "H. Bí Tích Truyền Chức Thánh là gì?",
        answer: "Thưa. Là bí tích Chúa Giê-su đã lập, để ủy thác sứ vụ của Ngài cho các Tông đồ, nhờ đó sứ vụ này tiếp tục thực thi trong Hội Thánh cho đến ngày tận thế."
    },
    {
        question: "H. Chúa Giê-su lập Bí Tích Truyền Chức Thánh khi nào?",
        answer: "Thưa. Chúa Giê-su lập Bí Tích Truyền Chức Thánh trong Bữa Tiệc Ly, khi Ngài nói với các Tông đồ rằng: “Anh em hãy làm việc này mà tưởng nhớ đến Thầy.”"
    },
    {
        question: "H. Bí Tích Truyền Chức Thánh có những hiệu quả nào?",
        answer: "Thưa. Bí Tích Truyền Chức Thánh có những hiệu quả này: - Một là ban tràn đầy Chúa Thánh Thần; - Hai là làm cho người thụ phong nên đồng hình đồng dạng với Đức Kitô trong ba chức năng tư tế, tiên tri và vương đế theo từng cấp bậc của Bí Tích Truyền Chức Thánh; - Ba là trao ban một ấn tín thiêng liêng không tẩy xóa được."
    },
    {
        question: "H. Bí Tích Truyền Chức Thánh gồm những cấp bậc nào?",
        answer: "Thưa. Bí Tích Truyền Chức Thánh gồm ba cấp bậc này: một là phó tế, hai là linh mục, ba là giám mục."
    },
    {
        question: "H. Những người lãnh Bí Tích Truyền Chức Thánh thi hành tác vụ với thẩm quyền nào?",
        answer: "Thưa. Những người lãnh Bí Tích Truyền Chức Thánh thi hành tác vụ với thẩm quyền không do cộng đoàn ủy thác, nhưng do Đức Kitô trao ban. Họ thi hành tác vụ trong cương vị Đức Kitô là Đầu và nhân danh Hội Thánh. Vì thế, chức tư tế thừa tác khác biệt với chức tư tế cộng đồng mà các tín hữu đã lãnh nhận khi được rửa tội."
    },
    {
        question: "H. Người tín hữu có bổn phận nào đối với các vị Chủ chăn của mình?",
        answer: "Thưa. Người tín hữu có bổn phận cầu nguyện, tôn trọng, vâng lời và cộng tác với các vị Chủ chăn của mình trong việc xây dựng Hội Thánh, đồng thời giúp đỡ các ngài về cả tinh thần lẫn vật chất."
    },
    {
        question: "H. Bí Tích Hôn Phối là gì?",
        answer: "Thưa. Là bí tích Chúa Giê-su đã lập, để kết hợp hai người tín hữu một nam một nữ thành vợ chồng trước mặt Thiên Chúa và Hội Thánh, cùng ban ân sủng để họ yêu thương nhau như Ngài đã yêu thương Hội Thánh."
    },
    {
        question: "H. Hôn nhân Công giáo có mục đích nào?",
        answer: "Thưa. Hôn nhân Công giáo có hai mục đích này: - Một là trọn đời yêu thương nhau; - Hai là sinh sản và dưỡng dục con cái."
    },
    {
        question: "H. Bí Tích Hôn Phối được cử hành thế nào?",
        answer: "Thưa. Bí Tích Hôn Phối được cử hành cách công khai, trước sự chứng kiến của vị đại diện Hội Thánh và những người làm chứng."
    },
    {
        question: "H. Muốn lãnh Bí Tích Hôn Phối phải có những điều kiện nào?",
        answer: "Thưa. Muốn lãnh Bí Tích Hôn Phối phải có những điều kiện này: - Một là đã lãnh nhận Bí Tích Rửa Tội; - Hai là không bị ngăn trở bởi luật tự nhiên và luật Hội Thánh; - Ba là hiểu biết về Bí Tích Hôn Phối và đời sống gia đình; - Bốn là có tự do kết hôn và công khai nói lên sự ưng thuận của mình theo nghi thức Hội Thánh."
    },
    {
        question: "H. Hiệu quả của Bí Tích Hôn Phối là gì?",
        answer: "Thưa. Bí Tích Hôn Phối tạo nên mối dây liên kết vĩnh viễn và độc chiếm giữa hai người phối ngẫu. Vì thế hôn nhân thành sự và hoàn hợp giữa những người đã được rửa tội không bao giờ có thể tháo gỡ được. Bí Tích Hôn Phối còn ban ân sủng cần thiết để họ đạt tới sự thánh thiện trong đời sống hôn nhân."
    },
    {
        question: "H. Chủ đề mục vụ năm 2025 của Tổng Giáo Phận Hà Nội là gì?",
        answer: "Thưa. Chủ đề mục vụ năm 2025 của Tổng Giáo Phận Hà Nội là “Canh tân đời sống đức tin trong cử hành phụng vụ.”"
    },
    {
        question: "H. Canh tân đời sống đức tin trong cử hành phụng vụ là canh tân điều gì?",
        answer: "Thưa. Canh tân đời sống đức tin trong cử hành phụng vụ là làm mới lại lòng yêu mến, tinh thần tham dự và cung cách cử hành phụng vụ, qua đó khám phá lại, bảo toàn và sống trọn vẹn những ý nghĩa xác thực và sức mạnh của các cử hành phụng vụ."
    },
    {
        question: "H. Tại sao cần phải canh tân đời sống đức tin trong cử hành phụng vụ?",
        answer: "Thưa. Phải canh tân đời sống đức tin trong cử hành phụng vụ vì những lý do này:- Thứ nhất vì phụng vụ là những mầu nhiệm thánh, là nguồn mạch trước tiên và thiết yếu để các tín hữu được thánh hóa, được hiệp thông mật thiết với Thiên Chúa và với nhau.- Thứ hai vì Hội Thánh tha thiết mong ước toàn thể các tín hữu được hướng dẫn tham dự cử hành phụng vụ cách trọn vẹn, ý thức và tích cực.- Thứ ba vì cần loại bỏ đi những cử hành cẩu thả, những lạm dụng vì thiếu hiểu biết, và thái độ tham dự khô khan nguội lạnh của nhiều tín hữu."
    },
    {
        question: "H. Những ai được mời gọi phải canh tân đời sống đức tin trong cử hành phụng vụ?",
        answer: "Thưa. Toàn thể các tín hữu, những người đã chịu phép rửa tội, đã trở nên dòng dõi ưu tuyển, hàng tư tế vương giả, dân tộc thánh thiện, và đoàn dân được tuyển chọn (x. 1 Pr 2,9), được mời gọi phải không ngừng canh tân chính mình, để tham dự và cử hành phụng vụ cách trọn vẹn, ý thức, và hiệu quả."
    },
    {
        question: "H. Các thừa tác viên chức thánh cần làm gì để canh tân đời sống đức tin trong cử hành phụng vụ?",
        answer: "Thưa. Các thừa tác viên chức thánh, nhất là các mục tử chăn dắt các linh hồn, cần phải làm những điều này:- Một là thấm nhuần sâu đậm tinh thần và năng lực của phụng vụ, và trở nên thầy dạy trong lãnh vực này.- Hai là luôn cử hành cách sốt sắng và trung thành các mầu nhiệm của Đức Kitô, đặc biệt là hy tế Thánh Thể theo đúng tinh thần và luật phụng vụ của Hội Thánh.- Ba là chú trọng và kiên tâm thực hiện việc giảng dạy về phụng vụ cho các tín hữu, giúp họ tham dự phụng vụ tích cực cả bề trong lẫn bề ngoài."
    },
    {
        question: "H. Các tín hữu giáo dân cần phải làm gì để canh tân đời sống đức tin trong cử hành phụng vụ?",
        answer: "Thưa. Các tín hữu giáo dân cần phải thực hiện những điều này:- Một là siêng năng tham dự phụng vụ, nhất là tham dự Thánh Lễ cách trọn vẹn, ý thức và hiệu quả.- Hai là chăm chỉ học hỏi về phụng vụ và trong phụng vụ.- Ba là dập khuôn đời sống đức tin theo phụng vụ, sống tình bác ái và dấn thân loan báo Tin Mừng."
    },
    {
        question: "H. Làm thế nào để tham dự phụng vụ cách đích thực và trọn vẹn?",
        answer: "Thưa. Tham dự phụng vụ cách đích thực và trọn vẹn là thực hiện những điều này:- Một là đến tham dự phụng vụ với thái độ sẵn sàng, chủ động, và hoà hợp cộng tác với ân sủng của mầu nhiệm thánh.- Hai là tham dự toàn vẹn cả tâm hồn và thể xác qua các cử chỉ, tư thế, hành động, lời đối đáp tung hô ca hát, và với sự thinh lặng cần thiết.- Ba là chăm chú lắng nghe Lời Chúa, tập dâng hiến chính mình hợp với hy lễ Chúa Kitô, rước lễ và sống hiệp thông trọn vẹn với Thiên Chúa và với nhau.- Bốn là tham dự vào sứ vụ bác ái và truyền giáo sau cử hành phụng vụ."
    },
    {
        question: "H. Các thừa tác viên như giúp lễ, đọc sách, dẫn lễ, và các ca viên cần phải làm gì để tham dự phụng vụ được trọn vẹn?",
        answer: "Thưa. Các thừa tác viên như giúp lễ, đọc sách, dẫn lễ, ca viên là đang thực hiện một thừa tác vụ đích thực trong phụng vụ. Để được trọn vẹn, họ cần thực hiện những điều này:- Một là thi hành trọn vẹn và chỉ thi hành những gì thuộc lãnh vực mình tuỳ theo bản chất sự việc và những quy tắc phụng vụ.- Hai là thi hành phận vụ với lòng đạo đức chân thành và nghiêm túc.- Ba là phải thấm nhuần tinh thần phụng vụ, chăm chỉ học hỏi và rèn luyện để chu toàn các phần việc của mình theo đúng nghi thức và quy định."
    },
    {
        question: "H. Để tăng thêm sự hiểu biết và yêu mến phụng vụ, người tín hữu cần làm những gì?",
        answer: "Thưa. Người tín hữu cần làm những điều này:- Một là tham dự phụng vụ với thái độ ngỡ ngàng thán phục trước các mầu nhiệm được cử hành.- Hai là đào sâu khám phá vẻ đẹp của phụng vụ, nhất là ý nghĩa của ngôn ngữ biểu tượng trong phụng vụ.- Ba là chú tâm đến nghệ thuật cử hành, đến vẻ đẹp của chân lý, đến tính năng động và cách thức Chúa Thánh Thần tác động trong mỗi cử hành phụng vụ."
    },
    {
        question: "H. Để nuôi dưỡng ý thức về sự thánh thiêng và cảm nhận nét đẹp của phụng vụ, cần phải loại bỏ những cung cách cử hành và thói quen tham dự phụng vụ nào?",
        answer: "Thưa. Để nuôi dưỡng ý thức về sự thánh thiêng và cảm nhận nét đẹp của phụng vụ, cần loại bỏ những thiếu sót này:- Một là cử hành phụng vụ cách cẩu thả, thiếu sự chuẩn bị, có thái độ kiêu ngạo lấy mình làm trung tâm, hoặc không tuân theo những nguyên tắc của phụng vụ.- Hai là tham dự phụng vụ như những khách bàng quan và câm lặng, dửng dưng bên ngoài, sử dụng điện thoại, hoặc nói chuyện riêng trong giờ phụng vụ.- Ba là thái độ đi lễ chỉ vì sợ tội, sợ dư luận, hoặc chỉ để cầu lợi cầu may mà thôi."
    },
    {
        question: "H. Năm Thánh là gì?",
        answer: "Thưa. Năm Thánh hay còn gọi là năm Toàn Xá, là một thời kỳ hồng ân, qua đó Thiên Chúa ban ơn đặc biệt hơn khi con người mở lòng để thống hối và canh tân. Năm Thánh là thời gian giao hoà với Thiên Chúa và anh chị em, nhằm thánh hóa cuộc sống, củng cố đức tin, tạo cơ hội thuận tiện để xây dựng tình liên đới và hiệp thông huynh đệ trong lòng Giáo Hội và thế giới, khuyến khích mọi người tuyên xưng đức tin một cách chân thành và sống động hơn nơi đức Kitô, đấng Cứu độ duy nhất của nhân loại."
    },
    {
        question: "H. Để mở Năm Thánh thường lệ 2025, Đức Thánh Cha Phanxicô đã ban hành tông sắc gì?",
        answer: "Thưa. Đức Thánh Cha Phanxicô đã ban hành tông sắc “Spes non Confundit” nghĩa là “Hy vọng không làm thất vọng”."
    },
    {
        question: "H. Năm Thánh thường lệ 2025 có khẩu hiệu là gì?",
        answer: "Thưa. Năm Thánh 2025 có khẩu hiệu là “Những người hành hương của hy vọng”."
    },
    {
        question: "H. Hành hương Năm Thánh mang những ý nghĩa gì?",
        answer: "Thưa. Hành hương Năm Thánh có những ý nghĩa này:- Một là lên đường hành hương đến một nơi thánh và bước qua Cửa Thánh.- Hai là sống kinh nghiệm hoán cải, biến đổi chính bản thân để phù hợp với sự thánh thiện của Thiên Chúa.- Ba là cuộc hành trình ra khỏi chính mình, bước theo Đức Kitô như người môn đệ, để từng bước nên đồng hình đồng dạng với Người."
    },
    {
        question: "H. Hy vọng Kitô giáo có những đặc tính nào?",
        answer: "Thưa. Hy vọng Kitô giáo có những đặc tính này:- Một là hy vọng phát sinh từ trái tim bị đâm thâu của Chúa Giê su trên thập giá.- Hai là hy vọng không lừa dối cũng không làm thất vọng.- Ba là hy vọng như cái neo chắc chắn và bền vững của tâm hồn, thả sâu vào nơi Chúa Giê su đã vào như người tiền phong mở đường cho chúng ta (x. Dt 6,19-20; GLHTCG 1820).- Bốn là hy vọng đặt trên nền tảng đức tin và được nuôi dưỡng bằng đức ái, bằng tình yêu Thiên Chúa.- Năm là hy vọng hướng về cùng đích là hạnh phúc vĩnh cửu trong hiệp thông trọn vẹn với Thiên Chúa."
    },
    {
        question: "H. Bởi đâu mà hy vọng Kitô giáo không lừa dối cũng không làm thất vọng?",
        answer: "Thưa. Hy vọng Kitô giáo không lừa dối cũng không làm thất vọng vì nó dựa trên tình yêu vô điều kiện mà Thiên Chúa đã đổ vào lòng chúng ta, nhờ Thánh Thần mà Người ban cho chúng ta (x. Rm 5,5), giúp chúng ta xác tín rằng không có gì và không ai có thể tách chúng ta ra khỏi tình yêu của Thiên Chúa (x. Rm 8,35-39)."
    },
    {
        question: "H. Người tín hữu cần làm gì để trở nên người hành hương của hy vọng?",
        answer: "Thưa. Để trở nên người hành hương của hy vọng, người tín hữu làm những điều này:- Một là kín múc niềm hy vọng nơi ân sủng của Thiên Chúa qua cuộc gặp gỡ sống động thân tình với Đức Ki tô, như đi hành hương, sống kiên nhẫn, ẩn náu nơi Thiên Chúa qua cầu nguyện và cử hành phụng vụ, nhất là qua bí tích Hòa Giải và lãnh nhận Ân Xá.- Hai là khám phá lại niềm hy vọng qua những dấu chỉ của thời đại, nhất là lưu tâm tới những điều thiện hảo trên thế giới.- Ba là sống chứng nhân và trở nên dấu chỉ của hy vọng cho con người trong thế giới hôm nay."
    },
    {
        question: "H. Đức Thánh Cha Phan xi cô gợi mở những gì cần thực hiện để là dấu chỉ hy vọng cho thế giới hôm nay?",
        answer: "Thưa. Để là dấu chỉ hy vọng cho thế giới hôm nay, Đức Thánh Cha Phan xi cô đã gợi mở những điều này:- Một là dấn thân xây dựng hòa bình trên thế giới.- Hai là có lòng nhiệt thành với cuộc sống và sẵn sàng chia sẻ cuộc sống qua việc sinh thêm nhiều con cái và tìm lại niềm vui sống vì được tạo dựng theo hình ảnh Thiên Chúa.- Ba là biểu lộ sự gần gũi với các tù nhân, kêu gọi ân xá và giảm án, bãi bỏ án tử hình và giúp tù nhân tái hòa nhập cộng đồng.- Bốn là xoa dịu những đau khổ cho bệnh nhân bằng cách thăm nom trong tình yêu thương và sự gần gũi.- Năm là truyền cảm hứng cho giới trẻ, gần gũi và đồng hành với họ.- Sáu là mở rộng vòng tay đón nhận người di cư và tị nạn, sẵn sàng bảo vệ quyền lợi của những người yếu thế nhất.- Bảy là trân trọng và nâng đỡ người cao tuổi.- Tám là mang lại niềm hy vọng cho người nghèo, lập quỹ toàn cầu để triệt để xóa bỏ nạn đói, giúp cho nước nghèo phát triển, xóa nợ và tôn trọng môi sinh."
    },
    {
        question: "H. Trở nên dấu chỉ hy vọng là trách nhiệm và bổn phận của ai?",
        answer: "Thưa. Tất cả những người đã được Rửa tội, mỗi người với đặc sủng và nhiệm vụ của mình, đều có trách nhiệm trở nên những dấu chỉ hy vọng minh chứng cho sự hiện diện của Thiên Chúa giữa lòng thế giới."
    },
    {
        question: "H. Người tín hữu chứng minh về đức tin và đức mến trong lòng mình bằng cách nào?",
        answer: "Thưa. Người tín hữu chứng minh về đức tin và đức mến trong lòng mình bằng cách sống tràn đầy niềm hy vọng, để có thể trao đi dù chỉ là một nụ cười, một cử chỉ thân tình, một cái nhìn huynh đệ, một sự lắng nghe chân thành, một sự phục vụ vô vị lợi, vì biết rằng, trong Thần Khí của Chúa Giê su, điều này có thể trở thành hạt giống trổ sinh hy vọng nơi những ai đón nhận."
    }
];

// Working copy of questions
let remainingQuestions = [...originalQuestions];

// DOM elements
const questionCard = document.getElementById('question-card');
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const randomBtn = document.getElementById('random-btn');
const restartBtn = document.getElementById('restart-btn');
const statusMessage = document.getElementById('status-message');

// Initialize
function init() {
    questionText.textContent = "Click 'Random Question' to begin your journey.";
    answerText.textContent = "";
    statusMessage.textContent = `${remainingQuestions.length} câu còn lại nhé`;
    randomBtn.disabled = false;
    randomBtn.classList.remove('opacity-50', 'cursor-not-allowed');
}

// Show a random question
function showRandomQuestion() {
    if (remainingQuestions.length === 0) {
        statusMessage.textContent = "No more questions! Click 'Restart' to begin again.";
        randomBtn.disabled = true;
        randomBtn.classList.add('opacity-50', 'cursor-not-allowed');
        return;
    }

    // Fade out
    questionCard.classList.remove('fade-in');
    questionCard.classList.add('fade-out');

    setTimeout(() => {
        // Select random question
        const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
        const selectedQuestion = remainingQuestions[randomIndex];

        // Remove from remaining questions
        remainingQuestions.splice(randomIndex, 1);

        // Update content
        questionText.textContent = `"${selectedQuestion.question}"`;
        answerText.textContent = `→ ${selectedQuestion.answer}`;
        statusMessage.textContent = `${remainingQuestions.length} câu còn lại ^^`;

        // Fade in
        questionCard.classList.remove('fade-out');
        questionCard.classList.add('fade-in');
    }, 500);
}

// Restart
function restart() {
    // Fade out
    questionCard.classList.remove('fade-in');
    questionCard.classList.add('fade-out');

    setTimeout(() => {
        // Reset questions
        remainingQuestions = [...originalQuestions];

        // Initialize
        init();

        // Fade in
        questionCard.classList.remove('fade-out');
        questionCard.classList.add('fade-in');
    }, 500);
}

// Event listeners
randomBtn.addEventListener('click', showRandomQuestion);
restartBtn.addEventListener('click', restart);

// Initialize on load
init();
