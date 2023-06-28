    package data;
    import data.mappers.UserMapper;
    import models.User;
    import org.springframework.jdbc.core.JdbcTemplate;
    import org.springframework.transaction.annotation.Transactional;

    import java.util.List;

    public class UserRepository {
        private final JdbcTemplate jdbcTemplate;

        public UserRepository(JdbcTemplate jdbcTemplate) {
            this.jdbcTemplate = jdbcTemplate;
        }

        public List<User> findAll() {
            final String sql = "select id, name, email from user;";
            return jdbcTemplate.query(sql, new UserMapper());
        }

        public User findById(long userId) {
            final String sql = "select id, name, email from user where id = ?;";
            User result = jdbcTemplate.query(sql, new UserMapper(), userId).stream().findAny().orElse(null);
            return result;
        }

        public User add(User user) {
            final String sql = "insert into user (name, email) values (?,?);";
            return jdbcTemplate.update(sql, user.getName(), user.getEmail());
        }

        public boolean update(User user) {
            final String sql = "update user set name = ?, email = ? where id = ?;";
            return jdbcTemplate.update(sql, user.getName(), user.getEmail(), user.getId()) > 0;
        }

        @Transactional
        public boolean deleteById(long userId) {
            return jdbcTemplate.update("delete from user where id = ?", userId) > 0;
        }
    }
