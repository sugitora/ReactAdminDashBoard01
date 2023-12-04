// MUI（Material-UI）からBoxコンポーネントをインポート
import { Box } from "@mui/material";

// MUI Data Gridとそのツールバーをインポート
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// アプリケーションのカスタムテーマ設定をインポート
import { tokens } from "../../theme";

// モックデータをインポート（連絡先のデータ）
import { mockDataContacts } from "../../data/mockData";

// ヘッダーコンポーネントをインポート
import Header from "../../components/Header";

// MUIからテーマフックをインポート
import { useTheme } from "@mui/material";

// Contactsコンポーネントの定義
const Contacts = () => {
  // MUIテーマを使用
  const theme = useTheme();
  // カスタムテーマから色を取得
  const colors = tokens(theme.palette.mode);

  // カラムの設定
  const columns = [
    // 各カラムの定義（ID, 登録ID, 名前, 年齢, 電話番号, メールアドレス, 住所, 市, 郵便番号）
    // ...（カラム設定の詳細）    
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];
 // コンポーネントのレンダリング
  return (
    <Box m="20px">
      {/* ヘッダーコンポーネント */}
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        {/* データグリッドの実装 */}
        <DataGrid
          rows={mockDataContacts}// 表示する行（データ）
          columns={columns}// カラムの設定
          components={{ Toolbar: GridToolbar }} // ツールバーの設定
        />
      </Box>
    </Box>
  );
};

export default Contacts;// コンポーネントのエクスポート
