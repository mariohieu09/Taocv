Diemly = prompt("Nhập điểm Vật lý: ");
Diemhoa = prompt("Nhập điểm Hoá học: ");
Diemsinh = prompt("Nhập điểm Sinh học: ");

let Ly = parseInt(Diemly);
let Hoa = parseInt(Diemhoa);
let Sinh = parseInt(Diemsinh);
let tbc = (Ly + Hoa + Sinh)/ 3;
let Tongdiem = Ly + Hoa + Sinh;
document.write("Trung Bình Cộng 3 môn là: ", tbc);
document.write("<br>");
document.write("Tổng điểm 3 môn là:", Tongdiem);

