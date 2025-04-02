import React from "react";

const Term = () => {
  const terms = [
    {
      title: "Giới thiệu",
      content: `Chào mừng quý khách đến với BracyCrafts – Cửa hàng phụ kiện handmade siu xinh với thiết kế độc đáo, mang ý nghĩa đặc biệt.\n\nChúng tôi có địa chỉ giao dịch tại khu phố 6, phường Linh Trung, thành phố Thủ Đức, thành phố Hồ Chí Minh và website chính thức tại www.bracycrafts.com.\n\nKhi quý khách truy cập vào website này, điều đó đồng nghĩa với việc quý khách đồng ý với các điều khoản sử dụng dưới đây. BracyCrafts có quyền thay đổi, chỉnh sửa, bổ sung hoặc lược bỏ bất kỳ phần nào trong Điều khoản này vào bất kỳ thời điểm nào mà không cần báo trước. Việc tiếp tục sử dụng website sau khi có cập nhật đồng nghĩa với việc quý khách chấp nhận những thay đổi đó.\n\nQuý khách vui lòng kiểm tra thường xuyên để cập nhật thông tin mới nhất từ chúng tôi.`,
    },
    {
      title: "Hướng dẫn sử dụng website",
      content:
        "Khi vào web của chúng tôi, khách hàng phải đảm bảo đủ 18 tuổi, hoặc truy cập dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp. Khách hàng đảm bảo có đầy đủ hành vi dân sự để thực hiện các giao dịch mua bán hàng hóa theo quy định hiện hành của pháp luật Việt Nam.\n\nChúng tôi sẽ cấp một tài khoản (Account) sử dụng để khách hàng có thể mua sắm trên website bracycrafts.com trong khuôn khổ Điều khoản và Điều kiện sử dụng đã đề ra.\n\nQuý khách hàng sẽ phải đăng ký tài khoản với thông tin xác thực về bản thân và phải cập nhật nếu có bất kỳ thay đổi nào. Mỗi người truy cập phải có trách nhiệm với mật khẩu, tài khoản và hoạt động của mình trên web. Hơn nữa, quý khách hàng phải thông báo cho chúng tôi biết khi tài khoản bị truy cập trái phép. Chúng tôi không chịu bất kỳ trách nhiệm nào, dù trực tiếp hay gián tiếp, đối với những thiệt hại hoặc mất mát gây ra do quý khách không tuân thủ quy định.\n\nNghiêm cấm sử dụng bất kỳ phần nào của trang web này với mục đích thương mại hoặc nhân danh bất kỳ đối tác thứ ba nào nếu không được chúng tôi cho phép bằng văn bản. Nếu vi phạm bất cứ điều nào trong đây, chúng tôi sẽ hủy tài khoản của khách mà không cần báo trước.\n\nTrong suốt quá trình đăng ký, quý khách đồng ý nhận email quảng cáo từ website. Nếu không muốn tiếp tục nhận mail, quý khách có thể từ chối bằng cách nhấp vào đường link ở dưới cùng trong mọi email quảng cáo.",
    },
    {
      title: "Ý kiến của khách hàng",
      content:
        "Tất cả nội dung trang web và ý kiến phê bình của quý khách đều là tài sản của chúng tôi. Nếu chúng tôi phát hiện bất kỳ thông tin giả mạo nào, chúng tôi sẽ khóa tài khoản của quý khách ngay lập tức hoặc áp dụng các biện pháp khác theo đúng quy định của pháp luật Việt Nam.",
    },
    {
      title: "Chấp nhận đơn hàng & Giá cả",
      content:
        "BracyCrafts có quyền từ chối hoặc hủy đơn hàng vì lý do khách quan như lỗi hệ thống, sai giá sản phẩm, hoặc các trường hợp khác. Chúng tôi không chấp nhận các đơn hàng với mục đích mua số lượng lớn để kinh doanh lại.\n\nMọi thông tin giá cả đều được cập nhật chính xác, tuy nhiên nếu có sai sót, chúng tôi sẽ thông báo và hỗ trợ xử lý theo từng trường hợp cụ thể.",
    },
    {
      title: "Thay đổi hoặc hủy bỏ giao dịch tại BracyCrafts",
      content:
        "Trong mọi trường hợp, khách hàng đều có quyền chấm dứt giao dịch nếu đã thực hiện các biện pháp sau đây:\n\nThông báo cho BracyCraft về việc hủy giao dịch qua đường dây nóng (hotline) 093 234 55 10 hoặc lời ghi nhắn tại contact.bracycrafts@gmail.com.\n\nTrả lại hàng hoá đã nhận nhưng chưa sử dụng hoặc hưởng bất kỳ lợi ích nào từ hàng hóa đó.",
    },
    {
      title: "Giải quyết hậu quả do lỗi nhập sai thông tin tại BracyCrafts",
      content:
        "Khách hàng có trách nhiệm cung cấp thông tin đầy đủ và chính xác khi tham gia giao dịch tại BracyCrafts. Trong trường hợp khách hàng nhập sai thông tin và gửi vào trang thương mại điện tử bracycrafts.com, BracyCrafts có quyền từ chối thực hiện giao dịch. Ngoài ra, trong mọi trường hợp, khách hàng đều có quyền đơn phương chấm dứt giao dịch nếu đã thực hiện các biện pháp sau đây:\n\nThông báo cho BracyCrafts qua đường dây nóng 093 234 55 10 hoặc lời nhập nhắn tại địa chỉ contact.bracycrafts@gmail.com.\n\nTrả lại hàng hoá đã nhận nhưng chưa sử dụng hoặc hưởng bất kỳ lợi ích nào từ hàng hóa đó.\n\nTrong trường hợp sai thông tin phát sinh mà BracyCrafts có thể chứng minh đó là lỗi của hệ thống hoặc từ bên thứ ba (sai giá sản phẩm, sai chất liệu, …), BracyCrafts sẽ đền bù cho khách hàng một mã giảm giá cho các lần mua sắm tiếp theo với mệnh giá tùy từng trường hợp cụ thể và có quyền không thực hiện giao dịch bị lỗi.",
    },
    {
      title: "Thương hiệu và bản quyền",
      content:
        "Mọi quyền sở hữu trí tuệ (đã đăng ký hoặc chưa đăng ký), nội dung thông tin và tất cả các thiết kế, văn bản, đồ họa, phần mềm, hình ảnh, video, âm nhạc, âm thanh, biên dịch phần mềm, mã nguồn và phần mềm cơ bản đều là tài sản của chúng tôi. Toàn bộ nội dung của trang web được bảo vệ bởi luật bản quyền của Việt Nam và các công ước quốc tế. Bản quyền đã được bảo lưu.",
    },
    {
      title: "Quyền pháp lý",
      content:
        "Các điều kiện, điều khoản và nội dung của trang web này được điều chỉnh bởi luật pháp Việt Nam và Tòa án có thẩm quyền tại Việt Nam sẽ giải quyết bất kỳ tranh chấp nào phát sinh từ việc sử dụng trái phép trang web này.",
    },
    {
      title: "Quy định về bảo mật",
      content:
        "Trang web của chúng tôi coi trọng việc bảo mật thông tin và sử dụng các biện pháp tốt nhất bảo vệ thông tin và việc thanh toán của quý khách. Thông tin của quý khách trong quá trình thanh toán sẽ được mã hóa để đảm bảo an toàn. Sau khi quý khách hoàn thành quá trình đặt hàng, quý khách sẽ thoát khỏi chế độ an toàn.\n\nQuý khách không được sử dụng bất kỳ chương trình, công cụ hay hình thức nào khác để can thiệp vào hệ thống hay làm thay đổi cấu trúc dữ liệu. Trang web cũng nghiêm cấm việc phát tán, truyền bá hay cổ vũ cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm nhập vào dữ liệu của hệ thống. Cá nhân hay tổ chức vi phạm sẽ bị tước bỏ mọi quyền lợi cũng như sẽ bị truy tố trước pháp luật nếu cần thiết.\n\nMọi thông tin giao dịch sẽ được bảo mật ngoại trừ trong trường hợp cơ quan pháp luật yêu cầu.",
    },
    {
      title: "Thanh toán an toàn và tiện lợi tại BracyCrafts",
      content:
        "Người mua có thể tham khảo các phương thức thanh toán sau đây và lựa chọn áp dụng phương thức phù hợp:\n\nCách 1: Thanh toán sau (COD – giao hàng và thu tiền tận nơi):\nBước 1: Người mua tìm hiểu thông tin về sản phẩm, dịch vụ được đăng tin;\nBước 2: Người mua xác thực đơn hàng (điện thoại, tin nhắn, email);\nBước 3: BracyCrafts xác nhận thông tin Người mua;\nBước 4: BracyCrafts chuyển hàng;\nBước 5: Người mua nhận hàng và thanh toán.\n\nCách 2: Thanh toán online qua thẻ tín dụng, chuyển khoản\nBước 1: Người mua tìm hiểu thông tin về sản phẩm, dịch vụ được đăng tin;\nBước 2: BracyCrafts xác thực đơn hàng (điện thoại, tin nhắn, email);\nBước 3: BracyCrafts xác nhận thông tin Người mua;\nBước 4: Người mua thanh toán;\nBước 5: BracyCrafts chuyển hàng;\nBước 6: Người mua nhận hàng.\n\nĐối với người mua hàng từ BracyCrafts thì phải tuân thủ theo chính sách thanh toán của công ty.",
    },
    {
      title: "Đảm bảo an toàn giao dịch tại BracyCrafts",
      content:
        "Chúng tôi sử dụng các dịch vụ để bảo vệ thông tin về nội dung mà người bán đăng sản phẩm trên BracyCrafts. Để đảm bảo các giao dịch được tiến hành thành công, hạn chế tối đa rủi ro có thể phát sinh.",
    },
    {
      title: "Luật pháp và thẩm quyền tại Lãnh thổ Việt Nam",
      content:
        "Tất cả các Điều Khoản và Điều Kiện này và Hợp Đồng (và tất cả nghĩa vụ phát sinh ngoài hợp đồng hoặc có liên quan) sẽ bị chi phối và được hiểu theo luật pháp của Việt Nam. Nếu có tranh chấp phát sinh bởi các Quy định Sử dụng này, quý khách hàng có quyền gửi khiếu nại/khiếu kiện lên Tòa án có thẩm quyền tại Việt Nam để giải quyết.",
    },
  ];
  return (
    <div className="container mx-auto flex flex-col py-10">
      <h1 className="text-4xl pacifico font-medium text-primary text-center">
        BracyCrafts - Điều khoản sử dụng
      </h1>
      <div className="flex justify-center py-7">
        <div className="h-[2px] w-[30%] bg-black"></div>
      </div>
      {terms.map((term, index) => (
        <div key={index}>
          <h2 className="text-2xl font-bold my-2">
            {index + 1}. {term.title}
          </h2>
          {term.content.split("\n").map((line, i) => {
            if (line.startsWith("Cách 1") || line.startsWith("Cách 2")) {
              const parts = line.split(":");
              return (
                <p key={i} className="text-lg font-[400] mb-2">
                  <strong className="underline">{parts[0]}</strong>
                  {parts.length > 1 && `:${parts.slice(1).join(":")}`}
                </p>
              );
            }
            return (
              <p key={i} className="text-lg font-[400] mb-2">
                {line}
              </p>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Term;
