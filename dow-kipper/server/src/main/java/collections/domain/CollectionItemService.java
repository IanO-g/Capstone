package collections.domain;

import collections.data.CollectionItemRepository;
import collections.data.CollectionRepository;
import collections.data.ItemRepository;
import collections.models.CollectionItem;
import collections.models.Item;

import java.math.BigDecimal;
import java.util.List;

public class CollectionItemService {
    private final CollectionItemRepository repository;
    private final CollectionRepository collectionRepository;
    private final ItemRepository itemRepository;

    public CollectionItemService(CollectionItemRepository repository, CollectionRepository collectionRepository, ItemRepository itemRepository) {
        this.repository = repository;
        this.collectionRepository = collectionRepository;
        this.itemRepository = itemRepository;
    }

    public BigDecimal getCollectionValue(int collectionId){
        List<CollectionItem> collectionItems = repository.getCollectionItemByCollectionId(collectionId);
        return collectionItems.stream().map(CollectionItem::getItem)
                .map(Item::getValue)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    public List<CollectionItem> getCollectionItemsByCollectionId(int collectionId){
        return repository.getCollectionItemByCollectionId(collectionId);
    }
}
