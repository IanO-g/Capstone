package collections.data;

import collections.models.Collection;
import collections.models.CollectionItem;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CollectionItemJdbcTemplateRepository implements CollectionItemRepository{

    private final JdbcTemplate jdbcTemplate;

    public CollectionItemJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public boolean add(CollectionItem collectionItem) {
        return false;
    }

    @Override
    public boolean update(Collection collection) {
        return false;
    }

    @Override
    public boolean delete(int collectionId, int itemId) {
        return false;
    }
}
