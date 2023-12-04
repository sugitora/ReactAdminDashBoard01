// MUI（Material-UI）から必要なコンポーネントをインポート
import { Box, IconButton, useTheme } from "@mui/material";

// ReactのuseContextフックをインポート
import { useContext } from "react";

// アプリケーションのカスタムテーマ設定とカラーモードコンテキストをインポート
import { ColorModeContext, tokens } from "../../theme";

// MUIのInputBaseコンポーネント（入力フィールド）をインポート
import InputBase from "@mui/material/InputBase";

// MUIアイコンをインポート
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// ...（他のアイコンのインポート）
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

// Topbarコンポーネントの定義
const Topbar = () => {
  // MUIテーマとカラーモードを使用
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  // コンポーネントのレンダリング
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* 検索バー */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* アイコンボタン群 */}
      <Box display="flex">
        {/* テーマ切り替えアイコン */}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        {/* 通知、設定、ユーザープロファイルアイコン */}
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar; // コンポーネントのエクスポート

