package data;

import data.mappers.CollectionMapper;
import models.Collection;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;
@Repository
public class CollectionJdbcTemplateRepository implements CollectionRepository {
    private final JdbcTemplate jdbcTemplate;
    private final UserRepository userRepository;

    // The UserRepository should be injected into the constructor
    // along with the JdbcTemplate.
    public CollectionJdbcTemplateRepository(JdbcTemplate jdbcTemplate, UserRepository userRepository) {
        this.jdbcTemplate = jdbcTemplate;
        this.userRepository = userRepository;
    }

    @Override
    public List<Collection> findAllByUserId(int userId) {
        final String sql = "select collection_id, user_id, name from collection where app_user_id = ?;";
        return jdbcTemplate.query(sql, new CollectionMapper(userRepository), userId);
    }

    @Override
    public Collection findById(long collectionId) {
        final String sql = "select collection_id, app_user_id, name from collection where collection_id = ?;";
        Collection result = jdbcTemplate.query(sql, new CollectionMapper(userRepository), collectionId)
                .stream()
                .findAny().orElse(null);
        return result;
    }

    @Override
    @Transactional
    public Collection addCollection(Collection collection) {
        final String sql = "insert into collection (app_user_id, `name`, `value`) VALUES (?, ?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update( connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                    ps.setInt(1, collection.getUser().getId());
                    ps.setString(2, collection.getName());
                    ps.setBigDecimal(3, collection.getValue());
                    return ps;
                    },keyHolder);

        if(rowsAffected <= 0){
            return null;
        }

        collection.setId(keyHolder.getKey().intValue());
        return collection;
    }

    @Override
    public boolean updateCollection(Collection collection) {
        final String sql = "update collection set "
                + "app_user_id = ?, "
                + "name = ? "
                + "where collection_id = ?";

        return jdbcTemplate.update(sql, collection.getUser().getId(), collection.getName(), collection.getId()) > 0;
    }

    @Override
    public boolean deleteCollection(int collectionId) {
        final String sql = "delete from collection where collection_id = ?";
        return jdbcTemplate.update(sql, collectionId) > 0;
    }
}