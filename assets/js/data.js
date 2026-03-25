const CV_DATA = {
  // Thông tin cơ bản (phần Hero & Footer)
  profile: {
    name: "Trịnh Văn Mạnh",
    title: "Android Developer — 4 năm kinh nghiệm",
    location: "Hà Nội, Việt Nam",
    phone: "0889 111 300",
    email: "trinhmanhdiv@gmail.com",
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
      period: "03/2022 – 04/2026",
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
      desc: "Ứng dụng in tài liệu và hình ảnh trực tiếp từ điện thoại.",
      role: "Android Developer",
      scopeLabel: "Phạm vi phụ trách",
      scope: "Phụ trách end-to-end phía Android: từ tiếp nhận yêu cầu, phân tích sản phẩm, chốt công nghệ, thiết kế UI/UX, phát triển tính năng, tích hợp quảng cáo đến build AAB và phát hành trên Google Play.",
      challengeLabel: "Bài toán chính",
      challenge: "Xử lý PDF, hình ảnh và tích hợp printer SDK trong codebase Java + Kotlin theo kiến trúc MVP để đảm bảo luồng in ổn định và dễ dùng.",
      result: "Sản phẩm đạt 1.000.000+ lượt tải trên Google Play.",
      playLink: "https://play.google.com/store/apps/details?id=com.falcon.printerapp"
    },
    {
      name: "Voice Audio Record",
      category: "Productivity / Audio Utility",
      desc: "Ứng dụng ghi âm trên Android với khả năng khởi động nhanh, hỗ trợ nhiều định dạng và quản lý file thuận tiện.",
      role: "Android Developer",
      scopeLabel: "Phạm vi phụ trách",
      scope: "Phụ trách end-to-end phía Android: từ tiếp nhận yêu cầu, phân tích sản phẩm, chốt công nghệ, thiết kế UI/UX, phát triển tính năng, kiểm thử đến build AAB và phát hành trên Google Play.",
      challengeLabel: "Bài toán chính",
      challenge: "Xây dựng trải nghiệm ghi âm nhanh, ổn định và dễ dùng với nhiều định dạng đầu ra như M4A, WAV, 3GP; đồng thời hỗ trợ thiết lập ghi âm linh hoạt, waveform trực quan và các tính năng quản lý file như đổi tên, chia sẻ, import và bookmark.",
      techLabel: "Tech nổi bật",
      tech: "Java, Kotlin, MVP",
      result: "Sản phẩm đạt 1.000.000+ lượt tải trên Google Play.",
      playLink: "https://play.google.com/store/apps/details?id=com.fftools.audio_recorder"
    },
    {
      name: "Background Eraser - Remove BG",
      category: "AI / Photo Editing Utility",
      desc: "Ứng dụng tách nền ảnh trên Android với khả năng xử lý qua API và mô hình offline.",
      role: "Android Developer",
      scopeLabel: "Phạm vi phụ trách",
      scope: "Chịu trách nhiệm chính cho phần triển khai kỹ thuật phía Android: thiết kế và phát triển codebase theo MVVM, thiết lập Koin, tích hợp API nội bộ cho xử lý ảnh, triển khai mô hình offline pytorch và chuẩn bị phần code phục vụ quá trình đưa hệ thống lên server cùng devops.",
      challengeLabel: "Bài toán chính",
      challenge: "Tổ chức luồng xử lý tách nền theo cả hướng online và offline, cân bằng giữa chất lượng kết quả, độ ổn định và trải nghiệm sử dụng trên thiết bị di động.",
      techLabel: "Tech nổi bật",
      tech: "Kotlin, MVVM, Koin, API integration, offline model integration (u2net.ptl)",
      result: "Sản phẩm đạt 100.000+ lượt tải trên Google Play.",
      playLink: "https://play.google.com/store/apps/details?id=com.fftools.removebackground"
    },
    {
      name: "Fluid Wallpaper: Magic Fluids",
      category: "Personalization / Interactive Wallpaper",
      desc: "Ứng dụng live wallpaper tương tác trên Android với hiệu ứng chất lỏng thời gian thực.",
      role: "Android Developer",
      scopeLabel: "Phạm vi phụ trách",
      scope: "Phụ trách phát triển phía Android, bao gồm tổ chức codebase theo MVVM, sử dụng Koin cho dependency injection, xây dựng giao diện XML và triển khai các phần liên quan đến hiệu ứng đồ họa thời gian thực trong live wallpaper.",
      challengeLabel: "Bài toán chính",
      challenge: "Xử lý bài toán hiệu năng và độ mượt cho hiệu ứng chất lỏng thời gian thực, đảm bảo phản hồi thao tác tốt và duy trì trải nghiệm hiển thị ổn định trên nhiều thiết bị Android.",
      techLabel: "Tech nổi bật",
      tech: "Kotlin, MVVM, Koin, XML, real-time graphics rendering",
      result: "Sản phẩm đạt 500.000+ lượt tải trên Google Play.",
      playLink: "https://play.google.com/store/apps/details?id=com.fftools.fluidwallpaper"
    },
    {
      name: "English Japanese Translator",
      category: "Productivity / Language Utility",
      desc: "Ứng dụng dịch Anh - Nhật trên Android, hỗ trợ cả dịch online và offline để đáp ứng nhu cầu sử dụng linh hoạt.",
      role: "Android Developer",
      scopeLabel: "Phạm vi phụ trách",
      scope: "Phụ trách phát triển phía Android với kiến trúc MVVM, tổ chức dependency injection bằng Hilt/Dagger và triển khai các luồng dịch thuật phục vụ cả nhu cầu online lẫn offline.",
      challengeLabel: "Bài toán chính",
      challenge: "Xây dựng trải nghiệm dịch ổn định và dễ dùng giữa hai chế độ online và offline, trong đó online sử dụng Google Translate API còn offline sử dụng ML Kit để đảm bảo khả năng sử dụng ngay cả khi thiết bị không có kết nối mạng.",
      techLabel: "Tech nổi bật",
      tech: "MVVM, Hilt/Dagger, Google Translate API, ML Kit",
      result: "Sản phẩm đạt 500.000+ lượt tải trên Google Play.",
      playLink: "https://play.google.com/store/apps/details?id=com.bktranslator.enlishjapanese"
    },
    {
      name: "AI Trendy Photo/Video Creator",
      category: "AI / Creative Utility",
      desc: "Ứng dụng tạo ảnh và video theo xu hướng trên Android, sử dụng AI generation flow để giúp người dùng bắt trend nhanh hơn.",
      role: "Android Developer",
      scopeLabel: "Phạm vi phụ trách",
      scope: "Phát triển phía Android với kiến trúc MVVM, sử dụng Hilt cho dependency injection, tích hợp Replicate API cho luồng tạo nội dung bằng AI, đồng thời triển khai hệ thống credit và lưu trữ dữ liệu bằng Firebase để hỗ trợ cập nhật trend nhanh.",
      challengeLabel: "Bài toán chính",
      challenge: "Xây dựng trải nghiệm tạo ảnh/video bằng AI theo hướng rõ ràng và dễ dùng, đồng thời tổ chức cơ chế credit, lưu trữ ảnh và quản lý prompt/title để có thể cập nhật nội dung theo trend một cách linh hoạt.",
      techLabel: "Tech nổi bật",
      tech: "MVVM, Hilt, Replicate API, Firebase",
      result: "Sản phẩm đạt 10.000+ lượt tải trên Google Play.",
      playLink: "https://play.google.com/store/apps/details?id=com.ai.tools.trend"
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
