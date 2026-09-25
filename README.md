# LinguaLift

Một ứng dụng học ngôn ngữ đơn giản bằng HTML, CSS và JavaScript. Ứng dụng này giúp bạn:

- Học từ vựng theo chủ đề
- Luyện flashcard bằng cách lật thẻ
- Chữa bài trắc nghiệm nhanh
- Theo dõi tiến độ học tập

## Cách chạy

### Cách 1: Mở trực tiếp

Mở file `index.html` trong trình duyệt.

### Cách 2: Dùng máy chủ tĩnh

Từ thư mục dự án, chạy:

```bash
python -m http.server 8000
```

Sau đó mở:

```text
http://localhost:8000
```

## Cấu trúc dự án

- `index.html`: giao diện chính
- `styles.css`: bố cục và giao diện
- `script.js`: logic học từ vựng và kiểm tra

## Tùy chỉnh

Bạn có thể thay đổi dữ liệu từ vựng trong `script.js` bằng cách sửa mảng `vocabulary` và `phrases`.
