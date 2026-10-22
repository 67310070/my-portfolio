// แสดงปีปัจจุบันอัตโนมัติที่ Footer
document.getElementById('year').textContent = new Date().getFullYear();

// ปุ่มทักทาย
const btnGreet = document.getElementById('btnGreet');
if (btnGreet) {
    btnGreet.addEventListener('click', () => {
        alert('สวัสดีครับ/ค่ะ! ยินดีต้อนรับเข้าสู่เว็บไซต์ Portfolio');
    });
}