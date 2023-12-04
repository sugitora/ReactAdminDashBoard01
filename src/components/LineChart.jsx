// NivoライブラリからResponsiveLine（レスポンシブな折れ線グラフコンポーネント）をインポート
import { ResponsiveLine } from "@nivo/line";
// MUI（Material-UI）からテーマフックをインポート
import { useTheme } from "@mui/material";
// アプリケーションのカスタムテーマ設定をインポート
import { tokens } from "../theme";
// モックデータをインポート（折れ線グラフに表示するデータ）
import { mockLineData as data } from "../data/mockData";
// LineChartコンポーネントの定義。プロパティとしてカスタムカラーオプションとダッシュボードモードフラグを受け取る
const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  // MUIテーマを使用
  const theme = useTheme();
  // カスタムテーマから色を取得
  const colors = tokens(theme.palette.mode);

  // レスポンシブ折れ線グラフコンポーネントのレンダリング
  return (
    <ResponsiveLine
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
        tooltip: {
          container: {
            color: colors.primary[500], // ツールチップのテキスト色
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // ダッシュボードモード時の色の設定
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }} // グラフのマージン設定
      xScale={{ type: "point" }} // X軸のスケール設定
      yScale={{
        // Y軸のスケール設定
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f" // Y軸のフォーマット
      curve="catmullRom" // カーブのタイプ
      axisTop={null} // 上部の軸を非表示
      axisRight={null} // 右側の軸を非表示
      axisBottom={{
        // 下部の軸の設定
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation", // ダッシュボードモードでなければ軸の凡例を表示
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        // 左側の軸の設定
        orient: "left",
        tickValues: 5, // 目盛りの値の数
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count", // ダッシュボードモードでなければ軸の凡例を表示
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false} // X軸のグリッドを非表示
      enableGridY={false} // Y軸のグリッドを非表示
      pointSize={8} // データポイントのサイズ
      pointColor={{ theme: "background" }} // データポイントの色
      pointBorderWidth={2} // データポイントの境界線の幅
      pointBorderColor={{ from: "serieColor" }} // データポイントの境界線の色
      pointLabelYOffset={-12} // データポイントのラベルのYオフセット
      useMesh={true} // グラフのメッシュ使用
      legends={[
        // 凡例の設定
        {
          anchor: "bottom-right", // 凡例のアンカー位置
          direction: "column", // 凡例の方向
          justify: false,
          translateX: 100, // X軸方向の凡例の位置
          translateY: 0, // Y軸方向の凡例の位置
          itemsSpacing: 0, // アイテム間のスペース
          itemDirection: "left-to-right", // アイテムの方向
          itemWidth: 80, // アイテムの幅
          itemHeight: 20, // アイテムの高さ
          itemOpacity: 0.75, // アイテムの不透明度
          symbolSize: 12, // シンボルのサイズ
          symbolShape: "circle", // シンボルの形状
          symbolBorderColor: "rgba(0, 0, 0, .5)", // シンボルの境界線の色
          effects: [
            // ホバー効果
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)", // ホバー時の背景色
                itemOpacity: 1, // ホバー時の不透明度
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart; // コンポーネントのエクスポート

