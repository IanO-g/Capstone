package domain;

import data.ItemRepository;
import models.Item;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class ItemService {
    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> findAllByCollectionId(int collectionId) {
        return itemRepository.findAllByCollectionId(collectionId);
    }

    public Item findById(int itemId) {
        return itemRepository.findById(itemId);
    }

    public Result<Item> addItem(Item item) {
        Result<Item> result = validate(item);
        if (!result.isSuccess()) {
            return result;
        }

        if (item.getId() != 0) {
            result.addMessage("ItemId cannot be set for `add` operation", ResultType.INVALID);
            return result;
        }

        item = itemRepository.addItem(item);
        result.setPayload(item);
        return result;
    }

    public Result<Item> updateItem(Item item) {
        Result<Item> result = validate(item);
        if (!result.isSuccess()) {
            return result;
        }

        if (item.getId() <= 0) {
            result.addMessage("ItemId must be set for `update` operation", ResultType.INVALID);
            return result;
        }

        if (!itemRepository.updateItem(item)) {
            String msg = String.format("ItemId: %s, not found", item.getId());
            result.addMessage(msg, ResultType.NOT_FOUND);
        }

        return result;
    }

    public boolean deleteItem(int itemId) {
        return itemRepository.deleteItem(itemId);
    }

    private Result<Item> validate(Item item) {
        Result<Item> result = new Result<>();
        if (item == null) {
            result.addMessage("Item cannot be null", ResultType.INVALID);
            return result;
        }

        if (item.getName() == null || item.getName().trim().isEmpty()) {
            result.addMessage("Name is required", ResultType.INVALID);
        }

        if (item.getPrice().compareTo(BigDecimal.ZERO) < 0) {
            result.addMessage("Price cannot be negative", ResultType.INVALID);
        }

        if (item.getCollection() == null || item.getCollection().getId() == 0) {
            result.addMessage("Valid collection is required for item", ResultType.INVALID);
        }

        return result;
    }
}
