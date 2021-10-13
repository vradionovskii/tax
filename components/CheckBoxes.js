import { Fragment } from "react";
import Checkbox from "./Checkbox";

export default function CheckBoxes({ salary }) {
  const numbersWithAltPretext = [2, 6, 7, 8];

  const yearlyDeduction = salary * 12 * 0.13;
  let maxTotalDeduction = 260000;
  const years = [];
  const numberOfYears = Math.ceil(maxTotalDeduction / yearlyDeduction);

  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "decimal",
    currency: "RUB",
  });

  for (let i = 0; i < numberOfYears; i++) {
    if (maxTotalDeduction >= yearlyDeduction) {
      maxTotalDeduction = maxTotalDeduction - yearlyDeduction;
      years.push(formatter.format(yearlyDeduction));
    } else if (maxTotalDeduction >= 0) {
      years.push(formatter.format(maxTotalDeduction));
    }
  }
  return (
    <div className="pb-4 text-sm">
      <p className="font-medium">Итого можете внести в качестве досрочных:</p>
      {years.map((tax, i) => (
        <Fragment key={i}>
          <div className="flex items-center py-4">
            <Checkbox id={i} />
            <label className="cursor-pointer" htmlFor={i}>
              {tax}
              {" рублей"}
              {numbersWithAltPretext.includes(i + (1 % 10)) ? (
                <span className="text-text-gray">{` в${i === 1 ? "о" : ""} ${
                  i + 1
                }-ой год`}</span>
              ) : (
                <span className="text-text-gray">{` в ${i + 1}-${
                  i === 2 ? "и" : "ы"
                }й год`}</span>
              )}
            </label>
          </div>
          <hr className="border-[#DFE3E6] w-full" />
        </Fragment>
      ))}
    </div>
  );
}
