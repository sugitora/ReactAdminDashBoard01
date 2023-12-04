// MUI（Material-UI）から必要なコンポーネントをインポート
import { Box, Button, TextField } from "@mui/material";

// Formikライブラリをインポート（フォーム管理用）
import { Formik } from "formik";

// Yupライブラリをインポート（入力検証用）
import * as yup from "yup";

// メディアクエリフックをインポート（レスポンシブデザイン用）
import useMediaQuery from "@mui/material/useMediaQuery";

// ヘッダーコンポーネントをインポート
import Header from "../../components/Header";

// アプリケーションのカスタムテーマ設定をインポート
import { tokens } from "../../theme";

// Formコンポーネントの定義
const Form = () => {
  // レスポンシブデザインのためのメディアクエリ
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // フォーム送信時の処理
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  // コンポーネントのレンダリング
  return (
    <Box m="20px">
       {/* ヘッダーコンポーネント */}
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
       {/* Formikコンポーネントでフォーム管理 */}  
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
        {/* フォームのフィールド定義 */}
        {/* ...（フォームフィールドの詳細） */}
      </Formik>
    </Box>
  );
};
// 電話番号の正規表現
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
// フォームの入力検証スキーマ（Yupライブラリ使用）
const checkoutSchema = yup.object().shape({
  // 各フィールドの検証ルール
  // ...（検証ルールの詳細）
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
// フォームの初期値
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form; // コンポーネントのエクスポート


