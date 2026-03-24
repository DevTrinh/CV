const CV_DATA = {
  // Thông tin cơ bản (phần Hero & Footer)
  profile: {
    name: "Trịnh Văn Mạnh",
    title: "Android Developer — gần 4 năm kinh nghiệm",
    location: "Hà Nội, Việt Nam",
    phone: "0889 111 300",
    email: "trinhmanhdiv@gmail.com",
    facebook: "fb.com/trinhmanhdiv",
    tagline: "Sẵn sàng trao đổi thêm nếu có vị trí Android Developer phù hợp."
  },

  // Đoạn text giới thiệu Hero
  heroIntro: "Android Developer tập trung vào Android native với Kotlin và Java, đã tham gia phát triển nhiều ứng dụng thực tế được phát hành trên Google Play.",

  // Đoạn text phần Giới thiệu chuyên môn
  aboutParagraphs: [
    "Tôi tập trung chính vào Android native với Kotlin và Java, quen với quá trình phát triển tính năng từ lúc làm rõ yêu cầu, triển khai, kiểm thử đến phát hành và cập nhật sau đó.",
    "Trong gần 4 năm làm việc, tôi đã tham gia nhiều nhóm sản phẩm khác nhau như tools, productivity, photo/video, personalization, education và translation. Trải nghiệm này giúp tôi thích nghi khá nhanh với các bài toán người dùng khác nhau và giữ được góc nhìn sản phẩm bên cạnh phần triển khai kỹ thuật.",
    "Ngoài phần phát triển ứng dụng, tôi thường phối hợp với PM và Designer để rà soát luồng sử dụng, hoàn thiện UI/UX và trao đổi cách triển khai. Ở giai đoạn gần đây, tôi cũng có thời gian hỗ trợ một team nhỏ 3–5 người ở các đầu việc như code review, technical discussion, Git workflow và onboarding cho thành viên mới."
  ],

  // Danh sách Kỹ năng
  skills: [
    { label: "Ngôn ngữ", tags: ["Kotlin", "Java", "JNI", "C/C++"] },
    { label: "Android", tags: ["Android SDK", "Jetpack Compose", "XML Layouts", "MVVM", "MVI", "Clean Architecture"] },
    { label: "Data & Async", tags: ["Coroutines", "Flow", "Room", "DataStore", "WorkManager"] },
    { label: "Networking / DI", tags: ["Ktor", "Retrofit", "Hilt", "Dagger"] },
    { label: "Platforms", tags: ["Firebase", "AdMob", "IAP"] },
    { label: "Engineering", tags: ["Git", "Code Review", "Debugging", "Technical Planning", "Mentoring", "Product Thinking"] }
  ],

  // Thông tin kinh nghiệm làm việc (có thể thêm object nếu có nhiều công ty)
  experience: [
    {
      role: "Android Developer",
      company: "ALLSOFT CO., LTD",
      period: "04/2022 – 04/2026",
      duration: "",
      domains: ["Tools", "Productivity", "Photo/Video", "Personalization", "Education", "Translation"],
      bullets: [
        "Phát triển và duy trì nhiều ứng dụng Android trên các nhóm sản phẩm khác nhau, tham gia vào quá trình triển khai tính năng, phát hành và cập nhật sau đó.",
        "Làm việc chính với Android native bằng Kotlin/Java, xử lý UI, business logic, networking và hoàn thiện trải nghiệm sử dụng trong quá trình phát triển sản phẩm.",
        "Với một số ứng dụng, tham gia xuyên suốt ở phía Android từ lúc làm rõ phạm vi tính năng, triển khai giao diện, phát triển tính năng, kiểm thử đến phát hành trên Google Play.",
        "Phối hợp với PM và Designer để làm rõ yêu cầu, rà soát luồng sử dụng và điều chỉnh UI/UX theo mục tiêu và tệp người dùng của từng sản phẩm.",
        "Tham gia code review và trao đổi cách triển khai cho một số đầu việc, ưu tiên hướng xử lý phù hợp với codebase và dễ duy trì về sau.",
        "Ở một số giai đoạn, hỗ trợ team nhỏ 3–5 người ở Git workflow, code review và onboarding cho thành viên mới; đồng thời hướng dẫn thực tập sinh trong giai đoạn đầu."
      ]
    }
  ],

  // Danh sách dự án (thay text & thêm icon/link sau này)
  projects: [
    {
      name: "Printer App: In từ điện thoại (Falcon)",
      category: "Productivity / Printing Utility",
      desc: "Ứng dụng hỗ trợ kết nối và in tài liệu trực tiếp từ điện thoại, phục vụ nhu cầu in ảnh, PDF và các nội dung phổ biến trên thiết bị di động.",
      role: "Android Developer",
      contribution: "Tham gia xuyên suốt ở phía Android từ lúc làm rõ phạm vi tính năng, hoàn thiện giao diện, phát triển các chức năng chính, kiểm thử đến phát hành trên Google Play.",
      result: "Sản phẩm đạt 1.000.000+ lượt tải trên Google Play.",
      playLink: "https://play.google.com/store/apps/details?id=com.falcon.printerapp",
      qrImage: "assets/images/qr/falcon.png"
    },
    {
      name: "Máy ghi âm (Có khử ồn)",
      category: "Tools / Productivity",
      desc: "Ứng dụng ghi âm chất lượng cao, tích hợp lọc tiếng ồn để hỗ trợ nhu cầu học tập, họp hành và công việc hằng ngày.",
      role: "Android Developer",
      contribution: "Tham gia tương đối đầy đủ trong quá trình xây dựng ứng dụng, tập trung vào các tính năng chính liên quan đến ghi âm, hoàn thiện flow sử dụng, kiểm thử và tinh chỉnh trải nghiệm trước khi phát hành.",
      result: "Sản phẩm đạt 1.000.000+ lượt tải trên Google Play.",
      playLink: "https://play.google.com/store/apps/details?id=com.fftools.audio_recorder",
      qrImage: "assets/images/qr/audio-recorder.png"
    },
    {
      name: "Background Eraser - Remove BG",
      category: "Photography / Tools",
      desc: "Ứng dụng tự động xóa nền ảnh bằng AI, phục vụ nhu cầu làm ảnh sản phẩm cho seller online hoặc chỉnh ảnh cá nhân nhanh gọn.",
      role: "Android Developer",
      contribution: "Phối hợp với UI/UX để hoàn thiện luồng chọn ảnh, preview kết quả, chỉnh sửa và xuất ảnh; đồng thời tham gia triển khai các màn hình chính và tinh chỉnh trải nghiệm sử dụng trước khi phát hành.",
      result: "Sản phẩm đạt 100.000+ lượt tải trên Google Play.",
      playLink: "https://play.google.com/store/apps/details?id=com.fftools.removebackground",
      qrImage: "assets/images/qr/remove-bg.png"
    },
    {
      name: "Fluid Wallpaper: Magic Fluids",
      category: "Personalization",
      desc: "Ứng dụng hình nền động tương tác, hướng tới trải nghiệm thị giác sinh động và cá nhân hóa thiết bị.",
      role: "Android Developer",
      contribution: "Tham gia triển khai các màn hình chính, điều hướng và những điểm tương tác quan trọng; phối hợp với Designer để hoàn thiện visual flow và tinh chỉnh cảm giác sử dụng trước khi phát hành.",
      result: "Sản phẩm đạt 500.000+ lượt tải trên Google Play.",
      playLink: "https://play.google.com/store/apps/details?id=com.fftools.fluidwallpaper",
      qrImage: "assets/images/qr/fluid-wallpaper.png"
    },
    {
      name: "English Japanese Translator",
      category: "Education / Translation",
      desc: "Ứng dụng dịch hai chiều Anh–Nhật và hỗ trợ học từ vựng cho người lao động hoặc du học sinh tại Nhật Bản.",
      role: "Android Developer",
      contribution: "Tham gia phát triển các tính năng chính, sắp xếp lại luồng cho các tác vụ được dùng thường xuyên và tinh chỉnh giao diện để ứng dụng dễ dùng hơn với nhóm người dùng mục tiêu.",
      result: "Sản phẩm đạt 500.000+ lượt tải trên Google Play.",
      playLink: "https://play.google.com/store/apps/details?id=com.bktranslator.enlishjapanese",
      qrImage: "assets/images/qr/en-jp-translator.png"
    },
    {
      name: "AI Trendy Photo/Video Creator",
      category: "Art & Design / AI Creator Tool",
      desc: "Ứng dụng tạo ảnh và video theo xu hướng AI, hướng tới người dùng cần tạo nội dung nhanh.",
      role: "Android Developer",
      contribution: "Tham gia triển khai các flow tạo nội dung và tinh chỉnh các bước chính như chọn mẫu, tạo kết quả và xuất file để trải nghiệm sử dụng liền mạch hơn.",
      result: "Sản phẩm đạt 10.000+ lượt tải trên Google Play.",
      playLink: "https://play.google.com/store/apps/details?id=com.ai.tools.trend",
      qrImage: "assets/images/qr/ai-trendy.png"
    }
  ],

  // Học vấn (có thể thêm chứng chỉ vào mảng này)
  education: [
    {
      school: "Cao đẳng nghề Bách Khoa Hà Nội",
      status: "Công nghệ thông tin · Đã tốt nghiệp"
    }
  ],

  // Footer & Bản quyền
  footer: {
    year: "2026",
    copyrightName: "Trịnh Văn Mạnh"
  }
};
