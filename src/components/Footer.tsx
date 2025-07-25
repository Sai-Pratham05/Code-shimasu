import Link from "next/link";

function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50 mt-auto">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
  
            <span>© 2025 All Rights Reserved.</span>
          </div>
          <div className="flex justify-center items-center gap-2 text-gray-400 mb-4 md:mb-0">

          <span>Made with ❤️ By Sai Pratham | Code-shimasu</span>
        </div>
          <div className="flex items-center gap-6">
            <Link href="/support" className="text-gray-400 hover:text-gray-300 transition-colors">
              Support
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-gray-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-gray-300 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
