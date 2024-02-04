import { useMemo } from "react";

import { IHolding } from "../types/common";
import {
  calculateIndividualPnL,
  calculateTotalHoldings,
} from "../utils/calculations";

const useCalculations = ({ holdings }: { holdings: IHolding[] }) => {
  const updatedHoldings = useMemo(
    () => calculateIndividualPnL(holdings),
    [holdings]
  );
  const calculateTotals = useMemo(
    () => calculateTotalHoldings(updatedHoldings),
    [updatedHoldings]
  );

  return { ...calculateTotals, updatedHoldings };
};

export default useCalculations;
