// MUI（Material-UI）から必要なコンポーネントをインポート
import { Box, Typography, useTheme } from "@mui/material";

// MUI Data Gridをインポート
import { DataGrid } from "@mui/x-data-grid";

// アプリケーションのカスタムテーマ設定をインポート
import { tokens } from "../../theme";

// モックデータをインポート（チームのデータ）
import { mockDataTeam } from "../../data/mockData";

// MUIアイコンをインポート
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// ...（他のアイコンのインポート）
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
// ヘッダーコンポーネントをインポート
import Header from "../../components/Header";

// Teamコンポーネントの定義
const Team = () => {
  // MUIテーマを使用
  const theme = useTheme();
  // カスタムテーマから色を取得
  const colors = tokens(theme.palette.mode);

  // カラムの設定
  const columns = [
    // 各カラムの定義（ID, 名前, 年齢, 電話番号, メールアドレス, アクセスレベル）
    // ...（カラム設定の詳細）
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  // コンポーネントのレンダリング
  return (
    <Box m="20px">
      {/* ヘッダーコンポーネント */}
      <Header title="TEAM" subtitle="Managing the Team Members" />
      {/* データグリッドを表示するためのBoxコンポーネント */}
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          // データグリッドのスタイル設定
          // ...（スタイル設定の詳細）
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {/* データグリッドの実装 */}
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team; // コンポーネントのエクスポート




