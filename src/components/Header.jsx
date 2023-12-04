// MUI（Material-UI）ライブラリから必要なコンポーネントをインポート
import { Typography, Box, useTheme } from "@mui/material";
// アプリケーションのカスタムテーマ設定をインポート
import { tokens } from "../theme";
// Headerコンポーネントの定義。`title` と `subtitle` というプロパティを受け取る
const Header = ({ title, subtitle }) => {
  // MUIテーマを使用
  const theme = useTheme();
  // カスタムテーマから色を取得
  const colors = tokens(theme.palette.mode);

  // ヘッダーのレンダリング
  return (
    // Boxコンポーネントでコンテンツを囲む（下に30pxのマージンを設定）
    <Box mb="30px">
      {/* タイトル用のTypographyコンポーネント */}
      <Typography
        variant="h2" // フォントサイズのバリエーション
        color={colors.grey[100]} // テキストの色
        fontWeight="bold" // フォントの太さ
        sx={{ m: "0 0 5px 0" }} // スタイル（上下左右のマージン）
      >
        {title} {/* titleプロパティの内容を表示 */}
      </Typography>

      {/* サブタイトル用のTypographyコンポーネント */}
      <Typography
        variant="h5" // フォントサイズのバリエーション
        color={colors.greenAccent[400]} // テキストの色
      >
        {subtitle} {/* subtitleプロパティの内容を表示 */}
      </Typography>
    </Box>
  );
};

export default Header; // コンポーネントのエクスポート

