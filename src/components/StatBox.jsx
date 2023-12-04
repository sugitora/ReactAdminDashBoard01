// MUI（Material-UI）から必要なコンポーネントをインポート
import { Box, Typography, useTheme } from "@mui/material";

// アプリケーションのカスタムテーマ設定をインポート
import { tokens } from "../theme";

// 別のコンポーネントをインポート
import ProgressCircle from "./ProgressCircle";

// StatBoxコンポーネントの定義。複数のプロパティを受け取る
const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  // MUIテーマを使用
  const theme = useTheme();
  // カスタムテーマから色を取得
  const colors = tokens(theme.palette.mode);

  // レンダリングするBoxコンポーネント
  return (
    // 全幅のBoxコンポーネント
    <Box width="100%" m="0 30px">
      {/* コンテンツを横並びにするためのBoxコンポーネント */}
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon} {/* アイコンの表示 */}
          {/* タイトル用のTypographyコンポーネント */}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title} {/* titleプロパティの内容を表示 */}
          </Typography>
        </Box>
        <Box>
          {/* 進捗状況を表示するProgressCircleコンポーネント */}
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      {/* サブタイトルと増加率を表示するためのBoxコンポーネント */}
      <Box display="flex" justifyContent="space-between" mt="2px">
        {/* サブタイトル用のTypographyコンポーネント */}
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle} {/* subtitleプロパティの内容を表示 */}
        </Typography>
        {/* 増加率用のTypographyコンポーネント */}
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase} {/* increaseプロパティの内容を表示 */}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox; // コンポーネントのエクスポート

