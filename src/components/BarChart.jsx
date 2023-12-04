// MUI（Material-UI）からテーマフックをインポート
import { useTheme } from "@mui/material";
// NivoライブラリからResponsiveBar（レスポンシブ対応の棒グラフコンポーネント）をインポート
import { ResponsiveBar } from "@nivo/bar";
// アプリケーションのカスタムテーマ設定をインポート
import { tokens } from "../theme";
// モックデータをインポート（棒グラフに表示するデータ）
import { mockBarData as data } from "../data/mockData";

// BarChartコンポーネントの定義。オプショナルな`isDashboard`プロパティを受け取る
const BarChart = ({ isDashboard = false }) => {
  // MUIテーマを使用
  const theme = useTheme();
   // カスタムテーマから色を取得
   const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data} // 表示するデータ
      theme={{
        // グラフのテーマ設定
        // added
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
              strokeWidth: 1,// 線の太さ
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
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}// 各棒グラフのキー
      indexBy="country"// X軸のインデックス
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }} // グラフのマージン設定
      padding={0.3} // 棒グラフ間のパディング
      valueScale={{ type: "linear" }} // Y軸のスケール設定
      indexScale={{ type: "band", round: true }} // X軸のスケール設定
      colors={{ scheme: "nivo" }} // カラースキーム
      defs={[
        // グラフの背景パターン定義
        // 点のパターン
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        // 線のパターン
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],// 境界線の色
      }}
      axisTop={null} // 上部の軸を非表示
      axisRight={null} // 右側の軸を非表示
      axisBottom={{
        // 下部の軸の設定
        tickSize: 5, // 目盛りのサイズ
        tickPadding: 5, // 目盛りのパディング
        tickRotation: 0, // 目盛りの回転
        legend: isDashboard ? undefined : "country", // changed
        // ダッシュボードモードでなければ国の凡例を表示
        legendPosition: "middle",// 凡例の位置
        legendOffset: 32,// 凡例のオフセット
      }}
      axisLeft={{
        // 左側の軸の設定
        tickSize: 5, // 目盛りのサイズ
        tickPadding: 5, // 目盛りのパディング
        tickRotation: 0, // 目盛りの回転
        legend: isDashboard ? undefined : "food", // ダッシュボードモードでなければ食品の凡例を表示
        legendPosition: "middle", // 凡例の位置
        legendOffset: -40, // 凡例のオフセット
      }}
      enableLabel={false} // ラベルを非表示
      labelSkipWidth={12} // ラベルの幅スキップ
      labelSkipHeight={12} // ラベルの高さスキップ
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]], // ラベルのテキスト色
      }}
      legends={[
        // 凡例の設定
        {
          dataFrom: "keys", // 凡例のデータソース
          anchor: "bottom-right", // 凡例のアンカー位置
          direction: "column", // 凡例の方向
          justify: false,
          translateX: 120, // X軸方向の凡例の位置
          translateY: 0, // Y軸方向の凡例の位置
          itemsSpacing: 2, // アイテム間のスペース
          itemWidth: 100, // アイテムの幅
          itemHeight: 20, // アイテムの高さ
          itemDirection: "left-to-right", // アイテムの方向
          itemOpacity: 0.85, // アイテムの不透明度
          symbolSize: 20, // シンボルのサイズ
          effects: [
            // ホバー効果
            {
              on: "hover",
              style: {
                itemOpacity: 1, // ホバー時の不透明度
              },
            },
          ],
        },
      ]}
      role="application" // アクセシビリティロール
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }} // アクセシビリティラベル
    />
  );
};

export default BarChart; // コンポーネントのエクスポート
