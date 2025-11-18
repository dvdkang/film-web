import { Mail, Send, Bell, Film, Music, Clapperboard } from "lucide-react";

export default function contact() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6 sm:p-8">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-8">
            <p className="text-white text-xl max-w-xl mx-auto">
              Join us on this{" "}
              <span className="text-yellow-400">cinematic journey</span>! Get
              exclusive <span className="text-pink-500">behind-the-scenes</span>{" "}
              content and updates on our musical film thesis project
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg opacity-90 rounded-3xl shadow-2xl border border-yellow-500/30 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"></div>
            <div className="p-8 sm:p-12">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-yellow-500 to-pink-500 p-3 rounded-xl animate-spin-slow">
                    <Film className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-white">Behind the Curtain</h2>
                    <p className="text-gray-400">
                      Subscribe for exclusive updates & BTS photos
                    </p>
                  </div>
                </div>
              </div>
              <form
                action="https://gmail.us11.list-manage.com/subscribe/post?u=40f436d6288f8f40bf3cf7783&id=33f162ca59&f_id=00749ce0f0"
                method="post"
                target="_blank"
                className="flex flex-col sm:flex-row gap-4"
              >
                <div className="flex-1 relative group">
                  <Bell className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400 z-10" />
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Your email address"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/50 border-2 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all font-serif"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-yellow-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 rounded-xl transition-all pointer-events-none"></div>
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 text-white rounded-xl hover:from-yellow-600 hover:via-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-pink-500/50 hover:shadow-pink-600/70 hover:scale-105 active:scale-95"
                >
                  <span>Subscribe Now</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            <div className="relative mb-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center gap-3">
                <span className="px-4 bg-gray-900 text-gray-500 flex items-center gap-2">
                  <Music className="w-4 g-4 text-pink-400" />
                  <span>or</span>
                  <Clapperboard className="w-4 h-4 text-yellow-400" />
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 via-pink-500/10 to-purple-500/10 rounded-2xl p-6 border-2 border-gray-700 hover:border-pink-500/50 transition-all hover:scale-102">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-white">Direct Contact</h2>
                  <p className="text-gray-400">
                    Reach out for collaborations & inquiries
                  </p>
                </div>
              </div>
              <a
                href="mailto:northbynorthridge.musical@gmail.com"
                className="text-pink-400 hover:text-yellow-400 transition-colors break-all text-lg hover:underline"
              >
                northbynorthridge.musical@gmail.com
              </a>
            </div>
            <div className="mt-8 text-center border-t border-gray-700 pt-6 pb-6">
              <p className="text-gray-600 mt-2">
                Your privacy is protected – we'll never share your information
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
