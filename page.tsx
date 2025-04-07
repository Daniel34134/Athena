"use client"

import { useState } from "react"
import { FileText, ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"

export default function UploadSuccessPage() {
  const router = useRouter()
  const [progress, setProgress] = useState(100)

  return (
    <div className="flex flex-col min-h-screen bg-[url('/images/parchment-bg.jpg')] bg-cover">
      <header className="border-b border-amber-800/30 bg-amber-900/80 backdrop-blur-sm">
        <div className="container flex items-center h-16 px-4">
          <Button variant="ghost" size="icon" className="text-amber-100 mr-2" onClick={() => router.push("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-serif font-bold text-amber-100">Upload Complete</h1>
        </div>
      </header>

      <main className="flex-1 container p-4 space-y-6">
        <Card className="bg-amber-50/90 border-amber-800/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="text-center space-y-4 py-6">
              <div className="mx-auto bg-green-100 w-20 h-20 rounded-full flex items-center justify-center border border-green-500">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-serif font-semibold text-amber-900">Upload Successful</h2>
              <p className="text-amber-800/80 max-w-md mx-auto">
                Your document "Business Report.pdf" has been uploaded successfully
              </p>

              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm text-amber-800">
                  <span>Processing document</span>
                  <span>Complete</span>
                </div>
                <Progress value={progress} className="h-2 bg-amber-200" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
              <Button
                onClick={() => router.push("/translate")}
                className="bg-amber-900 hover:bg-amber-800 text-amber-50 font-serif"
              >
                Translate Document
              </Button>
              <Button
                onClick={() => router.push("/video-generate")}
                variant="outline"
                className="border-amber-800/30 text-amber-900 font-serif"
              >
                Generate Video
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-amber-50/90 border-amber-800/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-serif font-semibold text-amber-900 mb-4">Document Details</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <FileText className="h-10 w-10 text-amber-900 mt-1" />
                <div>
                  <h4 className="font-medium text-amber-900">Business Report.pdf</h4>
                  <p className="text-sm text-amber-800/70">12 pages • 2.4 MB</p>
                  <p className="text-sm text-amber-800/70 mt-1">Uploaded on March 28, 2025</p>
                </div>
              </div>

              <div className="border-t border-amber-800/20 pt-4">
                <h4 className="font-medium text-amber-900 mb-2">Document Preview</h4>
                <div className="aspect-[3/4] bg-amber-100 rounded-lg border border-amber-800/30 flex items-center justify-center">
                  <p className="text-amber-800/70 text-sm">Preview available after processing</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

