const API = "http://localhost:8080/piramides";

export async function obtenerPiramides() {
  const response = await fetch(API);
  return await response.json();
}

export async function subirPiramide(piramide) {
  try {
    const response = await fetch(API, {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json;",
      }),
      body: JSON.stringify(piramide),
    });
    const body = await response.json();
    console.log({ response, body });
  } catch (error) {
    console.log({ error });
  }
}
