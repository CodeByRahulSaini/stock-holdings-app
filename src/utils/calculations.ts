import { IHolding } from "../types/common";

export const calculateIndividualPnL = (userHoldings: IHolding[]) => {
  return userHoldings?.map((holding) => {
    const currentValue = holding.ltp * holding.quantity;
    const investmentValue = holding.avgPrice * holding.quantity;
    return {
      ...holding,
      currentValue,
      investmentValue,
      pnl: currentValue - investmentValue,
    };
  });
};

export const calculateTotalHoldings = (userHoldings: IHolding[]) => {
  // Current value total = sum of all the Current values
  const totalCurrentValue = userHoldings?.reduce(
    (acc, holding) => holding.currentValue + acc,
    0
  );

  // Total investment = sum of all the Investment values
  const totalInvestement = userHoldings?.reduce(
    (acc, holding) => holding.investmentValue + acc,
    0
  );
  // Total PNL = Current value total - Total Investment
  const totalPnL = totalCurrentValue - totalInvestement;

  // Today’s PNL = sum of ((Close - LTP ) * quantity) of all the holdings
  const todayPnl = userHoldings?.reduce(
    (acc, holding) => (holding.close - holding.ltp) * holding.quantity + acc,
    0
  );

  return { totalCurrentValue, totalInvestement, totalPnL, todayPnl };
};
