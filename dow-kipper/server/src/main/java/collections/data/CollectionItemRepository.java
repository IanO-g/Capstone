package collections.data;

import collections.models.Collection;
import collections.models.CollectionItem;

public interface CollectionItemRepository {

    boolean add(CollectionItem collectionItem);

    boolean update(Collection collection);

    boolean delete(int collectionId, int itemId);
}
