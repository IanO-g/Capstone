package data;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.math.BigDecimal;

@Repository
public class PortfolioJdbcTemplateRepository implements PortfolioRepository {

    private final JdbcTemplate jdbcTemplate;

    public PortfolioJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public BigDecimal getPortfolioValue(int userId) {
        final String sql = "select sum(value) from item " +
                "join collection c on item.collection_id = c.collection_id " +
                "where c.user_id = ?";
        BigDecimal result = jdbcTemplate.queryForObject(sql, BigDecimal.class, userId);
        return result != null ? result : BigDecimal.ZERO;
    }
}