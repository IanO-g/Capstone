import fetch from 'node-fetch';
import { Grade, Item } from '../models/models';

//API URLs
const priceChartingApiProductUrl = 'https://www.pricecharting.com/api/product';
const priceChartingApiProductsUrl = 'https://www.pricecharting.com/api/products';
const priceChartingOfferApiUrl = 'https://www.pricecharting.com/api/offers';

//API key
const apiToken = process.env.REACT_APP_API_TOKEN;;

export async function fetchItemById(itemId: string): Promise<any> {
  const response = await fetch(`${priceChartingApiProductUrl}?t=${apiToken}&id=${itemId}`);
  const data = await response.json();
  return data;
}

export async function fetchProductsByKeyword(keyword: string): Promise<any> {
  const response = await fetch(`${priceChartingApiProductsUrl}?t=${apiToken}&q=${keyword}`);
  const data = await response.json();
  return data;
}

export async function fetchSoldItems(itemId: string): Promise<any> {
  const response = await fetch(`${priceChartingOfferApiUrl}?t=${apiToken}&id=${itemId}&status=sold`);
  const data = await response.json();
  return data;
}

interface ApiResponse {
  'product-name': string;
  'manual-only-price': number | null; // 10
  'box-only-price': number | null; // 9.5
  'graded-price': number | null; // 9
  'new-price': number | null; // 8
  'cib-price': number | null; //7
  'loose-price': number | null; // ungraded
  'retail-loose-sell': number | null; // recommended sell
}

interface ArrayApiResponse {
    products: ApiResponse[];
}

export function mapApiResponseToItem(apiResponse: ApiResponse, grade:Grade): Item {
    const {
        'product-name': productName,
        'manual-only-price': tenPrice, // 10
        'box-only-price': nineFivePrice, // 9.5
        'graded-price': ninePrice, // 9
        'new-price': eightPrice, // 8
        'cib-price': sevenPrice, //7
        'loose-price': ungradedPrice, // ungraded
        'retail-loose-sell': recommendedPrice,
    } = apiResponse;

    let value: number | null = recommendedPrice; 
    switch(grade) {
        case Grade.SEVEN:
            value = sevenPrice;
            break;
        case Grade.EIGHT:
            value = eightPrice;
            break;
        case Grade.NINE:
            value = ninePrice;
            break;
        case Grade.NINEFIVE:
            value = nineFivePrice;
            break;
        case Grade.TEN:
            value = tenPrice;
            break;
        case Grade.UNGRADED:
            value = ungradedPrice;
            break;
        default:
            value = recommendedPrice;
    }
    return {
        id: 0,
        name: productName,
        value: value,
        grade: grade
    };
}

export function mapArrayApiResponse(arrayResponse: ArrayApiResponse, grade: Grade | null): Item[] {
    const { products } = arrayResponse;

    return products.map((item: ApiResponse) => {
        return mapApiResponseToItem(item, grade ?? Grade.UNGRADED);
    })
}

