
import models.Item;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@Service
public class FetchService {

    private RestTemplate restTemplate;
    private final String token = "0ed6fa9c6ab7bb46cb3304b030b13255919e8c59";

    public FetchService() {
        this.restTemplate = new RestTemplate();
    }

    public Map fetchSpecificItemById(String id) {
        String url = String.format("https://www.sportscardspro.com/api/product?t=%s&id=%s", token, id);
        ResponseEntity<Map> response = restTemplate.getForEntity(url, Map.class);
        return response.getBody();
    }

    public List<Map> fetchItemsByKeywords(String keywords) {
        String url = String.format("https://www.pricecharting.com/api/products?t=%s&q=%s", token, keywords);
        ResponseEntity<List> response = restTemplate.getForEntity(url, List.class);
        return response.getBody();
    }

    public List<Map> fetchItemSoldHistory(String id) {
        String url = String.format("https://www.pricecharting.com/api/offers?t=%s&id=%s&status=sold", token, id);
        ResponseEntity<List> response = restTemplate.getForEntity(url, List.class);
        return response.getBody();
    }

    //may need a method here to get detailed item information
    //thinking of parsing information when user clicks a result from fetch by keyword
    //id is parsed into both fetch item by id and fetch item sold history
    //this way a page is created with much of the information we can retrieve from the api(s)
}
