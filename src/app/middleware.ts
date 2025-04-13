import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Mapping từ slug cũ sang slug mới với type rõ ràng
const redirectMap: Record<string, string> = {
  "vong-tay-da-thach-anh-tim": "vong-tay-conal-pink",
  "vong-tay-da-mat-ho": "vong-tay-magenta-glow",
  "vong-tay-da-hematite": "vong-tay-underwater-world",
  "vong-tay-tram-huong": "vong-tay-midas-sea",
  "vong-tay-da-lam-ngoc": "vong-tay-red-tide",
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Nếu đang truy cập tên miền cũ
  if (url.hostname === "bracycrafts-seo.vercel.app") {
    // Thay đổi hostname và giữ nguyên pathname
    url.hostname = "bracycrafts.id.vn";
    return NextResponse.redirect(url, 301);
  }

  // Xử lý redirect sản phẩm cũ
  const path = url.pathname;
  if (path.startsWith("/product/")) {
    const segments = path.split("/");
    const slug = segments.pop() || "";

    if (slug in redirectMap) {
      url.pathname = `/product/${redirectMap[slug]}`;
      return NextResponse.redirect(url, 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/:path*", // Để bắt tất cả các URL cho redirect domain
    "/product/:slug*", // Để bắt các URL sản phẩm
  ],
};
