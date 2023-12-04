// MUI（Material-UI）からテーマフックをインポート
import { useTheme } from "@mui/material";
// NivoライブラリからResponsiveChoropleth（レスポンシブ対応の地理図コンポーネント）をインポート
import { ResponsiveChoropleth } from "@nivo/geo";
// 地理的特徴（地図データ）をインポート
import { geoFeatures } from "../data/mockGeoFeatures";
// アプリケーションのカスタムテーマ設定をインポート
import { tokens } from "../theme";
// モックデータをインポート（地理図に表示するデータ）
import { mockGeographyData as data } from "../data/mockData";

// GeographyChartコンポーネントの定義。オプショナルな`isDashboard`プロパティを受け取る
const GeographyChart = ({ isDashboard = false }) => {
  // MUIテーマを使用
  const theme = useTheme();
  // カスタムテーマから色を取得
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveChoropleth
      data={data} // 表示するデータ
      theme={{
        // グラフのテーマ設定
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],// 軸の線の色設定
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],// 凡例テキストの色
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],// 目盛りの線の色
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],// 目盛りテキストの色
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],// 凡例テキストの色
          },
        },
      }}
      features={geoFeatures.features} // 地理的特徴データ（地図の形状）
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }} // グラフのマージン設定
      domain={[0, 1000000]} // データの値の範囲
      unknownColor="#666666" // 未知の領域の色
      label="properties.name" // 各地域のラベル指定
      valueFormat=".2s" // 値のフォーマット指定
      projectionScale={isDashboard ? 40 : 150} // 地図のスケール（ダッシュボードモードによって異なる）
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]} // 地図の位置調整
      projectionRotation={[0, 0, 0]} // 地図の回転設定
      borderWidth={1.5} // 境界線の幅
      borderColor="#ffffff" // 境界線の色
      legends={
        !isDashboard
          ? [
            // ダッシュボードモードでない場合の凡例設定
              {
                anchor: "bottom-left", // 凡例のアンカー位置
                direction: "column", // 凡例の方向
                justify: true,
                translateX: 20, // X軸方向の凡例の位置
                translateY: -100, // Y軸方向の凡例の位置
                itemsSpacing: 0, // アイテム間のスペース
                itemWidth: 94, // アイテムの幅
                itemHeight: 18, // アイテムの高さ
                itemDirection: "left-to-right", // アイテムの方向
                itemTextColor: colors.grey[100], // アイテムテキストの色
                itemOpacity: 0.85, // アイテムの不透明度
                symbolSize: 18, // シンボルのサイズ
                effects: [
                  // ホバー効果
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff", // ホバー時のテキスト色
                      itemOpacity: 1, // ホバー時の不透明度
                    },
                  },
                ],
              },
            ]
            : undefined // ダッシュボードモードの場合は凡例を非表示
      }
    />
  );
};

export default GeographyChart; // コンポーネントのエクスポート
