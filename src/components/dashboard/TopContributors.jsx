import { BarChart } from "@mui/x-charts/BarChart";
import { useState } from "react";
import { BsTranslate } from "react-icons/bs";

const TopContributors = () => {
  const [dimension, setDimension] = useState(() => window.innerWidth);
  return (
    <div className="bg-white-linear rounded-4 shadow-sm py-3 d-flex flex-column align-items-center justify-content-center mb-3">
      <BarChart
        yAxis={[{ label: "Tasks Completed" }]}
        xAxis={[
          {
            scaleType: "band",
            data: [
              "Rael",
              "Sanny",
              "Renz",
              "Cokyjenny",
              "Michaela",
              "Mherafe",
              "Junly",
            ],
            categoryGapRatio: 0.5,
            colorMap: {
              type: "ordinal",
              colors: ["#555291", "#fcb315"],
            },
          },
        ]}
        series={[{ data: [23, 12, 11, 10, 10, 9, 3] }]}
        barLabel={(item, context) => {
          if ((item.value ?? 0) > 100) {
            return "High";
          }
          return context.bar.height < 60 ? null : item.value?.toString();
        }}
        grid={{ horizontal: true }}
        width={700}
        height={300}
        borderRadius={4}
      />
      <p className="fs-6 text-muted w-100 text-center fw-semibold">
        Top 5 Contributors
      </p>
    </div>
  );
};

export default TopContributors;
