//nhập email

document.getElementById("submit-btn").addEventListener("click", function () {
  const emailInput = document.getElementById("email-input").value.trim(); // Xóa khoảng trắng đầu & cuối
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(emailInput)) {
    document.getElementById("error-message").textContent =
      "Email không hợp lệ!";
  } else {
    document.getElementById("error-message").textContent = ""; // Xóa thông báo lỗi
    document.getElementById("form-container").classList.add("hide"); // Ẩn form nhập email
    document.querySelector(".info-item-right").classList.remove("hide"); // Hiện thông tin cá nhân
  }
});

//Ẩn /hiện thông tin

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".box").forEach((box) => {
    const content = box.querySelector(".box-content"); // Lấy phần nội dung
    const btn = box.querySelector(".view-more-btn"); // Lấy nút View More

    if (!content || !btn) {
      console.error(
        "Không tìm thấy .box-content hoặc .view-more-btn trong",
        box
      );
      return;
    }

    function toggleContent() {
      content.classList.toggle("hide"); // Ẩn/hiện nội dung
      btn.textContent = content.classList.contains("hide")
        ? "View More"
        : "View Less";
    }

    btn.addEventListener("click", toggleContent); // Chỉ click vào nút View More/Less
  });
});
