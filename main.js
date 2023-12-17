document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('complaintForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('/submit_complaint', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // ทำอะไรก็ตามที่ต้องการเมื่อส่งข้อมูลสำเร็จ
            console.log('ส่งข้อมูลสำเร็จ:', data);
        })
        .catch(error => {
            // จัดการเมื่อเกิดข้อผิดพลาด
            console.error('เกิดข้อผิดพลาด:', error);
        });
    });
});
