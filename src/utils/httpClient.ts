const BASE_URL = `api`;

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getData<T>(url: string): Promise<T> {
  await delay(300);
  const response = await fetch(BASE_URL + url);
  if (!response.ok) {
    throw new Error(`${response.status} ${await response.text()}`);
  }
  return response.json();
}
