const Header = {
    render() {
        return /* html */`
        
        <nav class="max-w-5xl mx-auto bg-orange-500">
        
        <div class="bg-orange-400 flex justify-between ">
        <ul class="flex gap-6 px-4 py-2">
            <li><a href="" class="text-slate-50 hover:text-blue-900">Trang chủ</a></li>
            <li><a href="/about" class="text-slate-50 hover:text-blue-900">Tuyển sinh</a></li>
            <li><a href="/product" class="text-slate-50 hover:text-blue-900">Chương trình đào tạo</a></li>
            <li><a href="/sinhvien" class="text-slate-50 hover:text-blue-900">Góc sinh viên</a></li>
            <li><a href="/tuyendung" class="text-slate-50 hover:text-blue-900">Tuyển dụng</a></li>
            <li><a href="/admin" class="text-slate-50 hover:text-blue-900">Admin</a></li>
        </ul>
        
        <ul class="flex gap-6 px-4 py-2">
            <li><a href="/signin" class="text-slate-50 hover:text-blue-900">Đăng nhập</a></li>
            <li><a href="/signup" class="text-slate-50 hover:text-blue-900">Đăng ký</a></li>
        </ul>
    </div>
        </nav>`;
    },
};
export default Header;