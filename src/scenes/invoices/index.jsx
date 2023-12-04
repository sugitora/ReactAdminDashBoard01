// MUI（Material-UI）から必要なコンポーネントをインポート
import { Box, Typography, useTheme } from "@mui/material";

// MUI Data Gridをインポート
import { DataGrid } from "@mui/x-data-grid";

// アプリケーションのカスタムテーマ設定をインポート
import { tokens } from "../../theme";

// モックデータをインポート（インボイスのデータ）
import { mockDataInvoices } from "../../data/mockData";

// ヘッダーコンポーネントをインポート
import Header from "../../components/Header";

// Invoicesコンポーネントの定義
const Invoices = () => {
  // MUIテーマを使用
  const theme = useTheme();
  // カスタムテーマから色を取得
  const colors = tokens(theme.palette.mode);

  // カラムの設定
  const columns = [
    // 各カラムの定義（ID, 名前, 電話番号, メールアドレス, 費用, 日付）
    // ...（カラム設定の詳細）
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
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
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  // コンポーネントのレンダリング
  return (
    <Box m="20px">
      {/* ヘッダーコンポーネント */}
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
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
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices; // コンポーネントのエクスポート


