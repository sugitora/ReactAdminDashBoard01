// MUI（Material-UI）からBoxコンポーネントをインポート
import { Box } from "@mui/material";

// ヘッダーコンポーネントをインポート
import Header from "../../components/Header";

// ラインチャートコンポーネントをインポート
import LineChart from "../../components/LineChart";

// Lineコンポーネントの定義
const Line = () => {
  // コンポーネントのレンダリング
  return (
    <Box m="20px">
      {/* ヘッダーコンポーネント */}
      <Header title="Line Chart" subtitle="Simple Line Chart" />

      {/* ラインチャートを表示するためのBoxコンポーネント */}
      <Box height="75vh">
        <LineChart /> {/* ラインチャートコンポーネント */}
      </Box>
    </Box>
  );
};

export default Line; // コンポーネントのエクスポート


