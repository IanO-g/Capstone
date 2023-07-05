const API_URL = 'http://localhost:8080/api/item';

enum Grade {
    UNGRADED = 0,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    NINEFIVE = 9.5,
    TEN = 10
}

interface SportsCard {
  id: number;
  name: string;
  value: number;
  grade: Grade;
}

interface Init {
  method: string;
  headers: {
    'Content-Type'?: string;
    'Accept': string;
    'Authorization': string;
  },
  body?: string;
}

export async function findAllSportsCards(): Promise<SportsCard[]> {
  const response = await fetch('API_URL/collection');
  if (response.status === 200) {
    return response.json();
  }
  return [];
}

export async function findSportsCardById(id: number): Promise<SportsCard | string> {
  const response = await fetch(`${API_URL}/collection/${id}`);
  if (response.status === 200) {
    return response.json();
  } else {
    return Promise.reject(`Sports card: ${id} was not found.`);
  }
}

export async function createSportsCard(sportsCard: SportsCard): Promise<SportsCard | string | any> {

  const init: Init = makeSportsCardInit('POST', sportsCard);
  const response = await fetch(API_URL, init);

  if (response.status === 201) {
    return response.json();
  } else if (response.status === 403) {
    return Promise.reject('Unauthorized');
  } else {
    const errors = await response.json();
    return Promise.reject(errors);
  }
}

export async function updateSportsCard(sportsCard: SportsCard): Promise<SportsCard | string | any> {

  const init: Init = makeSportsCardInit('PUT', sportsCard);
  const response = await fetch(`${API_URL}/collection/${sportsCard.id}`, init);

  if (response.status === 404) {
    return Promise.reject(`Sports card: ${sportsCard.id} was not found.`);
  } else if (response.status === 400) {
    const errors = await response.json();
    return Promise.reject(errors);
  } else if (response.status === 409) {
    return Promise.reject('Error');
  } else if (response.status === 403) {
    return Promise.reject('Unauthorized');
  }
}

function makeSportsCardInit(method: string, sportsCard: SportsCard): Init {
  const jwtToken = localStorage.getItem('jwt_token');

  const init: Init = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${jwtToken}`
    },
    body: JSON.stringify(sportsCard)
  };

  return init;
}

export async function deleteSportsCardById(id: number): Promise<string> {
    const jwtToken = localStorage.getItem('jwt_token');
    const init: Init = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
      },
    }
    const response = await fetch(`${API_URL}/collection/${id}`, init);
  
    if (response.status === 404) {
      return Promise.reject(`Sports Card: ${id} was not found.`);
    } else if (response.status === 403) {
      return Promise.reject('Unauthorized');
    } else if (response.ok) {
      return 'Deletion successful';
    } else {
      return Promise.reject('An unknown error occurred');
    }
  }
  
