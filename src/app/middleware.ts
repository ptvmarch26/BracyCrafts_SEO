import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Nếu đang truy cập tên miền cũ
  if (url.hostname === 'bracycrafts-seo.vercel.app') {
    // Thay 'your-new-domain.com' bằng tên miền mới của bạn
    url.hostname = 'bracycrafts.id.vn';
    return NextResponse.redirect(url, 301);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};