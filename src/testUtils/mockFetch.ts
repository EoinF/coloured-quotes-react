export const mockFetch = (responseJson: Object) => {
  const mockObject = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(responseJson),
    } as Response)
  );
  global.fetch = mockObject;
  return mockObject;
};
