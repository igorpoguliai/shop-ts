const API_BASE = "http://gloria.rdport.net:28041/";

export async function getRequest() {
  const response = await fetch(`${API_BASE}ViaGloria/hs/dropship/items`, {
    headers: {
      Authorization: "Basic QWRtaW5pc3RyYXRvcjp3d3cxMjM=",
    },
  });

  return await response.json();
}
