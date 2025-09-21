import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useAuth } from './AuthContext';
import { useWishes } from './WishesContext';
import { Heart, Send, Sparkles, Gift } from 'lucide-react';
import { toast } from 'sonner';

export function WishForm() {
  const [wishContent, setWishContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, isStudent } = useAuth();
  const { addWish } = useWishes();

  // Don't show form if user is not a student
  if (!isStudent) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!wishContent.trim() || !user) return;

    setIsSubmitting(true);
    
    try {
      // Simulate sending delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      addWish(wishContent.trim(), user.fullName, user.id);
      setWishContent('');
      toast.success('Lời chúc của bạn đã được gửi! Cảm ơn bạn đã chia sẻ 🎉', {
        description: 'Lời chúc sẽ xuất hiện trên timeline kỷ niệm 35 năm'
      });
    } catch (error) {
      toast.error('Có lỗi xảy ra khi gửi lời chúc. Vui lòng thử lại!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const suggestedWishes = [
    'Chúc mừng Khoa CNTT tròn 35 tuổi! 🎉',
    'Cảm ơn các thầy cô đã tận tình giảng dạy ❤️',
    'Tự hào là sinh viên của Khoa CNTT! 💻',
    'Chúc khoa ngày càng phát triển và thành công! 🚀'
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-university-navy rounded-full mb-6">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Gửi lời chúc mừng kỷ niệm 35 năm
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chia sẻ lời chúc và cảm nhận của bạn về hành trình 35 năm phát triển của Khoa Công nghệ Thông tin
          </p>
        </div>

        <Card className="university-shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2">
              <Sparkles className="h-6 w-6 text-university-navy" />
              <span>Viết lời chúc của bạn</span>
              <Sparkles className="h-6 w-6 text-university-navy" />
            </CardTitle>
            <CardDescription>
              Lời chúc của bạn sẽ xuất hiện dưới dạng bong bóng trên timeline kỷ niệm
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* User Info Display */}
            <div className="p-4 bg-university-navy/5 rounded-lg border border-university-navy/10">
              <div className="flex items-center space-x-2">
                <Gift className="h-5 w-5 text-university-navy" />
                <span className="font-medium text-university-navy">
                  Gửi từ: {user?.fullName}
                </span>
              </div>
            </div>

            {/* Quick Suggestions */}
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-3 block">
                Gợi ý lời chúc nhanh:
              </Label>
              <div className="flex flex-wrap gap-2">
                {suggestedWishes.map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setWishContent(suggestion)}
                    className="text-sm px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-university-navy hover:text-white transition-all duration-200 hover:border-university-navy"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Wish Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="wishContent" className="text-base font-medium">
                  Lời chúc của bạn *
                </Label>
                <Textarea
                  id="wishContent"
                  value={wishContent}
                  onChange={(e) => setWishContent(e.target.value)}
                  placeholder="Chia sẻ lời chúc, cảm nhận hoặc kỷ niệm đẹp của bạn về Khoa CNTT..."
                  rows={4}
                  maxLength={200}
                  required
                  disabled={isSubmitting}
                  className="mt-2 resize-none"
                />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-gray-500">
                    Lời chúc sẽ hiển thị công khai trên timeline kỷ niệm
                  </p>
                  <span className="text-sm text-gray-400">
                    {wishContent.length}/200
                  </span>
                </div>
              </div>

              <div className="flex justify-center pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={!wishContent.trim() || isSubmitting}
                  className="btn-university-primary min-w-40"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Gửi lời chúc
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Note */}
            <div className="text-center p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <strong>Lưu ý:</strong> Lời chúc sẽ được kiểm duyệt và hiển thị trong vòng 24 giờ. 
                Vui lòng viết những lời chúc tích cực và phù hợp.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}