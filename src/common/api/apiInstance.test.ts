import { describe, test, expect, vi } from 'vitest';

import { APIError } from './apiErrors';
import { fetchData } from './apiInstance';

describe('fetchData tests', () => {
  test('fetchData returns expected result when promised is resolved', async () => {
    // ApiCall mocked
    const mockApiCall = vi.fn().mockResolvedValue('lalala');

    // Mocked apicall used with fetchData
    const result = await fetchData(mockApiCall);

    expect(result).toBe('lalala');
    expect(mockApiCall).toHaveBeenCalled();
  });

  test('fetchData throws APIError when promise returns error', async () => {
    const mockApiCall = vi.fn().mockRejectedValue('oupsie');
    await expect(fetchData(mockApiCall)).rejects.toThrow(APIError);
  });
});
