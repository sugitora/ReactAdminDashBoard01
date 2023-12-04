// MUI（Material-UI）から必要なコンポーネントをインポート
import { Box, useTheme } from "@mui/material";

// 地理チャートコンポーネントをインポート
import GeographyChart from "../../components/GeographyChart";

// ヘッダーコンポーネントをインポート
import Header from "../../components/Header";

// アプリケーションのカスタムテーマ設定をインポート
import { tokens } from "../../theme";

// Geographyコンポーネントの定義
const Geography = () => {
  // MUIテーマを使用
  const theme = useTheme();
  // カスタムテーマから色を取得
  const colors = tokens(theme.palette.mode);

  // コンポーネントのレンダリング
  return (
    <Box m="20px">
      {/* ヘッダーコンポーネント */}
      <Header title="Geography" subtitle="Simple Geography Chart" />

      {/* 地理チャートを表示するためのBoxコンポーネント */}
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`} // ボーダースタイル
        borderRadius="4px" // ボーダーの角丸み
      >
        <GeographyChart /> {/* 地理チャートコンポーネント */}
      </Box>
    </Box>
  );
};

export default Geography; // コンポーネントのエクスポート
