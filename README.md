# Tap and count 1 - 20

Đây là một trò chơi giúp các bé có thể nhận diện, làm quen và đếm các số từ 1 - 20.

## Cài đặt

Sử dụng package manager [npm](https://npmjs.com) và [git]() để cài đặt và chạy trò chơi.

```bash
Clone project from github: git clone https://github.com/nhatminhk63j/counting
Install node and npm
Run script in project:
$npm install
$npm start
```

## Các công nghệ được áp dụng

```
- ReactJs (Xây dựng trang và logic game)
- Styled Component (Tạo và style nhanh các component)
- Scss/node-sass (Style css nhanh và chuẩn hơn)
- React Spring (Thư viện cung cấp để tạo các hiệu ứng nhanh và đẹp)
```
## Cách nhập dữ liệu bài mới 

- Với trò chơi chọn lựa số ( Count Select ):
```
B1: Vào file config có đường dẫn src/features/CountSelect/config.js
B2: Sửa nội dung file với các value ( số lượng tùy chọn theo số màn chơi ) theo biến games:
export const games = [
    value_1, value_2, value_3,...value_n
]
Ví dụ : 
export const games = [
    20, 16
]
```

- Với trò chơi lựa chọn số theo thứ tự 1-20 ( Count Select Button ):
```
B1: Vào file config có đường dẫn src/features/CountSelectButton/config.js
B2: Thay đổi thứ tự các số từ 1-20 trong biến arr được export ra ta sẽ được một màn chơi khác. 
export const arr = [ 1, 5, 10, 2, 7, 11, 3, 15, 17, 4, 9, 18, 6, 8, 20, 12, 19, 13, 14, 16 ]
```

- Với trò chơi kéo thả cách đọc số đúng với giá trị của nó ( Count Drag and Drop ):
```
B1: Vào file config có đường dẫn src/features/CountDragAndDrop/config.js
B2: Sửa hoặc thêm các đối tượng màn chơi vào trong biến games được export có dạng như sau:
export const games = [
    {
        question: [4, 7, 13],
        result: 7
    },
    {
        question: [1, 3, 15],
        result: 15
    },
    {
        question: [6, 13, 18],
        result: 13
    }
]
```

## Các màn chơi
Màn hình giới thiệu:
![alt text](https://res.cloudinary.com/nhatminhuet/image/upload/v1593535550/start_by7d9f.png)

Màn hình giới thiệu các số lần lượt từ 1-20:
![alt text](https://res.cloudinary.com/nhatminhuet/image/upload/v1593535570/count-intro_wqm99e.png)

Màn hình lựa chọn các vật để sao cho đủ với yêu cầu cho trước:
![alt text](https://res.cloudinary.com/nhatminhuet/image/upload/v1593535583/count-select_gtwql0.png)

Màn hình lựa chọn các số theo đúng thứ tự từ nhỏ đến lớn 1-20:
![alt text](https://res.cloudinary.com/nhatminhuet/image/upload/v1593536499/count-select-button_jxzfis.png)

Màn hình kéo thả số có cách đọc tương ứng với giá trị của nó:
![alt text](https://res.cloudinary.com/nhatminhuet/image/upload/v1593926088/Screenshot_from_2020-07-05_12-06-30_weny5i.png)
