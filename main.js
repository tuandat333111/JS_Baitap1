// Bài tập 1: Tính tiền lương nhân viên
// Mô hình 3 khối:
// 1. Nhập giá trị đầu vào:
"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let n = prompt("Nhập số ngày làm việc - n: "); //n là số ngày làm
// 2. Xử kí giá trị:
let tiennhancong=100000*n;
// 3. In kết quả:
console.log(tiennhancong);

// Bài tập 2: Tính giá trị trung bình
// Mô hình 3 khối:
// 1. Nhập giá trị đầu vào:
let n1 = prompt("Nhập số thực n1: ");
let n2 = prompt("Nhập số thực n2: ");
let n3 = prompt("Nhập số thực n3: ");
let n4 = prompt("Nhập số thực n4: ");
let n5 = prompt("Nhập số thực n5: ");
// 2. Xử kí giá trị:
let tong=n1+n2+n3+n4+n5;
let tb=tong/5;
// 3. In kết quả:
console.log(tb)

// Bài tập 3: Quy đổi tiền
// Mô hình 3 khối:
// 1. Nhập giá trị đầu vào:
let m = prompt("Nhập số USD cần đổi: ");
// 2. Xử kí giá trị:
let quydoi=23500*m;
// 3. In kết quả:
console.log(quydoi)

// Bài tập 4: Tính diện tích, chu vi hình chữ nhật
// Mô hình 3 khối:
// 1. Nhập giá trị đầu vào:
let cd = prompt("Nhập chiều dài: ");
let cr = prompt("Nhập chiều rộng: ");
// 2. Xử kí giá trị:
let chuvi=(cd+cr)*2;
let dientich=cd*cr;
// 3. In kết quả:
console.log(chuvi);
console.log(dientich);

// Bài tập 5: Tổng 2 kí số
// Mô hình 3 khối:
// 1. Nhập giá trị đầu vào:
let kiso = prompt("Nhập số có 2 chữ số: ");
// 2. Xử kí giá trị:
let kiso1=kiso/10;
let kiso2=kiso%10;
let tong2kiso=kiso1+kiso2;
// 3. In kết quả:
console.log(tong2kiso);
