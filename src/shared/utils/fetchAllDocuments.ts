export async function fetchAllDocuments<Response, Params>(
  request: Function,
  params: Params,
  allDocs: Response[] = [],
  page: number = 0
) {
  const response = await request({ limit: 10, page, ...params });
  allDocs.push(...response.data);

  if (response.totalItems > allDocs.length) {
    await fetchAllDocuments(request, params, allDocs, page + 1);
  }

  return allDocs;
}
