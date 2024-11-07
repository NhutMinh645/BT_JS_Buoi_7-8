// Tắt bật các nút
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        document.querySelectorAll('.accordion-content').forEach(content => content.classList.add('hidden'));
        const content = this.nextElementSibling;
        content.classList.toggle('hidden');
    });
});


let mangSo = [];

// Gắn sự kiện cho các nút
document.getElementById("nutThemSo").onclick = themSo;
document.getElementById("nutTinhTong").onclick = tinhTongSoDuong;
document.getElementById("nutDemSoDuong").onclick = demSoDuong;
document.getElementById("nutTimSoNhoNhat").onclick = timSoNhoNhat;
document.getElementById("nutTimSoDuongNhoNhat").onclick = timSoDuongNhoNhat;
document.getElementById("nutTimSoChanCuoi").onclick = timSoChanCuoi;
document.getElementById("nutDoiCho").onclick = doiCho;
document.getElementById("nutSapXepTangDan").onclick = sapXepTangDan;
document.getElementById("nutTimSoNguyenToDauTien").onclick = timSoNguyenToDauTien;
document.getElementById("nutDemSoNguyen").onclick = demSoNguyen;
document.getElementById("nutSoSanhAmDuong").onclick = soSanhAmDuong;

// thêm số
function themSo() {
    const soNhap = document.getElementById("nhapSo");
    const giaTri = Number(soNhap.value);
    if (!isNaN(giaTri)) {
        mangSo.push(giaTri);
        hienThiMang();
    }
    soNhap.value = "";
}

function hienThiMang() {
    document.getElementById("hienThiMang").textContent = `👉${mangSo.join(", ")}`;
}

// tính tổng
function tinhTongSoDuong() {
    const tong = mangSo.filter(so => so > 0).reduce((acc, so) => acc + so, 0);
    document.getElementById("ketQuaTong").textContent = `👉Tổng các số dương: ${tong}`;
}

function demSoDuong() {
    const dem = mangSo.filter(so => so > 0).length;
    document.getElementById("ketQuaDem").textContent = `👉Số lượng số dương: ${dem}`;
}

function timSoNhoNhat() {
    const soNhoNhat = Math.min(...mangSo);
    document.getElementById("ketQuaSoNhoNhat").textContent = `👉Số nhỏ nhất: ${soNhoNhat}`;
}

function timSoDuongNhoNhat() {
    
    const mangSoDuong = [];
    for (let so of mangSo) {
        if (so > 0) {
            mangSoDuong.push(so);
        }
    }
    if (mangSoDuong.length > 0) {
        const soDuongNhoNhat = Math.min(...mangSoDuong);
        document.getElementById("ketQuaSoDuongNhoNhat").textContent = `👉Số dương nhỏ nhất: ${soDuongNhoNhat}`;
    } else {
        document.getElementById("ketQuaSoDuongNhoNhat").textContent = "👉Không có số dương trong mảng";
    }
}

function timSoChanCuoi() {
    const soChanCuoi = mangSo.slice().reverse().find(so => so % 2 === 0) ?? -1;
    document.getElementById("ketQuaSoChanCuoi").textContent = `👉Số chẵn cuối cùng: ${soChanCuoi}`;
}


function doiCho() {
    const viTri1 = parseInt(document.getElementById("viTri1").value);
    const viTri2 = parseInt(document.getElementById("viTri2").value);
    if (!isNaN(viTri1) && !isNaN(viTri2) && viTri1 < mangSo.length && viTri2 < mangSo.length) {
        [mangSo[viTri1], mangSo[viTri2]] = [mangSo[viTri2], mangSo[viTri1]];
        hienThiMang();
        document.getElementById("ketQuaDoiCho").textContent = `👉Mảng sau khi đổi: ${mangSo.join(", ")}`;
    } else {
        document.getElementById("ketQuaDoiCho").textContent = "👉Vị trí không hợp lệ";
    }
}

function sapXepTangDan() {
    mangSo.sort((a, b) => a - b);
    hienThiMang();
    document.getElementById("ketQuaSapXep").textContent = `👉Mảng sau khi sắp xếp : ${mangSo.join(", ")}`;
}

function timSoNguyenToDauTien() {
    const soNguyenToDauTien = mangSo.find(so => laSoNguyenTo(so)) ?? -1;
    document.getElementById("ketQuaSoNguyenToDauTien").textContent = `👉Số nguyên tố đầu tiên: ${soNguyenToDauTien}`;
}

function laSoNguyenTo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}


function demSoNguyen() {
    const demSoNguyen = mangSo.filter(so => Number.isInteger(so)).length;
    document.getElementById("ketQuaDemSoNguyen").textContent = `👉Số lượng số nguyên: ${demSoNguyen}`;
}

function soSanhAmDuong() {
    const soAm = mangSo.filter(so => so < 0).length;
    const soDuong = mangSo.filter(so => so > 0).length;
    const ketQua = soAm === soDuong ? "👉Số âm = số dương" : (soAm > soDuong ? "👉Số âm > Số dương" : "👉Số dương > Số âm");
    document.getElementById("ketQuaSoSanhAmDuong").textContent = ketQua;
}

