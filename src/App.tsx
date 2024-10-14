import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { UserCircle, Briefcase, Award } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white/90 backdrop-blur-sm shadow-xl">
        <CardHeader className="text-center">
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
            <AvatarImage 
              src="https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/photo-diary-z33yol/assets/77qsl8c913fr/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-10-14_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.06.25.png" 
              alt="Park Jong-hwan" 
              className="object-cover"
            />
            <AvatarFallback>PJH</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-800">박종환 (Park Jong-hwan)</CardTitle>
          <p className="text-lg sm:text-xl text-gray-600">PR 전문가 / PR Specialist</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <section className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
              <UserCircle className="text-purple-500" />
              소개 / Introduction
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              20년차 PR 전문가로, 현재 CJ ENM에서 공연사업의 홍보와 리스크 매니지먼트를 담당하고 있습니다. 
              콘텐츠 플랫폼 TVING의 홍보 / PR을 담당하며 국내 No.1 동영상 플랫폼으로 성장 시켰습니다.
            </p>
          </section>
          
          <Separator />
          
          <section className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
              <Briefcase className="text-purple-500" />
              경력 / Career
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
              <li>TVING 전략커뮤니케이션팀 팀장</li>
              <li>CJ ENM 공연 커뮤니케이션 팀장</li>
              <li>(주)에이콤인터내셔날 팀장</li>
            </ul>
          </section>
          
          <Separator />
          
          <section className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
              <Award className="text-purple-500" />
              주요 업적 / Achievements
            </h2>
            <ul className="space-y-2">
              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <Badge variant="outline" className="text-purple-600 border-purple-600 w-fit">뮤지컬</Badge>
                <span className="text-sm sm:text-base text-gray-700">&lt;킹키부츠&gt;, &lt;브로드웨이 42번가&gt; 등의 한국 공연 홍보와 글로벌 홍보</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <Badge variant="outline" className="text-purple-600 border-purple-600 w-fit">글로벌</Badge>
                <span className="text-sm sm:text-base text-gray-700">뮤지컬 &lt;영웅&gt; 뉴욕 공연 홍보 총괄</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <Badge variant="outline" className="text-purple-600 border-purple-600 w-fit">플랫폼</Badge>
                <span className="text-sm sm:text-base text-gray-700">TVING을 국내 No.1 동영상 플랫폼으로 성장</span>
              </li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}

export default App