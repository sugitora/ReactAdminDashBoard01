// MUI（Material-UI）からBoxコンポーネントをインポート
import { Box } from "@mui/material";

// ヘッダーコンポーネントをインポート
import Header from "../../components/Header";

// パイチャートコンポーネントをインポート
import PieChart from "../../components/PieChart";

// Pieコンポーネントの定義
const Pie = () => {
  // コンポーネントのレンダリング
  return (
    <Box m="20px">
      {/* ヘッダーコンポーネント */}
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />

      {/* パイチャートを表示するためのBoxコンポーネント */}
      <Box height="75vh">
        <PieChart /> {/* パイチャートコンポーネント */}
      </Box>
    </Box>
  );
};

export default Pie; // コンポーネントのエクスポート

