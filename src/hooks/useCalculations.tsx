import { useMemo } from "react";

import { IHolding } from "../types/common";
import { calculations } from "../utils";

const useCalculations = ({ holdings }: { holdings: IHolding[] }) => {
  const updatedHoldings = useMemo(
    () => calculations.calculateIndividualPnL(holdings),
    [holdings]
  );
  const calculateTotals = useMemo(
    () => calculations.calculateTotalHoldings(updatedHoldings),
    [updatedHoldings]
  );

  return { ...calculateTotals, updatedHoldings };
};

export default useCalculations;
