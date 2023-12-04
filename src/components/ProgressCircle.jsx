// MUI（Material-UI）からBoxコンポーネントとテーマフックをインポート
import { Box, useTheme } from "@mui/material";

// アプリケーションのカスタムテーマ設定をインポート
import { tokens } from "../theme";

// ProgressCircleコンポーネントの定義。`progress`（進捗率）と`size`（サイズ）をプロパティとして受け取る
const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  // MUIテーマを使用
  const theme = useTheme();
  // カスタムテーマから色を取得
  const colors = tokens(theme.palette.mode);
  // 進捗率に基づいて角度を計算（360度が全進捗）
  const angle = progress * 360;

  // レンダリングするBoxコンポーネント
  return (
    <Box
      sx={{
        // 背景スタイルを設定
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%", // 円形にするためのボーダー半径
        width: `${size}px`, // 幅の設定
        height: `${size}px`, // 高さの設定
      }}
    />
  );
};

export default ProgressCircle; // コンポーネントのエクスポート

