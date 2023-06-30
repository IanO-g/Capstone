package data;

import java.math.BigDecimal;

public interface
PortfolioRepository {
    public BigDecimal getPortfolioValue(int userId);
}
