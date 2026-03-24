const CV_DATA = {
  // Thông tin cơ bản (phần Hero & Footer)
  profile: {
    name: "Trịnh Văn Mạnh",
    title: "Android Developer — 4 năm kinh nghiệm",
    location: "Hà Nội, Việt Nam",
    phone: "0889 111 300",
    email: "trinhmanhdiv@gmail.com",
    facebook: "fb.com/trinhmanhdiv",
    tagline: "Sẵn sàng trao đổi về cơ hội Android Developer phù hợp."
  },

  // Đoạn text giới thiệu Hero
  heroIntro: "Phát triển và phát hành ứng dụng Android thực tế trên nhiều nhóm sản phẩm. Có nền tảng vững về Android native với Kotlin và Java, quen với toàn bộ vòng đời sản phẩm — từ thiết kế kiến trúc đến release và maintain lâu dài.",

  // Đoạn text phần Giới thiệu chuyên môn
  aboutParagraphs: [
    "Android Developer với 4 năm kinh nghiệm phát triển và phát hành ứng dụng Android trong môi trường product team. Có nền tảng vững về Android native với Kotlin và Java, quen với toàn bộ vòng đời sản phẩm — từ lên kế hoạch tính năng, triển khai đến release và maintain.",
    "Đã tham gia phát triển ứng dụng trên nhiều nhóm sản phẩm khác nhau: utility app, photo editing, education và language translation. Có kinh nghiệm phối hợp với PM và Designer, tham gia technical planning, architecture discussion và feature estimation.",
    "Bên cạnh công việc kỹ thuật, từng hỗ trợ quản lý team 3–5 người — bao gồm Git workflow, code review và mentoring — đã đào tạo 2 thực tập sinh trở thành nhân sự chính thức."
  ],

  // Danh sách Kỹ năng
  skills: [
    { label: "Ngôn ngữ", tags: ["Kotlin", "Java", "JNI", "C/C++"] },
    { label: "Android", tags: ["Android SDK", "Jetpack Compose", "XML Layouts", "MVVM", "Clean Architecture"] },
    { label: "Data & Async", tags: ["Coroutines", "Flow", "Room", "DataStore", "WorkManager"] },
    { label: "Networking / DI", tags: ["Retrofit", "Hilt", "Dagger", "Firebase", "AdMob"] },
    { label: "Engineering", tags: ["Git", "Code Review", "Debugging", "Technical Planning", "Mentoring", "Product Thinking"] }
  ],

  // Thông tin kinh nghiệm làm việc (có thể thêm object nếu có nhiều công ty)
  experience: [
    {
      role: "Android Developer",
      company: "ALLSOFT CO., LTD",
      period: "04/2022 – 04/2026",
      duration: "4 năm",
      domains: ["Utility App", "Photo Editing", "Education", "Language Translation"],
      bullets: [
        "<strong>Hỗ trợ quản lý team 3–5 người</strong> — bao gồm tổ chức Git workflow, code review, góp ý kỹ thuật và theo dõi tiến độ triển khai.",
        "<strong>Tham gia trực tiếp vào architecture discussion, feature estimation và technical direction</strong> cho nhiều sản phẩm, đóng góp vào định hướng kỹ thuật chung của team.",
        "<strong>Xây dựng và vận hành ứng dụng theo hướng end-to-end</strong> — từ thiết kế tính năng, triển khai, tối ưu hiệu năng đến release và maintain sau phát hành.",
        "Phối hợp chặt chẽ với PM và Designer để hoàn thiện product flow, cải thiện UI/UX và bám sát nhu cầu thực tế của người dùng.",
        "<strong>Mentoring thực tập sinh từ mức cơ bản đến có thể làm việc độc lập</strong> — đã đào tạo 2 người trở thành nhân sự chính thức.",
        "Phát triển và duy trì nhiều ứng dụng trên các nhóm sản phẩm khác nhau, bao gồm screen translation, Plant ID, magnifier, keyboard translation và nhiều utility app khác — một số có quy mô lớn trên Google Play."
      ]
    }
  ],

  // Danh sách dự án (thay text & thêm icon/link sau này)
  projects: [
    {
      name: "Lingo Translator AI",
      category: "Language Translation",
      desc: "Ứng dụng dịch thuật giọng nói và văn bản thời gian thực hỗ trợ 100+ ngôn ngữ, kết hợp nhận diện hình ảnh qua camera.",
      role: "Android Lead",
      contribution: "Thiết kế kiến trúc Clean Architecture, tích hợp Google ML Kit & API OpenAI, tối ưu tốc độ kết xuất luồng âm thanh < 500ms.",
      result: "5M+ Downloads, rating 4.6/5 trên Google Play",
      playLink: "#",
      qrImage: "" // Điền đường dẫn tới ảnh QR (ví dụ: assets/images/qr1.png)
    },
    {
      name: "Plant Identifier & Care",
      category: "Education",
      desc: "Ứng dụng nhận dạng cây cối bằng Camera và cung cấp lịch trình tưới nước/bón phân tự động.",
      role: "Core Developer",
      contribution: "Tích hợp TensorFlow Lite model để nhận diện, tối ưu file size, quản lý local database lịch nhắc nhở bằng Room.",
      result: "Top 10 Education category, 1M+ MAU",
      playLink: "#",
      qrImage: ""
    },
    {
      name: "SnapEdit Pro",
      category: "Photo Editing",
      desc: "Công cụ chỉnh sửa ảnh chuyên nghiệp tích hợp AI xóa phông, xóa vật thể dư thừa và tự động làm nét ảnh.",
      role: "Android Developer",
      contribution: "Làm việc với JNI/C++ để xử lý lõi thuật toán xóa vật thể, tối ưu memory cache chống OOM khi load ảnh 4K.",
      result: "Tăng 40% tốc độ xử lý ảnh ẵm giải App of the month",
      playLink: "#",
      qrImage: ""
    },
    {
      name: "Pocket Magnifier",
      category: "Utility",
      desc: "Biến ống kính điện thoại thành kính lúp đọc chữ siêu nhỏ, kết hợp filter màu cho người mù màu.",
      role: "Solo Developer",
      contribution: "Owning toàn bộ project từ setup CameraX zoom logic, UI/UX đến release và phân tích Crashlytics.",
      result: "Đạt 100K Downloads organic trong 2 tháng",
      playLink: "#",
      qrImage: ""
    },
    {
      name: "Voice Recorder Plus",
      category: "Utility",
      desc: "Ứng dụng ghi âm chất lượng cao, tự động đồng bộ hóa lên Cloud và chuyển giọng nói thành văn bản.",
      role: "Android Developer",
      contribution: "Xử lý lifecycle khó của background recording service bằng WorkManager, giải quyết triệt để lỗi mất ghi âm trên các dòng máy OEM (Xiaomi, Oppo).",
      result: "Crash-free rate 99.9%, App ghi âm chủ lực của team",
      playLink: "#",
      qrImage: ""
    },
    {
      name: "Math Solver Camera",
      category: "Education",
      desc: "Quét bài toán qua camera để tìm ra lời giải từng bước cho học sinh cấp 2 & cấp 3.",
      role: "Mid Developer",
      contribution: "Kết nối server để trả realtime socket, custom view vẽ Bounding Box bao quanh công thức toán chuẩn xác và mượt mà.",
      result: "Top trending dịp Back to School 2024",
      playLink: "#",
      qrImage: ""
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
