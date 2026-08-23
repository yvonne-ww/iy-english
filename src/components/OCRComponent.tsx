import React, { useRef, useState } from 'react';
import { colors, spacing } from '../theme/colors';
import { Button, Card } from '../components';

interface OCRResult {
  text: string;
  confidence: number;
}

export const OCRComponent: React.FC<{ onExtractText: (text: string) => void }> = ({
  onExtractText,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedText, setExtractedText] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();
      img.onload = async () => {
        if (canvasRef.current) {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            // 模擬 OCR 處理 - 實際應使用 Tesseract.js 或 Google Vision API
            try {
              const imageData = canvas.toDataURL('image/png');
              // 這裡應該調用實際的 OCR 服務
              const mockText = 'This is extracted text from image';
              setExtractedText(mockText);
              onExtractText(mockText);
            } catch (error) {
              console.error('OCR Error:', error);
            }
          }
        }
        setIsProcessing(false);
      };
      img.src = event.target?.result as string;
    };

    reader.readAsDataURL(file);
  };

  return (
    <Card style={{ padding: spacing.lg, marginBottom: spacing.lg }}>
      <h3 style={{ color: colors.primary, marginBottom: spacing.md }}>📸 圖片文字識別 (OCR)</h3>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      <Button
        variant="primary"
        onClick={() => fileInputRef.current?.click()}
        disabled={isProcessing}
        fullWidth
        style={{ marginBottom: spacing.md }}
      >
        {isProcessing ? '處理中...' : '上傳圖片'}
      </Button>

      {extractedText && (
        <div
          style={{
            backgroundColor: colors.surface,
            padding: spacing.md,
            borderRadius: '8px',
            marginTop: spacing.md,
          }}
        >
          <p style={{ color: colors.textSecondary, fontSize: '12px', marginBottom: spacing.sm }}>識別結果：</p>
          <p style={{ color: colors.textPrimary }}>{extractedText}</p>
        </div>
      )}
    </Card>
  );
};

export default OCRComponent;
