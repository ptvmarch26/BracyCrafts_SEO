import React from "react";

const PrivatePolicy = () => {
  const policies = [
    {
      title: "Giới thiệu",
      content:
        "Việc thu thập dữ liệu chủ yếu trên website BracyCrafts bao gồm: email, điện thoại, địa chỉ khách hàng. Đây là các thông tin mà BracyCrafts cần khách hàng cung cấp bắt buộc khi sử dụng dịch vụ và để BracyCrafts liên hệ xác nhận khi khách hàng đăng ký sử dụng dịch vụ trên website nhằm đảm bảo quyền lợi cho cho người tiêu dùng.",
    },
    {
      title: "Phạm vi sử dụng thông tin",
      content:
        "Công ty sử dụng thông tin khách hàng cung cấp để:\n\n- Cung cấp các dịch vụ đến khách hàng;\n\n- Gửi các thông báo về các hoạt động trao đổi thông tin giữa khách hàng và website BracyCrafts;\n\n- Liên lạc và giải quyết với khách hàng trong những trường hợp đặc biệt;\n\n- Không sử dụng thông tin cá nhân của khách hàng ngoài mục đích xác nhận và liên hệ có liên quan đến giao dịch tại BracyCrafts;\n\n- Trong trường hợp có yêu cầu của pháp luật: Công ty có trách nhiệm hợp tác cung cấp thông tin cá nhân khách hàng khi có yêu cầu từ cơ quan tư pháp bao gồm: Viện kiểm sát, tòa án, cơ quan công an điều tra liên quan đến hành vi vi phạm pháp luật nào đó của khách hàng. Ngoài ra, không ai có quyền xâm phạm vào thông tin cá nhân của khách hàng.",
    },
    {
      title: "Thời gian lưu trữ thông tin",
      content:
        "Dữ liệu cá nhân của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc khách hàng yêu cầu hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân khách hàng sẽ được bảo mật trên máy chủ của BracyCrafts.",
    },
    {
      title: "Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân",
      content:
        "Cửa hàng chuyên kinh doanh các sản phẩm cho mèo BracyCrafts Shop\n\n- Địa chỉ: Khu phố 6, phường Linh Trung, thành phố Thủ Đức, thành phố Hồ Chí Minh\n\n- Email: contact.bracycrafts@gmail.com\n\n- Hotline: 093 234 55 10",
    },
    {
      title:
        "Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình",
      content:
        "Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình bằng cách yêu cầu chúng tôi thực hiện việc này.\n\nKhách hàng có quyền gửi khiếu nại về người bán đến Ban quản trị của website khuyến mại BracyCrafts. Khi tiếp nhận những phản hồi này, chúng tôi sẽ xác nhận lại thông tin. Trường hợp đúng như phản ánh của thành viên tùy theo mức độ, chúng tôi sẽ có những biện pháp xử lý kịp thời.",
    },
    {
      title: "Giải quyết hậu quả do lỗi nhập sai thông tin tại BracyCrafts",
      content:
        "Thông tin cá nhân của khách hàng trên BracyCrafts được cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của BracyCrafts. Việc thu thập và sử dụng thông tin của mỗi khách hàng chỉ được thực hiện khi có sự đồng ý của khách hàng đó trừ những trường hợp pháp luật có quy định khác.\n\nKhông sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3 nào về thông tin cá nhân của khách hàng khi không có sự cho phép đồng ý từ khách hàng.\n\nTrong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân. Chúng tôi sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo cho khách hàng được biết.\n\nBảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của khách hàng bao gồm thông tin hóa đơn kế toán chứng từ số hóa trên BracyCrafts.vn\n\nBan quản lý BracyCrafts.vn yêu cầu các cá nhân khi đăng ký/mua hàng phải cung cấp đầy đủ thông tin cá nhân có liên quan như: Họ và tên, địa chỉ liên lạc, email, điện thoại và chịu trách nhiệm về tính pháp lý của những thông tin trên. Ban quản lý BracyCrafts không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của khách hàng đó nếu xét thấy tất cả thông tin cá nhân của khách hàng đó cung cấp khi đăng ký ban đầu là không chính xác.",
    },
  ];
  return (
    <div className="container mx-auto flex flex-col py-10">
      <h1 className="text-4xl pacifico font-medium text-primary text-center">
        BracyCrafts - Chính sách bảo mật thông tin
      </h1>
      <div className="flex justify-center py-7">
        <div className="h-[2px] w-[30%] bg-black"></div>
      </div>
      {policies.map((policy, index) => (
        <div key={index}>
          <h2 className="text-2xl font-bold my-2">
            {index + 1}. {policy.title}
          </h2>
          {policy.content.split("\n").map((line, i) => (
            <p key={i} className="text-gray-700 text-lg font-[400] mb-2">
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PrivatePolicy;
