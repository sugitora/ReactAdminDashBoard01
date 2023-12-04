// MUI（Material-UI）からBoxコンポーネントをインポート
import { Box } from "@mui/material";

// ヘッダーコンポーネントをインポート
import Header from "../../components/Header";

// バーチャートコンポーネントをインポート
import BarChart from "../../components/BarChart";

// Barコンポーネントの定義
const Bar = () => {
  return (
    // 全体のコンテナとしてBoxコンポーネントを使用
    <Box m="20px"> {/* 外側のマージンを設定 */}
      {/* ヘッダーコンポーネントの使用。タイトルとサブタイトルを指定 */}
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />

      {/* バーチャートを表示するためのBoxコンポーネント */}
      <Box height="75vh"> {/* 高さをビューポートの75%に設定 */}
        <BarChart /> {/* バーチャートコンポーネントの描画 */}
      </Box>
    </Box>
  );
};

export default Bar; // コンポーネントのエクスポート

