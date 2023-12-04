// NivoライブラリからResponsivePie（レスポンシブな円グラフコンポーネント）をインポート
import { ResponsivePie } from "@nivo/pie";
// アプリケーションのカスタムテーマ設定をインポート
import { tokens } from "../theme";
// MUI（Material-UI）からテーマフックをインポート
import { useTheme } from "@mui/material";
// モックデータをインポート（円グラフに表示するデータ）
import { mockPieData as data } from "../data/mockData";

// PieChartコンポーネントの定義
const PieChart = () => {
  // MUIテーマを使用
  const theme = useTheme();
  // カスタムテーマから色を取得
  const colors = tokens(theme.palette.mode);

  // レスポンシブ円グラフコンポーネントのレンダリング
  return (
    <ResponsivePie
      data={data} // 表示するデータ
      theme={{
        // グラフのテーマ設定
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100], // 軸の線の色設定
            },
          },
          legend: {
            text: {
              fill: colors.grey[100], // 凡例テキストの色
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100], // 目盛りの線の色
              strokeWidth: 1, // 線の太さ
            },
            text: {
              fill: colors.grey[100], // 目盛りテキストの色
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100], // 凡例テキストの色
          },
        },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }} // グラフのマージン設定
      innerRadius={0.5} // 内側の半径（ドーナツチャートのように中央を空ける）
      padAngle={0.7} // 各セグメントの間のパディング
      cornerRadius={3} // セグメントの角の丸み
      activeOuterRadiusOffset={8} // アクティブなセグメントの外側半径のオフセット
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]], // 境界線の色
      }}
      arcLinkLabelsSkipAngle={10} // リンクラベルを表示しない最小角度
      arcLinkLabelsTextColor={colors.grey[100]} // リンクラベルのテキスト色
      arcLinkLabelsThickness={2} // リンクラベルの太さ
      arcLinkLabelsColor={{ from: "color" }} // リンクラベルの色
      enableArcLabels={false} // 円弧のラベルを非表示
      arcLabelsRadiusOffset={0.4} // 円弧のラベルの半径オフセット
      arcLabelsSkipAngle={7} // 円弧のラベルを表示しない最小角度
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]], // 円弧のラベルのテキスト色
      }}
      defs={[
        // グラフの背景パターン定義
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        // 凡例の設定
        {
          anchor: "bottom", // 凡例のアンカー位置
          direction: "row", // 凡例の方向
          justify: false,
          translateX: 0, // X軸方向の凡例の位置
          translateY: 56, // Y軸方向の凡例の位置
          itemsSpacing: 0, // アイテム間のスペース
          itemWidth: 100, // アイテムの幅
          itemHeight: 18, // アイテムの高さ
          itemTextColor: "#999", // アイテムテキストの色
          itemDirection: "left-to-right", // アイテムの方向
          itemOpacity: 1, // アイテムの不透明度
          symbolSize: 18, // シンボルのサイズ
          symbolShape: "circle", // シンボルの形状
          effects: [
            // ホバー効果
            {
              on: "hover",
              style: {
                itemTextColor: "#000", // ホバー時のテキスト色
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart; // コンポーネントのエクスポート

