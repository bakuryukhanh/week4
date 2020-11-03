function onSubmit() {
    const form = document.querySelector("form");
    const formData = new FormData(form);
    const first = formData.get("firstNum");
    const second = formData.get("secondNum");
    const cal = formData.get("cal");
    var noti = document.getElementById("noti");
    const data = { first: first, second, cal };
    if ((cal == null) | (first == "") | (second == "")) {
        noti.textContent = "Vui lòng nhập đủ các trường";
        return false;
    } else if (isNaN(first)) {
        noti.textContent = "Số thứ nhất không phải là số";
        return false;
    } else if (isNaN(second)) {
        noti.textContent = "Số thứ hai không phải là số";
        return false;
    }
    return true;
}
