package controllers;

import controllers.ErrorResponse;
import domain.ItemService;
import domain.Result;
import models.Item;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("/api/item")
public class ItemController {

    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    //find all items associated with collection ID
    @GetMapping("/collection/{collectionId}")
    public List<Item> findAllByCollectionId(@PathVariable int collectionId) {
        return itemService.findAllByCollectionId(collectionId);
    }

    //find item by item ID
    @GetMapping("/{itemId}")
    public ResponseEntity<Item> findById(@PathVariable int itemId) {
        Item item = itemService.findById(itemId);
        if (item == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(item);
    }

    //add item
    @PostMapping
    public ResponseEntity<Object> addItem(@RequestBody Item item) {
        Result<Item> result = itemService.addItem(item);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    //update item
    @PutMapping("/{itemId}")
    public ResponseEntity<Object> updateItem(@PathVariable int itemId, @RequestBody Item item) {
        if (itemId != item.getId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Result<Item> result = itemService.updateItem(item);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return ErrorResponse.build(result);
    }

    //delete item
    @DeleteMapping("/{itemId}")
    public ResponseEntity<Void> deleteItem(@PathVariable int itemId) {
        if (itemService.deleteItem(itemId)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
